"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";

const sections = [
  { badge: "Birth Tissue Products", title: "Comprehensive portfolio leveraging placental tissue biology", items: [
    { title: "Amniotic Membrane", description: "Preserved amniotic membrane products rich in growth factors, cytokines, and extracellular matrix components for wound healing applications." },
    { title: "Umbilical Cord", description: "Wharton's jelly-derived products providing structural matrix and biological signaling for soft tissue reinforcement and regeneration." },
    { title: "Placental Tissue", description: "Placental-derived matrices offering unique immunomodulatory properties for applications requiring reduced inflammation." }
  ]},
  { badge: "Biological Properties", title: "Unique characteristics of birth tissues supporting regeneration", items: [
    { title: "Growth Factor Content", description: "Birth tissues naturally contain high concentrations of growth factors including EGF, bFGF, PDGF, and TGF-β that stimulate cellular proliferation, migration, and differentiation critical for tissue repair." },
    { title: "Anti-Inflammatory Activity", description: "Immunomodulatory cytokines and protease inhibitors reduce excessive inflammation, creating a pro-regenerative environment that favors organized tissue remodeling over scar formation." },
    { title: "Antimicrobial Properties", description: "Endogenous antimicrobial peptides and proteins provide natural protection against bacterial contamination while promoting healthy wound healing." },
    { title: "Extracellular Matrix", description: "Native ECM architecture provides structural scaffold and biological cues that guide cellular behavior and support tissue regeneration processes." }
  ]},
  { badge: "Clinical Applications", title: "Diverse therapeutic applications across medical specialties", items: [
    { title: "Wound Care", description: "Chronic and acute wound treatment leveraging anti-inflammatory and regenerative properties to accelerate closure and improve healing quality." },
    { title: "Ophthalmology", description: "Ocular surface reconstruction for corneal defects, chemical burns, and refractory dry eye leveraging membrane's anti-scarring properties." },
    { title: "Orthopedics", description: "Soft tissue repair for tendon, ligament, and cartilage injuries benefiting from growth factor content and anti-inflammatory effects." },
    { title: "Dental Applications", description: "Periodontal regeneration and oral surgery applications utilizing barrier membrane properties and regenerative signaling." },
    { title: "Pain Management", description: "Injectable formulations for joint pain and soft tissue injuries providing anti-inflammatory relief and tissue healing support." },
    { title: "Plastic Surgery", description: "Reconstructive procedures benefiting from reduced scarring and improved aesthetic outcomes with birth tissue products." }
  ]},
  { badge: "Processing Technology", title: "Preserving biological activity while ensuring safety", items: [
    { title: "Gentle Processing", description: "Proprietary minimal processing techniques preserve native tissue architecture, growth factors, and biological activity while ensuring product safety and sterility." },
    { title: "Cryopreservation", description: "Controlled-rate freezing maintains tissue viability and biological properties for fresh-frozen products requiring refrigerated storage." },
    { title: "Dehydration Technology", description: "Advanced dehydration methods create shelf-stable products with preserved growth factor activity and convenient room-temperature storage." },
    { title: "Micronization", description: "Particulate and injectable formulations created through controlled particle size reduction while maintaining biological functionality." }
  ]}
];

export default function BirthTissueSciences() {
  return (
    <main className="min-h-screen">
      <Hero title="Birth Tissue Sciences" description="Harnessing the unique regenerative and immunomodulatory properties of birth tissues to advance healing and tissue repair across diverse clinical applications." backgroundImage="/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png" size="large" />
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
