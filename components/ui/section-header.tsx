import { type ReactNode } from "react";

/*
 * Tiger BioSciences Section Header
 *
 * The Label > Heading > Body stack used in every content section.
 * Change typography, spacing, or colors here → every header on the site updates.
 */

interface SectionHeaderProps {
  label?: string;
  heading: ReactNode;
  body?: string;
  align?: "center" | "left";
  labelColor?: string;
  className?: string;
}

export function SectionHeader({
  label,
  heading,
  body,
  align = "center",
  labelColor,
  className = "",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`space-y-6 mb-12 md:mb-20 ${alignment} ${className}`}>
      {label && (
        <span className={`inline-block text-[12px] font-normal uppercase tracking-[3.15px] leading-[15.3px] ${labelColor || "text-[#231010]/40"}`}>
          {label}
        </span>
      )}
      <h2 className="font-display font-light text-[#231010] text-[clamp(26px,5vw,64px)] tracking-[0px] md:tracking-[-1px] leading-[1.1]">
        {heading}
      </h2>
      {body && (
        <p className={`text-[14.6px] font-light text-[#231010] leading-[26px] ${align === "center" ? "max-w-[768px] mx-auto" : "max-w-[640px]"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
