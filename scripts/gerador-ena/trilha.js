// Gera ena-profmat/trilha-de-estudo.html: trilha guiada de estudo cobrindo o edital do ENA/PROFMAT
// node scripts/gerador-ena/trilha.js   (rode depois de build.js; usa manifest.js)
const K = require('./kit.js');
const partes = require('./manifest.js');

const unidades = {}; partes.forEach(p => p.unidades.forEach(u => { unidades[u.dir.split('/')[1].slice(0, 2)] = u; }));
const num = d => d.dir.split('/')[1].slice(0, 2);

// itens do edital (letra, texto, unidades que os cobrem)
const EDITAL = [
  ['a', 'Proporcionalidade e porcentagem', ['01']],
  ['b', 'Equações e inequações do 1º grau; função afim', ['18', '07']],
  ['c', 'Equações e inequações do 2º grau; função quadrática', ['06', '07']],
  ['d', 'Teorema de Pitágoras', ['12']],
  ['e', 'Áreas e volumes', ['12', '14']],
  ['f', 'Razões trigonométricas', ['13']],
  ['g', 'Métodos de contagem', ['09']],
  ['h', 'Probabilidade', ['10']],
  ['i', 'Noções de estatística', ['11']],
  ['j', 'Triângulos: congruências e semelhanças', ['19', '12']],
  ['k', 'Progressões aritméticas e geométricas', ['08']],
  ['l', 'Conjuntos numéricos', ['17', '03']],
  ['m', 'Raciocínio lógico', ['04']],
  ['n', 'Equações e inequações racionais, irracionais e modulares', ['06', '05']]
];
const itensDe = {}; EDITAL.forEach(e => e[2].forEach(u => { (itensDe[u] = itensDe[u] || []).push(e[0]); }));
// prioridade segundo a incidência nas provas ENA 2025 e 2026 (questões por tema) e o edital
const PRIO = { '01': 'alta', '02': 'alta', '03': 'média', '04': 'alta', '05': 'média', '06': 'alta', '07': 'alta', '08': 'média', '09': 'média', '10': 'média', '11': 'média', '12': 'alta', '13': 'média', '14': 'média', '15': 'extra', '16': 'alta', '17': 'média', '18': 'média', '19': 'alta', '20': 'extra' };
const INC = { '01': 6, '02': 5, '03': 3, '04': 5, '05': 3, '06': 6, '07': 5, '08': 4, '09': 3, '10': 3, '11': 2, '12': 10, '13': 3, '14': 2 };
// fases da trilha, na ordem recomendada
const FASES = [
  { id: 'f1', nome: 'Fase 1 · Fundamentos numéricos', obj: 'Dominar números, intervalos, porcentagem, divisibilidade e conjuntos: a base de todo o resto.', un: ['17', '01', '02', '03'] },
  { id: 'f2', nome: 'Fase 2 · Álgebra básica', obj: 'Equações, inequações e sistemas do 1º grau, produtos notáveis, potências, radicais e módulo.', un: ['18', '05'] },
  { id: 'f3', nome: 'Fase 3 · Equações e funções', obj: '2º grau, Girard, sinal, equações racionais, irracionais e modulares; funções afim e quadrática.', un: ['06', '07'] },
  { id: 'f4', nome: 'Fase 4 · Raciocínio e padrões', obj: 'Lógica, contraexemplos e demonstração; progressões aritméticas e geométricas.', un: ['04', '08'] },
  { id: 'f5', nome: 'Fase 5 · Geometria plana', obj: 'Triângulos (congruência e semelhança), Pitágoras, áreas, círculo e os truques que valem pontos.', un: ['19', '12'] },
  { id: 'f6', nome: 'Fase 6 · Trigonometria e geometria espacial', obj: 'Razões trigonométricas, identidades, volumes e o recipiente inclinado.', un: ['13', '14'] },
  { id: 'f7', nome: 'Fase 7 · Contagem, probabilidade e estatística', obj: 'Princípio multiplicativo, anagramas, complementar, probabilidade e medidas estatísticas.', un: ['09', '10', '11'] },
  { id: 'f8', nome: 'Fase 8 · Matrizes e tópicos extras', obj: 'Matrizes e determinantes (bibliografia do edital) e os tópicos complementares.', un: ['20', '15'] },
  { id: 'f9', nome: 'Fase 9 · Estratégia e simulados', obj: 'Método de prova, gestão de tempo, folha de fórmulas e simulados cronometrados.', un: ['16'] }
];
const HORAS = u => u.aulas.length * 1.0 + 0.4 + 0.9 + 0.5; // aulas + guia + 3 atividades + revisão

