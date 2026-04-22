"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const variants = [
  {
    id: 1,
    title: "Cinematic Video Hero",
    description:
      "Full-viewport video background with floating glassmorphism stats bar, neumorphic pillars, and cinematic Apple-like feel.",
    tags: ["Video", "Cinematic", "Stats Bar"],
  },
  {
    id: 2,
    title: "Split Hero",
    description:
      "50/50 split layout — headline and CTAs on white, full-bleed tiger image on the right. Trust badges strip and alternating division sections.",
    tags: ["Split Layout", "Image-Forward", "Classic"],
  },
  {
    id: 3,
    title: "Typography-Forward Minimal",
    description:
      "No hero image. Massive typographic headline with animated underline, generous whitespace, thin dividers, text-only division cards.",
    tags: ["Minimal", "Typography", "Ultra-Clean"],
  },
  {
    id: 4,
    title: "Product Showcase Grid",
    description:
      "Product-first layout with a 3x2 grid of featured products, division-colored borders, and a 4-card value proposition row.",
    tags: ["Products", "Grid", "Data-Rich"],
  },
  {
    id: 5,
    title: "Dark Premium",
    description:
      "Dark deep-brown theme with video hero, glowing division cards, large tiger-red clinical stats, and a contrasting white CTA.",
    tags: ["Dark Mode", "Premium", "Video"],
  },
  {
    id: 6,
    title: "Editorial Spread",
    description:
      "Magazine-style nameplate, cover image with drop-cap lede, table of contents, alternating feature articles with pull quotes, and an editorial colophon.",
    tags: ["Editorial", "Magazine", "Long-form"],
  },
  {
    id: 7,
    title: "Interactive Tabs",
    description:
      "Tabbed division explorer with animated transitions. Each tab reveals content, stats, and CTAs for a different division.",
    tags: ["Interactive", "Tabs", "Exploratory"],
  },
  {
    id: 8,
    title: "Scroll Storytelling",
    description:
      "Six-chapter narrative scroll — The Gift, The Science, The Impact, The Reach, The Future. Each section is ~80vh with staggered entrance.",
    tags: ["Storytelling", "Scroll", "Narrative"],
  },
  {
    id: 9,
    title: "Hero Carousel",
    description:
      "Auto-rotating hero with 6 variations and video backgrounds, progress dots, neumorphic pillars, and a cinematic partnership CTA.",
    tags: ["Carousel", "Video", "Multi-Slide"],
  },
  {
    id: 10,
    title: "Bento Grid",
    description:
      "Modern bento box mosaic — mixed-size cards for divisions, stats, CEO quote, clinical evidence, and donation story in a visual grid.",
    tags: ["Bento", "Mosaic", "Modern"],
  },
];

export default function HomeVariants() {
  return (
    <main className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <div className="w-full border-b border-[#231010]/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-[13px] font-light text-[#231010]/60 hover:text-[#231010] transition-colors"
          >
            &larr; Back to Live Site
          </Link>
          <span className="text-[11px] uppercase tracking-[3px] text-[#231010]/40 font-normal">
            Homepage Variants
          </span>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <motion.span
          className="inline-block text-[11px] font-normal uppercase tracking-[3.15px] text-[#D5101F]/70 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tiger BioSciences · 10 Designs
        </motion.span>
        <motion.h1
          className="font-display font-light text-[#231010] tracking-[-1.5px] leading-[1.02]"
          style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Homepage Variants
        </motion.h1>
        <motion.p
          className="mt-4 text-[15px] font-light text-[#231010]/60 max-w-lg mx-auto leading-[1.7]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          10 unique homepage designs for review. Click any variant to preview
          it live.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {variants.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 * i }}
            >
              <Link
                href={`/home-variant-${v.id}`}
                className="group block rounded-[12px] bg-[#fbfcff] border border-[#231010]/[0.06] overflow-hidden hover:shadow-[0_8px_32px_rgba(71,63,56,0.12)] hover:border-[#231010]/[0.12] transition-all duration-300 cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative w-full aspect-[16/10] bg-[#231010]/[0.04] overflow-hidden border-b border-[#231010]/[0.06]">
                  <Image
                    src={`/variant-thumbs/v${v.id}.jpg`}
                    alt={`${v.title} preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-7">
                  {/* Number + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-medium text-white"
                      style={{ backgroundColor: "#D5101F" }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-display font-light text-[22px] text-[#231010] tracking-[-0.5px] leading-[1.2] group-hover:text-[#D5101F] transition-colors duration-200">
                        {v.title}
                      </h2>
                    </div>
                    <ArrowRight className="shrink-0 size-5 text-[#231010]/20 group-hover:text-[#D5101F] group-hover:translate-x-1 transition-all duration-200 mt-1" />
                  </div>

                  {/* Description */}
                  <p className="text-[13.5px] font-light text-[#231010]/65 leading-[1.65] ml-14">
                    {v.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 ml-14">
                    {v.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-[1.5px] text-[#231010]/40 border border-[#231010]/10 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#231010]/10 py-8 text-center">
        <p className="text-[12px] text-[#231010]/35 font-light tracking-wide">
          Tiger BioSciences &middot; Homepage Design Review
        </p>
      </div>
    </main>
  );
}
