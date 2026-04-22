/**
 * Tiger BioSciences Design Tokens
 * Canonical source for design primitives reflected in `/style`.
 * These exports are structured data – never Tailwind class strings – so both
 * runtime components and documentation can consume them consistently.
 */

/* -------------------------------------------------------------------------- */
/* Color Tokens                                                               */
/* -------------------------------------------------------------------------- */

export type ColorSwatch = {
  name: string
  value: string
  description?: string
  role?: string
}

export type SubBrandPalette = {
  id: "woundCare" | "aesthetics" | "international"
  label: string
  swatches: ColorSwatch[]
}

export const colorTokens = {
  core: [
    { name: "Tiger Gold", value: "#D2A62C", role: "brand" },
    { name: "Brand Foreground", value: "#FFFFFF", role: "brand-foreground" },
    { name: "Page Background", value: "#EFEDEA", role: "page-bg", description: "Warm cream page background" },
    { name: "Text Primary", value: "#231010", role: "text-primary", description: "Primary text color" },
  ] satisfies ColorSwatch[],
  neutrals: [
    { name: "Background", value: "hsl(var(--background))", description: "Warm cream / base surface" },
    { name: "Foreground", value: "hsl(var(--foreground))", description: "Primary text (warm charcoal)" },
    { name: "Card", value: "hsl(var(--card))", description: "Raised surfaces & cards" },
    { name: "Muted", value: "hsl(var(--muted))", description: "Subtle background panels" },
    { name: "Border", value: "hsl(var(--border))", description: "0.5px borders" },
  ] satisfies ColorSwatch[],
  subBrands: [
    {
      id: "woundCare",
      label: "Wound Care",
      swatches: [
        { name: "Primary", value: "#DF5630" },
        { name: "Light", value: "#F18767" },
        { name: "Dark", value: "#B54426" },
        { name: "Background", value: "#FFF4F1" },
      ],
    },
    {
      id: "aesthetics",
      label: "Aesthetics",
      swatches: [
        { name: "Primary", value: "#D2A62C" },
        { name: "Light", value: "#E3C165" },
        { name: "Dark", value: "#A88523" },
        { name: "Background", value: "#FFFBF0" },
      ],
    },
    {
      id: "international",
      label: "International",
      swatches: [
        { name: "Primary", value: "#4774AA" },
        { name: "Light", value: "#7499C4" },
        { name: "Dark", value: "#395D88" },
        { name: "Background", value: "#F0F5FA" },
      ],
    },
  ] satisfies SubBrandPalette[],
  system: {
    killSwitchBlocked: ["orange", "amber", "violet"],
  },
} as const

/* -------------------------------------------------------------------------- */
/* Typography Tokens                                                          */
/* -------------------------------------------------------------------------- */

export type TypographyToken = {
  name: string
  utility: string
  fontFamily: string
  size: string
  weight: number
  tracking: string
  lineHeight: string
  marginBottom?: string
  description?: string
}

export const typographyTokens = {
  families: [
    { name: "Display", family: "var(--font-display)", description: "ABC Arizona Plus Light 300" },
    { name: "Body", family: "var(--font-body)", description: "Inter Regular 400 / Medium 500" },
    { name: "Accent", family: "var(--font-accent)", description: "Archivo Regular 400 / Medium 500" },
    { name: "Mono", family: "var(--font-mono)", description: "System mono stack" },
  ],
  headings: [
    {
      name: "Display XL",
      utility: "text-display-xl",
      fontFamily: "var(--font-display)",
      size: "var(--h-xl-size)",
      weight: 300,
      tracking: "var(--h-xl-tracking)",
      lineHeight: "var(--h-xl-line)",
      marginBottom: "0.75rem",
      description: "Hero headlines",
    },
    {
      name: "Display / H1",
      utility: "text-display, text-h1",
      fontFamily: "var(--font-display)",
      size: "var(--h1-size)",
      weight: 300,
      tracking: "var(--h1-tracking)",
      lineHeight: "var(--h1-line)",
      marginBottom: "2rem",
      description: "Section headings",
    },
    {
      name: "H2",
      utility: "text-h2",
      fontFamily: "var(--font-display)",
      size: "var(--h2-size)",
      weight: 300,
      tracking: "var(--h2-tracking)",
      lineHeight: "var(--h2-line)",
      marginBottom: "5rem",
      description: "Page sub-sections (built-in generous spacing)",
    },
    {
      name: "H3",
      utility: "text-h3",
      fontFamily: "var(--font-display)",
      size: "var(--h3-size)",
      weight: 300,
      tracking: "var(--h3-tracking)",
      lineHeight: "var(--h3-line)",
      marginBottom: "1.5rem",
      description: "Subsection headings",
    },
  ] satisfies TypographyToken[],
  body: [
    {
      name: "Lead",
      utility: "text-lead",
      fontFamily: "var(--font-body)",
      size: "var(--lead-size)",
      weight: 400,
      tracking: "0",
      lineHeight: "var(--lead-line)",
      marginBottom: "1.5rem",
      description: "Intro paragraphs",
    },
    {
      name: "Body",
      utility: "text-body",
      fontFamily: "var(--font-body)",
      size: "var(--body-size)",
      weight: 400,
      tracking: "0",
      lineHeight: "var(--body-line)",
      marginBottom: "1.5rem",
      description: "Default prose",
    },
    {
      name: "Small",
      utility: "text-sm",
      fontFamily: "var(--font-body)",
      size: "14px",
      weight: 400,
      tracking: "0",
      lineHeight: "1.7",
    },
    {
      name: "Caption",
      utility: "text-xs",
      fontFamily: "var(--font-body)",
      size: "12px",
      weight: 400,
      tracking: "0",
      lineHeight: "1.6",
    },
  ] satisfies TypographyToken[],
  labels: [
    {
      name: "Section Pill",
      utility: "inline label",
      fontFamily: "var(--font-body)",
      size: "10px",
      weight: 300,
      tracking: "0.2em",
      lineHeight: "1",
      description: "Hero subtitle pill usage",
    },
    {
      name: "Badge Label",
      utility: "text-[9px] uppercase tracking-[0.35em]",
      fontFamily: "var(--font-body)",
      size: "9px",
      weight: 300,
      tracking: "0.35em",
      lineHeight: "1",
      description: "Section badges and labels",
    },
  ],
} as const

