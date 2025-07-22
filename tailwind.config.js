import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
        playfair: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-slower': 'spin 40s linear infinite',
        'spin-slowest': 'spin 50s linear infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      colors: {
        beige: '#FFF8E7',
      },
    },
  },
  plugins: [],
};
