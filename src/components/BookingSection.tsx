import { ArrowRight } from "lucide-react";
import { COLORS } from "../utilities/colors";
import { useNavigate } from "react-router-dom";

const BookingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="booking" className="relative z-10 min-h-screen ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-5">
        <div className="flex flex-col items-center justify-center min-h-screen text-center gap-10">
          <div className="flex justify-between flex-col gap-4">
            <h1
              className={`bg-gradient-to-r ${COLORS.text.accent} bg-clip-text text-transparent block animate-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`}
            >
              Book Your Appointment
            </h1>
            <button
              onClick={() => navigate('/booking-form')}
              className={`mt-4 px-4 py-2 flex items-center justify-center gap-2 text-sm font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-100/60 text-emerald-700 bg-gradient-to-br from-emerald-200 via-beige to-emerald-100 shadow-sm hover:shadow-md animate-fade-in`}
            >
              Already booked? Complete your consultation form here.
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          <div className="h-[60vh] w-3/4">
            <iframe
              src="https://bookem.com/dr-farah-dawood"
              className="w-full h-full border-0"
              title="Book Appointment with Dr. Farah Dawood"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
