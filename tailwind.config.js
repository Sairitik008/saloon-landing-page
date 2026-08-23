const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Cormorant Garamond", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        brand: {
          50: "#fdfbf7",
          100: "#f5f1e8", // cream text
          200: "#e8dcbe",
          300: "#dcc795",
          400: "#e4c580", // secondary gold/champagne
          500: "#c9a227", // warm gold accent
          600: "#ab871e",
          700: "#896719",
          800: "#1a1714", // dark range
          900: "#12100f", // charcoal background
        },
        blush: {
          400: "#f0c8c9",
          500: "#E8B4B8",
          600: "#cf9398",
        },
        dark: {
          100: "#2a2622",
          200: "#1a1714",
          300: "#12100f",
        },
        gold: {
          100: "#fdfbf7",
          300: "#e4c580",
          500: "#c9a227",
          700: "#ab871e",
        }
      },
      boxShadow: {
        "brand-sm": "0 2px 8px 0 rgba(201,162,39,0.15)",
        "brand-md": "0 4px 20px 0 rgba(201,162,39,0.25)",
        "brand-lg": "0 8px 40px 0 rgba(201,162,39,0.30)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #e4c580 0%, #c9a227 100%)",
        "hero-gradient": "linear-gradient(to bottom, rgba(18,16,15,0.3) 0%, rgba(18,16,15,0.9) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both",
        "shimmer": "shimmer 2s infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
