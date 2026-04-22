# Tiger BioSciences - Science Publications Library Plan

**Created:** November 10, 2025
**Purpose:** Centralized science & research hub for investors, surgeons, and physicians
**Approach:** Publications Library (Option A)

---

## 📋 Content Audit - What Currently Exists

### Aesthetics Division
**Bellafill:**
- ✅ 5-year Post-Approval Study (1,008 patients, nasolabial folds)
- ✅ FDA approval documentation (smile lines)
- ✅ FDA approval documentation (acne scars)
- ⏳ RealSelf patient satisfaction data

**Sientra:**
- ⏳ Clinical studies (site blocked, need from Jon/Joanna)
- ⏳ FDA PMA documentation
- ⏳ Safety profile studies

**Avéli:**
- ⏳ Cellulite treatment clinical data (original site dead, need from team)

### Wound Care Division
**CAMPs Technology Platform:**
- ✅ Clinical evidence for placental tissue allografts
- ✅ Ongoing randomized controlled trials (RCTs)
- ⏳ Specific study publications needed

**Products (alloPLY, caregraFT, ACAPatch, etc):**
- ⏳ Individual product studies
- ⏳ Comparative effectiveness data

### Regulatory/Reimbursement
- ✅ CMS LCD clinical submission (skin sub)
- ✅ CMS Physician Fee Schedule comments
- ⏳ Additional regulatory submissions

---

## 🎯 Science Library Structure

### Homepage: `/science`
**Hero:**
- Title: "Science Driving Innovation"
- Description: "Comprehensive clinical evidence supporting Tiger BioSciences' portfolio of medical technologies"
- CTA: "Explore Publications" → scrolls to library

**Statistics Bar:**
- [X] Peer-Reviewed Publications
- [X] Clinical Studies
- [X] FDA Clearances/Approvals
- [X] Active Research Programs

**Featured Research Highlight:**
- Rotating spotlight on 2-3 major studies
- Image + title + summary + "Read Study" link

### Publications Library: `/science/publications`

**Filter System:**
- **By Division:**
  - Aesthetics
  - Wound Care & Extremity
  - Tissue Processing
  - International Technologies

- **By Content Type:**
  - Peer-Reviewed Journal Articles
  - Clinical Studies
  - White Papers
  - FDA Documents
  - Case Studies
  - Conference Presentations

- **By Product:**
  - Dropdown of all 51 products

- **By Date:**
  - Last 12 months
  - Last 3 years
  - Last 5 years
  - All time

**Search:**
- Keyword search across titles, authors, abstracts

**Results Display:**
```
┌─────────────────────────────────────────────────────────┐
│ [BADGE: Peer-Reviewed]                                  │
│                                                         │
│ Five-Year Safety and Efficacy of Bellafill for        │
│ Correction of Nasolabial Folds                         │
│                                                         │
│ Authors: [List], Journal: [Name], Year: 2020          │
│                                                         │
│ Abstract excerpt (2-3 sentences)...                    │
│                                                         │
│ [Download PDF] [View Abstract] [Cite]                  │
└─────────────────────────────────────────────────────────┘
```

### Individual Publication Page: `/science/publications/[slug]`

**Content:**
- Full title
- Authors with affiliations
- Publication info (journal, date, DOI)
- Abstract (full text)
- Key findings (bullet points)
- Related products
- Download PDF button
- Citation tool
- Related studies section

### Clinical Evidence by Product: `/science/products/[product-name]`

**Product-specific evidence hub:**
- Hero with product name
- "Clinical Evidence Summary" section
- List of all studies for that product
- FDA clearance/approval documents
- Safety data
- Efficacy data
- "Request More Information" CTA

### Research Programs: `/science/research`

**Active Research:**
- Ongoing clinical trials
- Research partnerships
- University collaborations
- Future pipeline

---

## 📦 Data Structure

### Publication Schema
```typescript
interface Publication {
  id: string;
  slug: string;
  title: string;
  authors: Author[];
  publicationDate: string;
  journal?: string;
  doi?: string;
  abstract: string;
  keyFindings: string[];
  pdfUrl?: string;
  type: 'peer-reviewed' | 'white-paper' | 'fda-document' | 'case-study' | 'conference';
  division: 'aesthetics' | 'wound-care' | 'tissue-processing' | 'international';
  relatedProducts: string[]; // product slugs
  tags: string[];
  featured: boolean;
}

interface Author {
  name: string;
  affiliation?: string;
  credentials?: string;
}
```

### Data File Location
`/Users/donnysmith/CC/Project Luna/data/publications.ts`

---

## 🚀 Implementation Plan

