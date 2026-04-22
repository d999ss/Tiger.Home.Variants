/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import Image from 'next/image'

/* ═══════════════════════════════════════════════════
   TIGER BIOSCIENCES — VISUAL BRAND SYSTEM
   Sidebar playbook + Figma "Our Vision" aesthetic
   ═══════════════════════════════════════════════════ */

const c = {
  dark: '#221010',
  darkSoft: '#3D2B2B',
  sand: '#FFFEFE',         // Warm off-white per brand spec
  cream: '#F6F2EB',        // Warm cream per brand spec
  linen: '#F8F8F8',        // Light off-white for subtle contrast
  bone: '#E8E8E8',         // Lighter neutral for borders
  warmWhite: '#EFECE9',    // Warm white per brand spec
  gold: '#D2A62C',         // Aesthetic Gold per brand spec
  goldLight: '#F5EDD0',    // Light gold tint
  tigerRed: '#C03227',     // Tiger Bio primary (now primary accent)
  orange: '#DF512B',       // Wound Care division
  blue: '#2D5782',         // International division
  coral: '#E8735A',        // Dermatology division
  n50: '#FAFAF9',
  n100: '#F5F5F4',
  n200: '#E7E5E4',
  n300: '#D6D3D1',
  n400: '#A8A29E',
  n500: '#78716C',
  n600: '#57534E',
  n700: '#44403C',
  white: '#FFFFFF',
  black: '#000000',
}

/* ── Section data ──────────────────────────────────── */

type Section = { id: string; label: string; num: string; parent?: string }

const sections: Section[] = [
  { id: 'cover', label: 'Cover', num: 'COVER', parent: undefined },
  { id: 'brand-strategy', label: 'Brand Strategy', num: '00', parent: undefined },
  { id: 'mission', label: 'Mission & Vision', num: '00-1', parent: 'brand-strategy' },
  { id: 'positioning', label: 'Market Positioning', num: '00-2', parent: 'brand-strategy' },
  { id: 'personality', label: 'Brand Personality', num: '00-4', parent: 'brand-strategy' },
  { id: 'brand-visual', label: 'Brand Visual', num: '02', parent: undefined },
  { id: 'foundations', label: 'Foundations', num: '02-1', parent: 'brand-visual' },
  { id: 'divisions-overview', label: 'Divisions', num: '02-2', parent: 'brand-visual' },
  { id: 'wound-care', label: 'Wound Care', num: '02-2-1', parent: 'brand-visual' },
  { id: 'aesthetics', label: 'Aesthetics', num: '02-2-2', parent: 'brand-visual' },
  { id: 'tissue-tech', label: 'Tissue Technology', num: '02-2-3', parent: 'brand-visual' },
  { id: 'dermatology', label: 'Dermatology', num: '02-2-5', parent: 'brand-visual' },
  { id: 'international', label: 'International', num: '02-2-4', parent: 'brand-visual' },
  { id: 'logo', label: 'Logo System', num: '02-3-0', parent: 'brand-visual' },
  { id: 'color', label: 'Color System', num: '02-3-1', parent: 'brand-visual' },
  { id: 'color-mapping', label: 'Color Mapping', num: '02-3-1a', parent: 'brand-visual' },
  { id: 'typography', label: 'Typography', num: '02-3-2', parent: 'brand-visual' },
  { id: 'photography', label: 'Photography', num: '02-3-3', parent: 'brand-visual' },
  { id: 'glass', label: 'Glass UI', num: '02-3-4', parent: 'brand-visual' },
  { id: 'design-system', label: 'Design System', num: '03', parent: undefined },
  { id: 'grid-layout', label: 'Grid & Layout', num: '03-1', parent: 'design-system' },
  { id: 'spacing', label: 'Spacing Scale', num: '03-2', parent: 'design-system' },
  { id: 'components', label: 'Components', num: '03-3', parent: 'design-system' },
  { id: 'interactions', label: 'Interaction Patterns', num: '03-4', parent: 'design-system' },
  { id: 'motion', label: 'Motion System', num: '03-5', parent: 'design-system' },
  { id: 'content-system', label: 'Content System', num: '04', parent: undefined },
  { id: 'content-hierarchy', label: 'Content Hierarchy', num: '04-1', parent: 'content-system' },
  { id: 'microcopy', label: 'Microcopy & Labels', num: '04-2', parent: 'content-system' },
  { id: 'error-messages', label: 'Error Messages', num: '04-3', parent: 'content-system' },
  { id: 'accessibility', label: 'Accessibility', num: '05', parent: undefined },
  { id: 'wcag-targets', label: 'WCAG Compliance', num: '05-1', parent: 'accessibility' },
  { id: 'color-contrast', label: 'Color Contrast', num: '05-2', parent: 'accessibility' },
  { id: 'motion-limits', label: 'Motion & Animation', num: '05-3', parent: 'accessibility' },
  { id: 'governance', label: 'Governance', num: '06', parent: undefined },
  { id: 'approval-workflow', label: 'Approval Workflow', num: '06-1', parent: 'governance' },
  { id: 'versioning', label: 'Versioning', num: '06-2', parent: 'governance' },
  { id: 'contribution', label: 'Contribution Model', num: '06-3', parent: 'governance' },
  { id: 'application', label: 'Application', num: '07', parent: undefined },
  { id: 'products', label: 'Products', num: '07-1', parent: 'application' },
  { id: 'gallery', label: 'In Action', num: '07-2', parent: 'application' },
  { id: 'voice-tone', label: 'Voice & Tone', num: '07-4', parent: 'application' },
  { id: 'cases', label: 'Case Studies', num: '07-5', parent: 'application' },
  { id: 'quick-ref', label: 'Quick Reference', num: '07-6', parent: 'application' },
  { id: 'best-practices', label: 'Best Practices', num: '07-7', parent: 'application' },
  { id: 'rules', label: 'Usage Rules', num: '07-8', parent: 'application' },
  { id: 'dev-docs', label: 'System Docs', num: '08', parent: undefined },
  { id: 'getting-started', label: 'Getting Started', num: '08-1', parent: 'dev-docs' },
  { id: 'component-lab', label: 'Component Lab', num: '08-2', parent: 'dev-docs' },
  { id: 'tokens-api', label: 'Tokens & API', num: '08-3', parent: 'dev-docs' },
]

const topLevel = sections.filter((s) => !s.parent)
const childrenOf = (parentId: string) => sections.filter((s) => s.parent === parentId)

const divisionData = {
  'wound-care': {
    name: 'Wound Care Solutions',
    fullName: 'Tiger Wound Care',
    hex: '#DF512B',
    tagline: 'Cellular and acellular technologies for chronic, acute, and surgical wound management.',
    description: 'The flagship division of Tiger BioSciences. Wound Care Solutions leverages proprietary CAMPs (Cellular and Acellular Matrix Products) technology to deliver advanced tissue-based products for wound healing and regeneration. Operates through Tiger Wound Care, Extremity Care, and Encore Surgical Dressings.',
    products: [
      { name: 'caregraFT\u2122', desc: 'Dehydrated three-layer placental allograft for wound care applications' },
      { name: 'carePATCH\u00AE', desc: 'Dehydrated dual-layer placental allograft protective barrier' },
      { name: 'completeFT\u00AE', desc: 'Full thickness placental membrane for wound care applications' },
      { name: 'HealPACK\u2122', desc: 'Class I and Class II medical device surgical dressings' },
    ],
    audiences: ['Wound care specialists', 'Podiatrists', 'Vascular surgeons', 'Hospital systems', 'Extremity care providers'],
    tone: 'Clinical authority with warmth. Evidence-driven but human.',
    colorUsage: 'Tiger Orange (#DF512B) as primary accent. Orange CTAs, orange data highlights, orange section markers.',
    pattern: {
      name: 'Cellular Weave',
      description: 'Organic overlapping rings referencing cellular matrices. Use sparingly behind headlines or as hero overlays.',
      css: 'radial-gradient(circle at 15% 25%, #df512b 0%, rgba(223,81,43,0.55) 22%, rgba(223,81,43,0) 52%), radial-gradient(circle at 80% 65%, #c03a12 0%, rgba(192,58,18,0.5) 20%, rgba(192,58,18,0) 48%), radial-gradient(circle at 50% 8%, rgba(240,105,60,0.6) 0%, rgba(240,105,60,0) 42%), #2A0E06',
      usage: 'Hero overlays, section toppers, CTA backgrounds',
    },
  },
  aesthetics: {
    name: 'Aesthetic Solutions',
    fullName: 'Tiger Aesthetics Medical',
    hex: '#D2A62C',
    tagline: 'Reconstructive and cosmetic applications powered by regenerative tissue science.',
    description: 'Tiger Aesthetics brings the science of regenerative medicine to the cosmetic and reconstructive space. This division carries a premium, luxury-adjacent visual identity distinguished by gold accents.',
    products: [
      { name: 'Bellafill\u00AE', desc: 'Long-lasting collagen builder for smile lines and acne scars' },
      { name: 'Av\u00E9li\u00AE', desc: 'Single-treatment cellulite release with lasting results' },
      { name: 'Sientra\u00AE', desc: 'Breast implants exclusively for board-certified plastic surgeons' },
      { name: 'Viality\u00AE', desc: 'Advanced fat transfer system for predictable outcomes' },
      { name: 'Amplifine\u00AE', desc: 'PRP technology for aesthetic treatments' },
      { name: 'alloClae\u2122', desc: 'Structural adipose tissue for non-surgical body contouring' },
      { name: 'Breast Tissue Expanders', desc: 'Advanced expansion devices for breast reconstruction' },
    ],
    audiences: ['Plastic surgeons', 'Dermatologists', 'Med spas', 'Aesthetic practitioners'],
    tone: 'Premium and aspirational. Beauty meets science. Never clinical-feeling.',
    colorUsage: 'Aesthetic Gold (#D2A62C) as primary accent. Gold CTAs, gold badges, gold section markers. Never orange.',
    pattern: {
      name: 'Golden Arc',
      description: 'Soft arcs with subtle gold shimmer inspired by luxury filigree and curvature of the human form.',
      css: 'linear-gradient(128deg, rgba(210,166,44,0.95) 0%, rgba(210,166,44,0.55) 28%, rgba(180,138,28,0.2) 52%, transparent 72%), radial-gradient(circle at 22% 22%, rgba(255,228,140,0.55) 0%, transparent 42%), radial-gradient(circle at 82% 82%, rgba(120,88,14,0.65) 0%, transparent 44%), #110C04',
      usage: 'Hero cards, premium dividers, print chapter covers',
    },
  },
  'tissue-tech': {
    name: 'Tissue Technology',
    fullName: 'Tiger Tissue Technology',
    hex: '#C03227',
    tagline: 'The science platform behind every Tiger product. Proprietary processing, vertically integrated.',
    description: 'Tissue Technology is the R\u0026D and manufacturing backbone of Tiger BioSciences. This division encompasses the fully integrated model controlling donor screening, tissue collection, processing, preservation, and quality systems. Includes Birth Tissue Recovery (BTR) and bioCARE Donor Network.',
    products: [
      { name: 'CAMPs Platform', desc: 'Cellular and Acellular Matrix Products processing protocol' },
      { name: 'Birth Tissue Recovery (BTR)', desc: 'The country\u2019s most experienced human birth tissue bank' },
      { name: 'bioCARE Donor Network', desc: 'Tissue donation management for deceased donors' },
      { name: 'TigerTrace\u2122 QC System', desc: 'Lot tracking and regulatory documentation automation' },
      { name: 'CryoStabilize\u2122', desc: 'Proprietary cryogenic preservation at -80\u00B0C' },
      { name: 'RegulaCore\u2122', desc: 'Sterility assurance and compliance verification suite' },
    ],
    audiences: ['Scientific community', 'Regulatory bodies', 'Research partners', 'Internal teams'],
    tone: 'Precise and authoritative. Data-forward. The most clinical of all divisions.',
    colorUsage: 'Tiger Orange (#DF512B) as primary. Heavy use of data cards, charts, and spec tables. Mono typography for technical data.',
    pattern: {
      name: 'Grid Lattice',
      description: 'Fine technical grid hinting at lab instrumentation; doubles as scientific scaffolding pattern.',
      css: 'repeating-linear-gradient(90deg, rgba(192,50,39,0.28) 0px, rgba(192,50,39,0.28) 1px, transparent 1px, transparent 38px), repeating-linear-gradient(0deg, rgba(192,50,39,0.28) 0px, rgba(192,50,39,0.28) 1px, transparent 1px, transparent 38px), repeating-linear-gradient(90deg, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 1px, transparent 1px, transparent 9.5px), repeating-linear-gradient(0deg, rgba(255,255,255,0.055) 0px, rgba(255,255,255,0.055) 1px, transparent 1px, transparent 9.5px), radial-gradient(circle at 50% 50%, rgba(192,50,39,0.32) 0%, transparent 65%), #0C0A0A',
      usage: 'Data dashboards, R&D documents, shaft backgrounds',
    },
  },
  dermatology: {
    name: 'Dermatology',
    fullName: 'Tiger Dermatology',
    hex: '#E8735A',
    tagline: 'Clinical dermatology solutions for skin health, restoration, and protection.',
    description: 'Tiger Dermatology brings regenerative tissue science to clinical skin care. This division focuses on dermatological applications including wound-adjacent skin conditions, scar management, and skin restoration therapies powered by Tiger\'s proprietary processing platform.',
    products: [
      { name: 'dermaGRAFT\u2122', desc: 'Bioengineered skin substitute for dermatological applications' },
      { name: 'SkinMatrix\u2122', desc: 'Acellular dermal matrix for skin restoration procedures' },
      { name: 'ScarResolve\u00AE', desc: 'Advanced scar management therapy system' },
    ],
    audiences: ['Dermatologists', 'Skin care clinicians', 'Burn centers', 'Plastic surgeons'],
    tone: 'Approachable clinical authority. Warm and reassuring, patient-outcome focused.',
    colorUsage: 'Coral (#E8735A) as primary accent. Coral CTAs, coral badges, coral section markers.',
    pattern: {
      name: 'Dermal Flow',
      description: 'Smooth flowing curves referencing skin layers and cellular renewal.',
      css: 'radial-gradient(circle at 20% 28%, #e8735a 0%, rgba(232,115,90,0.6) 24%, rgba(232,115,90,0) 54%), radial-gradient(circle at 78% 70%, #cd5840 0%, rgba(205,88,64,0.55) 22%, rgba(205,88,64,0) 50%), radial-gradient(circle at 52% 42%, rgba(255,148,115,0.45) 0%, rgba(255,148,115,0) 40%), #2A1410',
      usage: 'Section headers, patient materials, clinical brochures',
    },
  },
  international: {
    name: 'International',
    fullName: 'Tiger International',
    hex: '#2D5782',
    tagline: 'European operations, global partnerships, and distribution.',
    description: 'Tiger International manages the global expansion of Tiger BioSciences products and partnerships. This division uses a distinctive blue palette to signal global reach and institutional authority.',
    products: [
      { region: 'Europe', available: ['caregraFT™', 'carePATCH®', 'completeFT®', 'HealPACK™'], status: 'In-market' },
      { region: 'Middle East', available: ['caregraFT™', 'carePATCH®'], status: 'Pilot' },
      { region: 'APAC', available: ['caregraFT™', 'HealPACK™'], status: 'Regulatory Pending' },
    ],
    audiences: ['International distributors', 'Regulatory agencies (EU/APAC)', 'Global health systems', 'Strategic partners'],
    tone: 'Sophisticated and global. Warm authority without being region-specific.',
    colorUsage: 'Tiger Blue (#2D5782) as primary accent. Blue hero sections, blue badges. Supported by cream and warm tones.',
    pattern: {
      name: 'Latitude Lines',
      description: 'Global latitude/longitude curves referencing distribution routes.',
      css: 'repeating-linear-gradient(0deg, rgba(45,87,130,0.72) 0px, rgba(45,87,130,0.72) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(0deg, rgba(45,87,130,0.28) 0px, rgba(45,87,130,0.28) 1px, transparent 1px, transparent 7.5px), radial-gradient(circle at 50% -8%, rgba(82,136,206,0.75) 0%, rgba(45,87,130,0.42) 30%, transparent 62%), radial-gradient(circle at 50% 108%, rgba(8,28,58,0.85) 0%, transparent 42%), #061423',
      usage: 'Global hero strips, map overlays, partner decks',
    },
  },
}

/* ── Division Typography & Color Deep-Dive Data ─────────── */

const divisionTypography: Record<string, { display: string; displayWeight: string; body: string; bodyWeight: string; mono: string; sizeScale: { role: string; size: string; weight: string; tracking: string; leading: string }[]; rules: string[] }> = {
  'wound-care': {
    display: 'Georgia',
    displayWeight: '400',
    body: 'Alexandria',
    bodyWeight: '300 / 400',
    mono: 'SF Mono',
    sizeScale: [
      { role: 'Section Title', size: '42px', weight: '300', tracking: '-0.02em', leading: '1.1' },
      { role: 'Subsection Head', size: '24px', weight: '400', tracking: '-0.01em', leading: '1.2' },
      { role: 'Body', size: '15px', weight: '300', tracking: '0.005em', leading: '1.85' },
      { role: 'Caption / Label', size: '11px', weight: '400', tracking: '0.12em', leading: '1.4' },
      { role: 'Data / Stats', size: '34px', weight: '300 serif', tracking: '-0.02em', leading: '1.0' },
      { role: 'Monospace (lot #s, codes)', size: '12px', weight: '400', tracking: '0.04em', leading: '1.6' },
    ],
    rules: [
      'Georgia for all headings and display text — conveys clinical gravitas.',
      'Alexandria Light (300) for body copy — approachable but professional.',
      'SF Mono for lot numbers, QC codes, dosing data, and clinical stats.',
      'Labels always uppercase, 0.12em tracking, Alexandria Medium (500).',
      'Never use decorative or condensed faces — clinical credibility depends on typographic restraint.',
      'Minimum body size: 13px. Clinical data tables: 12px mono minimum.',
    ],
  },
  aesthetics: {
    display: 'Georgia',
    displayWeight: '300',
    body: 'Alexandria',
    bodyWeight: '300 / 400',
    mono: 'SF Mono',
    sizeScale: [
      { role: 'Section Title', size: '48px', weight: '300', tracking: '-0.02em', leading: '1.05' },
      { role: 'Subsection Head', size: '24px', weight: '300', tracking: '-0.01em', leading: '1.2' },
      { role: 'Body', size: '15px', weight: '300', tracking: '0.005em', leading: '1.85' },
      { role: 'Caption / Label', size: '11px', weight: '400', tracking: '0.14em', leading: '1.4' },
      { role: 'Product Name', size: '18px', weight: '300 serif', tracking: '-0.01em', leading: '1.2' },
      { role: 'Pull Quote', size: '28px', weight: '300 serif italic', tracking: '-0.01em', leading: '1.3' },
    ],
    rules: [
      'Georgia Light (300) for headings — elegant, premium, never heavy.',
      'Alexandria Light (300) for body. Use 400 only for emphasis, never bold.',
      'Wider letter-spacing on labels (0.14em) to breathe luxury.',
      'Pull quotes use Georgia italic 300 at 28px — the signature Aesthetics type moment.',
      'Never use bold weights in Aesthetics materials — heaviness contradicts the premium tone.',
      'Minimum body size: 14px. Aesthetics demands generous whitespace around text.',
    ],
  },
  'tissue-tech': {
    display: 'Georgia',
    displayWeight: '400',
    body: 'Alexandria',
    bodyWeight: '300 / 400',
    mono: 'SF Mono',
    sizeScale: [
      { role: 'Section Title', size: '36px', weight: '400', tracking: '-0.02em', leading: '1.1' },
      { role: 'Subsection Head', size: '20px', weight: '500', tracking: '0', leading: '1.2' },
      { role: 'Body', size: '14px', weight: '300', tracking: '0.005em', leading: '1.75' },
      { role: 'Caption / Label', size: '10px', weight: '500', tracking: '0.12em', leading: '1.4' },
      { role: 'Data Table Cell', size: '12px', weight: '400 mono', tracking: '0.04em', leading: '1.5' },
      { role: 'Spec Value', size: '28px', weight: '400 mono', tracking: '-0.01em', leading: '1.0' },
    ],
    rules: [
      'Georgia 400 for section titles — slightly heavier than other divisions for scientific authority.',
      'Alexandria Medium (500) for subsection heads — sharper hierarchy than the clinical divisions.',
      'SF Mono used extensively: data tables, spec values, process IDs, temperature readings.',
      'Labels use 500 weight and 0.12em tracking — precision labeling for technical content.',
      'Tighter body line-height (1.75 vs 1.85) to pack more technical content.',
      'Minimum body size: 12px. Data tables: 11px mono allowed for dense specifications.',
    ],
  },
  dermatology: {
    display: 'Georgia',
    displayWeight: '300',
    body: 'Alexandria',
    bodyWeight: '300 / 400',
    mono: 'SF Mono',
    sizeScale: [
      { role: 'Section Title', size: '42px', weight: '300', tracking: '-0.02em', leading: '1.1' },
      { role: 'Subsection Head', size: '24px', weight: '400', tracking: '-0.01em', leading: '1.2' },
      { role: 'Body', size: '15px', weight: '300', tracking: '0.005em', leading: '1.85' },
      { role: 'Caption / Label', size: '11px', weight: '400', tracking: '0.12em', leading: '1.4' },
      { role: 'Patient Callout', size: '22px', weight: '300 serif', tracking: '-0.01em', leading: '1.3' },
      { role: 'Clinical Note', size: '13px', weight: '400', tracking: '0.02em', leading: '1.6' },
    ],
    rules: [
      'Georgia Light (300) for headings — warm authority, not intimidating.',
      'Alexandria Light (300) for body — approachable and patient-friendly.',
      'Patient callouts use Georgia 300 at 22px — warm, reassuring emphasis.',
      'Clinical notes use Alexandria 400 at 13px — bridging medical precision with accessibility.',
      'Warmer typographic tone than Wound Care — dermatology patients are often self-referring.',
      'Minimum body size: 14px. Patient-facing materials: 16px minimum.',
    ],
  },
  international: {
    display: 'Georgia',
    displayWeight: '400',
    body: 'Alexandria',
    bodyWeight: '300 / 400',
    mono: 'SF Mono',
    sizeScale: [
      { role: 'Section Title', size: '42px', weight: '400', tracking: '-0.02em', leading: '1.1' },
      { role: 'Subsection Head', size: '24px', weight: '400', tracking: '-0.01em', leading: '1.2' },
      { role: 'Body', size: '15px', weight: '300', tracking: '0.005em', leading: '1.85' },
      { role: 'Caption / Label', size: '11px', weight: '400', tracking: '0.12em', leading: '1.4' },
      { role: 'Region Header', size: '20px', weight: '500', tracking: '0.02em', leading: '1.2' },
      { role: 'Regulatory Note', size: '12px', weight: '400 mono', tracking: '0.04em', leading: '1.5' },
    ],
    rules: [
      'Georgia 400 for section titles — institutional authority for global audiences.',
      'Alexandria 300/400 for body — excellent Latin + extended character support.',
      'Region headers use Alexandria Medium (500) with wider tracking for cross-language readability.',
      'Regulatory notes in SF Mono — compliance text must be distinct from marketing copy.',
      'All type must work in RTL layouts — test with Arabic and Hebrew before production.',
      'Minimum body size: 15px. Multilingual materials need generous line-height (1.85+).',
    ],
  },
}

const divisionColorPalette: Record<string, { primary: { hex: string; name: string }; secondary: { hex: string; name: string; usage: string }[]; tints: { percent: string; hex: string }[]; semantic: { role: string; hex: string; usage: string }[]; backgrounds: { name: string; hex: string; usage: string }[]; contrast: { pair: string; ratio: string; wcag: string }[] }> = {
  'wound-care': {
    primary: { hex: '#DF512B', name: 'Tiger Orange' },
    secondary: [
      { hex: '#C03227', name: 'Tiger Red', usage: 'Accent on clinical proof stats, urgent callouts' },
      { hex: '#221010', name: 'Tiger Dark', usage: 'Headings, primary text, footer backgrounds' },
      { hex: '#F6F2EB', name: 'Cream', usage: 'Card backgrounds, data table cells' },
    ],
    tints: [
      { percent: '10%', hex: '#FEF0EC' },
      { percent: '25%', hex: '#F9D4CA' },
      { percent: '50%', hex: '#EFA895' },
      { percent: '75%', hex: '#E77C60' },
    ],
    semantic: [
      { role: 'Success', hex: '#16A34A', usage: 'Wound closure confirmed, compliance passed' },
      { role: 'Warning', hex: '#D97706', usage: 'Lot expiring, documentation incomplete' },
      { role: 'Error', hex: '#DC2626', usage: 'Sterility breach, regulatory failure' },
      { role: 'Info', hex: '#2563EB', usage: 'Processing notes, system messages' },
    ],
    backgrounds: [
      { name: 'Page Background', hex: '#FFFEFE', usage: 'Primary page canvas' },
      { name: 'Card Surface', hex: '#F6F2EB', usage: 'Elevated content cards' },
      { name: 'Data Table', hex: '#FFFFFF', usage: 'Clinical data tables' },
      { name: 'Dark Hero', hex: '#221010', usage: 'Section heroes, CTAs' },
    ],
    contrast: [
      { pair: 'Orange on White', ratio: '3.8:1', wcag: 'AA Large' },
      { pair: 'Dark on White', ratio: '16.2:1', wcag: 'AAA' },
      { pair: 'White on Orange', ratio: '3.8:1', wcag: 'AA Large' },
      { pair: 'White on Dark', ratio: '16.2:1', wcag: 'AAA' },
    ],
  },
  aesthetics: {
    primary: { hex: '#D2A62C', name: 'Aesthetic Gold' },
    secondary: [
      { hex: '#F5EDD0', name: 'Gold Light', usage: 'Badge backgrounds, subtle highlights' },
      { hex: '#221010', name: 'Tiger Dark', usage: 'Headings, primary text' },
      { hex: '#F6F2EB', name: 'Cream', usage: 'Premium card surfaces, section backgrounds' },
    ],
    tints: [
      { percent: '10%', hex: '#FBF6E8' },
      { percent: '25%', hex: '#F5EDD0' },
      { percent: '50%', hex: '#E8D396' },
      { percent: '75%', hex: '#DDBC61' },
    ],
    semantic: [
      { role: 'Success', hex: '#16A34A', usage: 'Treatment confirmed, booking complete' },
      { role: 'Warning', hex: '#D97706', usage: 'Appointment reminder, consent pending' },
      { role: 'Error', hex: '#DC2626', usage: 'Scheduling conflict, contraindication' },
      { role: 'Info', hex: '#7C6A2A', usage: 'Gold-toned info to stay on-brand' },
    ],
    backgrounds: [
      { name: 'Page Background', hex: '#FFFEFE', usage: 'Primary page canvas' },
      { name: 'Premium Surface', hex: '#F6F2EB', usage: 'Card surfaces, product showcases' },
      { name: 'Gold Wash', hex: '#FBF6E8', usage: 'Subtle section tinting' },
      { name: 'Dark Hero', hex: '#2C1A11', usage: 'Luxury hero sections' },
    ],
    contrast: [
      { pair: 'Gold on White', ratio: '3.2:1', wcag: 'AA Large' },
      { pair: 'Dark on White', ratio: '16.2:1', wcag: 'AAA' },
      { pair: 'White on Gold', ratio: '3.2:1', wcag: 'AA Large' },
      { pair: 'Dark on Cream', ratio: '13.1:1', wcag: 'AAA' },
    ],
  },
  'tissue-tech': {
    primary: { hex: '#C03227', name: 'Tiger Red' },
    secondary: [
      { hex: '#DF512B', name: 'Tiger Orange', usage: 'Secondary data accents, chart highlights' },
      { hex: '#221010', name: 'Tiger Dark', usage: 'Headings, data labels, table headers' },
      { hex: '#1E1A1A', name: 'Lab Dark', usage: 'Technical hero backgrounds, code blocks' },
    ],
    tints: [
      { percent: '10%', hex: '#FCEAE8' },
      { percent: '25%', hex: '#F2C4BF' },
      { percent: '50%', hex: '#E09993' },
      { percent: '75%', hex: '#D06560' },
    ],
    semantic: [
      { role: 'Success', hex: '#16A34A', usage: 'QC passed, sterility confirmed' },
      { role: 'Warning', hex: '#D97706', usage: 'Temperature deviation, batch expiring' },
      { role: 'Error', hex: '#DC2626', usage: 'Contamination alert, lot recall' },
      { role: 'Info', hex: '#2563EB', usage: 'Processing notes, batch metadata' },
    ],
    backgrounds: [
      { name: 'Page Background', hex: '#FFFEFE', usage: 'Primary page canvas' },
      { name: 'Card Surface', hex: '#F6F2EB', usage: 'Data cards, spec panels' },
      { name: 'Code/Data Block', hex: '#1E1A1A', usage: 'Technical code blocks, dark data tables' },
      { name: 'Grid Lattice', hex: '#221010', usage: 'Technical hero sections with grid overlay' },
    ],
    contrast: [
      { pair: 'Red on White', ratio: '5.6:1', wcag: 'AA' },
      { pair: 'Dark on White', ratio: '16.2:1', wcag: 'AAA' },
      { pair: 'White on Red', ratio: '5.6:1', wcag: 'AA' },
      { pair: 'White on Lab Dark', ratio: '15.8:1', wcag: 'AAA' },
    ],
  },
  dermatology: {
    primary: { hex: '#E8735A', name: 'Coral' },
    secondary: [
      { hex: '#C03227', name: 'Tiger Red', usage: 'Clinical emphasis, urgent indicators' },
      { hex: '#221010', name: 'Tiger Dark', usage: 'Headings, primary text' },
      { hex: '#F6F2EB', name: 'Cream', usage: 'Card backgrounds, patient materials' },
    ],
    tints: [
      { percent: '10%', hex: '#FDF0ED' },
      { percent: '25%', hex: '#F8DACF' },
      { percent: '50%', hex: '#F3B9AD' },
      { percent: '75%', hex: '#ED9684' },
    ],
    semantic: [
      { role: 'Success', hex: '#16A34A', usage: 'Treatment outcome positive, healing on track' },
      { role: 'Warning', hex: '#D97706', usage: 'Follow-up needed, treatment adjustment' },
      { role: 'Error', hex: '#DC2626', usage: 'Adverse reaction, contraindication alert' },
      { role: 'Info', hex: '#2563EB', usage: 'Clinical notes, procedure guidance' },
    ],
    backgrounds: [
      { name: 'Page Background', hex: '#FFFEFE', usage: 'Primary page canvas' },
      { name: 'Patient Surface', hex: '#F6F2EB', usage: 'Warm patient-facing cards' },
      { name: 'Coral Wash', hex: '#FDF0ED', usage: 'Subtle section tinting' },
      { name: 'Clinical Hero', hex: '#3D1F1A', usage: 'Section heroes with coral accent' },
    ],
    contrast: [
      { pair: 'Coral on White', ratio: '3.1:1', wcag: 'AA Large' },
      { pair: 'Dark on White', ratio: '16.2:1', wcag: 'AAA' },
      { pair: 'White on Coral', ratio: '3.1:1', wcag: 'AA Large' },
      { pair: 'White on Clinical Hero', ratio: '13.5:1', wcag: 'AAA' },
    ],
  },
  international: {
    primary: { hex: '#2D5782', name: 'Tiger Blue' },
    secondary: [
      { hex: '#1A3A5C', name: 'Deep Blue', usage: 'Dark hero sections, institutional headers' },
      { hex: '#221010', name: 'Tiger Dark', usage: 'Headings, primary text' },
      { hex: '#F6F2EB', name: 'Cream', usage: 'Card backgrounds, regulatory panels' },
    ],
    tints: [
      { percent: '10%', hex: '#EBF0F5' },
      { percent: '25%', hex: '#CADAE8' },
      { percent: '50%', hex: '#96ABC1' },
      { percent: '75%', hex: '#6181A1' },
    ],
    semantic: [
      { role: 'Success', hex: '#16A34A', usage: 'Regulatory approved, market launched' },
      { role: 'Warning', hex: '#D97706', usage: 'Pending regulatory, documentation needed' },
      { role: 'Error', hex: '#DC2626', usage: 'Regulatory rejection, compliance failure' },
      { role: 'Info', hex: '#2D5782', usage: 'Uses primary blue — info IS the brand in International' },
    ],
    backgrounds: [
      { name: 'Page Background', hex: '#FFFEFE', usage: 'Primary page canvas' },
      { name: 'Card Surface', hex: '#F6F2EB', usage: 'Regional data cards' },
      { name: 'Blue Wash', hex: '#EBF0F5', usage: 'Subtle section tinting' },
      { name: 'Institutional Hero', hex: '#102740', usage: 'Dark hero sections with global authority' },
    ],
    contrast: [
      { pair: 'Blue on White', ratio: '5.9:1', wcag: 'AA' },
      { pair: 'Dark on White', ratio: '16.2:1', wcag: 'AAA' },
      { pair: 'White on Blue', ratio: '5.9:1', wcag: 'AA' },
      { pair: 'White on Deep Blue', ratio: '10.2:1', wcag: 'AAA' },
    ],
  },
}

const divisions = [
  { name: 'Tiger BioSciences', role: 'Parent Company', hex: '#221010', logo: '/assets/tiger/logos/tiger-circle-logo.png' },
  { name: 'Tiger Wound Care', role: 'CAMPs Technology', hex: '#DF512B', logo: '/assets/tiger/logos/tiger_wound_care_logo.png' },
  { name: 'Tiger Aesthetics', role: 'Reconstructive & Cosmetic', hex: '#D2A62C', logo: '/assets/tiger/logos/tiger_aesthetics_logo.webp' },
  { name: 'Tiger Dermatology', role: 'Clinical Skin Science', hex: '#E8735A', logo: '/assets/tiger/logos/tiger-circle-logo.png' },
  { name: 'Tiger International', role: 'Global Market Access', hex: '#2D5782', logo: '/assets/tiger/logos/tiger_international_logo.png' },
]

const toolkitLinks = [
  { title: 'Logo Suite + Clearspace', desc: 'Primary/secondary marks (SVG, PNG) with spacing guidance.', href: 'mailto:brandops@tigerbiosciences.com?subject=Tiger%20Logo%20Suite' },
  { title: 'Color & Type Tokens', desc: 'JSON + ASE palettes and typography tokens for product teams.', href: 'mailto:brandops@tigerbiosciences.com?subject=Tiger%20Tokens' },
  { title: 'Template Library', desc: 'Keynote, Google Slides, and Figma starter files for GTM moments.', href: 'mailto:brandops@tigerbiosciences.com?subject=Tiger%20Templates' },
  { title: 'Photography & B-Roll', desc: 'Clinician, patient, and facility imagery cleared for global usage.', href: 'mailto:brandops@tigerbiosciences.com?subject=Tiger%20Photo%20Library' },
]

const commsRecipes = [
  {
    name: 'Investor Keynote',
    goal: 'Quarterly earnings / fundraises',
    ingredients: ['Use Visual Identity hero with deep orange gradient', 'Show KPI trio (Global reach, Pipeline size, Clinical outcomes)', 'Voice mix: 70% Visionary, 30% Clinical proof'],
  },
  {
    name: 'Provider Outreach Email',
    goal: 'Launch new regenerative therapy',
    ingredients: ['Leadoff photography: Wound Care clinical macro', 'Copy formula: Warm empathy + data stat + CTA', 'Use Wound Care badge + CTA pill in orange'],
  },
  {
    name: 'Global Partner Microsite',
    goal: 'Localize International division story',
    ingredients: ['Blue-led hero with world map overlay', 'Add compliance block (regulatory approvals)', 'Mix International + Parent logos in footer'],
  },
]

const storyBeats = [
  {
    stage: '01',
    title: 'Honor the Gift',
    detail: 'Lead every asset with gratitude for donors and families; anchor on stewardship instead of product-first messaging.',
    proof: 'Pair opening copy with compliance language + donor impact stat.',
  },
  {
    stage: '02',
    title: 'Science in Motion',
    detail: 'Show how proprietary tissue science translates into deployable platforms for clinicians and partners.',
    proof: 'Use one visual of the platform and one KPI/data callout.',
  },
  {
    stage: '03',
    title: 'Human Outcomes',
    detail: 'Close with life-after-care storytelling to keep billion-dollar rigor human-centered.',
    proof: 'Quote clinicians/patients and add next-step CTA.',
  },
]

const qaChecklist = [
  {
    area: 'Layout & Rhythm',
    detail: 'All sections obey the 64px gutter + 8px baseline grid desktop / 24px mobile.',
    action: 'Spot-check paddings, card gutters, and sticky sidebar alignment.',
  },
  {
    area: 'Typography Stack',
    detail: 'Neuropa → logo, Georgia → headings, Inter → body/data, Mono → annotations.',
    action: 'Confirm no rogue weights; keep 300/400 body weights only.',
  },
  {
    area: 'Interaction States',
    detail: 'Buttons, nav, and pills have hover, focus, and active feedback on both light/dark surfaces.',
    action: 'Review CTA contrast (≥4.5:1) and ensure smooth scroll between sections.',
  },
  {
    area: 'Imagery & Color',
    detail: 'Photography leans warm and documentary; division colors never mix on a single module.',
    action: 'Audit hero strips + data cards for correct division color pairing.',
  },
  {
    area: 'Content & Compliance',
    detail: 'Every story includes impact + proof + CTA, plus localized compliance language.',
    action: 'Use content recipes + add regulatory footers where required.',
  },
  {
    area: 'Accessibility & Motion',
    detail: 'Respect prefers-reduced-motion and maintain clear focus states throughout.',
    action: 'Test keyboard nav + confirm reduced-motion mode removes transitions.',
  },
]

const devSetup = [
  { step: 'Install', detail: 'npm install @tigerbio/brand-system', code: 'npm install @tigerbio/brand-system' },
  { step: 'Fonts & Tokens', detail: 'Load Neuropa + Inter and import /tokens/light.css', code: "import '@tigerbio/brand-system/tokens/light.css'" },
  { step: 'Theme Provider', detail: 'Wrap your app with <TigerBrandProvider division="wound-care" />', code: '<TigerBrandProvider division="wound-care">…</TigerBrandProvider>' },
]

const componentStories = [
  { name: 'HeroBanner', desc: 'Layered serif headline + pill CTA', status: 'Ready', controls: ['tone', 'ctaLabel', 'media'] },
  { name: 'EvidenceCard', desc: 'Serif stat + progress bar', status: 'Beta', controls: ['stat', 'unit', 'sampleSize'] },
  { name: 'DivisionBadge', desc: 'Color-coded chip for divisions', status: 'Ready', controls: ['division', 'size'] },
]

const tokenTable = [
  { name: '--color-accent-primary', value: '#DF512B', usage: 'Primary CTA, charts' },
  { name: '--radius-card', value: '12px', usage: 'All cards + modals' },
  { name: '--font-serif-display', value: 'Georgia, 300', usage: 'Headlines 36px+' },
  { name: '--spacing-grid', value: '8px', usage: 'Baseline grid increments' },
]