const li = (u, f, rot, k) => `<li data-arq="${u.dir}${f}" data-k="${k}"><label><input type="checkbox" data-id="${num(u)}:${k}"> <a href="${u.dir.replace('ena-profmat/', '')}${f}">${rot}</a></label> <span class="st"></span></li>`;
function cartaoUnidade(u) {
  const n = num(u), prio = PRIO[n], h = HORAS(u), it = (itensDe[n] || []).map(x => `<span class="ed">${x}</span>`).join('');
  const aulas = u.aulas.map((a, i) => li(u, a[2], `${a[0]}: ${a[1]}`, 'a' + i)).join('');
  return `<div class="un" data-un="${n}" data-prio="${prio}" data-h="${h.toFixed(1)}">
    <div class="un-h"><div><b>${u.titulo}</b><div class="meta">${prio === 'extra' ? 'complementar' : 'prioridade ' + prio} · ≈ ${h.toFixed(1).replace('.', ',')} h${INC[n] ? ' · ' + INC[n] + ' questões nas provas 2025–26' : ''}${it ? ' · edital: ' + it : ''}</div></div><div class="un-p"><span class="un-bar"><i></i></span><span class="un-n"></span></div></div>
    <ol class="steps2">
      ${aulas}
      ${li(u, 'infografico.html', 'Guia visual (resumão)', 'g')}
      ${li(u, 'atividade-ena.html', 'Atividade: estilo ENA', 'e')}
      ${li(u, 'atividade-criativa.html', 'Atividade criativa', 'c')}
      ${li(u, 'atividade-pratica.html', 'Atividade prática (trilha)', 'p')}
      <li data-k="r"><label><input type="checkbox" data-id="${n}:r"> Refiz as questões que errei (página Revisão do site) e anotei o que aprendi</label></li>
    </ol>
  </div>`;
}
const fasesHTML = FASES.map((f, i) => `<details class="fase" data-fase="${f.id}" ${i < 2 ? 'open' : ''}>
  <summary><span class="fn">${f.nome}</span><span class="fp"><span class="un-bar"><i></i></span> <span class="fpn"></span></span></summary>
  <p class="obj">${f.obj}</p>
  <div class="semanas" data-semanas="${f.id}"></div>
  ${f.un.map(x => cartaoUnidade(unidades[x])).join('\n')}
  <div class="check">Ponto de controle: faça um <a href="../simulado.html">simulado</a> com as unidades desta fase e anote os erros. Meta: acertar pelo menos 70% antes de avançar.</div>
</details>`).join('\n');

const ediHTML = `<table class="tbl"><tr><th>Item do edital</th><th>Onde estudar</th></tr>${EDITAL.map(e => `<tr><td style="text-align:left;"><b>${e[0]})</b> ${e[1]}</td><td style="text-align:left;">${e[2].map(x => `<a href="#u${x}">${unidades[x].titulo}</a>`).join(' · ')}</td></tr>`).join('')}<tr><td style="text-align:left;"><b>Bibliografia</b> — matrizes, determinantes e sistemas</td><td style="text-align:left;"><a href="#u20">${unidades['20'].titulo}</a></td></tr></table>`;