/* -------------------------------------------------------------------------- */
/* Spacing Tokens                                                             */
/* -------------------------------------------------------------------------- */

export type SpacingScaleEntry = {
  token: string
  value: string
  usage: string
}

export type ContainerToken = {
  size: string
  value: string
  usage: string
}

export const spacingTokens = {
  scale: [
    { token: "--space-1", value: "4px", usage: "Tight gaps, hairline adjustments" },
    { token: "--space-2", value: "8px", usage: "Micro spacing / component internals" },
    { token: "--space-3", value: "12px", usage: "Small gutters" },
    { token: "--space-4", value: "16px", usage: "Default inner padding" },
    { token: "--space-5", value: "20px", usage: "Card padding multiplier" },
    { token: "--space-6", value: "24px", usage: "Card padding / vertical rhythm" },
    { token: "--space-7", value: "32px", usage: "Section spacing (mobile)" },
    { token: "--space-8", value: "40px", usage: "Section spacing (desktop)" },
  ] satisfies SpacingScaleEntry[],
  headingMargins: [
    { token: "text-display / text-h1", value: "margin-bottom: 2rem", usage: "Guarantee breathing room" },
    { token: "text-h2", value: "margin-bottom: 5rem", usage: "Large section divider" },
    { token: "text-h3", value: "margin-bottom: 1.5rem", usage: "Subsection spacing" },
  ],
  containers: [
    { size: "max-w-7xl", value: "1280px", usage: "Default page container" },
    { size: "max-w-4xl", value: "896px", usage: "Prose / rich text" },
    { size: "max-w-2xl", value: "672px", usage: "Forms & focused content" },
  ] satisfies ContainerToken[],
  grids: [
    { size: "2-column", value: "grid gap-4 md:grid-cols-2", usage: "Split layouts" },
    { size: "3-column", value: "grid gap-4 md:grid-cols-3", usage: "Feature highlights" },
    { size: "4-column", value: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", usage: "Dense card arrays" },
  ],
} as const

/* -------------------------------------------------------------------------- */
/* Component Tokens                                                           */
/* -------------------------------------------------------------------------- */

export type ComponentVariant = {
  name: string
  className: string
  description?: string
}

export const componentTokens = {
  buttons: {
    base:
      "inline-flex items-center justify-center font-light tracking-wide leading-none transition-all duration-300 select-none focus:outline-none focus-visible:ring-0",
    sizes: {
      xs: "py-2.5 px-8 text-xs gap-2",
      sm: "py-3 px-10 text-sm gap-2",
      md: "py-3.5 px-12 text-sm gap-2.5",
      lg: "py-4 px-14 text-base gap-3",
      icon: "h-10 w-10 text-sm px-0 gap-0",
    },
    radii: {
      "8": "rounded-[8px]",
      pill: "rounded-full",
      full: "rounded-full",
      "12": "rounded-[12px]",
      "16": "rounded-[16px]",
      "10": "rounded-[10px]",
      "0": "rounded-none",
    },
    variants: {
      default: {
        name: "Default",
        className:
          "bg-foreground text-background border-[0.5px] border-foreground hover:bg-foreground/80 active:translate-y-[1px] cursor-pointer",
      },
      primary: {
        name: "Primary",
        className:
          "bg-brand text-brand-foreground border-[0.5px] border-brand hover:bg-brand/85 active:translate-y-[1px] cursor-pointer focus-visible:ring-1 focus-visible:ring-brand/40",
        description: "Hero / CTA buttons with 3D depth",
      },
      secondary: {
        name: "Secondary",
        className:
          "bg-transparent text-foreground border-[0.5px] border-foreground hover:bg-foreground/10 active:translate-y-[1px] cursor-pointer",
      },
      ghost: {
        name: "Ghost",
        className: "bg-transparent text-foreground hover:bg-foreground/10 cursor-pointer",
      },
      outline: {
        name: "Outline",
        className:
          "border-[0.5px] border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/10 active:translate-y-[1px] cursor-pointer",
      },
      danger: {
        name: "Danger",
        className:
          "bg-danger text-white border-[0.5px] border-danger hover:bg-danger/80 active:translate-y-[1px] cursor-pointer",
      },
      glow: {
        name: "Glow",
        className:
          "bg-brand text-brand-foreground border-[0.5px] border-brand hover:bg-brand/80 active:translate-y-[1px] cursor-pointer ring-2 ring-brand/30",
      },
      glass: {
        name: "Glass",
        className:
          "glass-button relative overflow-hidden backdrop-blur-xl bg-white/10 text-foreground border-[0.5px] border-white/20 hover:bg-white/15 active:translate-y-[1px] cursor-pointer shadow-[inset_0_0.125em_0.125em_rgba(0,0,0,0.05),inset_0_-0.125em_0.125em_rgba(255,255,255,0.5)]",
        description: "Glass morphism button with backdrop blur and shine effects",
      },
    } satisfies Record<string, ComponentVariant>,
  },
  badges: {
    base:
      "inline-flex items-center justify-center font-light uppercase tracking-[0.35em] rounded-full transition-all duration-300 select-none",
    sizes: {
      default: "px-4 py-1.5 text-[9px]",
      sm: "px-3 py-1 text-[8px]",
    },
    variants: {
      default: {
        name: "Neutral",
        className: "border-[0.5px] border-foreground/20 bg-foreground/[0.02] text-foreground/60",
      },
      secondary: {
        name: "Secondary",
        className: "border-[0.5px] border-foreground/20 bg-background/70 text-foreground/70",
      },
      outline: {
        name: "Outline",
        className: "border-[0.5px] border-foreground/30 bg-transparent text-foreground",
      },
      glass: {
        name: "Glass",
        className: "border-white/35 bg-white/10 text-white/85 backdrop-blur-sm",
      },
      white: {
        name: "White",
        className: "border-white/25 bg-white/12 text-white/85",
      },
      brand: {
        name: "Brand Red",
        className: "border-[#D5101F]/30 bg-[#D5101F]/12 text-[#D5101F]",
      },
      aesthetic: {
        name: "Aesthetic Gold",
        className: "border-[#D2A62C]/25 bg-[#D2A62C]/12 text-[#8F6F13]",
      },
      blue: {
        name: "International Blue",
        className: "border-[#4774AA]/30 bg-[#4774AA]/12 text-[#2E4F73]",
      },
    } as const,
    aliases: {
      light: "white",
      red: "brand",
    } as const,
    special: {
      section: {
        name: "Section Label",
        className:
          "inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60",
      },
      heroPill: {
        name: "Hero Subtitle",
        className:
          "inline-block rounded-none border-[0.5px] border-white/30 bg-white/15 px-3 py-1 text-[10px] font-light uppercase tracking-[0.2em] text-white backdrop-blur-sm",
      },
    } as const,
  } as const,
  cards: {
    refined: {
      name: "Refined Card",
      className:
        "refined-card border-[0.5px] border-foreground/15 bg-card/60 backdrop-blur-[21px] rounded-[12px] transition-all duration-400",
      description: "Christie’s-inspired elevated card treatment",
    },
    refinedBorder: {
      name: "Refined Border",
      className: "refined-border border-[0.5px] border-foreground/20",
    },
  },
  hero: {
    sizes: [
      { name: "extra-large", minHeight: "min-h-[600px]" },
      { name: "large", minHeight: "min-h-[400px]" },
      { name: "default", minHeight: "min-h-[320px]" },
    ],
  },
} as const

/* -------------------------------------------------------------------------- */
/* Compliance & Tooling                                                       */
/* -------------------------------------------------------------------------- */

export const complianceTokens = {
  lint: {
    disallowedColorClasses: ["bg-orange", "bg-amber", "bg-violet", "text-orange", "text-amber", "text-violet"],
    description: "Must be enforced via lint rule / CI script",
  },
  docs: {
    sourceOfTruth: "/style",
    updateGuide: "Update tokens here, then regenerate documentation/tests.",
  },
} as const

/* -------------------------------------------------------------------------- */
/* Aggregate Export & Helpers                                                 */
/* -------------------------------------------------------------------------- */

export const designTokens = {
  colors: colorTokens,
  typography: typographyTokens,
  spacing: spacingTokens,
  components: componentTokens,
  compliance: complianceTokens,
} as const

export type DesignTokens = typeof designTokens

export function getDesignTokens<K extends keyof DesignTokens>(key: K): DesignTokens[K] {
  return designTokens[key]
}

