const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const { chromium } = require('playwright');

async function render() {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(path.join(__dirname, 'index.html')).href, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    assert(await page.evaluate(() => document.fonts.check('600 59px Geist')));
    assert(await page.evaluate(() => [...document.images].every(image => image.complete && image.naturalWidth > 0)));
    await page.screenshot({ path: path.resolve(__dirname, '../../profile/assets/cove.png') });
  } finally {
    await browser.close();
  }
}

render().catch(error => { console.error(error); process.exitCode = 1; });
