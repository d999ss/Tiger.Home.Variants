"use client";
import { VariantNav } from "@/components/ui/variant-nav";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { TigerButton } from "@/components/ui/tiger-button";

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    volume: "VOL. I",
    kicker: "Wound Care",
    color: "#DF5630",
    title: "A new standard for chronic wound repair.",
    body: "Cellular, Acellular, and Matrix-like Products engineered for the settings where healing stalls. Peer-reviewed evidence, FDA-registered facilities, and outcomes tracked across hospitals, surgical centers, and wound clinics.",
    pull: "500,000+ grafts processed. Zero contamination in 15 years of manufacturing.",
    image: "/images/tiger-assets/home-ex-care.jpeg",
    href: "/solutions/wound-care",
  },
  {
    volume: "VOL. II",
    kicker: "Aesthetics",
    color: "#D2A62C",
    title: "The science behind reconstructive beauty.",
    body: "Tiger Aesthetics delivers regenerative platforms for plastic surgeons, dermatologists, and reconstructive specialists. Bellafill, Sientra, and next-generation CAMP therapies sit inside a single clinical portfolio.",
    pull: "Four decades of reconstructive heritage. One integrated aesthetics house.",
    image: "/images/figma/division-aesthetics.png",
    href: "/solutions/aesthetics",
  },
  {
    volume: "VOL. III",
    kicker: "International",
    color: "#4774AA",
    title: "Germany-based access to regenerative medicine.",
    body: "From our European headquarters, Tiger BioSciences International extends cell and tissue technology across borders — building partnerships with hospital systems, distributors, and regulatory bodies on five continents.",
    pull: "Operating in 18 countries. Headquartered in Germany.",
    image: "/images/figma/division-international.png",
    href: "/solutions/international",
  },
];

