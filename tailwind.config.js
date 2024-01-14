/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary: "#DB44443b 0px 2px 5px -1px, #DB44443b 0px 1px 3px -1px",
        hover: "0px 2px 8px 0px #DB44443b",
      },
      colors: {
        primary: "#DB4444",
        secondary: "#F5F5F5",
        green: "#00FF66",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "serif"],
      },
      textColor: {
        while: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
