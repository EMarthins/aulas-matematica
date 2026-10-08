// Unidade 1 — Porcentagem, razão, proporção e problemas (capítulo 1 do guia)
const K = require('./kit.js');
const { sl, lede, card, callout, g2, g3, g4, tbl, reveal, mini, stat, badge, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, teoria, quiz, fechamento, F, WJS, ic } = K;
const DIR = 'ena-profmat/01-porcentagem-razao-proporcao/';
const out = [];

// =====================================================================
// AULA 1 — Porcentagem: fatores, sucessivos, desfazer, variação
// =====================================================================
const s1 = [];
s1.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 1 · Aula 1',
  h1: 'Porcentagem: <span style="color:var(--growth);">pense em fatores</span>',
  sub: 'O tema mais frequente das provas ENA 2025 e 2026: aumento, desconto, variações sucessivas e o macete de desfazer uma variação.',
  badges: [['6 questões em 60'], ['×(1 + p/100)', 'growth'], ['Sucessivos: multiplique', 'decay']], color: 'growth'
}));
s1.push(roteiroSlide('Da definição de porcentagem até as questões que já caíram — sempre pelo mesmo caminho: o fator.', [
  ['Por que porcentagem?', 'o tema que mais cai e a base de todo problema de texto', 'target'],
  ['O que é p%', 'p em cada 100 — e como calcular p% de x', 'chart'],
  ['Fator de aumento e de desconto', '1 + p/100 e 1 − p/100', 'up'],
  ['Variações sucessivas', 'multiplicam-se os fatores (nunca some)', 'link'],
  ['Desfazer uma variação', 'o macete p/(100+p)', 'scale'],
  ['Questões que já caíram', 'ENA 2025 Q1 e Q23 · ENA 2026 Q1', 'bulb']
]));
s1.push(objetivosSlide([
  'Calcular <strong>p% de um valor</strong> e converter entre fração, decimal e porcentagem.',
  'Usar o <strong>fator de aumento</strong> $1 + {p|100}$ e o <strong>fator de desconto</strong> $1 − {p|100}$.',
  'Resolver <strong>variações sucessivas</strong> multiplicando fatores.',
  'Descobrir qual <strong>desconto desfaz</strong> um aumento (e vice-versa) sem montar sistema.'
], 'Em prova', 'Quase toda questão de texto do ENA usa porcentagem em algum passo. Quem pensa em <strong>fator</strong> resolve em 2 linhas o que outros resolvem em 10.', 'growth', 'growth-ink'));

s1.push(sl('Para início de conversa', 'O desconto que “desfaz” o aumento?', `
          ${lede('Uma loja aumenta um produto em <strong>20%</strong>. No mês seguinte, faz uma promoção de <strong>20% de desconto</strong>. O produto voltou ao preço original?')}
          <div class="grid2" style="margin-top:8px;">
            ${mini('Qual é o preço final em relação ao original?', ['Igual ao original', '4% menor que o original', '4% maior que o original', '20% menor que o original'], 1, 'Aumento de 20% é multiplicar por $1,2$; desconto de 20% é multiplicar por $0,8$. Juntos: $1,2 · 0,8 = 0,96$ — o preço ficou <strong>4% menor</strong>. As porcentagens incidem sobre bases diferentes, então não se cancelam.')}
            ${card('<strong>Por que esta aula existe</strong><p style="font-size:.92rem;margin-top:8px;">Nas provas ENA 2025 e 2026, <strong>6 das 60 questões</strong> são de porcentagem, razão e proporção — o tema campeão. E ele aparece escondido dentro de outras questões (probabilidade, estatística, geometria).</p>', 'growth')}
          </div>`, { cls: 'growth' }));

s1.push(sl('Teoria · o que é p%', 'Porcentagem é uma fração de denominador 100', `
          <div class="grid2">
            <div>
              ${lede('<strong>p%</strong> significa “p em cada 100”: $p% = {p|100}$. Calcular <strong>p% de x</strong> é multiplicar:')}
              ${F('p% "de" x = {p|100} · x', true)}
              ${callout('Exemplo', '15% de 200 = $0,15 · 200 = 30$. E 8% de 250 = $0,08 · 250 = 20$.', 'success')}
              ${tbl(['Porcentagem', 'Fração', 'Decimal'], [['50%', '${1|2}$', '0,5'], ['25%', '${1|4}$', '0,25'], ['20%', '${1|5}$', '0,2'], ['10%', '${1|10}$', '0,1'], ['5%', '${1|20}$', '0,05'], ['12,5%', '${1|8}$', '0,125']])}
            </div>
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>Calculadora p% de x</b></p>
              <label>Porcentagem: <b id="w1-pv">15</b>%</label><input type="range" id="w1-p" min="0" max="200" step="1" value="15">
              <label>Valor x</label><input type="number" id="w1-x" value="200" step="10">
              <p class="small" style="margin:12px 0 2px;">Resultado</p><div class="out" id="w1-r" style="font-size:1.7rem;">30</div>
              <div class="bar" style="margin-top:10px;"><span id="w1-b" style="background:var(--growth);width:15%"></span></div>
              <p class="hint" id="w1-h" style="margin-top:6px;"></p>
            </div>
          </div>`, { cls: 'growth' }));

