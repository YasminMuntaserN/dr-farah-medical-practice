import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import AppointmentsSection from './components/AppointmentsSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    patients: 0,
    specialties: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'services', 'appointments', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const animateCounters = () => {
      const targets = { experience: 10, patients: 1000, specialties: 8 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setCounters({
          experience: Math.floor(targets.experience * progress),
          patients: Math.floor(targets.patients * progress),
          specialties: Math.floor(targets.specialties * progress)
        });
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, stepDuration);
    };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    });
    const statsElement = document.getElementById('stats');
    if (statsElement) observer.observe(statsElement);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-emerald-50/30 to-amber-50/20 font-lato">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber-200/20 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-stone-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navbar
        isScrolled={isScrolled}
        activeSection={activeSection}
        setShowBookingModal={setShowBookingModal}
        scrollToSection={scrollToSection}
      />
      <HeroSection
        setShowBookingModal={setShowBookingModal}
        scrollToSection={scrollToSection}
      />
      {/* <StatsSection counters={counters} /> */}
      <AboutSection />
      <ServicesSection />
      <AppointmentsSection setShowBookingModal={setShowBookingModal} />
      <Footer scrollToSection={scrollToSection} />
      <BookingModal showBookingModal={showBookingModal} setShowBookingModal={setShowBookingModal} />
      {/* Custom Styles */}
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

export default App;