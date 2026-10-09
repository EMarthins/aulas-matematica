// ============================================================
// Proveiro — lógica da página professor/prova.html
//   banco (filtros) → arrastar → folhas A4 paginadas → imprimir / salvar PDF
// ============================================================
import { mat } from './matematica.js';
import { figuraHtml } from './figuras.js';
import { TIPOS, SOMA_VALORES, normalizar, validar, renderQuestao, renderResolucao, gabaritoDe, textoPlano, uid, fmtPt, rng, embaralhar } from './questoes.js';
import * as IA from './ia-prova.js';

const $ = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const MM = 96 / 25.4;
const LS = {
  ler(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (_) { return d; } },
  gravar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (_) { return false; } }
};
let toastT;
function toast(msg, ms = 2800) {
  let t = document.querySelector('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, ms);
}
const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const ordemSerie = ['9º Ano', '1º Ano', '2º Ano', '3º Ano', 'ENEM', 'ENA · PROFMAT'];
const cmpSerie = (a, b) => { const i = ordemSerie.indexOf(a), j = ordemSerie.indexOf(b); return (i < 0 ? 99 : i) - (j < 0 ? 99 : j) || a.localeCompare(b, 'pt'); };

/* =====================================================================
   Estado da prova
   ===================================================================== */
const PADRAO_CAB = {
  modelo: 'caixas', titulo: '', subtitulo: '', disciplina: 'Matemática', escola: '', professor: '', turma: '', trimestre: '', data: '', logo: '', instrucoes: '', totalNota: true,
  mostrar: { nome: true, num: true, turma: true, data: true, escola: true, professor: true, nota: true, trimestre: true }
};
function novoEstado() {
  const perfil = LS.ler('prova:perfil', {});
  return {
    id: uid(), nome: 'Avaliação',
    cab: Object.assign({}, PADRAO_CAB, perfil, { mostrar: Object.assign({}, PADRAO_CAB.mostrar, perfil.mostrar || {}), data: '' }),
    layout: { colunas: 2, fonte: 11, margem: 12, gapq: 5, gap: 8, num: 'ponto', alt: 'auto', sep: true, rodape: true, pontos: true },
    itens: [], gab: { anexar: false, res: true }, versao: 'A', embOrdem: false, embAlt: false, snap: {}
  };
}
let E = novoEstado();
let PROF_NOME = '';

/* =====================================================================
   Banco
   ===================================================================== */
let BANCO = [], POR_ID = {};
const getMinhas = () => LS.ler('prova:minhas', []);
function indexar(q) {
  q = normalizar(q);
  q._busca = norm(textoPlano(q) + ' ' + q.unidade + ' ' + q.topicos.join(' ') + ' ' + q.serie + ' ' + q.materia + ' ' + q.fonte + ' ' + TIPOS[q.tipo].nome);
  return q;
}
function montarBanco() {
  const minhas = getMinhas().map(q => Object.assign(indexar(q), { origem: q.origem === 'ia' ? 'ia' : 'minha' }));
  BANCO = minhas.concat(AUTORAIS, LEGADO);
  POR_ID = {}; BANCO.forEach(q => { POR_ID[q.id] = q; });
}
let AUTORAIS = [], LEGADO = [];
async function carregar() {
  const [a, b] = await Promise.all([
    // imagens do banco: "img:arquivo.png" → app/img-questoes/ (caminho relativo a professor/)
    fetch('../app/banco-provas.json').then(r => r.text()).then(t => JSON.parse(t.replace(/(["'])img:(enem[\w.-]+)/g, '$1../app/img-questoes/$2'))).catch(() => ({ questoes: [] })),
    fetch('../app/banco.json').then(r => r.json()).catch(() => ({ questoes: [] }))
  ]);
  AUTORAIS = (a.questoes || []).map(q => Object.assign(indexar(q), { origem: 'banco' }));
  LEGADO = (b.questoes || []).map(q => Object.assign(indexar(q), { origem: 'aulas' }));
  montarBanco();
}
const getQ = id => POR_ID[id] || (E.snap[id] ? indexar(E.snap[id]) : null);

/* ---------- listas que compactam e mudam de lugar ---------- */
/** Seções (.sec) com alça ⠿ para arrastar, cabeçalho que abre/fecha e estado lembrado em localStorage. */
function secoesMoveis(box, chave, padraoFechadas = []) {
  const k = 'prova:ui:' + chave;
  const ui = LS.ler(k, null) || { ordem: [], fechadas: null };
  if (!ui.fechadas) ui.fechadas = Object.fromEntries(padraoFechadas.map(id => [id, 1]));
  const secs = () => [...box.querySelectorAll(':scope > .sec')];
  const salvar = () => { ui.ordem = secs().map(s => s.dataset.id); LS.gravar(k, ui); };
  const mapa = Object.fromEntries(secs().map(s => [s.dataset.id, s]));
  ui.ordem.filter(id => mapa[id]).concat(Object.keys(mapa).filter(id => !ui.ordem.includes(id))).forEach(id => box.appendChild(mapa[id]));
  secs().forEach(s => s.classList.toggle('fechada', !!ui.fechadas[s.dataset.id]));
  const marcar = (s, fechada) => { s.classList.toggle('fechada', fechada); ui.fechadas[s.dataset.id] = fechada ? 1 : 0; salvar(); };
  box.addEventListener('click', e => {
    const h = e.target.closest('.sec-h'); if (!h || e.target.closest('.grip')) return;
    const s = h.parentElement; marcar(s, !s.classList.contains('fechada'));
  });
  let origem = null;
  box.addEventListener('mousedown', e => { secs().forEach(s => { s.draggable = false; }); const g = e.target.closest('.grip'); if (g) g.closest('.sec').draggable = true; });
  box.addEventListener('dragstart', e => {
    const s = e.target.closest && e.target.closest('.sec'); if (!s || !s.draggable || s.parentElement !== box) return;
    origem = s; s.classList.add('arrastando'); e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', 'sec:' + s.dataset.id);
  });
  const limpar = () => secs().forEach(s => s.classList.remove('drop-antes', 'drop-depois', 'arrastando'));
  box.addEventListener('dragover', e => {
    if (!origem) return; e.preventDefault();
    const alvo = e.target.closest('.sec'); secs().forEach(s => s.classList.remove('drop-antes', 'drop-depois'));
    if (alvo && alvo !== origem && alvo.parentElement === box) { const r = alvo.getBoundingClientRect(); alvo.classList.add(e.clientY > r.top + r.height / 2 ? 'drop-depois' : 'drop-antes'); }
  });
  box.addEventListener('drop', e => {
    if (!origem) return; e.preventDefault();
    const alvo = e.target.closest('.sec');
    if (alvo && alvo !== origem && alvo.parentElement === box) { const r = alvo.getBoundingClientRect(); if (e.clientY > r.top + r.height / 2) alvo.after(origem); else alvo.before(origem); salvar(); }
    origem = null; limpar();
  });
  box.addEventListener('dragend', () => { origem = null; limpar(); secs().forEach(s => { s.draggable = false; }); });
  return {
    abrir(id) { const s = mapa[id]; if (s) { marcar(s, false); s.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); } },
    fecharTodas() { secs().forEach(s => { s.classList.add('fechada'); ui.fechadas[s.dataset.id] = 1; }); salvar(); }
  };
}

/* ---------- filtros ---------- */
const F = { q: '', serie: '', materia: '', unidade: '', tipo: '', dif: '', fonte: '' };
const CAMPOS = { serie: q => q.serie, materia: q => q.materia, unidade: q => q.unidade, tipo: q => q.tipo, dif: q => String(q.dificuldade), fonte: q => q.fonte };
const TITULOS = { serie: 'Turma / série', materia: 'Matéria', unidade: 'Conteúdo', tipo: 'Tipo de questão', dif: 'Dificuldade', fonte: 'Origem' };
const rotulo = { tipo: v => TIPOS[v] ? TIPOS[v].nome : v, dif: v => ({ 1: 'Fácil', 2: 'Média', 3: 'Difícil' }[v] || v) };
const rot = (k, v) => rotulo[k] ? rotulo[k](v) : v;
const passa = (q, ignorar) => {
  if (F.q) { const ts = norm(F.q).split(/\s+/).filter(Boolean); if (!ts.every(t => q._busca.includes(t))) return false; }
  for (const k in CAMPOS) if (k !== ignorar && F[k] && CAMPOS[k](q) !== F[k]) return false;
  return true;
};
let filtrosUI = null;
function montarFiltros() {
  const box = $('secFiltros');
  box.innerHTML = Object.keys(CAMPOS).map(k => `<section class="sec" data-id="${k}"><header class="sec-h"><span class="grip" title="Arraste para mudar a ordem">⠿</span><b>${TITULOS[k]}</b><span class="sec-s"></span><button class="chev" type="button" aria-label="Abrir ou fechar"></button></header><div class="sec-b"><div class="f-opts"></div></div></section>`).join('');
  filtrosUI = secoesMoveis(box, 'filtros', ['materia', 'tipo', 'dif', 'fonte']);
}
function atualizarListas() {
  Object.keys(CAMPOS).forEach(k => {
    const sec = document.querySelector(`#secFiltros .sec[data-id="${k}"]`); if (!sec) return;
    const cont = {}; BANCO.forEach(q => { if (passa(q, k)) { const v = CAMPOS[k](q); if (v) cont[v] = (cont[v] || 0) + 1; } });
    let chaves = Object.keys(cont);
    chaves = k === 'serie' ? chaves.sort(cmpSerie) : k === 'dif' ? chaves.sort() : chaves.sort((a, b) => a.localeCompare(b, 'pt'));
    if (F[k] && !cont[F[k]]) chaves.unshift(F[k]);
    sec.querySelector('.f-opts').innerHTML = chaves.map(v => `<button type="button" class="opt${F[k] === v ? ' on' : ''}${cont[v] ? '' : ' zero'}" data-v="${esc(v)}"><span>${esc(rot(k, v))}</span><small>${cont[v] || 0}</small></button>`).join('') || '<div class="vazio" style="padding:8px">—</div>';
    const s = sec.querySelector('.sec-s'); s.textContent = F[k] ? rot(k, F[k]) : chaves.length + (chaves.length === 1 ? ' opção' : ' opções'); s.classList.toggle('ativo', !!F[k]);
  });
  const uniq = f => [...new Set(BANCO.map(f).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'pt'));
  $('dl-series').innerHTML = uniq(q => q.serie).sort(cmpSerie).map(v => `<option value="${esc(v)}">`).join('');
  $('dl-materias').innerHTML = uniq(q => q.materia).map(v => `<option value="${esc(v)}">`).join('');
  $('dl-unidades').innerHTML = uniq(q => q.unidade).map(v => `<option value="${esc(v)}">`).join('');
}

let mostrados = 40, filtradas = [];
function resumoFiltros() {
  const p = []; if (F.q) p.push('“' + F.q + '”');
  Object.keys(CAMPOS).forEach(k => { if (F[k]) p.push(rot(k, F[k])); });
  return p.join(' · ');
}
function renderBanco(reset) {
  if (reset) mostrados = 40;
  atualizarListas();
  filtradas = BANCO.filter(q => passa(q));
  $('cont').textContent = filtradas.length + (filtradas.length === 1 ? ' questão' : ' questões');
  const ativos = Object.keys(CAMPOS).filter(k => F[k]).length + (F.q ? 1 : 0);
  $('fResumo').textContent = resumoFiltros() || 'sem filtros'; $('fBadge').hidden = !ativos; $('fBadge').textContent = ativos;
  const box = $('lista');
  if (!filtradas.length) { box.innerHTML = '<div class="vazio">Nenhuma questão com esses filtros.<br>Tente outra palavra-chave ou <button class="lnk" data-a="limpar" type="button">limpe os filtros</button>.</div>'; return; }
  const ids = new Set(E.itens.map(i => i.id));
  box.innerHTML = filtradas.slice(0, mostrados).map(q => cartao(q, ids.has(q.id))).join('') +
    (filtradas.length > mostrados ? `<button class="tb" id="maisQ" type="button" style="width:100%;justify-content:center">Mostrar mais (${filtradas.length - mostrados})</button>` : '');
}
function cartao(q, naProva) {
  const figs = [].concat(q.figura || [], q.figuras || []).filter(Boolean);
  const img = figs.find(f => f.tipo === 'img' && f.src);
  const nomeOrig = q.origem === 'minha' ? 'Minha' : q.origem === 'ia' ? 'IA' : '';
  return `<div class="qc${naProva ? ' na-prova' : ''}" draggable="true" data-id="${esc(q.id)}">
    <div class="top">${naProva ? '<span class="tag ok">✓ na prova</span>' : ''}<span class="tag tp">${esc(TIPOS[q.tipo].curto)}</span><span class="tag">${esc(q.serie)}</span>${figs.length ? '<span class="tag fig">com figura</span>' : ''}${nomeOrig ? `<span class="tag">${nomeOrig}</span>` : ''}<span class="dif" title="Dificuldade">${[1, 2, 3].map(n => `<i class="${n <= q.dificuldade ? 'on' : ''}"></i>`).join('')}</span></div>
    <div class="un">${esc(q.materia)} · ${esc(q.unidade)}${q.fonte ? ' · ' + esc(q.fonte) : ''}</div>
    <div class="corpo"><div class="tx">${esc(textoPlano(q, 520))}</div>${img ? `<div class="th" style="background-image:url('${esc(img.src)}')"></div>` : ''}</div>
    <div class="ac"><button class="add" data-a="add" type="button">+ Adicionar</button><button data-a="ver" type="button">Ver completa ▾</button><span class="gab-m">Gabarito ${esc(gabaritoDe(q).curto.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').slice(0, 18))}</span></div>
    <div class="full"></div>
  </div>`;
}
function marcarNaProva() {
  const ids = new Set(E.itens.map(i => i.id));
  document.querySelectorAll('#lista .qc').forEach(c => {
    const on = ids.has(c.dataset.id); c.classList.toggle('na-prova', on);
    const o = c.querySelector('.tag.ok'); if (on && !o) c.querySelector('.top').insertAdjacentHTML('afterbegin', '<span class="tag ok">✓ na prova</span>'); else if (!on && o) o.remove();
  });
}

/* =====================================================================
   Manipulação dos itens da prova
   ===================================================================== */
function addItem(id, pos) {
  const q = getQ(id); if (!q) return;
  if (E.itens.some(i => i.id === id)) { toast('Essa questão já está na prova.'); return; }
  const it = { id, pontos: q.pontos || 1 };
  if (pos == null || pos > E.itens.length) E.itens.push(it); else E.itens.splice(Math.max(0, pos), 0, it);
  E.snap[id] = q; mudou();
}
function moverItem(de, para) { // `para` = posição de inserção na lista ANTES da remoção
  if (de < 0 || de >= E.itens.length) return;
  const [it] = E.itens.splice(de, 1); if (de < para) para--;
  E.itens.splice(Math.max(0, Math.min(E.itens.length, para)), 0, it); mudou();
}
function removerItem(i) { E.itens.splice(i, 1); mudou(); }
const somaPontos = () => Math.round(E.itens.reduce((t, i) => t + (+i.pontos || 0), 0) * 100) / 100;

function ordenados() {
  let arr = E.itens.map((it, i) => ({ it, i, q: getQ(it.id) })).filter(x => x.q);
  if (E.versao !== 'A') {
    const r = rng('v' + E.versao + E.id);
    if (E.embOrdem) arr = embaralhar(arr, r);
    arr.forEach(x => { if (E.embAlt && x.q.tipo === 'mc') x.ordem = embaralhar(x.q.alternativas.map((_, k) => k), r); });
  }
  arr.forEach((x, n) => { x.num = n + 1; });
  return arr;
}

/* =====================================================================
   Cabeçalho
   ===================================================================== */
const CEL = {
  nome: ['Nome', 5], num: ['Nº', 1], turma: ['Turma', 1.3], data: ['Data', 2.6],
  escola: ['Escola', 4], professor: ['Professor(a)', 4], nota: ['Nota', 1.6], trimestre: ['Trimestre', 1.7]
};
function valorCel(k, c) {
  if (k === 'turma') return c.turma; if (k === 'escola') return c.escola; if (k === 'professor') return c.professor; if (k === 'trimestre') return c.trimestre; return '';
}
function dataPartes(c) { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(c.data || ''); return m ? [m[3], m[2], m[1]] : ['', '', '']; }
function celula(k, c, tipo) {
  const [lb, w] = CEL[k], v = valorCel(k, c);
  if (k === 'data') {
    const d = dataPartes(c);
    if (tipo === 'caixas') return `<div class="cel" data-campo="data" style="--w:${w}"><div class="lb">${lb}:</div><div class="dt"><span class="cx">${d[0]}</span><b>/</b><span class="cx">${d[1]}</span><b>/</b><span class="cx">${d[2]}</span></div></div>`;
    return `<div class="cel" data-campo="data" style="--w:1.4;--mw:44mm"><span class="lb">${lb}:</span><span class="dt"><span class="ln">${d[0]}</span>/<span class="ln">${d[1]}</span>/<span class="ln" style="min-width:12mm">${d[2]}</span></span></div>`;
  }
  const nota = k === 'nota' && c.totalNota ? `/ ${fmtPt(somaPontos() || 10)}` : '';
  if (tipo === 'caixas') return `<div class="cel" data-campo="${k}" style="--w:${w}"><div class="lb">${lb}:</div><div class="cx${k === 'nota' ? ' nota' : ''}">${k === 'nota' ? nota : esc(v)}</div></div>`;
  return `<div class="cel" data-campo="${k}" style="--w:${k === 'nome' ? 6 : k === 'num' ? .6 : w / 2};--mw:${k === 'nome' ? '70mm' : k === 'num' || k === 'nota' ? '20mm' : '34mm'}"><span class="lb">${lb}:</span><span class="ln">${k === 'nota' ? `<span style="color:#888;font-weight:600">${nota}</span>` : esc(v)}</span></div>`;
}
function cabHtml(titulo) {
  const c = E.cab, m = c.mostrar; if (c.modelo === 'nenhum') return '';
  const ver = E.versao !== 'A' ? `<div class="ver" title="Versão da prova">${E.versao}</div>` : '';
  const tit = (c.titulo || ('Avaliação de ' + (c.disciplina || 'Matemática'))).trim();
  const sub = c.subtitulo ? `<div class="st">${esc(c.subtitulo)}</div>` : '';
  const topo = `<div class="tit" data-campo="titulo">${c.logo ? `<img src="${esc(c.logo)}" alt="">` : ''}<div class="tt"><h3>${esc(tit)}</h3>${sub}</div>${ver}</div>`;
  const instr = c.instrucoes ? `<div class="instr" data-campo="instrucoes">${esc(c.instrucoes).replace(/\n/g, '<br>')}</div>` : '';
  const vis = ks => ks.filter(k => m[k]);
  let corpo;
  if (c.modelo === 'caixas') {
    const l1 = vis(['nome', 'num', 'turma', 'data']), l2 = vis(['escola', 'professor', 'nota', 'trimestre']);
    corpo = `<div class="cab-cx">${[l1, l2].filter(l => l.length).map(l => `<div class="lin">${l.map(k => celula(k, c, 'caixas')).join('')}</div>`).join('')}</div>`;
  } else if (c.modelo === 'linhas') {
    corpo = `<div class="cab-ln">${vis(['nome', 'num', 'turma', 'data', 'escola', 'professor', 'trimestre', 'nota']).map(k => celula(k, c, 'linhas')).join('')}</div>`;
  } else {
    corpo = `<div class="cab-cp">${vis(['nome', 'turma', 'data', 'nota']).map(k => celula(k, c, 'linhas').replace('class="lb"', 'class="lb"').replace('class="ln"', 'class="ln"')).join('')}</div>`;
  }
  return `<div class="cab">${topo}${corpo}${instr}</div>`;
}
function focarCampo(k) {
  abrirAba('cab');
  const mapa = { titulo: 'c-titulo', subtitulo: 'c-subtitulo', escola: 'c-escola', professor: 'c-professor', turma: 'c-turma', data: 'c-data', trimestre: 'c-trimestre', instrucoes: 'c-instr' };
  const el = $(mapa[k]);
  if (el) { el.scrollIntoView({ block: 'center' }); el.focus(); return; }
  const chk = document.querySelector(`#vis input[data-k="${k}"]`);
  if (chk) { chk.scrollIntoView({ block: 'center' }); chk.parentElement.animate([{ background: 'var(--primary-soft)' }, { background: 'transparent' }], { duration: 1200 }); toast('Esse campo o aluno preenche à mão. Aqui você escolhe se ele aparece.'); }
}

/* =====================================================================
   Paginação em folhas A4
   ===================================================================== */
let tokenLayout = 0, totalPaginas = 1, avisos = [];
function distribuir(alturas, ncols, hPrim, hDemais) {
  const pages = []; let pg, col = 0, usado = 0, avail;
  const nova = () => { pg = { cols: Array.from({ length: ncols }, () => []) }; pages.push(pg); col = 0; usado = 0; avail = pages.length === 1 ? hPrim : hDemais; };
  nova();
  alturas.forEach((h, i) => {
    if (usado > 0 && usado + h > avail + .5) { col++; if (col >= ncols) nova(); else usado = 0; }
    if (usado === 0 && h > avail + .5) avisos.push(i);
    pg.cols[col].push(i); usado += h;
  });
  return pages;
}
async function medir(htmls, larguraMm) {
  const med = $('medidor'), L = E.layout;
  med.style.cssText = `width:${larguraMm}mm;--fs:${L.fonte}pt;--gapq:${L.gapq}mm`;
  med.innerHTML = htmls.join('');
  const imgs = [...med.querySelectorAll('img')];
  await Promise.all(imgs.map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
  return [...med.children].map(el => el.getBoundingClientRect().height + (parseFloat(getComputedStyle(el).marginBottom) || 0));
}
function qwHtml(x) {
  const L = E.layout;
  return `<div class="qw" data-i="${x.i}" draggable="true"><div class="q-ferr"><button type="button" data-a="up" title="Subir">↑</button><button type="button" data-a="down" title="Descer">↓</button><button type="button" data-a="ver" title="Ver / gabarito">ⓘ</button><button type="button" data-a="rem" class="x" title="Remover da prova">✕</button></div>${renderQuestao(x.q, { num: x.num, pontos: L.pontos, valor: x.it.pontos, alt: L.alt, ordem: x.ordem, estilo: L.num })}</div>`;
}
function blocosGabarito(lista) {
  const blocos = [];
  const linhas = [];
  for (let i = 0; i < lista.length; i += 10) {
    const fatia = lista.slice(i, i + 10);
    linhas.push(`<tr>${fatia.map(x => `<th>${x.num}</th>`).join('')}</tr><tr>${fatia.map(x => `<td>${gabaritoDe(x.q, x.ordem).curto}</td>`).join('')}</tr>`);
  }
  blocos.push(`<div class="gab qw"><h4>Gabarito — ${esc(E.nome)}${E.versao !== 'A' ? ' · Versão ' + E.versao : ''}</h4><table class="gab-tab">${linhas.join('')}</table></div>`);
  if (E.gab.res) lista.forEach(x => blocos.push(`<div class="gab qw">${renderResolucao(x.q, { num: x.num, ordem: x.ordem })}</div>`));
  return blocos;
}
async function paginar() {
  const tok = ++tokenLayout;
  try { await document.fonts.ready; } catch (_) { /* segue */ }
  if (tok !== tokenLayout) return;
  const L = E.layout, m = L.margem, N = L.colunas, gap = L.gap;
  const larg = 210 - 2 * m, colW = (larg - (N - 1) * gap) / N;
  const H = (297 - 2 * m) * MM;
  const lista = ordenados();
  avisos = [];

  // 1) prova
  const qhtml = lista.map(qwHtml);
  const cab = cabHtml();
  const hCabs = cab ? await medir([cab], larg) : [0];
  if (tok !== tokenLayout) return;
  const alt = qhtml.length ? await medir(qhtml, colW) : [];
  if (tok !== tokenLayout) return;
  const pages = distribuir(alt, N, H - hCabs[0], H);
  const avisosProva = avisos.slice(); avisos = [];

  // 2) gabarito
  let gPages = [], gHtml = [];
  if (E.gab.anexar && lista.length) {
    gHtml = blocosGabarito(lista);
    const gh = await medir(gHtml, larg);
    if (tok !== tokenLayout) return;
    gPages = distribuir(gh, 1, H, H);
  }
  const total = pages.length + gPages.length; totalPaginas = total;
  const styleFolha = `padding:${m}mm;--m:${m}mm;--fs:${L.fonte}pt;--gap:${gap}mm;--gapq:${L.gapq}mm`;
  const rod = (txt, n) => L.rodape ? `<div class="rodape" style="bottom:${Math.max(3.2, m * .38)}mm"><span>${esc(txt)}</span><span>Página ${n} de ${total}</span></div>` : '';
  let out = '';
  pages.forEach((pg, pi) => {
    const vazio = !lista.length && pi === 0 ? '<div class="vazia">Arraste questões do banco para cá<br><small>ou clique em “+ Adicionar” no cartão da questão</small></div>' : '';
    out += `<section class="folha${L.sep && N > 1 ? ' sep' : ''}" style="${styleFolha}">${pi === 0 ? cab : ''}<div class="cols">${pg.cols.map(c => `<div class="col" style="width:${colW}mm">${c.map(i => qhtml[i]).join('')}</div>`).join('')}</div>${vazio}${rod(E.nome + (E.versao !== 'A' ? ' · Versão ' + E.versao : ''), pi + 1)}</section>`;
  });
  gPages.forEach((pg, pi) => {
    out += `<section class="folha gab-f" style="${styleFolha};--fs:10.5pt"><div class="selo-prof">SOMENTE PROFESSOR</div><div class="cols"><div class="col" style="width:${larg}mm">${pg.cols[0].map(i => gHtml[i]).join('')}</div></div>${rod('Gabarito — ' + E.nome, pages.length + pi + 1)}</section>`;
  });
  $('paginas').innerHTML = out;
  $('infoPag').textContent = `${total} página${total === 1 ? '' : 's'} A4` + (gPages.length ? ` (${gPages.length} de gabarito)` : '');
  $('rPg').textContent = total;
  aplicarZoom();
  if (avisosProva.length) toast(`A questão ${lista[avisosProva[0]].num} é maior que a coluna — use 1 coluna ou reduza a figura.`, 4200);
}

function aplicarZoom() {
  const v = $('zoom').value, st = $('stage');
  let z = v === 'auto' ? Math.min(1, Math.max(.35, (st.clientWidth - 40) / (210 * MM))) : +v;
  $('paginas').style.zoom = z;
}

/* =====================================================================
   Atualização geral
   ===================================================================== */
const salvarRascunho = debounce(() => { LS.gravar('prova:rascunho', paraSalvar()); }, 500);
function paraSalvar() {
  const s = JSON.parse(JSON.stringify(E)); s.snap = {};
  E.itens.forEach(i => { const q = getQ(i.id); if (q) { const c = Object.assign({}, q); delete c._busca; s.snap[i.id] = c; } });
  return s;
}
const repaginar = debounce(paginar, 60);
function mudou(soLayout) {
  if (!soLayout) { renderLista(); marcarNaProva(); }
  atualizarResumo(); repaginar(); salvarRascunho();
}
function atualizarResumo() { const n = E.itens.length, p = fmtPt(somaPontos()); $('rQ').textContent = n; $('rP').textContent = p; $('rtQ').textContent = n; $('rtP').textContent = p; $('provaSub').textContent = n + (n === 1 ? ' questão' : ' questões') + ' · ' + p + ' pts'; }

function renderLista() {
  const ul = $('plista'); $('plVazio').style.display = E.itens.length ? 'none' : 'block';
  ul.innerHTML = E.itens.map((it, i) => {
    const q = getQ(it.id);
    return `<li draggable="true" data-i="${i}"><span class="al" title="Arraste">⠿</span><span class="n">${i + 1}</span><span class="t" title="${esc(q ? textoPlano(q, 200) : '')}">${q ? esc(textoPlano(q, 70)) : '(questão removida)'}</span><input type="text" inputmode="decimal" value="${fmtPt(it.pontos)}" data-a="pts" aria-label="Pontos"><button type="button" data-a="rem" title="Remover">✕</button></li>`;
  }).join('');
}

/* =====================================================================
   Arrastar e soltar
   ===================================================================== */
let arrasto = null;
function alvoNoPapel(x, y) {
  const qws = [...$('paginas').querySelectorAll('.qw[data-i]')];
  if (!qws.length) return { pos: E.itens.length, el: null };
  let melhor = null, d0 = Infinity;
  qws.forEach(el => {
    const r = el.getBoundingClientRect();
    const dx = Math.max(r.left - x, 0, x - r.right), dy = Math.max(r.top - y, 0, y - r.bottom), d = dx * dx + dy * dy * 1.2;
    if (d < d0) { d0 = d; melhor = { el, r }; }
  });
  const depois = y > melhor.r.top + melhor.r.height / 2;
  const base = +melhor.el.dataset.i;
  return { pos: depois ? base + 1 : base, el: melhor.el, depois };
}
function limparMarcas() { document.querySelectorAll('.drop-antes,.drop-depois').forEach(e => e.classList.remove('drop-antes', 'drop-depois')); $('paginas').classList.remove('sobre'); }
function autoScroll(e) {
  const st = $('stage'), r = st.getBoundingClientRect();
  if (e.clientY < r.top + 70) st.scrollTop -= 18; else if (e.clientY > r.bottom - 70) st.scrollTop += 18;
}
function iniciarDnD() {
  const lista = $('lista'), pag = $('paginas'), pl = $('plista');
  document.addEventListener('dragend', () => { arrasto = null; limparMarcas(); document.querySelectorAll('.arrastando').forEach(e => e.classList.remove('arrastando')); });
  lista.addEventListener('dragstart', e => {
    const c = e.target.closest('.qc'); if (!c) return;
    arrasto = { tipo: 'banco', id: c.dataset.id }; e.dataTransfer.effectAllowed = 'copy'; e.dataTransfer.setData('text/plain', 'banco:' + c.dataset.id); c.classList.add('arrastando');
  });
  pag.addEventListener('dragstart', e => {
    const q = e.target.closest && e.target.closest('.qw[data-i]'); if (!q) return;
    arrasto = { tipo: 'mover', i: +q.dataset.i }; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', 'mover:' + q.dataset.i); q.classList.add('arrastando');
  });
  pag.addEventListener('dragover', e => {
    if (!arrasto) return; e.preventDefault(); e.dataTransfer.dropEffect = arrasto.tipo === 'banco' ? 'copy' : 'move'; autoScroll(e);
    limparMarcas(); const a = alvoNoPapel(e.clientX, e.clientY);
    if (a.el) a.el.classList.add(a.depois ? 'drop-depois' : 'drop-antes'); else pag.classList.add('sobre');
  });
  pag.addEventListener('dragleave', e => { if (!pag.contains(e.relatedTarget)) limparMarcas(); });
  pag.addEventListener('drop', e => {
    if (!arrasto) return; e.preventDefault(); const a = alvoNoPapel(e.clientX, e.clientY), ar = arrasto; arrasto = null; limparMarcas();
    if (ar.tipo === 'banco') addItem(ar.id, a.pos);
    else if (E.versao !== 'A' && E.embOrdem) toast('Volte para a versão A para reordenar as questões.');
    else moverItem(ar.i, a.pos);
  });
  // permitir soltar também fora das folhas (área cinza do palco)
  $('stage').addEventListener('dragover', e => { if (arrasto && !pag.contains(e.target)) { e.preventDefault(); } });
  $('stage').addEventListener('drop', e => { if (!arrasto || pag.contains(e.target)) return; e.preventDefault(); const ar = arrasto; arrasto = null; limparMarcas(); if (ar.tipo === 'banco') addItem(ar.id); });

  // lista lateral (reordenar)
  pl.addEventListener('dragstart', e => { const li = e.target.closest('li'); if (!li) return; arrasto = { tipo: 'mover', i: +li.dataset.i }; e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', 'mover:' + li.dataset.i); });
  pl.addEventListener('dragover', e => {
    if (!arrasto || arrasto.tipo !== 'mover') return; e.preventDefault(); limparMarcas();
    const li = e.target.closest('li'); if (!li) return; const r = li.getBoundingClientRect(); li.classList.add(e.clientY > r.top + r.height / 2 ? 'drop-depois' : 'drop-antes');
  });
  pl.addEventListener('drop', e => {
    if (!arrasto || arrasto.tipo !== 'mover') return; e.preventDefault(); const li = e.target.closest('li'); const ar = arrasto; arrasto = null;
    let pos = E.itens.length; if (li) { const r = li.getBoundingClientRect(); pos = +li.dataset.i + (e.clientY > r.top + r.height / 2 ? 1 : 0); }
    limparMarcas(); moverItem(ar.i, pos);
  });
}

/* =====================================================================
   Painéis laterais
   ===================================================================== */
function abrirAba(p) { abrirGaveta(p); }
function seg(id, fn) { $(id).addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; fn(b.dataset.v); }); }
function marcarSeg(id, v) { document.querySelectorAll('#' + id + ' button').forEach(b => b.classList.toggle('on', b.dataset.v === String(v))); }

const CAMPOS_TXT = { 'c-titulo': 'titulo', 'c-subtitulo': 'subtitulo', 'c-escola': 'escola', 'c-professor': 'professor', 'c-turma': 'turma', 'c-data': 'data', 'c-trimestre': 'trimestre', 'c-disciplina': 'disciplina', 'c-instr': 'instrucoes' };
function sincronizarForm() {
  const c = E.cab, L = E.layout;
  Object.entries(CAMPOS_TXT).forEach(([id, k]) => { $(id).value = c[k] || ''; });
  $('c-totalNota').checked = !!c.totalNota;
  marcarModelo(); marcarSeg('segCols', L.colunas); marcarSeg('segCols2', L.colunas);
  $('l-fonte').value = String(L.fonte); $('l-margem').value = String(L.margem); $('l-gapq').value = String(L.gapq); $('l-num').value = L.num; $('l-alt').value = L.alt;
  $('l-sep').checked = L.sep; $('l-rodape').checked = L.rodape; $('l-pontos').checked = L.pontos;
  marcarSeg('segVer', E.versao); $('v-ordem').checked = E.embOrdem; $('v-alt').checked = E.embAlt;
  $('g-anexar').checked = E.gab.anexar; $('g-res').checked = E.gab.res;
  $('nomeProva').value = E.nome;
  $('vis').innerHTML = Object.keys(CEL).map(k => `<label class="pv-chk"><input type="checkbox" data-k="${k}"${c.mostrar[k] ? ' checked' : ''}> ${CEL[k][0].replace(':', '')}</label>`).join('');
}
function marcarModelo() { document.querySelectorAll('#pn-cab [data-m]').forEach(b => b.classList.toggle('on', b.dataset.m === E.cab.modelo)); }
function iniciarPaineis() {
  Object.entries(CAMPOS_TXT).forEach(([id, k]) => $(id).addEventListener('input', e => { E.cab[k] = e.target.value; mudou(true); }));
  $('c-totalNota').addEventListener('change', e => { E.cab.totalNota = e.target.checked; mudou(true); });
  $('pn-cab').addEventListener('click', e => { const b = e.target.closest('[data-m]'); if (b) { E.cab.modelo = b.dataset.m; marcarModelo(); mudou(true); } });
  $('chipsTri').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; E.cab.trimestre = b.textContent.replace(/ (trimestre|bimestre)/, m => ' ' + m.trim()); $('c-trimestre').value = E.cab.trimestre; mudou(true); });
  $('vis').addEventListener('change', e => { const k = e.target.dataset.k; if (k) { E.cab.mostrar[k] = e.target.checked; mudou(true); } });
  $('c-logo').addEventListener('change', async e => { const f = e.target.files[0]; if (!f) return; try { E.cab.logo = await arquivoParaDataUrl(f, 360, 'image/png'); mudou(true); } catch (_) { toast('Não consegui ler essa imagem.'); } });
  $('bLogoX').addEventListener('click', () => { E.cab.logo = ''; $('c-logo').value = ''; mudou(true); });
  $('bPadrao').addEventListener('click', () => { const c = E.cab; LS.gravar('prova:perfil', { escola: c.escola, professor: c.professor, turma: c.turma, trimestre: c.trimestre, disciplina: c.disciplina, logo: c.logo, instrucoes: c.instrucoes, modelo: c.modelo, mostrar: c.mostrar, totalNota: c.totalNota }); toast('Pronto: as próximas provas já começam com esses dados.'); });
  $('bPadraoLimpar').addEventListener('click', () => { try { localStorage.removeItem('prova:perfil'); } catch (_) { /* ok */ } toast('Padrão esquecido.'); });

  // colunas
  const setCols = v => { E.layout.colunas = +v; marcarSeg('segCols', v); marcarSeg('segCols2', v); mudou(true); };
  seg('segCols', setCols); seg('segCols2', setCols);
  const num = (id, k, conv = Number) => $(id).addEventListener('change', e => { E.layout[k] = conv(e.target.value); mudou(true); });
  num('l-fonte', 'fonte'); num('l-margem', 'margem'); num('l-gapq', 'gapq'); num('l-num', 'num', String); num('l-alt', 'alt', String);
  const chk = (id, k) => $(id).addEventListener('change', e => { E.layout[k] = e.target.checked; mudou(true); });
  chk('l-sep', 'sep'); chk('l-rodape', 'rodape'); chk('l-pontos', 'pontos');
  seg('segVer', v => { E.versao = v; marcarSeg('segVer', v); mudou(true); if (v !== 'A' && !E.embOrdem && !E.embAlt) toast('Marque “embaralhar” para a versão ' + v + ' ficar diferente da A.'); });
  $('v-ordem').addEventListener('change', e => { E.embOrdem = e.target.checked; mudou(true); });
  $('v-alt').addEventListener('change', e => { E.embAlt = e.target.checked; mudou(true); });
  $('g-anexar').addEventListener('change', e => { E.gab.anexar = e.target.checked; mudou(true); });
  $('g-res').addEventListener('change', e => { E.gab.res = e.target.checked; mudou(true); });
  $('nomeProva').addEventListener('input', e => { E.nome = e.target.value || 'Avaliação'; mudou(true); });

  // lista da prova
  $('plista').addEventListener('click', e => { const li = e.target.closest('li'); if (!li) return; if (e.target.dataset.a === 'rem') removerItem(+li.dataset.i); });
  $('plista').addEventListener('change', e => { if (e.target.dataset.a !== 'pts') return; const li = e.target.closest('li'); const v = parseFloat(String(e.target.value).replace(',', '.')); E.itens[+li.dataset.i].pontos = v > 0 ? v : 1; e.target.value = fmtPt(E.itens[+li.dataset.i].pontos); mudou(true); });
  $('bDividir').addEventListener('click', () => {
    const n = E.itens.length, alvo = parseFloat($('alvoPts').value) || 10; if (!n) return;
    const cada = Math.round(alvo / n * 100) / 100; E.itens.forEach((it, i) => { it.pontos = i === n - 1 ? Math.round((alvo - cada * (n - 1)) * 100) / 100 : cada; });
    mudou(); toast(`${n} questões · ${fmtPt(somaPontos())} pontos no total.`);
  });
  $('bLimparProva').addEventListener('click', () => { if (E.itens.length && confirm('Remover todas as questões desta prova?')) { E.itens = []; mudou(); } });

  $('zoom').addEventListener('change', aplicarZoom);
  window.addEventListener('resize', debounce(aplicarZoom, 120));
  $('paginas').addEventListener('click', e => {
    const b = e.target.closest('.q-ferr button');
    if (b) {
      const qw = b.closest('.qw'), i = +qw.dataset.i, a = b.dataset.a;
      if (a === 'rem') removerItem(i); else if (a === 'up') moverItem(i, i - 1); else if (a === 'down') moverItem(i, i + 2); else if (a === 'ver') abrirVer(E.itens[i].id);
      return;
    }
    const cel = e.target.closest('.cab [data-campo]'); if (cel) focarCampo(cel.dataset.campo);
  });
}

function arquivoParaDataUrl(file, maxW, tipoPreferido) {
  return new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onerror = () => rej(new Error('leitura')); fr.onload = () => {
      if (/svg/.test(file.type)) return res(fr.result);
      const img = new Image(); img.onerror = () => rej(new Error('imagem'));
      img.onload = () => {
        const k = Math.min(1, maxW / img.width), c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        const x = c.getContext('2d'); x.fillStyle = '#fff'; if (tipoPreferido !== 'image/png') x.fillRect(0, 0, c.width, c.height); x.drawImage(img, 0, 0, c.width, c.height);
        res(c.toDataURL(tipoPreferido === 'image/png' ? 'image/png' : 'image/jpeg', .86));
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}

/* =====================================================================
   Ver questão
   ===================================================================== */
let verId = null;
function abrirVer(id) {
  const q = getQ(id); if (!q) return; verId = id;
  $('verTit').textContent = `${TIPOS[q.tipo].nome} · ${q.unidade}`;
  $('verCorpo').innerHTML = renderQuestao(q, { num: 1, gab: true, res: true });
  const g = gabaritoDe(q);
  $('verMeta').innerHTML = `<b>Gabarito:</b> ${g.curto} &nbsp;·&nbsp; ${esc(q.materia)} · ${esc(q.serie)} · ${esc(q.unidade)}${q.topicos.length ? ' · ' + esc(q.topicos.join(', ')) : ''} &nbsp;·&nbsp; ${esc(q.fonte || '')}${q.arquivo ? ` &nbsp;·&nbsp; <a href="../${esc(q.arquivo)}" target="_blank" rel="noopener">abrir a aula/atividade de origem</a>` : ''}`;
  const dono = q.origem === 'minha' || q.origem === 'ia';
  $('verEd').hidden = !dono; $('verDel').hidden = !dono; $('verDup').hidden = dono;
  $('verAdd').textContent = E.itens.some(i => i.id === id) ? 'Já está na prova' : 'Adicionar à prova'; $('verAdd').disabled = E.itens.some(i => i.id === id);
  $('dlgVer').showModal();
}

/* =====================================================================
   Editor de questão
   ===================================================================== */
let EDQ = null, edNovo = true, EDF = { tipo: '' };
const ALT_VAZIA = () => ({ t: '', ok: false });
function novaQuestaoVazia() {
  return { id: uid(), tipo: 'mc', materia: F.materia || 'Matemática', serie: F.serie || '', unidade: F.unidade || '', topicos: [], dificuldade: 2, fonte: 'Minha', pontos: 1, enunciado: '', figura: null, resolucao: '', gabarito: '', alternativas: [ALT_VAZIA(), ALT_VAZIA(), ALT_VAZIA(), ALT_VAZIA()], afirmacoes: [ALT_VAZIA(), ALT_VAZIA(), ALT_VAZIA()], colunaA: ['', ''], colunaB: ['', ''], pares: [0, 1], resposta: { modo: 'linhas', n: 4, altura: 40 } };
}
function figParaForm(f) {
  const o = { tipo: '', largura: '60', legenda: '', src: '', fs: 'x^2-4x+3', x0: '-5', x1: '5', y0: '', y1: '', titulo: '', rotulos: '', valores: '', unidade: '', tab: '', svg: '' };
  if (!f) return o;
  o.tipo = f.tipo; o.legenda = f.legenda || ''; o.largura = String(parseInt(f.largura) || 60);
  if (f.tipo === 'img') o.src = f.src || '';
  if (f.tipo === 'funcao') { o.fs = (f.fs || []).map(x => typeof x === 'string' ? x : (x.rotulo ? x.e + ' ; ' + x.rotulo : x.e)).join('\n'); o.x0 = String((f.x || [-5, 5])[0]); o.x1 = String((f.x || [-5, 5])[1]); o.y0 = f.y ? String(f.y[0]) : ''; o.y1 = f.y ? String(f.y[1]) : ''; o._pontos = f.pontos; }
  if (f.tipo === 'barras') { o.titulo = f.titulo || ''; o.rotulos = (f.rotulos || []).join(', '); o.valores = (f.valores || []).join(', '); o.unidade = f.unidade || ''; }
  if (f.tipo === 'tabela') o.tab = [f.cab || []].concat(f.linhas || []).map(r => r.join(' ; ')).join('\n');
  if (f.tipo === 'svg') o.svg = f.svg || '';
  return o;
}
function formParaFig(o) {
  const l = (o.largura || 60) + '%', lg = o.legenda ? { legenda: o.legenda } : {};
  if (o.tipo === 'img') return o.src ? Object.assign({ tipo: 'img', src: o.src, largura: l }, lg) : null;
  if (o.tipo === 'funcao') {
    const fs = o.fs.split('\n').map(s => s.trim()).filter(Boolean).map(s => { const [e, r] = s.split(';').map(x => x.trim()); return r ? { e, rotulo: r } : e; });
    const f = { tipo: 'funcao', fs, x: [parseFloat(o.x0) || -5, parseFloat(o.x1) || 5], largura: l };
    if (o.y0 !== '' && o.y1 !== '' && !isNaN(parseFloat(o.y0)) && !isNaN(parseFloat(o.y1))) f.y = [parseFloat(o.y0), parseFloat(o.y1)];
    if (o._pontos) f.pontos = o._pontos; return Object.assign(f, lg);
  }
  if (o.tipo === 'barras') return Object.assign({ tipo: 'barras', titulo: o.titulo, rotulos: o.rotulos.split(',').map(s => s.trim()), valores: o.valores.split(',').map(s => parseFloat(s.replace(',', '.')) || 0), unidade: o.unidade, largura: l }, lg);
  if (o.tipo === 'tabela') { const rs = o.tab.split('\n').map(r => r.split(';').map(c => c.trim())).filter(r => r.some(Boolean)); return rs.length ? Object.assign({ tipo: 'tabela', cab: rs[0], linhas: rs.slice(1), largura: l }, lg) : null; }
  if (o.tipo === 'svg') return o.svg.trim() ? Object.assign({ tipo: 'svg', svg: o.svg, largura: l }, lg) : null;
  return null;
}
function abrirEditor(q, novo) {
  EDQ = JSON.parse(JSON.stringify(Object.assign(novaQuestaoVazia(), q || {}))); edNovo = novo !== false;
  if (EDQ.tipo === 'mc' && (!EDQ.alternativas || !EDQ.alternativas.length)) EDQ.alternativas = [ALT_VAZIA(), ALT_VAZIA(), ALT_VAZIA(), ALT_VAZIA()];
  ['afirmacoes', 'colunaA', 'colunaB', 'pares', 'resposta'].forEach(k => { if (!EDQ[k]) EDQ[k] = novaQuestaoVazia()[k]; });
  if (!EDQ.alternativas) EDQ.alternativas = novaQuestaoVazia().alternativas;
  EDQ._topicos = (EDQ.topicos || []).join(', ');
  EDF = figParaForm((EDQ.figura && !Array.isArray(EDQ.figura)) ? EDQ.figura : null);
  $('edTit').textContent = edNovo ? 'Nova questão' : 'Editar questão';
  desenharEditor(); $('dlgEd').showModal(); previaEditor();
}
const op = (arr, v) => arr.map(([k, t]) => `<option value="${k}"${String(v) === String(k) ? ' selected' : ''}>${t}</option>`).join('');
function desenharEditor() {
  const q = EDQ, L = 'abcdefghij';
  let h = `<div class="g2"><div class="pv-campo"><label>Tipo de questão</label><select class="pv-sel" data-f="tipo">${op(Object.keys(TIPOS).map(k => [k, TIPOS[k].nome]), q.tipo)}</select></div>
    <div class="pv-campo"><label>Pontos</label><input class="pv-in" type="number" step="0.25" min="0.25" data-f="pontos" value="${q.pontos}"></div></div>
  <div class="g3"><div class="pv-campo"><label>Matéria</label><input class="pv-in" list="dl-materias" data-f="materia" value="${esc(q.materia)}"></div>
    <div class="pv-campo"><label>Turma / série</label><input class="pv-in" list="dl-series" data-f="serie" value="${esc(q.serie)}" placeholder="2º Ano"></div>
    <div class="pv-campo"><label>Dificuldade</label><select class="pv-sel" data-f="dificuldade">${op([[1, 'Fácil'], [2, 'Média'], [3, 'Difícil']], q.dificuldade)}</select></div></div>
  <div class="pv-campo"><label>Conteúdo</label><input class="pv-in" list="dl-unidades" data-f="unidade" value="${esc(q.unidade)}" placeholder="Ex.: Função quadrática"></div>
  <div class="pv-campo"><label>Palavras-chave (separe por vírgula)</label><input class="pv-in" data-f="_topicos" value="${esc(q._topicos)}" placeholder="parábola, vértice, raízes"></div>
  <div class="pv-campo"><label>Enunciado</label>
    <div class="pv-chips" id="insM" style="margin:0 0 5px">${[['fração', '${a|b}$'], ['raiz', '$√{x}$'], ['x²', '$x^2$'], ['xₙ', '$x_n$'], ['≤', '≤'], ['≥', '≥'], ['≠', '≠'], ['π', 'π'], ['°', '°'], ['±', '±'], ['∞', '∞'], ['∴', '∴']].map(([l, t]) => `<button type="button" data-ins="${esc(t)}">${l}</button>`).join('')}</div>
    <textarea class="pv-ta" data-f="enunciado" rows="5" placeholder="Ex.: Resolva $x^2 - 5x + 6 = 0$. Use $ {a|b} $ para frações e $√{x}$ para raízes.">${esc(q.enunciado)}</textarea>
    <p class="pv-nota">Matemática entre <b>$ … $</b>: <code>{a|b}</code> fração · <code>√{x}</code> raiz · <code>x^2</code> expoente · <code>x_n</code> índice · <code>&lt;=</code> <code>&gt;=</code> <code>!=</code> símbolos. Fora dos cifrões vale HTML (<code>&lt;b&gt;</code>, <code>&lt;br&gt;</code>, <code>&amp;lt;</code> para “&lt;”).</p></div>`;
  // figura
  h += `<div class="pv-box"><h3>Figura (opcional)</h3><div class="pv-campo"><select class="pv-sel" data-fg="tipo">${op([['', 'Sem figura'], ['img', 'Imagem (foto, print, desenho)'], ['funcao', 'Gráfico de função'], ['barras', 'Gráfico de barras'], ['tabela', 'Tabela'], ['svg', 'Desenho em SVG (código)']], EDF.tipo)}</select></div>`;
  if (EDF.tipo === 'img') h += `<div class="pv-campo"><input type="file" accept="image/*" data-fgfile="1" style="font-size:.8rem"><p class="pv-nota">${EDF.src ? '✓ imagem carregada (' + Math.round(EDF.src.length / 1024) + ' KB). Escolha outra para trocar.' : 'A imagem é reduzida para caber no navegador.'}</p></div>`;
  if (EDF.tipo === 'funcao') h += `<div class="pv-campo"><label>Funções (uma por linha; opcional “; rótulo”)</label><textarea class="pv-ta" rows="3" data-fg="fs">${esc(EDF.fs)}</textarea></div><div class="g2"><div class="pv-campo"><label>x de … até</label><div class="g2"><input class="pv-in" data-fg="x0" value="${esc(EDF.x0)}"><input class="pv-in" data-fg="x1" value="${esc(EDF.x1)}"></div></div><div class="pv-campo"><label>y de … até (vazio = automático)</label><div class="g2"><input class="pv-in" data-fg="y0" value="${esc(EDF.y0)}"><input class="pv-in" data-fg="y1" value="${esc(EDF.y1)}"></div></div></div><p class="pv-nota">Aceita <code>2x+1</code>, <code>x^2-4x+3</code>, <code>sen(x)</code>, <code>sqrt(x)</code>, <code>abs(x)</code>, <code>2^x</code>, <code>ln(x)</code>.</p>`;
  if (EDF.tipo === 'barras') h += `<div class="pv-campo"><label>Título</label><input class="pv-in" data-fg="titulo" value="${esc(EDF.titulo)}"></div><div class="pv-campo"><label>Rótulos (vírgula)</label><input class="pv-in" data-fg="rotulos" value="${esc(EDF.rotulos)}" placeholder="Jan, Fev, Mar"></div><div class="g2"><div class="pv-campo"><label>Valores (vírgula)</label><input class="pv-in" data-fg="valores" value="${esc(EDF.valores)}" placeholder="20, 30, 25"></div><div class="pv-campo"><label>Unidade</label><input class="pv-in" data-fg="unidade" value="${esc(EDF.unidade)}"></div></div>`;
  if (EDF.tipo === 'tabela') h += `<div class="pv-campo"><label>Linhas da tabela (células separadas por ;)</label><textarea class="pv-ta" rows="4" data-fg="tab" placeholder="x ; 0 ; 1 ; 2&#10;f(x) ; 3 ; 0 ; -1">${esc(EDF.tab)}</textarea><p class="pv-nota">A primeira linha vira o cabeçalho. Aceita $matemática$.</p></div>`;
  if (EDF.tipo === 'svg') h += `<div class="pv-campo"><label>Código SVG</label><textarea class="pv-ta" rows="6" data-fg="svg" style="font-family:'JetBrains Mono',monospace;font-size:.76rem" placeholder="<svg viewBox='0 0 200 120'>…</svg>">${esc(EDF.svg)}</textarea></div>`;
  if (EDF.tipo) h += `<div class="g2"><div class="pv-campo"><label>Largura (% da coluna)</label><input class="pv-in" type="number" min="15" max="100" data-fg="largura" value="${esc(EDF.largura)}"></div><div class="pv-campo"><label>Legenda</label><input class="pv-in" data-fg="legenda" value="${esc(EDF.legenda)}"></div></div>`;
  h += '</div>';
  // por tipo
  if (q.tipo === 'mc') {
    h += `<div class="pv-campo"><label>Alternativas — marque a correta</label>${q.alternativas.map((a, i) => `<div class="ed-it"><b>${L[i]})</b><input type="text" class="pv-in" data-f="alternativas.${i}.t" value="${esc(a.t)}" placeholder="Texto da alternativa"><input type="radio" name="correta" data-correta="${i}" ${a.ok ? 'checked' : ''} title="Correta"><button class="pv-link" type="button" data-rm="alternativas.${i}">✕</button></div>`).join('')}<button class="pv-link" type="button" data-add="alternativas">+ alternativa</button></div>`;
  } else if (q.tipo === 'vf' || q.tipo === 'soma') {
    h += `<div class="pv-campo"><label>Afirmações — marque as verdadeiras${q.tipo === 'soma' ? ' (valem 01, 02, 04, 08, 16, 32, 64)' : ''}</label>${q.afirmacoes.map((a, i) => `<div class="ed-it"><b>${q.tipo === 'soma' ? String(SOMA_VALORES[i] || '?').padStart(2, '0') : i + 1}</b><input type="text" class="pv-in" data-f="afirmacoes.${i}.t" value="${esc(a.t)}" placeholder="Afirmação"><label style="font-size:.74rem;white-space:nowrap"><input type="checkbox" data-f="afirmacoes.${i}.ok" ${a.ok ? 'checked' : ''}> verdadeira</label><button class="pv-link" type="button" data-rm="afirmacoes.${i}">✕</button></div>`).join('')}<button class="pv-link" type="button" data-add="afirmacoes">+ afirmação</button></div>`;
  } else if (q.tipo === 'assoc') {
    h += `<div class="pv-campo"><label>Coluna A (cada item) → par correto na coluna B</label>${q.colunaA.map((a, i) => `<div class="ed-it"><b>${i + 1}</b><input type="text" class="pv-in" data-f="colunaA.${i}" value="${esc(a)}"><select class="pv-sel" style="width:4.6rem" data-f="pares.${i}">${q.colunaB.map((_, k) => `<option value="${k}"${+q.pares[i] === k ? ' selected' : ''}>${L[k]})</option>`).join('')}</select><button class="pv-link" type="button" data-rm="colunaA.${i}">✕</button></div>`).join('')}<button class="pv-link" type="button" data-add="colunaA">+ item na coluna A</button></div>
    <div class="pv-campo"><label>Coluna B</label>${q.colunaB.map((a, i) => `<div class="ed-it"><b>${L[i]})</b><input type="text" class="pv-in" data-f="colunaB.${i}" value="${esc(a)}"><button class="pv-link" type="button" data-rm="colunaB.${i}">✕</button></div>`).join('')}<button class="pv-link" type="button" data-add="colunaB">+ item na coluna B</button></div>`;
  } else {
    h += `<div class="pv-box"><h3>Espaço de resposta</h3><div class="g3"><div class="pv-campo"><label>Formato</label><select class="pv-sel" data-f="resposta.modo">${op([['linhas', 'Linhas pautadas'], ['branco', 'Espaço em branco'], ['quadriculado', 'Papel quadriculado'], ['nenhum', 'Nenhum']], q.resposta.modo)}</select></div><div class="pv-campo"><label>Nº de linhas</label><input class="pv-in" type="number" min="1" max="30" data-f="resposta.n" value="${q.resposta.n}"></div><div class="pv-campo"><label>Altura (mm)</label><input class="pv-in" type="number" min="10" max="240" data-f="resposta.altura" value="${q.resposta.altura}"></div></div></div>
    <div class="pv-campo"><label>Resposta esperada (curta)</label><input class="pv-in" data-f="gabarito" value="${esc(q.gabarito)}"></div>`;
  }
  h += `<div class="pv-campo"><label>Resolução / demonstração (aparece no gabarito do professor)</label><textarea class="pv-ta" rows="4" data-f="resolucao">${esc(q.resolucao)}</textarea></div>`;
  $('edForm').innerHTML = h;
}
function setPath(o, path, v) { const p = path.split('.'); let c = o; for (let i = 0; i < p.length - 1; i++) c = c[p[i]]; c[p[p.length - 1]] = v; }
function iniciarEditor() {
  const f = $('edForm');
  const refazer = debounce(previaEditor, 150);
  f.addEventListener('input', e => {
    const t = e.target;
    if (t.dataset.f) { setPath(EDQ, t.dataset.f, t.type === 'checkbox' ? t.checked : (t.type === 'number' || t.dataset.f.startsWith('pares.') || t.dataset.f === 'dificuldade') ? +t.value : t.value); }
    else if (t.dataset.fg && !t.dataset.fgfile) { EDF[t.dataset.fg] = t.value; }
    refazer();
  });
  f.addEventListener('change', async e => {
    const t = e.target;
    if (t.dataset.f === 'tipo') { EDQ.tipo = t.value; if (t.value === 'soma' && EDQ.afirmacoes.length > 7) EDQ.afirmacoes.length = 7; desenharEditor(); previaEditor(); }
    else if (t.dataset.fg === 'tipo') { EDF.tipo = t.value; desenharEditor(); previaEditor(); }
    else if (t.dataset.fgfile) { const file = t.files[0]; if (file) { try { EDF.src = await arquivoParaDataUrl(file, 900, file.type === 'image/png' ? 'image/png' : 'image/jpeg'); desenharEditor(); previaEditor(); } catch (_) { toast('Não consegui ler essa imagem.'); } } }
    else if (t.dataset.correta !== undefined) { EDQ.alternativas.forEach((a, i) => { a.ok = i === +t.dataset.correta; }); previaEditor(); }
    else if (t.dataset.f && (t.dataset.f.startsWith('pares.') || t.dataset.f === 'dificuldade')) previaEditor();
  });
  f.addEventListener('click', e => {
    const t = e.target.closest('button'); if (!t) return;
    if (t.dataset.ins) { const ta = f.querySelector('[data-f=enunciado]'), s = ta.selectionStart; const ins = t.dataset.ins.replace('${a|b}$', '$ {a|b} $'); ta.setRangeText(ins, ta.selectionStart, ta.selectionEnd, 'end'); EDQ.enunciado = ta.value; ta.focus(); previaEditor(); return; }
    if (t.dataset.add) {
      const k = t.dataset.add;
      if (k === 'alternativas') { if (EDQ.alternativas.length < 10) EDQ.alternativas.push(ALT_VAZIA()); }
      else if (k === 'afirmacoes') { if (EDQ.tipo === 'soma' && EDQ.afirmacoes.length >= 7) return toast('Somatória aceita no máximo 7 afirmações.'); EDQ.afirmacoes.push(ALT_VAZIA()); }
      else if (k === 'colunaA') { EDQ.colunaA.push(''); EDQ.pares.push(0); } else if (k === 'colunaB') EDQ.colunaB.push('');
      desenharEditor(); previaEditor(); return;
    }
    if (t.dataset.rm) {
      const [k, i] = t.dataset.rm.split('.'); const arr = EDQ[k]; if (arr.length <= 2) return toast('Mantenha ao menos 2 itens.');
      arr.splice(+i, 1); if (k === 'colunaA') EDQ.pares.splice(+i, 1); if (k === 'colunaB') EDQ.pares = EDQ.pares.map(p => Math.min(p, EDQ.colunaB.length - 1));
      desenharEditor(); previaEditor();
    }
  });
  $('edSalvar').addEventListener('click', () => {
    const q = construirDoEditor(), erros = validar(q);
    if (erros.length) { previaEditor(); return toast('Falta: ' + erros[0] + '.', 4000); }
    const minhas = getMinhas(), i = minhas.findIndex(x => x.id === q.id);
    q.origem = 'minha'; if (i >= 0) minhas[i] = q; else minhas.unshift(q);
    if (!LS.gravar('prova:minhas', minhas)) return toast('Não deu para salvar (armazenamento cheio?). Reduza as imagens ou exporte e apague questões antigas.', 5000);
    $('dlgEd').close(); montarBanco(); if (E.itens.some(it => it.id === q.id)) { E.snap[q.id] = q; mudou(); } F.q = ''; $('busca').value = ''; renderBanco(true); toast('Questão salva em “Minhas questões”.');
  });
}
function construirDoEditor() {
  const q = JSON.parse(JSON.stringify(EDQ)); q.topicos = String(q._topicos || '').split(',').map(s => s.trim()).filter(Boolean); delete q._topicos;
  q.figura = formParaFig(EDF);
  if (q.tipo !== 'mc') q.alternativas = undefined; if (q.tipo !== 'vf' && q.tipo !== 'soma') q.afirmacoes = undefined;
  if (q.tipo !== 'assoc') { q.colunaA = q.colunaB = q.pares = undefined; }
  if (q.tipo !== 'aberta') q.resposta = undefined;
  return normalizar(q);
}
function previaEditor() {
  const q = construirDoEditor(), erros = validar(q);
  $('edPre').innerHTML = renderQuestao(q, { num: 1, gab: true, res: true });
  $('edErros').innerHTML = erros.map(e => `<li>${esc(e)}</li>`).join('');
}

/* =====================================================================
   Salvar / abrir / importar / exportar
   ===================================================================== */
function baixar(nome, obj) { const b = new Blob([JSON.stringify(obj, null, 1)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = nome; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000); }
const slug = s => norm(s).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'prova';
function salvarProva() {
  const todas = LS.ler('prova:salvas', {}); const s = paraSalvar(); s.atualizado = new Date().toISOString(); todas[E.id] = s;
  if (!LS.gravar('prova:salvas', todas)) return toast('Não deu para salvar: armazenamento cheio. Exporte a prova (Abrir → Exportar) e apague as antigas.', 5000);
  toast('Prova salva neste navegador.');
}
function carregarProva(s) {
  const novo = novoEstado(); E = Object.assign(novo, s); E.cab = Object.assign({}, PADRAO_CAB, s.cab, { mostrar: Object.assign({}, PADRAO_CAB.mostrar, (s.cab || {}).mostrar || {}) });
  E.layout = Object.assign(novo.layout, s.layout || {}); E.gab = Object.assign(novo.gab, s.gab || {}); E.snap = s.snap || {};
  Object.keys(E.snap).forEach(id => { if (!POR_ID[id]) POR_ID[id] = indexar(E.snap[id]); });
  sincronizarForm(); mudou();
}
function listarSalvas() {
  const todas = Object.values(LS.ler('prova:salvas', {})).sort((a, b) => String(b.atualizado).localeCompare(String(a.atualizado)));
  $('salvas').innerHTML = todas.length ? todas.map(s => `<div class="pv-box" style="display:flex;gap:10px;align-items:center;flex-wrap:wrap"><div style="flex:1;min-width:10rem"><b>${esc(s.nome)}</b><div class="pv-nota" style="margin:2px 0 0">${s.itens.length} questões · ${fmtPt(s.itens.reduce((t, i) => t + (+i.pontos || 0), 0))} pts · ${new Date(s.atualizado).toLocaleString('pt-BR')}</div></div><button class="btn secondary" data-ab="${esc(s.id)}" type="button" style="padding:.4em .8em;font-size:.78rem">Abrir</button><button class="btn secondary" data-dup="${esc(s.id)}" type="button" style="padding:.4em .8em;font-size:.78rem">Duplicar</button><button class="btn secondary" data-exp="${esc(s.id)}" type="button" style="padding:.4em .8em;font-size:.78rem">Exportar</button><button class="pv-link" data-del="${esc(s.id)}" type="button" style="color:var(--danger)">Excluir</button></div>`).join('') : '<div class="vazio">Você ainda não salvou nenhuma prova.</div>';
}
function iniciarArquivos() {
  $('bNova').addEventListener('click', () => { if (E.itens.length && !confirm('Começar uma prova nova? O rascunho atual será descartado (salve antes, se quiser).')) return; E = novoEstado(); if (PROF_NOME && !E.cab.professor) E.cab.professor = PROF_NOME; sincronizarForm(); mudou(); });
  $('bSalvar').addEventListener('click', salvarProva);
  $('bAbrir').addEventListener('click', () => { listarSalvas(); $('dlgAbrir').showModal(); });
  $('salvas').addEventListener('click', e => {
    const t = e.target.closest('button'); if (!t) return; const todas = LS.ler('prova:salvas', {});
    if (t.dataset.ab) { carregarProva(todas[t.dataset.ab]); $('dlgAbrir').close(); }
    else if (t.dataset.dup) { const c = JSON.parse(JSON.stringify(todas[t.dataset.dup])); c.id = uid(); c.nome += ' (cópia)'; todas[c.id] = c; LS.gravar('prova:salvas', todas); listarSalvas(); }
    else if (t.dataset.exp) { const s = todas[t.dataset.exp]; baixar(slug(s.nome) + '.prova.json', s); }
    else if (t.dataset.del && confirm('Excluir esta prova salva?')) { delete todas[t.dataset.del]; LS.gravar('prova:salvas', todas); listarSalvas(); }
  });
  $('arqImp').addEventListener('change', async e => {
    const f = e.target.files[0]; if (!f) return; let j; try { j = JSON.parse(await f.text()); } catch (_) { return toast('Esse arquivo não é um JSON válido.'); }
    if (j.itens && j.cab) { carregarProva(Object.assign(j, { id: uid() })); $('dlgAbrir').close(); toast('Prova importada.'); } else importarQuestoes(j); e.target.value = '';
  });
  $('bMais').addEventListener('click', () => { $('maisInfo').textContent = `${getMinhas().length} questões suas guardadas neste navegador.`; $('dlgMais').showModal(); });
  $('bExpQ').addEventListener('click', () => { const m = getMinhas(); if (!m.length) return toast('Você ainda não tem questões próprias.'); baixar('minhas-questoes.json', { versao: 2, questoes: m }); });
  $('arqQ').addEventListener('change', async e => { const f = e.target.files[0]; if (!f) return; try { importarQuestoes(JSON.parse(await f.text())); $('dlgMais').close(); } catch (_) { toast('Esse arquivo não é um JSON válido.'); } e.target.value = ''; });
  $('bLimpaQ').addEventListener('click', () => { if (confirm('Apagar TODAS as suas questões deste navegador? (exporte antes, se quiser guardar)')) { LS.gravar('prova:minhas', []); montarBanco(); renderBanco(true); $('dlgMais').close(); toast('Questões apagadas.'); } });
  $('bImprimir').addEventListener('click', async () => {
    if (!E.itens.length) return toast('Adicione ao menos uma questão antes de imprimir.');
    clearTimeout(0); await paginar(); const antes = document.title; document.title = E.nome;
    window.print(); setTimeout(() => { document.title = antes; }, 800);
  });
  window.addEventListener('beforeprint', () => { $('paginas').style.zoom = 1; });
  window.addEventListener('afterprint', aplicarZoom);
}
function importarQuestoes(j) {
  const lista = Array.isArray(j) ? j : j.questoes; if (!Array.isArray(lista)) return toast('Não encontrei questões nesse arquivo.');
  const minhas = getMinhas(), ids = new Set(minhas.map(q => q.id)); let ok = 0, ruins = 0;
  lista.forEach(b => { const q = normalizar(Object.assign({}, b, { origem: 'minha' })); if (validar(q).length) { ruins++; return; } if (ids.has(q.id)) { minhas[minhas.findIndex(x => x.id === q.id)] = q; } else { minhas.unshift(q); ids.add(q.id); } ok++; });
  LS.gravar('prova:minhas', minhas); montarBanco(); renderBanco(true);
  toast(`${ok} questão(ões) importada(s)${ruins ? `; ${ruins} ignorada(s) por estarem incompletas` : ''}.`, 4000);
}

/* =====================================================================
   Assistente (IA preparada, não configurada)
   ===================================================================== */
/* ---------- assistente (bolinha de chat) ---------- */
const CHAT_KEY = 'prova:chat';
let chat = LS.ler(CHAT_KEY, []), ultimoPedido = null;
const SUGESTOES = ['5 questões de função quadrática, 1º ano', 'probabilidade, nível médio, 4 questões', 'questões do ENEM de geometria espacial', 'dividir os pontos em 10', '2 colunas com gabarito'];
const PARADAS = new Set('a o as os um uma uns umas de da do das dos e em no na nos nas com para por sobre que me quero preciso gostaria queria quer montar monte fazer faca fazer crie criar gere gerar elabore busque buscar procure procurar ache achar traga coloque colocar adicione adicionar questao questoes exercicio exercicios prova provas avaliacao teste lista itens item ano anos serie series turma nivel dificuldade dificil dificeis facil faceis medio medios media medias simples basico basica alguma algumas algum alguns mais apenas somente so tipo tipos multipla escolha alternativa alternativas aberta abertas discursiva verdadeiro falso soma somatoria associacao colunas coluna ate pelo menos'.split(' '));

function chatSalvar() { LS.gravar(CHAT_KEY, chat.slice(-40)); }
function msg(papel, html, acoes) { chat.push({ p: papel, h: html, a: acoes || [] }); chatSalvar(); desenharChat(); }
function desenharChat(pensando) {
  const box = $('iaMsgs');
  box.innerHTML = chat.map((m, i) => `<div class="m ${m.p}">${m.h}${m.a && m.a.length ? `<div class="acoes">${m.a.map((a, j) => `<button type="button" data-i="${i}" data-j="${j}">${esc(a.t)}</button>`).join('')}</div>` : ''}</div>`).join('') + (pensando ? '<div class="m bot pensando">Pensando…</div>' : '');
  box.scrollTop = box.scrollHeight;
}
function iaStatus() {
  const on = IA.iaConfigurada();
  $('iaStatus').textContent = on ? 'IA conectada · posso criar questões novas' : 'IA ainda não configurada · busco no banco por você';
  $('iaFab').classList.toggle('on', on); $('iaPonto').title = on ? 'IA conectada' : 'IA ainda não configurada';
  const c = IA.lerConfig(); $('ia-on').checked = !!c.habilitado; $('ia-end').value = c.endpoint || ''; $('ia-mod').value = c.modelo || '';
}
function iaAbrir(abrir) {
  const ch = $('iaChat'); ch.hidden = !abrir; $('iaFab').setAttribute('aria-expanded', abrir);
  if (abrir) {
    if (!chat.length) msg('bot', 'Oi! Sou o assistente do <b>Proveiro</b>. Diga o que você precisa, em uma frase: o conteúdo, a turma, o tipo e quantas questões. Eu filtro o banco e adiciono à prova para você' + (IA.iaConfigurada() ? ', ou crio questões novas.' : '. (A criação de questões novas por IA ainda não está ligada.)'));
    desenharChat(); setTimeout(() => $('iaTxt').focus(), 50);
  }
}

/** Entende uma frase livre: quantidade, série, tipo, dificuldade, conteúdo e palavras-chave. */
function interpretar(txt) {
  const t = norm(txt), r = { qtd: 5, serie: '', tipo: '', dif: 0, unidade: '', q: '', gerar: /\b(cri[ae]|ger[ae]|elabor[ae]|invent[ae]|nova|novas|inedit)/.test(t) };
  const t2 = t.replace(/\d+\s*[ºo°]?\s*(ano|serie)s?/g, ' ').replace(/\d+([.,]\d+)?\s*(pontos?|pts|colunas?)/g, ' ');
  const mq = /(\d{1,2})\s*(questoes|questao|exercicios|exercicio|itens|perguntas)/.exec(t2);
  if (mq) r.qtd = Math.min(40, Math.max(1, +mq[1]));
  else { const m2 = /\b(\d{1,2})\b/.exec(t2); if (m2) r.qtd = Math.min(40, Math.max(1, +m2[1])); }
  const series = [...new Set(BANCO.map(q => q.serie))];
  if (/\benem\b/.test(t) && series.includes('ENEM')) r.serie = 'ENEM';
  else if (/\b(ena|profmat)\b/.test(t)) r.serie = series.find(s => /PROFMAT/.test(s)) || '';
  else { const ms = /\b(\d)\s*[ºo°]?\s*(ano|serie)/.exec(t); if (ms && series.includes(ms[1] + 'º Ano')) r.serie = ms[1] + 'º Ano'; }
  if (/multipl|alternativ/.test(t)) r.tipo = 'mc'; else if (/abert|discursiv|dissertativ|demonstr/.test(t)) r.tipo = 'aberta'; else if (/verdadeir|falso|\bvf\b|v\/f/.test(t)) r.tipo = 'vf'; else if (/somator|\bsoma\b/.test(t)) r.tipo = 'soma'; else if (/associa|relacione/.test(t)) r.tipo = 'assoc';
  if (/facil|faceis|simples|basic/.test(t)) r.dif = 1; else if (/medi[oa]s?\b|intermedi/.test(t)) r.dif = 2; else if (/dificil|dificeis|desafi|avancad/.test(t)) r.dif = 3;
  // conteúdo: unidade cujo(s) termo(s) aparecem inteiros na frase
  let melhor = 0;
  [...new Set(BANCO.map(q => q.unidade))].forEach(u => {
    const toks = norm(u).split(/[^a-z0-9]+/).filter(w => w.length > 2 && !PARADAS.has(w));
    if (toks.length && toks.every(w => t.includes(w)) && toks.length > melhor) { melhor = toks.length; r.unidade = u; }
  });
  const usados = new Set(r.unidade ? norm(r.unidade).split(/[^a-z0-9]+/) : []);
  r.q = t.split(/[^a-z0-9]+/).filter(w => w.length > 2 && !/^\d+$/.test(w) && !PARADAS.has(w) && !usados.has(w) && !/^(enem|ena|profmat)$/.test(w)).join(' ');
  return r;
}
function aplicarPedido(r, relaxar) {
  Object.keys(F).forEach(k => { F[k] = ''; });
  if (r.serie) F.serie = r.serie; if (r.tipo) F.tipo = r.tipo; if (r.dif && relaxar < 1) F.dif = String(r.dif);
  if (r.unidade && relaxar < 2) F.unidade = r.unidade; else if (r.q) F.q = r.q;
  if (r.unidade && relaxar < 2 && r.q) F.q = r.q;
  $('busca').value = F.q;
}
function amostra(lista, n) { return embaralhar(lista, Math.random).slice(0, n); }

/** Comandos rápidos sobre a prova (sem IA). Devolve a resposta ou null. */
function comandoRapido(txt) {
  const t = norm(txt);
  if (/\b(limpar|esvaziar|remover todas|apagar todas)\b.*\b(prova|questoes)\b|\bnova prova\b/.test(t) && /limpar|esvaziar|remover|apagar/.test(t)) { E.itens = []; mudou(); return 'Pronto, a prova está vazia de novo.'; }
  const mc = /\b([12])\s*coluna/.exec(t); if (mc) { E.layout.colunas = +mc[1]; sincronizarForm(); mudou(true); return `Ok, a prova agora está em <b>${mc[1]} coluna${mc[1] === '2' ? 's' : ''}</b>.`; }
  const mp = /(?:dividi\w*|distribu\w*|total\w*|valer\w*|vale)\D{0,20}?(\d+(?:[.,]\d+)?)\s*(?:pontos?|pts)?/.exec(t);
  if (mp && /(pontos?|dividi|distribu|nota)/.test(t) && E.itens.length) { const alvo = parseFloat(mp[1].replace(',', '.')); $('alvoPts').value = alvo; $('bDividir').click(); return `Dividi <b>${fmtPt(alvo)} pontos</b> igualmente entre as ${E.itens.length} questões.`; }
  if (/sem gabarito/.test(t)) { E.gab.anexar = false; sincronizarForm(); mudou(true); return 'Tirei as páginas de gabarito.'; }
  if (/gabarito/.test(t) && /(anex|inclu|colo|com|quero|adicion|gere|ponha)/.test(t)) { E.gab.anexar = true; sincronizarForm(); mudou(true); return 'Anexei as <b>páginas de gabarito</b> ao final (só para o professor).'; }
  const mv = /\bversao\s*([abcd])\b/.exec(t); if (mv) { E.versao = mv[1].toUpperCase(); if (E.versao !== 'A') { E.embOrdem = true; E.embAlt = true; } sincronizarForm(); mudou(true); return `Versão <b>${E.versao}</b> ativada${E.versao !== 'A' ? ' (ordem e alternativas embaralhadas)' : ''}.`; }
  if (/\b(imprim|baixar pdf|gerar pdf|salvar.*pdf)/.test(t)) { setTimeout(() => $('bImprimir').click(), 100); return 'Abrindo a impressão — escolha “Salvar como PDF”.'; }
  return null;
}

async function iaEnviar(txt) {
  txt = txt.trim(); if (!txt) return;
  msg('eu', esc(txt));
  const cmd = comandoRapido(txt); if (cmd) { msg('bot', cmd); return; }
  const r = interpretar(txt); ultimoPedido = r;
  if (r.gerar && IA.iaConfigurada()) {
    desenharChat(true);
    try {
      const ped = { serie: r.serie, materia: 'Matemática', conteudo: r.unidade || r.q || txt, quantidade: r.qtd, dificuldade: r.dif || 2, instrucoes: txt, tipos: r.tipo ? [r.tipo] : ['mc'] };
      ultimoPedido = ped;
      const res = await IA.gerarQuestoes(ped), minhas = getMinhas(); res.questoes.forEach(q => { q.origem = 'ia'; minhas.unshift(q); });
      LS.gravar('prova:minhas', minhas); montarBanco(); Object.keys(F).forEach(k => { F[k] = ''; }); F.fonte = 'IA (rascunho)'; renderBanco(true);
      msg('bot', `Criei <b>${res.questoes.length}</b> questão(ões) como <b>rascunhos da IA</b> — revise antes de usar.${res.descartadas.length ? ` (${res.descartadas.length} descartada(s) por incompletas.)` : ''}`, res.questoes.length ? [{ t: `Adicionar ${res.questoes.length} à prova`, id: 'add', ids: res.questoes.map(q => q.id) }, { t: 'Ver na lista', id: 'ver' }] : []);
    } catch (e) { msg('bot', 'Não consegui gerar agora: ' + esc(e.message)); }
    return;
  }
  // busca no banco (relaxa os filtros aos poucos se nada for encontrado)
  let achou = [], usados = 0;
  for (let rel = 0; rel < 3; rel++) { aplicarPedido(r, rel); achou = BANCO.filter(q => passa(q)); usados = rel; if (achou.length) break; }
  renderBanco(true);
  const livres = achou.filter(q => !E.itens.some(i => i.id === q.id));
  const n = Math.min(r.qtd, livres.length), ids = amostra(livres, n).map(q => q.id);
  const filtros = resumoFiltros();
  if (!achou.length) { msg('bot', 'Não encontrei nada no banco com isso. Tente outras palavras (ex.: “juros”, “triângulo”, “probabilidade”) ou crie a sua em <b>+ Nova</b>.' + (r.gerar ? ' A criação por IA ainda não está ligada (⚙ acima).' : '')); return; }
  msg('bot', `${r.gerar && !IA.iaConfigurada() ? 'A criação por IA ainda não está ligada, então procurei no banco. ' : ''}Encontrei <b>${achou.length}</b> questão(ões)${filtros ? ' com <i>' + esc(filtros) + '</i>' : ''}${usados ? ' (afrouxei alguns filtros para achar resultados)' : ''}. ${n ? `Posso adicionar <b>${n}</b> à prova.` : 'Todas já estão na prova.'}`,
    (n ? [{ t: `Adicionar ${n} à prova`, id: 'add', ids }] : []).concat([{ t: 'Ver na lista', id: 'ver' }]));
}
function iaAcao(i, j) {
  const a = chat[i] && chat[i].a && chat[i].a[j]; if (!a) return;
  if (a.id === 'add') { let n = 0; a.ids.forEach(id => { if (!E.itens.some(x => x.id === id)) { addItem(id); n++; } }); msg('bot', `Pronto: <b>${n}</b> questão(ões) na prova. Quer dividir os pontos? É só dizer “dividir em 10”.`); setVista('folha'); }
  else if (a.id === 'ver') { setVista('banco'); $('lista').scrollTop = 0; iaAbrir(false); }
}
function iniciarIA() {
  iaStatus();
  const cfg = () => { IA.salvarConfig({ habilitado: $('ia-on').checked, endpoint: $('ia-end').value.trim(), modelo: $('ia-mod').value.trim() }); iaStatus(); };
  ['ia-on', 'ia-end', 'ia-mod'].forEach(id => $(id).addEventListener('change', cfg));
  $('iaFab').addEventListener('click', () => iaAbrir($('iaChat').hidden));
  $('iaMin').addEventListener('click', () => iaAbrir(false));
  $('iaCfgBtn').addEventListener('click', () => { $('iaCfg').hidden = !$('iaCfg').hidden; });
  $('bPrompt').addEventListener('click', () => {
    const p = $('promptView'), ped = ultimoPedido && ultimoPedido.quantidade ? ultimoPedido : { serie: ultimoPedido && ultimoPedido.serie, conteudo: ultimoPedido && (ultimoPedido.unidade || ultimoPedido.q), quantidade: ultimoPedido ? ultimoPedido.qtd : 5, dificuldade: ultimoPedido && ultimoPedido.dif || 2, tipos: ultimoPedido && ultimoPedido.tipo ? [ultimoPedido.tipo] : ['mc'], materia: 'Matemática' };
    p.hidden = false; p.textContent = IA.SISTEMA + '\n\n— — —\n\n' + IA.montarPrompt(ped);
  });
  $('iaSug').innerHTML = SUGESTOES.map(s => `<button type="button">${esc(s)}</button>`).join('');
  $('iaSug').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { iaEnviar(b.textContent); } });
  $('iaMsgs').addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if (b) iaAcao(+b.dataset.i, +b.dataset.j); });
  const tx = $('iaTxt');
  tx.addEventListener('input', () => { tx.style.height = 'auto'; tx.style.height = Math.min(tx.scrollHeight, 104) + 'px'; });
  tx.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); $('iaForm').requestSubmit(); } });
  $('iaForm').addEventListener('submit', e => { e.preventDefault(); const v = tx.value; tx.value = ''; tx.style.height = 'auto'; iaEnviar(v); });
}

