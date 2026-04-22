"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

const campsPlatforms = [
  {
    title: "Dual Layer Allografts",
    description:
      "Thin and flexible, composed of two amnion layers, rich in collagen¹.",
    features: [
      "Two amnion layers",
      "High collagen content",
      "Flexible design",
    ],
  },
  {
    title: "Full Thickness Allografts",
    description:
      "Full-thickness allograft incorporating amnion, intermediate layer, and chorion—provides increased structural support and retention of collagen, ECM content, and essential proteins¹.",
    features: [
      "Three distinct layers",
      "Enhanced structural support",
      "Rich ECM content",
    ],
  },
  {
    title: "Amnion-Chorion-Amnion Allografts",
    description:
      "Enhanced four-layer design featuring amnion, intermediate layer, and chorion with an additional amnion layer. Retains a naturally rich ECM composition with high levels of collagen and essential proteins¹.",
    features: [
      "Four-layer design",
      "Up to 6x thicker than Dual Layer",
      "2x collagen content",
      "Retention of key essential proteins",
    ],
  },
];

export default function PlatformsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#efedea]">
      <section className="relative flex min-h-[100dvh] w-full items-end overflow-hidden pb-6 md:h-[860px] md:items-center md:pb-0">
        <Image
          src="/images/camps-platforms-hero.png"
          alt="CAMPs technology"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#efedea]/18" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(239,237,234,0.66) 0%, rgba(239,237,234,0.34) 36%, rgba(239,237,234,0.12) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-[48%]"
          style={{
            background:
              "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.84) 36%, rgba(239,237,234,0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-14">
          <div className="w-full max-w-[720px] space-y-4 rounded-[16px] bg-[#efedea]/84 p-6 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.14)] md:space-y-6 md:p-10">
            <div className="flex items-center gap-2 uppercase text-[#8C1D18]">
              <span className="font-[Neuropa] text-[16px] leading-[24px]">
                Tiger BioSciences
              </span>
              <span className="font-[Archivo] text-[8px] font-medium tracking-[-0.4px]">
                &trade;
              </span>
              <span className="text-[12px] font-normal tracking-[3px]">
                CAMPs Technology
              </span>
            </div>
            <h1 className="font-display text-[clamp(32px,5.5vw,80px)] leading-[1.02] md:leading-[0.9] font-light tracking-[-1.28px] text-[#231010]">
              CAMPs Technology
            </h1>
            <p className="max-w-[620px] text-[15px] md:text-[16px] leading-[1.8] font-light text-[#231010]/88">
              At Tiger BioSciences, we leverage the natural potential of
              placental tissue to create Cellular, Acellular, Matrix-like
              Products (CAMPs), an innovative wound care solution designed to
              support the body&apos;s natural repair processes.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <TigerButton href="#platforms" arrow>
                Explore Platforms
              </TigerButton>
              <TigerButton
                href="/science/early-research/camps-tech/research"
                variant="glass"
              >
                Research &amp; Development
              </TigerButton>
            </div>
          </div>
        </div>
      </section>

      <TigerSection width="full">
        <SectionHeader
          heading="Designed for Wound Care, Built to Perform"
          body="CAMPs products serve as a protective barrier, support tissue repair, and adapt to a variety of wound care challenges. By harnessing the unique properties of the placenta&apos;s three layers including amnion, intermediate layer, and chorion, we deliver advanced wound care solutions."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[320px] overflow-hidden rounded-[12px]"
          >
            <Image
              src="/images/camps-tech-hero.png"
              alt="CAMPs processing"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[12px] bg-[#fbfcff] p-8 md:p-10"
          >
            <div className="mb-8 h-[2px] w-16 bg-[#8C1D18]/30" />
            <p className="text-[15px] leading-[1.9] font-light text-[#231010]/70">
              CAMPs products serve as a protective barrier, support tissue
              repair, and adapt to a variety of wound care challenges. By
              harnessing the unique properties of the placenta&apos;s three
              layers including amnion, intermediate layer, and chorion, we
              deliver advanced wound care solutions.
            </p>
            <p className="mt-6 text-[15px] leading-[1.9] font-light text-[#231010]/58">
              Through continuous innovation and proprietary processing methods,
              we ensure each CAMPs meets high standards for safety and
              consistency, reflecting our dedication to delivering high quality
              products.
            </p>
          </motion.div>
        </div>
      </TigerSection>

      <TigerSection id="platforms" width="wide" bg="white">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {campsPlatforms.map((platform, i) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="flex h-full flex-col rounded-[12px] bg-[#f5f0e8] p-8">
                <div className="mb-6 h-[2px] w-16 bg-[#8C1D18]/25" />
                <h3 className="mb-4 font-display text-[32px] leading-[1.05] font-light tracking-[-0.5px] text-[#231010]">
                  {platform.title}
                </h3>
                <p className="mb-6 text-[14.6px] leading-[26px] font-light text-[#231010]/66">
                  {platform.description}
                </p>
                <div className="mt-auto space-y-2">
                  {platform.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-[13px] leading-[22px] text-[#231010]/60"
                    >
                      <div className="mt-[9px] size-1.5 rounded-full bg-[#8C1D18]/35" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-[900px] text-center text-xs font-light text-[#231010]/50">
          <sup>1</sup>Singh, P., Easley, A., Menchaca, K. T., Fanniel, V.,
          Gomez, R., Marquez, J., &amp; Hill, S. (2025). Comparative Study of
          Placental Allografts with Distinct Layer Composition.{" "}
          <em>International Journal of Molecular Sciences</em>, 26(7), 3406.{" "}
          <a
            href="https://doi.org/10.3390/ijms26073406"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8C1D18] hover:underline"
          >
            https://doi.org/10.3390/ijms26073406
          </a>
        </p>
      </TigerSection>

      <TigerSection width="narrow">
        <div className="text-center">
          <span className="mb-8 inline-block text-[12px] leading-[15.3px] font-normal tracking-[3.15px] text-[#8C1D18] uppercase">
            Next Step
          </span>
          <h2
            className="font-display mb-8 leading-[1.02] font-light tracking-[-1px] text-[#231010]"
            style={{ fontSize: "clamp(36px, 3.3vw, 47.5px)" }}
          >
            Explore our Tissue Technology
          </h2>
          <p className="mx-auto mb-10 max-w-[672px] text-[14.6px] leading-[26px] font-light text-[#231010]">
            Discover how our Research &amp; Development team drives Tissue
            Processing
          </p>
          <div className="flex justify-center">
            <TigerButton href="/science/early-research/camps-tech" arrow>
              Tissue Technology
            </TigerButton>
          </div>
        </div>
      </TigerSection>
    </main>
  );
}
