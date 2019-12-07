importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) console.log(`Workbox berhasil dimuat`);
else console.log(`Workbox gagal dimuat`);

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

workbox.routing.registerRoute(
	new RegExp('/content/'),
	workbox.strategies.staleWhileRevalidate({ cacheName: 'content-cache' })
);

workbox.routing.registerRoute(
	new RegExp('https://api.football-data.org/'),
	workbox.strategies.staleWhileRevalidate({
		cacheName: 'API-CACHE',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 30,
				maxAgeSeconds: 3600
			})
		]
	})
);

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
