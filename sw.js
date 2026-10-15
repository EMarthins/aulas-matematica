/* Service worker: o site funciona offline depois da primeira visita.
   - arquivos do próprio site: "stale-while-revalidate" (responde do cache e atualiza em segundo plano)
   - Firebase e outros domínios: passam direto pela rede (login e plataforma exigem internet)
   Troque VERSAO para forçar a limpeza do cache antigo.
   As buscas em segundo plano usam cache:'no-cache' (revalidam por ETag), senão o cache HTTP do navegador (até 4 h na Cloudflare) devolvia CSS/JS velhos junto de HTML novo. */
var VERSAO = 'v29';
var CACHE = 'aulas-' + VERSAO;
/* Hospedagens que tiram o ".html" do endereço (ex.: Cloudflare Pages: /planos.html -> /planos) respondem com redirecionamento;
   o navegador recusa abrir, numa navegação, uma resposta marcada como "redirecionada". Refazemos a resposta sem a marca. */
function limpa(res){
  if(!res || !res.redirected) return Promise.resolve(res);
  return res.blob().then(function(b){ return new Response(b, { status: res.status, statusText: res.statusText, headers: res.headers }); });
}
var BASE = ['./', 'index.html', 'home.html', 'catalogo.html', 'app/hub.css', 'app/landing.css', 'app/landing.js', 'simulado.html', 'revisao.html', 'app/style.css', 'app/home.css', 'app/estudo.css', 'app/catalog.js', 'app/ferramentas.js', 'app/banco.json', 'app/theme-toggle.js', 'app/sidebar.js', 'app/acesso.js', 'app/planos.js', 'app/nuvem.js', 'planos.html', 'app/sidebar.css', 'app/nav-data.js', 'assets/fonts.css', 'manifest.webmanifest', 'icon.svg'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return Promise.all(BASE.map(function(u){ return fetch(u, { cache: 'reload' }).then(limpa).then(function(r){ if(r && r.status === 200) return c.put(u, r); }).catch(function(){}); })); }).then(function(){ return self.skipWaiting(); }));
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
      var alvo = req.mode === 'navigate' ? new Request(req.url, { cache: 'no-cache' }) : new Request(req, { cache: 'no-cache' }); /* navegação pede "redirect: manual"; aqui seguimos o redirecionamento */
      var rede = fetch(alvo).then(limpa).then(function(res){ if(res && res.status === 200) cache.put(req, res.clone()); return res; }).catch(function(){ return hit; });
      return hit || rede;
    });
  }));
});
