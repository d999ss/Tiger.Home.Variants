import { type ReactNode } from "react";

/*
 * Tiger BioSciences Section System
 *
 * Enforces consistent section padding, max-width, and responsive spacing.
 * Change these values here → every section on the site updates.
 */

const widths = {
  narrow: "max-w-[896px]",
  default: "max-w-[1024px]",
  wide: "max-w-[1280px]",
  full: "max-w-7xl",
} as const;

const backgrounds = {
  cream: "bg-[#ffffff]",
  white: "bg-[#fbfcff]",
  none: "",
} as const;

type Width = keyof typeof widths;
type Background = keyof typeof backgrounds;

interface TigerSectionProps {
  children: ReactNode;
  width?: Width;
  bg?: Background;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

export function TigerSection({
  children,
  width = "default",
  bg = "cream",
  className = "",
  id,
  as: Tag = "section",
}: TigerSectionProps) {
  return (
    <Tag id={id} className={`${backgrounds[bg]} py-20 md:py-28 lg:py-[144px] ${className}`}>
      <div className={`container mx-auto ${widths[width]} px-6 md:px-12`}>
        {children}
      </div>
    </Tag>
  );
}
