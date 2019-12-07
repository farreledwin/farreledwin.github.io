importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) console.log(`Workbox berhasil dimuat`);
else console.log(`Workbox gagal dimuat`);

const CACHE_NAME = 'football-pwa';

var urltocache = [
	'/',
	'/index.html',
	'/content/home.html',
	'/content/favoritesaya.html',
	'/content/informasitim.html',
	'/content/jadwaltanding.html',
	'/css/materialize.css',
	'/css/materialize.min.css',
	'/css/informasitim.css',
	'/js/idb.js',
	'/js/indexdb.js',
	'/manifest.json',
	'/package-lock.json',
	'/push.js',
	'/sw.js',
	'/js/materialize.js',
	'/js/materialize.min.js',
	'/js/nav.js',
	'/js/api.js',
	'/js/idb.d.ts',
	'/js/node.js',
	'/img/c.png',
	'/img/soccer192.png',
	'/img/soccer512.png',
	'/img/notification.png'
];
workbox.precaching.precacheAndRoute([
	{ url: '/', revision: '1' },
	{ url: '/index.html', revision: '1' },
	{ url: '/content/home.html', revision: '1' },
	{ url: '/content/favoritesaya.html', revision: '1' },
	{ url: '/content/informasitim.html', revision: '1' },
	{ url: '/content/jadwaltanding.html', revision: '1' },
	{ url: '/css/materialize.css', revision: '1' },
	{ url: '/css/materialize.min.css', revision: '1' },
	{ url: '/css/informasitim.css', revision: '1' },
	{ url: '/js/idb.js', revision: '1' },
	{ url: '/js/indexdb.js', revision: '1' },
	{ url: '/manifest.json', revision: '1' },
	{ url: '/package-lock.json', revision: '1' },
	{ url: '/push.js', revision: '1' },
	{ url: '/sw.js', revision: '1' },
	{ url: '/js/materialize.js', revision: '1' },
	{ url: '/js/materialize.min.js', revision: '1' },
	{ url: '/js/nav.js', revision: '1' },
	{ url: '/js/api.js', revision: '1' },
	{ url: '/js/idb.d.ts', revision: '1' },
	{ url: '/js/node.js', revision: '1' },
	{ url: '/img/c.png', revision: '1' },
	{ url: '/img/soccer192.png', revision: '1' },
	{ url: '/img/soccer512.png', revision: '1' },
	{ url: '/img/notification.png', revision: '1' }
]);

workbox.routing.registerRoute(new RegExp('/content/'), workbox.strategies.staleWhileRevalidate());

self.addEventListener('fetch', function(event) {
	var base_url = 'https://api.football-data.org/';
	if (event.request.url.indexOf(base_url) > -1) {
		event.respondWith(
			caches.open(CACHE_NAME).then(function(cache) {
				return fetch(event.request).then(function(response) {
					cache.put(event.request.url, response.clone());
					return response;
				});
			})
		);
	} else {
		event.respondWith(
			caches.match(event.request).then(function(response) {
				return response || fetch(event.request);
			})
		);
	}
});
self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName) {
					if (cacheName != CACHE_NAME) {
						// console.log("ServiceWorker: cache " + cacheName + " dihapus");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
self.addEventListener('push', function(event) {
	var body;
	if (event.data) {
		body = event.data.text();
	} else {
		body = 'Push message no payload';
	}
	var options = {
		body: body,
		icon: 'img/notification.png',
		vibrate: [ 100, 50, 100 ],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: 1
		}
	};
	event.waitUntil(self.registration.showNotification('Push Notification', options));
});
