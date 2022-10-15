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
        "desire": "#e13e56",
        "haze": "#F6F9F8",
        "celeste": "#bcfdf7",
        "react": "#61DAFB",
        "fastAPI": "#009688",
        "tailwind": "#38B2AC",
        "typescript": "#3178C6",
        "aws": "#232F3E",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
