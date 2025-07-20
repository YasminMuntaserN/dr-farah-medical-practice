import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { COLORS } from '../utilities/colors';

const reviewsData = [
  {
    rating: 5,
    text: "I would like to sincerely thank Dr.F Dawood for her exceptional service, compassion, and care. Her warm and understanding approach made a world of difference during a very difficult time. She not only provided outstanding medical support but also showed genuine empathy and kindness that brought comfort and reassurance to my entire family. We are truly grateful for her dedication and the gentle way she treats her patients.",
    author: "Faiza D.",
    category: "General Care"
  },
  {
    rating: 5,
    text: "I've been managing my diabetes under Dr. Dawood's care for over 3 years now. Her knowledge and dedication have helped me stabilize my condition and improve my overall health. The holistic focus she brings makes all the difference.",
    author: "James T.",
    category: "Chronic Disease Management"
  },
  {
    rating: 5,
    text: "Dr. Farah is an exceptional physician who truly cares about her patients. Her thorough assessments and compassionate approach made me feel heard and well cared for. I highly recommend her to anyone seeking personalized and expert medical care.",
    author: "Linda K.",
    category: "Internal Medicine"
  },
  {
    rating: 5,
    text: "I had a complex autoimmune issue that other doctors struggled to diagnose. Dr. Dawood's detailed approach and deep knowledge helped identify the problem and create a personalized treatment plan. I am very grateful for her care.",
    author: "Mohammed A.",
    category: "Autoimmune Care"
  },
  {
    rating: 4.5,
    text: "I appreciate Dr. Farah's clear explanations and focus on preventative medicine. Her advice on lifestyle changes and natural healing methods alongside modern diagnostics has improved my wellbeing significantly.",
    author: "Thandi P.",
    category: "Preventive Medicine"
  },
  {
    rating: 5,
    text: "Highly professional and kind. The online booking was easy, and virtual consultations worked well for my busy schedule. Dr. Dawood's patient-centered care and follow-up made me feel truly supported.",
    author: "Rachel W.",
    category: "Virtual Care"
  }
];
const ReviewsSection = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef(null);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
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
      setActiveReview((prev) => (prev + 1) % reviewsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-green-400 text-green-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-green-400 text-green-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
      );
    }

    return stars;
  };

  const averageRating = reviewsData.reduce((sum, review) => sum + review.rating, 0) / reviewsData.length;

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-emerald-100">
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <section
        ref={sectionRef}
        id='reviews'
        className="relative py-12 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light ${COLORS.text.primary} mb-3 sm:mb-4 lg:mb-6 leading-tight px-4`}>
              Patient{' '}
              <span className={`bg-gradient-to-r ${COLORS.text.accent} bg-clip-text text-transparent font-medium`}>
                Success Stories
              </span>
            </h2>
            <p className={`text-base sm:text-lg lg:text-xl ${COLORS.text.secondary} max-w-3xl mx-auto leading-relaxed font-light px-4`}>
              Discover how our compassionate care transforms lives through healing and wellness
            </p>
          </div>

          <div className="md:hidden">
            <div className="relative w-full max-w-sm mx-auto">
              <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 ${activeReview === 0 ? 'ring-2 ring-green-400/50' : ''
                }`}>
                <div className={`absolute inset-0 transition-all duration-700 rounded-2xl ${activeReview === 0
                  ? 'bg-gradient-to-br from-green-50/80 to-emerald-50/60 group-hover:from-green-50/60 to-emerald-50/40'
                  : 'bg-gradient-to-br from-emerald-50/60 to-emerald-100/30 group-hover:from-emerald-50/40 to-emerald-100/20'
                  }`} />

                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ${activeReview === 0
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                      }`}>
                      <Quote className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <div className="flex justify-center items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      {renderStars(reviewsData[activeReview].rating)}
                    </div>
                    <span className="font-semibold text-gray-700 text-sm">
                      {reviewsData[activeReview].rating}/5
                    </span>
                  </div>

                  <blockquote className="text-gray-700 leading-relaxed text-center mb-6 font-light italic text-sm">
                    "{reviewsData[activeReview].text}"
                  </blockquote>

                  <div className="text-center border-t pt-4">
                    <p className="font-semibold text-gray-800 mb-1 text-sm">
                      — {reviewsData[activeReview].author}
                    </p>
                    <p className="font-medium text-xs" style={{
                      background: 'linear-gradient(to right, #10b981, #14b8a6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      {reviewsData[activeReview].category}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center group transition-all duration-300 hover:bg-emerald-50"
              >
                <ChevronLeft className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700" />
              </button>

              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center group transition-all duration-300 hover:bg-emerald-50"
              >
                <ChevronRight className="w-5 h-5 text-emerald-600 group-hover:text-emerald-700" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-8">
            <button
              onClick={prevReview}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center group transition-all duration-300 hover:bg-emerald-50 flex-shrink-0"
            >
              <ChevronLeft className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700" />
            </button>

            <div className="relative w-full max-w-4xl lg:max-w-5xl mx-4">
              <div className="flex items-stretch justify-center space-x-4 lg:space-x-6 min-h-[350px] lg:min-h-[400px]">
                {[0, 1].map((offset) => {
                  const reviewIndex = (activeReview + offset) % reviewsData.length;
                  const review = reviewsData[reviewIndex];
                  const isMainCard = offset === 0;
                  const isFirstReview = reviewIndex === 0;

                  return (
                    <div
                      key={reviewIndex}
                      className={`transition-all duration-700 ease-out flex-1 max-w-sm lg:max-w-md ${isMainCard
                        ? 'transform scale-105 z-20'
                        : 'transform scale-95 opacity-70 z-10'
                        } ${isFirstReview ? 'relative' : ''}`}
                    >
                      <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500 h-full flex flex-col ${isMainCard
                        ? 'p-6 lg:p-8 shadow-2xl'
                        : 'p-5 lg:p-6'
                        } ${isFirstReview ? 'ring-2 ring-green-400/50' : ''}`}>
                        <div className={`absolute inset-0 transition-all duration-700 rounded-2xl ${isFirstReview
                          ? 'bg-gradient-to-br from-green-50/80 to-emerald-50/60 group-hover:from-green-50/60 to-emerald-50/40'
                          : 'bg-gradient-to-br from-emerald-50/60 to-emerald-100/30 group-hover:from-emerald-50/40 to-emerald-100/20'
                          }`} />

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex justify-center mb-4">
                            <div className={`rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ${isMainCard ? 'w-14 h-14 lg:w-16 lg:h-16' : 'w-12 h-12'
                              } ${isFirstReview
                                ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                                : 'bg-gradient-to-r from-emerald-500 to-green-500'
                              }`}>
                              <Quote className={`text-white ${isMainCard ? 'w-7 h-7 lg:w-8 lg:h-8' : 'w-6 h-6'
                                }`} />
                            </div>
                          </div>

                          <div className="flex justify-center items-center space-x-2 mb-4">
                            <div className="flex items-center space-x-1">
                              {renderStars(review.rating).map((star, idx) => (
                                <div key={idx} className={isMainCard ? 'scale-110' : 'scale-100'}>
                                  {star}
                                </div>
                              ))}
                            </div>
                            <span className={`font-semibold text-gray-700 ${isMainCard ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
                              }`}>
                              {review.rating}/5
                            </span>
                          </div>

                          <blockquote className={`text-gray-700 leading-relaxed text-center mb-6 font-light italic flex-grow ${isMainCard ? 'text-base lg:text-lg' : 'text-sm lg:text-base'
                            }`}>
                            "{review.text}"
                          </blockquote>

                          <div className="text-center border-t pt-4 mt-auto">
                            <p className={`font-semibold text-gray-800 mb-1 ${isMainCard ? 'text-sm lg:text-base' : 'text-xs lg:text-sm'
                              }`}>
                              — {review.author}
                            </p>
                            <p className={`font-medium ${isMainCard ? 'text-xs lg:text-sm' : 'text-xs'
                              }`} style={{
                                background: 'linear-gradient(to right, #10b981, #14b8a6)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}>
                              {review.category}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={nextReview}
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center group transition-all duration-300 hover:bg-emerald-50 flex-shrink-0"
            >
              <ChevronRight className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700" />
            </button>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {reviewsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveReview(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === activeReview
                  ? index === 0
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg ring-2 ring-green-300/50'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg'
                  : 'bg-gray-300 hover:bg-gray-400'
                  } ${index === 0 ? 'ring-1 ring-green-400/30' : ''}`}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              className={`group border-2 border-emerald-600 ${COLORS.elements.emerald} px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm font-medium hover:bg-emerald-600 hover:text-white transition-all duration-300 relative overflow-hidden inline-block`}
            >
              <div className="absolute inset-0 bg-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10">Read Our Reviews</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ReviewsSection;