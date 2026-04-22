"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Card, CardBody } from "@/components/ui/card";

const sections = [
  { badge: "Major Conference Venues", title: "Global presentation forums", items: [
    { title: "AATB Annual Meeting", description: "American Association of Tissue Banks - leading forum for tissue banking science and safety" },
    { title: "Wound Healing Society", description: "Premier organization for wound care research and clinical practice" },
    { title: "ASPS Annual Meeting", description: "American Society of Plastic Surgeons - plastic and reconstructive surgery innovations" },
    { title: "TERMIS World Congress", description: "Tissue Engineering and Regenerative Medicine International Society" },
    { title: "SAWC Conference", description: "Symposium on Advanced Wound Care - interdisciplinary wound management" },
    { title: "International Symposia", description: "Regional and international regenerative medicine conferences globally" }
  ]},
  { badge: "Presentation Types", title: "Diverse scientific communication formats", items: [
    { title: "Oral Presentations", description: "Invited lectures and podium presentations sharing breakthrough findings and clinical insights." },
    { title: "Scientific Posters", description: "Detailed visual presentations of research methods, data, and conclusions for scientific exchange." },
    { title: "Symposium Leadership", description: "Organizing and moderating scientific sessions bringing together field experts." },
    { title: "Educational Workshops", description: "Hands-on training sessions and educational forums for clinicians and researchers." }
  ]}
];

export default function PostersPresentationsPage() {
  return (
    <main className="min-h-screen">
      <Hero subtitle="Publications" title="Conference Presentations & Posters" description="Tiger BioSciences actively presents cutting-edge research at premier national and international medical conferences. Our presentations share the latest clinical data, mechanistic insights, and translational discoveries with the global medical community." primaryCTA={{ text: "Request Presentation Materials", href: "/contact" }} secondaryCTA={{ text: "Back to Publications", href: "/science/publications" }} backgroundImage="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png" size="large" />
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
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand/5 to-accent/5 p-12 text-center backdrop-blur">
            <h2 className="text-h1 font-light tracking-[-0.015em]">Access Presentation Materials</h2>
            <p className="mt-6 text-lead text-foreground/70 max-w-2xl mx-auto leading-relaxed">Posters and presentation slides available upon request</p>
            <div className="mt-8">
              <Link href="/contact" className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110 cursor-pointer">Request Materials</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
