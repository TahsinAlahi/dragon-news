/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ["Kaushan Script", "roboto"],
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
