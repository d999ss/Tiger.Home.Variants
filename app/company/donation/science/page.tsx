"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";

export default function SciencePage() {
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
              The Science of Stewardship
            </span>
            <h1 className="text-h1 text-foreground mb-6">
              From Gift to Innovation
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              How precision and science honor generosity
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
              Precision as respect
            </h2>

            <div className="space-y-6 text-base font-light text-foreground/70 leading-relaxed">
              <p>
                The science does not begin when tissue arrives at our facility. It begins the moment a family says yes.
              </p>

              <p>
                That decision creates an obligation. The tissue we receive is not a raw material to be optimized for yield. It is a responsibility to be protected. Every processing step, every quality control measure, every clinical application must justify the trust placed in us.
              </p>

              <p className="text-lg font-medium text-foreground/90">
                This is where precision matters. Not precision for its own sake, but precision as the operational form of respect.
              </p>

              <p>
                When we process donated tissue, we are not merely extracting value. We are preserving intention. The science must prove worthy of the gift.
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
              src="/images/03.png"
              alt="Advanced tissue processing and bioengineering"
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
              Processing Methods
            </span>
            <h2 className="text-h1 text-foreground">
              The transformation
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
              Donated tissue arrives in validated transport media, maintaining temperature and sterility from point of recovery. Within hours, it enters processing protocols designed to preserve biological activity while ensuring safety.
            </p>

            <p>
              For birth tissue, this means gentle decellularization that removes immunogenic components without destroying the extracellular matrix scaffolding that supports healing. For adipose tissue, it means processing methods that retain structural integrity and growth factor profiles while achieving sterility.
            </p>

            <p className="text-lg font-medium text-foreground/90">
              Each tissue type requires different protocols, but the principle remains the same: do no harm to what was given. Remove what could cause rejection. Preserve what supports healing. Test rigorously. Document everything.
            </p>

            <p>
              This is not alchemy. It is bioengineering grounded in decades of research on tissue preservation, cellular viability, and immune compatibility. The methods we use are validated not just for safety, but for maintaining the properties that make donated tissue clinically useful.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Quality Control
            </span>
            <h2 className="text-h1 text-foreground">
              Why testing matters
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
              Every donated tissue undergoes microbiological testing to detect bacteria, fungi, and viral pathogens. Every donor is screened for infectious disease markers according to FDA and AATB standards. Every processed lot is tested for sterility before release.
            </p>

            <p>
              This is not bureaucracy. It is the minimum requirement for honoring the gift. Donors trust that tissue will be handled safely. Clinicians trust that products will not cause harm. Patients trust that what enters their bodies has been vetted with care. Quality control is how we earn that trust.
            </p>

            <p className="text-lg font-medium text-foreground/90">
              When a lot fails testing, it is discarded. There is no second chance, no acceptable risk threshold, no compromise for the sake of efficiency.
            </p>

            <p>
              The donor who gave that tissue deserves better. The patient who would have received it deserves certainty. Standards exist to be met, not negotiated.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Clinical Application
            </span>
            <h2 className="text-h1 text-foreground">
              From tissue to therapy
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
              Tiger BioSciences does not release products without clinical justification. Birth tissue allografts are indicated for chronic wounds where evidence supports their use. Adipose allografts are applied in reconstructive procedures where volume restoration and scaffolding are needed.
            </p>

            <p>
              We support clinical research not to inflate marketing claims, but to understand what works and why. We partner with surgeons and wound care specialists who use our products in real-world settings and report outcomes transparently. We fund studies that ask hard questions about efficacy, safety, and appropriate patient selection.
            </p>

            <p className="text-lg font-medium text-foreground/90">
              Products that work earn repeat business. Products backed by evidence earn clinician trust. Products traceable to ethical sourcing earn societal legitimacy.
            </p>

            <p>
              Science is not just what we do in the lab. It is how we build a business worthy of the gifts we receive.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Traceability
            </span>
            <h2 className="text-h1 text-foreground">
              The chain remains unbroken
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
              Every donation is assigned a unique identifier that follows the tissue through processing, storage, distribution, and clinical use. If an adverse event occurs, we can trace it back to the donor. If a quality issue arises, we can identify every affected lot. If a clinician has questions, we can provide documentation.
            </p>

            <p>
              This is not surveillance. It is stewardship extended through data. The families who donated deserve to know that their gift is traceable, that someone is paying attention, that the system works even when they are no longer watching.
            </p>

            <p className="text-lg font-medium text-foreground/90">
              The science of tissue processing is inseparable from the ethics of tissue donation. One without the other is incomplete.
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
              The transformation from gift to therapy is technical, yes. But it is also moral. The precision with which we process tissue is how we prove that generosity was not wasted.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
