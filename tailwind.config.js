/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        50: '#f3f4f6',
        100: '#e7e9ed',
        200: '#c7ccd6',
        300: '#a7b0bf',
        400: '#68719b',
        500: '#293777',
        600: '#25306a',
        700: '#1a224a',
        800: '#141a39',
        900: '#0f1329',
      },
    },
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
    },
    extend: {
      fontSize: {
        base: '1rem',
        h1: '.5rem',
        h2: '.5rem',
      },
    },
  },
  plugins: [],
});
