// Reestrutura as aulas (decks de slides) antigas para a ESTRUTURA PADRÃO (docs/estrutura-aulas.md), SEM criar conteúdo novo:
// reorganiza e reaproveita o que já existe. Idempotente (pula decks que já têm data-rv ou o script id="padrao-js").
//   node scripts/reestruturar/reestruturar.js [raiz] [--so=trecho-do-caminho] [--seco]
//
// ordem final:  abertura (imagem + pergunta) → conhecimentos prévios → objetivos → explicações e exemplos passo a passo
//   → prática guiada → prática independente (SEM resposta) → correção comentada → cuidados → síntese (+ pergunta de revisão)
//   → exit ticket → "o que ainda ficou difícil?" → referências
const fs = require('fs'), path = require('path');
const P = require('../gerador-padrao/kit.js');
const { escolheCena } = require('../gerador-padrao/ilus.js');

const args = process.argv.slice(2);
const raiz = path.resolve(args.find(a => !a.startsWith('--')) || '.');
const so = (args.find(a => a.startsWith('--so=')) || '').slice(5).replace(/\\/g, '/');
const seco = args.includes('--seco');
const HUMANAS = /\/(historia|geografia|filosofia|sociologia|arte|portugues|ingles|educacao-fisica)\//;

const balanced = (h, start) => {
  const re = /<\/?div\b[^>]*>/g; re.lastIndex = start; let d = 0, m;
  while ((m = re.exec(h))) { if (m[0][1] === '/') { d--; if (d === 0) return re.lastIndex; } else d++; }
  return -1;
};
const txt = h => String(h).replace(/<[^>]+>/g, ' ').replace(/&#36;/g, '$').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const semP = h => String(h).replace(/<\/?p\b[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

function parse(sec) {
  const ebm = sec.match(/<div class="eyebrow([^"]*)">([\s\S]*?)<\/div>/);
  const tm = sec.match(/<h2 class="title">([\s\S]*?)<\/h2>/);
  const bi = tm ? sec.indexOf(tm[0]) + tm[0].length : (ebm ? sec.indexOf(ebm[0]) + ebm[0].length : 0);
  const fim = sec.lastIndexOf('</div>');
  return { sec, eb: ebm ? ebm[2].trim() : '', ebc: ebm ? ebm[1].trim() : '', ebFull: ebm ? ebm[0] : '', title: tm ? tm[1].trim() : '', titleFull: tm ? tm[0] : '', body: sec.slice(bi, fim), fim };
}
const novoSlide = (eb, ebc, title, body) => `
      <section class="slide">
        <div class="slide-inner">
          <div class="eyebrow${ebc ? ' ' + ebc : ''}">${eb}</div>
          <h2 class="title">${title}</h2>
          ${body}
        </div>
      </section>
`;

// ---------- prática: extrai as questões (mq) e as devolve sem resposta ----------
function extraiQuestoes(p) {
  let rest = p.body; const mqs = [];
  for (;;) {
    const i = rest.indexOf('<div class="mq"'); if (i < 0) break;
    const j = balanced(rest, i); if (j < 0) break;
    mqs.push(rest.slice(i, j)); rest = rest.slice(0, i) + rest.slice(j);
  }
  let pre = rest.trim();
  const lm = pre.match(/<p class="lede">([\s\S]*?)<\/p>/);
  let stem = lm ? lm[1].trim() : '';
  if (lm) pre = pre.replace(lm[0], '').trim();
  if (!/<(svg|table|img|figure|pre)\b/.test(pre) && !txt(pre)) pre = '';
  return mqs.map((mq, k) => {
    const a = +(mq.match(/data-a="(\d+)"/) || [0, 0])[1];
    const opts = [...mq.matchAll(/<button class="choice mqo"[^>]*>([\s\S]*?)<\/button>/g)].map(m => m[1].trim());
    const pm = mq.match(/<p style="font-weight:700[^"]*">([\s\S]*?)<\/p>/);
    let prompt = pm ? pm[1].trim() : '';
    if (/^(Escolha|Marque|Assinale|Selecione)\b/i.test(txt(prompt))) prompt = '';
    const am = mq.match(/<div class="answer">([\s\S]*)<\/div>\s*<\/div>\s*$/);
    const com = semP(am ? am[1] : '').replace(/<strong>\s*Alternativa\s*[A-E]\.?\s*<\/strong>\.?/gi, '').replace(/\s+/g, ' ').trim();
    return { pre: k === 0 ? pre : '', stem: [k === 0 ? stem : '', prompt].filter(Boolean).join(' '), opts, a, com };
  }).filter(q => q.opts.length);
}
const questaoHtml = (n, q) => `<div class="card" style="margin-top:8px;">${q.pre ? `<div style="margin-bottom:6px;">${q.pre}</div>` : ''}<p style="font-weight:700;font-size:.95rem;margin:0 0 6px;">${n}. ${q.stem || 'Escolha a alternativa correta.'}</p><ol type="A" style="margin:0 0 0 1.2rem;padding:0;font-size:.92rem;line-height:1.7;">${q.opts.map(o => `<li>${o}</li>`).join('')}</ol></div>`;

