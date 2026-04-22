#!/usr/bin/env node
import fs from "node:fs"
const p = "color-audit/report.json"
if (!fs.existsSync(p)) { console.log("No report. Run npm run audit:colors first."); process.exit(0) }
const rows = JSON.parse(fs.readFileSync(p,"utf8"))
const byFile = rows.reduce((m,r)=>((m[r.file]=(m[r.file]||0)+1),m),{})
const byTag  = rows.reduce((m,r)=>((m[r.tag||"other"]=(m[r.tag||"other"]||0)+1),m),{})
console.log("Findings by tag:", byTag)
console.log("Worst offenders:")
Object.entries(byFile).sort((a,b)=>b[1]-a[1]).slice(0,10).forEach(([f,c])=>console.log(c.toString().padStart(4), f))