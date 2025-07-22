import { FileText, X, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Loader from "../ui/Loader";

const SuccessModal = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen && !showModal) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-500 ${isOpen
          ? "scale-100 opacity-100 translate-y-0 rotate-0"
          : "scale-75 opacity-0 translate-y-8 rotate-3"
          }`}
      >
        <div className="text-center">
          <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Request Submitted!
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Your consultation request has been submitted successfully. We'll get back to you within 24 hours.
          </p>

          <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
            <div
              className="bg-gradient-to-r from-emerald-500 to-green-500 h-1 rounded-full transition-all duration-3000 ease-out"
              style={{
                width: isOpen ? '100%' : '0%',
                animation: isOpen ? 'progress 3s linear forwards' : 'none'
              }}
            ></div>
          </div>

          <button
            onClick={onClose}
            className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-200 transform hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

// Error Modal Component
const ErrorModal = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !showModal) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-500 ${isOpen
          ? "scale-100 opacity-100 translate-y-0"
          : "scale-75 opacity-0 translate-y-8"
          }`}
      >
        <div className="text-center">
          <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <AlertCircle className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Oops! Something went wrong
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            There was an error submitting your request. Please check your internet connection and try again.
          </p>

          <div className="flex gap-3 justify-center">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
              }}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConsultationFormModal = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.target);
      const response = await fetch('https://formspree.io/f/mzzvepny', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowSuccess(true);
        e.target.reset();
        onClose();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setShowError(true);
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !showModal) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          className={`font-lato bg-gradient-to-br from-slate-50 via-amber-50 to-emerald-50 rounded-2xl w-full max-w-2xl shadow-2xl transform transition-all duration-300 relative ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-5"
            }`}
        >
          <button
            onClick={onClose}
            className="absolute top-0 lg:top-4 right-0 lg:right-4 p-2 hover:bg-white/20 rounded-full transition-all duration-200 hover:rotate-90"
          >
            <X className="w-6 h-6" />
          </button>

          {isLoading ? (
            <Loader />
          ) : (
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-emerald-700 flex items-center justify-center gap-3">
                    <FileText className="w-10 h-10 -mt-5 lg:mt-0 lg:w-8 lg:h-8" />
                    Medical Consultation Request
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="w-full p-3 border-2 border-emerald-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 bg-white/80"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                      ID Number *
                    </label>
                    <input
                      type="text"
                      name="idNumber"
                      required
                      className="w-full p-3 border-2 border-emerald-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 bg-white/80"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-3 border-2 border-emerald-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 bg-white/80"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full p-3 border-2 border-emerald-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 bg-white/80"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                    Reason for Consultation *
                  </label>
                  <input
                    type="text"
                    name="reason"
                    required
                    placeholder="Please describe the reason for your consultation..."
                    className="w-full p-3 border-2 border-emerald-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 bg-white/80"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                    Medical History
                  </label>
                  <textarea
                    name="medicalHistory"
                    rows={4}
                    className="w-full p-3 border-2 border-emerald-200 rounded-lg focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 bg-white/80 resize-vertical"
                    placeholder="Please describe your medical history, current medications, allergies, and any relevant health information..."
                  />
                </div>

                <div className="flex gap-4 pt-4 justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-200 text-gray-700 p-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {isLoading ? 'Submitting...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

      <ErrorModal
        isOpen={showError}
        onClose={() => setShowError(false)}
      />
    </>
  );
};

export default ConsultationFormModal;