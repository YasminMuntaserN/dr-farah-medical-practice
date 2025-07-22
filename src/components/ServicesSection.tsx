import { useState, useEffect, useRef } from 'react';
import { Heart, Shield, Users, CheckCircle, Star, ArrowRight, Eye } from 'lucide-react';
import { COLORS } from '../utilities/colors';
import ShowToggle from '../ui/ShowToggle';

const services = [
  {
    title: "General Internal Medicine",
    description: "Comprehensive health assessments with a holistic approach to your wellbeing",
    gradient: COLORS.serviceIcons.sage,
    services: ["Comprehensive Health Assessments", "Holistic Diagnostic Evaluations", "Preventative Care"],
    image: './services/1.jpg'
  },
  {
    title: "Chronic Disease Management",
    description: "Compassionate, sustainable care for long-term health conditions",
    gradient: COLORS.serviceIcons.forest,
    services: ["Diabetes Care & Education", "Hypertension Management", "Thyroid Health Optimization"],
    image: './services/2.jpg'
  },
  {
    title: "Autoimmune Wellness",
    description: "Specialized care for autoimmune conditions",
    gradient: COLORS.serviceIcons.earth,
    services: ["Rheumatoid Arthritis Care", "Lupus Management", "Anti-inflammatory Protocols"],
    image: './services/3.jpg'
  },
  {
    title: "Infectious Disease Care",
    description: "Expert treatment with a focus on immune system strengthening",
    gradient: COLORS.serviceIcons.moss,
    services: ["HIV Comprehensive Care", "Infection Prevention", "Immune System Support"],
    image: './services/4.jpg'
  },
  {
    title: "Advanced Diagnostics",
    description: "State-of-the-art testing in a calm, healing environment",
    gradient: COLORS.serviceIcons.gold,
    services: ["ECG & Cardiac Assessment", "Comprehensive Blood Analysis", "Specialized Diagnostic Workups"],
    image: './services/5.jpeg'
  },
  {
    title: "Preventive Wellness",
    description: "Proactive healthcare focused on natural prevention and vitality",
    gradient: COLORS.serviceIcons.clay,
    services: ["Wellness Screenings", "Nutritional Counseling", "Lifestyle Medicine"],
    image: './services/6.jpeg'
  }
];

const medicalOfficeImages = [
  {
    url: "/ConsultationRoom.jpg",
    title: "Treatment Room",
    description: "Modern examination room with natural lighting and calming green tones"
  },
  {
    url: "/ModernEquipment.jpg",
    title: "Consultation Area",
    description: "Comfortable waiting area with natural elements and warm ambiance"
  }
];

const ProfessionalServicesDisplay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % medicalOfficeImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const visibleServices = showAllServices ? services : services.slice(0, 3);
  const shouldShowButton = services.length > 3;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-100 via-amber-50 to-emerald-100">
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <section
        id='services'
        ref={sectionRef}
        className="relative py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-light ${COLORS.text.primary} mb-4 lg:mb-6 leading-tight`}>
              Comprehensive{' '}
              <span className={`bg-gradient-to-r ${COLORS.text.accent} bg-clip-text text-transparent font-medium`}>
                Medical Services
              </span>
            </h2>
            <p className={`text-lg sm:text-xl ${COLORS.text.secondary} max-w-3xl mx-auto leading-relaxed font-light`}>
              Experience healthcare that honors both scientific excellence and natural healing
            </p>
          </div>

          <div className="mb-16 lg:mb-24">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                {medicalOfficeImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === activeImageIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                      }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center relative">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                ))}

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {medicalOfficeImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeImageIndex
                        ? 'bg-white shadow-lg'
                        : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                    Our Healing Environment
                  </h3>
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                    Step into our thoughtfully designed medical spaces where modern healthcare meets natural tranquility. Every detail has been carefully curated to promote healing and wellness.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Heart, title: "Calming Atmosphere" },
                    { icon: Shield, title: "State-of-the-Art" },
                    { icon: Users, title: "Patient-Centered" },
                    { icon: Star, title: "Holistic Design" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white/60 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mt-2 text-sm">{feature.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16 lg:mb-20">
            <div className={`text-center mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Our Medical Services</h3>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Comprehensive healthcare services designed to support your wellness journey with expertise and compassion.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="hidden lg:contents">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    service={service}
                    index={index}
                    isVisible={isVisible}
                    setHoveredService={setHoveredService}
                    hoveredService={hoveredService}
                  />
                ))}
              </div>

              {/* Mobile: Show limited services with toggle */}
              <div className="lg:hidden contents">
                {visibleServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    service={service}
                    index={index}
                    isVisible={isVisible}
                    setHoveredService={setHoveredService}
                    hoveredService={hoveredService}
                  />
                ))}
              </div>
            </div>

            {shouldShowButton && (
              <div className="lg:hidden text-center pt-12">
                <ShowToggle
                  showAllServices={showAllServices}
                  toggleServices={() => setShowAllServices(!showAllServices)}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ service, index, isVisible, setHoveredService, hoveredService }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden group transform transition-all duration-700 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      style={{ transitionDelay: `${index * 150 + 400}ms` }}
      onMouseEnter={() => setHoveredService(index)}
      onMouseLeave={() => setHoveredService(null)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr]">
        <div className="relative overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-56 object-contain group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-500"></div>
        </div>

        <div className="p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center space-x-2">
              <div className={`w-1 h-6 bg-gradient-to-b ${service.gradient} rounded-full`}></div>
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-emerald-800 transition-colors duration-300">
                {service.title}
              </h3>
            </div>

            <p className="mt-2 text-gray-600 text-sm">{service.description}</p>

            <div className="flex flex-col space-y-2 mt-3">
              {service.services.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center space-x-3 text-sm text-gray-800 drop-shadow-sm transform transition-all duration-300 ${hoveredService === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-90'
                    }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-emerald-700 flex-shrink-0 group-hover:text-emerald-800 transition-colors duration-300 drop-shadow-sm" />
                  <span className="group-hover:font-semibold transition-all duration-300">{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div
          className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
        ></div>
      </div>
    </div >
  );
};


export default ProfessionalServicesDisplay;