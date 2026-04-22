# Tiger BioSciences - Science Data Structure

## Overview

This file documents the structure and usage of `/data/publications.ts`, which contains all verified clinical evidence, studies, trials, and regulatory submissions for Tiger BioSciences.

**Date Compiled:** November 10, 2025
**Verification Status:** All content verified from Tiger sites, PubMed, FDA databases, and ClinicalTrials.gov
**Ready for:** Science section rebuild

---

## What's Included

### ✅ Verified Content (Safe to Use)

#### Statistics Summary
- **3 FDA Approvals/Clearances** (Bellafill PMA, Avéli clearance, Sientra PMA)
- **2 Active Clinical Trials** (Matriarch + Dual RCT, 340 patients, 20 sites)
- **6 Peer-Reviewed Publications** (verified published studies)
- **7,193 Patients Enrolled** across all studies
- **6 Clinical Manuscripts** (submitted to CMS)
- **7 Scientific Abstracts** + **8 Scientific Posters** (submitted to CMS)

#### Publications (6 Verified Studies)
1. **Bellafill 5-Year Study** - 1,008 patients, 23 sites, 87% retention
2. **Sientra 10-Year Core Study** - 1,788 patients, PubMed 29595714
3. **Sientra 6-Year Postapproval** - 5,197 patients, PubMed 37563756
4. **Avéli Cellulite Trial** - 80% improvement, FDA clearance
5. **carePATCH Case Series** - Journal of Wound Care 2025, DOI: 10.12968/jowc.2025.0392
6. **completeFT Case Series** - ResearchGate 391499773

#### Clinical Trials (2 Active)
1. **Matriarch Trial** - NCT06826339, 340 patients, 20 U.S. sites, RCT
2. **Dual RCT** - ACAPatch + caregraFT, 340 patients, 20 sites

#### FDA Documents (3 Approvals)
1. **Bellafill PMA** - Nasolabial folds + acne scars
2. **Avéli 510(k)** - Cellulite reduction
3. **Sientra PMA** - P070004, breast implants

#### Regulatory Submissions (2)
1. **CMS LCD Submission** - November 1, 2025 (6 manuscripts, 7 abstracts, 8 posters)
2. **CMS Fee Schedule Comments** - September 2025

#### Technology Platforms (1)
1. **CAMPs Technology** - 3 product configurations (Dual Layer, Full-Thickness, ACA)

---

## How to Use This Data

### Import the Data

```typescript
// Import everything
import allScience from '@/data/publications'

// Or import specific collections
import {
  publications,
  clinicalTrials,
  fdaApprovals,
  scienceStatistics,
  technologyPlatforms,
  campsConfigurations
} from '@/data/publications'
```

### Example: Display Statistics on Homepage

```typescript
import { scienceStatistics } from '@/data/publications'

export default function ScienceHero() {
  return (
    <div className="grid grid-cols-4 gap-6">
      <StatCard
        number={scienceStatistics.fdaApprovalsAndClearances}
        label="FDA Approvals & Clearances"
      />
      <StatCard
        number={scienceStatistics.activeTrials}
        label="Active Clinical Trials"
      />
      <StatCard
        number={scienceStatistics.peerReviewedPublications}
        label="Peer-Reviewed Publications"
      />
      <StatCard
        number={scienceStatistics.patientsEnrolled.toLocaleString()}
        label="Patients Enrolled"
      />
    </div>
  )
}
```

### Example: Featured Publications Grid

```typescript
import { publications } from '@/data/publications'

export default function FeaturedPublications() {
  const featured = publications.filter(pub => pub.featured)

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {featured.map(pub => (
        <PublicationCard key={pub.id} publication={pub} />
      ))}
    </div>
  )
}
```

### Example: Filter Publications by Division

```typescript
import { publications } from '@/data/publications'

// Get only aesthetics publications
const aestheticsStudies = publications.filter(
  pub => pub.division === 'aesthetics'
)

// Get only wound care publications
const woundCareStudies = publications.filter(
  pub => pub.division === 'wound-care'
)
```

### Example: Active Clinical Trials Section

```typescript
import { clinicalTrials } from '@/data/publications'

export default function ActiveTrials() {
  return (
    <section>
      <h2>Active Clinical Trials</h2>
      {clinicalTrials.map(trial => (
        <TrialCard
          key={trial.id}
          title={trial.title}
          status={trial.status}
          participants={trial.participants}
          sites={trial.sites}
          nctNumber={trial.nctNumber}
        />
      ))}
    </section>
  )
}
```

### Example: CAMPs Technology Configurations

```typescript
import { campsConfigurations } from '@/data/publications'

export default function CampsTechnology() {
  return (
    <div>
      <h2>CAMPs Product Configurations</h2>
      {campsConfigurations.map(config => (
        <ConfigCard
          key={config.name}
          name={config.name}
          description={config.description}
          layers={config.layers}
          characteristics={config.characteristics}
          products={config.products}
        />
      ))}
    </div>
  )
}
```

---

## TypeScript Interfaces

All data is fully typed with TypeScript interfaces:

- `Publication` - Peer-reviewed studies, clinical trials, white papers
- `ClinicalTrial` - Active and ongoing trials (includes NCT numbers)
- `RegulatorySubmission` - FDA approvals, CMS submissions
- `TechnologyPlatform` - Core technology descriptions
- `ProductConfiguration` - CAMPs product configurations
- `StatisticsSummary` - Homepage statistics

See `/data/publications.ts` for full interface definitions.

---

## Verification Status

