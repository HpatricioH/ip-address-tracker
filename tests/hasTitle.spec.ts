import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://ip-address-tracker-five-mauve.vercel.app/')
  const title = page.locator('text=IP Address Tracker')
  await expect(title).toContainText('IP Address Tracker')
})
