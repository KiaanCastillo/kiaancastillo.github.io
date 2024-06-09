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
      },
      animation: {
        "blur-in":
          "blur-in 0.75s cubic-bezier(0.65,0.05,0.36,1) var(--blur-delay, 0) forwards",
        "perk-up": "perk-up 0.25s cubic-bezier(0.65,0.05,0.36,1) forwards",
      },
      keyframes: {
        "blur-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(1.5rem)",
            filter: "blur(10px)",
          },
          "75%": {
            opacity: "1",
            transform: "translateY(-0.125rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        "perk-up": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-0.25rem)",
          },
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
