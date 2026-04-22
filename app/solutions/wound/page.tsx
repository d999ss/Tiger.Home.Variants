"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TigerSection } from "@/components/ui/tiger-section";
import { SectionHeader } from "@/components/ui/section-header";

const sections = [
  { badge: "Wound Types", title: "CAMPs Solutions for Challenging Chronic Wounds", items: [
    { title: "Diabetic Foot Ulcers", description: "These wounds often lead to serious infections and amputations, and are linked to higher mortality and frequent hospitalizations." },
    { title: "Venous Leg Ulcers", description: "Venous leg ulcers cause persistent pain and swelling, slow closure, and reduced mobility, often leading to long-term complications and reduced quality of life." },
    { title: "Pressure Ulcers", description: "Pressure ulcers can rapidly progress to deep tissue damage, causing severe pain, infection, and extended recovery times, especially in immobile patients." }
  ]},
  { badge: "Innovation", title: "Innovative CAMPs for Better Outcomes", items: [
    { title: "Diverse CAMPs Portfolio", description: "Tiger has a full portfolio of placental allografts, dermal allografts and xenografts." },
    { title: "Preserved Tissue Structure", description: "Our tissue is processed with the goal of maintaining the original relevant characteristics of the tissue and provide clinicians with robust products to treat chronic wounds." },
    { title: "Preserved Tissue Components", description: "Our proprietary processing maintains high levels of collagen and other tissue components." },
    { title: "Safety Profile", description: "Each product is backed by proven tissue processing techniques and terminal sterilization." }
  ]},
  { badge: "Product Categories", title: "Comprehensive CAMPs Portfolio", items: [
    { title: "Amniotic Membranes", description: "Placental derived allograft products for chronic wound applications." },
    { title: "Dermal Matrices", description: "Sterile, ready-to-use dermal matrices in multiple sizes to match specific wound characteristics and clinical requirements." },
    { title: "Xenografts", description: "Thin, flexible and strong acellular xenograft tissue products." }
  ]},
  { badge: "Support Services", title: "Clinical & Field Support Excellence", items: [
    { title: "Field Support", description: "With a committed operations and sales team, we make sure grafts arrive on time, bringing confidence to both patients and providers." },
    { title: "Reimbursement Assistance", description: "Dedicated team provides coding guidance, payer coverage information, and documentation support for reimbursement." },
    { title: "Clinical Support", description: "Our products are backed by robust clinical and scientific evidence specific to chronic wounds." }
  ]}
];

export default function WoundCareSolutions() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[100dvh] md:h-[860px] flex items-end pb-6 md:items-center md:pb-0 justify-center overflow-hidden">
        <Image
          src="/images/tiger-hero.png"
          alt="Chronic wound care"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#231010]/28" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(35,16,16,0.56) 0%, rgba(35,16,16,0.24) 40%, rgba(35,16,16,0.08) 100%)" }} />
        <div
          className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none"
          style={{ background: "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.9) 28%, rgba(239,237,234,0.45) 58%, rgba(239,237,234,0) 100%)" }}
        />
        <div className="relative z-10 container mx-auto max-w-7xl px-6 md:px-14">
          <div className="max-w-[640px] rounded-[16px] bg-[#efedea]/78 p-6 md:p-10 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
            <span className="inline-block text-[12px] font-normal uppercase tracking-[3.15px] text-[#D5101F] mb-6">Wound Care</span>
            <h1 className="font-display font-light text-[#231010] text-[clamp(40px,5vw,80px)] tracking-[-1.28px] leading-[1.02] md:leading-[0.9] mb-6">Chronic Wound Care</h1>
            <p className="text-[18px] font-light text-[#231010] leading-[1.7] max-w-2xl">The most advanced cellular, acellular, matrix like products (CAMPs) for treatment of chronic wounds.</p>
          </div>
        </div>
      </section>

      {sections.map((section, sectionIdx) => (
        <TigerSection key={sectionIdx} width="wide" bg={sectionIdx % 2 === 0 ? "cream" : "white"}>
          <SectionHeader label={section.badge} heading={section.title} />
            <div className={`grid grid-cols-1 gap-6 ${section.items.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : section.items.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {section.items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <div className="bg-[#fbfcff] rounded-[12px] p-8 h-full">
                    <h3 className="font-display font-light text-[#231010] text-xl mb-3">{item.title}</h3>
                    <p className="text-[14.6px] font-light text-[#231010]/60 leading-[26px]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
        </TigerSection>
      ))}
    </main>
  );
}
