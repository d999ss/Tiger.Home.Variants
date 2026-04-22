import { Building2Icon, FlaskConicalIcon, GlobeIcon, HeartPulseIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

import CTA from "../../components/sections/cta/default";
import FAQ from "../../components/sections/faq/default";
import Footer from "../../components/sections/footer/default";
import Hero from "../../components/sections/hero/default";
import Items from "../../components/sections/items/default";
import Logos from "../../components/sections/logos/default";
import Navbar from "../../components/sections/navbar/default";
import Stats from "../../components/sections/stats/default";
import { Section } from "@/components/site/Section";
import { StatCard } from "@/components/site/StatCard";

export const metadata: Metadata = {
  title: "Tiger BioSciences - Medical Technology Innovation",
  description: "Global leader in medical technology, delivering cutting-edge solutions for clinicians worldwide",
};

export default function TigerBioSciencesTemplate() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Navbar
        name="Tiger BioSciences"
        homeUrl="/tiger"
        mobileLinks={[
          { text: "Our Solutions", href: "#solutions" },
          { text: "About", href: "#about" },
          { text: "Careers", href: "#careers" },
          { text: "Contact", href: "#contact" },
        ]}
        actions={[
          { text: "Contact", href: "#contact", isButton: false },
          {
            text: "Our Solutions",
            href: "#solutions",
            isButton: true,
            variant: "default",
          },
        ]}
      />
      
      <Hero
        title="Leading Innovation in Medical Technology"
        description="Tiger BioSciences is a global leader in medical technology, dedicated to delivering cutting-edge solutions for clinicians worldwide. Specializing in cellular, acellular, and matrix-like products (CAMPS), we are advancing wound care, soft tissue reconstruction, and aesthetics."
        badge={false}
        buttons={[
          {
            href: "#solutions",
            text: "Explore Our Solutions",
            variant: "default",
          },
          {
            href: "#contact",
            text: "Contact Us",
            variant: "glow",
          },
        ]}
      />

      <section id="about" className="py-24">
        <div className="max-w-container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
              The Tiger Way: The Power of Vertical Integration
            </h2>
            <p className="text-muted-foreground max-w-[740px] text-lg font-medium">
              Our distinct advantage lies in our fully integrated approach—we oversee every stage 
              of our products, from donor screening and tissue collection to research and development, 
              manufacturing, and distribution.
            </p>
          </div>
        </div>
      </section>

      <Stats
        items={[
          {
            value: "Leader",
            label: "Global Presence",
            description: "Trusted by healthcare institutions worldwide",
          },
          {
            value: "100%",
            label: "Vertically Integrated",
            description: "Complete control from tissue to distribution",
          },
          {
            value: "4",
            label: "Core Divisions",
            description: "Serving diverse medical technology needs",
          },
          {
            value: "24/7",
            label: "Global Support",
            description: "Supporting clinicians around the clock",
          },
        ]}
      />

      {/* Solution Hubs Section */}
      <Section title="Our Solution Portfolios" description="Explore our comprehensive solutions across three specialized areas">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/solutions/wound-care" className="group cursor-pointer">
            <StatCard
              icon={<HeartPulseIcon className="size-6 text-brand" />}
              title="Wound Care Solutions"
              description="Advanced CAMP solutions for chronic wounds, extremity reconstruction, and surgical dressings."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                Explore Solutions
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>

          <Link href="/solutions/aesthetics" className="group cursor-pointer">
            <StatCard
              icon={<Building2Icon className="size-6 text-green-600" />}
              title="Aesthetic Solutions"
              description="Cutting-edge solutions for reconstruction, shape, renewal, and volume across aesthetic medicine."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-green-600 transition-transform group-hover:translate-x-1">
                Explore Solutions
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>

          <Link href="/solutions/international" className="group cursor-pointer">
            <StatCard
              icon={<GlobeIcon className="size-6 text-brand" />}
              title="International"
              description="Global access to advanced cell and tissue technologies through our international division."
            >
              <div className="mt-4 flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                Explore Solutions
                <ArrowRightIcon className="ml-2 size-4" />
              </div>
            </StatCard>
          </Link>
        </div>
      </Section>

      <section id="solutions">
        <Items
          title="Our Divisions"
          items={[
            {
              icon: <FlaskConicalIcon className="size-5 stroke-1" />,
              title: "RegenTX Division",
              description:
                "Tissue Science Redefined. Leading in tissue processing and CAMP-based innovation with rigorous protocols and advanced biotech.",
            },
            {
              icon: <HeartPulseIcon className="size-5 stroke-1" />,
              title: "Tiger Wound Care",
              description:
                "Advanced CAMP Solutions for Complex Wounds. Providing innovative products tailored for chronic and hard-to-treat wounds.",
            },
            {
              icon: <Building2Icon className="size-5 stroke-1" />,
              title: "Tiger Aesthetics",
              description:
                "Shaping the Future of Aesthetics. Delivering cutting-edge solutions across reconstructive, cosmetic, and regenerative domains.",
            },
            {
              icon: <GlobeIcon className="size-5 stroke-1" />,
              title: "Tiger International",
              description:
                "Global Access to Advanced Cell & Tissue Technologies. Enabling worldwide distribution of cutting-edge products from Germany.",
            },
          ]}
        />
      </section>

      <section className="bg-muted/30 py-24">
        <div className="max-w-container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-4">
              <div className="from-foreground/10 to-foreground/5 flex size-12 items-center justify-center rounded-lg bg-linear-to-br">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold">Tissue Recovery</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We oversee the complete tissue recovery process with trusted hospitals and 
                donor programs under rigorous ethical, safety, and regulatory standards.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="from-foreground/10 to-foreground/5 flex size-12 items-center justify-center rounded-lg bg-linear-to-br">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold">Tissue Processing</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our processing pipeline ensures careful preparation, rigorous cleansing, 
                and controlled preservation—creating dependable products for clinicians.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="from-foreground/10 to-foreground/5 flex size-12 items-center justify-center rounded-lg bg-linear-to-br">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold">Research & Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Multidisciplinary teams explore innovative materials and techniques, 
                pushing boundaries to develop next-generation solutions.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="from-foreground/10 to-foreground/5 flex size-12 items-center justify-center rounded-lg bg-linear-to-br">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold">Distribution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fast, precise delivery with advanced packaging and expert handling, 
                ensuring products reach clinicians safely and on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Logos
        title="Trusted by Leading Healthcare Institutions"
        badge={false}
      />

      <section id="careers">
        <CTA
          title="Be at the Forefront of Innovation"
          buttons={[
            {
              href: "#contact",
              text: "Explore Career Opportunities",
              variant: "default",
            },
            {
              href: "tel:+18886655005",
              text: "Call Us: 1-888-665-5005",
              variant: "glow",
            },
          ]}
        />
      </section>

      <FAQ
        title="Frequently Asked Questions"
        items={[
          {
            question: "What makes Tiger BioSciences unique?",
            answer:
              "Our fully integrated approach sets us apart. We oversee every stage—from donor screening and tissue collection to R&D, manufacturing, and distribution—ensuring unparalleled quality and accountability.",
          },
          {
            question: "What are CAMPs?",
            answer:
              "CAMPS stands for Cellular, Acellular, and Matrix-like Products. These are advanced medical technologies used in wound care, soft tissue reconstruction, and aesthetic procedures.",
          },
          {
            question: "Where is Tiger BioSciences located?",
            answer:
              "Our headquarters are located at 555 E North Ln, Ste 5000, Bldg D, Conshohocken, PA 19428. We also have international operations including Tiger BioSciences International based in Germany.",
          },
          {
            question: "How can I partner with Tiger BioSciences?",
            answer:
              "We welcome partnership opportunities. Please contact us at 1-888-665-5005 or use our contact form to discuss potential collaborations.",
          },
          {
            question: "What divisions does Tiger BioSciences operate?",
            answer:
              "We operate four main divisions: RegenTX (Tissue Processing & R&D), Tiger Wound Care (Advanced Wound Solutions), Tiger Aesthetics (Reconstructive & Aesthetic Solutions), and Tiger International (Global Distribution).",
          },
        ]}
      />

      <section id="contact" className="border-border border-t">
        <Footer />
      </section>
    </main>
  );
}