/* =====================================================================
   Inicialização
   ===================================================================== */
function iniciarBanco() {
  const refresh = () => renderBanco(true);
  $('busca').addEventListener('input', debounce(e => { F.q = e.target.value; refresh(); }, 120));
  $('secFiltros').addEventListener('click', e => {
    const o = e.target.closest('.opt'); if (!o) return;
    const k = o.closest('.sec').dataset.id, v = o.dataset.v; F[k] = F[k] === v ? '' : v; refresh();
  });
  const limparFiltros = () => { Object.keys(F).forEach(k => { F[k] = ''; }); $('busca').value = ''; refresh(); };
  $('bLimpar').addEventListener('click', limparFiltros);
  $('bRecolher').addEventListener('click', () => filtrosUI.fecharTodas());
  $('bNovaQ').addEventListener('click', () => abrirEditor(null, true));

  // mostrar/esconder a coluna de filtros
  const estreito = () => window.matchMedia('(max-width:1100px)').matches;
  if (LS.ler('prova:ui:semfiltros', false) && !estreito()) document.body.classList.add('sem-filtros');
  $('bFiltros').addEventListener('click', () => {
    if (estreito()) document.body.classList.toggle('filtros-abertos');
    else { const off = document.body.classList.toggle('sem-filtros'); LS.gravar('prova:ui:semfiltros', off); }
    setTimeout(aplicarZoom, 60);
  });
  // densidade da lista
  const dens = LS.ler('prova:ui:dens', 'ampla');
  const aplicaDens = v => { $('colBanco').classList.toggle('dens-compacta', v === 'compacta'); marcarSeg('segDens', v); };
  aplicaDens(dens);
  seg('segDens', v => { aplicaDens(v); LS.gravar('prova:ui:dens', v); });
  // alternar banco / folha em telas menores
  seg('segVista', v => setVista(v));

  $('lista').addEventListener('click', e => {
    if (e.target.id === 'maisQ') { mostrados += 40; renderBanco(); return; }
    const lim = e.target.closest('[data-a="limpar"]'); if (lim) { limparFiltros(); return; }
    const c = e.target.closest('.qc'), b = e.target.closest('button[data-a]'); if (!c || !b) return;
    const a = b.dataset.a;
    if (a === 'add') addItem(c.dataset.id);
    else if (a === 'modal') abrirVer(c.dataset.id);
    else if (a === 'ver') {
      const abre = !c.classList.contains('aberta'); c.classList.toggle('aberta', abre); b.textContent = abre ? 'Recolher ▴' : 'Ver completa ▾';
      const full = c.querySelector('.full');
      if (abre && !full.innerHTML) {
        const q = getQ(c.dataset.id), g = gabaritoDe(q);
        full.innerHTML = renderQuestao(q, { num: 1, gab: true, res: true }) + `<div style="margin-top:8px;display:flex;gap:10px;align-items:center;font:700 .74rem Archivo,Arial,sans-serif;color:#555"><span>Gabarito: ${g.curto}</span><button class="lnk" data-a="modal" type="button" style="margin-left:auto">Editar / duplicar…</button></div>`;
      }
    }
  });
  $('lista').addEventListener('dblclick', e => { const c = e.target.closest('.qc'); if (c && !e.target.closest('button') && !e.target.closest('.full')) addItem(c.dataset.id); });
  document.querySelectorAll('[data-fechar]').forEach(b => b.addEventListener('click', () => b.closest('dialog').close()));
  $('verAdd').addEventListener('click', () => { addItem(verId); $('dlgVer').close(); });
  $('verDup').addEventListener('click', () => { const q = Object.assign({}, getQ(verId)); delete q._busca; q.id = uid(); q.fonte = 'Minha (cópia)'; q.legado = false; $('dlgVer').close(); abrirEditor(q, true); });
  $('verEd').addEventListener('click', () => { const q = Object.assign({}, getQ(verId)); delete q._busca; $('dlgVer').close(); abrirEditor(q, false); });
  $('verDel').addEventListener('click', () => { if (!confirm('Excluir esta questão do seu banco?')) return; LS.gravar('prova:minhas', getMinhas().filter(q => q.id !== verId)); E.itens = E.itens.filter(i => i.id !== verId); $('dlgVer').close(); montarBanco(); renderBanco(true); mudou(); });
}

