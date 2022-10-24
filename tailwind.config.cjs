/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("./src/assets/hero.jpg")',
      },
      colors: {
        primary: "rgb(13 148 136)",
      },
    },
  },
  plugins: [],
};
