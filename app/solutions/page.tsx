"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";
import { Card, CardBody } from "@/components/ui/card";
import { FlaskConicalIcon, HeartPulseIcon, MicroscopeIcon } from "lucide-react";

const woundCare = [
  {
    icon: HeartPulseIcon,
    title: "Tiger Wound Care",
    description: "Innovative research and development driving technologies suitable for all care settings",
    href: "/solutions/wound-care"
  },
  {
    icon: HeartPulseIcon,
    title: "Extremity Care",
    description: "Specialized solutions for extremity wounds with clinically validated products",
    href: "/solutions/reconstruction"
  },
  {
    icon: HeartPulseIcon,
    title: "Encore Surgical Dressings",
    description: "Professional-grade surgical dressings supporting improved patient outcomes",
    href: "/solutions/dressings"
  }
];

const aesthetics = [
  {
    icon: MicroscopeIcon,
    title: "Tiger Aesthetics",
    description: "Personalized solutions maximizing clinical results across aesthetic practice",
    href: "/solutions/aesthetics"
  },
  {
    icon: MicroscopeIcon,
    title: "Sientra",
    description: "Advanced breast aesthetics and body contouring solutions",
    href: "/solutions/shape"
  },
  {
    icon: MicroscopeIcon,
    title: "BioCreations",
    description: "Innovative regenerative solutions for aesthetic applications",
    href: "/solutions/renewal"
  },
  {
    icon: MicroscopeIcon,
    title: "Revelle Aesthetics",
    description: "Premium aesthetic products for discerning practitioners",
    href: "/solutions/volume"
  },
  {
    icon: MicroscopeIcon,
    title: "Suneva",
    description: "Advanced dermal fillers and aesthetic injectables",
    href: "/solutions/aesthetics"
  }
];

const tissueSciences = [
  {
    icon: FlaskConicalIcon,
    title: "RegenTX",
    description: "Leading in tissue processing and CAMP-based innovation with scientific precision",
    href: "/solutions/regenerative"
  },
  {
    icon: FlaskConicalIcon,
    title: "RegenTX Labs",
    description: "Advanced research facilities driving next-generation tissue solutions",
    href: "/solutions/regentx-labs"
  },
  {
    icon: FlaskConicalIcon,
    title: "Birth Tissue Recovery",
    description: "Ethical tissue recovery programs with rigorous safety standards",
    href: "/solutions/birth-tissue"
  },
  {
    icon: FlaskConicalIcon,
    title: "bioCARE",
    description: "Comprehensive tissue banking and processing services",
    href: "/solutions/biocare"
  }
];

const international = [];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Solutions"
        description="Comprehensive medical technology solutions designed to advance patient care across multiple therapeutic areas."
        primaryCTA={{ text: "Contact Our Team", href: "/contact" }}
        secondaryCTA={{ text: "View Divisions", href: "/divisions" }}
        backgroundVideo="/images/social_boredoptimism_close_up_of_Tiger_eye_--ar_9151_--bs_1_--motion_0647411b-082c-4933-9b4c-b3eee78d34ba_0.mp4"
        size="extra-large"
      />

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Wound Care & Pain Management
            </span>
            <h2 className="text-h1 text-foreground">
              Advanced CAMP solutions for chronic and hard-to-treat wounds
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {woundCare.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <a href={item.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                      <CardBody>
                        <Icon className="size-6 text-brand mb-4" />
                        <h3 className="text-h3 font-light">{item.title}</h3>
                        <p className="font-body text-muted-foreground">{item.description}</p>
                      </CardBody>
                    </Card>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Soft Tissue Reconstruction & Aesthetics
            </span>
            <h2 className="text-h1 text-foreground">
              Cutting-edge solutions across reconstructive, cosmetic, and regenerative domains
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aesthetics.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <a href={item.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                      <CardBody>
                        <Icon className="size-6 text-brand mb-4" />
                        <h3 className="text-h3 font-light">{item.title}</h3>
                        <p className="font-body text-muted-foreground">{item.description}</p>
                      </CardBody>
                    </Card>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Tissue R&D, Processing and Recovery
            </span>
            <h2 className="text-h1 text-foreground">
              Rigorous protocols and advanced biotech ensuring exceptional tissue quality
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tissueSciences.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <a href={item.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                      <CardBody>
                        <Icon className="size-6 text-brand mb-4" />
                        <h3 className="text-h3 font-light">{item.title}</h3>
                        <p className="font-body text-muted-foreground">{item.description}</p>
                      </CardBody>
                    </Card>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Tiger International
            </span>
            <h2 className="text-h1 text-foreground">
              Global access to advanced cell and tissue technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {international.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <a href={item.href}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                      <CardBody>
                        <Icon className="size-6 text-brand mb-4" />
                        <h3 className="text-h3 font-light">{item.title}</h3>
                        <p className="font-body text-muted-foreground">{item.description}</p>
                      </CardBody>
                    </Card>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
