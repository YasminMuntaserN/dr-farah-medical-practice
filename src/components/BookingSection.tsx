
import React, { useState } from 'react';
import { X, FileText, ArrowLeft, ArrowRight } from 'lucide-react';
import ConsultationFormModal from './ConsultationFormModal';

interface BookingSectionProps {
  onClose: () => void;
}
const BookingSection: React.FC<BookingSectionProps> = ({ onClose }) => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  return (
    <>
      <section id="booking" className="py-16 bg-beige relative">
        <div className="max-w-4xl mx-auto bg-beige rounded-2xl shadow-2xl p-6 relative">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
            <div className='flex justify-between flex-col gap-4'>
              <h3 className="text-2xl font-bold text-gray-800">Book Your Appointment</h3>
              <button
                onClick={() => setShowConsultationForm(true)}
                className="text-emerald-600 hover:text-emerald-800 font-medium cursor-pointer flex items-center gap-1 bg-transparent p-0 border-0 shadow-none"
              >
                Already booked? Complete your consultation form here.
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
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

      <ConsultationFormModal
        isOpen={showConsultationForm}
        onClose={() => setShowConsultationForm(false)}
      />
    </>
  );
};

export default BookingSection;