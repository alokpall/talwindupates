const { maxWidth } = require('@mui/system');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ssm': {'max': '990px'},
        'small': {'max': '728px'},
        'stm': {'max': '1024px'},
        'desktop': {'max': '1360px'},
        'tablet':{'max':'468px'}
      }
    },
  },
  plugins: [],
}