// ---------- exemplo: etapas reveladas uma a uma ----------
function comPassos(p, modo) {
  const idx = p.body.indexOf('<div class="step-row'); if (idx < 0) return null;
  const cs = p.body.lastIndexOf('<div style="display:flex;flex-direction:column', idx);
  if (cs < 0) return null;
  const ce = balanced(p.body, cs); if (ce < 0 || ce < idx) return null;
  let cont = p.body.slice(cs, ce); let n = 0;
  cont = cont.replace(/<div class="step-row">/g, () => `<div class="step-row rv${modo === 'exemplo' && n++ === 0 ? ' on' : ''}">`);
  let after = p.body.slice(ce), callout = '';
  const ci = after.indexOf('<div class="callout success"');
  if (ci >= 0) { const cend = balanced(after, ci); if (cend > 0) { callout = after.slice(ci, cend); after = after.slice(0, ci) + after.slice(cend); } }
  const rotulo = modo === 'exemplo' ? 'Mostrar próxima etapa' : 'Revelar uma etapa';
  const aviso = modo === 'guiada' ? `<p class="hint" style="margin-top:2px;">Pare e tente sozinho (ou em dupla) por 1 minuto. Revele uma etapa por vez só para conferir o seu caminho.</p>` : '';
  return p.body.slice(0, cs) + aviso + `<div data-rv>${cont}${callout ? `<div class="rv">${callout}</div>` : ''}<button class="reveal rv-btn" type="button" data-label="${rotulo}">${rotulo} →</button></div>` + after;
}

