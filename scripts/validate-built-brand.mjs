import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

let totalImages = 0;
for (const lesson of ['P001', 'P031']) {
  const siteDir = join('dist/course/pm1', lesson);
  const assetsDir = join(siteDir, 'assets');

  if (!existsSync(join(siteDir, 'index.html'))) {
    throw new Error(`${lesson} index.html is missing`);
  }

  const css = readdirSync(assetsDir)
    .filter((name) => name.endsWith('.css'))
    .map((name) => readFileSync(join(assetsDir, name), 'utf8'))
    .join('\n');

  if (!css.includes('--hexlet-primary') || !css.includes('.hx-card')) {
    throw new Error(`Hexlet brand CSS is missing from the ${lesson} build`);
  }

  const imageCount = readdirSync(assetsDir)
    .filter((name) => /\.(?:png|jpe?g|webp|svg)$/i.test(name)).length;

  if (imageCount < 4) {
    throw new Error(`${lesson}: expected at least 4 visual assets, found ${imageCount}`);
  }
  totalImages += imageCount;
}

if (!existsSync('dist/404.html')) {
  throw new Error('GitHub Pages SPA fallback dist/404.html is missing');
}

const fallback = readFileSync('dist/404.html', 'utf8');
if (!fallback.includes("location.replace") || !fallback.includes("/course/pm1/")) {
  throw new Error('GitHub Pages fallback does not redirect lesson routes safely');
}

console.log(`Brand builds verified with ${totalImages} visual assets.`);
