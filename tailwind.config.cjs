/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#AA96DA",
        secondary: "#C5FAD5",
        tertiary: " #FFFFD2",
      },
    },
  },
  plugins: [],
};
