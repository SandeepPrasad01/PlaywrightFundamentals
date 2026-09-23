import { test, expect} from '@playwright/test';

test.skip('checkout with PayPal', async ({ page }) => {
  // never executes
});

test.only('login as Pramod', async ({ page }) => {
  // only this test runs, everything else in the file is ignored
});

test.fail('cart total is wrong, BUG-451', async () => {
  expect(90).toBe(100);   // actually returns 90
});

test.fixme('upload 2GB file', async () => {
  // skipped, but flagged as "needs fixing"
});

test('full regression report', async () => {
  test.slow();
  console.log(test.info().timeout);   // 90000 instead of 30000
});

test('mobile layout', async ({ page, browserName }) => {
  test.fixme(browserName === 'webkit', 'Safari renders menu wrong');
  
  await page.goto("https://sdet.live");
    


});