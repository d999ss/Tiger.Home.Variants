"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";

const valueProp = [
  { title: "Anatomical Flexibility", description: "Flexible tissue in multiple sizes and thicknesses for use across the entire body" },
  { title: "Versatile Applications", description: "Solutions for complex wounds, surgical incisions and partial and full thickness injuries" },
  { title: "Clinical Partnership", description: "Advanced materials built through collaboration with clinicians" }
];

const featuredProduct = {
  name: "completeFT®",
  tagline: "Full-Thickness Tissue for Complex Wounds",
  description: "completeFT® is a full-thickness placental allograft designed for complex wound applications, providing comprehensive tissue support for challenging clinical cases.",
  href: "/products/completeft",
  image: "/images/catalog-logos/completeft.png"
};

const relatedProducts = [
  { title: "caregraFT™", href: "/products/caregraft", description: "Advanced tissue platform for surgical and chronic wound applications." },
  { title: "HealPACK™", href: "/products/healpack", description: "Comprehensive wound dressing system for post-surgical care." }
];

const clinicalApplications = [
  { title: "Surgical Incisions and Wounds", description: "A portfolio built to improve outcomes in high-risk surgical wounds, where complications are likely." },
  { title: "Partial and Full Thickness Injuries", description: "Versatile technologies for any partial and full thickness injuries. Products intended to address your unique clinical need." },
  { title: "Burns", description: "Solutions for partial and full thickness burns. Providing the power of CAMPs to large and small burns." }
];

export default function AcuteWoundCareSolutions() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[100dvh] md:h-[860px] flex items-end pb-6 md:items-center md:pb-0 justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/acute-wound-care.webp"
            alt="Acute Wound Care"
            fill
            className="object-cover object-center"
            priority
            style={{ clipPath: "inset(-2px -2px round 12px)" }}
          />
          <div className="absolute inset-0 bg-[#231010]/34" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(35,16,16,0.66) 0%, rgba(35,16,16,0.34) 42%, rgba(35,16,16,0.16) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[42%] pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(251,252,255,0.94) 0%, rgba(251,252,255,0.5) 45%, rgba(251,252,255,0) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6 md:px-12">
          <div className="mx-auto max-w-[720px] rounded-[16px] bg-white/84 p-6 text-center shadow-[0_12px_40px_rgba(0,0,0,0.10)] backdrop-blur-sm md:p-10">
            <h1 className="font-display font-light text-[#231010] text-[clamp(36px,5.5vw,68px)] mb-6">Acute Wound Care</h1>
            <p className="text-[15px] md:text-[16px] font-light text-[#231010]/88 leading-[1.8] max-w-2xl mx-auto">
              Delivering the most advanced CAMPs technologies for the treatment of surgical wounds and partial and full thickness injuries.
            </p>
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
                  <h3 className="font-display font-light text-[#231010] text-[28px] leading-[1.08] mb-3">{item.title}</h3>
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
            <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 mb-6 block">Featured Platform</span>
            <h2 className="font-display font-light text-[#231010]">Explore completeFT®</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <h2 className="font-display font-light text-[#231010]">Diverse Product Utility</h2>
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
            <h2 className="font-display font-light text-[#231010]">Explore Anatomical Solutions</h2>
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
