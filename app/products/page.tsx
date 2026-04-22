// SERVER — do not add "use client"
import type { Metadata } from "next"
import { allProducts } from "@/lib/content"

import ProductsGrid from "./products-grid"

export const metadata: Metadata = {
  title: "Products - Tiger BioSciences",
  description: "Explore our comprehensive portfolio of medical technology products for wound care, soft tissue reconstruction, and aesthetics.",
}

export default async function ProductsIndex({
  searchParams,
}: { searchParams?: Promise<{ q?: string; division?: string }> }) {
  const params = await searchParams;

  // Product Inventory - only show these products (from Trello card map)
  const productInventory = [
    "alloclae", "amplifine", "aveli",
    "bellafill", "caregraft", "carepac", "carepatch", "completeft",
    "expanders", "healpack", "sientra", "viality"
  ];

  const products = allProducts()
    .filter(p => productInventory.includes(p.slug))
    .map(p => ({
      slug: p.slug,
      title: p.title,
      subtitle: p.subtitle ?? "",
      division: p.division as "regentx" | "wound" | "aesthetics" | "international",
      company: p.company,
      category: p.category ?? "",
      heroImage: `/images/catalog-logos/${p.slug}.png`,
    }))
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="pt-[144px] pb-20 px-12">
        <div className="max-w-[1280px] mx-auto animate-appear">
          <p className="text-[12px] uppercase tracking-[3.15px] text-[#231010]/40 mb-6">
            Product Portfolio
          </p>
          <h1 className="font-display font-light text-[#231010] text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] tracking-tight max-w-3xl">
            Our Products
          </h1>
          <p className="mt-6 font-light text-[14.6px] leading-[26px] text-[#231010]/70 max-w-2xl">
            Explore our comprehensive portfolio of innovative medical technologies for wound care, tissue reconstruction, and aesthetic medicine.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-[144px] px-12">
        <div className="max-w-[1280px] mx-auto">
          <ProductsGrid
            initialProducts={products}
            initialQ={params?.q ?? ""}
            initialDivision={params?.division ?? "all"}
          />
        </div>
      </section>
    </main>
  )
}
