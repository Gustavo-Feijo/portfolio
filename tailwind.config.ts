import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border), <alpha-value>)",
        background: "hsl(var(--background),<alpha-value>)",
        foreground: "hsl(var(--foreground), <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary), <alpha-value>)",
          foreground: "hsl(var(--primary-foreground), <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary), <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground), <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
