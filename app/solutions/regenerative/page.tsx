"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";

const sections = [
  { badge: "Core Technologies", title: "Foundational platforms driving regenerative innovation", items: [
    { title: "Extracellular Matrix Scaffolds", description: "Native tissue-derived matrices preserve three-dimensional architecture and biological cues that guide cellular behavior and tissue remodeling." },
    { title: "Growth Factor Systems", description: "Preserved endogenous growth factors and cytokines provide sustained biological signaling to recruit cells and stimulate regeneration." },
    { title: "Biomaterial Engineering", description: "Advanced processing techniques optimize material properties while maintaining biological activity for superior clinical performance." }
  ]},
  { badge: "Therapeutic Applications", title: "Comprehensive solutions across clinical specialties", items: [
    { title: "Wound Healing & Tissue Repair", description: "Regenerative matrices accelerate healing of acute and chronic wounds, promoting organized dermal regeneration with improved tissue quality compared to scar formation." },
    { title: "Reconstructive Surgery", description: "Acellular matrices provide structural support and biological scaffolding for complex reconstruction following trauma, cancer surgery, or congenital defects." },
    { title: "Orthopedic Applications", description: "Regenerative solutions support healing of tendon, ligament, and cartilage injuries by providing appropriate mechanical environment and biological signals." },
    { title: "Aesthetic Medicine", description: "Tissue engineering approaches deliver natural-appearing volume restoration and facial rejuvenation with long-lasting, biocompatible results." }
  ]},
  { badge: "Biological Mechanisms", title: "How regenerative solutions promote tissue healing", items: [
    { title: "Cell Recruitment", description: "Chemotactic factors attract host progenitor cells and stem cells to the injury site, initiating the regenerative cascade." },
    { title: "Cellular Proliferation", description: "Growth factors stimulate cell division and expansion, populating the scaffold with functional cells for tissue formation." },
    { title: "Angiogenesis", description: "Pro-angiogenic signals promote blood vessel formation, ensuring oxygen and nutrient supply for developing tissue." },
    { title: "Matrix Remodeling", description: "Controlled scaffold degradation is balanced with new matrix deposition, progressively replacing graft with native tissue." },
    { title: "Immunomodulation", description: "Anti-inflammatory properties shift immune response from pro-inflammatory to pro-regenerative phenotype." },
    { title: "Functional Integration", description: "Newly formed tissue integrates seamlessly with surrounding structures, restoring mechanical function and normal physiology." }
  ]}
];

export default function RegenerativeMedicine() {
  return (
    <main className="min-h-screen">
      <Hero title="Regenerative Medicine" description="Advanced regenerative medicine solutions that harness biological signals and native tissue architecture to promote organized tissue repair and functional restoration." backgroundImage="/images/02.png" size="large" />
      {sections.map((section, sectionIdx) => (
        <section key={sectionIdx} className={`relative py-10 md:py-[76px] bg-gradient-to-b ${sectionIdx % 2 === 0 ? 'from-background via-muted/30 to-muted/40' : 'from-muted/40 via-muted/20 to-background'}`}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">{section.badge}</span>
              <h2 className="text-h1 text-foreground">{section.title}</h2>
            </div>
            <div className={`grid grid-cols-1 gap-6 ${section.items.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : section.items.length === 6 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
              {section.items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-lg p-8 shadow-card h-full">
                    <h3 className="text-h3 font-light">{item.title}</h3>
                    <p className="font-body text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
