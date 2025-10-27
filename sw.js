// sw.js — PWA mock con network-first para HTML
const CACHE = 'cm360-v4';
const ASSETS = [
  './manifest.webmanifest',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png'
];

// Instala: precachea íconos/manifest (no cacheamos index.html para evitar quedar pegados)
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

// Activa: limpia cachés viejas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE && caches.delete(k))))
  );
  self.clients.claim();
});

// Fetch: network-first para navegaciones/HTML; cache-first para estáticos
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Si es navegación (documento HTML o modo navigate), usamos network-first
  const isNavigate = req.mode === 'navigate' ||
                     (req.destination === 'document') ||
                     (req.headers.get('accept') || '').includes('text/html');

  if (isNavigate) {
    event.respondWith(
      fetch(req).then(r => r).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Para otros recursos: cache-first
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req))
  );
});
