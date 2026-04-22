"use client";

import Link from "next/link";
import Image from "next/image";
import { FileTextIcon, PresentationIcon, BookOpenIcon, ArrowRightIcon } from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";

const stats = [
  { value: "Top-Tier", title: "Journals", description: "Journal of Wound Care, International Journal of Molecular Sciences, Bioengineering, and specialty journals" },
  { value: "Global", title: "Conferences", description: "Presentations at premier medical meetings" },
  { value: "Open", title: "Transparent", description: "Committed to scientific transparency" }
];

const publicationTypes = [
  { title: "Featured Papers", href: "/science/publications/featured-papers", icon: FileTextIcon, description: "High-impact peer-reviewed publications in premier journals including New England Journal of Medicine, JAMA, and Wound Repair and Regeneration.", highlights: ["Randomized Controlled Trials", "Systematic Reviews & Meta-Analyses", "Basic Science Discoveries", "Clinical Outcome Studies"] },
  { title: "Posters & Presentations", href: "/science/publications/posters-presentations", icon: PresentationIcon, description: "Scientific presentations at major medical conferences including AATB, WHS, ASPS, and international regenerative medicine symposia.", highlights: ["Conference Presentations", "Scientific Posters", "Invited Lectures", "Symposium Contributions"] },
  { title: "Literature Compendium", href: "/science/publications/citations", icon: BookOpenIcon, description: "Comprehensive bibliography of published research citing Tiger BioSciences products, technologies, and scientific contributions.", highlights: ["Peer-Reviewed Citations", "Case Reports & Series", "Review Articles", "Clinical Guidelines"] }
];

const sections = [
  { badge: "Why Publications Matter", title: "Scientific rigor and transparency build trust", items: [
    { title: "Clinical Confidence", description: "Peer-reviewed evidence provides clinicians with confidence in product safety, efficacy, and appropriate use." },
    { title: "Scientific Advancement", description: "Publishing our research accelerates field-wide understanding of regenerative medicine mechanisms and applications." },
    { title: "Patient Trust", description: "Transparent reporting of outcomes builds patient confidence and supports informed treatment decisions." }
  ]}
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[#efedea]">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        <Image
          src="/images/boredoptimism_innovate_--ar_169_--raw_--profile_e1dtuj2_--v_7_8ae95c00-d28b-44de-bcc4-318b0e1dcff4_0.png"
          alt="Scientific Publications"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#efedea]/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12 pb-16 md:pb-24">
            <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 block mb-4">Scientific Publications</span>
            <h1 className="font-display font-light text-[#231010] text-[clamp(36px,5vw,64px)] md:text-5xl lg:text-6xl max-w-3xl mb-6">Evidence-Based Innovation</h1>
            <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px] max-w-2xl mb-8">Tiger BioSciences is committed to advancing the scientific understanding of regenerative medicine through rigorous research and transparent publication.</p>
            <div className="flex flex-wrap gap-4">
              <TigerButton href="/contact">Request Publications</TigerButton>
              <TigerButton href="/science/pipeline" variant="secondary">View Pipeline</TigerButton>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-10 md:py-[76px]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="rounded-[12px] bg-[#e6e2dc] p-8">
                <div className="text-4xl font-display font-light text-[#231010] mb-2">{stat.value}</div>
                <h3 className="font-display text-xl font-light text-[#231010] mb-2">{stat.title}</h3>
                <p className="text-[14.6px] font-light text-[#231010]/60 leading-[26px]">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Types */}
      <section className="py-10 md:py-[76px]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 block mb-6">Scientific Output</span>
            <h2 className="font-display font-light text-[#231010] text-3xl md:text-4xl">Our published research</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {publicationTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <Link key={i} href={type.href} className="group block h-full cursor-pointer">
                  <div className="h-full rounded-[12px] bg-[#e6e2dc] p-8 transition-colors duration-200 hover:bg-[#ddd9d3]">
                    <Icon className="size-8 text-[#231010]/40 mb-4" />
                    <h3 className="font-display text-xl font-light text-[#231010] mb-3">{type.title}</h3>
                    <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px] mb-6">{type.description}</p>
                    <div className="space-y-2 mb-6">
                      {type.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-[#231010]/60">
                          <div className="mt-1 size-1.5 rounded-full bg-[#231010]/30" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-[13px] font-normal text-[#231010] tracking-[0.35px] transition-transform group-hover:translate-x-1">
                      Explore
                      <ArrowRightIcon className="ml-2 size-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, sectionIdx) => (
        <section key={sectionIdx} className="py-10 md:py-[76px]">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 block mb-6">{section.badge}</span>
              <h2 className="font-display font-light text-[#231010] text-3xl md:text-4xl">{section.title}</h2>
            </div>
            <div className={`grid grid-cols-1 gap-6 ${section.items.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
              {section.items.map((item, i) => (
                <div key={i} className="rounded-[12px] bg-[#e6e2dc] p-8">
                  <h3 className="font-display text-xl font-light text-[#231010] mb-3">{item.title}</h3>
                  <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-10 md:py-[76px]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="rounded-[12px] bg-[#e6e2dc] p-12 text-center">
            <h2 className="font-display font-light text-[#231010] text-3xl md:text-4xl tracking-[-0.015em]">Access Our Research</h2>
            <p className="mt-6 text-[14.6px] font-light text-[#231010]/70 leading-[26px] max-w-2xl mx-auto">Request a complete bibliography or specific publications</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TigerButton href="/contact">Request Publications</TigerButton>
              <TigerButton href="/resources/clinical" variant="secondary">Clinical Evidence</TigerButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
