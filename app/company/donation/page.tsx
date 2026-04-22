"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

export default function DonationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="relative flex min-h-[100dvh] w-full items-end overflow-hidden pb-6 md:h-[860px] md:items-center md:pb-0">
        <Image
          src="/images/donation-hero-dad.png"
          alt="The gift of donation"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#efedea]/26" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(239,237,234,0.96) 0%, rgba(239,237,234,0.82) 36%, rgba(239,237,234,0.28) 68%, rgba(239,237,234,0.08) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-[48%]"
          style={{
            background:
              "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.82) 34%, rgba(239,237,234,0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-14">
          <div className="w-full max-w-[620px] space-y-4 rounded-[12px] bg-[#efedea]/64 p-6 backdrop-blur-sm md:space-y-6 md:p-10">
            <div className="flex items-center gap-2 uppercase text-[#231010]/58">
              <span className="font-[Neuropa] text-[16px] leading-[24px]">
                Tiger BioSciences
              </span>
              <span className="font-[Archivo] text-[8px] font-medium tracking-[-0.4px]">
                &trade;
              </span>
              <span className="text-[12px] font-normal tracking-[3px]">
                Where It All Begins
              </span>
            </div>
            <h1 className="font-display text-[clamp(32px,5.5vw,80px)] leading-[1.02] md:leading-[0.9] font-light tracking-[-1.28px] text-[#231010]">
              The Gift of Donation
            </h1>
            <p className="max-w-[520px] text-[18px] leading-[1.6] font-light text-[#231010]">
              A network dedicated to honoring the gift of donation.
            </p>
            <div className="flex pt-2">
              <TigerButton href="#partners" arrow>
                Explore the Network
              </TigerButton>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PARTNERS ========== */}
      <TigerSection id="partners" width="full">
          <SectionHeader
            label="The Gift of Donation"
            heading="A network dedicated to honoring the gift of donation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-[12px] bg-[#fbfcff] p-10"
            >
              <div className="flex justify-center mb-8">
                <div className="relative w-80 h-40">
                  <Image
                    src="/division-logos/bioCARE.png"
                    alt="bioCARE"
                    fill
                    sizes="320px"
                    className="object-contain"
                  />
                </div>
              </div>
              <h2 className="font-display font-light text-[32px] text-[#231010] tracking-[-0.22px] leading-[1.05] mb-8">
                Working together to honor the donor legacy
              </h2>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px] mb-8">
                bioCARE Donor Network is an emerging leader in cadaveric tissue donation programs.
              </p>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px] mb-8">
                We work alongside trusted tissue bank partners across the country that provide comprehensive services in the tissue donation process for deceased donors. These services include donation authorization, donor screening, and tissue recovery. From there, our team of experts at bioCARE ensures that all aspects of safety, quality, and compliance have been met so that the tissue can be transformed into life-changing solutions for patients.
              </p>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Together with our partners, we deliver on our promise to honor the donor legacy and ensure that each gift is protected, respected, and impactful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[12px] bg-[#f5f0e8] p-10"
            >
              <div className="flex justify-center mb-8">
                <div className="relative w-80 h-40">
                  <Image
                    src="/division-logos/BTR_Logo.png"
                    alt="Birth Tissue Recovery"
                    fill
                    sizes="320px"
                    className="object-contain mix-blend-multiply"
                  />
                </div>
              </div>
              <h2 className="font-display font-light text-[32px] text-[#231010] tracking-[-0.22px] leading-[1.05] mb-8">
                Every donation begins with a mother&apos;s incredible gift
              </h2>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px] mb-8">
                Birth Tissue Recovery, BTR, is the nation&apos;s most experienced human birth tissue bank, leading the way in developing comprehensive placenta donation programs.
              </p>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px] mb-8">
                We are committed to upholding the highest standards in every aspect of our work. Our dedicated team pioneers seamless collaboration between donors, hospitals, and us. They ensure every donation is handled with exceptional care, respect, and strict adherence to safety protocols that protect both donors and recipients throughout the entire journey.
              </p>
              <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                Together, we make new beginnings possible.
              </p>
            </motion.div>
          </div>
      </TigerSection>

    </main>
  );
}
