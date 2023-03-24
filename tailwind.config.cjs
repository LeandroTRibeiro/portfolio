/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat']
      },
      screens: {
        'laptop': {'max': '1024px'},
        'tablet': {'max': '768px'},
        'mobileGG': { 'max': '535px' },
        'mobileG': { 'max': '425px' },
        'mobileM': { 'max': '350px' }
      }
    },
  },
  plugins: [],
}
