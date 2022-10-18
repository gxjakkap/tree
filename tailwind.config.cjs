/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '200px',
        'full': '1920px'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};

