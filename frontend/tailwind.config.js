/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23243C",
        secondary: "#CCB1AB",
        background: "#F5EEEA",
        gold: "#ECB365",
      },
    },
    animation: {
      shine: "shine 1s",
    },
    keyframes: {
      shine: {
        "100%": { left: "125%" },
      },
    },
  },
  plugins: [],
};
