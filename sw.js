const CACHE_VERSION = 'horta-hero-v2';
const CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdn.tailwindcss.com?v=1.0.4',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css?v=1.0.4',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn-icons-png.flaticon.com/512/628/628283.png',
  'https://cdn-icons-png.flaticon.com/512/5117/5117065.png'
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando Service Worker...');
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      console.log('[SW] Cache aberto:', CACHE_VERSION);
      return cache.addAll(CACHE_URLS).catch((err) => {
        console.warn('[SW] Alguns recursos não puderam ser cacheados:', err);
        // Continuar mesmo se alguns recursos falharem
        return cache.addAll(CACHE_URLS.filter(url => !url.includes('cdn')));
      });
    })
  );
  self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Ativando Service Worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_VERSION) {
            console.log('[SW] Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estratégia de Fetch: Cache First para assets, Network First para dados
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requisições não-GET
  if (request.method !== 'GET') {
    return;
  }

  // Ignorar requisições de outras origens (exceto CDNs confiáveis)
  if (url.origin !== location.origin && !url.hostname.includes('cdn') && !url.hostname.includes('flaticon')) {
    return;
  }

  // Estratégia 1: Cache First para assets estáticos
  if (request.url.includes('.css') || request.url.includes('.js') || request.url.includes('.png') || request.url.includes('.jpg')) {
    event.respondWith(
      caches.match(request).then((response) => {
        return response || fetch(request).then((fetchResponse) => {
          // Cache o novo recurso
          if (fetchResponse.ok) {
            const cache = caches.open(CACHE_VERSION);
            cache.then((c) => c.put(request, fetchResponse.clone()));
          }
          return fetchResponse;
        }).catch(() => {
          // Se falhar, retornar um fallback
          return new Response('Recurso indisponível offline', { status: 503 });
        });
      })
    );
  } else {
    // Estratégia 2: Network First para HTML e dados dinâmicos
    event.respondWith(
      fetch(request)
        .then((fetchResponse) => {
          // Atualizar cache com a nova resposta
          if (fetchResponse.ok) {
            const cache = caches.open(CACHE_VERSION);
            cache.then((c) => c.put(request, fetchResponse.clone()));
          }
          return fetchResponse;
        })
        .catch(() => {
          // Se falhar, usar cache
          return caches.match(request).then((response) => {
            return response || new Response('Página indisponível offline', { status: 503 });
          });
        })
    );
  }
});

// Tratamento de mensagens do cliente
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('[SW] Service Worker carregado e pronto!');
