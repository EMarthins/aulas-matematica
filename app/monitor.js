/* Monitoramento do EduMath: erros do site + visitas.
   Carregado por app/sidebar.js (páginas do app) e por app/ferramentas.js (aulas, guias e atividades). Só liga no site publicado
   (edumath.com.br / edumath.pages.dev); no seu computador (localhost) não faz nada.

   O QUE JÁ FUNCIONA SEM CONTA NENHUMA
   • Erros de JavaScript viram um relato automático na aba "Relatos de erro" do admin.html (categoria "Erro automático"),
     pelo mesmo caminho do botão "Reportar erro": no máximo 3 por visita, sem repetir o mesmo erro, sem dados pessoais.

   O QUE LIGA QUANDO VOCÊ PREENCHER (abaixo)
   • Sentry (painel de erros com agrupamento e alertas): crie o projeto em sentry.io (tipo "Browser JavaScript") e cole o endereço do
     "Loader Script" (Settings → Client Keys → Loader Script), algo como https://js.sentry-cdn.com/abc123.min.js
   • Cloudflare Web Analytics (visitas, sem cookies): no painel da Cloudflare → Analytics & Logs → Web Analytics → Add a site, copie o
     "token" do código (data-cf-beacon='{"token": "...."}'). Se o site já passa pela Cloudflare, dá para ligar com 1 clique lá e deixar vazio aqui. */
(function(){
  var CFG = {
    sentryLoader: '',     // ex.: 'https://js.sentry-cdn.com/0123456789abcdef.min.js'
    cfBeaconToken: '',    // ex.: '0123456789abcdef0123456789abcdef'
    erroAutomatico: true  // relato automático de erros de JavaScript no admin.html
  };
  var W = window, D = document;
  if(W.__eduMonitor) return; W.__eduMonitor = true;
  var host = W.location.hostname;
  if(!/(^|\.)edumath\.com\.br$|(^|\.)edumath\.pages\.dev$/.test(host)) return;

  function carrega(src, attrs){
    var s = D.createElement('script'); s.src = src; s.async = true; s.crossOrigin = 'anonymous';
    Object.keys(attrs || {}).forEach(function(k){ s.setAttribute(k, attrs[k]); });
    (D.head || D.documentElement).appendChild(s);
  }
  if(CFG.sentryLoader) carrega(CFG.sentryLoader);
  if(CFG.cfBeaconToken) carrega('https://static.cloudflareinsights.com/beacon.min.js', { 'data-cf-beacon': JSON.stringify({ token: CFG.cfBeaconToken }) });

  if(!CFG.erroAutomatico) return;
  var PROJETO = 'estude-app-marth', CHAVE = 'AIzaSyCH48C_LHkHB1O8T38gwACat-39tmWRH4M'; // públicos por design do Firebase (a segurança vem das regras)
  var enviados = 0, vistos = {};
  function corta(s, n){ s = String(s == null ? '' : s); return s.length > n ? s.slice(0, n - 1) + '…' : s; }
  function ruido(msg, arq){
    if(!msg) return true;
    if(/ResizeObserver loop|Script error\.?$|Non-Error promise rejection|auth\/|Load failed|Failed to fetch|NetworkError|AbortError|cancelled|chrome-extension|moz-extension/i.test(msg)) return true; // rede/extensões não são erros do site
    if(arq && arq.indexOf(W.location.origin) !== 0 && arq.indexOf('gstatic.com/firebasejs') < 0) return true; // só código nosso
    return false;
  }
  function relata(msg, arq, linha){
    if(enviados >= 3) return;
    msg = corta(msg, 400); if(ruido(msg, arq)) return;
    var assin = msg + '|' + (arq || '') + '|' + (linha || ''); if(vistos[assin]) return; vistos[assin] = 1;
    try{ var ult = +W.localStorage.getItem('mon:ult') || 0; if(Date.now() - ult < 5000) return; W.localStorage.setItem('mon:ult', String(Date.now())); }catch(e){}
    enviados++;
    var texto = msg + (arq ? '\narquivo: ' + corta(arq.replace(W.location.origin, ''), 160) + (linha ? ':' + linha : '') : '');
    var campos = {
      tipo: 'site', categoria: 'Erro automático', alvo: corta(W.location.pathname, 300), titulo: corta(D.title, 200), mensagem: corta(texto, 2000),
      pagina: corta(W.location.href.split('#')[0], 300), status: 'novo', app: corta(navigator.userAgent, 120)
    }, f = {};
    Object.keys(campos).forEach(function(k){ f[k] = { stringValue: String(campos[k]) }; });
    f.quando = { timestampValue: new Date().toISOString() };
    try{
      fetch('https://firestore.googleapis.com/v1/projects/' + PROJETO + '/databases/(default)/documents/reports?key=' + CHAVE, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fields: f }), keepalive: true
      }).catch(function(){});
    }catch(e){}
  }
  W.addEventListener('error', function(e){ if(e && e.message) relata(e.message, e.filename, e.lineno); });
  W.addEventListener('unhandledrejection', function(e){ var r = e && e.reason; relata('Promessa rejeitada: ' + (r && (r.message || r.code) || r), '', 0); });
})();
