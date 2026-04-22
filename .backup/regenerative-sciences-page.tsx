import { ArrowRightIcon, FlaskConicalIcon, MicroscopeIcon, AtomIcon, DnaIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { StatCard } from "@/components/site/StatCard";

export const metadata: Metadata = {
  title: "Regenerative Sciences - Tiger BioSciences",
  description: "Advanced tissue processing, research and development, and regenerative medicine solutions",
};

const solutions = [
  {
    title: "Regenerative Medicine",
    href: "/solutions/regenerative",
    icon: <FlaskConicalIcon className="size-8 text-brand" />,
    description: "Cutting-edge regenerative medicine solutions leveraging cellular and acellular technologies to promote natural healing and tissue regeneration.",
    highlights: [
      "Cell-Based Therapies",
      "Tissue Engineering",
      "Biologics & Scaffolds",
      "Clinical Applications",
    ],
  },
  {
    title: "RegenTX Labs",
    href: "/solutions/regentx-labs",
    icon: <MicroscopeIcon className="size-8 text-brand" />,
    description: "Advanced research facilities driving next-generation tissue solutions through innovative materials and techniques with scientific precision.",
    highlights: [
      "R&D Innovation",
      "Quality Testing",
      "Process Development",
      "Scientific Excellence",
    ],
  },
  {
    title: "Birth Tissue Sciences",
    href: "/solutions/birth-tissue",
    icon: <DnaIcon className="size-8 text-brand" />,
    description: "Ethical tissue recovery programs with rigorous safety standards, partnering with trusted hospitals under strict regulatory compliance.",
    highlights: [
      "Ethical Recovery",
      "Regulatory Compliance",
      "Quality Assurance",
      "Donor Screening",
    ],
  },
  {
    title: "Biocare Division",
    href: "/solutions/biocare",
    icon: <AtomIcon className="size-8 text-brand" />,
    description: "Comprehensive tissue banking and processing services ensuring dependable, high-quality products for clinicians worldwide.",
    highlights: [
      "Tissue Banking",
      "Processing Services",
      "Quality Control",
      "Global Distribution",
    ],
  },
];

export default function RegenerativeSciencesPage() {
  return (
    <main className="min-h-screen">
      <Hero
        subtitle="Regenerative Sciences"
        title="Pioneering the Future of Tissue Science"
        description="Tiger BioSciences leads in tissue processing and CAMP-based innovation through rigorous protocols, advanced biotech, and scientific precision. Our regenerative sciences division encompasses research, development, tissue recovery, and comprehensive processing services that set new industry benchmarks."
        primaryCTA={{ text: "Request a Demo", href: "/contact" }}
        secondaryCTA={{ text: "View All Solutions", href: "/solutions" }}
      />

      {/* Stats Section */}
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            value="100%"
            title="Vertically Integrated"
            description="Complete control from tissue to product"
          />
          <StatCard
            value="ISO"
            title="Certified Facilities"
            description="Highest industry standards maintained"
          />
          <StatCard
            value="R&D"
            title="Innovation Labs"
            description="Advancing next-generation solutions"
          />
          <StatCard
            value="24/7"
            title="Processing"
            description="Continuous operations for quality"
          />
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section title="Our Regenerative Sciences Portfolio">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {solutions.map((solution) => (
            <Link key={solution.href} href={solution.href} className="group">
              <StatCard icon={solution.icon} title={solution.title} description={solution.description}>
                <div className="mt-6 space-y-2">
                  {solution.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <div className="mt-1 size-1.5 rounded-full bg-brand" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                  Learn More
                  <ArrowRightIcon className="ml-2 size-4" />
                </div>
              </StatCard>
            </Link>
          ))}
        </div>
      </Section>

      {/* The Tiger Process */}
      <Section
        title="The Tiger Way: Vertical Integration"
        description="Complete oversight from donor screening to distribution ensures unparalleled quality"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "1",
              title: "Tissue Recovery",
              description: "Partnering with trusted hospitals under rigorous ethical and regulatory standards",
            },
            {
              step: "2",
              title: "Tissue Processing",
              description: "Careful preparation and controlled preservation under one roof with advanced protocols",
            },
            {
              step: "3",
              title: "Research & Development",
              description: "Innovative materials and techniques for next-generation regenerative solutions",
            },
            {
              step: "4",
              title: "Distribution",
              description: "Fast, precise delivery ensuring products reach clinicians safely and on time",
            },
          ].map((item) => (
            <StatCard key={item.step} title={item.title} description={item.description}>
              <div className="mt-4 flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand/20 to-accent/20 text-2xl font-bold">
                {item.step}
              </div>
            </StatCard>
          ))}
        </div>
      </Section>

      {/* Key Benefits */}
      <Section
        title="Why Choose Tiger Regenerative Sciences"
        description="Scientific excellence meets operational precision"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Scientific Rigor"
            description="Every stage of tissue processing follows rigorous protocols backed by scientific research and validated through comprehensive testing."
          />
          <StatCard
            title="Quality Assurance"
            description="ISO-certified facilities and continuous quality monitoring ensure every product meets the highest standards for safety and efficacy."
          />
          <StatCard
            title="Innovation Pipeline"
            description="Dedicated R&D teams continuously advancing tissue engineering and regenerative medicine through cutting-edge research."
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand/5 to-accent/5 p-12 text-center backdrop-blur">
          <h2 className="text-3xl font-semibold">Partner with Tiger Regenerative Sciences</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Experience the power of vertically integrated tissue processing and innovation
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110"
            >
              Request a Demo
            </Link>
            <Link
              href="/divisions/regentx"
              className="rounded-lg border border-border/60 bg-card/70 px-6 py-3 font-semibold transition-colors hover:bg-muted"
            >
              Learn About RegenTX
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
