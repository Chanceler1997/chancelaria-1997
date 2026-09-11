const VERSION='7.2.19';
const CACHE=`chancelaria-1997-v${VERSION}-estavel`;
const CORE=[
  './index.html','./imprimir.html','./manifest.json',
  './icon-192.png','./icon-512.png','./cabecalho-oficial.jpg',
  './assinatura-chanceler.png','./certificado-base.png'
];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
function canonical(url){return new Request(new URL(url.origin+url.pathname).toString(),{method:'GET'})}
async function networkFirstDocument(request,url){
  const key=canonical(url);
  try{const resp=await fetch(request);if(resp&&resp.ok){const c=await caches.open(CACHE);await c.put(key,resp.clone())}return resp}
  catch(_e){
    const hit=await caches.match(key,{ignoreSearch:true});if(hit)return hit;
    const fallback=url.pathname.endsWith('imprimir.html')?'./imprimir.html':'./index.html';
    return (await caches.match(fallback,{ignoreSearch:true}))||new Response('Chancelaria 1997 indisponível offline.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}})
  }
}
async function cacheFirst(request){
  const hit=await caches.match(request,{ignoreSearch:true});if(hit)return hit;
  try{const resp=await fetch(request);if(resp&&resp.ok){const c=await caches.open(CACHE);await c.put(request,resp.clone())}return resp}
  catch(_e){return new Response('',{status:504,statusText:'Offline'})}
}
self.addEventListener('fetch',event=>{
  const r=event.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==self.location.origin)return;
  const doc=r.mode==='navigate'||u.pathname.endsWith('/index.html')||u.pathname.endsWith('/imprimir.html');
  event.respondWith(doc?networkFirstDocument(r,u):cacheFirst(r));
});
