import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
copyFileSync('site/index.html', 'dist/index.html');
copyFileSync('dist/course/pm1/P001/index.html', 'dist/404.html');
console.log('Prepared dist/index.html.');
