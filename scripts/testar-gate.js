// Testa a trava de servidor das aulas (functions/_gate.js e functions/_middleware.js) com um par de chaves de mentira:
// token válido / expirado / adulterado / de outro projeto / sem token, caminhos protegidos x livres e a página de bloqueio.
//   node scripts/testar-gate.js
const path = require('path'), { pathToFileURL } = require('url'), crypto = require('crypto');
const raiz = path.resolve(__dirname, '..');
let falhas = 0, total = 0;
const ok = (cond, nome) => { total++; if (!cond) { falhas++; console.log('  ✘ ' + nome); } };
const b64u = b => Buffer.from(b).toString('base64').split('+').join('-').split('/').join('_').split('=').join('');

(async () => {
  const G = await import(pathToFileURL(path.join(raiz, 'functions/_gate.js')).href);
  const M = await import(pathToFileURL(path.join(raiz, 'functions/_middleware.js')).href);
  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
  const jwk = Object.assign(publicKey.export({ format: 'jwk' }), { kid: 'k1', alg: 'RS256', use: 'sig' });
  const outra = crypto.generateKeyPairSync('rsa', { modulusLength: 2048 });
  let chamadas = 0, jwksQuebrado = false;
  const buscar = async () => { chamadas++; if (jwksQuebrado) throw new Error('rede'); return { ok: true, json: async () => ({ keys: [jwk] }) }; };
  const agora = Math.floor(Date.now() / 1000);
  const cria = (pl, chave, kid) => {
    const h = b64u(JSON.stringify({ alg: 'RS256', kid: kid || 'k1', typ: 'JWT' })), p = b64u(JSON.stringify(pl));
    const sig = crypto.sign('sha256', Buffer.from(h + '.' + p), chave || privateKey);
    return h + '.' + p + '.' + b64u(sig);
  };
  const base = { aud: G.PROJETO, iss: 'https://securetoken.google.com/' + G.PROJETO, sub: 'uid123', email: 'a@b.com', iat: agora - 10, exp: agora + 3000 };

  // ---- caminhos
  const gratis = new Set(['aulas/9-ano/1-tri/x/aula-1-a.html']);
  ok(G.protegido('/aulas/9-ano/1-tri/x/aula-2-b.html', gratis) === 'aulas/9-ano/1-tri/x/aula-2-b.html', 'aula comum é protegida');
  ok(G.protegido('/aulas/9-ano/1-tri/x/aula-1-a.html', gratis) === null, 'aula grátis é livre');
  ok(G.protegido('/aulas/9-ano/1-tri/x/aula-2-b', gratis) === 'aulas/9-ano/1-tri/x/aula-2-b.html', 'URL sem .html também é protegida');
  ok(G.protegido('/aulas/9-ano/1-tri/x/aula-1-a', gratis) === null, 'URL sem .html de aula grátis é livre');
  ok(G.protegido('/aulas/9-ano/1-tri/x/', gratis) === 'aulas/9-ano/1-tri/x/index.html', 'pasta (index) é protegida');
  ok(G.protegido('/aulas/9-ano/1-tri/x/img/figura.png', gratis) === null, 'imagem não é bloqueada');
  ok(G.protegido('/educacao-financeira/1-ano/3-tri/m/aula.html', gratis) !== null, 'educação financeira é protegida');
  ok(G.protegido('/ena-profmat/01/aula.html', gratis) !== null, 'ENA é protegido');
  ok(G.protegido('/catalogo.html', gratis) === null && G.protegido('/app/catalog.js', gratis) === null && G.protegido('/login.html', gratis) === null, 'páginas do site são livres');
  ok(G.protegido('/aulas/%2e%2e/x.html', gratis) !== null && G.protegido('/aulas/../app/auth.js', gratis) !== null, 'tentativa de ".." não libera');
  ok(G.protegido('/aulas/%E0%A4%A', gratis) === null, 'codificação inválida não quebra');
  ok(G.lerCookie('a=1; edu_t=abc.def; b=2', 'edu_t') === 'abc.def' && G.lerCookie('x=1', 'edu_t') === '', 'leitura do cookie');

  // ---- token
  const v = async (t, o) => G.verificaToken(t, Object.assign({ buscar }, o || {}));
  G.limpaCacheChaves();
  const bom = await v(cria(base)); ok(bom.ok && bom.uid === 'uid123' && bom.email === 'a@b.com', 'token válido aceito');
  const antes = chamadas; await v(cria(base)); ok(chamadas === antes, 'chaves do Google ficam em cache');
  ok(!(await v(cria(Object.assign({}, base, { exp: agora - 5 })))).ok, 'token expirado recusado');
  ok(!(await v(cria(Object.assign({}, base, { aud: 'outro-projeto' })))).ok, 'token de outro projeto recusado (aud)');
  ok(!(await v(cria(Object.assign({}, base, { iss: 'https://securetoken.google.com/outro' })))).ok, 'emissor errado recusado');
  ok(!(await v(cria(Object.assign({}, base, { sub: '' })))).ok, 'sem sub recusado');
  ok(!(await v(cria(Object.assign({}, base, { iat: agora + 4000 })))).ok, 'token "do futuro" recusado');
  ok(!(await v(cria(base, outra.privateKey))).ok, 'assinatura de outra chave recusada');
  const t = cria(base).split('.'); const pl = JSON.parse(Buffer.from(t[1], 'base64url').toString()); pl.sub = 'admin';
  ok(!(await v(t[0] + '.' + b64u(JSON.stringify(pl)) + '.' + t[2])).ok, 'payload adulterado recusado');
  ok(!(await v(cria(base, null, 'desconhecida'))).ok, 'kid desconhecido recusado');
  ok(!(await v('lixo')).ok && !(await v('')).ok && !(await v('a.b.c')).ok, 'formato inválido recusado');
  const none = b64u(JSON.stringify({ alg: 'none', kid: 'k1' })) + '.' + b64u(JSON.stringify(base)) + '.';
  ok(!(await v(none)).ok, 'alg "none" recusado');
  G.limpaCacheChaves(); jwksQuebrado = true;
  const q = await v(cria(base)); ok(!q.ok && q.indisponivel === true, 'sem chaves do Google: sinaliza indisponível (não confunde com recusa)');
  jwksQuebrado = false; G.limpaCacheChaves();

  // ---- middleware (fetch global trocado pelo de mentira)
  const fetchOriginal = globalThis.fetch; globalThis.fetch = buscar;
  const pedido = (pathname, cookie, metodo) => new Request('https://edumath.com.br' + pathname, { method: metodo || 'GET', headers: cookie ? { Cookie: cookie } : {} });
  const contexto = (req) => ({ request: req, next: async () => new Response('AULA', { status: 200, headers: { 'Content-Type': 'text/html' } }) });
  try {
    const livre = M.onRequest(contexto(pedido('/catalogo.html'))); ok((await (await livre).text()) === 'AULA', 'página livre passa');
    const g = await import(pathToFileURL(path.join(raiz, 'functions/_gratis.js')).href); const um = g.GRATIS[0];
    ok(um && (await (await M.onRequest(contexto(pedido('/' + um)))).text()) === 'AULA', 'aula grátis real passa sem login');
    const prot = '/aulas/9-ano/1-tri/porcentagem/aula-1-porcentagem-e-suas-representacoes.html';
    const r1 = await M.onRequest(contexto(pedido(prot))); ok(r1.status === 401, 'sem cookie: 401');
    const corpo = await r1.text(); ok(corpo.includes('Criar conta') && !corpo.includes('AULA'), 'página de bloqueio não vaza a aula');
    ok(r1.headers.get('Cache-Control') === 'no-store', 'bloqueio não é guardado em cache');
    const r2 = await M.onRequest(contexto(pedido(prot, 'edu_t=lixo'))); ok(r2.status === 401, 'cookie lixo: 401');
    const r3 = await M.onRequest(contexto(pedido(prot, 'edu_t=' + cria(base)))); ok(r3.status === 200 && (await r3.text()) === 'AULA', 'cookie válido: aula liberada');
    ok((r3.headers.get('Cache-Control') || '').includes('private'), 'aula liberada não vai para cache compartilhado');
    const r4 = await M.onRequest(contexto(pedido(prot, 'edu_t=' + cria(Object.assign({}, base, { exp: agora - 1 }))))); ok(r4.status === 401, 'cookie expirado: 401');
    const r5 = await M.onRequest(contexto(pedido(prot, null, 'HEAD'))); ok(r5.status === 401 && (await r5.text()) === '', 'HEAD sem login: 401 sem corpo');
    const r6 = await M.onRequest(contexto(pedido(prot, null, 'POST'))); ok(r6.status === 200, 'POST não é tratado (passa adiante)');
    G.limpaCacheChaves(); jwksQuebrado = true;
    const r7 = await M.onRequest(contexto(pedido(prot, 'edu_t=' + cria(base)))); ok(r7.status === 200 && r7.headers.get('X-Edu-Gate') === 'bypass', 'falha ao buscar chaves: não derruba o site (abre e marca bypass)');
    jwksQuebrado = false;
    const xss = G.paginaBloqueio('aulas/</script><script>alert(1)</script>.html'); ok(!xss.includes('</script><script>alert(1)'), 'página de bloqueio não injeta HTML do caminho');
  } finally { globalThis.fetch = fetchOriginal; }

  console.log(falhas ? `\n✘ trava de servidor: ${falhas} falha(s) em ${total} verificações` : `✔ trava de servidor: ${total} verificações ok`);
  process.exit(falhas ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
