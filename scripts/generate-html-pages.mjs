import fs from 'node:fs';
import path from 'node:path';

const HEAD = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="theme-color" content="#58CC02">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles/main.css">
<link rel="stylesheet" href="/styles/responsive.css">
<link rel="stylesheet" href="/styles/crm.css">
<script>try{if(localStorage.getItem('cj_theme')==='dark')document.documentElement.dataset.theme='dark';}catch(e){}</script>`;

function page(title, script) {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
${HEAD}
<title>${title} — Champion's Journey</title>
</head>
<body>
<div id="app"></div>
<div id="overlay"></div>
<script type="module" src="${script}"></script>
</body>
</html>
`;
}

const pages = [
  ['index.html', "Champion's Journey", '/src/pages/landing.ts'],
  ['pages/login.html', 'Вход', '/src/pages/login.ts'],
  ['pages/auth.html', 'Аккаунт', '/src/pages/auth.ts'],
  ['pages/apply.html', 'Заявка', '/src/pages/apply.ts'],
  ['app/home.html', 'Главная', '/src/pages/app/home.ts'],
  ['app/journey.html', 'Путь', '/src/pages/app/journey.ts'],
  ['app/feed.html', 'Лента', '/src/pages/app/feed.ts'],
  ['app/profile.html', 'Профиль', '/src/pages/app/profile.ts'],
  ['app/crm.html', 'CRM', '/src/pages/app/crm.ts'],
  ['app/calendar.html', 'Календарь', '/src/pages/app/calendar.ts'],
  ['app/materials.html', 'Материалы', '/src/pages/app/materials.ts'],
  ['app/achievements.html', 'Достижения', '/src/pages/app/achievements.ts'],
  ['app/subs.html', 'Абонементы', '/src/pages/app/subs.ts'],
  ['app/settings.html', 'Настройки', '/src/pages/app/settings.ts'],
  ['app/coach.html', 'Тренер', '/src/pages/app/coach.ts'],
  ['app/assess.html', 'Оценка', '/src/pages/app/assess.ts'],
];

for (const [file, title, script] of pages) {
  const dir = path.dirname(file);
  if (dir !== '.') fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, page(title, script));
}

console.log(`Generated ${pages.length} HTML pages`);
