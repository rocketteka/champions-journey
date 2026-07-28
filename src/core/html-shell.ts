const HEAD = `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
<meta name="theme-color" content="#58CC02">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles/main.css">
<link rel="stylesheet" href="/styles/responsive.css">
<link rel="stylesheet" href="/styles/crm.css">
<script>try{if(localStorage.getItem('cj_theme')==='dark')document.documentElement.dataset.theme='dark';}catch(e){}</script>`;

export function pageShell(title: string, script: string, body = ''): string {
  return `<!DOCTYPE html>
<html lang="ru">
<head>
${HEAD}
<title>${title} — Champion's Journey</title>
</head>
<body>
${body || '<div id="app"></div><div id="overlay"></div>'}
<script type="module" src="${script}"></script>
</body>
</html>`;
}
