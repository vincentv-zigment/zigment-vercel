// tests/test-utils.ts
import { test as base } from "@playwright/test";
import dotenv from "dotenv";

// Load test environment variables
dotenv.config({ path: ".env" });

export const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    // First visit the SSO callback URL with the JWT token
    await page.goto(
      `${process.env.NEXT_PUBLIC_API_URL}/users/auth/callback/magic-link?token=${process.env.TEST_AUTH_TOKEN}`
    );

    // Wait for authentication to complete
    // You might need to adjust the URL or selector based on your app's behavior
    try {
      // Wait for redirect to complete (adjust timeout as needed)
      // wait for redirect to /app page...
      await page.waitForURL("**/app", { timeout: 30000 });
    } catch (error) {
      console.error("Failed to authenticate via SSO callback:", error);
      throw error;
    }

    // Verify authentication worked
    // if page goes to /app page, then authentication is successful

    if (!page.url().includes("/app")) {
      throw new Error("Failed to authenticate via SSO callback");
    }
    await use(page); // Pass the authenticated page to the test
  },
});

export { expect } from "@playwright/test";
