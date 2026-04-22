"use client";
import { VariantNav } from "@/components/ui/variant-nav";
import { VariantTopNav } from "@/components/ui/variant-top-nav";
import { VariantFooter } from "@/components/ui/variant-footer";

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
  Quote,
  ChevronDown,
  BookOpen,
  Stethoscope,
  CheckCircle2,
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
    image: "/images/figma/division-wound-care.png",
    href: "/conditions/diabetic-ulcers",
    color: "#D5101F",
  },
  {
    tag: "Reconstructive",
    title: "Post-surgical healing",
    body: "Aesthetic reconstruction options after mastectomy, trauma, or congenital conditions.",
    image: "/images/figma/division-aesthetics.png",
    href: "/conditions/reconstructive",
    color: "#D5101F",
  },
  {
    tag: "Regenerative",
    title: "Tendon & soft-tissue repair",
    body: "Clinical pathways for the repair of damaged connective tissue using human allografts.",
    image: "/images/figma/division-wound-care.png",
    href: "/conditions/tendon-repair",
    color: "#D5101F",
  },
];

const suggestedQuestions = [
  "How do I find a surgeon near me who uses Tiger products?",
  "What does an allograft cost with insurance?",
  "Is Tiger BioSciences tissue FDA-registered?",
  "How does the donation process work?",
];

const testimonials = [
  {
    quote:
      "After two years of non-healing, my foot finally closed. I stopped counting the appointments. I started counting the walks.",
    name: "Maria, 58",
    place: "Tampa, FL",
    condition: "Diabetic Foot Ulcer",
  },
  {
    quote:
      "The reconstruction felt like the beginning of the rest of my life. My surgeon explained every step, including where the tissue came from.",
    name: "Elena, 42",
    place: "Chicago, IL",
    condition: "Post-Mastectomy Reconstruction",
  },
  {
    quote:
      "I thought I'd never run again after the Achilles rupture. Eleven months later, I finished a half marathon. Thank you to the donor family.",
    name: "David, 37",
    place: "Denver, CO",
    condition: "Tendon Repair",
  },
];

const insights = [
  {
    tag: "Understanding CAMPs",
    title: "What is a CAMP allograft, and how does it help my body heal?",
    readTime: "4 min read",
    image: "/images/figma/division-wound-care.png",
    href: "/insights/what-is-camp",
  },
  {
    tag: "Before your procedure",
    title: "Five questions to ask your surgeon about tissue-based treatment.",
    readTime: "3 min read",
    image: "/images/figma/division-aesthetics.png",
    href: "/insights/questions-to-ask",
  },
  {
    tag: "Insurance & costs",
    title: "How to check if your insurance covers regenerative tissue therapies.",
    readTime: "5 min read",
    image: "/images/figma/division-international.png",
    href: "/insights/insurance-guide",
  },
];

const steps = [
  {
    n: "01",
    title: "Talk to your clinician",
    body: "Share your medical history and ask whether a CAMP-based therapy could fit your care plan.",
  },
  {
    n: "02",
    title: "Find a provider",
    body: "Use our locator to identify specialists in your area who work with Tiger BioSciences products.",
  },
  {
    n: "03",
    title: "Check coverage",
    body: "Confirm insurance coverage and, if eligible, enroll in Tiger's patient assistance program.",
  },
  {
    n: "04",
    title: "Begin treatment",
    body: "Receive care. Follow-up support and recovery resources are available through your provider.",
  },
];

