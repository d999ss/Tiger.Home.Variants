"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

const engineeringCapabilities = [
  {
    badge: "Engineering Capabilities",
    title: "Complete in-house medical device development",
    items: [
      {
        title: "Tissue Processing Equipment",
        description:
          "Modular systems for tissue preparation, from grinders for fatty tissue processing to high-precision strainers and automated cutting stations for placenta and soft tissue. Built for cellular and acellular allografts, the platforms enable closed processing, integrated sensors, data logging, and full lot traceability. Scalable footprints, interchangeable tool sets, and serviceable designs deliver consistent yield, short cycle times, and minimized contamination risk.",
      },
      {
        title: "Surgical Tools & Delivery Systems",
        description:
          "From viscosity-matched applicators and Luer-compatible adapters to surgical instruments engineered for precise intraoperative delivery. Designs incorporate ergonomics and functionality, with sterilization, packaging, and IFU alignment built in. We design for reliable performance, iterate quickly with feedback, and deliver consistent quality across builds and batches, so you get dependable results today and steady improvements over time.",
      },
      {
        title: "3D Printing & Rapid Prototyping",
        description:
          "Advanced additive manufacturing enables shorter production times in fixture construction and accelerates product development through iterative prototyping. In addition, marketing and visual prototypes can be produced using full-colour 3D printers.",
      },
      {
        title: "Packaging & Sterile Barrier Systems",
        description:
          "Design and validation of sterile barrier systems, from material selection to seal design and kitting. We commission full packaging validation, seal strength and integrity, transport testing and shelf-life studies with accelerated and real-time aging. Artwork, IFU, and UDI-serialization are integrated for global compliance and traceability, while tamper-evidence, barcoding, and ergonomic opening features enhance clinical usability.",
      },
    ],
  },
  {
    badge: "Excellence",
    title: "ISO-certified development & quality control",
    items: [
      {
        title: "ISO 13485:2016 Certified",
        description:
          "Robust quality management system aligned with ISO 13485, covering procurement, design and development, distribution, and post-market activities. Risk management, design controls and supplier oversight are embedded across the lifecycle. Comprehensive documentation, traceability, and validated processes ensure repeatable outcomes and drive continuous improvement and regulatory confidence.",
      },
      {
        title: "Vertical Integration",
        description:
          "End-to-end control from concept to finished device: requirements capture, industrial design, prototyping, verification and validation under one roof. Tooling, fixturing, and test systems are designed in-house for process fidelity and rapid iteration. This structure compresses timelines, protects IP, and stabilizes cost and quality.",
      },
      {
        title: "Supply Chain Management",
        description:
          "Strategic sourcing built on qualified, dual-sourced suppliers and material specifications with full lot traceability. Demand planning, safety stocks, and controlled inventories safeguard continuity during market fluctuations. Incoming inspection, supplier scorecards, and periodic audits maintain conformance to drawings and standards.",
      },
      {
        title: "Regulatory Expertise",
        description:
          "In-house regulatory affairs guiding ISO certifications and country-specific registrations. Early regulatory pathway analysis informs design inputs, clinical evidence needs, and labelling. Technical files and submissions are prepared with harmonized standards, risk files, and usability data. Ongoing vigilance, change control, and field safety reporting keeps portfolios compliant and launch-ready.",
      },
    ],
  },
  {
    badge: "Automation & Process Excellence",
    title: "Automation & Process Excellence",
    items: [
      {
        title: "Automation Engineering",
        description:
          "Automated platforms for tissue processing, sterile packaging and in-line quality control that raise throughput without compromising Tiger's standards. We design and integrate robotics, machine vision, and smart sensors to stabilize yield and shorten cycle times. We engineer hygienic, cleanable architectures with redundant safety and remote diagnostics for fast service. Operator training, and documented SOPs ensure smooth adoption and sustained performance.",
      },
      {
        title: "Process Optimization",
        description:
          "Structured improvement of production flow, equipment design, and line balance to lift efficiency and product consistency. Tooling and fixtures are refined for ergonomics, cleanability and dimensional stability; maintenance strategies shift from reactive to predictive. Results are codified through standardized work, mistake-proofing, and clear control plans. The outcome: lower variability, shorter changeovers, higher first-pass yield and a stable platform for scale-up and regulatory readiness.",
      },
      {
        title: "Lean Digital Operations",
        description:
          "ERP-integrated workflows connect sourcing, warehousing, and production for real-time visibility and control. Lean principles guide inventory reduction, space optimization, and supplier responsiveness. The result: streamlined material flow, lower working capital, and a resilient, data-driven supply chain.",
      },
    ],
  },
];

