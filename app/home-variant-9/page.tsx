"use client";
import { VariantNav } from "@/components/ui/variant-nav";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  FlaskConical,
  Award,
  Heart,
  Globe,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

// ─── Hero Carousel Data ───────────────────────────────────────────────────────

const VIDEO_FOCUS =
  "/Tiger Movs/d999ss_httpss.mj.runhbnyQHMVgx8_Focus_--ar_256143_--video_1_-_e0f6ab6b-975b-4637-b5e5-469b401b294a_2.mp4";
const VIDEO_BLINK =
  "/images/social_boredoptimism_blink_--ar_169_--bs_1_--motion_high_--raw_--vid_847e7ccd-911e-4c34-9b8f-19214e80b444_0.mp4";

interface HeroVariation {
  id: string;
  label: string;
  headline: string;
  subheadline: string;
  video: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  badge: string;
}

const heroVariations: HeroVariation[] = [
  {
    id: "camps-leader",
    label: "Industry Leadership",
    headline: "The Leader in CAMPs and\nAesthetic Solutions",
    subheadline:
      "Tiger BioSciences sets the standard in Cellular, Acellular, and Matrix-like Products — combining science-backed precision with 15+ years of regenerative innovation.",
    video: VIDEO_FOCUS,
    ctaPrimary: { text: "Explore Our Portfolio", href: "/products" },
    ctaSecondary: { text: "View Clinical Data", href: "/science" },
    badge: "500,000+ Grafts Delivered",
  },
  {
    id: "donation",
    label: "The Gift of Donation",
    headline: "Each gift of donation\ntransforms lives.",
    subheadline:
      "Every graft begins with an act of extraordinary generosity. We honor every donor family by transforming tissue into life-changing therapies for patients who have exhausted all other options.",
    video: VIDEO_BLINK,
    ctaPrimary: { text: "Learn About Donation", href: "/company/donation" },
    ctaSecondary: { text: "Our Ethical Standards", href: "/compliance" },
    badge: "AATB Accredited",
  },
  {
    id: "clinical",
    label: "Clinical Precision",
    headline: "Leading with Data,\nDelivering with Precision",
    subheadline:
      "89% complete wound closure at 12 weeks. Zero disease transmission events across 500,000+ grafts. Our outcomes speak louder than our claims.",
    video: VIDEO_BLINK,
    ctaPrimary: { text: "View Clinical Evidence", href: "/science" },
    ctaSecondary: { text: "Download Portfolio", href: "/resources" },
    badge: "Published in NEJM & JAMA",
  },
  {
    id: "vision",
    label: "The Future of Care",
    headline: "The future of care.\nCloser than you think.",
    subheadline:
      "From chronic wound management to aesthetic regeneration and international reach — Tiger BioSciences is advancing the entire regenerative medicine landscape.",
    video: VIDEO_FOCUS,
    ctaPrimary: { text: "Our Divisions", href: "/divisions" },
    ctaSecondary: { text: "Meet Our Team", href: "/people" },
    badge: "20+ Countries Served",
  },
  {
    id: "leadership",
    label: "Built to Lead",
    headline: "Industry Leader,\nEvery Step of the Way.",
    subheadline:
      "We own the science — controlling donor screening, tissue recovery, R&D, manufacturing, and distribution. Our integrated model accelerates innovation and guarantees quality.",
    video: VIDEO_BLINK,
    ctaPrimary: { text: "Our Science", href: "/science" },
    ctaSecondary: { text: "Company Overview", href: "/company" },
    badge: "ISO 13485:2016 Certified",
  },
  {
    id: "heritage",
    label: "Global Trust",
    headline: "The world's most trusted.\nAdvanced solutions.",
    subheadline:
      "87 peer-reviewed publications. 15+ years of pioneering rigorous processing standards. Tiger BioSciences sets the benchmark for the entire regenerative medicine industry.",
    video: VIDEO_FOCUS,
    ctaPrimary: { text: "Request Information", href: "/contact" },
    ctaSecondary: { text: "Find a Rep", href: "/contact" },
    badge: "FDA Registered Facility",
  },
];

// ─── Three Pillars Data ──────────────────────────────────────────────────────

