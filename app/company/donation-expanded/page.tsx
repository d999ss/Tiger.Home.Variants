"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightIcon, Heart, Users, Award, Sparkles } from "lucide-react";
import { Hero } from "@/components/site/Hero";

const impactStats = [
  { number: "1", label: "Mission", description: "To enable regeneration without limits." },
  { number: "2,300+", label: "Families", description: "Donors whose generosity transforms loss into life." },
  { number: "70+", label: "Partners", description: "Hospitals and recovery teams advancing regenerative care." },
  { number: "15+", label: "Countries", description: "Worldwide access to regenerative healing." }
];

const donorStories = [
  {
    quote: "When my mother passed, we wanted something beautiful to come from our loss. Knowing her gift helped heal others gave our family peace.",
    author: "Sarah M.",
    relationship: "Daughter of Donor",
    image: "/images/sarah-donor.png"
  },
  {
    quote: "The wound on my leg wouldn't heal for two years. Thanks to tissue donation, I can walk again. I think about that donor family every single day.",
    author: "Marcus T.",
    relationship: "Recipient",
    image: "/images/marcus-recipient.png"
  },
  {
    quote: "We chose to donate because we believe in the circle of life. One person's journey can light the path for countless others.",
    author: "The Rodriguez Family",
    relationship: "Donor Family",
    image: "/images/rodriguez-family.png"
  }
];

const journeySteps = [
  {
    title: "The Gift is Given",
    description: "A family, in their most difficult moment, chooses generosity. They make a decision that will echo through generations.",
    icon: Heart
  },
  {
    title: "Careful Stewardship",
    description: "With reverence and precision, our team honors the donation through meticulous recovery, processing, and testing.",
    icon: Award
  },
  {
    title: "Science Meets Soul",
    description: "Advanced tissue engineering transforms the gift into life-changing treatments—allografts, matrices, and regenerative solutions.",
    icon: Sparkles
  },
  {
    title: "Lives Are Changed",
    description: "A chronic wound heals. A patient walks again. A person sees their reflection with new confidence. The gift lives on.",
    icon: Users
  }
];

