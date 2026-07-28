/**
 * Cloud Run / buildpacks entrypoint.
 * Serves Vite `dist/` on 0.0.0.0:$PORT (default 8080).
 */
import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), 'dist');
const port = Number(process.env.PORT || 8080);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.txt': 'text/plain; charset=utf-8',
};

function safeJoin(base, reqPath) {
  const decoded = decodeURIComponent(reqPath.split('?')[0]);
  const cleaned = normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, '');
  const full = join(base, cleaned);
  if (!full.startsWith(base + sep) && full !== base) return null;
  return full;
}

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
  res.end(body);
}

function tryFile(file) {
  if (!file || !existsSync(file)) return null;
  const st = statSync(file);
  if (st.isDirectory()) {
    const index = join(file, 'index.html');
    return existsSync(index) ? index : null;
  }
  return file;
}

if (!existsSync(root)) {
  console.error('Missing dist/ — run "npm run build" before start.');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  const urlPath = req.url || '/';
  let file = safeJoin(root, urlPath);

  let resolved = tryFile(file);
  // MPA: /app/home → dist/app/home.html
  if (!resolved && file && !extname(file)) {
    resolved = tryFile(file + '.html');
  }
  if (!resolved) {
    send(res, 404, 'Not found');
    return;
  }

  const type = MIME[extname(resolved).toLowerCase()] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': type });
  createReadStream(resolved).pipe(res);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Champion's Journey listening on 0.0.0.0:${port}`);
});
