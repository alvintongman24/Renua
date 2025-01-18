/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { wordSpacing: {
      tight: '-0.05em',
      normal: '0em',
      wide: '0.05em',
      wider: '0.1em',
      widest: '0.25em',
    }},
  },
  plugins: [],
}

