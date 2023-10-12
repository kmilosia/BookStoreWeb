/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'midnight-semitransparent': 'rgba(24,24,38,0.8)',
        'midday-semitransparent': 'rgba(246,246,249,0.8)',
        midnight: {
          50: '#F6F6F9',
          100: '#EAEAEF',
          150: '#E4E4E7',
          200: '#DCDCE4',
          300: '#C0C0CF',
          400: '#9D9DB2',
          500: '#8F8EA9',
          600: '#6F6F8E',
          700: '#4A4A6A',
          750: '#33324D',
          800: '#2a2b37',
          850: '#212134',
          900: '#2F2F3B',
          950: '#181826',
        }
      }
    },
  },
  plugins: [],
}