const CSS = `<style>
  .tr-box{ border:1.5px solid var(--line-strong); border-radius:16px; padding:14px 16px; background:var(--surface); margin-bottom:14px; }
  .tr-box label{ font-size:.82rem; font-weight:700; color:var(--ink-soft); font-family:'Archivo',sans-serif; }
  .tr-box input[type=number]{ font:inherit; width:6rem; padding:.35em .5em; border-radius:10px; border:1.5px solid var(--line-strong); background:var(--surface); color:var(--ink); }
  .plan{ display:grid; grid-template-columns:repeat(auto-fit,minmax(12rem,1fr)); gap:8px; margin-top:10px; }
  .plan div{ border:1px solid var(--line); border-radius:12px; padding:8px 10px; font-size:.82rem; background:var(--surface-2); } .plan b{ display:block; font-size:.9rem; }
  details.fase{ border:1.5px solid var(--line-strong); border-radius:16px; padding:6px 14px 14px; margin:0 0 14px; background:var(--surface); }
  details.fase summary{ cursor:pointer; display:flex; gap:12px; justify-content:space-between; align-items:center; padding:10px 0; font-family:'Archivo',sans-serif; font-weight:800; font-size:1.02rem; flex-wrap:wrap; }
  .obj{ margin:0 0 8px; color:var(--ink-soft); font-size:.9rem; } .semanas{ font-size:.82rem; font-weight:700; color:var(--primary); margin-bottom:8px; }
  .un{ border:1px solid var(--line); border-radius:14px; padding:10px 12px; margin:10px 0; background:var(--surface-2); }
  .un.oculta{ display:none; }
  .un-h{ display:flex; justify-content:space-between; gap:10px; align-items:flex-start; flex-wrap:wrap; } .meta{ font-size:.76rem; color:var(--ink-soft); margin-top:2px; }
  .ed{ display:inline-block; background:var(--primary-soft); color:var(--primary); font-weight:800; border-radius:6px; padding:0 .4em; margin-left:2px; }
  .un-bar{ display:inline-block; width:90px; height:8px; border-radius:99px; background:var(--line); overflow:hidden; vertical-align:middle; } .un-bar i{ display:block; height:100%; width:0; background:var(--success); }
  .un-p{ display:flex; gap:6px; align-items:center; font-size:.76rem; color:var(--ink-soft); }
  ol.steps2{ list-style:none; margin:8px 0 0; padding:0; display:grid; gap:4px; } ol.steps2 li{ font-size:.88rem; } ol.steps2 a{ color:var(--primary); font-weight:700; text-decoration:none; } ol.steps2 a:hover{ text-decoration:underline; }
  .st{ font-size:.72rem; font-weight:700; color:var(--success); margin-left:4px; }
  .check{ margin-top:10px; padding:10px 12px; border-left:4px solid var(--growth); background:var(--growth-soft); border-radius:8px; font-size:.86rem; }
  .geral{ display:flex; align-items:center; gap:12px; flex-wrap:wrap; } .geral .un-bar{ width:220px; height:12px; }
  .chips2{ display:flex; gap:8px; flex-wrap:wrap; margin-top:8px; } .chips2 button{ font:inherit; font-weight:700; font-size:.8rem; padding:.35em .9em; border-radius:99px; border:1.5px solid var(--line-strong); background:var(--surface); color:var(--ink); cursor:pointer; } .chips2 button.on{ background:var(--primary); border-color:var(--primary); color:var(--primary-ink); }
  a[id^=u]{ scroll-margin-top:90px; }
  @media print{ details.fase{ break-inside:avoid; } details.fase > *{ display:block; } .chips2, .tr-box input{ display:none; } }
</style>`;

