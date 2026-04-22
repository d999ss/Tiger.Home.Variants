"use client";
import { VariantNav } from "@/components/ui/variant-nav";

import { Award, Globe, Shield, Microscope, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "FDA", label: "Registered Facilities" },
  { value: "500K+", label: "Grafts Processed" },
  { value: "15+", label: "Years of Innovation" },
  { value: "4", label: "Global Divisions" },
];

const pillars = [
  {
    icon: Shield,
    title: "FDA Approved",
    description:
      "Regulatory clearances across our portfolio ensure every product meets the highest standards of patient safety and clinical performance.",
  },
  {
    icon: Microscope,
    title: "Innovation First",
    description:
      "Pioneering the future of regenerative medicine through cutting-edge research, development, and real-world clinical application.",
  },
  {
    icon: Award,
    title: "Expert Leadership",
    description:
      "150+ years of combined executive experience driving transformative innovation in medical technology and tissue processing.",
  },
];

const divisions = [
  {
    id: "wound-care",
    label: "Wound Care",
    color: "#DF5630",
    image: "/images/tiger-assets/home-ex-care.jpeg",
    summary: "Advanced CAMPs for chronic and acute wound management.",
    href: "/solutions/wound-care",
  },
  {
    id: "aesthetics",
    label: "Aesthetics",
    color: "#D2A62C",
    image: "/images/figma/division-aesthetics.png",
    summary: "Regenerative solutions restoring natural beauty.",
    href: "/solutions/aesthetics",
  },
  {
    id: "international",
    label: "International",
    color: "#4774AA",
    image: "/images/figma/division-international.png",
    summary: "Global access to cell and tissue technologies.",
    href: "/solutions/international",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeVariant6() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#ffffff]">

      {/* ═══════════════════════════════════════════════════════════
          HERO — Full-viewport cinematic video
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-[101px] bg-[#1a0b0b]">

        {/* Poster image — plays when video is loading or blocked */}
        <Image
          src="/images/tiger-hero.png"
          alt=""
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "75% 35%" }}
        />

        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/tiger-hero.png"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 20%" }}
        >
          <source
            src="/images/social_boredoptimism_blink_--ar_169_--bs_1_--motion_high_--raw_--vid_847e7ccd-911e-4c34-9b8f-19214e80b444_0.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient overlays — layered for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/40 pointer-events-none" />
        <div
          className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #ffffff 0%, rgba(239,237,234,0.9) 20%, rgba(239,237,234,0.5) 55%, transparent 100%)",
          }}
        />
        {/* Subtle vignette for cinematic focus */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.35) 100%)",
          }}
        />

        {/* Centered headline — staggered entrance */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block text-[11px] font-normal uppercase tracking-[4px] text-[#fbfcff]/70 mb-8"
          >
            Clinical Excellence
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 }}
            className="font-display font-light text-[#fbfcff] leading-[0.92] tracking-[-2px] mb-8"
            style={{ fontSize: "clamp(52px, 9vw, 128px)" }}
          >
            The Leader in
            <br />
            <span className="italic">Regenerative</span>
            <br />
            Medicine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] as const, delay: 0.72 }}
            className="text-[16px] font-light text-[#fbfcff]/80 leading-[1.7] max-w-[560px] mx-auto mb-10"
          >
            Tiger BioSciences develops tissue-based solutions that restore lives — advancing wound care, aesthetics, and regenerative science worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] as const, delay: 0.88 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <TigerButton href="/products" arrow>
              View Solutions
            </TigerButton>
            <TigerButton href="/company/overview" variant="outline-light">
              Our Story
            </TigerButton>
          </motion.div>
        </div>

        {/* Floating stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: 1.05 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 w-full max-w-3xl px-6"
        >
          <div
            className="grid grid-cols-2 md:flex md:items-center md:justify-between gap-4 md:gap-2 rounded-[12px] px-6 md:px-8 py-5 backdrop-blur-[24px]"
            style={{
              background: "rgba(251,252,255,0.12)",
              border: "1px solid rgba(251,252,255,0.18)",
            }}
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <span
                  className="font-display font-light text-[#fbfcff] leading-none tracking-[-1px]"
                  style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] font-normal uppercase tracking-[2.5px] text-[#fbfcff]/60 mt-1.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THREE PILLARS
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white">
        <SectionHeader
          label="The Tiger Way"
          heading="Built on science. Driven by purpose."
          body="We combine rigorous clinical standards with pioneering innovation — ensuring every product we create meets the highest bar for safety, efficacy, and impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.12 }}
              className="flex flex-col items-center text-center gap-6"
            >
              {/* Icon orb */}
              <div
                className="rounded-full p-5 shrink-0"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.92), rgba(215,212,208,0.55))",
                  boxShadow:
                    "8px 8px 18px rgba(0,0,0,0.08), -8px -8px 18px rgba(255,255,255,0.92), inset 1px 1px 2px rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.65)",
                }}
              >
                <pillar.icon className="size-7 text-[#231010]/65" strokeWidth={1.5} />
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-light text-[#231010] text-[22px] tracking-[-0.5px]">
                  {pillar.title}
                </h3>
                <p className="text-[13.5px] font-light text-[#231010]/70 leading-[1.75]">
                  {pillar.description}
                </p>
              </div>

              {/* Subtle accent line */}
              <div className="w-8 h-[2px] rounded-full mt-2" style={{ background: "#D5101F" }} />
            </motion.div>
          ))}
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════
          DIVISION CARDS — Three in a row
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="wide">
        <SectionHeader
          label="Our Divisions"
          heading="A comprehensive portfolio advancing medical technology"
          body="Four specialized divisions working in concert — delivering regenerative solutions across wound care, aesthetics, and international markets."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {divisions.map((div, i) => (
            <motion.div
              key={div.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.14 }}
            >
              <Link
                href={div.href}
                className="group block rounded-[12px] overflow-hidden relative"
                style={{ aspectRatio: "3/4" }}
              >
                {/* Image */}
                <Image
                  src={div.image}
                  alt={div.label}
                  fill
                  className="object-cover transition-transform duration-[0.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/80 via-[#231010]/20 to-transparent" />

                {/* Color accent top */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: div.color }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 space-y-2">
                  <span
                    className="text-[11px] font-normal uppercase tracking-[3px]"
                    style={{ color: div.color }}
                  >
                    Tiger BioSciences
                  </span>
                  <h3 className="font-display font-light text-[#fbfcff] text-[28px] tracking-[-0.5px] leading-tight">
                    {div.label}
                  </h3>
                  <p className="text-[12.5px] font-light text-[#fbfcff]/70 leading-[1.65]">
                    {div.summary}
                  </p>
                  <div className="flex items-center gap-1.5 text-[#fbfcff]/60 text-[12px] pt-2 group-hover:text-[#fbfcff] transition-colors duration-300">
                    <span>Learn more</span>
                    <ChevronRight className="size-3.5 -translate-x-1 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════
          DONATION FEATURE — Split image + copy
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative rounded-[12px] overflow-hidden"
            style={{ aspectRatio: "4/5", clipPath: "inset(0 0 round 12px)" }}
          >
            <Image
              src="/images/tiger-assets/pregnant-lady.png"
              alt="The gift of donation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #ffffff 0%, rgba(239,237,234,0.6) 40%, transparent 100%)",
              }}
            />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 }}
            className="space-y-8"
          >
            <span className="inline-block text-[11px] font-normal uppercase tracking-[3.5px] text-[#231010]/40">
              Where It All Begins
            </span>

            <h2
              className="font-display font-light text-[#231010] tracking-[-1.5px] leading-[0.95]"
              style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
            >
              The Gift
              <br />
              of Donation
            </h2>

            <p className="text-[14.5px] font-light text-[#231010]/70 leading-[1.75]">
              Every graft begins with an extraordinary act of generosity. We honor that gift by transforming tissue into solutions that restore lives — processing over 500,000 grafts with an unmatched safety record built on rigorous standards and relentless care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
              {[
                { label: "Birth Tissue Recovery", note: "FDA Registered · AATB Accredited" },
                { label: "bioCARE Network", note: "Nationwide Donor Services" },
              ].map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <div className="w-6 h-[2px] rounded-full" style={{ background: "#D5101F" }} />
                  <h4 className="text-[14px] font-medium text-[#231010] tracking-[-0.2px]">
                    {item.label}
                  </h4>
                  <p className="text-[12px] font-light text-[#231010]/55 leading-[1.6]">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            <TigerButton href="/company/donation" arrow>
              Learn About Donation
            </TigerButton>
          </motion.div>
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════
          CTA — Full-width image banner
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ clipPath: "inset(0)" }}>
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/7] md:aspect-[21/6]">
          <Image
            src="/images/figma/homepage-rectangle-2.png"
            alt="Tiger BioSciences"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Deep overlay */}
          <div className="absolute inset-0 bg-[#231010]/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display font-light text-[#fbfcff] tracking-[-1.5px] leading-tight"
              style={{ fontSize: "clamp(30px, 5vw, 64px)" }}
            >
              Partner with Tiger BioSciences
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[15px] font-light text-[#fbfcff]/75 max-w-[500px] leading-[1.7]"
            >
              Advancing medical technology through innovative cellular, acellular, and matrix-like products. Comprehensive tissue processing at the highest clinical standards.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="flex items-center gap-4 flex-wrap justify-center"
            >
              <TigerButton href="/contact" arrow>
                Get in Touch
              </TigerButton>
              <TigerButton href="/products" variant="outline-light">
                Explore Products
              </TigerButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          REGENERATIVE SCIENCES TEASER
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72 }}
          className="text-center space-y-6"
        >
          <Globe className="size-8 mx-auto text-[#231010]/30" strokeWidth={1.2} />
          <span className="inline-block text-[11px] font-normal uppercase tracking-[3.5px] text-[#231010]/40">
            Regenerative Sciences
          </span>
          <h2
            className="font-display font-light text-[#231010] tracking-[-1.2px] leading-tight"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            The science behind every solution
          </h2>
          <p className="text-[14.5px] font-light text-[#231010]/65 leading-[1.75] max-w-[560px] mx-auto">
            From CAMP platforms to landmark clinical trials, our Regenerative Sciences division anchors every product in peer-reviewed evidence and decades of tissue science expertise.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap pt-2">
            <TigerButton href="/science/early-research/camps-tech" arrow>
              Explore the Science
            </TigerButton>
            <TigerButton href="/science/early-research/camps-tech/research" variant="secondary">
              Research &amp; Development
            </TigerButton>
          </div>
        </motion.div>
      </TigerSection>

      <VariantNav current={6} />
    </main>
  );
}
