"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

const featuredProducts = [
  {
    title: "caregraFT™",
    href: "/products/caregraft",
    description:
      "Innovative tissue allograft for surgical and chronic wound applications.",
  },
  {
    title: "completeFT®",
    href: "/products/completeft",
    description: "Full-thickness tissue graft for comprehensive wound care.",
  },
  {
    title: "HealPACK™",
    href: "/products/healpack",
    description: "Comprehensive wound dressing system for optimal outcomes.",
  },
];

const capabilities = [
  {
    badge: "Wound Care Solutions",
    title: "Advanced Solutions for Complex and Chronic Wounds",
    items: [
      {
        title: "Chronic Wounds",
        description:
          "Innovative research and development driving CAMPs technologies tailored for chronic and hard-to-treat wounds.",
      },
      {
        title: "Acute Wounds",
        description:
          "Advanced surgical solutions for surgical incisions and partial and full thickness injuries.",
      },
      {
        title: "Surgical Dressings",
        description:
          "Highest quality surgical dressings and post-operative care products supporting improved patient outcomes across diverse clinical applications.",
      },
    ],
  },
  {
    badge: "Our Brands",
    title: "Trusted brands serving wound care needs",
    items: [
      {
        title: "Tiger Wound Care",
        description:
          "Comprehensive cellular and acellular allograft solutions for chronic and acute wound management across all care settings.",
      },
      {
        title: "Extremity Care",
        description:
          "Focused on cell and tissue technologies that support the repair, reconstruction, replacement, or supplementation of the patient's own tissue.",
      },
      {
        title: "Encore Surgical Dressings",
        description:
          "Professional-grade surgical dressings and post-operative care solutions ensuring optimal patient outcomes.",
      },
    ],
  },
];

export default function WoundCareSolutionsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="relative flex h-[100dvh] w-full items-end overflow-hidden pb-6 md:h-[860px] md:items-center md:pb-0">
        <Image
          src="/images/wound-care-overview.webp"
          alt="Tiger Wound Care"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-white/20" />
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-[55%]"
          style={{
            background:
              "linear-gradient(to top, #fbfcff 0%, rgba(251,252,255,0.92) 30%, rgba(251,252,255,0.52) 60%, rgba(251,252,255,0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-14">
          <div className="w-full max-w-[640px] space-y-4 rounded-[12px] bg-white/82 p-6 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.10)] md:space-y-6 md:p-10">
            <div className="flex items-center gap-2 text-[#231010]/55 uppercase">
              <span className="font-[Neuropa] text-[16px] leading-[24px]">
                Tiger BioSciences
              </span>
              <span className="font-[Archivo] text-[8px] font-medium tracking-[-0.4px]">
                &trade;
              </span>
              <span className="text-[12px] font-normal tracking-[3px]">
                Wound Care
              </span>
            </div>
            <h1 className="font-display text-[clamp(32px,5.5vw,80px)] leading-[1.02] md:leading-[0.9] font-light tracking-[-1.28px] text-[#231010]">
              Advanced tissue solutions for wound care
            </h1>
            <p className="max-w-[520px] text-[18px] leading-[1.6] font-light text-[#231010]">
              Cutting-edge cellular, acellular, and matrix-like products (CAMPs)
              designed to address both acute and chronic wounds.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <TigerButton href="/products" arrow>
                View Products
              </TigerButton>
            </div>
          </div>
        </div>
      </section>

      <TigerSection id="intro" width="narrow">
        <div className="space-y-16">
          <div className="flex justify-center">
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">
              <Image
                src="/division-logos/tiger_wound_care_logo.png"
                alt="Tiger Wound Care"
                fill
                sizes="256px"
                quality={100}
                className="object-contain"
                priority
              />
            </div>
          </div>
          <SectionHeader
            label="Wound Care"
            heading="Advanced Solutions for Complex and Chronic Wounds"
            body="Tiger BioSciences develops cutting-edge cellular, acellular, and matrix-like products (CAMPs) designed to address both acute and chronic wounds."
          />
          <div className="mx-auto max-w-[768px] space-y-4 text-center">
            <p className="text-[14.6px] leading-[26px] font-light text-[#231010]">
              Tiger BioSciences develops cutting-edge cellular, acellular, and
              matrix-like products (CAMPs) designed to address both acute and
              chronic wounds. Through a unique, science-driven approach to wound
              care, the company delivers advanced solutions that empower
              providers and improve outcomes for patients.
            </p>
            <p className="mt-4 text-[14.6px] leading-[26px] font-light text-[#231010]/60">
              By creating and promoting clinically validated, scientifically
              backed technologies, Tiger BioSciences is helping to drive
              meaningful progress in wound closure.
            </p>
          </div>
        </div>
      </TigerSection>

      {capabilities.map((section, sectionIdx) => (
        <TigerSection
          id={sectionIdx === 0 ? "capabilities" : undefined}
          key={sectionIdx}
          width="wide"
          bg="white"
        >
          <SectionHeader label={section.badge} heading={section.title} />
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="h-full border-t border-[#231010]/10 px-2 pt-6">
                  <h3 className="font-display mb-3 text-[28px] leading-[1.08] font-light text-[#231010]">
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

      <TigerSection width="wide" bg="white">
        <SectionHeader
          label="Our Products"
          heading="Comprehensive wound care solutions"
          body="Advanced cellular, acellular, and matrix-like products (CAMPs) delivering evidence-based outcomes across all sites of care—empowering clinicians to achieve closure in acute and chronic wounds."
        />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={product.href} className="group block h-full">
                <div className="h-full border-t border-[#231010]/10 px-2 pt-6 transition-colors duration-200">
                  <h3 className="font-display mb-3 text-xl font-light text-[#231010] transition-colors group-hover:text-[#D2A62C]">
                    {product.title}
                  </h3>
                  <p className="mb-4 text-[14.6px] leading-[26px] font-light text-[#231010]/64">
                    {product.description}
                  </p>
                  <div className="flex items-center text-[13px] font-normal text-[#D2A62C] transition-transform group-hover:translate-x-1">
                    Learn More
                    <ArrowRightIcon className="ml-2 size-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <TigerButton href="/products" variant="secondary" arrow>
            View All Products
          </TigerButton>
        </div>
      </TigerSection>

      <TigerSection width="narrow" bg="white">
        <div className="text-center">
          <h2
            className="font-display mb-8 leading-[1.02] font-light tracking-[-1px] text-[#231010]"
            style={{ fontSize: "clamp(36px, 3.3vw, 47.5px)" }}
          >
            Advanced Solutions for Better Outcomes
          </h2>
          <p className="mx-auto mb-10 max-w-[672px] text-[14.6px] leading-[26px] font-light text-[#231010]">
            Connect with our team to learn how our wound care technologies can
            improve clinical results.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TigerButton href="/products" arrow>
              View Products
            </TigerButton>
            <TigerButton href="/contact" variant="secondary">
              Contact Our Team
            </TigerButton>
          </div>
        </div>
      </TigerSection>
    </main>
  );
}
