import { z } from "zod"

export const ProductFM = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string().optional().default(""),
  tagline: z.string().optional().default(""),
  overview: z.string().optional().default(""),
  mechanismOfAction: z.string().optional().default(""),
  clinicalValidation: z.string().optional().default(""),
  regulatoryStatus: z.string().optional().default(""),
  intendedUse: z.string().optional().default(""),
  compatibleTreatments: z.string().optional().default(""),
  technologyPlatform: z.union([
    z.string(),
    z.object({
      title: z.string().optional().default(""),
      description: z.string().optional().default(""),
      manufacturing: z.string().optional().default("")
    })
  ]).optional().default(""),
  manufacturingExcellence: z.string().optional().default(""),
  clinicalApplications: z.union([
    z.string(),
    z.object({
      title: z.string().optional().default(""),
      description: z.string().optional().default(""),
      applications: z.array(z.string()).optional().default([])
    })
  ]).optional().default(""),
  treatmentProtocol: z.union([
    z.string(),
    z.object({
      description: z.string().optional().default(""),
      steps: z.array(z.string()).optional().default([])
    })
  ]).optional().default(""),
  clinicalEvidence: z.string().optional().default(""),
  division: z.enum(["regentx","wound","aesthetics","international"]),
  company: z.string(),
  category: z.string().optional().default(""),
  tech: z.array(z.string()).optional().default([]),
  indications: z.array(z.string()).optional().default([]),
  benefits: z.union([z.string(), z.array(z.string())]).optional().default(""),
  evidence: z.array(z.any()).optional().default([]),
  skus: z.array(z.any()).optional().default([]),
  regulatory: z.object({
    fda: z.string().optional().default(""),
    ce: z.string().optional().default(""),
    "510k": z.string().optional().default("")
  }).optional().default({ fda: "", ce: "", "510k": "" }),
  regions: z.array(z.string()).optional().default([]),
  status: z.string().optional().default("Active"),
  downloads: z.array(z.object({ label: z.string(), link: z.string() })).optional().default([]),
  contacts: z.object({
    sales: z.string().optional().default(""),
    support: z.string().optional().default("")
  }).optional().default({ sales: "", support: "" }),
  heroImage: z.string().optional().default(""),
  gallery: z.array(z.string()).optional().default([]),
  seo: z.object({
    title: z.string().optional().default(""),
    description: z.string().optional().default("")
  }).optional().default({ title: "", description: "" }),
})

export const CompanyFM = z.object({
  slug: z.string(),
  name: z.string(),
  relationship: z.enum(["Partner","Subsidiary","Brand","Distributor"]),
  summary: z.string().optional().default(""),
  hq: z.string().optional().default(""),
  founded: z.number().optional().default(0),
  site: z.string().optional().default(""),
  divisions: z.array(z.enum(["regentx","wound","aesthetics","international"])).optional().default([]),
  brands: z.array(z.string()).optional().default([]),
  products: z.array(z.string()).optional().default([]), // product slugs
  regions: z.array(z.string()).optional().default([]),
  // Partner contact info
  contacts: z.object({ partner: z.string().optional().default("") }).optional().default({ partner: "" }),
  heroImage: z.string().optional().default(""),
  seo: z.object({
    title: z.string().optional().default(""),
    description: z.string().optional().default("")
  }).optional().default({ title: "", description: "" }),
})

export const PressPostFM = z.object({
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  date: z.string(), // ISO date string
  category: z.enum(["announcement", "research", "partnership", "product", "event"]),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  heroImage: z.string().optional().default(""),
  author: z.string().optional().default("Tiger BioSciences"),
  seo: z.object({
    title: z.string().optional().default(""),
    description: z.string().optional().default("")
  }).optional().default({ title: "", description: "" })
})

