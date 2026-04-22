import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ProductInventoryClient from "./ProductInventoryClient";

interface Product {
  slug: string;
  title: string;
  subtitle: string;
  division: string;
  company: string;
  status: string;
  hasContent: boolean;
  heroImage: string;
  overview: string;
  contentSections: {
    overview: boolean;
    benefits: boolean;
    mechanismOfAction: boolean;
    clinicalValidation: boolean;
    regulatoryStatus: boolean;
    intendedUse: boolean;
    compatibleTreatments: boolean;
    technologyPlatform: boolean;
    manufacturingExcellence: boolean;
    clinicalApplications: boolean;
    treatmentProtocol: boolean;
    clinicalEvidence: boolean;
  };
  completionPercentage: number;
  characterCount: number;
}

function getProducts(): Product[] {
  const productsDirectory = path.join(process.cwd(), "content/products");
  const filenames = fs.readdirSync(productsDirectory);

  const products = filenames
    .filter((filename) => filename.endsWith(".mdx") && filename !== "_template.mdx")
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const fullPath = path.join(productsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      const hasContent = data.overview && !data.overview.startsWith("Content pending");

      const hasField = (field: string) => {
        return data[field] &&
               typeof data[field] === 'string' &&
               data[field].trim().length > 0 &&
               !data[field].startsWith("Content pending");
      };

      const getFieldLength = (field: string) => {
        if (!data[field]) return 0;
        const value = data[field];
        if (typeof value === 'string' && !value.startsWith("Content pending")) {
          return value.length;
        }
        if (Array.isArray(value)) {
          return value.join(' ').length;
        }
        if (typeof value === 'object') {
          return JSON.stringify(value).length;
        }
        return 0;
      };

      const contentFields = [
        'overview', 'benefits', 'mechanismOfAction', 'clinicalValidation',
        'regulatoryStatus', 'intendedUse', 'compatibleTreatments',
        'technologyPlatform', 'manufacturingExcellence', 'clinicalApplications',
        'treatmentProtocol', 'clinicalEvidence'
      ];

      const totalCharacters = contentFields.reduce((sum, field) => sum + getFieldLength(field), 0);

      // If approved, show 100%. Otherwise calculate based on characters.
      // Character-based completion: 8000 characters = 100% complete
      let completionPercentage;
      if (data.status === "Approved") {
        completionPercentage = 100;
      } else {
        const targetCharacters = 8000;
        completionPercentage = Math.min(100, Math.round((totalCharacters / targetCharacters) * 100));
      }

      return {
        slug,
        title: data.title || "",
        subtitle: data.subtitle || "",
        division: data.division || "",
        company: data.company || "",
        status: data.status || "",
        hasContent,
        heroImage: data.heroImage || "",
        overview: data.overview || "",
        contentSections: {
          overview: hasField('overview'),
          benefits: hasField('benefits'),
          mechanismOfAction: hasField('mechanismOfAction'),
          clinicalValidation: hasField('clinicalValidation'),
          regulatoryStatus: hasField('regulatoryStatus'),
          intendedUse: hasField('intendedUse'),
          compatibleTreatments: hasField('compatibleTreatments'),
          technologyPlatform: hasField('technologyPlatform'),
          manufacturingExcellence: hasField('manufacturingExcellence'),
          clinicalApplications: hasField('clinicalApplications'),
          treatmentProtocol: hasField('treatmentProtocol'),
          clinicalEvidence: hasField('clinicalEvidence'),
        },
        completionPercentage,
        characterCount: totalCharacters,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return products;
}

export default function ProductInventoryPage() {
  const products = getProducts();
  return <ProductInventoryClient initialProducts={products} />;
}
