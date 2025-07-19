import React, { useEffect, useState } from 'react';
import { Award, CheckCircle, Heart, Stethoscope } from 'lucide-react';
import { COLORS } from '../utilities/colors';


const ANIMATIONS = {
  fadeInUp: 'opacity-0 translate-y-8',
  fadeInLeft: 'opacity-0 -translate-x-8',
  fadeInRight: 'opacity-0 translate-x-8',
  visible: 'opacity-100 translate-y-0 translate-x-0',
  transition: 'transition-all duration-700 ease-out'
};

const AboutSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleCards, setVisibleCards] = useState({
    achievements: false,
    experience: false,
    philosophy: false,
    image: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timers = [
        setTimeout(() => setVisibleCards(prev => ({ ...prev, achievements: true })), 200),
        setTimeout(() => setVisibleCards(prev => ({ ...prev, experience: true })), 400),
        setTimeout(() => setVisibleCards(prev => ({ ...prev, philosophy: true })), 600),
        setTimeout(() => setVisibleCards(prev => ({ ...prev, image: true })), 800)
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [isLoaded]);

  const BackgroundElements = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute top-10 right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br ${COLORS.elements.green} rounded-full blur-3xl animate-spin-slow`}></div>
      <div className={`absolute bottom-10 left-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br ${COLORS.elements.blue} rounded-full blur-3xl animate-spin-slower`}></div>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-br ${COLORS.elements.orange} rounded-full blur-3xl animate-spin-slowest`}></div>
    </div>
  );

  const Header = () => (
    <div className={`text-center mb-12 md:mb-16 ${ANIMATIONS.transition} ${isLoaded ? ANIMATIONS.visible : ANIMATIONS.fadeInUp}`}>
      <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light ${COLORS.text.primary} mb-6 leading-tight`}>
        About{' '}
        <span className={`bg-gradient-to-r ${COLORS.text.accent} bg-clip-text text-transparent font-medium`}>
          Dr. Farah Dawood</span>
      </h2>
      <p className={`text-lg md:text-xl ${COLORS.text.secondary} max-w-3xl mx-auto px-4`}>
        A dedicated internal medicine specialist committed to providing exceptional healthcare
        with a focus on comprehensive diagnosis and personalized treatment plans.
      </p>
    </div>
  );

  const AchievementCard = () => (
    <div className={`${ANIMATIONS.transition} ${visibleCards.achievements ? ANIMATIONS.visible : ANIMATIONS.fadeInLeft}`}>
      <div className={`bg-gradient-to-br ${COLORS.background.cardGradient1} p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
        <h3 className={`text-xl md:text-2xl font-bold ${COLORS.text.primary} mb-4 flex items-center`}>
          <Award className={`w-5 h-5 md:w-6 md:h-6 ${COLORS.elements.amber} mr-3`} />
          Professional Achievements
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <CheckCircle className={`w-5 h-5 ${COLORS.elements.emerald} mt-0.5 flex-shrink-0`} />
            <span className={`${COLORS.text.tertiary} text-sm md:text-base`}>
              <strong>MBChB Cum Laude</strong> - Graduated with highest honors
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className={`w-5 h-5 ${COLORS.elements.emerald} mt-0.5 flex-shrink-0`} />
            <span className={`${COLORS.text.tertiary} text-sm md:text-base`}>
              <strong>Diploma in Occupational Health</strong> - Specialized certification
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <CheckCircle className={`w-5 h-5 ${COLORS.elements.emerald} mt-0.5 flex-shrink-0`} />
            <span className={`${COLORS.text.tertiary} text-sm md:text-base`}>
              <strong>Prize for Internal Medicine</strong> - Academic excellence recognition
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  const ExperienceCard = () => (
    <div className={`${ANIMATIONS.transition} ${visibleCards.experience ? ANIMATIONS.visible : ANIMATIONS.fadeInLeft} delay-200`}>
      <div className={`bg-gradient-to-br ${COLORS.background.cardGradient2} p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
        <h3 className={`text-xl md:text-2xl font-bold ${COLORS.text.primary} mb-4 flex items-center`}>
          <Heart className={`w-5 h-5 md:w-6 md:h-6 ${COLORS.elements.red} mr-3`} />
          Professional Experience
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className={`font-semibold ${COLORS.text.primary} text-sm md:text-base`}>Hospital Experience</h4>
            <p className={`${COLORS.text.secondary} text-sm md:text-base`}>
              Inkosi Albert Luthuli Central Hospital, Grey's Hospital, and other leading medical institutions
            </p>
          </div>
          <div>
            <h4 className={`font-semibold ${COLORS.text.primary} text-sm md:text-base`}>Department Specializations</h4>
            <p className={`${COLORS.text.secondary} text-sm md:text-base`}>
              Cardiology, Pulmonology, Nephrology, Endocrinology, and General Internal Medicine
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const PhilosophyCard = () => (
    <div className={`${ANIMATIONS.transition} ${visibleCards.philosophy ? ANIMATIONS.visible : ANIMATIONS.fadeInRight} delay-400`}>
      <div className={`bg-gradient-to-br ${COLORS.background.profileCard} p-6 md:p-8 rounded-2xl shadow-2xl ${COLORS.text.white} transform hover:scale-105 transition-transform duration-300`}>
        <h3 className="text-xl md:text-2xl font-bold mb-6">Practice Philosophy</h3>
        <blockquote className="text-base md:text-lg leading-relaxed italic mb-6">
          "My approach to medicine centers on comprehensive care that treats not just symptoms,
          but the whole person. Every patient deserves personalized attention, thorough evaluation,
          and a treatment plan tailored to their unique needs."
        </blockquote>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Stethoscope className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          <div>
            <div className="font-semibold text-base md:text-lg">Dr. Farah Dawood</div>
            <div className={`${COLORS.text.light} text-sm md:text-base`}>MBChB, Dip. Occ. Health</div>
          </div>
        </div>
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className={`${ANIMATIONS.transition} ${visibleCards.image ? ANIMATIONS.visible : ANIMATIONS.fadeInRight} delay-600`}>
      <div className="relative">
        <div className="space-y-6">
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
            <div className={`absolute inset-0 bg-gradient-to-t ${COLORS.background.overlay} opacity-0 group-hover:opacity-100 transition-all duration-500 z-10`}></div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10"></div>
            <img
              src="/ProfessionalEnvironment.jpg"
              alt="Dr. Farah Dawood's Medical Practice - Professional Environment"
              className="w-full h-[200px] md:h-[300px] lg:h-[400px] transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
              <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg">
                <p className={`text-sm font-semibold ${COLORS.text.primary}`}>Professional Environment</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`absolute -top-6 -left-6 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br ${COLORS.floating.emerald} rounded-full opacity-20 animate-pulse shadow-lg`}></div>
        <div className={`absolute -bottom-6 -right-6 w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br ${COLORS.floating.amber} rounded-full opacity-20 animate-bounce shadow-lg`}></div>
        <div className={`absolute top-1/2 -right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${COLORS.floating.blue} rounded-full opacity-15 animate-pulse delay-1000 shadow-lg`}></div>

        <div className={`absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r ${COLORS.background.profileCard} rounded-full opacity-30 animate-pulse`}></div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen relative overflow-hidden bg-gradient-to-br ${COLORS.background.primary} font-lato`}>
      <BackgroundElements />

      <section id="about" className="py-12 md:py-20 relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

            <div className="space-y-6 md:space-y-8">
              <ExperienceCard />

              <div className="block">
                <PhilosophyCard />
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <AchievementCard />
              <ImageSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;