s1.push(sl('Teoria · fatores', 'Aumento e desconto viram multiplicação', `
          ${lede('Em vez de calcular o aumento e somar, <strong>multiplique pelo fator</strong>. Um aumento de 25% deixa o preço em 100% + 25% = 125% do que era: $×1,25$.')}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${F('"aumento de " p% → ×(1 + {p|100})', false)}
              ${F('"desconto de " p% → ×(1 − {p|100})', false)}
              ${tbl(['Situação', 'Fator'], [['Aumento de 10%', '$×1,10$'], ['Aumento de 25%', '$×1,25$'], ['Aumento de 100%', '$×2$'], ['Desconto de 20%', '$×0,80$'], ['Desconto de 50%', '$×0,50$'], ['Desconto de 5%', '$×0,95$']])}
            </div>
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>Simulador de fator</b></p>
              <div class="row"><div><label>Preço original (reais)</label><input type="number" id="w2-v" value="80" step="10"></div><div><label>Tipo</label><select id="w2-t"><option value="1">Aumento</option><option value="-1">Desconto</option></select></div></div>
              <label>Porcentagem: <b id="w2-pv">25</b>%</label><input type="range" id="w2-p" min="0" max="100" step="1" value="25">
              <p class="small" style="margin:10px 0 0;">Fator: <b class="mono" id="w2-f"></b></p>
              <p class="small" style="margin:2px 0 0;">Preço final</p><div class="out" id="w2-r" style="font-size:1.7rem;"></div>
            </div>
          </div>`, { cls: 'growth' }));

s1.push(sl('Teoria · variações sucessivas', 'Duas variações? Multiplique os fatores', `
          ${lede('Um preço sobe 10% e, em seguida, sobe mais 10%. Aumento total? <strong>Não é 20%</strong> — a segunda variação incide sobre um valor que já aumentou.')}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${F('"fator total" = f_1 · f_2 · f_3 ⋯', true)}
              ${callout('Treino 1.1', '$1,1 × 1,1 = 1,21$ → aumento total de <strong>21%</strong>.', 'success')}
              ${callout('Treino do começo', '$1,2 × 0,8 = 0,96$ → queda de <strong>4%</strong>. Se fosse $+25%$ e $−20%$: $1,25 × 0,8 = 1$ → volta ao preço original.')}
            </div>
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>Duas variações em sequência</b></p>
              <label>1ª variação: <b id="w3-av">+20</b>%</label><input type="range" id="w3-a" min="-60" max="100" step="1" value="20">
              <label>2ª variação: <b id="w3-bv">−20</b>%</label><input type="range" id="w3-b" min="-60" max="100" step="1" value="-20">
              <p class="small" style="margin:12px 0 0;">Fator total <b class="mono" id="w3-f"></b></p>
              <p class="small" style="margin:2px 0 0;">Variação total</p><div class="out" id="w3-r" style="font-size:1.7rem;"></div>
              <p class="hint" id="w3-h" style="margin-top:4px;"></p>
            </div>
          </div>`, { cls: 'growth' }));

s1.push(sl('Macete · desfazer uma variação', 'Qual desconto desfaz um aumento de p%?', `
          ${lede('Depois de um aumento de $p%$, o valor é $(1 + {p|100})$ vezes o original. Para voltar, multiplique por $1 / (1 + {p|100})$ — ou seja, descontar:')}
          ${F('"desconto necessário" = {p|100 + p}', true)}
          <div class="grid2" style="margin-top:10px;">
            <div>
              ${tbl(['Aumento', 'Desconto que desfaz'], [['25%', '$25/125 = 20%$'], ['20%', '$20/120 ≈ 16,7%$'], ['100%', '$100/200 = 50%$'], ['50%', '$50/150 ≈ 33,3%$']])}
              ${callout('Ao contrário', 'Se houve <strong>desconto</strong> de $q%$, o aumento que desfaz é $q / (100 − q)$. Desconto de 20% → aumento de $20/80 = 25%$ (Treino 1.2).', 'success')}
            </div>
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>Aumento → desconto que volta ao original</b></p>
              <label>Aumento: <b id="w4-pv">25</b>%</label><input type="range" id="w4-p" min="1" max="300" step="1" value="25">
              <p class="small" style="margin:10px 0 0;">Desconto que desfaz</p><div class="out" id="w4-r" style="font-size:1.7rem;"></div>
              <div class="bar" style="margin-top:8px;"><span id="w4-b" style="background:var(--decay);width:20%"></span></div>
              <p class="hint" id="w4-h" style="margin-top:6px;"></p>
            </div>
          </div>`, { cls: 'growth' }));