const body = `
${CSS}
<div class="tr-box">
  <div class="geral"><b>Seu progresso geral</b><span class="un-bar" id="gbar"><i></i></span><span id="gn" class="meta"></span><button class="btn ghost" id="zera" type="button" style="margin-left:auto;font-size:.75rem;">Zerar marcações</button></div>
  <p class="meta" style="margin:6px 0 0;">As marcações ficam salvas <b>neste aparelho</b>. Aulas, guias e atividades que você abre no site aparecem como “visto” automaticamente; as atividades mostram a sua nota.</p>
</div>

<div class="tr-box">
  <b>1 · Monte seu calendário</b>
  <div class="row" style="display:flex;gap:16px;flex-wrap:wrap;margin-top:8px;align-items:flex-end;">
    <div><label>Semanas até a prova<br><input type="number" id="pl-w" min="4" max="52" value="12"></label></div>
    <div><label>Horas de estudo por semana<br><input type="number" id="pl-h" min="1" max="40" value="6"></label></div>
  </div>
  <div class="chips2" id="pl-m"><button type="button" data-m="tudo" class="on">Trilha completa</button><button type="button" data-m="prio">Só prioridade alta e média</button><button type="button" data-m="alta">Só prioridade alta (modo emergência)</button></div>
  <p class="meta" id="pl-t" style="margin-top:10px;font-size:.84rem;"></p>
  <div class="plan" id="pl-r"></div>
</div>

<div class="tr-box">
  <b>2 · Cobertura do edital</b>
  <p class="meta" style="margin:4px 0 8px;">Cada item do edital do exame e a unidade deste site que o cobre.</p>
  ${ediHTML}
</div>

<b style="display:block;margin:6px 0 8px;">3 · A trilha, fase por fase</b>
<p class="meta" style="margin:0 0 10px;">Em cada unidade siga a ordem: <b>aulas → guia visual → atividade estilo ENA → criativa → prática → revisão dos erros</b>. Antes de começar, faça um <a href="../simulado.html"><b>simulado de diagnóstico</b></a> para saber onde está; ao fim de cada fase, repita.</p>
${fasesHTML}

<div class="tr-box">
  <b>4 · Rotina que funciona</b>
  <p class="meta" style="font-size:.86rem;margin:6px 0 0;">Teoria de 1 tema (30 min) → 6 a 8 questões sem consulta (60 min) → correção e anotação dos erros (20 min) → revisão rápida das fórmulas do dia anterior (10 min). Pouco e todo dia vence maratona de fim de semana. Todo erro vai para a <a href="../revisao.html">Revisão</a> e é refeito 2 dias depois. Na véspera: só a folha de fórmulas (guia da unidade 16), as tabelas de cabeça e os erros.</p>
</div>`;

