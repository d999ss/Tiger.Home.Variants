#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"

const outDir = path.join(process.cwd(), "content", "products")
fs.mkdirSync(outDir, { recursive: true })

const P = [
  // WOUND — Tiger Wound Care / Extremity Care / Encore
  { slug:"encore-surgical-dressing", title:"Encore Surgical Dressing", subtitle:"Advanced multi-layer dressing", division:"wound", company:"encore", category:"Dressings" },
  { slug:"encore-silicone-foam", title:"Encore Silicone Foam", subtitle:"Soft silicone adhesive foam", division:"wound", company:"encore", category:"Dressings" },
  { slug:"encore-hydrocolloid", title:"Encore Hydrocolloid", subtitle:"Moisture-retentive hydrocolloid", division:"wound", company:"encore", category:"Dressings" },
  { slug:"tiger-dermal-matrix", title:"Tiger Dermal Matrix", subtitle:"Acellular dermal scaffold", division:"wound", company:"tiger-wound-care", category:"Biologic Matrix" },
  { slug:"extremity-bone-graft", title:"Extremity Bone Graft", subtitle:"Allogenic bone graft for extremities", division:"wound", company:"extremity-care", category:"Grafts" },
  { slug:"extremity-fixation-kit", title:"Extremity Fixation Kit", subtitle:"Trauma fixation accessory kit", division:"wound", company:"extremity-care", category:"Kits" },
  { slug:"tiger-negative-pressure-kit", title:"Tiger Negative Pressure Kit", subtitle:"Portable wound therapy kit", division:"wound", company:"tiger-wound-care", category:"NPWT" },

  // AESTHETICS — Tiger Aesthetics / Sientra / Revelle / Suneva / BioCreations
  { slug:"sientra-implant-a", title:"Sientra Implant A", subtitle:"Implant system for reconstruction and aesthetics", division:"aesthetics", company:"sientra", category:"Implants" },
  { slug:"sientra-implant-b", title:"Sientra Implant B", subtitle:"Textured shell option", division:"aesthetics", company:"sientra", category:"Implants" },
  { slug:"revelle-oclu-implant", title:"Revelle Oclu Implant", subtitle:"Precision occlusion system", division:"aesthetics", company:"revelle-aesthetics", category:"Implants" },
  { slug:"suneva-bellus-dermal", title:"Suneva Bellus Dermal", subtitle:"Dermal augmentation portfolio", division:"aesthetics", company:"suneva", category:"Dermal" },
  { slug:"biocreations-filler-x", title:"BioCreations Filler X", subtitle:"HA-based injectable filler", division:"aesthetics", company:"biocreations", category:"Injectables" },
  { slug:"tiger-aesthetics-closure-kit", title:"Tiger Aesthetics Closure Kit", subtitle:"Post-procedure closure kit", division:"aesthetics", company:"tiger-aesthetics", category:"Kits" },

  // REGEN-TX — RegenTX / RegenTX Labs / bioCARE / Birth Tissue Recovery
  { slug:"regentx-allograft-membrane", title:"RegenTX Allograft Membrane", subtitle:"Barrier membrane for GTR/GBR", division:"regentx", company:"regentx", category:"Allografts" },
  { slug:"regentx-cortical-chips", title:"RegenTX Cortical Chips", subtitle:"Cortical allograft chips", division:"regentx", company:"regentx", category:"Allografts" },
  { slug:"regentx-labs-growth-media", title:"RegenTX Labs Growth Media", subtitle:"Cell culture growth media", division:"regentx", company:"regentx-labs", category:"Reagents" },
  { slug:"biocare-amniotic-membrane", title:"bioCARE Amniotic Membrane", subtitle:"Amniotic tissue allograft", division:"regentx", company:"biocare", category:"Allografts" },
  { slug:"birth-tissue-recovery-kit", title:"Birth Tissue Recovery Kit", subtitle:"Standardized recovery kit", division:"regentx", company:"birth-tissue-recovery", category:"Kits" },
  { slug:"regentx-mineralized-matrix", title:"RegenTX Mineralized Matrix", subtitle:"Osteoconductive scaffold", division:"regentx", company:"regentx", category:"Scaffolds" },
  { slug:"regentx-barrier-membrane-xl", title:"RegenTX Barrier Membrane XL", subtitle:"Extended coverage membrane", division:"regentx", company:"regentx", category:"Allografts" },

  // INTERNATIONAL — Lizard Health Technology / Airway Medix
  { slug:"airway-medix-wound-catheter", title:"Airway Medix Wound Catheter", subtitle:"Drainage and irrigation catheter", division:"international", company:"airway-medix", category:"Devices" },
  { slug:"airway-medix-irrigation-pump", title:"Airway Medix Irrigation Pump", subtitle:"Portable irrigation pump", division:"international", company:"airway-medix", category:"Devices" },
  { slug:"lizard-negative-pressure-kit", title:"Lizard Negative Pressure Kit", subtitle:"Compact NPWT kit", division:"international", company:"lizard-health-technology", category:"NPWT" },
  { slug:"lizard-advanced-dressing", title:"Lizard Advanced Dressing", subtitle:"High-absorbency composite dressing", division:"international", company:"lizard-health-technology", category:"Dressings" },
  { slug:"lizard-dermal-matrix", title:"Lizard Dermal Matrix", subtitle:"Dermal scaffold for coverage", division:"international", company:"lizard-health-technology", category:"Biologic Matrix" },

  // More Wound/Aesthetics to round out
  { slug:"encore-antimicrobial-gauze", title:"Encore Antimicrobial Gauze", subtitle:"Antimicrobial impregnated gauze", division:"wound", company:"encore", category:"Dressings" },
  { slug:"tiger-compression-wrap", title:"Tiger Compression Wrap", subtitle:"Elastic compression system", division:"wound", company:"tiger-wound-care", category:"Compression" },
  { slug:"biocreations-skin-repair-serum", title:"BioCreations Skin Repair Serum", subtitle:"Post-procedure topical", division:"aesthetics", company:"biocreations", category:"Topicals" }
]

function yamlish(obj){
  return JSON.stringify(obj, null, 2).replace(/"([^"]+)":/g, '$1:')
}

for (const p of P){
  const fm = {
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle || "",
    division: p.division,                 // regentx | wound | aesthetics | international
    company: p.company,
    category: p.category || "",
    tech: [],
    indications: [],
    benefits: [],
    evidence: [],
    skus: [],
    regulatory: { fda: "", ce: "", "510k": "" },
    regions: [],
    status: "Active",
    downloads: [],
    contacts: { sales: "", support: "" },
    heroImage: "",
    gallery: [],
    seo: { title: `${p.title} | Tiger BioSciences`, description: p.subtitle || "" }
  }
  const body = `---\n${yamlish(fm)}\n---\nOverview copy goes here. Replace with official content.\n`
  fs.writeFileSync(path.join(outDir, `${p.slug}.mdx`), body)
}
console.log(`Generated ${P.length} product stubs → content/products/*.mdx`)

