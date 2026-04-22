import { ArrowRightIcon, GlobeIcon, ActivityIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { StatCard } from "@/components/site/StatCard";

export const metadata: Metadata = {
  title: "International Solutions - Tiger BioSciences",
  description: "Global access to advanced cell and tissue technologies through our international division",
};

const solutions = [
  {
    title: "Health Technology Systems",
    href: "/solutions/international/health-tech",
    icon: <GlobeIcon className="size-8 text-brand" />,
    description: "Based in Germany, Lizard Health Technology delivers CAMP innovations across borders and care systems, bringing advanced cellular and tissue solutions to international markets.",
    highlights: [
      "European Distribution",
      "CAMPs Technology",
      "Regulatory Compliance",
      "International Standards",
    ],
  },
  {
    title: "Airway Systems",
    href: "/solutions/international/airway",
    icon: <ActivityIcon className="size-8 text-brand" />,
    description: "Specialized airway management and respiratory solutions designed for clinical excellence across diverse healthcare settings worldwide.",
    highlights: [
      "Airway Management",
      "Respiratory Solutions",
      "Clinical Innovation",
      "Global Support",
    ],
  },
];

export default function InternationalSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        subtitle="International Solutions"
        title="Global Access to Advanced Medical Technologies"
        description="Tiger BioSciences International enables worldwide distribution of cutting-edge cell and tissue technologies. Based in Germany, our international division brings the same quality, innovation, and clinical excellence that defines Tiger BioSciences to healthcare providers across global markets."
        primaryCTA={{ text: "Request a Demo", href: "/contact" }}
        secondaryCTA={{ text: "View All Solutions", href: "/solutions" }}
      />

      {/* Stats Section */}
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            value="Global"
            title="Market Reach"
            description="Serving healthcare providers worldwide"
          />
          <StatCard
            value="CE"
            title="Certified"
            description="European regulatory compliance"
          />
          <StatCard
            value="Germany"
            title="European Hub"
            description="Strategic location for distribution"
          />
          <StatCard
            value="24/7"
            title="Support"
            description="International customer service"
          />
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section title="Our International Portfolio">
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

      {/* Regional Coverage */}
      <Section
        title="International Presence"
        description="Strategic positioning to serve global healthcare markets"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <StatCard
            title="European Markets"
            description="Comprehensive coverage across EU member states with full regulatory compliance and local support infrastructure."
          />
          <StatCard
            title="Middle East & Africa"
            description="Growing presence in emerging markets with dedicated distribution partnerships and clinical education programs."
          />
          <StatCard
            title="Asia Pacific"
            description="Strategic expansion into key Asian markets, bringing advanced tissue technologies to the fastest-growing healthcare regions."
          />
        </div>
      </Section>

      {/* Key Advantages */}
      <Section
        title="Why Choose Tiger International"
        description="The same Tiger excellence with global reach"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Quality Standards"
            description="All products meet the same rigorous Tiger BioSciences quality standards regardless of market, ensuring consistent excellence worldwide."
          />
          <StatCard
            title="Regulatory Expertise"
            description="Deep understanding of international regulatory requirements across multiple jurisdictions, ensuring compliant and timely market access."
          />
          <StatCard
            title="Local Support"
            description="Regional teams provide localized training, education, and technical support in multiple languages and time zones."
          />
        </div>
      </Section>

      {/* Tiger International Brands */}
      <Section title="Our International Brands">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <StatCard
            icon={<GlobeIcon className="size-8 text-brand" />}
            title="Lizard Health Technology"
            description="Based in Germany, Lizard Health Technology serves as our European hub for advanced CAMP solutions, delivering tissue-based innovations across continental markets with full CE certification and local expertise."
          />
          <StatCard
            icon={<ActivityIcon className="size-8 text-brand" />}
            title="Airway Medix"
            description="Specialized provider of airway management and respiratory solutions, offering innovative medical devices designed for clinical excellence in critical care and surgical environments worldwide."
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand/5 to-accent/5 p-12 text-center backdrop-blur">
          <h2 className="text-3xl font-semibold">Expand Your Global Reach</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Partner with Tiger International to access advanced medical technologies worldwide
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110"
            >
              Contact International Team
            </Link>
            <Link
              href="/divisions/international"
              className="rounded-lg border border-border/60 bg-card/70 px-6 py-3 font-semibold transition-colors hover:bg-muted"
            >
              Learn About Our Division
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
