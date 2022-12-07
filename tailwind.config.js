/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', '"sans-serif"'],
      },
      colors: {
        primary: '#F97316',
        secondary: '#0f172a',
      },
    },
  },
  plugins: [require('daisyui')],
};
