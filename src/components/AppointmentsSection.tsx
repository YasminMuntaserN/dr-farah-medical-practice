import React from 'react';
import { Calendar, QrCode, Phone, CheckCircle } from 'lucide-react';
import { COLORS } from '../utilities/colors';

interface AppointmentsSectionProps {
  setShowBookingModal: (show: boolean) => void;
}


const AppointmentsSection: React.FC<AppointmentsSectionProps> = ({ setShowBookingModal }) => (
  <section id="appointments" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light ${COLORS.text.primary} mb-6 leading-tight`}>
          Book Your {' '}
          <span className={`bg-gradient-to-r ${COLORS.text.accent} bg-clip-text text-transparent font-medium`}>
            Appointment</span>
        </h2>
        <p className={`text-lg ${COLORS.text.secondary} max-w-2xl mx-auto`}>
          Schedule your consultation with Dr. Farah Dawood through multiple convenient booking options.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className={`bg-gradient-to-br ${COLORS.background.cardGradient2} p-6 rounded-xl border border-emerald-100`}>
            <h3 className={`text-xl font-semibold ${COLORS.text.primary} mb-4 flex items-center`}>
              <Calendar className={`w-5 h-5 ${COLORS.elements.emerald} mr-2`} />
              Consultation Hours
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-emerald-200/50">
                <span className={`${COLORS.text.tertiary}`}>Monday - Friday</span>
                <span className={`${COLORS.elements.emerald} font-medium`}>08:00 - 17:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-emerald-200/50">
                <span className={`${COLORS.text.tertiary}`}>Saturday</span>
                <span className={`${COLORS.elements.emerald} font-medium`}>09:00 - 12:00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className={`${COLORS.text.tertiary}`}>Sunday & Public Holidays</span>
                <span className={`${COLORS.elements.red} font-medium`}>Closed</span>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-br ${COLORS.background.earthCard} p-6 rounded-xl border border-stone-200`}>
            <h3 className={`text-xl font-semibold ${COLORS.text.primary} mb-4 flex items-center`}>
              <QrCode className={`w-5 h-5 ${COLORS.elements.stone} mr-2`} />
              Quick Booking
            </h3>
            <div className="text-center">
              <div className="w-24 h-24 bg-white p-3 rounded-lg shadow-sm mx-auto mb-3 border border-stone-200">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-600 rounded flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-white" />
                </div>
              </div>
              <p className={`${COLORS.text.secondary} text-sm mb-3`}>Scan to Book Your Appointment</p>
              <button
                onClick={() => setShowBookingModal(true)}
                className={`bg-gradient-to-r ${COLORS.background.profileCard} ${COLORS.text.white} px-4 py-2 rounded-lg font-medium shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200`}
              >
                Open Booking Portal
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className={`bg-gradient-to-br ${COLORS.background.cardGradient2} p-6 rounded-xl border border-emerald-100`}>
            <h3 className={`text-xl font-semibold ${COLORS.text.primary} mb-4`}>Booking Options</h3>
            <div className="space-y-3">
              <button
                onClick={() => setShowBookingModal(true)}
                className={`w-full bg-gradient-to-r ${COLORS.background.profileCard} ${COLORS.text.white} p-3 rounded-lg font-medium shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2`}
              >
                <Calendar className="w-4 h-4" />
                <span>Online Booking (Bookem)</span>
              </button>
              <a
                href="tel:+27123456789"
                className={`w-full bg-white border border-emerald-600 ${COLORS.elements.emerald} p-3 rounded-lg font-medium hover:bg-emerald-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2`}
              >
                <Phone className="w-4 h-4" />
                <span>Call: +27 123 456 789</span>
              </a>
              <a
                href="https://wa.me/27123456789"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full bg-green-600 ${COLORS.text.white} p-3 rounded-lg font-medium shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2`}
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>

          <div className={`bg-gradient-to-br ${COLORS.background.nature} p-6 rounded-xl border border-emerald-100`}>
            <h3 className={`text-lg font-semibold ${COLORS.text.primary} mb-3`}>Patient Information</h3>
            <ul className={`space-y-2 ${COLORS.text.tertiary}`}>
              <li className="flex items-start space-x-2">
                <CheckCircle className={`w-4 h-4 ${COLORS.elements.emerald} mt-0.5 flex-shrink-0`} />
                <span className="text-sm">Arrive 10 minutes early for your appointment</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className={`w-4 h-4 ${COLORS.elements.emerald} mt-0.5 flex-shrink-0`} />
                <span className="text-sm">Bring previous medical records or referrals</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className={`w-4 h-4 ${COLORS.elements.emerald} mt-0.5 flex-shrink-0`} />
                <span className="text-sm">Private rates available on request</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className={`w-4 h-4 ${COLORS.elements.emerald} mt-0.5 flex-shrink-0`} />
                <span className="text-sm">Virtual consultations available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppointmentsSection;