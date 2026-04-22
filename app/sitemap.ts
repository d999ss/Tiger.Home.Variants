import { allCompanies, allProducts } from "@/lib/content"

export default async function sitemap(){
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://tigerbiosciences.com"
  const staticPages = ["","/solutions","/divisions","/products","/companies","/careers","/contact"]
    .map(p => ({ url: base + p, lastModified: new Date() }))
  const prod = allProducts().map(p => ({ url: `${base}/products/${p.slug}`, lastModified: new Date() }))
  const comp = allCompanies().map(c => ({ url: `${base}/companies/${c.slug}`, lastModified: new Date() }))
  return [...staticPages, ...prod, ...comp]
}

