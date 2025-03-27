import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        everforest: {
          // Backgrounds
          "bg-dim": "#232a2e", // bg_dim
          bg0: "#272e33", // bg0
          bg1: "#2e383c", // bg1 (often the main editor background)
          bg2: "#38444a", // bg2
          bg3: "#434f55", // bg3
          bg4: "#4d595f", // bg4
          bg5: "#56635f", // bg5 (used for statusline bg)
          "bg-red": "#4f383a", // bg_red
          "bg-green": "#424b3f", // bg_green
          "bg-blue": "#3a4b51", // bg_blue
          "bg-yellow": "#554940", // bg_yellow
          "bg-visual": "#4f4249", // bg_visual (visual selection)

          // Foregrounds
          fg: "#d3c6aa", // fg (main foreground)
          "fg-dim": "#a6b0a0", // grey1 (dimmer foreground, comments)

          // Grays
          grey0: "#7a8478",
          grey1: "#859289",
          grey2: "#9da9a0",

          // Colors
          red: "#e67e80",
          orange: "#e69875",
          yellow: "#dbbc7f",
          green: "#a7c080",
          aqua: "#83c092", // Sometimes called cyan
          blue: "#7fbbb3",
          purple: "#d699b6",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
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
