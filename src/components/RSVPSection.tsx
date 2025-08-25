import React, { useState } from 'react';
import { Heart, Users, Utensils } from 'lucide-react';

const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: '',
    dietaryRestrictions: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('RSVP submitted:', formData);
    alert('Thank you for your RSVP! We can\'t wait to celebrate with you.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-rose-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            RSVP
          </h2>
          <p className="font-montserrat text-white/90 text-lg">
            Please let us know if you'll be joining our celebration
          </p>
          <div className="w-24 h-1 bg-white mx-auto mt-4"></div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <Heart className="h-12 w-12 text-soft-rose mx-auto mb-4" fill="currentColor" />
            <h3 className="font-playfair text-2xl font-semibold text-dark-olive">
              We hope you can join us!
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-montserrat font-medium text-dark-olive mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-soft-rose focus:outline-none transition-colors font-montserrat"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block font-montserrat font-medium text-dark-olive mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-soft-rose focus:outline-none transition-colors font-montserrat"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-montserrat font-medium text-dark-olive mb-2 flex items-center">
                  <Users className="h-4 w-4 mr-2 text-soft-rose" />
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-soft-rose focus:outline-none transition-colors font-montserrat"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
              <div>
                <label className="block font-montserrat font-medium text-dark-olive mb-2">
                  Will you attend? *
                </label>
                <select
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-soft-rose focus:outline-none transition-colors font-montserrat"
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes, I'll be there!</option>
                  <option value="no">Sorry, I can't make it</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-montserrat font-medium text-dark-olive mb-2 flex items-center">
                <Utensils className="h-4 w-4 mr-2 text-soft-rose" />
                Dietary Restrictions or Allergies
              </label>
              <input
                type="text"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-soft-rose focus:outline-none transition-colors font-montserrat"
                placeholder="Please let us know of any dietary needs"
              />
            </div>

            <div>
              <label className="block font-montserrat font-medium text-dark-olive mb-2">
                Special Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-cream focus:border-soft-rose focus:outline-none transition-colors font-montserrat resize-none"
                placeholder="Share your excitement or special wishes with us!"
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-dark-olive hover:bg-muted-sage text-white font-montserrat font-semibold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send RSVP
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-8">
          <p className="font-montserrat text-white/80 text-sm">
            Please RSVP by August 15, 2024 • Questions? Contact us at hello@sarahandmichael.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;