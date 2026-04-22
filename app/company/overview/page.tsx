"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

export default function CompanyOverview() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="relative flex min-h-[100dvh] w-full items-end overflow-hidden pb-6 md:h-[860px] md:items-center md:pb-0">
        <Image
          src="/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png"
          alt="Tiger BioSciences laboratory and research facility"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#efedea]/34" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(239,237,234,0.96) 0%, rgba(239,237,234,0.84) 35%, rgba(239,237,234,0.32) 68%, rgba(239,237,234,0.08) 100%)",
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
          <div className="w-full max-w-[660px] space-y-4 rounded-[12px] bg-[#efedea]/66 p-6 backdrop-blur-sm md:space-y-6 md:p-10">
            <div className="flex items-center gap-2 uppercase text-[#231010]/58">
              <span className="font-[Neuropa] text-[16px] leading-[24px]">
                Tiger BioSciences
              </span>
              <span className="font-[Archivo] text-[8px] font-medium tracking-[-0.4px]">
                &trade;
              </span>
              <span className="text-[12px] font-normal tracking-[3px]">
                Who We Are
              </span>
            </div>
            <h1 className="font-display text-[clamp(32px,5.5vw,80px)] leading-[1.02] md:leading-[0.9] font-light tracking-[-1.28px] text-[#231010]">
              Built on Science. Driven by Integrity.
            </h1>
            <p className="max-w-[560px] text-[18px] leading-[1.6] font-light text-[#231010]">
              Tiger BioSciences develops regenerative medicine solutions that
              honor the profound gift of tissue donation, uphold the highest
              standards of clinical rigor, and elevate the standard of care.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <TigerButton href="#mission" arrow>
                Our Mission
              </TigerButton>
              <TigerButton href="#platforms" variant="glass">
                Explore Platforms
              </TigerButton>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MISSION ========== */}
      <TigerSection id="mission" width="full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="rounded-[12px] bg-[#fbfcff] p-8 md:p-10">
              <span className="inline-block text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40">
                Our Mission
              </span>
              <h2 className="mt-6 font-display text-[clamp(32px,4vw,56px)] leading-[0.95] font-light tracking-[-0.8px] text-[#231010]">
                We Honor Tissue and Innovate for Patients and Providers
              </h2>
            </div>
            <div className="space-y-6 rounded-[12px] bg-[#f5f0e8] p-8 md:p-10 text-[14.6px] font-light leading-[26px] text-[#231010]">
              <p>
                Patients and donors are at the core of our mission. We honor
                the divine gift of tissue donation, serving as responsible and
                devoted stewards. Guided by compassion and innovation, we create
                clinically relevant solutions intended to close wounds, restore
                natural beauty, and renew confidence.
              </p>
              <p>
                We strive to maximize the impact of every tissue entrusted to
                us, transforming lives through the power of tissue
                transplantation.
              </p>
            </div>
          </motion.div>
      </TigerSection>

      {/* ========== THREE PLATFORMS ========== */}
      <TigerSection id="platforms" bg="white">
        <SectionHeader
          label="What We Do"
          heading="Three Platforms. One Standard."
        />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wound Care Solutions",
                description: "Advanced wound care solutions and surgical dressings deliver evidence-based outcomes across all sites of care\u2014empowering clinicians to achieve closure in acute and chronic wounds.",
                href: "/divisions/wound",
              },
              {
                title: "Aesthetic Solutions",
                description: "Precision tools for reconstructive and aesthetic procedures. From adipose-derived matrices to biostimulatory fillers and advanced device technologies.",
                href: "/divisions/aesthetics",
              },
              {
                title: "Regenerative Sciences",
                description: "Next-generation technologies in PRP systems, biocare protocols, and tissue engineering. Research-backed innovation meeting clinical application.",
                href: "/divisions/regentx",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={item.href} className="group block h-full">
                  <div className="h-full rounded-[12px] bg-[#f5f0e8] p-8 space-y-4">
                  <h3 className="font-display font-light text-[32px] text-[#231010] tracking-[-0.22px] leading-[1.05] group-hover:text-[#231010]/60 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] font-light text-[#231010] leading-[22.75px]">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#231010] transition-transform group-hover:translate-x-1">
                    Explore Platform
                    <ArrowRightIcon className="size-4" />
                  </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
      </TigerSection>

      {/* ========== OUR IMPACT ========== */}
      <TigerSection>
        <SectionHeader
          label="What We Do"
          heading="Our Impact"
        />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { title: "Close Wounds", description: "Our CAMPs technologies support providers nationwide in closing hard-to-heal chronic and acute wounds." },
              { title: "Restore Natural Beauty", description: "A complete portfolio for natural, long-lasting results." },
              { title: "Renew Confidence", description: "Solutions that allow patients to have the best relationship with themselves." },
              { title: "Advance Science and Clinical Data", description: "We innovate cutting-edge technologies, invest in rigorous clinical trials, and advance the science of allograft tissue." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-[12px] bg-[#fbfcff] p-8"
              >
                <h3 className="font-display font-light text-[24px] text-[#231010] mb-4">{item.title}</h3>
                <p className="text-[14.6px] font-light text-[#231010] leading-[26px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
      </TigerSection>

      {/* ========== CLOSING ========== */}
      <TigerSection width="narrow" bg="white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="mb-8 inline-block text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40">
              Tiger BioSciences
            </span>
            <h2 className="font-display font-light text-[#231010] text-[clamp(36px,6vw,64px)] tracking-[-1px] leading-[1.02] mb-8">
              Science. Ethics. Results.
            </h2>
            <p className="text-[18px] font-light text-[#231010] leading-[1.6] max-w-3xl mx-auto">
              Tiger BioSciences is not the largest regenerative medicine company. We are the one that remembers where the tissue comes from and what that origin demands of us.
            </p>
          </motion.div>
      </TigerSection>
    </main>
  );
}
