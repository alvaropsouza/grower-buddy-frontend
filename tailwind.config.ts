import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
