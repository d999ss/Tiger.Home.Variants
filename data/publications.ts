/**
 * Tiger BioSciences - Verified Science & Research Content
 *
 * This file contains all verified clinical evidence, studies, trials, and regulatory
 * submissions collected from Tiger sites, PubMed, FDA databases, and ClinicalTrials.gov
 *
 * Date Compiled: November 10, 2025
 * Status: Ready for Science Section
 */

/* -------------------------------------------------------------------------- */
/* TypeScript Interfaces                                                      */
/* -------------------------------------------------------------------------- */

export interface Author {
  name: string
  affiliation?: string
  credentials?: string
}

export interface Publication {
  id: string
  slug: string
  title: string
  subtitle?: string
  authors?: Author[]
  year: number
  publicationDate?: string
  journal?: string
  doi?: string
  pubmedId?: string
  abstract: string
  keyFindings: string[]
  type: 'peer-reviewed' | 'clinical-trial' | 'fda-document' | 'regulatory-submission' | 'white-paper' | 'technology-overview'
  division: 'aesthetics' | 'wound-care' | 'tissue-processing' | 'international'
  products: string[] // Product slugs
  status: 'published' | 'ongoing' | 'completed'
  studyDesign?: string
  participants?: number
  studySites?: number
  duration?: string
  pdfUrl?: string
  externalUrl?: string
  featured: boolean
  tags: string[]
  verificationStatus: 'verified' | 'pending-verification'
}

export interface ClinicalTrial {
  id: string
  nctNumber?: string
  title: string
  shortTitle: string
  status: 'recruiting' | 'enrolling' | 'active' | 'completed'
  phase?: string
  studyType: string
  participants: number
  sites?: number
  primaryObjective: string
  secondaryObjectives?: string[]
  conditions: string[]
  products: string[]
  division: 'aesthetics' | 'wound-care' | 'tissue-processing'
  startDate?: string
  estimatedCompletion?: string
  sponsor: string
  principalInvestigator?: string
  keyInclusions?: string[]
  featured: boolean
  clinicalTrialsGovUrl?: string
}

export interface RegulatorySubmission {
  id: string
  title: string
  type: 'cms-lcd' | 'fda-pma' | 'fda-510k' | 'cms-fee-schedule' | 'other'
  submissionDate: string
  agency: string
  products: string[]
  division: 'aesthetics' | 'wound-care' | 'tissue-processing'
  summary: string
  status: 'approved' | 'cleared' | 'submitted' | 'pending'
  documentUrl?: string
  approvalNumber?: string
}

export interface TechnologyPlatform {
  id: string
  name: string
  division: 'aesthetics' | 'wound-care' | 'tissue-processing'
  description: string
  scienceBasis: string[]
  products: string[]
  keyFeatures: string[]
  clinicalApplications: string[]
  facilities?: string[]
  featured: boolean
}

export interface StatisticsSummary {
  fdaApprovalsAndClearances: number
  activeTrials: number
  peerReviewedPublications: number
  patientsEnrolled: number
  clinicalManuscripts: number
  scientificAbstracts: number
  scientificPosters: number
  rdManuscripts: number
}

/* -------------------------------------------------------------------------- */
/* Statistics - Verified Numbers Only                                         */
/* -------------------------------------------------------------------------- */

export const scienceStatistics: StatisticsSummary = {
  fdaApprovalsAndClearances: 3, // Bellafill PMA, Avéli clearance, Sientra PMA
  activeTrials: 2, // Matriarch Trial + Pressure Ulcer RCT
  peerReviewedPublications: 9, // Verified published studies including wound care publications
  patientsEnrolled: 7193, // Sientra postapproval (5,197) + Bellafill (1,008) + Matriarch ongoing (340) + others
  clinicalManuscripts: 6, // Submitted to CMS
  scientificAbstracts: 7, // Submitted to CMS
  scientificPosters: 8, // Submitted to CMS
  rdManuscripts: 2, // Submitted to CMS
}

/* -------------------------------------------------------------------------- */
/* FDA-Approved / Cleared Products                                            */
/* -------------------------------------------------------------------------- */

