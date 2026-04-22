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
  TrendingUp,
  Users,
} from "lucide-react";

import { TigerButton } from "@/components/ui/tiger-button";
import { SectionHeader } from "@/components/ui/section-header";

// ─── Data ─────────────────────────────────────────────────────────────────────

const divisions = [
  {
    label: "Wound Care",
    color: "#DF5630",
    icon: HeartPulse,
    tagline: "Advanced allografts for complex chronic wounds.",
    href: "/divisions/wound-care",
    img: "/images/figma/division-wound-care.png",
  },
  {
    label: "Aesthetics",
    color: "#D2A62C",
    icon: Sparkles,
    tagline: "Science-backed treatments for renewal and reconstruction.",
    href: "/divisions/aesthetics",
    img: "/images/figma/division-aesthetics.png",
  },
  {
    label: "International",
    color: "#4774AA",
    icon: Globe,
    tagline: "Regenerative technologies delivered to 20+ countries.",
    href: "/divisions/international",
    img: "/images/figma/division-international.png",
  },
  {
    label: "Regenerative Sciences",
    color: "#D5101F",
    icon: Microscope,
    tagline: "Pioneering the science behind every breakthrough.",
    href: "/science",
    img: "/images/tiger-assets/pregnant-lady.png",
  },
];

const clinicalNumbers = [
  { stat: "89%", label: "Wound closure rate at 12 weeks", source: "NEJM 2023, n=247" },
  { stat: "500K+", label: "Grafts processed — zero disease-transmission events", source: "AATB Safety Surveillance" },
  { stat: "20+", label: "Countries receiving Tiger innovations", source: "Global Distribution" },
  { stat: "87", label: "Peer-reviewed publications", source: "Scientific Leadership" },
];

