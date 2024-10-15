const CACHE_NAME = 'moja-pwa-cache';
const urlsToCache = [
    '/PWAApp/',
    '/PWAApp/manifest.json',
    '/PWAApp/app.js',
    '/PWAApp/index.html',
    '/PWAApp/style.css',
    '/PWAApp/settings/settings.html',
    '/PWAApp/settings/settings.css',
    '/PWAApp/addons/clock.js',
    '/PWAApp/addons/theme.js',
    '/PWAApp/addons/light.css',
    '/PWAApp/addons/dark.css',
    '/PWAApp/addons/icons/video.svg',
    '/PWAApp/addons/icons/settings.svg'
];

// Instalacja Service Workera i cache'owanie zasobów
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting(); // Natychmiast aktywuj nową wersję
});

// Aktywacja i czyszczenie starych cache'y
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Usunięto stary cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim(); // Od razu aktywuj nową wersję dla wszystkich klientów
});

// Fetch - strategia cache-first
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    // Zasób jest w cache, zwróć go
                    return response;
                }
                // Zasób nie jest w cache, pobierz z sieci
                return fetch(event.request).then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        // Zapisz nowy zasób w cache na przyszłość
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
    );
});

// Sprawdzenie i aktualizacja cache'owanych zasobów w tle
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-cache') {
        event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
                return fetch('/').then((response) => {
                    cache.put('/', response);
                });
            })
        );
    }
});