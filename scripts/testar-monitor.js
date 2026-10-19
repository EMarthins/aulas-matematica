// Testa app/monitor.js num "navegador de mentira": só liga no site publicado, envia relatos de erro no formato aceito pelas regras do Firestore,
// limita a 3 por visita, não repete o mesmo erro e ignora ruído (extensões, rede, scripts de outros domínios).   node scripts/testar-monitor.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const codigo = fs.readFileSync(path.join(__dirname, '../app/monitor.js'), 'utf8');
let falhas = 0, total = 0;
const ok = (c, n) => { total++; if (!c) { falhas++; console.log('  ✘ ' + n); } };

function ambiente(host) {
  const enviados = [], scripts = [], ouvintes = {}, store = {};
  const W = {
    location: { hostname: host, origin: 'https://' + host, pathname: '/aulas/x/aula-1.html', href: 'https://' + host + '/aulas/x/aula-1.html#s=3' },
    localStorage: { getItem: k => store[k] || null, setItem: (k, v) => { store[k] = v; } },
    addEventListener: (t, f) => { ouvintes[t] = f; }
  };
  const D = { title: 'Aula 1', head: { appendChild: s => scripts.push(s) }, documentElement: { appendChild: s => scripts.push(s) }, createElement: () => ({ setAttribute(k, v) { this[k] = v; } }) };
  const ctx = { window: W, document: D, navigator: { userAgent: 'TesteBot/1.0' }, fetch: (u, o) => { enviados.push({ u, corpo: JSON.parse(o.body) }); return Promise.resolve({}); }, Date, JSON, Object, String, Number, Math };
  return { ctx, W, enviados, scripts, ouvintes, store };
}
const roda = (e) => vm.runInNewContext(codigo, e.ctx);

// localhost: não faz nada
let e = ambiente('localhost'); roda(e);
ok(!e.ouvintes.error && !e.enviados.length, 'no localhost não liga');

// site publicado
e = ambiente('edumath.com.br'); roda(e);
ok(typeof e.ouvintes.error === 'function' && typeof e.ouvintes.unhandledrejection === 'function', 'liga no site publicado');
ok(e.scripts.length === 0, 'sem chaves preenchidas, não carrega Sentry nem Cloudflare');
const err = (msg, arq, lin) => e.ouvintes.error({ message: msg, filename: arq, lineno: lin });
const origem = 'https://edumath.com.br';
err('TypeError: x is undefined', origem + '/app/trilhas.js', 12);
ok(e.enviados.length === 1, 'erro do próprio site é relatado');
const c = e.enviados[0] && e.enviados[0].corpo.fields;
ok(c && c.tipo.stringValue === 'site' && c.categoria.stringValue === 'Erro automático' && c.status.stringValue === 'novo' && c.quando.timestampValue, 'campos aceitos pelas regras (tipo site, status novo, quando)');
ok(c && Object.keys(c).every(k => ['tipo', 'categoria', 'alvo', 'titulo', 'mensagem', 'pagina', 'quando', 'status', 'app'].includes(k)), 'só campos permitidos pelas regras');
ok(c && c.pagina.stringValue.indexOf('#') < 0, 'não envia o trecho # do endereço');
ok(e.enviados[0].u.indexOf('/documents/reports?key=') > 0, 'vai para a coleção reports');
e.store['mon:ult'] = '0'; err('TypeError: x is undefined', origem + '/app/trilhas.js', 12);
ok(e.enviados.length === 1, 'o mesmo erro não é repetido');
e.store['mon:ult'] = '0'; err('Script error.', '', 0); err('ResizeObserver loop limit exceeded', origem + '/a.js', 1); err('boom', 'chrome-extension://abc/x.js', 1); err('boom de outro dominio', 'https://anuncios.exemplo.com/a.js', 1);
ok(e.enviados.length === 1, 'ruído (extensão, rede, outro domínio, ResizeObserver) é ignorado');
e.store['mon:ult'] = '0'; err('Erro B', origem + '/app/b.js', 1);
e.store['mon:ult'] = '0'; err('Erro C', origem + '/app/c.js', 1);
e.store['mon:ult'] = '0'; err('Erro D', origem + '/app/d.js', 1);
ok(e.enviados.length === 3, 'no máximo 3 relatos por visita');
e = ambiente('edumath.com.br'); roda(e); e.ouvintes.unhandledrejection({ reason: new Error('falhou algo') });
ok(e.enviados.length === 1 && e.enviados[0].corpo.fields.mensagem.stringValue.indexOf('falhou algo') >= 0, 'promessa rejeitada é relatada');
e = ambiente('edumath.com.br'); roda(e); e.ouvintes.unhandledrejection({ reason: { code: 'auth/wrong-password' } });
ok(e.enviados.length === 0, 'erros de login (auth/...) não viram relato');
e = ambiente('edumath.pages.dev'); roda(e); ok(!!e.ouvintes.error, 'liga também no edumath.pages.dev');
e = ambiente('evil-edumath.com.br.exemplo.com'); roda(e); ok(!e.ouvintes.error, 'domínio parecido não liga');

// com chaves preenchidas
const cod2 = codigo.replace("sentryLoader: ''", "sentryLoader: 'https://js.sentry-cdn.com/abc.min.js'").replace("cfBeaconToken: ''", "cfBeaconToken: 'tok123'");
e = ambiente('edumath.com.br'); vm.runInNewContext(cod2, e.ctx);
ok(e.scripts.some(s => /sentry-cdn/.test(s.src)) && e.scripts.some(s => /cloudflareinsights/.test(s.src) && /tok123/.test(s['data-cf-beacon'] || '')), 'com as chaves, carrega Sentry e o beacon da Cloudflare');

console.log(falhas ? `\n✘ monitor: ${falhas} falha(s) em ${total}` : `✔ monitor: ${total} verificações ok`);
process.exit(falhas ? 1 : 0);
