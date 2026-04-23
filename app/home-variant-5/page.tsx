"use client";
import { VariantNav } from "@/components/ui/variant-nav";
import { VariantTopNav } from "@/components/ui/variant-top-nav";
import { VariantFooter } from "@/components/ui/variant-footer";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Microscope,
  Stethoscope,
  Pill,
  Activity,
  ShieldCheck,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const credentialBadges = [
  "FDA Registered",
  "AATB Accredited",
  "ISO 13485:2016",
  "CE Marked",
  "HIPAA Compliant",
];

const steps = [
  {
    n: "01",
    label: "Measure",
    title: "Clinical assessment",
    body: "Work with your clinician to document wound chronicity, reconstructive goals, or soft-tissue indication — all mapped to the latest CAMP evidence.",
    icon: Microscope,
  },
  {
    n: "02",
    label: "Consult",
    title: "Specialist consult",
    body: "Connect with a Tiger-trained surgeon, wound-care specialist, or aesthetic practitioner who uses our therapies daily.",
    icon: Stethoscope,
  },
  {
    n: "03",
    label: "Treat",
    title: "Precision application",
    body: "Receive a matched allograft or CAMP therapy — selected by indication, applied in outpatient or surgical settings.",
    icon: Pill,
  },
  {
    n: "04",
    label: "Optimize",
    title: "Recovery & follow-up",
    body: "Ongoing clinical support with recovery protocols, imaging, and measured outcome reporting tracked quarter over quarter.",
    icon: Activity,
  },
];

const paths = [
  {
    label: "For patients",
    title: "Wound care & regenerative",
    price: "Covered by most major insurance plans",
    featured: false,
    features: [
      "Chronic wound assessment and referral",
      "Access to FDA-cleared CAMP therapies",
      "Patient assistance program if uninsured",
      "Recovery resources and follow-up support",
    ],
    cta: "Start wound care path",
    href: "/paths/wound-care",
  },
  {
    label: "Premium",
    title: "Reconstructive & aesthetic",
    price: "Consultation fees vary by provider",
    featured: true,
    featuredLabel: "Chosen by 72% of patients",
    features: [
      "Advanced reconstructive allograft options",
      "Surgeon network (dermatology, plastics, oncology)",
      "Bellafill, Sientra, and next-gen CAMP platforms",
      "Personalized aesthetic consultation and plan",
    ],
    cta: "Explore aesthetic path",
    href: "/paths/aesthetic",
  },
];

const stories = [
  {
    n: "No. 127",
    quote:
      "I stopped counting appointments after two years. This was the first thing that actually worked.",
    name: "Maria, 58",
    detail: "Diabetic foot ulcer",
  },
  {
    n: "No. 218",
    quote:
      "My surgeon explained exactly where the tissue came from. I carry that family with me every day now.",
    name: "Elena, 42",
    detail: "Post-mastectomy reconstruction",
  },
  {
    n: "No. 304",
    quote:
      "Eleven months after the rupture I finished a half marathon. I owe someone I'll never meet.",
    name: "David, 37",
    detail: "Achilles tendon repair",
  },
  {
    n: "No. 441",
    quote:
      "Consistency. My energy, my recovery, my follow-ups — nothing was guessed. Everything was measured.",
    name: "Janet, 64",
    detail: "Venous stasis ulcer",
  },
];

const ambassadors = [
  {
    name: "Dr. Sarah Chen",
    title: "Wound Care Lead, Atlanta VA",
    body: "Tiger's allograft matrices are the first thing I reach for with Wagner Grade 3 DFUs. The closure data speaks for itself.",
    avatar: "SC",
  },
  {
    name: "Dr. Marcus Reyes",
    title: "Reconstructive Surgeon, NYC",
    body: "Consistency of tissue is everything. After fifteen years I have full trust in what I'm opening on the back table.",
    avatar: "MR",
  },
  {
    name: "Dr. Priya Malhotra",
    title: "Dermatologic Surgery, LA",
    body: "My aesthetic patients want results that last without looking done. That's where Tiger's platform shines.",
    avatar: "PM",
  },
];

