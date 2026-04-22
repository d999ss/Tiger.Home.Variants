import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables from .env.local
dotenv.config({ path: path.join(__dirname, '../.env.local') })

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const PRODUCTS_DIR = path.join(__dirname, '../content/products')
const COMPANIES_DIR = path.join(__dirname, '../content/companies')

// First, migrate companies
async function migrateCompanies() {
  console.log('🏢 Migrating companies...')

  if (!fs.existsSync(COMPANIES_DIR)) {
    console.log('No companies directory found, skipping...')
    return {}
  }

  const companyFiles = fs.readdirSync(COMPANIES_DIR).filter(f => f.endsWith('.mdx'))
  const companyMap = {}

  for (const file of companyFiles) {
    if (file === '_template.mdx') continue

    const filePath = path.join(COMPANIES_DIR, file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    const companyDoc = {
      _type: 'company',
      _id: `company-${data.slug || file.replace('.mdx', '')}`,
      name: data.name || data.title,
      slug: {
        _type: 'slug',
        current: data.slug || file.replace('.mdx', ''),
      },
      description: data.description || data.overview,
      website: data.website,
    }

    try {
      await client.createOrReplace(companyDoc)
      companyMap[data.name || data.title] = companyDoc._id
      console.log(`  ✓ ${companyDoc.name}`)
    } catch (error) {
      console.error(`  ✗ Error migrating ${data.name}:`, error.message)
    }
  }

  return companyMap
}

// Then migrate products
async function migrateProducts(companyMap) {
  console.log('\n📦 Migrating products...')

  const productFiles = fs.readdirSync(PRODUCTS_DIR).filter(f => f.endsWith('.mdx'))
  let successCount = 0
  let errorCount = 0

  for (const file of productFiles) {
    if (file === '_template.mdx') continue

    const filePath = path.join(PRODUCTS_DIR, file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    const productDoc = {
      _type: 'product',
      _id: `product-${data.slug || file.replace('.mdx', '')}`,
      title: data.title,
      slug: {
        _type: 'slug',
        current: data.slug || file.replace('.mdx', ''),
      },
      tagline: data.tagline || data.subtitle,
      description: data.description,
      category: data.division || data.category,
      fdaStatus: data.regulatoryStatus?.includes('FDA') ? 'FDA-cleared' : undefined,
      regions: data.regions || ['United States'],
      overview: data.overview,
      keyFeatures: data.benefits,
      mechanismOfAction: data.mechanismOfAction,
      clinicalValidation: data.clinicalValidation,
      regulatoryStatus: data.regulatoryStatus,
      intendedUse: data.intendedUse,
      compatibleTreatments: data.compatibleTreatments,
      technologyPlatform: data.technologyPlatform,
      manufacturingExcellence: data.manufacturingExcellence,
      clinicalApplications: data.clinicalApplications,
      treatmentProtocol: data.treatmentProtocol,
      clinicalEvidence: data.clinicalEvidence,
    }

    // Add company reference if available
    if (data.company && companyMap[data.company]) {
      productDoc.company = {
        _type: 'reference',
        _ref: companyMap[data.company],
      }
    }

    try {
      await client.createOrReplace(productDoc)
      successCount++
      console.log(`  ✓ ${productDoc.title}`)
    } catch (error) {
      errorCount++
      console.error(`  ✗ Error migrating ${data.title}:`, error.message)
    }
  }

  console.log(`\n✨ Migration complete!`)
  console.log(`   Success: ${successCount} products`)
  console.log(`   Errors: ${errorCount} products`)
}

// Run migration
async function main() {
  console.log('🚀 Starting migration to Sanity...\n')

  const companyMap = await migrateCompanies()
  await migrateProducts(companyMap)
}

main().catch(console.error)
