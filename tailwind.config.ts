import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      colors: {
        darkblue: '#00008b',
        cadetblue: '#5f9ea0',
        whitesmoke: '#f5f5f5',
      },
    },
  },
  plugins: [],
} satisfies Config;
