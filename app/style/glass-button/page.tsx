"use client";

import { GlassButton } from "@/components/ui/glass-button";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function GlassButtonPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Glass Buttons */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D2A62C]/20 via-background to-[#DF5630]/20">
        <div className="absolute inset-0 bg-[url('/images/boredoptimism_human_skin_--ar_169_--raw_--profile_e1dtuj2_--v_350bc8db-8fea-4316-aa3b-ec44b72f8094_2.png')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-12 relative z-10">
          <div className="text-center space-y-12">
            <div>
              <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
                Glass Morphism Buttons
              </span>
              <h1 className="text-h1 text-foreground mb-8">
                Interactive Glass Buttons
              </h1>
              <p className="text-lead text-foreground/70 max-w-2xl mx-auto">
                Premium glass morphism buttons with backdrop blur, dynamic shadows, and shine animations
              </p>
            </div>

            {/* Glass Button Examples */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
              <GlassButton size="lg" colored>
                Explore Solutions
              </GlassButton>

              <GlassButton size="lg" colored>
                Contact Our Team
                <ArrowRightIcon className="size-4" />
              </GlassButton>

              <GlassButton size="md">
                Neutral Glass
              </GlassButton>

              <GlassButton size="md" withShine={false}>
                Without Shine
              </GlassButton>

              <GlassButton size="sm" colored>
                Small Size
              </GlassButton>
            </div>

            {/* Standard Button Comparison */}
            <div className="pt-12 border-t border-foreground/10">
              <p className="text-sm text-foreground/60 mb-6">Compare with standard variants:</p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
                <Button variant="primary" size="lg" radius="full">
                  Primary Button
                </Button>

                <Button variant="outline" size="lg" radius="full">
                  Outline Button
                </Button>

                <Button variant="default" size="lg" radius="full">
                  Default Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Background Example */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-12 relative z-10">
          <div className="text-center space-y-12">
            <div>
              <span className="inline-block border-[0.5px] border-white/20 bg-white/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-white/60 mb-6">
                Glass on Dark
              </span>
              <h2 className="text-h1 text-white mb-8">
                Glass Buttons on Dark Backgrounds
              </h2>
              <p className="text-lead text-white/70 max-w-2xl mx-auto">
                The glass effect creates beautiful depth and dimension against darker surfaces
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
              <GlassButton size="lg" colored className="text-white">
                View Products
                <ArrowRightIcon className="size-4" />
              </GlassButton>

              <GlassButton size="lg" colored className="text-white">
                Learn More
              </GlassButton>

              <GlassButton size="md" className="text-white/90">
                Neutral Glass
              </GlassButton>

              <GlassButton size="md" colored className="text-white">
                Get Started
              </GlassButton>
            </div>
          </div>
        </div>
      </section>

      {/* Branded Color Examples */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 md:px-12 relative z-10">
          <div className="text-center space-y-12">
            <div>
              <span className="inline-block border-[0.5px] border-foreground/20 bg-foreground/[0.02] px-4 py-1.5 text-[9px] font-light uppercase tracking-[0.35em] text-foreground/60 mb-6">
                Brand Variations
              </span>
              <h2 className="text-h1 text-foreground mb-8">
                Division-Specific Colors
              </h2>
            </div>

            <div className="space-y-8">
              {/* Aesthetics */}
              <div className="p-12 rounded-2xl bg-gradient-to-br from-[#D2A62C]/10 to-[#D2A62C]/5">
                <p className="text-sm font-medium text-[#D2A62C] mb-4">Aesthetics</p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                  <GlassButton size="md" className="border-[#D2A62C]/30">
                    Aesthetic Solutions
                  </GlassButton>
                  <GlassButton size="md" className="border-[#D2A62C]/30">
                    View Products
                    <ArrowRightIcon className="size-4" />
                  </GlassButton>
                </div>
              </div>

              {/* Wound Care */}
              <div className="p-12 rounded-2xl bg-gradient-to-br from-[#DF5630]/10 to-[#DF5630]/5">
                <p className="text-sm font-medium text-[#DF5630] mb-4">Wound Care</p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                  <GlassButton size="md" className="border-[#DF5630]/30">
                    Wound Care Solutions
                  </GlassButton>
                  <GlassButton size="md" className="border-[#DF5630]/30">
                    Learn More
                    <ArrowRightIcon className="size-4" />
                  </GlassButton>
                </div>
              </div>

              {/* International */}
              <div className="p-12 rounded-2xl bg-gradient-to-br from-[#0066CC]/10 to-[#0066CC]/5">
                <p className="text-sm font-medium text-[#0066CC] mb-4">International</p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                  <GlassButton size="md" className="border-[#0066CC]/30">
                    Global Solutions
                  </GlassButton>
                  <GlassButton size="md" className="border-[#0066CC]/30">
                    Contact Team
                    <ArrowRightIcon className="size-4" />
                  </GlassButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
