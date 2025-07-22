import { COLORS } from "../utilities/colors";

export const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className={`absolute top-10 right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br ${COLORS.elements.green} rounded-full blur-3xl animate-spin-slow`}></div>
    <div className={`absolute bottom-10 left-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br ${COLORS.elements.blue} rounded-full blur-3xl animate-spin-slower`}></div>
    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-br ${COLORS.elements.orange} rounded-full blur-3xl animate-spin-slowest`}></div>
  </div>
);
