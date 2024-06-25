/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ed1d24",
        secondary: "#ede6e6",
        projectCard: "#292c35",
      },
    },
  },
  plugins: [],
};