export default function DonationExpandedPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Emotional Hero */}
      <Hero
        subtitle="The Power of Giving"
        title="The Divine Gift of Renewal"
        description="Every innovation at Tiger BioSciences begins with an act of profound generosity. Behind every breakthrough, every healed wound, every restored life—there is a donor, a family, and an extraordinary gift that transcends medicine."
        backgroundImage="/images/donation-hero-dad.png"
        size="extra-large"
        primaryCTA={{ text: "Their Stories", href: "#stories" }}
        secondaryCTA={{ text: "The Journey", href: "#journey" }}
        noOverlay={false}
      />

      {/* Impact Statistics */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              The Measure of Healing
            </span>
            <h2 className="text-h1 text-foreground">
              Beyond Donation: Human Regeneration
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-16 max-w-[1400px] mx-auto">
            {impactStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-lg bg-gradient-to-br from-card via-card to-muted/20 shadow-card"
              >
                <div className="flex flex-col items-center justify-center text-center h-full">
                  <div className="text-5xl md:text-6xl font-light text-brand mb-4">
                    {stat.number}
                  </div>
                  <div className="text-xl font-display mb-3 text-foreground">
                    {stat.label}
                  </div>
                  <p className="text-sm text-foreground/70 font-light">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donor Stories & Testimonials */}
      <section id="stories" className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Hearts & Voices
            </span>
            <h2 className="text-h1 text-foreground">
              Stories That Change Everything
            </h2>
          </motion.div>

          <div className="space-y-12">
            {donorStories.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative overflow-hidden rounded-2xl shadow-ambient"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-[300px] md:h-auto">
                    <Image
                      src={story.image}
                      alt={story.author}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                  </div>

                  {/* Quote */}
                  <div className="p-10 md:p-16 bg-gradient-to-br from-card via-card to-muted/20 flex flex-col justify-center">
                    <div className="text-6xl text-brand/20 font-serif mb-6">&ldquo;</div>
                    <blockquote className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed mb-8 italic">
                      {story.quote}
                    </blockquote>
                    <div>
                      <div className="font-display text-lg text-foreground mb-1">
                        {story.author}
                      </div>
                      <div className="text-sm text-foreground/60 font-light">
                        {story.relationship}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section id="journey" className="relative py-10 md:py-[76px] bg-gradient-to-b from-muted/40 via-muted/20 to-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              From Gift to Grace
            </span>
            <h2 className="text-h1 text-foreground mb-6">
              The Sacred Journey
            </h2>
            <p className="text-lead text-foreground/70 max-w-3xl mx-auto">
              From the moment a family says yes, to the day a patient walks free—this is the journey of a gift that never stops giving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {journeySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="size-16 rounded-full bg-brand/10 flex items-center justify-center border-[0.5px] border-brand/20">
                      <step.icon className="size-8 text-brand" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display mb-4 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-base font-light text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {i < journeySteps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-20 bottom-0 w-[1px] bg-gradient-to-b from-brand/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - Emotional Impact */}
      <section className="relative py-10 md:py-[76px] bg-gradient-to-b from-background via-muted/30 to-muted/40">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
              Moments of Hope
            </span>
            <h2 className="text-h1 text-foreground mb-6">
              The Faces Behind the Science
            </h2>
            <p className="text-lead text-foreground/70 max-w-3xl mx-auto">
              Real people. Real healing. Real gratitude.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: "/images/boredoptimism_close_up_of_a_man_eye_--ar_9151_--raw_--v_7_6e1ef8a8-f234-4f8d-b09d-ab30df60ec89_0.png", caption: "Hope Restored" },
              { image: "/images/boredoptimism_close_up_of_eye_--ar_169_--raw_--profile_e1dtuj_de8adb74-d527-4570-b80d-18c28ad61f2d_2.png", caption: "Life Renewed" },
              { image: "/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_1.png", caption: "Futures Rewritten" },
              { image: "/images/boredoptimism_luminesant_skin_--ar_169_--profile_e1dtuj2_--v__7f62374a-3b44-458e-a628-ac5ffada3271_0.png", caption: "Grace in Action" },
              { image: "/images/boredoptimism_close_up_of_a_man_eye_--ar_9151_--raw_--v_7_6e1ef8a8-f234-4f8d-b09d-ab30df60ec89_2.png", caption: "The Gift Lives On" },
              { image: "/images/boredoptimism_science_aesthetics_--ar_169_--raw_--profile_e1d_6fbaafb0-1d29-4a2a-8229-3c226e2218c3_3.png", caption: "Miracles Made Possible" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group overflow-hidden rounded-lg shadow-card hover:shadow-ambient transition-all duration-300"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-display text-lg">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honoring the Divine Gift - Closing */}
      <section className="relative py-32 md:py-48 bg-gradient-to-br from-muted/60 via-muted/40 to-background">
        {/* Background ambient glow */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[150px]" />
        </div>

        <div className="container relative mx-auto max-w-5xl px-4 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="mb-12">
              <Heart className="size-20 text-brand/60 mx-auto mb-8" />
            </div>

            <h2 className="text-h1 font-light tracking-[-0.02em] text-foreground mb-12">
              We Honor the Divine Gift
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed">
                Every tissue donation is more than biological material. It is an act of love, a leap of faith, and a profound trust placed in our hands.
              </p>

              <p className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed">
                We do not take this responsibility lightly. From the moment of recovery to the final application, we treat every gift with the reverence it deserves.
              </p>

              <p className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed">
                This is the soul of Tiger BioSciences. This is where science bows to the sacred.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-border/30">
              <p className="text-lg font-light text-foreground/70 mb-10">
                If you or someone you know is considering tissue donation, we are here to answer your questions with compassion and transparency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link
                  href="/company/donation"
                  className="inline-flex items-center justify-center px-14 py-4 bg-brand text-brand-foreground font-light tracking-wide border-[0.5px] border-brand hover:bg-brand/90 transition-all duration-300 cursor-pointer"
                >
                  Learn About Donation
                  <ArrowRightIcon className="ml-2 size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-14 py-4 border-[0.5px] border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/5 font-light tracking-wide transition-all duration-300 cursor-pointer"
                >
                  Connect With Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
