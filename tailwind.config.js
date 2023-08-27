/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

