import { test, expect } from "@playwright/test";

test.describe("Sign In Page - General", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/signin");
  });

  test("should display the correct page elements", async ({ page }) => {
    // 1. Check if Zigment logo exists
    const logo = page.locator('img[alt="zigment logo"]');
    await expect(logo).toBeVisible();

    // 2. Check if welcome back message is present
    const welcomeMessage = page.locator('h2:has-text("Welcome back")');
    await expect(welcomeMessage).toBeVisible();

    // 3. Check for input field
    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute("placeholder", "Email address");

    // 4. Check for social login options
    const socialLoginOptions = [
      'span:has-text("Continue with Google")',
      'span:has-text("Continue with Microsoft")',
      'span:has-text("Continue with Linkedin")',
      'span:has-text("Continue with Zoho")',
    ];
    for (const optionSelector of socialLoginOptions) {
      await expect(page.locator(optionSelector)).toBeVisible();
    }

    // 5. Check for "Don't have an account? Sign up" link
    const signUpLink = page.locator('button:has-text("Sign up")');
    await expect(signUpLink).toBeVisible();
    // on click text should change to "Log in"
    await signUpLink.click();
    // wait for the text to change or wait 2 seconds
    const signUpLink2 = page.locator('button:has-text("Log in")');
    await expect(signUpLink2).toBeVisible();
    // also h2 should change to "Create your account"
    const welcomeMessage2 = page.locator('h2:has-text("Create your account")');
    await expect(welcomeMessage2).toBeVisible();
  });

  test("should have a functional continue button", async ({ page }) => {
    const continueButton = page.locator('button:has-text("Continue")');
    const emailInput = page.locator('input[type="email"]');

    // 6. Make sure button is clickable
    await expect(continueButton).toBeEnabled();

    // 7. Make sure button has loader/disabled spinner when clicked
    await emailInput.fill("karma@zigment.ai");
    await continueButton.click();
    await expect(continueButton).toBeDisabled();
    const spinner = page.locator('button:has-text("Continue") svg');
    await expect(spinner).toBeVisible();

    // 8. Check for toaster with email sent message
    const toaster = page.locator('text="Email sent!"');
    await expect(toaster).toBeVisible({ timeout: 5000 });
  });

  test("should show error for invalid email", async ({ page }) => {
    const continueButton = page.locator('button:has-text("Continue")');
    const emailInput = page.locator('input[type="email"]');

    await emailInput.fill("invalid-email");
    await continueButton.click();

    const errorMessage = page.locator(
      'text="Please enter a valid email address"'
    );
    await expect(errorMessage).toBeVisible();
  });

  test("should have clickable social login options", async ({ page }) => {
    const socialLoginOptions = [
      {
        selector: 'span:has-text("Continue with Google")',
        expectedText: "Continue with Google",
      },
      {
        selector: 'span:has-text("Continue with Microsoft")',
        expectedText: "Continue with Microsoft",
      },
      {
        selector: 'span:has-text("Continue with Linkedin")',
        expectedText: "Continue with Linkedin",
      },
      {
        selector: 'span:has-text("Continue with Zoho")',
        expectedText: "Continue with Zoho",
      },
    ];

    for (const option of socialLoginOptions) {
      const element = page.locator(option.selector);
      await expect(element).toBeVisible();
      await expect(element).toHaveText(option.expectedText);
      await expect(element).toHaveClass(/cursor-pointer/);
    }
  });
});
