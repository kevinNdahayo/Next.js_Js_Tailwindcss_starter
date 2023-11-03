/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        waterfall: ['Waterfall', 'cursive'],
        worksans: ['Work Sans', 'sans-serif', 'arial'],
        poppins: ['Poppins', 'sans-serif', 'arial'],
        tapestry: ['tapestry', 'sans-serif', 'arial'],
        josefinsans: ['Josefin Sans', 'sans-serif', 'arial']
      },
      colors: {
        yellowColor: ['#FFC51F']
      }
    },
  },
  plugins: [],
};
