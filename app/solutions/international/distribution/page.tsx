"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const featuredProducts = [
  { title: "caregraFT™", href: "/products/caregraft", description: "Innovative cellular allograft for surgical and chronic wound applications." },
  { title: "completeFT®", href: "/products/completeft", description: "Full-thickness tissue graft for comprehensive wound care." },
  { title: "HealPACK™", href: "/products/healpack", description: "Comprehensive wound dressing system for optimal outcomes." },
  { title: "Avéli®", href: "/products/aveli", description: "Revolutionary cellulite treatment delivering precision aesthetic results." },
  { title: "Bellafill®", href: "/products/bellafill", description: "Long-lasting dermal filler for facial volume restoration and wrinkle correction." }
];

const distributionCapabilities = [
  {
    badge: "Tiger Campus Hub",
    title: "Central European Distribution Center",
    items: [
      { title: "Strategic Location", description: "Donaueschingen, Germany provides optimal access to EU, MEA, and APAC markets. Centralized inventory management reduces lead times and improves responsiveness across all international markets." },
      { title: "Integrated Operations", description: "Engineering, quality control, and distribution under one roof. Tiger Campus represents complete vertical integration from device development through final delivery." },
      { title: "Inventory Management", description: "Real-time visibility into stock levels, expiration dates, and product availability. Advanced forecasting algorithms optimize inventory positioning for predictable delivery performance." }
    ]
  },
  {
    badge: "Cold Chain Excellence",
    title: "Temperature-Controlled Logistics Infrastructure",
    items: [
      { title: "Temperature Monitoring", description: "Real-time tracking will take place throughout the entire supply chain using validated data loggers and IoT sensors. Every shipment will be documented with a complete temperature history to ensure regulatory compliance." },
      { title: "Qualification of Shipping", description: "Planned processes include the qualification of shipping routes, packaging approaches, and transit conditions. These efforts are intended to ensure consistent product quality and integrity across destinations and seasonal variations." },
      { title: "GDP Compliance", description: "All storage and transportation activities are planned to follow Good Distribution Practice principles. Rigorous procedures for receiving, storage, picking, packing, and shipping are intended to ensure consistent product quality throughout the entire process." },
      { title: "Emergency Protocols", description: "Expedited shipping capabilities will support urgent clinical needs. Temperature excursion management and product investigation procedures will safeguard patient safety." }
    ]
  },
  {
    badge: "Global Logistics Network",
    title: "Worldwide Reach with Local Precision",
    items: [
      { title: "Regional Distribution Centers", description: "A centralized EU hub in Germany with planned expansion of distribution reach into MEA and APAC regions. Localized warehousing capabilities are intended to help minimize customs-related delays and enhance delivery reliability for healthcare facilities." },
      { title: "Customs & Regulatory", description: "Expert navigation of import/export requirements across 20+ jurisdictions will ensure smooth cross-border operations. Complete documentation packages — including certificates of origin, conformity, and free sale — will be provided." },
      { title: "Freight Management", description: "Partnerships with specialized cold chain logistics providers will ensure secure and reliable handling. Multi-modal transportation capabilities — including air freight for time-sensitive deliveries and ocean freight for cost optimization — will be available." }
    ]
  },
  {
    badge: "Technology & Traceability",
    title: "Digital Infrastructure for Visibility and Compliance",
    items: [
      { title: "Serialization Systems", description: "Unique device identification enabling full traceability from manufacturing through clinical use. Compliance with EU MDR and international serialization requirements." },
      { title: "Track-and-Trace", description: "Real-time shipment visibility for customers and internal stakeholders. Proactive notifications for delivery exceptions, customs clearance, and temperature events." },
      { title: "Compliance Reporting", description: "Automated generation of regulatory reports, quality metrics, and performance dashboards. Complete audit trail supporting inspections and regulatory submissions." }
    ]
  }
];

export default function DistributionNetworksPage() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-[100dvh] w-full items-end overflow-hidden pb-6 md:h-[860px] md:items-center md:pb-0">
        <Image
          src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_6fbaafb0-1d29-4a2a-8229-3c226e2218c3_3.png"
          alt="Distribution networks"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-[#efedea]/56" />
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
                Distribution Networks
              </span>
            </div>
            <h1 className="font-display text-[clamp(34px,5.8vw,82px)] leading-[1.02] md:leading-[0.9] font-light tracking-[-1.3px] text-[#231010]">
              Global Reach, Local Precision
            </h1>
            <p className="max-w-[540px] text-[17px] leading-[1.75] font-light text-[#231010]/82 md:text-[18px]">
              A future distribution infrastructure is being planned to meet the
              specialized needs of regenerative medicine. From a prospective
              Tiger Campus in Donaueschingen to validated cold-chain logistics
              serving healthcare facilities worldwide, upcoming systems are
              intended to support consistent product integrity and adherence to
              regulatory requirements.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
              <Button variant="primary" size="md" asChild>
                <Link href="/products" className="cursor-pointer">
                  View Products
                </Link>
              </Button>
              <Button variant="outline" size="md" asChild>
                <Link href="#distribution" className="cursor-pointer">
                  Our Infrastructure
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Capabilities Sections */}
      {distributionCapabilities.map((section, sectionIdx) => (
        <section id={sectionIdx === 0 ? "distribution" : undefined} key={sectionIdx} className={`relative ${sectionIdx === 0 ? 'pt-20 pb-24 md:pt-28 md:pb-36' : 'py-10 md:py-[76px]'} bg-gradient-to-b ${sectionIdx % 2 === 0 ? 'from-background via-muted/30 to-muted/40' : 'from-muted/40 via-muted/20 to-background'}`}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            {/* Division Badge at top of first section */}
            {sectionIdx === 0 && (
              <div className="flex justify-center mb-12">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                  <Image
                    src="/division-logos/tiger_international_logo.png"
                    alt="Tiger BioSciences International"
                    fill
                    sizes="256px"
                    quality={100}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            )}

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

      {/* Featured Products Section */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Our Products</span>
            <h2 className="text-h1 text-foreground">Proven Regenerative Technologies</h2>
            <p className="text-lead text-foreground/70 max-w-3xl mx-auto mt-6">We are preparing to deliver regenerative technologies worldwide — with planned validated cold-chain logistics and full regulatory compliance from Tiger Campus to clinical application.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link href={product.href} className="group block h-full">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                    <CardBody>
                      <h3 className="text-h3 font-light group-hover:text-brand transition-colors">{product.title}</h3>
                      <p className="font-body text-muted-foreground mb-4">{product.description}</p>
                      <div className="flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                        Learn More
                        <ArrowRightIcon className="ml-2 size-4" />
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="md" asChild>
              <Link href="/products" className="cursor-pointer">
                View All Products
                <ArrowRightIcon className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand/5 to-accent/5 p-6 sm:p-10 md:p-16 lg:p-20 text-center backdrop-blur">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Global Distribution</span>
            <h2 className="text-h1 font-light tracking-[-0.015em] mb-6">Reliable Delivery, Worldwide</h2>
            <p className="text-lead text-foreground/70 max-w-5xl mx-auto leading-relaxed">Contact our Distribution team to discuss product availability, shipping options, and logistics support for your region.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="md" asChild>
                <Link href="/products" className="cursor-pointer">
                  View Products
                  <ArrowRightIcon className="ml-2 size-4" />
                </Link>
              </Button>
              <Button variant="outline" size="md" asChild>
                <Link href="/contact" className="cursor-pointer">
                  Contact Distribution Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
