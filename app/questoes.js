// ============================================================
// Esquema do banco de questões (v2) + renderização para papel.
// Usado pelo Proveiro (professor/prova.html) e pelo validador (scripts/validar-banco-provas.js).
//
// {
//   id, tipo: 'mc' | 'aberta' | 'vf' | 'soma' | 'assoc',
//   materia, serie, unidade, topicos:[…], dificuldade: 1|2|3, fonte, pontos,
//   enunciado:  HTML + $matemática$ (veja app/matematica.js),
//   layoutAlt:  '1'|'2'|'linha' — força a disposição das alternativas desta questão
//   pergunta:   HTML opcional exibido DEPOIS da figura (ex.: “Qual é o valor de x?”)
//   figura:     { tipo:'svg'|'img'|'funcao'|'barras'|'tabela', … } (veja app/figuras.js)  — ou figuras:[…],
//   alternativas: [{t, ok}]                (mc: exatamente uma ok)
//   afirmacoes:   [{t, ok}]                (vf: qualquer nº · soma: até 7, valem 01,02,04,08,16,32,64)
//   colunaA:[…], colunaB:[…], pares:[iB p/ cada A]   (assoc)
//   resposta: { modo:'linhas'|'branco'|'quadriculado'|'nenhum', n:5, altura:40 }   (aberta)
//   resolucao:  HTML + $matemática$ (passo a passo / demonstração),
//   gabarito:   texto curto (aberta)
// }
// Módulo puro (sem DOM).
// ============================================================
import { mat } from './matematica.js';
import { figuraHtml, limpar } from './figuras.js';

export const TIPOS = {
  mc: { nome: 'Múltipla escolha', curto: 'ME' },
  aberta: { nome: 'Aberta / discursiva', curto: 'ABERTA' },
  vf: { nome: 'Verdadeiro ou falso', curto: 'V/F' },
  soma: { nome: 'Somatória', curto: 'SOMA' },
  assoc: { nome: 'Associação de colunas', curto: 'ASSOC.' }
};
export const SOMA_VALORES = [1, 2, 4, 8, 16, 32, 64];
const L = 'abcdefghij';

export const uid = () => 'q' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const fmtPt = v => (Math.round(v * 100) / 100).toString().replace('.', ',');
export { fmtPt };
const esc = s => String(s == null ? '' : s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

/** Garante todos os campos e limpa HTML perigoso. Aceita questões do esquema v2 e do formato antigo (app/banco.json). */
export function normalizar(q) {
  if (q && q.q !== undefined && q.enunciado === undefined) { // formato antigo do gerar-banco.js
    const FONTE = { enem: 'Estilo ENEM', quiz: 'Quiz das aulas', mini: 'Mini-quiz das aulas' };
    const ena = /ena-profmat/i.test(q.mn || '') || /PROFMAT/i.test(q.mn || '');
    q = {
      id: q.id, tipo: 'mc', materia: q.mn || '', serie: ena ? 'ENA · PROFMAT' : String(q.a || '').replace('°', 'º'),
      unidade: q.u || '', topicos: [q.t].filter(Boolean), dificuldade: q.tp === 'enem' ? 2 : 1, fonte: FONTE[q.tp] || 'Aulas', arquivo: q.k,
      enunciado: q.q, alternativas: (q.o || []).map(o => ({ t: String(o.t).replace(/^[a-eA-E]\)\s*/, ''), ok: !!o.ok })), resolucao: q.sol || '', legado: true
    };
  }
  const o = Object.assign({
    id: '', tipo: 'mc', materia: '', serie: '', unidade: '', topicos: [], dificuldade: 2, fonte: '', pontos: 1,
    enunciado: '', figura: null, resolucao: '', gabarito: '', origem: 'banco'
  }, q || {});
  if (!o.id) o.id = uid();
  if (!TIPOS[o.tipo]) o.tipo = 'mc';
  o.topicos = Array.isArray(o.topicos) ? o.topicos.map(String) : String(o.topicos || '').split(',').map(s => s.trim()).filter(Boolean);
  o.dificuldade = Math.min(3, Math.max(1, +o.dificuldade || 2));
  o.pontos = +o.pontos > 0 ? +o.pontos : 1;
  o.imagens = Array.isArray(o.imagens) ? o.imagens.map(String) : [];
  o.enunciado = limpar(o.enunciado); o.resolucao = limpar(o.resolucao); if (o.pergunta) o.pergunta = limpar(o.pergunta);
  if (o.figuras && !o.figura) o.figura = null;
  if (o.tipo === 'mc') o.alternativas = (o.alternativas || []).map(a => ({ t: limpar(a.t), ok: !!a.ok }));
  if (o.tipo === 'vf' || o.tipo === 'soma') o.afirmacoes = (o.afirmacoes || []).map(a => ({ t: limpar(a.t), ok: !!a.ok }));
  if (o.tipo === 'assoc') { o.colunaA = (o.colunaA || []).map(limpar); o.colunaB = (o.colunaB || []).map(limpar); o.pares = o.pares || []; }
  if (o.tipo === 'aberta') o.resposta = Object.assign({ modo: 'linhas', n: 4, altura: 40 }, o.resposta || {});
  return o;
}

