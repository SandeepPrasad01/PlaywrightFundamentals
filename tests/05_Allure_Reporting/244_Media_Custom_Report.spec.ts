import { test, expect } from "@playwright/test";

/**
 * Same three dashboard checks as 233, but this file also captures
 * screenshot + video + trace for every test so the custom reporter
 * has media to render.
 *
 * Run it with:
 *   npx playwright test tests/05_Allure_Reporting/234_Media_Custom_Report.spec.ts \
 *       --reporter=./utils/CustomReporter.ts
 */
test.use({
    storageState: './user-session.json',
    screenshot: 'on',   // attach a PNG for every test, pass or fail
    video: 'on',        // record a .webm for every test
    trace: 'on',        // attach a trace.zip for every test
});

const DASHBOARD = "https://app.wingify.com/#/dashboard?accountId=1281316";

for (const n of [1, 2, 3]) {
    test(`dashboard loads with media captured — Test${n}`, async ({ page }, testInfo) => {

        await test.step('open the dashboard', async () => {
            await page.goto(DASHBOARD);
            await expect(page).toHaveURL(/dashboard/);
        });

        await test.step('confirm we are not on the login screen', async () => {
            await expect(page.locator('#login-username')).toBeHidden();
        });

        await test.step('attach a named screenshot', async () => {
            await testInfo.attach(`dashboard-test${n}`, {
                body: await page.screenshot({ fullPage: true }),
                contentType: 'image/png',
            });
        });
    });
}