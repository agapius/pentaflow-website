import { firefox, webkit, chromium } from 'playwright';
for (const [name, launcher] of Object.entries({ chromium, firefox, webkit })) {
  const browser = await launcher.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto('http://localhost:8765/index.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  const h1 = await page.$('h1');
  await h1.screenshot({ path: `.lighthouse/h1-${name}.png` });
  await ctx.close(); await browser.close();
}
console.log('done');
