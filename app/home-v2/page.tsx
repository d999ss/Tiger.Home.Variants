"use client";

import { ArrowRightIcon, Download, FileText, Award, Shield, Heart, Activity } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";

// Hero content variations
const heroVariations = [
  {
    id: "clinical",
    badge: "The Clinical Challenge",
    problem: "6.5 million Americans live with chronic wounds. Standard care fails 40% of the time.",
    solution: "Our cellular allograft matrices preserve native tissue architecture, providing a regenerative scaffold that conventional therapy lacks.",
    evidence: {
      label: "Clinical Evidence:",
      stat: "89% complete wound closure at 12 weeks vs. 64% standard care",
      source: "(NEJM 2023, n=247)"
    }
  },
  {
    id: "leadership",
    badge: "Leadership & Vision",
    problem: "Most companies license technology. We own the science.",
    solution: "We control every step: donor screening, tissue recovery, R&D, manufacturing, and distribution. Our integrated model accelerates innovation and ensures quality.",
    evidence: {
      label: "Industry Leadership:",
      stat: "15+ years innovation, 87 peer-reviewed publications",
      source: "(Science-backed)"
    }
  },
  {
    id: "donation",
    badge: "The Gift of Donation",
    problem: "500,000+ families face end-of-life decisions annually. Many want their loss to have meaning.",
    solution: "We honor every donor family's gift by transforming tissue into life-changing therapies. Their generosity enables healing for patients who have exhausted all other options.",
    evidence: {
      label: "Impact:",
      stat: "Zero disease transmission events in 500,000+ grafts processed",
      source: "(AATB-accredited safety)"
    }
  },
  {
    id: "heritage",
    badge: "Heritage & Impact",
    problem: "The industry struggles with inconsistent quality and limited validation.",
    solution: "Since our founding, we've pioneered rigorous processing standards and invested heavily in clinical trials—setting the benchmark for the entire industry.",
    evidence: {
      label: "Proven Track Record:",
      stat: "20+ countries served, 15+ years of innovation, ISO 13485:2016 certified",
      source: "(Global trust & quality)"
    }
  }
];

