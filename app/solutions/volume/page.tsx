"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";

const clinicalApplications = [
  { title: "Facial Volume Restoration", description: "Address age-related volume loss in cheeks, temples, and periorbital regions with natural-feeling, long-lasting results." },
  { title: "Soft Tissue Defects", description: "Restore volume to soft tissue defects following trauma, tumor resection, or congenital abnormalities." },
  { title: "Breast Volume Enhancement", description: "Augment breast volume for aesthetic or reconstructive purposes with biocompatible matrices that integrate naturally." }
];

const technologyPlatform = [
  { title: "Volumetric Stability", description: "Engineered matrix architecture maintains volume during tissue integration, providing predictable and consistent volumetric outcomes with minimal resorption." },
  { title: "Progressive Integration", description: "Controlled remodeling allows gradual replacement with native tissue while maintaining volume throughout the integration process." },
  { title: "Tissue Ingrowth", description: "Porous architecture facilitates cellular infiltration, neovascularization, and collagen deposition for stable, vascularized tissue." },
  { title: "Natural Feel", description: "Biomechanical properties match native tissue, creating soft, pliable volume that moves naturally and feels authentic to touch." }
];

const productFormats = [
  { title: "Sheet Matrices", description: "Multi-layered acellular dermal matrices in various thicknesses provide substantial volume augmentation for large defects." },
  { title: "Injectable Products", description: "Micronized matrix particles suspended in carrier solution enable minimally invasive volume restoration via injection." },
  { title: "Particulate Matrices", description: "Flowable particulate forms conform to irregular spaces and can be packed for precise volume control." },
  { title: "Pre-shaped Implants", description: "Anatomically designed constructs for specific sites combine immediate volume with regenerative properties." },
  { title: "Custom Configurations", description: "Matrices can be stacked, layered, or shaped to achieve desired volumetric goals for individual patients." },
  { title: "Combination Systems", description: "Multiple product formats can be combined in layered approach for optimal volume restoration and contouring." }
];

const clinicalOutcomes = [
  { title: "Volume Retention", description: "Clinical studies demonstrate excellent volume retention over time with minimal resorption compared to alternative volume restoration methods." },
  { title: "Natural Appearance", description: "Tissue integration creates smooth, natural contours without visible irregularities or palpable edges." },
  { title: "Patient Satisfaction", description: "High satisfaction scores reflect the natural feel, stable results, and lasting quality of volume restoration outcomes." },
  { title: "Low Complication Rates", description: "Biocompatible materials minimize inflammatory response and reduce complications compared to synthetic alternatives." }
];

const surgicalTechniques = [
  { title: "Technical Training", description: "Comprehensive workshops teach proper technique for matrix placement, layering, and fixation to achieve desired volume." },
  { title: "Volume Planning", description: "Pre-operative assessment tools and guidelines help surgeons determine appropriate product selection and volume requirements." },
  { title: "Case Consultation", description: "Expert clinical team provides case-specific guidance on technique selection and surgical planning for complex cases." }
];

export default function VolumeSolutions() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Volume Solutions"
        description="Innovative regenerative technologies for soft tissue volume restoration that provide natural tissue integration and long-lasting volumetric outcomes."
        backgroundImage="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png"
        size="large"
      />

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Clinical Applications</span>
            <h2 className="text-h1 text-foreground">Comprehensive volume restoration across medical and aesthetic specialties</h2>
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
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Technology Platform</span>
            <h2 className="text-h1 text-foreground">Advanced biomaterials engineered for volume restoration</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {technologyPlatform.map((item, i) => (
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
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Product Formats</span>
            <h2 className="text-h1 text-foreground">Versatile options for diverse volumetric needs</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productFormats.map((item, i) => (
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
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Clinical Outcomes</span>
            <h2 className="text-h1 text-foreground">Delivering predictable, long-lasting volume restoration</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {clinicalOutcomes.map((item, i) => (
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
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Surgical Techniques</span>
            <h2 className="text-h1 text-foreground">Expert guidance for optimal volume restoration</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {surgicalTechniques.map((item, i) => (
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
