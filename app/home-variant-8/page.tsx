"use client";
import { VariantNav } from "@/components/ui/variant-nav";
import { VariantTopNav } from "@/components/ui/variant-top-nav";
import { VariantFooter } from "@/components/ui/variant-footer";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Activity, Sparkles, Globe, Quote } from "lucide-react";

import { TigerButton } from "@/components/ui/tiger-button";

// ---------------------------------------------------------------------------
// Shared animation presets
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.65, delay: i * 0.08 },
  }),
};

// ---------------------------------------------------------------------------
// Section 1 — Hero
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative isolate min-h-[100vh] bg-[#ffffff] overflow-hidden pt-[101px]">
      {/* Top red hairline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[101px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D5101F]/40 to-transparent origin-left z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-101px)]">
        {/* Left: editorial type column */}
        <div className="lg:col-span-7 flex flex-col justify-center px-6 md:px-16 lg:px-20 py-16 lg:py-0 relative">
          {/* Chapter indicator */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="text-[10px] uppercase tracking-[3px] text-[#D5101F] font-medium">Chapter 01</span>
            <span className="w-8 h-[1px] bg-[#231010]/20" />
            <span className="text-[10px] uppercase tracking-[3px] text-[#231010]/35">Six-Part Story</span>
          </motion.div>

          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-block text-[10px] uppercase tracking-[4px] text-[#231010]/40 mb-8"
          >
            Tiger BioSciences · A Story of Innovation
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display font-light text-[#231010] text-[clamp(44px,7vw,112px)] tracking-[-1.5px] md:tracking-[-3px] leading-[0.95] mb-10 max-w-[820px]"
          >
            Every Innovation<br />
            Begins with a<br />
            <span style={{ backgroundImage: "linear-gradient(135deg, #D5101F, #a00d17)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Gift.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-[17px] md:text-[20px] font-light text-[#231010]/60 max-w-[520px] leading-[1.7] mb-12"
          >
            From a single act of generosity, we build therapies that heal.
            This is the Tiger BioSciences story.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap gap-3"
          >
            <TigerButton href="/science" variant="primary" arrow>
              Explore Our Science
            </TigerButton>
            <TigerButton href="/products" variant="secondary">
              View Products
            </TigerButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-10 left-6 md:left-16 lg:left-20 hidden sm:flex flex-col items-start gap-3"
          >
            <span className="text-[9px] uppercase tracking-[3px] text-[#231010]/30">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="size-4 text-[#231010]/30" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right: image panel */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative min-h-[420px] lg:min-h-0 bg-[#231010] overflow-hidden"
        >
          <Image
            src="/images/tigers/tiger-skin-macro.png"
            alt="Tiger BioSciences"
            fill
            className="object-cover object-[60%_40%]"
            priority
          />
          {/* subtle warm overlay for brand tone */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(26,8,8,0.18) 0%, rgba(26,8,8,0.0) 35%, rgba(26,8,8,0.25) 100%)",
            }}
          />
          {/* chapter marker card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
            className="absolute bottom-10 left-10 right-10 lg:left-10 lg:right-10 backdrop-blur-md bg-black/30 border border-white/15 rounded-[4px] p-6"
          >
            <div className="h-px bg-[#D5101F] w-10 mb-4" />
            <p className="font-display font-light text-white text-[18px] leading-[1.4] mb-2">
              &ldquo;A story of science, craftsmanship, and care.&rdquo;
            </p>
            <span className="text-[10px] uppercase tracking-[2.5px] text-white/60">Chapter 01 — The Gift</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 2 — The Gift
// ---------------------------------------------------------------------------

function GiftSection() {
  return (
    <section className="relative min-h-[80vh] bg-[#fbfcff] flex items-center py-16 md:py-28">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[12px] overflow-hidden"
          >
            <div className="aspect-[3/4] relative">
              <Image
                src="/images/tiger-assets/pregnant-lady.png"
                alt="The gift of tissue donation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0808]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="h-px bg-[#D5101F] w-12 mb-4" />
                <p className="font-display font-light text-[#fbfcff] text-[20px] leading-[1.4]">
                  &ldquo;Their generosity is the foundation of everything we do.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0}
              className="inline-block text-[11px] uppercase tracking-[3.5px] text-[#D5101F] mb-6"
            >
              Chapter One · The Gift
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={1}
              className="font-display font-light text-[#231010] text-[clamp(32px,5vw,60px)] tracking-[-1.5px] leading-none mb-8"
            >
              It starts with a family&apos;s decision.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={2}
              className="text-[15px] font-light text-[#231010]/65 leading-[28px] mb-6"
            >
              Every year, hundreds of thousands of families face unimaginable loss. Many choose to transform
              that loss into something extraordinary — the gift of tissue donation. These families make
              everything we do possible.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={3}
              className="text-[15px] font-light text-[#231010]/65 leading-[28px] mb-10"
            >
              Tiger BioSciences is an AATB-accredited tissue bank. We receive donated tissue with reverence,
              process it with precision, and transform it into therapies that restore quality of life
              for patients who have exhausted every other option. This covenant with donors shapes every
              decision we make.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={4}
              className="flex items-center gap-3 p-5 rounded-[12px] bg-[#ffffff] border-l-2 border-[#D5101F]"
            >
              <div>
                <span className="text-[12px] uppercase tracking-[2px] text-[#D5101F] block mb-1">
                  Our Promise
                </span>
                <span className="text-[13px] font-light text-[#231010]/70 leading-[22px]">
                  Zero disease transmission events across 500,000+ grafts processed. Safety is not a feature — it&apos;s our covenant.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 3 — The Science
// ---------------------------------------------------------------------------

function ScienceSection() {
  const steps = [
    {
      step: "01",
      title: "Recovery",
      description: "Tissue is recovered by trained specialists within 24 hours of death, in sterile conditions meeting AATB and FDA standards.",
    },
    {
      step: "02",
      title: "Processing",
      description: "Our proprietary protocols — including novel decellularization techniques — remove cellular material while preserving native tissue architecture.",
    },
    {
      step: "03",
      title: "Validation",
      description: "Each lot undergoes rigorous microbiological, biochemical, and biomechanical testing before release. Every graft is traceable from donor to patient.",
    },
    {
      step: "04",
      title: "Delivery",
      description: "Lyophilized or cryopreserved products ship in temperature-controlled packaging to clinicians worldwide.",
    },
  ];

  return (
    <section className="relative min-h-[80vh] bg-[#ffffff] flex items-center py-16 md:py-28">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Content */}
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0}
              className="inline-block text-[11px] uppercase tracking-[3.5px] text-[#D5101F] mb-6"
            >
              Chapter Two · The Science
            </motion.span>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={1}
              className="font-display font-light text-[#231010] text-[clamp(32px,5vw,60px)] tracking-[-1.5px] leading-none mb-8"
            >
              Precision at every step of the process.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={2}
              className="text-[15px] font-light text-[#231010]/65 leading-[28px] mb-12"
            >
              We are a vertically integrated regenerative medicine company. We control every stage —
              from recovery to R&D to manufacturing to distribution. This ownership accelerates innovation
              and guarantees quality standards no third-party model can match.
            </motion.p>

            <div className="space-y-6">
              {steps.map((item, i) => (
                <motion.div
                  key={item.step}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={i + 3}
                  className="flex gap-5"
                >
                  <span className="font-display font-light text-[#D5101F]/30 text-[28px] leading-none pt-0.5 w-8 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-display font-light text-[#231010] text-[18px] tracking-[-0.3px] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] font-light text-[#231010]/55 leading-[22px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[12px] overflow-hidden aspect-[4/5]">
              <Image
                src="/images/tiger-hero-original.png"
                alt="Tiger BioSciences laboratory and science"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#231010]/30" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.55 }}
              className="absolute -bottom-6 left-0 lg:-left-6 bg-[#fbfcff] rounded-[12px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            >
              <span className="text-[10px] uppercase tracking-[2.5px] text-[#231010]/40 block mb-1">
                Publication Count
              </span>
              <span className="font-display font-light text-[#231010] text-[36px] leading-none">
                87<span className="text-[#D5101F]">+</span>
              </span>
              <span className="text-[11px] text-[#231010]/45 block mt-1">Peer-reviewed studies</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 4 — The Impact
// ---------------------------------------------------------------------------

function ImpactSection() {
  const stats = [
    {
      value: "89%",
      label: "Complete wound closure",
      detail: "at 12 weeks in clinical trials vs. 64% standard of care",
      color: "#D5101F",
    },
    {
      value: "500K+",
      label: "Grafts processed",
      detail: "with zero confirmed disease transmission events",
      color: "#D5101F",
    },
    {
      value: "0",
      label: "Disease events",
      detail: "in our entire history of tissue processing operations",
      color: "#D5101F",
    },
    {
      value: "87+",
      label: "Publications",
      detail: "peer-reviewed clinical studies supporting our therapies",
      color: "#D5101F",
    },
  ];

  return (
    <section className="relative min-h-[80vh] bg-[#231010] flex items-center py-16 md:py-28 overflow-hidden">
      {/* Background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 79px, #fbfcff 79px, #fbfcff 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, #fbfcff 79px, #fbfcff 80px)",
        }}
      />

      <div className="container mx-auto max-w-[1280px] px-6 md:px-12 relative">
        <div className="text-center mb-20">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            className="inline-block text-[11px] uppercase tracking-[3.5px] text-[#D5101F] mb-6"
          >
            Chapter Three · The Impact
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            className="font-display font-light text-[#fbfcff] text-[clamp(32px,5.5vw,64px)] tracking-[-1.5px] leading-none max-w-[700px] mx-auto"
          >
            The outcomes speak for themselves.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#fbfcff]/8 rounded-[12px] overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.value}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
              className="bg-[#231010] p-6 md:p-14 flex flex-col gap-3 group hover:bg-[#2a1515] transition-colors duration-300"
            >
              <span
                className="font-display font-light text-[clamp(56px,8vw,96px)] leading-none tracking-[-2px]"
                style={{ color: stat.color }}
              >
                {stat.value}
              </span>
              <span className="text-[15px] font-light text-[#fbfcff] leading-none">
                {stat.label}
              </span>
              <span className="text-[12px] text-[#fbfcff]/35 leading-[20px] max-w-[320px]">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={5}
          className="text-center text-[12px] text-[#fbfcff]/25 mt-8 tracking-[0.5px]"
        >
          Data sourced from peer-reviewed publications and internal processing records · AATB-accredited · ISO 13485:2016
        </motion.p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 5 — The Reach
// ---------------------------------------------------------------------------

const divisions = [
  {
    name: "Wound Care",
    description:
      "Advanced cellular allograft matrices for chronic and complex wound management. Proven in 87+ peer-reviewed publications.",
    icon: Activity,
    color: "#DF5630",
    href: "/divisions/wound-care",
    image: "/images/figma/division-wound-care.png",
  },
  {
    name: "Aesthetics",
    description:
      "Regenerative science applied to aesthetic medicine. Natural, long-lasting results through the body&apos;s own repair mechanisms.",
    icon: Sparkles,
    color: "#D2A62C",
    href: "/divisions/aesthetics",
    image: "/images/figma/division-aesthetics.png",
  },
  {
    name: "International",
    description:
      "Serving patients in 20+ countries. We adapt our regulatory approach market-by-market without compromising quality.",
    icon: Globe,
    color: "#4774AA",
    href: "/divisions/international",
    image: "/images/figma/division-international.png",
  },
];

function ReachSection() {
  return (
    <section className="relative min-h-[80vh] bg-[#fbfcff] flex items-center py-16 md:py-28">
      <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            className="inline-block text-[11px] uppercase tracking-[3.5px] text-[#D5101F] mb-6"
          >
            Chapter Four · The Reach
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
            className="font-display font-light text-[#231010] text-[clamp(32px,5.5vw,64px)] tracking-[-1.5px] leading-none max-w-[640px] mx-auto"
          >
            Three divisions. One standard of excellence.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {divisions.map((div, i) => {
            const Icon = div.icon;
            return (
              <motion.div
                key={div.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={i}
                className="group rounded-[12px] overflow-hidden bg-[#ffffff] flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={div.image}
                    alt={div.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0808]/60 to-transparent" />
                  {/* Color bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{ backgroundColor: div.color }}
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1 gap-4">
                  <div className="flex items-center gap-2.5">
                    <Icon className="size-4" style={{ color: div.color }} />
                    <span
                      className="text-[11px] uppercase tracking-[2.5px] font-normal"
                      style={{ color: div.color }}
                    >
                      {div.name}
                    </span>
                  </div>

                  <p className="text-[13px] font-light text-[#231010]/65 leading-[22px] flex-1">
                    {div.description}
                  </p>

                  <Link
                    href={div.href}
                    className="inline-flex items-center gap-2 text-[12px] font-normal tracking-[0.5px] transition-all duration-200"
                    style={{ color: div.color }}
                  >
                    Learn more
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section 6 — The Future (CEO CTA)
// ---------------------------------------------------------------------------

function FutureSection() {
  return (
    <section className="relative min-h-[80vh] bg-[#ffffff] flex items-center py-16 md:py-28 overflow-hidden">
      {/* Subtle radial */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(213,16,31,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="container mx-auto max-w-[896px] px-6 md:px-12 text-center relative">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          className="inline-block text-[11px] uppercase tracking-[3.5px] text-[#D5101F] mb-10"
        >
          Chapter Five · The Future
        </motion.span>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
          className="flex justify-center mb-8"
        >
          <Quote className="size-10 text-[#D5101F]/20" />
        </motion.div>

        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={2}
          className="font-display font-light text-[#231010] text-[clamp(22px,4.5vw,52px)] tracking-[0px] md:tracking-[-1px] leading-[1.2] mb-10"
        >
          We are not just building products. We are building the future of regenerative medicine —
          one that begins with respect for the donor and ends with transformation for the patient.
        </motion.blockquote>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={3}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <div className="w-10 h-px bg-[#D5101F]/30" />
          <div className="text-center">
            <span className="block text-[13px] font-normal text-[#231010]">Tiger BioSciences</span>
            <span className="block text-[11px] uppercase tracking-[2.5px] text-[#231010]/40 mt-0.5">
              Leadership
            </span>
          </div>
          <div className="w-10 h-px bg-[#D5101F]/30" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={4}
          className="space-y-4"
        >
          <p className="text-[15px] font-light text-[#231010]/55 leading-[28px] max-w-[560px] mx-auto mb-10">
            Join us in advancing regenerative medicine. Whether you&apos;re a clinician, investor,
            research partner, or distributor — there is a place for you in the Tiger BioSciences story.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <TigerButton href="/contact" variant="primary" arrow>
              Connect with Our Team
            </TigerButton>
            <TigerButton href="/company" variant="secondary">
              About Tiger BioSciences
            </TigerButton>
          </div>
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-[#D5101F]/25 to-transparent origin-center"
        />

        {/* Footer note */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          {[
            { value: "AATB", label: "Accredited Tissue Bank" },
            { value: "ISO 13485", label: "Quality Management" },
            { value: "FDA", label: "Registered Establishment" },
          ].map((cert) => (
            <div key={cert.value}>
              <span className="block font-display font-light text-[#231010] text-[18px] leading-none mb-1">
                {cert.value}
              </span>
              <span className="text-[10px] uppercase tracking-[2px] text-[#231010]/35">{cert.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page root
// ---------------------------------------------------------------------------

export default function HomeVariant8() {
  return (
    <main>
      <VariantTopNav theme="cream" ctaLabel="Our Story" ctaHref="/company/about" />
      <HeroSection />
      <GiftSection />
      <ScienceSection />
      <ImpactSection />
      <ReachSection />
      <FutureSection />
      <VariantFooter theme="cream" tagline="Every innovation begins with a gift. A six-chapter story, told over fifteen years." />
      <VariantNav current={8} />
    </main>
  );
}
