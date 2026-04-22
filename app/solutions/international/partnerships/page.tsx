"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const partnershipModels = [
  {
    badge: "Regional Partnership Models",
    title: "Tailored approaches for diverse markets",
    items: [
      {
        title: "European Union Partnerships",
        description: "Tiger BioSciences International is preparing for future collaboration with university hospitals, private healthcare networks, and aesthetic centers across the EU. Planned offerings include products intended for CE marking under MDR requirements, supported by multilingual clinical education resources and local regulatory expertise once available."
      },
      {
        title: "Middle East and Africa Partnerships",
        description: "We build strategic alliances with government health authorities, leading private hospital groups, and major medical tourism centers across the Middle East and Africa. Our partnership program includes comprehensive onboarding, hands-on clinical training, co-branded marketing support, and continuous professional education to ensure long-term clinical and commercial success."
      },
      {
        title: "Asia Pacific Partnerships",
        description: "We establish market-development partnerships with leading academic medical centers, trusted regional distributors, and rapidly growing healthcare systems across the Asia Pacific region. Our collaborative model focuses on knowledge exchange, clinical integration, and scalable commercialization to ensure strong market presence and sustainable regional growth."
      }
    ]
  },
  {
    badge: "Partner Value Proposition",
    title: "Comprehensive support for partner success",
    items: [
      {
        title: "Clinical Education Programs",
        description: "Hands-on training workshops, online learning modules, and on-site clinical support. Certification programs ensuring proper product handling, storage, and application techniques aligned with Tiger quality standards."
      },
      {
        title: "Marketing and Sales Support",
        description: "Co-branded marketing materials, digital assets, and clinical literature in local languages. Sales training, product positioning guidance, and competitive differentiation resources tailored to regional market dynamics."
      },
      {
        title: "Regulatory Documentation",
        description: "Complete technical files, certificates of conformity, and country-specific import documentation. Ongoing regulatory intelligence updates ensuring continuous compliance with international standards."
      },
      {
        title: "Technical Support",
        description: "Dedicated support team providing rapid response to clinical questions, product inquiries, and quality events. Direct access to Tiger's regulatory and technical experts in multiple time zones."
      }
    ]
  }
];

export default function GlobalPartnershipsPage() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-[100dvh] w-full items-end overflow-hidden pb-6 md:h-[860px] md:items-center md:pb-0">
        <Image
          src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_8b4c0ea2-d5a3-49a0-8000-f376fcb4ea78_1.png"
          alt="Global partnerships"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#efedea]/54" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(239,237,234,0.95) 0%, rgba(239,237,234,0.84) 36%, rgba(239,237,234,0.3) 68%, rgba(239,237,234,0.1) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-[42%]"
          style={{
            background:
              "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.78) 34%, rgba(239,237,234,0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-14">
          <div className="w-full max-w-[640px] space-y-4 rounded-[16px] bg-[#f7f1ea]/86 p-6 shadow-[0_24px_60px_rgba(35,16,16,0.12)] backdrop-blur-sm md:space-y-6 md:p-10">
            <div className="flex items-center gap-2 uppercase text-[#8C1D18]">
              <span className="font-[Neuropa] text-[16px] leading-[24px]">
                Tiger BioSciences
              </span>
              <span className="font-[Archivo] text-[8px] font-medium tracking-[-0.4px]">
                &trade;
              </span>
              <span className="text-[12px] font-normal tracking-[3px]">
                Global Partnerships
              </span>
            </div>
            <h1 className="font-display text-[clamp(34px,5.8vw,82px)] leading-[1.02] md:leading-[0.9] font-light tracking-[-1.3px] text-[#231010]">
              Building Healthcare Partnerships Worldwide
            </h1>
            <p className="max-w-[520px] text-[17px] leading-[1.75] font-light text-[#231010]/82 md:text-[18px]">
              Tiger BioSciences International is working to partner with
              leading healthcare organizations across the EU, MEA, and APAC
              markets. Through a collaborative approach, we integrate clinical
              education, regulatory expertise, and continuous support to
              empower partners and drive superior patient outcomes.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Button variant="primary" size="md" asChild>
                <Link href="/products" className="cursor-pointer">
                  View Products
                </Link>
              </Button>
              <Button variant="outline" size="md" asChild>
                <Link href="#partnerships" className="cursor-pointer">
                  Our Approach
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Partnership Models Sections */}
      {partnershipModels.map((section, sectionIdx) => (
        <section id={sectionIdx === 0 ? "partnerships" : undefined} key={sectionIdx} className={`relative py-10 md:py-[76px] bg-gradient-to-b ${sectionIdx % 2 === 0 ? 'from-muted/40 via-muted/20 to-background' : 'from-background via-muted/30 to-muted/40'}`}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">{section.badge}</span>
              <h2 className="text-h1 text-foreground">{section.title}</h2>
            </div>
            <div className={`grid grid-cols-1 gap-6 ${section.items.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
              {section.items.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <Card>
                    <CardBody>
                      <h3 className="text-h3 font-light">{item.title}</h3>
                      <p className="font-body text-muted-foreground">{item.description}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand/5 to-accent/5 p-6 sm:p-10 md:p-16 lg:p-20 text-center backdrop-blur">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Partner With Tiger</span>
            <h2 className="text-h1 font-light tracking-[-0.015em] mb-6">Explore Partnership Opportunities</h2>
            <p className="text-lead text-foreground/70 max-w-2xl mx-auto leading-relaxed">Connect with our International team to discuss how Tiger BioSciences can support your clinical practice and market expansion.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="md" asChild>
                <Link href="/products" className="cursor-pointer">
                  View Products
                  <ArrowRightIcon className="ml-2 size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="md" asChild>
                <Link href="/contact" className="cursor-pointer">
                  Contact Partnership Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