const products = [
  {
    name: "CAMP Matrix",
    category: "Wound Care",
    description: "Cellular allograft scaffold for chronic wound closure.",
  },
  {
    name: "Bellafill",
    category: "Aesthetic",
    description: "FDA-approved collagen-PMMA microsphere dermal filler.",
  },
  {
    name: "Sientra",
    category: "Reconstructive",
    description: "Premium shaped and round textured breast implants.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeVariant5() {
  const [storyIdx, setStoryIdx] = useState(0);
  const nextStory = () => setStoryIdx((i) => (i + 1) % stories.length);
  const prevStory = () => setStoryIdx((i) => (i - 1 + stories.length) % stories.length);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0e0606] text-[#fbfcff]">
      <VariantTopNav theme="dark" ctaLabel="Get Started" ctaHref="/paths/wound-care" />

      {/* ═══════════════════════════════════════════════════════════
          CREDENTIAL STRIP — Thin top bar
      ═══════════════════════════════════════════════════════════ */}
      <div className="pt-[72px]">
        <div className="bg-[#231010] text-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-8 md:gap-14 py-2.5 overflow-x-auto scrollbar-none">
              {credentialBadges.map((b) => (
                <div key={b} className="flex items-center gap-2 text-[11px] uppercase tracking-[1.8px] text-white/80 font-medium whitespace-nowrap shrink-0">
                  <ShieldCheck className="size-3.5 text-[#D5101F]" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          HERO — Cinematic video with dark Tiger premium vibe
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative isolate bg-[#0e0606] overflow-hidden">
        {/* Poster image fallback */}
        <Image
          src="/images/tigers/tiger-action.png"
          alt=""
          fill
          priority
          className="absolute inset-0 w-full h-full object-cover -z-20 opacity-70"
          style={{ objectPosition: "72% 30%" }}
        />
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/tigers/tiger-action.png"
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
          style={{ objectPosition: "center 25%" }}
        >
          <source
            src="/images/social_boredoptimism_blink_--ar_169_--bs_1_--motion_high_--raw_--vid_847e7ccd-911e-4c34-9b8f-19214e80b444_0.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlays for text legibility */}
        <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-[#0e0606]/85 via-[#0e0606]/70 to-[#0e0606] pointer-events-none" />
        <div
          className="absolute inset-0 -z-[5] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 20%, rgba(14,6,6,0.55) 85%)",
          }}
        />
        {/* Subtle red wash */}
        <div className="absolute inset-0 -z-[5] bg-[#D5101F]/[0.04] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-40 text-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#fbfcff]/85 mb-8"
          >
            <span className="size-1.5 rounded-full bg-[#D5101F]" />
            Regenerative medicine, measured
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            className="font-display font-bold text-[#fbfcff] tracking-[-2px] leading-[0.95] mb-8 mx-auto max-w-[1000px] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
            style={{ fontSize: "clamp(44px, 6.4vw, 96px)", fontWeight: 700 }}
          >
            Healing engineered around your biology.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[17px] md:text-[19px] font-light text-[#fbfcff]/70 leading-[1.65] max-w-[680px] mx-auto mb-10"
          >
            Tiger BioSciences connects patients and clinicians to science-backed regenerative therapies — Cellular, Acellular, and Matrix-like Products proven in peer-reviewed trials. Choose a path designed for your care.
          </motion.p>

          {/* Dual-audience CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10"
          >
            <Link
              href="/paths/wound-care"
              className="inline-flex items-center justify-center gap-2 bg-[#D5101F] hover:bg-[#A00D17] text-white px-8 py-4 rounded-full text-[14px] font-bold uppercase tracking-[1.5px] transition-colors w-full sm:w-auto"
            >
              For Patients
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/hcp"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#fbfcff]/60 text-[#fbfcff] hover:bg-[#fbfcff] hover:text-[#0e0606] px-8 py-4 rounded-full text-[14px] font-bold uppercase tracking-[1.5px] transition-colors w-full sm:w-auto"
            >
              For Clinicians
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex items-center justify-center gap-6 text-[12px] text-[#fbfcff]/55 font-medium"
          >
            <div className="flex items-center gap-1.5">
              <Star className="size-3.5 fill-[#D5101F] text-[#D5101F]" />
              <Star className="size-3.5 fill-[#D5101F] text-[#D5101F]" />
              <Star className="size-3.5 fill-[#D5101F] text-[#D5101F]" />
              <Star className="size-3.5 fill-[#D5101F] text-[#D5101F]" />
              <Star className="size-3.5 fill-[#D5101F] text-[#D5101F]" />
              <span className="ml-2">4.9 from 2,100+ patients</span>
            </div>
            <span className="hidden md:inline text-[#fbfcff]/20">·</span>
            <span className="hidden md:inline">500,000+ grafts processed</span>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOUR-STEP PROCESS — Numbered cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#1a0b0b] border-y border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="text-center max-w-[720px] mx-auto mb-14 md:mb-20 space-y-4">
            <div className="text-[11px] font-semibold text-[#D5101F] uppercase tracking-[2.5px]">
              How it works
            </div>
            <h2
              className="font-display font-bold text-[#fbfcff] tracking-[-1.2px] leading-[1.05]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)", fontWeight: 700 }}
            >
              Your care in four measured steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative bg-[#1a0b0b] border border-white/10 rounded-[20px] p-7 md:p-8 h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="size-12 rounded-full bg-[#231010] text-white flex items-center justify-center">
                    <step.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-[2px] text-[#D5101F]">
                    Step {step.n}
                  </div>
                </div>
                <div className="text-[11px] uppercase tracking-[1.8px] text-[#fbfcff]/45 font-semibold mb-2">
                  {step.label}
                </div>
                <h3 className="font-display font-bold text-[#fbfcff] text-[22px] md:text-[24px] tracking-[-0.3px] leading-[1.2] mb-3" style={{ fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#fbfcff]/70 leading-[1.6]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CARE PATHS — Two tiered path cards (Basic vs Premium feel)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0e0606]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="text-center max-w-[720px] mx-auto mb-14 md:mb-20 space-y-4">
            <div className="text-[11px] font-semibold text-[#D5101F] uppercase tracking-[2.5px]">
              Care paths
            </div>
            <h2
              className="font-display font-bold text-[#fbfcff] tracking-[-1.2px] leading-[1.05]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)", fontWeight: 700 }}
            >
              Two clinical tracks. Same science behind each.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-[960px] mx-auto">
            {paths.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                className={`relative rounded-[24px] p-8 md:p-10 ${
                  p.featured
                    ? "bg-[#231010] text-white"
                    : "bg-[#1a0b0b] border border-white/15 text-[#fbfcff]"
                }`}
              >
                {p.featured && p.featuredLabel && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D5101F] text-white text-[10px] font-bold uppercase tracking-[2px] px-4 py-1.5 rounded-full">
                    {p.featuredLabel}
                  </div>
                )}
                <div className={`text-[11px] uppercase tracking-[2.5px] font-semibold mb-3 ${p.featured ? "text-[#D5101F]" : "text-[#D5101F]"}`}>
                  {p.label}
                </div>
                <h3 className="font-display font-bold tracking-[-0.5px] leading-[1.1] mb-4" style={{ fontSize: "clamp(26px, 2.4vw, 34px)", fontWeight: 700 }}>
                  {p.title}
                </h3>
                <div className={`text-[14px] mb-8 ${p.featured ? "text-white/70" : "text-[#fbfcff]/65"}`}>
                  {p.price}
                </div>

                <ul className="space-y-3 mb-10">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-[14.5px] leading-[1.55]">
                      <Check className={`size-4 mt-1 shrink-0 ${p.featured ? "text-[#D5101F]" : "text-[#D5101F]"}`} strokeWidth={2.5} />
                      <span className={p.featured ? "text-white/85" : "text-[#fbfcff]/85"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full w-full py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] transition-colors ${
                    p.featured
                      ? "bg-[#D5101F] hover:bg-[#A00D17] text-white"
                      : "bg-[#231010] hover:bg-[#D5101F] text-white"
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PATIENT STORIES — Numbered carousel
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#1a0b0b] border-y border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="flex items-center justify-between mb-10 md:mb-14">
            <div className="space-y-3">
              <div className="text-[11px] font-semibold text-[#D5101F] uppercase tracking-[2.5px]">
                Patient outcomes
              </div>
              <h2
                className="font-display font-bold text-[#fbfcff] tracking-[-1px] leading-[1.05]"
                style={{ fontSize: "clamp(26px, 3.4vw, 48px)", fontWeight: 700 }}
              >
                Stories from the people we serve.
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevStory}
                className="size-11 rounded-full border border-white/15 hover:border-[#D5101F] hover:text-[#D5101F] text-[#fbfcff] transition-colors flex items-center justify-center"
                aria-label="Previous story"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={nextStory}
                className="size-11 rounded-full border border-white/15 hover:border-[#D5101F] hover:text-[#D5101F] text-[#fbfcff] transition-colors flex items-center justify-center"
                aria-label="Next story"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.figure
              key={storyIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1a0b0b] border border-white/10 rounded-[28px] p-10 md:p-16 lg:p-20 max-w-[960px] mx-auto"
            >
              <div className="text-[12px] font-semibold uppercase tracking-[2.5px] text-[#D5101F] mb-6">
                Story {stories[storyIdx].n}
              </div>
              <blockquote
                className="font-display text-[#fbfcff] tracking-[-0.5px] leading-[1.25] mb-10"
                style={{ fontSize: "clamp(26px, 3vw, 44px)", fontWeight: 400 }}
              >
                &ldquo;{stories[storyIdx].quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="text-[15px] font-semibold text-[#fbfcff]">
                    {stories[storyIdx].name}
                  </div>
                  <div className="text-[12px] uppercase tracking-[1.5px] text-[#fbfcff]/55 font-medium">
                    {stories[storyIdx].detail}
                  </div>
                </div>
                <div className="text-[11px] text-[#fbfcff]/40 italic">
                  *Verified Tiger BioSciences patient
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {stories.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStoryIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === storyIdx ? "w-8 bg-[#D5101F]" : "w-1.5 bg-[#fbfcff]/20 hover:bg-[#fbfcff]/40"
                }`}
                aria-label={`Go to story ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CLINICIAN VOICES — Ambassador cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0e0606]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="text-center max-w-[720px] mx-auto mb-14 md:mb-20 space-y-4">
            <div className="text-[11px] font-semibold text-[#D5101F] uppercase tracking-[2.5px]">
              Trusted by clinicians
            </div>
            <h2
              className="font-display font-bold text-[#fbfcff] tracking-[-1.2px] leading-[1.05]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)", fontWeight: 700 }}
            >
              The specialists who use Tiger every day.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {ambassadors.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-[#1a0b0b] rounded-[20px] p-8 border border-white/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="size-14 rounded-full bg-[#231010] text-white font-bold text-[14px] tracking-[1px] flex items-center justify-center">
                    {a.avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold text-[17px] text-[#fbfcff]" style={{ fontWeight: 700 }}>
                      {a.name}
                    </div>
                    <div className="text-[12px] text-[#fbfcff]/55 font-medium">{a.title}</div>
                  </div>
                </div>
                <p className="text-[14.5px] text-[#fbfcff]/75 leading-[1.65]">
                  &ldquo;{a.body}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRODUCTS — Portfolio highlight band
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#231010] text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">

          <div className="max-w-[720px] mb-14 md:mb-20 space-y-4">
            <div className="text-[11px] font-semibold text-[#D5101F] uppercase tracking-[2.5px]">
              The portfolio
            </div>
            <h2
              className="font-display font-bold tracking-[-1.2px] leading-[1.05]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)", fontWeight: 700 }}
            >
              Science-backed products, in every care setting.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group p-8 border border-white/10 rounded-[20px] hover:border-[#D5101F] transition-colors cursor-pointer"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[2px] text-[#D5101F] mb-6">
                  {p.category}
                </div>
                <h3 className="font-display font-bold text-[26px] tracking-[-0.3px] mb-3 group-hover:text-[#D5101F] transition-colors" style={{ fontWeight: 700 }}>
                  {p.name}
                </h3>
                <p className="text-[14.5px] text-white/60 leading-[1.65] mb-8">{p.description}</p>
                <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[1.5px] text-white group-hover:text-[#D5101F]">
                  Learn more
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 md:mt-20 pt-10 border-t border-white/10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-3 text-[12px] text-white/55 font-medium">
              <Award className="size-4 text-[#D5101F]" />
              Peer-reviewed across 87 publications since 2011
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[1.5px] text-white hover:text-[#D5101F] transition-colors"
            >
              Full portfolio
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA — Path selector
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#1a0b0b]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
          <h2
            className="font-display font-bold text-[#fbfcff] tracking-[-1.2px] leading-[1.05] max-w-[820px] mx-auto mb-6"
            style={{ fontSize: "clamp(30px, 4.2vw, 60px)", fontWeight: 700 }}
          >
            Take the next measured step.
          </h2>
          <p className="text-[16px] text-[#fbfcff]/70 leading-[1.65] max-w-[560px] mx-auto mb-10">
            Whether you&rsquo;re a patient seeking care or a clinician evaluating regenerative options, Tiger BioSciences meets you with the same evidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Link
              href="/paths/wound-care"
              className="inline-flex items-center justify-center gap-2 bg-[#231010] hover:bg-[#D5101F] text-white px-8 py-4 rounded-full text-[14px] font-bold uppercase tracking-[1.5px] transition-colors w-full sm:w-auto"
            >
              Start patient path
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/hcp"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#fbfcff]/70 text-[#fbfcff] hover:bg-[#231010] hover:text-white px-8 py-4 rounded-full text-[14px] font-bold uppercase tracking-[1.5px] transition-colors w-full sm:w-auto"
            >
              Start clinician path
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <VariantFooter theme="premium" tagline="Healing engineered around your biology. Every step, measured." />
      <VariantNav current={5} />
    </main>
  );
}