const trustBadges = [
  { icon: Shield, label: "FDA Registered Facility" },
  { icon: Award, label: "ISO 13485:2016 Certified" },
  { icon: Award, label: "AATB Accredited" },
  { icon: TrendingUp, label: "Published in NEJM & JAMA" },
  { icon: Users, label: "500,000+ Grafts Processed" },
];

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function HomeVariant5() {
  return (
    <main className="min-h-screen bg-[#231010] text-[#ffffff]">

      {/* ── Trust Bar ─────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 inset-x-0 z-50 bg-[#231010]/80 backdrop-blur-[20px] border-b border-[#ffffff]/[0.06] pt-[72px]"
      >
        <div className="container mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-center md:justify-between gap-6 flex-nowrap overflow-x-auto scrollbar-none md:flex-wrap">
          {trustBadges.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.label} className="flex items-center gap-2 text-[11px] text-[#ffffff]/40 font-light tracking-[0.3px]">
                <Icon className="size-3.5 text-[#D5101F]/70" />
                {b.label}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Video background */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/images/social_boredoptimism_blink_--ar_169_--bs_1_--motion_high_--raw_--vid_847e7ccd-911e-4c34-9b8f-19214e80b444_0.mp4"
              type="video/mp4"
            />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Bottom fade into deep brown */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #231010 8%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto max-w-[1280px] px-6 md:px-12 pt-24 md:pt-40 pb-16 md:pb-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-[11px] font-normal uppercase tracking-[3.5px] text-[#D5101F] mb-8"
            >
              Tiger BioSciences
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display font-light text-[#fbfcff] text-[clamp(40px,7vw,96px)] leading-none tracking-[-1.5px] md:tracking-[-3px] mb-8"
            >
              Redefining
              <br />
              What&apos;s Possible
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[16px] font-light text-[#ffffff]/60 leading-[28px] max-w-xl mx-auto mb-12"
            >
              A regenerative medicine company engineering breakthrough therapies
              across wound care, aesthetics, and beyond — powered by science,
              guided by purpose.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <TigerButton href="/products" variant="glass" arrow>
                Explore Products
              </TigerButton>
              <TigerButton href="/science" variant="outline-light" arrow>
                Our Science
              </TigerButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#ffffff]/30 to-transparent"
          />
          <span className="text-[9px] uppercase tracking-[3px] text-[#ffffff]/25 font-normal">
            Scroll
          </span>
        </motion.div>
      </section>

      {/* ── Divisions — Dark Cards ─────────────────────────────────────────── */}
      <section className="py-16 md:py-[120px] bg-[#231010]">
        <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <SectionHeader
              label="Our Divisions"
              heading={
                <span className="text-[#ffffff]">Four Divisions,<br />One Vision</span>
              }
              body=""
              align="left"
              className="[&_span]:text-[#ffffff]/35 [&_h2]:text-[#ffffff] [&_p]:text-[#ffffff]/50"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {divisions.map((div, i) => {
              const Icon = div.icon;
              return (
                <motion.div
                  key={div.label}
                  custom={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <Link
                    href={div.href}
                    className="group relative block rounded-[12px] overflow-hidden border border-[#ffffff]/[0.06] hover:border-[#ffffff]/[0.14] transition-all duration-300"
                    style={{
                      background: "#1a0e0e",
                      boxShadow: `0 0 0 0 ${div.color}00`,
                    }}
                  >
                    {/* Subtle glow on hover */}
                    <div
                      className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 60px -20px ${div.color}30`,
                      }}
                    />

                    {/* Background image (low opacity) */}
                    <Image
                      src={div.img}
                      alt=""
                      fill
                      className="object-cover opacity-[0.08] group-hover:opacity-[0.13] transition-opacity duration-500"
                    />

                    <div className="relative z-10 p-8">
                      {/* Icon + division label */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${div.color}20` }}
                        >
                          <Icon className="size-4" style={{ color: div.color }} />
                        </div>
                        <span
                          className="text-[11px] font-normal uppercase tracking-[2.5px]"
                          style={{ color: div.color }}
                        >
                          {div.label}
                        </span>
                      </div>

                      {/* Tagline */}
                      <p className="text-[15px] font-light text-[#ffffff]/55 leading-[24px] mb-6 max-w-xs">
                        {div.tagline}
                      </p>

                      {/* Arrow */}
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-normal uppercase tracking-[2px] text-[#ffffff]/30 group-hover:text-[#ffffff]/70 transition-colors duration-200">
                        Explore
                        <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: div.color }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Clinical Evidence Numbers ──────────────────────────────────────── */}
      <section className="py-16 md:py-[120px] bg-[#1a0e0e] border-t border-[#ffffff]/[0.05]">
        <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-20"
          >
            <span className="inline-block text-[11px] font-normal uppercase tracking-[3px] text-[#ffffff]/30 mb-5">
              Clinical Evidence
            </span>
            <h2 className="font-display font-light text-[#ffffff] text-[clamp(28px,5vw,60px)] leading-none tracking-[-1.5px]">
              The Numbers Speak
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#ffffff]/[0.06] rounded-[12px] overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {clinicalNumbers.map((item, i) => (
              <motion.div
                key={item.stat}
                custom={i}
                variants={fadeUp}
                className="bg-[#1a0e0e] p-6 sm:p-8 lg:p-10 flex flex-col items-start"
              >
                <span className="font-display font-light text-[#D5101F] text-[clamp(40px,5vw,64px)] leading-none tracking-[-2px] mb-4">
                  {item.stat}
                </span>
                <p className="text-[13.5px] font-light text-[#ffffff]/50 leading-[21px] mb-3">
                  {item.label}
                </p>
                <span className="text-[10px] font-normal uppercase tracking-[2px] text-[#ffffff]/20">
                  {item.source}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Full-Width Image Divider ───────────────────────────────────────── */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png"
          alt="Tiger BioSciences regenerative science"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#231010]/60" />
        {/* Pull quote overlay */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <blockquote className="text-center max-w-2xl">
            <p className="font-display font-light text-[#ffffff] text-[clamp(20px,4vw,42px)] leading-[1.15] tracking-[-0.8px] mb-6">
              &ldquo;We don&apos;t just process tissue — we honor every gift of
              donation by turning it into life-changing therapy.&rdquo;
            </p>
            <cite className="not-italic text-[12px] font-normal uppercase tracking-[3px] text-[#ffffff]/40">
              Tiger BioSciences Leadership
            </cite>
          </blockquote>
        </motion.div>
      </div>

      {/* ── CTA — Cream Contrast ──────────────────────────────────────────── */}
      <section className="relative py-16 md:py-[120px] bg-[#ffffff] overflow-hidden">
        {/* Decorative watermark */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/tiger-hero-original.png"
            alt=""
            fill
            className="object-cover object-center opacity-[0.04]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 container mx-auto max-w-[896px] px-6 md:px-12 text-center"
        >
          <span className="inline-block text-[11px] font-normal uppercase tracking-[3px] text-[#231010]/35 mb-6">
            Partner with Tiger
          </span>
          <h2 className="font-display font-light text-[#231010] text-[clamp(28px,5vw,64px)] leading-none tracking-[-2px] mb-6">
            Ready to Elevate
            <br />
            Patient Care?
          </h2>
          <p className="text-[15px] font-light text-[#231010]/55 leading-[26px] max-w-xl mx-auto mb-10">
            Our clinical team is ready to help you identify the right Tiger
            BioSciences solution for your patients and practice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <TigerButton href="/contact" variant="primary" arrow>
              Request a Consultation
            </TigerButton>
            <TigerButton href="/products" variant="secondary" arrow>
              Browse Products
            </TigerButton>
          </div>
        </motion.div>
      </section>
      <VariantNav current={5} />
    </main>
  );
}
