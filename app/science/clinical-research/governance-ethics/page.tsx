"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardBody } from "@/components/ui/card";

const sections = [
  { badge: "Ethical Frameworks", title: "Ethical Research Foundations", items: [
    { title: "Respect for Persons", description: "Protecting autonomy of research participants and providing additional protections via ethical regulatory oversight." },
    { title: "Transparency", description: "Open communication about research methods and findings." },
    { title: "Beneficence", description: "Obligation to promote the welfare of the patient we serve while ensuring risks are minimized to research participants through careful study design." },
    { title: "Institutional Review Board (IRB)", description: "All research protocols undergo independent IRB review ensuring ethical soundness, risk-benefit balance, and adequate subject protections." },
    { title: "Data Safety Monitoring", description: "All data has been and will continue to be collected with patient safety and privacy in mind while ensuring HIPAA compliance is maintained throughout to protect participant confidentiality." }
  ]}
];

export default function GovernanceEthicsPage() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-[85vh] w-full items-end overflow-hidden pb-6 md:h-[760px] md:items-center md:pb-0">
        <Image
          src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png"
          alt="Research governance"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#efedea]/54" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(239,237,234,0.95) 0%, rgba(239,237,234,0.84) 38%, rgba(239,237,234,0.28) 70%, rgba(239,237,234,0.08) 100%)",
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
                Clinical Research
              </span>
            </div>
            <h1 className="font-display text-[clamp(32px,5.4vw,74px)] leading-[0.92] font-light tracking-[-1.1px] text-[#231010]">
              Research Governance &amp; Ethical Oversight
            </h1>
            <p className="max-w-[520px] text-[17px] leading-[1.75] font-light text-[#231010]/82 md:text-[18px]">
              Tiger BioSciences maintains comprehensive ethical oversight and
              governance frameworks ensuring all clinical research meets the
              highest standards of human subject protection, informed consent,
              and scientific integrity. Our commitment to ethical research
              conduct is unwavering.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110 cursor-pointer"
              >
                Contact Ethics Team
              </Link>
              <Link
                href="/science/clinical-research"
                className="rounded-lg border border-border/60 bg-card/70 px-6 py-3 font-semibold transition-colors hover:bg-muted cursor-pointer"
              >
                Back to Clinical Research
              </Link>
            </div>
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="text-h1 font-light tracking-[-0.015em]">Ethics Questions?</h2>
            <p className="mt-6 text-lead text-foreground/70 max-w-2xl mx-auto leading-relaxed">Contact our ethics and governance team</p>
            <div className="mt-8">
              <Link href="/contact" className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110 cursor-pointer">Contact Ethics Team</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
