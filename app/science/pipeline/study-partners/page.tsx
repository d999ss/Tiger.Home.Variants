"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { Card, CardBody } from "@/components/ui/card";

const sections = [
  { badge: "Partnership Types", title: "Collaborative research across institutions", items: [
    { title: "Academic Medical Centers", description: "Collaborations with premier academic institutions conducting investigator-initiated studies and serving as clinical trial sites." },
    { title: "Clinical Research Organizations", description: "Partnerships with CROs providing clinical trial management, site recruitment, and regulatory support for multi-center studies." },
    { title: "Medical Advisory Board", description: "Network of key opinion leaders providing strategic guidance on research priorities, trial design, and clinical development strategy." },
    { title: "International Collaborators", description: "Global partnerships expanding access to diverse patient populations and facilitating regulatory approval in international markets." }
  ]},
  { badge: "Benefits of Partnership", title: "What collaborators gain", items: [
    { title: "Research Support", description: "Financial support, product supply, technical expertise, and dedicated research coordinators." },
    { title: "Scientific Collaboration", description: "Access to our R&D team, proprietary technologies, and opportunities for co-authorship and co-development." },
    { title: "Clinical Impact", description: "Contribute to advancing regenerative medicine and improving outcomes for patients with unmet clinical needs." }
  ]}
];

export default function StudyPartnersPage() {
  return (
    <main className="min-h-screen">
      <Hero subtitle="Research Pipeline" title="Study Partners & Collaborators" description="Tiger BioSciences partners with world-class academic medical centers, research institutions, and clinical investigators to accelerate innovation and ensure scientific rigor. Our collaborative approach combines our tissue engineering expertise with clinical and research excellence." primaryCTA={{ text: "Become a Partner", href: "/contact" }} secondaryCTA={{ text: "Back to Pipeline", href: "/science/pipeline" }} backgroundImage="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png" size="large" />
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
            <h2 className="text-h1 font-light tracking-[-0.015em]">Partner with Us</h2>
            <p className="mt-6 text-lead text-foreground/70 max-w-2xl mx-auto leading-relaxed">Interested in collaborating on clinical research?</p>
            <div className="mt-8">
              <Link href="/contact" className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110 cursor-pointer">Contact Research Partnerships</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
