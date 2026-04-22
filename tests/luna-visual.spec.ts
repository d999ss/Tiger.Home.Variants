import { expect, test } from "@playwright/test"

const routes = ["/", "/solutions", "/divisions", "/products", "/companies", "/careers", "/contact"]

test.describe("Luna visual sanity", () => {
  for (const route of routes) {
    test(`renders Luna tokens on ${route}`, async ({ page }) => {
      await page.goto("http://localhost:3000" + route)
      const body = page.locator("body")
      await expect(body).toHaveCSS("color", /rgb/)
      // cards exist and have blur/border
      const card = page.locator("[class*='rounded-2xl'][class*='backdrop-blur']").first()
      await expect(card).toBeVisible()
    })
  }
})