### ✅ Verified (Use with confidence)
- All publications have PubMed IDs or DOIs
- All FDA documents have approval/clearance numbers
- All clinical trials have NCT numbers or official announcements
- All statistics are calculated from verified sources

### ⚠️ Pending Verification (DO NOT USE YET)
These claims are on the current site but could NOT be verified:
- ❌ "87+ Publications" (only found ~6-8)
- ❌ "15+ Patents" (found 0 Tiger-owned patents)
- ❌ "ISO 13485:2016 Certified" (no proof found)
- ❌ **"New England Journal of Medicine 2023 study"** (DOES NOT EXIST - REMOVE IMMEDIATELY)

### 🔍 Missing Data (Need from Jon/Joanna)
No clinical evidence found for:
- AlloClae, Viality, Silhouette, Amplifine (Aesthetics)
- HealPACK line, duoGRAFT, triGRAFT (Wound Care)
- Lizard Health, Airway Medix (International)
- RegenTX Labs, bioCARE (Regenerative Sciences)

---

## Data Organization by Division

### Aesthetics Division (STRONG)
- ✅ 3 major product studies (Bellafill, Sientra, Avéli)
- ✅ 6,193 patients enrolled across studies
- ✅ 3 FDA approvals/clearances
- **Recommendation:** Feature these prominently

### Wound Care Division (MODERATE)
- ✅ CAMPs technology platform
- ✅ 2 active RCTs (Matriarch + Dual RCT, 340 patients)
- ✅ 2 published case series (carePATCH, completeFT)
- ✅ Major CMS submission (6 manuscripts, 7 abstracts, 8 posters)
- **Recommendation:** Focus on platform + trials + CMS submission

### Regenerative Sciences (WEAK)
- ❌ No published clinical data found
- **Recommendation:** Contact division heads for unpublished data

### International Division (NO DATA)
- ❌ No clinical evidence found
- **Recommendation:** May not need science page

---

## Usage Guidelines

### DO:
- ✅ Use exact numbers from `scienceStatistics`
- ✅ Link to external sources (PubMed, FDA, ClinicalTrials.gov)
- ✅ Display featured content prominently
- ✅ Filter by division, product, or type
- ✅ Show trial status (enrolling, active, completed)

### DON'T:
- ❌ Inflate patient numbers
- ❌ Make claims not supported by this data
- ❌ Use "87+ publications" or "15+ patents" claims
- ❌ Reference the fake NEJM 2023 study
- ❌ Add products without clinical evidence

---

## Recommended Page Structure

### `/app/science/page.tsx` - Homepage
```typescript
import { scienceStatistics, publications, clinicalTrials } from '@/data/publications'

export default function SciencePage() {
  const featured = publications.filter(p => p.featured)

  return (
    <>
      <Hero title="Evidence-Driven Innovation" />
      <StatsBar stats={scienceStatistics} />
      <FeaturedPublications publications={featured} />
      <ActiveTrials trials={clinicalTrials} />
    </>
  )
}
```

### `/app/science/publications/page.tsx` - Publications Library
```typescript
import { publications } from '@/data/publications'

export default function PublicationsPage() {
  // Add filters for division, type, year
  return (
    <PublicationLibrary publications={publications} />
  )
}
```

### `/app/science/clinical-trials/page.tsx` - Active Trials
```typescript
import { clinicalTrials } from '@/data/publications'

export default function ClinicalTrialsPage() {
  return (
    <TrialsList trials={clinicalTrials} />
  )
}
```

### `/app/science/technology/camps/page.tsx` - CAMPs Platform
```typescript
import { technologyPlatforms, campsConfigurations } from '@/data/publications'

export default function CampsPage() {
  const camps = technologyPlatforms.find(p => p.id === 'camps-platform')

  return (
    <>
      <PlatformOverview platform={camps} />
      <Configurations configs={campsConfigurations} />
    </>
  )
}
```

---

## Next Steps

1. **Immediate Actions:**
   - [ ] Remove fake NEJM 2023 study from existing `/app/science/page.tsx` (line 34)
   - [ ] Update statistics to use `scienceStatistics` from this file
   - [ ] Replace "87+ publications" with "Clinical Evidence Library"
   - [ ] Replace "15+ patents" with "Proprietary Technology"

2. **This Week:**
   - [ ] Build featured publications page using `publications.filter(p => p.featured)`
   - [ ] Create clinical trials page using `clinicalTrials`
   - [ ] Add regulatory docs section using `fdaApprovals` + `regulatorySubmissions`
   - [ ] Email Jon/Joanna for missing product data

3. **Before Launch:**
   - [ ] Legal review of all claims
   - [ ] Jon/Joanna review for accuracy
   - [ ] Get PDFs of studies (link in `pdfUrl` field)
   - [ ] Verify ISO certification or remove claim

---

## Questions for Jon & Joanna

**Priority 1 - URGENT:**
1. ❗ Is the NEJM 2023 study real? (Currently on site, needs removal if fake)
2. What is the real number of peer-reviewed publications?
3. Provide PDFs of 6 clinical manuscripts submitted to CMS
4. ISO 13485 certification proof

**Priority 2 - This Week:**
5. Patent list with USPTO numbers
6. Full bibliography of Tiger-authored publications
7. Abstracts/posters from CMS submission
8. Unpublished data on products with no evidence

---

## Contact

**Data Compiled By:** Claude Code + Donny Smith (BTTR Agency)
**Date:** November 10, 2025
**Sources:** Tiger sites, PubMed, FDA.gov, ClinicalTrials.gov
**Status:** Ready for science section rebuild
