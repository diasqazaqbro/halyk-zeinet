import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/modal.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "480px" },
      md: "768px",
      mmd: { max: "768px" },
      mlg: { max: "1024px" },
      xl: "1512px",
    },
    extend: {},
  },
  plugins: [nextui()],
};
export default config;
