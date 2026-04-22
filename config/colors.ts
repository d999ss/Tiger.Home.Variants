/**
 * Centralized Color Configuration
 * 
 * This file defines all color tokens used in the Tiger BioSciences design system.
 * Colors are defined in HSL format for better manipulation and theming.
 */

export type ColorToken =
  | "brand"
  | "brand-foreground"
  | "accent"
  | "accent-foreground"
  | "background"
  | "foreground"
  | "muted"
  | "muted-foreground"
  | "border"
  | "card"
  | "card-foreground"
  | "danger"
  | "danger-foreground"
  | "success"
  | "success-foreground"
  | "warning"
  | "warning-foreground"
  | "wound-care"
  | "wound-care-foreground"
  | "aesthetics"
  | "aesthetics-foreground"
  | "international"
  | "international-foreground"

interface ColorConfig {
  hsl: string
  tw: string
  description: string
}

export const COLORS: Record<ColorToken, ColorConfig> = {
  "brand": {
    hsl: "271 81% 56%",
    tw: "purple-600",
    description: "Primary brand color (purple)"
  },
  "brand-foreground": {
    hsl: "0 0% 100%",
    tw: "white",
    description: "Text on brand background"
  },
  "accent": {
    hsl: "217 91% 60%",
    tw: "blue-500",
    description: "Accent color (blue)"
  },
  "accent-foreground": {
    hsl: "0 0% 100%",
    tw: "white",
    description: "Text on accent background"
  },
  "background": {
    hsl: "0 0% 100%",
    tw: "white",
    description: "Page background"
  },
  "foreground": {
    hsl: "222 47% 11%",
    tw: "slate-900",
    description: "Primary text color"
  },
  "muted": {
    hsl: "210 40% 96%",
    tw: "slate-100",
    description: "Muted background"
  },
  "muted-foreground": {
    hsl: "215 16% 47%",
    tw: "slate-600",
    description: "Muted text"
  },
  "border": {
    hsl: "214 32% 91%",
    tw: "slate-200",
    description: "Border color"
  },
  "card": {
    hsl: "0 0% 100%",
    tw: "white",
    description: "Card background"
  },
  "card-foreground": {
    hsl: "222 47% 11%",
    tw: "slate-900",
    description: "Card text"
  },
  "danger": {
    hsl: "0 84% 60%",
    tw: "red-500",
    description: "Error/danger state"
  },
  "danger-foreground": {
    hsl: "0 0% 100%",
    tw: "white",
    description: "Text on danger background"
  },
  "success": {
    hsl: "142 71% 45%",
    tw: "green-600",
    description: "Success state"
  },
  "success-foreground": {
    hsl: "0 0% 100%",
    tw: "white",
    description: "Text on success background"
  },
  "warning": {
    hsl: "38 92% 50%",
    tw: "orange-500",
    description: "Warning state"
  },
  "warning-foreground": {
    hsl: "0 0% 100%",
    tw: "white",
    description: "Text on warning background"
  }
}

/**
 * Get HSL value for a color token
 */
export function getColorHSL(token: ColorToken): string {
  return COLORS[token].hsl
}

/**
 * Get Tailwind class name for a color token
 */
export function getColorClass(token: ColorToken, type: 'bg' | 'text' | 'border' | 'ring' | 'from' | 'to' | 'via' = 'bg'): string {
  const tw = COLORS[token].tw
  return `${type}-${tw}`
}
