/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Quicksand', 'sans-serif'],
      },
      colors: {
        primary: '#4A90E2',
        secondary: '#50C878',
        accent: '#FFD700',
      },
    },
  },
  plugins: [],
};