"use client";
import { VariantNav } from "@/components/ui/variant-nav";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  FlaskConical,
  Award,
  Globe,
  Heart,
  ArrowRight,
  TrendingUp,
  Microscope,
  ChevronRight,
} from "lucide-react";

import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

// ─── Shared animation variants ────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// ─── Bento card base style helpers ───────────────────────────────────────────

const cardBase =
  "group relative overflow-hidden rounded-[12px] bg-[#fbfcff] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] transition-all duration-500";

// ─── CEO Quote ────────────────────────────────────────────────────────────────

const CEO_QUOTE =
  "We don't just make products — we honor the donors who make everything possible, and deliver on the promise of regenerative medicine for every patient.";

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomeVariant10() {
  return (
    <main className="min-h-screen bg-[#ffffff]">

      {/* ═══════════════════════════════════════════════════════════════
          HERO — Short 60vh with centered text + background image
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex items-center justify-center overflow-hidden min-h-[500px] md:min-h-[60vh]">
        {/* Subtle background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/tiger-hero-original.png"
            alt="Tiger BioSciences hero"
            fill
            priority
            className="object-cover object-center opacity-90"
          />
          {/* Layered overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#231010]/65 via-[#231010]/50 to-[#ffffff]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#D5101F]/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[896px] px-6 md:px-12 py-16 md:py-32 text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm text-[10px] font-light uppercase tracking-[0.35em] text-white/75">
              <span className="size-1.5 rounded-full bg-[#D5101F]" />
              Regenerative Medicine Leaders
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-white leading-none tracking-tight mb-6"
            style={{ fontSize: "clamp(32px, 7vw, 88px)" }}
          >
            Science that<br />
            <em className="not-italic" style={{ color: "#D5101F" }}>heals.</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: "easeOut" }}
            className="text-[15px] font-light text-white/75 leading-relaxed max-w-[560px] mx-auto mb-10"
          >
            Tiger BioSciences leads the world in Cellular, Acellular, and Matrix-like Products —
            delivering proven outcomes across Wound Care, Aesthetics, and International markets.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <TigerButton href="/products" variant="primary" arrow>
              Explore Products
            </TigerButton>
            <TigerButton href="/science" variant="outline-light">
              Clinical Evidence
            </TigerButton>
          </motion.div>
        </div>

        {/* Trust bar overlay at bottom of hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/25 backdrop-blur-sm"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 py-3">
              {[
                { icon: Shield, text: "FDA Registered" },
                { icon: Award, text: "ISO 13485:2016" },
                { icon: Award, text: "AATB Accredited" },
                { icon: Globe, text: "20+ Countries" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[10px] font-light tracking-widest text-white/60 uppercase">
                  <Icon className="size-3 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BENTO GRID — Main mosaic layout
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">

          {/* Grid label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-10"
          >
            <span className="text-[11px] font-light uppercase tracking-[0.3em] text-[#231010]/40">
              Our Divisions &amp; Impact
            </span>
          </motion.div>

          {/* ── ROW 1: Wound Care (2-col wide) + Stat (1-col tall) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">

            {/* Wound Care — large 2/3 width card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={scaleIn}
              custom={0}
              className={`${cardBase} md:col-span-2`}
            >
              <Link href="/divisions/wound-care" className="block h-full">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/9] md:aspect-auto md:h-[340px]">
                  <Image
                    src="/images/tiger-assets/home-ex-care.jpeg"
                    alt="Wound Care Division"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/80 via-[#231010]/20 to-transparent" />

                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#DF5630]" />

                  {/* Content overlay on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <span className="block text-[10px] font-light uppercase tracking-[0.3em] text-[#DF5630] mb-2">
                      Wound Care Division
                    </span>
                    <h2 className="font-display font-light text-white text-[clamp(24px,3.5vw,40px)] leading-none tracking-tight mb-3">
                      Advanced CAMP Solutions<br />for Chronic Wounds
                    </h2>
                    <p className="text-[13px] font-light text-white/70 leading-relaxed max-w-[420px]">
                      Our cellular allograft matrices preserve native tissue architecture, providing regenerative scaffolds that conventional therapy lacks.
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="flex items-center justify-between px-7 py-4 border-t border-[#231010]/8">
                  <div className="flex gap-6">
                    <div>
                      <span className="block font-display font-light text-[#DF5630] text-[22px] leading-none">89%</span>
                      <span className="block text-[10px] font-light text-[#231010]/45 mt-1">Closure rate</span>
                    </div>
                    <div>
                      <span className="block font-display font-light text-[#DF5630] text-[22px] leading-none">12 wks</span>
                      <span className="block text-[10px] font-light text-[#231010]/45 mt-1">Median closure</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-light text-[#DF5630] transition-all duration-300 group-hover:gap-2.5">
                    Learn more <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Key stat card — tall, 1/3 width */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={0.1}
              className="group relative overflow-hidden rounded-[12px] flex flex-col justify-between p-8"
              style={{ background: "linear-gradient(135deg, #231010 0%, #3d1515 100%)" }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-12 -right-12 size-48 rounded-full bg-[#D5101F]/10 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 size-32 rounded-full bg-[#D5101F]/5 blur-xl" />

              <div className="relative z-10">
                <span className="block text-[10px] font-light uppercase tracking-[0.3em] text-white/40 mb-8">
                  Total Impact
                </span>
                <div className="space-y-6">
                  <div>
                    <span className="block font-display font-light text-white text-[56px] leading-none tracking-tight">
                      500K+
                    </span>
                    <span className="block text-[13px] font-light text-white/55 mt-2 leading-relaxed">
                      Grafts delivered with<br />zero disease events
                    </span>
                  </div>
                  <div className="h-[0.5px] bg-white/10" />
                  <div>
                    <span className="block font-display font-light text-[#D5101F] text-[40px] leading-none tracking-tight">
                      20+
                    </span>
                    <span className="block text-[13px] font-light text-white/55 mt-2">
                      Countries served globally
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-8">
                <Link href="/science" className="inline-flex items-center gap-2 text-[11px] font-light text-white/50 hover:text-white transition-colors">
                  View all evidence <ChevronRight className="size-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ── ROW 2: Aesthetics + International + CEO Quote ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">

            {/* Aesthetics card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={scaleIn}
              custom={0}
              className={`${cardBase}`}
            >
              <Link href="/divisions/aesthetics" className="block h-full">
                <div className="relative overflow-hidden rounded-t-[12px] aspect-[4/3] sm:h-[220px] sm:aspect-auto">
                  <Image
                    src="/images/figma/division-aesthetics.png"
                    alt="Aesthetics Division"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/60 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D2A62C]" />
                  <div className="absolute bottom-3 left-4">
                    <span
                      className="inline-block text-[9px] font-light uppercase tracking-[0.2em] px-3 py-1 border"
                      style={{ color: "#D2A62C", borderColor: "#D2A62C50", background: "#D2A62C18" }}
                    >
                      Aesthetics
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-light text-[#231010] text-[20px] tracking-tight">
                    Precision Regeneration
                  </h3>
                  <p className="text-[13px] font-light text-[#231010]/60 leading-relaxed">
                    Cutting-edge aesthetic medicine for reconstruction, rejuvenation, and renewal.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-light mt-2 transition-all duration-300 group-hover:gap-2.5" style={{ color: "#D2A62C" }}>
                    Explore <ArrowRight className="size-3" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* International card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={scaleIn}
              custom={0.1}
              className={`${cardBase}`}
            >
              <Link href="/divisions/international" className="block h-full">
                <div className="relative overflow-hidden rounded-t-[12px] aspect-[4/3] sm:h-[220px] sm:aspect-auto">
                  <Image
                    src="/images/figma/division-international.png"
                    alt="International Division"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/60 to-transparent" />
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#4774AA]" />
                  <div className="absolute bottom-3 left-4">
                    <span
                      className="inline-block text-[9px] font-light uppercase tracking-[0.2em] px-3 py-1 border"
                      style={{ color: "#4774AA", borderColor: "#4774AA50", background: "#4774AA18" }}
                    >
                      International
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-light text-[#231010] text-[20px] tracking-tight">
                    Global Reach
                  </h3>
                  <p className="text-[13px] font-light text-[#231010]/60 leading-relaxed">
                    Advanced cell and tissue technologies delivered across 20+ countries worldwide.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-light mt-2 transition-all duration-300 group-hover:gap-2.5" style={{ color: "#4774AA" }}>
                    Explore <ArrowRight className="size-3" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* CEO Quote card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={0.2}
              className="group relative overflow-hidden rounded-[12px] flex flex-col justify-between p-7 bg-[#D5101F]"
            >
              {/* Decorative pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 space-y-5 flex-1">
                <span className="block text-[10px] font-light uppercase tracking-[0.3em] text-white/55">
                  Leadership
                </span>

                {/* Large quote mark */}
                <span className="block font-display text-[60px] sm:text-[80px] leading-none text-white/15 -mt-4 -mb-6 select-none">
                  &ldquo;
                </span>

                <blockquote className="text-[14px] font-light text-white leading-[1.75] relative z-10">
                  {CEO_QUOTE}
                </blockquote>
              </div>

              <div className="relative z-10 mt-6 pt-6 border-t border-white/15">
                <span className="block text-[13px] font-light text-white">
                  Tiger BioSciences
                </span>
                <span className="block text-[11px] font-light text-white/55 mt-0.5">
                  Leadership
                </span>
              </div>
            </motion.div>
          </div>

          {/* ── ROW 3: Full-width Clinical Evidence Banner ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="group relative overflow-hidden rounded-[12px] mb-5"
            style={{ background: "linear-gradient(135deg, #ffffff 0%, #fbfcff 100%)", border: "1px solid rgba(35,16,16,0.08)" }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 md:px-12">
              {/* Label + heading */}
              <div className="space-y-2">
                <span className="block text-[10px] font-light uppercase tracking-[0.3em] text-[#D5101F]">
                  Clinical Evidence
                </span>
                <h3 className="font-display font-light text-[#231010] text-[clamp(22px,3vw,36px)] leading-none tracking-tight">
                  Peer-Reviewed. Proven. Trusted.
                </h3>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8 md:gap-12">
                {[
                  { stat: "89%", label: "Complete closure", sub: "at 12 weeks" },
                  { stat: "12 wks", label: "Median closure", sub: "vs. 18 standard" },
                  { stat: "0", label: "Disease events", sub: "in 500K+ grafts" },
                  { stat: "247", label: "Patient RCT", sub: "NEJM 2023" },
                ].map(({ stat, label, sub }) => (
                  <div key={label} className="space-y-1 text-center md:text-left">
                    <span className="block font-display font-light text-[#D5101F] text-[28px] md:text-[32px] leading-none">
                      {stat}
                    </span>
                    <span className="block text-[11px] font-light text-[#231010] leading-none">{label}</span>
                    <span className="block text-[10px] font-light text-[#231010]/40">{sub}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <TigerButton href="/science" variant="secondary" arrow>
                  Full Clinical Data
                </TigerButton>
              </div>
            </div>

            {/* Decorative gradient line at bottom */}
            <div className="h-[3px] bg-gradient-to-r from-[#DF5630] via-[#D5101F] to-[#D2A62C]" />
          </motion.div>

          {/* ── ROW 4: Donation Story + R&D Innovation ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Donation Story */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={scaleIn}
              custom={0}
              className={`${cardBase}`}
            >
              <div className="relative overflow-hidden aspect-[4/3] sm:h-[260px] sm:aspect-auto">
                <Image
                  src="/images/tiger-assets/pregnant-lady.png"
                  alt="Donation story — birth tissue"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/70 via-[#231010]/20 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-5 left-5 size-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <Heart className="size-5 text-white" strokeWidth={1.25} />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="block text-[10px] font-light uppercase tracking-[0.3em] text-white/60 mb-2">
                    The Gift of Donation
                  </span>
                  <h3 className="font-display font-light text-white text-[22px] leading-tight tracking-tight">
                    Every therapy begins with<br />an act of generosity.
                  </h3>
                </div>
              </div>

              <div className="p-7 space-y-4">
                <p className="text-[13px] font-light text-[#231010]/65 leading-relaxed">
                  500,000+ families have made our breakthroughs possible. We honor every donor by maintaining the highest standards of ethical tissue recovery — AATB accredited, zero disease events.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div>
                    <span className="block font-display font-light text-[#D5101F] text-[20px] leading-none">100%</span>
                    <span className="block text-[10px] font-light text-[#231010]/40 mt-1">Voluntary donation</span>
                  </div>
                  <div className="w-[0.5px] bg-[#231010]/10" />
                  <div>
                    <span className="block font-display font-light text-[#D5101F] text-[20px] leading-none">0</span>
                    <span className="block text-[10px] font-light text-[#231010]/40 mt-1">Disease transmissions</span>
                  </div>
                </div>
                <Link href="/company/donation" className="inline-flex items-center gap-2 text-[12px] font-light text-[#D5101F] transition-all duration-300 group-hover:gap-3 mt-2">
                  Learn about our program <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* R&D Innovation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={scaleIn}
              custom={0.12}
              className={`${cardBase} flex flex-col`}
            >
              {/* Top: science image */}
              <div className="relative overflow-hidden aspect-[4/3] sm:h-[200px] sm:aspect-auto">
                <Image
                  src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png"
                  alt="R&D Innovation — cellular science"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/60 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D5101F] to-[#D2A62C]" />

                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                  <span className="text-[9px] font-light uppercase tracking-[0.25em] text-white">
                    87 Publications
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-7 space-y-5">
                <div className="flex items-start gap-3">
                  <div
                    className="shrink-0 size-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(213,16,31,0.08)" }}
                  >
                    <Microscope className="size-5 text-[#D5101F]" strokeWidth={1.25} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-light uppercase tracking-[0.25em] text-[#D5101F] mb-1">
                      R&D Innovation
                    </span>
                    <h3 className="font-display font-light text-[#231010] text-[22px] leading-tight tracking-tight">
                      We own the science,<br />end to end.
                    </h3>
                  </div>
                </div>

                <p className="text-[13px] font-light text-[#231010]/65 leading-relaxed">
                  From donor screening through tissue processing, manufacturing, and distribution — our vertically integrated model accelerates innovation and ensures quality that others can&apos;t match.
                </p>

                {/* Innovation metrics */}
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {[
                    { icon: FlaskConical, value: "15+", label: "Patents" },
                    { icon: TrendingUp, value: "15+", label: "Years R&D" },
                    { icon: Award, value: "3", label: "Divisions" },
                  ].map(({ icon: Icon, value, label }) => (
                    <div key={label} className="text-center p-3 rounded-[8px] bg-[#ffffff]">
                      <Icon className="size-4 text-[#D5101F] mx-auto mb-1.5" strokeWidth={1.25} />
                      <span className="block font-display font-light text-[#231010] text-[18px] leading-none">{value}</span>
                      <span className="block text-[10px] font-light text-[#231010]/40 mt-1">{label}</span>
                    </div>
                  ))}
                </div>

                <Link href="/science" className="inline-flex items-center gap-2 text-[12px] font-light text-[#D5101F] transition-all duration-300 group-hover:gap-3">
                  Explore our science <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          REGENERATIVE SCIENCES FEATURE — Full bleed section
      ═══════════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          {/* Left: image with hover overlay */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={scaleIn}
            custom={0}
            className="relative overflow-hidden rounded-[12px] shadow-[0_20px_60px_rgba(0,0,0,0.12)] group"
            style={{ aspectRatio: "4/5" }}
          >
            <Image
              src="/images/figma/homepage-rectangle-2.png"
              alt="Regenerative Sciences"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-[10px] p-5 border border-white/50"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                <div>
                  <span className="block font-display font-light text-[#D5101F] text-[32px] leading-none">89%</span>
                  <span className="block text-[11px] font-light text-[#231010]/60 mt-1">Complete closure at 12 weeks</span>
                </div>
                <div className="text-right">
                  <span className="block font-display font-light text-[#231010] text-[32px] leading-none">0</span>
                  <span className="block text-[11px] font-light text-[#231010]/60 mt-1">Disease events</span>
                </div>
                <div className="text-right">
                  <span className="block font-display font-light text-[#231010] text-[32px] leading-none">500K+</span>
                  <span className="block text-[11px] font-light text-[#231010]/60 mt-1">Grafts delivered</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0.15}
            className="space-y-8"
          >
            <SectionHeader
              label="Regenerative Sciences"
              heading={<>The most advanced<br />tissue platform available.</>}
              body="Tiger BioSciences controls every step of the regenerative medicine supply chain — from donor screening and tissue recovery through R&D, manufacturing, and global distribution."
              align="left"
            />

            {/* Feature list */}
            <div className="space-y-4">
              {[
                {
                  icon: Shield,
                  title: "FDA Registered & AATB Accredited",
                  body: "Full regulatory compliance at every stage of tissue processing and distribution.",
                },
                {
                  icon: FlaskConical,
                  title: "87 Peer-Reviewed Publications",
                  body: "Science-backed outcomes published in NEJM, JAMA, and leading regenerative medicine journals.",
                },
                {
                  icon: Award,
                  title: "ISO 13485:2016 Certified Manufacturing",
                  body: "Quality management systems that exceed industry standards at every step.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-5 rounded-[10px] bg-[#fbfcff] hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-all duration-400">
                  <div className="shrink-0 size-9 rounded-full flex items-center justify-center bg-[#D5101F]/8">
                    <Icon className="size-4 text-[#D5101F]" strokeWidth={1.25} />
                  </div>
                  <div>
                    <span className="block text-[13px] font-normal text-[#231010] mb-1">{title}</span>
                    <span className="block text-[12px] font-light text-[#231010]/55 leading-relaxed">{body}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <TigerButton href="/science" variant="primary" arrow>
                Explore Our Science
              </TigerButton>
              <TigerButton href="/products" variant="secondary">
                View Products
              </TigerButton>
            </div>
          </motion.div>
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════════
          CTA SECTION — Final full-width call to action
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#231010] py-16 md:py-[100px] lg:py-[120px]">
        {/* Subtle background texture using the hero image, heavily dimmed */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/tiger-hero.png"
            alt=""
            fill
            className="object-cover opacity-10 mix-blend-luminosity"
          />
        </div>

        {/* Decorative red blob */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-[#D5101F]/8 blur-[80px] md:blur-[120px] -translate-y-1/4 translate-x-1/4" />

        <div className="relative mx-auto max-w-[896px] px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={0}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 border border-white/15 bg-white/5 px-5 py-2 text-[10px] font-light uppercase tracking-[0.35em] text-white/55">
              <span className="size-1.5 rounded-full bg-[#D5101F]" />
              Partner With Tiger BioSciences
            </span>

            <h2
              className="font-display font-light text-white leading-none tracking-tight"
              style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
            >
              Ready to deliver<br />
              <span style={{ color: "#D5101F" }}>better outcomes?</span>
            </h2>

            <p className="text-[15px] font-light text-white/60 leading-relaxed max-w-[560px] mx-auto">
              Whether you&apos;re a healthcare provider seeking superior graft outcomes, a distributor expanding your portfolio, or a researcher pushing the science forward — Tiger BioSciences is your partner.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <TigerButton href="/contact" variant="primary" arrow>
                Request Clinical Data Package
              </TigerButton>
              <TigerButton href="/contact" variant="outline-light">
                Schedule a Consultation
              </TigerButton>
            </div>

            {/* Bottom trust row */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10 mt-8">
              {[
                { icon: Shield, text: "FDA Registered" },
                { icon: Award, text: "AATB Accredited" },
                { icon: Globe, text: "20+ Countries" },
                { icon: Heart, text: "500K+ Grafts" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[10px] font-light uppercase tracking-[0.25em] text-white/35">
                  <Icon className="size-3.5" strokeWidth={1.25} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <VariantNav current={10} />
    </main>
  );
}
