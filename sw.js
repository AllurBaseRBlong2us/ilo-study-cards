const CACHE_VERSION = 'ilo-study-v6';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './decks.js',
  './manifest.json',
  './fonts/JetBrainsMono-Regular.woff2',
  './fonts/JetBrainsMono-SemiBold.woff2',
  './fonts/JetBrainsMono-Bold.woff2',
  './fonts/JetBrainsMono-ExtraBold.woff2',
  './fonts/IBMPlexSans-Light.woff2',
  './fonts/IBMPlexSans-Regular.woff2',
  './fonts/IBMPlexSans-Medium.woff2',
  './fonts/IBMPlexSans-SemiBold.woff2',
  './fonts/IBMPlexSans-Bold.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Files that should always try network first (content that changes)
const NETWORK_FIRST = ['decks.js', 'index.html'];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(function(cache) {
        return cache.addAll(PRECACHE_ASSETS);
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_VERSION; })
          .map(function(key) { return caches.delete(key); })
      );
    }).then(function() {
      return clients.claim();
    })
  );
});

self.addEventListener('fetch', function(event) {
  var isNetworkFirst = NETWORK_FIRST.some(function(file) {
    return event.request.url.endsWith(file);
  });

  if (isNetworkFirst) {
    // Network first: try fresh content, fall back to cache for offline
    event.respondWith(
      fetch(event.request).then(function(response) {
        var clone = response.clone();
        caches.open(CACHE_VERSION).then(function(cache) {
          cache.put(event.request, clone);
        });
        return response;
      }).catch(function() {
        return caches.match(event.request);
      })
    );
  } else {
    // Cache first: fonts, icons, etc. that rarely change
    event.respondWith(
      caches.match(event.request).then(function(cached) {
        return cached || fetch(event.request);
      })
    );
  }
});

self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
