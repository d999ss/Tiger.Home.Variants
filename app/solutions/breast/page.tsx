"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";

const valueProp = [
  { title: "Natural Form", description: "Biomaterials engineered to restore authentic breast architecture." },
  { title: "Confidence Restored", description: "Solutions designed to deliver predictable results." },
  { title: "Advanced Integration", description: "Technologies that work seamlessly with native tissue." }
];

const featuredProduct = {
  name: "Sientra®",
  tagline: "The Standard in Performance",
  description: "Sientra delivers confidence through precision-engineered breast solutions. Built with advanced materials and backed by clinical validation, it provides natural form and lasting results. Designed for surgeons who prioritize excellence and patients who deserve exceptional outcomes.",
  href: "/products/sientra",
  image: "/images/catalog-logos/sientra.png"
};

const relatedProducts = [
  { title: "alloClae™", href: "/products/alloclae", description: "Structural adipose tissue for breast contouring." },
  { title: "Viality®", href: "/products/viality", description: "Advanced fat transfer system." },
  { title: "Sientra®", href: "/products/sientra", description: "Exclusively for board-certified plastic surgeons." }
];

const clinicalApplications = [
  { title: "Reconstruction", description: "Comprehensive solutions for post-mastectomy reconstruction that restore natural breast form and contour." },
  { title: "Augmentation", description: "Advanced materials for breast augmentation procedures that deliver natural shape." },
  { title: "Non-Surgical Procedures", description: "Innovative technology to deliver targeted volume during an in-office procedure." }
];

export default function BreastSolutions() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[100dvh] md:h-[860px] flex items-end pb-6 md:items-center md:pb-0 justify-center overflow-hidden">
        <Image
          src="/images/figma/aesth-breast1.png"
          alt="Breast solutions"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-white/10" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.66) 0%, rgba(255,255,255,0.34) 38%, rgba(255,255,255,0.12) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
          style={{ background: "linear-gradient(to top, #fbfcff 0%, rgba(251,252,255,0.9) 28%, rgba(251,252,255,0.46) 58%, rgba(251,252,255,0) 100%)" }}
        />
        <div className="relative z-10 container mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-[720px] rounded-[16px] bg-white/84 p-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.10)] backdrop-blur-sm md:p-10">
            <span className="inline-block text-[12px] font-normal uppercase tracking-[3.15px] text-[#d2a62c] mb-6">Tiger BioSciences&trade; Aesthetics</span>
            <h1 className="font-display font-light text-[#231010] text-[clamp(36px,5.5vw,80px)] tracking-[-1.28px] leading-[1.02] md:leading-[0.9] mb-6">Breast</h1>
            <p className="text-[15px] md:text-[16px] font-light text-[#231010]/88 leading-[1.8] max-w-2xl mx-auto">A portfolio designed with purpose, to serve patients&apos; and providers&apos; evolving needs.</p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="relative py-10 md:py-[76px] bg-[#fbfcff]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {valueProp.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="h-full border-t border-[#231010]/10 px-2 pt-6">
                  <h2 className="font-display font-light text-[#231010] text-[28px] leading-[1.08] mb-3">{item.title}</h2>
                  <p className="text-[14.6px] font-light text-[#231010]/64 leading-[26px]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="relative py-10 md:py-[76px] bg-[#fbfcff]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 mb-6 block">Featured Innovation</span>
            <h2 className="font-display font-light text-[#231010]">Discover Sientra</h2>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="absolute pointer-events-none" style={{ width: 900, height: 900, top: "50%", left: "-20%", transform: "translateY(-50%)", background: "radial-gradient(circle, rgba(210,166,44,0.38) 0%, rgba(210,166,44,0.18) 35%, rgba(210,166,44,0.05) 60%, transparent 80%)", filter: "blur(80px)" }} />
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.8 }}>
              <h3 className="font-display font-light text-[#231010] text-3xl md:text-4xl mb-4">{featuredProduct.name}</h3>
              <p className="text-[14.6px] font-light text-[#D2A62C] leading-[26px] mb-6">{featuredProduct.tagline}</p>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px] mb-8">{featuredProduct.description}</p>
              <TigerButton href={featuredProduct.href} arrow>View Product</TigerButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="relative py-10 md:py-[76px] bg-[#fbfcff]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display font-light text-[#231010]">Breast Applications</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {clinicalApplications.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="h-full border-t border-[#231010]/10 px-2 pt-6">
                  <h3 className="font-display font-light text-[#231010] text-[28px] leading-[1.08] mb-3">{item.title}</h3>
                  <p className="text-[14.6px] font-light text-[#231010]/64 leading-[26px]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="relative py-10 md:py-[76px] bg-[#fbfcff]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display font-light text-[#231010]">Explore Breast Solutions</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedProducts.map((product, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link href={product.href} className="group block h-full">
                  <div className="h-full border-t border-[#231010]/10 px-2 pt-6 transition-colors duration-200">
                    <h3 className="font-display font-light text-[#231010] text-xl mb-3 group-hover:text-[#D2A62C] transition-colors">{product.title}</h3>
                    <p className="text-[14.6px] font-light text-[#231010]/60 leading-[26px] mb-4">{product.description}</p>
                    <div className="flex items-center text-[13px] font-normal text-[#D2A62C] transition-transform group-hover:translate-x-1">
                      Learn More
                      <ArrowRightIcon className="ml-2 size-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
