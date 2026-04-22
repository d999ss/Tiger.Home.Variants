import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "app");
const contentDir = path.join(root, "content");

const EXCLUDED_STATIC_ROUTES = new Set([
  "/home-old",
  "/home-v2",
  "/home-3",
  "/style",
  "/style/glass-button",
  "/tiger",
]);

const TIER_1 = [
  "/",
  "/solutions",
  "/solutions/aesthetics",
  "/solutions/wound-care",
  "/solutions/regenerative-sciences",
  "/solutions/international",
  "/science",
  "/science/early-research",
  "/science/early-research/camps-tech",
  "/science/early-research/camps-tech/research",
  "/company/overview",
  "/divisions",
  "/products",
  "/careers",
  "/contact",
];

const TIER_3_STATIC = [
  "/privacy",
  "/terms",
  "/compliance",
  "/accessibility",
];

const PRODUCT_SAMPLES = [
  "/products/aveli",
  "/products/caregraft",
  "/products/regentx",
  "/products/expanders",
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(fullPath));
    } else if (entry.isFile() && entry.name === "page.tsx") {
      results.push(fullPath);
    }
  }

  return results;
}

function appPathToRoute(filePath) {
  const rel = path.relative(appDir, path.dirname(filePath));
  if (!rel) return "/";
  const parts = rel.split(path.sep);
  if (parts.some((part) => part.startsWith("[") || part.startsWith("(") || part.startsWith("@"))) {
    return null;
  }
  return `/${parts.join("/")}`;
}

function discoverStaticRoutes() {
  return walk(appDir)
    .map(appPathToRoute)
    .filter(Boolean)
    .filter((route) => !EXCLUDED_STATIC_ROUTES.has(route))
    .sort();
}

function getTier2Routes(staticRoutes) {
  return staticRoutes.filter((route) => {
    if (TIER_1.includes(route) || TIER_3_STATIC.includes(route)) return false;
    return (
      route.startsWith("/company/") ||
      route.startsWith("/science/") ||
      route.startsWith("/solutions/") ||
      route.startsWith("/resources/") ||
      route.startsWith("/news") ||
      route.startsWith("/press")
    );
  });
}

function getDynamicSamples() {
  const companiesDir = path.join(contentDir, "companies");
  const pressDir = path.join(contentDir, "press");

  const companySamples = fs.existsSync(companiesDir)
    ? fs
        .readdirSync(companiesDir)
        .filter((file) => file.endsWith(".mdx"))
        .slice(0, 1)
        .map((file) => `/companies/${file.replace(/\.mdx$/, "")}`)
    : [];

  const pressSamples = fs.existsSync(pressDir)
    ? fs
        .readdirSync(pressDir)
        .filter((file) => file.endsWith(".mdx"))
        .slice(0, 2)
        .map((file) => `/press/${file.replace(/\.mdx$/, "")}`)
    : [];

  return {
    products: PRODUCT_SAMPLES,
    companies: companySamples,
    press: ["/press", ...pressSamples],
    careers: ["/careers/jobs"],
  };
}

export function buildVisualQaRouteManifest() {
  const staticRoutes = discoverStaticRoutes();
  const tier2Routes = getTier2Routes(staticRoutes);
  const dynamicSamples = getDynamicSamples();

  return {
    tier1: TIER_1,
    tier2: tier2Routes,
    tier3: TIER_3_STATIC,
    dynamicSamples,
    allAuditRoutes: [
      ...TIER_1,
      ...tier2Routes,
      ...TIER_3_STATIC,
      ...dynamicSamples.products,
      ...dynamicSamples.companies,
      ...dynamicSamples.press,
      ...dynamicSamples.careers,
    ],
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const manifest = buildVisualQaRouteManifest();
  process.stdout.write(JSON.stringify(manifest, null, 2));
}
