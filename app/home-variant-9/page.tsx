"use client";
import { VariantNav } from "@/components/ui/variant-nav";
import { VariantTopNav } from "@/components/ui/variant-top-nav";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";

// ─── Data ────────────────────────────────────────────────────────────────────

const clinicalStats = [
  {
    value: "500K+",
    label: "Grafts processed",
    sub: "with unmatched safety record",
  },
  {
    value: "15+",
    label: "Years of innovation",
    sub: "pioneering regenerative science",
  },
  {
    value: "4",
    label: "Specialized divisions",
    sub: "wound care, aesthetics, international, science",
  },
  {
    value: "150+",
    label: "Years combined leadership",
    sub: "across medical technology sectors",
  },
];

const divisions = [
  {
    id: "wound-care",
    index: "01",
    label: "Wound Care",
    color: "#DF5630",
    description:
      "Cellular, acellular, and matrix-like products (CAMPs) for chronic and acute wound management across all care settings.",
    href: "/solutions/wound-care",
    companies: "Tiger Wound Care · Extremity Care · Encore Surgical Dressings",
    image: "/images/figma/division-wound-care.png",
  },
  {
    id: "aesthetics",
    index: "02",
    label: "Aesthetics",
    color: "#D2A62C",
    description:
      "Advanced CAMP technologies for reconstructive, cosmetic, and regenerative aesthetic procedures — restoring natural beauty.",
    href: "/solutions/aesthetics",
    companies: "Tiger Aesthetics Medical",
    image: "/images/figma/division-aesthetics.png",
  },
  {
    id: "international",
    index: "03",
    label: "International",
    color: "#4774AA",
    description:
      "Broadening global access to cell and tissue products from our base in Germany, forging partnerships across healthcare systems worldwide.",
    href: "/solutions/international",
    companies: "Tiger BioSciences International",
    image: "/images/figma/division-international.png",
  },
  {
    id: "regenerative",
    index: "04",
    label: "Regenerative Sciences",
    color: "#D5101F",
    description:
      "The scientific backbone of Tiger BioSciences — CAMP platforms, clinical research, and next-generation therapies anchored in peer-reviewed evidence.",
    href: "/science/early-research/camps-tech",
    companies: "Tiger BioSciences Regenerative Sciences",
    image: "/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png",
  },
];

const ceoQuote = {
  quote:
    "We believe that every patient deserves access to the most advanced regenerative solutions available. That belief drives every decision we make — from the lab, to the clinic, to the patient.",
  name: "Tiger BioSciences",
  title: "Leadership",
};

// ─── Components ──────────────────────────────────────────────────────────────

/** Animated underline accent on a word */
function UnderlineWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <motion.span
        className="absolute left-0 bottom-0 h-[3px] rounded-full"
        style={{ background: "#D5101F", originX: 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
      />
    </span>
  );
}

