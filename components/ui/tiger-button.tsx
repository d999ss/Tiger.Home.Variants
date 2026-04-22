import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { type ReactNode } from "react";

/*
 * Tiger BioSciences Button System
 *
 * Three variants, one source of truth.
 * Change the styles here → every button on the site updates.
 */

const base = "inline-flex w-fit items-center justify-center gap-2 text-[12px] md:text-[13px] font-normal tracking-[0.35px] leading-[20px] rounded-[4px] whitespace-nowrap transition-all duration-[0.25s] ease active:scale-[0.98]";

const pad = "px-5 py-3 md:px-7 md:py-[15px]";

const variants = {
  primary: `${base} ${pad} bg-[#D5101F] text-[#fbfcff] hover:bg-[#B00E1A] hover:shadow-[0_4px_16px_rgba(0,0,0,0.16)]`,
  secondary: `${base} ${pad} border border-[#D5101F]/20 text-[#231010] hover:bg-[#D5101F] hover:text-[#fbfcff] hover:shadow-[0_4px_16px_rgba(0,0,0,0.16)]`,
  glass: `${base} ${pad} backdrop-blur-[32px] bg-white/[0.33] text-[#231010] hover:bg-white/[0.5] hover:shadow-[0_4px_16px_rgba(0,0,0,0.16)]`,
  inverse: `${base} ${pad} bg-[#fbfcff] text-[#0e0e12] hover:bg-[#afb0b3] hover:shadow-[0_4px_16px_rgba(0,0,0,0.16)]`,
  "outline-light": `${base} ${pad} border border-[#fbfcff]/30 text-[#fbfcff] hover:bg-[#fbfcff]/10 hover:border-[#fbfcff]/50 hover:shadow-[0_4px_16px_rgba(0,0,0,0.16)]`,
} as const;

type Variant = keyof typeof variants;

interface TigerButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

export function TigerButton({
  children,
  href,
  variant = "primary",
  arrow = false,
  className = "",
  onClick,
  type = "button",
  external = false,
}: TigerButtonProps) {
  const classes = `${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {arrow && <ArrowRightIcon className="size-4 transition-transform duration-[0.25s] group-hover:translate-x-1" />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${classes}`}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${classes}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${classes}`}>
      {content}
    </button>
  );
}

/* Export variant classes for edge cases where the component can't be used directly */
export const buttonVariants = variants;
