"use client";
import { VariantNav } from "@/components/ui/variant-nav";
import { VariantTopNav } from "@/components/ui/variant-top-nav";
import { VariantFooter } from "@/components/ui/variant-footer";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  Shield,
  Award,
  Globe,
  Microscope,
  HeartPulse,
  Sparkles,
  ChevronRight,
  CheckCircle,
  Quote,
  GraduationCap,
  Headphones,
  FileText,
  Trophy,
  BookOpen,
  Plus,
} from "lucide-react";

import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

// ─── Data ─────────────────────────────────────────────────────────────────────

const products = [
  {
    name: "alloPLY",
    division: "Wound Care",
    divisionColor: "#DF5630",
    description: "Multilayer amniotic allograft for complex chronic wounds.",
    href: "/products/alloply",
  },
  {
    name: "caregraFT",
    division: "Wound Care",
    divisionColor: "#DF5630",
    description: "Cellular amniotic membrane for advanced wound management.",
    href: "/products/caregraft",
  },
  {
    name: "Bellafill",
    division: "Aesthetics",
    divisionColor: "#D2A62C",
    description: "Long-lasting collagen-based dermal filler for facial correction.",
    href: "/products/bellafill",
  },
  {
    name: "Avéli",
    division: "Aesthetics",
    divisionColor: "#D2A62C",
    description: "Precision cellulite treatment with lasting clinical results.",
    href: "/products/aveli",
  },
  {
    name: "Viality",
    division: "Aesthetics",
    divisionColor: "#D2A62C",
    description: "Bio-stimulatory filler that rebuilds natural collagen over time.",
    href: "/products/viality",
  },
  {
    name: "SimpliDerm ADM",
    division: "Wound Care",
    divisionColor: "#DF5630",
    description: "Acellular dermal matrix engineered for reliable tissue integration.",
    href: "/products/simpliderm",
  },
];

