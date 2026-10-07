// Regenera as atividades avulsas do 9º ano (aulas/9-ano/2-tri/recomposicao-matematica/*-atividade-pratica.html)
// a partir dos exercícios e problemas que moram DENTRO dos slides — os slides nunca são alterados.
// Uso (na raiz do site): node scripts/gerar-atividades-9ano.js .
const fs = require('fs'), path = require('path');
const site = process.argv[2];
const dir = path.join(site, 'aulas/9-ano/2-tri/recomposicao-matematica');
const refPath = path.join(site, 'aulas/3-ano/3-tri/sequencias/atividade-pratica.html');
const ref = fs.readFileSync(refPath, 'utf8');

// ---- pecas reaproveitadas da atividade de referencia (mesmo visual/tema/contrato) ----
const style = ref.match(/<style>[\s\S]*?<\/style>/)[0];
const fonts = ref.slice(ref.indexOf('</style>') + 8, ref.indexOf('<button type="button" id="themeToggle"')).trim();
const toggle = ref.match(/<button type="button" id="themeToggle"[\s\S]*?<\/button>/)[0];
const scripts = [...ref.matchAll(/<script>[\s\S]*?<\/script>/g)].map(m => m[0]);
const themeScript = scripts.find(s => s.includes("getElementById('themeToggle')"));
const hookScript = scripts.find(s => s.includes('window.reportarConclusao = function'));
if (!themeScript || !hookScript) throw new Error('scripts de referencia nao encontrados');

const extraCss = `
<style>
  .app{ max-width:820px; }
  .chips{ display:flex; flex-wrap:wrap; gap:8px; margin:0 0 22px; }
  .chips a{ text-decoration:none; font-family:'JetBrains Mono',monospace; font-size:.72rem; font-weight:700; color:var(--primary); background:var(--primary-soft); border-radius:999px; padding:.4em .9em; }
  .chips a:hover{ filter:brightness(.95); }
  .aula-sec{ margin:34px 0 8px; scroll-margin-top:16px; }
  .aula-sec h2{ font-size:clamp(1.2rem,2.6vw,1.6rem); font-weight:900; margin:0 0 4px; }
  .aula-sec .kicker{ font-family:'JetBrains Mono',monospace; font-size:.72rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:var(--primary); margin:0 0 4px; }
  .aula-sec .objetivo{ font-size:.9rem; color:var(--ink-soft); margin:6px 0 0; }
  .sec-label{ display:flex; align-items:center; gap:10px; margin:22px 0 10px; font-family:'Archivo',sans-serif; font-weight:800; font-size:.8rem; letter-spacing:.06em; text-transform:uppercase; color:var(--ink-soft); }
  .sec-label::after{ content:''; flex:1; height:1px; background:var(--line); }
  .q .qtext{ margin:10px 0 0; }
  .q .ans-label{ font-family:'JetBrains Mono',monospace; font-size:.68rem; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:var(--success); margin:0 0 4px; }
  .q .grade{ display:none; gap:8px; flex-wrap:wrap; align-items:center; margin-top:12px; }
  .q .grade.show{ display:flex; }
  .q .grade span.ask{ font-size:.82rem; color:var(--ink-soft); font-weight:700; }
  .q.g-ok{ border-color:color-mix(in srgb, var(--success) 45%, var(--line)); }
  .q.g-no{ border-color:color-mix(in srgb, var(--danger) 40%, var(--line)); }
  .q .stamp{ font-size:.82rem; font-weight:700; margin-top:10px; display:none; }
  .q.g-ok .stamp{ display:block; color:var(--success); }
  .q.g-no .stamp{ display:block; color:var(--danger); }
  .finish-card{ text-align:center; }
  .finish-card .btn{ margin-top:6px; }
  .progress{ height:8px; border-radius:999px; background:var(--line); overflow:hidden; margin:0 0 6px; }
  .progress > i{ display:block; height:100%; width:0; background:var(--primary); transition:width .3s ease; }
</style>`;

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = s => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').trim();

