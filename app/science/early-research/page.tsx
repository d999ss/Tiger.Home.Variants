"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardBody } from "@/components/ui/card";
import { FlaskRoundIcon, LightbulbIcon, MicroscopeIcon, ArrowRightIcon } from "lucide-react";

const stats = [
  { value: "R&D", title: "Investment", description: "Continuous commitment to scientific advancement" },
  { value: "Platform", title: "Technologies", description: "Proprietary CAMPs and processing methods" },
  { value: "Innovation", title: "Driven", description: "From discovery to clinical application" }
];

const researchAreas = [
  { title: "Platform Science", href: "/science/early-research/camps-tech/research", icon: MicroscopeIcon, description: "Fundamental research into tissue engineering, scaffold biology, cellular mechanisms, and regenerative medicine principles that form the foundation of our technologies.", highlights: ["Tissue Engineering Principles", "Scaffold Architecture Optimization", "Cellular Viability Research", "Biomaterial Sciences"] },
  { title: "Patents & Innovations", href: "/science/early-research/camps-tech/research", icon: LightbulbIcon, description: "Intellectual property portfolio protecting novel processing methods, product formulations, and therapeutic applications developed by our R&D team.", highlights: ["Processing Technologies", "Product Formulations", "Therapeutic Applications", "Manufacturing Methods"] },
  { title: "CAMPs Technology", href: "/science/early-research/camps-tech/platforms", icon: FlaskRoundIcon, description: "Research and development of Cellular Allograft Matrix Products (CAMPs) platform—our proprietary approach to preserving native tissue architecture and viable cells.", highlights: ["Matrix Preservation Methods", "Cellular Viability Optimization", "Growth Factor Retention", "Scaffold Functionality"] }
];

const sections = [
  { badge: "Research Impact", title: "Why early research matters", items: [
    { title: "Scientific Differentiation", description: "Deep understanding of tissue biology and processing enables development of superior products competitors cannot replicate." },
    { title: "Innovation Pipeline", description: "Early-stage research generates new intellectual property and product concepts that fuel future commercial opportunities." },
    { title: "Clinical Translation", description: "Mechanistic insights from basic research accelerate translation to clinical applications and improve product performance." }
  ]}
];

export default function EarlyResearchPage() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-[100dvh] w-full items-end overflow-hidden pb-6 md:h-[860px] md:items-center md:pb-0">
        <Image
          src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png"
          alt="Early research laboratory"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#efedea]/52" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(239,237,234,0.95) 0%, rgba(239,237,234,0.84) 38%, rgba(239,237,234,0.3) 68%, rgba(239,237,234,0.08) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-[42%]"
          style={{
            background:
              "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.78) 34%, rgba(239,237,234,0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-14">
          <div className="w-full max-w-[640px] space-y-4 rounded-[16px] bg-[#f7f1ea]/86 p-6 shadow-[0_24px_60px_rgba(35,16,16,0.12)] backdrop-blur-sm md:space-y-6 md:p-10">
            <div className="flex items-center gap-2 uppercase text-[#8C1D18]">
              <span className="font-[Neuropa] text-[16px] leading-[24px]">
                Tiger BioSciences
              </span>
              <span className="font-[Archivo] text-[8px] font-medium tracking-[-0.4px]">
                &trade;
              </span>
              <span className="text-[12px] font-normal tracking-[3px]">
                Early Research
              </span>
            </div>
            <h1 className="font-display text-[clamp(34px,5.8vw,82px)] leading-[0.9] font-light tracking-[-1.3px] text-[#231010]">
              Discovery &amp; Innovation
            </h1>
            <p className="max-w-[520px] text-[17px] leading-[1.75] font-light text-[#231010]/82 md:text-[18px]">
              Tiger BioSciences invests heavily in fundamental research to
              understand tissue biology, optimize processing technologies, and
              pioneer next-generation regenerative medicine solutions and
              devices. Our early-stage research fuels the innovation pipeline
              and strengthens the scientific foundation of our products.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110 cursor-pointer"
              >
                Contact Research Team
              </Link>
              <Link
                href="/science/pipeline"
                className="rounded-lg border border-border/60 bg-card/70 px-6 py-3 font-semibold transition-colors hover:bg-muted cursor-pointer"
              >
                View Pipeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Card><CardBody><div className="text-4xl font-display font-light text-brand mb-2">{stat.value}</div><h3 className="font-display text-xl font-medium mb-2">{stat.title}</h3><p className="font-body text-sm text-muted-foreground">{stat.description}</p></CardBody></Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Research Focus Areas</span>
            <h2 className="text-h1 text-foreground">Fundamental research domains</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {researchAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <Link href={area.href} className="group block h-full cursor-pointer">
                    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                      <CardBody>
                        <Icon className="size-8 text-brand mb-4" />
                        <h3 className="font-display text-xl font-medium mb-3">{area.title}</h3>
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
                          Learn More
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

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand/5 to-accent/5 p-12 text-center backdrop-blur">
            <h2 className="text-h1 font-light tracking-[-0.015em]">Collaborate on Research</h2>
            <p className="mt-6 text-lead text-foreground/70 max-w-2xl mx-auto leading-relaxed">Interested in research partnerships or licensing opportunities?</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110 cursor-pointer">Contact R&D Team</Link>
              <Link href="/science/publications" className="rounded-lg border border-border/60 bg-card/70 px-6 py-3 font-semibold transition-colors hover:bg-muted cursor-pointer">View Publications</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
