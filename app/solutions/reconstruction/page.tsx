"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";

const surgicalApplications = [
  {
    title: "Breast Reconstruction",
    description: "Acellular dermal matrices provide critical support for implant-based reconstruction, direct-to-implant procedures, and revision surgery with excellent aesthetic outcomes."
  },
  {
    title: "Abdominal Wall Repair",
    description: "Durable biologic scaffolds for hernia repair and abdominal wall reconstruction that provide strength while allowing tissue integration and flexibility."
  },
  {
    title: "Soft Tissue Defects",
    description: "Versatile matrices for coverage of soft tissue defects following tumor resection, trauma, or infection requiring tissue reinforcement."
  }
];

const technologyAdvantages = [
  {
    title: "Structural Integrity",
    description: "Preserved native collagen architecture provides immediate tensile strength while maintaining suture retention and handling characteristics critical for surgical precision."
  },
  {
    title: "Controlled Integration",
    description: "Balanced remodeling kinetics allow host tissue infiltration and neovascularization while maintaining mechanical support throughout the healing process."
  },
  {
    title: "Low Inflammatory Response",
    description: "Gentle processing preserves matrix structure while reducing immunogenicity, minimizing inflammatory complications and promoting constructive remodeling."
  },
  {
    title: "Versatile Configurations",
    description: "Available in various thicknesses, sizes, and forms to accommodate diverse anatomical sites and surgical techniques with optimal outcomes."
  }
];

const clinicalEvidence = [
  {
    title: "Lower Complication Rates",
    description: "Published studies demonstrate reduced infection, seroma, and capsular contracture compared to synthetic meshes and alternative biologics."
  },
  {
    title: "Superior Aesthetic Results",
    description: "Patients report high satisfaction with natural appearance, contour, and texture in breast reconstruction and aesthetic procedures."
  },
  {
    title: "Long-term Durability",
    description: "Multi-year follow-up data shows excellent long-term stability with low recurrence rates in hernia repair and abdominal wall reconstruction."
  }
];

const productPortfolio = [
  {
    title: "Standard Thickness Matrices",
    description: "Optimal for breast reconstruction, providing support for implant positioning while allowing natural tissue draping and aesthetic contouring."
  },
  {
    title: "Reinforced Matrices",
    description: "Thicker constructs with enhanced strength for abdominal wall repair and complex hernia reconstruction requiring maximum structural support."
  },
  {
    title: "Fenestrated Formats",
    description: "Perforated designs facilitate fluid management and tissue integration while maintaining mechanical properties for surgical applications."
  },
  {
    title: "Custom Configurations",
    description: "Flexible sizing and trimming options allow surgeons to customize matrices for individual patient anatomy and specific procedural requirements."
  }
];

const surgicalTechniques = [
  {
    title: "Technical Training",
    description: "Comprehensive surgical training programs, technique videos, and hands-on workshops for optimal matrix placement and fixation."
  },
  {
    title: "Case Consultation",
    description: "Expert surgical consultants provide pre-operative planning support and intra-operative assistance for complex cases."
  },
  {
    title: "Best Practices",
    description: "Evidence-based guidelines and expert recommendations for product selection, surgical technique, and post-operative management."
  }
];

export default function ReconstructionSolutions() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Reconstruction Solutions"
        description="Innovative acellular matrices for complex reconstructive procedures, providing structural support and promoting natural tissue integration for optimal functional and aesthetic outcomes."
        backgroundImage="/images/01.png"
        size="large"
      />

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Surgical Applications
            </span>
            <h2 className="text-h1 text-foreground">
              Comprehensive solutions for reconstructive surgery
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {surgicalApplications.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-lg p-8 shadow-card h-full">
                  <h3 className="text-h3 font-light">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Technology Advantages
            </span>
            <h2 className="text-h1 text-foreground">
              Superior biomaterial properties for reconstructive applications
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {technologyAdvantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-lg p-8 shadow-card h-full">
                  <h3 className="text-h3 font-light">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Clinical Evidence
            </span>
            <h2 className="text-h1 text-foreground">
              Proven outcomes across reconstructive procedures
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clinicalEvidence.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-lg p-8 shadow-card h-full">
                  <h3 className="text-h3 font-light">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Product Portfolio
            </span>
            <h2 className="text-h1 text-foreground">
              Specialized matrices for reconstructive surgery
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {productPortfolio.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-lg p-8 shadow-card h-full">
                  <h3 className="text-h3 font-light">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Surgical Techniques
            </span>
            <h2 className="text-h1 text-foreground">
              Supporting optimal surgical outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {surgicalTechniques.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="bg-gradient-to-br from-card via-card to-muted/20 rounded-lg p-8 shadow-card h-full">
                  <h3 className="text-h3 font-light">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
