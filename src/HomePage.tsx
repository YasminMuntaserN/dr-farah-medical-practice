import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import AppointmentsSection from './components/AppointmentsSection';
import Footer from './components/Footer';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'appointments', 'reviews', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-emerald-50/30 to-amber-50/20 font-lato">
      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AppointmentsSection />
      <ReviewsSection />
      <Footer />

      <style>{`
              @keyframes spin-slow {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              @keyframes spin-slower {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(-360deg); }
              }
              @keyframes spin-slowest {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }

              .animate-spin-slow {
                animation: spin-slow 30s linear infinite;
              }
              .animate-spin-slower {
                animation: spin-slower 40s linear infinite;
              }
              .animate-spin-slowest {
                animation: spin-slowest 50s linear infinite;
              }
            `}</style>
    </div>
  );
};

export default HomePage;