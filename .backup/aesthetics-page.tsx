import { ArrowRightIcon, SparklesIcon, ZapIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { StatCard } from "@/components/site/StatCard";

export const metadata: Metadata = {
  title: "Aesthetic Solutions - Tiger BioSciences",
  description: "Cutting-edge aesthetic solutions across reconstructive, cosmetic, and regenerative domains",
};

const solutions = [
  {
    title: "Shape",
    href: "/solutions/shape",
    icon: <SparklesIcon className="size-8 text-green-600" />,
    description: "Advanced solutions for body contouring and shaping, including breast aesthetics and implant technologies designed for natural results.",
    highlights: [
      "Breast Aesthetics",
      "Body Contouring",
      "Implant Technologies",
      "Natural Results",
    ],
  },
  {
    title: "Renewal",
    href: "/solutions/renewal",
    icon: <ZapIcon className="size-8 text-green-600" />,
    description: "Innovative regenerative and rejuvenation therapies that restore youthful appearance through advanced cellular technologies.",
    highlights: [
      "Skin Rejuvenation",
      "Facial Renewal",
      "Regenerative Therapies",
      "Minimally Invasive",
    ],
  },
  {
    title: "Volume",
    href: "/solutions/volume",
    icon: <StarIcon className="size-8 text-green-600" />,
    description: "Premium dermal fillers and volume restoration solutions for facial aesthetics and soft tissue augmentation.",
    highlights: [
      "Dermal Fillers",
      "Volume Restoration",
      "Facial Contouring",
      "Long-Lasting Results",
    ],
  },
];

export default function AestheticSolutionsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        subtitle="Aesthetic Solutions"
        title="Shaping the Future of Aesthetic Medicine"
        description="Tiger BioSciences delivers cutting-edge solutions across reconstructive, cosmetic, and regenerative domains. Our aesthetic portfolio combines innovation, safety, and proven clinical outcomes to help practitioners deliver exceptional results for their patients."
        primaryCTA={{ text: "Request a Demo", href: "/contact" }}
        secondaryCTA={{ text: "View All Solutions", href: "/solutions" }}
      />

      {/* Stats Section */}
      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            value="Premium"
            title="Product Line"
            description="Industry-leading aesthetic solutions"
          />
          <StatCard
            value="FDA"
            title="Approved"
            description="Rigorous safety and efficacy testing"
          />
          <StatCard
            value="Global"
            title="Brands"
            description="Trusted by practitioners worldwide"
          />
          <StatCard
            value="Clinical"
            title="Excellence"
            description="Backed by scientific research"
          />
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section title="Our Aesthetic Portfolio">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Link key={solution.href} href={solution.href} className="group">
              <StatCard icon={solution.icon} title={solution.title} description={solution.description}>
                <div className="mt-6 space-y-2">
                  {solution.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                      <div className="mt-1 size-1.5 rounded-full bg-green-600" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center text-sm font-semibold text-green-600 transition-transform group-hover:translate-x-1">
                  Learn More
                  <ArrowRightIcon className="ml-2 size-4" />
                </div>
              </StatCard>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured Brands */}
      <Section
        title="Our Aesthetic Brands"
        description="Leading brands trusted by aesthetic practitioners worldwide"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Sientra",
              description: "Advanced breast aesthetics and body contouring solutions",
            },
            {
              name: "BioCreations",
              description: "Innovative regenerative solutions for aesthetic applications",
            },
            {
              name: "Revelle Aesthetics",
              description: "Premium aesthetic products for discerning practitioners",
            },
            {
              name: "Suneva",
              description: "Advanced dermal fillers and aesthetic injectables",
            },
          ].map((brand) => (
            <StatCard key={brand.name} title={brand.name} description={brand.description} />
          ))}
        </div>
      </Section>

      {/* Key Benefits */}
      <Section
        title="Why Choose Tiger Aesthetics"
        description="Comprehensive solutions backed by science and innovation"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="Diverse Portfolio"
            description="Complete range of aesthetic solutions from fillers and injectables to implants and regenerative therapies across multiple trusted brands."
          />
          <StatCard
            title="Clinical Support"
            description="Dedicated education and training programs to help practitioners maximize results and build their aesthetic practice."
          />
          <StatCard
            title="Quality Assurance"
            description="Every product meets the highest standards for safety, efficacy, and consistency through rigorous testing and quality control."
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-green-600/5 to-brand/5 p-12 text-center backdrop-blur">
          <h2 className="text-3xl font-semibold">Elevate Your Aesthetic Practice</h2>
          <p className="mt-4 text-lg text-foreground/70">
            Discover how our innovative solutions can help you deliver exceptional patient outcomes
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
              View Products
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
