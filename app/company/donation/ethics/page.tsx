"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";

export default function EthicsPage() {
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
              Ethics & Stewardship
            </span>
            <h1 className="text-h1 text-foreground mb-6">
              Frameworks That Protect
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              The structures that hold when convenience tempts compromise
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
              Ethics is not a checklist
            </h2>

            <div className="space-y-6 text-base font-light text-foreground/70 leading-relaxed">
              <p>
                At Tiger BioSciences, ethical practice begins with a simple premise: tissue is not ours to use however we see fit. It is entrusted to us by families who made a decision in good faith. Our obligation is to prove that faith was not misplaced.
              </p>

              <p>
                This means informed consent that is truly informed—not buried in fine print, not rushed through during moments of vulnerability, but presented clearly and confirmed voluntarily. It means donor screening that protects both safety and dignity. It means transparency about what donated tissue becomes and how it is distributed.
              </p>

              <p className="text-lg font-medium text-foreground/90">
                It also means saying no. No to donations that do not meet standards. No to applications that fall outside ethical boundaries. No to practices that prioritize profit over principle.
              </p>

              <p>
                The easiest way to lose integrity is to pretend every decision is acceptable as long as it is legal.
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
              src="/images/02.png"
              alt="Ethical frameworks and regulatory compliance"
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
              Our Framework
            </span>
            <h2 className="text-h1 text-foreground">
              The standards that matter
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
              Tiger BioSciences operates under FDA regulations governing human cells, tissues, and cellular and tissue-based products. We adhere to standards set by the American Association of Tissue Banks. We comply with state and federal laws regarding donor consent, tissue recovery, and distribution.
            </p>

            <p className="text-lg font-medium text-foreground/90">
              But compliance is the floor, not the ceiling. Regulations tell us what we must do. Ethics tells us what we should do. Sometimes those are the same. Sometimes they are not.
            </p>

            <p>
              We maintain an internal ethics board that reviews donation protocols, processing methods, and clinical applications. This is not a formality. It is a mechanism for ensuring that decisions affecting donated tissue are scrutinized by people with no financial stake in the outcome.
            </p>

            <p>
              We also practice radical transparency with donors. Families who choose donation receive detailed information about how tissue is used, where it goes, and what safeguards exist to protect their gift. They are not told platitudes. They are told the truth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              In Practice
            </span>
            <h2 className="text-h1 text-foreground">
              What accountability looks like
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
              Stewardship is care extended through time. It is the understanding that how we treat donated tissue today shapes the trust donors will have in the system tomorrow.
            </p>

            <p>
              Every donation at Tiger BioSciences is tracked from recovery through final clinical use. We maintain records that link tissue to donors without compromising privacy. We conduct post-market surveillance to monitor outcomes and identify safety signals. We report adverse events not just because regulations require it, but because donors deserve to know when something goes wrong.
            </p>

            <p className="text-lg font-medium text-foreground/90">
              We also refuse to sell tissue. Tiger BioSciences charges for processing, testing, storage, and distribution—costs that reflect the work required to ensure safety and quality. We do not charge for the tissue itself. The gift remains a gift.
            </p>

            <p>
              This distinction matters. It is the difference between treating donated tissue as a commodity and treating it as what it is—a human contribution to healing that must be honored at every step.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Principle Over Profit
            </span>
            <h2 className="text-h1 text-foreground">
              When ethics and economics collide
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
              There will always be pressure to cut corners. To process tissue faster. To expand applications beyond what evidence supports. To prioritize volume over vetting. These pressures are real, and they are persistent.
            </p>

            <p>
              Tiger BioSciences resists them by design. Our business model is built on the premise that sustainable success comes from doing the work correctly, not quickly. We invest in quality systems that cost more in the short term but protect trust in the long term. We turn away business that does not align with our standards.
            </p>

            <p>
              This is not altruism. It is pragmatism. The moment we compromise on ethics, we lose the foundation that makes everything else possible. Donors will stop trusting us. Clinicians will stop using our products. Regulators will stop tolerating our operations. The entire enterprise collapses.
            </p>

            <p className="text-lg font-medium text-foreground/90">
              Ethics is not a constraint on business. It is the business.
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
              We do not promise perfection. We promise that when we fail, we will own it. When we succeed, we will remember why we were trusted in the first place. That is stewardship.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
