"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Card, CardBody } from "@/components/ui/card";

const sections = [
  { badge: "Program Areas", title: "Advancing regenerative medicine across domains", items: [
    { title: "Wound Care Innovations", description: "Next-generation CAMP platforms optimizing cellular viability, scaffold architecture, and growth factor retention for improved healing outcomes." },
    { title: "Aesthetic Medicine", description: "Novel approaches to soft tissue reconstruction, volume restoration, and regenerative aesthetics leveraging our tissue engineering expertise." },
    { title: "Tissue Processing and R&D", description: "Advanced processing technologies, biopreservation methods, and platform expansion into new therapeutic applications." },
    { title: "International Expansion", description: "Adapting and validating our technologies for global regulatory pathways and diverse patient populations." }
  ]}
];

export default function CurrentProgramsPage() {
  return (
    <main className="min-h-screen">
      <Hero subtitle="Research Pipeline" title="Current Research Programs" description="Tiger BioSciences is actively advancing multiple research programs spanning early discovery through clinical validation. Each program is designed to address unmet clinical needs with innovative regenerative medicine solutions." primaryCTA={{ text: "Contact Research Team", href: "/contact" }} secondaryCTA={{ text: "Back to Pipeline", href: "/science/pipeline" }} backgroundImage="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png" size="large" />
      {sections.map((section, sectionIdx) => (
        <section key={sectionIdx} className={`relative py-10 md:py-[76px] bg-gradient-to-b ${sectionIdx % 2 === 0 ? 'from-background via-muted/30 to-muted/40' : 'from-muted/40 via-muted/20 to-background'}`}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">{section.badge}</span>
              <h2 className="text-h1 text-foreground">{section.title}</h2>
            </div>
            <div className={`grid grid-cols-1 gap-6 md:grid-cols-2`}>
              {section.items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <Card><CardBody><h3 className="font-display text-xl font-medium mb-3">{item.title}</h3><p className="font-body text-muted-foreground">{item.description}</p></CardBody></Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand/5 to-accent/5 p-12 text-center backdrop-blur">
            <h2 className="text-h1 font-light tracking-[-0.015em]">Learn More About Our Research</h2>
            <p className="mt-6 text-lead text-foreground/70 max-w-2xl mx-auto leading-relaxed">Detailed program information available upon request for qualified collaborators</p>
            <div className="mt-8">
              <Link href="/contact" className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110 cursor-pointer">Request Information</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
