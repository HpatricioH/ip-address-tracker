import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://ip-address-tracker-five-mauve.vercel.app/')
})

const IP_ADDRESS = [
  '8.8.8.8',
  '12.12.12.12'
]

test.describe('IP Address Tracker', () => {
  test('should let me enter an IP address', async ({ page }) => {
    const ipInput = page.locator('input[name="ipAddress"]')
    await ipInput.fill(IP_ADDRESS[0])
    await page.getByTestId('inputButton').click()

    const ipData = page.locator('p[data-testid="ipData"]')
    await ipData.waitFor({ state: 'attached' })

    await expect(ipData).toHaveText(IP_ADDRESS[0])
  })
})
