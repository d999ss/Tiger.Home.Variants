"use client";
import { VariantNav } from "@/components/ui/variant-nav";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Globe, Sparkles, CheckCircle, FlaskConical } from "lucide-react";

import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

// ---------------------------------------------------------------------------
// Tab data
// ---------------------------------------------------------------------------

const tabs = [
  {
    id: "wound-care",
    label: "Wound Care",
    color: "#DF5630",
    icon: Activity,
    division: "Wound Care Division",
    headline: "Closing Wounds That Won't Close",
    description:
      "Our advanced cellular allograft matrices give clinicians the regenerative scaffold that conventional therapy lacks. Proven in peer-reviewed trials with 89% complete wound closure at 12 weeks — nearly 25 percentage points above standard of care.",
    image: "/images/tiger-assets/home-ex-care.jpeg",
    stats: [
      { value: "89%", label: "Wound closure at 12 weeks" },
      { value: "6.5M", label: "Americans with chronic wounds" },
      { value: "500K+", label: "Grafts safely processed" },
    ],
    cta: { label: "Wound Care Products", href: "/divisions/wound-care" },
    secondaryCta: { label: "Clinical Data", href: "/science" },
    badge: "AATB Accredited · ISO 13485:2016",
  },
  {
    id: "aesthetics",
    label: "Aesthetics",
    color: "#D2A62C",
    icon: Sparkles,
    division: "Aesthetics Division",
    headline: "Regenerative Beauty, Naturally",
    description:
      "Tiger BioSciences brings regenerative science to the aesthetics market. Our acellular dermal matrices and innovative injectable platforms provide natural, long-lasting results for patients seeking aesthetic enhancement through the body's own repair mechanisms.",
    image: "/images/figma/division-aesthetics.png",
    stats: [
      { value: "Natural", label: "Tissue-based solutions" },
      { value: "Proven", label: "Safety profile" },
      { value: "Lasting", label: "Regenerative results" },
    ],
    cta: { label: "Aesthetics Portfolio", href: "/divisions/aesthetics" },
    secondaryCta: { label: "Learn the Science", href: "/science" },
    badge: "FDA Registered · Physician Preferred",
  },
  {
    id: "regenerative",
    label: "Regenerative Sciences",
    color: "#D5101F",
    icon: FlaskConical,
    division: "Regenerative Sciences",
    headline: "Where Discovery Becomes Therapy",
    description:
      "Our R&D team pushes the frontier of what CAMPs — Cellular, Acellular, and Matrix-like Products — can accomplish. From novel tissue preservation techniques to proprietary decellularization protocols, we own the science end to end.",
    image: "/images/tiger-hero.png",
    stats: [
      { value: "87+", label: "Peer-reviewed publications" },
      { value: "15+", label: "Years of innovation" },
      { value: "100%", label: "In-house processing" },
    ],
    cta: { label: "Our Science", href: "/science" },
    secondaryCta: { label: "Research Pipeline", href: "/resources" },
    badge: "GMP Manufacturing · Vertically Integrated",
  },
  {
    id: "international",
    label: "International",
    color: "#4774AA",
    icon: Globe,
    division: "International Division",
    headline: "Regenerative Medicine Without Borders",
    description:
      "Tiger BioSciences serves patients in 20+ countries through our International Division. We partner with distributors and health systems globally, adapting our regulatory approach market-by-market while maintaining the same uncompromising quality standards.",
    image: "/images/figma/division-international.png",
    stats: [
      { value: "20+", label: "Countries served" },
      { value: "Global", label: "Distribution network" },
      { value: "Local", label: "Regulatory expertise" },
    ],
    cta: { label: "International Partners", href: "/divisions/international" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
    badge: "CE Mark · Multi-Regulatory Cleared",
  },
];

// ---------------------------------------------------------------------------
// Animations
// ---------------------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const panelVariants = {
  enter: { opacity: 0, x: 20 },
  center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -16, transition: { duration: 0.25 } },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function HomeVariant7() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <main className="bg-[#ffffff] min-h-screen">
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 60%, rgba(213,16,31,0.06) 0%, transparent 70%)",
          }}
        />

        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-block text-[11px] uppercase tracking-[3.5px] text-[#231010]/40 mb-6"
        >
          Tiger BioSciences · Regenerative Medicine
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-display font-light text-[#231010] text-[clamp(38px,7vw,88px)] tracking-[-1px] md:tracking-[-2px] leading-none max-w-[800px] mb-8"
        >
          Explore Tiger&nbsp;BioSciences
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-[16px] md:text-[18px] font-light text-[#231010]/60 max-w-[560px] leading-[1.75] mb-12"
        >
          Four divisions. One mission. Transforming donated tissue into therapies
          that heal patients across every care setting — and around the world.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-wrap gap-3 justify-center"
        >
          <TigerButton href="/products" variant="primary" arrow>
            Explore Products
          </TigerButton>
          <TigerButton href="/science" variant="secondary">
            Our Science
          </TigerButton>
        </motion.div>

        {/* Scroll nudge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[2.5px] text-[#231010]/30">Explore Divisions</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#231010]/20 to-transparent"
          />
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TABBED DIVISIONS                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#fbfcff] py-20 md:py-28">
        <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
          {/* Tab Bar */}
          <div className="flex overflow-x-auto gap-2 mb-12 md:flex-wrap scrollbar-none border-b border-[#231010]/8 pb-0">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              const isActive = i === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className="relative flex shrink-0 items-center gap-2 px-5 py-3.5 text-[13px] font-normal tracking-[0.25px] transition-all duration-200 focus:outline-none"
                  style={{
                    color: isActive ? tab.color : "#231010",
                    opacity: isActive ? 1 : 0.45,
                  }}
                >
                  <Icon className="size-4" style={{ color: isActive ? tab.color : "currentColor" }} />
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                      style={{ backgroundColor: tab.color }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              variants={panelVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            >
              {/* Left: Content */}
              <div className="order-2 lg:order-1">
                <span
                  className="inline-block text-[11px] uppercase tracking-[3px] mb-4 font-normal"
                  style={{ color: current.color }}
                >
                  {current.division}
                </span>

                <h2 className="font-display font-light text-[#231010] text-[clamp(26px,4vw,48px)] tracking-[-1px] leading-none mb-6">
                  {current.headline}
                </h2>

                <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px] mb-8">
                  {current.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                  {current.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-4 rounded-[12px] bg-[#ffffff]">
                      <div
                        className="font-display font-light text-[28px] leading-none mb-1"
                        style={{ color: current.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-[#231010]/50 leading-[16px]">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Badge */}
                <div className="flex items-center gap-2 mb-8">
                  <CheckCircle className="size-3.5" style={{ color: current.color }} />
                  <span className="text-[11px] uppercase tracking-[2px] text-[#231010]/40">{current.badge}</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <TigerButton href={current.cta.href} variant="primary" arrow>
                    {current.cta.label}
                  </TigerButton>
                  <TigerButton href={current.secondaryCta.href} variant="secondary">
                    {current.secondaryCta.label}
                  </TigerButton>
                </div>
              </div>

              {/* Right: Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-[12px] overflow-hidden aspect-[4/3]">
                  <Image
                    src={current.image}
                    alt={current.headline}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/30 to-transparent" />
                  {/* Color accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: current.color }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* THE GIFT OF DONATION                                                 */}
      {/* ------------------------------------------------------------------ */}
      <TigerSection bg="white" width="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[12px] overflow-hidden aspect-[3/4]"
          >
            <Image
              src="/images/tiger-assets/pregnant-lady.png"
              alt="A family making the gift of donation"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#231010]/40 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block text-[11px] uppercase tracking-[3px] text-[#fbfcff]/70 mb-2">
                Every Product Begins Here
              </span>
              <p className="font-display font-light text-[#fbfcff] text-[22px] leading-[1.3]">
                A family&apos;s decision to donate.
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-[11px] uppercase tracking-[3.5px] text-[#D5101F] mb-6">
              The Gift of Donation
            </span>
            <h2 className="font-display font-light text-[#231010] text-[clamp(28px,4.5vw,52px)] tracking-[-1px] leading-none mb-6">
              Turning Loss into&nbsp;Life
            </h2>
            <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px] mb-6">
              Every Tiger BioSciences product begins with an extraordinary act of generosity —
              a family&apos;s decision, in the midst of profound loss, to give the gift of tissue donation.
              We honor that gift at every step of our process.
            </p>
            <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px] mb-10">
              Our AATB-accredited processing protocols ensure zero disease transmission events
              across 500,000+ grafts. Traceability. Safety. Respect. These are not just standards —
              they are our covenant with donors and patients alike.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { value: "500K+", label: "Grafts processed" },
                { value: "0", label: "Disease transmission events" },
                { value: "AATB", label: "Accreditation" },
                { value: "15+", label: "Years honoring donors" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="font-display font-light text-[#D5101F] text-[32px] leading-none">
                    {item.value}
                  </span>
                  <span className="text-[12px] text-[#231010]/50">{item.label}</span>
                </div>
              ))}
            </div>

            <TigerButton href="/science" variant="primary" arrow>
              How We Honor Every Gift
            </TigerButton>
          </motion.div>
        </div>
      </TigerSection>

      {/* ------------------------------------------------------------------ */}
      {/* CLINICAL EVIDENCE STATS ROW                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-[#231010] py-20">
        <div className="container mx-auto max-w-[1280px] px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-[11px] uppercase tracking-[3.5px] text-[#fbfcff]/30 mb-4">
              Clinical Evidence
            </span>
            <h2 className="font-display font-light text-[#fbfcff] text-[clamp(24px,4vw,42px)] tracking-[-1px] leading-none">
              Numbers That Matter to Patients
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#fbfcff]/8 rounded-[12px] overflow-hidden">
            {[
              { value: "89%", label: "Complete wound closure at 12 weeks", note: "vs. 64% standard of care" },
              { value: "500K+", label: "Grafts safely applied", note: "Zero disease transmission events" },
              { value: "87+", label: "Peer-reviewed publications", note: "Rigorous clinical evidence" },
              { value: "20+", label: "Countries served globally", note: "International reach" },
            ].map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-[#231010] p-6 md:p-8 flex flex-col gap-2"
              >
                <span className="font-display font-light text-[#D5101F] text-[clamp(36px,5vw,60px)] leading-none">
                  {stat.value}
                </span>
                <span className="text-[13px] font-light text-[#fbfcff] leading-[20px]">{stat.label}</span>
                <span className="text-[11px] text-[#fbfcff]/35 leading-[17px]">{stat.note}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA SECTION                                                          */}
      {/* ------------------------------------------------------------------ */}
      <TigerSection bg="white" width="narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionHeader
            label="Ready to learn more?"
            heading={
              <>
                Partner with Tiger&nbsp;BioSciences
              </>
            }
            body="Whether you&apos;re a clinician seeking advanced wound care solutions, a distributor exploring our international portfolio, or a researcher interested in our science — we&apos;re here to help."
            align="center"
          />

          <div className="flex flex-wrap gap-4 justify-center">
            <TigerButton href="/contact" variant="primary" arrow>
              Contact Our Team
            </TigerButton>
            <TigerButton href="/products" variant="secondary">
              Browse Products
            </TigerButton>
            <TigerButton href="/science" variant="secondary">
              Clinical Evidence
            </TigerButton>
          </div>
        </motion.div>
      </TigerSection>
      <VariantNav current={7} />
    </main>
  );
}
