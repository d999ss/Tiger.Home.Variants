"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

const aestheticCategories = [
  {
    title: "Face",
    description: "Facial aesthetics, a complete portfolio for natural, long-lasting results.",
    href: "/solutions/face",
    image: "/images/figma/aesth-face-4.png"
  },
  {
    title: "Breast",
    description: "A unique portfolio to serve patients' evolving needs.",
    href: "/solutions/breast",
    image: "/images/figma/aesth-breast.png"
  },
  {
    title: "Body",
    description: "Contour, smooth, replace, meaningful results for shaping of the body, cellulite reduction, and volume restoration.",
    href: "/solutions/body",
    image: "/images/figma/aesth-hero.png"
  }
];

const featuredProducts = [
  { title: "Avéli", trademark: "®", href: "/products/aveli", description: "Innovative cellulite treatment delivering precise, predictable results." },
  { title: "Bellafill", trademark: "®", href: "/products/bellafill", description: "Long lasting dermal filler for facial volume restoration and acne scars." },
  { title: "alloClae", trademark: "™", href: "/products/alloclae", description: "Structural adipose tissue for reshaping, refining, and replacing lost volume." },
  { title: "Viality", trademark: "®", href: "/products/viality", description: "Advanced fat transfer system for predictable outcomes." },
  { title: "Amplifine", trademark: "®", href: "/products/amplifine", description: "PRP technology for aesthetic treatments." },
  { title: "Sientra", trademark: "®", href: "/products/sientra", description: "Exclusively for board-certified plastic surgeons." },
  { title: "Breast Tissue Expanders", trademark: "", href: "/products/expanders", description: "Advanced tissue expansion devices for breast reconstruction." }
];

