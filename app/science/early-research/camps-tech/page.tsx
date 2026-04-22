"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";

const capabilities = [
  {
    title: "Adipose Tissue Processing",
    description: "Proprietary methods for processing donated adipose tissue into structural allografts that support volume restoration and tissue repair across aesthetic and reconstructive applications."
  },
  {
    title: "Placental Tissue Engineering",
    description: "Advanced processing of donated placental tissues into wound care solutions that leverage the natural regenerative properties of amniotic and chorionic membranes."
  },
  {
    title: "Quality & Compliance",
    description: "Every product is developed under rigorous quality management systems with full lot traceability, regulatory compliance, and comprehensive safety testing."
  }
];

const platforms = [
  {
    title: "Wound Care",
    description: "Cellular and acellular allografts for chronic and acute wound management.",
    href: "/solutions/wound-care",
    color: "#ea580c"
  },
  {
    title: "Aesthetics",
    description: "Structural tissue products for facial, breast, and body applications.",
    href: "/solutions/aesthetics",
    color: "#D2A62C"
  },
  {
    title: "Regenerative Science",
    description: "Next-generation tissue technologies advancing patient care.",
    href: "/science",
    color: "#204ce5"
  }
];

export default function CampsTechPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[100dvh] md:h-[860px] w-full flex items-end pb-6 md:items-center md:pb-0 overflow-hidden">
        <Image
          src="/images/camps-tech-hero.png"
          alt="Tissue Technology"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#efedea]/18 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(239,237,234,0.64) 0%, rgba(239,237,234,0.32) 36%, rgba(239,237,234,0.12) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none"
          style={{
            background: "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.9) 30%, rgba(239,237,234,0.5) 60%, rgba(239,237,234,0) 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16">
          <div className="max-w-[720px] mx-auto bg-[#efedea]/84 backdrop-blur-sm rounded-[16px] p-6 md:p-10 text-center shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
            <span className="inline-block text-[11px] md:text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 mb-4 md:mb-6">Tissue Processing + R&D</span>
            <h1 className="font-display font-light text-[#231010] text-[clamp(32px,5.5vw,64px)] tracking-[-1.28px] leading-[1.02] md:leading-[0.9] mb-4 md:mb-6">CAMPs Technology</h1>
            <p className="text-[15px] md:text-[16px] font-light text-[#231010]/88 leading-[1.8] max-w-2xl mx-auto">Cellular, Acellular, and Matrix-like Products driving the future of regenerative medicine.</p>
          </div>
        </div>
      </section>

      {/* Introduction with Logo */}
      <section className="py-20 md:py-28 bg-[#efedea]">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 md:px-12">
          <div className="flex justify-center mb-12">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36">
              <Image
                src="/division-logos/TigerBiosciences_RegenTX.png"
                alt="Tiger BioSciences RegenTX"
                fill
                sizes="256px"
                quality={100}
                className="object-contain mix-blend-multiply"
              />
            </div>
          </div>
          <div className="text-center space-y-6">
            <p className="text-[16px] md:text-[18px] font-light text-[#231010] leading-[1.7] max-w-3xl mx-auto">
              Tiger BioSciences is a recognized and reputable leader in tissue research, development and processing. We integrate tissue processing with focused R&D to create adipose and placental tissue technologies made possible through the gift of human tissue donation.
            </p>
            <p className="text-[14.6px] font-light text-[#231010]/60 leading-[26px] max-w-3xl mx-auto">
              Through controlled tissue-engineering processes, we transform donated tissues into innovative products that support improved patient care. We maximize the impact of every donation by upholding the highest standards in tissue processing, regulatory compliance, safety, and quality assurance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 md:py-24 bg-[#fbfcff]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 mb-6 block">Our Capabilities</span>
            <h2 className="font-display font-light text-[#231010] text-3xl md:text-4xl">Science-Driven Tissue Processing</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {capabilities.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="bg-[#efedea] rounded-[12px] p-8 h-full">
                  <h3 className="font-display font-light text-[#231010] text-xl mb-3">{item.title}</h3>
                  <p className="text-[14.6px] font-light text-[#231010]/60 leading-[26px]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 md:py-24 bg-[#efedea]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 mb-6 block">Product Platforms</span>
            <h2 className="font-display font-light text-[#231010] text-3xl md:text-4xl">Where Our Science Goes to Work</h2>
            <p className="text-[14.6px] font-light text-[#231010]/60 leading-[26px] max-w-2xl mx-auto mt-6">Our tissue technologies power products across three divisions, each serving distinct clinical needs.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {platforms.map((platform, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link href={platform.href} className="group block h-full">
                  <div className="bg-[#fbfcff] rounded-[12px] p-8 h-full transition-colors duration-200">
                    <div className="size-2 rounded-full mb-6" style={{ backgroundColor: platform.color }} />
                    <h3 className="font-display font-light text-[#231010] text-xl mb-3">{platform.title}</h3>
                    <p className="text-[14.6px] font-light text-[#231010]/60 leading-[26px] mb-4">{platform.description}</p>
                    <div className="flex items-center text-[13px] font-normal text-[#231010] transition-transform group-hover:translate-x-1">
                      Explore <ArrowRightIcon className="ml-2 size-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#fbfcff]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="rounded-[12px] bg-[#efedea] p-6 sm:p-10 md:p-16 lg:p-20 text-center">
            <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 mb-6 block">Advancing Regenerative Medicine</span>
            <h2 className="font-display font-light text-[#231010] text-3xl md:text-4xl mb-6">Learn More About Our Research</h2>
            <p className="text-[14.6px] font-light text-[#231010]/60 leading-[26px] max-w-2xl mx-auto">Discover how our Research & Development team drives innovation in tissue technology.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TigerButton href="/science/early-research/camps-tech/research" arrow>Research & Development</TigerButton>
              <TigerButton href="/products" variant="secondary">View Products</TigerButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
