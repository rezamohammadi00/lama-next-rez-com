import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenApp: "#53c28b",
      },
      fontFamily: {
        IRANSansFont: [`var(--font-iransans)`, "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;
