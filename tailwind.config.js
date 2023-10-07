const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          'Roboto',
          'sans-serif',
          ...fontFamily.sans,
        ],
      }
    },
  },
  plugins: [],
}