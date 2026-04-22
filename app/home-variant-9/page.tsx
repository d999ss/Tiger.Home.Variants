"use client";
import { VariantNav } from "@/components/ui/variant-nav";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  FileText,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Pill,
  ClipboardCheck,
  Play,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const audienceTabs = [
  { label: "For Patients", active: true },
  { label: "For Healthcare Professionals", active: false },
  { label: "For Donors", active: false },
  { label: "En Español", active: false },
];

const serviceCards = [
  {
    icon: MapPin,
    title: "Find a provider",
    body: "Locate specialists using Tiger BioSciences therapies in your area.",
    cta: "Start search",
    href: "/find-a-provider",
  },
  {
    icon: HeartHandshake,
    title: "Patient assistance",
    body: "Financial support and savings programs for eligible patients.",
    cta: "Check eligibility",
    href: "/patient-assistance",
  },
  {
    icon: FileText,
    title: "Request samples",
    body: "For licensed clinicians — request CAMP product samples for your practice.",
    cta: "Request now",
    href: "/hcp/samples",
  },
  {
    icon: ClipboardCheck,
    title: "Clinical trials",
    body: "Enrolling studies across wound care, regenerative, and aesthetic research.",
    cta: "See open trials",
    href: "/clinical-trials",
  },
];

const conditions = [
  {
    tag: "Chronic Wounds",
    title: "Diabetic foot ulcers",
    body: "Learn how CAMP-based allografts can accelerate closure of complex chronic wounds.",
    image: "/images/tiger-assets/home-ex-care.jpeg",
    href: "/conditions/diabetic-ulcers",
    color: "#1560BD",
  },
  {
    tag: "Reconstructive",
    title: "Post-surgical healing",
    body: "Aesthetic reconstruction options after mastectomy, trauma, or congenital conditions.",
    image: "/images/figma/division-aesthetics.png",
    href: "/conditions/reconstructive",
    color: "#1560BD",
  },
  {
    tag: "Regenerative",
    title: "Tendon & soft-tissue repair",
    body: "Clinical pathways for the repair of damaged connective tissue using human allografts.",
    image: "/images/figma/division-wound-care.png",
    href: "/conditions/tendon-repair",
    color: "#1560BD",
  },
];