s1.push(sl('Teoria · variação percentual', 'Para onde foi o valor? (novo − antigo) ÷ antigo', `
          ${lede('A variação percentual compara o valor novo com o <strong>antigo</strong> — sempre dividindo pelo valor de partida.')}
          ${F('"variação" = {"novo" − "antigo"|"antigo"} × 100%', true)}
          <div class="grid2" style="margin-top:10px;">
            ${card('<strong>De 80 para 100</strong><p style="font-size:.92rem;margin-top:8px;">$(100 − 80) / 80 = 0,25$ → <strong>+25%</strong>.</p>', 'success')}
            ${card('<strong>De 100 para 80</strong><p style="font-size:.92rem;margin-top:8px;">$(80 − 100) / 100 = −0,2$ → <strong>−20%</strong>. A mesma diferença, outro denominador!</p>', 'danger')}
          </div>
          ${mini('O preço de um livro passou de R$ 40 para R$ 50. Qual foi o aumento percentual?', ['10%', '25%', '20%', '12,5%'], 1, '$(50 − 40) / 40 = 10/40 = 0,25$ → <strong>25%</strong>. O erro comum é dividir pelo valor novo (10/50 = 20%).')}`, { cls: 'growth' }));

s1.push(ja('ENA 2025 · Q1', 'O vendedor que aumentou antes da liquidação',
  'Um vendedor aumenta o preço em <strong>25%</strong> antes da liquidação. Qual o <strong>desconto percentual máximo</strong> sobre o novo preço para que o preço final <strong>não seja inferior ao original</strong>?',
  ['15%', '18%', '20%', '25%', '30%'], 2,
  'Com preço original $x$: $({100 − k|100}) · 1,25x ≥ x ⇒ 100 − k ≥ 80 ⇒ k ≤ 20$. Pelo macete: $25/125 = 20%$. <strong>Alternativa C — 20%</strong>. (A palavra “máximo” e a expressão “não inferior” pedem a igualdade no limite.)'));

s1.push(ja('ENA 2025 · Q23', 'O grupo que não muda',
  'Num salão com <strong>200 pessoas</strong>, 15% são crianças e o resto adultos. Quantos adultos devem sair para que as crianças passem a ser <strong>25%</strong> do salão?',
  ['40', '60', '70', '80', '100'], 3,
  'Crianças: $0,15 · 200 = 30$ — e elas <strong>não mudam</strong> (só adultos saem). Se saem $x$ adultos, o salão fica com $200 − x$ pessoas e queremos $0,25(200 − x) = 30$, logo $200 − x = 120$ e $x = 80$. <strong>Alternativa D.</strong> Conferência: 30 crianças em 120 pessoas = 25% ✓.'));

s1.push(ja('ENA 2026 · Q1', 'Carolina e a meta de caminhada',
  'Após caminhar <strong>20%</strong> do que havia planejado, Carolina caminhou mais <strong>2 km</strong> e alcançou $1/3$ da meta. Quantos km ela planejou caminhar?',
  ['10 km', '12 km', '13,5 km', '15 km', '18 km'], 3,
  'Seja $x$ a meta: $0,2x + 2 = {x|3}$. Então ${x|3} − {x|5} = 2 ⇒ {2x|15} = 2 ⇒ x = 15$. <strong>Alternativa D — 15 km.</strong> Conferência: 20% de 15 = 3; $3 + 2 = 5 = {1|3} · 15$ ✓.'));

s1.push(armadilhas('Cuidado', 'As três pegadinhas da porcentagem', [
  ['Somar porcentagens de bases diferentes', '$+20%$ e depois $−20%$ <strong>não</strong> dá zero: $1,2 × 0,8 = 0,96$. Cada variação incide sobre o valor do momento.'],
  ['Escolher o grupo que muda', '“Quantos devem sair para que a proporção seja X?” Ache o grupo que <strong>não muda</strong> (crianças ficam; só adultos saem) e monte a equação sobre ele.'],
  ['Palavras que viram sinal', '“Pelo menos” e “não inferior” → desigualdade $≥$. “Máximo desconto” → igualdade no limite. Leia duas vezes antes de calcular.'],
  ['Dividir pelo valor errado', 'A variação percentual divide sempre pelo valor <strong>antigo</strong>: de 40 a 50 é +25%; de 50 a 40 é −20%.']
]));

