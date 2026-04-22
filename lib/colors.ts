/**
 * Type-Safe Color Utilities
 * 
 * Provides type-safe access to the centralized color system.
 * Use these utilities instead of hardcoded color values.
 */

import { COLORS, type ColorToken, getColorHSL, getColorClass } from "@/config/colors"

// Re-export types and utilities from config
export { COLORS, type ColorToken, getColorHSL, getColorClass } from "@/config/colors"

/**
 * Get a color value for use in CSS-in-JS or inline styles
 */
export function getColorValue(token: ColorToken): string {
  return `hsl(${getColorHSL(token)})`
}

/**
 * Get a CSS custom property reference
 */
export function getColorVar(token: ColorToken): string {
  return `hsl(var(--${token}))`
}

/**
 * Get a Tailwind class for a specific color and type
 */
export function getTailwindClass(token: ColorToken, type: 'bg' | 'text' | 'border' | 'ring' | 'from' | 'to' | 'via' = 'bg'): string {
  return getColorClass(token, type)
}

/**
 * Get all available color tokens
 */
export function getAllTokens(): ColorToken[] {
  return Object.keys(COLORS) as ColorToken[]
}

/**
 * Check if a token exists in the color system
 */
export function isValidToken(token: string): token is ColorToken {
  return token in COLORS
}

/**
 * Get color information including description
 */
export function getColorInfo(token: ColorToken) {
  const config = COLORS[token]
  return {
    token,
    hsl: config.hsl,
    tailwind: config.tw,
    description: config.description,
    cssVar: `--${token}`,
    cssValue: `hsl(var(--${token}))`
  }
}

/**
 * Generate a complete color palette object
 */
export function getColorPalette() {
  const palette = {} as Record<ColorToken, ReturnType<typeof getColorInfo>>
  
  for (const token of getAllTokens()) {
    palette[token] = getColorInfo(token)
  }
  
  return palette
}

/**
 * Utility for creating color combinations
 */
export function createColorCombination(
  primary: ColorToken,
  secondary: ColorToken,
  type: 'gradient' | 'contrast' | 'complementary' = 'gradient'
) {
  const primaryInfo = getColorInfo(primary)
  const secondaryInfo = getColorInfo(secondary)
  
  switch (type) {
    case 'gradient':
      return {
        css: `linear-gradient(135deg, ${getColorValue(primary)}, ${getColorValue(secondary)})`,
        tailwind: `bg-gradient-to-br from-${primaryInfo.tailwind} to-${secondaryInfo.tailwind}`
      }
    
    case 'contrast':
      return {
        primary: primaryInfo,
        secondary: secondaryInfo,
        ratio: calculateContrastRatio(primaryInfo.hsl, secondaryInfo.hsl)
      }
    
    case 'complementary':
      return {
        primary: primaryInfo,
        secondary: secondaryInfo,
        harmony: 'complementary'
      }
    
    default:
      throw new Error(`Unknown color combination type: ${type}`)
  }
}

/**
 * Calculate contrast ratio between two colors (simplified)
 * Note: This is a basic implementation. For production, use a proper contrast library.
 */
function calculateContrastRatio(color1: string, color2: string): number {
  // Simplified contrast calculation
  // In production, you'd want to use a proper color contrast library
  const [, , l1] = color1.split(' ').map(Number)
  const [, , l2] = color2.split(' ').map(Number)
  
  // Basic luminance calculation (simplified)
  const lum1 = l1 / 100
  const lum2 = l2 / 100
  
  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)
  
  return (lighter + 0.05) / (darker + 0.05)
}

/**
 * Common color combinations for the Tiger BioSciences brand
 */
export const BRAND_COMBINATIONS = {
  primary: createColorCombination('brand', 'brand-foreground', 'contrast'),
  accent: createColorCombination('accent', 'accent-foreground', 'contrast'),
  gradient: createColorCombination('brand', 'accent', 'gradient'),
  neutral: createColorCombination('foreground', 'muted-foreground', 'contrast')
} as const

/**
 * Validation utilities
 */
export function validateColorUsage(className: string): { valid: boolean; suggestion?: string } {
  // Check if className uses a valid color token
  const colorMatch = className.match(/(bg|text|border|ring)-(.*)/)
  if (!colorMatch) {
    return { valid: true } // Not a color class
  }
  
  const [, type, color] = colorMatch
  
  // Check if it's a valid token
  if (isValidToken(color)) {
    return { valid: true }
  }
  
  // Suggest a valid token
  const suggestions = getAllTokens().filter(token => 
    token.includes(color) || color.includes(token)
  )
  
  if (suggestions.length > 0) {
    return {
      valid: false,
      suggestion: `${type}-${suggestions[0]}`
    }
  }
  
  return { valid: false }
}
