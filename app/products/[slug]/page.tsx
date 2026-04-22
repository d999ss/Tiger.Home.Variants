import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Card, CardBody } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MetaGrid } from "@/components/product/MetaGrid"
import { getProduct, allProducts } from "@/lib/content"
import { ScrollToTop } from "./ScrollToTop"

const PRODUCT_LOGO_ALIASES: Record<string, string> = {
  "implant-delivery": "tigerguard",
  "sientra-implant-a": "sientra",
  "sientra-implant-b": "sientra",
}

const COMPANY_LOGO_FALLBACKS: Record<string, string> = {
  biocare: "/division-logos/bioCARE.png",
  "birth-tissue-recovery": "/division-logos/BTR_Logo.png",
  regentx: "/division-logos/tiger_regentx.png",
  "regentx-labs": "/division-logos/tiger_regentx.png",
  "lizard-health-technology": "/division-logos/tiger_international_logo.png",
  "Tiger BioSciences International": "/division-logos/tiger_international_logo.png",
  "Tiger Wound Care": "/division-logos/tiger_wound_care_logo.png",
  "tiger-wound-care": "/division-logos/tiger_wound_care_logo.png",
  "Encore Surgical Dressings": "/division-logos/tiger_wound_care_logo.png",
  "Extremity Care": "/division-logos/tiger_wound_care_logo.png",
  "Tiger Aesthetics Medical": "/division-logos/TigerAestheticsCircleColor.jpg",
}

const DIVISION_LOGO_FALLBACKS: Record<string, string> = {
  aesthetics: "/division-logos/TigerAestheticsCircleColor.jpg",
  wound: "/division-logos/tiger_wound_care_logo.png",
  international: "/division-logos/tiger_international_logo.png",
  regentx: "/division-logos/tiger_regentx.png",
}

type ProductTopBarAssets = {
  logo: string
  packaging: string
  location: string
}

type TopBarImageFrame = "logo" | "packaging" | "location"

type TopBarImageStyle = {
  scale?: number
  objectPosition?: string
}

const PRODUCT_TOPBAR_ASSET_ALIASES: Record<string, string> = {
  "implant-delivery": "tigerguard",
  "sientra-implant-a": "sientra",
  "sientra-implant-b": "sientra",
}

const DEFAULT_TOPBAR_IMAGE_STYLES: Record<TopBarImageFrame, TopBarImageStyle> = {
  logo: { scale: 1.6, objectPosition: "center" },
  packaging: { scale: 1.85, objectPosition: "center" },
  location: { scale: 1.95, objectPosition: "center" },
}

const PRODUCT_TOPBAR_IMAGE_STYLES: Partial<Record<string, Partial<Record<TopBarImageFrame, TopBarImageStyle>>>> = {
  carepatch: {
    packaging: { scale: 2.05, objectPosition: "60% 48%" },
    location: { scale: 2.15, objectPosition: "58% 52%" },
  },
  caregraft: {
    packaging: { scale: 2, objectPosition: "56% 48%" },
    location: { scale: 2.1, objectPosition: "56% 50%" },
  },
  carepac: {
    packaging: { scale: 2, objectPosition: "58% 48%" },
    location: { scale: 2.05, objectPosition: "54% 52%" },
  },
  completeft: {
    packaging: { scale: 2, objectPosition: "58% 48%" },
    location: { scale: 2.1, objectPosition: "56% 50%" },
  },
  healpack: {
    packaging: { scale: 2, objectPosition: "58% 48%" },
    location: { scale: 2.05, objectPosition: "54% 52%" },
  },
  alloclae: {
    packaging: { scale: 2.05, objectPosition: "56% 50%" },
    location: { scale: 2.05, objectPosition: "54% 52%" },
  },
  amplifine: {
    packaging: { scale: 2, objectPosition: "56% 48%" },
    location: { scale: 1.25, objectPosition: "72% 48%" },
  },
  aveli: {
    packaging: { scale: 2.05, objectPosition: "58% 48%" },
    location: { scale: 1.45, objectPosition: "62% 48%" },
  },
  bellafill: {
    packaging: { scale: 2, objectPosition: "58% 48%" },
    location: { scale: 1.4, objectPosition: "64% 46%" },
  },
  expanders: {
    packaging: { scale: 2.05, objectPosition: "58% 48%" },
    location: { scale: 2.1, objectPosition: "54% 48%" },
  },
  sientra: {
    packaging: { scale: 2.05, objectPosition: "58% 48%" },
    location: { scale: 2.05, objectPosition: "54% 50%" },
  },
  silhouette: {
    packaging: { scale: 2, objectPosition: "58% 48%" },
    location: { scale: 1.4, objectPosition: "64% 48%" },
  },
  viality: {
    packaging: { scale: 2, objectPosition: "58% 48%" },
    location: { scale: 1.45, objectPosition: "62% 48%" },
  },
  tigerguard: {
    packaging: { scale: 2.05, objectPosition: "58% 48%" },
    location: { scale: 2.15, objectPosition: "54% 48%" },
  },
}

