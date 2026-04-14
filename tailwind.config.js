/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c3d66",
        },
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)",
      },
      boxShadow: {
        glow: "0 0 30px rgba(14, 165, 233, 0.3)",
        "glow-lg": "0 0 50px rgba(14, 165, 233, 0.4)",
        card: "0 10px 30px rgba(0, 0, 0, 0.08)",
        "card-lg": "0 20px 40px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
    },
  },
  plugins: [],
};
