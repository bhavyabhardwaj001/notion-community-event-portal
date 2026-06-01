/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          light: '#f0f4f8',
          DEFAULT: '#3182ce',
          dark: '#2c5282',
        }
      }
    },
  },
  plugins: [],
}
