/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'az': "url('../public/images/arizona_bg.jpg')",
      'or': "url('../public/images/bend_bg.jpeg')",
      'sd': "url('../public/images/sandiego_bg.jpeg')",

    },

    extend: {
      fontFamily: {
        labelle: ['LaBelle', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}