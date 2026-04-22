"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon, HeartIcon, FlaskConicalIcon, SparklesIcon } from "lucide-react";
import { TigerHero } from "@/components/ui/tiger-hero";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

const commitments = [
  { title: "To Donors & Families", description: "We honor every gift with reverence and respect. Your generosity is never taken for granted\u2014it is the foundation of everything we do." },
  { title: "To Patients", description: "Your healing is our purpose. Every innovation we pursue, every decision we make, is driven by the commitment to improve your quality of life." },
  { title: "To Surgeons & Clinicians", description: "You are our partners in healing. We are dedicated to supporting your work with solutions you can trust and rely on." },
  { title: "To Science & Progress", description: "We advance regenerative medicine with integrity, pushing boundaries while respecting the profound responsibility we carry." }
];

const coreValues = [
  { title: "Tissue Stewardship", description: "We serve as devoted stewards to honor the donor\u2019s divine gift of tissue donation by managing the gift responsibly, ethically, and with the highest level of care." },
  { title: "Innovation", description: "We push the boundaries of regenerative medicine through continuous research, development, and the pursuit of breakthrough solutions that transform patient care." },
  { title: "Broad View", description: "We maintain a comprehensive perspective, understanding the interconnected nature of our work across wound care, aesthetics, and regenerative science." },
  { title: "Ingenuity", description: "We approach challenges with creativity and resourcefulness, developing novel solutions that advance the field of regenerative medicine." },
  { title: "Group Collaboration", description: "We work cross-functionally across internal teams and together with clinicians, researchers, and partners to deliver better outcomes for patients." },
  { title: "Results Driven", description: "Every decision we make is guided by our commitment to improving patient outcomes, supported by rigorous clinical trials and evidence-based research." }
];

const exploreLinks = [
  { title: "The Gift of Donation", description: "Learn about our partners BTR and bioCARE, and how we steward every gift.", href: "/company/donation" },
  { title: "Meet Our Leadership", description: "The people behind Tiger BioSciences\u2014leaders dedicated to honoring every gift.", href: "/company/leadership" },
  { title: "View Careers", description: "Be part of a team that transforms generosity into healing.", href: "/careers" }
];

export default function CredoPage() {
  return (
    <main className="min-h-screen">
      {/* ========== HERO ========== */}
      <TigerHero
        label="Where It All Begins"
        title="Our Vision"
        description="Advancing regenerative medicine through innovation and integrity, while honoring the gift of tissue donation to transform patient care."
      />

      {/* ========== DONATION INNOVATION ========== */}
      <TigerSection>
        <SectionHeader
          label="Our Purpose"
          heading="With Every Donation, We Drive Innovation"
          body="Every product we create begins with a gift of tissue donation. Families choose to donate, allowing others the chance to heal. We exist to honor that choice and provide the greatest possible impact for patients, helping them close their wounds, restore their natural beauty, and renew their confidence."
        />

          {/* Journey cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "The Gift", description: "A journey of generosity, innovation and hope", icon: HeartIcon },
              { title: "The Innovation", description: "Science and care converge, creating solutions that honor the gift and serve those who need healing.", icon: FlaskConicalIcon },
              { title: "The Outcomes", description: "Providers have the most advanced solutions, and patients\u2019 lives are renewed.", icon: SparklesIcon }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="flex justify-center mb-6">
                  <div
                    className="p-[17px] rounded-full shrink-0"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(215,212,208,0.6))",
                      boxShadow: "6px 6px 14px rgba(0,0,0,0.08), -6px -6px 14px rgba(255,255,255,0.9), inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.04)",
                      border: "1px solid rgba(255,255,255,0.6)",
                    }}
                  >
                    <item.icon className="size-[27px] text-[#231010]/70" strokeWidth={1.5} />
                  </div>
                </div>
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

      {/* ========== IMAGE BREAK — diverse women group photo ========== */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9", clipPath: "inset(0)" }}>
        <Image
          src="/images/figma/vision-image-15.png"
          alt="Diverse group of women"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* ========== COMMITMENTS ========== */}
      <TigerSection>
        <SectionHeader
          label="Our Commitments"
          heading="To everyone we serve"
          body={`Our responsibility extends to every person touched by our work\u2014from the families who donate to the patients who heal.`}
        />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {commitments.map((item, i) => (
              <motion.div
                key={i}
                className="rounded-[12px] p-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="font-display font-light text-[32px] text-[#231010] tracking-[-0.22px] leading-[1.05]">
                  {item.title}
                </h3>
                <p className="text-[13px] font-light text-[#231010] leading-[22.75px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
      </TigerSection>

      {/* ========== IMAGE BREAK — baby feet ========== */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9", clipPath: "inset(0)" }}>
        <Image
          src="/images/figma/vision-image-16.png"
          alt="Baby feet held in hands"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* ========== CORE VALUES ========== */}
      <TigerSection>
        <SectionHeader
          label="Our Foundation"
          heading="Core Values"
        />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                className="rounded-[12px] p-8 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="text-[15.3px] font-medium tracking-[0.4px] text-[#231010] leading-[24px]">
                  {value.title}
                </h3>
                <p className="text-[12.8px] font-light text-[#231010] leading-[22.75px]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
      </TigerSection>

      {/* ========== IMPACT ========== */}
      <TigerSection>
        <SectionHeader
          label="The Legacy We Build Together"
          heading="500,000 gifts of hope"
          body="Since our founding, over half a million families have entrusted us with their most generous gift. Each one transforms loss into hope, enabling healing that advances human medicine and improves countless lives."
          className="mb-16"
        />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-8 rounded-[12px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-display font-light text-[clamp(36px,5vw,64px)] text-[#231010] leading-none mb-3">500K+</div>
              <div className="text-[13px] font-light text-[#231010] leading-[22.75px]">Gifts entrusted to our care</div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative size-[200px]">
                <Image
                  src="/tiger-circle-logo.png"
                  alt="Tiger BioSciences Seal"
                  fill
                  className="object-contain opacity-40"
                  sizes="200px"
                />
              </div>
            </motion.div>

            <motion.div
              className="text-center p-8 rounded-[12px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="font-display font-light text-[clamp(36px,5vw,64px)] text-[#231010] leading-none mb-3">&infin;</div>
              <div className="text-[13px] font-light text-[#231010] leading-[22.75px]">Lives touched by generosity</div>
            </motion.div>
          </div>
      </TigerSection>

      {/* ========== IMAGE BREAK — tiger in greenery ========== */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "3/1", clipPath: "inset(0)" }}>
        <Image
          src="/images/figma/vision-rectangle-1.png"
          alt="Tiger"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* ========== EXPLORE OUR STORY ========== */}
      <TigerSection>
        <SectionHeader
          label="Learn More"
          heading="Explore our story"
          body="Discover more about how we honor generosity, advance science, and build the future of regenerative medicine."
          className="mb-16"
        />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exploreLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={link.href} className="group block rounded-[12px] p-8 space-y-4 h-full">
                  <h3 className="font-display font-light text-[32px] text-[#231010] tracking-[-0.22px] leading-[1.05] group-hover:text-[#231010]/60 transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-[13px] font-light text-[#231010] leading-[22.75px]">
                    {link.description}
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
