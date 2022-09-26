/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'googleRed': "#1178D7",
      'googleBlue': "#008A61",
      'googleGreen': "#F8F8F8",
      'googleYellow': "#DBDBDB",
      'textMain': "#1E1E1E",
      'textSecondary': "#777777",
    },
    fontFamily: {
      'google': ['Open-Sans','sans-serif'],
    },
    screens: {
      'small':{
        'max':'800px'
      },
      'large':{
        'min':'800px'
      }
    },
  },
  plugins: [],
}