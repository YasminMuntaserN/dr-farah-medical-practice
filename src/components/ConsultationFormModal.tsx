import {
  Stethoscope,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
  User,
  FileText,
} from "lucide-react";
import { useState, useEffect } from "react";
import Loader from "../ui/Loader";
import { COLORS } from "../utilities/colors";

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
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 transition-all duration-300 ${isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
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
            Your consultation request has been submitted successfully. We'll get
            back to you within 24 hours.
          </p>

          <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
            <div
              className="bg-gradient-to-r from-emerald-500 to-green-500 h-1 rounded-full transition-all duration-3000 ease-out"
              style={{
                width: isOpen ? "100%" : "0%",
                animation: isOpen ? "progress 3s linear forwards" : "none",
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
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

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
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4 transition-all duration-300 ${isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
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
            There was an error submitting your request. Please check your
            internet connection and try again.
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

const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  icon: Icon,
  description,
  rows = 1,
}) => (
  <div className="space-y-2">
    <label className="block text-sm font-semibold text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <div className="absolute left-3 top-3 text-gray-400">
        <Icon className="w-5 h-5" />
      </div>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none text-sm"
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm"
        />
      )}
    </div>
    {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
  </div>
);

const ConsultationFormPage = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<IError>({
    fullName: "",
    idNumber: "",
    email: "",
    phone: "",
    reason: "",
    medicalHistory: "",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    email: "",
    phone: "",
    reason: "",
    medicalHistory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: IError = {
      fullName: "",
      idNumber: "",
      email: "",
      phone: "",
      reason: "",
      medicalHistory: "",
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.idNumber.trim()) {
      newErrors.idNumber = "ID number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.reason.trim()) {
      newErrors.reason = "Reason for consultation is required";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);

    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const response = await fetch("/api/submitForm", {
        method: "POST",
        body: form, 
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          fullName: "",
          idNumber: "",
          email: "",
          phone: "",
          reason: "",
          medicalHistory: "",
        });
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    );
  }

  if (showError) {
    return (
      <ErrorModal isOpen={showError} onClose={() => setShowError(false)} />
    );
  }

  return (
    <div className="min-h-screen">
      <div className="px-4 py-6 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-2xl mx-auto">


          <div
            className={`rounded-2xl shadow-sm border border-gray-200 overflow-hidden`}
          >
            {isLoading ? (
              <div className="p-8 sm:p-12 text-center">
                <Loader />
                <p className="text-gray-600 mt-4 text-base sm:text-lg">
                  Submitting your consultation request...
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  Please don't close or refresh this page
                </p>
              </div>
            ) : (
              <div className={`bg-gradient-to-br ${COLORS.background.cardGradient1} p-4 sm:p-6 lg:p-8`}>
                <div className="text-center mb-6 sm:mb-8 border-b-2 border-gray-400 pb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full mb-3 sm:mb-4 shadow-lg">
                    <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                    Medical Consultation
                  </h1>
                  <p className="text-sm sm:text-base text-gray-600 px-2">
                    Request a consultation with our medical professionals
                  </p>
                </div>
                <div className={`space-y-6 sm:space-y-8`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <FormField
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your complete full name"
                      required
                      icon={User}
                      rows={1}
                      description=""
                    />
                    <FormField
                      label="ID Number"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleChange}
                      placeholder="Enter your national ID number"
                      required
                      icon={User}
                      rows={1}
                      description=""
                    />
                  </div>
                  {(errors.fullName || errors.idNumber) && (
                    <div className="mt-4 space-y-1">
                      {errors.fullName && (
                        <p className="text-red-500 text-sm">
                          {errors.fullName}
                        </p>
                      )}
                      {errors.idNumber && (
                        <p className="text-red-500 text-sm">
                          {errors.idNumber}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="space-y-4 sm:space-y-6">
                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      icon={Mail}
                      description="We'll use this to send you appointment confirmations"
                    />
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 XXX XXX XXX"
                      required
                      icon={Phone}
                      description="For urgent updates about your appointment"
                    />
                  </div>
                  {(errors.email || errors.phone) && (
                    <div className="mt-4 space-y-1">
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                      {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </div>
                  )}
                  <div className="space-y-4 sm:space-y-6">
                    <FormField
                      label="Reason for Consultation"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="Briefly describe your symptoms or reason for consultation"
                      required
                      icon={Stethoscope}
                      description="Please be as specific as possible"
                    />

                    <FormField
                      label="Medical History & Additional Information"
                      name="medicalHistory"
                      type="textarea"
                      value={formData.medicalHistory}
                      onChange={handleChange}
                      placeholder="Please include:&#10;• Current medications you're taking&#10;• Known allergies&#10;• Previous medical conditions&#10;• Recent symptoms or changes in health&#10;• Any other relevant medical information"
                      rows={6}
                      icon={FileText}
                      description="This information helps our doctors provide better care (optional but recommended)"
                    />
                  </div>
                  {errors.reason && (
                    <div className="mt-4">
                      <p className="text-red-500 text-sm">{errors.reason}</p>
                    </div>
                  )}

                  <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-4 sm:p-6 text-center border border-gray-100">
                    <button
                      onClick={() => handleSubmit()}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white py-3 sm:py-4 px-6 sm:px-12 rounded-xl font-bold text-base sm:text-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      {isLoading
                        ? "Submitting Request..."
                        : "Submit Consultation Request"}
                    </button>

                    <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 space-y-2">
                      <p className="font-medium">
                        <span className="text-red-500">*</span> Required fields
                      </p>
                      <p>
                        We'll review your request and respond within{" "}
                        <strong>24 hours</strong>
                      </p>
                      <p className="text-xs text-gray-500">
                        By submitting this form, you consent to us contacting
                        you regarding your consultation request
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationFormPage;

interface IError {
  fullName: string;
  idNumber: string;
  email: string;
  phone: string;
  reason: string;
  medicalHistory: string;
}