const woundClinicalStats = [
  { label: 'Diabetic Foot Ulcers', stat: '92%', detail: 'Closure within 10 weeks when treated with caregraFT plus adjunct therapy.' },
  { label: 'Venous Leg Ulcers', stat: '88%', detail: 'Documented epithelialization with dual-layer protocols in multi-center trials.' },
  { label: 'Post-surgical', stat: '96%', detail: 'Reduced readmissions using HealPACK micronized applications.' },
]

const aestheticsLaunchKit = [
  { title: 'Clinic One-Pager', desc: 'Letter-sized sell sheet with before/after photography and compliance copy.' },
  { title: 'Social System', desc: 'Nine-tile grid with luxury captions sourced from the brand voice matrix.' },
  { title: 'Provider Email', desc: 'Text + image module for Mailchimp/Marketo, localized CTAs and footers.' },
]

const tissueProcess = [
  { step: '01 Intake', detail: 'Donor screening and serology review tracked inside TigerTrace platform.' },
  { step: '02 Preservation', detail: 'Cryogenic stabilization following cGMP protocols with redundant QC checkpoints.' },
  { step: '03 QC Release', detail: 'Tri-line QC plus documentation bundle for regulatory filings.' },
  { step: '04 Fulfillment', detail: 'Lot-tracked shipments with temperature telemetry for every delivery.' },
]

const internationalRollouts = [
  { region: 'EU', status: 'In-market', detail: 'CE mark plus FR/DE localized assets live.', quarter: 'Q2 FY26' },
  { region: 'Middle East', status: 'Pilot', detail: 'Distributor training in UAE and KSA with bilingual teams.', quarter: 'Q3 FY26' },
  { region: 'APAC', status: 'Reg pending', detail: 'Clinical dossiers submitted in Singapore and Australia.', quarter: 'Q1 FY27' },
]

const glassPrinciples = [
  { title: 'Human Warmth', desc: 'Keep a warm tint over every glass pane (rgba(255,255,255,0.08) on dark, rgba(34,16,16,0.05) on light).' },
  { title: 'Clinical Precision', desc: 'Border and divider strokes use 1px high-opacity lines so the glass feels engineered, not sci-fi.' },
  { title: 'Depth Hierarchy', desc: 'Use layered blur (12px/24px) to create depth; pair with drop shadows under primary CTAs only.' },
]

const glassSpecs = [
  { label: 'Blur stack', value: 'backdrop-filter: blur(24px) saturate(140%)', usage: 'Hero modals / overlays' },
  { label: 'Tint (dark)', value: 'rgba(255,255,255,0.12)', usage: 'Over photography / dark surfaces' },
  { label: 'Tint (light)', value: 'rgba(34,16,16,0.06)', usage: 'Over cream backgrounds' },
  { label: 'Stroke', value: '1px solid rgba(255,255,255,0.25)', usage: 'Edge highlight' },
  { label: 'Shadow', value: '0 20px 60px rgba(0,0,0,0.18)', usage: 'Primary floating surfaces' },
]

const RESET = `
  @font-face { font-family: 'Neuropa'; src: url('/fonts/tiger/Neuropa-Medium.otf') format('opentype'); font-weight: 500; font-style: normal; font-display: swap; }
  @font-face { font-family: 'Alexandria'; src: url('/fonts/tiger/Alexandria-Light.ttf') format('truetype'); font-weight: 300; font-style: normal; font-display: swap; }
  @font-face { font-family: 'Alexandria'; src: url('/fonts/tiger/Alexandria-Medium.ttf') format('truetype'); font-weight: 500; font-style: normal; font-display: swap; }
  .tbs * { margin: 0; padding: 0; box-sizing: border-box; }
  .tbs { font-family: 'Alexandria', 'Inter', sans-serif; font-weight: 300; color: ${c.dark}; line-height: 1.65; -webkit-font-smoothing: antialiased; letter-spacing: 0.005em; }
  .tbs h1, .tbs h2, .tbs h3, .tbs h4 { font-family: 'Georgia', 'Times New Roman', serif; font-weight: 300; color: ${c.dark}; line-height: 1.1; margin: 0; }
  .tbs p, .tbs span, .tbs li { font-family: 'Alexandria', 'Inter', sans-serif; }
  .tbs ul, .tbs ol { list-style: none; margin: 0; padding: 0; }
  .tbs a { text-decoration: none; color: inherit; }
  .tbs button { font-family: 'Alexandria', 'Inter', sans-serif; border: none; cursor: pointer; background: none; }
  .tbs table { border-collapse: collapse; }
  .tbs ::selection { background: ${c.tigerRed}; color: white; }
  .tbs .nav-btn:hover { background: ${c.n50} !important; }
  .tbs .nav-child:hover { background: ${c.n50} !important; }
  .tbs .sidebar-nav { overflow-y: hidden; }
  .tbs .sidebar-nav:hover { overflow-y: auto; }
  .tbs .section-link:hover { background: ${c.cream} !important; }
  .tbs .pill-btn { transition: opacity 0.3s cubic-bezier(0.32,0.72,0,1), transform 0.3s cubic-bezier(0.32,0.72,0,1); }
  .tbs .pill-btn:hover { opacity: 0.88; transform: translateY(-2px); }
  .tbs .pager-button { transition: transform 0.3s cubic-bezier(0.32,0.72,0,1), box-shadow 0.3s cubic-bezier(0.32,0.72,0,1), background 0.25s cubic-bezier(0.32,0.72,0,1), color 0.25s cubic-bezier(0.32,0.72,0,1); }
  .tbs .pager-button:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
  .tbs .pager-button--prev[data-tone="light"]:hover { background: ${c.n100}; color: ${c.dark}; }
  .tbs .pager-button--prev[data-tone="dark"]:hover { background: rgba(255,255,255,0.12); color: ${c.white}; }
  .tbs .pager-button--next[data-tone="light"]:hover,
  .tbs .pager-button--next[data-tone="dark"]:hover { background: ${c.darkSoft}; color: ${c.white}; }
  .tbs .section-pager { padding: 48px 64px 96px; }
  .tbs .two-col { display: grid; grid-template-columns: 260px 1fr; gap: 56px; }
  .tbs .two-col__sidebar { position: sticky; top: 32px; align-self: flex-start; }
  .tbs .skip-link { position: absolute; left: -999px; top: 12px; background: ${c.dark}; color: ${c.white}; padding: 10px 18px; border-radius: 8px; z-index: 999; text-decoration: none; }
  .tbs .skip-link:focus { left: 16px; }
  .tbs button:focus-visible,
  .tbs a:focus-visible,
  .tbs select:focus-visible { outline: 2px solid ${c.tigerRed}; outline-offset: 3px; }
  .tbs .mobile-nav { display: none; }

  /* ━━━ RESPONSIVE GRIDS ━━━ */
  .tbs .grid-2col { display: grid; grid-template-columns: 1fr 1fr; }
  .tbs .grid-3col { display: grid; grid-template-columns: 1fr 1fr 1fr; }
  .tbs .grid-4col { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; }

  /* ━━━ TABLET: 600px - 1100px ━━━ */
  @media (max-width: 1100px) {
    .tbs .two-col { grid-template-columns: 1fr; gap: 32px; }
    .tbs .two-col__sidebar { position: static; }
    .tbs .grid-2col { grid-template-columns: 1fr; }
    .tbs .grid-3col { grid-template-columns: 1fr 1fr; }
    .tbs .grid-4col { grid-template-columns: 1fr 1fr; }
    [style*="gridTemplateColumns: '1fr 1fr'"] { grid-template-columns: 1fr !important; }
    [style*="gridTemplateColumns: '1fr 1fr 1fr'"] { grid-template-columns: 1fr 1fr !important; }
    [style*="gridTemplateColumns: '1fr 1fr 1fr 1fr'"] { grid-template-columns: 1fr 1fr !important; }
    .tbs aside { width: 200px; }
    .tbs main { margin-left: 200px; }
  }

  /* ━━━ MOBILE: < 768px ━━━ */
  @media (max-width: 768px) {
    .tbs aside { display: none; }
    .tbs main { margin-left: 0 !important; }
    .tbs .two-col { padding-left: 20px !important; padding-right: 20px !important; }
    .tbs .grid-2col { grid-template-columns: 1fr; }
    .tbs .grid-3col { grid-template-columns: 1fr; }
    .tbs .grid-4col { grid-template-columns: 1fr; }
    .tbs .section-pager { padding: 32px 20px 48px; }
    .tbs .mobile-nav { display: block; position: sticky; top: 0; z-index: 190; background: ${c.white}; border-bottom: 1px solid ${c.n200}; padding: 16px 20px; }
    .tbs .mobile-nav label { font-size: 11px; color: ${c.n500}; display: block; margin-bottom: 8px; letter-spacing: 0.12em; text-transform: uppercase; }
    .tbs .mobile-nav select { width: 100%; padding: 12px 14px; border-radius: 8px; border: 1px solid ${c.n200}; font-size: 14px; background: ${c.n50}; font-family: 'Alexandria', 'Inter', sans-serif; }
    [style*="padding: '40px 64px'"] { padding: 24px 20px !important; }
    [style*="padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)'"] { padding: 32px 20px !important; }
    [style*="padding: '80px 64px'"] { padding: 40px 20px !important; }
    [style*="padding: '100px 64px'"] { padding: 48px 20px !important; }
  }

  /* ━━━ SMALL MOBILE: < 480px ━━━ */
  @media (max-width: 480px) {
    .tbs { font-size: 14px; }
    .tbs h1 { font-size: clamp(24px, 7vw, 48px) !important; }
    .tbs h2 { font-size: clamp(20px, 5vw, 36px) !important; }
    .tbs h3 { font-size: clamp(16px, 4vw, 24px) !important; }
    .tbs main { padding: 0; }
    .tbs .section-pager { padding: 24px 16px 36px; }
    [style*="padding: '24px 24px'"] { padding: 16px 16px !important; }
    [style*="padding: '20px 24px'"] { padding: 14px 16px !important; }
    [style*="gridTemplateColumns: '1fr 1fr'"] { grid-template-columns: 1fr !important; }
    [style*="gridTemplateColumns: '1fr 1fr 1fr'"] { grid-template-columns: 1fr !important; }
    [style*="gridTemplateColumns: '1fr 1fr 1fr 1fr'"] { grid-template-columns: 1fr !important; }
  }

`

/* ── Style shorthands (Figma-matched) ──────────────── */
const serif: React.CSSProperties = { fontFamily: "'Georgia', 'Times New Roman', serif", fontWeight: 300 }
const sans: React.CSSProperties = { fontFamily: "'Alexandria', 'Inter', sans-serif", fontWeight: 300 }
const sansMed: React.CSSProperties = { fontFamily: "'Alexandria', 'Inter', sans-serif", fontWeight: 500 }
const sansReg: React.CSSProperties = { fontFamily: "'Alexandria', 'Inter', sans-serif", fontWeight: 400 }
const mono: React.CSSProperties = { fontFamily: "ui-monospace, 'SF Mono', monospace", fontWeight: 400 }

const SIDEBAR_W = 256

/* ── Figma-matched components ──────────────────────── */

function Overline({ children, align = 'center' }: { children: string; align?: 'center' | 'left' }) {
  return <p style={{ ...sansReg, fontSize: 12, letterSpacing: '0.26em', textTransform: 'uppercase', color: c.n400, textAlign: align, marginBottom: 16 }}>{children}</p>
}

function Heading({ children, size = 64, align = 'center', mb = 24 }: { children: React.ReactNode; size?: number; align?: 'center' | 'left'; mb?: number }) {
  return <h2 style={{ ...serif, fontSize: size, lineHeight: 1.08, letterSpacing: '-0.02em', textAlign: align, marginBottom: mb, color: c.dark }}>{children}</h2>
}

function Body({ children, size = 14.6, align = 'center', maxWidth, mb = 0 }: { children: string; size?: number; align?: 'center' | 'left'; maxWidth?: number; mb?: number }) {
  return <p style={{ ...sans, fontSize: size, lineHeight: 1.7, color: c.dark, textAlign: align, maxWidth: maxWidth || undefined, margin: maxWidth ? `0 auto ${mb}px` : `0 0 ${mb}px`, opacity: 0.65 }}>{children}</p>
}

