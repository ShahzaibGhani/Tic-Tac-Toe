/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'row': 'w-32 border border-black justify-center flex',
      fontFamily:{
        skranji: ['Skranji', 'sans' ],
        martian: ['Martian Mono', 'sans']
      }
    },
  },
  plugins: [],
});

