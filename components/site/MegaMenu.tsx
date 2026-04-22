"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"

import { Card, CardBody } from "@/components/ui/card"
import { MEGA_SECTIONS, MegaSection } from "@/data/megaNav"

type TriggerId = MegaSection["id"]

function labelFor(id: TriggerId){
  if(id === "company") return "Company"
  if(id === "expertise") return "Expertise"
  if(id === "science") return "Science"
  return "Products"
}

export default function MegaMenu() {
  const [open, setOpen] = React.useState<TriggerId | null>(null)
  const menuRef = React.useRef<HTMLDivElement>(null)

  // close on ESC / click-out
  React.useEffect(() => {
    function onKey(e: KeyboardEvent){ if(e.key === "Escape") setOpen(null) }
    function onClick(e: MouseEvent){
      if(!menuRef.current) return
      if(open && !menuRef.current.contains(e.target as Node)) setOpen(null)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("mousedown", onClick)
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("mousedown", onClick) }
  }, [open])

  const sections = MEGA_SECTIONS

  return (
    <div ref={menuRef} className="relative">
      <nav className="hidden md:flex items-center gap-8 text-sm tracking-[0.14em] uppercase">
        {sections.map(sec => (
          <button
            key={sec.id}
            aria-expanded={open === sec.id}
            aria-controls={`panel-${sec.id}`}
            onMouseEnter={() => setOpen(sec.id)}
            onFocus={() => setOpen(sec.id)}
            onClick={() => setOpen(v => v === sec.id ? null : sec.id)}
            className={[
              "text-foreground/85 hover:text-foreground hover:bg-foreground/5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-[8px] px-2 py-1.5 transition-all duration-200 cursor-pointer"
            ].join(" ")}
          >
            {labelFor(sec.id)}
            <span className="ml-1 align-middle text-foreground/60">▾</span>
          </button>
        ))}
      </nav>

      {/* Panels */}
      {sections.map(sec => (
        <Panel key={sec.id} open={open === sec.id} id={sec.id} section={sec}
               onMouseEnter={() => setOpen(sec.id)} onMouseLeave={() => setOpen(null)} />
      ))}
    </div>
  )
}

function Panel({ open, id, section, onMouseEnter, onMouseLeave }:{
  open: boolean; id: TriggerId; section: MegaSection; onMouseEnter: () => void; onMouseLeave: () => void
}) {
  return (
    <div
      id={`panel-${id}`}
      role="region"
      aria-hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={[
        "absolute left-1/2 -translate-x-1/2 mt-3 w-[min(1100px,92vw)]",
        "transition-opacity duration-150",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      ].join(" ")}
    >
      <Card className="bg-card/95 dark:bg-card/95 shadow-card mm-enter">
        <CardBody className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
          {/* Left: grouped links */}
          <div className="grid grid-cols-2 gap-8">
            {section.groups.map(g => (
              <div key={g.title} className="space-y-3">
                <div className="text-[12px] font-semibold tracking-[0.16em] uppercase text-foreground/90">{g.title}</div>
                <ul className="space-y-3">
                  {g.items.map(it => (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        className="block text-[15px] text-foreground/80 hover:text-brand hover:bg-brand/5 hover:font-medium transition-all duration-200 rounded-[8px] px-2 py-1.5 -mx-2 cursor-pointer"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: feature card */}
          <div className="hidden lg:block">
            <Card className="relative overflow-hidden bg-muted/40 border border-border/60">
              {section.feature.image && (
                <>
                  <Image
                    src={section.feature.image}
                    alt=""
                    fill
                    className="absolute inset-0 object-cover"
                  />
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
                </>
              )}
              <CardBody className="relative space-y-4">
                <span className="inline-block text-[11px] tracking-[0.18em] font-semibold uppercase rounded-[624px] px-3 py-1 bg-white/20 text-white border border-white/30 backdrop-blur-sm">
                  {section.feature.badge}
                </span>
                <div className="text-h3 text-white drop-shadow-lg">{section.feature.title}</div>
                <p className="text-body text-white/90 drop-shadow-md">{section.feature.body}</p>
                <Link href={section.feature.cta.href} className="inline-flex items-center gap-2 text-[15px] font-semibold text-white hover:bg-white/20 hover:translate-x-1 transition-all duration-200 rounded-[8px] px-2 py-1.5 -mx-2 cursor-pointer backdrop-blur-sm">
                  {section.feature.cta.label} <span aria-hidden>→</span>
                </Link>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

