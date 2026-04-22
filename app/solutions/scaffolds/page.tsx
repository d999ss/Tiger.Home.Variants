"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hero } from "@/components/site/Hero";

const valueProp = [
  { title: "Advanced Frameworks", description: "Structural platforms engineered for natural repair." },
  { title: "Accelerated Recovery", description: "Technologies designed to support the body's repair processes." },
  { title: "Biological Integration", description: "Frameworks that work with native tissue systems." }
];

const relatedProducts = [
  { title: "caregraFT™", href: "/products/caregraft", description: "Advanced scaffold platform for regeneration." },
  { title: "completeFT®", href: "/products/completeft", description: "Full-thickness scaffold for tissue repair applications." }
];

const clinicalApplications = [
  { title: "Natural Repair Support", description: "Advanced frameworks engineered to accelerate the body's natural repair mechanisms." },
  { title: "Structural Foundation", description: "Technologies that provide scaffolding for tissue regeneration and development." },
  { title: "Biological Acceleration", description: "Platforms designed to enhance and support natural healing processes." }
];

export default function ScaffoldsSolutions() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Scaffolds"
        description="Advanced frameworks that accelerate the body's natural repair processes."
        backgroundImage="/images/05.png"
        size="large"
      />

      {/* Value Propositions */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-lead text-foreground/80 max-w-4xl mx-auto">
              Tiger BioSciences develops advanced scaffold technologies that unite structural engineering with biological intelligence, creating frameworks that accelerate natural repair and tissue regeneration.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {valueProp.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-lg p-8 shadow-card h-full">
                  <h3 className="text-h3 font-light mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Applications */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Clinical Focus</span>
            <h2 className="text-h1 text-foreground">Scaffold Applications</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {clinicalApplications.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-lg p-8 shadow-card h-full">
                  <h3 className="text-h3 font-light">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">Product Portfolio</span>
            <h2 className="text-h1 text-foreground">Explore Scaffold Technologies</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedProducts.map((product, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <Link href={product.href} className="group block h-full">
                  <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-lg p-8 shadow-card h-full hover:shadow-lg transition-shadow duration-200">
                    <h3 className="text-h3 font-light group-hover:text-brand transition-colors">{product.title}</h3>
                    <p className="font-body text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex items-center text-sm font-semibold text-brand transition-transform group-hover:translate-x-1">
                      Learn More
                      <svg className="ml-2 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
