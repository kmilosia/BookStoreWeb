/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      animation: {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
        'infinite-scroll-reverse': 'infinite-scroll-reverse 60s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-reverse': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        }
      },
      colors: {
        midnight: {
          50: '#F6F6F9',
          100: '#EAEAEF',
          150: '#E4E4E7',
          200: '#DCDCE4',
          300: '#C0C0CF',
          400: '#9D9DB2',
          500: '#8F8EA9',
          600: '#6F6F8E',
          700: '#33324D',
          800: '#212134',
          900: '#1b1b2b',
          950: '#181826',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]}

