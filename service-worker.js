const CACHE_NAME = "chancelaria-1997-v590-profissional";

const APP_FILES = [
  "./",
  "./index.html",
  "./imprimir.html",
  "./manifest.json",
  "./cabecalho-oficial.jpg",
  "./icon-192.png",
  "./icon-512.png",
  "./certificado-base.png",
  "./assinatura-chanceler.png"
];

const STATIC_PATHS = new Set(APP_FILES.map(p => new URL(p, self.location.href).pathname));

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith((async () => {
    try {
      const response = await fetch(event.request);
      const u = new URL(event.request.url);
      // Cacheia apenas os arquivos estáticos sem query string. URLs de
      // imprimir.html com filename/visita/wa não ficam acumuladas no cache.
      if (response && response.ok && !u.search && STATIC_PATHS.has(u.pathname)) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, response.clone());
      }
      return response;
    } catch (_) {
      const cached = await caches.match(event.request, { ignoreSearch: true });
      if (cached) return cached;
      if (event.request.mode === "navigate") return caches.match("./index.html");
      return Response.error();
    }
  })());
});
