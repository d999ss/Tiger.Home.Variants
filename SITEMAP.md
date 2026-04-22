# Tiger BioSciences - Site Map

**Total Pages:** 60 (after cleanup - removed 18 redundant pages)
**Last Updated:** 2025-10-20
**Build:** Next.js 15.4.3 with App Router

---

## Homepage
- `/` - Homepage with hero, featured products, divisions overview

---

## Company (12 pages)
**Main Navigation Group: "Company"**

### About & Mission
- `/company/overview` - Company Overview
- `/company/credo` - Our Purpose & Credo
- `/company/leadership` - Leadership Team
- `/company/history` - Our History
- `/company/impact` - Global Impact
- `/company/sustainability` - Sustainability Initiatives

### Donation & Ethics
- `/company/donation` - The Gift of Donation (Overview)
- `/company/donation/meaning` - What Donation Means
- `/company/donation/birth-tissue` - Birth Tissue Donation
- `/company/donation/adipose` - Adipose Donation
- `/company/donation/ethics` - Ethics & Stewardship
- `/company/donation/science` - From Gift to Healing (Science)

---

## Expertise / Solutions (19 pages)
**Main Navigation Group: "Expertise"**

### Wound Care & Tissue (4 pages)
- `/solutions/wound-care` - Wound Care Overview
- `/solutions/wound` - Advanced Wound Care Solutions
- `/solutions/reconstruction` - Extremity Reconstruction
- `/solutions/dressings` - Surgical Dressings & Recovery

### Aesthetics (4 pages)
- `/solutions/aesthetics` - Aesthetics Overview
- `/solutions/shape` - Body Shaping Solutions
- `/solutions/renewal` - Skin Renewal & Rejuvenation
- `/solutions/volume` - Volume Restoration

### Regenerative Sciences (5 pages)
- `/solutions/regenerative-sciences` - Regenerative Sciences Overview
- `/solutions/regenerative` - Regenerative Medicine
- `/solutions/regentx-labs` - RegenTX Labs
- `/solutions/birth-tissue` - Birth Tissue Sciences
- `/solutions/biocare` - Biocare Division

### International (3 pages)
- `/solutions/international` - International Overview
- `/solutions/international/health-tech` - Health Technology Systems
- `/solutions/international/airway` - Airway Management Systems

### Divisions Hub Pages (3 pages)
- `/divisions/aesthetics` - Aesthetics Division Hub
- `/divisions/regentx` - RegenTX Division Hub
- `/divisions/wound-care` - Wound Care Division Hub

---

## Products (13 pages + 1 dynamic route)
**Main Navigation Group: "Products"**

### Main Products Pages
- `/products` - All Products Grid (searchable/filterable)
- `/products/[slug]` - **Dynamic Product Detail Page** (serves 47 products)

### Product Detail Pages (via dynamic route)

**Cell & Tissue (4 products)**
- `/products/camps` - CAMPs Technology Platform
- `/products/alloply` - alloPLY™ Wound Matrix
- `/products/caregraft` - caregraFT™ Wound Covering
- `/products/acapatch` - ACAPatch™ Surgical Mesh

**Aesthetics (7 products)**
- `/products/aveli` - Avéli™ Cellulite Treatment
- `/products/bellafill` - Bellafill™ Dermal Filler
- `/products/alloclae` - AlloClae™ Adipose Filler
- `/products/viality` - Viality™ Fat Transfer System
- `/products/silhouette` - Silhouette™ Thread Lift
- `/products/amplifine` - Amplifine™ PRP System
- `/products/sientra` - Sientra™ Breast Implants

**Regenerative Sciences (2 products)**
- `/products/regentx` - RegenTX Custom Therapies
- `/products/biocare` - Biocare Regenerative Products

**International (6 products)**
- `/products/lizard-health` - Lizard Health Platform
- `/products/airway-medix` - Airway Medix Systems
- `/products/expanders` - Breast Tissue Expanders
- `/products/implant-delivery` - Implant Delivery Device
- `/products/retractor` - Surgical Retractor System
- `/products/simpliderm` - SimpliDerm ADM