### Phase 1: Structure (This Week)
- [ ] Create `/app/science/page.tsx` - Homepage
- [ ] Create `/app/science/publications/page.tsx` - Library
- [ ] Create `/app/science/publications/[slug]/page.tsx` - Individual publication
- [ ] Create `/data/publications.ts` - Data file with initial entries
- [ ] Build filter/search components

### Phase 2: Content Collection (This Week)
- [ ] Email Jon Podmore & Joanna Marquez with specific requests:
  - All peer-reviewed publications (by division)
  - Clinical study reports
  - FDA clearance/approval documents
  - White papers
  - Conference presentations
  - Ongoing trial information

- [ ] Extract from current sites:
  - Bellafill 5-year study details
  - CMS LCD submission documents
  - CAMPs technology evidence

### Phase 3: Data Entry (Next Week)
- [ ] Format all publications into data structure
- [ ] Obtain PDF files (or links)
- [ ] Write abstracts/summaries
- [ ] Tag and categorize
- [ ] Link to products

### Phase 4: Polish & Review (Before Launch)
- [ ] Legal review of all claims
- [ ] Compliance check on FDA language
- [ ] Jon/Joanna review for accuracy
- [ ] Test filters and search

---

## 📧 Email to Jon & Joanna (DRAFT)

**Subject:** URGENT: Science Publications Needed for Website Launch (Due: Nov 12)

Hi Jon and Joanna,

We're building the Science Publications Library for the new Tiger BioSciences website and need your published research by **Wednesday, November 12** (2 days) to meet our legal review deadline.

**What We Need:**

1. **Peer-Reviewed Journal Articles**
   - All published papers across all divisions
   - PDF files preferred
   - Full citation info (authors, journal, year, DOI)

2. **Clinical Studies**
   - Study reports (completed and ongoing)
   - Patient population, methodology, results
   - Any RCT data you have

3. **FDA Documents**
   - Clearance letters (510k)
   - Approval letters (PMA)
   - Safety summaries

4. **White Papers**
   - Technical documents
   - Technology platform overviews
   - Clinical evidence summaries

5. **Conference Presentations**
   - Any poster presentations
   - Conference abstracts
   - Slide decks (if appropriate)

**Already Identified (please confirm/provide):**
- ✅ Bellafill 5-year Post-Approval Study (1,008 patients)
- ✅ CAMPs Technology clinical evidence
- ✅ CMS LCD clinical submission
- ❓ Sientra breast implant studies
- ❓ Avéli cellulite treatment data
- ❓ AlloPLY/caregraFT/ACAPatch studies

**Format:**
- PDFs preferred (any format works)
- Include: Title, Authors, Publication Date, Journal Name
- Abstracts if available

**Compliance Note:**
This content will be in a public-facing Publications Library for investors, surgeons, and physicians. Everything must be:
- Factually accurate
- Properly cited
- Compliant with FDA advertising/promotion rules
- Approved for public distribution

**Can you provide these by end of day Tuesday (Nov 11)?**

Let me know if you have questions or need clarification.

Thanks,
Donny

---

## 🎨 Design Notes

**Visual Style:**
- Clean, academic aesthetic
- Credibility-focused (not marketing-heavy)
- Easy to scan and filter
- Professional typography
- PDF icons, download buttons prominent

**Color Usage:**
- Neutral background (white/cream)
- Badge colors by type:
  - Peer-Reviewed: Green/Academic
  - FDA Document: Blue/Official
  - White Paper: Gold/Premium
  - Case Study: Purple/Clinical

**Inspiration:**
- PubMed Central layout (filter sidebar + results)
- University research library portals
- Medical device company science hubs (Medtronic, Stryker)

---

## ⚠️ Compliance Considerations

1. **FDA Promotion Rules:**
   - Can't make claims not supported by labeling
   - Must include risk information
   - Can't promote off-label uses

2. **Clearance/Approval Language:**
   - "FDA-cleared" for 510(k) devices
   - "FDA-approved" for PMA devices
   - Be precise about indication

3. **Study Representation:**
   - Don't overstate results
   - Include limitations if discussed
   - Properly attribute (don't claim Tiger research if it was independent)

4. **Access Control:**
   - Some content may need login (if promotional)
   - Consider surgeon-only section if needed

---

## 📊 Success Metrics

**Launch Requirements:**
- Minimum 15-20 publications in library
- At least 1 major study per key product
- All FDA documents uploaded
- Filter/search working
- Mobile responsive

**Post-Launch:**
- Track downloads by publication
- Monitor search queries (improve findability)
- Quarterly content updates
- Surgeon feedback on usefulness

---

**Status:** READY TO IMPLEMENT
**Next Step:** Send email to Jon/Joanna, start building page structure
