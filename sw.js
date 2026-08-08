/* Champion's Journey - service worker (offline + installable) */
const CACHE = 'cj-v32';
const ASSETS = ['./', './index.html'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

function isCodeRequest(url) {
  return (
    url.pathname.startsWith('/src/')
    || url.pathname.startsWith('/assets/')
    || url.pathname.startsWith('/@')
    || url.pathname.endsWith('.js')
    || url.pathname.endsWith('.mjs')
    || url.pathname.endsWith('.ts')
    || url.pathname.endsWith('.css')
    || url.pathname.endsWith('.wasm')
  );
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const isDoc = req.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('.html');

  // HTML + JS/CSS: always prefer network so CRM/auth fixes are not stuck on old cache
  if (isDoc || isCodeRequest(url)) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) {
            try {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(req, copy));
            } catch (_) { /* */ }
          }
          return res;
        })
        .catch(() => caches.match(req)),
    );
    return;
  }

  // Other static assets: cache-first
  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) {
            try {
              const copy = res.clone();
              caches.open(CACHE).then((c) => c.put(req, copy));
            } catch (_) { /* */ }
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    }),
  );
});