const whyTiger = [
  {
    icon: Microscope,
    title: "Science-First",
    body: "Every product validated by peer-reviewed clinical outcomes before reaching a patient.",
  },
  {
    icon: Shield,
    title: "Zero Compromise",
    body: "Zero disease-transmission events across 500,000+ grafts processed to date.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    body: "Distribution partners across 20+ countries, delivering innovation without borders.",
  },
  {
    icon: Award,
    title: "AATB Accredited",
    body: "ISO 13485:2016 certified with FDA-registered manufacturing facilities.",
  },
];

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomeVariant4() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      <VariantTopNav theme="light" ctaLabel="View Products" ctaHref="/products" />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative isolate bg-[#ffffff] pt-[101px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-101px)]">
          {/* Left — editorial copy */}
          <div className="lg:col-span-7 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-14 lg:py-0 relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-[720px]"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-3 text-[11px] font-normal uppercase tracking-[3px] text-[#D5101F]/80 mb-8"
              >
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Tiger BioSciences — Product Portfolio
              </motion.span>

              <motion.h1
                variants={fadeUp}
                className="font-display font-light text-[#231010] leading-[0.95] tracking-[-2px] md:tracking-[-3px] mb-8"
                style={{ fontSize: "clamp(44px, 7vw, 112px)" }}
              >
                Innovation<br />
                <span className="text-[#231010]/45">across</span><br />
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #D5101F, #8b0a12)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  every division.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-[16px] md:text-[17px] font-light text-[#231010]/65 leading-[1.75] max-w-[560px] mb-10"
              >
                From advanced wound care to aesthetic medicine and international
                partnerships — Tiger BioSciences engineers solutions that restore,
                renew, and redefine what regenerative therapy can achieve.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
                <TigerButton href="/products" variant="primary" arrow>
                  View All Products
                </TigerButton>
                <TigerButton href="/science" variant="secondary" arrow>
                  Our Science
                </TigerButton>
              </motion.div>

              {/* Inline trust bar */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-8 border-t border-[#231010]/10"
              >
                {[
                  { value: "6+", label: "Flagship products" },
                  { value: "4", label: "Divisions" },
                  { value: "20+", label: "Countries" },
                  { value: "500K+", label: "Grafts processed" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display font-light text-[#231010] text-[24px] md:text-[28px] leading-none tracking-[-0.5px]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[2.5px] text-[#231010]/50 mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right — image panel */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-5 relative min-h-[420px] lg:min-h-0 bg-[#0e0606] overflow-hidden"
          >
            <Image
              src="/images/tigers/tiger-action.png"
              alt="Tiger BioSciences"
              fill
              priority
              className="object-cover object-[50%_40%]"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            {/* Subtle bottom gradient for badge legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(14,6,6,0.0) 45%, rgba(14,6,6,0.55) 80%, rgba(14,6,6,0.9) 100%)",
              }}
            />
            {/* Top badge */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 border border-white/25 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-light uppercase tracking-[0.3em] text-white/85">
                <span className="size-1.5 rounded-full bg-[#D5101F]" />
                Product-first
              </span>
              <span className="hidden md:inline text-[10px] font-light uppercase tracking-[0.3em] text-white/55">
                01 / 06
              </span>
            </div>
            {/* Bottom overlay card */}
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/35 border border-white/15 rounded-[8px] p-5">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-[#D5101F]/90 flex items-center justify-center shrink-0">
                  <Microscope className="size-5 text-white" />
                </div>
                <div>
                  <p className="font-display font-light text-white text-[17px] leading-[1.35] mb-1">
                    One portfolio. Six flagship products. Four divisions.
                  </p>
                  <span className="text-[10px] font-light uppercase tracking-[0.3em] text-white/60">
                    Clinically validated · Physician preferred
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Product Grid ─────────────────────────────────────────────────── */}
      <TigerSection width="wide" bg="none" className="bg-[#ffffff]">
        <SectionHeader
          label="Product Portfolio"
          heading={<>Our Featured Products</>}
          body="Six flagship products spanning wound care and aesthetic medicine, each engineered for clinically proven, reproducible outcomes."
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              custom={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <Link
                href={product.href}
                className="group block bg-[#fbfcff] rounded-[12px] overflow-hidden border border-[#231010]/[0.06] hover:border-[#231010]/[0.12] hover:shadow-[0_8px_40px_rgba(35,16,16,0.10)] transition-all duration-300 h-full"
              >
                {/* Colored top border matching division */}
                <div
                  className="h-[4px] w-full"
                  style={{ backgroundColor: product.divisionColor }}
                />

                <div className="p-7">
                  {/* Division tag */}
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className="inline-block text-[10px] font-normal uppercase tracking-[2.5px]"
                      style={{ color: product.divisionColor }}
                    >
                      {product.division}
                    </span>
                  </div>

                  {/* Product name */}
                  <h3 className="font-display font-light text-[#231010] text-[26px] leading-none tracking-[-0.5px] mb-3 group-hover:text-[#D5101F] transition-colors duration-200">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] font-light text-[#231010]/55 leading-[22px] mb-6">
                    {product.description}
                  </p>

                  {/* Learn More link */}
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-normal tracking-[0.3px] text-[#231010]/40 group-hover:text-[#D5101F] transition-colors duration-200">
                    Learn More
                    <ChevronRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* All products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <TigerButton href="/products" variant="secondary" arrow>
            Explore Full Product Catalog
          </TigerButton>
        </motion.div>
      </TigerSection>

      {/* ── Why Tiger ─────────────────────────────────────────────────────── */}
      <TigerSection width="wide" bg="white">
        <SectionHeader
          label="Why Tiger BioSciences"
          heading={<>Built on a Foundation<br />of Trust & Science</>}
          align="center"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {whyTiger.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="bg-[#ffffff] rounded-[12px] p-8 border border-[#231010]/[0.05] hover:border-[#D5101F]/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#D5101F]/10 flex items-center justify-center mb-5">
                  <Icon className="size-5 text-[#D5101F]" />
                </div>
                <h4 className="font-display font-light text-[#231010] text-[20px] leading-none tracking-[-0.3px] mb-3">
                  {item.title}
                </h4>
                <p className="text-[13.5px] font-light text-[#231010]/55 leading-[22px]">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </TigerSection>

      {/* ── Divisions Teaser ──────────────────────────────────────────────── */}
      <TigerSection width="wide" bg="none" className="bg-[#ffffff]">
        <SectionHeader
          label="Our Divisions"
          heading={<>Four Pillars,<br />One Mission</>}
          body="Each division operates at the frontier of its discipline — united by a shared commitment to science-driven healing."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              label: "Wound Care",
              color: "#DF5630",
              icon: HeartPulse,
              img: "/images/figma/division-wound-care.png",
              desc: "CAMPs and advanced allografts for chronic and complex wounds.",
              href: "/divisions/wound-care",
            },
            {
              label: "Aesthetics",
              color: "#D2A62C",
              icon: Sparkles,
              img: "/images/figma/division-aesthetics.png",
              desc: "Clinically validated aesthetics products for renewal and reconstruction.",
              href: "/divisions/aesthetics",
            },
            {
              label: "International",
              color: "#4774AA",
              icon: Globe,
              img: "/images/figma/division-international.png",
              desc: "Global distribution of regenerative technologies across 20+ countries.",
              href: "/divisions/international",
            },
            {
              label: "Regenerative Sciences",
              color: "#D5101F",
              icon: Microscope,
              img: "/images/tiger-assets/pregnant-lady.png",
              desc: "Research, tissue processing, and the science behind every innovation.",
              href: "/divisions/regenerative-sciences",
            },
          ].map((div, i) => {
            const Icon = div.icon;
            return (
              <motion.div
                key={div.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <Link
                  href={div.href}
                  className="group relative flex items-end bg-[#fbfcff] rounded-[12px] overflow-hidden border border-[#231010]/[0.06] hover:border-[#231010]/[0.12] hover:shadow-[0_8px_40px_rgba(35,16,16,0.08)] transition-all duration-300 min-h-[220px]"
                >
                  {/* Background image */}
                  <Image
                    src={div.img}
                    alt={div.label}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-25 transition-opacity duration-400"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fbfcff] via-[#fbfcff]/70 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10 p-7 w-full">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${div.color}15` }}
                    >
                      <Icon className="size-4" style={{ color: div.color }} />
                    </div>
                    <h3
                      className="font-display font-light text-[22px] leading-none tracking-[-0.4px] mb-2 text-[#231010]"
                    >
                      {div.label}
                    </h3>
                    <p className="text-[13px] font-light text-[#231010]/50 leading-[20px] mb-4">
                      {div.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] font-normal uppercase tracking-[2px]"
                      style={{ color: div.color }}
                    >
                      Explore
                      <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </TigerSection>

      {/* ── Clinical Outcomes ─────────────────────────────────────────────── */}
      <section className="bg-[#fbfcff] py-20 md:py-28 border-y border-[#231010]/[0.06]">
        <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14">
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-3 text-[11px] font-normal uppercase tracking-[3px] text-[#D5101F]">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Clinical Outcomes
              </span>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.2px] leading-[1.02]"
                style={{ fontSize: "clamp(30px, 4.2vw, 52px)" }}
              >
                Evidence at the bedside.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-3">
              <p className="text-[15.5px] font-light text-[#231010]/65 leading-[1.75] max-w-[620px]">
                Every Tiger product carries its own published record. These are selected
                outcomes from peer-reviewed trials and multi-site clinical registries across
                our current portfolio.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#231010]/10 border border-[#231010]/10 rounded-[2px] overflow-hidden">
            {[
              { value: "89%", label: "Wound closure at 12 weeks", product: "alloPLY" },
              { value: "+38%", label: "Improvement vs. standard of care", product: "caregraFT" },
              { value: "5 yrs", label: "Median durability", product: "Bellafill" },
              { value: "Zero", label: "Disease transmission events", product: "Platform" },
            ].map((outcome, i) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-[#ffffff] p-8 md:p-10 flex flex-col gap-3 min-h-[220px]"
              >
                <CheckCircle className="size-5 text-[#D5101F]" />
                <div
                  className="font-display font-light text-[#231010] leading-none tracking-[-1.5px] mt-2"
                  style={{ fontSize: "clamp(36px, 4vw, 60px)" }}
                >
                  {outcome.value}
                </div>
                <div className="text-[13px] font-normal text-[#231010]/80 leading-[1.45] mt-1">
                  {outcome.label}
                </div>
                <div className="pt-4 mt-auto text-[10px] uppercase tracking-[2.5px] text-[#231010]/45 border-t border-[#231010]/8">
                  Source · {outcome.product}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Categories ────────────────────────────────────────────── */}
      <section className="bg-[#ffffff] py-20 md:py-28">
        <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="mb-14 max-w-[680px]">
            <span className="inline-flex items-center gap-3 text-[11px] font-normal uppercase tracking-[3px] text-[#D5101F] mb-5">
              <span className="w-6 h-[1px] bg-[#D5101F]" />
              Portfolio Breakdown
            </span>
            <h2
              className="font-display font-light text-[#231010] tracking-[-1.2px] leading-[1.02] mb-5"
              style={{ fontSize: "clamp(30px, 4.2vw, 52px)" }}
            >
              Three product families. One platform.
            </h2>
            <p className="text-[15.5px] font-light text-[#231010]/65 leading-[1.75]">
              Our portfolio groups cleanly by technology platform: allografts and
              CAMPs for wound care, collagen-based aesthetics products, and global
              distribution variants for international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                family: "CAMPs & Allografts",
                color: "#DF5630",
                icon: HeartPulse,
                count: "4 products",
                body: "Cellular, Acellular, and Matrix-like Products for chronic and complex wounds. Includes alloPLY, caregraFT, and SimpliDerm ADM.",
                highlights: ["AATB Accredited", "FDA Registered", "5-year stability"],
              },
              {
                family: "Aesthetic Biomaterials",
                color: "#D2A62C",
                icon: Sparkles,
                count: "3 products",
                body: "Clinically validated aesthetic biomaterials — Bellafill collagen filler, Viality biostimulator, and Avéli precision cellulite treatment.",
                highlights: ["Physician preferred", "Long-term safety", "Reconstructive use"],
              },
              {
                family: "International Variants",
                color: "#4774AA",
                icon: Globe,
                count: "20+ countries",
                body: "Regional product variants adapted for market-specific regulatory frameworks — CE Mark, Health Canada, TGA, and PMDA clearances.",
                highlights: ["CE Mark", "Health Canada", "PMDA cleared"],
              },
            ].map((family, i) => {
              const Icon = family.icon;
              return (
                <motion.div
                  key={family.family}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative bg-[#fbfcff] rounded-[12px] p-8 border border-[#231010]/[0.08] hover:border-[#231010]/[0.18] transition-colors duration-500"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[12px]"
                    style={{ backgroundColor: family.color }}
                  />
                  <div
                    className="size-12 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${family.color}14` }}
                  >
                    <Icon className="size-5" style={{ color: family.color }} />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className="font-display font-light text-[#231010] text-[22px] md:text-[24px] tracking-[-0.3px] leading-[1.15]"
                    >
                      {family.family}
                    </h3>
                  </div>
                  <span
                    className="inline-block text-[11px] uppercase tracking-[2.5px] mb-5 font-medium"
                    style={{ color: family.color }}
                  >
                    {family.count}
                  </span>
                  <p className="text-[14px] font-light text-[#231010]/65 leading-[1.7] mb-6">
                    {family.body}
                  </p>
                  <div className="pt-5 border-t border-[#231010]/10 flex flex-col gap-2">
                    {family.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <CheckCircle className="size-3.5" style={{ color: family.color }} />
                        <span className="text-[12px] font-light text-[#231010]/65">{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Provider Support ──────────────────────────────────────────────── */}
      <section className="bg-[#fbfcff] py-20 md:py-28 border-y border-[#231010]/[0.06]">
        <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-3 text-[11px] font-normal uppercase tracking-[3px] text-[#D5101F]">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Provider Support
              </span>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.2px] leading-[1.02]"
                style={{ fontSize: "clamp(30px, 4.2vw, 52px)" }}
              >
                Clinician-grade support at every step.
              </h2>
              <p className="text-[15px] font-light text-[#231010]/65 leading-[1.75]">
                Tiger's field science teams are in the room when you need them — training,
                technique validation, reimbursement support, and on-demand clinical help.
              </p>
              <TigerButton href="/professionals" variant="primary" arrow>
                Become a Partner
              </TigerButton>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-[#231010]/10 border border-[#231010]/10 rounded-[2px] overflow-hidden">
              {[
                {
                  icon: GraduationCap,
                  title: "Clinical Training",
                  body: "Accredited CME programs, hands-on labs, and peer-to-peer workshops at regional centers of excellence.",
                },
                {
                  icon: Headphones,
                  title: "On-call Support",
                  body: "Dedicated clinical specialists by phone or in-person during procedure windows. Same-day response on technique questions.",
                },
                {
                  icon: FileText,
                  title: "Reimbursement Help",
                  body: "Full coding and prior-authorization support for every product. Claims appeals assistance where applicable.",
                },
                {
                  icon: BookOpen,
                  title: "Evidence Library",
                  body: "Curated access to peer-reviewed publications, technique videos, and patient education materials for each product.",
                },
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                    className="bg-[#ffffff] p-7 md:p-9 flex flex-col gap-4"
                  >
                    <Icon className="size-5 text-[#D5101F]" />
                    <h3 className="font-display font-light text-[#231010] text-[22px] leading-[1.15] tracking-[-0.3px]">
                      {service.title}
                    </h3>
                    <p className="text-[14px] font-light text-[#231010]/65 leading-[1.7]">
                      {service.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="bg-[#ffffff] py-20 md:py-28">
        <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="mb-14 max-w-[680px]">
            <span className="inline-flex items-center gap-3 text-[11px] font-normal uppercase tracking-[3px] text-[#D5101F] mb-5">
              <span className="w-6 h-[1px] bg-[#D5101F]" />
              Voices from practice
            </span>
            <h2
              className="font-display font-light text-[#231010] tracking-[-1.2px] leading-[1.02]"
              style={{ fontSize: "clamp(30px, 4.2vw, 52px)" }}
            >
              What clinicians tell us.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote: "alloPLY gave me something to offer the patients I was running out of options for. The outcomes have been reproducible across my full chronic wound caseload.",
                author: "Dr. Rachel Chen, MD",
                role: "Wound Care Specialist · Tier-1 Academic Center",
                color: "#DF5630",
              },
              {
                quote: "Tiger's field team is in the OR when I need them. That level of engagement isn't typical from biologics vendors and it changes how confident I am with new platforms.",
                author: "Dr. Amara Okafor, MD",
                role: "Plastic Surgeon · Private Practice",
                color: "#D2A62C",
              },
              {
                quote: "Their international regulatory team navigated three markets for us in under six months. Clean documentation, clean submissions, no drama.",
                author: "Henrik Vogt",
                role: "Distribution Director · EMEA Region",
                color: "#4774AA",
              },
            ].map((voice, i) => (
              <motion.div
                key={voice.author}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative bg-[#fbfcff] rounded-[12px] p-8 border border-[#231010]/[0.08] flex flex-col h-full"
              >
                <Quote className="size-7 mb-5" style={{ color: voice.color, opacity: 0.8 }} />
                <p className="font-display font-light text-[#231010] text-[18px] leading-[1.5] tracking-[-0.2px] mb-8 flex-1">
                  &ldquo;{voice.quote}&rdquo;
                </p>
                <div className="pt-6 border-t border-[#231010]/8">
                  <div
                    className="h-px w-10 mb-4"
                    style={{ backgroundColor: voice.color }}
                  />
                  <div className="font-display font-light text-[#231010] text-[15px] leading-[1.3] mb-1">
                    {voice.author}
                  </div>
                  <div className="text-[11px] uppercase tracking-[2px] text-[#231010]/50">
                    {voice.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Recognition ──────────────────────────────────────────── */}
      <section className="bg-[#231010] text-[#fbfcff] py-20 md:py-28">
        <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-[620px] space-y-5">
              <span className="inline-flex items-center gap-3 text-[11px] font-normal uppercase tracking-[3px] text-[#D5101F]">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Industry Recognition
              </span>
              <h2
                className="font-display font-light tracking-[-1.2px] leading-[1.02]"
                style={{ fontSize: "clamp(30px, 4.2vw, 52px)" }}
              >
                Awards, accreditations, and third-party validation.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#fbfcff]/10 rounded-[2px] overflow-hidden">
            {[
              { icon: Trophy, label: "Prix Galien USA", note: "2024 Finalist · Best Biotech Product" },
              { icon: Award, label: "ISO 13485:2016", note: "Medical Device Quality Mgmt" },
              { icon: Shield, label: "AATB Accredited", note: "Continuous since 2011" },
              { icon: Trophy, label: "MedTech Breakthrough", note: "2025 · Regenerative Medicine" },
            ].map((award, i) => {
              const Icon = award.icon;
              return (
                <motion.div
                  key={award.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="bg-[#231010] p-7 md:p-9 flex flex-col gap-4 min-h-[200px]"
                >
                  <Icon className="size-5 text-[#D5101F]" />
                  <div className="font-display font-light text-[#fbfcff] text-[20px] leading-[1.2] tracking-[-0.3px]">
                    {award.label}
                  </div>
                  <div className="text-[12px] font-light text-[#fbfcff]/55 leading-[1.6] mt-auto pt-3 border-t border-[#fbfcff]/10">
                    {award.note}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#fbfcff] py-20 md:py-28 border-y border-[#231010]/[0.06]">
        <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-32 self-start">
              <span className="inline-flex items-center gap-3 text-[11px] font-normal uppercase tracking-[3px] text-[#D5101F]">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Common questions
              </span>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.2px] leading-[1.02]"
                style={{ fontSize: "clamp(30px, 4.2vw, 48px)" }}
              >
                Clinical &amp; ordering FAQ.
              </h2>
              <p className="text-[14.5px] font-light text-[#231010]/65 leading-[1.75]">
                The most frequent questions our clinical and commercial teams field. Need
                something deeper? Our team is one message away.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-[1px] bg-[#231010]/10 border border-[#231010]/10 rounded-[2px] overflow-hidden">
                {[
                  {
                    q: "How are Tiger products regulated?",
                    a: "Our allograft tissue products are regulated under FDA 21 CFR Part 1271 (HCT/P). CAMPs, aesthetic biomaterials, and ADMs follow device regulatory pathways including 510(k) clearance and CE Mark where applicable.",
                  },
                  {
                    q: "What is the typical time-to-onboard for a new hospital system?",
                    a: "Credentialing and account setup averages 3–6 weeks from first contact. We assign a dedicated clinical specialist and commercial partner to every new account.",
                  },
                  {
                    q: "Do you offer reimbursement support?",
                    a: "Yes. Our reimbursement team provides coding guidance, prior-authorization support, and claims appeals assistance for every product in the portfolio.",
                  },
                  {
                    q: "What training is available for clinicians new to CAMPs?",
                    a: "Accredited CME programs, on-site technique workshops, and peer-to-peer mentorship at regional centers of excellence. Virtual modules are available on demand.",
                  },
                  {
                    q: "How is donor consent and tissue provenance handled?",
                    a: "All tissue recovery follows AATB-accredited partner protocols. Consent documentation, donor screening, and serology testing are verified before any tissue enters our processing workflow.",
                  },
                ].map((faq, i) => (
                  <motion.details
                    key={faq.q}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group bg-[#ffffff] p-7 md:p-8"
                  >
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span className="font-display font-light text-[#231010] text-[18px] md:text-[20px] leading-[1.3] tracking-[-0.2px]">
                        {faq.q}
                      </span>
                      <Plus className="size-5 text-[#D5101F] shrink-0 group-open:rotate-45 transition-transform duration-300" />
                    </summary>
                    <p className="mt-5 text-[14.5px] font-light text-[#231010]/65 leading-[1.75]">
                      {faq.a}
                    </p>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-[120px] overflow-hidden bg-[#231010]">
        {/* Subtle red glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#D5101F]/10 blur-[80px]" />
        </div>

        <motion.div
          className="relative z-10 container mx-auto max-w-[896px] px-6 md:px-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-[11px] font-normal uppercase tracking-[3px] text-[#ffffff]/40 mb-6">
            Get Started
          </span>
          <h2 className="font-display font-light text-[#ffffff] text-[clamp(28px,5vw,60px)] leading-none tracking-[-1.5px] mb-6">
            Ready to Transform Patient Outcomes?
          </h2>
          <p className="text-[15px] font-light text-[#ffffff]/55 leading-[26px] max-w-xl mx-auto mb-10">
            Connect with our clinical team to learn how Tiger BioSciences
            products can integrate into your practice and elevate patient care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <TigerButton href="/contact" variant="primary" arrow>
              Request a Consultation
            </TigerButton>
            <TigerButton href="/products" variant="outline-light" arrow>
              Browse Products
            </TigerButton>
          </div>
        </motion.div>
      </section>
      <VariantFooter theme="light" tagline="Innovation across every division. Products, partners, and people." />
      <VariantNav current={4} />
    </main>
  );
}
