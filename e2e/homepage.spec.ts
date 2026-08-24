import { test, expect } from "@playwright/test";

test("homepage loads with hero and key sections", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/BitSI/i);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Sambungkan",
  );

  for (const id of ["tentang", "bidang", "aktivitas", "galeri", "gabung"]) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
});
