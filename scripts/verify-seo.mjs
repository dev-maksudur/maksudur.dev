import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');
const robotsPath = path.join(outDir, 'robots.txt');
const sitemapPath = path.join(outDir, 'sitemap.xml');
const error404Path = path.join(outDir, '404.html');

console.log('=== 1. ROBOTS.TXT AUDIT ===');
const robotsContent = fs.readFileSync(robotsPath, 'utf8');
console.log(robotsContent.trim());

console.log('\n=== 2. SITEMAP & CANONICAL AUDIT ===');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const locMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
console.log('Total URLs in sitemap:', locMatches.length);

let errors = 0;

for (const url of locMatches) {
  const parsed = new URL(url);
  let relPath = parsed.pathname.replace(/^\//, '');
  if (relPath.endsWith('/')) {
    relPath += 'index.html';
  } else if (!relPath.endsWith('.html')) {
    relPath += '/index.html';
  }
  const filePath = path.join(outDir, relPath);
  if (!fs.existsSync(filePath)) {
    console.error('FAIL: Missing HTML file for sitemap URL:', url, '->', filePath);
    errors++;
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');

  // Match canonical
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i)
    || html.match(/<link[^>]*href=["'](.*?)["'][^>]*rel=["']canonical["']/i);
  if (!canonicalMatch) {
    console.error('FAIL: Missing canonical tag for:', url);
    errors++;
  } else if (canonicalMatch[1] !== url) {
    console.error('FAIL: Canonical mismatch for:', url, 'Found:', canonicalMatch[1]);
    errors++;
  } else {
    console.log('OK: [200 OK & Canonical Match]', url);
  }

  // Check robots meta tag
  if (html.includes('content="noindex') || html.includes("content='noindex")) {
    console.error('FAIL: Accidental noindex on public SEO page:', url);
    errors++;
  }
}

console.log('\n=== 3. 404 ERROR PAGE DIRECTIVES AUDIT ===');
const error404Html = fs.readFileSync(error404Path, 'utf8');
const hasNoIndex = error404Html.includes('noindex');
const hasNoFollow = error404Html.includes('nofollow');
if (!hasNoIndex || !hasNoFollow) {
  console.error('FAIL: 404 page missing noindex or nofollow directive!');
  errors++;
} else {
  console.log('OK: 404 page has strict noindex, nofollow directives');
}

const canonical404 = error404Html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i)
  || error404Html.match(/<link[^>]*href=["'](.*?)["'][^>]*rel=["']canonical["']/i);
if (canonical404) {
  console.error('FAIL: 404 page has accidental canonical link pointing to:', canonical404[1]);
  errors++;
} else {
  console.log('OK: 404 page has NO accidental canonical link pointing to the homepage');
}

console.log('\n=== 4. ROBOTS.TXT DIRECTIVE COVERAGE ===');
const blockedAssets = ['/_next/static/', '/images/', '/favicon.ico'].filter(a => {
  return robotsContent.includes(`Disallow: ${a}`);
});
if (blockedAssets.length > 0) {
  console.error('FAIL: robots.txt blocks critical rendering assets:', blockedAssets);
  errors++;
} else {
  console.log('OK: robots.txt permits rendering CSS, JS, and image assets');
}

const crawlWastePatterns = ['/*?*utm_*', '/*?*fbclid*', '/*?*gclid*'];
const missingDisallows = crawlWastePatterns.filter(p => !robotsContent.includes(`Disallow: ${p}`));
if (missingDisallows.length > 0) {
  console.error('FAIL: robots.txt missing disallow rules for crawl-waste patterns:', missingDisallows);
  errors++;
} else {
  console.log('OK: robots.txt disallows tracking query variations to prevent crawl waste');
}

console.log('\n=======================================');
console.log(`AUDIT RESULT: ${errors === 0 ? 'PASSED (0 errors)' : `FAILED (${errors} errors)`}`);
console.log('=======================================');
