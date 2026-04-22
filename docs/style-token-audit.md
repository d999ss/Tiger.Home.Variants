# Style Token Audit – Tiger BioSciences

Date: 2025-11-10  
Source files reviewed:
- `app/style/page.tsx`
- `lib/design-tokens.ts`
- `config/colors.ts`
- `app/globals.css`

## 1. Color System

### Tokens referenced in `/style`
- **Core**: `#D5101F` (Audi Red), warm neutrals via CSS vars (`--background`, `--foreground`, etc.), hero subtitle pills use `border-brand/20`, `bg-brand/[0.03]`.
- **Sub-brands**:  
  - Wound Care: `#DF5630`, `#F18767`, `#B54426`, `#FFF4F1`  
  - Aesthetics: `#D2A62C`, `#E3C165`, `#A88523`, `#FFFBF0`  
  - International: `#4774AA`, `#7499C4`, `#395D88`, `#F0F5FA`
- **System callouts**: badges use `border-foreground/20`, `bg-foreground/[0.02]`; kill-switch disallows orange/amber/violet classes.

### Existing token definitions
- `config/colors.ts` only exposes base theme tokens (`brand`, `accent`, `background`, etc.) and **does not** include sub-brand palettes or neutral variants.
- `lib/design-tokens.ts` color entries are Tailwind class shortcuts (`bg-brand`, `from-brand`, `to-accent`) without explicit HSL/hex metadata.
- `app/globals.css` root declares extensive warm-neutral palette plus Audi red but lives outside any exportable module.

### Gaps / actions
- Sub-brand palettes exist only in `/style` (hard-coded hex). Need structured export.
- Brand pill styling expects fractional opacity utilities; tokens lacking numeric data (no rgba/alpha).
- Kill-switch intent documented in CSS but not represented in a consumable rule set.

## 2. Typography

### `/style` expectations
- Headings use custom utilities: `text-display-xl`, `text-display`, `text-h1`, `text-h3` with Light 300 serif weights, negative tracking, predefined bottom margins.
- Body styles: `text-lead`, `text-body`, `text-sm`, `text-xs` with explicit font families (ABC Arizona Sans regular).
- Pills/badges: `text-[9px]`, `tracking-[0.35em]`, `font-light`.

### Existing tokens
- `lib/design-tokens.ts` typography tokens still reference Tailwind defaults with **bold/semibold** weights (e.g., `font-semibold`, `font-bold`) and generic sizing (`text-4xl`). These conflict directly with style guide requirements.
- `app/globals.css` defines the authoritative utilities (`.text-display`, etc.) but they are not exported/typed.

### Gaps / actions
- Need canonical typography map (names, font family, weight, tracking, line-height, margins).
- `design-tokens.ts` must be rewritten or replaced to align with ABC Arizona utilities and margin rules.

## 3. Spacing & Layout

### `/style`
- Documents spacing scale variables (`--space-1` … `--space-8`) and heading margin defaults (e.g., `text-h2` -> `mb-20`).
- Grid examples rely on Tailwind utilities but expect descriptive metadata.
- Container sizes: `max-w-7xl`, `max-w-4xl`, `max-w-2xl` with contextual usage notes.

### Existing tokens
- `designTokens.spacing` only includes generic class strings (`py-16 md:py-24`, etc.) and misses the numeric scale and heading margin policies.
- No exported data for spacing scale or containers beyond these class names.

### Gaps / actions
- Capture spacing scale (values + intended usage) in shared tokens.
- Document heading margin defaults as part of typography token definitions.

## 4. Components (Buttons, Cards, Badges, Hero)

### `/style`
- Button variants defined with pill shape, 0.5px borders, layered shadows, `font-light`.
- Card examples rely on `refined-card`, `refined-border`, thin borders, backdrop blur.
- Badges & pills use consistent 0.5px borders with low-opacity backgrounds.
- Hero component variations include background image/video props and subtitle pills.

### Existing implementations
- `components/ui/button.tsx`, `components/ui/card.tsx`, etc., currently mix Tailwind utilities and may still use classnames not derived from tokens (needs verification during refactor step).
- `designTokens.buttons` use `rounded-lg`, `font-semibold`, inconsistent with style guide.
- `globals.css` houses `.refined-card` classes, but not exported.

### Gaps / actions
- Create structured component token definitions (e.g., button variants with all state styles).
- Ensure UI components import these tokens instead of local Tailwind strings.
- Add automated checks preventing reintroduction of bold buttons or thick borders.

## 5. Compliance & Tooling

- No lint rules or scripts currently enforce allowed color set—kill-switch relies on CSS override only.
- Tests under `tests/` do not cover style guide; need dedicated coverage (snapshot / DOM assertions).

---

### Summary of Divergences
- **Color**: Sub-brand palettes only exist inside `/style`; tokens lack data.
- **Typography**: `designTokens` uses bold weights; must align with ABC Arizona Light.
- **Spacing**: Numeric scale documented but not tokenized.
- **Components**: Buttons/cards/badges not backed by shared tokens; rely on scattered class strings.
- **Tooling**: No automated enforcement beyond CSS overrides.

Deliverables for subsequent steps:
1. Introduce consolidated token exports encapsulating all data above.
2. Refactor style guide and UI components to consume those exports.
3. Add lint/tests to catch regressions.

