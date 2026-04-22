"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

const valueProp = [
  { title: "Facial Rejuvenation", description: "Products that have immediate impact and deliver lasting outcomes." },
  { title: "Non-Surgical Solutions", description: "In-office treatments that reposition tissue and restore volume." },
  { title: "Visible Outcomes", description: "Consistent results that enhance facial contours." }
];

const featuredProduct = {
  name: "Bellafill",
  reg: "\u00AE",
  tagline: "Lasting Collagen Stimulation",
  description: "Bellafill is the only FDA-approved dermal filler to reduce smile lines and stimulates collagen growth long-term to help maintain a youthful appearance. Bellafill works immediately and continues to add volume over time. Bellafill is also FDA approved to treat acne scars for up to one year. Bellafill\u2019s lasting results is setting a new standard in facial aesthetics.",
  href: "/products/bellafill",
  image: "/images/catalog-logos/bellafill.png"
};

const relatedProducts = [
  { title: "Bellafill", reg: "\u00AE", href: "/products/bellafill", description: "Long lasting dermal filler for facial volume restoration and acne scars." },
  { title: "Amplifine", reg: "\u00AE", href: "/products/amplifine", description: "Advanced PRP system for facial rejuvenation." }
];

const clinicalApplications = [
  { title: "Volume Restoration", description: "Restore lost facial volume in cheeks and periorbital areas with materials engineered for natural integration." },
  { title: "Contour Enhancement", description: "Refine facial contours using precision-placed biomaterials that work with natural tissue." },
  { title: "Soft Tissue Support", description: "Provide structural support for facial soft tissues while maintaining natural movement and expression." }
];

export default function FaceSolutions() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ========== HERO ========== */}
      <section className="relative h-[100dvh] md:h-[860px] w-full flex items-end pb-6 md:items-center md:pb-0 justify-center overflow-hidden">
        <Image
          src="/images/figma/aesth-face-3.png"
          alt="Face aesthetics"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-white/10" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.3) 36%, rgba(255,255,255,0.08) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
          style={{ background: "linear-gradient(to top, #fbfcff 0%, rgba(251,252,255,0.9) 28%, rgba(251,252,255,0.46) 58%, rgba(251,252,255,0) 100%)" }}
        />

        <div className="relative z-10 flex items-center justify-center w-full max-w-7xl mx-auto px-6 md:px-14 h-full">
          <div className="w-full max-w-[720px] flex flex-col items-center gap-4 md:gap-6 bg-white/84 backdrop-blur-sm rounded-[16px] p-6 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.10)]">
            {/* Brand badge */}
            <div className="flex items-center gap-2 uppercase text-[#d2a62c]">
              <div className="flex items-start">
                <span className="font-[Neuropa] text-[16px] leading-[24px]">Tiger BioSciences</span>
                <span className="font-[Archivo] font-medium text-[8px] tracking-[-0.4px] leading-[24px]">&trade;</span>
              </div>
              <span className="text-[12px] font-normal tracking-[3px] leading-[16px]">Aesthetics</span>
            </div>

            {/* Title */}
            <h1 className="font-display font-light text-[#231010] text-[clamp(40px,8vw,80px)] text-center tracking-[-1.28px] leading-[1.02] md:leading-[0.9] w-full">
              Face
            </h1>

            {/* Subtitle */}
            <p className="text-[15px] md:text-[16px] font-light text-[#231010]/88 text-center leading-[1.8] max-w-2xl">
              A complete portfolio for natural, long-lasting results.
            </p>
          </div>
        </div>
      </section>

      {/* ========== INTRO — Facial Regeneration, Refined ========== */}
      <TigerSection>
          {/* Value Propositions — flat row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {valueProp.map((item, i) => (
              <motion.div
                key={i}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="text-[15.3px] font-medium tracking-[0.4px] text-[#231010] leading-[24px]">
                  {item.title}
                </h3>
                <p className="text-[12.8px] font-light text-[#231010] leading-[22.75px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
      </TigerSection>

      {/* ========== FEATURED — Discover Bellafill ========== */}
      <TigerSection width="full" bg="white">
        <SectionHeader
          label="Featured Innovation"
          heading={<>Discover Bellafill<sup className="text-[41px]">&reg;</sup></>}
          className="mb-16"
        />

          {/* Product showcase */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
            <div className="absolute pointer-events-none" style={{ width: 900, height: 900, top: "50%", left: "-20%", transform: "translateY(-50%)", background: "radial-gradient(circle, rgba(210,166,44,0.38) 0%, rgba(210,166,44,0.18) 35%, rgba(210,166,44,0.05) 60%, transparent 80%)", filter: "blur(80px)" }} />
            <motion.div
              className="w-full md:w-[537px] h-[280px] md:h-[337px] overflow-hidden relative shrink-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={featuredProduct.image}
                alt="Bellafill"
                fill
                className="object-contain hover:scale-[1.03] transition-transform duration-[0.25s] ease"
                sizes="537px"
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-[21px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display font-light text-[39.6px] text-black tracking-[-0.79px] leading-[45.5px]">
                Bellafill<sup className="text-[25.5px]">&reg;</sup>
              </h3>
              <p className="text-[14.6px] font-normal text-[#231010]/60 leading-[25.6px]">
                {featuredProduct.tagline}
              </p>
              <p className="text-[12.9px] font-normal text-black leading-[22.75px] max-w-[480px]">
                {featuredProduct.description}
              </p>
              <TigerButton href={featuredProduct.href} arrow className="w-fit">View Product</TigerButton>
            </motion.div>
          </div>
      </TigerSection>

      {/* ========== CLINICAL — Facial Applications ========== */}
      <TigerSection width="wide" bg="white">
        <SectionHeader
          heading="Facial Applications"
          className="mb-[72px]"
        />

          {/* Application cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1280px] mb-16">
            {clinicalApplications.map((item, i) => (
              <motion.div
                key={i}
                className="rounded-[12px] px-8 pt-8 pb-11 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="font-display font-light text-[32px] text-black tracking-[-0.22px] leading-[1.05]">
                  {item.title}
                </h3>
                <p className="text-[13px] font-light text-black leading-[22.75px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Large feature image */}
          <div className="relative mx-auto w-full max-w-[1120px] aspect-[1456/816] overflow-hidden">
            <Image
              src="/images/catalog-logos/bellafill.png"
              alt="Facial aesthetics"
              fill
              className="object-contain hover:scale-[1.03] transition-transform duration-[0.25s] ease"
              sizes="100vw"
            />
          </div>
      </TigerSection>

      {/* ========== PRODUCT PORTFOLIO — Explore Facial Solutions ========== */}
      <TigerSection bg="white">
        <SectionHeader
          heading="Explore Facial Solutions"
          className="mb-16"
        />

          {/* Product cards */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center">
            {relatedProducts.map((product, i) => (
              <motion.div
                key={i}
                className="w-[278px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={product.href} className="group block h-full space-y-4 rounded-[12px] border-t border-[#231010]/10 px-2 pt-6">
                  <h3 className="font-display font-light text-[32px] text-black tracking-[-0.22px] leading-[1.05]">
                    {product.title}<sup className="text-[20.6px]">{product.reg}</sup>
                  </h3>
                  <p className="text-[12.6px] font-normal text-black leading-[23.8px]">
                    {product.description}
                  </p>
                  <div className="flex items-center text-[13.1px] font-medium text-[#231010] leading-[20px] transition-transform group-hover:translate-x-1">
                    Learn More
                    <ArrowRightIcon className="ml-2 size-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
      </TigerSection>
    </main>
  );
}
