"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";

export default function MeaningPage() {
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
              What Donation Means
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              The intention behind every donation and why that intention matters.
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
              A donation is not a transaction
            </h2>

            <div className="space-y-6 text-base font-light text-foreground/70 leading-relaxed">
              <p>
                It is a decision made in grief, in hope, or in the simple desire to leave something behind that helps.
              </p>

              <p>
                Families who choose donation do so knowing they will never meet the person whose life changes because of it. There is no gratitude returned in person, no closure that arrives neatly. What they receive instead is the knowledge that their choice mattered—that in a moment when they could give nothing else, they gave forward.
              </p>

              <p>
                We inherit that intention. Every tissue processed at Tiger BioSciences carries with it the weight of a family&apos;s trust. Our responsibility is not to maximize yield or optimize efficiency at the expense of that trust. Our responsibility is to ensure that what was given freely is used with precision, integrity, and care.
              </p>

              <p>
                This shapes every protocol we design, every partnership we form, every clinical application we support. The question we ask is not simply, &quot;Can we do this?&quot; but &quot;Does this honor the original gift?&quot;
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
              src="/images/boredoptimism_close_up_of_Tiger_eye_--ar_169_--raw_--profile__d0b094ae-d672-42f0-b38e-82826641a7d4_2.png"
              alt="Trust and intention in tissue donation"
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
              Informed Choice
            </span>
            <h2 className="text-h1 text-foreground">
              The Weight of Consent
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
              Consent is not a signature on a form. It is an informed choice made by people who understand what happens next. Families are told that donated tissue may support wound healing, reconstructive surgery, or regenerative medicine. They are told that tissue will be processed, tested, and distributed through regulated channels. They are not told it will work miracles. They are told it will be treated with respect.
            </p>

            <p className="text-lg font-medium text-foreground/90">
              We do not promise outcomes. We promise stewardship.
            </p>

            <p>
              That distinction matters. It is the difference between treating tissue as a resource to be exploited and treating it as a responsibility to be honored. Families trust us not because we offer perfection, but because we offer clarity about what their gift becomes and how it is used.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Accountability
            </span>
            <h2 className="text-h1 text-foreground">
              Beyond Gratitude
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
              Gratitude is easy. Gratitude costs nothing. What donors deserve is accountability. They deserve to know that the systems handling their gift are designed to protect it, that the people making decisions about its use understand the origin of what they hold, that the clinical applications it supports are grounded in evidence and ethical practice.
            </p>

            <p>
              We owe them traceability—every donation tracked from recovery through final use. We owe them transparency—clear reporting on how tissue is allocated and to whom. We owe them the assurance that their generosity is not taken for granted.
            </p>

            <p>
              This is not sentiment. This is structural integrity. The moment we lose sight of where tissue comes from, we lose the moral foundation for what we do with it.
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
              Every innovation at Tiger BioSciences begins with someone&apos;s willingness to give. That is the foundation. Everything else is built to honor it.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