const indexEntries = [
  { n: "I", title: "A new standard for chronic wound repair", page: "012" },
  { n: "II", title: "The science behind reconstructive beauty", page: "036" },
  { n: "III", title: "Germany-based access to regenerative medicine", page: "058" },
  { n: "IV", title: "The gift of donation", page: "074" },
  { n: "V", title: "What comes next in CAMP technology", page: "092" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeVariant6() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f1ea]">

      {/* ═══════════════════════════════════════════════════════════
          MASTHEAD — Editorial nameplate
      ═══════════════════════════════════════════════════════════ */}
      <div className="pt-[101px]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-6 md:pb-10 flex items-end justify-between gap-6 border-b border-[#231010]/15">
          <div className="min-w-0 flex-1">
            <div className="text-[10px] md:text-[11px] uppercase tracking-[4px] text-[#231010]/50 mb-2 md:mb-3">
              Tiger BioSciences Quarterly
            </div>
            <div
              className="font-display font-light text-[#231010] tracking-[-2px] leading-[0.92]"
              style={{ fontSize: "clamp(32px, 5.6vw, 88px)" }}
            >
              The Regenerative Review
            </div>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1 pb-2 shrink-0">
            <span className="text-[10px] uppercase tracking-[3px] text-[#231010]/50">
              Issue № 42
            </span>
            <span className="text-[10px] uppercase tracking-[3px] text-[#231010]/50">
              Spring 2026
            </span>
            <span className="text-[10px] uppercase tracking-[3px] text-[#D5101F]">
              $18.00 · Bttr Press
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          HERO — Full-bleed cover with drop-cap lede
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-14 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* Left — Cover image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-7 relative aspect-[4/5] md:aspect-[4/5] lg:aspect-auto lg:min-h-[78vh] overflow-hidden"
          >
            <Image
              src="/images/tiger-hero.png"
              alt="Tiger — the gaze of regenerative science"
              fill
              priority
              className="object-cover object-[72%_38%]"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            {/* Editorial credit */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#fbfcff]" />
              <span className="text-[10px] uppercase tracking-[3px] text-[#fbfcff] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                Cover · The Observer
              </span>
            </div>
          </motion.div>

          {/* Right — Editorial copy */}
          <div className="lg:col-span-5 space-y-7 lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-3 text-[10px] uppercase tracking-[3px] text-[#D5101F]"
            >
              <span className="w-6 h-[1px] bg-[#D5101F]" />
              Cover Feature · 14 min read
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
              className="font-display font-light text-[#231010] tracking-[-1.5px] leading-[0.98]"
              style={{ fontSize: "clamp(34px, 3.6vw, 56px)" }}
            >
              How a tissue bank in Georgia became the engine of global regenerative medicine.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-[15.5px] font-light text-[#231010]/75 leading-[1.75]"
            >
              <span
                className="float-left font-display font-light text-[#231010] mr-3 mt-1"
                style={{
                  fontSize: "clamp(58px, 5.8vw, 84px)",
                  lineHeight: "0.78",
                }}
              >
                T
              </span>
              iger BioSciences did not set out to build an empire. It set out to process a single allograft safely, consistently, and at a scale the field had not yet achieved. Fifteen years later, what began as a specialty tissue bank now anchors a portfolio spanning wound care, aesthetics, and international distribution — all orchestrated from FDA-registered facilities and AATB-accredited recovery networks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="border-t border-[#231010]/15 pt-6 space-y-4"
            >
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[2.5px] text-[#231010]/55">
                <span>By The Editors</span>
                <span className="w-1 h-1 rounded-full bg-[#231010]/30" />
                <span>Photography · Studio Bttr</span>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <TigerButton href="/company/about" arrow>
                  Read the Feature
                </TigerButton>
                <TigerButton href="/products" variant="secondary">
                  Browse the Portfolio
                </TigerButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TABLE OF CONTENTS
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-[#231010]/15 bg-[#ebe4d7]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-3 space-y-2">
            <span className="text-[10px] uppercase tracking-[3.5px] text-[#D5101F]">
              Contents
            </span>
            <h2
              className="font-display font-light text-[#231010] tracking-[-1px] leading-[1]"
              style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
            >
              Inside this issue
            </h2>
          </div>
          <ol className="md:col-span-9 divide-y divide-[#231010]/15">
            {indexEntries.map((e, i) => (
              <motion.li
                key={e.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-baseline gap-5 md:gap-8 py-4 md:py-5 text-[14px] md:text-[15px] font-light text-[#231010]/85"
              >
                <span className="w-8 md:w-12 text-[11px] uppercase tracking-[2px] text-[#231010]/45 shrink-0">
                  {e.n}
                </span>
                <span className="flex-1 leading-[1.4]">{e.title}</span>
                <span className="text-[11px] uppercase tracking-[2px] text-[#231010]/40 tabular-nums">
                  p. {e.page}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURES — Alternating editorial spreads
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28 space-y-24 md:space-y-32">
        {features.map((f, i) => {
          const imageRight = i % 2 === 1;
          return (
            <article
              key={f.volume}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start"
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
                className={`lg:col-span-7 relative aspect-[5/6] md:aspect-[4/3] overflow-hidden ${
                  imageRight ? "lg:order-2" : "lg:order-1"
                }`}
                style={{ backgroundColor: `${f.color}18` }}
              >
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-cover mix-blend-multiply"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
                <div
                  className="absolute top-0 left-0 h-[3px]"
                  style={{ width: "56px", background: f.color }}
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-3 text-[10px] uppercase tracking-[3px] text-[#fbfcff] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                  <span>{f.volume}</span>
                  <span className="w-5 h-[1px] bg-[#fbfcff]" />
                  <span>{f.kicker}</span>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className={`lg:col-span-5 space-y-6 lg:pt-4 ${
                  imageRight ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3px]">
                  <span className="w-6 h-[1px]" style={{ background: f.color }} />
                  <span style={{ color: f.color }}>
                    {f.volume} · {f.kicker}
                  </span>
                </div>

                <h3
                  className="font-display font-light text-[#231010] tracking-[-1.2px] leading-[0.98]"
                  style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
                >
                  {f.title}
                </h3>

                <p className="text-[14.5px] font-light text-[#231010]/75 leading-[1.8]">
                  {f.body}
                </p>

                {/* Pull quote */}
                <blockquote
                  className="border-l-[3px] pl-5 py-1 text-[17px] md:text-[19px] font-display font-light leading-[1.35] tracking-[-0.3px] text-[#231010]"
                  style={{ borderColor: f.color }}
                >
                  &ldquo;{f.pull}&rdquo;
                </blockquote>

                <div className="pt-2">
                  <TigerButton href={f.href} arrow>
                    Continue Reading
                  </TigerButton>
                </div>
              </motion.div>
            </article>
          );
        })}
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DEPARTMENT — Pull-quote feature with donor story
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-[#231010]/15 bg-[#231010] text-[#f5f1ea]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/tiger-assets/pregnant-lady.png"
                alt="The gift of donation"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3px] text-[#D5101F]">
              <span className="w-6 h-[1px] bg-[#D5101F]" />
              Department · The Gift
            </div>
            <h3
              className="font-display font-light tracking-[-1.2px] leading-[1]"
              style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
            >
              &ldquo;Every graft begins with a choice made by a family we will never meet.&rdquo;
            </h3>
            <p className="text-[14.5px] font-light text-[#f5f1ea]/70 leading-[1.8] max-w-[58ch]">
              Birth Tissue Recovery and the bioCARE Donor Network are not peripheral programs — they are the upstream of everything Tiger produces. Every AATB-accredited recovery, every informed consent, every transported allograft is the continuation of a human decision. The Regenerative Review dedicates a recurring department to those decisions and the clinicians who honor them.
            </p>
            <div className="flex items-center gap-4 flex-wrap pt-2">
              <TigerButton href="/company/donation" variant="outline-light" arrow>
                Read the Department
              </TigerButton>
              <span className="text-[11px] uppercase tracking-[2.5px] text-[#f5f1ea]/45">
                Written by Dr. M. Cho · 8 min
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MASTHEAD FOOTER — Editorial close
      ═══════════════════════════════════════════════════════════ */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-b border-[#231010]/15 pb-12">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-[3px] text-[#D5101F]">
              Subscribe
            </span>
            <h3
              className="font-display font-light text-[#231010] tracking-[-1.2px] leading-[1]"
              style={{ fontSize: "clamp(30px, 3.6vw, 52px)" }}
            >
              The next issue ships in 12 weeks.
            </h3>
            <p className="text-[14.5px] font-light text-[#231010]/70 leading-[1.75] max-w-[56ch]">
              Quarterly briefings on CAMP science, regenerative standards, and the regulatory shape of the field — delivered to clinicians, distributors, and research partners.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3 items-start lg:items-end">
            <TigerButton href="/contact" arrow>
              Request an Invitation
            </TigerButton>
            <Link
              href="/press"
              className="text-[12px] uppercase tracking-[2.5px] text-[#231010]/55 hover:text-[#D5101F] transition-colors"
            >
              Browse Back Issues →
            </Link>
          </div>
        </div>

        {/* Editorial colophon */}
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px] uppercase tracking-[2.5px] text-[#231010]/55">
          <div className="space-y-1">
            <div className="text-[#231010]/40">Editor in Chief</div>
            <div className="text-[#231010]">Tiger BioSciences</div>
          </div>
          <div className="space-y-1">
            <div className="text-[#231010]/40">Photography</div>
            <div className="text-[#231010]">Studio Bttr</div>
          </div>
          <div className="space-y-1">
            <div className="text-[#231010]/40">Type</div>
            <div className="text-[#231010]">Display Serif · Sans</div>
          </div>
          <div className="space-y-1">
            <div className="text-[#231010]/40">Issue</div>
            <div className="text-[#231010]">№ 42 · Spring 2026</div>
          </div>
        </div>
      </section>

      <VariantNav current={6} />
    </main>
  );
}
