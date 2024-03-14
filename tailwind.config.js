/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      screens: {
        'sm': '290px',
      },
      colors: {
        'main': '#181f2a',
        'sub': '#65e2d9',
        'test': '#202a3c',
        'sec': '#0b1523',
        'intro': '#1c2431'
      }
    },
  },
  plugins: [],
}