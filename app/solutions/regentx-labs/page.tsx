"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";

const sections = [
  { badge: "Research Focus Areas", title: "Pioneering the future of regenerative medicine", items: [
    { title: "Advanced Biomaterials", description: "Developing next-generation tissue scaffolds with enhanced bioactivity, improved mechanical properties, and optimized remodeling kinetics." },
    { title: "Cellular Therapies", description: "Investigating cell-based approaches and hybrid constructs combining scaffolds with cellular components for enhanced regenerative potential." },
    { title: "Growth Factor Engineering", description: "Optimizing biological signaling through controlled release systems and engineered growth factor formulations." }
  ]},
  { badge: "Technology Platforms", title: "Core capabilities driving regenerative innovation", items: [
    { title: "Tissue Engineering", description: "State-of-the-art tissue engineering capabilities including 3D culture systems, bioreactor technologies, and advanced characterization methods for developing complex tissue constructs." },
    { title: "Biomaterial Science", description: "Comprehensive biomaterial characterization including mechanical testing, degradation studies, and biological activity assessment to optimize product performance." },
    { title: "Cell Biology", description: "Advanced cellular assays and stem cell research platforms investigating cell-material interactions and mechanisms of tissue regeneration." },
    { title: "Preclinical Models", description: "Validated animal models and ex vivo tissue systems for rigorous efficacy testing and safety evaluation of novel regenerative therapies." }
  ]},
  { badge: "Innovation Pipeline", title: "From discovery to clinical translation", items: [
    { title: "Discovery Research", description: "Early-stage exploration of novel concepts, materials, and therapeutic approaches with potential to advance regenerative medicine." },
    { title: "Technology Development", description: "Optimization and scale-up of promising technologies, developing robust manufacturing processes and characterization methods." },
    { title: "Translational Studies", description: "Bridging laboratory discoveries to clinical applications through rigorous preclinical validation and regulatory pathway development." },
    { title: "Clinical Development", description: "Designing and executing clinical trials to demonstrate safety and efficacy of novel regenerative medicine products." },
    { title: "Product Launch", description: "Seamless transition from development to commercialization with comprehensive launch support and post-market surveillance." },
    { title: "Lifecycle Management", description: "Continuous improvement of existing products through formulation optimization, new indications, and enhanced delivery systems." }
  ]}
];

export default function RegenTXLabs() {
  return (
    <main className="min-h-screen">
      <Hero title="RegenTX Labs" description="Our advanced research division driving innovation in regenerative medicine through cutting-edge science, translational research, and breakthrough technology development." backgroundImage="/images/03.png" size="large" />
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
