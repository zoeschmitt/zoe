import test from "playwright/test";

test.beforeEach(async ({page}) => {
    await page.goto("http://localhost:5173")
})

test.describe("Loads", () => {
    test('loads', async ({page}) => {
        await expect(page).toHaveTitle(/Playwright/);
    })
})