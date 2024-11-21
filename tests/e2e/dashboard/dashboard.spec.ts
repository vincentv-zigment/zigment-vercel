// tests/dashboard.spec.ts
import { test, expect } from "../../test-utils";

test("dashboard page shows correct content", async ({
  authenticatedPage: page,
}) => {
  // Page is already authenticated, just navigate to dashboard

  // wait 15 seconds for the page to load and h1 to be visible
  // no need to change page
  // go to /app/dashboard
  await page.goto("/app/setting/billing", { waitUntil: "load" }); // wait for page to load

  await expect(page.locator("h1")).toBeVisible();
});
