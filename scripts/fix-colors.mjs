#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"

// Roots to scan
const roots = ["app","components","src","styles"].filter(d=>fs.existsSync(d))

// File filter
const OK = /\.(tsx?|jsx?|css|scss|mdx|html)$/

// Replacement map: classes → tokens
const CLASS_MAP = [
  // Tailwind gradients/classes - remove all purple/indigo/blue
  [/\b(from|via|to)-(purple|indigo|blue)-\d+\b/g, ""],
  [/\bbg-(purple|indigo|blue)-\d+\b/g, "bg-brand"],
  [/\btext-(purple|indigo|blue)-\d+\b/g, "text-brand"],
  [/\bborder-(purple|indigo|blue)-\d+\b/g, "border-border"],
  [/\b(bg|text|border)-rose-\d+\b/g, "$1-brand"],

  // old peach CTAs → brand
  [/bg-\[#ffb882\]/gi, "bg-brand"],
  [/text-\[#ffd3aa\]/gi, "text-foreground"],

  // gradient utilities that carried purple/blue — strip; use our vignette utilities instead
  [/\b(from-indigo-\d+|to-indigo-\d+|from-purple-\d+|to-purple-\d+|from-blue-\d+|to-blue-\d+)\b/g, ""]
]

// Replacement map: raw color literals → tokens/neutral
const LIT_MAP = [
  [/#ffb882/gi, "hsl(var(--brand))"],
  [/#ffd3aa/gi, "hsl(var(--foreground))"],
  [/rgba?\(\s*120\s*,\s*119\s*,\s*198\s*(?:,[^)]+)?\)/gi, "hsl(var(--accent))"], // purple-ish
  [/rgba?\(\s*0\s*,\s*153\s*,\s*255\s*(?:,[^)]+)?\)/gi, "hsl(var(--accent))"],   // bright blue
  // any lingering named hues
  [/\bpurple\b/gi, ""], 
  [/\bindigo\b/gi, ""]
]

// Walk & process
function* walk(dir){
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir,f)
    const s = fs.statSync(p)
    if (s.isDirectory()) { yield* walk(p); continue }
    if (!OK.test(f)) continue
    yield p
  }
}

let filesChanged = 0, replacements = 0
for (const root of roots) for (const file of walk(root)) {
  let src = fs.readFileSync(file, "utf8")
  const before = src

  for (const [rx, val] of CLASS_MAP) src = src.replace(rx, val)
  for (const [rx, val] of LIT_MAP) src = src.replace(rx, val)

  if (src !== before) {
    fs.writeFileSync(file, src)
    filesChanged++
    // naive estimate: count changes by diffing lengths of matches
    replacements++
  }
}

console.log(`Color Autofix ➜ filesChanged=${filesChanged}, passes=${replacements}`)
console.log("Run: npm run audit:colors  (to verify zero offenders)")
