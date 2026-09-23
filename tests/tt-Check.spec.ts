import { test, expect } from '@playwright/test';

test('login form validation and forgot password flow', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

  const emailField = page.getByRole('textbox', { name: 'Email Address' });
  const passwordField = page.getByRole('textbox', { name: 'Password' });
  const rememberMe = page.getByRole('checkbox', { name: 'Remember me' });
  const loginButton = page.getByTestId('login-button');
  const forgotPasswordLink = page.getByTestId('form-forgot-password');

  await expect(emailField).toBeVisible();
  await expect(passwordField).toBeVisible();
  await expect(loginButton).toBeVisible();

  await emailField.fill('Sandeep');
  await passwordField.fill('123456');
  await rememberMe.check();
  await loginButton.click();

  await expect(forgotPasswordLink).toBeVisible();
  await forgotPasswordLink.click();
});