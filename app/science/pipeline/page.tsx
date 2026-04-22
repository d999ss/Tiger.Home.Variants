"use client";

import Link from "next/link";
import Image from "next/image";
import { FlaskConicalIcon, ClipboardListIcon, UsersIcon, ArrowRightIcon } from "lucide-react";
import { TigerButton } from "@/components/ui/tiger-button";

const stats = [
  { value: "Multiple", title: "Active Programs", description: "Across wound care, aesthetics, and regenerative medicine" },
  { value: "Clinical", title: "Trial Portfolio", description: "Phase II/III studies with leading institutions" },
  { value: "Strategic", title: "Partnerships", description: "Academic and clinical collaborations globally" },
  { value: "Patient", title: "Focused", description: "Every study designed to improve outcomes" }
];

const programs = [
  { title: "Current Programs", href: "/science/pipeline/current-programs", icon: FlaskConicalIcon, description: "Ongoing research initiatives spanning from early-stage discovery to late-phase clinical development across our therapeutic areas.", highlights: ["Novel CAMPs Platforms", "Regenerative Medicine Programs", "Aesthetic Innovation Pipeline", "International Expansion Studies"] },
  { title: "Clinical Trials", href: "/science/pipeline/clinical-trials", icon: ClipboardListIcon, description: "Active and planned clinical trials evaluating safety, efficacy, and clinical outcomes of our investigational therapies.", highlights: ["Phase II/III Wound Healing Studies", "Long-term Safety Monitoring", "Comparative Effectiveness Research", "Real-World Evidence Collection"] },
  { title: "Study Partners", href: "/science/pipeline/study-partners", icon: UsersIcon, description: "Collaborations with leading academic medical centers, research institutions, and clinical investigators driving innovation.", highlights: ["Academic Partnerships", "Clinical Research Organizations", "Medical Advisory Network", "International Collaborators"] }
];

const sections = [
  { badge: "Pipeline Strength", title: "Why our research pipeline delivers impact", items: [
    { title: "Vertically Integrated Research", description: "End-to-end control from tissue sourcing through clinical validation enables rapid iteration and rigorous quality control." },
    { title: "Academic Excellence", description: "Partnerships with premier research institutions and KOLs ensure scientific rigor and clinical relevance." },
    { title: "Patient-Centered Design", description: "Every program prioritizes meaningful clinical endpoints and real-world effectiveness to improve patient outcomes." }
  ]}
];

export default function PipelinePage() {
  return (
    <main className="min-h-screen bg-[#efedea]">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        <Image
          src="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png"
          alt="Research Pipeline"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#efedea]/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12 pb-16 md:pb-24">
            <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 block mb-4">Research Pipeline</span>
            <h1 className="font-display font-light text-[#231010] text-[clamp(36px,5vw,64px)] md:text-5xl lg:text-6xl max-w-3xl mb-6">Advancing the Science of Regenerative Medicine</h1>
            <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px] max-w-2xl mb-8">Tiger BioSciences maintains a robust research pipeline spanning early discovery through clinical validation.</p>
            <div className="flex flex-wrap gap-4">
              <TigerButton href="/contact">Contact Research Team</TigerButton>
              <TigerButton href="/science/publications" variant="secondary">View Publications</TigerButton>
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

      {/* Programs */}
      <section className="py-10 md:py-[76px]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 block mb-6">Research Pipeline</span>
            <h2 className="font-display font-light text-[#231010] text-3xl md:text-4xl">Driving innovation across programs</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {programs.map((program, i) => {
              const Icon = program.icon;
              return (
                <Link key={i} href={program.href} className="group block h-full cursor-pointer">
                  <div className="h-full rounded-[12px] bg-[#e6e2dc] p-8 transition-colors duration-200 hover:bg-[#ddd9d3]">
                    <Icon className="size-8 text-[#231010]/40 mb-4" />
                    <h3 className="font-display text-xl font-light text-[#231010] mb-3">{program.title}</h3>
                    <p className="text-[14.6px] font-light text-[#231010]/70 leading-[26px] mb-6">{program.description}</p>
                    <div className="space-y-2 mb-6">
                      {program.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-[#231010]/60">
                          <div className="mt-1 size-1.5 rounded-full bg-[#231010]/30" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-[13px] font-normal text-[#231010] tracking-[0.35px] transition-transform group-hover:translate-x-1">
                      Learn More
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
            <h2 className="font-display font-light text-[#231010] text-3xl md:text-4xl tracking-[-0.015em]">Partner with Our Research Team</h2>
            <p className="mt-6 text-[14.6px] font-light text-[#231010]/70 leading-[26px] max-w-2xl mx-auto">Interested in collaborating on clinical research or learning more about our pipeline?</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <TigerButton href="/contact">Contact Research Team</TigerButton>
              <TigerButton href="/science/publications" variant="secondary">View Publications</TigerButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
