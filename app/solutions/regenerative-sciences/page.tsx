"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

const featuredProducts = [
  {
    title: "RegenTX",
    href: "/products/regentx",
    description:
      "Advanced regenerative therapies leveraging cutting-edge cellular technologies for tissue repair and healing.",
  },
  {
    title: "Biocare",
    href: "/products/biocare",
    description:
      "Comprehensive tissue banking and processing services delivering consistent quality to clinicians worldwide.",
  },
];

const capabilities = [
  {
    badge: "Regenerative Medicine",
    title: "Cellular and acellular tissue technologies",
    items: [
      {
        title: "Cell-Based Therapies",
        description:
          "Advanced cellular technologies promoting natural healing through bioactive tissue matrices designed to integrate seamlessly with native tissue.",
      },
      {
        title: "Tissue Engineering",
        description:
          "Proprietary processing protocols preserving critical growth factors and structural proteins essential for optimal tissue regeneration.",
      },
      {
        title: "Biologics & Scaffolds",
        description:
          "Innovative biomaterial platforms engineered to support cellular infiltration, vascularization, and long-term tissue remodeling.",
      },
    ],
  },
  {
    badge: "RegenTX Labs",
    title: "Scientific innovation and quality excellence",
    items: [
      {
        title: "R&D Innovation",
        description:
          "Next-generation tissue solutions developed through rigorous research combining materials science, cellular biology, and clinical validation.",
      },
      {
        title: "Quality Testing",
        description:
          "Comprehensive analytical methods ensuring product consistency, safety, and performance across every production batch.",
      },
      {
        title: "Process Development",
        description:
          "Continuous optimization of tissue processing techniques leveraging automation, precision engineering, and scientific rigor.",
      },
    ],
  },
  {
    badge: "Birth Tissue Sciences",
    title: "Ethical recovery with uncompromising standards",
    items: [
      {
        title: "Ethical Recovery Programs",
        description:
          "Partnering with trusted hospital systems through consent-based donation programs respecting donor autonomy and regulatory guidelines.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Full adherence to FDA, AATB, and international tissue banking standards ensuring safety and traceability throughout the supply chain.",
      },
      {
        title: "Donor Screening",
        description:
          "Rigorous medical and social history evaluation combined with comprehensive infectious disease testing protecting patient safety.",
      },
    ],
  },
  {
    badge: "Biocare Division",
    title: "Global tissue banking and distribution",
    items: [
      {
        title: "Tissue Banking Excellence",
        description:
          "State-of-the-art cryopreservation and storage systems maintaining tissue integrity from recovery through clinical application.",
      },
      {
        title: "Processing Services",
        description:
          "Vertically integrated operations controlling every step from donor screening to final product release ensuring consistent quality.",
      },
      {
        title: "Global Distribution",
        description:
          "Comprehensive logistics infrastructure delivering temperature-controlled products to healthcare facilities across international markets.",
      },
    ],
  },
];

