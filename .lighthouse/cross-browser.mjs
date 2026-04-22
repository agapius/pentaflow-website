import { firefox, webkit } from 'playwright';

const URL = 'http://localhost:8765/index.html';
const viewports = [
  { name: '1440', width: 1440, height: 900 },
  { name: '375', width: 375, height: 812 },
];
const browsers = [
  { name: 'firefox', launcher: firefox },
  { name: 'webkit',  launcher: webkit  },
];

const results = {};

for (const { name: bname, launcher } of browsers) {
  results[bname] = {};
  const browser = await launcher.launch();
  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await context.newPage();

    const consoleMsgs = [];
    const pageErrors = [];
    page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') consoleMsgs.push({ type: m.type(), text: m.text() }); });
    page.on('pageerror', e => pageErrors.push(e.message));

    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    const diag = await page.evaluate(() => {
      const vw = window.innerWidth;
      const dw = document.documentElement.scrollWidth;
      const imgs = Array.from(document.images).map(i => ({
        alt: i.alt.slice(0,30),
        complete: i.complete,
        naturalW: i.naturalWidth
      }));
      const fonts = Array.from(document.fonts).map(f => ({ family: f.family, status: f.status, weight: f.weight }));
      // check Berlin & Wien stat overflow
      const berlin = Array.from(document.querySelectorAll('div.font-display')).find(e => e.textContent.includes('Berlin'));
      const berlinR = berlin?.getBoundingClientRect();
      // check floating cards visible in hero
      const cards = Array.from(document.querySelectorAll('.stage-appear, .badge-float')).map(el => {
        const r = el.getBoundingClientRect();
        return { text: el.textContent.trim().slice(0,30), w: Math.round(r.width), h: Math.round(r.height) };
      });
      return {
        vw, dw, hScroll: dw > vw,
        brokenImgs: imgs.filter(i => !i.complete || i.naturalW === 0),
        fontCount: fonts.length, fontsLoaded: fonts.filter(f => f.status === 'loaded').length,
        berlinW: berlinR ? Math.round(berlinR.width) : null,
        cardCount: cards.length, cards: cards.slice(0,3)
      };
    });

    const shotPath = `.lighthouse/${bname}-${vp.name}.png`;
    await page.screenshot({ path: shotPath, fullPage: false });

    results[bname][vp.name] = { diag, consoleMsgs: consoleMsgs.slice(0,10), pageErrors, shotPath };
    await context.close();
  }
  await browser.close();
}

console.log(JSON.stringify(results, null, 2));
