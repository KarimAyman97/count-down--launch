import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-blue": "hsl(237, 18%, 59%)",
        "soft-red": "hsl(345, 95%, 68%)",
        white: "hsl(0, 0%, 100%)",
        "dark-desaturated-blue": "hsl(236, 21%, 26%)",
        "dark-blue": "hsl(235, 16%, 14%)",
        "very-dark-blue": "hsl(234, 17%, 12%)",
      },
      fontSize: {
        base: "14px",
      },
      fontFamily: {
        "red-hat": ["var(--font-red-hat)"],
      },
      backgroundImage: {
        stars: "url('/images/bg-stars.svg')",
        hills: "url('/images/pattern-hills.svg')",
      },
      letterSpacing: {
        widest: ".4em",
      },
    },
  },
  plugins: [],
};
export default config;
