import Image from "next/image";
import { type ReactNode } from "react";

/*
 * Tiger BioSciences Hero
 *
 * One hero treatment for the entire site. Tiger eye image with cream
 * gradient fade, dark text, consistent height and spacing.
 * Change the image, gradient, or typography here → every page hero updates.
 *
 * Mobile: frosted cream card at bottom, tiger visible above.
 * Desktop: centered text, no card.
 */

interface TigerHeroProps {
  label?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  image?: string;
}

export function TigerHero({
  label,
  title,
  description,
  children,
  image = "/images/tiger-hero.png",
}: TigerHeroProps) {
  return (
    <section className="relative h-[100dvh] md:h-[860px] w-full flex items-end pb-6 md:items-center md:pb-0 overflow-hidden">
      <Image
        src={image}
        alt="Hero background"
        fill
        className="object-cover object-[85%_30%] md:object-center"
        priority
      />
      <div className="absolute inset-0 bg-[#efedea]/40 pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none"
        style={{
          background: "linear-gradient(to top, #efedea 0%, rgba(239,237,234,0.9) 30%, rgba(239,237,234,0.5) 60%, rgba(239,237,234,0) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16">
        <div className="max-w-[640px] mx-auto bg-[#efedea]/80 md:bg-[#efedea]/60 md:backdrop-blur-sm backdrop-blur-sm rounded-[12px] p-6 md:p-10 text-center">
          {label && (
            <span className="inline-block text-[11px] md:text-[12px] font-normal uppercase tracking-[3.15px] text-[#231010]/40 mb-4 md:mb-6">
              {label}
            </span>
          )}
          <h1 className="font-display font-light text-[#231010] text-[clamp(32px,5.5vw,80px)] tracking-[-1.28px] leading-[1.02] md:leading-[0.9] mb-4 md:mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-[14px] md:text-[16px] font-light text-[#231010]/70 leading-[1.6] md:leading-[1.7]">
              {description}
            </p>
          )}
          {children && <div className="mt-6 md:mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
