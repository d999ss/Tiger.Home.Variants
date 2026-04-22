"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Card, CardBody } from "@/components/ui/card";

const sections = [
  { badge: "Research Domains", title: "Core research areas", items: [
    { title: "Extracellular Matrix Biology", description: "Understanding native ECM architecture, composition, and its role as a bioactive scaffold for cellular attachment, migration, and differentiation." },
    { title: "Cellular Viability & Function", description: "Optimizing processing conditions to preserve viable fibroblasts, endothelial cells, and progenitor populations with retained biological activity." },
    { title: "Growth Factor Dynamics", description: "Investigating endogenous growth factor retention, release kinetics, and their influence on wound healing and tissue regeneration." },
    { title: "Tissue Integration Mechanisms", description: "Studying how allograft matrices integrate with host tissue through cellular infiltration, angiogenesis, and matrix remodeling." }
  ]},
  { badge: "Scientific Approach", title: "Research methodologies", items: [
    { title: "In Vitro Models", description: "Cell culture systems and 3D tissue models for mechanistic studies and product optimization." },
    { title: "Preclinical Research", description: "Animal models providing translational insights before human clinical trials." },
    { title: "Advanced Analytics", description: "Proteomics, genomics, histology, and imaging technologies characterizing tissue properties." }
  ]}
];

export default function PlatformSciencePage() {
  return (
    <main className="min-h-screen">
      <Hero subtitle="Early Research" title="Platform Science" description="Tiger BioSciences invests in fundamental research to understand the biological principles governing tissue engineering, wound healing, and regenerative medicine. This platform science provides the mechanistic foundation for our product development and clinical innovation." primaryCTA={{ text: "Contact R&D Team", href: "/contact" }} secondaryCTA={{ text: "Back to Early Research", href: "/science/early-research" }} backgroundImage="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png" size="large" />
      {sections.map((section, sectionIdx) => (
        <section key={sectionIdx} className={`relative py-10 md:py-[76px] bg-gradient-to-b ${sectionIdx % 2 === 0 ? 'from-background via-muted/30 to-muted/40' : 'from-muted/40 via-muted/20 to-background'}`}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">{section.badge}</span>
              <h2 className="text-h1 text-foreground">{section.title}</h2>
            </div>
            <div className={`grid grid-cols-1 gap-6 ${section.items.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
              {section.items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <Card><CardBody><h3 className="font-display text-xl font-medium mb-3">{item.title}</h3><p className="font-body text-muted-foreground">{item.description}</p></CardBody></Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand/5 to-accent/5 p-12 text-center backdrop-blur">
            <h2 className="text-h1 font-light tracking-[-0.015em]">Research Collaboration</h2>
            <p className="mt-6 text-lead text-foreground/70 max-w-2xl mx-auto leading-relaxed">Opportunities for academic partnerships and collaborative research</p>
            <div className="mt-8">
              <Link href="/contact" className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110 cursor-pointer">Contact Research Team</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