const script = String.raw`
<script>
(function(){
  var FASES = ${JSON.stringify(FASES.map(f => ({ id: f.id, nome: f.nome, un: f.un })))};
  var INFO = {}; document.querySelectorAll('.un').forEach(function(u){ INFO[u.dataset.un + '@' + (u.closest('.fase') || {}).dataset.fase] = u; });
  var KEY = 'trilha-ena:';
  function ls(k, v){ try{ if(v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); }catch(e){ return null; } }
  function prog(arq){ try{ return JSON.parse(localStorage.getItem('prog:' + arq) || 'null'); }catch(e){ return null; } }
  var modo = ls(KEY + 'modo') || 'tudo';
  // ---- estado das caixas (manual + automático) ----
  function auto(li){ var p = prog(li.dataset.arq); if(!p) return null; if(li.dataset.k.charAt(0) === 'a' || li.dataset.k === 'g') return p.v ? 'visto' : null; return p.t ? 'nota ' + p.s + '/' + p.t : (p.v ? 'aberta' : null); }
  function ok(li){ var cb = li.querySelector('input'); return cb.checked || (li.dataset.arq && auto(li) && (li.dataset.k.charAt(0) === 'a' || li.dataset.k === 'g' || !!(prog(li.dataset.arq) || {}).t)); }
  function pintar(){
    document.querySelectorAll('ol.steps2 input').forEach(function(cb){ cb.checked = ls(KEY + cb.dataset.id) === '1'; });
    document.querySelectorAll('ol.steps2 li').forEach(function(li){ var st = li.querySelector('.st'); if(st) st.textContent = li.dataset.arq ? (auto(li) ? '✔ ' + auto(li) : '') : ''; });
    var tot = 0, feitos = 0;
    document.querySelectorAll('.un').forEach(function(u){ var lis = u.querySelectorAll('ol.steps2 li'), n = 0; lis.forEach(function(li){ if(ok(li)) n++; }); u.querySelector('.un-bar i').style.width = (n / lis.length * 100) + '%'; u.querySelector('.un-n').textContent = n + '/' + lis.length; if(!u.classList.contains('oculta')){ tot += lis.length; feitos += n; } });
    document.querySelectorAll('details.fase').forEach(function(d){ var us = d.querySelectorAll('.un:not(.oculta)'), t = 0, f = 0; us.forEach(function(u){ var lis = u.querySelectorAll('ol.steps2 li'); t += lis.length; lis.forEach(function(li){ if(ok(li)) f++; }); }); d.querySelector('.fp .un-bar i').style.width = (t ? f / t * 100 : 0) + '%'; d.querySelector('.fpn').textContent = us.length ? f + '/' + t : 'fase fora do modo escolhido'; });
    document.querySelector('#gbar i').style.width = (tot ? feitos / tot * 100 : 0) + '%'; document.getElementById('gn').textContent = feitos + ' de ' + tot + ' passos (' + (tot ? Math.round(feitos / tot * 100) : 0) + '%)';
  }
  document.querySelectorAll('ol.steps2 input').forEach(function(cb){ cb.addEventListener('change', function(){ ls(KEY + cb.dataset.id, cb.checked ? '1' : '0'); pintar(); }); });
  document.getElementById('zera').addEventListener('click', function(){ if(!confirm('Apagar as marcações manuais desta trilha neste aparelho? (o histórico de aulas vistas é mantido)')) return; document.querySelectorAll('ol.steps2 input').forEach(function(cb){ ls(KEY + cb.dataset.id, '0'); }); pintar(); });
  // ---- planejador ----
  function planejar(){
    var W = Math.max(4, Math.min(52, +document.getElementById('pl-w').value || 12)), H = Math.max(1, +document.getElementById('pl-h').value || 6); ls(KEY + 'sem', W); ls(KEY + 'hrs', H);
    document.querySelectorAll('.un').forEach(function(u){ var p = u.dataset.prio; u.classList.toggle('oculta', (modo === 'alta' && p !== 'alta') || (modo === 'prio' && p === 'extra')); });
    var fases = FASES.map(function(f){ var us = f.un.filter(function(n){ var p = document.querySelector('.un[data-un="' + n + '"]').dataset.prio; return !(modo === 'alta' && p !== 'alta') && !(modo === 'prio' && p === 'extra'); }); var h = us.reduce(function(a, n){ return a + (+document.querySelector('.un[data-un="' + n + '"]').dataset.h); }, 0); return {f: f, h: h, n: us.length}; });
    var simul = Math.max(3, Math.round(W * 0.18 * H / 2)), total = fases.reduce(function(a, x){ return a + x.h; }, 0), disp = W * H, esc = Math.min(1, (disp * 0.85) / (total || 1));
    document.getElementById('pl-t').innerHTML = 'Trilha escolhida: <b>' + total.toFixed(0) + ' h</b> de estudo + simulados. Você tem <b>' + disp + ' h</b> (' + W + ' sem × ' + H + ' h). ' + (total <= disp * 0.85 ? '✔ Cabe com folga para simulados e revisão.' : total <= disp ? '⚠ Cabe justo: reserve o fim para simulados.' : '✘ Não cabe: escolha “só prioridade alta e média” ou aumente as horas semanais.');
    var semana = 1, saida = '';
    fases.forEach(function(x){ if(!x.n) return; var ws = Math.max(1, Math.round(x.h / (total || 1) * (W - Math.max(1, Math.round(W * 0.12))))), a = semana, b = Math.min(W, semana + ws - 1); semana = b + 1; saida += '<div><b>' + x.f.nome.replace('Fase ', 'F') + '</b>' + (b > a ? 'semanas ' + a + '–' + b : 'semana ' + a) + ' · ' + x.h.toFixed(0) + ' h</div>'; var el = document.querySelector('[data-semanas="' + x.f.id + '"]'); if(el) el.textContent = 'Sugestão de calendário: semana' + (b > a ? 's ' + a + ' a ' + b : ' ' + a); });
    document.querySelectorAll('[data-semanas]').forEach(function(el){ var f = fases.filter(function(x){ return x.f.id === el.dataset.semanas; })[0]; if(!f || !f.n) el.textContent = ''; });
    if(semana <= W) saida += '<div><b>Simulados finais</b>' + (W > semana ? 'semanas ' + semana + '–' + W : 'semana ' + semana) + ' · ' + Math.max(1, W - semana + 1) + ' simulado(s) completo(s) + caderno de erros</div>'; else saida += '<div><b>Simulados</b>reserve a última semana</div>';
    document.getElementById('pl-r').innerHTML = saida; pintar();
  }
  document.getElementById('pl-w').value = ls(KEY + 'sem') || 12; document.getElementById('pl-h').value = ls(KEY + 'hrs') || 6;
  ['pl-w', 'pl-h'].forEach(function(i){ document.getElementById(i).addEventListener('input', planejar); });
  document.querySelectorAll('#pl-m button').forEach(function(b){ b.classList.toggle('on', b.dataset.m === modo); b.addEventListener('click', function(){ modo = b.dataset.m; ls(KEY + 'modo', modo); document.querySelectorAll('#pl-m button').forEach(function(x){ x.classList.toggle('on', x === b); }); planejar(); }); });
  // âncoras #uNN abrem a fase correspondente
  function ancora(){ var h = location.hash; if(!/^#u\d\d$/.test(h)) return; var n = h.slice(2), u = document.querySelector('.un[data-un="' + n + '"]'); if(u){ var d = u.closest('details'); if(d) d.open = true; u.id = 'u' + n; u.scrollIntoView(); } }
  document.querySelectorAll('.un').forEach(function(u){ if(!document.getElementById('u' + u.dataset.un)) u.id = 'u' + u.dataset.un; });
  window.addEventListener('hashchange', ancora); window.addEventListener('storage', pintar); window.addEventListener('focus', pintar);
  planejar(); ancora();
})();
</script>`;

