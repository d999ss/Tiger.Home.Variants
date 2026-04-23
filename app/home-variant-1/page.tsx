"use client";
import { VariantNav } from "@/components/ui/variant-nav";
import { VariantTopNav } from "@/components/ui/variant-top-nav";
import { VariantFooter } from "@/components/ui/variant-footer";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, FlaskConical, ShieldCheck, Globe2, Leaf, HeartHandshake, Microscope, TrendingUp, BookOpen, MapPin, Building2, Award } from "lucide-react";

import { TigerButton } from "@/components/ui/tiger-button";

// ─── Data ────────────────────────────────────────────────────────────────────

const pillars = [
  {
    eyebrow: "Wound Care",
    title: "Engineering healing where it has stalled.",
    body:
      "Cellular, Acellular, and Matrix-like Products for chronic and acute wounds — tested across hospitals, surgical centers, and specialty clinics.",
    image: "/images/figma/division-wound-care.png",
    href: "/solutions/wound-care",
    color: "#DF5630",
  },
  {
    eyebrow: "Aesthetics",
    title: "The science beneath reconstructive care.",
    body:
      "Bellafill, Sientra, and next-generation CAMP platforms for plastic surgeons, dermatologists, and reconstructive specialists.",
    image: "/images/figma/division-aesthetics.png",
    href: "/solutions/aesthetics",
    color: "#D2A62C",
  },
  {
    eyebrow: "International",
    title: "Regenerative medicine without borders.",
    body:
      "From our European headquarters, we extend cell and tissue technology across 18 countries and five continents.",
    image: "/images/figma/division-international.png",
    href: "/solutions/international",
    color: "#4774AA",
  },
  {
    eyebrow: "Regenerative Sciences",
    title: "Science that compounds, quarter after quarter.",
    body:
      "The internal research engine that turns donor tissue into next-generation therapies — grounded in peer-reviewed evidence.",
    image: "/images/figma/division-wound-care.png",
    href: "/science/early-research/camps-tech",
    color: "#D5101F",
  },
];

const impactStats = [
  { value: "500K+", label: "Grafts processed", sub: "15 years, zero contamination events" },
  { value: "18", label: "Countries served", sub: "Hospital systems across five continents" },
  { value: "4", label: "Clinical divisions", sub: "Unified under one regenerative mission" },
  { value: "AATB", label: "Accredited", sub: "FDA-registered facilities, end to end" },
];

const newsroom = [
  {
    tag: "Innovation",
    date: "April 14, 2026",
    title: "Tiger BioSciences opens European regenerative sciences lab in Frankfurt.",
    image: "/images/figma/division-international.png",
    href: "/press/frankfurt-lab-opening",
  },
  {
    tag: "Clinical Evidence",
    date: "March 28, 2026",
    title: "Phase III data: CAMP platform shows 38% improvement in diabetic ulcer closure.",
    image: "/images/figma/division-wound-care.png",
    href: "/press/phase-iii-camp-data",
  },
  {
    tag: "Donation",
    date: "March 04, 2026",
    title: "Birth Tissue Recovery partners with 12 new hospital systems in the U.S. Southeast.",
    image: "/images/tiger-assets/pregnant-lady.png",
    href: "/press/btr-expansion",
  },
];

