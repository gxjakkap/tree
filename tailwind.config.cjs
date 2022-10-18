module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
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
