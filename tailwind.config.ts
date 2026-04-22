import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}","./components/**/*.{ts,tsx,mdx}","./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        accent: ["var(--font-accent)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        brand: "hsl(var(--brand))",
        "brand-foreground": "hsl(var(--brand-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
        aesthetics: "#D2A62C",
        wound: "#ea580c",
        international: "#204ce5",
        "data-blue": "#2d5782",
        "deep-brown": "#231010",
        "tiger-red": "#D5101F",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        pill: "100px",
      },
      boxShadow: {
        luna: "inset 0 1px 0 rgba(255,255,255,0.12)",
        card: "0 8px 24px rgba(0,0,0,0.08)",
        ambient: "0 8px 32px rgba(71, 63, 56, 0.12)"
      },
      keyframes: {
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateY(0.5rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        progress: {
          "0%": {
            width: "0",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        appear: "appear 0.5s ease-out forwards",
        progress: "progress 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config

