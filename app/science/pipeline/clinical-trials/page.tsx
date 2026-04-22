"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Card, CardBody } from "@/components/ui/card";

const sections = [
  { badge: "Clinical Trial Types", title: "Rigorous research methodologies", items: [
    { title: "Randomized Controlled Trials", description: "Gold-standard study designs comparing our technologies to standard of care across multiple clinical sites." },
    { title: "Long-Term Safety Studies", description: "Extended follow-up protocols monitoring patient outcomes, adverse events, and durability of response." },
    { title: "Real-World Evidence", description: "Registry studies and post-market surveillance tracking clinical performance in diverse practice settings." },
    { title: "Comparative Effectiveness", description: "Head-to-head trials evaluating our products against alternative therapies to demonstrate clinical value." },
    { title: "Mechanistic Studies", description: "Translational research investigating biological mechanisms of action and predictors of therapeutic response." },
    { title: "Health Economics", description: "Cost-effectiveness analyses and health resource utilization studies supporting reimbursement and adoption." }
  ]}
];

export default function ClinicalTrialsPage() {
  return (
    <main className="min-h-screen">
      <Hero subtitle="Research Pipeline" title="Clinical Trials Portfolio" description="Tiger BioSciences conducts rigorous clinical trials to evaluate the safety, efficacy, and real-world effectiveness of our regenerative medicine technologies. Our trials are designed in collaboration with leading clinical investigators and follow the highest standards of clinical research." primaryCTA={{ text: "Contact Research Team", href: "/contact" }} secondaryCTA={{ text: "Back to Pipeline", href: "/science/pipeline" }} backgroundImage="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png" size="large" />
      {sections.map((section, sectionIdx) => (
        <section key={sectionIdx} className={`relative py-10 md:py-[76px] bg-gradient-to-b ${sectionIdx % 2 === 0 ? 'from-background via-muted/30 to-muted/40' : 'from-muted/40 via-muted/20 to-background'}`}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">{section.badge}</span>
              <h2 className="text-h1 text-foreground">{section.title}</h2>
            </div>
            <div className={`grid grid-cols-1 gap-6 ${section.items.length === 6 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
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
            <h2 className="text-h1 font-light tracking-[-0.015em]">Interested in Participating?</h2>
            <p className="mt-6 text-lead text-foreground/70 max-w-2xl mx-auto leading-relaxed">Clinical trial opportunities for investigators and sites</p>
            <div className="mt-8">
              <Link href="/contact" className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110 cursor-pointer">Contact Clinical Research</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
