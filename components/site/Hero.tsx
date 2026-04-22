"use client"

import Link from "next/link"
import Image from "next/image"
import { ReactNode } from "react"

import { designTokens } from "@/lib/design-tokens"
import { cn } from "@/lib/utils"

interface HeroProps {
  title: ReactNode
  subtitle?: string
  description?: string
  primaryCTA?: { text: string; href: string; className?: string }
  secondaryCTA?: { text: string; href: string; className?: string }
  children?: ReactNode
  backgroundImage?: string
  backgroundVideo?: string
  size?: "default" | "large" | "extra-large"
  align?: "center" | "left"
  noOverlay?: boolean
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  children,
  backgroundImage,
  backgroundVideo,
  size = "default",
  align = "center",
  noOverlay = false,
}: HeroProps) {
  const sizeClasses = {
    default: "min-h-[300px] md:min-h-[400px]",
    large: "min-h-[400px] md:min-h-[600px]",
    "extra-large": "min-h-[600px] md:min-h-[800px]",
  }

  const hasMediaBackground = backgroundVideo || backgroundImage
  const contentShellClass = hasMediaBackground
    ? "mx-auto max-w-5xl rounded-[16px] bg-[#efedea]/78 p-6 md:p-10 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.16)]"
    : ""

  const buttons = designTokens.components.buttons
  const heroSubtitleClass = designTokens.components.badges.special.heroPill.className
  const primaryFallback = cn(buttons.base, buttons.sizes.lg, buttons.radii["8"], buttons.variants.primary.className)
  const secondaryFallback = cn(
    buttons.base,
    buttons.sizes.lg,
    buttons.radii["8"],
    buttons.variants.outline.className,
    hasMediaBackground
      ? "backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 focus-visible:ring-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      : "focus-visible:ring-brand/40"
  )

  return (
    <div
      className={`relative overflow-hidden ${
        hasMediaBackground ? "h-[100vh] flex items-start md:items-center justify-center pt-24 md:pt-0" : "pt-32 pb-16 md:pt-40 md:pb-24"
      } ${!hasMediaBackground ? sizeClasses[size] : ""}`}
    >
      {/* Solid cream background to prevent flash during load */}
      {hasMediaBackground && <div className="absolute inset-0 -z-20 bg-[#efedea]" />}

      {backgroundVideo ? (
        <>
          {/* Background video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-0 transition-opacity duration-500"
            onLoadedData={(e) => {
              e.currentTarget.classList.remove('opacity-0')
              e.currentTarget.classList.add('opacity-100')
              // Fade in overlays with video
              const overlays = e.currentTarget.parentElement?.querySelectorAll('.hero-overlay')
              overlays?.forEach((overlay) => {
                overlay.classList.remove('opacity-0')
                overlay.classList.add('opacity-100')
              })
            }}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          {!noOverlay && (
            <>
              <div className="hero-overlay absolute inset-0 -z-10 bg-[#231010]/24 opacity-0 transition-opacity duration-500" />
              <div
                className="hero-overlay absolute inset-0 -z-10 opacity-0 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, rgba(35,16,16,0.52) 0%, rgba(35,16,16,0.24) 38%, rgba(35,16,16,0.08) 100%)" }}
              />
              <div className="hero-overlay absolute inset-0 -z-10 bg-[#efedea]/42 opacity-0 transition-opacity duration-500" />
              <div className="hero-overlay absolute bottom-0 left-0 right-0 h-[45%] -z-10 opacity-0 transition-opacity duration-500" style={{ background: "linear-gradient(to top, #efedea, transparent)" }} />
            </>
          )}
        </>
      ) : backgroundImage ? (
        <>
          {/* Background image with overlay */}
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="absolute inset-0 -z-10 object-cover object-center opacity-0 transition-opacity duration-700"
            priority
            onLoad={(e) => {
              e.currentTarget.classList.remove('opacity-0')
              e.currentTarget.classList.add('opacity-100')
            }}
          />
          {!noOverlay && (
            <>
              <div className="absolute inset-0 -z-10 bg-[#231010]/24" />
              <div
                className="absolute inset-0 -z-10"
                style={{ background: "linear-gradient(90deg, rgba(35,16,16,0.52) 0%, rgba(35,16,16,0.24) 38%, rgba(35,16,16,0.08) 100%)" }}
              />
              <div className="absolute inset-0 -z-10 bg-[#efedea]/42" />
              <div className="absolute bottom-0 left-0 right-0 h-[45%] -z-10" style={{ background: "linear-gradient(to top, #efedea, transparent)" }} />
            </>
          )}
        </>
      ) : (
        <>
          {/* Clean cream background */}
          <div className="absolute inset-0 -z-10 bg-[#efedea]" />
        </>
      )}

      <div className={`relative container mx-auto max-w-7xl px-4 sm:px-6 md:px-12 ${align === 'left' ? 'text-left' : 'text-center'} w-full`}>
        <div className={contentShellClass}>
          {subtitle && (
            <div
              className={cn(
                "mb-8 md:mb-10 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]",
                heroSubtitleClass
              )}
            >
              {subtitle}
            </div>
          )}
          <h1 className={`text-display-xl font-light tracking-[-0.025em] max-w-[80ch] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] ${align === 'center' ? 'mx-auto' : ''} text-[#231010]`}>
            {title}
          </h1>
          {description && (
            <div className={`mt-8 md:mt-10 mb-12 md:mb-16 max-w-[95ch] opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] ${align === "center" ? "mx-auto" : ""}`}>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-[#231010]/78">
                {description}
              </p>
            </div>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className={`${hasMediaBackground ? 'fixed md:relative bottom-8 md:bottom-auto left-0 md:left-auto right-0 md:right-auto px-4 sm:px-6 md:px-0 z-30 md:z-auto' : ''} flex flex-col gap-4 sm:flex-row opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards] ${align === 'center' ? 'items-center justify-center' : 'items-start'}`}>
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className={primaryCTA.className ?? primaryFallback}
                >
                  {primaryCTA.text}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className={secondaryCTA.className ?? secondaryFallback}
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}
          {children && <div className="mt-16 opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">{children}</div>}
        </div>
      </div>
    </div>
  );
}
