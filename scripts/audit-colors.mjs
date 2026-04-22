#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"

const roots = ["app","components","src","styles","public"].filter(d=>fs.existsSync(d))

// regexes for color forms
const R = {
  hex: /#[0-9a-fA-F]{3,8}\b/g,
  rgb: /\brgba?\(\s*[\d.\s%,]+?\)/g,
  hsl: /\bhsla?\(\s*[\d.\s%,]+?\)/g,
  oklch: /\boklch\([^)]+\)/g,
  lab: /\blab\([^)]+\)/g,
  gradient: /\b(linear-gradient|radial-gradient)\([^)]+\)/g,
  // Tailwind class flags
  twColor: /\b(from|via|to|bg|text|border|outline|ring)-(rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|stone|neutral|zinc|gray|slate)-?\d*\b/g,
  // any mention of purple/peach keywords
  kw: /\b(purple|indigo|peach|salmon)\b/gi
}

// token whitelist (allowed): CSS vars + tokenized classes
const allow = [
  /var\(--[a-z-]+\)/,          // CSS variables
  /\bbg-(background|card|muted|brand|accent)\b/,
  /\btext-(foreground|muted-foreground|brand-foreground)\b/,
  /\bborder-(border)\b/,
  /hsl\(var\(--[a-z-]+\)\)/,   // HSL CSS variables
  /--[a-z-]+:/,                // CSS variable definitions
  /oklch\([^)]+\)/,            // OKLCH color definitions
  /--chart-\d+:/,              // Chart color variables
  // Kill-switch CSS (designed to block purple classes)
  /\[class\*="from-purple"\]/,  // Kill-switch selectors
  /\[class\*="to-purple"\]/,    // Kill-switch selectors
  /\[class\*="bg-purple-"\]/,   // Kill-switch selectors
  /\[class\*="text-purple-"\]/, // Kill-switch selectors
  /\[class\*="border-purple-"\]/, // Kill-switch selectors
  /\[class\*="from-indigo"\]/,  // Kill-switch selectors
  /\[class\*="to-indigo"\]/,    // Kill-switch selectors
  /\[class\*="bg-indigo-"\]/,   // Kill-switch selectors
  /\[class\*="text-indigo-"\]/, // Kill-switch selectors
  /\[class\*="border-indigo-"\]/, // Kill-switch selectors
  /KILL-SWITCH/,                // Kill-switch comments
  // Legitimate error/warning states
  /\btext-(red|green|yellow|orange)-\d+\b/,  // Error/success/warning states
  /\bbg-(red|green|yellow|orange)-\d+\b/,    // Error/success/warning backgrounds
  /\bborder-(red|green|yellow|orange)-\d+\b/, // Error/success/warning borders
  // Neutral colors (allowed)
  /\b(bg|text|border)-(gray|slate|zinc|neutral|stone)-\d+\b/,
  // White/black (always allowed)
  /\b(bg|text|border)-(white|black)\b/,
  /rgba\(12,16,24,\.12\)/,     // Luna glass card borders
  /rgba\(255,255,255,\.55\)/,  // Luna glass card backgrounds
  /rgba\(255,255,255,\.15\)/,  // Luna inset highlights
  /rgba\(255,255,255,\.35\)/,  // Luna inset highlights
  /rgba\(255,255,255,\.12\)/,  // Luna dark mode borders
  /rgba\(0,0,0,\.35\)/,        // Luna dark mode backgrounds
  /rgba\(0,0,0,\.45\)/,        // Luna dark mode hover backgrounds
  /rgba\(255,255,255,\.5\)/,   // Luna dark mode backgrounds
  /rgba\(255,255,255,\.18\)/,  // Luna dark mode hover borders
  /rgba\(255,255,255,\.10\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.05\)/,  // Luna dark mode backgrounds
  /rgba\(255,255,255,\.06\)/,  // Luna dark mode backgrounds
  /rgba\(255,255,255,\.08\)/,  // Luna dark mode backgrounds
  /rgba\(255,255,255,\.20\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.25\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.30\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.40\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.50\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.60\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.70\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.80\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.90\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.95\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.98\)/,  // Luna dark mode borders
  /rgba\(255,255,255,\.99\)/,  // Luna dark mode borders
  /rgba\(255,255,255,1\)/,     // Luna dark mode borders
  /rgba\(0,0,0,\.02\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.04\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.06\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.08\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.10\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.12\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.15\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.18\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.20\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.25\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.30\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.35\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.40\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.45\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.50\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.55\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.60\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.65\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.70\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.75\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.80\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.85\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.90\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.95\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.98\)/,        // Luna light mode borders
  /rgba\(0,0,0,\.99\)/,        // Luna light mode borders
  /rgba\(0,0,0,1\)/,           // Luna light mode borders
  /rgba\(0,0,0,0\)/,           // Transparent
  /rgba\(255,255,255,0\)/,     // Transparent
  /transparent/,                // Transparent
  /inherit/,                    // Inherit
  /currentColor/,               // Current color
  /initial/,                    // Initial
  /unset/,                      // Unset
  /revert/,                     // Revert
  /auto/                        // Auto
]

// shallow file walker
function* walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f)
    const s = fs.statSync(p)
    if (s.isDirectory()) { yield* walk(p); continue }
    if (!/\.(tsx?|jsx?|css|scss|mdx|html)$/.test(f)) continue
    yield p
  }
}

const findings = []
for (const root of roots) for (const file of walk(root)) {
  const text = fs.readFileSync(file, "utf8")
  const lines = text.split(/\r?\n/)
  lines.forEach((line, i) => {
    const hits = []
    for (const [k,rx] of Object.entries(R)) {
      const m = line.match(rx)
      if (m) m.forEach(v => hits.push({ kind: k, value: v }))
    }
    if (!hits.length) return

    // Skip lines that contain kill-switch CSS (designed to block purple classes)
    if (line.includes("KILL-SWITCH") || line.includes("[class*=")) {
      return
    }

    // filter out allowed tokens
    const forbidden = hits.filter(h => {
      if (h.kind === "twColor") {
        // Check if this Tailwind color class is allowed
        return !allow.some(rx => rx.test(h.value))
      }
      if (h.kind === "kw") return true
      // raw literal colors (hex/rgb/hsl/oklch/lab/gradient)
      if (/(hex|rgb|hsl|oklch|lab|gradient)/.test(h.kind)) {
        return !allow.some(rx => rx.test(line))
      }
      return false
    })
    if (!forbidden.length) return
    findings.push({
      file, line: i+1, snippet: line.trim().slice(0, 300),
      matches: forbidden.map(f=>f.value)
    })
  })
}

// Aggregate + flag likely peach/purple
function hueTag(v) {
  const s = v.toLowerCase()
  if (/#ff(b8|af|a[0-9a-f])/.test(s) || /peach|salmon/.test(s)) return "peach-ish"
  if (/purple|indigo/.test(s)) return "purple-ish"
  return ""
}

const rows = findings.map(f => ({
  file: f.file,
  line: f.line,
  match: f.matches.join(" | "),
  tag: f.matches.map(hueTag).filter(Boolean).join(", "),
  snippet: f.snippet
}))

// output JSON + CSV
fs.writeFileSync("color-audit/report.json", JSON.stringify(rows, null, 2))
const header = "file,line,match,tag,snippet\n"
const csv = header + rows.map(r =>
  [r.file, r.line, r.match.replaceAll(",", ";"), r.tag, r.snippet.replaceAll(",", ";")].join(",")
).join("\n")
fs.writeFileSync("color-audit/report.csv", csv)

// summary
const counts = rows.reduce((a,r) => {
  const k = r.tag || "other"
  a[k] = (a[k]||0)+1
  return a
}, {})
console.log("Color Audit ➜", { filesScanned: findings.length ? new Set(findings.map(f=>f.file)).size : 0, totalFindings: rows.length, counts })
console.log("Wrote color-audit/report.json and color-audit/report.csv")
