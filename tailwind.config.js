/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Newsreader", "serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { transform: "rotate(-3deg)" },
          "100%": { transform: "rotate(3deg)" },
        },
      },
      backgroundImage: {
        dashed:
          "linear-gradient(90deg, #E5E7EB, #E5E7EB 40%, transparent 40%, transparent 100%);",
        // "linear-gradient(to right, #E5E7EB, #E5E7EB 11px, transparent 11px,transparent 22px)",
      },
    },
  },
  plugins: [],
};
