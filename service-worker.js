const CACHE='chancelaria-1997-v6.2.1';
const CORE=[
  './index.html?v=6.2.1','./index.html','./imprimir.html','./manifest.json',
  './icon-192.png','./icon-512.png','./cabecalho-oficial.jpg','./assinatura-chanceler.png','./certificado-base.png'
];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const u=new URL(event.request.url);
  if(u.origin!==self.location.origin)return;
  event.respondWith(
    caches.match(event.request,{ignoreSearch:false}).then(hit=>hit||fetch(event.request).then(resp=>{
      const copy=resp.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return resp;
    }).catch(()=>caches.match('./index.html')))
  );
});
