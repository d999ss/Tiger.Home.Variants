import fs from "node:fs"
import path from "node:path"
import Papa from "papaparse"

const root = process.cwd()
const contentDir = p => path.join(root, "content", p)
fs.mkdirSync(contentDir("products"), { recursive: true })
fs.mkdirSync(contentDir("companies"), { recursive: true })

function readCSV(file){
  const txt = fs.readFileSync(file, "utf8")
  return Papa.parse(txt, { header: true, skipEmptyLines: true }).data
}
function splitPipes(s){ return s ? s.split("|").map(x=>x.trim()).filter(Boolean) : [] }
function pairs(s, sep=":"){ return splitPipes(s).map(row => {
  const [a,b] = row.split(sep)
  return { sku: (a||"").trim(), size: (b||"").trim() }
})}
function evidencePairs(s){ return splitPipes(s).map(row => {
  const [label, link] = row.split("|")
  return { label: (label||"").trim(), link: (link||"").trim() }
})}

function write(file, body){ fs.writeFileSync(file, body) }

function mdxFrontmatter(obj){
  const yaml = JSON.stringify(obj, null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, '"') // keep quotes for safety
  return `---\n${yaml}\n---\n`
}

const productsCSV = process.argv[2] || "products.csv"
const companiesCSV = process.argv[3] || "companies.csv"

const products = readCSV(productsCSV)
const companies = readCSV(companiesCSV)

for (const r of products){
  const fm = {
    slug: r.slug,
    title: r.title,
    subtitle: r.subtitle || "",
    division: r.division,
    company: r.company,
    category: r.category || "",
    tech: splitPipes(r.tech),
    indications: splitPipes(r.indications),
    benefits: splitPipes(r.benefits),
    evidence: evidencePairs(r.evidence),
    skus: pairs(r.skus),
    regulatory: { fda: r.reg_fda || "", ce: r.reg_ce || "", "510k": r.reg_510k || "" },
    regions: splitPipes(r.regions),
    status: r.status || "Active",
    downloads: [],
    contacts: { sales: r.downloads_sales || "", support: r.downloads_support || "" },
    heroImage: r.heroImage || "",
    gallery: splitPipes(r.gallery),
    seo: { title: r.seo_title || "", description: r.seo_description || "" },
  }
  const body = `${mdxFrontmatter(fm)}Overview copy goes here. Replace with official content.`
  write(path.join(contentDir("products"), `${r.slug}.mdx`), body)
}

for (const r of companies){
  const fm = {
    slug: r.slug,
    name: r.name,
    relationship: r.relationship,
    summary: r.summary || "",
    hq: r.hq || "",
    founded: Number(r.founded || 0),
    site: r.site || "",
    divisions: splitPipes(r.divisions),
    brands: splitPipes(r.brands),
    products: splitPipes(r.products),
    regions: splitPipes(r.regions),
    contacts: { partner: r.contact_partner || "" },
    heroImage: r.heroImage || "",
    seo: { title: r.seo_title || "", description: r.seo_description || "" },
  }
  const body = `${mdxFrontmatter(fm)}Short company profile. Replace with verified copy.`
  write(path.join(contentDir("companies"), `${r.slug}.mdx`), body)
}

console.log(`Generated ${products.length} products and ${companies.length} companies into /content`)

