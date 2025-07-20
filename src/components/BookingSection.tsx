import React from 'react';
import { X } from 'lucide-react';

interface BookingSectionProps {
  onClose: () => void;
}

const BookingSection: React.FC<BookingSectionProps> = ({ onClose }) => (
  <section id="booking" className="py-16 bg-white relative">
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 relative">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
        <h3 className="text-2xl font-bold text-gray-800">Book Your Appointment</h3>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div className="h-[60vh]">
        <iframe
          src="https://bookem.com/dr-farah-dawood"
          className="w-full h-full border-0"
          title="Book Appointment with Dr. Farah Dawood"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default BookingSection;