import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Visual Brand System - Tiger BioSciences",
  description: "Tiger BioSciences visual brand system and design guidelines.",
}

// Prevent static prerendering — VBS uses useSearchParams
export const dynamic = "force-dynamic"

export default function StyleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Suspense>{children}</Suspense>
}
