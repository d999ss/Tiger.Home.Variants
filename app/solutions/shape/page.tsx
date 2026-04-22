"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";

const clinicalApplications = [
  { title: "Facial Contouring", description: "Advanced matrices for facial augmentation, cheek enhancement, and chin contouring that integrate naturally for refined facial aesthetics." },
  { title: "Breast Aesthetics", description: "Tissue matrices that support breast augmentation, lift procedures, and revision surgery with natural feel and appearance." },
  { title: "Body Contouring", description: "Sculpting solutions for buttock augmentation, calf enhancement, and other body contouring procedures requiring natural tissue integration." }
];

const technologyAdvantages = [
  { title: "Natural Integration", description: "Native tissue architecture promotes cellular infiltration and neovascularization, resulting in soft, natural-feeling tissue that moves harmoniously with surrounding structures." },
  { title: "Predictable Results", description: "Controlled remodeling kinetics provide consistent, reproducible outcomes with minimal volume loss and excellent shape retention over time." },
  { title: "Minimal Inflammation", description: "Gentle processing reduces immunogenicity, minimizing post-operative inflammation and accelerating patient recovery with less discomfort." },
  { title: "Surgical Versatility", description: "Excellent handling properties and suture retention enable precise placement and fixation for refined aesthetic outcomes." }
];

const aestheticOutcomes = [
  { title: "Natural Appearance", description: "Seamless integration with native tissue creates smooth contours and natural-looking enhancement without artificial appearance." },
  { title: "Soft Texture", description: "Tissue remodeling produces soft, pliable results that feel natural to touch and move naturally with body motion." },
  { title: "Long-term Stability", description: "Durable tissue integration maintains aesthetic results over years with minimal shape change or volume loss." },
  { title: "Patient Satisfaction", description: "High patient satisfaction scores reflect the natural appearance, comfortable feel, and lasting quality of results." },
  { title: "Minimal Scarring", description: "Biocompatible materials promote organized tissue remodeling with reduced capsule formation and minimal visible scarring." },
  { title: "Revision Friendly", description: "Natural tissue integration facilitates future revisions or adjustments if desired without compromising surgical options." }
];

const productPortfolio = [
  { title: "Dermal Matrices", description: "Acellular dermal matrices in multiple thicknesses provide volume enhancement and structural support for facial and body contouring procedures." },
  { title: "Injectable Matrices", description: "Micronized matrix particles for minimally invasive soft tissue augmentation with progressive volume replacement by native tissue." },
  { title: "Composite Implants", description: "Pre-shaped constructs designed for specific anatomical sites combining structural support with regenerative properties." },
  { title: "Custom Formats", description: "Flexible sizing and configuration options allow surgeons to customize solutions for individual patient anatomy and aesthetic goals." }
];

const surgicalSupport = [
  { title: "Technical Training", description: "Comprehensive surgical workshops and hands-on training sessions teach optimal techniques for aesthetic applications." },
  { title: "Case Planning", description: "Pre-operative consultation services help surgeons select appropriate products and plan surgical approach for desired outcomes." },
  { title: "Clinical Evidence", description: "Published case studies and clinical data demonstrate successful outcomes across diverse aesthetic applications." }
];

export default function AestheticShape() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Aesthetic Shape Solutions"
        description="Innovative regenerative technologies for aesthetic contouring and body shaping that provide natural tissue integration and beautiful, long-lasting results."
        backgroundImage="/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png"
        size="large"
      />

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Clinical Applications
            </span>
            <h2 className="text-h1 text-foreground">Comprehensive solutions for aesthetic enhancement</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clinicalApplications.map((item, i) => (
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

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Technology Advantages
            </span>
            <h2 className="text-h1 text-foreground">Superior biomaterial properties for aesthetic procedures</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {technologyAdvantages.map((item, i) => (
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

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Aesthetic Outcomes
            </span>
            <h2 className="text-h1 text-foreground">Beautiful, natural results that last</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aestheticOutcomes.map((item, i) => (
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

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Product Portfolio
            </span>
            <h2 className="text-h1 text-foreground">Tailored solutions for diverse aesthetic applications</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {productPortfolio.map((item, i) => (
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

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Surgical Support
            </span>
            <h2 className="text-h1 text-foreground">Expert guidance for optimal aesthetic results</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {surgicalSupport.map((item, i) => (
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
    </main>
  );
}
