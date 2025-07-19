import React from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  showBookingModal: boolean;
  setShowBookingModal: (show: boolean) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ showBookingModal, setShowBookingModal }) => (
  <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ${showBookingModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
    <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] relative transform transition-all duration-300 ${showBookingModal ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800">Book Your Appointment</h3>
        <button
          onClick={() => setShowBookingModal(false)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div className="h-full pb-20">
        <iframe
          src="https://bookem.com/dr-farah-dawood"
          className="w-full h-full border-0"
          title="Book Appointment with Dr. Farah Dawood"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

export default BookingModal; 