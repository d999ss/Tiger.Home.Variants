"use client";
import { VariantNav } from "@/components/ui/variant-nav";
import { VariantTopNav } from "@/components/ui/variant-top-nav";
import { VariantFooter } from "@/components/ui/variant-footer";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

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
              src="/images/tiger-hero.png"
              alt="Tiger BioSciences — regenerative medicine"
              fill
              priority
              className="object-cover object-[62%_35%]"
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
                    TB
                  </div>
                  <div>
                    <div className="text-[12px] font-medium text-[#231010]">Scott Madden</div>
                    <div className="text-[10px] uppercase tracking-[2px] text-[#231010]/45">CEO · Tiger BioSciences</div>
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
              A letter from the CEO
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
                  SM
                </div>
                <div>
                  <div className="text-[13px] font-medium text-[#231010]">Scott Madden</div>
                  <div className="text-[11px] uppercase tracking-[2px] text-[#231010]/45">CEO · Tiger BioSciences</div>
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