function getProductLogoPath(slug: string, division?: string, company?: string, heroImage?: string) {
  const aliasSlug = PRODUCT_LOGO_ALIASES[slug]
  const candidates = [
    `/images/catalog-logos/${slug}.png`,
    `/images/catalog/${slug}.png`,
    aliasSlug ? `/images/catalog-logos/${aliasSlug}.png` : null,
    aliasSlug ? `/images/catalog/${aliasSlug}.png` : null,
    heroImage && (
      heroImage.startsWith("/images/catalog-logos/") ||
      heroImage.startsWith("/images/catalog/") ||
      heroImage.startsWith("/division-logos/") ||
      heroImage.startsWith("/images/logos/")
    )
      ? heroImage
      : null,
    company ? COMPANY_LOGO_FALLBACKS[company] ?? null : null,
    division ? DIVISION_LOGO_FALLBACKS[division] ?? null : null,
  ].filter((candidate): candidate is string => Boolean(candidate))

  return candidates[0] ?? null
}

function getProductTopBarAssets(slug: string): ProductTopBarAssets | null {
  const assetSlug = PRODUCT_TOPBAR_ASSET_ALIASES[slug] ?? slug
  const supportedSlugs = new Set([
    "alloclae",
    "amplifine",
    "aveli",
    "bellafill",
    "caregraft",
    "carepatch",
    "carepac",
    "completeft",
    "expanders",
    "healpack",
    "sientra",
    "silhouette",
    "tigerguard",
    "viality",
  ])

  if (!supportedSlugs.has(assetSlug)) return null

  return {
    logo: `/images/topbar/logos/${assetSlug}.png`,
    packaging: `/images/topbar/packaging/${assetSlug}.png`,
    location: `/images/topbar/locations/${assetSlug}.png`,
  }
}

function getTopBarImageStyle(slug: string, frame: TopBarImageFrame): TopBarImageStyle {
  const assetSlug = PRODUCT_TOPBAR_ASSET_ALIASES[slug] ?? slug
  return {
    ...DEFAULT_TOPBAR_IMAGE_STYLES[frame],
    ...PRODUCT_TOPBAR_IMAGE_STYLES[assetSlug]?.[frame],
  }
}

