/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-smoke": "#F8F8F8",
        "pale-pink": "#FFDCE0",
        "text-color": "#4D4D4D",
      },
    },
  },
  plugins: [],
};
