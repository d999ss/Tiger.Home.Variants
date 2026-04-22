# Site-Wide Visual QA Pass

## Summary
- Status: First executable pass complete for route discovery, desktop capture, and mobile capture against a fixed route manifest.
- Base URL: `http://localhost:3005`
- Capture workflow:
  - Desktop: `1440x900`
  - Mobile: `390x844`
- Harness notes:
  - Full-page capture now scrolls through each route before the screenshot so `whileInView` and scroll-triggered sections are represented accurately.
  - Evidence for this pass is stored under `artifacts/visual-qa/2026-04-14T14-59-00-994Z/`
- Constraints honored during this audit:
  - No copy rewrites
  - No new imagery direction beyond evaluating current assets
  - No product-page implementation changes unless reauthorized
  - Homepage preserved as-is

## Coverage
- Tier 1 routes audited: `15`
- Tier 2 static routes audited: `57`
- Tier 3 routes audited: `4`
- Representative dynamic samples audited: `9`
- Total audit manifest: `85` public routes

## Baseline
- `/` remains the visual benchmark for brand confidence and should not be used as a target for structural rework.
- `/solutions/aesthetics` is the strongest interior-page reference for hierarchy, image pacing, and section rhythm.
- `/contact` reads clearly and is structurally sound; it only needs minor spacing polish if touched later.

## Findings

### Critical

### [Critical] `/science/clinical-research`
- Route: `/science/clinical-research`
- Breakpoint: `both`
- Category: `hero readability`
- Observation: The hero still relies on a busy multi-panel laboratory background with dark typography placed directly over it. On desktop the headline competes with the collage seams; on mobile the first screen feels visually noisy before the user reaches the stronger card-based sections below.
- UI-only fix recommendation: Replace the split-image hero with the same cleaner content-card-over-image system used on stronger interior pages, or significantly darken/simplify the image treatment behind the heading.

### [Critical] `/science/early-research/camps-tech/platforms`
- Route: `/science/early-research/camps-tech/platforms`
- Breakpoint: `both`
- Category: `hero readability`
- Observation: The header uses an oversized frosted panel on top of an intense red/black image, which reads like an older template and breaks consistency with the stronger Aesthetics-style interior pages. The hero feels heavy and dated before the content settles into a cleaner structure below.
- UI-only fix recommendation: Rebuild the hero with a restrained left-aligned content card, stronger contrast control, and less glass effect. Match the spacing and proportion rules now used on `/solutions/aesthetics` and the revised R&D page.

### [Critical] `/products`, `/products/aveli`, `/products/caregraft`, `/products/regentx`, `/products/expanders`
- Route: `/products` and sampled product detail routes
- Breakpoint: `both`
- Category: `imagery quality`
- Observation: Product listing and sampled detail pages still depend on low-credibility logo art, sterile render-style objects, or packaging-like images that feel inconsistent in realism. This directly affects perceived product trust even when layout is otherwise stable.
- UI-only fix recommendation: Keep implementation blocked for now, but plan a product-only UI pass once imagery is available. If no new photography is ready, reduce the visual dependence on weak renders by using cleaner information-first modules and smaller asset stages rather than oversized hero media.

### High

### [High] `/careers`
- Route: `/careers`
- Breakpoint: `both`
- Category: `imagery quality`
- Observation: The hero is improved and human-centered, but the “Commercial & Operations” career card still uses tiger-eye imagery. That undercuts the employer-branding direction and reintroduces the exact symbolic imagery the feedback asked to remove.
- UI-only fix recommendation: Swap that card to a people, workplace, or operations environment image. Keep the current layout; only change the visual asset and maintain the same card proportions.

### [High] `/company/donation`, `/company/overview`
- Route: `/company/donation`, `/company/overview`
- Breakpoint: `both`
- Category: `repetition`
- Observation: Both pages lean heavily on the same tiger-eye hero language used elsewhere on the site. The treatment is legible, but it dilutes the emotional specificity of donation and company storytelling and makes multiple top-level pages feel visually interchangeable.
- UI-only fix recommendation: Replace hero imagery with human-centered or mission-specific visuals and keep the existing content-card structure. Donation should feel warmer and more grounded in people; company overview should feel institutional rather than symbolic.

### [High] `/solutions/wound-care`
- Route: `/solutions/wound-care`
- Breakpoint: `both`
- Category: `repetition`
- Observation: The page structure is improved, but the hero still uses the tiger-eye motif that now appears across multiple company and wound-related routes. The page is readable, yet the repeated motif weakens page distinction and contributes to brand fatigue.
- UI-only fix recommendation: Retain the current layout but rotate the hero treatment to a wound-care-specific image or cleaner abstract clinical texture that preserves contrast without repeating the tiger eye.

### [High] `/science/early-research/camps-tech/research`
- Route: `/science/early-research/camps-tech/research`
- Breakpoint: `both`
- Category: `imagery quality`
- Observation: The page structure is much stronger now, but the focus-area grid still leans on similar lab photography even after removing exact side-by-side duplicates. The section reads cleaner than before, but the image set still feels narrow relative to the content range.
- UI-only fix recommendation: Keep the mixed image/text-card approach. When assets are revisited, diversify the section with one lab/process image, one equipment image, and one non-photo information-led card pattern instead of defaulting to multiple similar scientist shots.