s1.push(quiz([
  { q: 'Um produto de R$ 80 tem desconto de 15%. O preço final é:', o: ['R$ 65', 'R$ 68', 'R$ 72', 'R$ 78'], a: 1 },
  { q: 'Dois aumentos sucessivos, de 10% e de 20%. O aumento total é:', o: ['30%', '31%', '32%', '34%'], a: 2 },
  { q: 'Um preço subiu 50%. Que desconto o faz voltar ao valor original?', o: ['50%', '40%', 'cerca de 33,3% (um terço)', '25%'], a: 2 },
  { q: 'Uma sala tem 40 pessoas e 25% são mulheres. Quantos homens devem sair para que as mulheres sejam 40%?', o: ['10', '12', '15', '20'], a: 2 }
]));
s1.push(fechamento([
  ['Fator', 'Aumento de p% → $×(1 + p/100)$; desconto de p% → $×(1 − p/100)$.'],
  ['Sucessivas', 'Multiplicam-se os fatores; nunca somam-se as porcentagens.'],
  ['Desfazer', 'Aumento p% é desfeito pelo desconto $p / (100 + p)$.']
], 'Porcentagem é multiplicação: pense sempre no fator.'));

out.push({ out: DIR + 'aula-1-porcentagem.html', html: K.deck({
  title: 'Porcentagem: fatores, sucessivos e desfazer — ENA · PROFMAT', brand: 'Porcentagem', key: 'c1a1',
  meta: 'Capítulo 1 · Aula 1 · Porcentagem', slides: s1,
  extra: WJS + String.raw`
  function w1(){ var p = +$('w1-p').value, x = +$('w1-x').value || 0; $('w1-pv').textContent = p; $('w1-r').textContent = nf(p / 100 * x, 2); $('w1-b').style.width = Math.min(100, p) + '%'; $('w1-h').textContent = p + '% = ' + nf(p / 100, 3) + ' → ' + nf(p / 100, 3) + ' × ' + nf(x, 2); }
  ['w1-p', 'w1-x'].forEach(function(i){ $(i).addEventListener('input', w1); }); w1();
  function w2(){ var v = +$('w2-v').value || 0, t = +$('w2-t').value, p = +$('w2-p').value; $('w2-pv').textContent = p; var f = 1 + t * p / 100; $('w2-f').textContent = '×' + nf(f, 3); $('w2-r').textContent = 'R$ ' + nf(v * f, 2); }
  ['w2-v', 'w2-t', 'w2-p'].forEach(function(i){ $(i).addEventListener('input', w2); }); w2();
  function w3(){ var a = +$('w3-a').value, b = +$('w3-b').value; $('w3-av').textContent = (a >= 0 ? '+' : '−') + Math.abs(a); $('w3-bv').textContent = (b >= 0 ? '+' : '−') + Math.abs(b); var f = (1 + a / 100) * (1 + b / 100); $('w3-f').textContent = '×' + nf(f, 4); var v = (f - 1) * 100; $('w3-r').textContent = (v >= 0 ? '+' : '−') + nf(Math.abs(v), 2) + '%'; $('w3-r').style.color = v >= 0 ? 'var(--success)' : 'var(--danger)'; $('w3-h').textContent = 'Somar daria ' + ((a + b) >= 0 ? '+' : '−') + Math.abs(a + b) + '% — não é isso!'; }
  ['w3-a', 'w3-b'].forEach(function(i){ $(i).addEventListener('input', w3); }); w3();
  function w4(){ var p = +$('w4-p').value; $('w4-pv').textContent = p; var d = p / (100 + p) * 100; $('w4-r').textContent = nf(d, 1) + '%'; $('w4-b').style.width = d + '%'; $('w4-h').textContent = 'Fator: ' + nf(1 + p / 100, 2) + ' → 1 ÷ ' + nf(1 + p / 100, 2) + ' = ' + nf(1 / (1 + p / 100), 3) + ' (desconto de ' + nf(d, 1) + '%)'; }
  $('w4-p').addEventListener('input', w4); w4();`
}) });

// =====================================================================
// AULA 2 — Razão, proporção, regra de três, taxas e tradução de texto
// =====================================================================
const s2 = [];
s2.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 1 · Aula 2',
  h1: 'Razão, proporção e <span style="color:var(--decay);">taxas de trabalho</span>',
  sub: 'Regra de três, divisão proporcional, razões que mudam com transferências e o truque da taxa 1 ÷ tempo (torneiras e trabalhos em dupla).',
  badges: [['Proporção: ad = bc'], ['Taxa = 1 ÷ tempo', 'decay'], ['Traduza o texto', 'growth']], color: 'decay'
}));
s2.push(roteiroSlide('Do texto da questão à equação: este é o caminho de todo problema de “história”.', [
  ['Razão e proporção', 'a:b, a/b = c/d e o produto cruzado', 'scale'],
  ['Grandezas direta e inversamente proporcionais', 'regra de três sem decorar', 'link'],
  ['Divisão proporcional', 'repartir N em partes proporcionais a a, b, c', 'chart'],
  ['Razões que mudam', 'escolha números convenientes (ENA 2025 Q26)', 'people'],
  ['Trabalho e torneiras', 'taxa = 1 ÷ tempo (ENA 2026 Q30)', 'clock'],
  ['Traduzindo texto em equação', 'tabela de frases ↔ símbolos', 'book'],
  ['ENA 2025 Q24', 'moças, rapazes e múltiplos de 7', 'target']
]));
s2.push(objetivosSlide([
  'Montar e resolver <strong>proporções</strong> e regras de três (direta e inversa).',
  'Fazer <strong>divisão proporcional</strong> de uma quantidade.',
  'Resolver problemas de <strong>razão que muda</strong> escolhendo valores convenientes.',
  'Usar a <strong>taxa</strong> $1 / t$ em problemas de torneiras, obras e tarefas em dupla.'
], 'Dica de prova', 'Em questões de texto, traduza cada frase em uma expressão <strong>antes</strong> de calcular. A tabela “texto → matemática” desta aula é seu dicionário.', 'decay', 'decay-ink'));

s2.push(sl('Teoria · razão e proporção', 'Razão compara; proporção iguala razões', `
          <div class="grid2">
            <div>
              ${lede('A <strong>razão</strong> entre $a$ e $b$ é $a : b = {a|b}$. Uma <strong>proporção</strong> é a igualdade de duas razões:')}
              ${F('{a|b} = {c|d} ⇔ a·d = b·c', true)}
              ${callout('Exemplo', '${3|5} = {x|20}$ → $5x = 60$ → $x = 12$. (Multiplique em “cruz”.)', 'success')}
              ${card('<strong>Razão 3 : 5</strong><p style="font-size:.9rem;margin-top:8px;">Significa que existem “3 partes” para cada “5 partes”. Podem ser 3 e 5, ou 30 e 50, ou 6 e 10: o <strong>valor da razão</strong> é o mesmo.</p>')}
            </div>
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>Resolva a proporção a : b = c : x</b></p>
              <div class="row"><div><label>a</label><input type="number" id="r1-a" value="3"></div><div><label>b</label><input type="number" id="r1-b" value="5"></div><div><label>c</label><input type="number" id="r1-c" value="12"></div></div>
              <p class="small" style="margin:12px 0 0;">x =</p><div class="out" id="r1-x" style="font-size:1.7rem;"></div>
              <p class="hint" id="r1-h" style="margin-top:6px;"></p>
            </div>
          </div>`, { cls: 'decay' }));

s2.push(sl('Teoria · regra de três', 'Direta ou inversa? Veja o que acontece com a outra grandeza', `
          <div class="grid2">
            ${card('<strong>Diretamente proporcionais</strong><p style="font-size:.92rem;margin-top:8px;">Uma dobra, a outra dobra: razão constante $y = kx$. Ex.: preço × quantidade de pães.</p>', 'growth')}
            ${card('<strong>Inversamente proporcionais</strong><p style="font-size:.92rem;margin-top:8px;">Uma dobra, a outra cai pela metade: produto constante $x·y = k$. Ex.: operários × dias.</p>', 'decay')}
          </div>
          ${callout('Treino 1.6', '6 operários fazem um serviço em 10 dias. Com 15 operários (mesmo ritmo)? Mais operários → menos dias (inversa): $6 · 10 = 15 · d ⇒ d = 4$ dias.', 'success')}
          ${mini('8 torneiras idênticas enchem uma piscina em 12 horas. Com 6 torneiras, em quantas horas?', ['9 horas', '12 horas', '16 horas', '18 horas'], 2, 'Menos torneiras → mais tempo (inversa): $8 · 12 = 6 · t ⇒ t = 16$ horas. Se você respondeu 9, aplicou proporção direta onde era inversa.')}`, { cls: 'decay' }));

s2.push(sl('Teoria · divisão proporcional', 'Repartir N em partes proporcionais a a, b, c', `
          <div class="grid2">
            <div>
              ${lede('Para dividir $N$ em partes proporcionais a $a, b, c$, calcule o “valor de cada parte” $k = {N|a + b + c}$; as partes são $ak, bk, ck$.')}
              ${callout('Treino 1.5', 'Dividir 180 em partes proporcionais a 2, 3 e 4: $k = 180/9 = 20$ → <strong>40, 60 e 80</strong>.', 'success')}
            </div>
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>Divisão proporcional</b></p>
              <div class="row"><div><label>Total N</label><input type="number" id="d1-n" value="180"></div></div>
              <div class="row"><div><label>a</label><input type="number" id="d1-a" value="2"></div><div><label>b</label><input type="number" id="d1-b" value="3"></div><div><label>c</label><input type="number" id="d1-c" value="4"></div></div>
              <p class="small" style="margin:10px 0 0;">k = <b class="mono" id="d1-k"></b> · partes: <span class="out" id="d1-r" style="font-size:1.25rem;"></span></p>
              <div class="bar" style="margin-top:8px;"><span id="d1-b1" style="background:var(--primary)"></span><span id="d1-b2" style="background:var(--growth)"></span><span id="d1-b3" style="background:var(--decay)"></span></div>
            </div>
          </div>`, { cls: 'decay' }));

s2.push(sl('Estratégia · razão que muda', 'Só tenho a razão? Invente números convenientes', `
          ${lede('Quando o enunciado só dá a razão (por exemplo $3:5$), escolha valores que facilitem as porcentagens — como <strong>30 e 50</strong> — e calcule. O <strong>resultado final</strong> (uma razão) não depende da escolha.')}
          <div class="grid2" style="margin-top:6px;">
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>Turmas 7A e 7B (razão 3 : 5)</b></p>
              <label>Alunos na 7A (múltiplo de 3): <b id="t1-av">30</b></label><input type="range" id="t1-a" min="3" max="60" step="3" value="30">
              <div class="row"><div><label>% da 7A que vai para a 7B</label><input type="number" id="t1-p" value="20"></div><div><label>% da 7B que vai para a 7A</label><input type="number" id="t1-q" value="0"></div></div>
              <p class="small" style="margin:10px 0 0;">7A: <b id="t1-na" class="mono"></b> · 7B: <b id="t1-nb" class="mono"></b></p>
              <p class="small" style="margin:2px 0 0;">Nova razão 7A : 7B</p><div class="out" id="t1-r" style="font-size:1.5rem;"></div>
            </div>
            ${callout('Repare', 'Mude o tamanho da 7A com o controle: o número de alunos muda, mas a <strong>razão final fica igual</strong> (ex.: 3 : 7). É por isso que podemos escolher 30 e 50.', 'success')}
          </div>`, { cls: 'decay' }));

s2.push(sl('Teoria · taxas', 'Trabalho, torneiras, velocidade: taxa = 1 ÷ tempo', `
          ${lede('Se A faz um serviço em $t_A$ e B em $t_B$, a <strong>taxa</strong> de cada um é $1/t$ (fração do serviço por unidade de tempo). Taxas <strong>somam</strong> quando trabalham juntos:')}
          ${F('"taxa conjunta" = {1|t_A} + {1|t_B}   ⇒   t = {t_A · t_B|t_A + t_B}', true)}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <p class="small" style="margin:0 0 4px;"><b>Duas torneiras</b></p>
              <div class="row"><div><label>A enche em (h)</label><input type="number" id="k1-a" value="3" min="0.5" step="0.5"></div><div><label>B enche em (h)</label><input type="number" id="k1-b" value="6" min="0.5" step="0.5"></div></div>
              <p class="small" style="margin:10px 0 0;">Juntas enchem em</p><div class="out" id="k1-t" style="font-size:1.6rem;"></div>
              <p class="hint" id="k1-h" style="margin-top:6px;"></p>
            </div>
            <div>
              ${callout('Se trabalham só parte do tempo', 'fração feita $= ∑ ("taxa" × "tempo")$; o restante é completado por quem continua. Ex. (A em 3 h, B em 6 h; B abre 1 h depois): A sozinha na 1ª hora faz ${1|3}$; restam ${2|3}$ com taxa conjunta ${1|2}$ por hora → ${4|3}$ h. Total: $1 + {4|3} = {7|3}$ h = 2 h 20 min.', 'success')}
            </div>
          </div>`, { cls: 'decay' }));