/** Lista de problemas encontrados (vazia = questão válida). */
export function validar(q) {
  const e = [];
  if (q.soImagem) { if (!(q.imagens || []).length) e.push('questão em imagem sem arquivo de imagem'); }
  else if (!q.enunciado || !String(q.enunciado).replace(/<[^>]+>/g, '').trim()) e.push('enunciado vazio');
  if (!q.materia) e.push('matéria vazia'); if (!q.serie) e.push('série/turma vazia'); if (!q.unidade) e.push('conteúdo (unidade) vazio');
  if (q.tipo === 'mc') {
    const a = q.alternativas || [];
    if (a.length < 2) e.push('múltipla escolha precisa de ao menos 2 alternativas');
    if (a.length > 10) e.push('máximo de 10 alternativas');
    if (a.filter(x => x.ok).length !== 1 && !q.anulada) e.push('marque exatamente 1 alternativa correta');
    if (a.some(x => !String(x.t).trim())) e.push('alternativa vazia');
  } else if (q.tipo === 'vf' || q.tipo === 'soma') {
    const a = q.afirmacoes || [];
    if (a.length < 2) e.push('precisa de ao menos 2 afirmações');
    if (q.tipo === 'soma' && a.length > 7) e.push('somatória aceita no máximo 7 afirmações (01…64)');
    if (a.some(x => !String(x.t).trim())) e.push('afirmação vazia');
  } else if (q.tipo === 'assoc') {
    if ((q.colunaA || []).length < 2 || (q.colunaB || []).length < 2) e.push('associação precisa de ao menos 2 itens por coluna');
    if ((q.pares || []).length !== (q.colunaA || []).length) e.push('defina o par correto de cada item da coluna A');
    else if ((q.pares || []).some(p => !(p >= 0 && p < (q.colunaB || []).length))) e.push('par aponta para item inexistente da coluna B');
  }
  return e;
}

export function textoPlano(q, max) {
  const t = (q.soImagem ? String(q.busca || '') : mat(q.enunciado || '')).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#36;/g, '$').replace(/\s+/g, ' ').trim();
  return max && t.length > max ? t.slice(0, max - 1) + '…' : t;
}

// ---------- ordem das alternativas (embaralhar) ----------
export function rng(seed) { // mulberry32
  let a = 0; for (let i = 0; i < seed.length; i++) a = (a * 31 + seed.charCodeAt(i)) | 0;
  return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
export function embaralhar(arr, rand) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }

// ---------- gabarito ----------
/** { curto, longo } do gabarito. `ordem` = permutação das alternativas (mc) usada na impressão. */
export function gabaritoDe(q, ordem) {
  if (q.anulada) return { curto: 'Anulada', longo: 'Questão anulada pelo INEP' };
  if (q.soImagem) { const k = q.alternativas.findIndex(a => a.ok); return { curto: k < 0 ? '—' : 'ABCDE'[k], longo: '' }; }
  if (q.tipo === 'mc') {
    const ord = ordem || q.alternativas.map((_, i) => i);
    const k = ord.findIndex(i => q.alternativas[i].ok);
    return { curto: k < 0 ? '—' : L[k].toUpperCase(), longo: k < 0 ? '' : `${L[k]}) ${mat(q.alternativas[ord[k]].t)}` };
  }
  if (q.tipo === 'vf') return { curto: q.afirmacoes.map(a => a.ok ? 'V' : 'F').join(' – '), longo: q.afirmacoes.map((a, i) => `(${a.ok ? 'V' : 'F'}) ${i + 1}`).join(' · ') };
  if (q.tipo === 'soma') {
    const s = q.afirmacoes.reduce((t, a, i) => t + (a.ok ? SOMA_VALORES[i] : 0), 0);
    const p = String(s).padStart(2, '0');
    return { curto: p, longo: `Soma = ${p} (${q.afirmacoes.map((a, i) => a.ok ? String(SOMA_VALORES[i]).padStart(2, '0') : '').filter(Boolean).join(' + ') || '—'})` };
  }
  if (q.tipo === 'assoc') {
    const t = q.colunaA.map((_, i) => `${i + 1}-${L[q.pares[i]] || '?'}`).join(' · ');
    return { curto: t, longo: t };
  }
  return { curto: q.gabarito ? mat(q.gabarito) : 'ver resolução', longo: q.gabarito ? mat(q.gabarito) : '' };
}

// ---------- HTML da questão no papel ----------
function altClasse(textos, modo) {
  if (modo && modo !== 'auto') return 'alt-' + modo;
  const max = Math.max(...textos.map(t => t.replace(/<[^>]+>/g, '').length));
  const img = textos.some(t => /<img|<svg/.test(t)), tem = textos.some(t => /<figure|<table/.test(t));
  if (img) return 'alt-2';
  return tem || max > 40 ? 'alt-1' : max > 16 ? 'alt-2' : 'alt-linha';
}

/**
 * o = { num, pontos:bool, valor:number, alt:'auto'|'1'|'2'|'linha', ordem:[…], gab:bool, res:bool, estilo:'ponto'|'questao' }
 */