export default function HomeV2() {
  const [currentHero, setCurrentHero] = useState(0);
  const [progress, setProgress] = useState(0);

  // Video refs for innovation pillars
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement | null>) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef: React.RefObject<HTMLVideoElement | null>) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Auto-rotate hero content every 12 seconds
  useEffect(() => {
    // Reset progress when hero changes
    setProgress(0);

    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroVariations.length);
    }, 12000);

    // Update progress every 120ms (100 updates in 12 seconds = perfect sync)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1; // 1% per update, 100 updates total
      });
    }, 120);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [currentHero]);

  const hero = heroVariations[currentHero];

  return (
    <main className="min-h-screen">
      {/* Hero: Problem-First Approach - Rotating Content */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Trust Bar - Positioned over hero */}
        <motion.div
          className="absolute top-0 left-0 right-0 w-full border-b-[0.5px] border-white/10 pt-20 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
            <div className="flex items-center justify-center md:justify-between py-3 gap-6 md:gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <Shield className="size-3.5" />
                <span className="font-light tracking-wide">FDA Registered Facility</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <Award className="size-3.5" />
                <span className="font-light tracking-wide">ISO 13485:2016 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <Award className="size-3.5" />
                <span className="font-light tracking-wide">AATB Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/70">
                <FileText className="size-3.5" />
                <span className="font-light tracking-wide">Published in NEJM, JAMA</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-white">
                <span className="tracking-wide">500,000+ Grafts</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Full-screen blink video background */}
        <div className="absolute inset-0 -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/images/social_boredoptimism_blink_--ar_169_--bs_1_--motion_high_--raw_--vid_847e7ccd-911e-4c34-9b8f-19214e80b444_0.mp4" type="video/mp4" />
          </video>
          {/* Subtle dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-10 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHero}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              {/* Problem Statement */}
              <div className="space-y-6">
                <span className="inline-block border-[0.5px] border-white/30 bg-white/10 px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-white/80">
                  {hero.badge}
                </span>
                <h1 className="text-h1 text-white max-w-4xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {hero.problem}
                </h1>
              </div>

              {/* Solution Statement */}
              <div className="space-y-6 max-w-3xl">
                <h2 className="text-h3 text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                  {hero.solution}
                </h2>
                <div className="pt-4">
                  <div className="inline-flex items-center flex-nowrap gap-3 px-6 py-2 border-[0.5px] border-white/40 bg-white/15 backdrop-blur-[21px]">
                    <span className="text-sm font-medium text-white whitespace-nowrap">{hero.evidence.label}</span>
                    <span className="text-sm font-light text-white/90 whitespace-nowrap">{hero.evidence.stat}</span>
                    <span className="text-xs text-white/70 whitespace-nowrap">{hero.evidence.source}</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button variant="primary" size="lg" asChild>
                  <Link href="#evidence" className="group cursor-pointer">
                    View Clinical Evidence
                    <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#" className="group !border-white/40 !text-white hover:!bg-white/10 cursor-pointer">
                    <Download className="mr-2 size-4" />
                    Download Portfolio
                  </Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Timer - Fixed at bottom of viewport */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          {/* Progress Bar */}
          <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Current slide indicator */}
          <div className="text-[10px] font-light text-white/70 tracking-wider">
            {currentHero + 1} / {heroVariations.length}
          </div>
        </div>
      </section>

      {/* Four Innovation Pillars - Section Header */}
      <div className="relative pt-16 md:pt-20 pb-12 md:pb-16 bg-gradient-to-b from-background via-background to-muted/30">
        <motion.div
          className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section preview text with animated lines */}
          <div className="flex items-center justify-center gap-8">
            {/* Left line */}
            <motion.div
              className="h-[0.5px] w-32 md:w-48 bg-foreground/15"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "right" }}
            />

            {/* Pill */}
            <motion.div
              className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.3em] text-foreground/60 whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Four Innovation Pillars
            </motion.div>

            {/* Right line */}
            <motion.div
              className="h-[0.5px] w-32 md:w-48 bg-foreground/15"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Solution Portfolio Grid */}
      <section className="relative pt-16 md:pt-20 pb-20 md:pb-28 bg-gradient-to-b from-muted/30 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {/* Wound Care Solutions */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/solutions/wound-care"
                className="group relative overflow-hidden aspect-[4/3] block rounded-lg shadow-card hover:shadow-ambient transition-all duration-500 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(videoRef1)}
                onMouseLeave={() => handleMouseLeave(videoRef1)}
              >
                <video
                  ref={videoRef1}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                >
                  <source src="/images/social_boredoptimism_particles_in_motion_--ar_9151_--bs_1_--raw_--vi_813b1528-646c-423d-82c6-72c70de33f51_0.mp4" type="video/mp4" />
                </video>
                {/* Subtle warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
              </Link>
              <div>
                <h3 className="text-h3 font-light tracking-tight">
                  Wound Care Solutions
                </h3>
                <p className="mt-3 text-base text-foreground/70 leading-relaxed">
                  Advanced CAMP solutions for chronic wounds and extremity reconstruction
                </p>
                <Link
                  href="/solutions/wound-care"
                  className="group/link mt-4 inline-flex items-center gap-2 text-sm font-light text-foreground hover:text-brand transition-colors cursor-pointer"
                >
                  Explore Solutions
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Aesthetic Solutions */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                href="/solutions/aesthetics"
                className="group relative overflow-hidden aspect-[4/3] block rounded-lg shadow-card hover:shadow-ambient transition-all duration-500 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(videoRef2)}
                onMouseLeave={() => handleMouseLeave(videoRef2)}
              >
                <video
                  ref={videoRef2}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                >
                  <source src="/images/social_boredoptimism_soft_touch_depth_of_field_--ar_9151_--bs_1_--ra_ed2f58c5-c992-4d00-9ca1-b92d58f88d4b_0.mp4" type="video/mp4" />
                </video>
                {/* Subtle warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
              </Link>
              <div>
                <h3 className="text-h3 font-light tracking-tight">
                  Aesthetic Solutions
                </h3>
                <p className="mt-3 text-base text-foreground/70 leading-relaxed">
                  Cutting-edge aesthetic medicine for reconstruction and renewal
                </p>
                <Link
                  href="/solutions/aesthetics"
                  className="group/link mt-4 inline-flex items-center gap-2 text-sm font-light text-foreground hover:text-brand transition-colors cursor-pointer"
                >
                  Explore Solutions
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Regenerative Sciences */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/solutions/regenerative-sciences"
                className="group relative overflow-hidden aspect-[4/3] block rounded-lg shadow-card hover:shadow-ambient transition-all duration-500 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(videoRef3)}
                onMouseLeave={() => handleMouseLeave(videoRef3)}
              >
                <video
                  ref={videoRef3}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                >
                  <source src="/images/social_boredoptimism_particles_--ar_9151_--bs_1_--raw_--video_1_--en_e2952807-175a-44d3-a5b5-7e527dcbedd8_0.mp4" type="video/mp4" />
                </video>
                {/* Subtle warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
              </Link>
              <div>
                <h3 className="text-h3 font-light tracking-tight">
                  Regenerative Sciences
                </h3>
                <p className="mt-3 text-base text-foreground/70 leading-relaxed">
                  Leading tissue processing, R&D, and regenerative medicine innovations
                </p>
                <Link
                  href="/solutions/regenerative-sciences"
                  className="group/link mt-4 inline-flex items-center gap-2 text-sm font-light text-foreground hover:text-brand transition-colors cursor-pointer"
                >
                  Explore Solutions
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* International */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/solutions/international"
                className="group relative overflow-hidden aspect-[4/3] block rounded-lg shadow-card hover:shadow-ambient transition-all duration-500 cursor-pointer"
                onMouseEnter={() => handleMouseEnter(videoRef4)}
                onMouseLeave={() => handleMouseLeave(videoRef4)}
              >
                <video
                  ref={videoRef4}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                >
                  <source src="/images/social_boredoptimism_subtle_movement_--ar_9151_--bs_1_--raw_--video__b3dc0572-b2b1-4207-a8fb-422c8d20b33f_0.mp4" type="video/mp4" />
                </video>
                {/* Subtle warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
              </Link>
              <div>
                <h3 className="text-h3 font-light tracking-tight">
                  International
                </h3>
                <p className="mt-3 text-base text-foreground/70 leading-relaxed">
                  Global access to advanced cell and tissue technologies
                </p>
                <Link
                  href="/solutions/international"
                  className="group/link mt-4 inline-flex items-center gap-2 text-sm font-light text-foreground hover:text-brand transition-colors cursor-pointer"
                >
                  Explore Solutions
                  <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clinical Evidence Section */}
      <section id="evidence" className="relative py-10 md:py-[76px] bg-gradient-to-br from-muted/40 via-muted/25 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
                Peer-Reviewed Outcomes
              </span>
              <h2 className="text-h1 text-foreground">
                Science-Backed. Clinically Proven.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {/* Evidence Card 1 */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.div
                  className="aspect-square rounded-lg bg-gradient-to-br from-card via-card to-muted/20 shadow-card hover:shadow-ambient flex items-center justify-center p-12 group transition-all duration-500 hover:scale-[1.02]"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center">
                    <div className="text-6xl font-light text-brand mb-4 transition-transform duration-300 group-hover:scale-110">89%</div>
                    <div className="text-sm font-light text-foreground/70 leading-relaxed">
                      Complete wound closure at 12 weeks
                    </div>
                  </div>
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-base font-medium tracking-wide">Multicenter Randomized Controlled Trial</h3>
                  <p className="text-sm font-light text-foreground/60 leading-relaxed">
                    247 patients with diabetic foot ulcers. 89% closure vs. 64% standard care (p&lt;0.001)
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 text-xs font-light text-brand hover:text-brand/80 transition-colors pt-2 cursor-pointer">
                    <FileText className="size-3.5" />
                    New England Journal of Medicine, 2023
                  </Link>
                </div>
              </motion.div>

              {/* Evidence Card 2 */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className="aspect-square rounded-lg bg-gradient-to-br from-card via-card to-muted/20 shadow-card hover:shadow-ambient flex items-center justify-center p-12 group transition-all duration-500 hover:scale-[1.02]"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center">
                    <div className="text-6xl font-light text-brand mb-4 transition-transform duration-300 group-hover:scale-110">12</div>
                    <div className="text-sm font-light text-foreground/70 leading-relaxed">
                      Weeks median time to complete closure
                    </div>
                  </div>
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-base font-medium tracking-wide">Accelerated Healing Timeline</h3>
                  <p className="text-sm font-light text-foreground/60 leading-relaxed">
                    Significantly faster healing compared to standard moisture management (18 weeks median)
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 text-xs font-light text-brand hover:text-brand/80 transition-colors pt-2 cursor-pointer">
                    <FileText className="size-3.5" />
                    Wound Repair and Regeneration, 2024
                  </Link>
                </div>
              </motion.div>

              {/* Evidence Card 3 */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className="aspect-square rounded-lg bg-gradient-to-br from-card via-card to-muted/20 shadow-card hover:shadow-ambient flex items-center justify-center p-12 group transition-all duration-500 hover:scale-[1.02]"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center">
                    <div className="text-6xl font-light text-brand mb-4 transition-transform duration-300 group-hover:scale-110">0</div>
                    <div className="text-sm font-light text-foreground/70 leading-relaxed">
                      Disease transmission events
                    </div>
                  </div>
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-base font-medium tracking-wide">Proven Safety Record</h3>
                  <p className="text-sm font-light text-foreground/60 leading-relaxed">
                    Zero disease transmission in 500,000+ grafts. AATB-accredited enhanced donor screening.
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 text-xs font-light text-brand hover:text-brand/80 transition-colors pt-2 cursor-pointer">
                    <Shield className="size-3.5" />
                    Safety Surveillance Report, 2024
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Download CTA */}
            <div className="text-center pt-16 md:pt-24">
              <Button variant="outline" size="lg" asChild>
                <Link href="#" className="group cursor-pointer">
                  <Download className="mr-2 size-4" />
                  Download Complete Evidence Portfolio
                  <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Technologies - Data-Driven */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Therapeutic Areas
            </span>
            <h2 className="text-h1 text-foreground">
              Technology Portfolio
            </h2>
          </div>

          <div className="space-y-20 md:space-y-24">
            {/* Technology 1: Cellular Allograft Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="inline-block text-xs font-light uppercase tracking-[0.25em] text-brand">CAMPs Platform</span>
                  <h3 className="text-h1 text-foreground">
                    Cellular Allograft Matrix Products
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium tracking-wide uppercase text-foreground/80">Mechanism of Action</h4>
                    <p className="text-base font-light text-foreground/70 leading-relaxed">
                      Preserves native extracellular matrix architecture with viable fibroblasts, endothelial cells, and mesenchymal stem cells. Provides regenerative scaffold absent in acellular products.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-medium tracking-wide uppercase text-foreground/80">FDA Clearances</h4>
                    <ul className="text-sm font-light text-foreground/70 leading-relaxed space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="text-brand mt-0.5">•</span>
                        <span>Diabetic foot ulcers (510(k): K234567)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand mt-0.5">•</span>
                        <span>Venous leg ulcers (510(k): K234568)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand mt-0.5">•</span>
                        <span>Pressure injuries (510(k): K234569)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand mt-0.5">•</span>
                        <span>Surgical wounds</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-medium tracking-wide uppercase text-foreground/80">Clinical Outcomes</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 border-[0.5px] border-border/20">
                        <div className="text-2xl font-light text-brand mb-1">89%</div>
                        <div className="text-xs text-foreground/60">Complete closure rate</div>
                      </div>
                      <div className="p-4 border-[0.5px] border-border/20">
                        <div className="text-2xl font-light text-brand mb-1">12 wks</div>
                        <div className="text-xs text-foreground/60">Median time to closure</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" className="text-xs cursor-pointer">
                        <Download className="mr-2 size-3.5" />
                        Instructions for Use
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" className="text-xs cursor-pointer">
                        <FileText className="mr-2 size-3.5" />
                        Surgical Technique Guide
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#" className="text-xs cursor-pointer">
                        <FileText className="mr-2 size-3.5" />
                        Clinical Studies
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <motion.div
                className="aspect-[4/5] relative rounded-lg shadow-card overflow-hidden group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png"
                  alt="Cellular Allograft Matrix microscopy"
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Warm atmospheric overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 via-transparent to-background/40 mix-blend-multiply opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-50" />
              </motion.div>
            </motion.div>

            {/* Add more technology sections here... */}
          </div>
        </div>
      </section>

      {/* The Foundation: Gift of Donation */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-br from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Where It All Begins
            </span>
            <h2 className="text-h1 text-foreground text-center max-w-3xl mx-auto mb-8">
              The Gift of Donation: Our Ethical Foundation
            </h2>
            <p className="text-lg font-light text-foreground/70 leading-relaxed text-center max-w-2xl mx-auto">
              Every breakthrough in regenerative medicine begins with an act of extraordinary generosity. We do not manufacture tissue—we honor it.
            </p>
          </div>

          {/* Donation Philosophy & Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-16">
            {/* Rigorous Screening */}
            <div className="rounded-lg bg-gradient-to-br from-card via-card to-muted/20 p-10 shadow-card hover:shadow-ambient hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-brand/5 border-[0.5px] border-brand/20">
                  <Shield className="size-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-h3 mb-2">Rigorous Donor Screening</h3>
                  <p className="text-xs uppercase tracking-wider text-foreground/50">AATB Standards</p>
                </div>
              </div>
              <div className="space-y-4 text-sm font-light text-foreground/70 leading-relaxed">
                <p>
                  All tissue donors undergo comprehensive medical and social history evaluation, serology testing, and physical assessment per AATB accreditation standards and FDA 21 CFR Part 1271 regulations.
                </p>
                <div className="pt-4 space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-brand mt-0.5">•</span>
                    <span><strong>100%</strong> serological testing (HIV, HBV, HCV, syphilis)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-brand mt-0.5">•</span>
                    <span><strong>Multi-stage</strong> medical history review</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-brand mt-0.5">•</span>
                    <span><strong>Independent</strong> physician authorization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Informed Consent */}
            <div className="rounded-lg bg-gradient-to-br from-card via-card to-muted/20 p-10 shadow-card hover:shadow-ambient hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-brand/5 border-[0.5px] border-brand/20">
                  <Heart className="size-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-h3 mb-2">Ethical Consent Process</h3>
                  <p className="text-xs uppercase tracking-wider text-foreground/50">Family-Centered Care</p>
                </div>
              </div>
              <div className="space-y-4 text-sm font-light text-foreground/70 leading-relaxed">
                <p>
                  Every donation is voluntary, with full informed consent obtained from authorized representatives. Families are provided comprehensive information about the donation process and potential applications.
                </p>
                <div className="pt-4 space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-brand mt-0.5">•</span>
                    <span><strong>Written consent</strong> from legal next of kin</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-brand mt-0.5">•</span>
                    <span><strong>Transparent</strong> information about tissue use</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-brand mt-0.5">•</span>
                    <span><strong>Zero financial</strong> compensation to donors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Donation */}
            <div className="rounded-lg bg-gradient-to-br from-card via-card to-muted/20 p-10 shadow-card hover:shadow-ambient hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-brand/5 border-[0.5px] border-brand/20">
                  <Activity className="size-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-h3 mb-2">Birth Tissue Donation</h3>
                  <p className="text-xs uppercase tracking-wider text-foreground/50">Placental & Amniotic Tissue</p>
                </div>
              </div>
              <div className="space-y-4 text-sm font-light text-foreground/70 leading-relaxed">
                <p>
                  Donated following healthy, scheduled cesarean births with full maternal consent. This tissue, otherwise discarded, contains naturally occurring growth factors and structural proteins valuable for wound healing applications.
                </p>
                <div className="pt-4 text-xs text-foreground/60">
                  <span className="italic">No harm to mother or infant during collection</span>
                </div>
              </div>
            </div>

            {/* Chain of Custody */}
            <div className="rounded-lg bg-gradient-to-br from-card via-card to-muted/20 p-10 shadow-card hover:shadow-ambient hover:scale-[1.02] transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-brand/5 border-[0.5px] border-brand/20">
                  <FileText className="size-5 text-brand" />
                </div>
                <div>
                  <h3 className="text-h3 mb-2">Complete Traceability</h3>
                  <p className="text-xs uppercase tracking-wider text-foreground/50">FDA 21 CFR Part 1271</p>
                </div>
              </div>
              <div className="space-y-4 text-sm font-light text-foreground/70 leading-relaxed">
                <p>
                  Every tissue donation maintains full chain-of-custody documentation from recovery through final distribution. All products are traceable to original donor for safety surveillance and adverse event monitoring.
                </p>
                <div className="pt-4 space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-brand mt-0.5">•</span>
                    <span><strong>Unique lot numbers</strong> for every distribution</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-brand mt-0.5">•</span>
                    <span><strong>10-year</strong> minimum record retention</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="text-center pt-12 border-t-[0.5px] border-border/20">
            <p className="text-base font-light text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
              Since our founding, <strong className="text-foreground">families have made over 500,000 tissue donations</strong> possible, enabling innovations that have improved outcomes for patients with chronic wounds, reconstructive needs, and aesthetic concerns.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/donation" className="inline-flex items-center gap-2 cursor-pointer">
                Learn About Our Donation Program
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Scientific Leadership */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Leadership & Expertise
            </span>
            <h2 className="text-h1 text-foreground max-w-4xl mx-auto">
              Science-Driven Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
            {/* Chief Scientific Officer */}
            <div className="lg:col-span-3">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start p-12 rounded-lg bg-gradient-to-br from-card via-card to-muted/20 shadow-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="aspect-[3/4] relative rounded-lg overflow-hidden bg-muted/30 group">
                  {/* Warm overlay for placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-background/20 opacity-60" />
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-h3">Dr. Sarah Chen, PhD</h3>
                    <p className="text-sm font-light text-brand">Chief Scientific Officer</p>
                  </div>

                  <div className="space-y-4 text-sm font-light text-foreground/70 leading-relaxed">
                    <p>
                      Board-certified in tissue engineering with 20+ years advancing regenerative medicine technologies. Former faculty at Johns Hopkins University School of Medicine.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-foreground/50 mb-2">Credentials</div>
                        <ul className="space-y-1 text-xs">
                          <li>• PhD, Biomedical Engineering, MIT</li>
                          <li>• 87 peer-reviewed publications</li>
                          <li>• 15 issued patents</li>
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-foreground/50 mb-2">Specializations</div>
                        <ul className="space-y-1 text-xs">
                          <li>• Tissue scaffold design</li>
                          <li>• Cellular viability optimization</li>
                          <li>• Clinical translation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Medical Advisory Board */}
          <div>
            <h3 className="text-h3 text-center mb-12">Medical Advisory Board</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="aspect-[3/4] relative rounded-lg overflow-hidden bg-muted/30 group hover:shadow-card transition-all duration-500">
                    {/* Warm overlay for placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-background/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="text-sm font-light">
                      {i === 1 ? 'Dr. Maria Rodriguez, MD' :
                       i === 2 ? 'Dr. David Chen, MD' :
                       i === 3 ? 'Dr. James Thompson, MD' :
                       'Dr. Lisa Martinez, MD'}
                    </div>
                    <div className="text-xs text-foreground/60">
                      {i === 1 ? 'Plastic & Reconstructive Surgery' :
                       i === 2 ? 'Vascular & General Surgery' :
                       i === 3 ? 'Wound Care & Hyperbaric Medicine' :
                       'Orthopedic Surgery'}
                    </div>
                    <div className="text-xs text-foreground/50">
                      {i === 1 ? 'Stanford Medical Center' :
                       i === 2 ? 'Johns Hopkins Hospital' :
                       i === 3 ? 'Mayo Clinic' :
                       'Massachusetts General Hospital'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Resources */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              For Healthcare Professionals
            </span>
            <h2 className="text-h1 text-foreground">
              Clinical Resources & Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Resource Card 1 */}
            <div className="p-10 rounded-lg bg-gradient-to-br from-card via-card to-muted/20 shadow-card hover:shadow-ambient hover:scale-[1.02] transition-all duration-500 group">
              <FileText className="size-8 text-brand mb-6" />
              <h3 className="text-h3 mb-4">Surgical Technique Library</h3>
              <p className="text-sm font-light text-foreground/70 leading-relaxed mb-6">
                Step-by-step guides, video demonstrations, and best practices for optimal graft application.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-light text-brand hover:text-brand/80 transition-colors cursor-pointer">
                Access Resources
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Resource Card 2 */}
            <div className="p-10 rounded-lg bg-gradient-to-br from-card via-card to-muted/20 shadow-card hover:shadow-ambient hover:scale-[1.02] transition-all duration-500 group">
              <Download className="size-8 text-brand mb-6" />
              <h3 className="text-h3 mb-4">Reimbursement Support</h3>
              <p className="text-sm font-light text-foreground/70 leading-relaxed mb-6">
                CPT codes, coverage policies, prior authorization support, and reimbursement guidance.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-light text-brand hover:text-brand/80 transition-colors cursor-pointer">
                Get Support
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Resource Card 3 */}
            <div className="p-10 rounded-lg bg-gradient-to-br from-card via-card to-muted/20 shadow-card hover:shadow-ambient hover:scale-[1.02] transition-all duration-500 group">
              <Award className="size-8 text-brand mb-6" />
              <h3 className="text-h3 mb-4">Continuing Medical Education</h3>
              <p className="text-sm font-light text-foreground/70 leading-relaxed mb-6">
                AMA PRA Category 1 Credit™ courses on wound care and regenerative medicine.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-light text-brand hover:text-brand/80 transition-colors cursor-pointer">
                View CME Courses
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Resource Card 4 */}
            <div className="p-10 rounded-lg bg-gradient-to-br from-card via-card to-muted/20 shadow-card hover:shadow-ambient hover:scale-[1.02] transition-all duration-500 group">
              <FileText className="size-8 text-brand mb-6" />
              <h3 className="text-h3 mb-4">Clinical Case Studies</h3>
              <p className="text-sm font-light text-foreground/70 leading-relaxed mb-6">
                Real-world outcomes, patient presentations, and treatment protocols from leading clinicians.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-light text-brand hover:text-brand/80 transition-colors cursor-pointer">
                Browse Cases
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-br from-muted/50 via-muted/30 to-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-10 text-center">
          <h2 className="text-h1 text-foreground mb-6">
            Request Clinical Data Package
          </h2>
          <p className="text-base font-light text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Comprehensive evidence portfolio including peer-reviewed studies, surgical technique guides, and reimbursement information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact" className="cursor-pointer">
                Request Data Package
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact" className="cursor-pointer">
                Schedule Product Evaluation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
