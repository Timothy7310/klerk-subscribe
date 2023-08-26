/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        accent: "#316FEE",
        "accent--lighter-1": "#5A8CF1",
        "accent--lighter-2": "#E6EDFF",
        secondary: "#666666",
        "secondary--lighter": "#999999",
        "bg-main": "#F5F5F8",
        good: "#00CC33",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      screens: {
        table: "481px",
      },
    },
  },
  plugins: [],
};
