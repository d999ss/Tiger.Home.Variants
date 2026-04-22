import { allProducts } from "@/lib/content"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Product Image Audit — Internal",
  robots: "noindex, nofollow",
}

const NAV_PRODUCTS: Record<string, { label: string; color: string; slugs: string[] }> = {
  wound: {
    label: "Wound Care Solutions",
    color: "#DF5630",
    slugs: ["caregraft", "carepatch", "carepac", "completeft", "healpack"],
  },
  aesthetics: {
    label: "Aesthetic Solutions",
    color: "#D2A62C",
    slugs: ["alloclae", "amplifine", "aveli", "bellafill", "expanders", "sientra", "viality", "implant-delivery", "retractor"],
  },
}

const NAV_DISPLAY_NAMES: Record<string, string> = {
  caregraft: "caregraFT\u2122",
  carepatch: "carePATCH\u00AE",
  carepac: "carePAC\u2122",
  completeft: "completeFT\u00AE",
  healpack: "HealPACK\u2122",
  alloclae: "alloClae\u2122",
  amplifine: "Amplifine\u00AE",
  aveli: "Av\u00E9li\u00AE",
  bellafill: "Bellafill\u00AE",
  expanders: "Breast Tissue Expanders",
  sientra: "Sientra\u00AE",
  viality: "Viality\u00AE",
  "implant-delivery": "Tiger Guard\u2122",
  retractor: "Tiger View\u2122",
}

const ALL_NAV_SLUGS = [...NAV_PRODUCTS.wound.slugs, ...NAV_PRODUCTS.aesthetics.slugs]

type ImageStatus = "real" | "placeholder" | "missing" | "ai-generated"

function classifyImage(heroImage?: string): ImageStatus {
  if (!heroImage) return "missing"
  const placeholders = ["/images/01.png", "/images/03.png", "/images/05.png", "/images/06.png"]
  if (placeholders.includes(heroImage)) return "placeholder"
  if (heroImage.includes("boredoptimism")) return "ai-generated"
  if (heroImage.includes("prod-generic-box")) return "placeholder"
  return "real"
}

function statusLabel(s?: string) {
  if (!s) return "No Status"
  return s.replace(/,$/, "").trim()
}

const STATUS_STYLES: Record<string, string> = {
  Approved: "bg-[#0d7a3e]/10 text-[#0d7a3e] border-[#0d7a3e]/20",
  "In Review": "bg-[#D2A62C]/10 text-[#a88523] border-[#D2A62C]/20",
  "Need Content": "bg-[#DF5630]/10 text-[#b54426] border-[#DF5630]/20",
  Active: "bg-[#0d7a3e]/10 text-[#0d7a3e] border-[#0d7a3e]/20",
  "No Status": "bg-[#231010]/5 text-[#231010]/40 border-[#231010]/10",
}

const IMAGE_STATUS_STYLES: Record<ImageStatus, { label: string; color: string }> = {
  real: { label: "Product Image", color: "bg-[#0d7a3e]/10 text-[#0d7a3e] border-[#0d7a3e]/20" },
  placeholder: { label: "Placeholder", color: "bg-[#D2A62C]/10 text-[#a88523] border-[#D2A62C]/20" },
  "ai-generated": { label: "AI Generated", color: "bg-[#4774AA]/10 text-[#4774AA] border-[#4774AA]/20" },
  missing: { label: "No Image", color: "bg-[#DF5630]/10 text-[#b54426] border-[#DF5630]/20" },
}