export const fdaApprovals: RegulatorySubmission[] = [
  {
    id: 'bellafill-pma',
    title: 'Bellafill FDA PMA Approval - Nasolabial Folds & Acne Scars',
    type: 'fda-pma',
    submissionDate: '2015-09-01',
    agency: 'FDA',
    products: ['bellafill'],
    division: 'aesthetics',
    summary: 'FDA PMA approved for nasolabial folds (smile lines) with demonstrated safety and effectiveness through 5 years. Only FDA-approved dermal filler with this long-term approval. Also approved for acne scars - the only long-term solution on the market.',
    status: 'approved',
    documentUrl: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P080008',
  },
  {
    id: 'aveli-510k',
    title: 'Avéli FDA Clearance - Cellulite Treatment',
    type: 'fda-510k',
    submissionDate: '2021-01-01',
    agency: 'FDA',
    products: ['aveli'],
    division: 'aesthetics',
    summary: 'Initial FDA clearance in 2021 for reduction of cellulite in buttocks and thighs. Extended clearance in September 2022 with 1-year durability data showing sustained results.',
    status: 'cleared',
    documentUrl: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K203722',
  },
  {
    id: 'sientra-pma',
    title: 'Sientra Silicone Gel Breast Implants FDA PMA Approval',
    type: 'fda-pma',
    submissionDate: '2012-03-09',
    agency: 'FDA',
    products: ['sientra'],
    division: 'aesthetics',
    summary: 'FDA PMA approval for round and shaped silicone gel breast implants. Supported by 10-year core study (1,788 patients) and U.S. postapproval study (5,197 patients).',
    status: 'approved',
    approvalNumber: 'P070004',
    documentUrl: 'https://accessdata.fda.gov/cdrh_docs/pdf7/p070004b.pdf',
  },
]

/* -------------------------------------------------------------------------- */
/* Peer-Reviewed Publications                                                 */
/* -------------------------------------------------------------------------- */

