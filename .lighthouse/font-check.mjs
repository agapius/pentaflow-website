import { firefox, webkit, chromium } from 'playwright';

const URL = 'http://localhost:8765/index.html';
for (const [name, launcher] of Object.entries({ chromium, firefox, webkit })) {
  const browser = await launcher.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const info = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    const spans = h1 ? Array.from(h1.children) : [];
    const all = [h1, ...spans].filter(Boolean).map(el => {
      const cs = getComputedStyle(el);
      return {
        tag: el.tagName,
        text: el.textContent.trim().slice(0,30),
        fontFamily: cs.fontFamily,
        fontWeight: cs.fontWeight,
        fontStyle: cs.fontStyle,
        fontSize: cs.fontSize,
        fontVariationSettings: cs.fontVariationSettings
      };
    });
    // Also check the "PSI Penta." span specifically
    const psi = document.querySelector('h1 span.font-display, h1 .text-gray-500, h1 span.block, h1 > span') ||
                Array.from(document.querySelectorAll('h1 *')).find(e => /PSI Penta/.test(e.textContent));
    const psiCs = psi ? getComputedStyle(psi) : null;
    const loadedFonts = Array.from(document.fonts).map(f => ({ family: f.family, weight: f.weight, style: f.style, status: f.status }));
    return { h1Chain: all, psiFamily: psiCs?.fontFamily, psiWeight: psiCs?.fontWeight, psiClass: psi?.className, fonts: loadedFonts };
  });
  console.log(`=== ${name} ===`);
  console.log(JSON.stringify(info, null, 2));
  await context.close();
  await browser.close();
}
