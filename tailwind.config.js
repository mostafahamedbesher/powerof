/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
    },
    screens: {
      "max-xl": { max: "1142px" }, // equivalent to max-width: 1142px
      "max-lg": { max: "1000px" }, // equivalent to max-width: 1000px
      "max-md": { max: "767px" }, // equivalent to max-width: 767px
      "max-sm": { max: "541px" }, // equivalent to max-width: 541px
      // "max-sm-l": { max: "431px" }, // equivalent to max-width: 425px
    },
  },
  plugins: [],
};