/** Thin horizontal rule divider */
function Divider() {
  return (
    <motion.div
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-[1px] bg-[#231010]/[0.09]"
    />
  );
}

/** Division text card */
function DivisionCard({ div, i }: { div: typeof divisions[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
    >
      <Link
        href={div.href}
        className="group flex items-start gap-4 md:gap-8 py-8 md:py-10 transition-colors duration-300"
      >
        {/* Index */}
        <span className="text-[12px] font-normal text-[#231010]/30 tracking-[1px] mt-1 shrink-0 w-6">
          {div.index}
        </span>

        {/* Thumbnail */}
        <div className="hidden md:block shrink-0 w-20 h-20 rounded-[10px] overflow-hidden relative">
          <Image
            src={div.image}
            alt={div.label}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Body */}
        <div className="flex-1 space-y-3">
          <div className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full shrink-0 mt-0.5"
              style={{ background: div.color }}
            />
            <h3
              className="font-display font-light text-[#231010] tracking-[-0.5px] group-hover:text-[#D5101F] transition-colors duration-300"
              style={{ fontSize: "clamp(22px, 2.5vw, 34px)" }}
            >
              {div.label}
            </h3>
          </div>
          <p className="text-[13.5px] font-light text-[#231010]/60 leading-[1.75] max-w-[520px]">
            {div.description}
          </p>
          <p className="text-[11.5px] font-light text-[#231010]/35 leading-[1.5]">
            {div.companies}
          </p>
        </div>

        {/* Arrow */}
        <ArrowUpRight
          className="size-5 text-[#231010]/25 group-hover:text-[#D5101F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mt-1"
          strokeWidth={1.5}
        />
      </Link>
      <Divider />
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeVariant9() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.6], ["0%", "8%"]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#ffffff]">
      <VariantTopNav theme="editorial" ctaLabel="Read" ctaHref="/company/about" />

      {/* ═══════════════════════════════════════════════════════════
          HERO — Typography-forward, full cream, no image
      ═══════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative isolate min-h-[100dvh] flex flex-col justify-center px-6 md:px-16 xl:px-24 pt-[calc(72px+2rem)] md:pt-[calc(72px+4rem)] pb-24"
      >
        {/* Subtle background image — reveal tiger on right third */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/tiger-hero-original.png"
            alt=""
            fill
            className="object-cover object-[72%_30%]"
          />
          {/* Gradient mask — solid white on left two-thirds, tiger visible on right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #ffffff 0%, #ffffff 48%, rgba(255,255,255,0.85) 62%, rgba(255,255,255,0.45) 78%, rgba(255,255,255,0.2) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #ffffff 5%, transparent 35%, transparent 75%, rgba(255,255,255,0.4) 100%)",
            }}
          />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="max-w-5xl space-y-10"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="w-6 h-[1.5px] bg-[#D5101F]" />
            <span className="text-[11px] font-normal uppercase tracking-[4.5px] text-[#231010]/45">
              Tiger BioSciences
            </span>
          </motion.div>

          {/* Massive headline */}
          <div className="space-y-0">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className="font-display font-light text-[#231010] tracking-[-1.5px] md:tracking-[-3px] leading-[0.9]"
              style={{ fontSize: "clamp(42px, 11vw, 152px)" }}
            >
              The Leader
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="font-display font-light text-[#231010] tracking-[-1.5px] md:tracking-[-3px] leading-[0.9]"
              style={{ fontSize: "clamp(42px, 11vw, 152px)" }}
            >
              in{" "}
              <UnderlineWord>
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #D5101F 0%, #8b0a12 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Regenerative
                </span>
              </UnderlineWord>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              className="font-display font-light text-[#231010] tracking-[-1.5px] md:tracking-[-3px] leading-[0.9]"
              style={{ fontSize: "clamp(42px, 11vw, 152px)" }}
            >
              Medicine
            </motion.h1>
          </div>

          {/* Body + CTAs in a row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.72 }}
            className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 pt-4"
          >
            <p className="text-[15px] font-light text-[#231010]/65 leading-[1.75] max-w-[440px]">
              Regenerating human tissue compromised by injury, aging, trauma, or disease — through rigorous science and purposeful innovation that sets the global standard for care.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <TigerButton href="/products" arrow>
                View Solutions
              </TigerButton>
              <TigerButton href="/company/overview" variant="secondary">
                Our Company
              </TigerButton>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-[#231010]/20"
          />
          <span className="text-[10px] font-normal uppercase tracking-[3px] text-[#231010]/30">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INTRO STATEMENT — Single large body paragraph
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="narrow">
        <Divider />
        <div className="pt-20 space-y-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-normal uppercase tracking-[4px] text-[#231010]/35"
          >
            About Tiger BioSciences
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-[#231010] tracking-[-0.8px] leading-[1.25]"
            style={{ fontSize: "clamp(22px, 3vw, 40px)" }}
          >
            Tiger BioSciences is a regenerative medicine company dedicated to the repair and regeneration of human tissue. Through four specialized divisions, we advance clinical outcomes across wound care, aesthetics, and international markets — anchored in decades of tissue science.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.64, delay: 0.2 }}
          >
            <TigerButton href="/company/overview" arrow>
              Learn About Us
            </TigerButton>
          </motion.div>
        </div>
      </TigerSection>

      {/* ═══════════ IMAGE BAND ═══════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "21/7" }}
      >
        <Image
          src="/images/figma/division-wound-care.png"
          alt="Tiger BioSciences — Wound Care"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #ffffff 0%, transparent 20%, transparent 80%, #ffffff 100%)" }} />
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════
          CLINICAL STATS — Large numbers section
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="wide">
        <Divider />
        <div className="pt-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-normal uppercase tracking-[4px] text-[#231010]/35 mb-16"
          >
            By the Numbers
          </motion.span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {clinicalStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="space-y-3"
              >
                {/* Accent rule */}
                <div className="w-8 h-[2px] rounded-full" style={{ background: "#D5101F" }} />

                {/* Big number */}
                <div
                  className="font-display font-light text-[#231010] tracking-[-2px] leading-none"
                  style={{ fontSize: "clamp(52px, 6vw, 80px)" }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <p className="text-[14px] font-normal text-[#231010] tracking-[-0.2px]">
                  {stat.label}
                </p>
                <p className="text-[12px] font-light text-[#231010]/50 leading-[1.6]">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════
          CEO PULL QUOTE
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="narrow">
        <Divider />
        <div className="pt-20 space-y-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-normal uppercase tracking-[4px] text-[#231010]/35"
          >
            Leadership
          </motion.span>

          <motion.blockquote
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Large opening quote mark */}
            <span
              aria-hidden
              className="absolute -top-6 -left-2 md:-left-4 font-display font-light text-[#D5101F]/20 leading-none select-none"
              style={{ fontSize: "clamp(64px, 10vw, 120px)" }}
            >
              &ldquo;
            </span>

            <p
              className="font-display font-light text-[#231010] tracking-[-0.8px] leading-[1.3] relative z-10"
              style={{ fontSize: "clamp(20px, 2.8vw, 36px)" }}
            >
              {ceoQuote.quote}
            </p>

            <footer className="mt-8 flex items-center gap-5">
              {/* Red accent */}
              <div className="w-12 h-[1.5px]" style={{ background: "#D5101F" }} />
              <div className="space-y-0.5">
                <p className="text-[14px] font-normal text-[#231010] tracking-[-0.2px]">
                  {ceoQuote.name}
                </p>
                <p className="text-[12px] font-light text-[#231010]/50">
                  {ceoQuote.title}
                </p>
              </div>
            </footer>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.64, delay: 0.3 }}
          >
            <TigerButton href="/company/leadership" arrow>
              Meet the Leadership Team
            </TigerButton>
          </motion.div>
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════
          DIVISIONS — Text-only link cards
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="default">
        <Divider />
        <div className="pt-20 space-y-2">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] font-normal uppercase tracking-[4px] text-[#231010]/35 mb-8"
          >
            Our Divisions
          </motion.span>

          <Divider />

          {divisions.map((div, i) => (
            <DivisionCard key={div.id} div={div} i={i} />
          ))}
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════
          DONATION CALLOUT — Minimal text treatment
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="narrow">
        <Divider />
        <div className="pt-20 space-y-8">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-normal uppercase tracking-[4px] text-[#231010]/35"
          >
            Where It All Begins
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-[12px] overflow-hidden"
            style={{ aspectRatio: "16/7" }}
          >
            <Image
              src="/images/tiger-assets/pregnant-lady.png"
              alt="Birth tissue donation"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-[#231010] tracking-[-1.5px] leading-[0.95]"
            style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
          >
            The Gift
            <br />
            of Donation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, delay: 0.15 }}
            className="text-[14.5px] font-light text-[#231010]/65 leading-[1.75] max-w-[580px]"
          >
            Every graft begins with an extraordinary act of generosity. We honor that gift through our Birth Tissue Recovery and bioCARE Donor Network programs — two industry-leading platforms that transform donation into hope, processed with the highest standards of safety and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.64, delay: 0.28 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <TigerButton href="/company/donation" arrow>
              Learn More
            </TigerButton>
            <TigerButton href="/company/overview" variant="secondary">
              Our Company
            </TigerButton>
          </motion.div>
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════
          SCIENCE CALLOUT
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="default">
        <Divider />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
        >
          <div className="space-y-6">
            <div className="relative w-full rounded-[12px] overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png"
                alt="Regenerative science"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[11px] font-normal uppercase tracking-[4px] text-[#231010]/35">
              Regenerative Science
            </span>
            <h2
              className="font-display font-light text-[#231010] tracking-[-1.5px] leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
            >
              Science that sets the global standard
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-[14px] font-light text-[#231010]/65 leading-[1.75]">
              From CAMP platforms to landmark clinical trials, our science is the backbone of every product we make. Peer-reviewed. Evidence-based. Built to transform patient outcomes worldwide.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <TigerButton href="/science/early-research/camps-tech" arrow>
                Explore the Science
              </TigerButton>
              <TigerButton href="/science/early-research/camps-tech/research" variant="secondary">
                Research &amp; Development
              </TigerButton>
            </div>
          </div>
        </motion.div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA — Minimal, typographic
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="narrow">
        <Divider />
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-8 space-y-8 text-center"
        >
          <span className="text-[11px] font-normal uppercase tracking-[4px] text-[#231010]/35">
            Join Us
          </span>
          <h2
            className="font-display font-light text-[#231010] tracking-[-2px] leading-[0.95] md:leading-[0.92]"
            style={{ fontSize: "clamp(40px, 8vw, 112px)" }}
          >
            Let&apos;s work
            <br />
            together
          </h2>
          <p className="text-[14.5px] font-light text-[#231010]/60 leading-[1.75] max-w-[460px] mx-auto">
            Advancing medical technology through comprehensive tissue processing and innovative cellular solutions. First of its kind.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
            <TigerButton href="/contact" arrow>
              Get in Touch
            </TigerButton>
            <TigerButton href="/products" variant="secondary">
              Explore Products
            </TigerButton>
          </div>
        </motion.div>
      </TigerSection>

      <VariantNav current={9} />
    </main>
  );
}
