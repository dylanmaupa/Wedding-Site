import React, { useState } from 'react';
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

  const [guestMessages] = useState<GuestMessage[]>([
    {
      name: 'Emma & James',
      message: 'We are so happy for you both! Can\'t wait to celebrate your special day. Wishing you a lifetime of love and happiness! 💕',
      date: '2024-03-15',
    },
    {
      name: 'The Johnson Family',
      message: 'Sarah and Michael, you two are perfect for each other! We\'re thrilled to be part of your wedding celebration.',
      date: '2024-03-10',
    },
    {
      name: 'Alex & Sophie',
      message: 'From your college friends - we\'ve watched your love story unfold and it\'s been beautiful to witness. Congratulations!',
      date: '2024-03-08',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Guestbook message submitted:', formData);
    alert('Thank you for your message! It means the world to us.');
    setFormData({ name: '', message: '' });
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
                  placeholder="Share your thoughts, wishes, or favorite memory of Sarah & Michael..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-dark-olive hover:bg-muted-sage text-white font-montserrat font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
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