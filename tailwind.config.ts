import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        "primary-teal": "#57C5B6",
        "secondary-teal": "#159895",
        "primary-navy": "#002B5B",
        "secondary-navi": "#1A5F7A",
        tahiti: {
          100: "#cffafe",
          200: "#a5f3fc",
        },
      },
    },
  },
  plugins: [],
};
export default config;