function setVista(v) {
  document.body.dataset.vista = v; marcarSeg('segVista', v);
  if (v === 'folha') setTimeout(aplicarZoom, 40);
}

/* ---------- gaveta de configurações (☰) ---------- */
let gavetaUI = null;
function abrirGaveta(id) {
  $('drawer').classList.add('on'); $('drawer').setAttribute('aria-hidden', 'false'); $('drawerBd').hidden = false; $('bMenu').setAttribute('aria-expanded', 'true');
  if (id && gavetaUI) gavetaUI.abrir(id);
}
function fecharGaveta() {
  $('drawer').classList.remove('on'); $('drawer').setAttribute('aria-hidden', 'true'); $('drawerBd').hidden = true; $('bMenu').setAttribute('aria-expanded', 'false');
}
function iniciarGaveta() {
  gavetaUI = secoesMoveis($('secConfig'), 'config', ['prova', 'layout']);
  $('bMenu').addEventListener('click', () => { $('drawer').classList.contains('on') ? fecharGaveta() : abrirGaveta(); });
  $('bFechaDrawer').addEventListener('click', fecharGaveta);
  $('drawerBd').addEventListener('click', fecharGaveta);
  $('resTop').addEventListener('click', () => abrirGaveta('prova'));
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if ($('drawer').classList.contains('on')) fecharGaveta(); else if (!$('iaChat').hidden) iaAbrir(false);
  });
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(debounce(aplicarZoom, 80)).observe($('stage'));
}

