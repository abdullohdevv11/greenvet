/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', "system-ui", "sans-serif"],
        rounded: ['"Manrope"', "system-ui", "sans-serif"],
        poppins: ['"Manrope"', "system-ui", "sans-serif"],
      },
    },
  },

  plugins: [],
};
