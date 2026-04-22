#!/usr/bin/env node

/**
 * Style token enforcement
 * Scans workspace for disallowed Tailwind color classes that violate the design system.
 */

import { readdirSync, readFileSync, statSync } from "node:fs"
import { join, extname } from "node:path"
import process from "node:process"

const root = join(process.cwd())
const disallowedClasses = [
  "from-orange",
  "to-orange",
  "from-amber",
  "to-amber",
  "from-violet",
  "to-violet",
  "bg-orange-",
  "bg-amber-",
  "bg-violet-",
  "text-amber-",
  "text-orange-",
  "text-violet-",
  "border-orange-",
  "border-amber-",
  "border-violet-",
]

const ignoreDirectories = new Set([".git", ".next", ".turbo", "node_modules", "coverage", "dist", ".vercel"])
const validExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".css", ".scss", ".mdx"])
const allowFiles = new Set([
  "app/globals.css",
  "app/style/page.tsx", // documentation of kill-switch
  "scripts/check-style-tokens.mjs",
])

const offenders = []

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const fullPath = join(directory, entry)
    const stats = statSync(fullPath)

    if (stats.isDirectory()) {
      if (!ignoreDirectories.has(entry)) {
        walk(fullPath)
      }
      continue
    }

    if (!validExtensions.has(extname(entry))) {
      continue
    }

    const relativePath = fullPath.replace(root + "/", "")

    if (allowFiles.has(relativePath)) {
      continue
    }

    const content = readFileSync(fullPath, "utf8")
    for (const bad of disallowedClasses) {
      if (content.includes(bad)) {
        offenders.push({ file: relativePath, token: bad })
      }
    }
  }
}

walk(root)

if (offenders.length > 0) {
  console.error("❌ Disallowed color utilities detected:")
  for (const offender of offenders) {
    console.error(` - ${offender.token} in ${offender.file}`)
  }
  process.exit(1)
}

console.log("✅ Style tokens check passed")

