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
  ArrowUpRight,
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
  Dna,
  Layers,
  Shield,
  FlaskConical,
  BookOpen,
  MapPin,
  Plus,
  Quote,
  CheckCircle,
  Building2,
} from "lucide-react";

import { TigerButton } from "@/components/ui/tiger-button";

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
    <main className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#231010]">
      <VariantTopNav theme="light" ctaLabel="Get Started" ctaHref="/paths/wound-care" />

      {/* ═══════════════════════════════════════════════════════════
          CREDENTIAL STRIP — Thin top bar
      ═══════════════════════════════════════════════════════════ */}
      <div className="pt-[101px]">
        <div className="bg-[#fbfcff] border-b border-[#231010]/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-8 md:gap-14 py-2.5 overflow-x-auto scrollbar-none">
              {credentialBadges.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-[2.5px] text-[#231010]/70 font-light whitespace-nowrap shrink-0"
                >
                  <ShieldCheck className="size-3.5 text-[#D5101F]" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          HERO — Light editorial split with image panel
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative isolate bg-[#ffffff] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[88vh]">
          {/* Left — editorial copy */}
          <div className="lg:col-span-7 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-14 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-[720px]"
            >
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium mb-8">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Regenerative medicine, measured
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
                className="font-display font-light text-[#231010] tracking-[-2px] md:tracking-[-3px] leading-[0.95] mb-8"
                style={{ fontSize: "clamp(44px, 7vw, 112px)" }}
              >
                Healing<br />
                <span className="text-[#231010]/45">engineered around</span><br />
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #D5101F, #8b0a12)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  your biology.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[16px] md:text-[17px] font-light text-[#231010]/65 leading-[1.75] max-w-[580px] mb-10"
              >
                Tiger BioSciences connects patients and clinicians to science-backed
                regenerative therapies — Cellular, Acellular, and Matrix-like Products
                proven in peer-reviewed trials. Choose a path designed for your care.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.45 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <TigerButton href="/paths/wound-care" variant="primary" arrow>
                  For Patients
                </TigerButton>
                <TigerButton href="/hcp" variant="secondary" arrow>
                  For Clinicians
                </TigerButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="flex items-center flex-wrap gap-x-6 gap-y-3 text-[12px] text-[#231010]/55 font-light pt-6 border-t border-[#231010]/10"
              >
                <div className="flex items-center gap-1.5">
                  <Star className="size-3.5 fill-[#D5101F] text-[#D5101F]" />
                  <Star className="size-3.5 fill-[#D5101F] text-[#D5101F]" />
                  <Star className="size-3.5 fill-[#D5101F] text-[#D5101F]" />
                  <Star className="size-3.5 fill-[#D5101F] text-[#D5101F]" />
                  <Star className="size-3.5 fill-[#D5101F] text-[#D5101F]" />
                  <span className="ml-2 text-[#231010]/70">4.9 from 2,100+ patients</span>
                </div>
                <span className="hidden md:inline text-[#231010]/25">·</span>
                <span className="hidden md:inline">500,000+ grafts processed</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — image panel */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-5 relative min-h-[420px] lg:min-h-0 bg-[#0e0606] overflow-hidden"
          >
            <Image
              src="/images/tigers/tiger-action.png"
              alt="Tiger BioSciences"
              fill
              priority
              className="object-cover object-[50%_40%]"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(14,6,6,0.0) 45%, rgba(14,6,6,0.55) 80%, rgba(14,6,6,0.9) 100%)",
              }}
            />
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 border border-white/25 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-light uppercase tracking-[0.3em] text-white/85">
                <span className="size-1.5 rounded-full bg-[#D5101F]" />
                Premium editorial
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-black/35 border border-white/15 rounded-[8px] p-5">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-[#D5101F]/90 flex items-center justify-center shrink-0">
                  <Microscope className="size-5 text-white" />
                </div>
                <div>
                  <p className="font-display font-light text-white text-[17px] leading-[1.35] mb-1">
                    Two care paths, one platform.
                  </p>
                  <span className="text-[10px] font-light uppercase tracking-[0.3em] text-white/60">
                    Patient · Clinician
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PLATFORM TECHNOLOGY — CAMP
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#fbfcff] border-y border-[#231010]/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[720px] mb-14 md:mb-16 space-y-5">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
              <span className="w-6 h-[1px] bg-[#D5101F]" />
              Platform Technology · CAMP
            </div>
            <h2
              className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1.02]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Three platforms.<br />One regenerative framework.
            </h2>
            <p className="text-[15px] md:text-[16px] font-light text-[#231010]/65 leading-[1.75]">
              Tiger's proprietary CAMP portfolio — Cellular, Acellular, and Matrix-like
              Products — gives clinicians a full spectrum of regenerative tools, each
              engineered for a different therapeutic need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Dna,
                tag: "Cellular",
                title: "Living cell therapies",
                body: "Viable cellular allografts that preserve native growth factors and regenerative signaling. Engineered for wounds that demand more than a passive scaffold.",
                metric: "Viable cells retained",
                color: "#D5101F",
              },
              {
                icon: Layers,
                tag: "Acellular",
                title: "Decellularized matrices",
                body: "Proprietary decellularization protocols preserve the native extracellular matrix while removing cellular antigens — ready to integrate with host tissue.",
                metric: "Proprietary protocols",
                color: "#DF5630",
              },
              {
                icon: Shield,
                tag: "Matrix-like",
                title: "Structured scaffolds",
                body: "Bio-engineered matrices combining architecture of native tissue with predictable handling. Built for surgical workflows that demand consistency.",
                metric: "Surgeon-ready",
                color: "#D2A62C",
              },
            ].map((platform, i) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.tag}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
                  className="group relative bg-[#ffffff] rounded-[12px] p-8 border border-[#231010]/[0.08] hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-all duration-500"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[12px]"
                    style={{ backgroundColor: platform.color }}
                  />
                  <div
                    className="size-12 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${platform.color}14` }}
                  >
                    <Icon className="size-5" style={{ color: platform.color }} />
                  </div>
                  <span
                    className="inline-block text-[10px] uppercase tracking-[2.5px] mb-3 font-medium"
                    style={{ color: platform.color }}
                  >
                    {platform.tag}
                  </span>
                  <h3 className="font-display font-light text-[#231010] text-[24px] leading-[1.15] tracking-[-0.3px] mb-4">
                    {platform.title}
                  </h3>
                  <p className="text-[14px] font-light text-[#231010]/65 leading-[1.7] mb-6">
                    {platform.body}
                  </p>
                  <div className="pt-5 border-t border-[#231010]/10 flex items-center gap-2">
                    <CheckCircle className="size-3.5" style={{ color: platform.color }} />
                    <span className="text-[11px] uppercase tracking-[2px] text-[#231010]/55">
                      {platform.metric}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOUR-STEP PROCESS — Numbered cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[720px] mx-auto text-center mb-14 md:mb-20 space-y-4">
            <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
              <span className="w-6 h-[1px] bg-[#D5101F]" />
              How it works
            </div>
            <h2
              className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1.02]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
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
                className="relative bg-[#fbfcff] border border-[#231010]/[0.08] rounded-[12px] p-7 md:p-8 h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="size-12 rounded-full bg-[#D5101F]/10 flex items-center justify-center">
                    <step.icon className="size-5 text-[#D5101F]" strokeWidth={1.75} />
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-[2.5px] text-[#D5101F]">
                    Step {step.n}
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-[2.5px] text-[#231010]/50 font-medium mb-2">
                  {step.label}
                </div>
                <h3 className="font-display font-light text-[#231010] text-[22px] md:text-[24px] tracking-[-0.3px] leading-[1.2] mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] font-light text-[#231010]/65 leading-[1.7]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CLINICAL OUTCOMES — Evidence metrics
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#fbfcff] border-y border-[#231010]/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-[620px] space-y-5">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Clinical Outcomes
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1.02]"
                style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
              >
                Numbers that matter to patients.
              </h2>
            </div>
            <Link
              href="/science"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/60 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
            >
              Clinical evidence <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#231010]/10 border border-[#231010]/10 rounded-[2px] overflow-hidden">
            {[
              { value: "89%", label: "Wound closure at 12 weeks", note: "vs. 64% standard of care" },
              { value: "500K+", label: "Grafts safely applied", note: "Zero disease transmission events" },
              { value: "87+", label: "Peer-reviewed publications", note: "Rigorous clinical evidence" },
              { value: "4.9★", label: "Patient-reported rating", note: "2,100+ verified patients" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-[#ffffff] p-7 md:p-9 flex flex-col gap-3 min-h-[220px]"
              >
                <div
                  className="font-display font-light text-[#D5101F] leading-none tracking-[-1.5px] mt-2"
                  style={{ fontSize: "clamp(36px, 4vw, 60px)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[13px] font-normal text-[#231010] leading-[1.45] mt-1">
                  {stat.label}
                </div>
                <div className="pt-4 mt-auto text-[11px] font-light text-[#231010]/55 leading-[1.55] border-t border-[#231010]/8">
                  {stat.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CARE PATHS — Two tiered path cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[720px] mx-auto text-center mb-14 md:mb-20 space-y-4">
            <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
              <span className="w-6 h-[1px] bg-[#D5101F]" />
              Care paths
            </div>
            <h2
              className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1.02]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
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
                className={`relative rounded-[12px] p-8 md:p-10 ${
                  p.featured
                    ? "bg-[#231010] text-white"
                    : "bg-[#fbfcff] border border-[#231010]/[0.1] text-[#231010]"
                }`}
              >
                {p.featured && p.featuredLabel && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D5101F] text-white text-[10px] font-medium uppercase tracking-[2.5px] px-4 py-1.5 rounded-full">
                    {p.featuredLabel}
                  </div>
                )}
                <div className="text-[10px] uppercase tracking-[2.5px] font-medium mb-3 text-[#D5101F]">
                  {p.label}
                </div>
                <h3
                  className="font-display font-light tracking-[-0.5px] leading-[1.1] mb-4"
                  style={{ fontSize: "clamp(26px, 2.4vw, 36px)" }}
                >
                  {p.title}
                </h3>
                <div className={`text-[14px] font-light mb-8 ${p.featured ? "text-white/70" : "text-[#231010]/60"}`}>
                  {p.price}
                </div>

                <ul className="space-y-3 mb-10">
                  {p.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 text-[14.5px] font-light leading-[1.55]"
                    >
                      <Check className="size-4 mt-1 shrink-0 text-[#D5101F]" strokeWidth={2.5} />
                      <span className={p.featured ? "text-white/85" : "text-[#231010]/80"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full w-full py-3.5 text-[12px] font-medium uppercase tracking-[2.5px] transition-colors ${
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
      <section className="bg-[#fbfcff] border-y border-[#231010]/[0.08]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center justify-between mb-10 md:mb-14 flex-wrap gap-6">
            <div className="space-y-4 max-w-[620px]">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Patient outcomes
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.2px] leading-[1.05]"
                style={{ fontSize: "clamp(28px, 3.4vw, 48px)" }}
              >
                Stories from the people we serve.
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevStory}
                className="size-11 rounded-full border border-[#231010]/15 hover:border-[#D5101F] hover:text-[#D5101F] text-[#231010]/70 transition-colors flex items-center justify-center"
                aria-label="Previous story"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={nextStory}
                className="size-11 rounded-full border border-[#231010]/15 hover:border-[#D5101F] hover:text-[#D5101F] text-[#231010]/70 transition-colors flex items-center justify-center"
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
              className="bg-[#ffffff] border border-[#231010]/[0.08] rounded-[12px] p-10 md:p-16 lg:p-20 max-w-[960px] mx-auto"
            >
              <div className="text-[10px] font-medium uppercase tracking-[2.5px] text-[#D5101F] mb-6">
                Story {stories[storyIdx].n}
              </div>
              <blockquote
                className="font-display font-light text-[#231010] tracking-[-0.5px] leading-[1.25] mb-10"
                style={{ fontSize: "clamp(24px, 2.8vw, 40px)" }}
              >
                &ldquo;{stories[storyIdx].quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#231010]/10">
                <div>
                  <div className="font-display font-light text-[17px] text-[#231010]">
                    {stories[storyIdx].name}
                  </div>
                  <div className="text-[11px] uppercase tracking-[2.5px] text-[#231010]/55 font-medium mt-1">
                    {stories[storyIdx].detail}
                  </div>
                </div>
                <div className="text-[11px] font-light text-[#231010]/45 italic">
                  *Verified Tiger BioSciences patient
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-2 mt-8">
            {stories.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStoryIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === storyIdx
                    ? "w-8 bg-[#D5101F]"
                    : "w-1.5 bg-[#231010]/20 hover:bg-[#231010]/40"
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
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[720px] mx-auto text-center mb-14 md:mb-20 space-y-4">
            <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
              <span className="w-6 h-[1px] bg-[#D5101F]" />
              Trusted by clinicians
            </div>
            <h2
              className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1.02]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
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
                className="relative bg-[#fbfcff] rounded-[12px] p-8 border border-[#231010]/[0.08] flex flex-col h-full"
              >
                <Quote className="size-6 text-[#D5101F]/80 mb-5" />
                <p className="font-display font-light text-[#231010] text-[17px] leading-[1.55] tracking-[-0.2px] mb-8 flex-1">
                  &ldquo;{a.body}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-[#231010]/10">
                  <div className="size-12 rounded-full bg-[#D5101F]/10 text-[#D5101F] font-medium text-[12px] tracking-[1px] flex items-center justify-center">
                    {a.avatar}
                  </div>
                  <div>
                    <div className="font-display font-light text-[16px] text-[#231010]">
                      {a.name}
                    </div>
                    <div className="text-[11px] uppercase tracking-[2px] text-[#231010]/55 font-medium mt-1">
                      {a.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRODUCTS — Portfolio highlight band
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#fbfcff] border-y border-[#231010]/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-[720px] mb-14 md:mb-20 space-y-5">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
              <span className="w-6 h-[1px] bg-[#D5101F]" />
              The portfolio
            </div>
            <h2
              className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1.02]"
              style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
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
                className="group p-8 bg-[#ffffff] border border-[#231010]/[0.08] rounded-[12px] hover:border-[#D5101F]/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] transition-all cursor-pointer"
              >
                <div className="text-[10px] font-medium uppercase tracking-[2.5px] text-[#D5101F] mb-6">
                  {p.category}
                </div>
                <h3 className="font-display font-light text-[#231010] text-[26px] tracking-[-0.3px] leading-[1.2] mb-3 group-hover:text-[#D5101F] transition-colors">
                  {p.name}
                </h3>
                <p className="text-[14.5px] font-light text-[#231010]/65 leading-[1.7] mb-8">
                  {p.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[2.5px] text-[#231010]/70 group-hover:text-[#D5101F]">
                  Learn more
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 md:mt-20 pt-10 border-t border-[#231010]/10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-3 text-[12px] font-light text-[#231010]/60">
              <Award className="size-4 text-[#D5101F]" />
              Peer-reviewed across 87 publications since 2011
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[2.5px] text-[#231010]/70 hover:text-[#D5101F] transition-colors"
            >
              Full portfolio
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          TIMELINE — 15 years of milestones
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-14 md:mb-16">
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Fifteen years
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1.02]"
                style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
              >
                A company built deliberately, year by year.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <p className="text-[15.5px] font-light text-[#231010]/65 leading-[1.75] max-w-[640px]">
                Tiger BioSciences has grown by compounding scientific depth — adding
                divisions, platforms, and markets only when the underlying technology
                was ready to earn a clinician's trust.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-[152px] top-0 bottom-0 w-px bg-[#231010]/10" />
            <div className="space-y-10">
              {[
                {
                  year: "2011",
                  title: "Tiger BioSciences founded",
                  body: "AATB accreditation earned in the first operational year. Early focus on allograft tissue processing.",
                },
                {
                  year: "2015",
                  title: "Wound Care division established",
                  body: "First cellular allograft matrix introduced, targeting chronic wounds unresponsive to standard care.",
                },
                {
                  year: "2018",
                  title: "International expansion begins",
                  body: "CE Mark granted. Distribution partnerships formed across eight European markets within eighteen months.",
                },
                {
                  year: "2021",
                  title: "Aesthetics division launched",
                  body: "Regenerative science applied to reconstructive and aesthetic medicine. Acellular dermal matrices, injectable platforms.",
                },
                {
                  year: "2024",
                  title: "87+ peer-reviewed publications",
                  body: "Platform evidence base referenced in major wound care and reconstructive treatment guidelines.",
                },
                {
                  year: "2026",
                  title: "20+ countries · 500K+ grafts",
                  body: "Zero disease transmission events across the full platform history. Safety remains the operating principle.",
                },
              ].map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-10"
                >
                  <div className="md:w-[152px] shrink-0">
                    <span
                      className="font-display font-light text-[#D5101F] leading-none tracking-[-1px]"
                      style={{ fontSize: "clamp(32px, 3vw, 44px)" }}
                    >
                      {milestone.year}
                    </span>
                  </div>
                  <div className="relative md:pl-8">
                    <div className="hidden md:block absolute left-[-5px] top-[12px] size-[10px] rounded-full bg-[#D5101F]" />
                    <h3 className="font-display font-light text-[#231010] text-[20px] md:text-[24px] tracking-[-0.3px] leading-[1.25] mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-[14.5px] font-light text-[#231010]/65 leading-[1.75] max-w-[640px]">
                      {milestone.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GLOBAL FOOTPRINT
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#fbfcff] border-y border-[#231010]/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#4774AA] font-medium">
                <span className="w-6 h-[1px] bg-[#4774AA]" />
                Global footprint
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1.02]"
                style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
              >
                Operational presence, not just reach.
              </h2>
              <p className="text-[15px] font-light text-[#231010]/65 leading-[1.75] max-w-[460px]">
                Tiger operates processing facilities, sales organizations, and regulatory
                teams across four continents. The same quality standard applies to every
                shipment, every market.
              </p>
              <div className="pt-4 flex flex-col gap-3">
                {[
                  { icon: Building2, label: "Four owned processing facilities" },
                  { icon: ShieldCheck, label: "FDA · CE Mark · Health Canada · TGA" },
                  { icon: Award, label: "AATB accredited · ISO 13485:2016" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon className="size-4 text-[#4774AA] shrink-0" />
                    <span className="text-[13px] font-light text-[#231010]/75">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-[#231010]/10 border border-[#231010]/10 rounded-[2px] overflow-hidden">
                {[
                  { count: "3", region: "United States", note: "HQ · Core market" },
                  { count: "11", region: "Europe", note: "CE Mark active" },
                  { count: "5", region: "Asia-Pacific", note: "Strategic growth" },
                  { count: "2", region: "Middle East", note: "Emerging markets" },
                  { count: "3", region: "Latin America", note: "Partnership model" },
                  { count: "1", region: "Africa", note: "Access initiative" },
                ].map((region, i) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="bg-[#ffffff] p-6 md:p-7 flex flex-col gap-2 min-h-[160px]"
                  >
                    <MapPin className="size-4 text-[#4774AA] mb-1" />
                    <span
                      className="font-display font-light text-[#231010] leading-none tracking-[-0.6px]"
                      style={{ fontSize: "clamp(28px, 2.2vw, 40px)" }}
                    >
                      {region.count}
                    </span>
                    <span className="text-[13px] font-normal text-[#231010] leading-[1.3]">
                      {region.region}
                    </span>
                    <span className="text-[10px] uppercase tracking-[2.5px] text-[#231010]/45">
                      {region.note}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PUBLICATIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-[620px] space-y-5">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Published evidence
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1.02]"
                style={{ fontSize: "clamp(30px, 4vw, 52px)" }}
              >
                Science that peers review.
              </h2>
            </div>
            <Link
              href="/science/publications"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[2.5px] text-[#231010]/60 hover:text-[#D5101F] transition-colors border-b border-[#231010]/20 hover:border-[#D5101F] pb-1"
            >
              Browse publications <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#231010]/10 border border-[#231010]/10 rounded-[2px] overflow-hidden">
            {[
              {
                journal: "Journal of Wound Care",
                year: "2024",
                title: "Cellular allograft matrix for diabetic foot ulcers: 12-week outcomes vs. standard of care",
              },
              {
                journal: "Advances in Wound Care",
                year: "2023",
                title: "Decellularization protocols and extracellular matrix preservation: a comparative analysis",
              },
              {
                journal: "Aesthetic Surgery Journal",
                year: "2024",
                title: "Regenerative injectables in facial aesthetics: long-term safety and efficacy review",
              },
            ].map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-[#fbfcff] p-7 md:p-9 flex flex-col gap-4 min-h-[240px]"
              >
                <div className="flex items-center justify-between">
                  <BookOpen className="size-4 text-[#D5101F]" />
                  <span className="text-[11px] uppercase tracking-[2.5px] text-[#231010]/45">{pub.year}</span>
                </div>
                <span className="text-[11px] uppercase tracking-[2.5px] text-[#D5101F]/85 font-medium">
                  {pub.journal}
                </span>
                <p className="font-display font-light text-[#231010] text-[18px] leading-[1.4] tracking-[-0.2px]">
                  {pub.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#fbfcff] border-y border-[#231010]/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-32 self-start">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Common questions
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1.2px] leading-[1.02]"
                style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}
              >
                Questions patients and clinicians ask.
              </h2>
              <p className="text-[14.5px] font-light text-[#231010]/65 leading-[1.75]">
                Need something deeper? Our team is one message away.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-[1px] bg-[#231010]/10 border border-[#231010]/10 rounded-[2px] overflow-hidden">
                {[
                  {
                    q: "How are Tiger's allograft products sourced?",
                    a: "All tissue is recovered through AATB-accredited partner organizations with verified donor consent. Every recovery is documented, auditable, and traced end-to-end through our processing system.",
                  },
                  {
                    q: "Is insurance coverage available for wound care patients?",
                    a: "Most major insurers cover Tiger allograft therapies for qualifying wound care indications. Our reimbursement team provides prior-authorization support and claims assistance.",
                  },
                  {
                    q: "How do I find a Tiger-trained clinician?",
                    a: "Our clinician locator is available through the For Clinicians portal. Geographic coverage spans all 50 U.S. states and 20+ international markets.",
                  },
                  {
                    q: "What training does Tiger provide for clinicians?",
                    a: "Accredited CME programs, on-site technique workshops, and peer-to-peer mentorship at regional centers of excellence. Virtual modules are available on demand.",
                  },
                  {
                    q: "Are there patient assistance programs?",
                    a: "Yes. Uninsured and underinsured patients may qualify for Tiger's Patient Assistance Program. Our team reviews every application individually.",
                  },
                ].map((faq, i) => (
                  <motion.details
                    key={faq.q}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group bg-[#ffffff] p-7 md:p-8"
                  >
                    <summary className="flex items-center justify-between gap-6 cursor-pointer list-none">
                      <span className="font-display font-light text-[#231010] text-[18px] md:text-[20px] leading-[1.3] tracking-[-0.2px]">
                        {faq.q}
                      </span>
                      <Plus className="size-5 text-[#D5101F] shrink-0 group-open:rotate-45 transition-transform duration-300" />
                    </summary>
                    <p className="mt-5 text-[14.5px] font-light text-[#231010]/65 leading-[1.75]">
                      {faq.a}
                    </p>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[3.5px] text-[#D5101F] font-medium mb-6">
            <span className="w-6 h-[1px] bg-[#D5101F]" />
            Take the next step
          </div>
          <h2
            className="font-display font-light text-[#231010] tracking-[-1.4px] leading-[1.02] max-w-[820px] mx-auto mb-6"
            style={{ fontSize: "clamp(32px, 4.4vw, 64px)" }}
          >
            Take the next measured step.
          </h2>
          <p className="text-[16px] font-light text-[#231010]/65 leading-[1.75] max-w-[560px] mx-auto mb-10">
            Whether you're a patient seeking care or a clinician evaluating regenerative
            options, Tiger BioSciences meets you with the same evidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <TigerButton href="/paths/wound-care" variant="primary" arrow>
              Start patient path
            </TigerButton>
            <TigerButton href="/hcp" variant="secondary" arrow>
              Start clinician path
            </TigerButton>
          </div>
        </div>
      </section>

      <VariantFooter theme="light" tagline="Healing engineered around your biology. Every step, measured." />
      <VariantNav current={5} />
    </main>
  );
}
