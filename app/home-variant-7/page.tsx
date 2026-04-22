"use client";
import { VariantNav } from "@/components/ui/variant-nav";
import { VariantTopNav } from "@/components/ui/variant-top-nav";

import { Award, Building2, Globe, Heart, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

// ─── Data ────────────────────────────────────────────────────────────────────

const trustBadges = [
  { icon: CheckCircle, label: "FDA Registered Facilities" },
  { icon: Award, label: "AATB Accredited" },
  { icon: Building2, label: "500K+ Grafts Processed" },
  { icon: Globe, label: "Global Distribution" },
];

const divisions = [
  {
    id: "wound-care",
    divisionLabel: "Wound Care",
    color: "#DF5630",
    imageRight: true,
    image: "/images/figma/division-wound-care.png",
    tagline: "Advanced Wound Care Solutions",
    body: "Tiger Wound Care provides Cellular, Acellular, and Matrix-like Products (CAMPs) tailored for chronic and acute wounds. Innovative research and clinically validated outcomes across all care settings.",
    companies: ["Tiger Wound Care", "Extremity Care", "Encore Surgical Dressings"],
    href: "/solutions/wound-care",
  },
  {
    id: "aesthetics",
    divisionLabel: "Aesthetics",
    color: "#D2A62C",
    imageRight: false,
    image: "/images/figma/division-aesthetics.png",
    tagline: "Shaping the Future of Aesthetics",
    body: "Tiger Aesthetics delivers cutting-edge solutions across reconstructive, cosmetic, and regenerative domains — designed to maximize clinical results with advanced CAMP technologies.",
    companies: ["Tiger Aesthetics Medical"],
    href: "/solutions/aesthetics",
  },
  {
    id: "international",
    divisionLabel: "International",
    color: "#4774AA",
    imageRight: true,
    image: "/images/figma/division-international.png",
    tagline: "Global Access to Advanced Technologies",
    body: "Operating from Germany, Tiger BioSciences International broadens global access to cell and tissue products, building strong international partnerships across borders and healthcare systems.",
    companies: ["Tiger BioSciences International"],
    href: "/solutions/international",
  },
];

const donationPrograms = [
  {
    icon: Heart,
    title: "Birth Tissue Recovery",
    label: "BTR",
    body: "The country's most experienced human birth tissue bank — FDA registered, AATB accredited, and pioneering comprehensive birth tissue and placenta donation programs.",
  },
  {
    icon: Globe,
    title: "bioCARE Donor Network",
    label: "bioCARE",
    body: "Nationwide comprehensive services in the tissue donation process for deceased donors, managed by highly trained recovery professionals.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeVariant7() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#ffffff]">
      <VariantTopNav theme="light" ctaLabel="View Solutions" ctaHref="/products" />

      {/* ═══════════════════════════════════════════════════════════
          HERO — 50/50 Split
      ═══════════════════════════════════════════════════════════ */}
      <section className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2 pt-[72px]">

        {/* Left — Cream with headline and CTAs */}
        <div className="flex flex-col justify-center px-8 md:px-14 xl:px-20 py-12 md:py-16 lg:py-0 bg-[#ffffff] relative z-10 order-2 lg:order-1">

          {/* Subtle vertical rule on right edge — desktop only */}
          <div className="hidden lg:block absolute right-0 top-[15%] bottom-[15%] w-[1px] bg-[#231010]/[0.08]" />

          <div className="space-y-8 max-w-[520px]">
            <motion.span
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-[11px] font-normal uppercase tracking-[4px] text-[#231010]/45"
            >
              Clinical Excellence
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.35 }}
              className="font-display font-light text-[#231010] tracking-[-2px] leading-[0.93]"
              style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
            >
              The Leader
              <br />
              in{" "}
              <span
                className="relative inline-block"
                style={{
                  backgroundImage: "linear-gradient(135deg, #D5101F, #a00d17)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Regenerative
              </span>
              <br />
              Medicine
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] as const, delay: 0.52 }}
              className="text-[14.5px] font-light text-[#231010]/70 leading-[1.75]"
            >
              Tiger BioSciences is a leader in regenerative technology focused on the repair and regeneration of human tissue compromised by injury, aging, trauma, or disease. Our innovations empower providers to enhance their patients&apos; quality of life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] as const, delay: 0.66 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <TigerButton href="/products" arrow>
                View Solutions
              </TigerButton>
              <TigerButton href="/solutions/aesthetics" variant="secondary">
                Aesthetic Solutions
              </TigerButton>
            </motion.div>

            {/* Micro stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.8 }}
              className="flex items-center gap-4 md:gap-8 pt-4 border-t border-[#231010]/[0.09]"
            >
              {[
                { value: "500K+", label: "Grafts" },
                { value: "15+", label: "Years" },
                { value: "4", label: "Divisions" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-0.5">
                  <div className="font-display font-light text-[#231010] text-[28px] tracking-[-1px] leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-normal uppercase tracking-[2.5px] text-[#231010]/45">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right — Full bleed hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative order-1 lg:order-2 min-h-[45vw] sm:min-h-[55vw] lg:min-h-0"
        >
          <Image
            src="/images/tiger-hero.png"
            alt="Tiger BioSciences"
            fill
            priority
            className="object-cover object-[78%_45%]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          {/* Left edge fade into cream — desktop only */}
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-24 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #ffffff 0%, transparent 100%)",
            }}
          />
          {/* Bottom gradient for mobile */}
          <div
            className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none lg:hidden"
            style={{
              background: "linear-gradient(to top, #ffffff 0%, transparent 100%)",
            }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TRUST BADGES ROW
      ═══════════════════════════════════════════════════════════ */}
      <div className="bg-[#fbfcff] border-y border-[#231010]/[0.07]">
        <div className="max-w-5xl mx-auto px-6 py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="flex items-center gap-3"
            >
              <badge.icon className="size-4 shrink-0 text-[#D5101F]" strokeWidth={1.5} />
              <span className="text-[12.5px] font-light text-[#231010]/70 leading-tight">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          DIVISIONS — Alternating left/right
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="wide">
        <SectionHeader
          label="Our Divisions"
          heading="A comprehensive portfolio advancing medical technology"
        />

        <div className="space-y-16 md:space-y-24">
          {divisions.map((div) => {
            const isRight = div.imageRight;
            return (
              <div
                key={div.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative"
              >
                {/* Ambient glow */}
                <div
                  className="absolute pointer-events-none inset-y-0"
                  style={{
                    left: isRight ? "auto" : "-10%",
                    right: isRight ? "-10%" : "auto",
                    width: "60%",
                    background: `radial-gradient(ellipse at ${isRight ? "right" : "left"}, ${div.color}28 0%, transparent 70%)`,
                    filter: "blur(60px)",
                  }}
                />

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                  className={`relative rounded-[12px] overflow-hidden ${isRight ? "lg:order-2" : "lg:order-1"}`}
                  style={{ aspectRatio: "3/2", clipPath: "inset(0 0 round 12px)", backgroundColor: `${div.color}14` }}
                >
                  <Image
                    src={div.image}
                    alt={div.tagline}
                    fill
                    className="object-cover mix-blend-multiply transition-transform duration-500 hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  {/* Accent top bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: div.color }}
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 }}
                  className={`space-y-5 relative z-10 ${isRight ? "lg:order-1" : "lg:order-2"}`}
                >
                  {/* Division label */}
                  <div
                    className="flex items-center gap-2 text-[11px] font-normal uppercase tracking-[3.5px]"
                    style={{ color: div.color }}
                  >
                    <div className="w-5 h-[1.5px]" style={{ background: div.color }} />
                    Tiger BioSciences &bull; {div.divisionLabel}
                  </div>

                  <h3
                    className="font-display font-light text-[#231010] tracking-[-1px] leading-[1.0]"
                    style={{ fontSize: "clamp(26px, 3.5vw, 46px)" }}
                  >
                    {div.tagline}
                  </h3>

                  <p className="text-[14px] font-light text-[#231010]/70 leading-[1.75]">
                    {div.body}
                  </p>

                  {/* Companies */}
                  {div.companies.length > 0 && (
                    <div className="space-y-2 py-1">
                      <p className="text-[11px] font-normal uppercase tracking-[2.5px] text-[#231010]/40">
                        Companies
                      </p>
                      <div className="flex flex-wrap gap-x-5 gap-y-1">
                        {div.companies.map((c) => (
                          <span key={c} className="text-[13px] font-light text-[#231010]/70">
                            &bull; {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <TigerButton href={div.href} arrow>
                    Learn More
                  </TigerButton>
                </motion.div>
              </div>
            );
          })}
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════
          DONATION TEASER
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white">
        {/* Banner image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/3] sm:aspect-[16/7] md:aspect-[21/7] rounded-[12px] overflow-hidden mb-16"
          style={{ clipPath: "inset(0 0 round 12px)" }}
        >
          <Image
            src="/images/tiger-assets/pregnant-lady.png"
            alt="The gift of donation"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#231010]/40 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center px-6 md:px-10 lg:px-16">
            <div className="space-y-3 max-w-sm">
              <span className="text-[11px] font-normal uppercase tracking-[3.5px] text-[#fbfcff]/65">
                Where It All Begins
              </span>
              <p
                className="font-display font-light text-[#fbfcff] tracking-[-1px] leading-tight"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                The Gift of Donation
              </p>
            </div>
          </div>
        </motion.div>

        <SectionHeader
          label="Our Donation Network"
          heading="Honoring the extraordinary gift of tissue donation"
          body="A network dedicated to advancing tissue donation, recovery, and regenerative care — honoring donors and transforming their gift into hope for patients."
        />

        {/* Donation cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {donationPrograms.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.64, delay: i * 0.14 }}
              className="rounded-[12px] border border-[#231010]/[0.08] bg-[#fbfcff] p-8 space-y-5"
            >
              <div className="flex items-center gap-4">
                <div
                  className="p-4 rounded-full shrink-0"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(215,212,208,0.55))",
                    boxShadow: "6px 6px 14px rgba(0,0,0,0.07), -6px -6px 14px rgba(255,255,255,0.9)",
                    border: "1px solid rgba(255,255,255,0.6)",
                  }}
                >
                  <prog.icon className="size-6 text-[#231010]/60" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] font-normal uppercase tracking-[3px] text-[#D5101F]">
                    {prog.label}
                  </span>
                  <h3 className="font-display font-light text-[#231010] text-[22px] tracking-[-0.4px] leading-tight">
                    {prog.title}
                  </h3>
                </div>
              </div>
              <p className="text-[13.5px] font-light text-[#231010]/65 leading-[1.75]">
                {prog.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <TigerButton href="/company/donation" arrow>
            Learn About the Gift of Donation
          </TigerButton>
        </div>
      </TigerSection>

      {/* ═══════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════ */}
      <TigerSection bg="white" width="narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.72 }}
          className="text-center space-y-7"
        >
          <span className="inline-block text-[11px] font-normal uppercase tracking-[3.5px] text-[#231010]/40">
            Join Us
          </span>
          <h2
            className="font-display font-light text-[#231010] tracking-[-1.5px] leading-tight"
            style={{ fontSize: "clamp(30px, 4.5vw, 60px)" }}
          >
            Partner with Tiger BioSciences
          </h2>
          <p className="text-[14.5px] font-light text-[#231010]/65 leading-[1.75] max-w-[520px] mx-auto">
            Advancing medical technology through innovative cellular, acellular, and matrix-like products. We are the first of its kind in comprehensive tissue processing and medical device innovation.
          </p>

          {/* Horizontal divider with accent dot */}
          <div className="flex items-center gap-5 max-w-[300px] mx-auto py-2">
            <div className="flex-1 h-[1px] bg-[#231010]/[0.1]" />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#D5101F" }} />
            <div className="flex-1 h-[1px] bg-[#231010]/[0.1]" />
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <TigerButton href="/contact" arrow>
              Get in Touch
            </TigerButton>
            <TigerButton href="/products" variant="secondary">
              Explore Our Products
            </TigerButton>
          </div>

          {/* Quick links row */}
          <div className="flex items-center justify-center gap-6 flex-wrap pt-2">
            {[
              { label: "Science", href: "/science/early-research/camps-tech" },
              { label: "Leadership", href: "/company/leadership" },
              { label: "Careers", href: "/careers" },
              { label: "Compliance", href: "/compliance" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-[12px] font-light text-[#231010]/50 hover:text-[#231010] transition-colors duration-200"
              >
                {link.label}
                <ArrowRight className="size-3" />
              </Link>
            ))}
          </div>
        </motion.div>
      </TigerSection>

      <VariantNav current={7} />
    </main>
  );
}
