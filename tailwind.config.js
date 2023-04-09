/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        suit: ["SUIT", "sans-serif"],
      },
      colors: {
        desire: "#e13e56",
        haze: "#F6FAFF",
        celeste: "#bcfdf7",
        turquoise: "#41C9DC",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