const files = fs.readdirSync(dir).filter(n => /^aula-\d+-.*\.html$/.test(n) && !/atividade/.test(n)).sort();
const out = [];

files.forEach((fname, bi) => {
  const html = fs.readFileSync(path.join(dir, fname), 'utf8');
  const blocoTitulo = strip(html.match(/<header class="masthead[^>]*>[\s\S]*?<h1>([\s\S]*?)<\/h1>/)[1]);
  const blocoNum = +(html.match(/Bloco (\d+) de/)[1]);
  const aulasLabel = (html.match(/<span class="badge">(Aulas? [^<]+)<\/span>/) || [])[1] || '';
  const habil = (html.match(/<span class="badge">(Habilidade [^<]+)<\/span>/) || [])[1] || '';

  const articles = [...html.matchAll(/<article class="lesson[^"]*" id="(aula-\d+)">([\s\S]*?)<\/article>/g)];
  let total = 0, qid = 0;
  const secHtml = articles.map(a => {
    const id = a[1], body = a[2];
    const kicker = strip(body.match(/<p class="kicker">([\s\S]*?)<\/p>/)[1]);
    const titulo = strip(body.match(/<h2>([\s\S]*?)<\/h2>/)[1]);
    const objetivo = (body.match(/<p class="objetivo">([\s\S]*?)<\/p>/) || [])[1] || '';
    const sects = [...body.matchAll(/<details class="sect"><summary><span>([^<]+)<\/span><span class="count">(\d+)<\/span><\/summary><ol class="qa">([\s\S]*?)<\/ol><\/details>/g)];
    let n = 0;
    const blocks = sects.map(s => {
      const nome = s[1], itens = [...s[3].matchAll(/<li>([\s\S]*?)<details class="ans"><summary>([^<]*)<\/summary>([\s\S]*?)<\/details><\/li>/g)];
      if (itens.length !== +s[2]) throw new Error(fname + ' ' + id + ' ' + nome + ': esperado ' + s[2] + ' itens, extraidos ' + itens.length);
      const cards = itens.map(it => {
        n++; qid++; total++;
        return `
  <div class="card q" data-id="${qid}">
    <span class="badge">${esc(nome === 'Problemas' ? 'Problema' : 'Exercício')} ${n}</span>
    <div class="qtext">${it[1].trim()}</div>
    <div class="btnrow"><button class="btn ghost" data-reveal="${qid}" type="button">Ver ${esc(it[2].toLowerCase())}</button></div>
    <div class="answer" id="ans${qid}"><p class="ans-label">${esc(it[2])}</p>${it[3].trim()}</div>
    <div class="grade" id="grade${qid}"><span class="ask">Você acertou?</span><button class="btn" data-grade="ok" data-q="${qid}" type="button">✔ Acertei</button><button class="btn ghost" data-grade="no" data-q="${qid}" type="button">✘ Errei</button></div>
    <div class="stamp" id="stamp${qid}"></div>
  </div>`;
      }).join('');
      return `\n  <div class="sec-label">${esc(nome)} · ${itens.length}</div>${cards}`;
    }).join('');
    return { id, kicker, titulo, html: `
<section class="aula-sec" id="${id}">
  <p class="kicker">${esc(kicker)}</p>
  <h2>${esc(titulo)}</h2>${objetivo ? `\n  <p class="objetivo">${objetivo}</p>` : ''}${blocks}
</section>` };
  });

  const chips = articles.map((a, i) => `<a href="#${secHtml[i].id}">${esc(secHtml[i].kicker)}</a>`).join('');
  const key = 'theme-pref-rec9-pratica-' + blocoNum;
  const themed = themeScript.replace(/(KEY\s*=\s*)['"][^'"]+['"]/, `$1'${key}'`);
  if (!themed.includes(key)) throw new Error('nao consegui trocar a chave de tema');

  const titleTag = `Exercícios e problemas — ${blocoTitulo} (9º ano)`;
  const page = `<title>${esc(titleTag)}</title>
${style}
${extraCss}
${fonts}

${toggle}

<div class="app">
  <div class="topbar">
    <div class="brand"><span class="dot"></span> Matemática · 9º ano · Recomposição · Atividade extra</div>
    <div class="score-pill">Acertos: <span id="scoreVal">0</span>/${total}</div>
  </div>

  <div class="eyebrow">Prática · Bloco ${blocoNum} de ${files.length} · ${esc(aulasLabel)}</div>
  <h1 class="title">Exercícios e problemas: <span style="color:var(--primary);">${esc(blocoTitulo)}</span></h1>
  <p class="subtitle">Os ${total} exercícios e problemas dos slides deste bloco${habil ? ' (' + esc(habil) + ')' : ''}, reunidos numa atividade só. Resolva no caderno, toque em "Ver resposta" para conferir e diga se acertou. No fim, a atividade registra seus acertos.</p>
  <div class="chips">${chips}</div>
  <div class="progress"><i id="bar"></i></div>
  <p class="hint" id="progTxt">0 de ${total} respondidos</p>
${secHtml.map(s => s.html).join('\n')}

<div class="card finish-card" id="finishCard">
  <h2 style="margin:0 0 6px;font-size:1.15rem;">Terminou?</h2>
  <p class="hint" id="finishTxt">Responda todos os itens para concluir automaticamente, ou conclua agora com o que já fez.</p>
  <button class="btn" id="concluirBtn" type="button">Concluir atividade</button>
</div>
</div>

${themed}

<script>
(function(){
  var TOTAL = ${total}, respondidas = 0, acertos = 0, finished = false;
  var scoreEl = document.getElementById('scoreVal'), bar = document.getElementById('bar'), prog = document.getElementById('progTxt');
  function update(){
    scoreEl.textContent = acertos;
    bar.style.width = (100 * respondidas / TOTAL) + '%';
    prog.textContent = respondidas + ' de ' + TOTAL + ' respondidos';
    if(respondidas === TOTAL) finish();
  }
  function finish(){
    if(finished) return; finished = true;
    var btn = document.getElementById('concluirBtn'); btn.disabled = true;
    document.getElementById('finishTxt').textContent = 'Atividade concluída: ' + acertos + ' de ' + TOTAL + ' acertos' + (respondidas < TOTAL ? ' (' + (TOTAL - respondidas) + ' sem responder)' : '') + '.';
    if(window.reportarConclusao) window.reportarConclusao(acertos, TOTAL);
  }
  document.querySelectorAll('button[data-reveal]').forEach(function(b){
    b.addEventListener('click', function(){
      var n = b.dataset.reveal;
      document.getElementById('ans' + n).classList.add('open');
      document.getElementById('grade' + n).classList.add('show');
      b.disabled = true;
    });
  });
  document.querySelectorAll('button[data-grade]').forEach(function(b){
    b.addEventListener('click', function(){
      var n = b.dataset.q, card = b.closest('.q');
      if(card.dataset.graded) return; card.dataset.graded = '1';
      var ok = b.dataset.grade === 'ok';
      card.classList.add(ok ? 'g-ok' : 'g-no');
      document.getElementById('stamp' + n).textContent = ok ? '✔ Marcado como acerto' : '✘ Marcado como erro — releia a resolução e tente de novo no caderno';
      card.querySelectorAll('[data-grade]').forEach(function(x){ x.disabled = true; });
      respondidas++; if(ok) acertos++;
      update();
    });
  });
  document.getElementById('concluirBtn').addEventListener('click', finish);
})();
</script>

${hookScript}
`;
  const outName = fname.replace(/\.html$/, '-atividade-pratica.html');
  fs.writeFileSync(path.join(dir, outName), page, 'utf8');
  out.push({ outName, titulo: `${aulasLabel} · Exercícios e problemas: ${blocoTitulo}`.replace(/^Aulas? /, m => m), total, aulas: articles.length });
  console.log(outName, '| aulas:', articles.length, '| itens:', total);
});
if (process.argv[3]) fs.writeFileSync(process.argv[3], JSON.stringify(out, null, 2));
