import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../utilities/colors";
import Footer from "../components/Footer";

type BookingLayoutProps = {
  children: React.ReactNode;
};

const BookingLayout: React.FC<BookingLayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-emerald-50/30 to-amber-50/20 font-lato">
        {/* NAVBAR */}
        <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
                isScrolled
                    ? "bg-beige/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3 lg:py-4">
              {/* LOGO + TITLE */}
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div
                    className={`px-2 py-1 bg-gradient-to-r ${COLORS.background.profileCard} rounded-xl shadow-lg`}
                >
                  <img
                      src="/icon.png"
                      alt="icon"
                      className="w-6 h-8 lg:w-8 lg:h-10"
                  />
                </div>

                <div>
                  <h1
                      className={`text-lg lg:text-xl font-bold bg-gradient-to-r ${COLORS.text.accent} bg-clip-text text-transparent`}
                  >
                    Dr. Farah Dawood
                  </h1>
                  <p className={`text-xs lg:text-sm ${COLORS.text.secondary}`}>
                    Dedicated Medical Practitioner
                  </p>
                </div>
              </div>

              {/* BACK BUTTON */}
              <button
                  onClick={() => navigate("/")}
                  className={`block bg-gradient-to-r ${COLORS.background.profileCard} ${COLORS.text.white} px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm lg:text-base`}
              >
                Back to Home
              </button>
            </div>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-100 via-beige to-emerald-100 pt-10">
          <img
              src="https://cdn.prod.website-files.com/64aa1514fb7bf4cdf7d8ca29/64aaf845262edc3f5419ec9b_logo-large-watermark.svg"
              loading="lazy"
              alt=""
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          />

          {children}
        </div>

        <Footer />
      </div>
  );
};

export default BookingLayout;
