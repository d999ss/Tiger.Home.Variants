"use client"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { Search } from "lucide-react"
import { TigerButton } from "@/components/ui/tiger-button"

type Product = {
  slug: string
  title: string
  subtitle: string
  division: "regentx" | "wound" | "aesthetics" | "international"
  company: string
  category: string
  heroImage?: string
}

const DIVISION_LABELS: Record<string, string> = {
  regentx: "Tissue Processing",
  wound: "Wound Care",
  aesthetics: "Aesthetics",
  international: "International"
}

const DIVISION_COLORS: Record<string, string> = {
  wound: "#DF512B",
  aesthetics: "#D2A62C",
  international: "#4774AA",
  regentx: "#231010",
}

export default function ProductsGrid({
  initialProducts,
  initialQ,
  initialDivision,
}: {
  initialProducts: Product[]
  initialQ?: string
  initialDivision?: string
}) {
  const router = useRouter()
  const params = useSearchParams()
  const [q, setQ] = useState(initialQ || "")
  const [div, setDiv] = useState(initialDivision || "all")

  useEffect(() => {
    const next = new URLSearchParams(params.toString())
    if (q) {
      next.set("q", q)
    } else {
      next.delete("q")
    }
    if (div && div !== "all") {
      next.set("division", div)
    } else {
      next.delete("division")
    }
    router.replace(`/products?${next.toString()}`, { scroll: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, div])

  const filtered = useMemo(() => {
    return initialProducts.filter(p => {
      const text = `${p.title} ${p.company} ${p.category} ${p.division}`.toLowerCase()
      const okQ = q ? text.includes(q.toLowerCase()) : true
      const okD = div === "all" ? true : p.division === div
      return okQ && okD
    })
  }, [q, div, initialProducts])

  return (
    <>
      {/* Search */}
      <div className="mb-6 animate-appear" style={{ animationDelay: '0.1s' }}>
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#231010]/40" />
          <input
            value={q}
            onChange={e=>setQ(e.target.value)}
            placeholder="Search products by name, company, or category..."
            className="w-full pl-11 pr-5 py-[15px] border border-[#231010]/15 bg-[#fbfcff] rounded-[4px] text-[13px] font-light text-[#231010] placeholder:text-[#231010]/35 focus:outline-none focus:border-[#231010]/40 transition duration-[0.25s] ease"
          />
        </div>
      </div>

      {/* Division Filter Tabs */}
      <div className="mb-10 animate-appear" style={{ animationDelay: '0.2s' }}>
        <div className="flex flex-wrap gap-2">
          {[
            { value: 'all', label: 'All Products' },
            { value: 'aesthetics', label: 'Aesthetics' },
            { value: 'wound', label: 'Wound Care' },
            { value: 'international', label: 'International' },
          ].map((division) => (
            <button
              key={division.value}
              onClick={() => setDiv(division.value)}
              className={`px-7 py-[15px] text-[13px] font-normal tracking-[0.35px] rounded-[4px] transition duration-[0.25s] ease focus-visible:ring-2 focus-visible:ring-[#231010]/20 focus-visible:outline-none ${
                div === division.value
                  ? 'bg-[#D5101F] text-[#fbfcff]'
                  : 'border border-[#D5101F]/20 text-[#231010] hover:bg-[#D5101F] hover:text-[#fbfcff]'
              }`}
            >
              {division.label}
              {div === division.value && (
                <span className="ml-2 text-[11px] opacity-70">
                  ({initialProducts.filter(p => division.value === 'all' ? true : p.division === division.value).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-8 text-[12px] uppercase tracking-[3.15px] text-[#231010]/40 animate-appear" style={{ animationDelay: '0.3s' }}>
        Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-appear" style={{ animationDelay: '0.4s' }}>
        {filtered.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="group cursor-pointer">
            <div className="h-full bg-[#fbfcff] rounded-[12px] overflow-hidden flex flex-col">
              {/* Product Image */}
              {p.heroImage && (
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-t-[12px] bg-[#fffdf9]"
                  style={{ clipPath: 'inset(0 0 round 12px 12px 0 0)' }}
                >
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-contain p-8 transition-transform duration-[250ms] ease group-hover:scale-[1.03] md:p-10"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Division Label */}
                <div className="mb-3">
                  <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[3.15px] text-[#231010]/40">
                    <div
                      className="size-[6px] rounded-full"
                      style={{ backgroundColor: DIVISION_COLORS[p.division] || '#231010' }}
                    />
                    {DIVISION_LABELS[p.division] || p.division}
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-2">
                  <h2 className="font-display font-light text-[#231010] text-lg tracking-tight">
                    {p.title}
                  </h2>
                  {p.subtitle && (
                    <p className="font-light text-[14.6px] leading-[26px] text-[#231010]/60">
                      {p.subtitle}
                    </p>
                  )}
                </div>

                {/* View Link */}
                <div className="mt-6 flex items-center text-[13px] font-medium text-[#231010] tracking-[0.35px] transition-transform duration-[250ms] ease group-hover:translate-x-1">
                  View Product
                  <svg className="ml-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-16 animate-appear">
          <p className="text-[#231010]/50 font-light text-[14.6px] leading-[26px]">No products found matching your criteria.</p>
          <div className="mt-6">
            <TigerButton onClick={() => { setQ(""); setDiv("all"); }} variant="secondary">Clear filters</TigerButton>
          </div>
        </div>
      )}
    </>
  )
}
