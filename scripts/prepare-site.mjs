import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
copyFileSync('site/index.html', 'dist/index.html');
console.log('Prepared dist/index.html.');
