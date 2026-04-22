import { FlaskConicalIcon, Building2Icon, HeartPulseIcon, GlobeIcon, CheckIcon } from "lucide-react";
import { notFound } from "next/navigation";

import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { StatCard } from "@/components/site/StatCard";

const divisions = {
  regentx: {
    title: "RegenTX Division",
    subtitle: "Tissue Science Redefined",
    description:
      "RegenTX leads in tissue processing and CAMP-based innovation. Rigorous protocols and advanced biotech ensure exceptional tissue quality and consistency. Scientifically driven methods and deep domain expertise set new benchmarks in the field.",
    icon: <FlaskConicalIcon className="size-12 text-brand" />,
    color: "brand",
    features: [
      "Advanced tissue processing protocols",
      "CAMP-based innovation",
      "Scientific precision manufacturing",
      "Rigorous quality standards",
      "Cutting-edge biotech research",
    ],
    stats: [
      { value: "100%", title: "Quality Assured", description: "Every tissue undergoes rigorous testing" },
      { value: "24/7", title: "Processing", description: "Continuous operations for optimal results" },
      { value: "ISO", title: "Certified", description: "Highest industry standards maintained" },
    ],
    brands: ["RegenTX", "RegenTX Labs", "Birth Tissue Recovery", "bioCARE"],
  },
  wound: {
    title: "Tiger Wound Care",
    subtitle: "Advanced CAMP Solutions for Complex Wounds",
    description:
      "Tiger Wound Care provides Cellular, Acellular, and Matrix-like Products (CAMPs) tailored for chronic and hard-to-treat wounds. Innovative research and development drive technologies suitable for all care settings. Clinically validated products support professionals in improving patient outcomes.",
    icon: <HeartPulseIcon className="size-12 text-brand" />,
    color: "blue",
    features: [
      "Clinically validated CAMP solutions",
      "Suitable for all care settings",
      "Evidence-based protocols",
      "Comprehensive product portfolio",
      "Dedicated clinical support",
    ],
    stats: [
      { value: "98%", title: "Success Rate", description: "Clinically proven outcomes" },
      { value: "1000+", title: "Clinicians", description: "Trusted by healthcare professionals" },
      { value: "50+", title: "Facilities", description: "Serving medical centers nationwide" },
    ],
    brands: ["Tiger Wound Care", "Extremity Care", "Encore Surgical Dressings"],
  },
  aesthetics: {
    title: "Tiger Aesthetics",
    subtitle: "Shaping the Future of Aesthetics",
    description:
      "Tiger Aesthetics is built for the future of regenerative aesthetics. We deliver high-quality products spanning facial rejuvenation, breast aesthetics, and body contouring. Our portfolio, grounded in innovative structural adipose tissue technologies, is complemented by products that offer providers additional head-to-toe solutions for their patients.",
    icon: <Building2Icon className="size-12 text-brand" />,
    color: "green",
    features: [
      "Reconstructive and cosmetic solutions",
      "Personalized treatment options",
      "Advanced regenerative technologies",
      "Premium product portfolio",
      "Aesthetic innovation",
    ],
    stats: [
      { value: "5", title: "Brands", description: "Leading aesthetic product lines" },
      { value: "100+", title: "Products", description: "Comprehensive aesthetic solutions" },
      { value: "25+", title: "Years", description: "Combined expertise" },
    ],
    brands: ["Tiger Aesthetics", "Sientra", "BioCreations", "Revelle Aesthetics", "Suneva"],
  },
  international: {
    title: "Tiger International",
    subtitle: "Global Access to Advanced Cell & Tissue Technologies",
    description:
      "Tiger BioSciences International enables worldwide distribution of cutting-edge cell and tissue products. Based in Germany, with a focus on regulatory excellence and international partnerships. Built to deliver CAMP innovations across borders and care systems.",
    icon: <GlobeIcon className="size-12 text-brand" />,
    color: "orange",
    features: [
      "Global distribution network",
      "Regulatory expertise",
      "International partnerships",
      "Cross-border logistics",
      "Localized support",
    ],
    stats: [
      { value: "30+", title: "Countries", description: "Global market presence" },
      { value: "EU", title: "Headquarters", description: "Based in Germany" },
      { value: "24/7", title: "Support", description: "International customer service" },
    ],
    brands: [], // ["Lizard Health Technology"],
  },
};

export async function generateStaticParams() {
  return Object.keys(divisions).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const division = divisions[slug as keyof typeof divisions];

  if (!division) {
    return {
      title: "Division Not Found",
    };
  }

  return {
    title: `${division.title} - Tiger BioSciences`,
    description: division.description,
  };
}

export default async function DivisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const division = divisions[slug as keyof typeof divisions];

  if (!division) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Hero
        subtitle={division.subtitle}
        title={division.title}
        description={division.description}
        primaryCTA={{ text: "Contact Our Team", href: "/contact" }}
        secondaryCTA={{ text: "View All Divisions", href: "/divisions" }}
      />

      {/* Key Features */}
      <Section title="Key Capabilities">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {division.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-4 backdrop-blur"
            >
              <div className={`mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-${division.color}-100 dark:bg-${division.color}-900/30`}>
                <CheckIcon className={`size-4 text-${division.color}-600`} />
              </div>
              <p className="text-sm font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      {division.stats && (
        <Section>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {division.stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                title={stat.title}
                description={stat.description}
              />
            ))}
          </div>
        </Section>
      )}

      {/* Brands */}
      <Section title="Our Brands">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {division.brands.map((brand, index) => (
            <StatCard key={index} title={brand}>
              <div className="mt-2 text-sm text-muted-foreground">
                Learn more about {brand}
              </div>
            </StatCard>
          ))}
        </div>
      </Section>
    </main>
  );
}

