import React from 'react';
import { Heart } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Our Story' },
    { id: 'details', label: 'Details' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'gallery', label: 'Gallery' },
    // { id: 'registry', label: 'Registry' },
    { id: 'guestbook', label: 'Guestbook' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-soft-rose" fill="currentColor" />
            <span className="font-playfair font-semibold text-lg text-dark-olive">S & M</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`font-montserrat font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-dark-olive border-b-2 border-soft-rose'
                    : 'text-muted-sage hover:text-dark-olive'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-dark-olive">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;