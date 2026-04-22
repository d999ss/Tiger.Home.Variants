// Using local Neue Montreal font (loaded via @font-face in globals.css)
// This is the exact font used by MyHealthPrac
const neueMontreal = {
  style: {
    fontFamily: "'Neue Montreal', -apple-system, system-ui, sans-serif",
  },
  variable: "--font-display",
};

export const archivo = neueMontreal; // Keep for compatibility
export const inter = neueMontreal;   // Use same font for body
