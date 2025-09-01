import React, { useState, useEffect } from 'react';
import { Send, Heart } from 'lucide-react';

interface GuestMessage {
  name: string;
  message: string;
  date: string;
}

const GuestbookSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [guestMessages, setGuestMessages] = useState<GuestMessage[]>([]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('weddingGuestMessages');
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        setGuestMessages(parsedMessages);
      } catch (error) {
        console.error('Error loading saved messages:', error);
        // Set default messages if localStorage is corrupted
        setDefaultMessages();
      }
    } else {
      // Set default messages if no saved messages exist
      setDefaultMessages();
    }
  }, []);

  const setDefaultMessages = () => {
    const defaultMessages = [
      
    ];
    setGuestMessages(defaultMessages);
    localStorage.setItem('weddingGuestMessages', JSON.stringify(defaultMessages));
  };

  // Save messages to localStorage whenever guestMessages changes
  useEffect(() => {
    if (guestMessages.length > 0) {
      localStorage.setItem('weddingGuestMessages', JSON.stringify(guestMessages));
    }
  }, [guestMessages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Create new message
    const newMessage: GuestMessage = {
      name: formData.name.trim(),
      message: formData.message.trim(),
      date: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
    };

    // Add new message to the beginning of the array
    setGuestMessages(prevMessages => {
      const updatedMessages = [newMessage, ...prevMessages];
      // Save to localStorage immediately
      localStorage.setItem('weddingGuestMessages', JSON.stringify(updatedMessages));
      return updatedMessages;
    });
    
    // Reset form
    setFormData({ name: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message briefly
    const successElement = document.createElement('div');
    successElement.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-montserrat';
    successElement.textContent = 'Thank you for your message! 💕';
    document.body.appendChild(successElement);
    
    setTimeout(() => {
      if (document.body.contains(successElement)) {
        document.body.removeChild(successElement);
      }
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-olive mb-4">
            Guestbook
          </h2>
          <p className="font-montserrat text-muted-sage text-lg">
            Leave us a message and share in our joy
          </p>
          <div className="w-24 h-1 bg-soft-rose mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Message Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-semibold text-dark-olive mb-6 text-center">
              Share Your Wishes
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-montserrat font-medium text-dark-olive mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-soft-rose focus:outline-none transition-colors font-montserrat"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block font-montserrat font-medium text-dark-olive mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-soft-rose focus:outline-none transition-colors font-montserrat resize-none"
                  placeholder="Share your thoughts, wishes, or favorite memory of Maka & Kuda..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !formData.name.trim() || !formData.message.trim()}
                className="w-full bg-dark-olive hover:bg-muted-sage disabled:bg-muted-sage/50 text-white font-montserrat font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? 'Adding Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Messages Display */}
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-semibold text-dark-olive text-center mb-8">
              Messages from Friends & Family
            </h3>
            
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {guestMessages.map((message, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-soft-rose/20 rounded-full flex items-center justify-center">
                        <Heart className="h-5 w-5 text-soft-rose" fill="currentColor" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-montserrat font-semibold text-dark-olive">
                          {message.name}
                        </h4>
                        <span className="font-montserrat text-xs text-muted-sage">
                          {new Date(message.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="font-montserrat text-muted-sage leading-relaxed">
                        {message.message}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="font-montserrat text-sm text-muted-sage">
                💕 Thank you for all your love and support! 💕
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestbookSection;