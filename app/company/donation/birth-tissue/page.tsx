"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";

export default function BirthTissuePage() {
  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-muted/30 via-muted/10 to-background">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-12">
          <Link
            href="/company/donation"
            className="inline-flex items-center gap-2 text-sm text-brand hover:text-brand/80 transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeftIcon className="size-4" />
            Back to Donation Hub
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              The Gift of Donation
            </span>
            <h1 className="text-h1 text-foreground mb-6">
              Birth Tissue Donation
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              From childbirth to regenerative science—the journey of placental and amniotic tissue.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-h1 text-foreground text-center mb-12">
              Birth is not only the beginning of life
            </h2>

            <div className="space-y-6 text-base font-light text-foreground/70 leading-relaxed">
              <p>
                It is also the moment when tissue that sustained that life becomes available to sustain others.
              </p>

              <p>
                Placental and amniotic membranes—structures that protect and nourish a developing child—have long been discarded as medical waste. But families who choose donation recognize what science has confirmed: these tissues carry regenerative properties that can support wound healing, reduce inflammation, and aid in tissue repair.
              </p>

              <p>
                Donation happens at the moment of birth, following healthy, full-term deliveries. Mothers consent before labor begins, understanding that the placenta and amniotic sac they no longer need may help someone they will never meet. The tissue is recovered in hospital operating rooms under sterile conditions, immediately preserved, and transported to processing facilities where it undergoes rigorous screening and preparation.
              </p>

              <p>
                This is not experimental medicine. Placental and amniotic tissue have been used clinically for over a century, with applications ranging from chronic wound care to surgical reconstruction. What has changed is the precision with which we can now process, preserve, and apply these materials.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[16/9] relative rounded-lg shadow-card overflow-hidden"
          >
            <Image
              src="/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png"
              alt="Placental and amniotic tissue structure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 via-transparent to-background/40 mix-blend-multiply opacity-60" />
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Regenerative Properties
            </span>
            <h2 className="text-h1 text-foreground">
              What Birth Tissue Offers
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto space-y-6 text-base font-light text-foreground/70 leading-relaxed"
          >
            <p>
              Placental membranes are rich in collagen, growth factors, and extracellular matrix components that create an environment conducive to tissue repair. Amniotic membranes possess anti-inflammatory and anti-scarring properties that make them valuable in applications where minimizing fibrosis is critical.
            </p>

            <p>
              These are not magic tissues. They are well-characterized biological materials with documented clinical utility. When processed correctly, they maintain structural integrity and biological activity. When applied appropriately, they can accelerate healing in wounds that have stalled, provide scaffolding for tissue regeneration, and reduce the inflammatory response that often complicates recovery.
            </p>

            <p>
              Tiger BioSciences does not claim these tissues cure everything. We claim they work—when sourced ethically, processed with precision, and applied based on clinical evidence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              From Recovery to Application
            </span>
            <h2 className="text-h1 text-foreground">
              The Journey from Birth to Clinical Use
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto space-y-6 text-base font-light text-foreground/70 leading-relaxed"
          >
            <p>
              Tissue recovery begins with consent. Expectant mothers are screened for health history, infectious disease markers, and eligibility according to FDA and AATB standards. Those who choose to donate receive detailed information about what happens to the tissue and how it will be used.
            </p>

            <p>
              At delivery, trained recovery specialists collect the placenta and amniotic membrane under aseptic conditions. The tissue is immediately placed in validated transport media and sent to Tiger BioSciences processing facilities, where it undergoes microbiological testing, serological screening, and quality verification.
            </p>

            <p>
              Processing involves gentle decellularization to remove immunogenic components while preserving the structural and biological properties that make the tissue effective. The result is a sterile, biocompatible material that can be stored, shipped, and applied without rejection concerns.
            </p>

            <p>
              Every lot is traceable. Every donor is screened. Every step is documented. This is not just regulatory compliance—it is the operational embodiment of respect for the families who made these gifts possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-br from-muted/50 via-muted/30 to-background">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-lg font-light text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              What begins in the intimacy of a delivery room ends in a wound that closes, a surgery that succeeds, a recovery that was not certain. The tissue travels far. The intention travels with it.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
