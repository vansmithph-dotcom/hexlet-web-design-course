import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
copyFileSync('site/index.html', 'dist/index.html');
writeFileSync('dist/404.html', `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Переход к курсу Hexlet</title>
    <script>
      const course = '/hexlet-web-design-course/course/pm1/P001/';
      const home = '/hexlet-web-design-course/';
      location.replace(location.pathname.includes('/course/pm1/P001/') ? course : home);
    </script>
  </head>
  <body><a href="/hexlet-web-design-course/">Открыть курс Hexlet</a></body>
</html>\n`);
console.log('Prepared dist/index.html.');
