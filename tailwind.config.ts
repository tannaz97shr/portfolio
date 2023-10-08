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
        backdrop: "rgba(0, 0, 0, 0.6)",
        "primary-teal": "#57C5B6",
        "secondary-teal": "#159895",
        "primary-navy": "#002B5B",
        "secondary-navy": "#1A5F7A",
        "light-grey": "#d1d1d1",
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
