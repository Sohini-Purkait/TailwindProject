/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary' : '#ee0181',
        'sohini' : '#01ee91'
      },
      fontFamily: {
        'display' : ['Poppins', 'sans-serif'],
        'body' : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