function converter(html, arquivo) {
  if (html.includes('data-rv') || html.includes('id="padrao-js"')) return { html, estado: 'ja-padrao' };
  const ini = html.indexOf('<section class="slide'); const fim = html.lastIndexOf('</section>') + '</section>'.length;
  if (ini < 0 || fim <= ini) return { html, estado: 'sem-slides' };
  const head = html.slice(0, ini), tail = html.slice(fim);
  const secs = html.slice(ini, fim).match(/<section class="slide[^"]*">[\s\S]*?<\/section>/g) || [];
  if (secs.length < 4) return { html, estado: 'curto' };
  const rel = path.relative(raiz, arquivo).replace(/\\/g, '/');
  const humanas = HUMANAS.test('/' + rel);

  // ---- classificação
  const g = { capa: null, roteiro: [], obj: [], gancho: [], expl: [], exem: [], prat: [], cuid: [], quiz: [], sint: [], refs: [] };
  secs.forEach((s, i) => {
    if (i === 0) { g.capa = s; return; }
    const p = parse(s); const e = txt(p.eb);
    if (/^Roteiro/i.test(e)) g.roteiro.push(p);
    else if (/^Objetivos/i.test(e)) g.obj.push(p);
    else if (/^Para in[ií]cio de conversa/i.test(e)) g.gancho.push(p);
    else if (/^Exemplo/i.test(e)) g.exem.push(p);
    else if (/^Desafio final/i.test(e) && s.includes('class="qz')) g.quiz.push(p);
    else if (/^S[ií]ntese/i.test(e)) g.sint.push(p);
    else if (/^Para continuar/i.test(e)) g.refs.push(p);
    else if (/^Cuidado/i.test(e)) g.cuid.push(p);
    else if (s.includes('class="mq"')) g.prat.push(p);
    else g.expl.push(p);
    p.pos = i;
  });
  // posição original para manter a ordem entre explicações e exemplos
  const meio = [...g.expl, ...g.exem].sort((a, b) => a.pos - b.pos);
  const capa = parse(g.capa.replace('<section class="slide active">', '<section class="slide active">'));
  const h1m = g.capa.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!h1m) return { html, estado: 'capa-desconhecida' };
  const subm = g.capa.match(/<p class="subtitle"[^>]*>([\s\S]*?)<\/p>/);
  const badm = g.capa.match(/<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;">([\s\S]*?)<\/div>/);
  const ebm = g.capa.match(/<div class="eyebrow[^"]*">([\s\S]*?)<\/div>/);
  const siIni = g.capa.indexOf('>', g.capa.indexOf('<div class="slide-inner"')) + 1;
  const decor = ebm ? g.capa.slice(siIni, g.capa.indexOf(ebm[0])).trim() : '';

  // pergunta inicial: tira do "Para início de conversa", sem criar texto
  let pergunta = '';
  const gl = g.gancho[0] && g.gancho[0].body.match(/<p class="lede">([\s\S]*?)<\/p>/);
  if (gl) {
    const inteiro = gl[1].trim();
    if (txt(inteiro).length <= 170) pergunta = inteiro;
    else { const fr = txt(inteiro).split(/(?<=[.!?])\s+/).filter(x => x.includes('?')); if (fr.length) pergunta = fr[fr.length - 1]; }
  }
  const slugArq = path.basename(path.dirname(arquivo)) + ' ' + path.basename(arquivo, '.html').replace(/^aula-?\d*-?/, '');
  const titulos = meio.slice(0, 4).map(p => p.title).join(' ');
  let cena = escolheCena(slugArq.replace(/-/g, ' '));
  if (cena === 'natureza') cena = escolheCena(h1m[1]);
  if (cena === 'natureza') cena = escolheCena(h1m[1], subm ? subm[1] : '', titulos);

  const porMateria = { arte: 'arte', 'educacao-fisica': 'esporte', filosofia: 'baloes', fisica: 'energia', historia: 'linha', biologia: 'celula', ciencias: 'celula', quimica: 'lab', geografia: 'mapa', ingles: 'baloes', sociologia: 'pessoas' };
  const topo = rel.split('/')[1];
  if (rel.startsWith('aulas/') && porMateria[topo]) cena = porMateria[topo];

  const abertura = `
      <!-- ABERTURA -->
      <section class="slide active">
        <div class="slide-inner" style="display:flex;flex-direction:column;justify-content:center;position:relative;">
          ${decor}
          <div class="eyebrow">${ebm ? ebm[1] : ''}</div>
          <div class="grid2" style="align-items:center;gap:18px;">
            <div>
              <h1 class="disp" style="font-size:clamp(1.8rem,4.2vw,3rem);font-weight:900;line-height:1.02;margin:0 0 10px;">${h1m[1]}</h1>
              ${subm ? `<p class="subtitle" style="font-size:clamp(.98rem,1.6vw,1.15rem);">${subm[1]}</p>` : ''}
              ${pergunta ? `<p class="hint" style="margin:6px 0 0;"><strong>Pense nisto:</strong> ${pergunta}</p>` : ''}
              ${badm ? `<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;">${badm[1]}</div>` : ''}
              <button class="reveal" style="margin-top:18px;width:fit-content;" onclick="goTo(1)">Começar a aula →</button>
            </div>
            ${P.figura(cena, 'Ilustração original de contexto.')}
          </div>
        </div>
      </section>
`;

  // ---- conhecimentos prévios (reaproveita o "Para início de conversa")
  const previos = g.gancho.map(p => novoSlide('Conhecimentos prévios', 'growth', p.title, p.body));

  // ---- objetivos (mantém)
  const objetivos = g.obj.map(p => p.sec.replace(/<\/section>\s*$/, '</section>'));

  // ---- explicações + exemplos (etapas reveladas); o último exemplo vira prática guiada se houver 2+
  let guiadaSlide = '';
  const exemIdx = meio.map((p, i) => g.exem.includes(p) ? i : -1).filter(i => i >= 0);
  const ultimo = exemIdx.length >= 2 ? exemIdx[exemIdx.length - 1] : -1;
  const meioHtml = [];
  meio.forEach((p, i) => {
    if (!g.exem.includes(p)) { meioHtml.push(p.sec); return; }
    const modo = i === ultimo ? 'guiada' : 'exemplo';
    const corpo = comPassos(p, modo);
    if (corpo == null) { meioHtml.push(novoSlide(txt(p.eb).replace(/^Exemplo resolvido.*/i, 'Exemplo resolvido'), p.ebc, p.title, p.body)); return; }
    if (modo === 'guiada') guiadaSlide = novoSlide('Prática guiada', 'growth', p.title, corpo);
    else meioHtml.push(novoSlide('Exemplo resolvido passo a passo', p.ebc, p.title, corpo));
  });

  // ---- prática: independente (sem resposta) + correção
  let prat = [...g.prat];
  let guiadaMq = '';
  if (!guiadaSlide && prat.length) {   // só 1 exemplo: a 1ª questão (com conferência na hora) faz o papel de prática guiada
    const p0 = prat.shift();
    guiadaMq = novoSlide('Prática guiada', 'growth', p0.title, `<p class="hint" style="margin-top:-2px;">Tente primeiro; depois toque numa alternativa para conferir.</p>` + p0.body);
  }
  const qsTodas = []; const independentes = [];
  const nome = humanas ? 'Atividade de aplicação' : 'Prática independente';
  const aviso = `<p class="hint">Resolva no caderno. As respostas estão no slide de correção comentada.</p>`;
  const fila = [];   // questões simples (sem figura/tabela de apoio) vão de 2 em 2 por slide; as com apoio ficam sozinhas
  const despeja = () => {
    for (let i = 0; i < fila.length; i += 2) {
      const par = fila.slice(i, i + 2);
      independentes.push(novoSlide(nome, 'primary', par.length === 1 ? par[0].titulo : 'Agora é com você',
        aviso + `<div class="grid2" style="margin-top:6px;">${par.map(x => questaoHtml(x.n, x.q)).join('\n')}</div>`));
    }
    fila.length = 0;
  };
  prat.forEach(p => {
    const qs = extraiQuestoes(p); if (!qs.length) { despeja(); independentes.push(p.sec); return; }
    const ehEstilo = /SAEB|ENEM/i.test(txt(p.eb));
    qs.forEach(q => {
      const n = qsTodas.length + 1; qsTodas.push(q);
      if (q.pre || ehEstilo) { despeja(); independentes.push(novoSlide(ehEstilo ? nome + ' · ' + txt(p.eb) : nome, 'primary', p.title, aviso + questaoHtml(n, q))); }
      else fila.push({ n, q, titulo: p.title });
    });
  });
  despeja();
  const correcao = [];
  for (let i = 0; i < qsTodas.length; i += 4) {
    correcao.push(novoSlide('Correção comentada', 'success', i === 0 ? 'Conferindo as respostas' : 'Conferindo as respostas (continuação)',
      `<div class="grid2" style="margin-top:6px;">${qsTodas.slice(i, i + 4).map((q, k) => P.card(`<strong>${i + k + 1}. Alternativa ${'ABCDE'[q.a] || '?'}</strong><p style="font-size:.86rem;margin-top:6px;">${q.com}</p>`, 'success')).join('\n')}</div>`));
  }

  // ---- cuidados, síntese (+ pergunta de revisão), exit ticket, reflexão, referências
  const cuidados = g.cuid.map(p => p.sec);
  const sintese = g.sint.map(p => {
    const rev = pergunta ? `<div class="callout success" style="margin-top:12px;"><h4>Pergunta de revisão</h4><p>Voltando ao início da aula: ${pergunta}</p></div>` : '';
    const sec = p.sec.replace(p.ebFull, p.ebFull).replace(p.titleFull, p.titleFull.replace('A ideia central', 'Três ideias para levar'));
    return rev ? sec.slice(0, sec.lastIndexOf('</div>')) + rev + '\n        </div>\n      </section>' : sec;
  });
  const exit = g.quiz.map(p => p.sec.replace(p.ebFull, p.ebFull.replace(/Desafio final/, 'Exit ticket')).replace(p.titleFull, p.titleFull.replace('Quiz interativo', 'Questões de saída')));
  const reflexao = P.reflexao();
  const refs = g.refs.map(p => p.sec);

  const lista = [abertura, ...previos, ...objetivos, ...meioHtml, guiadaSlide, guiadaMq, ...independentes, ...correcao, ...cuidados, ...sintese, ...exit, reflexao, ...refs].filter(Boolean);
  const N = (lista.join('\n').match(/<section class="slide/g) || []).length;
  let out = head + lista.join('\n\n      ') + tail;
  out = out.replace(/(<div class="rail-count"[^>]*>)\s*\d+\s*\/\s*\d+/, (m, a) => a + '1 / ' + N);
  const js = `<script id="padrao-js">(function(){${P.EXTRA}})();</script>\n`;
  out = out.includes('</body>') ? out.replace('</body>', js + '</body>') : out.replace(/\s*$/, '\n') + js;
  return { html: out, estado: 'convertida', slides: N, antes: secs.length, cena, qs: qsTodas.length };
}

// ---------- varredura ----------
const walk = d => fs.existsSync(d) ? fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]) : [];
const arquivos = ['aulas', 'educacao-financeira', 'ena-profmat'].flatMap(d => walk(path.join(raiz, d)))
  .filter(f => f.endsWith('.html') && /^aula/.test(path.basename(f)) && !/atividade|infografico/.test(f.replace(/\\/g, '/')))
  .filter(f => !so || f.replace(/\\/g, '/').includes(so));
const cont = {}; const lista = [];
for (const f of arquivos) {
  const h = fs.readFileSync(f, 'utf8');
  const r = converter(h, f);
  cont[r.estado] = (cont[r.estado] || 0) + 1;
  if (r.estado === 'convertida') { lista.push([path.relative(raiz, f), r.antes, r.slides, r.cena, r.qs]); if (!seco) fs.writeFileSync(f, r.html); }
  else if (r.estado !== 'ja-padrao') console.log('  ·', r.estado, path.relative(raiz, f));
}
console.log('reestruturar:', cont, seco ? '(simulação, nada gravado)' : '');
if (args.includes('--lista')) lista.forEach(l => console.log(l.join(' | ')));
