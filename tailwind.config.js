/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "--color-ap-fields-enabled": "#E0E0E0",
        "--color-ap-bg-white": "#fff",
        "--color-brand-bluetiful-bluetiful-95": "#EDF2FC",
        "--color-ap-link-enabled": "#4d7ae3",
      },
      screens: {
        xs: "320px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
