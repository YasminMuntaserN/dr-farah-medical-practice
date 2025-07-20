import { useState, useEffect, useRef } from 'react';
import { Stethoscope, Heart, Shield, Users, CheckCircle, Star } from 'lucide-react';
import { COLORS } from '../utilities/colors';

const services = [
  {
    title: "General Internal Medicine",
    description: "Comprehensive health assessments with a holistic approach to your wellbeing",
    icon: Stethoscope,
    gradient: COLORS.serviceIcons.sage,
    services: ["Comprehensive Health Assessments", "Holistic Diagnostic Evaluations", "Preventative Care"],
    bgPattern: "radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)"
  },
  {
    title: "Chronic Disease Management",
    description: "Compassionate, sustainable care for long-term health conditions",
    icon: Heart,
    gradient: COLORS.serviceIcons.forest,
    services: ["Diabetes Care & Education", "Hypertension Management", "Thyroid Health Optimization"],
    bgPattern: "radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)"
  },
  {
    title: "Autoimmune Wellness",
    description: "Specialized care for autoimmune conditions",
    icon: Shield,
    gradient: COLORS.serviceIcons.earth,
    services: ["Rheumatoid Arthritis Care", "Lupus Management", "Anti-inflammatory Protocols"],
    bgPattern: "radial-gradient(circle at 60% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)"
  },
  {
    title: "Infectious Disease Care",
    description: "Expert treatment with a focus on immune system strengthening",
    icon: Users,
    gradient: COLORS.serviceIcons.moss,
    services: ["HIV Comprehensive Care", "Infection Prevention", "Immune System Support"],
    bgPattern: "radial-gradient(circle at 80% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 30% 30%, rgba(129, 140, 248, 0.1) 0%, transparent 50%)"
  },
  {
    title: "Advanced Diagnostics",
    description: "State-of-the-art testing in a calm, healing environment",
    icon: CheckCircle,
    gradient: COLORS.serviceIcons.gold,
    services: ["ECG & Cardiac Assessment", "Comprehensive Blood Analysis", "Specialized Diagnostic Workups"],
    bgPattern: "radial-gradient(circle at 40% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)"
  },
  {
    title: "Preventive Wellness",
    description: "Proactive healthcare focused on natural prevention and vitality",
    icon: Star,
    gradient: COLORS.serviceIcons.clay,
    services: ["Wellness Screenings", "Nutritional Counseling", "Lifestyle Medicine"],
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(34, 197, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)"
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);
  const autoLoopRef = useRef(null);

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

  // Auto-loop through services
  useEffect(() => {
    if (!isUserInteracting) {
      autoLoopRef.current = setInterval(() => {
        setActiveService((prev) => (prev + 1) % services.length);
      }, 4000);
    }

    return () => {
      if (autoLoopRef.current) {
        clearInterval(autoLoopRef.current);
      }
    };
  }, [isUserInteracting]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % medicalOfficeImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleServiceClick = (index) => {
    setActiveService(index);
    setIsUserInteracting(true);

    setTimeout(() => {
      setIsUserInteracting(false);
    }, 10000);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-emerald-100">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
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

                <div className="grid grid-cols-1 sm:grid-cols-2">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative cursor-pointer transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                  onClick={() => handleServiceClick(index)}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div
                    className="relative p-8 rounded-3xl backdrop-blur-sm border border-white/20 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%), ${service.bgPattern}`
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
                    </div>

                    <div className="relative flex justify-center mb-6">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 relative group-hover:animate-bounce">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:rotate-6`}>
                        </div>
                        <div className={`absolute inset-0 bg-gradient-to-tl ${service.gradient} rounded-2xl opacity-50 transform rotate-3 group-hover:rotate-12 transition-all duration-500`}>
                        </div>

                        <div className="relative w-full h-full flex items-center justify-center z-10">
                          <service.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white transition-all duration-300 group-hover:scale-110 drop-shadow-lg" />
                        </div>

                        <div className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <div className={`w-full h-full rounded-2xl bg-gradient-to-r ${service.gradient} opacity-30 animate-ping`}></div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 text-center">
                      <h4 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                        {service.title}
                      </h4>

                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6 px-2 group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {service.services.map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center justify-center space-x-3 text-xs lg:text-sm text-gray-600 transform transition-all duration-300 ${hoveredService === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-80'}`}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 group-hover:text-emerald-600 transition-colors duration-300" />
                            <span className="group-hover:font-medium transition-all duration-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;