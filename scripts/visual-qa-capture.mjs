import fs from "node:fs";
import path from "node:path";
import { chromium } from "@playwright/test";
import { buildVisualQaRouteManifest } from "./visual-qa-routes.mjs";

const baseUrl = process.env.VISUAL_QA_BASE_URL || "http://localhost:3005";
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const outputRoot = path.join(process.cwd(), "artifacts", "visual-qa", timestamp);

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function routeToFilename(route) {
  if (route === "/") return "home";
  return route.replace(/^\//, "").replace(/[\/:?&=#]+/g, "__");
}

async function settlePage(page) {
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.evaluate(async () => {
    const waitFrame = () =>
      new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    await waitFrame();

    const viewportHeight = window.innerHeight;
    const maxScroll = document.documentElement.scrollHeight - viewportHeight;
    const step = Math.max(320, Math.floor(viewportHeight * 0.8));

    for (let current = 0; current < maxScroll; current += step) {
      window.scrollTo({ top: current, behavior: "instant" });
      await waitFrame();
      await new Promise((resolve) => setTimeout(resolve, 120));
    }

    window.scrollTo({ top: maxScroll, behavior: "instant" });
    await waitFrame();
    await new Promise((resolve) => setTimeout(resolve, 180));

    window.scrollTo({ top: 0, behavior: "instant" });
    await waitFrame();
  });
  await page.waitForTimeout(350);
}

async function captureRoute(page, route, viewportName) {
  const url = new URL(route, baseUrl).toString();
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await settlePage(page);

  const targetDir = path.join(outputRoot, viewportName);
  ensureDir(targetDir);
  const screenshotPath = path.join(targetDir, `${routeToFilename(route)}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  return screenshotPath;
}

async function main() {
  const manifest = buildVisualQaRouteManifest();
  ensureDir(outputRoot);
  fs.writeFileSync(path.join(outputRoot, "manifest.json"), JSON.stringify(manifest, null, 2));

  const browser = await chromium.launch();
  const output = {
    baseUrl,
    outputRoot,
    capturedAt: new Date().toISOString(),
    screenshots: {},
  };

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    output.screenshots[viewport.name] = {};

    for (const route of manifest.allAuditRoutes) {
      output.screenshots[viewport.name][route] = await captureRoute(page, route, viewport.name);
    }

    await context.close();
  }

  await browser.close();
  fs.writeFileSync(path.join(outputRoot, "capture-output.json"), JSON.stringify(output, null, 2));
  process.stdout.write(`${outputRoot}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
