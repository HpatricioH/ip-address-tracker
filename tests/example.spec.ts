import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const title = page.locator('text=IP Address Tracker')
  await expect(title).toContainText('IP Address Tracker')
})
