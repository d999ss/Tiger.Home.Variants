export type NavItem = { label: string; href: string }
export type NavGroup = { title: string; items: NavItem[] }
export type FeatureCard = { badge: string; title: string; body: string; cta: { label: string; href: string }; image?: string }
export type MegaSection = { id: "company"|"expertise"|"products"; groups: NavGroup[]; feature: FeatureCard }

export const MEGA_SECTIONS: MegaSection[] = [
  {
    id: "company",
    groups: [
      { title: "Leadership & Vision", items: [
        { label: "Our Vision", href: "/company/credo" },
        { label: "Leadership", href: "/company/leadership" },
        { label: "Company", href: "/company/overview" },
      ]},
      { title: "Resources", items: [
        { label: "The Gift of Donation", href: "/company/donation" },
        { label: "Contact", href: "/contact" },
      ]},
    ],
    feature: {
      badge: "THE GIFT OF DONATION",
      title: "Our Science Begins with Generosity",
      body: "How human generosity fuels Tiger BioSciences' regenerative science. Every innovation begins with an act of grace.",
      cta: { label: "Explore Donation Hub", href: "/company/donation" },
      image: "/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_2.png"
    }
  },
  {
    id: "expertise",
    groups: [
      { title: "Wound Care Solutions", items: [
        { label: "Overview", href: "/solutions/wound-care" },
        { label: "Chronic Wound Care", href: "/solutions/wound" },
        { label: "Acute Wound Care", href: "/solutions/acute-wound-care" },
        { label: "Surgical Dressings", href: "/solutions/surgical-solutions" },
      ]},
      { title: "Aesthetic Solutions", items: [
        { label: "Overview", href: "/solutions/aesthetics" },
        { label: "Face", href: "/solutions/face" },
        { label: "Breast", href: "/solutions/breast" },
        { label: "Body", href: "/solutions/body" },
      ]},
      { title: "Tissue Technology", items: [
        { label: "Overview", href: "/science/early-research/camps-tech" },
        { label: "Research & Development", href: "/science/early-research/camps-tech/research" },
        { label: "CAMPs Technology", href: "/science/early-research/camps-tech/platforms" },
      ]},
      { title: "International", items: [
        { label: "Overview", href: "/solutions/international" },
        { label: "Global Partnerships", href: "/solutions/international/partnerships" },
        { label: "Distribution Networks", href: "/solutions/international/distribution" },
      ]},
    ],
    feature: {
      badge: "EXPERTISE",
      title: "Innovation Across Disciplines",
      body: "From cell & tissue engineering to regenerative sciences, Tiger BioSciences delivers clinical impact.",
      cta: { label: "Explore Wound Care Solutions", href: "/solutions/wound-care" },
      image: "/images/02.png"
    }
  },
  {
    id: "products",
    groups: [
      { title: "Wound Care Solutions", items: [
        { label: "caregraFT™", href: "/products/caregraft" },
        { label: "carePATCH®", href: "/products/carepatch" },
        { label: "carePAC™", href: "/products/carepac" },
        { label: "completeFT®", href: "/products/completeft" },
        { label: "HealPACK™", href: "/products/healpack" },
      ]},
      { title: "Aesthetic Solutions", items: [
        { label: "alloClae™", href: "/products/alloclae" },
        { label: "Amplifine®", href: "/products/amplifine" },
        { label: "Avéli®", href: "/products/aveli" },
        { label: "Bellafill®", href: "/products/bellafill" },
        { label: "Breast Tissue Expanders", href: "/products/expanders" },
        { label: "Sientra®", href: "/products/sientra" },
        { label: "Viality®", href: "/products/viality" },
      ]},
    ],
    feature: {
      badge: "ALL PRODUCTS",
      title: "Complete Product Portfolio",
      body: "Explore our comprehensive range of wound care, aesthetic, regenerative, and international solutions—all backed by scientific excellence.",
      cta: { label: "View All Products", href: "/products" },
      image: "/images/products-feature.png"
    }
  },
]

function labelFor(id: "company"|"expertise"|"products"){
  if(id === "company") return "About Tiger"
  if(id === "expertise") return "Our Expertise"
  return "Our Brands"
}

