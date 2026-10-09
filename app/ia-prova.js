// ============================================================
// Geração de questões por IA — PREPARADO, NÃO CONFIGURADO.
//
// Como ligar (quando você quiser):
//   1. Suba um endpoint seu (Firebase Cloud Function, Cloudflare Worker, etc.) que receba
//      POST JSON  { modelo, sistema, prompt, esquema }  e devolva JSON  { questoes:[…] }
//      (ou o texto bruto da IA em  { texto:'…' }). A CHAVE DA API FICA NO SERVIDOR — nunca aqui.
//   2. Preencha IA_CONFIG abaixo (habilitado:true, endpoint, modelo) — ou use o Proveiro
//      (guarda endpoint/modelo no navegador do professor).
//   3. Pronto: o botão "Gerar com IA" passa a funcionar; as questões voltam validadas e entram no banco
//      como "rascunhos da IA" (arrastáveis para a prova), sempre com revisão do professor.
// Detalhes e exemplo de função em docs/fazedor-de-prova.md.
// Módulo sem dependência de DOM (o localStorage é opcional).
// ============================================================
import { normalizar, validar, TIPOS } from './questoes.js';

export const IA_CONFIG = {
  habilitado: false,         // ← vire true depois de ter o endpoint
  endpoint: '',              // ex.: 'https://us-central1-SEU-PROJETO.cloudfunctions.net/gerarQuestoes'
  modelo: '',                // ex.: 'claude-sonnet-5-5'
  tempoLimiteMs: 60000
};

function cfgAtual() {
  const c = Object.assign({}, IA_CONFIG);
  try { Object.assign(c, JSON.parse(localStorage.getItem('prova:ia') || '{}')); } catch (_) { /* sem localStorage */ }
  return c;
}
export function salvarConfig(parcial) { try { localStorage.setItem('prova:ia', JSON.stringify(Object.assign(JSON.parse(localStorage.getItem('prova:ia') || '{}'), parcial))); } catch (_) { /* ignora */ } }
export function iaConfigurada() { const c = cfgAtual(); return !!(c.habilitado && c.endpoint); }
export const lerConfig = cfgAtual;

export const SISTEMA = 'Você é um professor de Matemática brasileiro, experiente em elaborar avaliações do Ensino Fundamental II, do Ensino Médio e de concursos (ENA/PROFMAT). Escreve em português do Brasil, com rigor matemático, enunciados claros e sem ambiguidade. Responde SOMENTE com JSON válido.';

export const ESQUEMA_RESUMO = `Cada questão é um objeto JSON:
{ "tipo": "mc" | "aberta" | "vf" | "soma" | "assoc",
  "enunciado": "HTML simples; matemática entre cifrões: $x^2 - {a|b}$ ($ {num|den} $ é fração, √{x} raiz, x^2 expoente, a_n índice, <= >= != símbolos)",
  "figura": null | { "tipo": "funcao", "fs": ["x^2-4x+3"], "x": [-1,5] } | { "tipo": "barras", "rotulos": [...], "valores": [...] } | { "tipo": "tabela", "cab": [...], "linhas": [[...]] } | { "tipo": "svg", "svg": "<svg viewBox=...>" },
  "alternativas": [{"t":"…","ok":false}, …]        // só mc: 4 ou 5, exatamente UMA com ok:true
  "afirmacoes": [{"t":"…","ok":true}, …]           // vf (3 a 6) e soma (3 a 7)
  "colunaA": [...], "colunaB": [...], "pares": [índice em B de cada item de A]   // só assoc
  "resposta": {"modo":"linhas","n":5}              // só aberta
  "resolucao": "passo a passo (HTML + $matemática$)", "gabarito": "resposta final curta (aberta)",
  "dificuldade": 1 | 2 | 3, "topicos": ["palavra-chave", …] }`;

/** Monta o pedido completo para a IA a partir do formulário. */
export function montarPrompt(p) {
  const tipos = (p.tipos && p.tipos.length ? p.tipos : ['mc']).map(t => `${t} (${TIPOS[t] ? TIPOS[t].nome : t})`).join(', ');
  return [
    `Crie ${p.quantidade || 5} questões inéditas de ${p.materia || 'Matemática'} para a turma "${p.serie || 'Ensino Médio'}", sobre o conteúdo: ${p.conteudo || 'a definir'}.`,
    `Tipos permitidos: ${tipos}. Nível de dificuldade: ${['', 'fácil', 'médio', 'difícil'][p.dificuldade || 2] || 'médio'}.`,
    p.instrucoes ? `Instruções do professor: ${p.instrucoes}` : '',
    'Regras: valores e contas conferidos; distratores plausíveis (erros típicos de alunos); nada de "todas as anteriores"; resolução completa; nenhuma questão repetida.',
    'Devolva exatamente: { "questoes": [ … ] }.',
    ESQUEMA_RESUMO
  ].filter(Boolean).join('\n\n');
}

export class IAErro extends Error { constructor(codigo, msg) { super(msg); this.codigo = codigo; } }

function extrairJson(txt) {
  const t = String(txt).replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  const i = t.indexOf('{'), j = t.lastIndexOf('}');
  if (i < 0 || j < i) throw new IAErro('resposta', 'A IA não devolveu JSON.');
  return JSON.parse(t.slice(i, j + 1));
}

/**
 * Gera questões. Devolve { questoes:[normalizadas e válidas], descartadas:[{motivo, bruta}] }.
 * `p` = { serie, materia, conteudo, tipos:['mc',…], quantidade, dificuldade, instrucoes }
 */
export async function gerarQuestoes(p, fetchImpl) {
  const cfg = cfgAtual();
  if (!cfg.habilitado || !cfg.endpoint) throw new IAErro('nao-configurada', 'A geração por IA ainda não foi configurada (veja docs/fazedor-de-prova.md).');
  const f = fetchImpl || fetch;
  const ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timer = ctl ? setTimeout(() => ctl.abort(), cfg.tempoLimiteMs) : null;
  let r;
  try {
    r = await f(cfg.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ modelo: cfg.modelo, sistema: SISTEMA, prompt: montarPrompt(p), esquema: ESQUEMA_RESUMO }), signal: ctl && ctl.signal });
  } catch (e) { throw new IAErro('rede', 'Não consegui falar com o servidor da IA: ' + e.message); }
  finally { if (timer) clearTimeout(timer); }
  if (!r.ok) throw new IAErro('http', 'O servidor da IA respondeu ' + r.status + '.');
  const corpo = await r.json();
  const lista = (corpo.questoes || (corpo.texto ? extrairJson(corpo.texto).questoes : null) || []);
  const ok = [], descartadas = [];
  lista.forEach(bruta => {
    const q = normalizar(Object.assign({}, bruta, { materia: bruta.materia || p.materia || 'Matemática', serie: bruta.serie || p.serie || '', unidade: bruta.unidade || p.conteudo || '', fonte: 'IA (rascunho)', origem: 'ia' }));
    const erros = validar(q);
    if (erros.length) descartadas.push({ motivo: erros.join('; '), bruta }); else ok.push(q);
  });
  return { questoes: ok, descartadas };
}
