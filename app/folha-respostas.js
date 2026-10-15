// ============================================================
// EduMath Provas — folha de respostas (cartão-resposta) da prova.
// Uma linha por questão, no formato de cada tipo:
//   mc      → bolinhas A B C D E            vf    → um quadrinho por afirmação (o aluno escreve V ou F)
//   soma    → dois quadrinhos para a soma   assoc → um quadrinho por item (o aluno escreve a letra)
//   aberta  → linha para a resposta rápida
// `modeloLinha` descreve a linha (usado pela tela/impressão e pelo Word); `linhaHtml` e `cabecalhoHtml` desenham no navegador.
// Sem dependência de DOM: roda também no Node (testes).
// ============================================================
import { gabaritoDe } from './questoes.js';

const LETRAS = 'ABCDEFGHIJ';
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const INSTR_PADRAO = 'Passe a limpo aqui as suas respostas, com caneta azul ou preta. Não rasure.';

/** Descreve a linha de resposta de uma questão da prova: { num, tipo, n, marc/vals/val } (o gabarito vem junto, para a folha preenchida). */
export function modeloLinha(x) {
  const q = x.q, g = String(gabaritoDe(q, x.ordem).curto || '').trim();
  if (q.tipo === 'mc') {
    const n = (q.alternativas || []).length || 5;
    return { num: x.num, tipo: 'mc', n: Math.min(n, 10), marc: /^[A-J]$/.test(g) ? LETRAS.indexOf(g) : -1 };
  }
  if (q.tipo === 'vf') {
    const vals = g.split(/\s*[–-]\s*/).map(v => v.trim().toUpperCase()).filter(v => v === 'V' || v === 'F');
    const n = q.afirmacoes && q.afirmacoes.length ? q.afirmacoes.length : (vals.length || 5);
    return { num: x.num, tipo: 'vf', n: Math.min(n, 10), vals: vals.length === n ? vals : [] };
  }
  if (q.tipo === 'soma') return { num: x.num, tipo: 'soma', val: /^\d{1,3}$/.test(g) ? g : '' };
  if (q.tipo === 'assoc') {
    const n = (q.colunaA || []).length || 4;
    const pares = (q.pares || []).map(p => LETRAS[p] || '');
    return { num: x.num, tipo: 'assoc', n: Math.min(n, 10), vals: pares.length === n ? pares : [] };
  }
  const val = g && g !== '—' && g !== 'ver resolução' ? plano(g) : '';
  return { num: x.num, tipo: 'aberta', val };
}

/** Quais tipos aparecem (para a legenda). */
export function tiposPresentes(linhas) { return new Set(linhas.map(l => l.tipo)); }

export function legenda(linhas) {
  const t = tiposPresentes(linhas), p = [];
  if (t.has('mc')) p.push('<b>Alternativas:</b> preencha apenas uma bolinha por questão.');
  if (t.has('vf')) p.push('<b>V ou F:</b> escreva <b>V</b> ou <b>F</b> em cada quadrinho.');
  if (t.has('soma')) p.push('<b>Somatória:</b> escreva a soma com dois algarismos (ex.: 07).');
  if (t.has('assoc')) p.push('<b>Associação:</b> escreva a letra correspondente em cada quadrinho.');
  if (t.has('aberta')) p.push('<b>Questões abertas:</b> escreva só a resposta final; o desenvolvimento fica na prova.');
  return p;
}

const plano = h => String(h).replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const pad = n => String(n).padStart(2, '0');

/** Uma linha da folha (HTML). `preench` pinta as respostas certas (folha do professor). */
export function linhaHtml(l, preench) {
  let o = '';
  if (l.tipo === 'mc') {
    for (let i = 0; i < l.n; i++) o += `<i class="fr-b${preench && l.marc === i ? ' on' : ''}">${LETRAS[i]}</i>`;
  } else if (l.tipo === 'vf' || l.tipo === 'assoc') {
    for (let i = 0; i < l.n; i++) o += `<span class="fr-x"><u>${i + 1}</u><i class="fr-c">${preench && l.vals[i] ? esc(l.vals[i]) : ''}</i></span>`;
  } else if (l.tipo === 'soma') {
    const v = preench ? l.val.padStart(2, '0') : '';
    o = `<em>Soma</em><i class="fr-c">${esc(v[0] || '')}</i><i class="fr-c">${esc(v[1] || '')}</i>`;
  } else {
    o = `<i class="fr-ln">${preench ? esc(l.val) : ''}</i>`;
  }
  return `<div class="fr-l fr-${l.tipo}"><b class="fr-n">${pad(l.num)}</b><span class="fr-o">${o}</span></div>`;
}

/** Cabeçalho da folha (HTML). c = { nome, versao, titulo, subtitulo, turma, data, instr, prof } */
export function cabecalhoHtml(c, linhas) {
  const ver = c.versao && c.versao !== 'A' ? `<div class="ver" title="Versão da prova">${esc(c.versao)}</div>` : '';
  const leg = legenda(linhas);
  const campo = (rot, val, cls = '') => `<div class="fr-cp ${cls}"><span>${rot}</span><b>${esc(val || '')}</b></div>`;
  return `<div class="fr-cab"><div class="fr-tit"><div><h3>Folha de respostas</h3><div class="st">${esc(c.nome || '')}${c.subtitulo ? ' · ' + esc(c.subtitulo) : ''}</div></div>${ver}</div>
    <div class="fr-camp">${campo('Nome', '', 'larg')}${campo('Nº', '')}${campo('Turma', c.turma)}${campo('Data', c.data)}</div>
    ${c.instr ? `<div class="fr-ins">${esc(c.instr).replace(/\n/g, '<br>')}</div>` : ''}
    ${leg.length ? `<div class="fr-leg">${leg.join(' · ')}</div>` : ''}</div>`;
}
