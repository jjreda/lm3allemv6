const C = 'lm3allem-v5';
const FILES = [
  './',
  'index.html',
  'manifest.json',
  'market.jpg',
  'chef.png',
  'icon-192.png',
  'icon-512.png',
  'cust_1.png',
  'cust_2.png',
  'cust_3.png',
  'cust_4.png',
  'cust_5.png',
  'cust_6.png',
  'cust_7.png',
  'cust_8.png',
  'cust_9.png',
  'cust_10.png',
  'cust_11.png',
  'cust_12.png'
];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== C).map(n => caches.delete(n)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
    const copy = res.clone(); caches.open(C).then(c => c.put(e.request, copy)); return res;
  })));
});
