import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config;
