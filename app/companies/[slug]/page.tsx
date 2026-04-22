import Link from "next/link";
import { notFound } from "next/navigation"

import { Card, CardBody } from "@/components/ui/card"
import { allCompanies, allProducts, getCompany } from "@/lib/content"

export async function generateStaticParams() {
  return allCompanies().map(c => ({ slug: c.slug }))
}

export default async function CompanyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = getCompany(slug)
  if (!entry) return notFound()
  const c = entry.data
  const related = allProducts().filter(p => c.products?.includes(p.slug))

  return (
    <main className="container mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 mt-16">
      <nav className="text-sm mb-6 text-foreground/70">
        <Link href="/companies" className="cursor-pointer">Companies</Link> <span className="mx-2">/</span> <span className="text-foreground">{c.name}</span>
      </nav>

      <header>
        <div className="text-xs uppercase tracking-[0.14em] text-foreground/60">{c.relationship}</div>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">{c.name}</h1>
        {c.summary ? <p className="mt-2 text-foreground/70 max-w-2xl">{c.summary}</p> : null}
      </header>

      <section className="mt-8 grid gap-6">
        <Card>
          <CardBody>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {c.hq && <div><div className="text-sm text-foreground/60">HQ</div><div className="mt-1">{c.hq}</div></div>}
              {!!c.founded && <div><div className="text-sm text-foreground/60">Founded</div><div className="mt-1">{c.founded}</div></div>}
              {c.site && <div><div className="text-sm text-foreground/60">Website</div><div className="mt-1"><a className="underline" href={c.site}>{c.site}</a></div></div>}
              {c.regions?.length ? <div><div className="text-sm text-foreground/60">Regions</div><div className="mt-1">{c.regions.join(", ")}</div></div> : null}
            </div>
          </CardBody>
        </Card>

        {related.length ? (
          <div>
            <h2 className="text-xl font-semibold">Products</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map(p => (
                <Card key={p.slug}><CardBody>
                  <div className="text-xs uppercase tracking-[0.14em] text-foreground/60">{p.division}</div>
                  <div className="mt-1 font-medium">{p.title}</div>
                  <div className="mt-3"><Link className="underline cursor-pointer" href={`/products/${p.slug}`}>View</Link></div>
                </CardBody></Card>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </main>
  )
}

