"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";

export default function AdiposePage() {
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
              Adipose Tissue Donation
            </span>
            <h1 className="text-h1 text-foreground mb-6">
              Adipose Donation
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Foundation for aesthetic and reconstructive medicine
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
              Donation with dignity
            </h2>

            <div className="space-y-6 text-base font-light text-foreground/70 leading-relaxed">
              <p>
                Adipose tissue is rarely thought of as valuable. It is removed during surgeries, discarded after procedures, treated as excess. But donors who choose to contribute this tissue understand something essential: what one person no longer needs may restore what another has lost.
              </p>

              <p>
                Donated adipose tissue becomes the foundation for advanced aesthetic and reconstructive therapies. It is processed into allograft materials that support soft tissue augmentation, facial reconstruction, and post-surgical recovery. These are not cosmetic indulgences. They are medical interventions that address trauma, congenital defects, and the aftermath of disease.
              </p>

              <p>
                Donation occurs in the context of elective surgeries where adipose tissue is already being removed. Patients consent in advance, understanding that tissue they would otherwise lose may help someone rebuild after cancer, repair damage from injury, or regain function compromised by aging or illness.
              </p>

              <p>
                This is donation with dignity—not extraction, not exploitation, but a choice made by individuals who see opportunity in what would otherwise be waste.
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
              alt="Adipose tissue matrix and cellular structure"
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
              What Adipose Provides
            </span>
            <h2 className="text-h1 text-foreground">
              Structure, volume, and scaffolding
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
              Adipose tissue is more than fat. It is a complex matrix of cells, extracellular proteins, growth factors, and vascular components that support tissue integration and remodeling. When processed correctly, it retains the structural properties needed for volume restoration and the biological signals that promote healing.
            </p>

            <p>
              Tiger BioSciences processes donated adipose tissue using methods that preserve these properties while ensuring safety and sterility. The result is an allograft material that can be shaped, sized, and applied to meet specific clinical needs—from filling soft tissue defects to providing scaffolding for tissue regeneration.
            </p>

            <p className="text-lg font-medium text-foreground/90">
              We do not promise perfection. We promise materials that work, backed by clinical evidence and delivered with traceability that honors the people who made them possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Process & Accountability
            </span>
            <h2 className="text-h1 text-foreground">
              From operating room to clinical application
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
              Adipose tissue donation begins with informed consent. Patients undergoing procedures such as abdominoplasty, liposuction, or reconstructive surgery are offered the option to donate tissue that would otherwise be discarded. They are told what the tissue will be used for, how it will be processed, and that their decision will not affect their care.
            </p>

            <p>
              Recovered tissue is immediately transported to Tiger BioSciences facilities, where it undergoes microbiological testing, serological screening, and processing designed to remove cellular components that could trigger immune responses. What remains is a sterile, decellularized matrix suitable for allograft applications.
            </p>

            <p>
              Every donation is tracked. Every step is documented. Every final product is linked to the donor who made it possible. This is not bureaucracy—it is accountability. When a surgeon uses Tiger BioSciences adipose allograft, they are not just using tissue. They are using someone&apos;s choice to help.
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
              Generosity takes many forms. Sometimes it looks like giving what you thought you did not need. That choice matters. The science that follows must prove it.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
