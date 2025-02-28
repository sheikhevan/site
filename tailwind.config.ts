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
        kanagawa: {
          // Base colors
          fujiWhite: "#DCD7BA", // Default text color
          oldWhite: "#C8C093", // Secondary text
          sumiInk0: "#16161D", // Darkest background
          sumiInk1: "#1F1F28", // Default background
          sumiInk2: "#2A2A37", // Lighter background
          sumiInk3: "#363646", // Selection background
          sumiInk4: "#54546D", // Comments, non-text characters
          waveBlue1: "#223249", // Darker blue variant
          waveBlue2: "#2D4F67", // Blue variant

          // Accent colors
          crystalBlue: "#7E9CD8", // Light blue
          springViolet1: "#938AA9", // Lavender
          springViolet2: "#9CABCA", // Lighter violet
          springBlue: "#7FB4CA", // Cyan
          oniViolet: "#957FB8", // Purple
          winterGreen: "#2B3328", // Deep green background
          winterYellow: "#49443C", // Yellowish background
          winterRed: "#43242B", // Red background
          winterBlue: "#252535", // Blue background
          autumnGreen: "#76946A", // Green
          autumnRed: "#C34043", // Red
          autumnYellow: "#DCA561", // Yellow/orange
          samuraiRed: "#E82424", // Bright red
          roninYellow: "#FF9E3B", // Bright yellow
          waveAqua1: "#6A9589", // Teal
          dragonBlue: "#658594", // Grayish blue
          fujiGray: "#727169", // Gray
          springGreen: "#98BB6C", // Bright green
          boatYellow1: "#938056", // Brownish yellow
          boatYellow2: "#C0A36E", // Light brown
          carpYellow: "#E6C384", // Light yellow
          sakuraPink: "#D27E99", // Pink
          waveRed: "#E46876", // Salmon/coral
          peachRed: "#FF5D62", // Brighter red
          surimiOrange: "#FFA066", // Orange
          katanaGray: "#717C7C", // Grayish teal
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
