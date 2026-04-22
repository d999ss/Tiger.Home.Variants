"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";
import { Card, CardBody } from "@/components/ui/card";

export default function History() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Our Journey"
        description="From groundbreaking innovation to global leadership, Tiger BioSciences has been at the forefront of regenerative medicine for over two decades."
        backgroundImage="/images/05.png"
      />

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Foundation & Early Innovation
            </span>
            <h2 className="text-h1 text-foreground">
              Building the foundation for regenerative medicine excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardBody>
                  <h3 className="text-h3 font-light">The Beginning (2000-2005)</h3>
                  <p className="font-body text-muted-foreground">
                    Founded by pioneering researchers in tissue engineering, Tiger BioSciences began with a vision to harness the body&apos;s natural healing capabilities through advanced biomaterials. Our first laboratory focused on developing innovative wound care solutions.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardBody>
                  <h3 className="text-h3 font-light">First Breakthrough (2006-2008)</h3>
                  <p className="font-body text-muted-foreground">
                    Our first FDA-cleared product for chronic wound management marked a significant milestone, demonstrating the clinical potential of our proprietary collagen matrix technology and establishing our reputation for innovation.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Growth & Expansion
            </span>
            <h2 className="text-h1 text-foreground">
              Scaling innovation to serve patients worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Portfolio Expansion (2009-2012)", content: "Launched multiple product lines across wound care, reconstruction, and soft tissue regeneration, establishing Tiger BioSciences as a comprehensive solutions provider." },
              { title: "Global Reach (2013-2015)", content: "Expanded international presence with regulatory approvals in Europe, Asia-Pacific, and Latin America, bringing our innovations to healthcare systems worldwide." },
              { title: "Strategic Acquisitions (2016-2018)", content: "Acquired leading companies in birth tissue sciences and aesthetic medicine, broadening our technology platform and therapeutic reach significantly." }
            ].map((item, i) => (
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
              Innovation Leadership
            </span>
            <h2 className="text-h1 text-foreground">
              Advancing the science of regenerative medicine
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { title: "Research Excellence (2019-2021)", content: "Established RegenTX Labs, our advanced research division, focusing on next-generation regenerative therapies including cellular and acellular matrices for tissue reconstruction." },
              { title: "Technology Platform (2022-2024)", content: "Developed proprietary processing technologies that preserve the native structure and biological activity of tissue-based biomaterials, setting new industry standards for quality." },
              { title: "Clinical Validation (2024-Present)", content: "Published extensive clinical evidence demonstrating superior outcomes across multiple therapeutic areas, with ongoing clinical trials exploring new indications." },
              { title: "Future Vision", content: "Continuing to push the boundaries of regenerative medicine with investments in advanced manufacturing, digital health integration, and personalized biomaterial solutions." }
            ].map((item, i) => (
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
              Milestones
            </span>
            <h2 className="text-h1 text-foreground">
              Key achievements that shaped our journey
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "500,000+ Patients Treated", content: "Our products have improved outcomes for over half a million patients worldwide across multiple therapeutic applications." },
              { title: "40+ Countries Served", content: "Global distribution network delivering innovative solutions to healthcare providers on six continents." },
              { title: "100+ Clinical Publications", content: "Extensive peer-reviewed evidence base supporting the safety and efficacy of our regenerative medicine portfolio." }
            ].map((item, i) => (
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
