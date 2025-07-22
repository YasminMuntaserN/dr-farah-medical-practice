import { useState } from "react";
import { ChevronsDown, ChevronsUp } from 'lucide-react';

interface ShowToggleProps {
  showAllServices: boolean;
  toggleServices: () => void;
  isAnimating?: boolean;
}

export default function ShowToggle({ showAllServices, toggleServices, isAnimating = false }: ShowToggleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={toggleServices}
      disabled={isAnimating}
      className="relative mt-10 lg:mt-10 left-1/2 transform -translate-x-1/2 text-gray-700 flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
      style={{
        animation: 'bounce 1.5s ease-in-out infinite'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-15px) translateX(-50%); }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateX(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        @keyframes slideOut {
          from { 
            opacity: 1; 
            transform: translateX(0); 
          }
          to { 
            opacity: 0; 
            transform: translateX(-10px); 
          }
        }
        
        .slide-in {
          animation: slideIn 0.2s ease-out forwards;
        }
        
        .slide-out {
          animation: slideOut 0.2s ease-out forwards;
        }
      `}</style>

      {showAllServices ? <ChevronsUp size={36} /> : <ChevronsDown size={36} />}

      {isHovered && (
        <span
          className="text-sm font-medium whitespace-nowrap slide-in"
        >
          {showAllServices ? 'Show Less' : 'Show More'}
        </span>
      )}
    </button>
  );
}