const suggestedQuestions = [
  "How do I find a surgeon near me who uses Tiger products?",
  "What does an allograft cost with insurance?",
  "Is Tiger BioSciences tissue FDA-registered?",
  "How does the donation process work?",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeVariant9() {
  const [question, setQuestion] = useState("");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#0b1f3a]">

      {/* ═══════════════════════════════════════════════════════════
          AUDIENCE SWITCHER — thin blue utility bar
      ═══════════════════════════════════════════════════════════ */}
      <div className="pt-[101px]">
        <div className="bg-[#0b1f3a] text-[#ffffff]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-6 md:gap-10 py-2.5 overflow-x-auto scrollbar-none">
              {audienceTabs.map((t) => (
                <Link
                  key={t.label}
                  href="#"
                  className={`text-[12px] font-medium tracking-[0.4px] whitespace-nowrap transition-colors ${
                    t.active
                      ? "text-[#ffffff] border-b-2 border-[#6FC4E5] pb-[10px] -mb-[12px]"
                      : "text-[#ffffff]/65 hover:text-[#ffffff]"
                  }`}
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          HERO — Bold patient-facing statement with imagery
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#f3f7fb]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center">

            {/* Text */}
            <div className="lg:col-span-6 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-[#1560BD]/10 text-[#1560BD] rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-[0.2px]"
              >
                <Sparkles className="size-3.5" />
                Tiger BioSciences · Patient Resources
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
                className="font-display font-bold text-[#0b1f3a] tracking-[-1.5px] leading-[1]"
                style={{ fontSize: "clamp(40px, 5.2vw, 76px)", fontWeight: 700 }}
              >
                Find the right care, for the life you live.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-[17px] text-[#0b1f3a]/75 leading-[1.65] max-w-[520px]"
              >
                From chronic wounds to aesthetic reconstruction, Tiger BioSciences connects patients, providers, and donors to regenerative therapies used across eighteen countries.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.5 }}
                className="flex items-center gap-3 flex-wrap pt-2"
              >
                <Link
                  href="/find-a-provider"
                  className="inline-flex items-center gap-2 bg-[#1560BD] hover:bg-[#0e4a94] text-white px-7 py-3.5 rounded-full text-[14px] font-semibold transition-colors"
                >
                  Find a provider
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/stories/fernando"
                  className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#0b1f3a] hover:text-[#1560BD] transition-colors"
                >
                  <span className="size-10 rounded-full bg-[#0b1f3a] text-white flex items-center justify-center">
                    <Play className="size-4 fill-white ml-0.5" />
                  </span>
                  Watch Fernando&rsquo;s story
                </Link>
              </motion.div>
            </div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 }}
              className="lg:col-span-6"
            >
              <div className="relative aspect-[5/4] rounded-[24px] overflow-hidden bg-[#e8f0f9] shadow-[0_24px_60px_rgba(11,31,58,0.12)]">
                <Image
                  src="/images/tiger-assets/pregnant-lady.png"
                  alt="Patient"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {/* Floating stat card */}
                <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 bg-white rounded-[16px] px-5 py-4 shadow-[0_8px_24px_rgba(11,31,58,0.15)] max-w-[240px]">
                  <div className="text-[11px] uppercase tracking-[1.5px] text-[#1560BD] font-semibold mb-1">
                    500,000+ Patients
                  </div>
                  <div className="text-[13px] text-[#0b1f3a]/70 leading-[1.45]">
                    Treated with Tiger allografts across 18 countries.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICE CARDS — Four action tiles
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-12">
            <h2
              className="font-display font-bold text-[#0b1f3a] tracking-[-1px] leading-[1]"
              style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 700 }}
            >
              What can we help you with?
            </h2>
            <span className="text-[13px] text-[#0b1f3a]/55 font-medium">
              Choose a starting point
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCards.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link
                  href={s.href}
                  className="group flex flex-col h-full bg-[#f3f7fb] rounded-[20px] p-7 hover:bg-[#1560BD] hover:text-white transition-colors duration-300"
                >
                  <div className="size-12 rounded-full bg-white group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                    <s.icon className="size-5 text-[#1560BD] group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-bold text-[20px] text-[#0b1f3a] group-hover:text-white tracking-[-0.3px] leading-[1.2] mb-3" style={{ fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-[#0b1f3a]/70 group-hover:text-white/85 leading-[1.55] mb-6 flex-1">
                    {s.body}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1560BD] group-hover:text-white">
                    {s.cta}
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ASK TIGER — AI conversational module
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#0b1f3a] text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-[0.3px]">
                <MessageCircle className="size-3.5" />
                Ask Tiger · AI-assisted answers
              </div>
              <h2
                className="font-display font-bold tracking-[-1px] leading-[1.05]"
                style={{ fontSize: "clamp(30px, 3.6vw, 52px)", fontWeight: 700 }}
              >
                Have a question? Ask in plain English.
              </h2>
              <p className="text-[15px] text-white/75 leading-[1.65] max-w-[440px]">
                Get instant, science-grounded answers from our AI assistant — reviewed by clinical educators, backed by peer-reviewed research. Always speak with your clinician before making treatment decisions.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white text-[#0b1f3a] rounded-[24px] p-6 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
                {/* Chat input */}
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-[#0b1f3a]/40" />
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="e.g. What is a CAMP allograft?"
                    className="w-full bg-[#f3f7fb] rounded-full pl-14 pr-36 py-4 text-[15px] placeholder:text-[#0b1f3a]/40 focus:outline-none focus:ring-2 focus:ring-[#1560BD]"
                  />
                  <button
                    type="button"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#1560BD] hover:bg-[#0e4a94] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold transition-colors"
                  >
                    Ask
                  </button>
                </div>

                {/* Suggested chips */}
                <div className="mt-5">
                  <div className="text-[11px] uppercase tracking-[1.5px] text-[#0b1f3a]/50 font-semibold mb-3">
                    Popular questions
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setQuestion(q)}
                        className="text-[13px] text-[#0b1f3a]/80 bg-[#f3f7fb] hover:bg-[#1560BD] hover:text-white rounded-full px-4 py-2 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-5 pt-5 border-t border-[#0b1f3a]/10 text-[11px] text-[#0b1f3a]/50 leading-[1.5]">
                  Educational only. Not a substitute for professional medical advice. Responses reviewed by Tiger clinical educators and updated quarterly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BY CONDITION — Three-card condition finder
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
            <div className="space-y-3 max-w-[600px]">
              <div className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#1560BD] uppercase tracking-[1.5px]">
                <Pill className="size-4" />
                Browse by condition
              </div>
              <h2
                className="font-display font-bold text-[#0b1f3a] tracking-[-1px] leading-[1]"
                style={{ fontSize: "clamp(28px, 3.4vw, 48px)", fontWeight: 700 }}
              >
                Care pathways for the questions you&rsquo;re actually asking.
              </h2>
            </div>
            <Link
              href="/conditions"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1560BD] hover:text-[#0e4a94] transition-colors"
            >
              All conditions
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {conditions.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
              >
                <Link
                  href={c.href}
                  className="group block bg-[#f3f7fb] rounded-[20px] overflow-hidden hover:shadow-[0_16px_40px_rgba(11,31,58,0.12)] transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#e8f0f9]">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-7 space-y-3">
                    <div className="text-[11px] uppercase tracking-[1.5px] text-[#1560BD] font-semibold">
                      {c.tag}
                    </div>
                    <h3 className="font-display font-bold text-[22px] text-[#0b1f3a] tracking-[-0.3px] leading-[1.2]" style={{ fontWeight: 700 }}>
                      {c.title}
                    </h3>
                    <p className="text-[14px] text-[#0b1f3a]/70 leading-[1.6]">
                      {c.body}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1560BD] group-hover:gap-3 transition-all pt-2">
                      Find out more
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SAVINGS CALLOUT — Financial assistance band
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#f3f7fb]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="bg-gradient-to-br from-[#1560BD] to-[#0e4a94] rounded-[28px] p-8 md:p-12 lg:p-16 text-white overflow-hidden relative">
            <div className="absolute -top-16 -right-16 size-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-24 -right-8 size-96 rounded-full bg-white/5" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-[0.3px]">
                  <HeartHandshake className="size-3.5" />
                  Patient assistance
                </div>
                <h3
                  className="font-display font-bold tracking-[-1px] leading-[1.05]"
                  style={{ fontSize: "clamp(28px, 3.4vw, 48px)", fontWeight: 700 }}
                >
                  Eligible patients may pay as little as $0 per treatment.
                </h3>
                <p className="text-[15px] text-white/85 leading-[1.65] max-w-[560px]">
                  Tiger&rsquo;s patient assistance program helps cover out-of-pocket costs for CAMP therapies when prescribed by a licensed clinician. Terms and income limits apply.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3 lg:items-end">
                <Link
                  href="/patient-assistance"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1560BD] hover:bg-[#f3f7fb] px-7 py-4 rounded-full text-[14px] font-bold transition-colors w-full lg:w-auto"
                >
                  Check eligibility
                  <ArrowRight className="size-4" />
                </Link>
                <span className="text-[12px] text-white/70 lg:text-right">
                  Takes 3 minutes · No commitment
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RESOURCE LINKS — Final footer CTA row
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff] border-t border-[#0b1f3a]/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-[1.5px] text-[#1560BD] font-semibold">
                Patients
              </div>
              <h4 className="font-display font-bold text-[22px] text-[#0b1f3a] tracking-[-0.3px]" style={{ fontWeight: 700 }}>
                Understand your treatment.
              </h4>
              <p className="text-[14px] text-[#0b1f3a]/70 leading-[1.6]">
                Patient-friendly explainers for CAMP therapies, donor consent, and what to expect before and after treatment.
              </p>
              <Link href="/patients/education" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1560BD] hover:text-[#0e4a94] transition-colors pt-2">
                Patient library <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-[1.5px] text-[#1560BD] font-semibold">
                Clinicians
              </div>
              <h4 className="font-display font-bold text-[22px] text-[#0b1f3a] tracking-[-0.3px]" style={{ fontWeight: 700 }}>
                Clinical evidence and dosing.
              </h4>
              <p className="text-[14px] text-[#0b1f3a]/70 leading-[1.6]">
                Peer-reviewed studies, indication details, and protocol guides for licensed healthcare professionals.
              </p>
              <Link href="/hcp" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1560BD] hover:text-[#0e4a94] transition-colors pt-2">
                HCP portal <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-[1.5px] text-[#1560BD] font-semibold">
                Donors
              </div>
              <h4 className="font-display font-bold text-[22px] text-[#0b1f3a] tracking-[-0.3px]" style={{ fontWeight: 700 }}>
                The gift behind every graft.
              </h4>
              <p className="text-[14px] text-[#0b1f3a]/70 leading-[1.6]">
                Learn how birth tissue and deceased donor networks make regenerative therapies possible.
              </p>
              <Link href="/company/donation" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1560BD] hover:text-[#0e4a94] transition-colors pt-2">
                Donor resources <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VariantNav current={9} />
    </main>
  );
}