const faqs = [
  {
    q: "What is a CAMP allograft?",
    a: "CAMP stands for Cellular, Acellular, and Matrix-like Products. These are human-tissue-based therapies derived from donated tissue, processed in FDA-registered facilities and AATB-accredited recovery networks to help the body heal complex wounds or support reconstruction.",
  },
  {
    q: "Is tissue from Tiger BioSciences safe?",
    a: "Every allograft is processed under strict FDA regulations with donor screening, rigorous testing, and terminal sterilization protocols. Tiger has processed more than 500,000 grafts over 15+ years with zero contamination events.",
  },
  {
    q: "Will my insurance cover a Tiger therapy?",
    a: "Coverage varies by insurer, plan, and indication. Many commercial and Medicare plans cover CAMP therapies when medically necessary. Our patient assistance team can help you verify benefits at no cost.",
  },
  {
    q: "How do I find a surgeon or wound-care specialist who uses your products?",
    a: "Start with our provider locator. You can search by zip code, specialty, and condition to find clinicians in your area. You can also ask your current physician for a referral.",
  },
  {
    q: "Can I become a tissue donor?",
    a: "Yes. Birth tissue donation (placenta after live birth) and deceased donor networks both contribute to our supply. Birth Tissue Recovery and bioCARE partner with hospitals nationwide. Your choice costs nothing and impacts many lives.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeVariant3() {
  const [question, setQuestion] = useState("");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#231010]">
      <VariantTopNav theme="patient" ctaLabel="Find a Provider" ctaHref="/find-a-provider" />

      {/* ═══════════════════════════════════════════════════════════
          AUDIENCE SWITCHER — thin utility bar
      ═══════════════════════════════════════════════════════════ */}
      <div className="pt-[72px]">
        <div className="bg-[#231010] text-[#ffffff]">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-6 md:gap-10 py-2.5 overflow-x-auto scrollbar-none">
              {audienceTabs.map((t) => (
                <Link
                  key={t.label}
                  href="#"
                  className={`text-[12px] font-medium tracking-[0.4px] whitespace-nowrap transition-colors ${
                    t.active
                      ? "text-[#ffffff] border-b-2 border-[#D5101F] pb-[10px] -mb-[12px]"
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
      <section className="relative bg-[#fbfcff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 items-center">

            {/* Text */}
            <div className="lg:col-span-6 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-[#D5101F]/10 text-[#D5101F] rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-[0.2px]"
              >
                <Sparkles className="size-3.5" />
                Tiger BioSciences · Patient Resources
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
                className="font-display font-light text-[#231010] tracking-[-1.5px] leading-[1]"
                style={{ fontSize: "clamp(40px, 5.2vw, 76px)", fontWeight: 300 }}
              >
                Find the right care, for the life you live.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-[17px] text-[#231010]/75 leading-[1.65] max-w-[520px]"
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
                  className="inline-flex items-center gap-2 bg-[#D5101F] hover:bg-[#A00D17] text-white px-7 py-3.5 rounded-full text-[14px] font-semibold transition-colors"
                >
                  Find a provider
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/stories/fernando"
                  className="inline-flex items-center gap-3 text-[14px] font-semibold text-[#231010] hover:text-[#D5101F] transition-colors"
                >
                  <span className="size-10 rounded-full bg-[#231010] text-white flex items-center justify-center">
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
              <div className="relative aspect-[5/4] rounded-[24px] overflow-hidden bg-[#f5f1ea] shadow-[0_24px_60px_rgba(11,31,58,0.12)]">
                <Image
                  src="/images/tiger-hero.png"
                  alt="Tiger BioSciences"
                  fill
                  priority
                  className="object-cover object-[70%_35%]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {/* Floating stat card */}
                <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7 bg-white rounded-[16px] px-5 py-4 shadow-[0_8px_24px_rgba(11,31,58,0.15)] max-w-[240px]">
                  <div className="text-[11px] uppercase tracking-[1.5px] text-[#D5101F] font-semibold mb-1">
                    500,000+ Patients
                  </div>
                  <div className="text-[13px] text-[#231010]/70 leading-[1.45]">
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
              className="font-display font-light text-[#231010] tracking-[-1px] leading-[1]"
              style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 300 }}
            >
              What can we help you with?
            </h2>
            <span className="text-[13px] text-[#231010]/55 font-medium">
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
                  className="group flex flex-col h-full bg-[#fbfcff] rounded-[20px] p-7 hover:bg-[#D5101F] hover:text-white transition-colors duration-300"
                >
                  <div className="size-12 rounded-full bg-white group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                    <s.icon className="size-5 text-[#D5101F] group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-light text-[20px] text-[#231010] group-hover:text-white tracking-[-0.3px] leading-[1.2] mb-3" style={{ fontWeight: 300 }}>
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-[#231010]/70 group-hover:text-white/85 leading-[1.55] mb-6 flex-1">
                    {s.body}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D5101F] group-hover:text-white">
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
      <section className="bg-[#231010] text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-[0.3px]">
                <MessageCircle className="size-3.5" />
                Ask Tiger · AI-assisted answers
              </div>
              <h2
                className="font-display font-light tracking-[-1px] leading-[1.05]"
                style={{ fontSize: "clamp(30px, 3.6vw, 52px)", fontWeight: 300 }}
              >
                Have a question? Ask in plain English.
              </h2>
              <p className="text-[15px] text-white/75 leading-[1.65] max-w-[440px]">
                Get instant, science-grounded answers from our AI assistant — reviewed by clinical educators, backed by peer-reviewed research. Always speak with your clinician before making treatment decisions.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white text-[#231010] rounded-[24px] p-6 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
                {/* Chat input */}
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-[#231010]/40" />
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="e.g. What is a CAMP allograft?"
                    className="w-full bg-[#fbfcff] rounded-full pl-14 pr-36 py-4 text-[15px] placeholder:text-[#231010]/40 focus:outline-none focus:ring-2 focus:ring-[#D5101F]"
                  />
                  <button
                    type="button"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#D5101F] hover:bg-[#A00D17] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold transition-colors"
                  >
                    Ask
                  </button>
                </div>

                {/* Suggested chips */}
                <div className="mt-5">
                  <div className="text-[11px] uppercase tracking-[1.5px] text-[#231010]/50 font-semibold mb-3">
                    Popular questions
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setQuestion(q)}
                        className="text-[13px] text-[#231010]/80 bg-[#fbfcff] hover:bg-[#D5101F] hover:text-white rounded-full px-4 py-2 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-5 pt-5 border-t border-[#231010]/10 text-[11px] text-[#231010]/50 leading-[1.5]">
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
              <div className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#D5101F] uppercase tracking-[1.5px]">
                <Pill className="size-4" />
                Browse by condition
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1px] leading-[1]"
                style={{ fontSize: "clamp(28px, 3.4vw, 48px)", fontWeight: 300 }}
              >
                Care pathways for the questions you&rsquo;re actually asking.
              </h2>
            </div>
            <Link
              href="/conditions"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D5101F] hover:text-[#A00D17] transition-colors"
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
                  className="group block bg-[#fbfcff] rounded-[20px] overflow-hidden hover:shadow-[0_16px_40px_rgba(11,31,58,0.12)] transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f1ea]">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-7 space-y-3">
                    <div className="text-[11px] uppercase tracking-[1.5px] text-[#D5101F] font-semibold">
                      {c.tag}
                    </div>
                    <h3 className="font-display font-light text-[22px] text-[#231010] tracking-[-0.3px] leading-[1.2]" style={{ fontWeight: 300 }}>
                      {c.title}
                    </h3>
                    <p className="text-[14px] text-[#231010]/70 leading-[1.6]">
                      {c.body}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D5101F] group-hover:gap-3 transition-all pt-2">
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
          IMPACT STATS — Dark band with big numbers (AbbVie-style)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#231010] text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="max-w-[720px] mb-12 md:mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#D5101F] uppercase tracking-[2px]">
              <span className="w-6 h-[1px] bg-[#D5101F]" />
              Our impact
            </div>
            <h2
              className="font-display font-light tracking-[-1px] leading-[1.05]"
              style={{ fontSize: "clamp(30px, 3.6vw, 52px)", fontWeight: 300 }}
            >
              Fifteen years of outcomes — measured, published, and peer-reviewed.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {[
              { v: "500K+", l: "Patients Treated", s: "Across eighteen countries" },
              { v: "15+", l: "Years of Science", s: "Zero contamination events on record" },
              { v: "1,800", l: "Clinicians Served", s: "Hospitals, outpatient, wound clinics" },
              { v: "AATB", l: "Accredited", s: "FDA-registered facilities end to end" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="space-y-2 border-t border-white/15 pt-5"
              >
                <div
                  className="font-display font-light tracking-[-1.5px] leading-none"
                  style={{ fontSize: "clamp(44px, 4.6vw, 76px)", fontWeight: 300 }}
                >
                  {s.v}
                </div>
                <div className="text-[12px] uppercase tracking-[1.8px] font-semibold text-white/90">
                  {s.l}
                </div>
                <div className="text-[13px] text-white/55 leading-[1.55]">
                  {s.s}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PATIENT STORIES — Testimonial card row (AbbVie-inspired)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
            <div className="space-y-3 max-w-[620px]">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#D5101F] uppercase tracking-[2px]">
                <span className="w-6 h-[1px] bg-[#D5101F]" />
                Patient stories
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1px] leading-[1.05]"
                style={{ fontSize: "clamp(28px, 3.4vw, 48px)", fontWeight: 300 }}
              >
                What healing looks like, in their own words.
              </h2>
            </div>
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D5101F] hover:text-[#A00D17] transition-colors"
            >
              Read all stories
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.08 }}
                className="bg-[#fbfcff] border border-[#231010]/[0.08] rounded-[20px] p-8 md:p-9 flex flex-col h-full"
              >
                <Quote className="size-8 text-[#D5101F]/40 mb-5" strokeWidth={2} />
                <blockquote className="font-display text-[19px] md:text-[20px] text-[#231010] leading-[1.45] tracking-[-0.2px] flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 pt-5 border-t border-[#231010]/10 space-y-1">
                  <div className="text-[14px] font-semibold text-[#231010]">
                    {t.name}
                    <span className="text-[#231010]/45 font-normal"> · {t.place}</span>
                  </div>
                  <div className="text-[11px] uppercase tracking-[1.5px] text-[#D5101F] font-semibold">
                    {t.condition}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GET STARTED — Four-step process
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#fbfcff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
            <div className="space-y-3 max-w-[620px]">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#D5101F] uppercase tracking-[2px]">
                <Stethoscope className="size-4" />
                How it works
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1px] leading-[1.05]"
                style={{ fontSize: "clamp(28px, 3.4vw, 48px)", fontWeight: 300 }}
              >
                Getting started takes four steps.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative bg-white border border-[#231010]/[0.08] rounded-[20px] p-7 md:p-8"
              >
                <div
                  className="font-display font-light text-[#D5101F] tracking-[-1px] leading-none mb-5"
                  style={{ fontSize: "clamp(40px, 3.4vw, 52px)", fontWeight: 300 }}
                >
                  {step.n}
                </div>
                <h3 className="font-display font-light text-[18px] md:text-[20px] text-[#231010] tracking-[-0.3px] leading-[1.2] mb-3" style={{ fontWeight: 300 }}>
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#231010]/70 leading-[1.6]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HEALTH INSIGHTS — Editorial article row
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10 md:mb-14">
            <div className="space-y-3 max-w-[620px]">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#D5101F] uppercase tracking-[2px]">
                <BookOpen className="size-4" />
                Health insights
              </div>
              <h2
                className="font-display font-light text-[#231010] tracking-[-1px] leading-[1.05]"
                style={{ fontSize: "clamp(28px, 3.4vw, 48px)", fontWeight: 300 }}
              >
                Explainers to help you make informed decisions.
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D5101F] hover:text-[#A00D17] transition-colors"
            >
              All articles
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {insights.map((insight, i) => (
              <motion.article
                key={insight.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.1 }}
              >
                <Link href={insight.href} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] mb-5 bg-[#f5f1ea]">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
                      className="object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[1.5px] mb-3">
                    <span className="text-[#D5101F] font-semibold">{insight.tag}</span>
                    <span className="w-1 h-1 rounded-full bg-[#231010]/30" />
                    <span className="text-[#231010]/55 font-medium">{insight.readTime}</span>
                  </div>
                  <h3 className="font-display font-light text-[#231010] tracking-[-0.3px] leading-[1.25] group-hover:text-[#D5101F] transition-colors" style={{ fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: 300 }}>
                    {insight.title}
                  </h3>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FAQ — Accordion
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#fbfcff]">
        <div className="max-w-[960px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="text-center space-y-3 mb-12 md:mb-14">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#D5101F] uppercase tracking-[2px]">
              <CheckCircle2 className="size-4" />
              Frequently asked
            </div>
            <h2
              className="font-display font-light text-[#231010] tracking-[-1px] leading-[1.05]"
              style={{ fontSize: "clamp(28px, 3.4vw, 48px)", fontWeight: 300 }}
            >
              Answers to common questions.
            </h2>
          </div>

          <div className="divide-y divide-[#231010]/10 border-y border-[#231010]/10">
            {faqs.map((f, i) => (
              <details key={f.q} className="group" {...(i === 0 ? { open: true } : {})}>
                <summary className="flex items-center justify-between gap-6 py-5 md:py-6 cursor-pointer list-none">
                  <span className="font-display font-light text-[17px] md:text-[19px] text-[#231010] tracking-[-0.2px]" style={{ fontWeight: 300 }}>
                    {f.q}
                  </span>
                  <ChevronDown className="size-5 text-[#D5101F] shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 text-[15px] text-[#231010]/75 leading-[1.7] max-w-[720px]">
                  {f.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D5101F] hover:text-[#A00D17] transition-colors"
            >
              Contact patient support
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SAVINGS CALLOUT — Financial assistance band
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#ffffff]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="bg-gradient-to-br from-[#D5101F] to-[#A00D17] rounded-[28px] p-8 md:p-12 lg:p-16 text-white overflow-hidden relative">
            <div className="absolute -top-16 -right-16 size-64 rounded-full bg-white/5" />
            <div className="absolute -bottom-24 -right-8 size-96 rounded-full bg-white/5" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-[12px] font-semibold tracking-[0.3px]">
                  <HeartHandshake className="size-3.5" />
                  Patient assistance
                </div>
                <h3
                  className="font-display font-light tracking-[-1px] leading-[1.05]"
                  style={{ fontSize: "clamp(28px, 3.4vw, 48px)", fontWeight: 300 }}
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
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#D5101F] hover:bg-[#fbfcff] px-7 py-4 rounded-full text-[14px] font-bold transition-colors w-full lg:w-auto"
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
      <section className="bg-[#ffffff] border-t border-[#231010]/[0.08]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-[1.5px] text-[#D5101F] font-semibold">
                Patients
              </div>
              <h4 className="font-display font-light text-[22px] text-[#231010] tracking-[-0.3px]" style={{ fontWeight: 300 }}>
                Understand your treatment.
              </h4>
              <p className="text-[14px] text-[#231010]/70 leading-[1.6]">
                Patient-friendly explainers for CAMP therapies, donor consent, and what to expect before and after treatment.
              </p>
              <Link href="/patients/education" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D5101F] hover:text-[#A00D17] transition-colors pt-2">
                Patient library <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-[1.5px] text-[#D5101F] font-semibold">
                Clinicians
              </div>
              <h4 className="font-display font-light text-[22px] text-[#231010] tracking-[-0.3px]" style={{ fontWeight: 300 }}>
                Clinical evidence and dosing.
              </h4>
              <p className="text-[14px] text-[#231010]/70 leading-[1.6]">
                Peer-reviewed studies, indication details, and protocol guides for licensed healthcare professionals.
              </p>
              <Link href="/hcp" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D5101F] hover:text-[#A00D17] transition-colors pt-2">
                HCP portal <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="space-y-3">
              <div className="text-[11px] uppercase tracking-[1.5px] text-[#D5101F] font-semibold">
                Donors
              </div>
              <h4 className="font-display font-light text-[22px] text-[#231010] tracking-[-0.3px]" style={{ fontWeight: 300 }}>
                The gift behind every graft.
              </h4>
              <p className="text-[14px] text-[#231010]/70 leading-[1.6]">
                Learn how birth tissue and deceased donor networks make regenerative therapies possible.
              </p>
              <Link href="/company/donation" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#D5101F] hover:text-[#A00D17] transition-colors pt-2">
                Donor resources <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VariantFooter theme="patient" tagline="Care for patients. Tools for clinicians. Respect for every donor." />
      <VariantNav current={3} />
    </main>
  );
}
