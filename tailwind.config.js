/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#2c3e50',
        'main-color':'#1abc9c',
      },
    },
  },
  plugins: [],
}

