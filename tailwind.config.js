/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff0f6",
          100: "#ffe4f0",
          200: "#ffc9e1",
          300: "#ff9fcb",
          400: "#ff6bab",
          500: "#f53c91",
          600: "#d5237b",
          700: "#b41467",
          800: "#8e0f52",
          900: "#6c0b41"
        }
      }
    }
  },
  plugins: []
}
