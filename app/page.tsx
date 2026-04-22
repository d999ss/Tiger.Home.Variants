"use client";

import { Award, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";
import { UsersIcon } from "@/components/ui/users";

// Hero content (static — matches Figma "Home Page - Enhancement")
const heroContent = {
  badge: "Clinical Excellence",
  headline: ["The Leader in", "Regenerative", "Medicine"],
  body: "Tiger BioSciences is a leader in regenerative technology focused on the repair and regeneration of human tissue compromised by injury, aging, trauma, or disease. Our innovations empower providers to enhance their patients\u2019 quality of life by supporting wound closure, restoring natural beauty, and renewing confidence.",
  primaryCTA: { label: "View Solutions", href: "/products" },
  secondaryCTA: { label: "Aesthetic Solutions", href: "/solutions/aesthetics" },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _heroVariations = [
  {
    id: "camps-leader",
    badge: "Industry Leadership",
    problem: {
      line1: "The Leader in CAMPs",
      line2: "and Aesthetic Solutions",
      line3: ""
    },
    solution: "Tiger BioSciences develops cellular, acellular, and matrix\u2011like products (CAMPs) along with advanced aesthetic technologies designed to elevate patient outcomes. Our innovations empower providers to enhance their patients\u2019 quality of life by supporting wound closure, restoring natural beauty, and renewing confidence.",
    evidence: {
      label: "",
      stat: "",
      source: ""
    },
    video: "/Tiger Movs/d999ss_httpss.mj.runhbnyQHMVgx8_Focus_--ar_256143_--video_1_-_e0f6ab6b-975b-4637-b5e5-469b401b294a_2.mp4",
    videoPosition: "object-[80%_15%]",
    ctas: {
      primary: { label: "View Solutions", href: "/products" },
      secondary: { label: "Aesthetic Solutions", href: "/solutions/aesthetics" }
    }
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
      stat: "500,000+ grafts processed\u2014an unmatched safety record built on rigorous standards",
      source: "(Industry-leading safety)"
    },
    video: "/Tiger Movs/social_boredoptimism_focus_--ar_9151_--bs_1_--raw_--video_1_--end_lo_0b87775f-6159-47ad-99c3-07c001da82f0_0.mp4",
    ctas: {
      primary: { label: "Tissue Donation", href: "/company/donation" },
      secondary: { label: "Our Company", href: "/company/overview" }
    }
  },
  {
    id: "clinical",
    badge: "Clinical Excellence",
    problem: {
      line1: "Leading with Data,",
      line2: "Delivering with Precision",
      line3: ""
    },
    solution: "We\u2019re redefining what\u2019s possible. Our advanced portfolio delivers optimal clinical outcomes that set new standards across the industry.",
    evidence: {
      label: "",
      stat: "",
      source: ""
    },
    video: "/Tiger Movs/social_boredoptimism_blink_--ar_169_--bs_1_--motion_high_--raw_--vid_847e7ccd-911e-4c34-9b8f-19214e80b444_0.mp4",
    ctas: {
      primary: { label: "View Solutions", href: "/products" },
      secondary: { label: "Research & Development", href: "/science/early-research/camps-tech/research" }
    }
  },
  {
    id: "vision",
    badge: "Our Innovation Drives Outcomes",
    problem: {
      line1: "The future of care.",
      line2: "Closer than you think.",
      line3: "We\u2019re building it today."
    },
    solution: "Tiger BioSciences develops tissue-based solutions that honor the profound gift of tissue donation, uphold the highest standards of clinical rigor, and elevate the standard of care. Our innovations empower providers to improve their patients\u2019 quality of life - supporting wound closure, restoring natural beauty, and renewing confidence.",
    evidence: {
      label: "Vision in Action:",
      stat: "Pioneering next-generation therapies that will redefine standards of care and transform patient outcomes worldwide",
      source: "(Shaping tomorrow)"
    },
    video: "/Tiger Movs/social_boredoptimism_slow_motion_--ar_9151_--video_1_--end_loop_a3145442-cf55-4e83-ba8d-4c1e3ac92bee_0.mp4",
    ctas: {
      primary: { label: "Explore Our Vision", href: "/company/credo" },
      secondary: { label: "Our Innovation", href: "/science/early-research/camps-tech/platforms" }
    }
  },
  {
    id: "leadership",
    badge: "Industry Leadership",
    problem: {
      line1: "Industry Leader,",
      line2: "Every Step",
      line3: "of the Way."
    },
    solution: "End-to-end control. From tissue recovery through FDA clearance to global distribution, we command every element of innovation. This vertical integration powers groundbreaking therapies that others can\u2019t replicate.",
    evidence: {
      label: "Industry Leadership:",
      stat: "15+ years of pioneering innovation, trusted by leading institutions globally",
      source: "(Science-backed)"
    },
    video: "/Tiger Movs/social_boredoptimism_in_motion_--ar_9151_--bs_1_--raw_--video_1_--en_5fe1e84e-7d96-410d-8bf9-ba5154ef3fb6_0.mp4",
    ctas: {
      primary: { label: "Our Leadership", href: "/company/leadership" },
      secondary: { label: "Our Science", href: "/science/early-research/camps-tech" }
    }
  },
  {
    id: "heritage",
    badge: "Global Excellence",
    problem: {
      line1: "The world\u2019s most trusted.",
      line2: "Advanced solutions.",
      line3: "Built on innovation."
    },
    solution: "For over 8 years, we\u2019ve set the gold standard. Our state of the art FDA registered facilities, landmark clinical trials, and unwavering commitment to quality have made us the benchmark others aspire to, serving patients worldwide.",
    evidence: {
      label: "Proven Track Record:",
      stat: "Setting the global standard for regenerative excellence through quality and innovation",
      source: "(Global trust & quality)"
    },
    video: "/Tiger Movs/social_boredoptimism_pan_out_--ar_9151_--bs_1_--raw_--video_1_--end__2991582b-3f9c-47be-b8de-00309dfb21d0_0.mp4",
    ctas: {
      primary: { label: "Our Company", href: "/company/overview" },
      secondary: { label: "View Products", href: "/products" }
    }
  }
];

// Three pillars data
const pillars = [
  {
    icon: Award,
    title: "FDA Approved",
    description: "FDA approvals and regulatory clearances across our portfolio companies, ensuring the highest quality standards."
  },
  {
    icon: Building2,
    title: "Innovation First",
    description: "Pioneering the future of regenerative medicine through cutting-edge research, development, and clinical applications."
  },
  {
    icon: UsersIcon,
    title: "Expert Leadership",
    description: "150+ years of combined executive experience driving innovation in medical technology and tissue processing."
  }
];

// Division data
const divisions = [
  {
    id: "wound-care",
    brandLabel: "Wound Care",
    brandPrefix: "Tiger BioSciences",
    brandColor: "#df512b",
    logo: "/division-logos/tiger_wound_care_logo.png",
    title: "Advanced Wound Care Solutions",
    description: "Tiger Wound Care provides Cellular, Acellular, and Matrix-like Products (CAMPs) tailored for chronic and acute wounds. Innovative research and development drive technologies suitable for all care settings with clinically validated outcomes.",
    companies: ["Tiger Wound Care", "Extremity Care", "Encore Surgical Dressings"],
    href: "/solutions/wound-care",
    image: "/images/tiger-assets/home-ex-care.jpeg",
    imageRight: true
  },
  {
    id: "aesthetics",
    brandLabel: "Aesthetics",
    brandPrefix: "Tiger BioSciences",
    brandColor: "#d2a62c",
    logo: "/division-logos/tiger_aesthetics_logo.webp",
    title: "Shaping the Future of Aesthetics",
    description: "Tiger Aesthetics delivers cutting-edge solutions across reconstructive, cosmetic, and regenerative domains. Each product is designed to meet personalized needs and maximize clinical results with advanced CAMP technologies.",
    companies: ["Tiger Aesthetics Medical"],
    href: "/solutions/aesthetics",
    image: "/images/figma/division-aesthetics.png",
    imageRight: false
  },
  {
    id: "international",
    brandLabel: "International",
    brandPrefix: "Tiger BioSciences",
    brandColor: "#4774aa",
    logo: "/division-logos/tiger_international_logo.png",
    title: "Global Access to Advanced Cell & Tissue Technologies",
    description: "Tiger BioSciences International will broaden global access to our cell and tissue products. Operating from our base in Germany, we will make them available worldwide and build strong international partnerships across borders and healthcare systems.",
    companies: ["Tiger BioSciences International"],
    href: "/solutions/international",
    image: "/images/figma/division-international.png",
    imageRight: true
  }
];

// Donation stat cards
const donationCards = [
  {
    icon: "heart",
    title: "Birth Tissue Recovery",
    description: "BTR is the country\u2019s most experienced human birth tissue bank, leading the nation in developing comprehensive birth tissue and placenta donation programs. FDA registered and AATB accredited, BTR pioneers seamless integration between donors, hospitals, and recovery specialists with exceptional care and precision."
  },
  {
    icon: "network",
    title: "bioCARE",
    description: "bioCARE Donor Network works with trusted tissue bank partners nationwide for comprehensive services in the tissue donation process for deceased donors. As an emerging leader, bioCARE oversees the donor eligibility process through its team of highly trained professionals."
  }
];

export default function HomeAlt() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ========== HERO — full viewport with staggered entrance ========== */}
      <section className="relative h-[100dvh] w-full flex items-end md:items-center pb-6 md:pb-0 overflow-hidden">
        {/* Background image with slow zoom */}
        <Image
          src="/images/tiger-hero-original.png"
          alt="Tiger BioSciences"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[85%_30%] md:object-center"
        />
        {/* Bottom fade to cream — tall, multi-stop for a seamless blend */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
          style={{
            background: "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.85) 25%, rgba(239,237,234,0.4) 55%, rgba(239,237,234,0) 100%)"
          }}
        />
        {/* Top vignette */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/[0.06] to-transparent pointer-events-none" />

        {/* Hero content — staggered entrance */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16 md:pb-0">
          <div className="w-full md:w-[520px] space-y-5 md:space-y-7 bg-[#efedea]/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-[12px] md:rounded-none p-6 md:p-0">
            <span className="inline-block text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/70">
              {heroContent.badge}
            </span>

            <h1 className="font-display font-light text-[#231010] tracking-[-1.28px] leading-[1.02] md:leading-[0.88]" style={{ fontSize: "clamp(32px, 5.5vw, 80px)" }}>
              {heroContent.headline.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>

            <p className="text-[14px] md:text-[16px] font-light text-[#231010]/80 leading-[1.6] md:leading-[1.7] max-w-[460px] hidden md:block">
              {heroContent.body}
            </p>
            <p className="text-[14px] font-light text-[#231010]/80 leading-[1.6] md:hidden">
              Redefining regenerative medicine through innovation in wound care, aesthetics, and tissue science.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <TigerButton href={heroContent.primaryCTA.href} arrow>
                {heroContent.primaryCTA.label}
              </TigerButton>
              <TigerButton href={heroContent.secondaryCTA.href} variant="glass">
                {heroContent.secondaryCTA.label}
              </TigerButton>
            </div>
          </div>
        </div>
      </section>

      {/* ========== THE TIGER WAY ========== */}
      <TigerSection>
          <SectionHeader
            label="The Tiger Way"
            heading="Delivering regenerative medicine solutions worldwide through our comprehensive portfolio for healthcare providers"
            body="Delivering regenerative medicine solutions worldwide through a comprehensive portfolio of advanced wound care products and aesthetic technologies. Our approach combines rigorous science with purposeful innovation, ensuring every product meets the highest standards of safety and clinical performance."
          />

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="text-center space-y-4 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <div className="flex justify-center mb-6">
                  <div
                    className="rounded-full p-[17px] transition-colors duration-300"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(215,212,208,0.6))",
                      boxShadow: "6px 6px 14px rgba(0,0,0,0.08), -6px -6px 14px rgba(255,255,255,0.9), inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.04)",
                      border: "1px solid rgba(255,255,255,0.6)",
                    }}
                  >
                    <pillar.icon className="size-7 text-[#231010]/70 transition-colors duration-300 group-hover:text-[#D5101F]" />
                  </div>
                </div>
                <h3 className="text-[15.3px] font-medium tracking-[0.4px] text-[#231010]">
                  {pillar.title}
                </h3>
                <p className="text-[12.8px] font-light text-[#231010] leading-[22.75px]">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
      </TigerSection>

      {/* ========== OUR DIVISIONS ========== */}
      <TigerSection width="wide" className="pt-24 pb-36 py-0">
          <SectionHeader
            label="Our Divisions"
            heading="A comprehensive portfolio of specialized companies working together to advance medical technology"
          />

          {/* Division Cards */}
          <div className="space-y-[160px]">
            {divisions.map((division) => {
              const isImageRight = division.imageRight;

              return (
                <div
                  key={division.id}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center"
                >
                  {/* Division glow — large warm radial matching Figma */}
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      width: 900,
                      height: 900,
                      top: "50%",
                      left: isImageRight ? "auto" : "-20%",
                      right: isImageRight ? "-20%" : "auto",
                      transform: "translateY(-50%)",
                      background: `radial-gradient(circle, ${division.brandColor}60 0%, ${division.brandColor}30 35%, ${division.brandColor}0C 60%, transparent 80%)`,
                      filter: "blur(80px)",
                    }}
                  />
                  {/* Image Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isImageRight ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`${isImageRight ? "lg:order-2" : "lg:order-1"} flex justify-center`}
                  >
                    <Link
                      href={division.href}
                      className="group relative block w-full max-w-[360px] rounded-[12px] overflow-hidden md:max-w-[400px] lg:max-w-[420px]"
                      style={{ aspectRatio: "4/5", clipPath: "inset(-2px -2px round 12px)" }}
                    >
                      <Image
                        src={division.image}
                        alt={division.title}
                        fill
                        className="object-cover transition-transform duration-[0.25s] ease-[ease] group-hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </Link>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    className={`space-y-6 flex flex-col justify-center ${isImageRight ? "lg:order-1" : "lg:order-2"}`}
                    initial={{ opacity: 0, x: isImageRight ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  >
                    <div className="space-y-[18px] pb-8">
                      {/* Brand label with Neuropa font */}
                      <div className="flex items-center gap-2 uppercase" style={{ color: division.brandColor }}>
                        <span className="font-[Neuropa-Light,Neuropa,Archivo,Inter] text-[16px] leading-[24px]">
                          {division.brandPrefix}
                        </span>
                        <span className="font-[Archivo] font-medium text-[8px] tracking-[-0.4px] leading-[24px]">&trade;</span>
                        <span className="text-[12px] font-normal tracking-[3px] leading-[16px]">
                          {division.brandLabel}
                        </span>
                      </div>

                      {/* Heading */}
                      <h3 className="font-display font-light text-[#231010] tracking-[-1px] leading-[1.02] md:leading-[57.5px]" style={{ fontSize: "clamp(28px, 8vw, 47.5px)" }}>
                        {division.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[14.5px] font-light text-[#231010] leading-[26px]">
                      {division.description}
                    </p>

                    {/* Companies list */}
                    {division.companies.length > 0 && (
                      <div className="space-y-3 pb-4">
                        <h4 className="text-[13.8px] font-medium tracking-[0.35px] uppercase text-[#231010]">Companies</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {division.companies.map((company) => (
                            <div key={company} className="text-[12.9px] font-light text-[#231010] leading-[20px]">
                              &bull; {company}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Learn More */}
                    <TigerButton href={division.href} arrow>
                      Learn More
                    </TigerButton>
                  </motion.div>
                </div>
              );
            })}
          </div>
      </TigerSection>

      {/* ========== PARTNER WITH TIGER BIOSCIENCES ========== */}
      <TigerSection width="narrow">
          <SectionHeader
            label="Join Us"
            heading="Partner with Tiger BioSciences"
            body="Advancing medical technology through innovative cellular, acellular, and matrix-like products (CAMPs). We are the first of its kind in comprehensive tissue processing and medical device innovation."
          />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <TigerButton href="/contact" arrow>Get in Touch</TigerButton>
            <TigerButton href="/products" variant="secondary">Explore Our Products</TigerButton>
          </div>
      </TigerSection>

      {/* ========== THE GIFT OF DONATION ========== */}
      <TigerSection>
          {/* Hero image */}
          <div
            className="relative w-full rounded-[12px] overflow-hidden mb-16"
            style={{ aspectRatio: "16/9", clipPath: "inset(0 0 round 12px)" }}
          >
            <Image
              src="/images/tiger-assets/pregnant-lady.png"
              alt="Expecting mother"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <SectionHeader
            label="Where It All Begins"
            heading="The Gift of Donation"
            body="A network dedicated to advancing tissue donation, recovery, and regenerative care."
          />

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            {donationCards.map((card) => (
              <div key={card.title} className="rounded-[12px] p-10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className="p-[17px] rounded-full shrink-0"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(215,212,208,0.6))",
                      boxShadow: "6px 6px 14px rgba(0,0,0,0.08), -6px -6px 14px rgba(255,255,255,0.9), inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.04)",
                      border: "1px solid rgba(255,255,255,0.6)",
                    }}
                  >
                    {card.icon === "heart" ? (
                      <svg className="size-[27px] text-[#231010]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    ) : (
                      <svg className="size-[27px] text-[#231010]/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="5" r="3" />
                        <line x1="12" y1="8" x2="12" y2="14" />
                        <path d="M6 15a2 2 0 0 0-2 2v1h16v-1a2 2 0 0 0-2-2" />
                        <circle cx="5" cy="19" r="2" />
                        <circle cx="19" cy="19" r="2" />
                        <circle cx="12" cy="19" r="2" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-display font-light text-[#231010] text-[26px] tracking-[-0.26px] leading-[33.8px]">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[12.9px] font-light text-[#231010] leading-[22.75px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <TigerButton href="/company/donation" arrow>
              Learn More About The Gift of Donation
            </TigerButton>
          </div>
      </TigerSection>

      {/* ========== WARM IMAGE DIVIDER ========== */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "4/1", clipPath: "inset(0)" }}>
        <Image
          src="/images/figma/homepage-rectangle-2.png"
          alt="Tiger in snow"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(217deg, rgba(221,216,208,0) 63.1%, rgb(221,216,208) 88.6%)"
          }}
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(49deg, rgba(221,216,208,0) 78.4%, rgb(221,216,208) 88.9%)"
          }}
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            backgroundImage:
              "linear-gradient(4deg, rgba(221,216,208,0) 65.7%, rgb(221,216,208) 93.3%)"
          }}
        />
      </section>
    </main>
  );
}
