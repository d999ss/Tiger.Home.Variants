"use client";
import { VariantNav } from "@/components/ui/variant-nav";

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

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-[101px]">
        {/* Background image — low opacity watermark */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/images/tiger-hero.png"
            alt=""
            fill
            priority
            className="object-cover object-[70%_30%] opacity-[0.18]"
          />
          {/* Gradient mask — keep tiger visible on the right, fade to cream elsewhere */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #ffffff 10%, rgba(255,255,255,0.82) 45%, rgba(255,255,255,0.35) 80%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #ffffff 12%, transparent 60%)",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto max-w-[1280px] px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-[11px] font-normal uppercase tracking-[3px] text-[#D5101F]/70 mb-6"
            >
              Tiger BioSciences — Regenerative Medicine
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display font-light text-[#231010] text-[clamp(36px,6vw,80px)] leading-none tracking-[-2px] mb-8"
            >
              Innovation Across
              <br />
              <span className="text-[#D5101F]">Every Division</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[16px] font-light text-[#231010]/60 leading-[28px] max-w-xl mb-10"
            >
              From advanced wound care to aesthetic medicine and international
              partnerships — Tiger BioSciences engineers solutions that restore,
              renew, and redefine what regenerative therapy can achieve.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <TigerButton href="/products" variant="primary" arrow>
                View All Products
              </TigerButton>
              <TigerButton href="/science" variant="secondary" arrow>
                Our Science
              </TigerButton>
            </motion.div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[3px] text-[#231010]/30 font-normal">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-px h-8 bg-[#231010]/20"
            />
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
      <VariantNav current={4} />
    </main>
  );
}
