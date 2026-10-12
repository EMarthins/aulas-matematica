// ============================================================
// Barra lateral compartilhada: matérias e anos (com progresso), ferramentas de estudo, área do professor/aluno,
// busca, tema, instalar app e conta. Carregada por index, simulado, revisão, painéis e páginas de apoio.
//   <link rel="stylesheet" href="app/sidebar.css">  +  <script type="module" src="app/sidebar.js"></script>
// O usuário logado é lembrado em localStorage 'sb:user' ({ nome, role }) por app/auth.js.
// ============================================================
import { NAV } from './nav-data.js';

const ROOT = new URL('../', import.meta.url);
const root = document.documentElement;
const ACENTOS = ['primary', 'growth', 'decay', 'success'];
const url = p => ROOT.href + p;

let rel = decodeURIComponent(location.pathname.slice(ROOT.pathname.length));
if (!rel || rel.endsWith('/')) rel += 'index.html';
const NA_HOME = rel === 'index.html';

const jl = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
const sl = (k, v) => { try { localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); } catch (e) {} };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---------- ícones ----------
const I = {
  home: '<path d="M4 11.5 12 4l8 7.5V19a1 1 0 0 1-1 1h-4.5v-5.5h-5V20H5a1 1 0 0 1-1-1z"/>',
  sim: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 14l2 2 4-4"/>',
  rev: '<path d="M4 12a8 8 0 0 1 13.5-5.8L20 8.5M20 4v4.5h-4.5M20 12a8 8 0 0 1-13.5 5.8L4 15.5M4 20v-4.5h4.5"/>',
  conq: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5v1.5A3 3 0 0 0 8 10.5M16 6h3v1.5a3 3 0 0 1-3 3M12 13v4M8.5 20h7M10 17h4"/>',
  painel: '<rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="M3.5 9h17M9 9v11"/>',
  prova: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  banco: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  turmas: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5a3 3 0 0 1 0 6M17.5 14.5A5.5 5.5 0 0 1 21 20"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  down: '<path d="M12 4v11M7.5 11 12 15.5 16.5 11M5 20h14"/>',
  prof: '<path d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4zM5 16a4 4 0 0 1 4-4h10"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  entrar: '<path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M10 8l4 4-4 4M14 12H4"/>',
  sair: '<path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4M15 8l4 4-4 4M19 12H9"/>',
  chev: '<path d="m9 6 6 6-6 6"/>',
  recolher: '<path d="m11 7-5 5 5 5M18 7l-5 5 5 5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>'
};
const svg = n => '<svg viewBox="0 0 24 24" aria-hidden="true">' + (I[n] || n) + '</svg>';

// ---------- dados ----------
const visto = arq => { try { const p = JSON.parse(localStorage.getItem('prog:' + arq) || 'null'); return !!(p && p.v); } catch (e) { return false; } };
const contaAno = a => ({ total: a.arquivos.length, vistos: a.arquivos.filter(visto).length });
const contaMat = m => m.anos.reduce((c, a) => { const k = contaAno(a); c.total += k.total; c.vistos += k.vistos; return c; }, { total: 0, vistos: 0 });
const user = jl('sb:user', null);
const ehProf = !!user && user.role === 'professor', ehAluno = !!user && user.role === 'aluno';

