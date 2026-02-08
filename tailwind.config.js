/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["bg-lightBlue2"],

  theme: {
    extend: {
      fontFamily: {
        rounded: ['"M PLUS Rounded 1c"',"system-ui", "sans-serif"],
        oooh: ['"Oooh Baby"', "cursive"],
        poppins: ['"Poppins"', "sans-serif"],
        shantell: ['"Shantell Sans"', "cursive"],
      },
      colors: {
        lightBlue: "#A2D3FC",
        lightBlue2: "#BCDFFF",
        darkBlue: "#3B89F6",
        middleBlue: "#578AFF",
      },
    },
  },

  plugins: [],
};
