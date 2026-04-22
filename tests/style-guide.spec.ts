import { expect, test } from "@playwright/test"

import { designTokens } from "../lib/design-tokens"

const STYLE_URL = "http://localhost:3000/style"

test.describe("/style guide", () => {
  test("renders all color tokens", async ({ page }) => {
    await page.goto(STYLE_URL)

    for (const swatch of designTokens.colors.core) {
      await expect(page.getByText(swatch.name, { exact: true }).first()).toBeVisible()
      if (swatch.role) {
        await expect(page.getByText(`Token: ${swatch.role}`, { exact: true })).toBeVisible()
      }
    }

    for (const swatch of designTokens.colors.neutrals) {
      await expect(page.getByText(swatch.name, { exact: true }).first()).toBeVisible()
    }

    for (const palette of designTokens.colors.subBrands) {
      await expect(page.getByRole("heading", { name: palette.label })).toBeVisible()
      for (const swatch of palette.swatches) {
        await expect(page.getByText(swatch.value, { exact: true })).toBeVisible()
      }
    }
  })

  test("lists typography tokens with utilities", async ({ page }) => {
    await page.goto(STYLE_URL)

    for (const heading of designTokens.typography.headings) {
      await expect(page.getByText(`${heading.utility} • weight`, { exact: false })).toBeVisible()
    }

    for (const body of designTokens.typography.body) {
      await expect(page.getByText(`${body.utility} • size`, { exact: false })).toBeVisible()
    }

    for (const label of designTokens.typography.labels) {
      await expect(page.getByText(label.name, { exact: true }).first()).toBeVisible()
    }
  })

  test("displays spacing scale and containers", async ({ page }) => {
    await page.goto(STYLE_URL)

    for (const entry of designTokens.spacing.scale) {
      await expect(page.getByText(`${entry.token}: ${entry.value}`, { exact: false })).toBeVisible()
    }

    for (const container of designTokens.spacing.containers) {
      await expect(page.getByText(`${container.size} (${container.value})`, { exact: true })).toBeVisible()
    }
  })

  test("renders component tokens", async ({ page }) => {
    await page.goto(STYLE_URL)

    for (const button of Object.values(designTokens.components.buttons.variants)) {
      await expect(page.getByRole("button", { name: `${button.name} Button` }).first()).toBeVisible()
    }

    for (const badge of Object.values(designTokens.components.badges.variants)) {
      await expect(page.getByText(badge.name, { exact: true })).toBeVisible()
    }

    await expect(page.getByText("Featured Content", { exact: true })).toBeVisible()
    await expect(page.getByText("Unified Flagship Line", { exact: true })).toBeVisible()

    const refinedCard = designTokens.components.cards.refined
    await expect(page.locator(".refined-card").first()).toBeVisible()
  })
})

