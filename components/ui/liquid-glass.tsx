"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

/* ─── Displacement Map Generator ─── */

function buildDisplacementMap(w: number, h: number, r: number, depth: number) {
  const pctY1 = Math.ceil((r / h) * 15);
  const pctY2 = Math.floor(100 - (r / h) * 15);
  const pctX1 = Math.ceil((r / w) * 15);
  const pctX2 = Math.floor(100 - (r / w) * 15);

  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg height="${h}" width="${w}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
      <style>.mix{mix-blend-mode:screen}</style>
      <defs>
        <linearGradient id="Y" x1="0" x2="0" y1="${pctY1}%" y2="${pctY2}%">
          <stop offset="0%" stop-color="#0F0"/>
          <stop offset="100%" stop-color="#000"/>
        </linearGradient>
        <linearGradient id="X" x1="${pctX1}%" x2="${pctX2}%" y1="0" y2="0">
          <stop offset="0%" stop-color="#F00"/>
          <stop offset="100%" stop-color="#000"/>
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#808080"/>
      <g filter="blur(2px)">
        <rect width="${w}" height="${h}" fill="#000080"/>
        <rect width="${w}" height="${h}" fill="url(#Y)" class="mix"/>
        <rect width="${w}" height="${h}" fill="url(#X)" class="mix"/>
        <rect x="${depth}" y="${depth}"
              width="${w - 2 * depth}" height="${h - 2 * depth}"
              fill="#808080" rx="${r}" ry="${r}" filter="blur(${depth}px)"/>
      </g>
    </svg>
  `)}`;
}

function buildFilter(
  w: number,
  h: number,
  r: number,
  depth: number,
  strength: number,
  ca: number
) {
  const map = buildDisplacementMap(w, h, r, depth);
  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg height="${h}" width="${w}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="lg" color-interpolation-filters="sRGB">
          <feImage x="0" y="0" width="${w}" height="${h}" href="${map}" result="dm"/>
          <feDisplacementMap in="SourceGraphic" in2="dm"
            scale="${strength + ca * 2}" xChannelSelector="R" yChannelSelector="G"/>
          <feColorMatrix type="matrix"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="dR"/>
          <feDisplacementMap in="SourceGraphic" in2="dm"
            scale="${strength + ca}" xChannelSelector="R" yChannelSelector="G"/>
          <feColorMatrix type="matrix"
            values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="dG"/>
          <feDisplacementMap in="SourceGraphic" in2="dm"
            scale="${strength}" xChannelSelector="R" yChannelSelector="G"/>
          <feColorMatrix type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="dB"/>
          <feBlend in="dR" in2="dG" mode="screen"/>
          <feBlend in2="dB" mode="screen"/>
        </filter>
      </defs>
    </svg>
  `)}#lg`;
}

/* ─── Feature Detection ─── */

let _supportsUrl: boolean | null = null;
function supportsBackdropFilterUrl() {
  if (_supportsUrl !== null) return _supportsUrl;
  if (typeof document === "undefined") return false;
  const el = document.createElement("div");
  el.style.cssText = "backdrop-filter: url(#t)";
  _supportsUrl = el.style.backdropFilter.includes("url");
  return _supportsUrl;
}

/* ─── Component ─── */

interface LiquidGlassProps {
  children: ReactNode;
  radius?: number;
  depth?: number;
  strength?: number;
  chromaticAberration?: number;
  tint?: string;
  blur?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "button" | "nav" | "header" | "section";
  interactive?: boolean;
}

export function LiquidGlass({
  children,
  radius = 24,
  depth = 10,
  strength = 60,
  chromaticAberration = 6,
  tint = "rgba(255,255,255,0.12)",
  blur = 16,
  className = "",
  style,
  as: Tag = "div",
  interactive = false,
}: LiquidGlassProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const filterEl = filterRef.current;
    if (!el || !filterEl) return;

    const apply = () => {
      const rect = el.getBoundingClientRect();
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);
      if (!w || !h) return;

      if (supportsBackdropFilterUrl()) {
        const filterUrl = buildFilter(w, h, radius, depth, strength, chromaticAberration);
        const value = `blur(1px) url('${filterUrl}') blur(${Math.round(blur * 0.4)}px) brightness(1.08) saturate(1.4)`;
        filterEl.style.backdropFilter = value;
        filterEl.style.webkitBackdropFilter = value;
      } else {
        const value = `blur(${blur}px) saturate(180%) brightness(1.05)`;
        filterEl.style.backdropFilter = value;
        filterEl.style.webkitBackdropFilter = value;
      }
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, [radius, depth, strength, chromaticAberration, blur]);

  return (
    <Tag
      ref={containerRef as never}
      className={`relative overflow-hidden ${interactive ? "liquid-glass-interactive" : ""} ${className}`}
      style={{ borderRadius: radius, ...style }}
    >
      {/* Filter layer */}
      <div
        ref={filterRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, borderRadius: radius }}
      />

      {/* Tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2, background: tint, borderRadius: radius }}
      />

      {/* Specular rim */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          borderRadius: radius,
          boxShadow: `
            inset 1px 1px 0 rgba(255,255,255,0.6),
            inset -1px -1px 0 rgba(255,255,255,0.15),
            inset 0 0 8px rgba(255,255,255,0.25)
          `,
          border: "0.5px solid rgba(255,255,255,0.35)",
        }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: 4 }}>
        {children}
      </div>
    </Tag>
  );
}

/* ─── Lightweight variant for buttons/pills ─── */

interface GlassPillProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  as?: "button" | "div" | "a";
}

export function GlassPill({
  children,
  className = "",
  style,
  onClick,
  as: Tag = "div",
}: GlassPillProps) {
  return (
    <Tag
      onClick={onClick}
      className={`
        relative overflow-hidden
        backdrop-blur-[16px] backdrop-saturate-[180%] backdrop-brightness-[1.05]
        bg-white/[0.12]
        border border-white/[0.35]
        transition-all duration-200 ease-out
        hover:bg-white/[0.2] hover:border-white/[0.5]
        active:scale-[0.97] active:brightness-[0.95]
        ${className}
      `}
      style={style}
    >
      {/* Specular */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit]"
        style={{
          boxShadow: `
            inset 1px 1px 0 rgba(255,255,255,0.5),
            inset 0 0 6px rgba(255,255,255,0.15)
          `,
        }}
      />
      <span className="relative z-10">{children}</span>
    </Tag>
  );
}