const html = K.info({
  title: 'Trilha de estudo guiada — edital do ENA · PROFMAT', brand: 'Trilha de Estudo', key: 'trilha', aulas: 'Trilha guiada', color: 'primary',
  eyebrowTop: 'ENA · PROFMAT · Trilha de estudo guiada', footerTop: 'ENA · PROFMAT · Trilha de estudo guiada · edital do exame',
  h1: 'Trilha de estudo <span>guiada pelo edital</span>',
  lede: 'Do diagnóstico ao simulado final: 9 fases, 20 unidades, 36 aulas e os 14 itens do edital, na ordem em que o conteúdo se apoia. Escolha quantas semanas e horas você tem e a trilha monta o calendário.',
  badges: ['14 itens do edital', '9 fases', 'calendário automático', 'progresso salvo no aparelho'],
  sections: [], wide: [['', '', '', '', '']].slice(0, 0),
  fontes: 'Edital do ENA/PROFMAT (itens a–n e bibliografia) · Guia completo ENA · PROFMAT · Provas ENA 2025 e 2026 (SBM/PROFMAT)'
}).replace('<div class="footer">', body + '\n<div class="footer">').replace('</div>\n\n<script>', '</div>\n\n' + script + '\n<script>');

K.writeP('ena-profmat/trilha-de-estudo.html', html);
