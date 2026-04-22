"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";

type Theme =
  | "light"        // white with dark text
  | "cream"        // cream bg with dark text
  | "dark"         // dark brown with white text
  | "editorial"    // cream + serif
  | "patient"      // light with bold sans
  | "premium";     // minimal white

const themeStyles: Record<
  Theme,
  {
    wrap: string;
    topBorder: string;
    sectionDivider: string;
    heading: string;
    link: string;
    linkHover: string;
    muted: string;
    logoInvert: boolean;
    accent: string;
    iconBtn: string;
    ctaBg: string;
    ctaText: string;
    headingFont: string;
    linkFont: string;
    eyebrow: string;
  }
> = {
  light: {
    wrap: "bg-[#ffffff] text-[#231010]",
    topBorder: "border-t border-[#231010]/10",
    sectionDivider: "border-t border-[#231010]/10",
    heading: "text-[#231010]",
    link: "text-[#231010]/70",
    linkHover: "hover:text-[#D5101F]",
    muted: "text-[#231010]/45",
    logoInvert: false,
    accent: "#D5101F",
    iconBtn:
      "size-10 rounded-full bg-[#231010]/5 hover:bg-[#D5101F] hover:text-white text-[#231010]/70 transition-colors",
    ctaBg: "bg-[#D5101F] hover:bg-[#A00D17] text-white",
    ctaText: "text-[13px] font-semibold",
    headingFont: "font-semibold uppercase tracking-[2px] text-[11px]",
    linkFont: "font-normal",
    eyebrow: "text-[11px] uppercase tracking-[2.5px] text-[#D5101F] font-semibold",
  },
  cream: {
    wrap: "bg-[#f5f1ea] text-[#231010]",
    topBorder: "border-t border-[#231010]/15",
    sectionDivider: "border-t border-[#231010]/15",
    heading: "text-[#231010]",
    link: "text-[#231010]/70",
    linkHover: "hover:text-[#D5101F]",
    muted: "text-[#231010]/45",
    logoInvert: false,
    accent: "#D5101F",
    iconBtn:
      "size-10 rounded-full bg-[#231010]/10 hover:bg-[#D5101F] hover:text-white text-[#231010]/70 transition-colors",
    ctaBg: "bg-[#231010] hover:bg-[#D5101F] text-[#f5f1ea]",
    ctaText: "text-[13px] font-semibold",
    headingFont: "font-semibold uppercase tracking-[2px] text-[11px]",
    linkFont: "font-normal",
    eyebrow: "text-[11px] uppercase tracking-[2.5px] text-[#D5101F] font-semibold",
  },
  dark: {
    wrap: "bg-[#231010] text-[#fbfcff]",
    topBorder: "border-t border-white/10",
    sectionDivider: "border-t border-white/10",
    heading: "text-[#fbfcff]",
    link: "text-[#fbfcff]/70",
    linkHover: "hover:text-[#D5101F]",
    muted: "text-[#fbfcff]/40",
    logoInvert: true,
    accent: "#D5101F",
    iconBtn:
      "size-10 rounded-full bg-white/10 hover:bg-[#D5101F] text-[#fbfcff]/80 hover:text-white transition-colors",
    ctaBg: "bg-[#D5101F] hover:bg-[#A00D17] text-white",
    ctaText: "text-[13px] font-semibold",
    headingFont: "font-semibold uppercase tracking-[2px] text-[11px]",
    linkFont: "font-normal",
    eyebrow: "text-[11px] uppercase tracking-[2.5px] text-[#D5101F] font-semibold",
  },
  editorial: {
    wrap: "bg-[#f5f1ea] text-[#231010]",
    topBorder: "border-t-2 border-[#231010]",
    sectionDivider: "border-t border-[#231010]/20",
    heading: "text-[#231010] font-display italic font-light",
    link: "text-[#231010]/75 font-display italic font-light",
    linkHover: "hover:text-[#D5101F]",
    muted: "text-[#231010]/50 font-display italic",
    logoInvert: false,
    accent: "#D5101F",
    iconBtn:
      "size-10 rounded-full bg-[#231010]/8 hover:bg-[#231010] hover:text-[#f5f1ea] text-[#231010]/70 transition-colors",
    ctaBg: "bg-[#231010] hover:bg-[#D5101F] text-[#f5f1ea]",
    ctaText: "text-[13px] font-display italic font-light",
    headingFont: "font-display italic font-light text-[13px]",
    linkFont: "font-display italic font-light",
    eyebrow: "text-[11px] uppercase tracking-[3px] text-[#D5101F] font-normal",
  },
  patient: {
    wrap: "bg-[#fbfcff] text-[#231010]",
    topBorder: "border-t border-[#231010]/10",
    sectionDivider: "border-t border-[#231010]/10",
    heading: "text-[#231010]",
    link: "text-[#231010]/75 font-medium",
    linkHover: "hover:text-[#D5101F]",
    muted: "text-[#231010]/50",
    logoInvert: false,
    accent: "#D5101F",
    iconBtn:
      "size-10 rounded-full bg-[#231010]/5 hover:bg-[#D5101F] hover:text-white text-[#231010]/70 transition-colors",
    ctaBg: "bg-[#D5101F] hover:bg-[#A00D17] text-white rounded-full",
    ctaText: "text-[13px] font-bold",
    headingFont: "font-bold uppercase tracking-[1.5px] text-[11px]",
    linkFont: "font-medium",
    eyebrow: "text-[11px] uppercase tracking-[1.5px] text-[#D5101F] font-bold",
  },
  premium: {
    wrap: "bg-[#ffffff] text-[#231010]",
    topBorder: "border-t border-[#231010]/12",
    sectionDivider: "border-t border-[#231010]/12",
    heading: "text-[#231010]",
    link: "text-[#231010]/75 font-medium",
    linkHover: "hover:text-[#D5101F]",
    muted: "text-[#231010]/50 font-medium",
    logoInvert: false,
    accent: "#D5101F",
    iconBtn:
      "size-10 rounded-full bg-[#231010]/5 hover:bg-[#231010] hover:text-white text-[#231010]/70 transition-colors",
    ctaBg: "bg-[#231010] hover:bg-[#D5101F] text-white rounded-full uppercase tracking-[1.5px]",
    ctaText: "text-[11px] font-bold",
    headingFont: "font-bold uppercase tracking-[2px] text-[11px]",
    linkFont: "font-medium",
    eyebrow: "text-[10px] uppercase tracking-[2.5px] text-[#D5101F] font-bold",
  },
};

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Wound Care", href: "/solutions/wound-care" },
      { label: "Aesthetics", href: "/solutions/aesthetics" },
      { label: "International", href: "/solutions/international" },
      { label: "Regenerative Sciences", href: "/science" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Tiger", href: "/company/about" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Careers", href: "/people" },
      { label: "Press Room", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Clinical Evidence", href: "/science" },
      { label: "Find a Provider", href: "/find-a-provider" },
      { label: "Patient Assistance", href: "/patient-assistance" },
      { label: "For Clinicians", href: "/hcp" },
      { label: "The Gift of Donation", href: "/company/donation" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "FDA Registrations", href: "/compliance" },
      { label: "AATB Accreditation", href: "/compliance" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

interface VariantFooterProps {
  theme?: Theme;
  tagline?: string;
  newsletter?: boolean;
  minimalist?: boolean;
}

export function VariantFooter({
  theme = "light",
  tagline = "Regenerative medicine engineered around your biology.",
  newsletter = true,
  minimalist = false,
}: VariantFooterProps) {
  const s = themeStyles[theme];

  return (
    <footer className={`${s.wrap} ${s.topBorder}`}>
      {/* Top band — brand mission + newsletter */}
      {!minimalist && (
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Brand */}
            <div className="lg:col-span-5 space-y-5">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/tiger-assets/tiger-logo-horizontal.svg"
                  alt="Tiger BioSciences"
                  width={200}
                  height={44}
                  className={`h-10 md:h-11 w-auto ${s.logoInvert ? "brightness-0 invert" : ""}`}
                />
              </Link>
              <p className={`text-[17px] md:text-[19px] ${s.heading} leading-[1.45] tracking-[-0.2px] max-w-[420px]`}>
                {tagline}
              </p>
              <div className="flex items-center gap-2 pt-3">
                <Link href="https://linkedin.com" aria-label="LinkedIn" className={`inline-flex items-center justify-center ${s.iconBtn}`}>
                  <Linkedin className="size-4" />
                </Link>
                <Link href="https://twitter.com" aria-label="Twitter" className={`inline-flex items-center justify-center ${s.iconBtn}`}>
                  <Twitter className="size-4" />
                </Link>
                <Link href="https://youtube.com" aria-label="YouTube" className={`inline-flex items-center justify-center ${s.iconBtn}`}>
                  <Youtube className="size-4" />
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            {newsletter && (
              <div className="lg:col-span-7 lg:pl-10">
                <div className={`${s.eyebrow} mb-3`}>
                  Quarterly briefing
                </div>
                <h3 className={`${s.heading} leading-[1.1] tracking-[-0.5px] mb-6 ${theme === "editorial" ? "" : "font-display font-bold"}`} style={{ fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: theme === "editorial" ? 300 : 700 }}>
                  Clinical intelligence, delivered.
                </h3>
                <p className={`text-[14px] ${s.link} leading-[1.65] mb-6 max-w-[500px]`}>
                  Science updates, product news, and peer-reviewed evidence — four times a year, curated for clinicians and partners.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-[520px]">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className={`flex-1 px-5 py-3.5 text-[14px] ${theme === "dark" ? "bg-white/10 text-white placeholder:text-white/40 border border-white/15" : "bg-white text-[#231010] placeholder:text-[#231010]/40 border border-[#231010]/15"} ${theme === "patient" || theme === "premium" ? "rounded-full" : "rounded-lg"} focus:outline-none focus:border-[#D5101F]`}
                  />
                  <button
                    type="submit"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 ${s.ctaBg} ${s.ctaText} ${theme === "patient" || theme === "premium" ? "rounded-full" : "rounded-lg"} transition-colors whitespace-nowrap`}
                  >
                    Subscribe
                    <ArrowUpRight className="size-4" />
                  </button>
                </form>
                <p className={`text-[11px] ${s.muted} leading-[1.5] mt-3`}>
                  No spam. Unsubscribe any time. Read our <Link href="/privacy" className={s.linkHover}>privacy policy</Link>.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main link columns */}
      <div className={`${!minimalist ? s.sectionDivider : ""} max-w-[1440px] mx-auto px-6 md:px-10 py-12 md:py-16`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {columns.map((col) => (
            <div key={col.title} className="space-y-4">
              <div className={`${s.headingFont} ${s.heading}`}>
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className={`text-[13.5px] ${s.linkFont} ${s.link} ${s.linkHover} transition-colors inline-block`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar — legal */}
      <div className={`${s.sectionDivider}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className={`text-[12px] ${s.muted}`}>
            © {new Date().getFullYear()} Tiger BioSciences™. All rights reserved. FDA Registered · AATB Accredited · ISO 13485:2016.
          </div>
          <div className={`flex items-center gap-5 text-[12px] ${s.link}`}>
            <Link href="/privacy" className={s.linkHover}>Privacy</Link>
            <span className={s.muted}>·</span>
            <Link href="/terms" className={s.linkHover}>Terms</Link>
            <span className={s.muted}>·</span>
            <Link href="/accessibility" className={s.linkHover}>Accessibility</Link>
            <span className={s.muted}>·</span>
            <Link href="/cookies" className={s.linkHover}>Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
