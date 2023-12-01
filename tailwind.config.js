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
        hover: "#0073e5",
        silver: "#CCCCCC",
        tint: "#dcedff",
        yellow: "#f5f502",
      },
      textColor: {
        blue: "#003366",
        hover: "#0073e5",
        silver: "#CCCCCC",
        tint: "#dcedff",
        yellow: "#f5f502",
      },
    },
  },
  plugins: [],
};
