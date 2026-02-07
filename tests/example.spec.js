import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Alerts.html');

  await page.frame().childFrames
  
  page.on('dialog', async dialog =>{

    await dialog.accept();
  })

  await page.locator(".btn.btn-danger").click()

  await page.waitForTimeout(5000)

  });

/*
await page.getByRole('link', { name: 'foo', exact: true }).click();
  await page.getByRole('link', { name: 'foo' }).nth(1).click();
  await page.getByRole('link', { name: 'baz' }).click();
  */