**Additional Products (28 more)**
- Various wound care, surgical, and specialty products
- Total: **47 product pages** served by dynamic route

---

## News & Media (3 pages)
**Main Navigation Group: "Company" → Newsroom**

- `/news` - News Hub (all articles)
- `/news/press` - Press Releases
- `/news/[slug]` - **Dynamic News Article Page**

---

## Careers (3 pages)
**Main Navigation Group: "Career"**

- `/careers` - Careers Overview
- `/careers/life` - Life at Tiger
- `/careers/jobs` - Open Positions (Greenhouse integration)

---

## Contact & Legal (5 pages)

### Contact
- `/contact` - Contact Our Team (form + info)

### Legal Pages
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service
- `/compliance` - Compliance & Regulations
- `/accessibility` - Accessibility Statement

---

## Development & Reference (2 pages)
- `/style` - Style Guide (typography, colors, components)
- `/404` - Custom 404 Not Found Page

---

## Site Statistics

### Content Distribution
- **Company Pages:** 12
- **Solutions/Expertise Pages:** 19
- **Product Pages:** 47 (via dynamic route) + 1 listing page
- **News Pages:** Dynamic (via CMS/MDX)
- **Careers Pages:** 3
- **Contact & Legal:** 5
- **Reference:** 2

### Technical Features
- **Dynamic Routes:** 2 (`/products/[slug]`, `/news/[slug]`)
- **MDX Content Files:** 47 products + news articles
- **Form Components:** Contact form (pending backend integration)
- **Search/Filter:** Products grid with live search and division filtering

### Navigation Structure
```
Main Navigation (4 items):
├── Expertise (Mega Menu with 4 groups)
├── Products (Mega Menu with 4 groups)
├── Company (Mega Menu with 4 groups)
└── Career (Simple link)

Footer Navigation (4 columns):
├── Company (22 links)
├── Expertise (16 links)
├── Products (19 links)
└── Career (3 links)
```

---

## Recent Changes (Cleanup - 2025-10-20)

### Removed Pages (18 total)
**Development/Testing:**
- `/luna` - Original template
- `/home-2` - Alternate homepage
- `/home-3` - Alternate homepage
- `/templates` - Component showcase
- `/colors` + layout - Color reference

**Redundant Company Pages:**
- `/company/about` → merged into `/company/overview`
- `/company/heritage` → merged into `/company/history`
- `/company/news` → redirects to `/news`

**Redundant Expertise Pages (5):**
- `/expertise/aesthetic` → use `/solutions/aesthetics`
- `/expertise/cell-tissue` → use `/solutions/wound-care`
- `/expertise/international` → use `/solutions/international`
- `/expertise/regenerative` → use `/solutions/regenerative-sciences`
- `/expertise/research` → merged into division pages

**Redundant Product Category Pages (5):**
- `/products/aesthetic` → use filters on `/products`
- `/products/devices` → use filters on `/products`
- `/products/surgical` → use filters on `/products`
- `/products/tissue` → use filters on `/products`
- `/products/wound-care` → use filters on `/products`

**Lines of Code Removed:** 2,328

---

## URL Patterns

### Static Routes
```
/{page}
/company/{page}
/solutions/{category}
/solutions/{category}/{sub-page}
/divisions/{division}
/careers/{page}
/news
/news/press
```

### Dynamic Routes
```
/products/[slug]        → 47 products
/news/[slug]            → news articles
```

### Special Pages
```
/404                    → Not Found
/style                  → Style Guide Reference
```

---

## Notes

- All products use single template: `/app/products/[slug]/page.tsx`
- Product data stored in MDX files: `/content/products/*.mdx`
- Navigation menus defined in: `/components/site/Navigation.tsx`
- Footer links defined in: `/components/site/Footer.tsx`
- Form components in: `/components/ui/form.tsx`
- Style guide compliance: 95% (only Audi Red #D5101F as custom color)
