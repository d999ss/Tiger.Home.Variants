"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu } from "lucide-react";
import { ReactNode } from "react";

type Theme =
  | "light"        // white bg, dark text — default corporate
  | "cream"        // cream bg, dark text
  | "dark"         // dark brown bg, white text
  | "transparent"  // no bg, white text (over hero imagery)
  | "editorial"    // cream + serif
  | "patient"      // light with bold sans pill CTA
  | "premium";     // minimal white with red pill CTA

const themeStyles: Record<
  Theme,
  {
    wrap: string;
    logoColor: string;
    linkColor: string;
    linkHover: string;
    divider: string;
    cta: string;
    searchBg: string;
    font: string;
  }
> = {
  light: {
    wrap: "bg-white/95 backdrop-blur-[18px] border-b border-[#231010]/[0.08]",
    logoColor: "text-[#231010]",
    linkColor: "text-[#231010]/75",
    linkHover: "hover:text-[#D5101F]",
    divider: "bg-[#231010]/10",
    cta: "bg-[#D5101F] text-white hover:bg-[#A00D17]",
    searchBg: "bg-[#231010]/5 hover:bg-[#231010]/10 text-[#231010]",
    font: "font-normal",
  },
  cream: {
    wrap: "bg-[#f5f1ea]/95 backdrop-blur-[18px] border-b border-[#231010]/[0.1]",
    logoColor: "text-[#231010]",
    linkColor: "text-[#231010]/70",
    linkHover: "hover:text-[#D5101F]",
    divider: "bg-[#231010]/15",
    cta: "bg-[#231010] text-white hover:bg-[#D5101F]",
    searchBg: "bg-[#231010]/5 hover:bg-[#231010]/10 text-[#231010]",
    font: "font-normal",
  },
  dark: {
    wrap: "bg-[#231010]/95 backdrop-blur-[18px] border-b border-white/10",
    logoColor: "text-white",
    linkColor: "text-white/75",
    linkHover: "hover:text-[#D5101F]",
    divider: "bg-white/15",
    cta: "bg-[#D5101F] text-white hover:bg-[#A00D17]",
    searchBg: "bg-white/10 hover:bg-white/20 text-white",
    font: "font-normal",
  },
  transparent: {
    wrap: "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[6px] border-b border-white/10",
    logoColor: "text-white",
    linkColor: "text-white/85",
    linkHover: "hover:text-white",
    divider: "bg-white/20",
    cta: "bg-white text-[#231010] hover:bg-[#D5101F] hover:text-white",
    searchBg: "bg-white/15 hover:bg-white/25 text-white",
    font: "font-normal",
  },
  editorial: {
    wrap: "bg-[#f5f1ea]/95 backdrop-blur-[18px] border-b border-[#231010]/[0.2]",
    logoColor: "text-[#231010]",
    linkColor: "text-[#231010]/80",
    linkHover: "hover:text-[#D5101F]",
    divider: "bg-[#231010]/20",
    cta: "bg-[#231010] text-[#f5f1ea] hover:bg-[#D5101F]",
    searchBg: "bg-[#231010]/8 hover:bg-[#231010]/15 text-[#231010]",
    font: "font-serif italic",
  },
  patient: {
    wrap: "bg-white/95 backdrop-blur-[18px] border-b border-[#231010]/[0.08]",
    logoColor: "text-[#231010]",
    linkColor: "text-[#231010]/75 font-medium",
    linkHover: "hover:text-[#D5101F]",
    divider: "bg-[#231010]/10",
    cta: "bg-[#D5101F] text-white hover:bg-[#A00D17] rounded-full",
    searchBg: "bg-[#231010]/5 hover:bg-[#231010]/10 text-[#231010] rounded-full",
    font: "font-semibold",
  },
  premium: {
    wrap: "bg-white/95 backdrop-blur-[20px] border-b border-[#231010]/[0.08]",
    logoColor: "text-[#231010]",
    linkColor: "text-[#231010]/75 font-semibold uppercase tracking-[1.2px] text-[11px]",
    linkHover: "hover:text-[#D5101F]",
    divider: "bg-[#231010]/15",
    cta: "bg-[#231010] text-white hover:bg-[#D5101F] rounded-full uppercase tracking-[1.2px] text-[11px]",
    searchBg: "bg-[#231010]/5 hover:bg-[#231010]/10 text-[#231010] rounded-full",
    font: "font-bold",
  },
};

interface VariantTopNavProps {
  theme?: Theme;
  ctaLabel?: string;
  ctaHref?: string;
  links?: { label: string; href: string }[];
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  showSearch?: boolean;
  className?: string;
  wrapClassName?: string;
}

const defaultLinks = [
  { label: "Company", href: "/company/overview" },
  { label: "Science", href: "/science" },
  { label: "Products", href: "/products" },
  { label: "People", href: "/people" },
  { label: "Press Room", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export function VariantTopNav({
  theme = "light",
  ctaLabel,
  ctaHref,
  links = defaultLinks,
  leftSlot,
  rightSlot,
  showSearch = true,
  className = "",
  wrapClassName = "",
}: VariantTopNavProps) {
  const s = themeStyles[theme];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 ${s.wrap} ${wrapClassName}`}>
      <div className={`max-w-[1440px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between gap-6 ${className}`}>
        {/* Left — Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/tiger-assets/tiger-logo-horizontal.svg"
              alt="Tiger BioSciences"
              width={168}
              height={36}
              className={`h-8 md:h-9 w-auto ${theme === "dark" || theme === "transparent" ? "brightness-0 invert" : ""}`}
              priority
            />
          </Link>
          {leftSlot}
        </div>

        {/* Center — Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`text-[13px] ${s.font} ${s.linkColor} ${s.linkHover} transition-colors whitespace-nowrap`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right — Utility */}
        <div className="flex items-center gap-3 shrink-0">
          {rightSlot}
          {showSearch && (
            <button
              type="button"
              aria-label="Search"
              className={`hidden md:inline-flex items-center justify-center size-10 ${s.searchBg} transition-colors ${theme === "patient" || theme === "premium" ? "rounded-full" : "rounded-lg"}`}
            >
              <Search className="size-4" />
            </button>
          )}
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[12px] font-bold transition-colors ${s.cta} ${theme === "patient" || theme === "premium" ? "rounded-full" : "rounded-md"}`}
            >
              {ctaLabel}
            </Link>
          )}
          {/* Mobile menu */}
          <button
            type="button"
            aria-label="Menu"
            className={`lg:hidden size-10 inline-flex items-center justify-center rounded-lg ${s.searchBg}`}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