export default function InternationalSolutionsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/videos/international.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/34" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center sm:px-6 md:px-12">
          <div className="mx-auto max-w-[700px] rounded-[12px] bg-white/78 p-6 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.10)] md:p-10">
            <span className="mb-4 inline-block text-[11px] font-normal tracking-[3.15px] text-[#231010]/40 uppercase md:mb-6 md:text-[12px]">
              International
            </span>
            <h1 className="font-display mb-4 text-[clamp(32px,5.5vw,64px)] leading-[1.02] md:leading-[0.9] font-light tracking-[-1.28px] text-[#231010] md:mb-6">
              The International Hub of Tiger BioSciences
            </h1>
            <p className="mb-8 text-[14px] leading-[1.6] font-light text-[#231010]/70 md:text-[16px] md:leading-[1.7]">
              Tiger BioSciences International stands for precise medical device
              engineering and will serve as the distribution center for Tiger
              BioSciences product solutions outside the United States.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TigerButton href="/products">View Products</TigerButton>
              <TigerButton href="#engineering" variant="secondary">
                Engineering Capabilities
              </TigerButton>
            </div>
          </div>
        </div>
      </section>

      {engineeringCapabilities.map((section, sectionIdx) => (
        <TigerSection
          id={sectionIdx === 0 ? "engineering" : undefined}
          key={sectionIdx}
          width="wide"
          bg="white"
        >
          {sectionIdx === 0 && (
            <div className="mb-16 flex justify-center">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">
                <Image
                  src="/division-logos/tiger_international_logo.png"
                  alt="Tiger BioSciences International"
                  fill
                  sizes="256px"
                  quality={100}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          )}
          <SectionHeader
            heading={section.title}
            align="left"
          />
          <div
            className={`grid grid-cols-1 gap-8 ${section.items.length === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}
          >
            {section.items.map((item, i) => (
              <motion.div
                key={i}
                initial={mounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
                whileInView={mounted ? { opacity: 1, y: 0 } : {}}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="h-full space-y-4 border-t border-[#231010]/10 px-2 pt-6">
                  <h3 className="font-display text-[28px] leading-[1.08] font-light text-[#231010]">
                    {item.title}
                  </h3>
                  <p className="text-[14.6px] leading-[26px] font-light text-[#231010]/64">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </TigerSection>
      ))}

      <TigerSection width="narrow" bg="white">
        <SectionHeader
          label="Headquarters"
          heading="Donaueschingen"
        />
        <div className="mx-auto max-w-md space-y-2 text-center">
          <p className="text-lg font-medium text-[#231010]">
            Tiger BioSciences International GmbH
          </p>
          <p className="text-[14.6px] leading-[26px] font-light text-[#231010]/60">
            Dürrheimer Straße 37
          </p>
          <p className="text-[14.6px] leading-[26px] font-light text-[#231010]/60">
            Donaueschingen, 78166 / Germany
          </p>
          <div className="space-y-2 pt-6">
            <p>
              <a
                href="mailto:info@tiger-international.eu"
                className="text-[#D2A62C] hover:underline"
              >
                info@tiger-international.eu
              </a>
            </p>
          </div>
        </div>
      </TigerSection>

      <TigerSection width="narrow">
        <div className="text-center">
          <h2
            className="font-display mb-8 leading-[1.02] font-light tracking-[-1px] text-[#231010]"
            style={{ fontSize: "clamp(36px, 3.3vw, 47.5px)" }}
          >
            Bringing Regenerative Solutions Worldwide
          </h2>
          <p className="mx-auto mb-10 max-w-[672px] text-[14.6px] leading-[26px] font-light text-[#231010]">
            From engineering to distribution, Tiger BioSciences International
            delivers proven cellular and tissue technologies across EU, MEA, and
            APAC markets.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TigerButton href="/products" arrow>
              View Products
            </TigerButton>
            <TigerButton href="/contact" variant="secondary">
              Contact European Team
            </TigerButton>
          </div>
        </div>
      </TigerSection>
    </main>
  );
}
