import React, { useEffect, useState } from "react";
import { Award, CheckCircle, Heart, Stethoscope } from "lucide-react";
import { COLORS } from "../utilities/colors";

const ANIMATIONS = {
  fadeInUp: "opacity-0 translate-y-8",
  fadeInLeft: "opacity-0 -translate-x-8",
  fadeInRight: "opacity-0 translate-x-8",
  visible: "opacity-100 translate-y-0 translate-x-0",
  transition: "transition-all duration-700 ease-out",
};

const AboutSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleCards, setVisibleCards] = useState({
    achievements: false,
    experience: false,
    philosophy: false,
    image: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timers = [
        setTimeout(
          () => setVisibleCards((prev) => ({ ...prev, image: true })),
          200
        ),
        setTimeout(
          () => setVisibleCards((prev) => ({ ...prev, achievements: true })),
          400
        ),
        setTimeout(
          () => setVisibleCards((prev) => ({ ...prev, experience: true })),
          600
        ),
        setTimeout(
          () => setVisibleCards((prev) => ({ ...prev, philosophy: true })),
          800
        ),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [isLoaded]);

  const Header = () => (
    <div
      className={`text-center mb-8 md:mb-16 px-4 ${ANIMATIONS.transition} ${
        isLoaded ? ANIMATIONS.visible : ANIMATIONS.fadeInUp
      }`}
    >
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light ${COLORS.text.primary} mb-6 leading-tight`}
      >
        About{" "}
        <span
          className={`bg-gradient-to-r ${COLORS.text.accent} bg-clip-text text-transparent font-medium`}
        >
          Dr. Farah Dawood
        </span>
      </h2>
    </div>
  );

  const CentralImageSection = () => (
    <div
      className={`relative hidden lg:block ${ANIMATIONS.transition} ${
        visibleCards.image ? ANIMATIONS.visible : "opacity-0 scale-95"
      }`}
    >
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-80">
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-100/40 to-teal-100/40 animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/60 to-emerald-50/60 backdrop-blur-sm"></div>
        <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
          <img
            src="/bg.jpg"
            alt="Medical care illustration"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="absolute inset-0 rounded-full backdrop-blur-[1px]"></div>
        </div>
      </div>
    </div>
  );

  const AchievementCard = () => (
    <div
      className={`${ANIMATIONS.transition} ${
        visibleCards.achievements ? ANIMATIONS.visible : ANIMATIONS.fadeInLeft
      } delay-200`}
    >
      <div
        className={`bg-gradient-to-br from-white/70 to-emerald-50/70 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-emerald-200/50`}
      >
        <h3
          className={`text-lg sm:text-xl md:text-2xl font-bold ${COLORS.text.primary} mb-4 flex items-center`}
        >
          <Award
            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${COLORS.elements.amber} mr-2 sm:mr-3`}
          />
          Professional Achievements
        </h3>
        <ul className="space-y-2 sm:space-y-3">
          <li className="flex items-start space-x-2 sm:space-x-3">
            <CheckCircle
              className={`w-4 h-4 sm:w-5 sm:h-5 ${COLORS.elements.emerald} mt-0.5 flex-shrink-0`}
            />
            <span
              className={`${COLORS.text.tertiary} text-xs sm:text-sm md:text-base`}
            >
              <strong>MBChB</strong> - Qualified Medical Doctor
            </span>
          </li>
          <li className="flex items-start space-x-2 sm:space-x-3">
            <CheckCircle
              className={`w-4 h-4 sm:w-5 sm:h-5 ${COLORS.elements.emerald} mt-0.5 flex-shrink-0`}
            />
            <span
              className={`${COLORS.text.tertiary} text-xs sm:text-sm md:text-base`}
            >
              <strong>Fellow of the College of Physicians (SA)</strong>
            </span>
          </li>
          <li className="flex items-start space-x-2 sm:space-x-3">
            <CheckCircle
              className={`w-4 h-4 sm:w-5 sm:h-5 ${COLORS.elements.emerald} mt-0.5 flex-shrink-0`}
            />
            <span
              className={`${COLORS.text.tertiary} text-xs sm:text-sm md:text-base`}
            >
              <strong>Diploma in Occupational Health</strong>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );

  const ExperienceCard = () => (
    <div
      className={` ${ANIMATIONS.transition} ${
        visibleCards.experience ? ANIMATIONS.visible : ANIMATIONS.fadeInRight
      } delay-400`}
    >
      <div
        className={`bg-gradient-to-br from-white/70 to-slate-50/70 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-slate-200/50`}
      >
        <h3
          className={`text-lg sm:text-xl md:text-2xl font-bold ${COLORS.text.primary} mb-4 flex items-center`}
        >
          <Heart
            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${COLORS.elements.red} mr-2 sm:mr-3`}
          />
          Professional Experience
        </h3>
        <div className="space-y-3 sm:space-y-4">
          <div>
            <h4
              className={`font-semibold ${COLORS.text.primary} text-xs sm:text-sm md:text-base`}
            >
              Hospital Experience
            </h4>
            <p
              className={`${COLORS.text.secondary} text-xs sm:text-sm md:text-base`}
            >
              Inkosi Albert Luthuli Central Hospital, Grey's Hospital, and other
              leading medical institutions
            </p>
          </div>
          <div>
            <h4
              className={`font-semibold ${COLORS.text.primary} text-xs sm:text-sm md:text-base`}
            >
              Subspecialty Experience
            </h4>
            <p
              className={`${COLORS.text.secondary} text-xs sm:text-sm md:text-base`}
            >
              She has worked in various subspecialty departments including
              Cardiology, Pulmonology, Nephrology, Gastroenterology,
              Endocrinology, Haematology, Neurology, Geriatrics and Infectious
              Diseases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const PhilosophyCard = () => (
    <div
      className={`${ANIMATIONS.transition} ${
        visibleCards.philosophy ? ANIMATIONS.visible : ANIMATIONS.fadeInUp
      } delay-600`}
    >
      <div
        className={`bg-gradient-to-br ${COLORS.background.profileCard} backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl ${COLORS.text.white} transform hover:scale-105 transition-all duration-300 border border-emerald-500/20`}
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
          Practice Philosophy
        </h3>
        <blockquote className="text-sm sm:text-base md:text-lg leading-relaxed italic mb-4 sm:mb-6">
          "My approach to medicine centers on comprehensive care that treats not
          just symptoms, but the whole person. Every patient deserves
          personalized attention, thorough evaluation, and a treatment plan
          tailored to their unique needs."
        </blockquote>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Stethoscope className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-amber-100" />
          </div>
          <div>
            <div className="font-semibold text-sm sm:text-base md:text-lg">
              Dr. Farah Dawood
            </div>
            <div
              className={`${COLORS.text.light} text-xs sm:text-sm md:text-base`}
            >
              MBChB (Cum Laude), FCP(SA), Dip. Occ Health
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen relative overflow-hidden bg-beige font-lato`}>
      <section id="about" className="py-8 sm:py-12 md:py-16 relative z-10">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-10">
          <div className="hidden lg:block">
            <div className="relative flex items-center justify-center min-h-[700px]">
              <div className="absolute z-10">
                <CentralImageSection />
              </div>

              <div className="absolute -top-10 left-0 z-0 w-72 md:w-80 xl:w-[600px] ">
                <ExperienceCard />
              </div>

              <div className="absolute top-10 -right-28 w-72 md:w-80 xl:w-[600px] z-0">
                <PhilosophyCard />
              </div>

              <div className="absolute bottom-20 left-20  z-0">
                <AchievementCard />
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Layout - stacked cards without image */}
          <div className="lg:hidden">
            <div className="flex flex-col items-center space-y-6 sm:space-y-8 w-full">
              <AchievementCard />
              <ExperienceCard />
              <PhilosophyCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