function PillButton({ children, bg = c.white, color = c.dark, arrow }: { children: string; bg?: string; color?: string; arrow?: boolean }) {
  return (
    <span className="pill-btn" style={{ ...sans, fontSize: 13, background: bg, color, borderRadius: 999, padding: '14px 48px', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all 0.2s ease', cursor: 'pointer' }}>
      {children}
      {arrow && <span style={{ fontSize: 14 }}>&rarr;</span>}
    </span>
  )
}

function GlassButton({ children, arrow }: { children: string; arrow?: boolean }) {
  return (
    <span className="pill-btn" style={{
      ...sans, fontSize: 13, color: c.white,
      background: 'rgba(255,255,255,0.15)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.25)',
      borderRadius: 999,
      padding: '14px 48px',
      display: 'inline-flex', alignItems: 'center', gap: 8,
      transition: 'all 0.2s ease', cursor: 'pointer',
    }}>
      {children}
      {arrow && <span style={{ fontSize: 14 }}>&rarr;</span>}
    </span>
  )
}

function ScreenPreview({ src, label, height = 400 }: { src: string; label?: string; height?: number }) {
  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.12)', background: c.bone, position: 'relative', height }}>
      <Image
        src={`${SCREENS}/${src}`}
        alt={label || 'Tiger BioSciences screen'}
        fill
        sizes="(min-width: 1280px) 30vw, 80vw"
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
      {label && (
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 16px 12px', background: 'linear-gradient(transparent, rgba(0,0,0,0.45))' }}>
          <p style={{ ...sans, fontSize: 10, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</p>
        </div>
      )}
    </div>
  )
}

function BlackIcon({ icon }: { icon: string }) {
  return (
    <div style={{ width: 62, height: 62, background: c.dark, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
      <span style={{ fontSize: 24, color: c.white }}>{icon}</span>
    </div>
  )
}

const IMG = '/assets/tiger/photos'
const SCREENS = '/assets/tiger/screens'

/* ── Focal point map — one source of truth for every image crop ── */
const FOCAL: Record<string, string> = {
  'gallery-1.png': 'center',               // baby hand — square, centered
  'gallery-2.png': 'center',               // baby feet in hands — centered subject
  'gallery-3.png': 'center 20%',           // woman face close-up — face in upper portion
  'gallery-4.png': 'center 25%',           // woman clinical — face upper quarter
  'gallery-5.png': 'center 35%',           // black woman relaxing — face in upper third
  'gallery-6.png': 'center 25%',           // redhead portrait (tall) — eyes in upper quarter
  'gallery-7.png': 'center',               // tiger medallion coin — centered object
  'gallery-8.png': 'center 25%',           // diverse women group — faces in upper quarter
  'gallery-9.png': 'center 30%',           // lab scientists — faces in upper third
  'gallery-10.png': 'center 30%',          // woman looking down — face upper third
  'gallery-11.png': 'center',              // baby feet — centered subject
  'hero-banner-1.png': 'center 35%',       // tiger face — eyes in upper third
  'hero-banner-2.png': 'center 40%',       // tiger in nature — head centered
  'hero-tiger-1.png': 'center 35%',        // tiger head — eyes upper third
  'hero-tiger-2.png': 'center 35%',        // tiger side profile — eye upper third
  'beauty-1.png': 'center 30%',            // blonde beauty shot — face upper third
  'portrait-1.png': 'center 40%',          // tiger side close-up (tall) — eye at 40%
  'vertical-1.png': 'center',              // tissue macro on black — centered
  'thumbnail-1.png': 'center 35%',         // glass implants — product centered
  'product-bellafill-new.png': 'center 30%', // woman lips close-up (tall) — face upper
  'product-sientra.png': 'center 35%',     // woman in bra (tall) — chest at center
  'product-aveli-new.png': 'center 40%',   // woman legs (tall) — thigh at center
  'product-viality.png': 'center 30%',     // body torso — centered
  'product-alloclae.png': 'center 30%',    // face close-up — face upper third
  'product-amplifine-new.png': 'center',   // device on green — centered product
  'product-amplifine.png': 'center',       // amplifine product — centered
  'product-breast-expanders.png': 'center 25%', // woman smiling (tall) — face upper quarter
  'product-bellafill.png': 'center',       // syringe product — centered
  'product-aveli.png': 'center',           // legs product — centered
  'bellafill-hero.png': 'center 30%',      // face beauty — face upper third
  'aesthetics-face.png': 'center 30%',     // face close-up — face upper third
  'aesthetics-breast.png': 'center 30%',   // woman in bra (tall) — chest area
  'aesthetics-body.png': 'center 30%',     // body shot — centered
}

function getFocal(src: string): string {
  const filename = src.split('/').pop() || ''
  return FOCAL[filename] || 'center'
}

function Photo({ src, h = 400, label, round, cover = true }: { src: string; h?: number; label?: string; round?: boolean; cover?: boolean }) {
  return (
    <div style={{ height: h, borderRadius: round ? 999 : 12, overflow: 'hidden', position: 'relative', background: c.bone }}>
      <Image
        src={`${IMG}/${src}`}
        alt={label || 'Tiger BioSciences photography'}
        fill
        sizes="(min-width: 1280px) 25vw, 80vw"
        style={{ objectFit: cover ? 'cover' : 'contain', objectPosition: getFocal(src) }}
      />
      {label && (
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 16px 12px', background: 'linear-gradient(transparent, rgba(0,0,0,0.5))' }}>
          <p style={{ ...sans, fontSize: 10, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</p>
        </div>
      )}
    </div>
  )
}

function FillImageBlock({
  src,
  alt,
  style,
  objectFit = 'cover',
  objectPosition,
  sizes = '(min-width: 1280px) 25vw, 90vw',
  priority,
}: {
  src: string
  alt: string
  style?: React.CSSProperties
  objectFit?: 'cover' | 'contain'
  objectPosition?: string
  sizes?: string
  priority?: boolean
}) {
  const pos = objectPosition || getFocal(src)
  return (
    <div style={{ position: 'relative', ...style }}>
      <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit, objectPosition: pos }} priority={priority} />
    </div>
  )
}

const BRAND_PALETTE = [
  { name: 'Wound Care', hex: '#DF512B' },
  { name: 'Aesthetics', hex: '#D2A62C' },
  { name: 'Dermatology', hex: '#E8735A' },
  { name: 'International', hex: '#2D5782' },
  { name: 'Dark', hex: '#221010' },
]

function BrandPaletteBar() {
  return (
    <div style={{ borderTop: `1px solid ${c.bone}`, padding: '32px clamp(20px, 5vw, 64px) 48px' }}>
      <p style={{ ...mono, fontSize: 10, color: c.n400, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Brand Palette</p>
      <div style={{ display: 'flex', gap: 12 }}>
        {BRAND_PALETTE.map((swatch) => (
          <div
            key={swatch.hex}
            style={{ flex: 1, cursor: 'pointer' }}
            onClick={() => navigator.clipboard.writeText(swatch.hex)}
            title={`Copy ${swatch.hex}`}
          >
            <div style={{ height: 48, borderRadius: 8, background: swatch.hex, marginBottom: 8, transition: 'opacity 0.15s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')} />
            <p style={{ ...sansMed, fontSize: 10, color: c.dark }}>{swatch.name}</p>
            <p style={{ ...mono, fontSize: 9, color: c.n400, marginTop: 2 }}>{swatch.hex}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre style={{ background: c.dark, color: c.goldLight, borderRadius: 12, padding: '20px 24px', fontSize: 12, lineHeight: 1.6, overflowX: 'auto' }}>
      <code>{code}</code>
    </pre>
  )
}

const divisionHeroConfig: Record<string, { photo: string; photoPosition: string; logo?: string }> = {
  'wound-care': { photo: `${IMG}/hero-banner-1.png`, photoPosition: 'center', logo: '/assets/tiger/logos/wound-care/secondary/horizontal-white.png' },
  aesthetics: { photo: `${IMG}/beauty-1.png`, photoPosition: 'center 30%', logo: '/assets/tiger/logos/biosciences/secondary/horizontal-white.png' },
  'tissue-tech': { photo: `${IMG}/gallery-1.png`, photoPosition: 'center', logo: '/assets/tiger/logos/biosciences/secondary/horizontal-white.png' },
  dermatology: { photo: `${IMG}/gallery-4.png`, photoPosition: 'center 30%', logo: '/assets/tiger/logos/biosciences/secondary/horizontal-white.png' },
  international: { photo: `${IMG}/gallery-10.png`, photoPosition: 'center 30%', logo: '/assets/tiger/logos/international/secondary/horizontal-neuropa.png' },
}

function DivisionHero({ divKey, div, onBack }: { divKey: string; div: (typeof divisionData)[keyof typeof divisionData]; onBack: () => void }) {
  const hero = divisionHeroConfig[divKey] || divisionHeroConfig['wound-care']
  const productCount = Array.isArray(div.products) ? div.products.length : 0
  const audienceCount = Array.isArray(div.audiences) ? div.audiences.length : 0

  return (
    <div style={{ position: 'relative', minHeight: 520, overflow: 'hidden' }}>
      {/* Background photo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src={hero.photo} alt={`${div.fullName} hero`} fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: hero.photoPosition }} priority />
        {/* Color overlay */}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${div.hex}ee 0%, ${div.hex}cc 40%, ${div.hex}88 70%, transparent 100%)` }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.5) 100%)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: 'clamp(32px, 5vw, 64px)' }}>
        {/* Back link */}
        <button
          onClick={onBack}
          style={{ ...sansReg, fontSize: 11, color: 'rgba(255,255,255,0.7)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 48, display: 'flex', alignItems: 'center', gap: 6 }}
        >
          &larr; Divisions
        </button>

        {/* Logo mark */}
        {hero.logo && (
          <div style={{ marginBottom: 32, opacity: 0.9 }}>
            <Image src={hero.logo} alt={`${div.fullName} logo`} width={180} height={40} style={{ objectFit: 'contain', objectPosition: 'left', filter: 'brightness(0) invert(1)' }} />
          </div>
        )}

        {/* Division name */}
        <h1 style={{ ...serif, fontSize: 'clamp(48px, 8vw, 72px)', color: c.white, lineHeight: 1.0, marginBottom: 16, letterSpacing: '-0.03em' }}>
          {div.name}
        </h1>

        {/* Tagline */}
        <p style={{ ...sans, fontSize: 'clamp(16px, 2vw, 20px)', color: 'rgba(255,255,255,0.85)', maxWidth: 600, lineHeight: 1.65, marginBottom: 48 }}>
          {div.tagline}
        </p>

        {/* Stat pills */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', borderRadius: 12, padding: '16px 24px', border: '1px solid rgba(255,255,255,0.15)' }}>
            <p style={{ ...mono, fontSize: 28, color: c.white, lineHeight: 1 }}>{productCount}</p>
            <p style={{ ...sansReg, fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6 }}>Products</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', borderRadius: 12, padding: '16px 24px', border: '1px solid rgba(255,255,255,0.15)' }}>
            <p style={{ ...mono, fontSize: 28, color: c.white, lineHeight: 1 }}>{audienceCount}</p>
            <p style={{ ...sansReg, fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6 }}>Audiences</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', borderRadius: 12, padding: '16px 24px', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: div.hex, border: '2px solid rgba(255,255,255,0.3)' }} />
            <p style={{ ...mono, fontSize: 11, color: 'rgba(255,255,255,0.8)', marginTop: 6 }}>{div.hex}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function DivisionTypographySection({ typo, divHex, description }: { typo: typeof divisionTypography[string]; divHex: string; description: string }) {
  return (
    <div style={{ padding: '56px 0' }}>
      <TwoCol left={<><SubHead>Division Typography</SubHead><SubBody>{description}</SubBody></>}>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
            <div style={{ background: c.cream, borderRadius: 12, padding: '20px 20px', border: `1px solid ${c.bone}` }}>
              <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 8 }}>Display</p>
              <p style={{ ...serif, fontSize: 24, color: c.dark }}>{typo.display}</p>
              <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 4 }}>Weight {typo.displayWeight}</p>
            </div>
            <div style={{ background: c.cream, borderRadius: 12, padding: '20px 20px', border: `1px solid ${c.bone}` }}>
              <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 8 }}>Body</p>
              <p style={{ ...sans, fontSize: 24, color: c.dark }}>{typo.body}</p>
              <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 4 }}>Weight {typo.bodyWeight}</p>
            </div>
            <div style={{ background: c.cream, borderRadius: 12, padding: '20px 20px', border: `1px solid ${c.bone}` }}>
              <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 8 }}>Mono</p>
              <p style={{ ...mono, fontSize: 20, color: c.dark }}>{typo.mono}</p>
              <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 4 }}>Data &amp; codes</p>
            </div>
          </div>
          <div style={{ background: c.white, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.linen}`, marginBottom: 24 }}>
            <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 16 }}>Size Scale</p>
            <div style={{ display: 'grid', gridTemplateColumns: '140px 60px 100px 80px 60px', gap: 8, padding: '8px 0', borderBottom: `1px solid ${c.n200}` }}>
              <span style={{ ...sansMed, fontSize: 10, color: c.n400, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Role</span>
              <span style={{ ...sansMed, fontSize: 10, color: c.n400, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Size</span>
              <span style={{ ...sansMed, fontSize: 10, color: c.n400, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Weight</span>
              <span style={{ ...sansMed, fontSize: 10, color: c.n400, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Track</span>
              <span style={{ ...sansMed, fontSize: 10, color: c.n400, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Lead</span>
            </div>
            {typo.sizeScale.map((row) => (
              <div key={row.role} style={{ display: 'grid', gridTemplateColumns: '140px 60px 100px 80px 60px', gap: 8, padding: '10px 0', borderBottom: `1px solid ${c.bone}`, alignItems: 'center' }}>
                <span style={{ ...sansMed, fontSize: 12, color: c.dark }}>{row.role}</span>
                <span style={{ ...mono, fontSize: 11, color: c.n600 }}>{row.size}</span>
                <span style={{ ...mono, fontSize: 11, color: c.n500 }}>{row.weight}</span>
                <span style={{ ...mono, fontSize: 11, color: c.n500 }}>{row.tracking}</span>
                <span style={{ ...mono, fontSize: 11, color: c.n500 }}>{row.leading}</span>
              </div>
            ))}
          </div>
          <div style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
            <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 12 }}>Rules</p>
            {typo.rules.map((rule) => (
              <div key={rule} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <span style={{ ...sans, fontSize: 12, color: divHex, flexShrink: 0 }}>&#x2022;</span>
                <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </TwoCol>
    </div>
  )
}

function DivisionColorPaletteSection({ palette, description }: { palette: typeof divisionColorPalette[string]; description: string }) {
  return (
    <div style={{ padding: '56px 0' }}>
      <TwoCol left={<><SubHead>Color Palette</SubHead><SubBody>{description}</SubBody></>}>
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginBottom: 24 }}>
            <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${c.linen}` }}>
              <div style={{ background: palette.primary.hex, height: 80 }} />
              <div style={{ padding: '12px 16px', background: c.white }}>
                <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{palette.primary.name}</p>
                <p style={{ ...mono, fontSize: 11, color: c.n500 }}>{palette.primary.hex}</p>
              </div>
            </div>
            {palette.secondary.map((s) => (
              <div key={s.hex} style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${c.linen}` }}>
                <div style={{ background: s.hex, height: 80 }} />
                <div style={{ padding: '12px 16px', background: c.white }}>
                  <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{s.name}</p>
                  <p style={{ ...mono, fontSize: 11, color: c.n500 }}>{s.hex}</p>
                  <p style={{ ...sans, fontSize: 10, color: c.n400, marginTop: 4 }}>{s.usage}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: c.white, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.linen}`, marginBottom: 24 }}>
            <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 16 }}>Tint Scale</p>
            <div style={{ display: 'flex', gap: 8 }}>
              {palette.tints.map((t) => (
                <div key={t.percent} style={{ flex: 1 }}>
                  <div style={{ background: t.hex, height: 48, borderRadius: 8, border: `1px solid ${c.bone}` }} />
                  <p style={{ ...mono, fontSize: 10, color: c.n500, marginTop: 6, textAlign: 'center' }}>{t.percent}</p>
                  <p style={{ ...mono, fontSize: 9, color: c.n400, textAlign: 'center' }}>{t.hex}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: c.white, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.linen}`, marginBottom: 24 }}>
            <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 16 }}>Semantic Colors</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
              {palette.semantic.map((s) => (
                <div key={s.role} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: s.hex, flexShrink: 0 }} />
                  <div>
                    <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{s.role}</p>
                    <p style={{ ...sans, fontSize: 10, color: c.n500, lineHeight: 1.5 }}>{s.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: c.white, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.linen}`, marginBottom: 24 }}>
            <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 16 }}>Background System</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
              {palette.backgrounds.map((bg) => (
                <div key={bg.name}>
                  <div style={{ background: bg.hex, height: 48, borderRadius: 8, border: `1px solid ${c.bone}` }} />
                  <p style={{ ...sansMed, fontSize: 11, color: c.dark, marginTop: 8 }}>{bg.name}</p>
                  <p style={{ ...mono, fontSize: 10, color: c.n500 }}>{bg.hex}</p>
                  <p style={{ ...sans, fontSize: 10, color: c.n400 }}>{bg.usage}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
            <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 12 }}>WCAG Contrast Ratios</p>
            {palette.contrast.map((ct) => (
              <div key={ct.pair} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px', gap: 8, padding: '8px 0', borderBottom: `1px solid ${c.bone}` }}>
                <span style={{ ...sans, fontSize: 12, color: c.dark }}>{ct.pair}</span>
                <span style={{ ...mono, fontSize: 11, color: c.n600 }}>{ct.ratio}</span>
                <span style={{ ...sansMed, fontSize: 11, color: ct.wcag === 'AAA' ? '#16A34A' : '#D97706' }}>{ct.wcag}</span>
              </div>
            ))}
          </div>
        </div>
      </TwoCol>
    </div>
  )
}

function ControlChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <span style={{
      ...sansReg,
      fontSize: 11,
      padding: '6px 14px',
      borderRadius: 999,
      border: `1px solid ${active ? c.tigerRed : c.n300}`,
      background: active ? 'rgba(192,50,39,0.12)' : c.white,
      color: active ? c.tigerRed : c.n500,
    }}>
      {label}
    </span>
  )
}

function PropRow({ label, type, defaultValue }: { label: string; type: string; defaultValue: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr 120px', padding: '10px 0', borderBottom: `1px solid ${c.n200}` }}>
      <span style={{ ...sansMed, fontSize: 12, color: c.dark }}>{label}</span>
      <span style={{ ...mono, fontSize: 11, color: c.n500 }}>{type}</span>
      <span style={{ ...sans, fontSize: 11, color: c.n500 }}>{defaultValue}</span>
    </div>
  )
}


function MobileNav({ active, onNavigate }: { active: string; onNavigate: (id: string) => void }) {
  return (
    <div className="mobile-nav">
      <label htmlFor="mobile-section-select">Navigate Guide</label>
      <select
        id="mobile-section-select"
        value={active}
        onChange={(event) => onNavigate(event.target.value)}
        aria-label="Navigate sections"
      >
        {sections.map((section) => (
          <option key={section.id} value={section.id}>{`${section.num} — ${section.label}`}</option>
        ))}
      </select>
    </div>
  )
}

/* ── Section header (Honda-style, enhanced) ──────────── */
function SectionHeader({ num, title, parentLabel, onBack }: { num: string; title: string; parentLabel?: string; onBack?: () => void }) {
  return (
    <div style={{ padding: 'clamp(24px, 5vw, 40px) clamp(20px, 5vw, 64px) 0', marginBottom: 'clamp(12px, 2vw, 20px)' }}>
      {parentLabel && onBack && (
        <button onClick={onBack} style={{ ...sansReg, fontSize: 'clamp(10px, 2vw, 11px)', color: c.n400, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', background: 'none', border: 'none', marginBottom: 20, padding: 0, transition: 'color 0.25s cubic-bezier(0.32,0.72,0,1)' }}>
          <span style={{ fontSize: 'clamp(11px, 2vw, 12px)' }}>&larr;</span> {parentLabel}
        </button>
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(10px, 2vw, 16px)' }}>
        <div style={{ width: 3, height: 'clamp(32px, 4vw, 44px)', background: c.tigerRed, borderRadius: 2, flexShrink: 0, marginTop: 4 }} />
        <div style={{ minWidth: 0 }}>
          <p style={{ ...mono, fontSize: 'clamp(9px, 2vw, 10px)', color: c.tigerRed, marginBottom: 6, letterSpacing: '0.18em', textTransform: 'uppercase' }}>{num}</p>
          <h2 style={{ ...serif, fontSize: 'clamp(26px, 6vw, 42px)', color: c.dark, lineHeight: 1.05, letterSpacing: '-0.015em' }}>{title}</h2>
        </div>
      </div>
      <div style={{ height: 1, background: c.n200, marginTop: 'clamp(20px, 4vw, 28px)' }} />
    </div>
  )
}

/* ── Two-column layout helper ──────────────────────── */
function TwoCol({ left, children, pb = 56 }: { left: React.ReactNode; children: React.ReactNode; pb?: number }) {
  return (
    <div className="two-col" style={{ padding: `0 clamp(20px, 5vw, 64px) clamp(40px, 8vw, ${pb}px)` }}>
      <div className="two-col__sidebar">{left}</div>
      <div>{children}</div>
    </div>
  )
}

function SubHead({ children, mb = 8 }: { children: string; mb?: number }) {
  return <h3 style={{ ...serif, fontSize: 'clamp(18px, 4vw, 22px)', color: c.dark, marginBottom: mb, lineHeight: 1.1 }}>{children}</h3>
}

function SubBody({ children }: { children: string }) {
  return <p style={{ ...sans, fontSize: 'clamp(12px, 2.5vw, 13px)', color: c.n500, lineHeight: 1.7 }}>{children}</p>
}

function Separator() {
  return <div style={{ height: 1, background: c.n200, margin: '0 clamp(20px, 5vw, 64px)' }} />
}

/* ── Navigation link row ──────────────────────────── */
function NavRow({ num, label, desc, onClick }: { num: string; label: string; desc?: string; onClick: () => void }) {
  return (
    <button type="button" className="section-link" onClick={onClick} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '20px 24px', borderRadius: 10, cursor: 'pointer', background: 'none', border: 'none', transition: 'background 0.15s ease', marginBottom: 4 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ ...mono, fontSize: 12, color: c.tigerRed, width: 36 }}>{num}</span>
        <div style={{ textAlign: 'left' }}>
          <span style={{ ...sansReg, fontSize: 15, color: c.dark }}>{label}</span>
          {desc && <p style={{ ...sans, fontSize: 12, color: c.n400, marginTop: 2 }}>{desc}</p>}
        </div>
      </div>
      <span style={{ ...sans, fontSize: 18, color: c.n300 }}>&rarr;</span>
    </button>
  )
}

function SectionPager({ currentId, onNavigate, surface = `linear-gradient(180deg, ${c.cream} 0%, ${c.sand} 100%)`, tone = 'light' }: { currentId: string; onNavigate: (id: string) => void; surface?: string; tone?: 'light' | 'dark' }) {
  const index = sections.findIndex((s) => s.id === currentId)
  if (index === -1) return null

  const prev = sections[index - 1]
  const next = sections[index + 1]
  if (!prev && !next) return null

  const total = sections.length
  const positionLabel = `Section ${index + 1} of ${total}`
  const isDarkTone = tone === 'dark'
  const dividerColor = isDarkTone ? 'rgba(255,255,255,0.18)' : c.n200
  const helperColor = isDarkTone ? 'rgba(255,255,255,0.72)' : c.n500
  const positionColor = isDarkTone ? 'rgba(255,255,255,0.6)' : c.n400

  const baseButton: React.CSSProperties = {
    borderRadius: 14,
    padding: '20px 24px',
    border: `1px solid ${isDarkTone ? 'rgba(255,255,255,0.24)' : c.n200}`,
    background: isDarkTone ? 'rgba(255,255,255,0.04)' : c.white,
    color: isDarkTone ? c.white : c.dark,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    flex: 1,
    minWidth: 240,
    cursor: 'pointer',
  }

  const hintStyle: React.CSSProperties = { ...mono, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase' as const }

  const prevHintColor = isDarkTone ? 'rgba(255,255,255,0.7)' : c.n400
  const prevMetaColor = isDarkTone ? 'rgba(255,255,255,0.65)' : c.n500
  const prevLabelColor = isDarkTone ? c.white : c.dark
  const nextHintColor = isDarkTone ? 'rgba(34,16,16,0.6)' : 'rgba(255,255,255,0.7)'
  const nextMetaColor = isDarkTone ? 'rgba(34,16,16,0.55)' : 'rgba(255,255,255,0.7)'
  const nextLabelColor = isDarkTone ? c.dark : c.white

  return (
    <div className="section-pager" style={{ background: surface, marginTop: 32, position: 'sticky', bottom: 0, zIndex: 40 }}>
      <div role="navigation" aria-label="Section pagination" style={{ borderTop: `1px solid ${dividerColor}`, paddingTop: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
          <p style={{ ...sansMed, fontSize: 13, color: helperColor, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Continue Exploring</p>
          <p style={{ ...mono, fontSize: 11, color: positionColor }}>{positionLabel}</p>
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {prev && (
            <button
              onClick={() => onNavigate(prev.id)}
              type="button"
              style={{
                ...baseButton,
                textAlign: 'left',
                alignItems: 'flex-start',
                background: isDarkTone ? c.white : c.cream,
                borderColor: isDarkTone ? c.white : c.n200,
                color: prevLabelColor,
              }}
              className="pager-button pager-button--prev"
              data-tone={tone}
              aria-label={`Go to previous section: ${prev.label}`}
            >
              <span style={{ ...hintStyle, color: isDarkTone ? c.n400 : c.n400 }}>Previous</span>
              <span style={{ ...sansReg, fontSize: 18, color: prevLabelColor }}>{prev.label}</span>
              <span style={{ ...sans, fontSize: 13, color: isDarkTone ? c.n500 : c.n500 }}>{prev.num}</span>
            </button>
          )}

          {next && (
            <button
              onClick={() => onNavigate(next.id)}
              type="button"
              style={{
                ...baseButton,
                textAlign: 'right',
                alignItems: 'flex-end',
                marginLeft: prev ? 'auto' : 0,
                background: isDarkTone ? c.white : c.dark,
                borderColor: isDarkTone ? c.white : c.dark,
                color: nextLabelColor,
              }}
              className="pager-button pager-button--next"
              data-tone={tone}
              aria-label={`Go to next section: ${next.label}`}
            >
              <span style={{ ...hintStyle, color: nextHintColor }}>Next</span>
              <span style={{ ...sansReg, fontSize: 18, color: nextLabelColor }}>{next.label}</span>
              <span style={{ ...sans, fontSize: 13, color: nextMetaColor }}>{next.num} &rarr;</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────── */

export default function TigerBrandSystem({ initialSection = 'brand-visual' }: { initialSection?: string } = {}) {
  const router = useRouter(); const searchParams = useSearchParams()
  const [active, setActive] = useState(initialSection)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const SIDEBAR_COLLAPSED_W = 48

  useEffect(() => {
    if (searchParams?.get('s')) {
      setActive(searchParams?.get('s') as string)
    }
  }, [searchParams])

  // Redirect parent sections without dedicated content to their overview child
  useEffect(() => {
    if (active === 'brand-visual') {
      router.push('/style?s=foundations')
    }
  }, [active, router])

  const current = sections.find((s) => s.id === active)!
  const isTop = topLevel.some((t) => t.id === active)
  const parentSection = isTop ? current : topLevel.find((t) => t.id === current.parent)!
  const sectionClassName = undefined

  function navigate(id: string) {
    router.push(`/style?s=${id}`)
    if (typeof window !== 'undefined') {
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, behavior: 'auto' })
      }
    }
  }

  return (
    <>

      <div className="tbs" style={{ display: 'flex', minHeight: '100vh', background: c.white, overflow: 'hidden', maxWidth: '100vw' }}>
        <a className="skip-link" href="#brand-main">Skip to main content</a>

        {/* ━━━ SIDEBAR ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <aside style={{ width: sidebarCollapsed ? SIDEBAR_COLLAPSED_W : SIDEBAR_W, flexShrink: 0, position: 'fixed', top: 0, left: 0, height: '100vh', borderRight: `1px solid ${c.n200}`, background: c.white, display: 'flex', flexDirection: 'column', zIndex: 200, transition: 'width 0.25s cubic-bezier(0.32,0.72,0,1)', overflow: 'hidden' }}>
          {/* Header row: wordmark + collapse toggle */}
          <div style={{ display: 'flex', alignItems: 'center', borderBottom: `1px solid ${c.n200}`, minHeight: 64, flexShrink: 0 }}>
            {!sidebarCollapsed && (
              <button
                onClick={() => navigate('cover')}
                style={{ flex: 1, padding: '22px 20px 18px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'opacity 0.2s', overflow: 'hidden' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                aria-label="Go to cover page"
              >
                <p style={{ fontFamily: "'Neuropa', sans-serif", fontWeight: 500, fontSize: 14, color: c.dark, letterSpacing: '-0.01em', lineHeight: 1.2, whiteSpace: 'nowrap' }}>Tiger BioSciences<sup style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 500, fontSize: 6 }}>&trade;</sup></p>
                <p style={{ ...sansReg, fontSize: 9, color: c.n400, lineHeight: 1.2, marginTop: 5, letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Visual Brand System</p>
              </button>
            )}
            <button
              onClick={() => setSidebarCollapsed((v) => !v)}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              style={{ width: SIDEBAR_COLLAPSED_W, height: 64, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', color: c.n400, transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = c.dark)}
              onMouseLeave={(e) => (e.currentTarget.style.color = c.n400)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: sidebarCollapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s cubic-bezier(0.32,0.72,0,1)' }}>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          </div>

          {/* Nav */}
          <nav role="navigation" aria-label="Section navigation" className="sidebar-nav" style={{ flex: 1, padding: '16px 12px', opacity: sidebarCollapsed ? 0 : 1, pointerEvents: sidebarCollapsed ? 'none' : 'auto', transition: 'opacity 0.15s' }}>
            {topLevel.filter((top) => top.id !== 'cover').map((top) => {
              const kids = childrenOf(top.id)
              const isActiveParent = parentSection.id === top.id
              const showChildren = true
              return (
                <div key={top.id} style={{ marginBottom: 4 }}>
                  <button
                    className="nav-btn"
                    onClick={() => navigate(top.id)}
                    aria-current={active === top.id ? 'page' : undefined}
                    style={{
                      ...sansMed, fontSize: 13,
                      color: isActiveParent ? c.dark : c.n600,
                      fontWeight: isActiveParent ? 600 : 500,
                      padding: '12px 16px',
                      display: 'block', width: '100%', textAlign: 'left',
                      cursor: 'pointer', background: active === top.id ? c.n50 : 'none',
                      border: 'none', borderRadius: 6,
                      transition: 'all 0.25s cubic-bezier(0.32,0.72,0,1)',
                      overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {top.label}
                  </button>
                  {showChildren && (
                    <div style={{ marginTop: 2, marginBottom: 4, marginLeft: 20, borderLeft: `1px solid ${c.n200}`, paddingLeft: 0 }}>
                      {kids.map((kid) => {
                        const isKidActive = active === kid.id
                        return (
                          <button
                            key={kid.id}
                            className="nav-child"
                            onClick={() => navigate(kid.id)}
                            aria-current={isKidActive ? 'page' : undefined}
                            style={{
                              ...sans, fontSize: 11,
                              padding: '8px 12px 8px 16px',
                              display: 'block', width: '100%', textAlign: 'left',
                              color: isKidActive ? c.dark : c.n500,
                              fontWeight: isKidActive ? 400 : 300,
                              cursor: 'pointer', background: isKidActive ? c.n50 : 'none',
                              border: 'none', borderRadius: '0 6px 6px 0',
                              borderLeft: `2px solid ${isKidActive ? c.tigerRed : 'transparent'}`,
                              marginLeft: -1,
                              transition: 'all 0.25s cubic-bezier(0.32,0.72,0,1)',
                              opacity: isKidActive ? 1 : 0.65,
                            }}
                          >
                            {kid.label}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Footer */}
          {!sidebarCollapsed && (
            <div style={{ padding: '12px 20px', borderTop: `1px solid ${c.n200}`, flexShrink: 0 }}>
              <p style={{ ...sansReg, fontSize: 9, color: c.n400, letterSpacing: '0.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Confidential · Internal Use</p>
            </div>
          )}
        </aside>

        {/* ━━━ MAIN CONTENT ━━━━━━━━━━━━━━━━━━━━━━━ */}
        <main id="brand-main" style={{ marginLeft: sidebarCollapsed ? SIDEBAR_COLLAPSED_W : SIDEBAR_W, flex: 1, height: '100vh', overflowY: 'auto', overflowX: 'hidden', transition: 'margin-left 0.25s cubic-bezier(0.32,0.72,0,1)' }}>
          <MobileNav active={active} onNavigate={navigate} />

          {/* ══════════════════════════════════════════
              COVER PAGE
              ══════════════════════════════════════════ */}
          {active === 'cover' && <>
            <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

              {/* Full-bleed tiger photo */}
              <Image
                src={`${IMG}/hero-tiger-2.png`}
                alt="Tiger BioSciences"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: '72% center' }}
                priority
              />

              {/* Deep cinematic overlay — dark at top and bottom, clear in middle */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(22,10,8,0.82) 0%, rgba(22,10,8,0.25) 40%, rgba(22,10,8,0.20) 60%, rgba(22,10,8,0.88) 100%)', zIndex: 1 }} />

              {/* Top bar */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: 'clamp(28px,3.5vw,48px) clamp(32px,4vw,60px)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 999, padding: '7px 16px', backdropFilter: 'blur(12px)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: c.tigerRed }} />
                  <span style={{ ...mono, fontSize: 9, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Version 2.0 · FY 2026</span>
                </div>
              </div>

              {/* Bottom editorial block */}
              <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(32px,4vw,56px) clamp(32px,4vw,60px) clamp(36px,4.5vw,60px)' }}>

                {/* Division color strip */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 28 }}>
                  {[c.orange, c.tigerRed, '#9B6B47', c.blue].map((hex, i) => (
                    <div key={i} style={{ height: 2, width: 32, background: hex, borderRadius: 1 }} />
                  ))}
                </div>

                <h1 style={{ ...serif, fontSize: 'clamp(48px, 7vw, 108px)', color: c.white, lineHeight: 0.9, letterSpacing: '-0.03em', fontWeight: 300, marginBottom: 28 }}>Visual<br/>Brand<br/>System</h1>

                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
                  <p style={{ ...sans, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 380 }}>
                    Complete design language — strategy, visual identity,<br/>components &amp; governance for Tiger BioSciences.
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
                    {/* Division index */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                      {[
                        { hex: c.orange, name: 'Wound Care' },
                        { hex: c.tigerRed, name: 'Aesthetics' },
                        { hex: '#9B6B47', name: 'Tissue Technology' },
                        { hex: c.blue, name: 'International' },
                      ].map((div, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                          <div style={{ width: 8, height: 2, background: div.hex, borderRadius: 1, flexShrink: 0 }} />
                          <span style={{ ...sansReg, fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>{div.name}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => navigate('brand-strategy')}
                      style={{ background: c.white, color: c.dark, border: 'none', padding: '16px 38px', borderRadius: 999, fontSize: 11, fontWeight: 500, cursor: 'pointer', fontFamily: "'Alexandria', 'Inter', sans-serif", letterSpacing: '0.12em', textTransform: 'uppercase', transition: 'transform 0.35s cubic-bezier(0.32,0.72,0,1), box-shadow 0.35s cubic-bezier(0.32,0.72,0,1)', whiteSpace: 'nowrap' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.4)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ''; (e.currentTarget as HTMLButtonElement).style.boxShadow = ''; }}
                    >Explore 44 Sections</button>
                  </div>
                </div>
              </div>

            </div>
          </>}

          {/* ══════════════════════════════════════════
              00 BRAND STRATEGY — Strategic foundation
              ══════════════════════════════════════════ */}
          {active === 'brand-strategy' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="00" title="Brand Strategy" onBack={() => navigate('cover')} />
              <FillImageBlock src={`${IMG}/hero-tiger-1.png`} alt="Tiger BioSciences brand" style={{ height: 420 }} objectPosition="center 35%" sizes="100vw" priority />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>
                    Tiger BioSciences operates from a clear strategic foundation. This section documents the why, who, and how that anchors all downstream decisions—from messaging to product design to clinical communication.
                  </p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Strategic Pillars</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <div>
                        <p style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 8 }}>Mission</p>
                        <p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>Enable regenerative care for patients globally through proprietary tissue science and trusted clinical partnerships.</p>
                      </div>
                      <div>
                        <p style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 8 }}>Vision</p>
                        <p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>Regenerative medicine as standard of care across wound, aesthetic, and specialty markets.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BrandPaletteBar />
            </div>
          </>}

          {active === 'mission' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="00-1" title="Mission & Vision" parentLabel="Brand Strategy" onBack={() => navigate('brand-strategy')} />
              <FillImageBlock src={`${IMG}/gallery-1.png`} alt="The gift of donation" style={{ height: 420 }} objectPosition="center" sizes="100vw" priority />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Tiger exists because patients deserve better healing outcomes. Our mission is the actionable north star; our vision is the future we're building toward. Every product, partner decision, and clinical claim traces back to these commitments.</p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Strategic Foundation</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <div><p style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 8 }}>Mission</p><p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>Enable regenerative care for patients globally through proprietary tissue science and trusted clinical partnerships.</p><p style={{ ...sans, fontSize: 12, color: c.n500, marginTop: 8 }}>↳ The work we do every day</p></div>
                      <div><p style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 8 }}>Vision</p><p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>Regenerative medicine becomes standard of care across wound, aesthetic, and specialty markets globally.</p><p style={{ ...sans, fontSize: 12, color: c.n500, marginTop: 8 }}>↳ The world we're building</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Strategic Anchors</SubHead><SubBody>Core elements that guide Tiger's purpose and execution.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{label: 'Enable', detail: 'Empower clinicians with tools, evidence, and partnerships that expand treatment possibilities.'}, {label: 'Regenerative', detail: 'Tissue-based science that harnesses the body\'s natural healing capacity.'}, {label: 'Global', detail: 'Scalable ambition to reach patients and providers across all major markets.'}, {label: 'Proprietary', detail: 'Defensible intellectual property that sustains innovation and competitive advantage.'}].map((item) => (<div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.label}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
              <div style={{ padding: '0 0 56px' }}>
                <TwoCol left={<><SubHead>The Science Behind the Mission</SubHead><SubBody>Tissue stewardship and regenerative innovation at the core of everything Tiger builds.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <Photo src="gallery-9.png" h={280} label="Lab innovation" />
                    <Photo src="gallery-11.png" h={280} label="Patient outcomes" />
                  </div>
                </TwoCol>
              </div>
              <BrandPaletteBar />
            </div>
          </>}

          {active === 'positioning' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="00-2" title="Market Positioning" parentLabel="Brand Strategy" onBack={() => navigate('brand-strategy')} />
              <FillImageBlock src={`${IMG}/hero-banner-2.png`} alt="Tiger in its element" style={{ height: 420 }} objectPosition="center 40%" sizes="100vw" priority />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Tiger owns the regenerative + clinical partnership space. While competitors race toward synthetic matrices, DTC channels, or single-indication products, Tiger stands apart: proprietary tissue science, peer-reviewed clinical outcomes, clinician-led education, and five interconnected divisions serving wound, aesthetic, dermatology, tissue tech, and international markets.</p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Competitive Advantages</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <div><p style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 8 }}>Regenerative vs. Synthetic</p><p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>Tiger uses proprietary tissue science. Competitors use synthetic matrices or dermal fillers. Tissue-based = longer-lasting outcomes and lower adverse events.</p></div>
                      <div><p style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 8 }}>Clinician-Led vs. DTC</p><p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>Tiger empowers clinicians. Competitors chase DTC channels. We invest in clinical evidence and provider training, not marketing spend.</p></div>
                      <div><p style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 8 }}>Portfolio Breadth</p><p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>Five interconnected divisions (Wound, Aesthetics, Dermatology, Tissue Tech, International). Competitors are single-indication players.</p></div>
                      <div><p style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 8 }}>Donor Stewardship</p><p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>Every product honors the gift. Competitors commodify. We lead with gratitude in every asset.</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Market Positioning</SubHead><SubBody>How we talk about Tiger in competitive context.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{label: 'Science-Backed', detail: 'Proprietary tissue science with peer-reviewed clinical outcomes'}, {label: 'Clinician Partner', detail: 'We empower healthcare providers, not bypass them'}, {label: 'Multi-Market', detail: 'One platform across wound, aesthetics, and specialty care'}, {label: 'Donor-Honored', detail: 'Every product respects the gift that makes healing possible'}].map((item) => (<div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.label}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
              <div style={{ padding: '0 0 56px' }}>
                <TwoCol left={<><SubHead>Our Platform in Practice</SubHead><SubBody>Five divisions, one unified brand voice across every touchpoint.</SubBody></>}>
                  <ScreenPreview src="/assets/tiger/screens/our-vision.png" label="Tiger digital ecosystem" height={340} />
                </TwoCol>
              </div>
              <BrandPaletteBar />
            </div>
          </>}

          {active === 'personality' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="00-4" title="Brand Personality" parentLabel="Brand Strategy" onBack={() => navigate('brand-strategy')} />
              <FillImageBlock src={`${IMG}/hero-tiger-2.png`} alt="Tiger character and strength" style={{ height: 420 }} objectPosition="center 35%" sizes="100vw" priority />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Tiger embodies two complementary archetypes that shape every communication, design decision, and customer interaction. The Healer brings empathy and patient focus. The Pioneer brings innovation and scientific rigor. Together, they define a brand that heals with integrity.</p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Core Archetypes</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <div><p style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 8 }}>The Healer</p><p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>Empathetic. Patient-centric. Transparent. Evidence-based. We exist to serve patients and clinicians with compassion and unwavering commitment to healing outcomes.</p></div>
                      <div><p style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 8 }}>The Pioneer</p><p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>Visionary. Scientific rigor. Forward-thinking. Boundary-pushing. We innovate without compromising—advancing regenerative science that others only imagine.</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Personality Traits</SubHead><SubBody>How Tiger shows up in voice, tone, and behavior.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{trait: 'Warm + Clinical', detail: 'Do: "Healing starts with respect for the gift." Don\'t: "Buy our filler." Blend empathy with evidence-first messaging.'}, {trait: 'Optimistic Realist', detail: 'Do: "92% closure rates, supported by peer review." Don\'t: "Cure-all solution." Celebrate wins; stay honest about complexity.'}, {trait: 'Expert Advocate', detail: 'Do: Educate clinicians with CE credits. Don\'t: Bypass providers or oversell. Lead with knowledge, not ego.'}, {trait: 'Donor-Honored', detail: 'Do: Open every narrative with gratitude. Don\'t: Commodify the gift. Every product story leads with stewardship.'}].map((item) => (<div key={item.trait} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.trait}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
              <div style={{ padding: '0 0 56px' }}>
                <TwoCol left={<><SubHead>The Brand in Feeling</SubHead><SubBody>Healer and Pioneer — warmth and science in equal measure.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <Photo src="gallery-3.png" h={320} label="The Healer" />
                    <Photo src="beauty-1.png" h={320} label="The Pioneer" />
                  </div>
                </TwoCol>
              </div>
              <BrandPaletteBar />
            </div>
          </>}


          {/* ══════════════════════════════════════════
              03 DESIGN SYSTEM
              ══════════════════════════════════════════ */}
          {active === 'design-system' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="03" title="Design System" onBack={() => navigate('brand-strategy')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>A living system of reusable components, spacing rules, and interaction patterns that ensure every digital touchpoint feels coherent, responsive, and accessible.</p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Core Elements</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Grid & Layout</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Responsive 12-column grid, breakpoints, and container rules</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Spacing Scale</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>8px-based scale from 4px to 96px with semantic naming</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Components</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Buttons, inputs, cards, modals, and composite patterns</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Interaction Patterns</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Hover states, focus indicators, and state transitions</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Implementation Principles</SubHead><SubBody>Design system pillars that guide every component and pattern.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{label: 'Consistency', detail: 'Every component follows the same spacing, sizing, and interaction rules across all products.'}, {label: 'Accessibility First', detail: 'Color contrast, keyboard navigation, and semantic HTML are non-negotiable.'}, {label: 'Performance', detail: 'Lightweight components, minimal dependencies, fast load times across all devices.'}, {label: 'Extensibility', detail: 'New components integrate seamlessly; spacing, color, and interaction patterns scale predictably.'}].map((item) => (<div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.label}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'grid-layout' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="03-1" title="Grid & Layout" parentLabel="Design System" onBack={() => navigate('design-system')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>A responsive 12-column grid ensures visual consistency across devices. Mobile gets 4 columns, tablet 8, and desktop 12. Every layout starts by defining breakpoints first—this ensures responsive behavior scales predictably.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>Responsive Grid</SubHead><SubBody>12-column layout with consistent spacing and breakpoints.</SubBody></>}>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '40px' }}>
                    <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 24 }}>Breakpoints</p>
                    {[
                      { name: 'Mobile', width: '< 640px', cols: '4 columns', padding: '16px' },
                      { name: 'Tablet', width: '640px – 1024px', cols: '8 columns', padding: '32px' },
                      { name: 'Desktop', width: '≥ 1024px', cols: '12 columns', padding: '64px' },
                    ].map((bp, i) => (
                      <div key={bp.name} style={{ paddingBottom: 20, borderBottom: i === 2 ? 'none' : `1px solid ${c.bone}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                          <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{bp.name}</p>
                          <p style={{ ...mono, fontSize: 10, color: c.n400 }}>{bp.width}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <p style={{ ...sans, fontSize: 11, color: c.n500 }}>Columns: {bp.cols}</p>
                          <p style={{ ...sans, fontSize: 11, color: c.n500 }}>Padding: {bp.padding}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'spacing' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="03-2" title="Spacing Scale" parentLabel="Design System" onBack={() => navigate('design-system')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>An 8px-based spacing scale that ensures consistent margins, padding, and gaps across all components. Semantic naming helps teams communicate intent clearly.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>8px-Based Scale</SubHead><SubBody>Consistent spacing for margins, padding, and gaps.</SubBody></>}>
                  <div>
                    {[
                      { name: '2xs', value: '4px', use: 'Tight input borders, minimal gaps' },
                      { name: 'xs', value: '8px', use: 'Icon padding, small component spacing' },
                      { name: 'sm', value: '12px', use: 'Button padding, chip spacing' },
                      { name: 'md', value: '16px', use: 'Card padding, section gutters' },
                      { name: 'lg', value: '24px', use: 'Block spacing, content padding' },
                      { name: 'xl', value: '32px', use: 'Section spacing, modal padding' },
                      { name: '2xl', value: '48px', use: 'Major section breaks' },
                      { name: '3xl', value: '64px', use: 'Page-level padding, hero sections' },
                      { name: '4xl', value: '96px', use: 'Top-level section separation' },
                    ].map((s, i) => (
                      <div key={s.name} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: i === 8 ? 'none' : `1px solid ${c.bone}` }}>
                        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                          <div style={{ width: 120 }}>
                            <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 4 }}>{s.name}</p>
                            <p style={{ ...mono, fontSize: 10, color: c.tigerRed }}>{s.value}</p>
                          </div>
                          <div style={{ flex: 1 }}>
                            <p style={{ ...sans, fontSize: 11, color: c.n500 }}>{s.use}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'components' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="03-3" title="Components" parentLabel="Design System" onBack={() => navigate('design-system')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Components are pre-built, tested building blocks for Tiger interfaces. Using components (rather than recreating from scratch) ensures consistency, speeds development, and guarantees accessibility compliance. Each component shows its states, size specifications, and when to use it.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>Component Inventory</SubHead><SubBody>Each component is atomic or composite. Atomic components (buttons, inputs) stand alone. Composite components (modals, cards) combine atomics. All components support multiple states without recreating elements.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    {[
                      { name: 'Buttons', states: 'Primary, secondary, ghost, disabled', role: 'Call-to-action, navigation, form submission' },
                      { name: 'Input Fields', states: 'Default, focused, error, success', role: 'Form data collection, search' },
                      { name: 'Cards', states: 'Idle, hover, active', role: 'Content containers, product displays' },
                      { name: 'Modals', states: 'Open, loading, error', role: 'Critical actions, confirmations' },
                      { name: 'Badges', states: 'Default, success, warning, error', role: 'Status indicators, labels' },
                      { name: 'Tooltips', states: 'Visible, hidden', role: 'Contextual help, abbreviation expansion' },
                    ].map((comp) => (
                      <div key={comp.name} style={{ background: c.linen, borderRadius: 12, padding: '20px 24px' }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 8 }}>{comp.name}</p>
                        <p style={{ ...sans, fontSize: 10, color: c.n500, marginBottom: 8 }}><strong>States:</strong> {comp.states}</p>
                        <p style={{ ...sans, fontSize: 10, color: c.n500 }}><strong>Role:</strong> {comp.role}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'interactions' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="03-4" title="Interaction Patterns" parentLabel="Design System" onBack={() => navigate('design-system')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Every interactive element must respond consistently to user input. Define states for all interactions: hover (visual feedback), focus (keyboard navigation), active (engaged), loading (in-progress), error (what went wrong), and success (task complete). Predictable behavior builds trust and accessibility.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>Interaction States</SubHead><SubBody>How elements respond to user input and system state.</SubBody></>}>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '40px' }}>
                    <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 24 }}>State Patterns</p>
                    {[
                      { state: 'Default', description: 'Initial state; clear affordance; ready for interaction' },
                      { state: 'Hover', description: 'Cursor over interactive element; elevation or color shift' },
                      { state: 'Focus', description: '2px outline; keyboard navigation; visible on all inputs' },
                      { state: 'Active/Pressed', description: 'Button or link engaged; color shift to indicate press' },
                      { state: 'Loading', description: 'Spinner or skeleton; disable interaction; clear feedback' },
                      { state: 'Disabled', description: 'Reduced opacity (50%); no cursor change; no interaction' },
                      { state: 'Error', description: 'Red border/text; helper message; maintain focus' },
                      { state: 'Success', description: 'Green indicator; icon checkmark; temporary display' },
                    ].map((s, i) => (
                      <div key={s.state} style={{ paddingBottom: 20, borderBottom: i === 7 ? 'none' : `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 6 }}>{s.state}</p>
                        <p style={{ ...sans, fontSize: 11, color: c.n500 }}>{s.description}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'motion' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="03-5" title="Motion System" parentLabel="Design System" onBack={() => navigate('design-system')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Motion is a tool, not decoration. Use animation to guide attention (where to look), provide feedback (is this working?), and smooth state transitions. Every motion must serve a purpose and respect user preferences for reduced motion. Tiger motion is fast and clear—no floaty, slow transitions.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>Animation & Transitions</SubHead><SubBody>Purposeful motion that guides attention and feedback.</SubBody></>}>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '40px' }}>
                    <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 24 }}>Motion Principles</p>
                    {[
                      { principle: 'Duration', spec: '150ms micro-interactions, 300ms standard, 500ms modal/overlay', rationale: 'Fast enough to feel snappy; slow enough for clarity' },
                      { principle: 'Easing', spec: 'ease-out for appearance; ease-in for exit', rationale: 'Matches natural deceleration and acceleration' },
                      { principle: 'Sequence', spec: 'Stagger child animations by 50ms', rationale: 'Draws eye; prevents visual chaos' },
                      { principle: 'Accessibility', spec: 'Respect prefers-reduced-motion', rationale: 'No motion for users sensitive to animation' },
                    ].map((m, i) => (
                      <div key={m.principle} style={{ marginBottom: 24, paddingBottom: 24, borderBottom: i === 3 ? 'none' : `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 6 }}>{m.principle}</p>
                        <p style={{ ...mono, fontSize: 10, color: c.tigerRed, marginBottom: 6 }}>{m.spec}</p>
                        <p style={{ ...sans, fontSize: 11, color: c.n500 }}>{m.rationale}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {/* ══════════════════════════════════════════
              04 CONTENT SYSTEM
              ══════════════════════════════════════════ */}
          {active === 'content-system' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="04" title="Content System" onBack={() => navigate('brand-strategy')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Consistent, clear, and human microcopy that reflects Tiger's voice and empowers users to take action with confidence.</p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Content Pillars</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>Hierarchy</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>Page structure, heading levels, reading order</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>Microcopy</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>Buttons, labels, helper text, placeholders</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>Error Handling</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>Friendly, actionable error states</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Voice & Tone Principles</SubHead><SubBody>How content serves Tiger's brand promise across every interaction.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{label: 'Clarity First', detail: 'Users should understand intent and next action in under 5 seconds. Jargon erodes trust.'}, {label: 'Human Not Robotic', detail: 'Warm, conversational language. We write for people, not machines. Contractions and directness encouraged.'}, {label: 'Action-Oriented', detail: 'Every button, link, and form field empowers users to move forward with confidence.'}, {label: 'Humble Authority', detail: 'We lead with expertise but stay accessible. Never condescending; always respectful of user intelligence.'}].map((item) => (<div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.label}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'content-hierarchy' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="04-1" title="Content Hierarchy" parentLabel="Content System" onBack={() => navigate('content-system')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Clear heading levels and content structure guide readers through complex information. Consistent hierarchy supports both fast scanning and deep reading.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>Clear Information Architecture</SubHead><SubBody>Structured content that guides users through decision-making.</SubBody></>}>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '40px' }}>
                    <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 24 }}>Hierarchy Levels</p>
                    {[
                      { level: 'H1 Page Title', example: 'Wound Care Solutions', use: 'One per page; sets context' },
                      { level: 'H2 Section', example: 'Product Overview', use: 'Major content sections' },
                      { level: 'H3 Subsection', example: 'Key Features', use: 'Sub-topics within sections' },
                      { level: 'Body Text', example: 'Learn more...', use: 'Descriptive paragraphs' },
                    ].map((h, i) => (
                      <div key={h.level} style={{ paddingBottom: 20, borderBottom: i === 3 ? 'none' : `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 6 }}>{h.level}</p>
                        <p style={{ ...serif, fontSize: 14, color: c.tigerRed, marginBottom: 6 }}>{h.example}</p>
                        <p style={{ ...sans, fontSize: 11, color: c.n500 }}>Use: {h.use}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'microcopy' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="04-2" title="Microcopy & Labels" parentLabel="Content System" onBack={() => navigate('content-system')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Small copy matters. Button labels, form placeholders, and helper text must be clear, action-oriented, and consistent across all applications.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>Voice & Tone in Small Moments</SubHead><SubBody>Every label, button, and placeholder should feel natural and empowering.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    {[
                      { context: 'Button Labels', examples: ['Schedule a consultation', 'Get started', 'Learn more'], avoid: 'Submit, OK, Click here' },
                      { context: 'Form Labels', examples: ['What is your role?', 'Healthcare provider or patient?', 'Your facility name'], avoid: 'Name, email, other' },
                      { context: 'Placeholder Text', examples: ['name@facility.edu', 'e.g., Wound care specialist', 'Search products'], avoid: 'Enter email, type here' },
                      { context: 'Helper Text', examples: ['We send updates 1x per month', 'Secure, encrypted transmission', 'Mobile-optimized format'], avoid: 'Required, optional' },
                    ].map((m) => (
                      <div key={m.context} style={{ background: c.linen, borderRadius: 12, padding: '20px 24px' }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 12 }}>{m.context}</p>
                        <p style={{ ...sans, fontSize: 10, color: c.n500, marginBottom: 8 }}><strong>Use:</strong></p>
                        {m.examples.map((ex) => <p key={ex} style={{ ...sans, fontSize: 11, color: c.dark, marginBottom: 4 }}>• {ex}</p>)}
                        <p style={{ ...sans, fontSize: 10, color: c.n500, marginTop: 8, marginBottom: 2 }}><strong>Avoid:</strong></p>
                        <p style={{ ...sans, fontSize: 10, color: c.tigerRed }}>{m.avoid}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'error-messages' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="04-3" title="Error Messages" parentLabel="Content System" onBack={() => navigate('content-system')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Errors are conversations, not roadblocks. Clear, empathetic error messages guide users toward resolution and maintain trust.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>Graceful Error Handling</SubHead><SubBody>Errors are conversations, not roadblocks. Guide users toward resolution.</SubBody></>}>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '40px' }}>
                    <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 24 }}>Error Message Framework</p>
                    {[
                      { layer: '1. Identify', example: 'Missing required field: "Your role"', note: 'Be specific about what went wrong' },
                      { layer: '2. Explain', example: 'We need to know if you\'re a provider or patient', note: 'Why does this matter?' },
                      { layer: '3. Resolve', example: 'Select one option above to continue', note: 'Tell users how to fix it' },
                      { layer: '4. Tone', example: 'Friendly, supportive, never blaming', note: 'No "error", "invalid", "failed"' },
                    ].map((e, i) => (
                      <div key={e.layer} style={{ paddingBottom: 20, borderBottom: i === 3 ? 'none' : `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 6 }}>{e.layer}</p>
                        <p style={{ ...serif, fontSize: 13, color: c.tigerRed, marginBottom: 6 }}>"{e.example}"</p>
                        <p style={{ ...sans, fontSize: 11, color: c.n500 }}>{e.note}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {/* ══════════════════════════════════════════
              05 ACCESSIBILITY
              ══════════════════════════════════════════ */}
          {active === 'accessibility' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="05" title="Accessibility" onBack={() => navigate('brand-strategy')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Tiger's brand is accessible by default. Every design decision—color, motion, layout—respects WCAG 2.1 AA standards and users with disabilities.</p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Accessibility Standards</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>WCAG Compliance</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>Level AA: Perceivable, operable, understandable</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>Color Contrast</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>4.5:1 text, 3:1 graphics minimum</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>Motion Respect</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>Prefers-reduced-motion honored</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Inclusive Design Commitment</SubHead><SubBody>Accessibility is a quality pillar, not an afterthought.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{label: 'Perceivable', detail: 'All images have alt text; no information conveyed by color alone; captions on video.'}, {label: 'Operable', detail: 'Full keyboard navigation, visible focus indicators, no keyboard traps, 44px+ targets.'}, {label: 'Understandable', detail: 'Clear language, labeled inputs, consistent navigation, readable font sizing.'}, {label: 'Robust', detail: 'Valid HTML, semantic markup, ARIA where needed, screen reader compatible.'}].map((item) => (<div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.label}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'wcag-targets' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="05-1" title="WCAG Compliance" parentLabel="Accessibility" onBack={() => navigate('accessibility')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Tiger meets WCAG 2.1 Level AA standards across all dimensions: perceivable, operable, understandable, and robust. This ensures accessibility for users with visual, auditory, motor, and cognitive disabilities.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>WCAG 2.1 Level AA</SubHead><SubBody>Accessible to users with visual, auditory, motor, and cognitive disabilities.</SubBody></>}>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '40px' }}>
                    <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 24 }}>Key Targets</p>
                    {[
                      { criterion: 'Perceivable', detail: 'All images have alt text; no info conveyed by color alone; captions on video' },
                      { criterion: 'Operable', detail: 'Keyboard navigation, focus visible, no keyboard traps; target min 44px' },
                      { criterion: 'Understandable', detail: 'Clear language, labels on inputs, consistent navigation' },
                      { criterion: 'Robust', detail: 'Valid HTML, semantic markup, screen reader compatible' },
                    ].map((criterion, i) => (
                      <div key={criterion.criterion} style={{ paddingBottom: 20, borderBottom: i === 3 ? 'none' : `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 6 }}>{criterion.criterion}</p>
                        <p style={{ ...sans, fontSize: 11, color: c.n500 }}>{criterion.detail}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'color-contrast' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="05-2" title="Color Contrast" parentLabel="Accessibility" onBack={() => navigate('accessibility')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Every color pair is tested against WCAG AA standards (4.5:1 minimum for text, 3:1 for graphics). This ensures legibility for users with low vision and color blindness.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>Contrast Ratios</SubHead><SubBody>Every color pair tested against WCAG AA minimums.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    {[
                      { pair: 'Dark + White', ratio: '14.2:1', level: 'AAA', use: 'Headlines, critical text' },
                      { pair: 'Dark + Linen', ratio: '6.8:1', level: 'AA', use: 'Body text, secondary copy' },
                      { pair: 'Tiger Red + White', ratio: '4.5:1', level: 'AA', use: 'Links, highlights, CTAs' },
                      { pair: 'N500 + White', ratio: '4.0:1', level: 'AA-', use: 'Avoid for body text' },
                      { pair: 'Orange + White', ratio: '3.2:1', level: 'Graphics', use: 'Division accents (graphics only)' },
                      { pair: 'Blue + White', ratio: '2.8:1', level: 'Graphics', use: 'International accent (graphics only)' },
                    ].map((pair) => (
                      <div key={pair.pair} style={{ background: c.linen, borderRadius: 12, padding: '20px 24px' }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 8 }}>{pair.pair}</p>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'baseline', marginBottom: 8 }}>
                          <p style={{ ...mono, fontSize: 11, color: c.tigerRed, fontWeight: 600 }}>{pair.ratio}</p>
                          <p style={{ ...sans, fontSize: 10, color: c.n500 }}>({pair.level})</p>
                        </div>
                        <p style={{ ...sans, fontSize: 10, color: c.n600 }}>Use: {pair.use}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'motion-limits' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="05-3" title="Motion & Animation" parentLabel="Accessibility" onBack={() => navigate('accessibility')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>All motion respects the <code>prefers-reduced-motion</code> media query. No strobing, rapid flashing, or excessive movement that could trigger vestibular or cognitive issues.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>Motion Safety</SubHead><SubBody>Respect vestibular and motion sensitivities; support prefers-reduced-motion.</SubBody></>}>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '40px' }}>
                    <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 24 }}>Motion Guidelines</p>
                    {[
                      { guideline: 'Respect prefers-reduced-motion', description: '@media (prefers-reduced-motion: reduce) { animation: none; transition: none; }' },
                      { guideline: 'Avoid parallax & scroll effects', description: 'Can trigger vestibular symptoms; avoid 3D rotations and excessive movement' },
                      { guideline: 'No autoplaying video with sound', description: 'User must initiate; mute by default if autoplay is necessary' },
                      { guideline: 'No flashing or strobing', description: 'Avoid more than 3 flashes per second; no red flashing (seizure risk)' },
                      { guideline: 'Movement < 500ms', description: 'Keep animations quick; avoid slow drags that disorient' },
                    ].map((m, i) => (
                      <div key={m.guideline} style={{ paddingBottom: 20, borderBottom: i === 4 ? 'none' : `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 6 }}>{m.guideline}</p>
                        <p style={{ ...mono, fontSize: 10, color: c.n500 }}>{m.description}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {/* ══════════════════════════════════════════
              06 GOVERNANCE
              ══════════════════════════════════════════ */}
          {active === 'governance' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="06" title="Governance" onBack={() => navigate('brand-strategy')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>How the brand system evolves. Clear approval workflows, versioning practices, and contribution guidelines ensure consistency as Tiger grows.</p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Governance Framework</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>Approval</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>Review and sign-off process</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>Versioning</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>Semantic releases and changelog</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>Contribution</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>Submitting changes and new patterns</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>System Stewardship</SubHead><SubBody>Structured processes that keep the brand system healthy and evolving.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{label: 'Transparency', detail: 'All changes documented in changelog. Deprecation warnings provided 2 releases in advance.'}, {label: 'Accountability', detail: 'Every update assigned to an owner with clear rationale. Review cycle ensures cross-team alignment.'}, {label: 'Scalability', detail: 'Process scales from single-component fixes to full system overhauls. Lightweight for small changes.'}, {label: 'Communication', detail: 'Updates announced in advance. Training provided for breaking changes. Team stays informed.'}].map((item) => (<div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.label}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'approval-workflow' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="06-1" title="Approval Workflow" parentLabel="Governance" onBack={() => navigate('governance')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>A six-stage review process ensures all brand system changes maintain consistency and quality. Clear ownership and timelines prevent bottlenecks.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>Change Management</SubHead><SubBody>Structured review ensures brand integrity across all updates.</SubBody></>}>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '40px' }}>
                    <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 24 }}>Approval Stages</p>
                    {[
                      { stage: 'Proposal', owner: 'Contributor', action: 'Submit design brief + rationale + examples' },
                      { stage: 'Review', owner: 'Design Lead + Product', action: 'Assess impact, consistency, implementation cost' },
                      { stage: 'Feedback', owner: 'Stakeholders', action: 'Comments due within 5 days; iterate if needed' },
                      { stage: 'Approval', owner: 'Brand Owner', action: 'Final sign-off; schedule rollout' },
                      { stage: 'Deployment', owner: 'Engineering', action: 'Update documentation, assets, and codebase' },
                      { stage: 'Announcement', owner: 'Marketing', action: 'Communicate change to team and partners' },
                    ].map((s, i) => (
                      <div key={s.stage} style={{ paddingBottom: 20, borderBottom: i === 5 ? 'none' : `1px solid ${c.bone}` }}>
                        <div style={{ display: 'flex', gap: 16, marginBottom: 6 }}>
                          <p style={{ ...sansMed, fontSize: 12, color: c.dark, minWidth: 100 }}>{s.stage}</p>
                          <p style={{ ...sans, fontSize: 11, color: c.tigerRed }}>({s.owner})</p>
                        </div>
                        <p style={{ ...sans, fontSize: 11, color: c.n500 }}>{s.action}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'versioning' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="06-2" title="Versioning" parentLabel="Governance" onBack={() => navigate('governance')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Semantic versioning (major.minor.patch) with detailed changelogs helps teams understand what changed and when. Deprecation warnings provide advance notice of breaking changes.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>Semantic Versioning</SubHead><SubBody>Clear version numbers and changelogs help teams stay synchronized.</SubBody></>}>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '40px' }}>
                    <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 24 }}>Version Format: MAJOR.MINOR.PATCH</p>
                    {[
                      { bump: 'MAJOR (2.0.0)', change: 'Breaking changes, significant brand direction shift', example: 'Logo redesign, typography system overhaul' },
                      { bump: 'MINOR (1.1.0)', change: 'New features, non-breaking additions', example: 'New color added to palette, new component' },
                      { bump: 'PATCH (1.0.1)', change: 'Bug fixes, clarity improvements, no visual change', example: 'Contrast ratio fix, typo in documentation' },
                    ].map((v, i) => (
                      <div key={v.bump} style={{ paddingBottom: 20, borderBottom: i === 2 ? 'none' : `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 6 }}>{v.bump}</p>
                        <p style={{ ...sans, fontSize: 11, color: c.n600, marginBottom: 6 }}>{v.change}</p>
                        <p style={{ ...mono, fontSize: 10, color: c.tigerRed }}>Example: {v.example}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {active === 'contribution' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="06-3" title="Contribution Model" parentLabel="Governance" onBack={() => navigate('governance')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Everyone can contribute—bug reports, feature proposals, new components, or documentation updates. Follow clear submission workflows to get improvements approved and merged.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <TwoCol left={<><SubHead>How to Contribute</SubHead><SubBody>Everyone can propose improvements. Follow the workflow to get them approved.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    {[
                      { type: 'Bug Report', who: 'Designers, Engineers, Users', how: 'Open GitHub issue with example (screenshot or video)' },
                      { type: 'Feature Proposal', who: 'Designers, Product', how: 'Submit brief with problem, solution, and impact' },
                      { type: 'Component Request', who: 'Teams', how: 'Document use case; Design Lead reviews and schedules' },
                      { type: 'Documentation Update', who: 'Everyone', how: 'PR to repo with context in commit message' },
                    ].map((item) => (
                      <div key={item.type} style={{ background: c.linen, borderRadius: 12, padding: '20px 24px' }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 8 }}>{item.type}</p>
                        <p style={{ ...sans, fontSize: 10, color: c.n500, marginBottom: 6 }}><strong>Who:</strong> {item.who}</p>
                        <p style={{ ...sans, fontSize: 10, color: c.n600 }}><strong>How:</strong> {item.how}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {/* ══════════════════════════════════════════
              02 OVERVIEW — Brand guide intro (MOVED FROM 01)
              ══════════════════════════════════════════ */}

          {/* ══════════════════════════════════════════
              02 VISUAL IDENTITY — overview
              ══════════════════════════════════════════ */}

          {/* ══════════════════════════════════════════
              07 APPLICATION — overview
              ══════════════════════════════════════════ */}
          {active === 'application' && <>
            <div className={sectionClassName}>
            <div style={{ background: c.dark, padding: '80px 64px 64px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)' }} />
              <div style={{ position: 'relative' }}>
                <p style={{ ...mono, fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>07</p>
                <h1 style={{ ...serif, fontSize: 60, color: c.white, lineHeight: 1.05, letterSpacing: '-0.02em' }}>Application</h1>
                <p style={{ ...sans, fontSize: 15, color: 'rgba(255,255,255,0.55)', maxWidth: 480, marginTop: 20, lineHeight: 1.8 }}>
                  Components, product presentation, and usage rules.
                </p>
              </div>
            </div>
            <div style={{ background: c.sand, padding: '48px 64px 64px' }}>
              {/* Preview cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 48 }}>
                <div style={{ background: c.cream, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                    <span style={{ ...sans, fontSize: 11, background: c.white, borderRadius: 999, padding: '6px 16px', color: c.dark }}>Button</span>
                    <span style={{ ...sans, fontSize: 11, background: c.tigerRed, borderRadius: 999, padding: '6px 16px', color: c.white }}>CTA</span>
                  </div>
                  <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>Components</p>
                  <p style={{ ...sans, fontSize: 11, color: c.n400, marginTop: 4 }}>Buttons, cards, data displays</p>
                </div>
                <div style={{ background: c.cream, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 16 }}>
                    {['gallery-3.png', 'product-bellafill.png', 'product-aveli.png', 'product-amplifine.png'].map((photo, i) => (
                      <FillImageBlock key={photo} src={`${IMG}/${photo}`} alt={`Preview ${i + 1}`} style={{ height: 20, borderRadius: 4, overflow: 'hidden' }} sizes="(min-width: 1280px) 10vw, 40vw" />
                    ))}
                  </div>
                  <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>Products</p>
                  <p style={{ ...sans, fontSize: 11, color: c.n400, marginTop: 4 }}>Product catalog and cards</p>
                </div>
                <div style={{ background: c.cream, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'center' }}>
                    <span style={{ ...sansMed, fontSize: 14, color: '#22C55E' }}>&check;</span>
                    <span style={{ ...sansMed, fontSize: 14, color: c.tigerRed }}>&times;</span>
                  </div>
                  <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>Usage Rules</p>
                  <p style={{ ...sans, fontSize: 11, color: c.n400, marginTop: 4 }}>Do and don{'\u2019'}t guidance</p>
                </div>
              </div>
              {childrenOf('application').map((kid) => (
                <NavRow key={kid.id} num={kid.num} label={kid.label} onClick={() => navigate(kid.id)} />
              ))}
            </div>
            </div>
          </>}


          {/* ══════════════════════════════════════════
              CHILD PAGES — content sections
              ══════════════════════════════════════════ */}

          {/* 02-0 BRAND VISUAL OVERVIEW — redirects to foundations */}
          {active === 'brand-visual-overview' && <>{typeof window !== 'undefined' && navigate('foundations')}</>}

          {/* 02-1 FOUNDATIONS */}
          {active === 'foundations' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="02-1" title="Foundations" parentLabel="Brand Visual" onBack={() => navigate('brand-visual')} />

            <TwoCol left={<><SubHead>Brand Philosophy</SubHead><SubBody>Tiger BioSciences exists at the intersection of precision biology and regenerative medicine. The visual identity communicates warmth and human care alongside clinical authority.</SubBody></>}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                {[
                  { photo: 'gallery-1.png', title: 'The Gift', desc: 'A journey of generosity, innovation and hope' },
                  { photo: 'gallery-9.png', title: 'The Innovation', desc: 'Science and care converge, creating solutions that honor the gift' },
                  { photo: 'gallery-6.png', title: 'The Outcomes', desc: 'Providers have the most advanced solutions, and lives are renewed' },
                ].map((p) => (
                  <div key={p.title} style={{ borderRadius: 12, overflow: 'hidden', background: c.cream }}>
                    <FillImageBlock src={`${IMG}/${p.photo}`} alt={p.title} style={{ height: 180 }} sizes="(min-width: 1280px) 20vw, 60vw" />
                    <div style={{ padding: '20px 24px' }}>
                      <p style={{ ...sansMed, fontSize: 14, color: c.dark, marginBottom: 6 }}>{p.title}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.dark, opacity: 0.55, lineHeight: 1.6 }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TwoCol>

            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Design Direction</SubHead><SubBody>The new Tiger identity centers warmth: cream backgrounds, serif display typography, and photography-driven layouts.</SubBody></>}>
                <div>
                  <p style={{ ...serif, fontSize: 32, color: c.dark, marginBottom: 28 }}>Warm, Elegant, Human</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                    <FillImageBlock src={`${IMG}/hero-banner-2.png`} alt="Design direction — warm" style={{ height: 320, borderRadius: 12 }} sizes="(min-width: 1280px) 25vw, 60vw" />
                    <FillImageBlock src={`${IMG}/gallery-8.png`} alt="Design direction — human" style={{ height: 320, borderRadius: 12 }} sizes="(min-width: 1280px) 25vw, 60vw" />
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {['Warm', 'Premium', 'Scientific', 'Human', 'Elegant'].map((x) => (
                      <span key={x} style={{ ...sans, fontSize: 12, background: c.cream, color: c.dark, borderRadius: 999, padding: '8px 20px' }}>{x}</span>
                    ))}
                  </div>
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Brand Essence</SubHead><SubBody>The core attributes that define the Tiger brand across all touchpoints.</SubBody></>}>
                <div style={{ background: c.cream, borderRadius: 12, padding: '36px 40px' }}>
                  <p style={{ ...serif, fontSize: 28, color: c.dark, lineHeight: 1.3, marginBottom: 28 }}>Precision biology that rebuilds.</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    {[
                      ['Category', 'Regenerative Medicine'],
                      ['Core Tech', 'Cellular & Acellular Matrix'],
                      ['Tone', 'Warm Authority'],
                      ['Feeling', 'Elegant Confidence'],
                    ].map(([label, val]) => (
                      <div key={label} style={{ padding: '12px 16px', background: c.sand, borderRadius: 8 }}>
                        <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400 }}>{label}</p>
                        <p style={{ ...sansReg, fontSize: 14, color: c.dark, marginTop: 4 }}>{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TwoCol>
            </div>
            {/* Photography banner */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, height: 'clamp(140px, 22vw, 220px)', overflow: 'hidden', margin: '0 clamp(20px, 5vw, 64px)', borderRadius: 12 }}>
              <FillImageBlock src={`${IMG}/gallery-4.png`} alt="Clinical research" sizes="(min-width: 1280px) 33vw, 80vw" />
              <FillImageBlock src={`${IMG}/gallery-11.png`} alt="Lab team" sizes="(min-width: 1280px) 33vw, 80vw" />
              <FillImageBlock src={`${IMG}/hero-tiger-2.png`} alt="Tiger brand" sizes="(min-width: 1280px) 33vw, 80vw" />
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Visual Language Rules</SubHead><SubBody>Non-negotiable rules that govern every Tiger visual asset.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
                  {[
                    { rule: 'No pure white backgrounds', detail: 'Use Warm White (#FFFEFE), Cream (#F6F2EB), or Sand (#EFECE9). Pure white (#FFFFFF) reads cold and clinical — the opposite of Tiger\'s brand.' },
                    { rule: 'No pure black text', detail: 'Use Warm Dark (#221010) for all body text. Pure black lacks the warmth and humanity that distinguishes Tiger from competitors.' },
                    { rule: 'Serif for headings, sans for body', detail: 'Georgia serif signals authority and permanence for headlines. Alexandria/Inter sans-serif provides clean readability for body text and data.' },
                    { rule: 'Division colors never cross', detail: 'Orange stays in Wound Care. Gold stays in Aesthetics. Coral stays in Dermatology. Blue stays in International. Red is parent-level only. Mixing creates brand confusion.' },
                    { rule: 'Photography over illustration', detail: 'Always choose real photography over abstract graphics, illustrations, or 3D renders. Authenticity is a competitive advantage in pharma.' },
                    { rule: 'Every asset needs a compliance footer', detail: 'Include trademark symbols, division identification, confidentiality notice, and version number on all materials.' },
                    { rule: 'Minimum 32px padding on all cards', detail: 'Generous whitespace signals premium quality. Cramped layouts undermine the brand\'s authority and elegance.' },
                    { rule: 'Glass UI for emphasis only', detail: 'Use frosted glass effects for hero modals and spotlight CTAs. Never for dense data, long-form copy, or regulatory text.' },
                  ].map((item, i) => (
                    <div key={item.rule} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 20px', background: c.cream, borderRadius: 10, border: `1px solid ${c.bone}` }}>
                      <div style={{ ...mono, fontSize: 11, color: c.tigerRed, flexShrink: 0, marginTop: 2, width: 20, textAlign: 'center' }}>{String(i + 1).padStart(2, '0')}</div>
                      <div>
                        <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 4 }}>{item.rule}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Competitive Visual Positioning</SubHead><SubBody>How Tiger's visual identity differentiates from pharma and biotech competitors.</SubBody></>}>
                <div>
                  <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 24 }}>
                    <FillImageBlock src={`${IMG}/gallery-10.png`} alt="Tiger brand differentiation" style={{ height: 280, background: c.cream }} sizes="(min-width: 1280px) 50vw, 90vw" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      { competitor: 'Traditional Pharma', their: 'Cold blues, white backgrounds, stock photography, molecule graphics', tiger: 'Warm creams, real photography, serif authority, human-centered' },
                      { competitor: 'Biotech Startups', their: 'Neon gradients, dark mode, futuristic rendering, tech-forward', tiger: 'Timeless elegance, warm neutrals, clinical credibility, evidence-first' },
                      { competitor: 'Med Device Companies', their: 'Product-centric, blue/gray palettes, feature lists, spec sheets', tiger: 'Patient-outcome driven, warm palettes, narrative storytelling, clinician partnerships' },
                      { competitor: 'DTC Health Brands', their: 'Bright pastels, playful typography, lifestyle imagery, social-first', tiger: 'Premium restraint, serif confidence, peer-reviewed authority, provider-first' },
                    ].map((item) => (
                      <div key={item.competitor} style={{ background: c.white, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 12 }}>{item.competitor}</p>
                        <div style={{ marginBottom: 8 }}>
                          <p style={{ ...mono, fontSize: 9, letterSpacing: '0.1em', color: c.n400, marginBottom: 4 }}>THEY USE</p>
                          <p style={{ ...sans, fontSize: 12, color: c.n500, lineHeight: 1.5 }}>{item.their}</p>
                        </div>
                        <div>
                          <p style={{ ...mono, fontSize: 9, letterSpacing: '0.1em', color: c.tigerRed, marginBottom: 4 }}>TIGER USES</p>
                          <p style={{ ...sans, fontSize: 12, color: c.dark, lineHeight: 1.5 }}>{item.tiger}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>In This Section</SubHead><SubBody>How the Brand Visual sections connect and build on each other.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
                  {[
                    { section: 'Divisions', num: '02-2', desc: 'Division-specific identities (Wound Care, Aesthetics, Tissue Tech, Dermatology, International) with unique color, tone, and visual voice.' },
                    { section: 'Logo System', num: '02-3-0', desc: 'Tiger wordmark, icon, and lockups. Usage rules, size minimums, clear space, and application contexts.' },
                    { section: 'Color System', num: '02-3-1', desc: 'Primary palette, backgrounds, usage rules, contrast pairings, and brand spectrum by hue.' },
                    { section: 'Color Mapping', num: '02-3-1a', desc: 'Division mapping, semantic colors, interactive states, and product service tier alignment.' },
                    { section: 'Typography', num: '02-3-2', desc: 'Neuropa (display), Alexandria (body), Inter (UI). Scale, weight hierarchy, and usage context.' },
                    { section: 'Photography', num: '02-3-3', desc: 'Direction, mood, subject matter, lighting, and composition guidelines.' },
                    { section: 'Glass UI', num: '02-3-4', desc: 'Component library, glass morphism effects, and interaction patterns in digital contexts.' },
                  ].map((item, i, arr) => (
                    <div key={item.section} style={{ display: 'flex', borderBottom: i < arr.length - 1 ? `1px solid ${c.linen}` : 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                      onClick={() => navigate(item.num === '02-2' ? 'divisions-overview' : item.num === '02-3-0' ? 'logo' : item.num === '02-3-1' ? 'color' : item.num === '02-3-1a' ? 'color-mapping' : item.num === '02-3-2' ? 'typography' : item.num === '02-3-3' ? 'photography' : 'glass')}
                      onMouseEnter={(e) => (e.currentTarget.style.background = c.cream)}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                    >
                      <div style={{ flex: '0 0 160px', padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{item.section}</p>
                        <p style={{ ...mono, fontSize: 11, color: c.n400, marginTop: 4 }}>{item.num}</p>
                      </div>
                      <div style={{ flex: 1, padding: '20px 24px', display: 'flex', alignItems: 'center' }}>
                        <p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            </div>
          </>}

          {/* ══════════════════════════════════════════
              02 DIVISIONS — overview
              ══════════════════════════════════════════ */}
          {active === 'divisions-overview' && <>
            <div className={sectionClassName}>
            {/* ── HERO ── */}
            <div style={{ background: c.dark, padding: 'clamp(48px, 8vw, 100px) clamp(20px, 5vw, 64px) clamp(40px, 6vw, 80px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.15 }}>
                <Image src={`${IMG}/hero-banner-1.png`} alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'relative', zIndex: 1, maxWidth: 720 }}>
                <p style={{ ...mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 20 }}>02 — Divisions</p>
                <h1 style={{ ...serif, fontSize: 'clamp(40px, 7vw, 64px)', color: c.white, lineHeight: 1.1, marginBottom: 24 }}>Five Divisions,<br />One Platform.</h1>
                <p style={{ ...sans, fontSize: 16, color: c.n400, lineHeight: 1.8 }}>
                  Tiger BioSciences operates through five interconnected clinical and commercial divisions. Each carries a distinctive visual identity and messaging architecture while maintaining cohesive brand equity.
                </p>
              </div>
            </div>

            {/* ── DIVISION CARDS ── */}
            <div style={{ background: c.sand, padding: 'clamp(40px, 6vw, 64px) clamp(20px, 5vw, 64px)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, marginBottom: 64 }}>
                {([
                  { id: 'wound-care' as const, num: '02-2-1', photo: 'hero-banner-1.png' },
                  { id: 'aesthetics' as const, num: '02-2-2', photo: 'beauty-1.png' },
                  { id: 'tissue-tech' as const, num: '02-2-3', photo: 'gallery-3.png' },
                  { id: 'dermatology' as const, num: '02-2-5', photo: 'gallery-4.png' },
                  { id: 'international' as const, num: '02-2-4', photo: 'gallery-10.png' },
                ]).map((item) => {
                  const d = divisionData[item.id]
                  return (
                    <button key={item.id} onClick={() => navigate(item.id)} style={{ background: c.white, borderRadius: 12, overflow: 'hidden', textAlign: 'left', border: `1px solid ${c.linen}`, cursor: 'pointer', transition: 'box-shadow 0.3s ease, transform 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
                      <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                        <Image src={`${IMG}/${item.photo}`} alt={d.name} fill sizes="(min-width: 1280px) 20vw, 50vw" style={{ objectFit: 'cover', objectPosition: getFocal(item.photo) }} />
                        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 40%, ${d.hex}cc 100%)` }} />
                        <div style={{ position: 'absolute', bottom: 16, left: 20 }}>
                          <p style={{ ...sansMed, fontSize: 24, color: c.white, textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>{d.name}</p>
                        </div>
                      </div>
                      <div style={{ padding: '16px 20px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                          <div style={{ width: 12, height: 12, borderRadius: 3, background: d.hex }} />
                          <span style={{ ...mono, fontSize: 10, color: c.n400 }}>{d.hex}</span>
                          <span style={{ ...mono, fontSize: 10, color: c.n300, marginLeft: 'auto' }}>{item.num}</span>
                        </div>
                        <p style={{ ...sans, fontSize: 12, color: c.n500, lineHeight: 1.6 }}>{d.tagline}</p>
                      </div>
                    </button>
                  )
                })}
              </div>

            </div>
            </div>
          </>}

          {/* 02-2-1 WOUND CARE */}
          {active === 'wound-care' && (() => {
            const div = divisionData['wound-care']
            const typo = divisionTypography['wound-care']
            const palette = divisionColorPalette['wound-care']
            return <>
              <div className={sectionClassName} style={{ background: c.sand }}>
              <DivisionHero divKey="wound-care" div={div} onBack={() => navigate('divisions-overview')} />

              {/* ── ORANGE INTRO BAND ── */}
              <div style={{ background: div.hex, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 800 }}>
                  <p style={{ ...serif, fontSize: 'clamp(24px, 4vw, 36px)', color: c.white, lineHeight: 1.4, marginBottom: 20 }}>
                    Cellular and acellular technologies powering the future of wound healing.
                  </p>
                  <p style={{ ...sans, fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: 640 }}>
                    {div.description}
                  </p>
                </div>
              </div>

              {/* ── PHOTOGRAPHY TRIPTYCH ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, height: 'clamp(240px, 35vw, 420px)', overflow: 'hidden' }}>
                <FillImageBlock src={`${IMG}/gallery-3.png`} alt="Clinical lab" sizes="33vw" />
                <FillImageBlock src={`${IMG}/gallery-7.png`} alt="Application" sizes="33vw" />
                <FillImageBlock src={`${IMG}/gallery-9.png`} alt="Documentation" sizes="33vw" />
              </div>

              {/* ── AUDIENCE + TONE ── */}
              <div style={{ background: '#FEF0EC', padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
                  <div>
                    <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 20 }}>Target Audiences</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {div.audiences.map((a: string) => (
                        <span key={a} style={{ ...sansReg, fontSize: 12, background: c.white, color: c.dark, borderRadius: 999, padding: '10px 22px', border: `1px solid ${c.bone}` }}>{a}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 20 }}>Brand Tone</p>
                    <p style={{ ...serif, fontSize: 22, color: c.dark, lineHeight: 1.4 }}>{div.tone}</p>
                  </div>
                </div>
              </div>

              {/* ── TYPOGRAPHY ── */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px 0' }} />
              <DivisionTypographySection typo={typo} divHex={div.hex} description="Typographic rules for Wound Care. Clinical precision with approachable body copy. Heavy use of monospace for lot numbers, QC codes, and dosing data." />

              {/* ── COLOR PALETTE ── */}
              <div style={{ height: 3, background: div.hex, margin: '0 64px' }} />
              <DivisionColorPaletteSection palette={palette} description="Complete color system for Wound Care. Tiger Orange signals clinical energy and urgency across all wound care materials." />

              {/* ── VISUAL TREATMENT ── */}
              <div style={{ height: 3, background: div.hex, margin: '0 64px' }} />
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Visual Treatment</SubHead><SubBody>How Wound Care colors apply in practice. Orange accents signal clinical energy and urgency.</SubBody></>}>
                  <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.linen}` }}>
                    <p style={{ ...sans, fontSize: 14, color: c.dark, lineHeight: 1.7, marginBottom: 20 }}>{div.colorUsage}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                      <div style={{ borderRadius: 8, overflow: 'hidden' }}>
                        <div style={{ background: div.hex, padding: '20px 20px' }}>
                          <p style={{ ...serif, fontSize: 18, color: c.white }}>Hero Section</p>
                          <p style={{ ...sans, fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Orange on dark</p>
                        </div>
                      </div>
                      <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                        <div style={{ background: c.cream, padding: '20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                          <span style={{ ...sans, fontSize: 12, background: div.hex, color: c.white, borderRadius: 999, padding: '8px 24px', alignSelf: 'flex-start' }}>CTA Button</span>
                          <p style={{ ...sans, fontSize: 11, color: c.n500 }}>Orange pill on cream</p>
                        </div>
                      </div>
                      <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                        <div style={{ background: '#FEF0EC', padding: '20px 20px' }}>
                          <p style={{ ...sansMed, fontSize: 13, color: div.hex }}>Accent Text</p>
                          <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 4 }}>Orange text on tint</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TwoCol>
              </div>

              {/* ── PHOTOGRAPHY DIRECTION ── */}
              <div style={{ background: c.dark, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 16 }}>Photography Direction</p>
                <p style={{ ...serif, fontSize: 'clamp(22px, 3vw, 32px)', color: c.white, lineHeight: 1.4, maxWidth: 600, marginBottom: 40 }}>
                  Clinical competence and donor respect. Never marketing glamour.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
                  {[
                    ['Clinical lab imagery', 'Sterile environments, documentation, quality control stations. Hard lighting, focus on process and precision.'],
                    ['Product in use', 'Application photos showing the 4-point technique. Clinician hands, clear view of product and tissue. Natural lab lighting.'],
                    ['Tissue specimens', 'Close-up photography of preserved tissue and allografts. Neutral background, macro focus on texture and clarity.'],
                    ['Charts and outcomes', 'Wound closure metrics, healing timelines, statistical proof. Charts should include confidence intervals and source annotations.'],
                    ['Compliance documentation', 'Lot numbers, sterility badges, QC stamps. Photography that emphasizes reliability and regulatory adherence.'],
                  ].map(([title, desc]) => (
                    <div key={title} style={{ borderLeft: `2px solid ${div.hex}`, paddingLeft: 20 }}>
                      <p style={{ ...sansMed, fontSize: 14, color: c.white, marginBottom: 6 }}>{title}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n400, lineHeight: 1.6 }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── PHOTOGRAPHY BANNER 2 ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0, height: 'clamp(200px, 28vw, 340px)', overflow: 'hidden' }}>
                <FillImageBlock src={`${IMG}/hero-banner-2.png`} alt="Hero banner" sizes="66vw" />
                <FillImageBlock src={`${IMG}/gallery-8.png`} alt="Lab specimen" sizes="33vw" />
              </div>

              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Photography Do's & Don'ts</SubHead><SubBody>Concrete guidance on what succeeds and what fails in Wound Care contexts.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      { type: 'do', icon: '✓', label: 'Sterile lab with clear documentation visible', desc: 'Lot numbers, labels, clipboards. Shows compliance mindset.' },
                      { type: 'dont', icon: '✕', label: 'Blurred or hidden compliance markers', desc: 'Creates doubt. Every element must feel intentional and traceable.' },
                      { type: 'do', icon: '✓', label: 'Close-up of application technique', desc: 'Clinician hands, product, tissue in frame. Professional gloves visible.' },
                      { type: 'dont', icon: '✕', label: 'Distant hero shots of "confident clinician"', desc: 'Too marketing-focused. Wound Care sells evidence, not confidence.' },
                      { type: 'do', icon: '✓', label: 'Statistical charts with confidence intervals', desc: 'Error bars, sample size (n=), source citations. Hard data.' },
                      { type: 'dont', icon: '✕', label: 'Curved lines and gradient charts without annotations', desc: 'Feels designed rather than scientific. Include every data point.' },
                      { type: 'do', icon: '✓', label: 'Tissue specimens on neutral backgrounds', desc: 'Macro photography showing clarity and preservation quality.' },
                      { type: 'dont', icon: '✕', label: 'Artistic or stylized specimen photography', desc: 'Softness and beauty undermine clinical credibility.' },
                    ].map((item, idx) => (
                      <div key={idx} style={{ background: item.type === 'do' ? '#F0FDF4' : '#FEF2F2', borderRadius: 12, padding: '20px 20px', border: `1px solid ${item.type === 'do' ? '#DCFCE7' : '#FECACA'}`, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{ ...sansMed, fontSize: 16, color: item.type === 'do' ? '#16A34A' : '#DC2626', flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                        <div>
                          <p style={{ ...sansMed, fontSize: 13, color: item.type === 'do' ? '#166534' : '#7F1D1D', marginBottom: 4 }}>{item.label}</p>
                          <p style={{ ...sans, fontSize: 12, color: item.type === 'do' ? '#15803D' : '#991B1B', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Division accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Audience-Specific Photography</SubHead><SubBody>Different audiences need different visual proof points. Tailor photography emphasis by stakeholder.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                    {[
                      {
                        audience: 'Hospital Procurement',
                        focus: 'Regulatory proof. Emphasize: QC badges, compliance documentation, batch traceability. Photography showing lot numbers, sterilization verification, traceability systems. They scan for "is this auditable?"',
                      },
                      {
                        audience: 'Clinical Staff',
                        focus: 'Usability & outcomes. Emphasize: Application technique, ease of use, patient outcomes. Close-ups of the 4-point system. Photos showing clinician confidence and quick adoption.',
                      },
                      {
                        audience: 'Hospital Finance',
                        focus: 'Cost justification. Emphasize: Processing speed, reduced complications, reimbursement readiness. Photography showing operational efficiency and compliance-ready documentation.',
                      },
                      {
                        audience: 'Patient Families',
                        focus: 'Care & dignity. Emphasize: Professional care environments, clinician expertise, healing outcomes. Warm, human photography showing respectful treatment and expert hands.',
                      },
                    ].map((item) => (
                      <div key={item.audience} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 8 }}>{item.audience}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.focus}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Division accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Color Usage</SubHead><SubBody>How division colors apply in practice.</SubBody></>}>
                  <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.linen}` }}>
                    <p style={{ ...sans, fontSize: 14, color: c.dark, lineHeight: 1.7, marginBottom: 20 }}>{div.colorUsage}</p>
                    <div style={{ display: 'flex', gap: 12 }}>
                      <div style={{ flex: 1, borderRadius: 8, overflow: 'hidden' }}>
                        <div style={{ background: div.hex, padding: '16px 20px' }}>
                          <p style={{ ...serif, fontSize: 18, color: c.white }}>Hero Section</p>
                        </div>
                        <div style={{ background: c.white, padding: '12px 20px' }}>
                          <p style={{ ...sans, fontSize: 11, color: c.n500 }}>Orange hero with white text</p>
                        </div>
                      </div>
                      <div style={{ flex: 1, borderRadius: 8, overflow: 'hidden' }}>
                        <div style={{ background: c.cream, padding: '16px 20px', border: `1px solid ${c.bone}`, borderBottom: 'none', borderRadius: '8px 8px 0 0' }}>
                          <span style={{ ...sans, fontSize: 12, background: div.hex, color: c.white, borderRadius: 999, padding: '8px 24px' }}>CTA Button</span>
                        </div>
                        <div style={{ background: c.sand, padding: '12px 20px' }}>
                          <p style={{ ...sans, fontSize: 11, color: c.n500 }}>Orange pill button on cream</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TwoCol>
              </div>

              {/* Division accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Clinical Proof</SubHead><SubBody>Stats sourced from the Wound clinical library.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
                    {woundClinicalStats.map((item) => (
                      <div key={item.label} style={{ background: c.white, borderRadius: 12, padding: '24px 20px', border: `1px solid ${c.linen}` }}>
                        <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400 }}>{item.label}</p>
                        <p style={{ ...serif, fontSize: 34, color: c.dark, margin: '10px 0 6px' }}>{item.stat}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Division accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Launch & Messaging</SubHead><SubBody>Key pillars for Wound Care communication and positioning.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      {
                        pillar: 'Clinical Efficacy',
                        message: 'Our CAMPs platform delivers superior closure rates. Lead with our 92-96% clinical proof across all wound types. Every asset must include at least one stat.',
                      },
                      {
                        pillar: 'Ease of Use',
                        message: 'Clinicians adopt our products because they work without complicated protocols. Emphasize the 4-point application system and pre-loaded lot documentation.',
                      },
                      {
                        pillar: 'Provider Trust',
                        message: 'We honor the gift of tissue donation. Every communication acknowledges donor families and emphasizes stewardship. Never lead with the product.',
                      },
                      {
                        pillar: 'Reimbursement Ready',
                        message: 'Hospitals and practices adopt our products because we handle compliance. Highlight TigerTrace QC and the pre-built documentation bundle for claims.',
                      },
                    ].map((item) => (
                      <div key={item.pillar} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 8 }}>{item.pillar}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.message}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Division accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Care Pathways</SubHead><SubBody>Linear journey for sales teams and clinicians.</SubBody></>}>
                  <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.linen}` }}>
                    {[
                      ['Assess', 'Capture wound photography, tissue status, comorbidities.'],
                      ['Select therapy', 'Match wound type to caregraFT, carePATCH, or HealPACK.'],
                      ['Apply + document', 'Follow 4-point application video and log lot numbers.'],
                      ['Monitor outcomes', '12-week cadence with closure measurements + reimbursement notes.'],
                    ].map(([label, desc], idx) => (
                      <div key={label} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 12, padding: '14px 0', borderBottom: idx === 3 ? 'none' : `1px solid ${c.bone}` }}>
                        <div style={{ ...mono, fontSize: 12, color: c.tigerRed }}>{`0${idx + 1}`}</div>
                        <div>
                          <p style={{ ...sansMed, fontSize: 13, color: c.dark }}>{label}</p>
                          <p style={{ ...sans, fontSize: 12, color: c.n500 }}>{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
              </div>
          </>
        })()}

          {/* 02-2 AESTHETICS */}
          {active === 'aesthetics' && (() => {
            const div = divisionData['aesthetics']
            const typo = divisionTypography['aesthetics']
            const palette = divisionColorPalette['aesthetics']
            return <>
              <div className={sectionClassName} style={{ background: c.sand }}>
              <DivisionHero divKey="aesthetics" div={div} onBack={() => navigate('divisions-overview')} />

              {/* ── GOLD INTRO BAND ── */}
              <div style={{ background: div.hex, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 800 }}>
                  <p style={{ ...serif, fontSize: 'clamp(24px, 4vw, 36px)', color: c.white, lineHeight: 1.4, marginBottom: 20 }}>
                    Where regenerative science meets the art of aesthetic transformation.
                  </p>
                  <p style={{ ...sans, fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: 640 }}>
                    {div.description}
                  </p>
                </div>
              </div>

              {/* ── PHOTOGRAPHY TRIPTYCH ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, height: 'clamp(240px, 35vw, 420px)', overflow: 'hidden' }}>
                <FillImageBlock src={`${IMG}/product-bellafill-new.png`} alt="Bellafill — smile lines and acne scars" sizes="33vw" />
                <FillImageBlock src={`${IMG}/product-sientra.png`} alt="Sientra — breast implants" sizes="33vw" />
                <FillImageBlock src={`${IMG}/product-aveli-new.png`} alt="Avéli — cellulite release" sizes="33vw" />
              </div>

              {/* ── AUDIENCE + TONE ── */}
              <div style={{ background: '#FBF6E8', padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
                  <div>
                    <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 20 }}>Target Audiences</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {div.audiences.map((a: string) => (
                        <span key={a} style={{ ...sansReg, fontSize: 12, background: c.white, color: c.dark, borderRadius: 999, padding: '10px 22px', border: `1px solid ${c.bone}` }}>{a}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 20 }}>Brand Tone</p>
                    <p style={{ ...serif, fontSize: 22, color: c.dark, lineHeight: 1.4 }}>{div.tone}</p>
                  </div>
                </div>
              </div>

              {/* ── TYPOGRAPHY ── */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px 0' }} />
              <DivisionTypographySection typo={typo} divHex={div.hex} description="Typographic rules for Aesthetics. Lighter weights, wider spacing, and elegant proportions. Georgia Light and pull quotes define the premium voice." />

              {/* ── COLOR PALETTE ── */}
              <div style={{ height: 3, background: div.hex, margin: '0 64px' }} />
              <DivisionColorPaletteSection palette={palette} description="Complete color system for Aesthetics. Gold signals premium positioning. Never use Tiger Orange in Aesthetics materials." />

              {/* ── VISUAL DISTINCTION ── */}
              <div style={{ height: 3, background: div.hex, margin: '0 64px' }} />
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Visual Distinction</SubHead><SubBody>Aesthetics uses warm gold as its signature accent, signaling luxury and refinement. This color appears in hero sections, CTAs, and data highlights—never the Tiger Orange used in Wound Care.</SubBody></>}>
                  <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.linen}` }}>
                    <p style={{ ...sans, fontSize: 14, color: c.dark, lineHeight: 1.7, marginBottom: 20 }}>{div.colorUsage}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                      <div style={{ borderRadius: 8, overflow: 'hidden' }}>
                        <div style={{ background: div.hex, padding: '20px 20px' }}>
                          <p style={{ ...serif, fontSize: 18, color: c.white }}>Hero Section</p>
                          <p style={{ ...sans, fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Gold on dark</p>
                        </div>
                      </div>
                      <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                        <div style={{ background: c.cream, padding: '20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                          <span style={{ ...sans, fontSize: 12, background: div.hex, color: c.white, borderRadius: 999, padding: '8px 24px', alignSelf: 'flex-start' }}>CTA Button</span>
                          <p style={{ ...sans, fontSize: 11, color: c.n500 }}>Gold pill on cream</p>
                        </div>
                      </div>
                      <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                        <div style={{ background: '#FBF6E8', padding: '20px 20px' }}>
                          <p style={{ ...sansMed, fontSize: 13, color: div.hex }}>Accent Text</p>
                          <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 4 }}>Gold text on tint</p>
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: 16, padding: '14px 16px', background: c.sand, borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ ...sansMed, fontSize: 14, color: c.orange }}>&times;</span>
                      <p style={{ ...sans, fontSize: 12, color: c.n600 }}>Never use Tiger Orange (#DF512B) as the primary accent in Aesthetics materials</p>
                    </div>
                  </div>
                </TwoCol>
              </div>

              {/* ── PHOTOGRAPHY DIRECTION ── */}
              <div style={{ background: c.dark, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 16 }}>Photography Direction</p>
                <p style={{ ...serif, fontSize: 'clamp(22px, 3vw, 32px)', color: c.white, lineHeight: 1.4, maxWidth: 600, marginBottom: 40 }}>
                  Aspirational yet authentic. Confidence, not perfection.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
                  {[
                    ['Beauty and skin imagery', 'Close-up, luminous skin. Soft focus, warm lighting. Aspirational but real. Skin texture and natural variation build trust.'],
                    ['Product elegance', 'Products styled with premium props. Gold accents, clean marble or linen surfaces, soft directional shadows.'],
                    ['Patient confidence', 'Natural expressions, subtle confidence. Never before/after comparisons. Subjects looking comfortable and self-assured.'],
                    ['Transformation narrative', 'Frame every image around empowerment and choice. Warm tones and natural lighting convey authenticity.'],
                    ['Premium environments', 'Modern treatment spaces, clean consultation rooms. Warm color temperature, natural light preferred.'],
                  ].map(([title, desc]) => (
                    <div key={title} style={{ borderLeft: `2px solid ${div.hex}`, paddingLeft: 20 }}>
                      <p style={{ ...sansMed, fontSize: 14, color: c.white, marginBottom: 6 }}>{title}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n400, lineHeight: 1.6 }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── PHOTOGRAPHY BANNER 2 ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0, height: 'clamp(200px, 28vw, 340px)', overflow: 'hidden' }}>
                <FillImageBlock src={`${IMG}/product-viality.png`} alt="Viality — fat transfer" sizes="66vw" />
                <FillImageBlock src={`${IMG}/product-alloclae.png`} alt="alloClae — body contouring" sizes="33vw" />
              </div>

              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

            {/* Pattern section removed — prioritize photography over ornament */}
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Launch Toolkit</SubHead><SubBody>Every new product launch requires consistent messaging. These templates ensure physicians see the same clinical narrative, dosing guidelines, and before/after success metrics regardless of channel (email, conference, digital).</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                  {aestheticsLaunchKit.map((kit) => (
                    <div key={kit.title} style={{ background: c.cream, borderRadius: 12, padding: '24px 24px 28px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark }}>{kit.title}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n500, marginTop: 8, lineHeight: 1.6 }}>{kit.desc}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Tone Ladder</SubHead><SubBody>Balance beauty with clinical credibility.</SubBody></>}>
                <div style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}>
                  {[
                    ['Visionary', '"Redefine beauty on your terms." Lead with transformation + artistry. Use aspirational imagery.'],
                    ['Intimate', '"You deserve to feel confident in your own skin." Address the person, not the procedure. Warm, personal tone.'],
                    ['Assured', '"Backed by regenerative science + 5,000+ satisfied patients." Close with peer-reviewed outcomes, certifications, provider credentials.'],
                  ].map(([title, desc], idx) => (
                    <div key={title} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 12, padding: '14px 0', borderBottom: idx === 2 ? 'none' : `1px solid ${c.bone}` }}>
                      <div style={{ ...mono, fontSize: 12, color: c.gold }}>{`0${idx + 1}`}</div>
                      <div>
                        <p style={{ ...sansMed, fontSize: 13, color: c.dark }}>{title}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n500 }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            {/* PHOTO DO'S & DON'TS */}
            <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Photography Do&apos;s &amp; Don&apos;ts</SubHead><SubBody>Concrete guidance for Aesthetics photography. Every image must balance aspiration with authenticity.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { type: 'do', icon: '\u2713', label: 'Natural skin texture with warm lighting', desc: 'Real skin with pores and natural variation. Luminous, not airbrushed. Conveys authentic beauty.' },
                    { type: 'dont', icon: '\u2715', label: 'Heavily retouched or plastic-looking skin', desc: 'Undermines trust with physicians and sets unrealistic expectations for patients.' },
                    { type: 'do', icon: '\u2713', label: 'Confident, natural expressions', desc: 'Subjects looking comfortable and self-assured. Subtle smiles, relaxed posture.' },
                    { type: 'dont', icon: '\u2715', label: 'Exaggerated "after" poses or expressions', desc: 'Feels performative. Authenticity is the premium aesthetic signal.' },
                    { type: 'do', icon: '\u2713', label: 'Products styled with premium props', desc: 'Gold accents, clean marble or linen surfaces, soft directional shadows.' },
                    { type: 'dont', icon: '\u2715', label: 'Products on clinical or sterile backgrounds', desc: 'Aesthetics sells transformation, not treatment. Context must feel aspirational.' },
                    { type: 'do', icon: '\u2713', label: 'Diverse representation of beauty', desc: 'All ages, ethnicities, gender expressions. Beauty is universal.' },
                    { type: 'dont', icon: '\u2715', label: 'Only young, conventionally attractive models', desc: 'Excludes the majority of patients and feels exclusionary.' },
                  ].map((item, idx) => (
                    <div key={idx} style={{ background: item.type === 'do' ? '#F0FDF4' : '#FEF2F2', borderRadius: 12, padding: '20px 20px', border: `1px solid ${item.type === 'do' ? '#DCFCE7' : '#FECACA'}`, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <div style={{ ...sansMed, fontSize: 16, color: item.type === 'do' ? '#16A34A' : '#DC2626', flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                      <div>
                        <p style={{ ...sansMed, fontSize: 13, color: item.type === 'do' ? '#166534' : '#7F1D1D', marginBottom: 4 }}>{item.label}</p>
                        <p style={{ ...sans, fontSize: 12, color: item.type === 'do' ? '#15803D' : '#991B1B', lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            {/* AUDIENCE-SPECIFIC PHOTOGRAPHY */}
            <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Audience-Specific Photography</SubHead><SubBody>Each stakeholder responds to different visual proof points.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                  {[
                    { audience: 'Plastic Surgeons', focus: 'Precision and outcomes. Emphasize: Surgical technique, tissue quality, predictable results. Photography showing artistry in execution and subtle clinical precision.' },
                    { audience: 'Dermatologists', focus: 'Skin science and efficacy. Emphasize: Close-up skin transformation, treatment simplicity, patient satisfaction metrics. Photography bridging science with beauty.' },
                    { audience: 'Med Spas', focus: 'Patient experience and volume. Emphasize: Comfortable treatment environments, minimal downtime, patient confidence. Photography showing the premium service experience.' },
                    { audience: 'Patients', focus: 'Confidence and safety. Emphasize: Natural-looking results, professional care, real stories. Photography that says "you will feel like yourself, only better."' },
                  ].map((item) => (
                    <div key={item.audience} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 8 }}>{item.audience}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.focus}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            {/* MESSAGING PILLARS */}
            <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Messaging Pillars</SubHead><SubBody>Core messages for Aesthetics communications. Position Tiger as the science behind beautiful outcomes.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { pillar: 'Science Meets Beauty', message: 'Every Tiger Aesthetics product is rooted in regenerative tissue science. Lead with the science platform, then reveal the beauty outcome. Physicians trust evidence; patients trust results.' },
                    { pillar: 'Predictable Artistry', message: 'Our products deliver consistent, predictable outcomes that let physicians practice with confidence. Emphasize precision and reproducibility in every communication.' },
                    { pillar: 'Patient Empowerment', message: 'Frame every procedure as a choice, not a need. Patients choose Tiger Aesthetics to feel more like themselves. Never use shame, inadequacy, or pressure.' },
                    { pillar: 'Premium Experience', message: 'From product packaging to provider training to patient recovery — every touchpoint communicates premium quality. Gold accents, warm tones, and thoughtful details signal value.' },
                  ].map((item) => (
                    <div key={item.pillar} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 8 }}>{item.pillar}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.message}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>In Use</SubHead><SubBody>Reference screens from the Figma design system showing Aesthetics in production context.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
                    <ScreenPreview src="aesthetics-overview.png" label="Aesthetics Overview" height={340} />
                    <ScreenPreview src="aesthetics-face.png" label="Face — Bellafill" height={340} />
                    <ScreenPreview src="aesthetics-face-product.png" label="Product Detail" height={340} />
                    <ScreenPreview src="our-products.png" label="Products Overview" height={340} />
                  </div>
                </TwoCol>
            </div>
              </div>

          </>
        })()}

          {/* 02-3 TISSUE TECHNOLOGY */}
          {active === 'tissue-tech' && (() => {
            const div = divisionData['tissue-tech']
            const typo = divisionTypography['tissue-tech']
            const palette = divisionColorPalette['tissue-tech']
            return <>
              <div className={sectionClassName} style={{ background: c.sand }}>
              <DivisionHero divKey="tissue-tech" div={div} onBack={() => navigate('divisions-overview')} />

              {/* ── RED INTRO BAND ── */}
              <div style={{ background: div.hex, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 800 }}>
                  <p style={{ ...serif, fontSize: 'clamp(24px, 4vw, 36px)', color: c.white, lineHeight: 1.4, marginBottom: 20 }}>
                    The science platform behind every Tiger product. Proprietary processing, vertically integrated.
                  </p>
                  <p style={{ ...sans, fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: 640 }}>
                    {div.description}
                  </p>
                </div>
              </div>

              {/* ── PHOTOGRAPHY TRIPTYCH ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, height: 'clamp(240px, 35vw, 420px)', overflow: 'hidden' }}>
                <FillImageBlock src={`${IMG}/gallery-5.png`} alt="Lab processing" sizes="33vw" />
                <FillImageBlock src={`${IMG}/gallery-2.png`} alt="Cryopreservation" sizes="33vw" />
                <FillImageBlock src={`${IMG}/hero-tiger-1.png`} alt="Tiger mark" sizes="33vw" />
              </div>

              {/* ── AUDIENCE + TONE ── */}
              <div style={{ background: '#FCEAE8', padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
                  <div>
                    <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 20 }}>Target Audiences</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {div.audiences.map((a: string) => (
                        <span key={a} style={{ ...sansReg, fontSize: 12, background: c.white, color: c.dark, borderRadius: 999, padding: '10px 22px', border: `1px solid ${c.bone}` }}>{a}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 20 }}>Brand Tone</p>
                    <p style={{ ...serif, fontSize: 22, color: c.dark, lineHeight: 1.4 }}>{div.tone}</p>
                  </div>
                </div>
              </div>

              {/* ── TYPOGRAPHY ── */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px 0' }} />
              <DivisionTypographySection typo={typo} divHex={div.hex} description="Typographic rules for Tissue Technology. The most technical division — heavy monospace usage, tighter line-heights, and precision labeling for scientific content." />

              {/* ── COLOR PALETTE ── */}
              <div style={{ height: 3, background: div.hex, margin: '0 64px' }} />
              <DivisionColorPaletteSection palette={palette} description="Complete color system for Tissue Technology. Tiger Red anchors the scientific authority. Lab Dark provides contrast for technical data visualization." />

              {/* ── VISUAL TREATMENT ── */}
              <div style={{ height: 3, background: div.hex, margin: '0 64px' }} />
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Visual Treatment</SubHead><SubBody>How Tissue Technology colors apply in practice. Red accents signal scientific authority and processing rigor.</SubBody></>}>
                  <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.linen}` }}>
                    <p style={{ ...sans, fontSize: 14, color: c.dark, lineHeight: 1.7, marginBottom: 20 }}>{div.colorUsage}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                      <div style={{ borderRadius: 8, overflow: 'hidden' }}>
                        <div style={{ background: div.hex, padding: '20px 20px' }}>
                          <p style={{ ...serif, fontSize: 18, color: c.white }}>Hero Section</p>
                          <p style={{ ...sans, fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Red on dark</p>
                        </div>
                      </div>
                      <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                        <div style={{ background: c.cream, padding: '20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                          <span style={{ ...sans, fontSize: 12, background: div.hex, color: c.white, borderRadius: 999, padding: '8px 24px', alignSelf: 'flex-start' }}>CTA Button</span>
                          <p style={{ ...sans, fontSize: 11, color: c.n500 }}>Red pill on cream</p>
                        </div>
                      </div>
                      <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                        <div style={{ background: '#FCEAE8', padding: '20px 20px' }}>
                          <p style={{ ...sansMed, fontSize: 13, color: div.hex }}>Accent Text</p>
                          <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 4 }}>Red text on tint</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TwoCol>
              </div>

              {/* ── PHOTOGRAPHY DIRECTION ── */}
              <div style={{ background: c.dark, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 16 }}>Photography Direction</p>
                <p style={{ ...serif, fontSize: 'clamp(22px, 3vw, 32px)', color: c.white, lineHeight: 1.4, maxWidth: 600, marginBottom: 40 }}>
                  Precision, processing, and evidence. Every image communicates sterility, rigor, and technical excellence.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
                  {[
                    ['Lab processing workflows', 'Wide shots of processing rooms with proper lighting. Show equipment, technician gloves, clear documentation. Emphasize systematic processes.'],
                    ['Quality control stations', 'Close-ups of testing equipment, sample analysis, measurement tools. Hard technical lighting. Focus on precision and data capture.'],
                    ['Equipment and instrumentation', 'Standalone shots of centrifuges, freezers, analyzers. Professional product photography style with clean backgrounds.'],
                    ['Specimen documentation', 'Photo labels, lot numbers, barcodes, sterility badges. Macro photography emphasizing traceability and compliance markers.'],
                    ['Graph and data visualization', 'Charts showing processing yields, viability metrics, sterility assurance levels. Include error bars and statistical annotations.'],
                  ].map(([title, desc]) => (
                    <div key={title} style={{ borderLeft: `2px solid ${div.hex}`, paddingLeft: 20 }}>
                      <p style={{ ...sansMed, fontSize: 14, color: c.white, marginBottom: 6 }}>{title}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n400, lineHeight: 1.6 }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── PHOTOGRAPHY BANNER 2 ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0, height: 'clamp(200px, 28vw, 340px)', overflow: 'hidden' }}>
                <FillImageBlock src={`${IMG}/thumbnail-1.png`} alt="Quality systems" sizes="66vw" />
                <FillImageBlock src={`${IMG}/vertical-1.png`} alt="Lab detail" sizes="33vw" />
              </div>

              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              {/* PHOTOGRAPHY DO'S & DON'TS */}
              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Photography Do's & Don'ts</SubHead><SubBody>Concrete guidance for Tissue Technology visual standards.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      { type: 'do', icon: '✓', label: 'Clean lab with modern equipment', desc: 'Centrifuges, freezers, analyzers. Professional product photography style.' },
                      { type: 'dont', icon: '✕', label: 'Cluttered benches or outdated instrumentation', desc: 'Raises questions about facility quality. Show only current, maintained equipment.' },
                      { type: 'do', icon: '✓', label: 'Macro photography of labels and compliance markers', desc: 'QC badges, lot numbers, barcodes readable. Emphasize traceability.' },
                      { type: 'dont', icon: '✕', label: 'Soft-focus or artistic specimen imagery', desc: 'Technical context requires crisp detail and clarity. No artistic interpretation.' },
                      { type: 'do', icon: '✓', label: 'Technician hands in gloves using equipment', desc: 'Shows trained personnel and proper handling protocols. Professional context.' },
                      { type: 'dont', icon: '✕', label: 'People smiling or posed for camera', desc: 'Tissue Tech is about process, not personality. Keep people in supporting roles.' },
                      { type: 'do', icon: '✓', label: 'Data graphs with exact values and annotations', desc: 'Include every data point, confidence intervals, source. No smoothed or estimated lines.' },
                      { type: 'dont', icon: '✕', label: 'Trendy data visualization or 3D renders', desc: 'Looks speculative. Stick to real, documented measurements.' },
                    ].map((item, idx) => (
                      <div key={idx} style={{ background: item.type === 'do' ? '#F0FDF4' : '#FEF2F2', borderRadius: 12, padding: '20px 20px', border: `1px solid ${item.type === 'do' ? '#DCFCE7' : '#FECACA'}`, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{ ...sansMed, fontSize: 16, color: item.type === 'do' ? '#16A34A' : '#DC2626', flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                        <div>
                          <p style={{ ...sansMed, fontSize: 13, color: item.type === 'do' ? '#166534' : '#7F1D1D', marginBottom: 4 }}>{item.label}</p>
                          <p style={{ ...sans, fontSize: 12, color: item.type === 'do' ? '#15803D' : '#991B1B', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Division accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Audience-Specific Photography</SubHead><SubBody>Scientists, procurement, and regulators have different visual information needs.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                    {[
                      {
                        audience: 'R&D Scientists',
                        focus: 'Processing excellence. Emphasize: Lab workflows, quality control rigor, equipment precision. Macro photography of testing methodology. Data visualization with exact measurements.',
                      },
                      {
                        audience: 'Procurement & Supply Chain',
                        focus: 'Reliability & scalability. Emphasize: Modern facilities, equipment capacity, batch documentation. Wide lab shots showing infrastructure scale. Compliance badges and certifications.',
                      },
                      {
                        audience: 'Regulatory Affairs',
                        focus: 'Compliance proof. Emphasize: QC stations, sterilization verification, lot tracking systems. Documentary-style photography of regulatory process. Every visual element traceable to documentation.',
                      },
                      {
                        audience: 'Clinical Teams (End Users)',
                        focus: 'Reliability confidence. Emphasize: Clean equipment, professional operation, outcome data. Images showing "this is science I can trust." Focus on final product quality and certifications.',
                      },
                    ].map((item) => (
                      <div key={item.audience} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 8 }}>{item.audience}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.focus}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Division accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Visual Treatment</SubHead><SubBody>Tissue Technology communications are evidence-driven. Data, specifications, and clinical proof must be visually prominent and easy to extract. Scientists and procurement teams scan for hard numbers first—make them discoverable through visual hierarchy and consistent formatting.</SubBody></>}>
                  <div style={{ background: c.cream, borderRadius: 12, padding: '24px 28px' }}>
                    <p style={{ ...sans, fontSize: 14, color: c.dark, lineHeight: 1.7, marginBottom: 20 }}>{div.colorUsage}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
                      {/* Data card example */}
                      <div style={{ background: c.sand, borderRadius: 8, overflow: 'hidden' }}>
                        <div style={{ height: 3, background: c.tigerRed }} />
                        <div style={{ padding: '16px 20px' }}>
                          <p style={{ ...sansMed, fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400 }}>Processing Metric</p>
                          <p style={{ ...serif, fontSize: 28, color: c.dark, marginTop: 4 }}>99.8%</p>
                          <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 4 }}>Sterility assurance level</p>
                        </div>
                      </div>
                      {/* Spec table example */}
                      <div style={{ background: c.sand, borderRadius: 8, padding: '16px 20px' }}>
                        <p style={{ ...sansMed, fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 10 }}>Spec Format</p>
                        {[
                          ['Temperature', '-80\u00B0C'],
                          ['Shelf Life', '5 years'],
                          ['Storage', 'Cryopreserved'],
                        ].map(([k, v]) => (
                          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: `1px solid ${c.bone}` }}>
                            <span style={{ ...sans, fontSize: 11, color: c.n500 }}>{k}</span>
                            <span style={{ ...mono, fontSize: 11, color: c.dark }}>{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TwoCol>
              </div>

              {/* Photography banner */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 0, height: 'clamp(120px, 25vw, 180px)', overflow: 'hidden', margin: '0 clamp(20px, 5vw, 64px)', borderRadius: 12 }}>
                <FillImageBlock src={`${IMG}/gallery-4.png`} alt="Lab processing" sizes="(min-width: 1280px) 40vw, 80vw" />
                <FillImageBlock src={`${IMG}/aesthetics-breast.png`} alt="Quality control station" sizes="(min-width: 1280px) 25vw, 60vw" />
              </div>

              {/* Division accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Unique Elements</SubHead><SubBody>Patterns specific to Tissue Technology that differ from other divisions.</SubBody></>}>
                  <div>
                    {[
                      ['Monospace data tables', 'Technical specifications use mono typeface for numerical data. SF Mono or system monospace.'],
                      ['Red data accent bars', 'Thin red bars (3px) top stat cards and data visualizations.'],
                      ['Evidence callouts', 'Clinical data presented with sample size (n=), confidence intervals, and source citations.'],
                      ['Process diagrams', 'Step-by-step processing flows use numbered cream cards with connecting lines.'],
                    ].map(([title, desc]) => (
                      <div key={title} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${c.bone}` }}>
                        <p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>{title}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n500, lineHeight: 1.6 }}>{desc}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Division accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Process Flow</SubHead><SubBody>R&D documentation requires a narrative structure that builds credibility. Start with raw materials, move through processing steps, and end with final product specifications. This step-ladder format is required for regulatory submissions and customer certifications.</SubBody></>}>
                  <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.linen}` }}>
                    {tissueProcess.map((item, idx) => (
                      <div key={item.step} style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: 12, padding: '14px 0', borderBottom: idx === tissueProcess.length - 1 ? 'none' : `1px solid ${c.bone}` }}>
                        <div style={{ ...mono, fontSize: 12, color: c.tigerRed }}>{item.step}</div>
                        <p style={{ ...sans, fontSize: 12, color: c.n500 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Division accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Evidence Modules</SubHead><SubBody>Pairs of components to showcase science.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      ['Spec Deck', 'Use mono tables, dual-tone backgrounds, and snapshot photos of lab instrumentation.'],
                      ['Graph Module', 'Line charts with grid lattices and orange highlight lines; annotate every inflection point.'],
                      ['Callout Pair', 'Combine hero stat, sample size, and inline citation for peer-reviewed references.'],
                      ['Compliance Footer', 'Include lot number, process ID, and QC owner initials.'],
                    ].map(([title, desc]) => (
                      <div key={title} style={{ background: c.cream, borderRadius: 12, padding: '22px 24px', border: `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 13, color: c.dark }}>{title}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n500, marginTop: 6, lineHeight: 1.6 }}>{desc}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Division accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Messaging Pillars</SubHead><SubBody>Core messages for Tissue Technology communications. Every asset must reinforce at least one pillar.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      {
                        pillar: 'Uncompromising Quality',
                        message: 'Our processing yields 99.8% sterility assurance. Every batch meets military-grade standards. We publish our yields and failure rates—competitors hide them.',
                      },
                      {
                        pillar: 'Regulatory Readiness',
                        message: 'Every Tiger platform product ships with pre-built compliance documentation. FDA, CE, and regional clearances. Your team can launch faster.',
                      },
                      {
                        pillar: 'Platform Scalability',
                        message: 'Our CAMPs platform powers all divisions—Wound Care, Aesthetics, Dermatology, International. Single platform, infinite applications. One QC system for all markets.',
                      },
                      {
                        pillar: 'Scientific Transparency',
                        message: 'We publish outcomes and processing specs in peer-reviewed journals. Sample size, confidence intervals, methods. No hidden data.',
                      },
                    ].map((item) => (
                      <div key={item.pillar} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 8 }}>{item.pillar}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.message}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>
        })()}

          {/* 02-2-5 DERMATOLOGY */}
          {active === 'dermatology' && (() => {
            const div = divisionData['dermatology']
            const typo = divisionTypography['dermatology']
            const palette = divisionColorPalette['dermatology']
            return <>
              <div className={sectionClassName} style={{ background: c.sand }}>
              <DivisionHero divKey="dermatology" div={div} onBack={() => navigate('divisions-overview')} />

              {/* ── CORAL INTRO BAND ── */}
              <div style={{ background: div.hex, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 800 }}>
                  <p style={{ ...serif, fontSize: 'clamp(24px, 4vw, 36px)', color: c.white, lineHeight: 1.4, marginBottom: 20 }}>
                    Regenerative tissue science meets clinical skin care.
                  </p>
                  <p style={{ ...sans, fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: 640 }}>
                    {div.description}
                  </p>
                </div>
              </div>

              {/* ── PHOTOGRAPHY BANNER ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, height: 'clamp(240px, 35vw, 420px)', overflow: 'hidden' }}>
                <FillImageBlock src={`${IMG}/gallery-6.png`} alt="Skin care" sizes="33vw" />
                <FillImageBlock src={`${IMG}/portrait-1.png`} alt="Patient" sizes="33vw" />
                <FillImageBlock src={`${IMG}/gallery-8.png`} alt="Diverse patients" sizes="33vw" />
              </div>

              {/* ── AUDIENCE + TONE ── */}
              <div style={{ background: '#FDF0ED', padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
                  <div>
                    <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 20 }}>Target Audiences</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {div.audiences.map((a: string) => (
                        <span key={a} style={{ ...sansReg, fontSize: 12, background: c.white, color: c.dark, borderRadius: 999, padding: '10px 22px', border: `1px solid ${c.bone}` }}>{a}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 20 }}>Brand Tone</p>
                    <p style={{ ...serif, fontSize: 22, color: c.dark, lineHeight: 1.4 }}>{div.tone}</p>
                  </div>
                </div>
              </div>

              {/* ── TYPOGRAPHY ── */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px 0' }} />
              <DivisionTypographySection typo={typo} divHex={div.hex} description="Typographic rules for Dermatology. Warmer and more approachable than Wound Care, with patient-friendly sizing and reassuring emphasis." />

              {/* ── COLOR PALETTE ── */}
              <div style={{ height: 3, background: div.hex, margin: '0 64px' }} />
              <DivisionColorPaletteSection palette={palette} description="Complete color system for Dermatology. Coral conveys warmth and approachability while maintaining clinical credibility." />

              {/* ── VISUAL TREATMENT ── */}
              <div style={{ height: 3, background: div.hex, margin: '0 64px' }} />
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Visual Treatment</SubHead><SubBody>How Dermatology colors apply in practice. Coral accents signal warmth and approachability.</SubBody></>}>
                  <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.linen}` }}>
                    <p style={{ ...sans, fontSize: 14, color: c.dark, lineHeight: 1.7, marginBottom: 20 }}>{div.colorUsage}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                      <div style={{ borderRadius: 8, overflow: 'hidden' }}>
                        <div style={{ background: div.hex, padding: '20px 20px' }}>
                          <p style={{ ...serif, fontSize: 18, color: c.white }}>Hero Section</p>
                          <p style={{ ...sans, fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Coral on dark</p>
                        </div>
                      </div>
                      <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                        <div style={{ background: c.cream, padding: '20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                          <span style={{ ...sans, fontSize: 12, background: div.hex, color: c.white, borderRadius: 999, padding: '8px 24px', alignSelf: 'flex-start' }}>CTA Button</span>
                          <p style={{ ...sans, fontSize: 11, color: c.n500 }}>Coral pill on cream</p>
                        </div>
                      </div>
                      <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                        <div style={{ background: '#FDF0ED', padding: '20px 20px' }}>
                          <p style={{ ...sansMed, fontSize: 13, color: div.hex }}>Accent Text</p>
                          <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 4 }}>Coral text on tint</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TwoCol>
              </div>

              {/* ── PHOTOGRAPHY DIRECTION ── */}
              <div style={{ background: c.dark, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 16 }}>Photography Direction</p>
                <p style={{ ...serif, fontSize: 'clamp(22px, 3vw, 32px)', color: c.white, lineHeight: 1.4, maxWidth: 600, marginBottom: 40 }}>
                  Warm, human, reassuring. Never clinical or intimidating.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
                  {[
                    ['Skin health and restoration', 'Close-up photography showing healthy skin outcomes. Natural lighting, warm tones. Never graphic or distressing.'],
                    ['Clinical consultation', 'Dermatologist and patient in conversation. Warm, well-lit examination rooms. Professional but approachable.'],
                    ['Treatment application', 'Product application in clinical settings. Clean technique shots showing precision and care.'],
                    ['Patient outcomes', 'Healing progress documented with dignity. Focus on skin health, not dramatic transformation.'],
                    ['Professional environments', 'Modern dermatology clinics, clean treatment rooms. Warm color temperature, natural light preferred.'],
                  ].map(([title, desc]) => (
                    <div key={title} style={{ borderLeft: `2px solid ${div.hex}`, paddingLeft: 20 }}>
                      <p style={{ ...sansMed, fontSize: 14, color: c.white, marginBottom: 6 }}>{title}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n400, lineHeight: 1.6 }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── PHOTOGRAPHY BANNER 2 ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0, height: 'clamp(200px, 28vw, 340px)', overflow: 'hidden' }}>
                <FillImageBlock src={`${IMG}/product-amplifine-new.png`} alt="Treatment technology" sizes="66vw" />
                <FillImageBlock src={`${IMG}/product-amplifine.png`} alt="Clinical detail" sizes="33vw" />
              </div>

              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              {/* PHOTOGRAPHY DO'S & DON'TS */}
              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Photography Do&apos;s &amp; Don&apos;ts</SubHead><SubBody>Concrete guidance for Dermatology visual standards.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      { type: 'do', icon: '\u2713', label: 'Warm, naturally lit clinical environments', desc: 'Modern treatment rooms with natural light. Clean but inviting. Feels like a place patients want to be.' },
                      { type: 'dont', icon: '\u2715', label: 'Cold, sterile, fluorescent-lit spaces', desc: 'Dermatology is elective for many patients. Sterile imagery discourages visits.' },
                      { type: 'do', icon: '\u2713', label: 'Close-up healthy skin with natural texture', desc: 'Show real skin with pores, texture, and natural variation. Genuine health, not perfection.' },
                      { type: 'dont', icon: '\u2715', label: 'Heavily retouched or airbrushed skin', desc: 'Undermines clinical credibility and sets unrealistic expectations.' },
                      { type: 'do', icon: '\u2713', label: 'Patient-clinician interaction with eye contact', desc: 'Builds trust through human connection. Shows the consultative relationship.' },
                      { type: 'dont', icon: '\u2715', label: 'Patients as passive objects of treatment', desc: 'Patients should appear engaged and empowered, never objectified.' },
                      { type: 'do', icon: '\u2713', label: 'Diverse patient demographics', desc: 'All skin types, ages, and backgrounds. Dermatology serves everyone.' },
                      { type: 'dont', icon: '\u2715', label: 'Only young, conventionally attractive patients', desc: 'Excludes the majority of actual patients. Feels cosmetic, not clinical.' },
                    ].map((item, idx) => (
                      <div key={idx} style={{ background: item.type === 'do' ? '#F0FDF4' : '#FEF2F2', borderRadius: 12, padding: '20px 20px', border: `1px solid ${item.type === 'do' ? '#DCFCE7' : '#FECACA'}`, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{ ...sansMed, fontSize: 16, color: item.type === 'do' ? '#16A34A' : '#DC2626', flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                        <div>
                          <p style={{ ...sansMed, fontSize: 13, color: item.type === 'do' ? '#166534' : '#7F1D1D', marginBottom: 4 }}>{item.label}</p>
                          <p style={{ ...sans, fontSize: 12, color: item.type === 'do' ? '#15803D' : '#991B1B', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              {/* AUDIENCE-SPECIFIC PHOTOGRAPHY */}
              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Audience-Specific Photography</SubHead><SubBody>Each audience needs different visual reassurance.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                    {[
                      { audience: 'Dermatologists', focus: 'Clinical precision and outcomes. Emphasize: Product efficacy, tissue quality, application technique. Photography showing clear clinical results and professional technique.' },
                      { audience: 'Skin Care Clinicians', focus: 'Ease of integration. Emphasize: Treatment workflow, patient satisfaction, product simplicity. Photography showing seamless clinical adoption.' },
                      { audience: 'Burn Centers', focus: 'Critical care competence. Emphasize: Sterility, tissue engineering quality, healing outcomes. More clinical tone — closer to Wound Care photography direction.' },
                      { audience: 'Patients & Families', focus: 'Safety and confidence. Emphasize: Warm environments, caring professionals, successful outcomes. Photography that builds trust and reduces anxiety about treatment.' },
                    ].map((item) => (
                      <div key={item.audience} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 8 }}>{item.audience}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.focus}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              {/* MESSAGING PILLARS */}
              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Messaging Pillars</SubHead><SubBody>Core messages for Dermatology communications. Position Tiger as the trusted partner in clinical skin science.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      { pillar: 'Regenerative Science', message: 'Tiger Dermatology brings the same tissue science platform trusted by wound care specialists to clinical skin applications. Lead with the platform, not individual products.' },
                      { pillar: 'Patient-Centered Outcomes', message: 'Every communication centers on patient quality of life. Scar reduction, skin restoration, and confidence are outcomes — products are the mechanism.' },
                      { pillar: 'Clinical Warmth', message: 'Dermatology patients are often self-referring. Tone must be approachable and reassuring. Clinical credibility without clinical intimidation.' },
                      { pillar: 'Evidence-Based Trust', message: 'Support every claim with clinical data. Dermatologists expect peer-reviewed evidence. Include study citations, sample sizes, and confidence intervals.' },
                    ].map((item) => (
                      <div key={item.pillar} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 8 }}>{item.pillar}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.message}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
              </div>
            </>
          })()}

          {/* 02-4 INTERNATIONAL */}
          {active === 'international' && (() => {
            const div = divisionData['international']
            const typo = divisionTypography['international']
            const palette = divisionColorPalette['international']
            return <>
              <div className={sectionClassName} style={{ background: c.sand }}>
              <DivisionHero divKey="international" div={div} onBack={() => navigate('divisions-overview')} />

              {/* ── BLUE INTRO BAND ── */}
              <div style={{ background: div.hex, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 800 }}>
                  <p style={{ ...serif, fontSize: 'clamp(24px, 4vw, 36px)', color: c.white, lineHeight: 1.4, marginBottom: 20 }}>
                    Global reach, local partnership. Tiger products and expertise across borders.
                  </p>
                  <p style={{ ...sans, fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: 640 }}>
                    {div.description}
                  </p>
                </div>
              </div>

              {/* ── PHOTOGRAPHY TRIPTYCH ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, height: 'clamp(240px, 35vw, 420px)', overflow: 'hidden' }}>
                <FillImageBlock src={`${IMG}/gallery-11.png`} alt="Global teams" sizes="33vw" />
                <FillImageBlock src={`${IMG}/bellafill-hero.png`} alt="International clinics" sizes="33vw" />
                <FillImageBlock src={`${IMG}/hero-tiger-2.png`} alt="Tiger global" sizes="33vw" />
              </div>

              {/* ── REGIONAL PRODUCT AVAILABILITY ── */}
              <div style={{ padding: '64px 0' }}>
                <TwoCol left={<><SubHead>Regional Product Availability</SubHead><SubBody>Products launched by region and market readiness status.</SubBody></>}>
                  <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.linen}` }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
                      {div.products.map((p) => (
                        <div key={p.region} style={{ background: c.cream, borderRadius: 12, padding: '18px 16px', border: `1px solid ${c.bone}` }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                            <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{p.region}</p>
                            <span style={{ ...mono, fontSize: 10, background: c.white, color: div.hex, borderRadius: 4, padding: '3px 8px' }}>{p.status}</span>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {p.available.map((prod) => (
                              <p key={prod} style={{ ...sans, fontSize: 11, color: c.n600 }}>• {prod}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TwoCol>
              </div>

              {/* ── AUDIENCE + TONE ── */}
              <div style={{ background: '#EBF0F5', padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
                  <div>
                    <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 20 }}>Target Audiences</p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {div.audiences.map((a: string) => (
                        <span key={a} style={{ ...sansReg, fontSize: 12, background: c.white, color: c.dark, borderRadius: 999, padding: '10px 22px', border: `1px solid ${c.bone}` }}>{a}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 20 }}>Brand Tone</p>
                    <p style={{ ...serif, fontSize: 22, color: c.dark, lineHeight: 1.4 }}>{div.tone}</p>
                  </div>
                </div>
              </div>

              {/* ── TYPOGRAPHY ── */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px 0' }} />
              <DivisionTypographySection typo={typo} divHex={div.hex} description="Typographic rules for International. Institutional authority with multilingual considerations. All type must work across Latin, Arabic, and CJK character sets." />

              {/* ── COLOR PALETTE ── */}
              <div style={{ height: 3, background: div.hex, margin: '0 64px' }} />
              <DivisionColorPaletteSection palette={palette} description="Complete color system for International. Tiger Blue signals global authority and institutional trust across all markets." />

              {/* ── VISUAL TREATMENT ── */}
              <div style={{ height: 3, background: div.hex, margin: '0 64px' }} />
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Visual Treatment</SubHead><SubBody>How International colors apply in practice. Blue accents signal global authority and institutional trust.</SubBody></>}>
                  <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.linen}` }}>
                    <p style={{ ...sans, fontSize: 14, color: c.dark, lineHeight: 1.7, marginBottom: 20 }}>{div.colorUsage}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                      <div style={{ borderRadius: 8, overflow: 'hidden' }}>
                        <div style={{ background: div.hex, padding: '20px 20px' }}>
                          <p style={{ ...serif, fontSize: 18, color: c.white }}>Hero Section</p>
                          <p style={{ ...sans, fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Blue on dark</p>
                        </div>
                      </div>
                      <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                        <div style={{ background: c.cream, padding: '20px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                          <span style={{ ...sans, fontSize: 12, background: div.hex, color: c.white, borderRadius: 999, padding: '8px 24px', alignSelf: 'flex-start' }}>CTA Button</span>
                          <p style={{ ...sans, fontSize: 11, color: c.n500 }}>Blue pill on cream</p>
                        </div>
                      </div>
                      <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                        <div style={{ background: '#EBF0F5', padding: '20px 20px' }}>
                          <p style={{ ...sansMed, fontSize: 13, color: div.hex }}>Accent Text</p>
                          <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 4 }}>Blue text on tint</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TwoCol>
              </div>

              {/* ── PHOTOGRAPHY DIRECTION ── */}
              <div style={{ background: c.dark, padding: 'clamp(40px, 6vw, 80px) clamp(20px, 5vw, 64px)' }}>
                <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: div.hex, marginBottom: 16 }}>Photography Direction</p>
                <p style={{ ...serif, fontSize: 'clamp(22px, 3vw, 32px)', color: c.white, lineHeight: 1.4, maxWidth: 600, marginBottom: 40 }}>
                  Global, human, respectful. Never sterile or corporate.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
                  {[
                    ['International healthcare settings', 'Clinics and hospitals in EU, Middle East, APAC markets. Real-world environments showing diverse care delivery models. Warm, natural lighting.'],
                    ['Global teams and diversity', 'Healthcare professionals from represented regions. Authentic group photography showing collaboration. Natural expressions, professional context.'],
                    ['Patient-focused imagery', 'Patients receiving care in international settings. Emphasize safety, dignity, and access. Include diverse ages, ethnicities, and patient presentations.'],
                    ['Regional training and education', 'Tiger representatives training clinicians in local markets. Documentation of knowledge transfer and capability building. Professional workshop settings.'],
                    ['Market and operational photography', 'Distribution centers, regulatory signage, regional partnerships, local team environments. Photography that tells the story of market presence.'],
                  ].map(([title, desc]) => (
                    <div key={title} style={{ borderLeft: `2px solid ${div.hex}`, paddingLeft: 20 }}>
                      <p style={{ ...sansMed, fontSize: 14, color: c.white, marginBottom: 6 }}>{title}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n400, lineHeight: 1.6 }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── PHOTOGRAPHY BANNER 2 ── */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 0, height: 'clamp(200px, 28vw, 340px)', overflow: 'hidden' }}>
                <FillImageBlock src={`${IMG}/product-bellafill.png`} alt="Global distribution" sizes="66vw" />
                <FillImageBlock src={`${IMG}/product-aveli.png`} alt="International product" sizes="33vw" />
              </div>

              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              {/* PHOTOGRAPHY DO'S & DON'TS */}
              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Photography Do&apos;s &amp; Don&apos;ts</SubHead><SubBody>Concrete guidance for International visual standards.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      { type: 'do', icon: '✓', label: 'Diverse healthcare teams from represented regions', desc: 'Authentic group photography. Real environments, natural expressions, professional context.' },
                      { type: 'dont', icon: '✕', label: 'Generic diversity stock imagery', desc: 'Feels inauthentic. Show actual Tiger team presence and real market environments.' },
                      { type: 'do', icon: '✓', label: 'Real clinics and hospitals in target markets', desc: 'Show regional presence authentically. Different facility types for different markets.' },
                      { type: 'dont', icon: '✕', label: 'Generic white-walled medical facilities', desc: 'Every market has unique infrastructure. Show local context and regional adaptation.' },
                      { type: 'do', icon: '✓', label: 'Patient care moments with dignity', desc: 'Real care delivery, diverse patient presentations. Emphasize access and competence.' },
                      { type: 'dont', icon: '✕', label: 'Before/after transformations', desc: 'Feels exploitative in international contexts. Focus on care delivery, not outcomes.' },
                      { type: 'do', icon: '✓', label: 'Training and knowledge transfer documentation', desc: 'Clinicians learning from Tiger representatives. Shows capability building.' },
                      { type: 'dont', icon: '✕', label: '"Helping hand" or charity-framed imagery', desc: 'Implies savior narrative. Position as partner and equal collaborator.' },
                    ].map((item, idx) => (
                      <div key={idx} style={{ background: item.type === 'do' ? '#F0FDF4' : '#FEF2F2', borderRadius: 12, padding: '20px 20px', border: `1px solid ${item.type === 'do' ? '#DCFCE7' : '#FECACA'}`, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                        <div style={{ ...sansMed, fontSize: 16, color: item.type === 'do' ? '#16A34A' : '#DC2626', flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                        <div>
                          <p style={{ ...sansMed, fontSize: 13, color: item.type === 'do' ? '#166534' : '#7F1D1D', marginBottom: 4 }}>{item.label}</p>
                          <p style={{ ...sans, fontSize: 12, color: item.type === 'do' ? '#15803D' : '#991B1B', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Localization</SubHead><SubBody>Considerations for international materials.</SubBody></>}>
                  <div>
                    {[
                      ['Language flexibility', 'All typography guidelines apply across languages. Right-to-left layouts mirror the grid but maintain the same hierarchy.'],
                      ['Regulatory adaptation', 'Different markets require different disclaimer styles. Use the standard cream callout card with region-specific copy.'],
                      ['Photography localization', 'Photography should reflect regional diversity. Maintain the warm, human direction regardless of market.'],
                      ['Co-branding', 'When partnering with distributors, Tiger International maintains visual priority. Partner logos appear secondary in the blue palette.'],
                    ].map(([title, desc]) => (
                      <div key={title} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${c.bone}` }}>
                        <p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>{title}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n500, lineHeight: 1.6 }}>{desc}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Blue accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Messaging Pillars</SubHead><SubBody>Core messages for International communications. Position Tiger as a trusted partner in every market.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    {[
                      {
                        pillar: 'Local Partnership',
                        message: 'Tiger understands regional healthcare systems. We hire local teams, support local hospitals, and adapt to regional regulations. Not a global brand parachuting in—a committed partner.',
                      },
                      {
                        pillar: 'Accessible Innovation',
                        message: 'Tiger technology is built for the world, not just wealthy markets. Competitive pricing, flexible deployment, and local training make advanced tissue solutions available everywhere.',
                      },
                      {
                        pillar: 'Regulatory Ease',
                        message: 'Pre-built regulatory packs for EU, CE, GCC, MENA. Tiger handles the compliance burden so your clinicians focus on patient care.',
                      },
                      {
                        pillar: 'Global Standards, Local Care',
                        message: 'Identical Tiger quality and reliability across all markets. Same sterility assurance, same clinical proof, adapted to how you deliver care locally.',
                      },
                    ].map((item) => (
                      <div key={item.pillar} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 8 }}>{item.pillar}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.message}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Blue accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Rollout Map</SubHead><SubBody>Planned launches across regions.</SubBody></>}>
                  <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.linen}` }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 12, fontSize: 12, color: c.n600, borderBottom: `1px solid ${c.bone}`, paddingBottom: 12 }}>
                      <span>Region</span><span>Status</span><span>Detail</span><span>Target</span>
                    </div>
                    {internationalRollouts.map((row) => (
                      <div key={row.region} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 12, padding: '12px 0', borderBottom: `1px solid ${c.bone}` }}>
                        <span style={{ ...sansMed, color: c.dark }}>{row.region}</span>
                        <span>{row.status}</span>
                        <span>{row.detail}</span>
                        <span>{row.quarter}</span>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>

              {/* Blue accent divider */}
              <div style={{ height: 3, background: div.hex, margin: '64px 64px' }} />

              <div style={{ padding: '56px 0' }}>
                <TwoCol pb={64} left={<><SubHead>Compliance Toolkit</SubHead><SubBody>Universal blocks required in every market-ready artifact.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                    {[
                      ['Market Footer', 'Use bilingual disclaimers, AE reporting links, and distribution addresses.'],
                      ['Partner Strip', 'Mix Tiger International + partner logo with 60/40 ratio.'],
                      ['Reg Badge', 'CE / FDA / local approvals in pill format under hero CTA.'],
                      ['Localization Checklist', 'Language, currency, imagery, and compliance owner signed off.'],
                    ].map((item) => (
                      <div key={item[0]} style={{ background: c.cream, borderRadius: 12, padding: '22px 24px', border: `1px solid ${c.bone}` }}>
                        <p style={{ ...sansMed, fontSize: 13, color: c.dark }}>{item[0]}</p>
                        <p style={{ ...sans, fontSize: 12, color: c.n500, marginTop: 6 }}>{item[1]}</p>
                      </div>
                    ))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>
        })()}

          {/* 02-3-0 LOGO SYSTEM */}
          {active === 'logo' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="02-3-0" title="Logo System" parentLabel="Visual Identity" onBack={() => navigate('foundations')} />

            {/* Primary mark — large hero display */}
            <div style={{ padding: '0 64px 56px' }}>
              <div style={{ background: c.cream, borderRadius: 16, padding: '80px 64px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
                <Image src="/assets/tiger/logos/tiger-circle-logo.png" alt="Tiger BioSciences primary mark" width={200} height={200} style={{ objectFit: 'contain' }} />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.n400, marginBottom: 8 }}>Primary Mark</p>
                  <p style={{ ...sans, fontSize: 13, color: c.n500 }}>Tiger BioSciences circle mark. Use at all sizes where the wordmark is not required.</p>
                </div>
              </div>
            </div>

            {/* All lockup variants */}
            <TwoCol left={<><SubHead>Lockup Variants</SubHead><SubBody>Three approved configurations. Use horizontal for most applications. Stacked for square formats. Mark-only for small sizes and avatars.</SubBody></>}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Horizontal */}
                <div style={{ background: c.cream, borderRadius: 12, padding: '32px 40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                    <Image src="/assets/tiger/logos/tiger-circle-logo.png" alt="Circle mark" width={52} height={52} style={{ objectFit: 'contain' }} />
                    <p style={{ fontFamily: "'Neuropa', sans-serif", fontWeight: 300, fontSize: 28, color: c.dark, letterSpacing: '-0.025em' }}>Tiger BioSciences<sup style={{ fontSize: 10 }}>&trade;</sup></p>
                  </div>
                  <p style={{ ...mono, fontSize: 10, color: c.n400 }}>Horizontal — default for web headers, documents, presentations</p>
                </div>
                {/* Mark + stacked wordmark */}
                <div style={{ background: c.cream, borderRadius: 12, padding: '32px 40px', display: 'flex', alignItems: 'center', gap: 40 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                    <Image src="/assets/tiger/logos/tiger-circle-logo.png" alt="Mark for stacked lockup" width={64} height={64} style={{ objectFit: 'contain' }} />
                    <p style={{ fontFamily: "'Neuropa', sans-serif", fontWeight: 300, fontSize: 14, color: c.dark, letterSpacing: '0.05em', textAlign: 'center' }}>Tiger BioSciences<sup style={{ fontSize: 6 }}>&trade;</sup></p>
                  </div>
                  <p style={{ ...mono, fontSize: 10, color: c.n400 }}>Stacked — square formats, packaging, badges</p>
                </div>
                {/* Mark only */}
                <div style={{ background: c.cream, borderRadius: 12, padding: '32px 40px', display: 'flex', alignItems: 'center', gap: 40 }}>
                  <Image src="/assets/tiger/logos/tiger-circle-logo.png" alt="Mark only" width={64} height={64} style={{ objectFit: 'contain' }} />
                  <p style={{ ...mono, fontSize: 10, color: c.n400 }}>Mark only — avatars, favicons, watermarks, sizes below 120px wide</p>
                </div>
                {/* Horizontal secondary (neuropa wordmark) */}
                <div style={{ background: c.cream, borderRadius: 12, padding: '32px 40px' }}>
                  <Image src="/assets/tiger/logos/biosciences/secondary/horizontal-neuropa.png" alt="Tiger BioSciences horizontal wordmark" width={320} height={40} style={{ objectFit: 'contain', marginBottom: 16 }} />
                  <p style={{ ...mono, fontSize: 10, color: c.n400 }}>Wordmark-only — co-branding contexts where mark is already established on page</p>
                </div>
              </div>
            </TwoCol>
            {/* Division logos — large display */}
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Division Logos</SubHead><SubBody>Each division carries its own mark within the Tiger family. Division marks share the circular format and maintain consistent clear space rules.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                  {[
                    { name: 'Tiger BioSciences', role: 'Parent', src: '/assets/tiger/logos/tiger-circle-logo.png', hex: c.dark },
                    { name: 'Tiger Wound Care', role: 'Wound Care Division', src: '/assets/tiger/logos/tiger_wound_care_logo.png', hex: '#DF512B' },
                    { name: 'Tiger International', role: 'International Division', src: '/assets/tiger/logos/tiger_international_logo.png', hex: '#2D5782' },
                    { name: 'Tiger Aesthetics', role: 'Aesthetics Division', src: '/assets/tiger/logos/tiger_aesthetics_logo.webp', hex: '#D2A62C' },
                    { name: 'Tiger Tissue Technology', role: 'Tissue Technology Division', src: '/assets/tiger/logos/tiger-circle-logo.png', hex: '#C03227' },
                    { name: 'Tiger Dermatology', role: 'Dermatology Division', src: '/assets/tiger/logos/tiger-circle-logo.png', hex: '#E8735A' },
                  ].map((d) => (
                    <div key={d.role} style={{ background: c.cream, borderRadius: 12, padding: '40px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                      <Image src={d.src} alt={`${d.name} division logo`} width={120} height={120} style={{ objectFit: 'contain' }} />
                      <div style={{ textAlign: 'center' }}>
                        <p style={{ ...sansMed, fontSize: 13, color: c.dark }}>{d.name}</p>
                        <p style={{ ...sans, fontSize: 11, color: c.n400, marginTop: 4 }}>{d.role}</p>
                        <div style={{ width: 20, height: 3, borderRadius: 2, background: d.hex, margin: '10px auto 0' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            {/* Horizontal division wordmarks */}
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Division Wordmarks</SubHead><SubBody>Secondary lockups for division-level communications. Used in headers and footers of division-specific materials.</SubBody></>}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { src: '/assets/tiger/logos/biosciences/secondary/horizontal-neuropa.png', label: 'Parent — Neuropa horizontal' },
                    { src: '/assets/tiger/logos/wound-care/secondary/horizontal-neuropa.png', label: 'Wound Care — Neuropa horizontal' },
                    { src: '/assets/tiger/logos/international/secondary/horizontal-neuropa.png', label: 'International — Neuropa horizontal' },
                  ].map((w) => (
                    <div key={w.label} style={{ background: c.cream, borderRadius: 10, padding: '28px 32px' }}>
                      <Image src={w.src} alt={w.label} width={320} height={36} style={{ objectFit: 'contain', display: 'block', marginBottom: 12 }} />
                      <p style={{ ...mono, fontSize: 10, color: c.n400 }}>{w.label}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            {/* Background usage */}
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Background Usage</SubHead><SubBody>The mark adapts to four surface types. Always test contrast before production. Never use the color mark on a dark background.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {/* Light */}
                  <div style={{ borderRadius: 12, overflow: 'hidden' }}>
                    <div style={{ background: c.cream, padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 140 }}>
                      <Image src="/assets/tiger/logos/tiger-circle-logo.png" alt="Color mark on light background" width={80} height={80} style={{ objectFit: 'contain' }} />
                    </div>
                    <div style={{ background: c.n100, padding: '10px 16px' }}>
                      <p style={{ ...mono, fontSize: 10, color: c.n500 }}>✓ Color mark on cream/light</p>
                    </div>
                  </div>
                  {/* Dark */}
                  <div style={{ borderRadius: 12, overflow: 'hidden' }}>
                    <div style={{ background: c.dark, padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 140 }}>
                      <Image src="/assets/tiger/logos/biosciences/primary/circle-bw-transparent.png" alt="White mark on dark background" width={80} height={80} style={{ objectFit: 'contain' }} />
                    </div>
                    <div style={{ background: c.n100, padding: '10px 16px' }}>
                      <p style={{ ...mono, fontSize: 10, color: c.n500 }}>✓ White/BW mark on dark</p>
                    </div>
                  </div>
                  {/* Photography */}
                  <div style={{ borderRadius: 12, overflow: 'hidden' }}>
                    <div style={{ background: `url(${SCREENS}/home-page.png) center top / cover`, padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 140 }}>
                      <Image src="/assets/tiger/logos/biosciences/primary/circle-bw-transparent.png" alt="White mark on photography" width={80} height={80} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    </div>
                    <div style={{ background: c.n100, padding: '10px 16px' }}>
                      <p style={{ ...mono, fontSize: 10, color: c.n500 }}>✓ White mark on photography</p>
                    </div>
                  </div>
                  {/* Sand */}
                  <div style={{ borderRadius: 12, overflow: 'hidden' }}>
                    <div style={{ background: c.sand, padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 140 }}>
                      <Image src="/assets/tiger/logos/tiger-circle-logo.png" alt="Color mark on sand background" width={80} height={80} style={{ objectFit: 'contain' }} />
                    </div>
                    <div style={{ background: c.n100, padding: '10px 16px' }}>
                      <p style={{ ...mono, fontSize: 10, color: c.n500 }}>✓ Color mark on sand</p>
                    </div>
                  </div>
                </div>
              </TwoCol>
            </div>
            {/* Clear space + minimum size */}
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Clear Space</SubHead><SubBody>Minimum clear space equals the radius of the circular mark. No text, graphics, or other logos may enter this zone.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div style={{ background: c.cream, borderRadius: 12, padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', top: -24, left: -24, right: -24, bottom: -24, border: `1.5px dashed ${c.n300}`, borderRadius: '50%' }} />
                      <Image src="/assets/tiger/logos/tiger-circle-logo.png" alt="Logo showing clear space" width={80} height={80} style={{ objectFit: 'contain', display: 'block' }} />
                      <div style={{ position: 'absolute', top: '50%', right: -40, width: 16, height: 1, background: c.tigerRed }} />
                      <p style={{ ...mono, fontSize: 9, color: c.tigerRed, position: 'absolute', top: '50%', right: -70 }}>1× R</p>
                    </div>
                  </div>
                  <div style={{ background: c.cream, borderRadius: 12, padding: '24px' }}>
                    <p style={{ ...sansMed, fontSize: 11, color: c.n400, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>Minimum Sizes</p>
                    {[
                      ['Digital icon / favicon', '16px'],
                      ['Small avatar / app icon', '32px'],
                      ['Inline with text', '24px'],
                      ['Horizontal lockup min width', '120px'],
                      ['Print minimum', '0.5 inch'],
                    ].map(([label, val]) => (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${c.bone}` }}>
                        <p style={{ ...sans, fontSize: 12, color: c.dark }}>{label}</p>
                        <p style={{ ...mono, fontSize: 12, color: c.tigerRed }}>{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TwoCol>
            </div>
            {/* Incorrect usage */}
            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Incorrect Usage</SubHead><SubBody>These are the most common logo violations. Any partner, vendor, or internal team receiving brand assets should review this page.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                  {[
                    { label: 'Do not rotate', style: { transform: 'rotate(35deg)' } },
                    { label: 'Do not stretch', style: { transform: 'scaleX(1.6)' } },
                    { label: 'Do not add drop shadow', style: { filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.6))' } },
                    { label: 'Do not add outline/stroke', style: { filter: 'drop-shadow(0 0 3px #DF512B) drop-shadow(0 0 3px #DF512B)' } },
                    { label: 'Do not use on busy bg', bg: 'repeating-linear-gradient(45deg, #eee 0px, #eee 5px, #ddd 5px, #ddd 10px)' },
                    { label: 'Do not recolor', style: { filter: 'hue-rotate(200deg) saturate(3)' } },
                  ].map((ex, i) => (
                    <div key={i} style={{ borderRadius: 10, overflow: 'hidden', border: `1.5px solid #EF4444` }}>
                      <div style={{ background: ex.bg || c.cream, padding: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100, position: 'relative' }}>
                        <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 14, color: '#EF4444', fontWeight: 700 }}>✕</span>
                        <Image src="/assets/tiger/logos/tiger-circle-logo.png" alt="Incorrect usage example" width={52} height={52} style={{ objectFit: 'contain', ...(ex.style || {}) }} />
                      </div>
                      <div style={{ background: '#FEF2F2', padding: '8px 12px' }}>
                        <p style={{ ...sans, fontSize: 10, color: '#EF4444' }}>{ex.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            </div>
          </>}

          {/* 02-3-1 COLOR SYSTEM */}
          {active === 'color' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="02-3-1" title="Color System" parentLabel="Visual Identity" onBack={() => navigate('foundations')} />

            <TwoCol left={<><SubHead>Primary Palette</SubHead><SubBody>Five core colors — four division accents plus the warm dark used for all primary text and headings.</SubBody></>}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Brand anchor — Tiger Red sits above the division palette */}
                <div>
                  <p style={{ ...mono, fontSize: 10, color: c.n400, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Brand Anchor</p>
                  <div
                    style={{ borderRadius: 12, overflow: 'hidden', cursor: 'pointer' }}
                    onClick={() => navigator.clipboard.writeText('#C03227')}
                    title="Click to copy"
                  >
                    <div style={{ height: 80, background: '#C03227', display: 'flex', alignItems: 'flex-end', padding: 14, transition: 'opacity 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                      <span style={{ ...mono, fontSize: 10, color: 'rgba(255,255,255,0.55)' }}>#C03227</span>
                    </div>
                    <div style={{ background: c.cream, padding: '12px 14px' }}>
                      <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>Tiger Red</p>
                      <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 2 }}>Parent brand CTAs, primary actions, hero moments</p>
                    </div>
                  </div>
                </div>
                {/* Division palette */}
                <div>
                  <p style={{ ...mono, fontSize: 10, color: c.n400, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>Division Colors</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
                    {[
                      { name: 'Wound Care', hex: '#DF512B', desc: 'Wound management' },
                      { name: 'Aesthetics', hex: '#D2A62C', desc: 'Luxury & beauty' },
                      { name: 'Dermatology', hex: '#E8735A', desc: 'Skin health' },
                      { name: 'International', hex: '#2D5782', desc: 'Global reach' },
                      { name: 'Warm Dark', hex: '#221010', desc: 'Text & headings' },
                    ].map((p) => (
                      <div key={p.name} style={{ borderRadius: 12, overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText(p.hex)} title="Click to copy">
                        <div style={{ height: 100, background: p.hex, display: 'flex', alignItems: 'flex-end', padding: 12, transition: 'opacity 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                          <span style={{ ...mono, fontSize: 9, color: 'rgba(255,255,255,0.55)' }}>{p.hex}</span>
                        </div>
                        <div style={{ background: c.cream, padding: '10px 12px' }}>
                          <p style={{ ...sansMed, fontSize: 11, color: c.dark }}>{p.name}</p>
                          <p style={{ ...sans, fontSize: 10, color: c.n500, marginTop: 2 }}>{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TwoCol>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Background Tones</SubHead><SubBody>Warm off-whites and cream tones create a soft, premium feel across all surfaces.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
                  {[
                    { name: 'Warm White', hex: '#FFFEFE' },
                    { name: 'Cream', hex: '#F6F2EB' },
                    { name: 'Sand', hex: '#EFECE9' },
                    { name: 'Linen', hex: '#EFEDEA' },
                    { name: 'Bone', hex: '#E0DBD4' },
                    { name: 'Gold Light', hex: '#EBE3D0' },
                  ].map((bg) => (
                    <div key={bg.name} style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText(bg.hex)} title="Click to copy hex code">
                      <div style={{ width: '100%', aspectRatio: '1', borderRadius: 10, background: bg.hex, border: `1px solid ${c.n200}`, marginBottom: 8, transition: 'opacity 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')} />
                      <p style={{ ...sansMed, fontSize: 10, color: c.dark }}>{bg.name}</p>
                      <p style={{ ...mono, fontSize: 9, color: c.n400, marginTop: 2 }}>{bg.hex}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Usage Rules</SubHead><SubBody>Colors that should never appear in Tiger materials.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                  {[
                    { hex: '#2563EB', label: 'Generic bright blue (use #2D5782 for International only)' },
                    { hex: '#FFFFFF', label: 'Pure white backgrounds' },
                    { hex: '#000000', label: 'Pure black text' },
                  ].map((a) => (
                    <div key={a.hex} style={{ display: 'flex', alignItems: 'center', gap: 12, background: c.cream, borderRadius: 10, padding: '14px 16px' }}>
                      <div style={{ width: 28, height: 28, borderRadius: 6, background: a.hex, flexShrink: 0, border: `1px solid ${c.n200}`, position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', top: '50%', left: -2, right: -2, height: 2, background: c.tigerRed, transform: 'rotate(-45deg)' }} />
                      </div>
                      <p style={{ ...sans, fontSize: 12, color: c.n500 }}>{a.label}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Contrast Pairing</SubHead><SubBody>Approved color combinations for text and backgrounds.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { bg: c.cream, text: c.dark, label: 'Dark on Cream' },
                    { bg: c.tigerRed, text: c.white, label: 'White on Tiger Red' },
                    { bg: c.orange, text: c.white, label: 'White on Wound Orange' },
                    { bg: c.gold, text: c.white, label: 'White on Gold' },
                    { bg: c.coral, text: c.white, label: 'White on Dermatology Coral' },
                    { bg: c.blue, text: c.white, label: 'White on Blue' },
                    { bg: c.dark, text: c.white, label: 'White on Dark' },
                  ].map((pair) => (
                    <div key={pair.label} style={{ borderRadius: 10, overflow: 'hidden' }}>
                      <div style={{ background: pair.bg, padding: '20px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ ...serif, fontSize: 20, color: pair.text }}>Aa</span>
                        <span style={{ ...mono, fontSize: 9, color: pair.text, opacity: 0.5 }}>{pair.bg}</span>
                      </div>
                      <div style={{ background: c.cream, padding: '8px 14px' }}>
                        <p style={{ ...sans, fontSize: 11, color: c.n500 }}>{pair.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Brand Spectrum</SubHead><SubBody>Hue positioning (0°–360°) by division for quick guardrails.</SubBody></>}>
                <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(100px, 1fr))', gap: 16 }}>
                    {[
                      { name: 'Tiger Bio', hex: c.tigerRed, deg: '8°', desc: 'Parent hero & CTAs' },
                      { name: 'Wound Care', hex: c.orange, deg: '18°', desc: 'Division-specific CTAs' },
                      { name: 'Aesthetics', hex: c.gold, deg: '43°', desc: 'Luxury surfaces' },
                      { name: 'Dermatology', hex: c.coral, deg: '11°', desc: 'Skin health & restoration' },
                      { name: 'International', hex: c.blue, deg: '210°', desc: 'Global/regulatory' },
                    ].map((brand) => (
                      <div key={brand.name} style={{ textAlign: 'center', borderRadius: 12, padding: '18px 14px', background: c.cream, border: `1px solid ${c.n200}`, cursor: 'pointer', transition: 'background 0.2s' }} onClick={() => navigator.clipboard.writeText(brand.hex)} title="Click to copy hex code" onMouseEnter={(e) => (e.currentTarget.style.background = c.bone)} onMouseLeave={(e) => (e.currentTarget.style.background = c.cream)}>
                        <div style={{ width: 48, height: 48, borderRadius: '50%', background: brand.hex, margin: '0 auto 8px' }} />
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{brand.name}</p>
                        <p style={{ ...mono, fontSize: 10, color: c.n500 }}>{brand.deg}</p>
                        <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 4 }}>{brand.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TwoCol>
            </div>
            {/* Division Pattern System */}
            <div style={{ padding: '56px 0 0' }}>
              <div style={{ padding: '0 clamp(20px, 5vw, 64px)', marginBottom: 48 }}>
                <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 8 }}>Division Pattern System</p>
                <p style={{ ...serif, fontSize: 32, color: c.dark, marginBottom: 14 }}>Signature Backgrounds</p>
                <p style={{ ...sans, fontSize: 15, color: c.n500, lineHeight: 1.7, maxWidth: 600 }}>Secondary graphic expressions — one per division. These patterns carry division identity across hero surfaces, print materials, digital overlays, and branded environments without relying on photography. Each expression has a defined visual vocabulary, composition system, and color anchor set.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {([
                  {
                    key: 'wound-care' as const,
                    hex: '#DF512B',
                    anchors: [{ hex: '#DF512B', name: 'Wound Orange' }, { hex: '#402017', name: 'Deep Ground' }],
                    motif: 'Biomorphic circles drawn from cellular matrix cross-sections. Overlapping rings at varied opacity create organic depth — the visual language of tissue regeneration at scale.',
                    vocab: ['Biomorphic', 'Cellular depth', 'Organic overlap', 'Warm ground'],
                    do: ['Hero section backgrounds', 'CTA overlays', 'Print chapter covers', 'Section dividers', 'Clinical brochure interiors'],
                    dont: ['Body copy backgrounds', 'Small UI components', 'Light-mode surfaces', 'Aesthetics division materials'],
                  },
                  {
                    key: 'aesthetics' as const,
                    hex: '#D2A62C',
                    anchors: [{ hex: '#D2A62C', name: 'Aesthetic Gold' }, { hex: '#2C1A11', name: 'Deep Ground' }],
                    motif: 'Diagonal sweep with gold luminance blooming from the upper left — referencing luxury editorial and the curvature of the human form. The most lifestyle-adjacent expression in the system.',
                    vocab: ['Diagonal sweep', 'Gold luminance', 'Soft bloom', 'Editorial luxury'],
                    do: ['Premium hero cards', 'Luxury print covers', 'Product detail overlays', 'Dark-mode banners', 'Surgeon-facing presentations'],
                    dont: ['Clinical data contexts', 'Dense copy sections', 'Wound care or Tissue Tech materials', 'Patient-facing clinical forms'],
                  },
                  {
                    key: 'tissue-tech' as const,
                    hex: '#C03227',
                    anchors: [{ hex: '#C03227', name: 'Tiger Red' }, { hex: '#1E1A1A', name: 'Near Black' }],
                    motif: 'Precision technical grid referencing lab instrumentation and microscopy calibration overlays. The silence between the lines is as intentional as the grid — whitespace equals scientific rigor.',
                    vocab: ['Technical grid', 'Thin rule', 'Lab precision', 'Near-black silence'],
                    do: ['Data dashboards', 'R&D documents', 'Scientific reports', 'Technical spec sheets', 'Regulatory submissions'],
                    dont: ['Patient-facing materials', 'Aesthetic or beauty contexts', 'Light backgrounds', 'Consumer-facing content'],
                  },
                  {
                    key: 'dermatology' as const,
                    hex: '#E8735A',
                    anchors: [{ hex: '#E8735A', name: 'Dermal Coral' }, { hex: '#3D1F1A', name: 'Deep Ground' }],
                    motif: 'Radial flows at offset centers referencing skin layer cross-sections and cellular renewal pathways. Softer and warmer than Wound Care — designed to read as approachable clinical authority.',
                    vocab: ['Radial flow', 'Dermal warmth', 'Soft overlay', 'Skin-layer reference'],
                    do: ['Patient brochures', 'Clinical section headers', 'Skin health materials', 'Digital care guides', 'Dermatology event materials'],
                    dont: ['Wound care contexts', 'Heavy data presentations', 'Corporate investor decks', 'Tissue Tech materials'],
                  },
                  {
                    key: 'international' as const,
                    hex: '#2D5782',
                    anchors: [{ hex: '#2D5782', name: 'Tiger Blue' }, { hex: '#102740', name: 'Deep Navy' }],
                    motif: 'Repeating horizontal rules at global latitude cadence with a radial bloom from a polar origin point. Coordinate geometry as brand language — precision meets reach.',
                    vocab: ['Parallel rule', 'Coordinate geometry', 'Deep navy authority', 'Global reach'],
                    do: ['Global hero strips', 'Partner decks', 'Regulatory submissions', 'Distribution overlays', 'International event materials'],
                    dont: ['US-only clinical materials', 'Aesthetics division assets', 'Consumer-facing content', 'Patient education'],
                  },
                ] as const).map(({ key, hex, anchors, motif, vocab, do: doList, dont }, i) => {
                  const div = divisionData[key]
                  const isLast = i === 4
                  return (
                    <div key={key} style={{ borderBottom: isLast ? 'none' : `1px solid ${c.bone}` }}>
                      {/* Pattern preview — full bleed, tall */}
                      <div style={{ height: 360, background: div.pattern.css, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px 40px' }}>
                        {/* Color anchor pills — top left */}
                        <div style={{ position: 'absolute', top: 28, left: 40, display: 'flex', gap: 8 }}>
                          {anchors.map((a) => (
                            <div key={a.name} style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(0,0,0,0.4)', borderRadius: 20, padding: '5px 12px 5px 7px', backdropFilter: 'blur(8px)' }}>
                              <div style={{ width: 10, height: 10, borderRadius: '50%', background: a.hex, flexShrink: 0, boxShadow: '0 0 0 1px rgba(255,255,255,0.2)' }} />
                              <span style={{ ...mono, fontSize: 10, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.06em' }}>{a.hex}</span>
                            </div>
                          ))}
                        </div>
                        {/* Division number — top right */}
                        <div style={{ position: 'absolute', top: 28, right: 40 }}>
                          <span style={{ ...mono, fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em' }}>0{i + 1} / 05</span>
                        </div>
                        {/* Vocabulary tags */}
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                          {vocab.map((v) => (
                            <span key={v} style={{ ...mono, fontSize: 9, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', padding: '4px 12px', borderRadius: 20 }}>{v}</span>
                          ))}
                        </div>
                        <p style={{ ...mono, fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>{div.name}</p>
                        <p style={{ ...serif, fontSize: 40, color: 'rgba(255,255,255,0.95)', lineHeight: 1.0, letterSpacing: '-0.01em' }}>{div.pattern.name}</p>
                      </div>

                      {/* Detail row — 3 columns */}
                      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', borderTop: `1px solid ${c.bone}` }}>

                        {/* Graphic Language + Composition Variants */}
                        <div style={{ padding: '32px 40px', borderRight: `1px solid ${c.bone}` }}>
                          <p style={{ ...mono, fontSize: 9, color: c.n400, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Graphic Language</p>
                          <p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.75, marginBottom: 28 }}>{motif}</p>

                          <p style={{ ...mono, fontSize: 9, color: c.n400, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Composition Variants</p>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                            <div>
                              <div style={{ height: 80, background: div.pattern.css, borderRadius: 8, marginBottom: 8 }} />
                              <p style={{ ...mono, fontSize: 9, color: c.n400, letterSpacing: '0.08em', textAlign: 'center' }}>Hero</p>
                              <p style={{ ...sans, fontSize: 10, color: c.n300, textAlign: 'center', marginTop: 2 }}>Full bleed</p>
                            </div>
                            <div>
                              <div style={{ height: 80, background: div.pattern.css, backgroundSize: '120px 120px', borderRadius: 8, marginBottom: 8 }} />
                              <p style={{ ...mono, fontSize: 9, color: c.n400, letterSpacing: '0.08em', textAlign: 'center' }}>Card</p>
                              <p style={{ ...sans, fontSize: 10, color: c.n300, textAlign: 'center', marginTop: 2 }}>Contained</p>
                            </div>
                            <div>
                              <div style={{ height: 24, background: div.pattern.css, borderRadius: 4, marginBottom: 8 }} />
                              <p style={{ ...mono, fontSize: 9, color: c.n400, letterSpacing: '0.08em', textAlign: 'center' }}>Strip</p>
                              <p style={{ ...sans, fontSize: 10, color: c.n300, textAlign: 'center', marginTop: 2 }}>Divider</p>
                            </div>
                          </div>
                        </div>

                        {/* Use For / Avoid */}
                        <div style={{ padding: '32px 32px', borderRight: `1px solid ${c.bone}` }}>
                          <p style={{ ...mono, fontSize: 9, color: c.n400, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Use For</p>
                          {doList.map((item) => (
                            <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                              <span style={{ color: hex, fontSize: 11, lineHeight: '18px', flexShrink: 0 }}>✓</span>
                              <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.55 }}>{item}</p>
                            </div>
                          ))}
                          <div style={{ height: 20 }} />
                          <p style={{ ...mono, fontSize: 9, color: c.n400, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Avoid</p>
                          {dont.map((item) => (
                            <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8 }}>
                              <span style={{ color: c.n300, fontSize: 11, lineHeight: '18px', flexShrink: 0 }}>✕</span>
                              <p style={{ ...sans, fontSize: 12, color: c.n400, lineHeight: 1.55 }}>{item}</p>
                            </div>
                          ))}
                        </div>

                        {/* CSS + Color Anchors */}
                        <div style={{ padding: '32px 32px' }}>
                          <p style={{ ...mono, fontSize: 9, color: c.n400, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>CSS</p>
                          <pre
                            onClick={() => navigator.clipboard.writeText(`background: ${div.pattern.css};`)}
                            title="Click to copy"
                            style={{ ...mono, fontSize: 10, color: c.n500, lineHeight: 1.65, whiteSpace: 'pre-wrap', wordBreak: 'break-all', cursor: 'pointer', background: c.n50, borderRadius: 8, padding: '12px 14px', margin: '0 0 6px', border: `1px solid ${c.bone}` }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = c.cream)}
                            onMouseLeave={(e) => (e.currentTarget.style.background = c.n50)}
                          >{`background:\n${div.pattern.css};`}</pre>
                          <p style={{ ...sans, fontSize: 10, color: c.n300, marginBottom: 28 }}>Click to copy</p>

                          <p style={{ ...mono, fontSize: 9, color: c.n400, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Color Anchors</p>
                          {anchors.map((a) => (
                            <div key={a.name} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                              <div style={{ width: 32, height: 32, borderRadius: 7, background: a.hex, flexShrink: 0, border: `1px solid ${c.bone}` }} />
                              <div>
                                <p style={{ ...sansMed, fontSize: 11, color: c.dark }}>{a.name}</p>
                                <p style={{ ...mono, fontSize: 10, color: c.n400 }}>{a.hex}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            </div>
          </>}

          {/* 02-3-1a COLOR MAPPING */}
          {active === 'color-mapping' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="02-3-1a" title="Color Mapping" parentLabel="Color System" onBack={() => navigate('color')} />

            <TwoCol left={<><SubHead>Division Mapping</SubHead><SubBody>Each division has a primary accent color used for CTAs, key messaging, and division-specific content.</SubBody></>}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                {[
                  { name: 'Wound Care', hex: '#DF512B', role: 'Wound management, healing, clinical focus' },
                  { name: 'Aesthetics', hex: '#D2A62C', role: 'Beauty, confidence, premium outcomes' },
                  { name: 'Dermatology', hex: '#E8735A', role: 'Skin health, restoration, clinical dermatology' },
                  { name: 'International', hex: '#2D5782', role: 'Global reach, regulatory compliance' },
                  { name: 'Tissue Technology', hex: '#C03227', role: 'Inherits Tiger Red — proprietary science, parent brand anchor' },
                ].map((div) => (
                  <div key={div.name} style={{ background: c.white, borderRadius: 12, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                    <div style={{ height: 64, background: div.hex }} />
                    <div style={{ padding: '18px 20px' }}>
                      <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 4 }}>{div.name}</p>
                      <p style={{ ...mono, fontSize: 11, color: c.n400, marginBottom: 8 }}>{div.hex}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{div.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TwoCol>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Semantic Mapping</SubHead><SubBody>How colors convey meaning in UI and messaging contexts.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                  {[
                    { label: 'Primary Action', color: c.tigerRed, hex: '#C03227', meaning: 'Main CTAs, hero buttons, critical links' },
                    { label: 'Success / Positive', color: '#22C55E', hex: '#22C55E', meaning: 'Approvals, healing progress, confirmations' },
                    { label: 'Warning / Caution', color: '#F59E0B', hex: '#F59E0B', meaning: 'Alerts, important notices, reviews needed' },
                    { label: 'Error / Critical', color: '#EF4444', hex: '#EF4444', meaning: 'Errors, rejections, system failures' },
                    { label: 'Info / Neutral', color: c.blue, hex: '#2D5782', meaning: 'Informational states, help text, data display' },
                    { label: 'Disabled / Inactive', color: c.bone, hex: '#E0DBD4', meaning: 'Disabled states, archived content' },
                  ].map((item) => (
                    <div key={item.label} style={{ background: c.white, borderRadius: 12, overflow: 'hidden', border: `1px solid ${c.bone}` }}>
                      <div style={{ display: 'flex', height: 56 }}>
                        <div style={{ flex: 1, background: item.color }} />
                        <div style={{ flex: 1, background: c.sand }} />
                      </div>
                      <div style={{ padding: '16px 18px' }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 2 }}>{item.label}</p>
                        <p style={{ ...mono, fontSize: 10, color: c.n400, marginBottom: 6 }}>{item.hex}</p>
                        <p style={{ ...sans, fontSize: 11, color: c.n600, lineHeight: 1.5 }}>{item.meaning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Interactive States</SubHead><SubBody>Color modifiers for hover, active, and disabled states across all interactive elements.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0 }}>
                  {[
                    { state: 'Default (Rest)', action: 'Button uses primary color', example: c.tigerRed },
                    { state: 'Hover', action: 'Darken by 10–15% opacity or shade', example: 'rgba(192, 50, 39, 0.85)' },
                    { state: 'Active / Pressed', action: 'Darken by 20–25%, add slight inset shadow', example: 'rgba(192, 50, 39, 0.7)' },
                    { state: 'Focus (Keyboard)', action: 'Add 2px outline in Tiger Red + 3px offset', example: 'Outline mode' },
                    { state: 'Disabled', action: 'Shift to neutral (Bone #E0DBD4), reduce opacity to 0.4', example: c.bone },
                  ].map((item, i) => (
                    <div key={item.state} style={{ display: 'flex', borderBottom: i < 4 ? `1px solid ${c.bone}` : 'none' }}>
                      <div style={{ flex: '0 0 140px', background: c.cream, padding: '16px 18px', display: 'flex', alignItems: 'center' }}>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{item.state}</p>
                      </div>
                      <div style={{ flex: 1, padding: '16px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p style={{ ...sans, fontSize: 12, color: c.n600 }}>{item.action}</p>
                        <div style={{ width: 48, height: 32, borderRadius: 6, background: item.example, border: `1px solid ${c.n200}` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Product & Service Mapping</SubHead><SubBody>How colors align with specific product lines and service tiers.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  {[
                    { product: 'Bellafill®', division: 'Aesthetics', color: '#D2A62C', tier: 'Premium' },
                    { product: 'Avéli®', division: 'Aesthetics', color: '#D2A62C', tier: 'Premium' },
                    { product: 'Amplifine®', division: 'Aesthetics', color: '#D2A62C', tier: 'Premium' },
                    { product: 'Wound Care Portfolio', division: 'Wound Care', color: '#DF512B', tier: 'Clinical' },
                    { product: 'Tissue Matrix', division: 'Tissue Technology', color: '#C03227', tier: 'Proprietary' },
                    { product: 'International Distribution', division: 'International', color: '#2D5782', tier: 'Global' },
                    { product: 'dermaGRAFT™ / SkinMatrix™', division: 'Dermatology', color: '#E8735A', tier: 'Clinical' },
                  ].map((product) => (
                    <div key={product.product} style={{ background: c.white, borderRadius: 12, padding: '18px 20px', border: `1px solid ${c.bone}` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                        <div style={{ width: 28, height: 28, borderRadius: 6, background: product.color }} />
                        <div>
                          <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{product.product}</p>
                          <p style={{ ...sans, fontSize: 10, color: c.n500 }}>{product.division}</p>
                        </div>
                      </div>
                      <div style={{ paddingTop: 12, borderTop: `1px solid ${c.bone}` }}>
                        <p style={{ ...sans, fontSize: 10, color: c.n400, marginBottom: 4 }}>Service Tier</p>
                        <span style={{ ...sansMed, fontSize: 11, color: c.dark, background: c.cream, padding: '4px 10px', borderRadius: 4, display: 'inline-block' }}>{product.tier}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            </div>
          </>}

          {/* 02-3-2 TYPOGRAPHY */}
          {active === 'typography' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="02-3-2" title="Typography" parentLabel="Visual Identity" onBack={() => navigate('foundations')} />

            <TwoCol left={<><SubHead>Typefaces</SubHead><SubBody>Neuropa for logo wordmarks and display. Alexandria for subheadings and body. Inter for UI and data.</SubBody></>}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                <div style={{ background: c.cream, borderRadius: 12, padding: '28px 24px', textAlign: 'center' }}>
                  <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.n400, marginBottom: 16 }}>Display / Logo</p>
                  <p style={{ fontFamily: "'Neuropa', sans-serif", fontWeight: 500, fontSize: 40, color: c.dark, lineHeight: 1.05 }}>Neuropa</p>
                  <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 8 }}>Medium 500 &middot; Logo wordmark only</p>
                  <div style={{ marginTop: 20, padding: '16px 0', borderTop: `1px solid ${c.bone}` }}>
                    <p style={{ fontFamily: "'Neuropa', sans-serif", fontWeight: 500, fontSize: 20, color: c.dark, opacity: 0.35, letterSpacing: '0.04em' }}>Aa Bb Cc Dd Ee</p>
                  </div>
                </div>
                <div style={{ background: c.cream, borderRadius: 12, padding: '28px 24px', textAlign: 'center' }}>
                  <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.n400, marginBottom: 16 }}>Subheading / Body</p>
                  <p style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 300, fontSize: 40, color: c.dark, lineHeight: 1 }}>Alexandria</p>
                  <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 8 }}>Light 300 / Medium 500</p>
                  <div style={{ marginTop: 20, padding: '16px 0', borderTop: `1px solid ${c.bone}` }}>
                    <p style={{ fontFamily: "'Alexandria', sans-serif", fontWeight: 300, fontSize: 20, color: c.dark, opacity: 0.35, letterSpacing: '0.04em' }}>Aa Bb Cc Dd Ee</p>
                  </div>
                </div>
                <div style={{ background: c.cream, borderRadius: 12, padding: '28px 24px', textAlign: 'center' }}>
                  <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.n400, marginBottom: 16 }}>UI / Data</p>
                  <p style={{ ...sansReg, fontSize: 40, color: c.dark, lineHeight: 1 }}>Inter</p>
                  <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 8 }}>300 / 400 / 500</p>
                  <div style={{ marginTop: 20, padding: '16px 0', borderTop: `1px solid ${c.bone}` }}>
                    <p style={{ ...sansReg, fontSize: 20, color: c.dark, opacity: 0.35, letterSpacing: '0.04em' }}>Aa Bb Cc Dd Ee</p>
                  </div>
                </div>
              </div>
            </TwoCol>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Type Hierarchy</SubHead><SubBody>Scale from display (80px) down to overlines (12px). Serif for headings, sans for everything else.</SubBody></>}>
                <div>
                  {[
                    { label: 'Display', size: 80, f: serif, sample: 'Our Vision' },
                    { label: 'H1', size: 64, f: serif, sample: 'The Gift of Donation' },
                    { label: 'H2', size: 48, f: serif, sample: 'Core Values' },
                    { label: 'H3', size: 20, f: serif, sample: 'Tissue Stewardship' },
                    { label: 'Lead', size: 18, f: sans, sample: 'Advancing regenerative medicine through innovation.' },
                    { label: 'Body', size: 14.6, f: sans, sample: 'Every product we create begins with a gift of tissue donation.' },
                    { label: 'Small', size: 13, f: sans, sample: 'Learn More' },
                    { label: 'Overline', size: 12, f: sansReg, sample: 'CLINICAL EXCELLENCE', upper: true },
                  ].map((t) => (
                    <div key={t.label} style={{ display: 'flex', alignItems: 'baseline', gap: 20, borderBottom: `1px solid ${c.bone}`, padding: '16px 0' }}>
                      <div style={{ width: 56, flexShrink: 0 }}>
                        <span style={{ ...mono, fontSize: 9, color: c.n400 }}>{t.label}</span>
                        <br />
                        <span style={{ ...mono, fontSize: 9, color: c.n300 }}>{t.size}px</span>
                      </div>
                      <p style={{ ...t.f, fontSize: Math.min(t.size, 44), lineHeight: t.size > 30 ? 1.1 : 1.5, color: c.dark, textTransform: (t as any).upper ? 'uppercase' as const : undefined, letterSpacing: (t as any).upper ? '0.26em' : t.size > 40 ? '-0.02em' : undefined }}>
                        {t.sample}
                      </p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Weight Usage</SubHead><SubBody>The system favors lighter weights. Reserve 500+ for labels and UI emphasis only.</SubBody></>}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { weight: 300, name: 'Light', use: 'Body text, descriptions, long-form copy', f: sans },
                    { weight: 400, name: 'Regular', use: 'Overlines, navigation, secondary labels', f: sansReg },
                    { weight: 500, name: 'Medium', use: 'UI labels, emphasis, category headers', f: sansMed },
                  ].map((w) => (
                    <div key={w.weight} style={{ background: c.cream, borderRadius: 10, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 20 }}>
                      <span style={{ ...w.f, fontSize: 28, color: c.dark, width: 80, flexShrink: 0 }}>Aa</span>
                      <div>
                        <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{w.weight} {w.name}</p>
                        <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 2 }}>{w.use}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            </div>
          </>}

          {/* 02-3-3 PHOTOGRAPHY */}
          {active === 'photography' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="02-3-3" title="Photography" parentLabel="Visual Identity" onBack={() => navigate('foundations')} />

            <TwoCol left={<><SubHead>Direction</SubHead><SubBody>Photography is the primary visual driver. Imagery replaces abstract patterns and SVG graphics.</SubBody></>}>
              <div>
                {[
                  ['Warm clinical environments', 'Soft lighting, cream and neutral tones. Not harsh fluorescent.'],
                  ['Human outcomes', 'Close-up beauty and skin imagery. Dignified, never exploitative.'],
                  ['Product hero shots', 'Clean cream backgrounds, soft shadows. Premium packaging feel.'],
                  ['Natural warmth', 'Skin tones, warm lighting, organic textures. Life, not laboratory.'],
                  ['The gift of donation', 'Human connection, hands, care moments. Emotional but restrained.'],
                  ['Tiger imagery', 'The tiger as symbol of strength. Close-up eye, emblem, medallion.'],
                ].map(([title, desc]) => (
                  <div key={title} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: `1px solid ${c.bone}` }}>
                    <p style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 4 }}>{title}</p>
                    <p style={{ ...sans, fontSize: 13, color: c.n500, lineHeight: 1.6 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </TwoCol>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Reference Grid</SubHead><SubBody>Product photography on cream backgrounds with soft shadows. Hero sections use full-bleed close-up photography.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <Photo src="hero-tiger-1.png" h={180} label="Tiger close-up" />
                  <Photo src="gallery-3.png" h={180} label="Product on cream" />
                  <Photo src="beauty-1.png" h={180} label="Skin / beauty" />
                  <Photo src="gallery-5.png" h={180} label="Clinical warmth" />
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Gallery</SubHead><SubBody>Approved photography examples from the Tiger visual system. Warm tones, natural light, human subjects.</SubBody></>}>
                <div>
                  {/* Hero row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12, marginBottom: 12 }}>
                    <Photo src="hero-tiger-2.png" h={240} label="Hero treatment" />
                    <Photo src="portrait-1.png" h={240} label="Portrait" />
                  </div>
                  {/* Grid row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 12 }}>
                    <Photo src="gallery-2.png" h={220} label="Texture" />
                    <Photo src="gallery-4.png" h={220} label="Detail" />
                    <Photo src="gallery-6.png" h={220} label="Warmth" />
                  </div>
                  {/* Wide banner */}
                  <Photo src="hero-banner-1.png" h={180} label="Full-width banner" />
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Division-Specific Approaches</SubHead><SubBody>Each division applies the warm photography direction differently. Clinical, aesthetic, and international contexts demand distinct visual languages while maintaining the unified Tiger aesthetic.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                  {[
                    {
                      division: 'Wound Care',
                      approach: 'Clinical competence and donor respect. Sterile environments, professional application, lab documentation. Emphasizes process rigor—every photo should feel peer-reviewed. Hard technical lighting for credibility.',
                      notFor: 'Patient transformation, beauty, aesthetics. Never show before/afters or patient outcomes as "success stories."'
                    },
                    {
                      division: 'Aesthetics',
                      approach: 'Confidence and transformation. Aspirational yet authentic—natural skin texture, warm lighting, real expressions. Emphasizes patient outcomes and provider credibility. Premium styling with gold accents and elegant props.',
                      notFor: 'Clinical coldness, overly retouched perfection, or sterile lab settings. Never feel pharmaceutical or institutional.'
                    },
                    {
                      division: 'Tissue Technology',
                      approach: 'Precision and evidence. Laboratory equipment, quality-control stations, specimens, data. Technical precision—macro focus on compliance markers, processing equipment, and statistical proof. Hard technical lighting emphasizes rigor.',
                      notFor: 'Human subjects, patient outcomes, beauty. Stay abstract and evidence-focused. No clinical application—focus on platform/infrastructure.'
                    },
                    {
                      division: 'Dermatology',
                      approach: 'Clinical skin science and patient restoration. Dermatological consultation settings, treatment documentation, and skin health imagery. Warm but clinical—showing expertise and patient trust. Coral accent reflects the division\'s approachable clinical identity.',
                      notFor: 'Beauty/cosmetic imagery (that\'s Aesthetics). Avoid overly graphic clinical conditions without context. Never feel pharmaceutical or cold.'
                    },
                    {
                      division: 'International',
                      approach: 'Global reach and accessible healthcare. Diverse healthcare teams, international clinics, patient care moments. Warm, human photography showing regional presence. Emphasizes collaboration, knowledge transfer, and cultural respect.',
                      notFor: 'Sterile or corporate imagery. Avoid generic "diversity" stock—show authentic market presence and real team environments.'
                    },
                  ].map((div) => (
                    <div key={div.division} style={{ background: c.cream, borderRadius: 12, padding: '24px 24px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 12 }}>{div.division}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                        <div>
                          <p style={{ ...sans, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.n400, marginBottom: 6 }}>Approach</p>
                          <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{div.approach}</p>
                        </div>
                        <div>
                          <p style={{ ...sans, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 6 }}>Do Not Use</p>
                          <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{div.notFor}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Photography Accessibility</SubHead><SubBody>Ensure all photography is accessible to diverse audiences.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                  {[
                    {
                      requirement: 'Alt Text & Descriptions',
                      guidance: 'Every photograph must have: (1) Short alt text (max 125 chars) describing content and division context, (2) Extended caption (50-100 words) for complex images (charts, equipment, clinical settings). Wound Care: "Lab technician in sterile gloves preparing tissue specimen on clean workspace (compliance documentation visible on clipboard)." Never generic: "image" or "photo."',
                    },
                    {
                      requirement: 'Color Contrast in Text Overlays',
                      guidance: 'If text appears over photography, maintain WCAG AAA contrast (7:1 minimum). Use semi-transparent overlays (cream or dark gradient) to ensure text readability. Test: small text (14px) must pass WCAG AAA at all zoom levels.',
                    },
                    {
                      requirement: 'Chart & Data Visualization',
                      guidance: 'Charts in photography or as overlays must be colorblind-friendly. Use pattern fills + color (not color alone). Include data table alternative for every visualization. Tissue Tech: red bars + pattern hatch so red-blind users see structure. Always provide numeric data alongside visual.',
                    },
                    {
                      requirement: 'Photographic Clarity',
                      guidance: 'Photography must be clear at all zoom levels (100%, 200%, mobile). Avoid tiny text embedded in images. Critical details (lot numbers, specifications) must be readable at 200% zoom. Test all images at mobile viewport before publishing.',
                    },
                    {
                      requirement: 'Video & Motion',
                      guidance: 'If photography is part of video or carousel: (1) Include captions for any audio, (2) Avoid flashing/strobing (no more than 3 flashes per second), (3) Allow pause controls, (4) Provide static image alternative for animation-sensitive users.',
                    },
                    {
                      requirement: 'Contextual Imagery',
                      guidance: 'Never use photography alone to communicate critical information. Always pair with text. Example: Wound Care before/after—photograph + text "92-96% closure rate in clinical trials (n=340)." Accessibility + compliance messaging in tandem.',
                    },
                  ].map((item) => (
                    <div key={item.requirement} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 8 }}>{item.requirement}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.guidance}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Sourcing & Commissioning</SubHead><SubBody>How to brief photographers and ensure division-specific photography aligns with Tiger standards.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                  {[
                    {
                      step: 'Identify the Right Photographer',
                      guidance: 'Wound Care: Seek medical/clinical photographers with peer-reviewed publication experience. Tissue Tech: Lab and instrumentation specialists (industrial/product photography). Aesthetics: Beauty and cosmetic photography backgrounds. Dermatology: Clinical skin photography specialists with medical documentation experience. International: Travel/photojournalism experience with cultural sensitivity training.',
                    },
                    {
                      step: 'Prepare a Visual Brief',
                      guidance: 'Provide reference images from approved galleries (not competitor work). Create a one-page mood board showing lighting, composition, and tone. Include "avoid" examples explicitly. Reference this document in your contract—it prevents misalignment on revision rounds.',
                    },
                    {
                      step: 'On-Set Lighting & Environment',
                      guidance: 'Wound Care: Soft daylight or professional warm LED (3200K). Never harsh fluorescent. Tissue Tech: Hard technical lighting emphasizing equipment detail (5600K daylight). Aesthetics: Warm, diffused light with subtle shadows. Dermatology: Clinical-grade consistent lighting for skin documentation (4000-5000K). International: Natural ambient light with supplemental warm fill.',
                    },
                    {
                      step: 'Composition & Framing Rules',
                      guidance: 'Wound Care: Close-ups emphasize process. Include compliance markers. Tissue Tech: Wide lab shots showing scale, then close-ups of detail. Aesthetics: Tight framing on skin texture and confidence. Dermatology: Clinical documentation framing with consistent patient positioning. International: Environmental portraits showing context and local setting.',
                    },
                    {
                      step: 'Post-Production Standards',
                      guidance: 'All divisions: Minimal retouching. Enhance warmth and clarity but preserve authenticity. NO heavy filters or artistic effects. Deliver in RAW + edited JPG. Keep all source files for 2+ years. Include location/date metadata.',
                    },
                    {
                      step: 'Quality Assurance Checklist',
                      guidance: 'Verify: (1) Division-specific visual language present, (2) Warm color temperature maintained, (3) Compliance markers visible where required, (4) No generic stock aesthetic, (5) Human subjects (if present) look authentic/undirected, (6) Technical specs readable (for Tissue Tech), (7) Lighting consistent with division tone.',
                    },
                  ].map(({ step, guidance }) => (
                    <div key={step} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 8 }}>{step}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{guidance}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Color-Photography Harmony</SubHead><SubBody>Each division's color palette influences photography choices and editing decisions.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                  {[
                    {
                      division: 'Wound Care (Orange #DF512B)',
                      harmony: 'Orange photographs require warm, amber-tinted lighting. Post-processing: increase warm tones, boost orange/red channel. Avoid cool blues. Lab settings benefit from warm LED (3200K). Pair orange graphics with clinical imagery—never soft beauty shots.',
                    },
                    {
                      division: 'Aesthetics (Gold #D2A62C)',
                      harmony: 'Gold photographs demand warm, diffused lighting with highlights. Post-processing: enhance golden hours, boost warm tones subtly. Perfect for golden hour shoots and soft shadows. Pair gold accents with close-ups of skin texture and natural beauty. Avoid clinical coldness.',
                    },
                    {
                      division: 'Tissue Technology (Red/Accent #C03227)',
                      harmony: 'Red accent bars demand crisp, high-contrast photography. Post-processing: increase clarity and micro-contrast, boost reds subtly. Hard technical lighting (5600K daylight) complements red elements. Red bars work best with clean, documentary-style lab photography.',
                    },
                    {
                      division: 'Dermatology (Coral #E8735A)',
                      harmony: 'Coral photographs benefit from warm, natural skin-tone lighting. Post-processing: preserve authentic skin tones, enhance warm coral accents subtly. Soft clinical lighting (4000-5000K) creates approachable yet professional feel. Pair coral accents with consultation and treatment imagery.',
                    },
                    {
                      division: 'International (Blue #2D5782)',
                      harmony: 'Blue photographs work with neutral to warm color temperatures. Post-processing: enhance natural skin tones, maintain warm whites. Blue works as accent in photography—use in skies, uniform elements, or environmental context. Avoid cool-tinted portraits (blue makes faces feel distant).',
                    },
                  ].map((item) => (
                    <div key={item.division} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 8 }}>{item.division}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.harmony}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Asset Management & Naming</SubHead><SubBody>How to organize and version photography assets across divisions.</SubBody></>}>
                <div>
                  <div style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}`, marginBottom: 16 }}>
                    <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 8, marginTop: 0 }}>Folder Structure</p>
                    <p style={{ ...mono, fontSize: 11, color: c.n600, lineHeight: 2 }}>
                      /assets/tiger/photos/<br/>
                      ├── wound-care/<br/>
                      │&nbsp;&nbsp;&nbsp;├── clinical-lab/<br/>
                      │&nbsp;&nbsp;&nbsp;├── application/<br/>
                      │&nbsp;&nbsp;&nbsp;├── specimens/<br/>
                      │&nbsp;&nbsp;&nbsp;└── documentation/<br/>
                      ├── aesthetics/<br/>
                      │&nbsp;&nbsp;&nbsp;├── skin-beauty/<br/>
                      │&nbsp;&nbsp;&nbsp;├── patient-confidence/<br/>
                      │&nbsp;&nbsp;&nbsp;└── product-elegance/<br/>
                      ├── tissue-tech/<br/>
                      │&nbsp;&nbsp;&nbsp;├── lab-processing/<br/>
                      │&nbsp;&nbsp;&nbsp;├── qc-stations/<br/>
                      │&nbsp;&nbsp;&nbsp;└── data-visualization/<br/>
                      ├── dermatology/<br/>
                      │&nbsp;&nbsp;&nbsp;├── consultations/<br/>
                      │&nbsp;&nbsp;&nbsp;├── treatment-documentation/<br/>
                      │&nbsp;&nbsp;&nbsp;└── skin-restoration/<br/>
                      └── international/<br/>
                      &nbsp;&nbsp;&nbsp;├── regional-clinics/<br/>
                      &nbsp;&nbsp;&nbsp;├── team-diversity/<br/>
                      &nbsp;&nbsp;&nbsp;└── training-transfer/
                    </p>
                  </div>
                  {[
                    ['Naming Convention', 'division-category-subject-version.jpg\nExample: wound-care-lab-microscopy-v02.jpg'],
                    ['Version Control', 'Keep source files (RAW) for 2+ years. Version numbering (v01, v02, v03) reflects updates—not just minor edits. Update to v02 only when significant crops, color grading, or orientation changes occur.'],
                    ['Metadata Requirements', 'Include in all photos: division, category, date taken, location, subject, photographer, usage rights. Embed in EXIF/IPTC. Essential for compliance and traceability audits.'],
                    ['Storage & Backup', 'Primary: Secure cloud storage (encrypted). Backup: 3-2-1 rule (3 copies, 2 media types, 1 offsite). Critical for regulatory investigations and historical documentation.'],
                  ].map(([title, desc]) => (
                    <div key={title} style={{ background: c.white, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}`, marginBottom: 12 }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 8 }}>{title}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Competitive Differentiation</SubHead><SubBody>What makes Tiger photography distinct in each market.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                  {[
                    {
                      division: 'Wound Care vs. Competitors',
                      edge: 'Competitors show beautiful patient transformations. Tiger shows: unambiguous compliance proof (QC badges, lot numbers visible in every image), clinical process documentation, and peer-reviewed rigor. We photograph *how* we earn trust, not just the outcome.',
                    },
                    {
                      division: 'Aesthetics vs. Competitors',
                      edge: 'Competitors use heavily retouched beauty photography. Tiger shows: authentic skin texture, natural confidence, warm humanity. Our photography says "this is achievable for real people," not "this is perfection."',
                    },
                    {
                      division: 'Tissue Tech vs. Competitors',
                      edge: 'Competitors use generic lab imagery or 3D renders. Tiger shows: real equipment, actual processing, real data. Every photograph is documentary evidence that our platform is modern, maintained, and scientifically rigorous.',
                    },
                    {
                      division: 'International vs. Competitors',
                      edge: 'Competitors show Tiger logos and facilities. We show: local teams, diverse clinicians, regional partnerships. Our photography says "we are present in your market as committed partners," not "we ship products from afar."',
                    },
                  ].map((item) => (
                    <div key={item.division} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 8 }}>{item.division}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.edge}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Avoid</SubHead><SubBody>Photography that undermines the warm, premium direction.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {[
                    'Stock photography of smiling doctors in blue scrubs',
                    'Generic molecule renders or DNA helix graphics',
                    'Cold, blue-tinted clinical photography',
                    'Abstract technology imagery',
                    'Overly saturated or heavily filtered images',
                    'SVG patterns or abstract geometry as primary visuals',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: c.cream, borderRadius: 8, padding: '12px 14px' }}>
                      <span style={{ ...sansMed, fontSize: 14, color: c.tigerRed, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>&times;</span>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.5 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Seasonal & Evergreen Strategy</SubHead><SubBody>Balance timeless core photography with campaign-specific assets.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                  {[
                    {
                      type: 'Evergreen Core (60% of library)',
                      guidance: 'Timeless, reusable photography that represents division identity across all campaigns. Wound Care: clinical lab environments, application technique, specimens. Aesthetics: skin texture, confidence moments. Dermatology: clinical skin conditions, treatment documentation, patient consultations. Tissue Tech: equipment, processing facilities. International: diverse team environments. Update: Every 18-24 months or when strategy pivots. Always maintain archive of previous evergreen sets for historical compliance.',
                    },
                    {
                      type: 'Campaign-Specific (30% of library)',
                      guidance: 'Photography for specific product launches, clinical trials, market entries. Wound Care: Launch of caregraFT requires before/after clinical photography. Aesthetics: New Bellafill campaign needs patient confidence + product elegance shots. Temporary use (6-12 months) then archive. Version as campaign-v01, campaign-v02 (for revisions).',
                    },
                    {
                      type: 'Seasonal & Time-Sensitive (10% of library)',
                      guidance: 'Conference season, Q4 year-end, back-to-school clinical adoption. Keep seasonal refreshes minimal—maintain core aesthetic while highlighting current focus. Example: Summer clinic refreshes (more natural light) vs. winter webinar campaigns. Document seasonal approach to maintain consistency year-over-year.',
                    },
                    {
                      type: 'Photography Forecast Planning',
                      guidance: 'Plan 6-12 months ahead: (1) Identify upcoming product launches requiring new photography, (2) Schedule annual refresh shoots (2-3 days per division), (3) Reserve budget for unexpected regulatory documentation needs, (4) Prepare evergreen refresh cycles. Wound Care: May refresh. Aesthetics: September refresh (ahead of cosmetic surgery season). Dermatology: July refresh (ahead of fall dermatology conference season). Tissue Tech: January refresh. International: March-April (ahead of summer launches).',
                    },
                  ].map((item) => (
                    <div key={item.type} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 8 }}>{item.type}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.guidance}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Photography Performance & Refresh</SubHead><SubBody>Evaluate photography effectiveness and know when to refresh assets.</SubBody></>}>
                <div>
                  <div style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}`, marginBottom: 16 }}>
                    <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 12, marginTop: 0 }}>Evaluation Metrics</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      {[
                        ['Engagement', 'Track click-through rates, time-on-page, video play rates. Photography-heavy pages should have 15%+ higher engagement than text-only.'],
                        ['Perception', 'Survey: "Does this photography feel authentic?" (target: 80%+). "Does it look different from competitors?" (target: 70%+).'],
                        ['Conversion', 'Email opens with photography assets vs. without. Target: 12-18% lift. Landing pages with division-specific photography convert higher.'],
                        ['Brand Recall', 'Post-campaign: "Can you identify this as Tiger?" (target: 70%+). "What division does this belong to?" (target: 80%+).'],
                        ['Media Pickup', 'How often is Tiger photography used in industry publications, news, partner materials? High reuse = authentic, relevant imagery.'],
                        ['Regulatory Acceptance', 'Photography used in submissions—do regulators request changes? Zero requests = properly documented and appropriate.'],
                      ].map(([metric, guidance]) => (
                        <div key={metric} style={{ background: c.sand, borderRadius: 8, padding: '14px 16px' }}>
                          <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 6 }}>{metric}</p>
                          <p style={{ ...sans, fontSize: 11, color: c.n600, lineHeight: 1.5 }}>{guidance}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {[
                    ['Refresh Triggers', 'Update photography when: (1) Division pivots strategy or launches new product line, (2) Competitor photography becomes visually similar, (3) Engagement drops 20%+ YoY, (4) Regulatory requirements change, (5) Market enters new regions requiring local imagery.'],
                    ['Refresh Approach', 'Do NOT discard all old assets. Refresh 30-40% per year (rotate out weakest performers, add new strong assets). Maintain consistency—photographers, locations, equipment remain consistent. Version and archive all old assets for compliance.'],
                    ['Photography Audit', 'Quarterly: (1) Check all assets align with division guidelines, (2) Verify metadata and traceability complete, (3) Confirm color temperature consistency, (4) Audit audience-specific photography representation, (5) Check for unauthorized competitor-style edits.'],
                  ].map(([title, guidance]) => (
                    <div key={title} style={{ background: c.white, borderRadius: 12, padding: '16px 20px', border: `1px solid ${c.bone}`, marginBottom: 12 }}>
                      <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 6 }}>{title}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{guidance}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Photography Across Media</SubHead><SubBody>How to adapt division photography for different channels without losing identity.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                  {[
                    {
                      medium: 'Web & Digital',
                      guidance: 'Wide hero sections (4:3 or 16:9) with text overlays. Optimize for mobile at 300px width. Use full-color, warm-lit photography. File size <150KB for landing pages. Wound Care: Process-focused. Aesthetics: Patient-centric. Dermatology: Clinical skin documentation. Tissue Tech: Equipment showcase. International: Team environments.',
                    },
                    {
                      medium: 'Email & Newsletters',
                      guidance: 'Landscape 2:1 or 3:1 aspect ratios for email headers. Ensure readability at 600px width. Apply subtle vignette to allow white text overlay. Wound Care: Lab documentation imagery. Aesthetics: Product elegance shots. Dermatology: Treatment progress imagery. Tissue Tech: Data visualization. International: Diverse team moments.',
                    },
                    {
                      medium: 'Print & Presentations',
                      guidance: 'Full-bleed photography at 300dpi. Ensure text overlay has sufficient contrast (use semi-transparent cream overlay if needed). Photograph at higher resolution (100MP+) for large prints. Maintain warm color temperature in CMYK conversion. All divisions: Use photography as hero—typography as accent.',
                    },
                    {
                      medium: 'Social Media',
                      guidance: 'Square (1:1) and vertical (9:16) formats. Crop carefully to preserve key subjects. Use series (3-5 consistent images) to build visual narrative. Captions reference division messaging pillars. Keep images <5MB. Wound Care: Behind-the-scenes process. Aesthetics: Patient testimonials. Dermatology: Before/after clinical documentation. Tissue Tech: Quick facts + images. International: Local team spotlights.',
                    },
                    {
                      medium: 'Regulatory & Compliance Documents',
                      guidance: 'Photography serves as supporting evidence, not decoration. Lab photos document process compliance. Equipment photos verify current instrumentation. Include photo metadata (date, location, technician). File all source images in secure archive. Tissue Tech & Wound Care: Priority for this medium.',
                    },
                  ].map((item) => (
                    <div key={item.medium} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 8 }}>{item.medium}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.guidance}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
          </div>
        </>}

          {/* 02-3-4 GLASS UI */}
          {active === 'glass' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="02-3-4" title="Glass UI" parentLabel="Visual Identity" onBack={() => navigate('foundations')} />

            <TwoCol left={<><SubHead>Signature Surface</SubHead><SubBody>Inspired by Tiger's Glass UI patterns, every floating panel pairs blur, tint, and precise outlines.</SubBody></>}>
              <div style={{ background: 'linear-gradient(135deg, #221010, #2D1B1B)', borderRadius: 18, padding: 32, color: c.white, border: '1px solid rgba(255,255,255,0.12)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -60, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', filter: 'blur(10px)' }} />
                <div style={{ position: 'relative' }}>
                  <Overline>Glass Hero</Overline>
                  <h3 style={{ ...serif, fontSize: 36, color: c.white, marginBottom: 16 }}>Precision surfaces,<br />human warmth.</h3>
                  <p style={{ ...sans, fontSize: 14, color: 'rgba(255,255,255,0.75)', maxWidth: 380 }}>Use glass for spotlighted cards, hero modals, and system overlays. Keep content centered and breathing with 32px padding.</p>
                  <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
                    <GlassButton arrow>Primary CTA</GlassButton>
                    <span className="pill-btn" style={{ ...sans, fontSize: 13, color: c.white, borderRadius: 999, border: '1px solid rgba(255,255,255,0.35)', padding: '14px 32px' }}>Secondary</span>
                  </div>
                </div>
              </div>
            </TwoCol>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Principles</SubHead><SubBody>Checklist before using glass. Derived from the React Glass UI reference.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                  {glassPrinciples.map((principle) => (
                    <div key={principle.title} style={{ background: c.white, borderRadius: 12, padding: '20px 22px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark, marginBottom: 6 }}>{principle.title}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n500, lineHeight: 1.6 }}>{principle.desc}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Spec Sheet</SubHead><SubBody>Use these placeholder values until the Glass UI package exports tokens.</SubBody></>}>
                <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}>
                  {glassSpecs.map((spec) => (
                    <div key={spec.label} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 160px', gap: 16, padding: '10px 0', borderBottom: `1px solid ${c.n200}` }}>
                      <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{spec.label}</p>
                      <p style={{ ...mono, fontSize: 11, color: c.n500 }}>{spec.value}</p>
                      <p style={{ ...sans, fontSize: 11, color: c.n500 }}>{spec.usage}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Use Cases</SubHead><SubBody>Where to apply glass vs. solid surfaces.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { title: 'Hero overlays', desc: 'Use glass hero for investor decks, digital experiences, mission statements.' },
                    { title: 'Data modals', desc: 'Clinical evidence or medical device specs with streaming data.' },
                    { title: 'Action center', desc: 'Floating CTA clusters for portals (e.g., refer patient, log an outcome).' },
                    { title: 'Do not use', desc: 'Dense instrument panels, long-form copy, regulatory disclosures—use cream cards instead.' },
                  ].map((use) => (
                    <div key={use.title} style={{ background: use.title === 'Do not use' ? '#FEF2F2' : c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${use.title === 'Do not use' ? '#FECACA' : c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 13, color: use.title === 'Do not use' ? '#B91C1C' : c.dark }}>{use.title}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, marginTop: 6, lineHeight: 1.6 }}>{use.desc}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Backgrounds & Context</SubHead><SubBody>Glass behaves differently depending on what's underneath. Test all three contexts.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                  {/* Light background */}
                  <div style={{ borderRadius: 12, overflow: 'hidden', background: c.cream, padding: 32, position: 'relative', minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.35)', border: '1px solid rgba(34,16,16,0.08)', borderRadius: 12, backdropFilter: 'blur(24px)', padding: 24, maxWidth: 320, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                      <p style={{ ...serif, fontSize: 20, color: c.dark }}>Light Background</p>
                      <p style={{ ...sans, fontSize: 13, color: c.n600, marginTop: 8 }}>Glass tint should be warm and subtle. Use rgba(34,16,16,0.06).</p>
                    </div>
                  </div>
                  {/* Dark background */}
                  <div style={{ borderRadius: 12, overflow: 'hidden', background: '#221010', padding: 32, position: 'relative', minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 12, backdropFilter: 'blur(24px)', padding: 24, maxWidth: 320, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                      <p style={{ ...serif, fontSize: 20, color: c.white }}>Dark Background</p>
                      <p style={{ ...sans, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>Glass tint should enhance clarity. Use rgba(255,255,255,0.12).</p>
                    </div>
                  </div>
                  {/* Image background */}
                  <div style={{ borderRadius: 12, overflow: 'hidden', background: `url(${SCREENS}/home-page.png) center / cover`, padding: 32, position: 'relative', minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 12, backdropFilter: 'blur(24px)', padding: 24, maxWidth: 320, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                      <p style={{ ...serif, fontSize: 20, color: c.white }}>Image Background</p>
                      <p style={{ ...sans, fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>Over photography, use stronger blur (24px) with white tint.</p>
                    </div>
                  </div>
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Interaction & Animation</SubHead><SubBody>Glass panels should respond to user input with subtle effects.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    {
                      label: 'Hover State',
                      rules: ['Increase background opacity by 8%', 'Lift shadow slightly (0 24px 48px)', 'Scale up by 2% for panels'],
                    },
                    {
                      label: 'Focus State',
                      rules: ['Add 2px red outline', '3px outline offset', 'Keep animations smooth (0.2s)'],
                    },
                    {
                      label: 'Active/Pressed',
                      rules: ['Reduce scale by 1–2%', 'Reduce blur slightly (18px)', 'Fast feedback (0.1s duration)'],
                    },
                    {
                      label: 'Disabled State',
                      rules: ['Reduce opacity to 0.5', 'Desaturate background', 'Remove pointer events'],
                    },
                  ].map((item) => (
                    <div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 10 }}>{item.label}</p>
                      <ul style={{ ...sans, fontSize: 11, color: c.n600, lineHeight: 1.8 }}>
                        {item.rules.map((rule) => (
                          <li key={rule}>• {rule}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Common Mistakes</SubHead><SubBody>Glass misuse patterns to avoid.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { mistake: 'Too much blur', solution: 'Start at 24px. Anything above 40px obscures readability.' },
                    { mistake: 'No backdrop', solution: 'Glass without a contrasting background reads as a solid card. Always layer over photography or dark UI.' },
                    { mistake: 'Wrong tint', solution: 'Using pure white or cold colors breaks the warm aesthetic. Stick to rgba(255,255,255,0.12) or rgba(34,16,16,0.06).' },
                    { mistake: 'Missing border', solution: 'Borders create depth and separate glass from the background. Never omit the 1px stroke.' },
                    { mistake: 'Dense content', solution: 'Glass is for spotlight CTAs and short hero text. Dense disclosures and data tables belong in cream cards.' },
                    { mistake: 'No animation exit', solution: 'Staggered entry animations look polished. Exit animations should reverse smoothly.' },
                  ].map((item) => (
                    <div key={item.mistake} style={{ background: '#FEF2F2', borderRadius: 12, padding: '18px 20px', border: '1px solid #FECACA' }}>
                      <p style={{ ...sansMed, fontSize: 12, color: '#B91C1C', marginBottom: 6 }}>✗ {item.mistake}</p>
                      <p style={{ ...sans, fontSize: 11, color: '#991B1B', lineHeight: 1.6 }}>→ {item.solution}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>

            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>React Glass UI Placeholder</SubHead><SubBody>Document how the forthcoming package will be consumed.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <p style={{ ...sansMed, fontSize: 12, color: c.n500, marginBottom: 8 }}>Import</p>
                    <CodeBlock code={`import { GlassPanel } from '@tigerbio/brand-system/glass'\n\n<GlassPanel blur="xl" tone="warm">\n  ...content\n</GlassPanel>`} />
                  </div>
                  <div>
                    <p style={{ ...sansMed, fontSize: 12, color: c.n500, marginBottom: 8 }}>Props</p>
                    <PropRow label="tone" type="'warm'|'cool'" defaultValue="'warm'" />
                    <PropRow label="blur" type="'sm'|'md'|'xl'" defaultValue="'md'" />
                    <PropRow label="padding" type="number" defaultValue="32" />
                  </div>
                </div>
              </TwoCol>
            </div>
            </div>
          </>}

          {/* 08-2 COMPONENT LAB */}
          {active === 'component-lab' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="08-2" title="Component Lab" parentLabel="System Docs" onBack={() => navigate('dev-docs')} />

            <TwoCol left={<><SubHead>Buttons</SubHead><SubBody>Pill-shaped with generous padding. White bg on dark surfaces. Red for emphasis, gold for Aesthetics. Glass for hero overlays.</SubBody></>}>
              <div>
                {/* Solid buttons */}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: 16 }}>
                  <PillButton bg={c.white} arrow>View Solutions</PillButton>
                  <PillButton bg={c.tigerRed} color={c.white}>Primary CTA</PillButton>
                  <PillButton bg={c.dark} color={c.white}>Learn More</PillButton>
                  <PillButton bg={c.gold} color={c.white}>Explore Aesthetics</PillButton>
                  <span className="pill-btn" style={{ ...sans, fontSize: 13, color: c.dark, border: `1px solid ${c.dark}`, borderRadius: 999, padding: '14px 48px', display: 'inline-flex', cursor: 'pointer', transition: 'all 0.2s ease' }}>Outline</span>
                </div>
                {/* Glass button — shown on image bg */}
                <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
                  <div style={{ background: `url(${SCREENS}/home-page.png) center top / cover`, padding: '32px 32px', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                    <GlassButton arrow>View Solutions</GlassButton>
                    <GlassButton>Learn More</GlassButton>
                  </div>
                  <div style={{ background: c.cream, padding: '10px 16px' }}>
                    <p style={{ ...sans, fontSize: 10, color: c.n500 }}>Glass button — hero overlays on photography backgrounds</p>
                  </div>
                </div>
                <div style={{ background: c.cream, borderRadius: 10, padding: '16px 20px' }}>
                  <p style={{ ...mono, fontSize: 10, color: c.n400, lineHeight: 1.8 }}>
                    border-radius: 999px · padding: 14px 48px<br />
                    background: rgba(255,255,255,0.15)<br />
                    backdrop-filter: blur(12px)<br />
                    border: 1px solid rgba(255,255,255,0.25)
                  </p>
                </div>
              </div>
            </TwoCol>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>In Use</SubHead><SubBody>Figma reference screens showing components in production context.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <ScreenPreview src="home-page.png" label="Home Page" height={320} />
                  <ScreenPreview src="our-vision.png" label="Our Vision" height={320} />
                  <ScreenPreview src="our-products.png" label="Our Products" height={320} />
                  <ScreenPreview src="aesthetics-overview.png" label="Aesthetics Overview" height={320} />
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Commitment Cards</SubHead><SubBody>Cream bg, rounded corners, black icon badge + serif title + body text. Used for values and commitments.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { icon: '\u2661', title: 'To Donors & Families', desc: 'Every product begins with a gift. We honor that gift through meticulous stewardship.' },
                    { icon: '\u2605', title: 'To Patients', desc: 'Clinical outcomes that rebuild lives. Science in service of human recovery.' },
                  ].map((item) => (
                    <div key={item.title} style={{ background: c.cream, borderRadius: 12, padding: 28 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                        <div style={{ width: 48, height: 48, background: c.black, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ fontSize: 18, color: c.white }}>{item.icon}</span>
                        </div>
                        <h3 style={{ ...serif, fontSize: 18, color: c.dark }}>{item.title}</h3>
                      </div>
                      <p style={{ ...sans, fontSize: 13, color: c.dark, opacity: 0.55, lineHeight: 1.7 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol left={<><SubHead>Value Cards</SubHead><SubBody>Cream bg, serif title, body text. Used for core values and product categories.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                  {[
                    { title: 'Tissue Stewardship', desc: 'Meticulous care from donation through implantation.' },
                    { title: 'Innovation', desc: 'Advancing the science of regenerative medicine.' },
                    { title: 'Excellence', desc: 'The highest standards in processing and outcomes.' },
                  ].map((v) => (
                    <div key={v.title} style={{ background: c.cream, borderRadius: 12, padding: '24px 24px 28px' }}>
                      <h3 style={{ ...serif, fontSize: 18, color: c.dark, marginBottom: 10 }}>{v.title}</h3>
                      <p style={{ ...sans, fontSize: 12, color: c.dark, opacity: 0.55, lineHeight: 1.7 }}>{v.desc}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Data Card</SubHead><SubBody>Red accent bar, serif stat, mono sample size. Used for clinical evidence and outcomes.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div style={{ maxWidth: 340, background: c.cream, borderRadius: 12, overflow: 'hidden' }}>
                    <div style={{ height: 3, background: c.tigerRed }} />
                    <div style={{ padding: 24 }}>
                      <p style={{ ...sansReg, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.n400, marginBottom: 10 }}>Clinical Outcome</p>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                        <span style={{ ...serif, fontSize: 44, color: c.dark }}>97.3</span>
                        <span style={{ ...sansMed, fontSize: 16, color: c.n400 }}>%</span>
                      </div>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, marginTop: 8, lineHeight: 1.6 }}>Complete wound closure at 12-week follow-up across 847 patients.</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
                        <div style={{ flex: 1, height: 5, borderRadius: 3, background: c.bone, overflow: 'hidden' }}>
                          <div style={{ width: '97.3%', height: '100%', borderRadius: 3, background: c.tigerRed }} />
                        </div>
                        <span style={{ ...mono, fontSize: 10, color: c.n400 }}>n=847</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ background: c.cream, borderRadius: 10, padding: '16px 20px', alignSelf: 'start' }}>
                    <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: c.n400, marginBottom: 12 }}>Anatomy</p>
                    <p style={{ ...mono, fontSize: 10, color: c.n500, lineHeight: 2 }}>
                      1. Red accent bar (3px, #C03227)<br />
                      2. Overline label (10px, uppercase)<br />
                      3. Serif stat (44px, Georgia)<br />
                      4. Body description (12px, Inter)<br />
                      5. Progress bar + sample size
                    </p>
                  </div>
                </div>
              </TwoCol>
            </div>
            </div>
          </>}

          {/* 03-2 PRODUCTS */}
          {active === 'products' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="07-1" title="Products" parentLabel="Application" onBack={() => navigate('application')} />

            <TwoCol left={<><SubHead>Product Cards</SubHead><SubBody>Product cards are the primary way clinicians and patients discover Tiger's portfolio. Each card must balance visual impact (photography) with clinical clarity (name, mechanism, category). Trademark symbols matter for brand protection.</SubBody></>}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                {[
                  { name: 'caregraFT\u2122', cat: 'Wound Care', desc: 'Dehydrated three-layer placental allograft for wound care', photo: 'gallery-3.png', position: 'center 30%' },
                  { name: 'carePATCH\u00AE', cat: 'Wound Care', desc: 'Dehydrated dual-layer placental allograft protective barrier', photo: 'gallery-7.png', position: 'center' },
                  { name: 'completeFT\u00AE', cat: 'Wound Care', desc: 'Full thickness placental membrane for wound care', photo: 'gallery-8.png', position: 'center 70%' },
                  { name: 'HealPACK\u2122', cat: 'Wound Care', desc: 'Class I and Class II medical device surgical dressings', photo: 'gallery-9.png', position: 'center 20%' },
                  { name: 'Bellafill\u00AE', cat: 'Aesthetics', desc: 'Long-lasting collagen builder for smile lines and acne scars', photo: 'product-bellafill.png', position: 'center' },
                  { name: 'Av\u00E9li\u00AE', cat: 'Aesthetics', desc: 'Single-treatment cellulite release with lasting results', photo: 'product-aveli.png', position: 'center' },
                  { name: 'Sientra\u00AE', cat: 'Aesthetics', desc: 'Breast implants exclusively for board-certified plastic surgeons', photo: 'beauty-1.png', position: 'center 30%' },
                  { name: 'Viality\u00AE', cat: 'Aesthetics', desc: 'Advanced fat transfer system for predictable outcomes', photo: 'beauty-1.png', position: 'center' },
                  { name: 'Amplifine\u00AE', cat: 'Aesthetics', desc: 'PRP technology for aesthetic treatments', photo: 'product-amplifine.png', position: 'center' },
                  { name: 'alloClae\u2122', cat: 'Aesthetics', desc: 'Structural adipose tissue for non-surgical body contouring', photo: 'bellafill-hero.png', position: 'center' },
                  { name: 'Breast Tissue Expanders', cat: 'Aesthetics', desc: 'Advanced expansion devices for breast reconstruction', photo: 'gallery-6.png', position: 'center 25%' },
                ].map((p) => (
                  <div key={p.name} style={{ background: c.cream, borderRadius: 12, overflow: 'hidden' }}>
                    <FillImageBlock src={`${IMG}/${p.photo}`} alt={`${p.name} product`} style={{ height: 160 }} sizes="(min-width: 1280px) 15vw, 80vw" />
                    <div style={{ padding: '14px 16px' }}>
                      <p style={{ ...serif, fontSize: 15, color: c.dark }}>{p.name}</p>
                      <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 4 }}>{p.desc}</p>
                      <span style={{ ...sansReg, fontSize: 9, color: p.cat === 'Aesthetics' ? c.gold : c.orange, border: `1px solid ${p.cat === 'Aesthetics' ? c.gold : c.orange}`, borderRadius: 999, padding: '3px 10px', display: 'inline-block', marginTop: 10 }}>{p.cat}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TwoCol>
            <div style={{ padding: '56px 0' }}>
              <TwoCol pb={64} left={<><SubHead>Card Spec</SubHead><SubBody>Consistent card anatomy for the product catalog.</SubBody></>}>
                <div style={{ background: c.cream, borderRadius: 10, padding: '20px 24px' }}>
                  <p style={{ ...mono, fontSize: 10, color: c.n500, lineHeight: 2 }}>
                    1. Photo area: Warm White bg, centered product<br />
                    2. Product name: Georgia serif, 15px, includes &trade;/&reg;<br />
                    3. Description: Inter 300, 11px, #78716C<br />
                    4. Category pill: 9px, outlined, division color<br />
                    5. Card: Cream bg, 12px border-radius
                  </p>
                </div>
              </TwoCol>
            </div>
            </div>
          </>}

          {/* ══════════════════════════════════════════
              07-2 APPLICATION GALLERY — In Action
              ══════════════════════════════════════════ */}
          {active === 'gallery' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="07-2" title="In Action" parentLabel="Application" onBack={() => navigate('application')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>The design system in context. Real-world applications of Tiger's visual language, spacing, typography, and component system across web, mobile, and clinical materials.</p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Application Context</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Digital Products</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Product hub, division sites, patient education portals</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>System Elements</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Typography, color coding, spacing, photography, components</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Design System in Use</SubHead><SubBody>How components and patterns work together in production applications.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{label: 'Visual Hierarchy', detail: 'Typography and spacing guide users through content. Headlines lead; body supports; CTAs close. Clear information architecture.'}, {label: 'Component Consistency', detail: 'Buttons, cards, forms, and modals behave identically across all applications, building user familiarity.'}, {label: 'Color Logic', detail: 'Division colors code navigation and meaning. Never used for decoration. High contrast ensures accessibility.'}, {label: 'Responsive Execution', detail: 'Grid adapts from mobile (4 cols) to tablet (8 cols) to desktop (12 cols). Padding and spacing scale proportionally.'}].map((item) => (<div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.label}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>

                {/* Digital Applications */}
                <Overline align="left">Digital Applications</Overline>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 80 }}>
                  {[
                    { title: 'Product Hub', desc: 'Browse clinical products with division filtering, specs, and ordering', screen: '/assets/tiger/screens/our-products.png' },
                    { title: 'Our Vision', desc: 'Brand story, strategic positioning, investor materials', screen: '/assets/tiger/screens/our-vision.png' },
                    { title: 'Aesthetics Overview', desc: 'Division-specific branding, product galleries, CTA hierarchy', screen: '/assets/tiger/screens/aesthetics-overview.png' },
                    { title: 'Product Pages', desc: 'Single-product focus: imagery, specs, clinical evidence, CTAs', screen: '/assets/tiger/screens/aesthetics-face-product.png' },
                  ].map((app) => (
                    <div key={app.title}>
                      <div style={{ background: c.linen, borderRadius: 12, overflow: 'hidden', marginBottom: 16, height: 320 }}>
                        <FillImageBlock
                          src={app.screen}
                          alt={app.title}
                          style={{ width: '100%', height: '100%' }}
                          sizes="(min-width: 1280px) 45vw, 80vw"
                        />
                      </div>
                      <h3 style={{ ...sansMed, fontSize: 14, color: c.dark, marginBottom: 8 }}>{app.title}</h3>
                      <p style={{ ...sans, fontSize: 13, color: c.n500, lineHeight: 1.6 }}>{app.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Key System Elements */}
                <Overline align="left">System Elements in Use</Overline>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
                  {[
                    { element: 'Typography Hierarchy', detail: 'Neuropa display for headlines, Alexandria for body. Clear visual weight differentiation.' },
                    { element: 'Color Coding', detail: 'Division colors (Red, Orange, Gold, Blue) for navigation, CTAs, and data visualization.' },
                    { element: 'Spacing & Layout', detail: '12-column responsive grid with consistent 64px padding. 8px spacing scale for components.' },
                    { element: 'Photography Integration', detail: 'Warm, clinical-human imagery in hero sections and product cards. Consistent crop & positioning.' },
                    { element: 'Component States', detail: 'Buttons, cards, badges, and modals maintain consistent interaction patterns across all applications.' },
                    { element: 'Accessibility Compliance', detail: '4.5:1 contrast ratios, keyboard navigation, semantic HTML, prefers-reduced-motion support.' },
                  ].map((item) => (
                    <div key={item.element} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 8 }}>{item.element}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n500, lineHeight: 1.6 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>}

          {/* ══════════════════════════════════════════
              07-4 VOICE & TONE — Copy Guidelines
              ══════════════════════════════════════════ */}
          {active === 'voice-tone' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="07-4" title="Voice & Tone" parentLabel="Application" onBack={() => navigate('application')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Tiger's voice is clinical authority tempered with human warmth. Our tone shifts by division and context, but always stays grounded in evidence and respect for the patient journey.</p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Division Voices</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Wound Care</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Clinician champion—urgent but confident, data-driven, caring</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Aesthetics</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Luxury regenerator—premium but approachable, scientific elegance</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Tissue Tech</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Innovation enabler—technical but accessible, forward-thinking</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Dermatology</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Skin science authority—clinical warmth, restoration-focused, approachable</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>International</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Global partner—inclusive, culturally aware, respectful</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Tone Anchors</SubHead><SubBody>Core principles that define Tiger's voice across all divisions and channels.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{label: 'Evidence-Backed', detail: 'Every claim has data. No marketing puffery. Sample sizes cited, sources credible, outcomes real.'}, {label: 'Patient-Centered', detail: 'Language honors the patient journey. We say "patients," not "cases." Celebrate resilience and outcomes.'}, {label: 'Warmth with Rigor', detail: 'Conversational without sacrificing precision. Contractions OK; jargon only when unavoidable and explained.'}, {label: 'Action-Forward', detail: 'Copy empowers next steps. Every message guides readers toward clarity and decision-making.'}].map((item) => (<div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.label}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 80 }}>
                  {[
                    { div: 'Wound Care', voice: 'Clinician champion', tone: 'Urgent but confident. Data-driven. Caring.', example: 'Every day faster healing matters. Our protocols prove it.' },
                    { div: 'Aesthetics', voice: 'Luxury regenerator', tone: 'Premium but approachable. Scientific elegance.', example: 'The longest-lasting results, backed by regenerative science.' },
                    { div: 'Tissue Tech', voice: 'Innovation enabler', tone: 'Technical but accessible. Forward-thinking.', example: 'Advancing the standards others follow.' },
                    { div: 'Dermatology', voice: 'Skin science authority', tone: 'Clinical warmth. Restoration-focused. Approachable.', example: 'Regenerative science, applied to the skin you live in.' },
                    { div: 'International', voice: 'Global partner', tone: 'Inclusive, culturally aware. Respectful.', example: 'One standard of care, delivered everywhere.' },
                  ].map((d) => (
                    <div key={d.div} style={{ background: c.linen, borderRadius: 12, padding: '28px 32px' }}>
                      <p style={{ ...mono, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 12 }}>{d.div}</p>
                      <p style={{ ...sansMed, fontSize: 14, color: c.dark, marginBottom: 16 }}>{d.voice}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n500, marginBottom: 16 }}>Tone: {d.tone}</p>
                      <p style={{ ...serif, fontSize: 14, color: c.tigerRed, fontStyle: 'italic' }}>"{d.example}"</p>
                    </div>
                  ))}
                </div>

                <p style={{ ...sansMed, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginTop: 32, marginBottom: 16 }}>Division Voice Matrix</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
                  {[
                    { principle: 'Opening Line', wc: '"Every day faster healing matters."', ae: '"Redefine beauty on your terms."', tt: '"99.8% sterility. Published."', derm: '"Skin health, restored by science."', intl: '"One standard, everywhere."' },
                    { principle: 'Data Cadence', wc: 'Lead with outcome stat in first sentence', ae: 'Close with data after emotional setup', tt: 'Data IS the message — every paragraph', derm: 'Clinical evidence paired with patient narrative', intl: 'Regional stats paired with global proof' },
                    { principle: 'Emotional Register', wc: 'Urgent but confident', ae: 'Aspirational but grounded', tt: 'Precise and authoritative', derm: 'Reassuring and restorative', intl: 'Warm and inclusive' },
                    { principle: 'CTA Style', wc: '"See the clinical evidence"', ae: '"Discover your transformation"', tt: '"Review the specifications"', derm: '"Explore skin restoration options"', intl: '"Connect with your local team"' },
                    { principle: 'Compliance Voice', wc: 'Inline citations (n=, CI)', ae: 'Footnote-style disclaimers', tt: 'Full methodology blocks', derm: 'Clinical reference with patient-friendly summaries', intl: 'Region-specific regulatory badges' },
                  ].map((row) => (
                    <div key={row.principle} style={{ background: c.cream, borderRadius: 12, padding: '16px 20px', border: `1px solid ${c.bone}` }}>
                      <p style={{ ...sansMed, fontSize: 12, color: c.dark, marginBottom: 10 }}>{row.principle}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: 10 }}>
                        <div><p style={{ ...mono, fontSize: 9, color: c.orange, marginBottom: 4 }}>WOUND CARE</p><p style={{ ...sans, fontSize: 11, color: c.n600, lineHeight: 1.5 }}>{row.wc}</p></div>
                        <div><p style={{ ...mono, fontSize: 9, color: c.gold, marginBottom: 4 }}>AESTHETICS</p><p style={{ ...sans, fontSize: 11, color: c.n600, lineHeight: 1.5 }}>{row.ae}</p></div>
                        <div><p style={{ ...mono, fontSize: 9, color: c.tigerRed, marginBottom: 4 }}>TISSUE TECH</p><p style={{ ...sans, fontSize: 11, color: c.n600, lineHeight: 1.5 }}>{row.tt}</p></div>
                        <div><p style={{ ...mono, fontSize: 9, color: c.coral, marginBottom: 4 }}>DERMATOLOGY</p><p style={{ ...sans, fontSize: 11, color: c.n600, lineHeight: 1.5 }}>{row.derm}</p></div>
                        <div><p style={{ ...mono, fontSize: 9, color: c.blue, marginBottom: 4 }}>INTERNATIONAL</p><p style={{ ...sans, fontSize: 11, color: c.n600, lineHeight: 1.5 }}>{row.intl}</p></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>}

          {/* ══════════════════════════════════════════
              07-5 CASE STUDIES — System in Action
              ══════════════════════════════════════════ */}
          {active === 'cases' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="07-5" title="Case Studies" parentLabel="Application" onBack={() => navigate('application')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Three real applications showing how the design system works across different contexts: digital product, clinical sales, and partner communication.</p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Application Types</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>Digital Product</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>Clinical data + patient education, accessible hierarchy</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>Sales Deck</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>Evidence-driven persuasion for institutional buyers</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 4 }}>Partner Portal</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.6 }}>Global, multilingual, mobile-responsive</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>System Application Principles</SubHead><SubBody>How design system components solve real-world problems.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{label: 'Context Matters', detail: 'Same system, different execution. Digital requires interaction speed; sales decks need persuasion; portals need clarity.'}, {label: 'Hierarchy First', detail: 'Every application starts with clear H1 → H2 → H3 structure. Content order guides user intent.'}, {label: 'Consistent Patterns', detail: 'Cards, buttons, form elements look and behave identically across all applications, building familiarity.'}, {label: 'Accessible Always', detail: 'Color contrast, keyboard navigation, alt text, and reduced-motion respect apply to every context.'}].map((item) => (<div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.label}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>

                {[
                  { title: 'caregraFT Product Page', challenge: 'Complex clinical data + accessible patient education', solution: 'Hierarchy: Evidence section for providers, simple overview for patients. Color coding for key claims. Interactive comparison charts.' },
                  { title: 'Sales Deck: Wound Care Overview', challenge: 'Persuade hospital systems on efficacy and ROI', solution: 'Photo-driven hero sections, proof points in callout boxes, division color for visual rhythm. Message hierarchy supports both 5-min skim and deep read.' },
                  { title: 'Partner Portal', challenge: 'Global partners, multiple languages, varying device access', solution: 'Mobile-first responsive grid, clear icon system for non-English users, consistent button/form patterns for predictability. Accessible color contrast across all division themes.' },
                ].map((cs, i) => (
                  <div key={cs.title} style={{ marginBottom: i === 2 ? 0 : 56, paddingBottom: i === 2 ? 0 : 56, borderBottom: i === 2 ? 'none' : `1px solid ${c.bone}` }}>
                    <h3 style={{ ...serif, fontSize: 24, color: c.dark, marginBottom: 20 }}>{cs.title}</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <div>
                        <p style={{ ...sansMed, fontSize: 12, color: c.tigerRed, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Challenge</p>
                        <p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>{cs.challenge}</p>
                      </div>
                      <div>
                        <p style={{ ...sansMed, fontSize: 12, color: c.tigerRed, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Solution</p>
                        <p style={{ ...sans, fontSize: 14, color: c.n600, lineHeight: 1.7 }}>{cs.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>}

          {/* ══════════════════════════════════════════
              07-6 QUICK REFERENCE — One-Page Guide
              ══════════════════════════════════════════ */}
          {active === 'quick-ref' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="07-6" title="Quick Reference" parentLabel="Application" onBack={() => navigate('application')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>One-page reference for designers and developers. Color palette, typography scale, grid rules, spacing tokens, and motion specs at a glance.</p>
                </div>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ background: c.linen, borderRadius: 12, padding: '40px' }}>
                  <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>System Essentials</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 40 }}>
                    <div>
                      <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 16 }}>Palette</p>
                      {[{ name: 'Dark', hex: c.dark }, { name: 'Tiger Red', hex: c.tigerRed }, { name: 'Wound Orange', hex: c.orange }, { name: 'Cream', hex: c.cream }].map((col) => (
                        <div key={col.name} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                          <div style={{ width: 32, height: 32, borderRadius: 6, background: col.hex, border: `1px solid ${c.bone}` }} />
                          <div>
                            <p style={{ ...sans, fontSize: 11, color: c.dark }}>{col.name}</p>
                            <p style={{ ...mono, fontSize: 9, color: c.n400 }}>{col.hex}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 16 }}>Typography</p>
                      <p style={{ ...sans, fontSize: 12, color: c.dark, marginBottom: 8 }}><strong>Neuropa</strong> – Logo wordmark only</p>
                      <p style={{ ...sans, fontSize: 12, color: c.dark, marginBottom: 8 }}><strong>Alexandria</strong> – Headlines & body (300/500 weight)</p>
                      <p style={{ ...sans, fontSize: 12, color: c.dark, marginBottom: 8 }}><strong>Inter</strong> – UI labels & metadata (small, tight)</p>
                      <p style={{ ...sans, fontSize: 12, color: c.dark }}><strong>Monospace</strong> – Code samples & specs</p>
                    </div>
                  </div>
                  <div style={{ borderTop: `1px solid ${c.bone}`, paddingTop: 40 }}>
                    <p style={{ ...sansMed, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 16 }}>Key Specs</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
                      <div>
                        <p style={{ ...mono, fontSize: 9, color: c.n400, marginBottom: 4 }}>GRID</p>
                        <p style={{ ...sans, fontSize: 12, color: c.dark }}>12-col responsive<br />64px padding<br />24px gap</p>
                      </div>
                      <div>
                        <p style={{ ...mono, fontSize: 9, color: c.n400, marginBottom: 4 }}>SPACING</p>
                        <p style={{ ...sans, fontSize: 12, color: c.dark }}>8px scale<br />4px to 96px<br />Semantic naming</p>
                      </div>
                      <div>
                        <p style={{ ...mono, fontSize: 9, color: c.n400, marginBottom: 4 }}>MOTION</p>
                        <p style={{ ...sans, fontSize: 12, color: c.dark }}>150–500ms<br />ease-out / in<br />Reduce-motion safe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Quick Start Guide</SubHead><SubBody>Use these principles to apply the system correctly in new projects.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{label: 'Grid Foundation', detail: 'Start with the 12-column responsive grid. Padding scales with viewport. All components align to grid.'}, {label: 'Spacing Consistency', detail: 'Use the 8px scale for all spacing. Semantic naming helps teams communicate margin/padding intent.'}, {label: 'Type Pairing', detail: 'Headlines in Alexandria bold; body in Alexandria regular; UI labels in Inter. Maintain 1.6–1.8 line height for readability.'}, {label: 'Color System', detail: 'Tiger Red and division colors for emphasis. Always test against white/cream backgrounds for 4.5:1 contrast.'}].map((item) => (<div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.label}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
            </div>
          </>}

          {/* ══════════════════════════════════════════
              07-7 BEST PRACTICES — Do's & Don'ts
              ══════════════════════════════════════════ */}
          {active === 'best-practices' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
              <SectionHeader num="07-7" title="Best Practices" parentLabel="Application" onBack={() => navigate('application')} />
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ maxWidth: 920, marginBottom: 80 }}>
                  <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Practical guidance on applying the system correctly. Do's emphasize consistency and accessibility; don'ts flag common mistakes that erode the brand experience.</p>
                  <div style={{ background: c.linen, borderRadius: 12, padding: '32px 40px' }}>
                    <p style={{ ...sansMed, fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase', color: c.n500, marginBottom: 20 }}>Quality Standards</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Consistency</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Every application uses the same spacing, color, and typography rules</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Accessibility</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Contrast, navigation, and motion all meet WCAG AA standards</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Evidence</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Claims backed by data; sources cited; patient outcomes centered</p></div>
                      <div><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>Clarity</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>Users understand intent within 5 seconds; jargon minimized</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '56px 0' }}>
                <TwoCol left={<><SubHead>Common Pitfalls</SubHead><SubBody>Mistakes to avoid when applying the design system.</SubBody></>}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    {[{label: 'Ignoring Spacing Rules', detail: 'Don\'t add custom margins. Use the 8px scale. Inconsistent spacing breaks visual rhythm and readability.'}, {label: 'Color Overuse', detail: 'Don\'t use division colors for decoration. Reserve them for navigation, CTAs, and data coding.'}, {label: 'Skipping Alt Text', detail: 'Don\'t publish images without alt text. It\'s not optional—it\'s accessibility and SEO.'}, {label: 'Changing Typography', detail: 'Don\'t introduce new fonts or weights. Stick to Alexandria, Inter, and Neuropa. Variants confuse users.'}].map((item) => (<div key={item.label} style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}><p style={{ ...serif, fontSize: 16, color: c.dark, marginBottom: 8 }}>{item.label}</p><p style={{ ...sans, fontSize: 13, color: c.n600, lineHeight: 1.7 }}>{item.detail}</p></div>))}
                  </div>
                </TwoCol>
              </div>
              <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 6, background: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ ...serif, fontSize: 20, color: c.white, lineHeight: 1 }}>✓</span>
                      </div>
                      <h3 style={{ ...serif, fontSize: 20, color: c.dark }}>Do</h3>
                    </div>
                    {[
                      'Use photography that feels clinical but human',
                      'Start every page with clear hierarchy (H1 → H2 → H3)',
                      'Pair red with white or cream for 4.5:1 contrast',
                      'Use division colors for visual coding, not novelty',
                      'Keep buttons 44px minimum for mobile touch',
                      'Test motion with prefers-reduced-motion',
                      'Center patient outcomes in all copy',
                      'Use real data, cite sources, show sample size',
                    ].map((tip, i) => (
                      <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i === 7 ? 'none' : `1px solid ${c.n200}` }}>
                        <p style={{ ...sans, fontSize: 13, color: c.dark, lineHeight: 1.6 }}>• {tip}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 6, background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ ...serif, fontSize: 20, color: c.white, lineHeight: 1 }}>✕</span>
                      </div>
                      <h3 style={{ ...serif, fontSize: 20, color: c.dark }}>Don't</h3>
                    </div>
                    {[
                      'Use stock photos that look generic or overly posed',
                      'Bury key information below the fold',
                      'Pair Tiger Red with dark backgrounds (low contrast)',
                      'Use division colors outside their approved contexts',
                      'Create buttons smaller than 44px (accessibility fail)',
                      'Add auto-playing animation without user control',
                      'Use superlatives without data backing ("best", "fastest")',
                      'Make claims without listing evidence or caveats',
                    ].map((tip, i) => (
                      <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i === 7 ? 'none' : `1px solid ${c.n200}` }}>
                        <p style={{ ...sans, fontSize: 13, color: c.dark, lineHeight: 1.6 }}>• {tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>}

          {/* 03-3 USAGE RULES */}
          {active === 'rules' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="07-8" title="Usage Rules" parentLabel="Application" onBack={() => navigate('application')} />

            <div style={{ padding: '0 64px 56px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
              {/* DO column */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ ...sansMed, fontSize: 12, color: c.white, lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</span>
                  </div>
                  <p style={{ ...sansMed, fontSize: 13, color: c.dark, margin: 0 }}>Do</p>
                </div>
                {[
                  'Neuropa only for logo wordmarks',
                  'Alexandria for subheadings and body copy, Inter for UI and data',
                  'Warm dark (#221010) for text, never pure black',
                  'Cream or sand backgrounds, never pure white',
                  'Lead with photography on every major section',
                  'Center-align section headings with overlines',
                  'Orange (#DF512B) for Wound Care CTAs',
                  'Gold (#D2A62C) exclusively for Aesthetics',
                  'Blue (#2D5782) exclusively for International',
                  'Pill-shaped buttons with generous padding',
                  'Black icon badges (62x62) for pillars and values',
                ].map((rule) => (
                  <div key={rule} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                    <div style={{ width: 4, height: 4, borderRadius: 2, background: '#22C55E', flexShrink: 0, marginTop: 7 }} />
                    <p style={{ ...sans, fontSize: 13, color: c.dark, opacity: 0.75, lineHeight: 1.6 }}>{rule}</p>
                  </div>
                ))}
              </div>

              {/* DON'T column */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: c.tigerRed, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ ...sansMed, fontSize: 14, color: c.white, lineHeight: 1 }}>&times;</span>
                  </div>
                  <p style={{ ...sansMed, fontSize: 13, color: c.dark }}>Don{'\u2019'}t</p>
                </div>
                {[
                  'Neuropa for anything other than the logo wordmark',
                  'Dark/graphite hero backgrounds (old direction)',
                  'SVG patterns as primary visual elements',
                  'Pure black (#000000) for text',
                  'Pure white (#FFFFFF) for page backgrounds',
                  'Mix gold and red accents in the same component',
                  'Blue outside of International division materials',
                  'Left-align major section headings',
                  'Heavy font weights (system favors 300/400)',
                  'Small, tight buttons (use generous pill shapes)',
                ].map((rule) => (
                  <div key={rule} style={{ display: 'flex', gap: 10, marginBottom: 8 }}>
                    <div style={{ width: 4, height: 4, borderRadius: 2, background: c.tigerRed, flexShrink: 0, marginTop: 7 }} />
                    <p style={{ ...sans, fontSize: 13, color: c.dark, opacity: 0.75, lineHeight: 1.6 }}>{rule}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '56px 64px 64px' }}>
              <div style={{ background: c.cream, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}>
                <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.tigerRed, marginBottom: 16 }}>Key Changes from Previous Direction</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
                  {[
                    ['Display font', 'Neuropa \u2192 ABC Arizona'],
                    ['Body font', 'Alexandria \u2192 Inter'],
                    ['Text color', '#0F0F0F \u2192 #221010'],
                    ['Backgrounds', 'White \u2192 Cream/sand'],
                    ['Visuals', 'SVG \u2192 Photography'],
                    ['Tone', 'Clinical \u2192 Warm & human'],
                  ].map(([label, change]) => (
                    <div key={label}>
                      <p style={{ ...sansMed, fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: c.n400 }}>{label}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.dark, marginTop: 2 }}>{change}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ padding: '56px 0 80px' }}>
              <TwoCol left={<><SubHead>Visual QA</SubHead><SubBody>Audit before handoff to keep every deliverable Fortune-100 tight.</SubBody></>}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {qaChecklist.map((item) => (
                    <div key={item.area} style={{ background: c.cream, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}`, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{item.area}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n600, lineHeight: 1.6 }}>{item.detail}</p>
                      <p style={{ ...mono, fontSize: 10, color: c.n500 }}>{item.action}</p>
                    </div>
                  ))}
                </div>
              </TwoCol>
            </div>
          </div>
        </>}

          {/* 08 SYSTEM DOCS — overview */}
          {active === 'dev-docs' && <>
            <div className={sectionClassName}>
            <div style={{ background: c.dark, padding: '80px 64px 64px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -40, right: -120, width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 70%)' }} />
              <div style={{ position: 'relative' }}>
                <p style={{ ...mono, fontSize: 11, color: 'rgba(255,255,255,0.45)', marginBottom: 12 }}>08</p>
                <h1 style={{ ...serif, fontSize: 56, color: c.white, lineHeight: 1.05 }}>System Docs</h1>
                <p style={{ ...sans, fontSize: 15, color: 'rgba(255,255,255,0.55)', maxWidth: 540, marginTop: 16 }}>
                  Developer-facing documentation inspired by the Audi React Storybook: install steps, component playground, tokens, and API contracts.
                </p>
              </div>
            </div>
            <div style={{ background: c.sand, padding: '48px 64px 64px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 40 }}>
                {[
                  { title: 'Install + Bootstrap', desc: 'NPM packages, providers, fonts', to: 'getting-started' },
                  { title: 'Component Lab', desc: 'Live preview + props similar to Storybook Controls', to: 'component-lab' },
                  { title: 'Tokens & API', desc: 'Design tokens, REST/GraphQL stubs', to: 'tokens-api' },
                ].map((card) => (
                  <button key={card.title} className="section-link" onClick={() => navigate(card.to)} style={{ background: c.cream, borderRadius: 12, padding: 24, border: 'none', textAlign: 'left', cursor: 'pointer', transition: 'background 0.15s ease' }}>
                    <p style={{ ...sansMed, fontSize: 13, color: c.dark }}>{card.title}</p>
                    <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 8 }}>{card.desc}</p>
                  </button>
                ))}
              </div>
              {childrenOf('dev-docs').map((kid) => (
                <NavRow key={kid.id} num={kid.num} label={kid.label} onClick={() => navigate(kid.id)} />
              ))}
            </div>
            </div>
          </>}

          {/* 05-1 GETTING STARTED */}
          {active === 'getting-started' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="08-1" title="Getting Started" parentLabel="System Docs" onBack={() => navigate('dev-docs')} />
            <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
              <div style={{ maxWidth: 920, marginBottom: 80 }}>
                <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Get up and running with Tiger in three steps. Install the design system package, import design tokens and reusable components, and build your first page using Tiger's foundation. The system handles spacing, color, typography, and responsive layout automatically.</p>
              </div>
            </div>

            <TwoCol left={<><SubHead>Installation & Setup</SubHead><SubBody>Three commands to bootstrap the Tiger design system in your project.</SubBody></>}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
                {devSetup.map((item) => (
                  <div key={item.step} style={{ background: c.white, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                    <p style={{ ...mono, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: c.n400 }}>{item.step}</p>
                    <p style={{ ...sansMed, fontSize: 15, color: c.dark, margin: '8px 0 10px' }}>{item.detail}</p>
                    <CodeBlock code={item.code} />
                  </div>
                ))}
              </div>
            </TwoCol>
            <TwoCol pb={64} left={<><SubHead>Environment Checklist</SubHead><SubBody>Placeholder audit modeled after Storybook "Docs" tab.</SubBody></>}>
              <div style={{ background: c.white, borderRadius: 12, padding: '28px 32px', border: `1px solid ${c.bone}` }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    ['Node', '>=18.18.0 LTS'],
                    ['Framework', 'Next.js 14, Vite 5, Remix 2'],
                    ['Styling', 'CSS vars or Tailwind tokens'],
                    ['Design Tokens', '@tigerbio/brand-system/tokens'],
                  ].map(([label, value]) => (
                    <div key={label} style={{ background: c.cream, borderRadius: 10, padding: '16px 18px' }}>
                      <p style={{ ...sansMed, fontSize: 12, color: c.dark }}>{label}</p>
                      <p style={{ ...sans, fontSize: 12, color: c.n500 }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TwoCol>
            </div>
          </>}

          {/* 05-2 COMPONENT LAB */}
          {active === 'component-lab' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="08-2" title="Component Lab" parentLabel="System Docs" onBack={() => navigate('dev-docs')} />
            <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}>
              <div style={{ maxWidth: 920, marginBottom: 80 }}>
                <p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Interactive component library where you can test every Tiger component in every state, responsive size, and color combination. Click to interact, resize the preview, and see how components behave. Copy-paste the code into your own projects.</p>
              </div>
            </div>

            <TwoCol left={<><SubHead>Interactive Playground</SubHead><SubBody>Test components live, toggle between desktop/tablet/mobile, and export code.</SubBody></>}>
              <div style={{ background: c.white, borderRadius: 16, padding: '24px 28px', border: `1px solid ${c.bone}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <div>
                    <p style={{ ...sansMed, fontSize: 13, color: c.dark }}>HeroBanner</p>
                    <p style={{ ...sans, fontSize: 11, color: c.n500 }}>Tone: Wound Care / Surface: Cream</p>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <ControlChip label="Desktop" active />
                    <ControlChip label="Tablet" />
                    <ControlChip label="Mobile" />
                  </div>
                </div>
                <div style={{ borderRadius: 12, border: `1px solid ${c.n200}`, padding: 24, background: c.cream }}>
                  <Overline>Placeholder Preview</Overline>
                  <Heading size={44} align="left">Regenerative outcomes<br />start with stewardship.</Heading>
                  <Body align="left" size={14.6} maxWidth={360}>Use this hero as a drop-in React component. Placeholder content will be replaced once live data connects.</Body>
                  <div style={{ marginTop: 24 }}>
                    <PillButton bg={c.tigerRed} color={c.white} arrow>Primary CTA</PillButton>
                  </div>
                </div>
              </div>
            </TwoCol>
            <TwoCol left={<><SubHead>Stories & Controls</SubHead><SubBody>Static placeholder referencing Audi's component tables.</SubBody></>}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div style={{ background: c.white, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                  <p style={{ ...sansMed, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.n400, marginBottom: 12 }}>Stories</p>
                  {componentStories.map((story) => (
                    <div key={story.name} style={{ marginBottom: 14 }}>
                      <p style={{ ...sansMed, fontSize: 13, color: c.dark }}>{story.name}</p>
                      <p style={{ ...sans, fontSize: 11, color: c.n500 }}>{story.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                        {story.controls.map((ctrl, idx) => (
                          <ControlChip key={ctrl} label={ctrl} active={idx === 0} />
                        ))}
                      </div>
                      <p style={{ ...mono, fontSize: 10, color: story.status === 'Ready' ? '#22C55E' : c.gold, marginTop: 6 }}>{story.status}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: c.white, borderRadius: 12, padding: '20px 24px', border: `1px solid ${c.bone}` }}>
                  <p style={{ ...sansMed, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: c.n400, marginBottom: 12 }}>Prop Reference</p>
                  <PropRow label="tone" type="'wound-care'|'international'" defaultValue="'wound-care'" />
                  <PropRow label="headline" type="string" defaultValue="required" />
                  <PropRow label="ctaLabel" type="string" defaultValue="'View solutions'" />
                  <PropRow label="media" type="ReactNode" defaultValue="optional" />
                </div>
              </div>
            </TwoCol>
            </div>
          </>}

          {/* 05-3 TOKENS & API */}
          {active === 'tokens-api' && <>
            <div className={sectionClassName} style={{ background: c.sand }}>
            <SectionHeader num="08-3" title="Tokens & API" parentLabel="System Docs" onBack={() => navigate('dev-docs')} />
            <div style={{ padding: 'clamp(20px, 5vw, 64px) clamp(20px, 5vw, 64px)' }}><div style={{ maxWidth: 920, marginBottom: 80 }}><p style={{ ...sans, fontSize: 18, color: c.n500, lineHeight: 1.8, marginBottom: 32 }}>Design tokens are CSS custom properties and JavaScript objects that define Tiger's system values: colors, spacing, typography scales, shadows, and motion timings. APIs provide programmatic access to division settings, tone configurations, and responsive breakpoints so you can build consistent experiences across web, mobile, and native platforms.</p></div></div>
            <TwoCol left={<><SubHead>Design Tokens</SubHead><SubBody>Placeholder list for CSS/custom properties.</SubBody></>}>
              <div style={{ background: c.white, borderRadius: 12, padding: '24px 28px', border: `1px solid ${c.bone}` }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {tokenTable.map((token) => (
                    <div key={token.name} style={{ border: `1px solid ${c.n200}`, borderRadius: 10, padding: '14px 16px', background: c.cream }}>
                      <p style={{ ...mono, fontSize: 10, color: c.n500 }}>{token.name}</p>
                      <p style={{ ...sansMed, fontSize: 14, color: c.dark, marginTop: 6 }}>{token.value}</p>
                      <p style={{ ...sans, fontSize: 11, color: c.n500, marginTop: 6 }}>{token.usage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TwoCol>
            <TwoCol pb={64} left={<><SubHead>API Placeholder</SubHead><SubBody>Simulated REST + GraphQL snippets mirroring Audi's reference docs.</SubBody></>}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <p style={{ ...sansMed, fontSize: 12, color: c.n500, marginBottom: 8 }}>REST</p>
                  <CodeBlock code={`PATCH /api/divisions/{id}\n{\n  "accentColor": "#DF512B",\n  "tone": "warm"\n}`} />
                </div>
                <div>
                  <p style={{ ...sansMed, fontSize: 12, color: c.n500, marginBottom: 8 }}>GraphQL</p>
                  <CodeBlock code={`mutation UpdateHero($input: HeroInput!) {\n  updateHero(input: $input) {\n    id\n    headline\n    tone\n  }\n}`} />
                </div>
              </div>
            </TwoCol>
            </div>
          </>}
        </main>
      </div>
    </>
  )
}
