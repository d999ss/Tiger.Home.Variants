import { ArrowRightIcon, HeartPulseIcon, ActivityIcon, BandageIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { StatCard } from "@/components/site/StatCard";

export const metadata: Metadata = {
  title: "Wound Care Solutions - Tiger BioSciences",
  description: "Advanced CAMP solutions for chronic and complex wound care, extremity reconstruction, and surgical dressings",
};

const solutions = [
  {
    title: "Wound Care",
    href: "/solutions/wound",
    icon: <HeartPulseIcon className="size-8 text-brand" />,
    description: "Innovative research and development driving technologies suitable for all care settings. Advanced CAMP solutions tailored for chronic and hard-to-treat wounds.",
    highlights: [
      "CAMPs Technology Platform",
      "Chronic Wound Management",
      "Advanced Tissue Scaffolds",
      "Clinical Evidence-Based",
    ],
  },
  {
    title: "Extremity Reconstruction",
    href: "/solutions/reconstruction",
    icon: <ActivityIcon className="size-8 text-brand" />,
    description: "Specialized solutions for extremity wounds and reconstruction with clinically validated products designed for complex cases.",
    highlights: [
      "Extremity Care Products",
      "Bone & Soft Tissue Reconstruction",
      "Surgical Solutions",
      "Proven Clinical Outcomes",
    ],
  },
  {
    title: "Surgical Dressings",
    href: "/solutions/dressings",
    icon: <BandageIcon className="size-8 text-brand" />,
    description: "Professional-grade surgical dressings supporting improved patient outcomes across diverse clinical applications.",
    highlights: [
      "Encore Dressing Line",
      "Advanced Materials",
      "Antimicrobial Options",
      "Post-Operative Care",
    ],
  },
];

export default function WoundCareSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        subtitle="Wound Care Solutions"
        title="Advanced Solutions for Complex Wound Management"
        description="Tiger BioSciences delivers cutting-edge cellular, acellular, and matrix-like products (CAMPs) designed to address the most challenging wound care needs. From chronic wounds to extremity reconstruction and surgical dressings, our solutions combine scientific innovation with proven clinical outcomes."
        primaryCTA={{ text: "Request a Demo", href: "/contact" }}
        secondaryCTA={{ text: "View All Solutions", href: "/solutions" }}
      />

      {/* Stats Section */}
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            value="CAMPs"
            title="Technology Platform"
            description="Cellular, acellular, and matrix-like products"
          />
          <StatCard
            value="100%"
            title="Quality Tested"
            description="Every product meets rigorous standards"
          />
          <StatCard
            value="Clinical"
            title="Evidence-Based"
            description="Backed by peer-reviewed research"
          />
          <StatCard
            value="Global"
            title="Distribution"
            description="Supporting clinicians worldwide"
          />
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section title="Our Wound Care Portfolio">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
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

      {/* Key Benefits */}
      <Section
        title="Why Choose Tiger BioSciences for Wound Care"
        description="Our integrated approach ensures quality, consistency, and clinical excellence"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Vertically Integrated"
            description="Complete control from tissue recovery through processing, R&D, manufacturing, and distribution ensures unmatched quality and traceability."
          />
          <StatCard
            title="Scientific Excellence"
            description="Advanced tissue processing protocols and rigorous testing standards backed by cutting-edge research and development."
          />
          <StatCard
            title="Clinical Support"
            description="Dedicated support team providing education, training, and ongoing clinical guidance to optimize patient outcomes."
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-brand/5 to-accent/5 p-12 text-center backdrop-blur">
          <h2 className="text-3xl font-semibold">Ready to Transform Wound Care?</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Connect with our team to learn how our solutions can improve patient outcomes
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-brand px-6 py-3 font-semibold text-brand-foreground transition-colors hover:brightness-110"
            >
              Request a Demo
            </Link>
            <Link
              href="/products"
              className="rounded-lg border border-border/60 bg-card/70 px-6 py-3 font-semibold transition-colors hover:bg-muted"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
