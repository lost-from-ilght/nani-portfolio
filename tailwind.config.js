/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#06070a",
          900: "#0b0c13",
          850: "#10121c",
          800: "#151825",
          750: "#1c2032",
          700: "#242a42",
        },
        cinema: {
          gold: "#f59e0b",
          amber: "#fbbf24",
          crimson: "#f43f5e",
          rose: "#e11d48",
          cyan: "#38bdf8",
          violet: "#a855f7",
        },
        brand: {
          cyan: "#38bdf8",
          violet: "#a855f7",
          indigo: "#6366f1",
          gold: "#f59e0b",
          emerald: "#10b981",
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "'DM Sans'", "sans-serif"],
        display: ["'Syne'", "'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(245, 158, 11, 0.3)",
        glowGold: "0 0 35px -5px rgba(245, 158, 11, 0.35)",
        glowRose: "0 0 35px -5px rgba(244, 63, 94, 0.35)",
        glowCyan: "0 0 35px -5px rgba(56, 189, 248, 0.35)",
        cinematic: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px -10px rgba(245, 158, 11, 0.25)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
}