const pillars = [
  {
    icon: Shield,
    title: "FDA Registered",
    subtitle: "Regulatory Excellence",
    description:
      "Every product cleared under stringent FDA oversight. ISO 13485:2016 certified. AATB accredited. We set the regulatory standard others follow.",
    stat: "100%",
    statLabel: "Compliant",
  },
  {
    icon: FlaskConical,
    title: "Innovation",
    subtitle: "Science-First R&D",
    description:
      "87 peer-reviewed publications. 15 issued patents. Our integrated R&D pipeline from bench to bedside is the engine behind our clinical leadership.",
    stat: "87",
    statLabel: "Publications",
  },
  {
    icon: Award,
    title: "Leadership",
    subtitle: "Industry Standard",
    description:
      "15+ years as the industry benchmark. Our leadership team controls every step — from donor recovery through final distribution.",
    stat: "15+",
    statLabel: "Years",
  },
];

// ─── Division Cards Data ─────────────────────────────────────────────────────

const divisions = [
  {
    name: "Wound Care",
    tagline: "89% closure at 12 weeks",
    description: "Advanced CAMP grafts for chronic wounds & extremity reconstruction.",
    href: "/divisions/wound-care",
    color: "#DF5630",
    image: "/images/tiger-assets/home-ex-care.jpeg",
  },
  {
    name: "Aesthetics",
    tagline: "Precision regeneration",
    description: "Cutting-edge aesthetic medicine for reconstruction and renewal.",
    href: "/divisions/aesthetics",
    color: "#D2A62C",
    image: "/images/figma/division-aesthetics.png",
  },
  {
    name: "International",
    tagline: "20+ countries",
    description: "Global access to advanced cell and tissue technologies.",
    href: "/divisions/international",
    color: "#4774AA",
    image: "/images/figma/division-international.png",
  },
  {
    name: "Regenerative Sciences",
    tagline: "From bench to bedside",
    description: "R&D, tissue processing, and manufacturing excellence.",
    href: "/divisions/regenerative-sciences",
    color: "#D5101F",
    image: "/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomeVariant9() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const INTERVAL_MS = 8000;

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
  }, []);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroVariations.length);
    setProgress(0);
  }, []);

  // Auto-rotate every 8 seconds
  useEffect(() => {
    setProgress(0);
    const tick = INTERVAL_MS / 100;

    const rotateTimer = setInterval(goNext, INTERVAL_MS);
    const progressTimer = setInterval(() => {
      setProgress((p) => Math.min(p + 1, 100));
    }, tick);

    return () => {
      clearInterval(rotateTimer);
      clearInterval(progressTimer);
    };
  }, [current, goNext]);

  const hero = heroVariations[current];

  return (
    <main className="min-h-screen bg-[#ffffff]">

      {/* ═══════════════════════════════════════════════════════════════
          HERO CAROUSEL — Full-screen cinematic with rotating content
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen w-full overflow-hidden pt-[101px] bg-[#231010]">

        {/* Video Background — crossfades between slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`video-${hero.id}`}
            className="absolute inset-0 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <video
              key={hero.video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={hero.video} type="video/mp4" />
            </video>
            {/* Cinematic overlay: dark vignette + brand-tinted gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/45 to-[#231010]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Trust bar — top strip */}
        <motion.div
          className="absolute top-[101px] left-0 right-0 z-20 border-b border-white/10 bg-black/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 py-3">
              {[
                { icon: Shield, text: "FDA Registered Facility" },
                { icon: Award, text: "ISO 13485:2016 Certified" },
                { icon: Award, text: "AATB Accredited" },
                { icon: Heart, text: "500,000+ Grafts" },
              ].map(({ icon: Icon, text }, idx) => (
                <div key={text} className={`flex items-center gap-2 text-[11px] font-light tracking-widest text-white/70 uppercase${idx >= 2 ? " hidden md:flex" : ""}`}>
                  <Icon className="size-3.5 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hero Content — animated on slide change */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={hero.id}
                initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(2px)" }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl space-y-8"
              >
                {/* Label pill */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <span className="inline-flex items-center gap-2 border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-sm text-[10px] font-light uppercase tracking-[0.3em] text-white/80">
                    <span className="size-1.5 rounded-full bg-[#D5101F]" />
                    {hero.label}
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="font-display font-light text-white leading-none tracking-tight"
                  style={{ fontSize: "clamp(36px, 6vw, 84px)" }}
                >
                  {hero.headline.split("\n").map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.6 }}
                  className="max-w-2xl text-[15px] font-light leading-relaxed text-white/80"
                >
                  {hero.subheadline}
                </motion.p>

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="inline-flex items-center gap-3 border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm"
                >
                  <Sparkles className="size-3.5 text-[#D2A62C]" />
                  <span className="text-[12px] font-light tracking-wider text-white/90">{hero.badge}</span>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <TigerButton href={hero.ctaPrimary.href} variant="primary" arrow>
                    {hero.ctaPrimary.text}
                  </TigerButton>
                  <TigerButton href={hero.ctaSecondary.href} variant="outline-light">
                    {hero.ctaSecondary.text}
                  </TigerButton>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Dots — bottom center */}
        <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-4">
          {/* Dot navigation */}
          <div className="flex items-center gap-3">
            {heroVariations.map((v, i) => (
              <button
                key={v.id}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${v.label}`}
                className="relative flex items-center justify-center"
              >
                {i === current ? (
                  <motion.span
                    layoutId="activeDot"
                    className="block h-2 w-8 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                ) : (
                  <span className="block h-2 w-2 rounded-full bg-white/35 hover:bg-white/60 transition-colors" />
                )}
              </button>
            ))}
          </div>

          {/* Progress bar for current slide */}
          <div className="w-8 h-[2px] bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.08, ease: "linear" }}
            />
          </div>

          {/* Slide counter */}
          <span className="text-[10px] font-light tracking-widest text-white/50 uppercase">
            {String(current + 1).padStart(2, "0")} / {String(heroVariations.length).padStart(2, "0")}
          </span>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 right-8 z-20 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="text-[9px] font-light tracking-[0.3em] text-white/40 uppercase rotate-90 origin-center mb-4">Scroll</span>
          <motion.div
            className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THREE PILLARS — Neumorphic icon circles
      ═══════════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="wide">
        <SectionHeader
          label="Our Foundation"
          heading="Built on Three Unshakeable Pillars"
          body="Tiger BioSciences leads the regenerative medicine industry through regulatory excellence, relentless innovation, and proven clinical leadership."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center text-center gap-6"
              >
                {/* Neumorphic icon circle */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative flex items-center justify-center size-[100px] rounded-full"
                  style={{
                    background: "#ffffff",
                    boxShadow:
                      "8px 8px 20px rgba(0,0,0,0.12), -6px -6px 16px rgba(255,255,255,0.85), inset 0 0 0 1px rgba(255,255,255,0.5)",
                  }}
                >
                  {/* Inner glow ring on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: "inset 3px 3px 8px rgba(213,16,31,0.08), inset -2px -2px 6px rgba(255,255,255,0.6)" }} />
                  <Icon className="size-9 text-[#D5101F] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.25} />
                </motion.div>

                {/* Stat highlight */}
                <div className="space-y-1">
                  <span className="block font-display font-light text-[#D5101F] text-[clamp(32px,4vw,48px)] leading-none tracking-tight">
                    {pillar.stat}
                  </span>
                  <span className="block text-[11px] font-light uppercase tracking-[0.25em] text-[#231010]/40">
                    {pillar.statLabel}
                  </span>
                </div>

                {/* Text */}
                <div className="space-y-3">
                  <h3 className="font-display font-light text-[#231010] text-[22px] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[12px] font-light uppercase tracking-[0.2em] text-[#D5101F]">
                    {pillar.subtitle}
                  </p>
                  <p className="text-[14px] font-light text-[#231010]/65 leading-relaxed max-w-[280px] mx-auto">
                    {pillar.description}
                  </p>
                </div>

                {/* Divider line */}
                <motion.div
                  className="h-[1px] w-12 bg-[#D5101F]/30 group-hover:w-24 transition-all duration-500"
                />
              </motion.div>
            );
          })}
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════════
          DIVISION GRID — Compact 4-card layout
      ═══════════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="wide">
        <SectionHeader
          label="Our Divisions"
          heading="Four Areas of Regenerative Excellence"
          body="From chronic wound care to global aesthetics — every division is powered by the same science-first philosophy."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {divisions.map((div, i) => (
            <motion.div
              key={div.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={div.href}
                className="group relative flex flex-col overflow-hidden rounded-[12px] bg-[#ffffff] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] transition-all duration-500 h-full"
              >
                {/* Image area */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={div.image}
                    alt={div.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Division color accent top bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ backgroundColor: div.color }}
                  />

                  {/* Tagline on image */}
                  <div className="absolute bottom-3 left-4">
                    <span
                      className="inline-block text-[9px] font-light uppercase tracking-[0.25em] text-white/90 border px-3 py-1"
                      style={{ borderColor: `${div.color}60`, backgroundColor: `${div.color}25` }}
                    >
                      {div.tagline}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 gap-3 p-5">
                  <h3
                    className="font-display font-light text-[#231010] text-[18px] tracking-tight"
                    style={{ color: "#231010" }}
                  >
                    {div.name}
                  </h3>
                  <p className="text-[13px] font-light text-[#231010]/65 leading-relaxed flex-1">
                    {div.description}
                  </p>
                  <div
                    className="inline-flex items-center gap-1.5 text-[12px] font-light mt-1 transition-all duration-300 group-hover:gap-2.5"
                    style={{ color: div.color }}
                  >
                    Learn more
                    <ChevronRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════════
          PARTNERSHIP CTA — Full-width immersive section
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Background image with cinematic overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/tiger-hero.png"
            alt="Tiger BioSciences partnership"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#231010]/90 via-[#231010]/75 to-[#D5101F]/30" />
        </div>

        <div className="py-16 md:py-[120px]">
          <div className="mx-auto max-w-5xl px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12"
            >
              {/* Left: headline block */}
              <div className="space-y-6 max-w-xl">
                <span className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-light uppercase tracking-[0.3em] text-white/70">
                  <Globe className="size-3.5" />
                  Partnerships & Distribution
                </span>
                <h2 className="font-display font-light text-white leading-none tracking-tight text-[clamp(32px,5vw,60px)]">
                  Partner with the<br />
                  <span style={{ color: "#D5101F" }}>industry standard.</span>
                </h2>
                <p className="text-[14px] font-light text-white/70 leading-relaxed">
                  Whether you&apos;re a healthcare provider, distributor, or research institution — Tiger BioSciences offers partnership models built for long-term success. Leverage our science, supply chain, and support infrastructure.
                </p>

                {/* Trust stats row */}
                <div className="grid grid-cols-2 gap-4 pt-4 sm:flex sm:flex-wrap sm:gap-8">
                  {[
                    { value: "20+", label: "Countries" },
                    { value: "500K+", label: "Grafts" },
                    { value: "87", label: "Publications" },
                    { value: "15+", label: "Years" },
                  ].map(({ value, label }) => (
                    <div key={label} className="space-y-1">
                      <span className="block font-display font-light text-white text-[28px] leading-none">{value}</span>
                      <span className="block text-[10px] font-light uppercase tracking-[0.25em] text-white/45">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: CTA stack */}
              <div className="flex flex-col gap-4 lg:items-end">
                <TigerButton href="/contact" variant="primary" arrow>
                  Become a Partner
                </TigerButton>
                <TigerButton href="/contact" variant="outline-light">
                  Request Sample Kit
                </TigerButton>
                <TigerButton href="/resources" variant="glass">
                  Download Evidence Portfolio
                </TigerButton>
              </div>
            </motion.div>

            {/* Bottom divider line with logo mark suggestion */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="mt-20 h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
            />

            {/* Footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 text-center text-[11px] font-light tracking-[0.2em] text-white/35 uppercase"
            >
              Tiger BioSciences — Regenerative Medicine Leaders Since 2009
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CLINICAL EVIDENCE STRIP — Compact stats banner
      ═══════════════════════════════════════════════════════════════ */}
      <div className="bg-[#D5101F] py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between gap-6">
            <span className="text-[11px] font-light uppercase tracking-[0.3em] text-white/60">
              Clinical Evidence
            </span>
            <div className="flex flex-wrap gap-8 md:gap-16">
              {[
                { stat: "89%", label: "Wound closure rate" },
                { stat: "12 wks", label: "Median closure time" },
                { stat: "0", label: "Disease events" },
                { stat: "500K+", label: "Grafts delivered" },
              ].map(({ stat, label }) => (
                <div key={label} className="flex items-baseline gap-2">
                  <span className="font-display font-light text-white text-[24px] leading-none">{stat}</span>
                  <span className="text-[11px] font-light text-white/60">{label}</span>
                </div>
              ))}
            </div>
            <TigerButton href="/science" variant="inverse" arrow>
              View Full Data
            </TigerButton>
          </div>
        </div>
      </div>

      <VariantNav current={9} />
    </main>
  );
}