export function renderQuestao(q, o = {}) {
  const num = o.num != null ? o.num : '';
  const rot = o.estilo === 'questao' ? `Questão ${num}` : `${num}.`;
  const pts = o.pontos && o.valor ? `<span class="q-pts">(${fmtPt(o.valor)} ${o.valor === 1 ? 'ponto' : 'pontos'})</span> ` : '';
  if (q.soImagem) {
    const w = v => (v ? `width:${v}mm;max-width:100%;` : 'max-width:100%;');
    const base = q.base && !o.omitirBase ? `<img class="q-img q-base" src="${esc(q.base.src)}" alt="Texto de apoio" style="${w(q.base.larguraMm)}">` : '';
    const g = gabaritoDe(q);
    return `<article class="q q-mc q-imgq" data-id="${esc(q.id)}"><div class="q-n">${rot}</div><div class="q-corpo">${pts ? `<div class="q-pts">${pts}</div>` : ''}${base}${(q.imagens || []).map(src => `<img class="q-img" src="${esc(src)}" alt="Questão" style="${w(q.larguraMm)}max-height:250mm;height:auto;object-fit:contain">`).join('')}${o.gab ? `<div class="q-gabimg">Gabarito: <b>${g.curto}</b>${q.anulada ? ' (questão anulada)' : ''}</div>` : ''}</div></article>`;
  }
  const legado = q.legado;
  const M = s => legado ? String(s || '') : mat(s || '');
  let h = `<div class="q-enun">${pts}${M(q.enunciado)}</div>`;
  const figs = [].concat(q.figura || [], q.figuras || []).filter(Boolean);
  figs.forEach(f => { h += figuraHtml(f); });
  if (q.pergunta) h += `<div class="q-enun q-pergunta">${M(q.pergunta)}</div>`;

  if (q.tipo === 'mc') {
    const ord = o.ordem || q.alternativas.map((_, i) => i);
    const textos = ord.map(i => M(q.alternativas[i].t));
    h += `<ol class="q-alts ${altClasse(textos, (!o.alt || o.alt === 'auto') && q.layoutAlt ? q.layoutAlt : o.alt)}" type="a">${textos.map((t, k) => `<li class="${o.gab && q.alternativas[ord[k]].ok ? 'certa' : ''}"><b>${L[k]})</b> <span>${t}</span></li>`).join('')}</ol>`;
  } else if (q.tipo === 'vf') {
    h += `<ul class="q-afs">${q.afirmacoes.map((a, i) => `<li><span class="par">( ${o.gab ? `<b class="r">${a.ok ? 'V' : 'F'}</b>` : '&nbsp;&nbsp;&nbsp;'} )</span><span>${M(a.t)}</span></li>`).join('')}</ul>`;
  } else if (q.tipo === 'soma') {
    const s = q.afirmacoes.reduce((t, a, i) => t + (a.ok ? SOMA_VALORES[i] : 0), 0);
    h += `<ul class="q-afs soma">${q.afirmacoes.map((a, i) => `<li class="${o.gab && a.ok ? 'certa' : ''}"><span class="val">${String(SOMA_VALORES[i]).padStart(2, '0')}</span><span>${M(a.t)}</span></li>`).join('')}</ul>`;
    h += `<div class="soma-box"><span>Soma:</span>${o.gab ? `<b class="r">${String(s).padStart(2, '0')}</b>` : '<i class="cxs"></i><i class="cxs"></i>'}</div>`;
  } else if (q.tipo === 'assoc') {
    h += `<div class="q-assoc"><ul class="colA">${q.colunaA.map((t, i) => `<li><span class="par">( ${o.gab ? `<b class="r">${L[q.pares[i]] || '?'}</b>` : '&nbsp;&nbsp;'} )</span><span>${M(t)}</span></li>`).join('')}</ul><ol class="colB" type="a">${q.colunaB.map((t, i) => `<li><b>${L[i]})</b> <span>${M(t)}</span></li>`).join('')}</ol></div>`;
  } else {
    const r = q.resposta || { modo: 'linhas', n: 4 };
    if (r.modo === 'linhas') h += `<div class="linhas" style="--n:${+r.n || 4}"></div>`;
    else if (r.modo === 'branco') h += `<div class="espaco" style="height:${+r.altura || 40}mm"></div>`;
    else if (r.modo === 'quadriculado') h += `<div class="quadric" style="height:${+r.altura || 60}mm"></div>`;
  }
  if (o.gab && o.res && q.resolucao) h += `<div class="q-res"><b>Resolução:</b> ${M(q.resolucao)}</div>`;
  return `<article class="q q-${q.tipo}" data-id="${esc(q.id)}"><div class="q-n">${rot}</div><div class="q-corpo">${h}</div></article>`;
}

/** Resolução isolada (folha do professor). */
export function renderResolucao(q, o = {}) {
  const M = s => q.legado ? String(s || '') : mat(s || '');
  const g = gabaritoDe(q, o.ordem);
  return `<div class="gab-it"><div class="gab-n">${o.num}.</div><div><div class="gab-r"><b>${g.curto === 'ver resolução' ? '' : 'Gabarito: '}</b>${g.curto === 'ver resolução' ? '' : g.curto}</div>${g.longo && q.tipo === 'mc' ? `<div class="gab-l">${g.longo}</div>` : ''}${q.resolucao ? `<div class="gab-s">${M(q.resolucao)}</div>` : ''}</div></div>`;
}
