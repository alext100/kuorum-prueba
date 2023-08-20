/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "--color-ap-fields-enabled": "#E0E0E0",
        "--color-ap-bg-neutral-90": "#FCFCFC",
        "--color-ap-bg-white": "#fff",
        "--color-brand-bluetiful-bluetiful-95": "#EDF2FC",
        "--color-ap-text-bluetiful": "#4d7ae3",
        "--color-ap-link-enabled": "#4d7ae3",
        "--color-ap-text-neutral-20": "#2C2C2C",
        "--color-ap-text-neutral-40": "#575757",
        "--color-ap-text-neutral-50": "#838383",
        "--color-ap-button-primary-outline-enabled": "#4D7AE3",
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
