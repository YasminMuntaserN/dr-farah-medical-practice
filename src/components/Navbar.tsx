import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COLORS } from '../utilities/colors';

interface NavbarProps {
  isScrolled: boolean;
  activeSection: string;
  setShowBookingModal: (show: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isScrolled,
  activeSection,
  setShowBookingModal,
  scrollToSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleBookingClick = () => {
    setShowBookingModal(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 lg:py-4">
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className={`px-2 py-1 bg-gradient-to-r ${COLORS.background.profileCard} rounded-xl shadow-lg`}>
              <img src="/icon.png" alt="icon" className="w-6 h-8 lg:w-8 lg:h-10" />
            </div>
            <div>
              <h1 className={`text-lg lg:text-xl font-bold bg-gradient-to-r ${COLORS.text.accent} bg-clip-text text-transparent`}>
                Dr. Farah Dawood
              </h1>
              <p className={`text-xs lg:text-sm ${COLORS.text.secondary}`}>Internal Medicine</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${activeSection === item.id
                  ? 'bg-emerald-100 text-emerald-700 shadow-md'
                  : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleBookingClick}
            className={`hidden md:block bg-gradient-to-r ${COLORS.background.profileCard} ${COLORS.text.white} px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm lg:text-base`}
          >
            Book Now
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${COLORS.elements.emerald} hover:bg-emerald-50 transition-colors duration-200`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-emerald-100 shadow-lg">
            <div className="px-2 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === item.id
                    ? 'bg-emerald-100 text-emerald-700 shadow-md'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleBookingClick}
                className={`w-full mt-4 bg-gradient-to-r ${COLORS.background.profileCard} ${COLORS.text.white} px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;