function provaExemplo() {
  Object.assign(E.cab, { escola: "Colégio Exemplo", professor: PROF_NOME || "Prof. Eduardo", turma: "2º A", trimestre: "2º trimestre", subtitulo: "Funções, geometria e estatística", instrucoes: "Leia com atenção. Use caneta azul ou preta. Não é permitido o uso de calculadora." });
  AUTORAIS.slice(0, 12).forEach(q => { E.itens.push({ id: q.id, pontos: q.pontos || 1 }); E.snap[q.id] = q; });
  E.nome = "Prova de exemplo"; E.gab.anexar = !!new URLSearchParams(location.search).get("gab");
  const c = +new URLSearchParams(location.search).get("cols"); if (c === 1 || c === 2) E.layout.colunas = c;
}

async function iniciar() {
  montarFiltros(); iniciarBanco(); iniciarGaveta(); iniciarPaineis(); iniciarEditor(); iniciarArquivos(); iniciarDnD(); iniciarIA();
  await carregar();
  const url = new URLSearchParams(location.search);
  const r = url.get('exemplo') ? null : LS.ler('prova:rascunho', null);
  if (url.get('exemplo')) { E = novoEstado(); provaExemplo(); } else if (r && r.itens) { try { carregarProva(r); } catch (_) { E = novoEstado(); } } else E = novoEstado();
  sincronizarForm(); renderBanco(true); renderLista(); atualizarResumo(); await paginar();
  const p = new URLSearchParams(location.search);
  if (p.get('q')) { $('busca').value = p.get('q'); F.q = p.get('q'); renderBanco(true); }
  // pré-preenche o nome do professor a partir da conta (se estiver logado) — opcional, nunca bloqueia
  import('./auth.js').then(m => m.aoMudarAuth(async u => {
    if (!u) return; const perfil = await m.buscarPerfil(u.uid);
    if (perfil && perfil.role === 'professor') { PROF_NOME = perfil.nome || ''; if (!E.cab.professor && PROF_NOME) { E.cab.professor = PROF_NOME; $('c-professor').value = PROF_NOME; mudou(true); } }
  })).catch(() => { /* sem rede / sem Firebase: segue sem login */ });
}
iniciar();
window.__prova = { get E() { return E; }, paginar, addItem, get BANCO() { return BANCO; } };
