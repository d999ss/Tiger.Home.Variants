"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  AwardIcon,
  FileCheckIcon,
  ArrowRightIcon,
} from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

const stats = [
  {
    value: "GCP",
    title: "Compliant",
    description: "Good Clinical Practice standards followed",
  },
  {
    value: "ISO",
    title: "13485:2016",
    description: "Quality management system certified",
  },
  {
    value: "AATB",
    title: "Accredited",
    description: "American Association of Tissue Banks",
  },
  {
    value: "FDA",
    title: "Registered",
    description: "Registered medical device establishment",
  },
];

const researchAreas = [
  {
    title: "Governance & Ethics",
    href: "/science/clinical-research/governance-ethics",
    icon: ShieldCheckIcon,
    description:
      "Comprehensive ethical oversight and governance frameworks ensuring all research meets the highest standards of human subject protection and scientific integrity.",
    highlights: [
      "IRB Oversight & Compliance",
      "Informed Consent Processes",
      "Data Privacy & Protection",
      "Ethical Research Standards",
    ],
  },
  {
    title: "Quality Assurance",
    href: "/science/clinical-research/qa",
    icon: AwardIcon,
    description:
      "Rigorous quality systems ensuring clinical research integrity, data accuracy, and regulatory compliance through every stage of study conduct.",
    highlights: [
      "GCP Compliance",
      "Study Monitoring & Auditing",
      "Data Quality Management",
      "Corrective Action Protocols",
    ],
  },
  {
    title: "Regulatory Certificates",
    href: "/science/clinical-research/certifications",
    icon: FileCheckIcon,
    description:
      "Industry certifications and regulatory approvals demonstrating our commitment to excellence in clinical research and product development.",
    highlights: [
      "FDA Registration",
      "ISO 13485:2016 Certification",
      "AATB Accreditation",
      "International Standards",
    ],
  },
];

const sections = [
  {
    badge: "Research Principles",
    title: "Foundational commitments",
    items: [
      {
        title: "Patient Safety First",
        description:
          "Every research protocol prioritizes participant safety through rigorous risk assessment and monitoring.",
      },
      {
        title: "Scientific Integrity",
        description:
          "Transparent reporting, independent oversight, and ethical conduct in all research activities.",
      },
      {
        title: "Regulatory Excellence",
        description:
          "Full compliance with FDA, ICH, and international regulatory standards for clinical research.",
      },
    ],
  },
];

export default function ClinicalResearchPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#efedea]">
      <section className="relative flex min-h-[100dvh] w-full items-end overflow-hidden pb-6 md:h-[860px] md:items-center md:pb-0">
        <Image
          src="/images/press/clinical-trial.jpg"
          alt="Clinical research"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#efedea]/42" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(239,237,234,0.96) 0%, rgba(239,237,234,0.86) 34%, rgba(239,237,234,0.34) 64%, rgba(239,237,234,0.12) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-[48%]"
          style={{
            background:
              "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.82) 34%, rgba(239,237,234,0) 100%)",
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
                Clinical Research
              </span>
            </div>
            <h1 className="font-display text-[clamp(32px,5.5vw,80px)] leading-[0.9] font-light tracking-[-1.28px] text-[#231010]">
              Excellence in Clinical Research Governance
            </h1>
            <p className="max-w-[520px] text-[17px] leading-[1.75] font-light text-[#231010]/82 md:text-[18px]">
              Tiger BioSciences maintains the highest standards of clinical
              research conduct, ethical oversight, and regulatory compliance.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <TigerButton href="/contact" arrow>
                Contact Clinical Research
              </TigerButton>
              <TigerButton href="/science/pipeline" variant="glass">
                View Pipeline
              </TigerButton>
            </div>
          </div>
        </div>
      </section>

      <TigerSection width="full">
        <SectionHeader
          label="Clinical Research"
          heading="Quality and compliance built into every study"
          body="Tiger BioSciences maintains the highest standards of clinical research conduct, ethical oversight, and regulatory compliance."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[12px] bg-[#fbfcff] p-8 md:p-10"
          >
            <div className="mb-8 h-[2px] w-16 bg-[#8C1D18]/30" />
            <p className="max-w-[52ch] text-[16px] leading-[1.9] font-light text-[#231010]/72">
              Tiger BioSciences maintains the highest standards of clinical
              research conduct, ethical oversight, and regulatory compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-[12px] bg-[#f5f0e8] p-6"
              >
                <div className="mb-2 font-display text-[36px] leading-none font-light text-[#231010]">
                  {stat.value}
                </div>
                <h3 className="mb-2 font-display text-[22px] leading-[1.05] font-light text-[#231010]">
                  {stat.title}
                </h3>
                <p className="text-[14px] leading-[24px] font-light text-[#231010]/62">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </TigerSection>

      <TigerSection width="wide" bg="white">
        <SectionHeader
          label="Clinical Research Excellence"
          heading="Research oversight areas"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {researchAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link href={area.href} className="group block h-full">
                  <div className="flex h-full flex-col rounded-[12px] bg-[#f5f0e8] p-8">
                    <div className="mb-6 flex items-center justify-between">
                      <Icon className="size-8 text-[#8C1D18]/70" />
                      <div className="h-[2px] w-12 bg-[#8C1D18]/20 transition-all duration-300 group-hover:w-16" />
                    </div>
                    <h3 className="mb-4 font-display text-[32px] leading-none font-light tracking-[-0.5px] text-[#231010]">
                      {area.title}
                    </h3>
                    <p className="mb-6 text-[14.6px] leading-[26px] font-light text-[#231010]/66">
                      {area.description}
                    </p>
                    <div className="mb-6 space-y-2">
                      {area.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-2 text-[13px] leading-[22px] text-[#231010]/60"
                        >
                          <div className="mt-[9px] size-1.5 rounded-full bg-[#8C1D18]/35" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center gap-2 text-[13px] font-medium text-[#8C1D18] transition-transform duration-300 group-hover:translate-x-1">
                      Learn More
                      <ArrowRightIcon className="size-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </TigerSection>

      {sections.map((section) => (
        <TigerSection key={section.title} width="wide">
          <SectionHeader label={section.badge} heading={section.title} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-[12px] bg-[#fbfcff] p-8"
              >
                <h3 className="mb-3 font-display text-[28px] leading-[1] font-light tracking-[-0.4px] text-[#231010]">
                  {item.title}
                </h3>
                <p className="text-[14.6px] leading-[26px] font-light text-[#231010]/66">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </TigerSection>
      ))}

      <TigerSection width="narrow" bg="white">
        <div className="text-center">
          <span className="mb-8 inline-block text-[12px] leading-[15.3px] font-normal tracking-[3.15px] text-[#8C1D18] uppercase">
            Partner in Clinical Research
          </span>
          <h2
            className="font-display mb-8 leading-none font-light tracking-[-1px] text-[#231010]"
            style={{ fontSize: "clamp(36px, 3.3vw, 47.5px)" }}
          >
            Partner in Clinical Research
          </h2>
          <p className="mx-auto mb-10 max-w-[672px] text-[14.6px] leading-[26px] font-light text-[#231010]">
            Interested in collaborating on clinical research or learning more
            about our quality standards?
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TigerButton href="/contact" arrow>
              Contact Clinical Research
            </TigerButton>
            <TigerButton href="/science/pipeline" variant="secondary">
              View Pipeline
            </TigerButton>
          </div>
        </div>
      </TigerSection>
    </main>
  );
}