export const publications: Publication[] = [
  // BELLAFILL - Aesthetics
  {
    id: 'bellafill-5year',
    slug: 'bellafill-five-year-safety-efficacy-nasolabial-folds',
    title: 'Five-Year Post-Approval Study for Nasolabial Folds with Bellafill',
    subtitle: 'Landmark clinical study confirming long-term safety and effectiveness',
    year: 2015,
    publicationDate: '2015-09',
    abstract: 'Prospective, multicenter study enrolling 1,008 patients across 23 U.S. study centers evaluating long-term safety (primary objective) and effectiveness (secondary) of Bellafill for correction of nasolabial folds. Study represents the only FDA-approved dermal filler with demonstrated safety and effectiveness through five years.',
    keyFindings: [
      '87% retention rate at 5 years',
      '83% patient satisfaction (satisfied to very satisfied) at study conclusion',
      'No treatment-related serious adverse events (SAEs)',
      'Treatment-related adverse events: 11.7% incidence, majority mild and resolved',
      'Most common AE: Lumpiness at injection site (~4.5%)',
      'Redness reported in 1.8% of patients',
    ],
    type: 'clinical-trial',
    division: 'aesthetics',
    products: ['bellafill'],
    status: 'completed',
    studyDesign: 'Prospective, multicenter, post-approval study',
    participants: 1008,
    studySites: 23,
    duration: '5 years',
    externalUrl: 'https://www.bellafill.com',
    featured: true,
    tags: ['dermal-filler', 'nasolabial-folds', 'long-term-safety', 'post-approval'],
    verificationStatus: 'verified',
  },

  // SIENTRA - Aesthetics
  {
    id: 'sientra-10year-core',
    slug: 'sientra-ten-year-core-study-breast-implants',
    title: 'Ten-Year Core Study Data for Sientra FDA-Approved Round and Shaped Breast Implants',
    subtitle: 'Long-term safety and effectiveness of silicone gel breast implants',
    year: 2018,
    pubmedId: '29595714',
    journal: 'Plastic and Reconstructive Surgery',
    abstract: 'Ten-year, open-label, prospective, multicenter core study evaluating the safety and effectiveness of Sientra round and shaped silicone gel breast implants. Enrolled 1,788 patients (3,506 implants) across primary augmentation, revision-augmentation, primary reconstruction, and revision-reconstruction cohorts.',
    keyFindings: [
      'Rupture rate: 8.6% by patient',
      'Baker grade III/IV capsular contracture: 13.5%',
      'Reoperation rate: 31.5%',
      'No cases of breast implant-associated anaplastic large cell lymphoma (BIA-ALCL)',
      'Enrollment: 1,116 primary augmentation, 363 revision-augmentation, 225 primary reconstruction, 84 revision-reconstruction',
    ],
    type: 'peer-reviewed',
    division: 'aesthetics',
    products: ['sientra'],
    status: 'published',
    studyDesign: '10-year, open-label, prospective, multicenter',
    participants: 1788,
    duration: '10 years',
    externalUrl: 'https://pubmed.ncbi.nlm.nih.gov/29595714',
    featured: true,
    tags: ['breast-implants', 'silicone-gel', 'long-term-safety', 'core-study'],
    verificationStatus: 'verified',
  },
  {
    id: 'sientra-6year-postapproval',
    slug: 'sientra-six-year-us-postapproval-study',
    title: 'Safety and Efficacy of the Sientra Silicone Gel Round and Shaped Breast Implants: 6-Year Results of the U.S. Postapproval Study',
    subtitle: 'Comprehensive postapproval study with over 5,000 patients',
    year: 2024,
    pubmedId: '37563756',
    journal: 'Plastic and Reconstructive Surgery - Global Open',
    doi: 'PMC11195925',
    abstract: 'An ongoing, open-label, prospective, multicenter study is being conducted to evaluate the long-term clinical performance of Sientra implants in patients undergoing breast augmentation, reconstruction, and revision in the postmarket environment. Enrollment of 5197 patients (10,327 implants) was completed on March 6, 2015 (4046 primary augmentation, 895 revision-augmentation, 149 primary reconstruction, and 107 revision-reconstruction). Interim analyses were conducted at year 6.',
    keyFindings: [
      'Kaplan-Meier risk of Baker grade III/IV contracture: 4.1%',
      'Risk of reoperation: 11.6%',
      'Results were consistent with the 10-year core study and provide additional evidence in a large data set supporting the comprehensive safety and effectiveness profile',
      'Overall, 82.6% of patients were highly satisfied/happy with their implant',
      'No cases of breast implant-associated anaplastic large cell lymphoma were reported',
      'Enrollment: 5,197 patients with 10,327 implants',
    ],
    type: 'peer-reviewed',
    division: 'aesthetics',
    products: ['sientra'],
    status: 'published',
    studyDesign: 'Postapproval study, prospective, multicenter',
    participants: 5197,
    duration: '6-years (ongoing)',
    externalUrl: 'https://pubmed.ncbi.nlm.nih.gov/37563756',
    featured: true,
    tags: ['breast-implants', 'postapproval', 'safety-profile', 'long-term'],
    verificationStatus: 'verified',
  },

  // AVÉLI - Aesthetics
  {
    id: 'aveli-cellulite-trial',
    slug: 'aveli-cellulite-treatment-multicenter-trial',
    title: 'Avéli Cellulite Treatment Multicenter Clinical Trial',
    subtitle: 'Acoustic subcision for long-term cellulite reduction',
    year: 2022,
    abstract: 'Multicenter clinical trial submitted to FDA demonstrating efficacy of Avéli acoustic subcision device for cellulite reduction in buttocks and thighs. Results supported extended FDA clearance in September 2022 with 1-year durability data.',
    keyFindings: [
      '80% of participants showed "much" or "very much" improved cellulite at 90 days',
      'Results sustained through 12 months follow-up',
      'Acoustic subcision mechanism provides targeted treatment',
      'Extended FDA clearance granted based on durability data',
    ],
    type: 'clinical-trial',
    division: 'aesthetics',
    products: ['aveli'],
    status: 'completed',
    studyDesign: 'Multicenter clinical trial',
    duration: '12 months follow-up',
    featured: true,
    tags: ['cellulite', 'acoustic-subcision', 'fda-cleared', 'durability'],
    verificationStatus: 'verified',
  },

  // WOUND CARE - completeFT
  {
    id: 'completeft-lower-extremity',
    slug: 'completeft-lower-extremity-wound-management',
    title: 'A Retrospective, Observational Case Series of Lower-Extremity Wound Management Using CompleteFT',
    subtitle: 'Real-world evidence for full-thickness placental membrane application',
    year: 2024,
    abstract: 'Retrospective, observational case series focused on lower-extremity wound management using CompleteFT full-thickness placental membrane allograft.',
    keyFindings: [
      'Effective in lower-extremity wound management',
      'Full-thickness placental membrane provides structural support',
      'Observational real-world evidence',
    ],
    type: 'peer-reviewed',
    division: 'wound-care',
    products: ['completeft'],
    status: 'published',
    studyDesign: 'Retrospective, observational case series',
    externalUrl: 'https://www.researchgate.net/publication/391499773',
    featured: false,
    tags: ['wound-care', 'lower-extremity', 'placental-membrane', 'case-series'],
    verificationStatus: 'verified',
  },

  // WOUND CARE - completeFT (Rutherford)
  {
    id: 'completeft-rutherford-lower-extremity',
    slug: 'completeft-lower-extremity-wound-management-rutherford',
    title: 'A retrospective, observational case series of lower-extremity wound management using CompleteFT',
    subtitle: 'International Journal of Tissue Repair publication',
    year: 2024,
    journal: 'International Journal of Tissue Repair',
    abstract: 'Retrospective, observational case series of lower-extremity wound management using CompleteFT.',
    keyFindings: [
      'Lower-extremity wound management',
      'CompleteFT application',
      'Retrospective case series',
    ],
    type: 'peer-reviewed',
    division: 'wound-care',
    products: ['completeft'],
    status: 'published',
    studyDesign: 'Retrospective, observational case series',
    externalUrl: 'https://internationaljournaloftissuerepair.com/index.php/ijtr/article/view/2',
    featured: false,
    tags: ['wound-care', 'lower-extremity', 'case-series'],
    verificationStatus: 'verified',
  },

]

