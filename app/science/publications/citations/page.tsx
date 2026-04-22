"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Card, CardBody } from "@/components/ui/card";

const sections = [
  { badge: "Citation Categories", title: "Diverse research publications", items: [
    { title: "Clinical Trials & Studies", description: "Prospective and retrospective clinical investigations evaluating safety, efficacy, and outcomes." },
    { title: "Case Reports & Series", description: "Detailed documentation of clinical applications and patient outcomes in diverse settings." },
    { title: "Review Articles", description: "Comprehensive reviews and meta-analyses incorporating our technologies in treatment algorithms." },
    { title: "Clinical Guidelines", description: "Evidence-based practice guidelines and position statements citing our products." }
  ]},
  { badge: "Research Domains", title: "Citations across medical specialties", items: [
    { title: "Wound Care", description: "Publications in diabetic foot ulcers, venous leg ulcers, pressure injuries, and surgical wounds." },
    { title: "Plastic Surgery", description: "Research in soft tissue reconstruction, breast surgery, and aesthetic applications." },
    { title: "Orthopedics", description: "Studies in extremity reconstruction, bone healing, and musculoskeletal applications." },
    { title: "Burn Care", description: "Literature on burn wound management and thermal injury reconstruction." },
    { title: "Sports Medicine", description: "Applications in athletic injuries and sports-related tissue damage." },
    { title: "Basic Science", description: "Mechanistic research on tissue engineering, cellular biology, and scaffold science." }
  ]}
];

export default function CitationsPage() {
  return (
    <main className="min-h-screen">
      <Hero subtitle="Publications" title="Journal Citations & Bibliography" description="Tiger BioSciences products and technologies are cited in hundreds of peer-reviewed publications by independent investigators worldwide. This growing body of literature validates the clinical utility and scientific basis of our regenerative medicine solutions." primaryCTA={{ text: "Request Citation Database", href: "/contact" }} secondaryCTA={{ text: "Back to Publications", href: "/science/publications" }} backgroundImage="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png" size="large" />
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
            <h2 className="text-h1 font-light tracking-[-0.015em]">Access Complete Citation Database</h2>
            <p className="mt-6 text-lead text-foreground/70 max-w-2xl mx-auto leading-relaxed">Searchable bibliography available for healthcare professionals and researchers</p>
            <div className="mt-8">
              <Link href="/contact" className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110 cursor-pointer">Request Citation Database</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
