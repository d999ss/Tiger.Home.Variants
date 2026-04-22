# Image Update Checklist

The homepage (`app/page.tsx`) has been updated with proper Figma-sourced images (in `/images/figma/`). The pages below still need their images updated to match the design system.

---

## Solutions Pages (~15 pages)

- [ ] `app/solutions/aesthetics/page.tsx` — uses boredoptimism AI images + old hero images
- [ ] `app/solutions/face/page.tsx` — uses bellafill-hero.png, old video paths
- [ ] `app/solutions/breast/page.tsx` — uses boredoptimism portrait, sientra-hero.png
- [ ] `app/solutions/body/page.tsx` — uses Alloclae_1.png, body-page-hero.png
- [ ] `app/solutions/wound-care/page.tsx` — uses wound-care-overview.webp
- [ ] `app/solutions/international/page.tsx` — uses /videos/international.mp4
- [ ] `app/solutions/acute-wound-care/page.tsx` — uses completeft-hero.png, acute-wound-care.webp
- [ ] `app/solutions/surgical-solutions/page.tsx` — uses 02.png, carepac-hero.png
- [ ] `app/solutions/regenerative-sciences/page.tsx` — uses boredoptimism science image
- [ ] `app/solutions/shape/page.tsx` — uses boredoptimism/numbered assets
- [ ] `app/solutions/scaffolds/page.tsx` — uses boredoptimism/numbered assets
- [ ] `app/solutions/tissue/page.tsx` — uses boredoptimism/numbered assets
- [ ] `app/solutions/volume/page.tsx` — uses boredoptimism/numbered assets
- [ ] `app/solutions/dressings/page.tsx` — uses boredoptimism/numbered assets
- [ ] `app/solutions/biocare/page.tsx` — uses boredoptimism/numbered assets
- [ ] `app/solutions/birth-tissue/page.tsx` — uses boredoptimism/numbered assets
- [ ] `app/solutions/reconstruction/page.tsx` — uses boredoptimism/numbered assets
- [ ] `app/solutions/regenerative/page.tsx` — uses boredoptimism/numbered assets
- [ ] `app/solutions/renewal/page.tsx` — uses boredoptimism/numbered assets

## Science Pages (~15 pages)

All share the same boredoptimism science hero image; need unique/proper images per section.

- [ ] `app/science/page.tsx`
- [ ] `app/science/early-research/page.tsx`
- [ ] `app/science/early-research/camps-tech/page.tsx`
- [ ] `app/science/early-research/camps-tech/research/page.tsx` — uses camps-research-hero.png
- [ ] `app/science/early-research/camps-tech/platforms/page.tsx` — uses camps-platforms-hero.png
- [ ] `app/science/early-research/platform-science/page.tsx`
- [ ] `app/science/clinical-research/page.tsx`
- [ ] `app/science/clinical-research/certifications/page.tsx`
- [ ] `app/science/clinical-research/governance-ethics/page.tsx`
- [ ] `app/science/clinical-research/qa/page.tsx`
- [ ] `app/science/pipeline/page.tsx`
- [ ] `app/science/pipeline/clinical-trials/page.tsx`
- [ ] `app/science/pipeline/current-programs/page.tsx`
- [ ] `app/science/pipeline/study-partners/page.tsx`
- [ ] `app/science/publications/page.tsx`
- [ ] `app/science/publications/featured-papers/page.tsx`
- [ ] `app/science/publications/citations/page.tsx`
- [ ] `app/science/publications/posters-presentations/page.tsx`

## Company Pages (~10 pages)

- [ ] `app/company/overview/page.tsx` — uses tiger-hero.png + boredoptimism skin image
- [ ] `app/company/history/page.tsx` — uses 05.png
- [ ] `app/company/credo/page.tsx` — uses figma/image-15.png + tiger-circle-logo.png
- [ ] `app/company/leadership/page.tsx` — images from leaders-data.ts
- [ ] `app/company/donation/page.tsx` — uses tiger-hero.png + division logos
- [ ] `app/company/donation-expanded/page.tsx` — uses sarah-donor.png, marcus-recipient.png, etc.
- [ ] `app/company/sustainability/page.tsx` — uses boredoptimism tiger images
- [ ] `app/company/impact/page.tsx` — uses boredoptimism tiger images
- [ ] `app/company/investors/page.tsx` — uses boredoptimism tiger images
- [ ] Company donation subsections (adipose, birth-tissue, clinicians, ethics, meaning, science)

## Careers

- [ ] `app/careers/page.tsx` — uses coin.png + 3 boredoptimism videos in /images/

## Gallery

- [ ] `app/gallery/page.tsx` — 50+ hardcoded media files, mix of boredoptimism + numbered assets

## Products

- [ ] `app/products/page.tsx` — dynamic images from content files (verify content images are updated)
- [ ] `app/products/[slug]/page.tsx` — same dynamic loading
- [ ] `app/products/inventory/page.tsx` — uses tiger.gif

## Press/News

- [ ] `app/press/page.tsx` — dynamic heroImage from press data (verify data images)
- [ ] `app/press/[slug]/page.tsx` — dynamic heroImage

## Alternate Home Versions

- [ ] `app/home-old/page.tsx` — uses /Tiger Movs/ video directory
- [ ] `app/home-v2/page.tsx` — uses boredoptimism images/videos

---

## Image Naming Patterns to Replace

| Current Pattern | Status |
|---|---|
| `/images/figma/*` | Updated (homepage) |
| `/images/boredoptimism_*` | Needs replacement — AI-generated placeholders with UUID suffixes |
| `/images/01.png` – `06.png` | Needs replacement — generic numbered assets |
| `/images/*-hero.png` | Needs review — some may be final, some placeholder |
| `/Tiger Movs/*` | Needs review — video assets |
| `/division-logos/*` | Likely final — logo assets |

## Total Scope

- **~80 pages** reference media assets
- **~100+ unique images/videos** across the site
- **Homepage is the only page** using the updated `/images/figma/` assets
