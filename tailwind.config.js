/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      colors: {
        primary: "#FFF100",
        secondary: "#542E90",
      },
    },
  },
  plugins: [],
};
