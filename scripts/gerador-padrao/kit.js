// Kit da ESTRUTURA PADRÃO de aulas (Exatas e Humanas) — ver docs/estrutura-aulas.md e a memória "estrutura-padrao-aulas-slides".
// Reaproveita o kit do 9º ano (mini-linguagem $...$, slides, quiz) e acrescenta: abertura com imagem, conhecimentos prévios, explicação com figura,
// exemplo passo a passo (etapas reveladas), prática guiada com dicas, prática independente SEM resposta + correção comentada, síntese e exit ticket.
// Cuidado nos textos: "R$" só com número logo depois (ou "R&#36;"); sem barras invertidas.
const K = require('../gerador-9ano/kit.js');
const { sl, lede, card, callout, g2, tbl, checks, mini } = K;
const { cenas } = require('./ilus.js');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

/** figura de contextualização: cena da biblioteca (chave) ou SVG pronto; legenda explica a origem (ilustração original) */
const figura = (cena, legenda = '', max = '420px') => {
  const inner = typeof cena === 'function' ? cena() : (cenas[cena] ? cenas[cena]() : cena);
  return `<figure class="fig-ctx" style="margin:0;text-align:center;"><svg viewBox="0 0 320 200" style="width:100%;max-width:${max};height:auto;display:block;margin:0 auto;background:var(--surface);border:1px solid var(--line);border-radius:14px;" role="img" aria-label="${esc(legenda || 'Ilustração de contexto')}">${inner}</svg>${legenda ? `<figcaption style="font-size:.78rem;color:var(--ink-faint);margin-top:4px;">${legenda}</figcaption>` : ''}</figure>`;
};

/** 1 · Abertura (primeiro slide, com imagem de contextualização e pergunta instigante) */
const abertura = ({ eyebrow, h1, pergunta, cena, legenda, badges = [] }) => `
      <!-- ABERTURA -->
      <section class="slide active">
        <div class="slide-inner" style="display:flex;flex-direction:column;justify-content:center;">
          <div class="eyebrow">${eyebrow}</div>
          <div class="grid2" style="align-items:center;gap:18px;">
            <div>
              <h1 class="disp" style="font-size:clamp(1.9rem,4.6vw,3.3rem);font-weight:900;line-height:1.02;margin:0 0 10px;">${h1}</h1>
              <p class="subtitle" style="font-size:clamp(1rem,1.7vw,1.2rem);">${pergunta}</p>
              <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px;">${badges.map(([t, c]) => K.badge ? K.badge(t, c) : `<span class="badge">${t}</span>`).join('')}</div>
              <button class="reveal" style="margin-top:18px;width:fit-content;" onclick="goTo(1)">Começar a aula →</button>
            </div>
            ${figura(cena, legenda)}
          </div>
        </div>
      </section>
`;

/** 2 · Conhecimentos prévios */
const previos = ({ titulo = 'O que você já sabe?', texto, mini: m, dupla, cena, legenda }) => sl('Conhecimentos prévios', titulo, `
          ${lede(texto)}
          ${g2(`<div>${mini(...m)}</div>`, `<div>${card(`<strong>Converse em dupla</strong><p style="font-size:.9rem;margin-top:8px;">${dupla}</p>`, 'growth')}${cena ? figura(cena, legenda, '260px') : ''}</div>`)}`, { cls: 'growth' });

/** 3 · Objetivos (2–3, verbos observáveis) */
const objetivos = (lista, dica) => K.objetivosSlide(lista, 'Como vamos trabalhar', dica, 'primary');

/** 4 · Explicação: texto + figura/diagrama */
const explicacao = ({ eb = 'Explicação', titulo, html, fig, cls = 'primary' }) => sl(eb, titulo, fig ? g2(`<div>${html}</div>`, `<div>${fig}</div>`) : html, { cls });

/** 5 · Exemplo resolvido: etapas reveladas uma a uma; resposta e verificação só no fim */
const exemploPassos = ({ titulo, enun, passos, resposta, verif = '', fig, cls = 'decay' }) => sl('Exemplo resolvido passo a passo', titulo, `
          ${lede(enun)}
          ${fig ? g2(rvBloco(passos, resposta, verif), `<div>${fig}</div>`) : rvBloco(passos, resposta, verif)}`, { cls });
