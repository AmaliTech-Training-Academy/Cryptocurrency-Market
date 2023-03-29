/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "profile": "url('./src/assets/Profile-picture.png')",
      },
    },
  },
  plugins: [],
};
