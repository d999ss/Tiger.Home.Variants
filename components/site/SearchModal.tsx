"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SearchResult {
  title: string;
  description?: string;
  href: string;
  category: string;
  keywords?: string[];
}

const searchData: SearchResult[] = [
  // Solutions - Aesthetics
  { title: "Aesthetic Solutions", description: "Innovation across face, breast & body aesthetics", href: "/solutions/aesthetics", category: "Solutions", keywords: ["face", "breast", "body", "aesthetic", "beauty", "rejuvenation"] },
  { title: "Face", description: "Precision facial aesthetics and rejuvenation", href: "/solutions/face", category: "Aesthetics", keywords: ["facial", "rejuvenation", "volume", "wrinkles", "bellafill"] },
  { title: "Breast", description: "Breast aesthetics and reconstruction", href: "/solutions/breast", category: "Aesthetics", keywords: ["breast", "augmentation", "reconstruction", "sientra", "implants"] },
  { title: "Body", description: "Body contouring and aesthetics", href: "/solutions/body", category: "Aesthetics", keywords: ["body", "contouring", "cellulite", "aveli", "sculpting"] },

  // Solutions - Wound Care
  { title: "Wound Care Solutions", description: "Advanced regenerative biomaterials", href: "/solutions/wound-care", category: "Solutions", keywords: ["wound", "healing", "chronic", "surgical", "burn", "ulcer"] },
  { title: "Wound", description: "Comprehensive wound care solutions", href: "/solutions/wound", category: "Wound Care", keywords: ["wound healing", "biomaterials", "regenerative"] },
  { title: "Acute Wound Care", description: "Anatomical reconstruction solutions", href: "/solutions/acute-wound-care", category: "Wound Care", keywords: ["anatomy", "reconstruction", "caregraft", "tissue support", "acute", "wound care"] },
  { title: "Surgical Dressings", description: "Advanced surgical materials", href: "/solutions/surgical-solutions", category: "Wound Care", keywords: ["surgical", "intraoperative", "materials", "dressings"] },

  // Solutions - Regenerative Sciences
  { title: "Regenerative Sciences", description: "Cellular and tissue regeneration", href: "/solutions/regenerative-sciences", category: "Solutions", keywords: ["regenerative", "cellular", "tissue", "scaffolds", "stem cell"] },
  { title: "Cell", description: "Cellular therapy innovations", href: "/solutions/cell", category: "Regenerative", keywords: ["cellular", "cell therapy", "allograft", "tissue recovery"] },
  { title: "Tissue", description: "Tissue engineering platforms", href: "/solutions/tissue", category: "Regenerative", keywords: ["tissue", "engineering", "integration", "scaffolds"] },
  { title: "Scaffolds", description: "Advanced scaffold technologies", href: "/solutions/scaffolds", category: "Regenerative", keywords: ["scaffolds", "frameworks", "natural repair", "biomaterials"] },

  // Solutions - International
  { title: "International", description: "Engineering and manufacturing excellence", href: "/solutions/international", category: "Solutions", keywords: ["international", "engineering", "manufacturing", "devices", "equipment"] },

  // Products - Aesthetics
  { title: "Avéli®", description: "Revolutionary cellulite treatment", href: "/products/aveli", category: "Products", keywords: ["aveli", "cellulite", "body", "contouring"] },
  { title: "Bellafill®", description: "Long-lasting dermal filler", href: "/products/bellafill", category: "Products", keywords: ["bellafill", "filler", "wrinkles", "volume", "facial"] },
  { title: "alloClae™", description: "Structural adipose filler", href: "/products/alloclae", category: "Products", keywords: ["alloclae", "adipose", "filler", "volume", "facial"] },
  { title: "Viality®", description: "Advanced fat transfer system", href: "/products/viality", category: "Products", keywords: ["viality", "fat transfer", "body", "breast"] },
  { title: "Silhouette InstaLift®", description: "Facial lifting solution", href: "/products/silhouette", category: "Products", keywords: ["silhouette", "instalift", "lift", "facial", "rejuvenation"] },
  { title: "Amplifine®", description: "PRP technology", href: "/products/amplifine", category: "Products", keywords: ["amplifine", "prp", "platelet", "regenerative"] },
  { title: "Sientra®", description: "Premium breast implants", href: "/products/sientra", category: "Products", keywords: ["sientra", "breast", "implants", "silicone"] },
  { title: "Breast Tissue Expanders", description: "Tissue expansion devices", href: "/products/expanders", category: "Products", keywords: ["expanders", "breast", "tissue", "expansion", "reconstruction"] },
  { title: "Implant Delivery Device", description: "Surgical implant delivery", href: "/products/implant-delivery", category: "Products", keywords: ["implant", "delivery", "device", "surgical", "breast"] },
  { title: "Surgical Retractor", description: "Precision surgical instruments", href: "/products/retractor", category: "Products", keywords: ["retractor", "surgical", "instruments", "tools"] },

  // Products - Wound Care
  { title: "caregraFT™", description: "Advanced tissue platform", href: "/products/caregraft", category: "Products", keywords: ["caregraft", "wound", "tissue", "reconstruction"] },

  // Company
  { title: "Company Overview", description: "About Tiger BioSciences", href: "/company/overview", category: "Company", keywords: ["about", "company", "mission", "values"] },
  { title: "Leadership", description: "Our leadership team", href: "/company/leadership", category: "Company", keywords: ["leadership", "team", "executives", "management"] },
  { title: "Credo", description: "Our beliefs and values", href: "/company/credo", category: "Company", keywords: ["credo", "values", "beliefs", "principles"] },
  { title: "Donor Program", description: "Birth tissue donation", href: "/company/donation", category: "Company", keywords: ["donor", "donation", "birth tissue", "placenta"] },

  // Science
  { title: "Platform Science", description: "Our scientific foundation", href: "/science/early-research/platform-science", category: "Science", keywords: ["science", "research", "platform", "technology"] },

  // Careers
  { title: "Careers", description: "Join our team", href: "/careers", category: "Careers", keywords: ["careers", "jobs", "employment", "opportunities"] },
  { title: "Life at Tiger", description: "Working at Tiger BioSciences", href: "/careers/life", category: "Careers", keywords: ["culture", "life", "working", "team"] },
  { title: "Benefits", description: "Employee benefits", href: "/careers/benefits", category: "Careers", keywords: ["benefits", "perks", "compensation", "health"] },
  { title: "Open Positions", description: "View open roles", href: "/careers/jobs", category: "Careers", keywords: ["jobs", "positions", "openings", "hiring"] },

  // Press Room
  { title: "Press Room", description: "Latest news and press releases", href: "/press", category: "Press", keywords: ["press", "news", "media", "announcements", "releases"] },
  { title: "FDA 510(k) Clearance for Advanced Wound Matrix", description: "Latest regulatory approval expands our comprehensive portfolio of regenerative solutions", href: "/press/2025-01-15-fda-clearance", category: "Press", keywords: ["FDA", "regulatory", "wound care", "clearance", "approval", "announcement"] },
  { title: "Positive Clinical Trial Results for Aesthetic Injectable", description: "Groundbreaking study demonstrates superior patient satisfaction and efficacy outcomes", href: "/press/2024-12-10-clinical-trial-results", category: "Press", keywords: ["clinical trial", "aesthetics", "research", "dermal filler", "study", "results"] },
  { title: "European Distribution Partnership Announced", description: "Strategic partnership enhances international access to regenerative solutions", href: "/press/2024-11-20-partnership-announcement", category: "Press", keywords: ["partnership", "Europe", "international", "distribution", "expansion"] },
  { title: "alloClae™ Structural Adipose Filler Launch", description: "Innovative adipose-based filler for facial reconstruction and volume restoration", href: "/press/2024-10-15-product-launch", category: "Press", keywords: ["alloClae", "product launch", "aesthetics", "facial filler", "adipose"] },
  { title: "International Wound Healing Conference Presentation", description: "Latest research in tissue regeneration to be showcased at annual symposium", href: "/press/2024-09-05-conference-presentation", category: "Press", keywords: ["conference", "research", "wound care", "presentation", "event", "symposium"] },

  // Other
  { title: "Contact", description: "Get in touch with us", href: "/contact", category: "Contact", keywords: ["contact", "email", "phone", "reach", "support"] },
  { title: "Products", description: "Explore all products", href: "/products", category: "Products", keywords: ["products", "portfolio", "catalog"] },
  { title: "Gallery", description: "Image gallery", href: "/gallery", category: "Gallery", keywords: ["gallery", "images", "photos", "media"] },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();

  // Filter results based on query
  const results = useMemo(() => {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    const words = lowerQuery.split(" ").filter(Boolean);

    return searchData
      .map((item) => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery);
        const descMatch = item.description?.toLowerCase().includes(lowerQuery);
        const keywordMatch = item.keywords?.some(k => k.toLowerCase().includes(lowerQuery));
        const categoryMatch = item.category.toLowerCase().includes(lowerQuery);

        // Calculate relevance score
        let score = 0;
        if (titleMatch) score += 10;
        if (item.title.toLowerCase().startsWith(lowerQuery)) score += 5;
        if (descMatch) score += 5;
        if (keywordMatch) score += 3;
        if (categoryMatch) score += 2;

        // Multi-word matching
        words.forEach(word => {
          if (item.title.toLowerCase().includes(word)) score += 2;
          if (item.keywords?.some(k => k.toLowerCase().includes(word))) score += 1;
        });

        return { item, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(({ item }) => item);
  }, [query]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % results.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
          break;
        case "Enter":
          e.preventDefault();
          if (results[selectedIndex]) {
            router.push(results[selectedIndex].href);
            onClose();
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, router, onClose]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleResultClick = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0 bg-[#efedea] border border-black/[0.06] overflow-hidden shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-black/[0.08]">
          <Search className="size-5 text-[#231010]/30 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search for products, solutions, or pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-base text-[#231010] placeholder:text-[#231010]/40 outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 hover:bg-black/[0.04] rounded-[8px] transition-colors"
            >
              <X className="size-4 text-[#231010]/40" />
            </button>
          )}
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {query && results.length === 0 && (
            <div className="py-12 text-center text-sm text-[#231010]/50">
              No results found for &ldquo;{query}&rdquo;
            </div>
          )}

          {results.length > 0 && (
            <div className="p-2">
              {results.map((result, index) => (
                <button
                  key={result.href}
                  onClick={() => handleResultClick(result.href)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full text-left px-3 py-3 rounded-[12px] transition-all duration-200 group ${
                    index === selectedIndex
                      ? "bg-white/60 border border-black/[0.04]"
                      : "hover:bg-white/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-[#231010]/40 font-medium uppercase tracking-wide">
                          {result.category}
                        </span>
                      </div>
                      <div className="font-semibold text-sm text-[#231010] mb-1">
                        {result.title}
                      </div>
                      {result.description && (
                        <div className="text-xs text-[#231010]/50 line-clamp-1">
                          {result.description}
                        </div>
                      )}
                    </div>
                    <ArrowRight className={`size-4 flex-shrink-0 transition-transform ${
                      index === selectedIndex ? "text-[#231010] translate-x-1" : "text-[#231010]/30"
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          )}

        </div>

      </DialogContent>
    </Dialog>
  );
}
