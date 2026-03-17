const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Playfair Display", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        brand: {
          50:  "#fff0f6",
          100: "#ffe4f0",
          200: "#ffc9e1",
          300: "#ff9fcb",
          400: "#ff6bab",
          500: "#f53c91",
          600: "#d5237b",
          700: "#b41467",
          800: "#8e0f52",
          900: "#6c0b41",
        },
      },
      boxShadow: {
        "brand-sm":  "0 2px 8px 0 rgba(213,35,123,0.15)",
        "brand-md":  "0 4px 20px 0 rgba(213,35,123,0.25)",
        "brand-lg":  "0 8px 40px 0 rgba(213,35,123,0.30)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #f53c91 0%, #b41467 100%)",
        "hero-gradient":  "linear-gradient(135deg, #fff0f6 0%, #ffffff 50%, #fff0f6 100%)",
      },
      animation: {
        "fade-up":   "fadeUp 0.6s ease-out both",
        "fade-in":   "fadeIn 0.5s ease-out both",
        "shimmer":   "shimmer 2s infinite",
        "float":     "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
