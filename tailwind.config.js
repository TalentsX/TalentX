/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        koPub: ['KoPubBatang', 'serif'],
        inriaserif: ['"Inria Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
  