export default function AestheticSolutionsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ========== HERO ========== */}
      <section className="relative h-[100dvh] md:h-[860px] w-full flex items-end pb-6 md:items-center md:pb-0 overflow-hidden">
        <Image
          src="/images/figma/aesth-hero.png"
          alt="Aesthetics hero"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-[#efedea]/18 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(239,237,234,0.62) 0%, rgba(239,237,234,0.3) 38%, rgba(239,237,234,0.1) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none" style={{ background: "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.9) 30%, rgba(239,237,234,0.5) 60%, rgba(239,237,234,0) 100%)" }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14">
          <div className="w-full max-w-[720px] space-y-4 md:space-y-6 bg-[#efedea]/84 backdrop-blur-sm rounded-[16px] p-6 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
            <div className="flex items-center gap-2 uppercase text-[#d2a62c]">
              <span className="font-[Neuropa] text-[16px] leading-[24px]">Tiger BioSciences</span>
              <span className="font-[Archivo] font-medium text-[8px] tracking-[-0.4px]">&trade;</span>
              <span className="text-[12px] font-normal tracking-[3px]">Aesthetics</span>
            </div>
            <h1 className="font-display font-light text-[#231010] text-[clamp(32px,5.5vw,80px)] tracking-[-1.28px] leading-[1.02] md:leading-[0.9]">
              Innovation Across Face, Breast & Body
            </h1>
            <p className="text-[15px] md:text-[16px] font-light text-[#231010]/88 leading-[1.8] max-w-[620px]">
              Tiger BioSciences delivers precision-engineered aesthetic technologies spanning facial rejuvenation, breast aesthetics, and body contouring. From structural adipose tissue to cellulite treatment to long lasting injectables, our portfolio offers head-to-toe solutions and represents the future of regenerative aesthetics.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <TigerButton href="/products?division=aesthetics" arrow>View Products</TigerButton>
              <TigerButton href="#categories" variant="glass">Explore Solutions</TigerButton>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Categories - Face, Breast, Body */}
      <TigerSection id="categories" width="wide">
        <SectionHeader labelColor="text-[#d2a62c]"
          label="Aesthetic Focus Areas"
          heading="Explore by Category"
          body="Discover our comprehensive aesthetic solutions designed for precision outcomes across facial, breast, and body applications."
        />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {aestheticCategories.map((category, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link href={category.href} className="group block h-full">
                  <div className="h-full rounded-[12px] overflow-hidden bg-[#f5f0e8]">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden" style={{ clipPath: "inset(0 0 round 12px 12px 0 0)" }}>
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-[0.25s] ease"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                    </div>
                    {/* Text card below */}
                    <div className="p-8">
                      <h3 className="font-display font-light text-[#231010] text-[32px] tracking-[-0.5px] leading-[1.05] mb-3">{category.title}</h3>
                      <p className="text-[13px] font-light text-[#231010]/60 leading-[22px] mb-4">{category.description}</p>
                      <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#d2a62c] transition-all duration-300 group-hover:translate-x-1">
                        Explore {category.title}
                        <ArrowRightIcon className="size-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
      </TigerSection>

      {/* Featured Innovation Section */}
      <TigerSection width="full">
        <SectionHeader labelColor="text-[#d2a62c]"
          label="Featured Innovation"
          heading="Leading Aesthetic Technologies"
        />

          <div className="space-y-32 md:space-y-40">
            {/* Bellafill - Face */}
            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <motion.div className="w-full lg:w-[537px] h-[280px] lg:h-[337px] overflow-hidden relative shrink-0" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
                <Image src="/images/catalog-logos/bellafill.png" alt="Bellafill" fill className="object-contain hover:scale-[1.03] transition-transform duration-[0.25s] ease" sizes="537px" />
              </motion.div>
              <motion.div className="flex flex-col gap-[21px]" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
                <h3 className="font-display font-light text-[39.6px] text-black tracking-[-0.79px] leading-[45.5px]">Bellafill<sup className="text-[25.5px]">&reg;</sup></h3>
                <p className="text-[14.6px] font-normal text-[#231010]/60 leading-[25.6px]">The Longest-Lasting Dermal Filler</p>
                <p className="text-[12.9px] font-normal text-black leading-[22.75px] max-w-[480px]">Bellafill is the only FDA-approved dermal filler for long-term correction of smile lines and acne scars. With immediate results that continue to improve over time, Bellafill provides lasting volume restoration and wrinkle correction that sets a new standard in facial aesthetics.</p>
                <TigerButton href="/products/bellafill" arrow className="w-fit">View Product</TigerButton>
              </motion.div>
            </div>

            {/* Avéli - Body */}
            <div className="relative flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
              <motion.div className="w-full lg:w-[537px] h-[280px] lg:h-[337px] overflow-hidden relative shrink-0" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
                <Image src="/images/catalog-logos/aveli.png" alt="Aveli" fill className="object-contain hover:scale-[1.03] transition-transform duration-[0.25s] ease" sizes="537px" />
              </motion.div>
              <motion.div className="flex flex-col gap-[21px]" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
                <h3 className="font-display font-light text-[39.6px] text-black tracking-[-0.79px] leading-[45.5px]">Av&eacute;li<sup className="text-[25.5px]">&reg;</sup></h3>
                <p className="text-[14.6px] font-normal text-[#231010]/60 leading-[25.6px]">Precision Cellulite Treatment</p>
                <p className="text-[12.9px] font-normal text-black leading-[22.75px] max-w-[480px]">Av&eacute;li is the only FDA-cleared, minimally invasive procedure clinically proven to treat cellulite in a single treatment. Using a unique, handheld device, Av&eacute;li precisely targets and releases the fibrous bands pulling down on the skin to create the dimpled appearance of cellulite, delivering immediately visible, lasting results.</p>
                <TigerButton href="/products/aveli" arrow className="w-fit">View Product</TigerButton>
              </motion.div>
            </div>

            {/* Sientra - Breast */}
            <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <motion.div className="w-full lg:w-[537px] h-[280px] lg:h-[337px] overflow-hidden relative shrink-0" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
                <Image src="/images/catalog-logos/sientra.png" alt="Sientra" fill className="object-contain hover:scale-[1.03] transition-transform duration-[0.25s] ease" sizes="537px" />
              </motion.div>
              <motion.div className="flex flex-col gap-[21px]" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
                <h3 className="font-display font-light text-[39.6px] text-black tracking-[-0.79px] leading-[45.5px]">Sientra<sup className="text-[25.5px]">&reg;</sup></h3>
                <p className="text-[14.6px] font-normal text-[#231010]/60 leading-[25.6px]">The Standard in Performance</p>
                <p className="text-[12.9px] font-normal text-black leading-[22.75px] max-w-[480px]">Sientra delivers the most comprehensive portfolio of round breast implants in the U.S. market. Engineered with proprietary High-Strength Cohesive Silicone Gel and an innovative safety profile, Sientra implants provide natural aesthetics with exceptional long-term performance and patient satisfaction.</p>
                <TigerButton href="/products/sientra" arrow className="w-fit">View Product</TigerButton>
              </motion.div>
            </div>

          </div>
      </TigerSection>

      {/* Featured Products Section */}
      <TigerSection>
        <SectionHeader labelColor="text-[#d2a62c]"
          heading="Proven Aesthetic Technologies"
          body="Advanced solutions delivering clinical impact across cellulite treatment, dermal fillers, and breast aesthetics."
        />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link href={product.href} className="group block rounded-[12px] p-8 space-y-4 h-full">
                  <h3 className="font-display font-light text-[32px] text-black tracking-[-0.22px] leading-[1.05] group-hover:text-[#535457] transition-colors">
                    {product.title}<sup className="text-[20.6px]">{product.trademark}</sup>
                  </h3>
                  <p className="text-[12.6px] font-normal text-black leading-[23.8px]">{product.description}</p>
                  <div className="flex items-center text-[13.1px] font-medium text-[#231010] leading-[20px] transition-transform group-hover:translate-x-1">
                    Learn More <ArrowRightIcon className="ml-2 size-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <TigerButton href="/products?division=aesthetics" variant="secondary" arrow>View All Products</TigerButton>
          </div>
      </TigerSection>

      {/* Final CTA */}
      <TigerSection width="narrow">
          <div className="text-center">
            <h2 className="font-display font-light text-[#231010] tracking-[-1px] leading-[1.02] mb-8" style={{ fontSize: "clamp(36px, 3.3vw, 47.5px)" }}>
              Advanced Solutions for Modern Aesthetic Practices
            </h2>
            <p className="text-[14.6px] font-light text-[#231010] leading-[26px] mb-10 max-w-[672px] mx-auto">
              Connect with our team to learn how our aesthetic technologies can enhance practice performance and patient satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <TigerButton href="/products?division=aesthetics" arrow>View Products</TigerButton>
              <TigerButton href="/contact" variant="secondary">Contact Our Team</TigerButton>
            </div>
          </div>
      </TigerSection>
    </main>
  );
}
