/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E2E2E',  // Charcoal
        accent: '#0284C7',   // Blue-600
        background: '#FFFFFF', // White
        text: '#333333',     // Dark Gray
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};