/* -------------------------------------------------------------------------- */
/* Active Clinical Trials                                                     */
/* -------------------------------------------------------------------------- */

export const clinicalTrials: ClinicalTrial[] = [
  {
    id: 'matriarch-trial',
    nctNumber: 'NCT06826339',
    title: 'A Multicenter, Prospective, Randomized Controlled Modified Multi-Platform (Matriarch) Trial Evaluating Several Cellular, Acellular, and Matrix-like Products (CAMPs) and Standard of Care versus Standard of Care alone in the Management of Nonhealing Diabetic Foot and Venous Leg Ulcers',
    shortTitle: 'Matriarch Trial - CAMPs vs. Standard of Care',
    status: 'enrolling',
    studyType: 'Randomized Controlled Trial (RCT)',
    participants: 340,
    sites: 20,
    primaryObjective: 'Evaluate efficacy of CAMPs + Standard of Care versus Standard of Care alone in nonhealing diabetic foot and venous leg ulcers',
    conditions: ['Diabetic foot ulcers', 'Venous leg ulcers'],
    products: ['camps-platform'],
    division: 'wound-care',
    sponsor: 'Tiger BioSciences',
    featured: true,
    clinicalTrialsGovUrl: 'https://clinicaltrials.gov/study/NCT06826339',
  },
  {
    id: 'pressure-ulcer-rct',
    nctNumber: 'NCT06999590',
    title: 'A Multicenter, Prospective, Randomized Controlled Trial Evaluating Several Cellular, Acellular, and Matrix-like Products (CAMPs) and Standard of Care Versus Matched Standard of Care Controls in the Management of Nonhealing Pressure Ulcers',
    shortTitle: 'RCT - CAMPs for Pressure Ulcers',
    status: 'enrolling',
    studyType: 'Randomized Controlled Trial (RCT)',
    participants: 340,
    sites: 20,
    primaryObjective: 'Evaluate efficacy of CAMPs + Standard of Care versus Matched Standard of Care Controls in nonhealing pressure ulcers',
    conditions: ['Pressure ulcers'],
    products: ['camps-platform'],
    division: 'wound-care',
    sponsor: 'Tiger BioSciences',
    featured: true,
    clinicalTrialsGovUrl: 'https://clinicaltrials.gov/study/NCT06999590',
  },
]

/* -------------------------------------------------------------------------- */
/* Regulatory Submissions                                                     */
/* -------------------------------------------------------------------------- */

