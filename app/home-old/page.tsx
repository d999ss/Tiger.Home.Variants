"use client";

import { ArrowRightIcon, Building2, Award, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import HeroTitle from "@/components/site/HeroTitle";
import { ActivityIcon } from "@/components/ui/activity";
import { UsersIcon } from "@/components/ui/users";

// Hero content variations
const heroVariations = [
  {
    id: "camps-leader",
    badge: "Industry Leadership",
    problem: {
      line1: "The Leader in CAMPs",
      line2: "and Aesthetic Solutions",
      line3: ""
    },
    solution: "Tiger BioSciences develops cellular, acellular, and matrix‑like products (CAMPs) along with advanced aesthetic technologies designed to elevate patient outcomes. Our innovations empower providers to enhance their patients' quality of life by supporting wound closure, restoring natural beauty, and renewing confidence.",
    evidence: {
      label: "",
      stat: "",
      source: ""
    },
    video: "/Tiger Movs/d999ss_httpss.mj.runhbnyQHMVgx8_Focus_--ar_256143_--video_1_-_e0f6ab6b-975b-4637-b5e5-469b401b294a_2.mp4"
  },
  {
    id: "donation",
    badge: "Life-Changing Impact",
    problem: {
      line1: "Each gift of donation",
      line2: "transforms lives.",
      line3: ""
    },
    solution: "We honor that extraordinary gift by transforming tissue into solutions that restore lives. Every donation gives hope to a patient in need.",
    evidence: {
      label: "Impact:",
      stat: "500,000+ grafts processed—an unmatched safety record built on rigorous standards",
      source: "(Industry-leading safety)"
    },
    video: "/Tiger Movs/d999ss_httpss.mj.runagah9ppoECQ_Extreme_macro_close-up_of_a_b_44a5a0fd-98a9-4ec6-9138-7e7d5542dd9f_0.mp4"
  },
  {
    id: "clinical",
    badge: "Clinical Excellence",
    problem: {
      line1: "Leading with Data,",
      line2: "Delivering with Precision",
      line3: ""
    },
    solution: "We're redefining what's possible. Our advanced portfolio delivers optimal clinical outcomes that set new standards across the industry.",
    evidence: {
      label: "",
      stat: "",
      source: ""
    },
    video: "/Tiger Movs/d999ss_focus_--ar_9151_--video_1_--end_loop_ea299189-79f6-4ce9-8619-88ca4a1a4973_2.mp4"
  },
  {
    id: "vision",
    badge: "Our Innovation Drives Outcomes",
    problem: {
      line1: "The future of care.",
      line2: "Closer than you think.",
      line3: "We're building it today."
    },
    solution: "Tiger BioSciences develops tissue-based solutions that honor the profound gift of tissue donation, uphold the highest standards of clinical rigor, and elevate the standard of care. Our innovations empower providers to improve their patients' quality of life - supporting wound closure, restoring natural beauty, and renewing confidence.",
    evidence: {
      label: "Vision in Action:",
      stat: "Pioneering next-generation therapies that will redefine standards of care and transform patient outcomes worldwide",
      source: "(Shaping tomorrow)"
    },
    video: "/Tiger Movs/d999ss_httpss.mj.run-8RHq-Rurcs_--ar_256143_--video_1_--end_l_87d19acf-6bb6-4aaa-8d88-805a63a49c76_1.mp4"
  },
  {
    id: "heritage",
    badge: "Global Excellence",
    problem: {
      line1: "The world's most trusted.",
      line2: "Advanced solutions.",
      line3: "Built on innovation."
    },
    solution: "For over 8 years, we've set the gold standard. Our state of the art FDA registered facilities, landmark clinical trials, and unwavering commitment to quality have made us the benchmark others aspire to, serving patients worldwide.",
    evidence: {
      label: "Proven Track Record:",
      stat: "Setting the global standard for regenerative excellence through quality and innovation",
      source: "(Global trust & quality)"
    },
    video: "/Tiger Movs/d999ss_httpss.mj.runrDk15zRljKo_Extreme_macro_close-up_of_a_b_c8e3287c-3d6e-4b32-a5ad-209efefde029_2.mp4"
  }
];

export default function HomeAlt() {
  const [currentHero, setCurrentHero] = useState(0);
  const [progress, setProgress] = useState(0);

  // Video refs for division cards
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);

  // Preload all hero videos in the background
  useEffect(() => {
    heroVariations.forEach((variation) => {
      const video = document.createElement('video');
      video.preload = 'auto';
      video.src = variation.video;
      video.load();
    });
  }, []);

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

  // Arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentHero((prev) => (prev - 1 + heroVariations.length) % heroVariations.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentHero((prev) => (prev + 1) % heroVariations.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Hash link navigation for carousel slides
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const slideIndex = heroVariations.findIndex((v) => v.id === hash);
      if (slideIndex !== -1) {
        setCurrentHero(slideIndex);
      }
    }
  }, []);

  // Auto-rotate hero content every 24 seconds
  useEffect(() => {
    // Reset progress when hero changes
    setProgress(0);

    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroVariations.length);
    }, 24000);

    // Update progress every 240ms (100 updates in 24 seconds = perfect sync)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1; // 1% per update, 100 updates total
      });
    }, 240);

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
        {/* Black background layer */}
        <div className="absolute inset-0 -z-10 bg-black" />

        {/* Full-screen video background - changes with hero content */}
        <AnimatePresence initial={false}>
          <motion.div
            key={`video-${currentHero}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 -z-10"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={hero.video} type="video/mp4" />
            </video>
            {/* Gradient overlay - darkest behind text area, fades across image */}
            {/* Mobile: Softer overall overlay */}
            <div className="absolute inset-0 bg-black/50 md:bg-transparent" />
            {/* Desktop: Subtle vignette concentrated on text area */}
            <div className="absolute inset-0 hidden md:block bg-[radial-gradient(ellipse_80%_100%_at_0%_50%,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0.3)_40%,_transparent_70%)]" />
            {/* Warm amber wash across entire image */}
            <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
          </motion.div>
        </AnimatePresence>

        <div className="container relative z-10 mx-auto flex max-w-7xl px-4 sm:px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHero}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`relative w-full max-w-[36rem] space-y-6 ${hero.id === 'vision' ? 'p-8 md:p-10' : ''}`}
            >
              {/* Vision hero black gradient background */}
              {hero.id === 'vision' && (
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/70 rounded-sm -z-10" />
              )}

              {/* Problem Statement */}
              <div className="space-y-6">
                <span className="inline-block border border-white/30 bg-white/10 px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-white/80">
                  {hero.badge}
                </span>
                <HeroTitle
                  line1={hero.problem.line1}
                  line2={hero.problem.line2}
                  line3={hero.problem.line3}
                  className="text-white"
                />
              </div>

              {/* Solution Statement */}
              <div className="space-y-4">
                <h2 className="text-lead text-white/95">
                  {hero.solution}
                </h2>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                {hero.id === 'camps-leader' && (
                  <>
                    <Button variant="primary" size="md" asChild className="sm:shrink-0">
                      <Link href="/products" className="group cursor-pointer">
                        View Solutions
                        <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="md" asChild className="sm:shrink-0 !border-white/40 !text-white hover:!bg-white/10 active:translate-y-[1px]">
                      <Link href="/solutions/aesthetics" className="cursor-pointer">
                        Aesthetic Solutions
                      </Link>
                    </Button>
                  </>
                )}
                {hero.id === 'clinical' && (
                  <>
                    <Button variant="primary" size="md" asChild className="sm:shrink-0">
                      <Link href="/products" className="group cursor-pointer">
                        View Solutions
                        <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="md" asChild className="sm:shrink-0 !border-white/40 !text-white hover:!bg-white/10 active:translate-y-[1px]">
                      <Link href="/science/early-research/camps-tech/research" className="cursor-pointer">
                        Research & Development
                      </Link>
                    </Button>
                  </>
                )}
                {hero.id === 'donation' && (
                  <>
                    <Button variant="primary" size="md" asChild className="sm:shrink-0">
                      <Link href="/company/donation" className="group cursor-pointer">
                        Tissue Donation
                        <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="md" asChild className="sm:shrink-0 !border-white/40 !text-white hover:!bg-white/10 active:translate-y-[1px]">
                      <Link href="/company/overview" className="cursor-pointer">
                        Our Company
                      </Link>
                    </Button>
                  </>
                )}
                {hero.id === 'heritage' && (
                  <>
                    <Button variant="primary" size="md" asChild className="sm:shrink-0">
                      <Link href="/company/overview" className="group cursor-pointer">
                        Our Company
                        <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="md" asChild className="sm:shrink-0 !border-white/40 !text-white hover:!bg-white/10 active:translate-y-[1px]">
                      <Link href="/products" className="cursor-pointer">
                        View Products
                      </Link>
                    </Button>
                  </>
                )}
                {hero.id === 'vision' && (
                  <>
                    <Button variant="primary" size="md" asChild className="sm:shrink-0">
                      <Link href="/company/credo" className="group cursor-pointer">
                        Explore Our Vision
                        <ArrowRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="md" asChild className="sm:shrink-0 !border-white/40 !text-white hover:!bg-white/10 active:translate-y-[1px]">
                      <Link href="/science/early-research/camps-tech/platforms" className="cursor-pointer">
                        Our Innovation
                      </Link>
                    </Button>
                  </>
                )}
              </div>

              {/* Evidence Claim */}
              <div className="pt-4">
                <div className="inline-block text-sm font-light text-white/90">
                  {hero.evidence.stat}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls - Fixed at bottom of viewport */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 sm:px-6 md:px-12 z-20">
          <div className="flex items-center justify-between gap-4">
            {/* Previous Arrow */}
            <button
              onClick={() => setCurrentHero((prev) => (prev - 1 + heroVariations.length) % heroVariations.length)}
              className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-[21px] border border-white/20 transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-[-2px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Center: Progress & Dots */}
            <div className="flex flex-col items-center gap-3">
              {/* Progress Bar */}
              <div className="w-32 sm:w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Dot Indicators */}
              <div className="flex items-center gap-2">
                {heroVariations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHero(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentHero
                        ? 'w-2 h-2 bg-white'
                        : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Next Arrow */}
            <button
              onClick={() => setCurrentHero((prev) => (prev + 1) % heroVariations.length)}
              className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-[21px] border border-white/20 transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-[2px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* The Tiger Way Section */}
      <section className="relative py-12 md:py-24 lg:py-36 bg-gradient-to-br from-muted/40 via-muted/25 to-background">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="inline-block border border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-8">
              The Tiger Way
            </span>
            <h2 className="text-h1 text-foreground max-w-3xl mx-auto mb-8">
              Delivering regenerative medicine solutions worldwide through our comprehensive portfolio for healthcare providers
            </h2>
            <p className="text-base font-light text-foreground/60 max-w-3xl mx-auto leading-relaxed">
              Tiger BioSciences is redefining regenerative medicine through its expertise in cellular, acellular, and matrix-like products that advance wound care, aesthetics and science. With a fully integrated model encompassing donor screening, tissue collection, research and development, manufacturing, and distribution, Tiger BioSciences maintains absolute control over quality and innovation, delivering a level of assurance and excellence that instills lasting confidence in both clinicians and patients.
            </p>
          </div>

          {/* Three Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {/* FDA Approved */}
            <motion.div
              className="text-center space-y-4 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-brand/5 border-[0.5px] border-brand/20 rounded-full transition-all duration-300 group-hover:bg-brand/10 group-hover:scale-110 group-hover:shadow-lg">
                  <Award className="size-7 text-brand transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              <h3 className="text-base font-medium tracking-wide">FDA Approved</h3>
              <p className="text-sm font-light text-foreground/60 leading-relaxed">
                FDA approvals and regulatory clearances across our portfolio companies, ensuring the highest quality standards.
              </p>
            </motion.div>

            {/* Innovation First */}
            <motion.div
              className="text-center space-y-4 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-brand/5 border-[0.5px] border-brand/20 rounded-full transition-all duration-300 group-hover:bg-brand/10 group-hover:scale-110 group-hover:shadow-lg">
                  <Building2 className="size-7 text-brand transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              <h3 className="text-base font-medium tracking-wide">Innovation First</h3>
              <p className="text-sm font-light text-foreground/60 leading-relaxed">
                Pioneering the future of regenerative medicine through cutting-edge research, development, and clinical applications.
              </p>
            </motion.div>

            {/* Expert Leadership */}
            <motion.div
              className="text-center space-y-4 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-brand/5 border-[0.5px] border-brand/20 rounded-full transition-all duration-300 group-hover:bg-brand/10 group-hover:scale-110 group-hover:shadow-lg">
                  <UsersIcon size={28} className="text-brand transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
              <h3 className="text-base font-medium tracking-wide">Expert Leadership</h3>
              <p className="text-sm font-light text-foreground/60 leading-relaxed">
                150+ years of combined executive experience driving innovation in medical technology and tissue processing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Gift of Donation Section */}
      <section className="relative py-12 md:py-24 lg:py-36 bg-gradient-to-br from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-block border border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Where It All Begins
            </span>
            <h2 className="text-h1 text-foreground max-w-xl mb-6">
              The Gift of Donation
            </h2>
            <p className="text-xl font-light text-foreground/80 leading-relaxed max-w-3xl">
              A network dedicated to advancing tissue donation, recovery, and regenerative care.
            </p>
          </div>

          {/* Partner Organizations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Birth Tissue Recovery */}
            <motion.div
              className="rounded-lg bg-gradient-to-br from-card via-card to-muted/20 p-10 shadow-card hover:shadow-ambient hover:scale-[1.02] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand/5 border-[0.5px] border-brand/20">
                  <ActivityIcon className="size-5 text-brand" />
                </div>
                <h3 className="text-h3 leading-none !mb-0">Birth Tissue Recovery</h3>
              </div>
              <p className="text-sm font-light text-foreground/60 leading-relaxed">
                BTR is the country&apos;s most experienced human birth tissue bank, leading the nation in developing comprehensive birth tissue and placenta donation programs. FDA registered and AATB accredited, BTR pioneers seamless integration between donors, hospitals, and recovery specialists with exceptional care and precision.
              </p>
            </motion.div>

            {/* bioCARE */}
            <motion.div
              className="rounded-lg bg-gradient-to-br from-card via-card to-muted/20 p-10 shadow-card hover:shadow-ambient hover:scale-[1.02] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand/5 border-[0.5px] border-brand/20">
                  <Shield className="size-5 text-brand" />
                </div>
                <h3 className="text-h3 leading-none !mb-0">bioCARE</h3>
              </div>
              <p className="text-sm font-light text-foreground/60 leading-relaxed">
                bioCARE Donor Network works with trusted tissue bank partners nationwide for comprehensive services in the tissue donation process for deceased donors. As an emerging leader, bioCARE oversees the donor eligibility process through its team of highly trained professionals.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button variant="outline" size="md" asChild>
              <Link href="/company/donation" className="inline-flex items-center gap-2 ">
                Learn More About The Gift of Donation
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Divisions Section */}
      <section className="relative py-12 md:py-24 lg:py-36 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Our Divisions
            </span>
            <h2 className="text-h1 text-foreground max-w-4xl mx-auto">
              A comprehensive portfolio of specialized companies working together to advance medical technology
            </h2>
          </div>

          <div className="space-y-16 md:space-y-32 lg:space-y-40">
            {/* Division 1: Tiger Wound Care */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:order-2"
              >
                <Link
                  href="/solutions/wound-care"
                  className="group relative overflow-hidden aspect-[3/4] block rounded-lg shadow-card hover:shadow-ambient transition-all duration-500"
                  onMouseEnter={() => handleMouseEnter(videoRef2)}
                  onMouseLeave={() => handleMouseLeave(videoRef2)}
                >
                  <video
                    ref={videoRef2}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  >
                    <source src="/images/social_boredoptimism_particles_in_motion_--ar_9151_--bs_1_--raw_--vi_813b1528-646c-423d-82c6-72c70de33f51_0.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
                </Link>
              </motion.div>

              <motion.div
                className="space-y-6 lg:order-1 flex flex-col justify-center"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <div className="space-y-4">
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src="/division-logos/tiger_wound_care_logo.png"
                      alt="Tiger Wound Care"
                      fill
                      sizes="256px"
                      quality={100}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="inline-block text-xs font-light uppercase tracking-[0.25em] text-brand">Tiger Wound Care</span>
                  <h3 className="text-h1 text-foreground">
                    Advanced Wound Care Solutions
                  </h3>
                </div>

                <p className="text-base font-light text-foreground/60 leading-relaxed">
                  Tiger Wound Care provides Cellular, Acellular, and Matrix-like Products (CAMPs) tailored for chronic and acute wounds. Innovative research and development drive technologies suitable for all care settings with clinically validated outcomes.
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-medium tracking-wide uppercase text-foreground/80">Companies</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-sm font-light text-foreground/60">• Tiger Wound Care</div>
                    <div className="text-sm font-light text-foreground/60">• Extremity Care</div>
                    <div className="text-sm font-light text-foreground/60">• Encore Surgical Dressings</div>
                  </div>
                </div>

                <Link
                  href="/solutions/wound-care"
                  className="group/link inline-flex items-center gap-2 text-sm font-light text-brand hover:text-brand/80 transition-colors pt-4"
                >
                  Learn More
                  <ArrowRightIcon className="size-4 transition-transform duration-500 group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Division 3: Tiger Aesthetics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/solutions/aesthetics"
                  className="group relative overflow-hidden aspect-[3/4] block rounded-lg shadow-card hover:shadow-ambient transition-all duration-500"
                  onMouseEnter={() => handleMouseEnter(videoRef3)}
                  onMouseLeave={() => handleMouseLeave(videoRef3)}
                >
                  <video
                    ref={videoRef3}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  >
                    <source src="/images/social_boredoptimism_beauty.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
                </Link>
              </motion.div>

              <motion.div
                className="space-y-6 flex flex-col justify-center"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <div className="space-y-4">
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src="/division-logos/tiger_aesthetics_logo.webp"
                      alt="Tiger Aesthetics"
                      fill
                      sizes="256px"
                      quality={100}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="inline-block text-xs font-light uppercase tracking-[0.25em] text-brand">Tiger Aesthetics</span>
                  <h3 className="text-h1 text-foreground">
                    Shaping the Future of Aesthetics
                  </h3>
                </div>

                <p className="text-base font-light text-foreground/60 leading-relaxed">
                  Tiger Aesthetics delivers cutting-edge solutions across reconstructive, cosmetic, and regenerative domains. Each product is designed to meet personalized needs and maximize clinical results with advanced CAMP technologies.
                </p>

                <Link
                  href="/solutions/aesthetics"
                  className="group/link inline-flex items-center gap-2 text-sm font-light text-brand hover:text-brand/80 transition-colors pt-4"
                >
                  Learn More
                  <ArrowRightIcon className="size-4 transition-transform duration-500 group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Division 4: Tiger BioSciences International */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:order-2"
              >
                <Link
                  href="/solutions/international"
                  className="group relative overflow-hidden aspect-[3/4] block rounded-lg shadow-card hover:shadow-ambient transition-all duration-500"
                  onMouseEnter={() => handleMouseEnter(videoRef4)}
                  onMouseLeave={() => handleMouseLeave(videoRef4)}
                >
                  <video
                    ref={videoRef4}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  >
                    <source src="/images/social_boredoptimism_subtle_movement_--ar_9151_--bs_1_--raw_--video__b3dc0572-b2b1-4207-a8fb-422c8d20b33f_0.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
                </Link>
              </motion.div>

              <motion.div
                className="space-y-6 lg:order-1 flex flex-col justify-center"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                <div className="space-y-4">
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src="/division-logos/tiger_international_logo.png"
                      alt="Tiger BioSciences International"
                      fill
                      sizes="256px"
                      quality={100}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="inline-block text-xs font-light uppercase tracking-[0.25em] text-brand">Tiger BioSciences International</span>
                  <h3 className="text-h1 text-foreground">
                    Global Access to Advanced Cell & Tissue Technologies
                  </h3>
                </div>

                <p className="text-base font-light text-foreground/60 leading-relaxed">
                  Tiger BioSciences International will broaden global access to our cell and tissue products. Operating from our base in Germany, we will make them available worldwide and build strong international partnerships across borders and healthcare systems.
                </p>

                {/* <div className="space-y-3">
                  <h4 className="text-sm font-medium tracking-wide uppercase text-foreground/80">Companies</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-sm font-light text-foreground/60">• Lizard Health</div>
                  </div>
                </div> */}

                <Link
                  href="/solutions/international"
                  className="group/link inline-flex items-center gap-2 text-sm font-light text-brand hover:text-brand/80 transition-colors pt-4"
                >
                  Learn More
                  <ArrowRightIcon className="size-4 transition-transform duration-500 group-hover/link:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-24 lg:py-36 bg-gradient-to-br from-muted/50 via-muted/30 to-background">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-12 text-center">
          <h2 className="text-h1 text-foreground mb-6">
            Partner with Tiger BioSciences
          </h2>
          <p className="text-base font-light text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Advancing medical technology through innovative cellular, acellular, and matrix-like products (CAMPs). We are the first of its kind in comprehensive tissue processing and medical device innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="md" asChild>
              <Link href="/contact" className="">
                Get in Touch
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
            <Button variant="outline" size="md" asChild>
              <Link href="/products" className="">
                Explore Our Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
