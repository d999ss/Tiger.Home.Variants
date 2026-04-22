"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid3X3 } from "lucide-react";

const VARIANT_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const VARIANT_NAMES: Record<number, string> = {
  1: "Cinematic Video Hero",
  2: "Split Hero",
  3: "Typography Minimal",
  4: "Product Showcase",
  5: "Dark Premium",
  6: "Editorial Spread",
  7: "Interactive Tabs",
  8: "Scroll Storytelling",
  9: "Hero Carousel",
  10: "Bento Grid",
};

export function VariantNav({ current }: { current: number }) {
  const idx = VARIANT_IDS.indexOf(current);
  const prev = idx > 0 ? VARIANT_IDS[idx - 1] : null;
  const next = idx < VARIANT_IDS.length - 1 ? VARIANT_IDS[idx + 1] : null;

  return (
    <div className="w-full border-t border-[#231010]/10 bg-[#fbfcff]">
      <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Previous */}
        {prev ? (
          <Link
            href={`/home-variant-${prev}`}
            className="flex items-center gap-2 text-[13px] font-light text-[#231010]/60 hover:text-[#D5101F] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">{VARIANT_NAMES[prev]}</span>
            <span className="sm:hidden">Prev</span>
          </Link>
        ) : (
          <div />
        )}

        {/* Menu */}
        <Link
          href="/home-variants"
          className="flex items-center gap-2 text-[12px] uppercase tracking-[2px] text-[#231010]/40 hover:text-[#D5101F] transition-colors cursor-pointer"
        >
          <Grid3X3 className="size-4" />
          <span className="hidden sm:inline">All Variants</span>
        </Link>

        {/* Next */}
        {next ? (
          <Link
            href={`/home-variant-${next}`}
            className="flex items-center gap-2 text-[13px] font-light text-[#231010]/60 hover:text-[#D5101F] transition-colors cursor-pointer group"
          >
            <span className="hidden sm:inline">{VARIANT_NAMES[next]}</span>
            <span className="sm:hidden">Next</span>
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