### [High] `/science/early-research/camps-tech/platforms`, `/science/clinical-research`
- Route: `/science/early-research/camps-tech/platforms`, `/science/clinical-research`
- Breakpoint: `mobile`
- Category: `responsive behavior`
- Observation: Both routes compress large headline systems into the first screen without enough simplification. The content remains technically readable, but the hero payload is visually dense compared with the calmer mobile experience on stronger pages like Aesthetics.
- UI-only fix recommendation: Reduce headline width, lower hero card height, and trim decorative imagery on mobile so the first viewport shows a complete, stable composition rather than a compressed desktop hero.

### Medium

### [Medium] `/press/2025-11-14-ipaws-conference`
- Route: `/press/2025-11-14-ipaws-conference`
- Breakpoint: `desktop`
- Category: `hierarchy`
- Observation: The article page is readable, but the headline block is extremely large and the long body copy starts as a dense slab immediately after the image. The page would benefit from stronger editorial pacing before the reader enters the main text.
- UI-only fix recommendation: Tighten the headline width, reduce top heading scale slightly, and introduce stronger paragraph spacing or sub-block separation in the first article section without touching the copy itself.

### [Medium] `/careers`
- Route: `/careers`
- Breakpoint: `mobile`
- Category: `spacing`
- Observation: The page stacks cleanly, but the gaps between the intro, icon values, and career-area cards are still generous enough that the page feels longer than necessary before users reach job-oriented content.
- UI-only fix recommendation: Compress vertical spacing between the value-icon group and the career-area section by one spacing step on mobile only.

### [Medium] `/science/early-research/camps-tech/research`
- Route: `/science/early-research/camps-tech/research`
- Breakpoint: `mobile`
- Category: `content readability`
- Observation: The revised page is directionally correct, but the intro body inside the hero card is still a dense reading block on a small screen. It no longer feels broken, but it does feel heavier than the best mobile interior pages.
- UI-only fix recommendation: Reduce the body width inside the hero card, increase line-height slightly, and trim card padding so the same copy breathes better on mobile.

### [Medium] `/company/overview`
- Route: `/company/overview`
- Breakpoint: `desktop`
- Category: `imagery quality`
- Observation: The page is structurally coherent, but the tiger-eye hero keeps the page in the same symbolic register as donation and wound care instead of differentiating the corporate narrative. This is a branding consistency issue more than a readability failure.
- UI-only fix recommendation: Use a more institutional or people/process-oriented hero while preserving the current card-and-section layout.

### [Medium] `/contact`
- Route: `/contact`
- Breakpoint: `desktop`
- Category: `spacing`
- Observation: The page is clean and usable, but because the content is relatively short, the transition into the large footer area feels abrupt and slightly oversized relative to the form module.
- UI-only fix recommendation: Pull the main form section lower on the canvas or slightly reduce the top padding above the footer for short-content pages.

### Low

### [Low] `/press` sampled article pages
- Route: `/press`, sampled article detail pages
- Breakpoint: `both`
- Category: `hover/focus`
- Observation: The cards and taxonomy chips read clearly, but the audit did not surface any strong interaction-state cues in the static visuals. This is lower-risk than readability issues, but the press surfaces would benefit from stronger hover/focus clarity.
- UI-only fix recommendation: Apply the same brand-red hover/focus treatment used elsewhere to editorial cards, chips, and inline calls to action.

### [Low] `/contact`
- Route: `/contact`
- Breakpoint: `mobile`
- Category: `alignment`
- Observation: The page stacks well, and no blocking issue was observed. The right-column support cards simply become long repetitive blocks when stacked, which slightly softens scannability.
- UI-only fix recommendation: Tighten internal card spacing and use clearer divider rhythm between support cards on mobile.

## Remediation Order
1. Science hero cleanup:
   `/science/clinical-research`
   `/science/early-research/camps-tech/platforms`
2. Repetitive tiger-imagery cleanup:
   `/careers`
   `/company/donation`
   `/company/overview`
   `/solutions/wound-care`
3. Science page polish:
   `/science/early-research/camps-tech/research`
4. Editorial pacing pass:
   sampled `/press/*` detail pages
5. Product imagery/UI follow-up:
   blocked until product-route scope is reopened

## Audit Gates Used
- Hero text must remain readable against imagery
- Nav must remain visible over hero and during scroll
- No repeated or near-duplicate imagery within a section
- No screenshot-like or document-like images used decoratively
- No dense text slabs without hierarchy support
- No desktop-first layouts that collapse poorly on mobile
- Interactive elements need hover/focus affordance

## Evidence
- Primary artifact set: `artifacts/visual-qa/2026-04-14T14-59-00-994Z/`
- Earlier pre-scroll-through capture retained for comparison:
  `artifacts/visual-qa/2026-04-14T14-51-22-045Z/`

## Supplemental Nav/Footer Coverage
- Status: complete
- Supplemental artifact set:
  `artifacts/visual-qa/nav-footer-supplement-2026-04-14T15-41-21-101Z/`
- Reason: the first route manifest did not include every internal destination linked from the global nav and footer.
- Result: every current internal nav and footer destination has now had VQA coverage.

### Routes added in supplemental pass
- `/people`
- `/products/carepatch`
- `/products/carepac`
- `/products/completeft`
- `/products/healpack`
- `/products/alloclae`
- `/products/amplifine`
- `/products/bellafill`
- `/products/sientra`
- `/products/viality`
- `/products/implant-delivery`
- `/products/retractor`

### Coverage summary
- Global nav internal destinations: `35/35` covered after supplement
- Global footer internal destinations: `34/34` covered after supplement
- Combined internal nav/footer destinations: `38/38` covered after supplement
- External footer careers link:
  `https://jobs.tigerbiosciences.com`
  not included in local site VQA because it is off-site
