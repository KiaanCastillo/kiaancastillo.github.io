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
      screens: {
        lg: "1174px",
        // => @media (min-width: 640px) { ... }
      },
      animation: {
        "blur-in": {},
      },
      keyframes: {
        "blur-in": {
          "0%": { transform: "opacity: 0" },
          "100%": { transform: "opacity: 1" },
        },
      },
      backgroundImage: {
        dashed:
          "linear-gradient(90deg, #E5E7EB, #E5E7EB 40%, transparent 40%, transparent 100%);",
      },
    },
  },
  plugins: [],
};
