import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => (
  <footer id='contact' className="bg-gray-900 text-beige relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div
        className="w-full h-full bg-gradient-to-br from-emerald-600/10 to-emerald-700/5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="flex justify-center items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full">
            <img src="/icon.png" alt="icon" className="w-6 h-8 lg:w-8 lg:h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-beige">Dr. Farah Dawood</h3>
            <p className="text-emerald-200">Dedicated Medical Practitioner</p>
          </div>
        </div>

        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-8 text-gray-300">
            {[
              { name: 'Home', section: 'home' },
              { name: 'About Me', section: 'about' },
              { name: 'Services', section: 'services' },
              { name: 'Appointments', section: 'appointments' },
              { name: 'Reviews', section: 'reviews' },
              { name: 'Contact', section: 'contact' }
            ].map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.section)}
                  className="hover:text-emerald-400 transition-colors duration-300 text-sm md:text-base"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center space-x-4 mb-8">
          {[
            { icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700' },
            { icon: Instagram, color: 'bg-pink-600 hover:bg-pink-700' },
            { icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800' },
            { icon: Youtube, color: 'bg-red-600 hover:bg-red-700' }
          ].map((social, index) => (
            <button
              key={index}
              className={`p-3 rounded-full ${social.color} transition-all duration-300 transform hover:scale-110`}
            >
              <social.icon className="w-5 h-5 text-beige" />
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8 text-gray-300">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg">
              <MapPin className="w-5 h-5 text-beige" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-beige">Location</p>
              <p className="text-sm">Protea Hotel, Umhlanga</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg">
              <Phone className="w-5 h-5 text-beige" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-beige">Phone</p>
              <p className="text-sm">+27 123 456 789</p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg">
              <Mail className="w-5 h-5 text-beige" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-beige">Email</p>
              <p className="text-sm">drfarahdawood@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div className="rounded-3xl overflow-hidden h-[60vh] shadow-2xl ">
            <iframe
              title="Durban Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.045313914712!2d31.02184031531501!3d-29.85868078215384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef70a3e6cfcf9af%3A0x6a1f2760d6de2f4d!2sDurban%2C%20KwaZulu-Natal%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1690156800000!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © Dr. Farah Dawood All Rights Reserved. Designed By Yasmin Muntaser
          </p>
        </div>

      </div>
    </div>

    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-600/20 to-transparent rounded-full blur-xl"></div>
    <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-emerald-700/20 to-transparent rounded-full blur-xl"></div>
  </footer>
);

export default Footer;