export async function generateStaticParams() {
  return allProducts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = getProduct(slug);

  if (!entry) {
    return {
      title: "Product Not Found - Tiger BioSciences",
    };
  }

  return {
    title: `${entry.data.title} - Tiger BioSciences`,
    description: entry.data.subtitle || entry.data.seo?.description || `${entry.data.title} by Tiger BioSciences`,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getProduct(slug)
  if (!entry) return notFound()
  const p = entry.data
  const products = allProducts()
  const currentIndex = products.findIndex((product) => product.slug === slug)
  const nextProduct = currentIndex >= 0 ? products[(currentIndex + 1) % products.length] : null
  const productLogo = getProductLogoPath(slug, p.division, p.company, p.heroImage)
  const topBarAssets = getProductTopBarAssets(slug)
  const logoStyle = getTopBarImageStyle(slug, "logo")
  const packagingStyle = getTopBarImageStyle(slug, "packaging")
  const locationStyle = getTopBarImageStyle(slug, "location")

  const divisionHref =
    p.division === "wound"
      ? "/solutions/wound-care"
      : p.division === "aesthetics"
        ? "/solutions/aesthetics"
        : p.division === "international"
          ? "/solutions/international"
          : "/solutions/regenerative-sciences";

  const divisionLabel =
    p.division === "wound"
      ? "Wound Care"
      : p.division === "aesthetics"
        ? "Aesthetics"
        : p.division === "international"
          ? "International"
          : "Regenerative Sciences";

  const metaItems = [
    { label: "Company", value: p.company },
    ...(p.category ? [{ label: "Category", value: p.category }] : []),
    ...(p.regulatory?.fda ? [{ label: "FDA Clearance", value: p.regulatory.fda }] : []),
  ]

  const accentColor =
    p.division === "aesthetics"
      ? "#D2A62C"
      : p.division === "wound"
        ? "#D5101F"
        : p.division === "international"
          ? "#4774AA"
          : "#231010";

  const renderParagraphs = (value: string) =>
    value
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map((paragraph, idx) => (
        <p key={idx} className="text-body leading-[1.85] text-foreground/80">
          {paragraph.trim()}
        </p>
      ));

  return (
    <main className="mt-16 bg-white">
      <div className="container mx-auto max-w-7xl px-6 py-12 pb-24 md:px-12 md:py-16 md:pb-32">
      <ScrollToTop slug={slug} />
      {/* Breadcrumb */}
      <nav className="text-sm text-foreground/70 mb-8 animate-appear">
        <Link href="/products" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Products</Link>
        <span className="mx-2">/</span>
        <Link href={divisionHref} className="hover:text-foreground transition-colors duration-200 cursor-pointer">
          {divisionLabel}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{p.title}</span>
      </nav>

      {/* Product Top Bar */}
      {topBarAssets ? (
        <div
          className="mb-8 animate-appear rounded-[16px] border border-black/[0.04] bg-[#fbfcff] p-4 shadow-[0_10px_30px_rgba(35,16,16,0.04)] md:p-5"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(240px,0.9fr)]">
            <div className="flex items-center justify-center overflow-hidden rounded-[14px] border border-black/[0.04] bg-white px-4 py-5 md:px-6 md:py-6">
              <div className="relative aspect-square w-full max-w-[300px] md:max-w-[420px]">
                <Image
                src={topBarAssets.logo}
                alt={`${p.title} logo`}
                fill
                className="object-contain"
                style={{
                  objectPosition: logoStyle.objectPosition,
                  transform: `scale(${logoStyle.scale ?? 1})`,
                }}
                priority
              />
              </div>
            </div>
            <div className="grid gap-4 md:grid-rows-2">
              <div className="relative min-h-[164px] overflow-hidden rounded-[14px] border border-black/[0.04] bg-white md:min-h-[152px]">
                <Image
                  src={topBarAssets.packaging}
                  alt={`${p.title} packaging`}
                  fill
                  className="object-contain p-2 md:p-3"
                  style={{
                    objectPosition: packagingStyle.objectPosition,
                    transform: `scale(${packagingStyle.scale ?? 1})`,
                  }}
                  priority
                />
              </div>
              <div className="relative min-h-[164px] overflow-hidden rounded-[14px] border border-black/[0.04] bg-white md:min-h-[152px]">
                <Image
                  src={topBarAssets.location}
                  alt={`${p.title} body location`}
                  fill
                  className="object-contain p-1 md:p-2"
                  style={{
                    objectPosition: locationStyle.objectPosition,
                    transform: `scale(${locationStyle.scale ?? 1})`,
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      ) : productLogo ? (
        <div
          className="mb-8 animate-appear rounded-[12px] bg-white p-5 md:p-6"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="relative mx-auto h-[252px] w-full max-w-[1058px] md:h-[298px]">
            <Image
              src={productLogo}
              alt={p.title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}

      {/* Two Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Left Column - Hero + Meta Info (Sticky) */}
        <aside className="lg:col-span-4 animate-appear" style={{ animationDelay: '0.2s' }}>
          <div className="lg:sticky lg:top-24 space-y-8">
            {/* Hero Section */}
            <header className="space-y-5 transition-all duration-300 pb-8 border-b border-border">
              <div className="text-[12px] font-medium uppercase tracking-[3.15px]" style={{ color: accentColor }}>
                {p.category || p.division}
              </div>
              <div className="space-y-3">
                <h1 className="text-h1" style={{ color: accentColor }}>
                  {p.title.replace(/®/g, '')}
                  {p.title.includes('®') && <sup className="text-[0.5em] ml-0.5 -top-4 relative">®</sup>}
                </h1>
                {p.tagline && (
                  <p className="text-lead font-medium text-foreground">{p.tagline}</p>
                )}
              </div>
              {p.subtitle && (
                <p className="text-body text-muted-foreground leading-relaxed">{p.subtitle}</p>
              )}
            </header>

            <MetaGrid items={metaItems} />

            {/* Regions */}
            {p.regions?.length > 0 && (
              <div className="space-y-3">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Regions</div>
                <div className="flex flex-wrap gap-2">
                  {p.regions.map((region) => (
                    <Badge key={region} variant="outline" className="rounded-[8px]">
                      {region}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Resources - Hidden for now */}
            {false && p.downloads?.length ? (
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardBody>
                  <h2 className="text-xs font-medium uppercase tracking-wider text-foreground/90 mb-4">Resources</h2>
                  <ul className="space-y-3">
                    {p.downloads.map((d, idx) => (
                      <li key={idx}>
                        <a
                          href={d.link}
                          className="flex items-center gap-2 text-sm text-brand hover:underline transition-all duration-200 hover:gap-3 group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          {d.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ) : null}
          </div>
        </aside>

        {/* Right Column - Product Content */}
        <article className="lg:col-span-8 space-y-12 max-w-3xl animate-appear" style={{ animationDelay: '0.3s' }}>

          {/* Overview */}
          {p.overview && (
            <section className="space-y-6 rounded-[12px] bg-card p-8">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Overview</h2>
              <div className="space-y-5">{renderParagraphs(p.overview)}</div>
            </section>
          )}

          {/* Key Features & Benefits */}
          {p.benefits && (
            <section className="space-y-6 rounded-[12px] bg-card p-8">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Key Features & Benefits</h2>
              {typeof p.benefits === 'string' ? (
                <ul className="space-y-4">
                  {p.benefits.split('\n').filter(line => line.trim()).map((line, idx) => (
                    <li key={idx} className="text-body leading-[1.8] text-foreground/80 flex gap-3">
                      <span className="text-foreground/60 flex-shrink-0">{line.trim().startsWith('-') ? '•' : '•'}</span>
                      <span>{line.trim().replace(/^-\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-6">
                  {p.benefits.map((b, idx) => {
                    const [title, ...rest] = b.split(' – ')
                    const description = rest.join(' – ')
                    return (
                      <li key={idx}>
                        <div className="text-body leading-[1.8]">
                          {description ? (
                            <>
                              <strong className="font-semibold text-foreground">{title}</strong>
                              <span className="text-foreground/75">: {description}</span>
                            </>
                          ) : (
                            <span className="text-foreground/75">{b}</span>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              )}
            </section>
          )}

          {/* Mechanism of Action */}
          {p.mechanismOfAction && (
            <section className="space-y-6 rounded-[12px] bg-card p-8">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Mechanism of Action</h2>
              <div className="space-y-5">{renderParagraphs(p.mechanismOfAction)}</div>
            </section>
          )}

          {/* Clinical Validation */}
          {p.clinicalValidation && (
            <section className="space-y-6 rounded-[12px] bg-card p-8">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Clinical Validation</h2>
              <div className="space-y-5">{renderParagraphs(p.clinicalValidation)}</div>
            </section>
          )}

          {/* Regulatory & Use Information */}
          {(p.regulatoryStatus || p.intendedUse) && (
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-[12px] bg-card p-8">
              {p.regulatoryStatus && (
                <div className="space-y-4">
                  <h3 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Regulatory Status</h3>
                  <div className="space-y-5">{renderParagraphs(p.regulatoryStatus)}</div>
                </div>
              )}
              {p.intendedUse && (
                <div className="space-y-4">
                  <h3 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Intended Use</h3>
                  <div className="space-y-5">{renderParagraphs(p.intendedUse)}</div>
                </div>
              )}
            </section>
          )}

          {/* Compatible Treatments */}
          {p.compatibleTreatments && (
            <section className="space-y-6 rounded-[12px] bg-card p-8">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Compatible Treatments</h2>
              <div className="space-y-5">{renderParagraphs(p.compatibleTreatments)}</div>
            </section>
          )}

          {/* Technology Platform */}
          {p.technologyPlatform && (
            <section className="space-y-6 rounded-[12px] bg-card p-8">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Technology Platform</h2>
              {typeof p.technologyPlatform === 'string' ? (
                <div className="space-y-5">{renderParagraphs(p.technologyPlatform)}</div>
              ) : (
                <>
                  {p.technologyPlatform.title && (
                    <h3 className="text-xs font-medium uppercase tracking-wide" style={{ color: accentColor }}>{p.technologyPlatform.title}</h3>
                  )}
                  {p.technologyPlatform.description && (
                    <div className="space-y-5">{renderParagraphs(p.technologyPlatform.description)}</div>
                  )}
                  {p.technologyPlatform.manufacturing && (
                    <>
                      <h3 className="text-xs font-medium uppercase tracking-wide mt-6" style={{ color: accentColor }}>Manufacturing Excellence</h3>
                      <div className="space-y-5">{renderParagraphs(p.technologyPlatform.manufacturing)}</div>
                    </>
                  )}
                </>
              )}
            </section>
          )}

          {/* Manufacturing Excellence */}
          {p.manufacturingExcellence && (
            <section className="space-y-6 rounded-[12px] bg-card p-8">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Manufacturing Excellence</h2>
              <div className="space-y-5">{renderParagraphs(p.manufacturingExcellence)}</div>
            </section>
          )}

          {/* Clinical Applications */}
          {p.clinicalApplications && (
            <section className="space-y-6 rounded-[12px] bg-card p-8">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Clinical Applications</h2>
              {typeof p.clinicalApplications === 'string' ? (
                <div className="space-y-5">{renderParagraphs(p.clinicalApplications)}</div>
              ) : (
                <>
                  {p.clinicalApplications.title && (
                    <h3 className="text-xs font-medium uppercase tracking-wide" style={{ color: accentColor }}>{p.clinicalApplications.title}</h3>
                  )}
                  {p.clinicalApplications.description && (
                    <div className="space-y-5">{renderParagraphs(p.clinicalApplications.description)}</div>
                  )}
                  {p.clinicalApplications.applications?.length > 0 && (
                    <div className="space-y-4 mt-4">
                      {p.clinicalApplications.applications.map((app: string, idx: number) => {
                        const [title, ...rest] = app.split(' – ')
                        const description = rest.join(' – ')
                        return (
                          <div key={idx}>
                            <strong className="font-semibold text-foreground">{title}</strong>
                            {description && <span className="text-foreground/75"> – {description}</span>}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </>
              )}
            </section>
          )}

          {/* Treatment Protocol */}
          {p.treatmentProtocol && (
            <section className="space-y-6 rounded-[12px] bg-card p-8">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Treatment Protocol</h2>
              {typeof p.treatmentProtocol === 'string' ? (
                <div className="space-y-5">{renderParagraphs(p.treatmentProtocol)}</div>
              ) : (
                <>
                  {p.treatmentProtocol.description && (
                    <div className="space-y-5">{renderParagraphs(p.treatmentProtocol.description)}</div>
                  )}
                  {p.treatmentProtocol.steps?.length > 0 && (
                    <ul className="space-y-3 mt-4">
                      {p.treatmentProtocol.steps.map((step: string, idx: number) => (
                        <li key={idx} className="text-body leading-[1.8] text-foreground/80">
                          {step}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </section>
          )}

          {/* Clinical Evidence */}
          {p.clinicalEvidence && (
            <section className="space-y-6 rounded-[12px] bg-card p-8">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>Clinical Evidence</h2>
              <div className="space-y-5">{renderParagraphs(p.clinicalEvidence)}</div>
            </section>
          )}

          {/* Legal Note */}
          <div className="text-xs text-muted-foreground italic pt-8 border-t border-border">
            Federal law restricts this device for sale by or on the order of a physician or licensed practitioner. Individual results may vary.
          </div>

          {nextProduct && nextProduct.slug !== slug && (
            <section className="rounded-[12px] border border-border bg-card p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-medium uppercase tracking-[3.15px]" style={{ color: accentColor }}>
                    Next Product
                  </div>
                  <h2 className="font-display text-h2 font-light text-foreground">
                    {nextProduct.title}
                  </h2>
                  <p className="max-w-2xl text-body text-muted-foreground">
                    {nextProduct.subtitle || nextProduct.tagline || `Continue exploring the ${divisionLabel} portfolio.`}
                  </p>
                </div>

                <Link
                  href={`/products/${nextProduct.slug}`}
                  className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-[8px] border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  View Next Product
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </section>
          )}
        </article>
      </div>
      </div>
    </main>
  )
}
