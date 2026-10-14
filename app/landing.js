// Interações da página inicial (index.html): menu, barra que "solidifica" ao rolar, entrada suave das seções,
// números que sobem e o atalho "Continuar de onde parou". Tudo opcional: sem JavaScript a página já é legível.
import { iniciarThemeToggle } from './theme-toggle.js';

iniciarThemeToggle('theme-pref-app');
const $ = id => document.getElementById(id);
const reduz = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// barra de navegação
const nav = $('nav');
const aoRolar = () => nav.classList.toggle('solid', window.scrollY > 40);
window.addEventListener('scroll', aoRolar, { passive: true }); aoRolar();

// menu no celular
const links = $('links'), btn = $('menuBtn');
const alterna = abrir => { links.classList.toggle('open', abrir); btn.setAttribute('aria-expanded', String(abrir)); btn.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu'); };
btn.addEventListener('click', () => alterna(!links.classList.contains('open')));
links.addEventListener('click', e => { if (e.target.closest('a')) alterna(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') alterna(false); });

// animações do herói respeitam "reduzir movimento"
if (reduz) document.querySelectorAll('animate').forEach(a => a.remove());

// entrada suave das seções (IntersectionObserver + conferência por posição, para funcionar em qualquer navegador)
const alvos = document.querySelectorAll('.lp-head, .lp-card, .lp-steps li, .ft, .lp-prof, .pl, .lp-faq details, .lp-final, .lp-stats');
if ('IntersectionObserver' in window && !reduz) {
  alvos.forEach((e, i) => { e.classList.add('rv'); e.style.transitionDelay = (i % 3) * 70 + 'ms'; });
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  alvos.forEach(e => io.observe(e));
  const confere = () => alvos.forEach(e => { if (!e.classList.contains('in') && e.getBoundingClientRect().top < window.innerHeight - 30) { e.classList.add('in'); io.unobserve(e); } });
  window.addEventListener('scroll', confere, { passive: true }); setTimeout(confere, 300);
  setTimeout(() => alvos.forEach(e => e.classList.add('in')), 6000); // rede de segurança: nada fica invisível se algo falhar
}

// números que sobem
const fmt = n => n.toLocaleString('pt-BR');
const nums = document.querySelectorAll('[data-n]');
const sobe = el => {
  const alvo = +el.dataset.n; if (!alvo) return;
  if (reduz) { el.textContent = fmt(alvo); return; }
  const t0 = performance.now(), dur = 1300;
  const passo = t => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3); el.textContent = fmt(Math.round(alvo * e)); if (p < 1) requestAnimationFrame(passo); };
  requestAnimationFrame(passo);
};
if ('IntersectionObserver' in window) {
  const io2 = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { sobe(x.target); io2.unobserve(x.target); } }), { threshold: .6 });
  nums.forEach(n => io2.observe(n));
}

// continuar de onde parou (quem já estudou neste aparelho, sem precisar de conta)
try {
  const u = JSON.parse(localStorage.getItem('prog:ultimo') || 'null');
  if (u && u.a && u.t && Date.now() - u.d < 90 * 86400000 && /^[\w\-\/]+\.html$/.test(u.a)) {
    const a = $('retomar'); a.href = u.a + (u.s > 0 ? '#s=' + (u.s + 1) : ''); $('retomarTit').textContent = u.t.length > 52 ? u.t.slice(0, 51) + '…' : u.t; a.hidden = false;
  }
} catch (e) { /* sem registro */ }
