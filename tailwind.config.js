/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        righteous: ["Righteous", "sans-serif"],
      },
      backgroundColor: {
        blue: "#003366",
        silver: "#CCCCCC",
      },
    },
  },
  plugins: [],
};
