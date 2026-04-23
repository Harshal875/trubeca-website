import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#0F2B46",
          950: "#0a1f33",
        },
        brand: {
          50: "#e8f1fb",
          100: "#d1e3f7",
          200: "#a3c7ef",
          300: "#75abe7",
          400: "#478fdf",
          500: "#1A73E8",
          600: "#155cba",
          700: "#10458b",
          800: "#0a2e5d",
          900: "#05172e",
        },
        trust: {
          green: "#16A34A",
          orange: "#EA580C",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "hero": ["3rem", { lineHeight: "1.15", fontWeight: "700" }],
        "page-title": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "section": ["2rem", { lineHeight: "1.25", fontWeight: "600" }],
        "card-title": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "400" }],
      },
      maxWidth: {
        "container": "1200px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.3s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
