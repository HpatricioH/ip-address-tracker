import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const title = page.locator('text=ip Address Tracker App')
  await expect(title).toContainText('ip Address Tracker App')
})
