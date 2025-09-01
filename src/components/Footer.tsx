import React from 'react';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-olive text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-soft-rose" fill="currentColor" />
            <h3 className="font-playfair text-3xl font-bold">Maka & Kuda</h3>
            <Heart className="h-8 w-8 text-soft-rose" fill="currentColor" />
          </div>
          
          <p className="font-montserrat text-white/80 mb-6 max-w-2xl mx-auto">
            We can't wait to celebrate with you on our special day. 
            Thank you for being part of our love story!
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="bg-white/10 hover:bg-soft-rose/20 p-3 rounded-full transition-colors duration-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-soft-rose/20 p-3 rounded-full transition-colors duration-300"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="mailto:kudaandmakawedding@gmail.com" 
              className="bg-white/10 hover:bg-soft-rose/20 p-3 rounded-full transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="font-montserrat text-white/60 text-sm">
              October 25, 2025 • Shiloh Gardens, Strathaven, Harare
            </p>
            <p className="font-montserrat text-white/40 text-xs mt-2">
              Made with ❤️ for Maka & Kuda's Wedding
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;