export default function RegenerativeSciences() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="relative flex h-[100dvh] w-full items-end overflow-hidden pb-6 md:h-[860px] md:items-center md:pb-0">
        <Image
          src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_6fbaafb0-1d29-4a2a-8229-3c226e2218c3_3.png"
          alt="Regenerative Sciences hero"
          fill
          className="object-cover"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#efedea]/35" />
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-[55%]"
          style={{
            background:
              "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.9) 30%, rgba(239,237,234,0.5) 60%, rgba(239,237,234,0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-14">
          <div className="w-full max-w-[720px] space-y-4 rounded-[12px] bg-[#efedea]/60 p-6 backdrop-blur-sm md:space-y-6 md:p-10">
            <div className="flex items-center gap-2 text-[#231010]/55 uppercase">
              <span className="font-[Neuropa] text-[16px] leading-[24px]">
                Tiger BioSciences
              </span>
              <span className="font-[Archivo] text-[8px] font-medium tracking-[-0.4px]">
                &trade;
              </span>
              <span className="text-[12px] font-normal tracking-[3px]">
                Regenerative Sciences
              </span>
            </div>
            <h1 className="font-display text-[clamp(32px,5.5vw,80px)] leading-[0.9] font-light tracking-[-1.28px] text-[#231010]">
              Pioneering the Future of Tissue Science
            </h1>
            <p className="max-w-[620px] text-[18px] leading-[1.6] font-light text-[#231010]">
              Tiger BioSciences leads in tissue processing and CAMP-based
              innovation through rigorous protocols, advanced biotech, and
              scientific precision. Our regenerative sciences division
              encompasses research, development, tissue recovery, and
              comprehensive processing services that set new industry
              benchmarks.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <TigerButton href="/products" arrow>
                View Products
              </TigerButton>
              <TigerButton href="#capabilities" variant="glass">
                Our Approach
              </TigerButton>
            </div>
          </div>
        </div>
      </section>

      {capabilities.map((section, sectionIdx) => (
        <TigerSection
          id={sectionIdx === 0 ? "capabilities" : undefined}
          key={sectionIdx}
          width="wide"
          bg={sectionIdx % 2 === 0 ? "cream" : "white"}
        >
          {sectionIdx === 0 && (
            <div className="mb-16 flex justify-center">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32">
                <Image
                  src="/division-logos/tiger_regentx.png"
                  alt="RegenTX Division"
                  fill
                  sizes="256px"
                  quality={100}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          )}
          <SectionHeader label={section.badge} heading={section.title} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="h-full rounded-[12px] bg-[#fbfcff] p-8">
                  <h3 className="font-display mb-3 text-xl font-light text-[#231010]">
                    {item.title}
                  </h3>
                  <p className="text-[14.6px] leading-[26px] font-light text-[#231010]/60">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </TigerSection>
      ))}

      <TigerSection width="default">
        <SectionHeader
          label="Our Products"
          heading="Proven regenerative technologies"
          body="Advanced solutions delivering clinical impact across tissue repair, regenerative medicine, and comprehensive tissue banking services."
        />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={product.href} className="group block h-full">
                <div className="h-full rounded-[12px] bg-[#fbfcff] p-8">
                  <h3 className="font-display mb-4 text-[32px] leading-[1.05] font-light tracking-[-0.22px] text-[#231010] transition-colors group-hover:text-[#535457]">
                    {product.title}
                  </h3>
                  <p className="mb-4 text-[14.6px] leading-[26px] font-light text-[#231010]/60">
                    {product.description}
                  </p>
                  <div className="flex items-center text-[13px] font-medium text-[#231010] transition-transform group-hover:translate-x-1">
                    Learn More
                    <ArrowRightIcon className="ml-2 size-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <TigerButton href="/products" variant="secondary" arrow>
            View All Products
          </TigerButton>
        </div>
      </TigerSection>

      <TigerSection width="narrow" bg="white">
        <div className="text-center">
          <span className="mb-8 inline-block text-[12px] leading-[15.3px] font-normal tracking-[3.15px] text-[#231010]/40 uppercase">
            Ready to Advance Regenerative Care
          </span>
          <h2
            className="font-display mb-8 leading-none font-light tracking-[-1px] text-[#231010]"
            style={{ fontSize: "clamp(36px, 3.3vw, 47.5px)" }}
          >
            Scientific Excellence Meets Clinical Impact
          </h2>
          <p className="mx-auto mb-10 max-w-[672px] text-[14.6px] leading-[26px] font-light text-[#231010]">
            Connect with our team to learn how our regenerative sciences can
            enhance patient healing and clinical outcomes.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <TigerButton href="/products" arrow>
              View Products
            </TigerButton>
            <TigerButton href="/contact" variant="secondary">
              Contact Our Team
            </TigerButton>
          </div>
        </div>
      </TigerSection>
    </main>
  );
}
