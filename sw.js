const CACHE_NAME = 'cuaderno-docente-v7';

const urlsToCache = [
  '/cuaderno-unico-docente-2026/',
  '/cuaderno-unico-docente-2026/index.html',
  '/cuaderno-unico-docente-2026/manifest.json',
  '/cuaderno-unico-docente-2026/icon-192x192.png',
  '/cuaderno-unico-docente-2026/icon-512x512.png',
  '/cuaderno-unico-docente-2026/icon-maskable-512x512.png'
];

// INSTALACIÓN
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// ACTIVACIÓN
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// FETCH (estrategia: cache first)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
