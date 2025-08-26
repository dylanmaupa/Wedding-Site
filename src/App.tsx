import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventDetails from './components/EventDetails';
import RSVPSection from './components/RSVPSection';
import GallerySection from './components/GallerySection';
import RegistrySection from './components/RegistrySection';
import GuestbookSection from './components/GuestbookSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'details', 'rsvp', 'gallery', 'registry', 'guestbook'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="details">
          <EventDetails />
        </section>
        
        <section id="rsvp">
          <RSVPSection />
        </section>
        
        <section id="gallery">
          <GallerySection />
        </section>
        
        {/* <section id="registry">
          <RegistrySection />
        </section> */}
        
        <section id="guestbook">
          <GuestbookSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;