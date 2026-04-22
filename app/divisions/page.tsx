import { ArrowRightIcon, Building2Icon, FlaskConicalIcon, GlobeIcon, HeartPulseIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { StatCard } from "@/components/site/StatCard";

export const metadata: Metadata = {
  title: "Our Divisions - Tiger BioSciences",
  description: "Four specialized divisions serving diverse medical technology needs",
};

export default function DivisionsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Divisions"
        description="Four specialized divisions working together to advance medical technology and patient care worldwide."
        primaryCTA={{ text: "Contact Us", href: "/contact" }}
      />

      <Section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Link href="/divisions/regentx" className="group cursor-pointer">
            <StatCard
              icon={<FlaskConicalIcon className="size-8 text-brand" />}
              title="RegenTX Division"
              description="Tissue Science Redefined. Leading in tissue processing and CAMP-based innovation with rigorous protocols and advanced biotech."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                Learn More
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>

          <Link href="/divisions/wound" className="group cursor-pointer">
            <StatCard
              icon={<HeartPulseIcon className="size-8 text-brand" />}
              title="Tiger Wound Care"
              description="Advanced CAMP Solutions for Complex Wounds. Providing innovative products tailored for chronic and hard-to-treat wounds."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                Learn More
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>

          <Link href="/divisions/aesthetics" className="group cursor-pointer">
            <StatCard
              icon={<Building2Icon className="size-8 text-brand" />}
              title="Tiger Aesthetics"
              description="Shaping the Future of Aesthetics. Delivering cutting-edge solutions across reconstructive, cosmetic, and regenerative domains."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                Learn More
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>

          <Link href="/divisions/international" className="group cursor-pointer">
            <StatCard
              icon={<GlobeIcon className="size-8 text-brand" />}
              title="Tiger International"
              description="Global Access to Advanced Cell & Tissue Technologies. All international distribution outside the United States will be centrally coordinated from Germany."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                Learn More
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>
        </div>
      </Section>
    </main>
  );
}

