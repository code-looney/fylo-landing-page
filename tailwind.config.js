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
        'main': '#1B2330',
        'sub': '#65e2d9',
        'test': '#202a3c',
        'sec': '#0b1523',
        'intro': '#1c2431',
        'body': '#191E2A'
      }
    },
  },
  plugins: [],
}