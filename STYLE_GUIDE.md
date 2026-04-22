# Tiger BioSciences Style System

This repo now treats `/style` as the contract for every design decision. The page renders directly from the shared token map in `lib/design-tokens.ts`, and automated checks ensure the rest of the app consumes the same data.

## Authoritative Tokens

- `lib/design-tokens.ts` – canonical definitions for:
  - color palette (core + sub-brands)
  - typography (families, utilities, margins)
  - spacing (scale, containers, grid presets)
  - component primitives (buttons, badges, cards, hero sizing)
  - compliance metadata (disallowed color utilities)
- `docs/style-token-audit.md` – snapshot of the current token coverage.

When updating visual primitives, edit `lib/design-tokens.ts` first. Every page/component should import from there instead of hard-coding Tailwind classes or hex values.

## Local Development Checklist

1. **Preview the system**  
   `npm run dev` → visit `http://localhost:3000/style`

2. **Validate tokens**  
   - `npm run check:style` – scans source files for banned Tailwind color utilities (`bg-amber-*`, `bg-violet-*`, etc.).
   - `npx playwright test tests/style-guide.spec.ts` – asserts `/style` renders each token section defined in `lib/design-tokens.ts`.
   - `npm run lint` – ESLint (now reading token-powered components such as `Button`, `Badge`, and `Hero`).

3. **Visual QA**  
   Playwright suite already covers `/style` plus primary marketing routes via `tests/luna-visual.spec.ts`.

## Making Changes

1. Update `lib/design-tokens.ts` with new tokens or adjustments.
2. If the change adds a new section, mirror it in `/style` by consuming the token data (no inline literals).
3. Extend the Playwright test (`tests/style-guide.spec.ts`) when new token categories are introduced.
4. Run:
   ```bash
   npm run lint
   npm run check:style
   npx playwright test tests/style-guide.spec.ts
   ```
5. Document noteworthy changes in this file or `docs/style-token-audit.md`.

## CI Hooks

`npm run check:style` is wired into the `prepush` script alongside existing theme/color audits. Commits that introduce disallowed utilities will fail locally and in CI.

