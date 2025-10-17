const CACHE_NAME = 'kicad-viewer-cache-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './service-worker.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});