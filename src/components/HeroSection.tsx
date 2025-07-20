import React, { useState, useEffect } from 'react';
import { Award, Shield, Star, Play } from 'lucide-react';
import { COLORS } from '../utilities/colors';

interface HeroSectionProps {
  setShowBookingModal?: (show: boolean) => void;
  scrollToSection?: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  setShowBookingModal = () => { },
  scrollToSection = () => { }
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">

      <img src="https://cdn.prod.website-files.com/64aa1514fb7bf4cdf7d8ca29/64aaf845262edc3f5419ec9b_logo-large-watermark.svg" loading="lazy" alt="" className="absolute inset-0 bg-cover bg-center bg-no-repeat" />

      <section id="home" className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-5">
          <div className="flex flex-col items-center justify-center min-h-screen text-center">

            <div className={`space-y-6 mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className={`bg-gradient-to-r ${COLORS.text.accent} bg-clip-text text-transparent block animate-fade-in`}>
                    Adept Medical Care
                  </span>
                  <span className={`${COLORS.text.primary} text-2xl sm:text-3xl md:text-4xl font-bold mt-2 block animate-fade-in`}
                    style={{ animationDelay: '0.2s' }}>
                    Tailored to Your Needs
                  </span>
                </h1>

                <p className={`text-lg sm:text-xl ${COLORS.text.secondary} leading-relaxed max-w-2xl mx-auto animate-fade-in`}
                  style={{ animationDelay: '0.4s' }}>
                  Welcome to Dr. Farah Dawood’s Medical Practice – a space where expert internal medicine meets compassionate care.
                  Our mission is to provide holistic, evidence-based medical care tailored to your individual needs.
                </p>
              </div>
            </div>

            <div className={`space-y-6 mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.3s' }}>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {[
                  { icon: Award, text: "MBChB Cum Laude", color: "amber" },
                  { icon: Shield, text: "Occupational Health", color: "emerald" },
                  { icon: Star, text: "10+ Years Experience", color: "amber" }
                ].map((credential, index) => (
                  <div key={index}
                    className={`flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${credential.color === 'amber' ? 'border-amber-100' : 'border-emerald-100'} transform hover:scale-105 animate-slide-up`}
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                    <credential.icon className={`w-5 h-5 ${credential.color === 'amber' ? COLORS.elements.amber : COLORS.elements.emerald}`} />
                    <span className={`font-semibold ${COLORS.text.tertiary} text-sm sm:text-base`}>
                      {credential.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '0.6s' }}>

              <button
                onClick={() => setShowBookingModal(true)}
                className={`group relative bg-gradient-to-r ${COLORS.background.profileCard} ${COLORS.text.white} p-2 py-3 sm:py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 overflow-hidden w-full sm:flex-1 animate-bounce-in`}
                style={{ animationDelay: '1.2s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-xs sm:text-base">Book Appointment</span>
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className={`group border-2 border-emerald-600 ${COLORS.elements.emerald} px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden w-full sm:flex-1 animate-bounce-in`}
                style={{ animationDelay: '1.4s' }}>
                <div className="absolute inset-0 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <Play className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10 text-sm sm:text-base">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    // </div >
  );
};

export default HeroSection;