export const regulatorySubmissions: RegulatorySubmission[] = [
  {
    id: 'cms-lcd-submission-2025',
    title: 'CMS Local Coverage Determination - Supplemental Clinical Submission for Skin Substitutes',
    type: 'cms-lcd',
    submissionDate: '2025-11-01',
    agency: 'Centers for Medicare & Medicaid Services (CMS)',
    products: ['completeft', 'caregraft'],
    division: 'wound-care',
    summary: 'Comprehensive clinical evidence package submitted to CMS for Local Coverage Determination including 6 clinical manuscripts, 7 scientific abstracts, 8 scientific posters, 2 R&D manuscripts, and 1 journal compendium supporting coverage for Tiger wound care products.',
    status: 'submitted',
  },
  {
    id: 'cms-fee-schedule-comment',
    title: 'CMS Physician Fee Schedule and OPPS Comment Letter',
    type: 'cms-fee-schedule',
    submissionDate: '2025-09-01',
    agency: 'Centers for Medicare & Medicaid Services (CMS)',
    products: ['wound-care-portfolio'],
    division: 'wound-care',
    summary: 'Tiger BioSciences comment letter on proposed Physician Fee Schedule and Outpatient Prospective Payment System rule changes affecting wound care reimbursement.',
    status: 'submitted',
  },
]

/* -------------------------------------------------------------------------- */
/* Technology Platforms                                                       */
/* -------------------------------------------------------------------------- */

export const technologyPlatforms: TechnologyPlatform[] = [
  {
    id: 'camps-platform',
    name: 'CAMPs Technology Platform',
    division: 'wound-care',
    description: 'Cellular, Acellular, and Matrix-like Products derived from placental tissue (amnion, chorion, intermediate spongy layer) with minimal manipulation to retain extracellular matrix (ECM) characteristics.',
    scienceBasis: [
      'Source: Placental tissue (amnion, chorion, intermediate spongy layer)',
      'Processing: Minimal manipulation to retain ECM characteristics',
      'Mechanism: Provides scaffold for cell migration and tissue regeneration',
      'Components: Collagen-rich ECM, growth factors, structural proteins',
    ],
    products: ['caregraft', 'completeft'],
    keyFeatures: [
      'Three distinct product configurations: Dual Layer, Full-Thickness, and Amnion-Chorion-Amnion (ACA)',
      'Maximum ECM and collagen content preservation',
      'Flexible application for various wound types',
      'Manufactured in Conshohocken, PA and San Antonio, TX facilities',
    ],
    clinicalApplications: [
      'Diabetic foot ulcers',
      'Venous leg ulcers',
      'Pressure ulcers',
      'Surgical wounds',
      'Chronic wounds that failed standard care',
    ],
    facilities: ['Conshohocken, PA', 'San Antonio, TX'],
    featured: true,
  },
]

/* -------------------------------------------------------------------------- */
/* CAMPs Product Configurations                                               */
/* -------------------------------------------------------------------------- */

export interface ProductConfiguration {
  name: string
  description: string
  layers: string[]
  characteristics: string[]
  products: string[]
}

export const campsConfigurations: ProductConfiguration[] = [
  {
    name: 'Dual Layer Amniotic Membrane',
    description: 'Retains epithelium and basement layers for protective barrier with moderate structural support',
    layers: ['Epithelium', 'Basement membrane'],
    characteristics: [
      'Thin and flexible',
      'Collagen-rich',
      'Protective barrier',
      'Moderate structural support',
    ],
    products: ['caregraFT™', 'completeFT®'],
  },
  {
    name: 'Full-Thickness Placental Membrane',
    description: 'Preserves complete placental structure for maximum ECM content and structural integrity',
    layers: ['Amnion', 'Intermediate spongy layer', 'Chorion'],
    characteristics: [
      'Maximum structural support',
      'Maximum ECM content',
      'Maximum collagen density',
      'Complete tissue architecture preservation',
    ],
    products: ['caregraFT™', 'completeFT®'],
  },
  {
    name: 'Amnion-Chorion-Amnion (ACA)',
    description: 'Proprietary triple-layer configuration providing superior thickness and collagen content',
    layers: ['Amnion', 'Chorion', 'Amnion'],
    characteristics: [
      'Up to 6x thicker than dual layer',
      'Contains 2x the collagen',
      'Highest ECM density',
      'Highest collagen density',
    ],
    products: ['completeFT®'],
  },
]

/* -------------------------------------------------------------------------- */
/* Export Collections                                                         */
/* -------------------------------------------------------------------------- */

export const allScience = {
  statistics: scienceStatistics,
  publications,
  clinicalTrials,
  fdaApprovals,
  regulatorySubmissions,
  technologyPlatforms,
  campsConfigurations,
}

export default allScience
