/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff88',
        secondary: '#0a0a0a',
      },
      fontFamily: {
        heading: ['"Londrina Solid"', 'cursive'],
        body: ['"DM Sans"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
