import { demoData, link_title } from '@/components/sections/marketing/demo/demo-agent-section';
import { test, expect } from '@playwright/test';

test.describe('Zigment Demo Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/demo");
  });

  test("should display the correct content in Header Banner", async ({ page }) => {
    const headerBanner = page.locator('.header-banner');
    const h2 = headerBanner.locator('h2');
    const pTags = headerBanner.locator('p');

    await expect(h2).toHaveText('Demo AI Agents');

    // Check if any of the p tags contain the specified text
    const pTexts = await pTags.allTextContents();
    const expectedTexts = [
      'Demo',
      'Interact with Zigment’s AI agents on various platforms to see how they can help you grow your business.'
    ];

    const containsExpectedText = pTexts.some(text =>
      expectedTexts.some(expectedText => text.includes(expectedText))
    );

    expect(containsExpectedText).toBe(true);
  });

  test("should display the correct content in Demo Cards", async ({ page }) => {
    // Wait for the demo cards to be visible
    await page.waitForSelector('.demo-agent-card');

    const demoCards = page.locator('.demo-agent-card');
    const demoCardCount = await demoCards.count();
    expect(demoCardCount).toBe(demoData.length);

    for (let i = 0; i < demoCardCount; i++) {
      const demoCard = demoCards.nth(i);
      const title = await demoCard.locator('h3').textContent();
      const description = await demoCard.locator('#description').textContent();
      const demo = demoData.find(d => d.title === title);
      expect(demo).toBeDefined();
      expect(description).toBe(demo?.description);

      // Check for the presence of the note element conditionally
      if (demo?.note) {
        const note = await demoCard.locator('#note').textContent();
        expect(note).toBe(demo.note);
      }

      // Check each link in the demo card
      const demoLinks = demoCard.locator('#demo-links button');
      const demoLinkCount = await demoLinks.count();
      expect(demoLinkCount).toBe(demo?.links.length);
    }
  });



  test("should open modals for each demo card link and close properly", async ({ page }) => {
    // Wait for the demo cards to be visible
    await page.waitForSelector('.demo-agent-card');

    const demoCards = page.locator('.demo-agent-card');
    const demoCardCount = await demoCards.count();



    for (let i = 0; i < demoCardCount; i++) {
      const demoCard = demoCards.nth(i);

      // Check each link in the demo card
      const demoLinks = demoCard.locator('.demo-link');
      const demoLinkCount = await demoLinks.count();
      expect(demoLinkCount).toBe(demoData[i].links.length);

      for (let j = 0; j < demoLinkCount; j++) {
        const demoLink = demoLinks.nth(j);
        await demoLink.click();

        // Wait for the modal to be visible
        const modal = page.locator(`text="Let's get this demo started"`);
        await expect(modal).toBeVisible();
        



        // Close the modal by clicking the backdrop
        const backdrop = page.locator('.backdrop');
        await backdrop.click({ position: { x: 10, y: 10 } });

        // Ensure the modal is closed
        await expect(modal).not.toBeVisible();
      }
    }
  });

   


});


test.describe('Zigment Demo Page - Form Validation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/demo");
    // Open the modal for form submission
    const demoLink = page.locator('.demo-link').first();
    await demoLink.click();
    await page.waitForSelector(`text="Let's get this demo started"`);
  });

  test("should display validation errors for empty required fields", async ({ page }) => {
    // Click the Continue button without filling the form
    await page.click('button:text("Continue")');

    // Expect validation errors for Full Name and Company Name
    const fullNameError = await page.locator('input[name="full_name"]').getAttribute('class');
    const companyNameError = await page.locator('input[name="companyName"]').getAttribute('class');

    // Check if errors are visible (red border class present)
    expect(fullNameError).toContain('ring-red-500');
    expect(companyNameError).toContain('ring-red-500');

    const errorMessage = page.locator(
      'text="Please fill all the Details"'
    );
    // Expect an error toast to be visible
    await expect(errorMessage).toBeVisible();
  });

  test("should display error for invalid email format", async ({ page }) => {
    // Fill in the form with invalid email and valid other fields
    await page.fill('input[name="companyName"]', 'My Company');
    await page.fill('input[name="full_name"]', 'John Doe');
    await page.fill('input[name="email"]', 'invalid-email');

    // Submit the form
    await page.click('button:text("Continue")');

    // Expect email validation error (red border) and error toast
    const emailError = await page.locator('input[name="email"]').getAttribute('class');
    expect(emailError).toContain('ring-red-500');

    const errorMessage = page.locator(
      'text="Email is not in Correct format"'
    );
    // Expect an error toast to be visible
    await expect(errorMessage).toBeVisible();
  });

 
});


// test.describe('Check if all the Demo Links are working', async() => {
 
//   const linksData = demoData.map((demo) => {
//     return demo.links.map((x)=>{return {...x, agent_name:demo.title}}) 
//   }).flat();

//   test.beforeEach(async ({ page }) => {
//     await page.goto("/demo");
//     // Open the modal for form submission
//   });

//   linksData.forEach((link, index) => {
//       test(`Agent Name:${link.agent_name} should work correctly`, async ({ page }) => {
//         const demoLinks = page.locator('.demo-link');
//         // Add your test logic here
//         await demoLinks.nth(index).click();
//         await page.waitForSelector(`text="Let's get this demo started"`);
//         await page.fill('input[name="companyName"]', 'My Company');
//         await page.fill('input[name="full_name"]', 'John Doe');
//         await page.fill('input[name="email"]', 'vincentvuram204@gmail.com');
//         await page.click('button:text("Continue")');

//         if(link.agent_name !== link_title.Webchat){
//           //  await page.
//           await page.waitForNavigation();

//           // Check if the URL has changed
//           expect(page.url()).toBe(link.url);
//         }
//       });
//   });



// })

