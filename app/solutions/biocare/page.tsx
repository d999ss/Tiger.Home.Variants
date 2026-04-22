"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";

const sections = [
  {
    badge: "Product Categories",
    title: "Comprehensive solutions for every phase of wound healing",
    items: [
      { title: "Advanced Dressings", description: "Foam, hydrocolloid, alginate, and composite dressings providing optimal moisture management and protection for diverse wound types." },
      { title: "Antimicrobial Solutions", description: "Silver-based and iodine-based products that reduce bioburden while maintaining wound moisture balance and promoting healing." },
      { title: "Negative Pressure Therapy", description: "Advanced wound VAC systems and accessories for managing complex wounds requiring controlled suction and exudate removal." }
    ]
  },
  {
    badge: "Clinical Applications",
    title: "Addressing diverse wound care challenges",
    items: [
      { title: "Diabetic Foot Ulcers", description: "Specialized products and protocols for managing diabetic foot wounds, addressing offloading, infection control, and promoting granulation tissue formation for successful closure." },
      { title: "Pressure Injuries", description: "Comprehensive pressure ulcer management including foam dressings, barrier products, and advanced therapies for stages 2-4 injuries requiring specialized care." },
      { title: "Venous Leg Ulcers", description: "Compression therapy systems and moisture management products specifically designed for venous insufficiency wounds with exudate control needs." },
      { title: "Surgical Wounds", description: "Post-operative dressings and incision management products supporting optimal surgical site healing and reducing complications." }
    ]
  },
  {
    badge: "Wound Assessment & Documentation",
    title: "Technology-enabled wound management",
    items: [
      { title: "Digital Wound Imaging", description: "Advanced photography systems with standardized lighting and measurement tools for accurate wound assessment and progress tracking." },
      { title: "Measurement Tools", description: "Precise wound measurement devices and software calculating wound area, volume, and healing rates with objective data." },
      { title: "Documentation Software", description: "Electronic health record integration enabling efficient documentation and longitudinal tracking of wound healing progress." }
    ]
  },
  {
    badge: "Clinical Education",
    title: "Building wound care expertise across care settings",
    items: [
      { title: "Certification Programs", description: "Comprehensive training programs for nurses and clinicians seeking wound care certification, combining online learning with hands-on skills development." },
      { title: "Continuing Education", description: "CME and CNE-approved educational programs keeping healthcare providers current with evolving wound care best practices and new technologies." },
      { title: "Clinical Workshops", description: "Interactive workshops providing hands-on experience with advanced wound care products and evidence-based treatment protocols." },
      { title: "Online Resources", description: "Digital library of educational videos, clinical guidelines, case studies, and product information supporting clinical decision-making." }
    ]
  }
];

export default function BiocareDivision() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Biocare Division"
        description="Complete portfolio of advanced wound care products and clinical support services designed to optimize healing outcomes and improve quality of life for patients with complex wounds."
        backgroundImage="/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png"
        size="large"
      />

      {sections.map((section, sectionIdx) => (
        <section key={sectionIdx} className={`relative py-10 md:py-[76px] bg-gradient-to-b ${sectionIdx % 2 === 0 ? 'from-background via-muted/30 to-muted/40' : 'from-muted/40 via-muted/20 to-background'}`}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">{section.badge}</span>
              <h2 className="text-h1 text-foreground">{section.title}</h2>
            </div>
            <div className={`grid grid-cols-1 gap-6 ${section.items.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
              {section.items.map((item, i) => (
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
      ))}
    </main>
  );
}
