import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./tests",
  use: { headless: true, viewport: { width: 1440, height: 900 } },
  webServer: { command: "npm run dev", port: 3000, timeout: 120000, reuseExistingServer: !process.env.CI },
})

