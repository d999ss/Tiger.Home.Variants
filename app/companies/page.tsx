// SERVER — do not add "use client"
import type { Metadata } from "next"
import { allCompanies } from "@/lib/content"

import CompaniesGrid from "./companies-grid"

export const metadata: Metadata = {
  title: "Companies - Tiger BioSciences",
  description: "Discover our network of partner companies, subsidiaries, brands, and distributors in the medical technology industry.",
}

export default async function CompaniesIndex({
  searchParams,
}: { searchParams?: Promise<{ q?: string; relationship?: string }> }) {
  const params = await searchParams;
  const companies = allCompanies().map(c => ({
    slug: c.slug,
    name: c.name,
    relationship: c.relationship as "Partner" | "Subsidiary" | "Brand" | "Distributor",
    summary: c.summary ?? "",
  }))
  return (
    <main className="container mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 mt-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Companies</h1>
      <CompaniesGrid
        initialCompanies={companies}
        initialQ={params?.q ?? ""}
        initialRelationship={params?.relationship ?? "all"}
      />
    </main>
  )
}
