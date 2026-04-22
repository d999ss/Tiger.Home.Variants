"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";
import { Card, CardBody } from "@/components/ui/card";

const environmental = [
  { title: "Energy Efficiency", content: "Our manufacturing facilities utilize energy-efficient systems, renewable energy sources, and smart building technologies to reduce carbon emissions and energy consumption." },
  { title: "Waste Reduction", content: "Comprehensive waste management programs including recycling, composting, and waste-to-energy initiatives minimize landfill contributions and promote circular economy principles." },
  { title: "Water Conservation", content: "Advanced water treatment and recycling systems reduce water consumption while ensuring compliance with environmental regulations and protecting local water resources." }
];

const ethicalSourcing = [
  { title: "Donor Screening & Consent", content: "Rigorous donor screening protocols and comprehensive informed consent processes ensure ethical tissue recovery that honors donors and prioritizes safety." },
  { title: "AATB Accreditation", content: "Our tissue banking operations maintain American Association of Tissue Banks accreditation, demonstrating commitment to the highest industry standards for safety and ethics." },
  { title: "Transparency & Traceability", content: "Complete traceability from tissue recovery through final product ensures accountability and enables comprehensive quality documentation." },
  { title: "Regulatory Compliance", content: "Full compliance with FDA regulations, international standards, and ethical guidelines governing human tissue-based products." }
];

const sustainableOps = [
  { title: "Green Chemistry", content: "Proprietary processing methods minimize chemical use and environmental impact while maintaining product safety and efficacy standards." },
  { title: "Sustainable Packaging", content: "Eco-friendly packaging materials and optimized designs reduce waste while ensuring product sterility and stability throughout distribution." },
  { title: "Supply Chain Responsibility", content: "Partnering with suppliers who share our commitment to sustainability, ethical practices, and social responsibility." }
];

const socialResponsibility = [
  { title: "Employee Well-being", content: "Comprehensive health and wellness programs, professional development opportunities, and inclusive workplace culture that values diversity and employee growth." },
  { title: "Community Engagement", content: "Supporting local communities through charitable giving, volunteer programs, and partnerships with healthcare organizations serving underserved populations." },
  { title: "Healthcare Access", content: "Product donation programs and humanitarian partnerships expand access to advanced regenerative medicine solutions in developing regions." },
  { title: "Education & Outreach", content: "Supporting STEM education, medical training programs, and public awareness initiatives about tissue donation and regenerative medicine." }
];

const improvement = [
  { title: "Goals & Metrics", content: "Measurable sustainability targets with regular progress reporting and third-party verification of environmental and social performance." },
  { title: "Innovation Investment", content: "Ongoing research into more sustainable manufacturing processes, biodegradable materials, and reduced environmental impact technologies." },
  { title: "Stakeholder Engagement", content: "Regular dialogue with employees, communities, customers, and partners to identify opportunities and drive sustainability improvements." }
];

export default function Sustainability() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Sustainability & Responsibility"
        description="Tiger BioSciences is committed to sustainable practices that protect our environment, ensure ethical operations, and create lasting positive impact for future generations."
        backgroundImage="/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_3.png"
      />

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Environmental Stewardship
            </span>
            <h2 className="text-h1 text-foreground">
              Minimizing our environmental footprint through innovative practices
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {environmental.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-h3 font-light">{item.title}</h3>
                    <p className="font-body text-muted-foreground">{item.content}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Ethical Sourcing
            </span>
            <h2 className="text-h1 text-foreground">
              Upholding the highest standards in tissue recovery and processing
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ethicalSourcing.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-h3 font-light">{item.title}</h3>
                    <p className="font-body text-muted-foreground">{item.content}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Sustainable Operations
            </span>
            <h2 className="text-h1 text-foreground">
              Building a resilient and responsible business
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sustainableOps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-h3 font-light">{item.title}</h3>
                    <p className="font-body text-muted-foreground">{item.content}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Social Responsibility
            </span>
            <h2 className="text-h1 text-foreground">
              Creating positive impact in our communities
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {socialResponsibility.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-h3 font-light">{item.title}</h3>
                    <p className="font-body text-muted-foreground">{item.content}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Continuous Improvement
            </span>
            <h2 className="text-h1 text-foreground">
              Our commitment to ongoing sustainability progress
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {improvement.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card>
                  <CardBody>
                    <h3 className="text-h3 font-light">{item.title}</h3>
                    <p className="font-body text-muted-foreground">{item.content}</p>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
