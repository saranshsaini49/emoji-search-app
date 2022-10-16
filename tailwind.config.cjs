/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*{.jsx,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        "indigo-dye": "#124E78",
        "orange-yellow": "#F2BB05",
        "burnt-orange": "#D74E09",
      },
    },
  },
  plugins: [],
};