const audienceCtas = [
  { label: "For Healthcare Professionals", href: "/professionals", arrow: true },
  { label: "For Investors", href: "/investors", arrow: true },
  { label: "For Media & Press", href: "/press", arrow: true },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeVariant1() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#231010]">
      <VariantTopNav theme="light" ctaLabel="Contact" ctaHref="/contact" />

      {/* ═══════════════════════════════════════════════════════════
          BRAND RIBBON — thin red accent under nav
      ═══════════════════════════════════════════════════════════ */}
      <div className="pt-[72px]">
        <div className="h-[3px] bg-[#D5101F]" />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          HERO — Full-bleed statement with image left, copy right
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative isolate">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[88vh]">

          {/* Left — Full-bleed hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative lg:col-span-7 min-h-[58vh] lg:min-h-0"
          >
            <Image
              src="/images/tigers/tiger-distant.png"
              alt="Tiger BioSciences — regenerative medicine"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            {/* Subtle dark wash for contrast on the bottom credit */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30 pointer-events-none" />
            {/* Credit marker */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-white/80" />
              <span className="text-[10px] uppercase tracking-[3px] text-white/85 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Annual Report · 2026
              </span>
            </div>
          </motion.div>

          {/* Right — Editorial copy block */}
          <div className="lg:col-span-5 flex items-center bg-[#fbfcff] border-l border-[#231010]/[0.06]">
            <div className="px-8 md:px-14 xl:px-20 py-16 md:py-20 space-y-8 max-w-[560px]">

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium"
              >
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Tiger BioSciences
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
                className="font-display font-light text-[#231010] tracking-[-2px] leading-[0.95]"
                style={{ fontSize: "clamp(40px, 4.6vw, 68px)" }}
              >
                Medicine made more human.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="text-[15.5px] font-light text-[#231010]/70 leading-[1.75]"
              >
                We are Tiger BioSciences. For fifteen years, our teams have translated human tissue donation into therapies used across wound care, aesthetics, and regenerative medicine in eighteen countries. This is what we do, and why.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-4 flex-wrap pt-2"
              >
                <TigerButton href="/company/about" arrow>
                  Discover Tiger
                </TigerButton>
                <Link
                  href="/company/2026-report"
                  className="inline-flex items-center gap-2 text-[13px] font-light text-[#231010]/70 hover:text-[#D5101F] transition-colors border-b border-[#231010]/25 hover:border-[#D5101F] pb-1"
                >
                  Read the 2026 report
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </motion.div>

              {/* Signature cluster */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="pt-8 border-t border-[#231010]/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#231010]/5 border border-[#231010]/10 flex items-center justify-center text-[10px] font-medium tracking-[1px] text-[#231010]/60">
                    OB
                  </div>
                  <div>
                    <div className="text-[12px] font-medium text-[#231010]">Oliver Burckhardt</div>
                    <div className="text-[10px] uppercase tracking-[2px] text-[#231010]/45">Co-Founder &amp; Co-CEO</div>
                  </div>
                </div>
                <span className="text-[10px] uppercase tracking-[2px] text-[#231010]/40">Est. 2011</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PILLARS — Four divisions, image-forward
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#fbfcff] border-y border-[#231010]/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
            <div className="max-w-[600px] space-y-4">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Our divisions
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Four specialized houses. One regenerative mission.
              </h2>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/60 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
            >
              All solutions <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.eyebrow}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <Link
                  href={p.href}
                  className="group block relative overflow-hidden bg-[#ffffff] border border-[#231010]/[0.08] hover:border-[#231010]/[0.18] transition-all duration-500"
                >
                  {/* Image */}
                  <div
                    className="relative aspect-[16/9] overflow-hidden"
                    style={{ backgroundColor: `${p.color}14` }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: p.color }}
                    />
                  </div>

                  {/* Text */}
                  <div className="p-7 md:p-9 space-y-4">
                    <div
                      className="text-[10px] uppercase tracking-[3px] font-medium"
                      style={{ color: p.color }}
                    >
                      {p.eyebrow}
                    </div>
                    <h3
                      className="font-display font-light text-[#231010] tracking-[-0.5px] leading-[1.08] group-hover:text-[#D5101F] transition-colors duration-300"
                      style={{ fontSize: "clamp(22px, 2vw, 30px)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[14px] font-light text-[#231010]/65 leading-[1.7]">
                      {p.body}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2.5px] text-[#231010]/55 group-hover:text-[#D5101F] transition-colors pt-2">
                      Learn more
                      <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SCIENCE PIPELINE — Research in flight
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 md:mb-20">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Science & Innovation
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                A pipeline measured in peer-reviewed results.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-3 space-y-6">
              <p className="text-[15.5px] font-light text-[#231010]/70 leading-[1.75] max-w-[640px]">
                Tiger BioSciences operates its own regenerative sciences labs in the U.S. and
                Europe. Research moves from discovery to bedside through a process that is
                disciplined, transparent, and — above all — held to the standard of
                published evidence.
              </p>
              <Link
                href="/science/publications"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/60 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
              >
                Publications library <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#231010]/10 border border-[#231010]/10 rounded-[2px] overflow-hidden">
            {[
              {
                icon: FlaskConical,
                phase: "Discovery",
                title: "Next-generation CAMPs",
                body: "12 programs in preclinical, targeting refractory chronic wounds, surgical reconstruction, and dermal regeneration.",
                note: "12 active programs",
              },
              {
                icon: Microscope,
                phase: "Clinical",
                title: "Trials in progress",
                body: "Seven multi-site Phase II / Phase III studies across the U.S. and EU, with investigator-initiated arms at academic centers.",
                note: "7 trials · 18 sites",
              },
              {
                icon: BookOpen,
                phase: "Evidence",
                title: "Peer-reviewed base",
                body: "87+ publications spanning wound care, aesthetics, and tissue processing. Referenced in current clinical guidelines.",
                note: "87+ publications",
              },
            ].map(({ icon: Icon, phase, title, body, note }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#ffffff] p-8 md:p-10 flex flex-col gap-5 min-h-[280px]"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-[#D5101F]" />
                  <span className="text-[10px] uppercase tracking-[3px] text-[#231010]/40">
                    {phase}
                  </span>
                </div>
                <h3
                  className="font-display font-light text-[#231010] tracking-[-0.4px] leading-[1.15]"
                  style={{ fontSize: "clamp(22px, 1.8vw, 28px)" }}
                >
                  {title}
                </h3>
                <p className="text-[14px] font-light text-[#231010]/65 leading-[1.7] flex-1">
                  {body}
                </p>
                <div className="pt-5 border-t border-[#231010]/10 text-[11px] uppercase tracking-[2.5px] text-[#231010]/55">
                  {note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          IMPACT STATS — Large numbers, corporate report feel
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#231010] text-[#fbfcff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
            <div className="max-w-[680px] space-y-4">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Our impact
              </div>
              <h2
                className="font-display font-light tracking-[-1.4px] leading-[1]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                The measured contribution of fifteen years.
              </h2>
            </div>
            <Link
              href="/company/impact"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#fbfcff]/55 hover:text-[#D5101F] transition-colors border-b border-[#fbfcff]/20 hover:border-[#D5101F] pb-1"
            >
              Annual report <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="space-y-3 border-t border-[#fbfcff]/15 pt-5"
              >
                <div
                  className="font-display font-light tracking-[-2px] leading-none"
                  style={{ fontSize: "clamp(48px, 5vw, 84px)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[13px] uppercase tracking-[2px] text-[#fbfcff]/80 font-medium">
                  {stat.label}
                </div>
                <div className="text-[12px] font-light text-[#fbfcff]/50 leading-[1.55]">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GLOBAL FOOTPRINT — Where we operate
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#4774AA] font-medium">
                <span className="w-6 h-[1px] bg-[#4774AA]" />
                Global footprint
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Operational presence, not just reach.
              </h2>
              <p className="text-[15px] font-light text-[#231010]/70 leading-[1.75] max-w-[480px]">
                Tiger BioSciences operates processing facilities, sales organizations, and
                regulatory teams across four continents. The same quality standard applies
                to every shipment, every market.
              </p>
              <div className="pt-4 flex flex-col gap-3">
                {[
                  { icon: Building2, label: "Four owned processing facilities" },
                  { icon: ShieldCheck, label: "FDA · CE Mark · Health Canada · TGA" },
                  { icon: HeartHandshake, label: "Partnerships with 400+ hospital systems" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon className="size-4 text-[#4774AA] shrink-0" />
                    <span className="text-[13px] font-light text-[#231010]/75">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-[#231010]/10 border border-[#231010]/10 rounded-[2px] overflow-hidden">
                {[
                  { count: "3", region: "United States", note: "HQ · Core market" },
                  { count: "11", region: "Europe", note: "CE Mark active" },
                  { count: "5", region: "Asia-Pacific", note: "Strategic growth" },
                  { count: "2", region: "Middle East", note: "Emerging markets" },
                  { count: "3", region: "Latin America", note: "Partnership model" },
                  { count: "1", region: "Africa", note: "Access initiative" },
                ].map((region, i) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="bg-[#fbfcff] p-6 md:p-7 flex flex-col gap-2 min-h-[160px]"
                  >
                    <MapPin className="size-4 text-[#4774AA] mb-1" />
                    <span
                      className="font-display font-light text-[#231010] leading-none tracking-[-0.6px]"
                      style={{ fontSize: "clamp(28px, 2.2vw, 40px)" }}
                    >
                      {region.count}
                    </span>
                    <span className="text-[13px] font-normal text-[#231010] leading-[1.3]">
                      {region.region}
                    </span>
                    <span className="text-[10px] uppercase tracking-[2px] text-[#231010]/45">
                      {region.note}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MANUFACTURING INTEGRITY — Vertical integration
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#fbfcff] border-y border-[#231010]/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Manufacturing integrity
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Vertically integrated. Never outsourced.
              </h2>
              <p className="text-[15px] font-light text-[#231010]/70 leading-[1.75]">
                From donor recovery through final release, Tiger owns every step of the
                process. It is a deliberate choice — one that lets us guarantee traceability,
                sterility, and clinical consistency.
              </p>
              <Link
                href="/company/facilities"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/60 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
              >
                Facility tour <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <div className="lg:col-span-7 space-y-[1px] bg-[#231010]/10 border border-[#231010]/10 rounded-[2px] overflow-hidden">
              {[
                {
                  step: "01",
                  title: "Donor recovery",
                  body: "Partner tissue banks work under AATB-accredited protocols. Every recovery is documented, auditable, and consent-verified.",
                },
                {
                  step: "02",
                  title: "Processing & decellularization",
                  body: "Proprietary protocols preserve extracellular matrix architecture. Bioburden reduction without compromising native biology.",
                },
                {
                  step: "03",
                  title: "Quality & release testing",
                  body: "Every lot undergoes sterility, endotoxin, residual reagent, and functional testing before release to clinical use.",
                },
                {
                  step: "04",
                  title: "Distribution & cold chain",
                  body: "Validated cold-chain logistics across 20+ countries. Real-time temperature monitoring. Zero disease transmission events on record.",
                },
              ].map((stage, i) => (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-[#ffffff] p-8 md:p-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-8"
                >
                  <div className="flex md:flex-col md:items-start gap-3 md:gap-2 md:w-[120px] shrink-0">
                    <span className="font-display font-light text-[#D5101F] text-[32px] md:text-[40px] leading-none tracking-[-1px]">
                      {stage.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-light text-[#231010] text-[22px] md:text-[24px] tracking-[-0.3px] leading-[1.2] mb-3">
                      {stage.title}
                    </h3>
                    <p className="text-[14.5px] font-light text-[#231010]/65 leading-[1.75]">
                      {stage.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NEWSROOM — Editorial card grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
            <div className="max-w-[600px] space-y-4">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Newsroom
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Latest from Tiger.
              </h2>
            </div>
            <Link
              href="/press"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/60 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
            >
              All press releases <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {newsroom.map((n, i) => (
              <motion.article
                key={n.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
              >
                <Link href={n.href} className="group block">
                  <div
                    className="relative aspect-[4/3] overflow-hidden mb-5 bg-[#231010]/[0.04]"
                  >
                    <Image
                      src={n.image}
                      alt={n.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[2.5px] text-[#231010]/50 mb-3">
                    <span className="text-[#D5101F] font-medium">{n.tag}</span>
                    <span className="w-1 h-1 rounded-full bg-[#231010]/30" />
                    <span>{n.date}</span>
                  </div>
                  <h3
                    className="font-display font-light text-[#231010] tracking-[-0.3px] leading-[1.2] group-hover:text-[#D5101F] transition-colors"
                    style={{ fontSize: "clamp(19px, 1.6vw, 24px)" }}
                  >
                    {n.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2.5px] text-[#231010]/45 group-hover:text-[#D5101F] transition-colors mt-4">
                    Read more
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LEADERSHIP QUOTE — Executive voice block
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#fbfcff] border-y border-[#231010]/[0.08]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-[880px]"
          >
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium mb-6">
              <span className="w-6 h-[1px] bg-[#D5101F]" />
              A letter from the Co-CEO
            </div>
            <blockquote
              className="font-display font-light text-[#231010] tracking-[-1px] leading-[1.15]"
              style={{ fontSize: "clamp(26px, 3.2vw, 44px)" }}
            >
              &ldquo;Our obligation is not to build the next product. It is to keep earning the trust of every surgeon, every nurse, and every donor family who chose to be part of this work.&rdquo;
            </blockquote>
            <div className="mt-10 pt-6 border-t border-[#231010]/15 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#231010]/5 border border-[#231010]/10 flex items-center justify-center text-[11px] font-medium tracking-[1px] text-[#231010]/60">
                  OB
                </div>
                <div>
                  <div className="text-[13px] font-medium text-[#231010]">Oliver Burckhardt</div>
                  <div className="text-[11px] uppercase tracking-[2px] text-[#231010]/45">Co-Founder &amp; Co-CEO · Tiger BioSciences</div>
                </div>
              </div>
              <Link
                href="/company/leadership"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/60 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
              >
                Read the full letter <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EXECUTIVE LEADERSHIP — Oliver Burckhardt
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-16">
            <div className="max-w-[620px] space-y-4">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Executive Leadership
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                The people behind the platform.
              </h2>
            </div>
            <Link
              href="/company/leadership"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/60 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
            >
              All leadership <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start border border-[#231010]/10 rounded-[2px] p-8 md:p-12 bg-[#fbfcff]"
          >
            <div className="lg:col-span-4">
              <div className="aspect-[4/5] relative rounded-[2px] overflow-hidden bg-[#231010]/8 flex items-center justify-center">
                <div className="font-display font-light text-[#231010]/25 text-[120px] leading-none tracking-[-4px]">
                  OB
                </div>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D5101F]" />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3
                  className="font-display font-light text-[#231010] tracking-[-1px] leading-[1.05] mb-2"
                  style={{ fontSize: "clamp(28px, 3.4vw, 44px)" }}
                >
                  Oliver Burckhardt
                </h3>
                <div className="text-[12px] uppercase tracking-[3px] text-[#D5101F] font-medium">
                  Co-Chief Executive Officer, Co-Founder &amp; Co-Owner
                </div>
              </div>

              <p className="text-[15.5px] font-light text-[#231010]/75 leading-[1.8]">
                As Co-Founder and Co-CEO, Oliver Burckhardt is one of the key driving forces behind the vision of and growth at Tiger BioSciences. He is actively involved in all aspects of the company from product innovation and market expansion to supporting strategic business partners. His over two decades of experience in the tissue and medical device industry serves as a foundation for his corporate strategy and entrepreneurial nature. At his core he is committed to advancing patient care and providing better solutions to clinicians and advancing science.
              </p>

              <div className="pt-6 border-t border-[#231010]/10 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-6 flex-wrap">
                  <div>
                    <div className="text-[10px] uppercase tracking-[2.5px] text-[#231010]/45 mb-1">
                      Tenure
                    </div>
                    <div className="font-display font-light text-[#231010] text-[18px] tracking-[-0.3px]">
                      Co-Founder · 2011
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[2.5px] text-[#231010]/45 mb-1">
                      Experience
                    </div>
                    <div className="font-display font-light text-[#231010] text-[18px] tracking-[-0.3px]">
                      20+ years in tissue &amp; medical devices
                    </div>
                  </div>
                </div>
                <Link
                  href="/company/leadership/oliver-burckhardt"
                  className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/70 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
                >
                  View full profile <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          OUR COMMITMENTS — ESG / responsibility
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-20">
            <div className="max-w-[640px] space-y-4">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Our commitments
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Four commitments that shape every decision.
              </h2>
            </div>
            <Link
              href="/company/responsibility"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/60 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
            >
              Responsibility report <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                icon: HeartHandshake,
                title: "Honoring the donor's gift",
                body: "Every graft begins with a family's decision. Our consent, traceability, and stewardship protocols are designed to honor that decision at every step — from recovery through patient use.",
                tag: "Donor respect",
              },
              {
                icon: ShieldCheck,
                title: "Patient-first clinical evidence",
                body: "We publish. We disclose. We do not market what has not been proven. Peer-reviewed evidence sits at the center of how our platforms reach clinical practice.",
                tag: "Evidence discipline",
              },
              {
                icon: Leaf,
                title: "Sustainable, ethical sourcing",
                body: "Tissue sourcing partnerships are audited annually. Our packaging, cold chain, and facility operations are measured against published sustainability targets.",
                tag: "Environmental stewardship",
              },
              {
                icon: Award,
                title: "Workforce and community",
                body: "We invest in the scientists, technicians, and clinical partners who make regenerative medicine possible. Our community grant programs reach 40+ academic partners each year.",
                tag: "People and community",
              },
            ].map((commitment, i) => {
              const Icon = commitment.icon;
              return (
                <motion.div
                  key={commitment.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, delay: i * 0.08 }}
                  className="group relative bg-[#fbfcff] border border-[#231010]/[0.08] hover:border-[#231010]/[0.18] p-8 md:p-10 transition-colors duration-500"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="size-6 text-[#D5101F]" />
                    <span className="text-[10px] uppercase tracking-[3px] text-[#231010]/40">
                      {commitment.tag}
                    </span>
                  </div>
                  <h3
                    className="font-display font-light text-[#231010] tracking-[-0.4px] leading-[1.15] mb-4"
                    style={{ fontSize: "clamp(22px, 2vw, 30px)" }}
                  >
                    {commitment.title}
                  </h3>
                  <p className="text-[14.5px] font-light text-[#231010]/65 leading-[1.75]">
                    {commitment.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TIMELINE — 15 years of milestones
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#fbfcff] border-y border-[#231010]/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 md:mb-16">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Fifteen years
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                A company built deliberately, year by year.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-[15.5px] font-light text-[#231010]/70 leading-[1.75] max-w-[640px]">
                Tiger BioSciences has grown by compounding scientific depth. Divisions,
                platforms, and markets have been added only when the underlying technology
                was ready to earn a clinician's trust.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-[152px] top-0 bottom-0 w-px bg-[#231010]/10" />
            <div className="space-y-10">
              {[
                {
                  year: "2011",
                  title: "Tiger BioSciences founded",
                  body: "AATB accreditation earned in the first operational year. Early focus on allograft tissue processing.",
                },
                {
                  year: "2015",
                  title: "Wound Care division established",
                  body: "First cellular allograft matrix introduced, targeting chronic wounds unresponsive to standard care.",
                },
                {
                  year: "2018",
                  title: "International expansion begins",
                  body: "CE Mark granted. Distribution partnerships formed across eight European markets within eighteen months.",
                },
                {
                  year: "2021",
                  title: "Aesthetics division launched",
                  body: "Regenerative science applied to reconstructive and aesthetic medicine. Acellular dermal matrices, injectable platforms.",
                },
                {
                  year: "2024",
                  title: "87+ peer-reviewed publications",
                  body: "Platform evidence base referenced in major wound care and reconstructive treatment guidelines.",
                },
                {
                  year: "2026",
                  title: "18 countries · 500K+ grafts",
                  body: "Zero disease transmission events across the full platform history. Safety remains the operating principle.",
                },
              ].map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-10"
                >
                  <div className="md:w-[152px] shrink-0">
                    <span
                      className="font-display font-light text-[#D5101F] leading-none tracking-[-1px]"
                      style={{ fontSize: "clamp(32px, 3vw, 44px)" }}
                    >
                      {milestone.year}
                    </span>
                  </div>
                  <div className="relative md:pl-8">
                    <div className="hidden md:block absolute left-[-5px] top-[12px] size-[10px] rounded-full bg-[#D5101F]" />
                    <h3 className="font-display font-light text-[#231010] text-[20px] md:text-[24px] tracking-[-0.3px] leading-[1.25] mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-[14.5px] font-light text-[#231010]/65 leading-[1.75] max-w-[640px]">
                      {milestone.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINANCIAL HIGHLIGHTS — Investor snapshot
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14 md:mb-16">
            <div className="max-w-[620px] space-y-4">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Performance
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
              >
                Disciplined growth, reinvested in science.
              </h2>
            </div>
            <Link
              href="/investors"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/60 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
            >
              Investor relations <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#231010]/10 border border-[#231010]/10 rounded-[2px] overflow-hidden">
            {[
              {
                value: "22%",
                label: "Revenue CAGR",
                note: "Five-year compounded growth",
                icon: TrendingUp,
              },
              {
                value: "17%",
                label: "R&D reinvestment",
                note: "Share of operating revenue · 2026",
                icon: FlaskConical,
              },
              {
                value: "4",
                label: "Divisions profitable",
                note: "Standalone P&L discipline",
                icon: Building2,
              },
              {
                value: "A-",
                label: "Credit quality",
                note: "Private rating · stable outlook",
                icon: Award,
              },
            ].map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="bg-[#fbfcff] p-8 md:p-10 flex flex-col gap-4 min-h-[260px]"
                >
                  <Icon className="size-5 text-[#D5101F]" />
                  <div
                    className="font-display font-light text-[#231010] leading-none tracking-[-1.5px] mt-2"
                    style={{ fontSize: "clamp(44px, 4.5vw, 72px)" }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-[13px] uppercase tracking-[2px] text-[#231010]/85 font-medium">
                    {metric.label}
                  </div>
                  <div className="text-[12px] font-light text-[#231010]/55 leading-[1.6]">
                    {metric.note}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 pt-8 border-t border-[#231010]/10 flex items-center justify-between flex-wrap gap-4"
          >
            <p className="text-[12px] font-light text-[#231010]/50 max-w-[640px] leading-[1.6]">
              Tiger BioSciences is privately held. Metrics above are drawn from the 2026
              Annual Report. Audited financials available to accredited institutional partners.
            </p>
            <Link
              href="/investors/annual-report"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/60 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
            >
              2026 annual report <ArrowUpRight className="size-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AUDIENCE CTAs — Three tiled paths
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <h2
              className="font-display font-light text-[#231010] tracking-[-1.2px] leading-[1] max-w-[520px]"
              style={{ fontSize: "clamp(28px, 3vw, 42px)" }}
            >
              Find what you&rsquo;re looking for.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audienceCtas.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <Link
                  href={c.href}
                  className="group flex items-center justify-between gap-6 p-7 md:p-8 border border-[#231010]/[0.1] hover:border-[#D5101F] hover:bg-[#D5101F] hover:text-[#fbfcff] transition-all duration-300"
                >
                  <span className="font-display font-light text-[20px] md:text-[22px] tracking-[-0.3px]">
                    {c.label}
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <VariantFooter theme="light" tagline="Medicine made more human. The regenerative portfolio serving eighteen countries." />
      <VariantNav current={1} />
    </main>
  );
}
