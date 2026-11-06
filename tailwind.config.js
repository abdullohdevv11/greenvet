/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  safelist: ["bg-lightBlue2"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', "system-ui", "sans-serif"],
        rounded: ['"Manrope"', "system-ui", "sans-serif"],
        oooh: ['"Oooh Baby"', "cursive"],
        poppins: ['"Manrope"', "system-ui", "sans-serif"],
        shantell: ['"Manrope"', "system-ui", "sans-serif"],
      },
      // Green Vet logo colors (names kept so components are unchanged)
      colors: {
        lightBlue: "#B9E5CB",
        lightBlue2: "#CEEDDB",
        darkBlue: "#2F3264",
        middleBlue: "#257345",
      },
    },
  },

  plugins: [],
};
