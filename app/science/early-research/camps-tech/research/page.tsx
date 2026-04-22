"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";
import { TigerButton } from "@/components/ui/tiger-button";

const introCopy =
  "Tiger BioSciences recognizes the critical role of research in all phases of product development. Our team, comprised of highly skilled scientists and engineers, works to ensure that our products meet defined scientific requirements. Using advanced technologies, our scientists effectively image and analyze tissue quality, structural composition, and protein content. We also conduct in-vitro and in-vivo testing to determine preliminary product safety and performance. By focusing on comprehensive testing, we glean key insights about tissue and our products that facilitate product and processing refinements for continued improvement. We also collaborate with trusted research partners and affiliates to push scientific boundaries and accelerate the development of next generation of biomedical products. We proudly publish our work in comprehensive scientific manuscripts so that we can share our groundbreaking research with the broader scientific community.";

const researchAreas = [
  {
    title: "Advanced Research Capabilities",
    description:
      "We invest heavily in our research capabilities, equipping our laboratories with modern analytical technologies that allow us to examine materials and tissues at the cellular and structural level.",
    image: "/images/press/innovation-research.jpg",
    imageLayout: "full",
  },
  {
    title: "Placental Tissue Expertise",
    description:
      "Placental tissue is known for its complex composition of extracellular matrix (ECM) components, growth factors, and structural proteins key elements in supporting tissue repair and regeneration.",
    imageLayout: "none",
  },
  {
    title: "Adipose Tissue Innovation",
    description:
      "Adipose tissue has innate structural characteristics that make it central to many aesthetic and reconstructive applications, offering a reliable and non-invasive alternative to traditional fat-grafting approaches.",
    imageLayout: "none",
  },
  {
    title: "Continuous Refinement",
    description:
      "Our dedicated R&D team continually refines our product formulations and processing techniques to meet evolving clinical standards and needs, from aesthetics and reconstruction to wound care.",
    image: "/images/press/manufacturing-facility.jpeg",
    imageLayout: "full",
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="relative h-[100dvh] md:h-[860px] w-full flex items-end pb-6 md:items-center md:pb-0 overflow-hidden">
        <Image
          src="/images/camps-science-hero.png"
          alt="Research and development"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-[#efedea]/34 pointer-events-none" />
        <div
          className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.9) 30%, rgba(239,237,234,0.5) 60%, rgba(239,237,234,0) 100%)",
          }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14">
          <div className="w-full max-w-[720px] space-y-4 md:space-y-6 bg-[#efedea]/60 backdrop-blur-sm rounded-[12px] p-6 md:p-10">
            <div className="flex items-center gap-2 uppercase text-[#8C1D18]">
              <span className="font-[Neuropa] text-[16px] leading-[24px]">Tiger BioSciences</span>
              <span className="font-[Archivo] font-medium text-[8px] tracking-[-0.4px]">&trade;</span>
              <span className="text-[12px] font-normal tracking-[3px]">Early Research</span>
            </div>
            <h1 className="font-display font-light text-[#231010] text-[clamp(32px,5.5vw,80px)] tracking-[-1.28px] leading-[1.02] md:leading-[0.9]">
              Research &amp; Development
            </h1>
            <p className="text-[18px] font-light text-[#231010] leading-[1.6] max-w-[620px]">
              At Tiger BioSciences, our R&amp;D team brings together scientific expertise, engineering know-how, and product innovation to address clinical needs. The work is supported by significant investment in our research laboratory, where we study sophisticated tissue technologies and focus on accelerating the path from discovery to practical solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <TigerButton href="/science/early-research/camps-tech/platforms" arrow>
                CAMPs Technology Platforms
              </TigerButton>
            </div>
          </div>
        </div>
      </section>

      <TigerSection width="full">
        <SectionHeader
          heading="Research & Development Team"
        />

        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <motion.div
            className="w-full lg:w-[537px] h-[320px] lg:h-[400px] overflow-hidden relative shrink-0"
            style={{ clipPath: "inset(-2px -2px round 12px)" }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/camps-research-hero.png"
              alt="Research laboratory"
              fill
              className="object-cover hover:scale-[1.04] transition-transform duration-[0.25s] ease"
              sizes="537px"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundImage: "linear-gradient(235deg, rgba(255,255,255,0) 84%, rgb(255,255,255) 96%)" }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-[21px] max-w-[640px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[15px] md:text-[16px] font-light text-[#231010]/68 leading-[1.9]">
              {introCopy}
            </p>
          </motion.div>
        </div>
      </TigerSection>

      <TigerSection width="wide" bg="white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="h-full rounded-[12px] overflow-hidden bg-[#f5f0e8]">
                {area.imageLayout === "full" ? (
                  <div className="relative aspect-[16/10] overflow-hidden" style={{ clipPath: "inset(0 0 round 12px 12px 0 0)" }}>
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                ) : (
                  <div className="px-8 pt-8">
                    <div className="h-[2px] w-16 bg-[#8C1D18]/30 mb-8" />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-display font-light text-[#231010] text-[32px] tracking-[-0.5px] leading-[1.05] mb-4">
                    {area.title}
                  </h3>
                  <p className="text-[14px] font-light text-[#231010]/66 leading-[1.8]">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </TigerSection>

      <TigerSection width="narrow">
        <div className="text-center">
          <span className="inline-block text-[12px] font-normal uppercase tracking-[3.15px] text-[#8C1D18] leading-[15.3px] mb-8">
            Next Step
          </span>
          <h2
            className="font-display font-light text-[#231010] tracking-[-1px] leading-[1.02] mb-8"
            style={{ fontSize: "clamp(36px, 3.3vw, 47.5px)" }}
          >
            Explore CAMPs Technology
          </h2>
          <p className="text-[14.6px] font-light text-[#231010] leading-[26px] mb-10 max-w-[672px] mx-auto">
            Learn about our innovative placental tissue platforms designed for advanced wound care
          </p>
          <div className="flex justify-center">
            <TigerButton href="/science/early-research/camps-tech/platforms" arrow>
              CAMPs Technology Platforms
            </TigerButton>
          </div>
        </div>
      </TigerSection>
    </main>
  );
}
