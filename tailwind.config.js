/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}", "./index.html"],
  theme: {
    container: {
      padding: '2rem'
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),require("daisyui")],
};
