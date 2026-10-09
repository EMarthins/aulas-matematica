/* Service worker: o site funciona offline depois da primeira visita.
   - arquivos do próprio site: "stale-while-revalidate" (responde do cache e atualiza em segundo plano)
   - Firebase e outros domínios: passam direto pela rede (login e plataforma exigem internet)
   Troque VERSAO para forçar a limpeza do cache antigo. */
var VERSAO = 'v2';
var CACHE = 'aulas-' + VERSAO;
var BASE = ['./', 'index.html', 'simulado.html', 'revisao.html', 'app/style.css', 'app/home.css', 'app/estudo.css', 'app/catalog.js', 'app/ferramentas.js', 'app/banco.json', 'app/theme-toggle.js', 'assets/fonts.css', 'manifest.webmanifest', 'icon.svg'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return Promise.all(BASE.map(function(u){ return c.add(u).catch(function(){}); })); }).then(function(){ return self.skipWaiting(); }));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(ks){ return Promise.all(ks.filter(function(k){ return k.indexOf('aulas-') === 0 && k !== CACHE; }).map(function(k){ return caches.delete(k); })); }).then(function(){ return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e){
  var req = e.request;
  if(req.method !== 'GET') return;
  var url = new URL(req.url);
  if(url.origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(function(cache){
    return cache.match(req, { ignoreSearch: true }).then(function(hit){
      var rede = fetch(req).then(function(res){ if(res && res.status === 200) cache.put(req, res.clone()); return res; }).catch(function(){ return hit; });
      return hit || rede;
    });
  }));
});
