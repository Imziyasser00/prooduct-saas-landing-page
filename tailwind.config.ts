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
        purple : {
          100 : "#7214FF",
        },
        gray: {
          800: "#0E1330",
        }
      },
    },
  },
  plugins: [],
};
export default config;
