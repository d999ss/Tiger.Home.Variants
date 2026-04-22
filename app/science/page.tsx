"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FlaskConicalIcon, FileTextIcon, MicroscopeIcon, ShieldCheckIcon, ArrowRightIcon } from "lucide-react";

const stats = [
  { value: "Multiple", title: "Clinical Trials", description: "Active research programs" },
  { value: "ISO", title: "Certified", description: "13485:2016 Quality Systems" }
];

const scienceAreas = [
  { title: "Pipeline", href: "/science/pipeline", icon: FlaskConicalIcon, description: "Research programs spanning early discovery through clinical validation, supported by strategic partnerships with world-class institutions.", highlights: ["Current Research Programs", "Active Clinical Trials", "Study Partners & Collaborators", "Translational Research"] },
  { title: "Publications", href: "/science/publications", icon: FileTextIcon, description: "Peer-reviewed publications in premier journals, conference presentations, and comprehensive scientific bibliography.", highlights: ["Peer-Reviewed Publications", "Top-Tier Journal Articles", "Conference Presentations", "Citations Database"] },
  { title: "Early Research", href: "/science/early-research", icon: MicroscopeIcon, description: "Fundamental research into platform science, intellectual property, and CAMPs technology development.", highlights: ["Platform Science Research", "Intellectual Property", "CAMPs Technology Innovation", "R&D Investment"] },
  { title: "Clinical Research", href: "/science/clinical-research", icon: ShieldCheckIcon, description: "Excellence in clinical research governance, ethics, quality assurance, and regulatory compliance.", highlights: ["GCP Compliance", "Ethical Oversight", "Quality Assurance Systems", "Regulatory Certifications"] }
];

const sections = [
  { badge: "Scientific Approach", title: "Principles guiding our research and development", items: [
    { title: "Evidence-Based Innovation", description: "Every product development decision grounded in rigorous preclinical research and clinical validation." },
    { title: "Scientific Transparency", description: "Commitment to publishing our research in peer-reviewed journals and presenting at major medical conferences." },
    { title: "Ethical Excellence", description: "Unwavering commitment to research ethics, human subject protection, and regulatory compliance." },
    { title: "Collaborative Research", description: "Strategic partnerships with leading academic medical centers and clinical investigators worldwide." },
    { title: "Patient-Centered Focus", description: "Every research program designed to address unmet clinical needs and improve patient outcomes." }
  ]}
];

export default function SciencePage() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-[100dvh] w-full items-end overflow-hidden pb-6 md:h-[860px] md:items-center md:pb-0">
        <Image
          src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png"
          alt="Science laboratory"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#efedea]/48" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(239,237,234,0.94) 0%, rgba(239,237,234,0.82) 38%, rgba(239,237,234,0.28) 68%, rgba(239,237,234,0.1) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-[42%]"
          style={{
            background:
              "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.76) 34%, rgba(239,237,234,0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-14">
          <div className="w-full max-w-[640px] space-y-4 rounded-[16px] bg-[#f7f1ea]/84 p-6 shadow-[0_24px_60px_rgba(35,16,16,0.12)] backdrop-blur-sm md:space-y-6 md:p-10">
            <div className="flex items-center gap-2 uppercase text-[#8C1D18]">
              <span className="font-[Neuropa] text-[16px] leading-[24px]">
                Tiger BioSciences
              </span>
              <span className="font-[Archivo] text-[8px] font-medium tracking-[-0.4px]">
                &trade;
              </span>
              <span className="text-[12px] font-normal tracking-[3px]">
                Our Science
              </span>
            </div>
            <h1 className="font-display text-[clamp(34px,5.8vw,82px)] leading-[0.9] font-light tracking-[-1.3px] text-[#231010]">
              Innovation Across Disciplines
            </h1>
            <p className="max-w-[520px] text-[17px] leading-[1.75] font-light text-[#231010]/82 md:text-[18px]">
              From early discovery to clinical validation, Tiger Bio&apos;s
              science unites technology, safety, and regenerative design. We
              invest in fundamental research, maintain rigorous clinical
              standards, and publish our findings in premier peer-reviewed
              journals advancing the field of regenerative medicine through
              scientific excellence.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Button variant="primary" size="md" asChild>
                <Link href="/science/publications" className="cursor-pointer">
                  View Publications
                </Link>
              </Button>
              <Button variant="outline" size="md" asChild>
                <Link href="/science/pipeline" className="cursor-pointer">
                  Explore Pipeline
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Card>
                  <CardBody>
                    <div className="text-4xl font-display font-light text-brand mb-2">{stat.value}</div>
                    <h3 className="font-display text-xl font-medium mb-2">{stat.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{stat.description}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Scientific Pillars</span>
            <h2 className="text-h1 text-foreground">Core research areas</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {scienceAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <Link href={area.href} className="group block h-full cursor-pointer">
                    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                      <CardBody>
                        <Icon className="size-8 text-brand mb-4" />
                        <h3 className="text-h3 font-light">{area.title}</h3>
                        <p className="font-body text-muted-foreground mb-6">{area.description}</p>
                        <div className="space-y-2 mb-6">
                          {area.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                              <div className="mt-1 size-1.5 rounded-full bg-brand" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                          Explore
                          <ArrowRightIcon className="ml-2 size-4" />
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {sections.map((section, sectionIdx) => (
        <section key={sectionIdx} className={`relative py-10 md:py-[76px] bg-gradient-to-b ${sectionIdx % 2 === 0 ? 'from-background via-muted/30 to-muted/40' : 'from-muted/40 via-muted/20 to-background'}`}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">{section.badge}</span>
              <h2 className="text-h1 text-foreground">{section.title}</h2>
            </div>
            <div className={`grid grid-cols-1 gap-6 ${section.items.length === 3 ? 'md:grid-cols-1 lg:grid-cols-1' : section.items.length === 6 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
              {section.items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <Card>
                    <CardBody>
                      <h3 className="text-h3 font-light">{item.title}</h3>
                      <p className="font-body text-muted-foreground">{item.description}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand/5 to-accent/5 p-12 text-center backdrop-blur">
            <h2 className="text-h1 font-light tracking-[-0.015em]">Partner with Our Research Team</h2>
            <p className="mt-6 text-lead text-foreground/70 max-w-2xl mx-auto leading-relaxed">Interested in research collaboration, clinical trials, or learning more about our science?</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="md" asChild>
                <Link href="/contact" className="cursor-pointer">
                  Contact Research Team
                </Link>
              </Button>
              <Button variant="outline" size="md" asChild>
                <Link href="/science/publications" className="cursor-pointer">
                  Browse Publications
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
