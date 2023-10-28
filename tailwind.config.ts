import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
    },
    keyframes: {
      slideUp: {
        "0%": { transform: "translateY(1em)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "100" },
      },
    },
    animation: {
      slideUp: "slideUp .5s ease-in-out",
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