function revisaoPendente() { return jl('rev:itens', []).filter(x => x.due <= Date.now()).length; }
function sequencia() {
  const dias = jl('prog:dias', []); if (!dias.length) return 0;
  const set = {}; dias.forEach(d => { set[d] = 1; });
  const f = x => x.getFullYear() + '-' + ('0' + (x.getMonth() + 1)).slice(-2) + '-' + ('0' + x.getDate()).slice(-2);
  let n = 0; const d = new Date(); if (!set[f(d)]) d.setDate(d.getDate() - 1);
  while (set[f(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

// matéria / ano que estão abertos na home (hash #id/ano); em outras páginas, a última matéria usada
function hashAtual() {
  if (!NA_HOME) return { id: null, ano: null };
  const h = location.hash.replace('#', '').split('/');
  const m = NAV.find(x => x.id === h[0]); if (!m) return { id: null, ano: null };
  const a = parseInt(h[1], 10);
  return { id: m.id, ano: isNaN(a) ? jl('home:ano:' + m.id, null) : a };
}

// ---------- montagem ----------
function itemLink(chave, href, icone, rotulo, extra) {
  const atual = chave && chave === rel ? ' aria-current="page"' : '';
  return '<a class="sb-item" href="' + esc(href) + '" title="' + esc(rotulo) + '"' + atual + (extra || '') + '><span class="sb-ic">' + svg(icone) + '</span><span class="sb-lbl">' + esc(rotulo) + '</span><span class="sb-extra"></span></a>';
}
function subj(m, i) {
  const c = contaMat(m), ac = ACENTOS[i % ACENTOS.length];
  const anos = m.anos.map((a, k) => {
    const x = contaAno(a);
    return '<a class="sb-year' + (x.total ? '' : ' soon') + '" data-ano="' + k + '" href="' + url('index.html') + '#' + m.id + '/' + k + '"><span>' + esc(a.ano) + '</span><small>' + (x.total ? x.vistos + '/' + x.total : 'em breve') + '</small></a>';
  }).join('');
  return '<div class="sb-subj" data-id="' + m.id + '" style="--acc:var(--' + ac + ');--acc-soft:var(--' + ac + '-soft)">' +
    '<a class="sb-item sb-s" href="' + url('index.html') + '#' + m.id + '" title="' + esc(m.nome) + '"><span class="sb-ic">' + svg(m.icon) + '</span><span class="sb-lbl">' + esc(m.nome) + '</span><span class="sb-pc"></span>' +
    '<span class="sb-chev">' + svg(I.chev) + '</span></a><div class="sb-years">' + anos + '</div></div>';
}
function soonItem(m, i) {
  const ac = ACENTOS[i % ACENTOS.length];
  return '<div class="sb-subj" data-id="' + m.id + '" style="--acc:var(--' + ac + ');--acc-soft:var(--' + ac + '-soft)"><a class="sb-item sb-s" href="' + url('index.html') + '#' + m.id + '" title="' + esc(m.nome) + ' (em breve)"><span class="sb-ic">' + svg(m.icon) + '</span><span class="sb-lbl">' + esc(m.nome) + '</span></a></div>';
}

function montar() {
  const ativas = [], breve = [];
  NAV.forEach((m, i) => { (m.emBreve ? breve : ativas).push([m, i]); });

  let nav = '';
  nav += itemLink('simulado.html', url('simulado.html'), 'sim', 'Simulados');
  nav += itemLink('revisao.html', url('revisao.html'), 'rev', 'Revisão');
  nav += '<a class="sb-item" href="' + url('index.html') + '#conquistas" data-conq title="Conquistas"><span class="sb-ic">' + svg('conq') + '</span><span class="sb-lbl">Conquistas</span><span class="sb-extra"></span></a>';
  if (ehAluno) nav += itemLink('aluno/dashboard.html', url('aluno/dashboard.html'), 'turmas', 'Minhas turmas');
  nav += '<div class="sb-sec">Matérias</div>' + ativas.map(([m, i]) => subj(m, i)).join('');
  if (breve.length) nav += '<details class="sb-soon"><summary><span>Em breve</span><span class="sb-chev">' + svg(I.chev) + '</span></summary>' + breve.map(([m, i]) => soonItem(m, i)).join('') + '</details>';
  if (ehProf) {
    nav += '<div class="sb-sec">Professor</div>' +
      itemLink('professor/dashboard.html', url('professor/dashboard.html'), 'painel', 'Painel e turmas') +
      itemLink('professor/prova.html', url('professor/prova.html'), 'prova', 'Proveiro · provas') +
      itemLink('professor/banco.html', url('professor/banco.html'), 'banco', 'Banco de questões');
  }

  let foot = '';
  if (user) {
    const ini = (user.nome || '?').trim().charAt(0).toUpperCase();
    const dest = ehProf ? 'professor/dashboard.html' : 'aluno/dashboard.html';
    foot += '<div class="sb-user"><a class="sb-who" href="' + url(dest) + '" title="Meu painel"><span class="sb-av">' + esc(ini) + '</span><span class="sb-name"><b>' + esc(user.nome || 'Minha conta') + '</b><small>' + (ehProf ? 'Professor' : 'Aluno') + '</small></span></a>' +
      '<button type="button" class="sb-out" data-sair aria-label="Sair" title="Sair">' + svg('sair') + '</button></div>';
  } else {
    foot += '<a class="sb-cta" href="' + url('login.html') + '" title="Entrar">' + svg('entrar') + '<span class="sb-lbl">Entrar · aluno / professor</span></a>';
  }
  foot += '<button type="button" class="sb-item" data-tema title="Alternar tema"><span class="sb-ic"></span><span class="sb-lbl">Tema</span></button>';
  foot += '<button type="button" class="sb-item" data-instalar hidden title="Instalar como aplicativo"><span class="sb-ic">' + svg('down') + '</span><span class="sb-lbl">Instalar app</span></button>';
  if (!ehProf) foot += itemLink('para-professores.html', url('para-professores.html'), 'prof', 'Para professores');
  foot += '<div class="sb-mini"><a href="' + url('termos.html') + '">Termos e privacidade</a></div>';

  const aside = document.createElement('aside');
  aside.className = 'sb'; aside.id = 'sb'; aside.setAttribute('aria-label', 'Navegação principal');
  aside.innerHTML =
    '<div class="sb-top"><a class="sb-brand" href="' + url('index.html') + '" aria-label="Início"><span class="dot"></span><span class="sb-lbl">Prof. Eduardo</span></a>' +
    '<button type="button" class="sb-collapse" aria-label="Recolher menu" title="Recolher menu ( [ )">' + svg('recolher') + '</button></div>' +
    '<label class="sb-search" aria-label="Buscar aulas, guias e atividades">' + svg('search') + '<input id="sb-q" type="search" placeholder="Buscar em tudo…" autocomplete="off"><kbd aria-hidden="true">/</kbd></label>' +
    '<button type="button" class="sb-search-ic" aria-label="Buscar" title="Buscar">' + svg('search') + '</button>' +
    '<nav class="sb-nav">' + nav + '</nav><div class="sb-foot">' + foot + '</div>';

  const mob = document.createElement('div');
  mob.className = 'sb-mob';
  mob.innerHTML = '<button type="button" class="sb-menu" aria-label="Abrir menu" aria-controls="sb" aria-expanded="false">' + svg('menu') + '</button><a class="sb-brand" href="' + url('index.html') + '"><span class="dot"></span><span class="sb-lbl">Prof. Eduardo</span></a>';
  const scrim = document.createElement('div'); scrim.className = 'sb-scrim';

  document.body.prepend(scrim); document.body.prepend(aside); document.body.prepend(mob);
  return { aside, mob, scrim };
}

// ---------- comportamento ----------
function iniciar() {
  if (!NA_HOME) root.classList.add('sb-on'); // na home quem liga é a própria página (só com matéria aberta)
  const { aside, mob, scrim } = montar();
  const $ = (s, r) => (r || aside).querySelector(s);
  const todos = (s, r) => [].slice.call((r || aside).querySelectorAll(s));

  // recolher / expandir (desktop)
  const colapsa = on => { root.classList.toggle('sb-collapsed', on); sl('sb:colapsada', on ? '1' : '0'); };
  if (localStorage.getItem('sb:colapsada') === '1') root.classList.add('sb-collapsed');
  $('.sb-collapse').addEventListener('click', () => colapsa(!root.classList.contains('sb-collapsed')));

  // gaveta (celular)
  const abre = on => { root.classList.toggle('sb-open', on); mob.querySelector('.sb-menu').setAttribute('aria-expanded', on); };
  mob.querySelector('.sb-menu').addEventListener('click', () => abre(!root.classList.contains('sb-open')));
  scrim.addEventListener('click', () => abre(false));
  aside.addEventListener('click', e => { const a = e.target.closest('a[href]'); if (a && !a.matches('.sb-s')) abre(false); });
  const celular = () => matchMedia('(max-width:900px)').matches;

  // matéria / ano ativos e progresso
  let abertaManual = null;
  function atualiza() {
    const h = hashAtual(), pref = h.id || localStorage.getItem('materia-pref');
    todos('.sb-subj').forEach(el => {
      const m = NAV.find(x => x.id === el.dataset.id); if (!m) return;
      const ehAtual = NA_HOME && h.id === m.id;
      const c = contaMat(m);
      const pc = $('.sb-pc', el); if (pc) pc.textContent = c.vistos ? Math.round(c.vistos / c.total * 100) + '%' : '';
      const s = $('.sb-s', el); s.classList.toggle('on', ehAtual); if (ehAtual) s.setAttribute('aria-current', 'true'); else s.removeAttribute('aria-current');
      const abrir = abertaManual ? abertaManual === m.id : (pref === m.id);
      el.classList.toggle('open', !!abrir && !!$('.sb-years', el));
      todos('.sb-year', el).forEach(y => {
        const k = +y.dataset.ano, a = m.anos[k], x = contaAno(a);
        y.classList.toggle('on', ehAtual && h.ano === k);
        const sm = $('small', y); sm.textContent = x.total ? x.vistos + '/' + x.total : 'em breve';
        y.classList.toggle('soon', !x.total);
        if (ehAtual && h.ano === k) y.setAttribute('aria-current', 'true'); else y.removeAttribute('aria-current');
      });
      if (ehAtual && el.parentElement.matches('details')) el.parentElement.open = true;
    });
    // etiquetas: revisão pendente e sequência de dias
    const rev = revisaoPendente(), r = $('[href$="revisao.html"] .sb-extra');
    if (r) r.innerHTML = rev ? '<span class="sb-badge" title="Itens para revisar hoje">' + rev + '</span>' : '';
    const seq = sequencia(), q = $('[data-conq] .sb-extra');
    if (q) q.innerHTML = seq > 1 ? '<span class="sb-badge soft" title="Dias seguidos estudando">🔥 ' + seq + '</span>' : '';
  }
  // clique na matéria: abre/fecha os anos (e vai para ela, se ainda não está aberta)
  todos('.sb-s').forEach(a => a.addEventListener('click', e => {
    const el = a.closest('.sb-subj'), id = el.dataset.id, tem = !!$('.sb-years', el);
    if (root.classList.contains('sb-collapsed') && !celular()) { colapsa(false); }
    if (tem && el.classList.contains('open') && NA_HOME && hashAtual().id === id) { e.preventDefault(); abertaManual = '__nenhuma__'; atualiza(); return; }
    abertaManual = id;
    sl('materia-pref', id);
    if (NA_HOME) { e.preventDefault(); const k = jl('home:ano:' + id, null); location.hash = id + (k != null ? '/' + k : ''); atualiza(); if (celular()) abre(false); }
  }));
  todos('.sb-year').forEach(a => a.addEventListener('click', () => { if (NA_HOME && celular()) abre(false); }));
  window.addEventListener('hashchange', atualiza);
  window.addEventListener('sb:sync', atualiza);
  window.addEventListener('pageshow', atualiza);
  window.addEventListener('storage', atualiza);

  // conquistas: na home abre o painel; nas outras páginas leva para a home
  const conq = $('[data-conq]');
  conq.addEventListener('click', e => { if (NA_HOME) { e.preventDefault(); window.dispatchEvent(new Event('sb:conquistas')); abre(false); } });

  // busca: na home filtra na hora (a home escuta #sb-q); nas outras páginas vai para a home com ?q=
  const q = $('#sb-q');
  q.addEventListener('keydown', e => {
    if (e.key === 'Enter') { if (!NA_HOME && q.value.trim()) location.href = url('index.html') + '?q=' + encodeURIComponent(q.value.trim()); else if (celular()) abre(false); }
    if (e.key === 'Escape') { if (q.value) { q.value = ''; q.dispatchEvent(new Event('input', { bubbles: true })); } q.blur(); }
  });
  $('.sb-search-ic').addEventListener('click', () => { colapsa(false); setTimeout(() => q.focus(), 60); });
  document.addEventListener('keydown', e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = (document.activeElement || {}).tagName || '';
    if (/INPUT|TEXTAREA|SELECT/.test(t) || (document.activeElement && document.activeElement.isContentEditable)) return;
    if (!root.classList.contains('sb-on')) return;
    if (e.key === '/') { e.preventDefault(); if (celular()) abre(true); else if (root.classList.contains('sb-collapsed')) colapsa(false); setTimeout(() => q.focus(), 60); }
    else if (e.key === '[' && !celular()) { colapsa(!root.classList.contains('sb-collapsed')); }
    else if (e.key === 'Escape' && root.classList.contains('sb-open')) abre(false);
  });

  // tema: usa o botão já existente da página (cada página guarda a preferência na sua chave)
  const tema = $('[data-tema]'), orig = document.getElementById('themeToggle');
  function pintaTema() {
    const escuro = (root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) === 'dark';
    $('.sb-ic', tema).innerHTML = svg(escuro ? 'sun' : 'moon');
    $('.sb-lbl', tema).textContent = escuro ? 'Modo claro' : 'Modo escuro';
  }
  if (orig) {
    tema.addEventListener('click', () => { orig.click(); setTimeout(pintaTema, 0); });
    new MutationObserver(pintaTema).observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    pintaTema();
  } else tema.hidden = true;

  // instalar como app
  let evInst = null; const bInst = $('[data-instalar]');
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); evInst = e; bInst.hidden = false; });
  bInst.addEventListener('click', () => { if (evInst) { evInst.prompt(); evInst = null; bInst.hidden = true; } });

  // sair
  const bs = $('[data-sair]');
  if (bs) bs.addEventListener('click', async () => {
    try { const m = await import('./auth.js'); await m.sair(); } catch (e) {}
    try { localStorage.removeItem('sb:user'); } catch (e) {}
    location.href = url('index.html');
  });

  atualiza();
  window.__sidebar = { input: q, atualiza };
}

if (document.body) iniciar(); else document.addEventListener('DOMContentLoaded', iniciar);
