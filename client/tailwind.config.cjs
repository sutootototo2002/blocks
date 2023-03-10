/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      screens: {
        mf: "990px",
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }