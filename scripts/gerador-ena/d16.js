// Unidade 16 — Estratégia de prova, tabelas de cabeça e plano de estudo (capítulo 16 + mapa de incidência)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W, vfBlock } = K;
const DIR = 'ena-profmat/16-estrategia-de-prova/';
const s = [];

s.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 16', h1: 'Estratégia de prova: <span style="color:var(--primary);">método, tempo e plano</span>',
  sub: '30 questões de múltipla escolha, ênfase em raciocínio. Como atacar cada questão, onde estão os pontos (mapa de incidência), a lista de erros que mais custam, gestão de tempo, tabelas de cabeça e um plano de estudo.',
  badges: [['60 questões analisadas'], ['3 passadas', 'growth'], ['erre no simulado, não na prova', 'decay']], color: 'primary'
}));
s.push(roteiroSlide('A parte da prova que não é matemática — mas decide a colocação.', [
  ['Mapa de incidência', 'onde estão os pontos das provas 2025 e 2026', 'chart'],
  ['Como atacar cada questão', 'cinco passos', 'target'],
  ['Erros que mais tiram ponto', 'checklist', 'warn'],
  ['Gestão de tempo', 'três passadas', 'clock'],
  ['Tabelas de cabeça', 'quadrados, cubos, potências, primos, ternos', 'book'],
  ['Plano de estudo', 'fases, rotina e caderno de erros', 'flag']
]));
s.push(objetivosSlide([
  'Usar o <strong>mapa de incidência</strong> para priorizar os capítulos.',
  'Aplicar o método de <strong>cinco passos</strong> a cada questão e conferir o resultado.',
  'Organizar a prova em <strong>três passadas</strong> e controlar o tempo.',
  'Montar um <strong>plano de estudo</strong> com simulados e <strong>caderno de erros</strong>.'
], 'Em prova', 'A prova premia <strong>método e atenção</strong>, não sorte: as mesmas ideias se repetem de um ano para o outro.', 'primary', 'primary'));

s.push(sl('Mapa de incidência', 'Onde estão os pontos? (60 questões, 2025 e 2026)', `
          ${lede('<strong>Geometria plana</strong> (10) + <strong>álgebra/equações/funções</strong> (14) + <strong>aritmética</strong> (porcentagem, inteiros, conjuntos: 14) já são ~60% da prova. Contagem, probabilidade e estatística (8) são “pontos baratos”. Lógica (5) é raciocínio puro.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Questões por capítulo', W.sel('m1-a', 'Ano', ['2025 + 2026', 'só 2025', 'só 2026'], 0) + W.svg('m1-s', '0 0 360 300', '300px') + W.hint('m1-h'))}
            ${callout('Leitura estratégica', 'Para ficar em 1º lugar o objetivo é <strong>errar zero</strong> nesses blocos e ter método para o resto. Comece pelos capítulos mais frequentes: 12 (geometria plana), 1 (porcentagem), 6 (equações) e 2 (inteiros).', 'success')}
          </div>`, { cls: '' }));

s.push(sl('Método', 'Como atacar cada questão (cinco passos)', `
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:10px;">
            <div class="step-row"><span class="badge">1</span><div><strong>Leia duas vezes e sublinhe o que é pedido</strong><div class="hint">Perímetro ou área? Diagonal ou lado? “NÃO”, “apenas”, “menor”, “pelo menos”.</div></div></div>
            <div class="step-row"><span class="badge">2</span><div><strong>Classifique o tema em 5 segundos</strong><div class="hint">Use os capítulos: produto notável? Girard? razão de áreas? complementar?</div></div></div>
            <div class="step-row"><span class="badge">3</span><div><strong>Resolva por uma ideia curta</strong><div class="hint">Se a conta ficou enorme, você provavelmente perdeu um atalho (identidade, simetria, semelhança).</div></div></div>
            <div class="step-row"><span class="badge">4</span><div><strong>Teste as alternativas quando fizer sentido</strong><div class="hint">Substitua valores e descarte absurdos (ex.: ordem crescente com números de teste).</div></div></div>
            <div class="step-row"><span class="badge">5</span><div><strong>Confira</strong><div class="hint">Substitua de volta, verifique condições de existência, unidades e plausibilidade (raio maior que o lado do quadrado? probabilidade &gt; 1?).</div></div></div>
          </div>`, { cls: '' }));

s.push(sl('Checklist', 'A lista de erros que mais tiram ponto', `
          <div class="grid2" style="margin-top:8px;">
            ${card('<strong>Álgebra e equações</strong><ul class="plain" style="font-size:.85rem;line-height:1.6;margin-top:6px;"><li>Raiz estranha / denominador zero.</li><li>Multiplicar inequação por expressão de sinal desconhecido; esquecer de inverter.</li><li>$√{a^2} = a$ (é $∣a∣$); $(a + b)^2 = a^2 + b^2$ (falta $2ab$).</li><li>Extremidades: $<$ × $≤$; esquecer o $+1$ ao contar termos.</li></ul>', 'danger')}
            ${card('<strong>Aritmética, contagem e probabilidade</strong><ul class="plain" style="font-size:.85rem;line-height:1.6;margin-top:6px;"><li>Somar porcentagens em vez de multiplicar fatores.</li><li>Não começar pelo mais restrito; contar o zero à esquerda.</li><li>Esquecer o denominador que cai sem reposição; (1,6) e (6,1) como um só.</li></ul>', 'danger')}
            ${card('<strong>Geometria e estatística</strong><ul class="plain" style="font-size:.85rem;line-height:1.6;margin-top:6px;"><li>Lado inclinado como altura; razão de áreas sem elevar ao quadrado.</li><li>Mediana sem ordenar; média ponderada sem frequência.</li></ul>', 'danger')}
            ${card('<strong>Leitura</strong><ul class="plain" style="font-size:.85rem;line-height:1.6;margin-top:6px;"><li>Responder o que não foi pedido (achou $x$, mas pediam $2x + 1$).</li><li>Alternativas “I e II, apenas”: julgue cada item V ou F antes.</li></ul>', 'danger')}
          </div>`, { cls: 'danger' }));

s.push(sl('Gestão de tempo', 'Três passadas', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.93rem;line-height:1.7;">
                <li><strong>1ª passada:</strong> tudo que você vê o caminho em 2–3 minutos (porcentagem, conjuntos, lógica, funções, PA/PG, contagem simples). Marque as demais.</li>
                <li><strong>2ª passada:</strong> geometria mais longa, probabilidade com contagem, problemas de várias etapas.</li>
                <li><strong>3ª passada:</strong> revisão de contas e condições (raiz estranha, módulo, extremos).</li>
                <li>Travou além de ~5 minutos? Deixe marcada e volte. Chute só depois de eliminar alternativas absurdas.</li>
              </ul>
            </div>
            ${W.box('Planejador de tempo', W.nm('m2-t', 'Tempo total da prova (minutos)', 240, 10, 'min="30"') + W.nm('m2-n', 'Questões', 30, 1, 'min="1"') + W.txt('m2-a', 'Tempo médio por questão: ') + W.txt('m2-b', '1ª passada (≈ 60%): ') + W.txt('m2-c', '2ª passada (≈ 30%): ') + W.txt('m2-d', '3ª passada, revisão (≈ 10%): ') + W.hint('m2-h'))}
          </div>`, { cls: '' }));

s.push(sl('Tabelas de cabeça', 'Quadrados, cubos, potências, primos e ternos', `
          <div class="grid2">
            <div>
              ${tbl(['Tabela', 'Valores'], [['Quadrados', '1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400'], ['Cubos', '1, 8, 27, 64, 125, 216, 343, 512, 729, 1000'], ['Potências de 2', '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096'], ['3ⁿ, 5ⁿ', '3, 9, 27, 81, 243, 729 · 5, 25, 125, 625'], ['Raízes', '$√2 ≈ 1,414$ · $√3 ≈ 1,732$ · $√5 ≈ 2,236$ · $√6 ≈ 2,449$ · $√7 ≈ 2,646$ · $π ≈ 3,14$'], ['Primos até 50', '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47'], ['Ternos', '3-4-5, 5-12-13, 8-15-17, 7-24-25, 20-21-29, 9-40-41']])}
            </div>
            ${W.box('Treino relâmpago', W.sel('m3-t', 'Tabela', ['Quadrados', 'Cubos', 'Potências de 2', 'Primos até 50 (é primo?)', 'Ternos (complete)'], 0) + '<p class="small" id="m3-q" style="margin:10px 0 4px;font-size:1.05rem;font-weight:700;"></p><div class="tr-row"><input type="text" id="m3-i" inputmode="numeric" placeholder="resposta" style="font:inherit;font-family:JetBrains Mono,monospace;padding:.45em .7em;border-radius:10px;border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);width:9rem;"><button class="btn" id="m3-b" type="button">Verificar</button></div><p class="small" id="m3-r" style="margin:8px 0 0;"></p>')}
          </div>`, { cls: '' }));

s.push(sl('Plano de estudo', 'Fases, rotina e caderno de erros', `
          <div class="grid2">
            <div>
              ${tbl(['Fase', 'O que fazer'], [['1. Base (1ª–3ª semana)', 'Capítulos 1–8: teoria + questões que já caíram + treino. Meta: refazer sem consultar as 40 questões desses capítulos.'], ['2. Cobertura (4ª–5ª semana)', 'Capítulos 9–14. Geometria plana tem prioridade (10 questões).'], ['3. Extras (6ª semana)', 'Capítulo 15 e provas anteriores do ENA/PROFMAT (SBM/PROFMAT).'], ['4. Simulados', 'Provas completas de 30 questões cronometradas; erre no simulado, não na prova.'], ['5. Véspera', 'Só a folha de fórmulas, as tabelas de cabeça e o caderno de erros. Dormir bem.']])}
            </div>
            ${W.box('Distribua suas semanas', W.nm('m4-w', 'Semanas até a prova', 8, 1, 'min="4" max="40"') + '<div id="m4-r" style="margin-top:8px;font-size:.9rem;line-height:1.8;"></div>' + W.hint('m4-h'))}
          </div>
          ${callout('Rotina diária que funciona', 'Teoria de 1 tema (30 min) → 6–8 questões sem consulta (60 min) → correção e anotação dos erros (20 min) → revisão rápida das fórmulas do dia anterior (10 min). Pouco e todo dia vence maratona de fim de semana. Todo erro vai para o <strong>caderno de erros</strong> e é refeito 2 dias depois — a página “Revisão” deste site reúne as questões que você errou.', 'success')}`, { cls: 'growth' }));

s.push(sl('Verdadeiro ou falso?', 'Hábitos de quem vai bem na prova', `
          ${vfBlock([
  ['Se a conta ficou enorme, o ideal é continuar até o fim sem procurar atalho.', false, 'Falso. Conta enorme costuma indicar atalho perdido: identidade, simetria, semelhança ou razão de áreas.'],
  ['Marcar uma questão e voltar depois pode economizar tempo.', true, 'Verdadeiro. Travou além de ~5 minutos: marque e volte na 2ª ou 3ª passada.'],
  ['Conferir condições de existência e a plausibilidade da resposta vale pontos.', true, 'Verdadeiro. Raiz estranha, denominador zero e unidades são pegadinhas frequentes.'],
  ['Erre na prova real para aprender; no simulado, acerte tudo.', false, 'Falso. A ideia é errar no simulado, não na prova: todo erro vai para o caderno e é refeito.']
])}`, { cls: 'growth' }));

s.push(quiz([
  { q: 'Qual bloco de capítulos concentra mais questões nas provas 2025 e 2026?', o: ['Geometria plana (10 questões)', 'Estatística (2)', 'Trigonometria (3)', 'Geometria espacial (2)'], a: 0 },
  { q: 'Travou em uma questão por mais de ~5 minutos. O melhor é:', o: ['insistir até acertar', 'marcar e voltar na 2ª ou 3ª passada', 'chutar sem ler', 'deixar em branco para sempre'], a: 1 },
  { q: 'A frase “Responder o que não foi pedido” é exemplo de:', o: ['erro de leitura', 'erro de conta', 'erro de fórmula', 'erro de arredondamento'], a: 0 },
  { q: 'Na véspera da prova, o recomendado é:', o: ['resolver 10 simulados novos', 'folha de fórmulas, tabelas de cabeça e caderno de erros', 'estudar tópicos extras do zero', 'virar a noite'], a: 1 }
]));
s.push(fechamento([
  ['Método', 'Leia 2×, classifique, ideia curta, teste alternativas, confira.'],
  ['Tempo', 'Três passadas; travou? marque e volte.'],
  ['Plano', 'Base → cobertura → extras → simulados → véspera, com caderno de erros.']
], 'A prova premia método e atenção. Bons estudos!'));

module.exports = [{ out: DIR + 'aula-estrategia-de-prova.html', html: K.deck({
  title: 'Estratégia de prova e plano de estudo — ENA · PROFMAT', brand: 'Estratégia de Prova', key: 'c16', meta: 'Capítulo 16 · Estratégia e plano de estudo', slides: s,
  extra: WJS + BIND + String.raw`
  var CAPS = [['1 Porcent./razão', 4, 2], ['2 Inteiros', 3, 2], ['3 Conjuntos', 2, 1], ['4 Lógica', 2, 3], ['5 Álgebra', 2, 1], ['6 Equações', 1, 5], ['7 Funções', 3, 2], ['8 Sequências', 1, 3], ['9 Combinatória', 2, 1], ['10 Probabilidade', 1, 2], ['11 Estatística', 1, 1], ['12 Geom. plana', 5, 5], ['13 Trigonometria', 2, 1], ['14 Geom. espacial', 1, 1]];
  bind(['m1-a'], function(){ var m = +$('m1-a').value, svg = $('m1-s'); svg.innerHTML = ''; var vals = CAPS.map(function(c){ return m === 0 ? c[1] + c[2] : m === 1 ? c[1] : c[2]; }), mx = Math.max.apply(null, vals), tot = vals.reduce(function(a, b){ return a + b; }, 0); CAPS.forEach(function(c, i){ var y = 8 + i * 20.5, w = vals[i] / mx * 170; var t = el('text', {x: 6, y: y + 12, 'font-size': 11, fill: 'var(--ink)'}, svg); t.textContent = c[0]; el('rect', {x: 120, y: y, width: w, height: 15, rx: 3, fill: vals[i] >= 5 ? 'var(--growth)' : 'var(--primary)', 'fill-opacity': .8}, svg); var n = el('text', {x: 126 + w, y: y + 12, 'font-size': 11, fill: 'var(--ink-soft)', 'font-weight': 700}, svg); n.textContent = vals[i]; }); $('m1-h').textContent = 'Total: ' + tot + ' questões (' + (m === 0 ? '30 de 2025 + 30 de 2026' : '30 em ' + (m === 1 ? '2025' : '2026')) + '). Em laranja: capítulos com 5 ou mais.'; });
  bind(['m2-t', 'm2-n'], function(){ var T = +$('m2-t').value, N = Math.max(1, Math.round(+$('m2-n').value)); $('m2-a').textContent = nf(T / N, 2) + ' min'; $('m2-b').textContent = nf(T * 0.6, 1) + ' min (≈ ' + nf(T * 0.6 / N, 1) + ' min por questão em média)'; $('m2-c').textContent = nf(T * 0.3, 1) + ' min'; $('m2-d').textContent = nf(T * 0.1, 1) + ' min'; $('m2-h').textContent = 'Divisão sugerida; ajuste ao tempo real da sua prova e à sua velocidade.'; });
  var Q = null, pontos = 0, tent = 0, PRIMOS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], TERNOS = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41]];
  function novo(){ var t = +$('m3-t').value; if(t === 0){ var n = 2 + Math.floor(Math.random() * 19); Q = {q: n + '² = ?', a: String(n * n)}; } else if(t === 1){ var c = 2 + Math.floor(Math.random() * 9); Q = {q: c + '³ = ?', a: String(c * c * c)}; } else if(t === 2){ var e = 1 + Math.floor(Math.random() * 12); Q = {q: '2^' + e + ' = ?', a: String(Math.pow(2, e))}; } else if(t === 3){ var m = 2 + Math.floor(Math.random() * 49); Q = {q: m + ' é primo? (1 = sim, 0 = não)', a: PRIMOS.indexOf(m) >= 0 ? '1' : '0'}; } else { var T3 = TERNOS[Math.floor(Math.random() * TERNOS.length)], k = Math.floor(Math.random() * 3); Q = {q: 'Terno pitagórico: ' + T3.map(function(x, i){ return i === k ? '?' : x; }).join(' - ') + ' (a hipotenusa é o maior)', a: String(T3[k])}; } $('m3-q').textContent = Q.q; $('m3-i').value = ''; }
  $('m3-t').addEventListener('input', novo); $('m3-b').addEventListener('click', function(){ if(!Q) return; var ok = $('m3-i').value.trim() === Q.a; tent++; if(ok) pontos++; $('m3-r').textContent = (ok ? '✔ Certo! ' : '✘ Era ' + Q.a + '. ') + pontos + ' / ' + tent; novo(); }); $('m3-i').addEventListener('keydown', function(e){ if(e.key === 'Enter') $('m3-b').click(); }); novo();
  bind(['m4-w'], function(){ var W0 = Math.max(4, Math.round(+$('m4-w').value)), base = Math.max(1, Math.round(W0 * 0.3)), cob = Math.max(1, Math.round(W0 * 0.22)), ext = Math.max(1, Math.round(W0 * 0.12)), sim = Math.max(1, W0 - base - cob - ext - 0), ves = 0; $('m4-r').innerHTML = '<b>1. Base:</b> ' + base + ' sem. · <b>2. Cobertura:</b> ' + cob + ' sem. · <b>3. Extras:</b> ' + ext + ' sem. · <b>4. Simulados:</b> ' + sim + ' sem. · <b>5. Véspera:</b> o último dia'; $('m4-h').textContent = 'Com 6 semanas o guia sugere: 3 de base, 2 de cobertura, 1 de extras e simulados nas últimas semanas.'; });`
}) }];
