"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";

const sections = [
  { badge: "Product Categories", title: "Comprehensive dressing solutions for every healing phase", items: [
    { title: "Biological Dressings", description: "Birth tissue-derived membranes provide biological protection while delivering anti-inflammatory and regenerative properties to support wound healing." },
    { title: "Antimicrobial Solutions", description: "Advanced dressings incorporating silver or other antimicrobial agents that protect against infection while maintaining moisture balance." },
    { title: "Foam Dressings", description: "Highly absorbent polyurethane foams manage exudate while providing cushioning protection for healing wounds and surgical sites." }
  ]},
  { badge: "Clinical Applications", title: "Tailored solutions for diverse wound types and healing stages", items: [
    { title: "Acute Wound Care", description: "Protective dressings for surgical incisions, traumatic wounds, and burns that reduce pain, prevent contamination, and support natural healing progression." },
    { title: "Chronic Wound Management", description: "Specialized dressings for diabetic ulcers, venous insufficiency wounds, and pressure injuries that address underlying healing challenges." },
    { title: "Post-Surgical Recovery", description: "Comfortable, conformable dressings that protect surgical sites while allowing mobility and facilitating optimal healing conditions." },
    { title: "Skin Protection", description: "Barrier films and protective dressings prevent skin breakdown in high-risk patients and maintain skin integrity during healing." }
  ]},
  { badge: "Technology Features", title: "Advanced design for optimal healing outcomes", items: [
    { title: "Moisture Management", description: "Balanced moisture vapor transmission maintains optimal hydration levels that support cellular activity and autolytic debridement." },
    { title: "Exudate Control", description: "High absorbency materials lock away excess fluid while preventing maceration of periwound skin and maintaining dressing integrity." },
    { title: "Non-Adherent Design", description: "Atraumatic removal protects fragile healing tissue and minimizes patient discomfort during dressing changes." },
    { title: "Bacterial Barrier", description: "Protective barrier properties prevent external contamination while allowing appropriate gas exchange for cellular respiration." },
    { title: "Conformability", description: "Flexible materials adapt to body contours and movement, ensuring continuous wound protection and patient comfort." },
    { title: "Extended Wear Time", description: "Durable construction allows longer wear intervals, reducing dressing changes and associated healthcare costs." }
  ]},
  { badge: "Recovery Support", title: "Comprehensive solutions for optimal healing outcomes", items: [
    { title: "Post-Operative Care Kits", description: "Complete dressing systems with all necessary components for surgical site management, simplifying post-operative wound care protocols." },
    { title: "Patient Education Materials", description: "Clear instructions and visual guides help patients understand proper wound care techniques and recognize signs requiring medical attention." },
    { title: "Home Care Solutions", description: "User-friendly dressing systems designed for self-application enable safe, effective wound management in outpatient settings." },
    { title: "Clinical Support", description: "Wound care specialists provide product selection guidance, application training, and troubleshooting assistance for healthcare providers." }
  ]}
];

export default function DressingsRecovery() {
  return (
    <main className="min-h-screen">
      <Hero title="Dressings & Recovery" description="Advanced wound dressings and recovery solutions designed to protect healing tissue, maintain optimal moisture balance, and support the natural healing process." backgroundImage="/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_be617358-9084-4f84-b1dc-378a67fd1009_0.png" size="large" />
      {sections.map((section, sectionIdx) => (
        <section key={sectionIdx} className={`relative py-10 md:py-[76px] bg-gradient-to-b ${sectionIdx % 2 === 0 ? 'from-background via-muted/30 to-muted/40' : 'from-muted/40 via-muted/20 to-background'}`}>
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="text-center mb-16">
              <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">{section.badge}</span>
              <h2 className="text-h1 text-foreground">{section.title}</h2>
            </div>
            <div className={`grid grid-cols-1 gap-6 ${section.items.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : section.items.length === 6 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
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
