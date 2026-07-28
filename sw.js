/* Champion's Journey - service worker (offline + installable) */
const CACHE = 'cj-v31';
const ASSETS = ['./', './index.html'];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {}));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isDoc = req.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('/index.html');
  if (isDoc) {
    e.respondWith(
      fetch(req).then(res => {
        try { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } catch (_) {}
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }
  e.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req).then(res => {
        try { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } catch (_) {}
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
