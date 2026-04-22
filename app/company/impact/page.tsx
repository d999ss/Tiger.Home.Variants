"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";
import { Card, CardBody } from "@/components/ui/card";

const patientOutcomes = [
  { title: "Accelerated Healing", content: "Our regenerative solutions have demonstrated significant reductions in healing time for chronic wounds, reducing patient suffering and healthcare costs." },
  { title: "Improved Quality of Life", content: "Patients treated with our reconstruction and aesthetic solutions report enhanced functional outcomes and increased confidence and satisfaction." },
  { title: "Reduced Complications", content: "Clinical evidence shows our biomaterial solutions reduce infection rates and surgical complications compared to traditional treatment approaches." }
];

const healthcareSystem = [
  { title: "Clinical Efficiency", content: "Our ready-to-use biomaterial solutions streamline surgical workflows, reducing procedure time and operating room costs while maintaining superior clinical outcomes." },
  { title: "Economic Value", content: "Health economic studies demonstrate significant cost savings through reduced hospitalization, fewer revision procedures, and decreased long-term care requirements." },
  { title: "Education & Training", content: "Comprehensive training programs and clinical education resources support healthcare providers in optimizing patient outcomes with our solutions." },
  { title: "Access & Availability", content: "Global distribution network and partnerships ensure consistent supply and access to our regenerative medicine solutions worldwide." }
];

const researchImpact = [
  { title: "Clinical Evidence", content: "Over 100 peer-reviewed publications validate the safety and efficacy of our technologies across multiple therapeutic applications." },
  { title: "Academic Collaboration", content: "Partnerships with leading medical centers advance regenerative medicine research and translate discoveries into clinical practice." },
  { title: "Technology Transfer", content: "Our innovations in biomaterial processing and tissue engineering have influenced industry standards and best practices globally." }
];

const socialImpact = [
  { title: "Global Health Initiatives", content: "Supporting humanitarian medical missions and disaster relief efforts by providing advanced wound care solutions to underserved populations." },
  { title: "Workforce Development", content: "Creating high-quality jobs in biotechnology, manufacturing, and healthcare while investing in employee development and advancement opportunities." },
  { title: "STEM Education", content: "Supporting science education programs and partnerships with universities to inspire the next generation of regenerative medicine innovators." },
  { title: "Ethical Leadership", content: "Maintaining highest ethical standards in tissue sourcing, clinical research, and business practices while promoting transparency and accountability." }
];

export default function Impact() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Global Impact"
        description="Tiger BioSciences is dedicated to improving patient outcomes and advancing healthcare systems worldwide through innovative regenerative medicine solutions and collaborative partnerships."
        backgroundImage="/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_2.png"
      />

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Patient Outcomes
            </span>
            <h2 className="text-h1 text-foreground">
              Improving lives through advanced regenerative therapies
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {patientOutcomes.map((item, i) => (
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
              Healthcare System Impact
            </span>
            <h2 className="text-h1 text-foreground">
              Supporting providers and improving care delivery
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {healthcareSystem.map((item, i) => (
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
              Research & Innovation Impact
            </span>
            <h2 className="text-h1 text-foreground">
              Advancing the science of regenerative medicine
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchImpact.map((item, i) => (
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

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Community & Social Impact
            </span>
            <h2 className="text-h1 text-foreground">
              Creating positive change beyond clinical outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {socialImpact.map((item, i) => (
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