export default async function ImageAuditPage() {
  if (process.env.VERCEL === "1") {
    notFound()
  }

  const products = await allProducts()
  const navProducts = products.filter(p => ALL_NAV_SLUGS.includes(p.slug))

  const stats = {
    total: navProducts.length,
    real: navProducts.filter(p => classifyImage(p.heroImage) === "real").length,
    placeholder: navProducts.filter(p => classifyImage(p.heroImage) === "placeholder").length,
    aiGenerated: navProducts.filter(p => classifyImage(p.heroImage) === "ai-generated").length,
    missing: navProducts.filter(p => classifyImage(p.heroImage) === "missing").length,
  }

  const needsWorkCount = stats.placeholder + stats.aiGenerated + stats.missing

  return (
    <div className="min-h-screen bg-[#EFEDEA]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-4">
          <div className="text-[10px] uppercase tracking-[4px] text-[#231010]/30 font-light mb-3">
            Internal
          </div>
          <h1 className="font-display font-light text-[#231010] text-[clamp(28px,4vw,42px)] tracking-tight leading-[1.15]">
            Product Image Audit
          </h1>
          <p className="mt-3 text-[14.6px] font-light leading-[26px] text-[#231010]/50 max-w-2xl">
            Tracking hero images for the {stats.total} products in the site navigation.
            {needsWorkCount > 0 && ` ${needsWorkCount} product${needsWorkCount === 1 ? "" : "s"} still need${needsWorkCount === 1 ? "s" : ""} real photography.`}
          </p>
        </div>

        {/* Summary Row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-3">
          <StatCard label="Total" value={stats.total} />
          <StatCard label="Ready" value={stats.real} accent="#0d7a3e" />
          <StatCard label="Placeholder" value={stats.placeholder} accent="#D2A62C" />
          <StatCard label="AI Generated" value={stats.aiGenerated} accent="#4774AA" />
          <StatCard label="Missing" value={stats.missing} accent="#DF5630" />
        </div>

        {/* Coverage Bar */}
        <div className="mt-6 bg-[#fbfcff] rounded-[12px] p-5 border border-[#231010]/5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[10px] uppercase tracking-[3.15px] text-[#231010]/30 font-light">
              Image Coverage
            </div>
            <div className="text-[13px] font-light text-[#231010]/50">
              {Math.round((stats.real / stats.total) * 100)}% ready
            </div>
          </div>
          <div className="flex rounded-full overflow-hidden h-2.5 bg-[#231010]/5">
            {stats.real > 0 && (
              <div
                className="bg-[#0d7a3e] transition-all"
                style={{ width: `${(stats.real / stats.total) * 100}%` }}
              />
            )}
            {stats.aiGenerated > 0 && (
              <div
                className="bg-[#4774AA] transition-all"
                style={{ width: `${(stats.aiGenerated / stats.total) * 100}%` }}
              />
            )}
            {stats.placeholder > 0 && (
              <div
                className="bg-[#D2A62C] transition-all"
                style={{ width: `${(stats.placeholder / stats.total) * 100}%` }}
              />
            )}
            {stats.missing > 0 && (
              <div
                className="bg-[#DF5630] transition-all"
                style={{ width: `${(stats.missing / stats.total) * 100}%` }}
              />
            )}
          </div>
          <div className="flex gap-5 mt-2.5">
            <Legend color="#0d7a3e" label="Ready" count={stats.real} />
            <Legend color="#4774AA" label="AI" count={stats.aiGenerated} />
            <Legend color="#D2A62C" label="Placeholder" count={stats.placeholder} />
            <Legend color="#DF5630" label="Missing" count={stats.missing} />
          </div>
        </div>

        {/* Division Sections */}
        {Object.entries(NAV_PRODUCTS).map(([divKey, div]) => {
          const divProducts = div.slugs
            .map(slug => navProducts.find(p => p.slug === slug))
            .filter(Boolean) as typeof navProducts

          return (
            <div key={divKey} className="mt-12">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="size-[8px] rounded-full"
                  style={{ backgroundColor: div.color }}
                />
                <h2 className="font-display font-light text-[#231010] text-[20px] tracking-tight">
                  {div.label}
                </h2>
                <span className="text-[12px] text-[#231010]/30 font-light">
                  {divProducts.length} products
                </span>
              </div>

              <div className="grid gap-3">
                {divProducts.map(p => {
                  const imgStatus = classifyImage(p.heroImage)
                  const imgStyle = IMAGE_STATUS_STYLES[imgStatus]
                  const contentStatus = statusLabel(p.status)
                  const contentStyle = STATUS_STYLES[contentStatus] || STATUS_STYLES["No Status"]
                  const displayName = NAV_DISPLAY_NAMES[p.slug] || p.title

                  return (
                    <div
                      key={p.slug}
                      className="bg-[#fbfcff] rounded-[12px] border border-[#231010]/5 overflow-hidden flex flex-col sm:flex-row"
                    >
                      {/* Thumbnail */}
                      <div className="sm:w-[180px] sm:min-h-[120px] relative bg-[#231010]/[0.02] shrink-0">
                        {p.heroImage ? (
                          <Image
                            src={p.heroImage}
                            alt={displayName}
                            fill
                            sizes="180px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-[11px] text-[#231010]/15 uppercase tracking-[2px]">No Image</div>
                          </div>
                        )}
                      </div>

                      {/* Details */}
                      <div className="flex-1 p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <Link
                              href={`/products/${p.slug}`}
                              className="font-display font-light text-[#231010] text-[15px] tracking-tight hover:text-[#D2A62C] transition-colors"
                            >
                              {displayName}
                            </Link>
                          </div>
                          <div className="mt-1.5 flex items-center gap-3 text-[11px] text-[#231010]/20 font-mono">
                            <span className="truncate">{p.heroImage || "\u2014"}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                          <span className={`inline-flex items-center px-2.5 py-0.5 text-[9px] uppercase tracking-[1.5px] font-light rounded-full border ${imgStyle.color}`}>
                            {imgStyle.label}
                          </span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 text-[9px] uppercase tracking-[1.5px] font-light rounded-full border ${contentStyle}`}>
                            {contentStatus}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* Action Items */}
        {needsWorkCount > 0 && (
          <div className="mt-14 bg-[#fbfcff] rounded-[12px] border border-[#231010]/5 p-6">
            <h2 className="font-display font-light text-[#231010] text-[20px] tracking-tight mb-5">
              Needs Attention
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
              <ActionList
                title="Needs Real Photography"
                description="Replace placeholder or AI-generated images with actual product shots."
                divColor={NAV_PRODUCTS}
                items={navProducts
                  .filter(p => ["placeholder", "ai-generated"].includes(classifyImage(p.heroImage)))
                  .map(p => ({
                    slug: p.slug,
                    title: NAV_DISPLAY_NAMES[p.slug] || p.title,
                    division: p.division,
                    note: classifyImage(p.heroImage) === "ai-generated" ? "AI" : "Placeholder",
                  }))}
              />
              <ActionList
                title="No Hero Image Set"
                description="Product MDX file has no heroImage path. Add the image file and update the frontmatter."
                divColor={NAV_PRODUCTS}
                items={navProducts
                  .filter(p => classifyImage(p.heroImage) === "missing")
                  .map(p => ({
                    slug: p.slug,
                    title: NAV_DISPLAY_NAMES[p.slug] || p.title,
                    division: p.division,
                    note: "Missing",
                  }))}
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 text-center text-[11px] text-[#231010]/15 font-light">
          Internal use only \u2014 Tiger BioSciences Product Image Audit \u2014 {stats.total} nav products
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, accent }: { label: string; value: number; accent?: string }) {
  return (
    <div className="bg-[#fbfcff] rounded-[12px] border border-[#231010]/5 p-4">
      <div className="text-[10px] uppercase tracking-[2px] text-[#231010]/30 font-light mb-1.5">{label}</div>
      <div className="text-[26px] font-light tracking-tight" style={{ color: accent || "#231010" }}>
        {value}
      </div>
    </div>
  )
}

function Legend({ color, label, count }: { color: string; label: string; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="size-[5px] rounded-full" style={{ backgroundColor: color }} />
      <span className="text-[11px] text-[#231010]/35 font-light">
        {label} ({count})
      </span>
    </div>
  )
}

function ActionList({ title, description, divColor, items }: {
  title: string
  description: string
  divColor: typeof NAV_PRODUCTS
  items: { slug: string; title: string; division: string; note: string }[]
}) {
  const getColor = (division: string) => divColor[division]?.color || "#231010"

  return (
    <div>
      <h3 className="text-[13px] font-medium text-[#231010] tracking-tight">{title}</h3>
      <p className="text-[12px] text-[#231010]/35 font-light mt-1 mb-3">{description}</p>
      {items.length === 0 ? (
        <div className="text-[12px] text-[#0d7a3e]/60 font-light">All clear</div>
      ) : (
        <div className="space-y-1.5">
          {items.map(item => (
            <div key={item.slug} className="flex items-center gap-2">
              <div
                className="size-[5px] rounded-full shrink-0"
                style={{ backgroundColor: getColor(item.division) }}
              />
              <Link
                href={`/products/${item.slug}`}
                className="text-[12px] text-[#231010]/50 font-light hover:text-[#231010] transition-colors truncate"
              >
                {item.title}
              </Link>
              <span className="text-[10px] text-[#231010]/20 font-light shrink-0">{item.note}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
