"use client"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { Card, CardBody } from "@/components/ui/card"

type Company = {
  slug: string
  name: string
  relationship: "Partner" | "Subsidiary" | "Brand" | "Distributor"
  summary: string
}

export default function CompaniesGrid({
  initialCompanies,
  initialQ,
  initialRelationship,
}: {
  initialCompanies: Company[]
  initialQ?: string
  initialRelationship?: string
}) {
  const router = useRouter()
  const params = useSearchParams()
  const [q, setQ] = useState(initialQ || "")
  const [rel, setRel] = useState(initialRelationship || "all")

  useEffect(() => {
    const next = new URLSearchParams(params.toString())
    if (q) {
      next.set("q", q)
    } else {
      next.delete("q")
    }
    if (rel && rel !== "all") {
      next.set("relationship", rel)
    } else {
      next.delete("relationship")
    }
    router.replace(`/companies?${next.toString()}`, { scroll: false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, rel])

  const filtered = useMemo(() => {
    return initialCompanies.filter(c => {
      const text = `${c.name} ${c.relationship}`.toLowerCase()
      const okQ = q ? text.includes(q.toLowerCase()) : true
      const okR = rel === "all" ? true : c.relationship === rel
      return okQ && okR
    })
  }, [q, rel, initialCompanies])

  return (
    <>
      <div className="mt-4 flex flex-wrap gap-3">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search companies…" className="px-3 py-2 rounded-md border border-border/60 bg-card/70" />
        <select value={rel} onChange={e=>setRel(e.target.value)} className="px-3 py-2 rounded-md border border-border/60 bg-card/70">
          <option value="all">All relationships</option>
          <option value="Subsidiary">Subsidiary</option>
          <option value="Partner">Partner</option>
          <option value="Brand">Brand</option>
          <option value="Distributor">Distributor</option>
        </select>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(c => (
          <Card key={c.slug}>
            <CardBody>
              <div className="text-xs uppercase tracking-[0.14em] text-foreground/60">{c.relationship}</div>
              <h2 className="mt-1 text-xl font-semibold">{c.name}</h2>
              {c.summary ? <p className="mt-1 text-sm text-foreground/70">{c.summary}</p> : null}
              <div className="mt-4">
                <Link className="underline cursor-pointer" href={`/companies/${c.slug}`}>View company</Link>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  )
}

