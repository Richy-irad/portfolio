import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-100": "#06152A",
        "background-200": "#1F2A3E",
        foreground: "#3FFA56",
        "light-100": "#F4F4F4",
        "light-200": "#B7B7B7",
        "light-300": "#9D9D9D",
      },
    },
  },
  plugins: [],
};
export default config;
