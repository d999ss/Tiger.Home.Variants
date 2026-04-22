"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";

export default function CliniciansPage() {
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
              For Clinicians
            </span>
            <h1 className="text-h1 text-foreground mb-6">
              Understanding Donation Context
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              How donation awareness enhances clinical decision-making
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
              You are continuing a story
            </h2>

            <div className="space-y-6 text-base font-light text-foreground/70 leading-relaxed">
              <p>
                When you use Tiger BioSciences allograft tissue, you are not just applying a medical product. You are continuing a story that began with someone&apos;s decision to give.
              </p>

              <p>
                That context matters. It shapes how we think about appropriate use, patient consent, and clinical outcomes. Clinicians who understand where tissue comes from make better decisions about when and how to apply it.
              </p>

              <p>
                This is not sentiment. It is clinical clarity. Knowing that tissue was donated—not manufactured, not synthesized, but given by people who trusted the healthcare system to use it wisely—creates a framework for making decisions that honor that trust.
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
              src="/images/boredoptimism_close_up_of_a_man_eye_--ar_9151_--raw_--v_7_6e1ef8a8-f234-4f8d-b09d-ab30df60ec89_2.png"
              alt="Clinical decision-making and patient care"
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
              Clinical Practice
            </span>
            <h2 className="text-h1 text-foreground">
              What donation means for practice
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
              Donated tissue is not infinite. It is not commodity inventory that can be ordered in bulk and stockpiled indefinitely. Every unit of Tiger BioSciences allograft represents a specific donation, processed under specific conditions, with documented traceability.
            </p>

            <p>
              This means clinical decisions about tissue use should be evidence-based and patient-appropriate. Using allograft tissue for applications not supported by data wastes the gift. Applying tissue in situations where simpler interventions would suffice misallocates a finite resource. Good stewardship is not just Tiger BioSciences&apos; responsibility. It is shared.
            </p>

            <p className="text-lg font-medium text-foreground/90">
              When clinicians use donated tissue appropriately—in chronic wounds that have failed standard care, in reconstructive procedures where volume restoration is critical, in surgical applications where biological scaffolding supports healing—they extend the generosity that made that tissue available.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Informed Consent
            </span>
            <h2 className="text-h1 text-foreground">
              What patients should know
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
              Patients receiving allograft tissue deserve to know its origin. Not because it changes the medical indication, but because it changes the nature of the intervention. They are not just receiving a product. They are receiving a gift that passed through multiple hands before reaching them.
            </p>

            <p>
              Tiger BioSciences provides clinicians with patient information materials that explain tissue sourcing, processing, and safety protocols. These materials are written in plain language, designed to be shared during consent discussions, and intended to help patients understand what they are receiving and why.
            </p>

            <p>
              Good consent is not a formality. It is an opportunity to acknowledge that healing sometimes depends on the generosity of strangers. Patients who understand this often feel differently about their care. They recognize they are part of a larger system of mutual aid, where what one person gives helps another recover.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Evidence-Based Use
            </span>
            <h2 className="text-h1 text-foreground">
              When donated tissue makes sense
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
              Tiger BioSciences birth tissue allografts are indicated for chronic wounds—diabetic foot ulcers, venous leg ulcers, pressure injuries—where standard care has failed and additional biological support may promote closure. They are not first-line treatments. They are adjunctive therapies for patients who need more than conventional wound care can provide.
            </p>

            <p>
              Tiger BioSciences adipose allografts are used in reconstructive and aesthetic procedures where soft tissue volume restoration is required—post-mastectomy reconstruction, facial trauma repair, congenital defect correction. They provide structural scaffolding and biological signals that support tissue integration.
            </p>

            <p className="text-lg font-medium text-foreground/90">
              We do not claim these products work in every situation. We claim they work in specific, well-defined contexts supported by clinical evidence.
            </p>

            <p>
              Appropriate use is not a guideline. It is an obligation. The families who donated trusted that tissue would be used responsibly. Clinicians honor that trust by staying within evidence-based indications.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-background to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Post-Market Surveillance
            </span>
            <h2 className="text-h1 text-foreground">
              What happens after application
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
              Tiger BioSciences tracks every allograft from donor to clinical use. If an adverse event occurs, we need to know. If outcomes data becomes available, we want to see it. If a safety signal emerges, we must respond.
            </p>

            <p>
              Clinicians play a critical role in this system. Reporting adverse events is not optional—it is required by FDA regulation and ethical practice. Sharing outcomes data helps us understand what works and refine clinical guidelines. Communicating safety concerns allows us to respond before problems scale.
            </p>

            <p>
              We recognize this creates administrative burden. We also recognize it is necessary. Donors gave tissue with the understanding that someone would be paying attention to what happens with it. Clinicians are that someone.
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
              The chain of responsibility does not end when tissue leaves our facility. It extends through clinical application, patient recovery, and long-term outcomes. Clinicians are not consumers of our products. They are partners in a shared commitment to honor the gifts we receive.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
