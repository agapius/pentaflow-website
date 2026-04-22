import { firefox, webkit, chromium } from 'playwright';

const URL = 'http://localhost:8765/index.html';
const browsers = [
  { name: 'chromium', launcher: chromium },
  { name: 'firefox',  launcher: firefox  },
  { name: 'webkit',   launcher: webkit   },
];

for (const { name, launcher } of browsers) {
  const browser = await launcher.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const failedRequests = [];
  page.on('requestfailed', req => failedRequests.push({ url: req.url(), err: req.failure()?.errorText }));
  page.on('response', res => {
    if (res.url().includes('jasper')) console.log(`[${name}] ${res.status()} ${res.url()}`);
  });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const portrait = await page.evaluate(() => {
    const p = document.querySelector('img[alt*="Jasper" i]');
    if (!p) return { found: false };
    const r = p.getBoundingClientRect();
    return {
      found: true,
      src: p.currentSrc || p.src,
      srcset: p.srcset,
      complete: p.complete,
      naturalW: p.naturalWidth, naturalH: p.naturalHeight,
      loading: p.loading,
      visibleW: Math.round(r.width), visibleH: Math.round(r.height),
      offsetY: Math.round(r.top + window.scrollY)
    };
  });

  // also try scrolling into view and retrying
  await page.evaluate(() => document.querySelector('img[alt*="Jasper" i]')?.scrollIntoView());
  await page.waitForTimeout(1000);
  const afterScroll = await page.evaluate(() => {
    const p = document.querySelector('img[alt*="Jasper" i]');
    return { complete: p?.complete, naturalW: p?.naturalWidth };
  });

  console.log(`[${name}] portrait:`, JSON.stringify(portrait));
  console.log(`[${name}] afterScroll:`, JSON.stringify(afterScroll));
  console.log(`[${name}] failedRequests:`, JSON.stringify(failedRequests));
  await context.close();
  await browser.close();
}
