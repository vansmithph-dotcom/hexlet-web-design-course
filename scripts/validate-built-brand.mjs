import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const siteDir = 'dist/course/pm1/P001';
const assetsDir = join(siteDir, 'assets');

if (!existsSync(join(siteDir, 'index.html'))) {
  throw new Error('P001 index.html is missing');
}

const css = readdirSync(assetsDir)
  .filter((name) => name.endsWith('.css'))
  .map((name) => readFileSync(join(assetsDir, name), 'utf8'))
  .join('\n');

if (!css.includes('--hexlet-primary') || !css.includes('.hx-card')) {
  throw new Error('Hexlet brand CSS is missing from the P001 build');
}

const imageCount = readdirSync(assetsDir)
  .filter((name) => /\.(?:png|jpe?g|webp|svg)$/i.test(name)).length;

if (imageCount < 4) {
  throw new Error(`Expected at least 4 visual assets, found ${imageCount}`);
}

if (!existsSync('dist/404.html')) {
  throw new Error('GitHub Pages SPA fallback dist/404.html is missing');
}

const fallback = readFileSync('dist/404.html', 'utf8');
if (!fallback.includes("location.replace") || !fallback.includes("/course/pm1/P001/")) {
  throw new Error('GitHub Pages fallback does not redirect lesson routes safely');
}

console.log(`Brand build verified with ${imageCount} visual assets.`);