const rvBloco = (passos, resposta, verif) => `<div data-rv>
            <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px;">
              ${passos.map(([t, h], i) => `<div class="step-row rv${i === 0 ? ' on' : ''}"><span class="badge">${i + 1}</span><div><strong>${t}</strong>${h ? `<div class="hint">${h}</div>` : ''}</div></div>`).join('\n              ')}
            </div>
            <div class="rv">${callout('Resposta', resposta, 'success')}${verif ? `<p class="hint" style="margin-top:6px;"><strong>Verificação:</strong> ${verif}</p>` : ''}</div>
            <button class="reveal rv-btn" type="button" data-label="Mostrar próxima etapa">Mostrar próxima etapa →</button>
          </div>`;

/** 6 · Prática guiada: tente primeiro; dicas graduais; correção comentada */
const guiada = ({ titulo, enun, dicas, resolucao, fig }) => sl('Prática guiada', titulo, `
          ${lede(enun)}
          <p class="hint" style="margin-top:-4px;">Pare e tente sozinho (ou em dupla) por 1 minuto. Peça uma dica só se precisar.</p>
          ${g2(`<div data-rv>
            <div style="display:flex;flex-direction:column;gap:8px;margin-top:6px;">
              ${dicas.map((d, i) => `<div class="step-row rv"><span class="badge">Dica ${i + 1}</span><div>${d}</div></div>`).join('\n              ')}
            </div>
            <div class="rv">${callout('Correção comentada', resolucao, 'success')}</div>
            <button class="reveal rv-btn" type="button" data-label="Próxima dica">Pedir uma dica →</button>
          </div>`, fig ? `<div>${fig}</div>` : '')}`, { cls: 'growth' });

/** 7 · Prática independente: questões SEM resposta (a correção vem em slide posterior) */
const questao = (n, [enun, opts]) => `<div class="card" style="margin-top:8px;"><p style="font-weight:700;font-size:.95rem;margin:0 0 6px;">${n}. ${enun}</p><ol type="A" style="margin:0 0 0 1.2rem;padding:0;font-size:.92rem;line-height:1.7;">${opts.map(o => `<li>${o}</li>`).join('')}</ol></div>`;
const praticaSlides = (qs, titulo = 'Agora é com você', porSlide = 2) => {
  const out = [];
  for (let i = 0; i < qs.length; i += porSlide) {
    out.push(sl('Prática independente', i === 0 ? titulo : titulo + ' (continuação)', `
          <p class="hint">Resolva no caderno. As respostas estão no slide de correção.</p>
          <div class="grid2" style="margin-top:6px;">${qs.slice(i, i + porSlide).map((q, k) => questao(i + k + 1, q)).join('\n')}</div>`, { cls: 'primary' }));
  }
  return out.join('');
};
const correcao = qs => sl('Correção comentada', 'Conferindo as respostas', `
          <div class="grid2" style="margin-top:6px;">${qs.map(([, opts, a, com], i) => card(`<strong>${i + 1}. Alternativa ${'ABCDE'[a]}</strong><p style="font-size:.86rem;margin-top:6px;">${com}</p>`, 'success')).join('\n')}</div>`, { cls: 'success' });

/** 8 · Síntese (3 ideias + pergunta de revisão) e exit ticket */
const sintese = ({ ideias, pergunta, retomada = '' }) => sl('Síntese', 'Três ideias para levar', `
          <div class="grid3" style="margin-top:10px;">${ideias.map(([b, t]) => `<div class="card"><span class="badge">${b}</span><p style="font-size:.88rem;margin-top:8px;">${t}</p></div>`).join('')}</div>
          ${retomada ? `<p class="hint" style="margin-top:10px;">${retomada}</p>` : ''}
          ${callout('Pergunta de revisão', pergunta, 'success')}`, { cls: 'success' });
