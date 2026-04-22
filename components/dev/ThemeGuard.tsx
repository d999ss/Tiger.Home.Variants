"use client"
import { useEffect } from "react"

export default function ThemeGuard() {
  useEffect(() => {
    const s = getComputedStyle(document.documentElement)
    const required = ["--background","--foreground","--muted","--muted-foreground","--border"]
    const missing = required.filter(v => !s.getPropertyValue(v))
    if (missing.length) {
      // eslint-disable-next-line no-console
      console.error("Theme tokens missing:", missing.join(", "))
    }
  }, [])
  return null
}

