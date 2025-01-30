/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        yekan: ["Yekan Bakh FaNum", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/bg-hero.svg')",
        
      },
    },
  },
  plugins: [],
};