const exitTicket = qs => K.quiz(qs).replace('Desafio final', 'Exit ticket').replace('Quiz interativo', 'Questões de saída');
const reflexao = (texto = 'O que ainda ficou difícil?') => sl('Questão de saída', texto, `
          <p class="lede">Escolha como você saiu desta aula (isso fica só no seu aparelho):</p>
          <div class="grid3" style="margin-top:10px;">
            <button class="choice rf-btn" data-v="entendi">😀 Entendi bem e consigo explicar</button>
            <button class="choice rf-btn" data-v="duvida">🤔 Entendi, mas ainda tenho dúvidas</button>
            <button class="choice rf-btn" data-v="dificil">😕 Preciso rever este assunto</button>
          </div>
          <p class="hint rf-msg" style="margin-top:10px;"></p>`, { cls: 'primary' });

/** Humanas · fonte/evidência/estudo de caso com perguntas orientadoras */
const fonte = ({ titulo, trecho, proced, perguntas, cena, legenda }) => sl('Fonte e evidência', titulo, `
          ${g2(`<div><blockquote class="card" style="margin:0;font-size:1.02rem;line-height:1.6;border-left:4px solid var(--primary);">${trecho}<footer class="hint" style="margin-top:8px;">${proced}</footer></blockquote>${cena ? `<div style="margin-top:10px;">${figura(cena, legenda || 'Ilustração original de apoio ao texto.', '260px')}</div>` : ''}</div>`,
    `<div data-rv><div style="display:flex;flex-direction:column;gap:8px;">${perguntas.map(([p, c], i) => `<div class="step-row rv${i === 0 ? ' on' : ''}"><span class="badge">${i + 1}</span><div><strong>${p}</strong><div class="hint">${c}</div></div></div>`).join('')}</div><button class="reveal rv-btn" type="button" data-label="Próxima pergunta">Próxima pergunta →</button></div>`)}`, { cls: 'decay' });

/** Humanas · análise/comparação (duas perspectivas) */
const comparar = ({ titulo, pergunta, a, b, fecho }) => sl('Análise e comparação', titulo, `
          ${lede(pergunta)}
          ${g2(card(`<strong>${a[0]}</strong><p style="font-size:.9rem;margin-top:8px;">${a[1]}</p>`, 'primary'), card(`<strong>${b[0]}</strong><p style="font-size:.9rem;margin-top:8px;">${b[1]}</p>`, 'decay'))}
          ${fecho ? callout('Para concluir com evidências', fecho, 'success') : ''}`, { cls: 'growth' });

/** JS comum da estrutura padrão (vai dentro do IIFE do deck): estilos das revelações, etapas reveladas e autoavaliação de saída */
const EXTRA = `
var st = document.createElement('style');
st.textContent = '.rv{display:none;} div.rv.on{display:block;} .step-row.rv.on{display:flex;} .rv-btn{margin-top:10px;} .rf-btn{text-align:left;} .rf-btn.sel{border-color:var(--primary);background:var(--primary-soft);}';
document.head.appendChild(st);
document.querySelectorAll('[data-rv]').forEach(function(box){
  var itens = [].slice.call(box.querySelectorAll('.rv')), btn = box.querySelector('.rv-btn');
  function restam(){ return itens.some(function(x){ return !x.classList.contains('on'); }); }
  if(!restam() && btn) btn.style.display = 'none';
  if(btn) btn.addEventListener('click', function(e){
    e.stopPropagation();
    var p = itens.filter(function(x){ return !x.classList.contains('on'); })[0];
    if(p) p.classList.add('on');
    if(!restam()) btn.style.display = 'none';
  });
});
document.querySelectorAll('.rf-btn').forEach(function(b){
  b.addEventListener('click', function(){
    b.parentNode.querySelectorAll('.rf-btn').forEach(function(x){ x.classList.remove('sel'); }); b.classList.add('sel');
    var m = b.parentNode.parentNode.querySelector('.rf-msg');
    if(m) m.textContent = b.dataset.v === 'entendi' ? 'Ótimo! Tente explicar o assunto para um colega.' : b.dataset.v === 'duvida' ? 'Anote a dúvida para perguntar na próxima aula.' : 'Sem problema: revise a explicação e refaça os exemplos.';
    try{ localStorage.setItem('saida:' + location.pathname, b.dataset.v); }catch(e){}
  });
});
`;

module.exports = Object.assign({}, K, { figura, abertura, previos, objetivos, explicacao, exemploPassos, guiada, praticaSlides, correcao, sintese, exitTicket, reflexao, fonte, comparar, EXTRA, cenas });
