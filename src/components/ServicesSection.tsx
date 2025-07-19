import { useState, useEffect, useRef } from 'react';
import { Stethoscope, Heart, Shield, Users, CheckCircle, Star, ArrowRight, Play } from 'lucide-react';
import { COLORS } from '../utilities/colors';

const services = [
  {
    title: "General Internal Medicine",
    description: "Comprehensive health assessments with a holistic approach to your wellbeing",
    icon: Stethoscope,
    gradient: COLORS.serviceIcons.sage,
    services: ["Comprehensive Health Assessments", "Holistic Diagnostic Evaluations", "Preventive Wellness Medicine"]
  },
  {
    title: "Chronic Disease Management",
    description: "Compassionate, sustainable care for long-term health conditions",
    icon: Heart,
    gradient: COLORS.serviceIcons.forest,
    services: ["Diabetes Care & Education", "Hypertension Management", "Thyroid Health Optimization"]
  },
  {
    title: "Autoimmune Wellness",
    description: "Specialized care for autoimmune conditions with natural healing support",
    icon: Shield,
    gradient: COLORS.serviceIcons.earth,
    services: ["Rheumatoid Arthritis Care", "Lupus Management", "Anti-inflammatory Protocols"]
  },
  {
    title: "Infectious Disease Care",
    description: "Expert treatment with focus on immune system strengthening",
    icon: Users,
    gradient: COLORS.serviceIcons.moss,
    services: ["HIV Comprehensive Care", "Infection Prevention", "Immune System Support"]
  },
  {
    title: "Advanced Diagnostics",
    description: "State-of-the-art testing in a calm, healing environment",
    icon: CheckCircle,
    gradient: COLORS.serviceIcons.gold,
    services: ["ECG & Cardiac Testing", "Comprehensive Blood Analysis", "Specialized Diagnostic Workups"]
  },
  {
    title: "Preventive Wellness",
    description: "Proactive healthcare focused on natural prevention and vitality",
    icon: Star,
    gradient: COLORS.serviceIcons.clay,
    services: ["Wellness Screenings", "Nutritional Counseling", "Lifestyle Medicine"]
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % medicalOfficeImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M20 20C30 10 40 15 50 20C60 25 70 15 80 20C90 25 95 35 90 45C85 55 75 50 65 55C55 60 45 65 35 55C25 45 15 35 20 20Z' fill='%23059669' opacity='0.1'/%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <section
        id='services'
        ref={sectionRef}
        className="relative py-20 min-h-screen"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-green-200/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-200/15 to-orange-200/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light ${COLORS.text.primary} mb-6 leading-tight`}>
              Comprehensive{' '}
              <span className={`bg-gradient-to-r ${COLORS.text.accent} bg-clip-text text-transparent font-medium`}>
                Medical Services
              </span>
            </h2>
            <p className={`text-xl sm:text-2xl ${COLORS.text.secondary} max-w-4xl mx-auto leading-relaxed font-light`}>
              Experience healthcare that honors both scientific excellence and natural healing
            </p>
          </div>

          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Image Gallery */}
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
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
                        className="w-full h-full transform group-hover:scale-110 transition-transform duration-700"
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

              {/* Office Features */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Our Healing Environment
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Step into our thoughtfully designed medical spaces where modern healthcare meets natural tranquility. Every detail has been carefully curated to promote healing and wellness.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: Heart, title: "Calming Atmosphere", desc: "Natural lighting and earth tones" },
                    { icon: Shield, title: "State-of-the-Art", desc: "Modern medical equipment" },
                    { icon: Users, title: "Patient-Centered", desc: "Comfortable consultation areas" },
                    { icon: Star, title: "Holistic Design", desc: "Integrating nature and wellness" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-white/60 rounded-xl">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Specialized Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Click on any service to explore detailed information about our comprehensive medical care offerings.
                </p>
              </div>
              {/* Progress Indicator */}
              <div className="flex space-x-2 mt-8">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-500 ${index === activeService
                      ? 'bg-emerald-500 w-8'
                      : 'bg-gray-300 w-2'
                      }`}
                  />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 overflow-hidden">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${index === activeService
                      ? 'opacity-100 translate-y-0 scale-100'
                      : index < activeService
                        ? 'opacity-0 -translate-y-8 scale-95'
                        : 'opacity-0 translate-y-8 scale-95'
                      }`}
                  >
                    <div className=" p-8 rounded-3xl relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 group-hover:from-emerald-50/40 group-hover:to-emerald-100/20 transition-all duration-700 rounded-3xl" />

                      <div className="relative z-10 h-full flex flex-col">
                        {/* Icon */}
                        <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <service.icon className="w-10 h-10 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                          {service.description}
                        </p>

                        <ul className="space-y-2">
                          {service.services.map((item, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;