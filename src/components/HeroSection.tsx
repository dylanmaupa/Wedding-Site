import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 5,
    minutes: 5,
    seconds: 5,
  });

  useEffect(() => {
    const weddingDate = new Date('2024-09-15T16:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-cream-gradient flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-dark-olive mb-4">
            Sarah <span className="text-soft-rose">&</span> Michael
          </h1>
          <p className="font-montserrat text-xl md:text-2xl text-muted-sage font-light">
            Together forever, never apart
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 font-montserrat text-dark-olive">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-soft-rose" />
            <span className="text-lg">September 15, 2024</span>
          </div>
          <div className="hidden md:block w-2 h-2 bg-soft-rose rounded-full"></div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-soft-rose" />
            <span className="text-lg">Napa Valley, California</span>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-lg">
          <h3 className="font-playfair text-2xl md:text-3xl text-dark-olive mb-6">Counting Down to Forever</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-montserrat">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-dark-olive mb-2">
                  {item.value}
                </div>
                <div className="text-sm md:text-base text-muted-sage font-medium uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-dark-olive hover:bg-muted-sage text-white font-montserrat font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
          View Our Story
        </button>
      </div>
    </section>
  );
};

export default HeroSection;