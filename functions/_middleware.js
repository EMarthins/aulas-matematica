// Cloudflare Pages Functions — trava real das aulas. Roda só nos caminhos de _routes.json (/aulas/*, /educacao-financeira/*, /ena-profmat/*).
// Regra: as aulas grátis (functions/_gratis.js, gerado por scripts/aplicar-acesso.js) abrem para todos; o resto exige um login válido do Firebase.
// Para liberar só quem tem plano pago no futuro, mude a função `permite` (hoje: qualquer conta logada).
import { GRATIS } from './_gratis.js';
import { protegido, lerCookie, verificaToken, paginaBloqueio, COOKIE } from './_gate.js';

const LIVRES = new Set(GRATIS);
const permite = (_sessao, _rel) => true;

export async function onRequest(context) {
  const { request, next } = context;
  if (request.method !== 'GET' && request.method !== 'HEAD') return next();
  const url = new URL(request.url);
  const rel = protegido(url.pathname, LIVRES);
  if (!rel) return next();

  const token = lerCookie(request.headers.get('Cookie'), COOKIE);
  const sessao = token ? await verificaToken(token) : { ok: false, motivo: 'sem-token' };

  if (sessao.ok && permite(sessao, rel)) {
    const res = await next();
    const h = new Headers(res.headers);
    h.set('Cache-Control', 'private, max-age=0, must-revalidate');   // nada de cache compartilhado (CDN) para páginas protegidas
    h.append('Vary', 'Cookie');
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
  }
  if (sessao.indisponivel) {   // não deu para buscar as chaves do Google: não derrubamos o site por isso
    const res = await next();
    const h = new Headers(res.headers); h.set('X-Edu-Gate', 'bypass'); h.set('Cache-Control', 'no-store');
    return new Response(res.body, { status: res.status, statusText: res.statusText, headers: h });
  }
  return new Response(request.method === 'HEAD' ? null : paginaBloqueio(rel), {
    status: 401,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' }
  });
}
