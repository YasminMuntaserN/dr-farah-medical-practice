import React from 'react';

interface StatsSectionProps {
  counters: {
    experience: number;
    patients: number;
    specialties: number;
  };
}

const StatsSection: React.FC<StatsSectionProps> = ({ counters }) => (
  <section id="stats" className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-600 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="group">
          <div className="text-5xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
            {counters.experience}+
          </div>
          <div className="text-emerald-100 text-lg font-medium">Years Experience</div>
        </div>
        <div className="group">
          <div className="text-5xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
            {counters.patients}+
          </div>
          <div className="text-emerald-100 text-lg font-medium">Patients Treated</div>
        </div>
        <div className="group">
          <div className="text-5xl font-bold text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
            {counters.specialties}+
          </div>
          <div className="text-emerald-100 text-lg font-medium">Medical Specialties</div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection; 