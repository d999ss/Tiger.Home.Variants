"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";

const clinicalApplications = [
  { title: "Dermal Renewal", description: "Advanced matrices that stimulate collagen production and cellular renewal for improved skin quality, texture, and resilience." },
  { title: "Soft Tissue Restoration", description: "Regenerative solutions for restoring volume and function to soft tissues affected by aging, trauma, or disease." },
  { title: "Functional Recovery", description: "Therapeutic approaches that restore tissue function and mechanical properties through guided regeneration." }
];

const regenerativeTechnology = [
  { title: "Growth Factor Delivery", description: "Native growth factors preserved within extracellular matrix scaffolds provide sustained biological signals that activate resident stem cells and promote tissue regeneration." },
  { title: "Cell Recruitment", description: "Chemotactic gradients attract host progenitor cells to the treatment site, facilitating cellular repopulation and new tissue formation." },
  { title: "Matrix Remodeling", description: "Controlled degradation and replacement with native tissue allows progressive restoration of tissue architecture and biomechanical properties." },
  { title: "Immunomodulation", description: "Anti-inflammatory properties modulate immune response to favor constructive remodeling over scar tissue formation." }
];

const therapeuticBenefits = [
  { title: "Improved Function", description: "Restoration of tissue biomechanical properties improves functional capacity and reduces limitations in daily activities." },
  { title: "Pain Reduction", description: "Tissue regeneration and inflammation modulation provide sustained pain relief without ongoing pharmaceutical intervention." },
  { title: "Enhanced Healing", description: "Accelerated tissue repair and organized regeneration lead to faster recovery and return to normal activities." },
  { title: "Quality Tissue Formation", description: "Promotes development of organized, functional tissue rather than disorganized scar tissue with compromised properties." },
  { title: "Long-term Efficacy", description: "Sustained benefits result from actual tissue regeneration rather than temporary symptomatic relief." },
  { title: "Minimally Invasive Options", description: "Injectable and minimally invasive delivery methods reduce surgical trauma and facilitate rapid recovery." }
];

const productPortfolio = [
  { title: "Amniotic Membranes", description: "Birth tissue products rich in growth factors and cytokines that promote cellular proliferation, reduce inflammation, and accelerate tissue renewal." },
  { title: "Injectable Matrices", description: "Micronized extracellular matrix particles for minimally invasive delivery of regenerative scaffolds to target tissues." },
  { title: "Dermal Scaffolds", description: "Intact tissue matrices that provide three-dimensional scaffolding for cellular infiltration and organized tissue regeneration." },
  { title: "Combination Therapies", description: "Multi-component systems combining scaffolds, biological factors, and cellular elements for enhanced regenerative potential." }
];

const clinicalSupport = [
  { title: "Treatment Protocols", description: "Evidence-based protocols guide product selection, dosing, and treatment intervals for optimal regenerative outcomes." },
  { title: "Physician Training", description: "Comprehensive education programs teach proper technique and patient selection for regenerative therapies." },
  { title: "Clinical Evidence", description: "Robust clinical data and published studies support efficacy claims and guide clinical decision-making." }
];

export default function RenewalSolutions() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Renewal Solutions"
        description="Cutting-edge regenerative therapies that harness the body's natural healing mechanisms to renew, restore, and rejuvenate damaged or aging tissues."
        backgroundImage="/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png"
        size="large"
      />

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Clinical Applications</span>
            <h2 className="text-h1 text-foreground">Comprehensive approaches to tissue renewal and restoration</h2>
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
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Regenerative Technology</span>
            <h2 className="text-h1 text-foreground">Harnessing biological signals for tissue renewal</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {regenerativeTechnology.map((item, i) => (
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
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Therapeutic Benefits</span>
            <h2 className="text-h1 text-foreground">Clinical outcomes that enhance quality of life</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {therapeuticBenefits.map((item, i) => (
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
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Product Portfolio</span>
            <h2 className="text-h1 text-foreground">Diverse formats for varied clinical needs</h2>
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
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Clinical Support</span>
            <h2 className="text-h1 text-foreground">Comprehensive resources for optimal therapeutic outcomes</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clinicalSupport.map((item, i) => (
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