s2.push(sl('Dicionário', 'Traduzindo texto em equação', `
          ${lede('A maior parte dos erros em problemas “de história” é de tradução, não de conta. Monte a frase antes do cálculo:')}
          ${tbl(['Texto', 'Matemática'], [['“20% do que planejou”', '$0,2x$'], ['“caminhou mais 2 km”', '$+ 2$'], ['“alcançou 1/3 da meta”', '$= {1|3}x$'], ['“k moças foram embora”', '$m → m − k$'], ['“o dobro / o quíntuplo”', '$2× / 5×$'], ['“ficou igual ao número de…”', '$=$']])}
          ${mini('“O número de moças é o triplo do número de rapazes.” Com $m$ moças e $r$ rapazes, a equação correta é:', ['$r = 3m$', '$m = 3r$', '$m + r = 3$', '$m = r + 3$'], 1, 'Quem é o “triplo” é a quantidade que aparece antes do verbo “é”: $m = 3r$. Troque por números (3 moças e 1 rapaz) para testar sempre que tiver dúvida.')}`, { cls: 'growth' }));

s2.push(ja('ENA 2025 · Q26', 'As turmas 7A e 7B',
  'As turmas 7A e 7B têm razão <strong>3 : 5</strong>. Cenário 1: 20% da 7A vão para a 7B. Cenário 2: 30% da 7B vão para a 7A. Quais as novas razões 7A : 7B em cada cenário?',
  ['$1 : 2$ e $2 : 3$', '$2 : 5$ e $9 : 5$', '$3 : 7$ e $9 : 7$', '$3 : 5$ e $3 : 5$', '$4 : 9$ e $5 : 3$'], 2,
  'Tome 30 e 50 alunos. <strong>Cenário 1:</strong> saem 20% de 30 = 6 → 7A fica com 24 e 7B com 56: $24 : 56 = 3 : 7$. <strong>Cenário 2:</strong> saem 30% de 50 = 15 → 7A fica com 45 e 7B com 35: $45 : 35 = 9 : 7$. <strong>Alternativa C.</strong>'));

s2.push(ja('ENA 2026 · Q30', 'As torneiras A e B',
  'A torneira <strong>A</strong> enche um tanque em <strong>6 h</strong>; a <strong>B</strong>, em <strong>4 h</strong>. Com o tanque vazio, ambas são abertas; após <strong>2 h</strong> fecha-se a B. Qual o tempo total para encher o tanque?',
  ['2 horas', '3 horas', '3 h 30 min', '4 horas', '5 horas'], 1,
  'Taxas: A $= 1/6$, B $= 1/4$; juntas $= 5/12$ por hora. Em 2 h: $2 · 5/12 = 5/6$. Falta $1/6$, que A sozinha faz em 1 h. Total: $2 + 1 = 3$ h. <strong>Alternativa B — 3 horas.</strong>'));

s2.push(ja('ENA 2025 · Q24', 'Moças, rapazes e múltiplos de 7',
  'Em um grupo de rapazes e moças, $k$ moças foram embora e o número de rapazes ficou igual ao de moças. Depois, $2k$ rapazes foram embora e o número de moças ficou o quíntuplo do de rapazes. O que se pode afirmar sobre o número inicial?',
  ['o número inicial de rapazes é múltiplo de 7', 'o número inicial de moças é necessariamente múltiplo de 7', 'o número inicial de moças é múltiplo de 5', 'o grupo inicial tem 12 pessoas', 'nada se pode afirmar'], 1,
  'Com $m$ moças e $r$ rapazes: (1) $r = m − k$; (2) $m − k = 5(r − 2k)$. Substituindo (1): $m − k = 5(m − 3k) ⇒ 14k = 4m ⇒ m = {7k|2}$ e $r = {5k|2}$. Como $m$ e $r$ são inteiros, $k$ é par: $k = 2j ⇒ m = 7j$ e $r = 5j$. Logo as moças são <strong>múltiplo de 7</strong> (e os rapazes, de 5). <strong>Alternativa B.</strong>', 'Questão de nível mais alto: leia o passo de substituição com calma.'));

s2.push(armadilhas('Cuidado', 'Onde se perde ponto em razão e proporção', [
  ['Proporção direta onde era inversa', 'Pergunte: “se uma dobra, a outra dobra ou cai pela metade?” Mais operários → menos dias.'],
  ['Somar tempos em vez de taxas', 'Torneiras: some as <strong>taxas</strong> ($1/t$), não os tempos. 3 h e 6 h juntas não levam 9 h.'],
  ['Razão que “muda” sem base', 'Depois de uma transferência, a razão antiga não vale mais: recalcule com números concretos.'],
  ['Esquecer a condição inteira', 'Pessoas são números inteiros: isso pode forçar $k$ par ou múltiplos de 5 e 7 (ENA 2025 Q24).']
]));

s2.push(quiz([
  { q: 'Dividindo 120 em partes proporcionais a 1, 2 e 3, a maior parte vale:', o: ['40', '50', '60', '80'], a: 2 },
  { q: '3 pedreiros constroem um muro em 12 dias. Quantos dias levam 4 pedreiros (mesmo ritmo)?', o: ['9', '8', '15', '16'], a: 0 },
  { q: 'A torneira A enche um tanque em 4 h e a B em 12 h. Juntas, enchem em:', o: ['8 h', '6 h', '3 h', '2 h'], a: 2 },
  { q: 'A razão entre rapazes e moças é 2 : 3. Se há 30 alunos, quantas moças?', o: ['12', '15', '18', '20'], a: 2 }
]));
s2.push(fechamento([
  ['Proporção', '$a/b = c/d ⇔ ad = bc$; direta: razão constante; inversa: produto constante.'],
  ['Taxas', 'Cada um faz $1/t$ por hora; juntos somam-se as taxas.'],
  ['Texto → equação', 'Traduza cada frase; escolha valores convenientes quando só há razão.']
], 'Antes de calcular, traduza: cada frase do enunciado vira uma equação.'));

out.push({ out: DIR + 'aula-2-razao-proporcao-taxas.html', html: K.deck({
  title: 'Razão, proporção e taxas de trabalho — ENA · PROFMAT', brand: 'Razão e Proporção', key: 'c1a2',
  meta: 'Capítulo 1 · Aula 2 · Razão, proporção e taxas', slides: s2,
  extra: WJS + String.raw`
  function r1(){ var a = +$('r1-a').value, b = +$('r1-b').value, c = +$('r1-c').value; if(!a){ $('r1-x').textContent = '—'; $('r1-h').textContent = 'a não pode ser zero.'; return; } var x = b * c / a; $('r1-x').textContent = nf(x, 3); $('r1-h').textContent = 'a·x = b·c → ' + nf(a, 2) + '·x = ' + nf(b * c, 2) + ' → x = ' + nf(x, 3); }
  ['r1-a', 'r1-b', 'r1-c'].forEach(function(i){ $(i).addEventListener('input', r1); }); r1();
  function d1(){ var n = +$('d1-n').value || 0, a = +$('d1-a').value || 0, b = +$('d1-b').value || 0, c = +$('d1-c').value || 0, s = a + b + c; if(!s){ $('d1-r').textContent = '—'; return; } var k = n / s; $('d1-k').textContent = nf(k, 3); $('d1-r').textContent = nf(a * k, 2) + ' · ' + nf(b * k, 2) + ' · ' + nf(c * k, 2); $('d1-b1').style.width = (a / s * 100) + '%'; $('d1-b2').style.width = (b / s * 100) + '%'; $('d1-b3').style.width = (c / s * 100) + '%'; }
  ['d1-n', 'd1-a', 'd1-b', 'd1-c'].forEach(function(i){ $(i).addEventListener('input', d1); }); d1();
  function t1(){ var a = +$('t1-a').value; $('t1-av').textContent = a; var b = a * 5 / 3, p = (+$('t1-p').value || 0) / 100, q = (+$('t1-q').value || 0) / 100; var na = a - a * p + b * q, nb = b + a * p - b * q; $('t1-na').textContent = nf(na, 2); $('t1-nb').textContent = nf(nb, 2); function mdc(x, y){ x = Math.round(x * 1000); y = Math.round(y * 1000); while(y){ var t = y; y = x % y; x = t; } return x; } var g = mdc(na, nb) || 1; $('t1-r').textContent = nb ? (Math.round(na * 1000) / g) + ' : ' + (Math.round(nb * 1000) / g) : '—'; }
  ['t1-a', 't1-p', 't1-q'].forEach(function(i){ $(i).addEventListener('input', t1); }); t1();
  function k1(){ var a = +$('k1-a').value, b = +$('k1-b').value; if(!a || !b) return; var t = a * b / (a + b); $('k1-t').textContent = nf(t, 3) + ' h'; $('k1-h').textContent = '1/' + nf(a, 1) + ' + 1/' + nf(b, 1) + ' = ' + nf(1 / a + 1 / b, 4) + ' por hora → t = ' + nf(t, 3) + ' h (≈ ' + Math.floor(t) + ' h ' + Math.round((t - Math.floor(t)) * 60) + ' min)'; }
  ['k1-a', 'k1-b'].forEach(function(i){ $(i).addEventListener('input', k1); }); k1();`
}) });

module.exports = out;
