// Unidade v36 — Retomada: progressão geométrica e sua soma (aulas R15 e R16 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { W, WJS, BIND } = K;
const R = require('./rev.js');
const TRI = 2, DIR = 'retomada-progressao-geometrica', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v36', BRAND = 'Retomada: progressão geométrica';
const UT = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== R15: PA × PG e termo geral da PG =====================
const a = R.build({
  eb: 'Matemática · 2ª série · Retomada R15', h1: 'Retomada: <span style="color:var(--primary);">PA contra PG, e o termo geral da PG</span>',
  sub: 'Em 1798, Malthus afirmou que a população crescia em progressão geométrica e os alimentos em progressão aritmética. A previsão falhou, mas mostrou como os dois tipos de crescimento se afastam rapidamente.',
  badges: [['PA: soma r'], ['PG: multiplica por q', 'growth'], ['aₙ = a₁ · qⁿ⁻¹', 'decay']],
  roteiro: ['Da comparação à fórmula.', [['PA e PG', 'somar ou multiplicar', 'bulb'], ['Identificar', 'diferença ou razão constante', 'target'], ['Termo geral da PG', 'aₙ = a₁ · qⁿ⁻¹', 'chart'], ['Crescimento', 'por que a PG cresce mais depressa', 'link'], ['Problemas', 'poupança, bactérias e juros', 'scale']]],
  objetivos: ['<strong>Distinguir</strong> PA e PG por soma ou multiplicação constante.', 'Calcular a <strong>razão</strong> $q$ e usar $a_{n} = a_{1} · q^{n−1}$.', 'Resolver problemas de <strong>crescimento exponencial</strong> (bactérias, juros, depreciação).'],
  dica: 'Teste rápido: <strong>subtraia</strong> termos vizinhos; se a diferença é constante, é PA. <strong>Divida</strong> termos vizinhos; se o quociente é constante, é PG.',
  abertura: { titulo: 'Malthus e as duas progressões', texto: 'Malthus comparou duas sequências: alimentos <strong>(2, 4, 6, 8, …)</strong>, que somam $2$ a cada passo (PA), e população <strong>(2, 4, 8, 16, …)</strong>, que dobra a cada passo (PG). A PG logo ultrapassa a PA.',
    extra: W.box('PA × PG', W.row(W.nm('g15-a', 'a₁', 2, 'any'), W.nm('g15-r', 'r (PA)', 2, 'any'), W.nm('g15-q', 'q (PG)', 2, 'any'), W.rg('g15-n', 'n', 2, 12, 1, 8, '')) + W.svg('g15-s', '0 0 360 220', '340px') + W.txt('g15-t', 'aₙ da PA · aₙ da PG: ') + W.hint('g15-h')),
    mini: ['Na sequência $(3, 6, 12, 24, …)$, a razão é:', ['$3$ (soma)', '$2$ (multiplicação)', '$6$', '$12$'], 1, 'Cada termo é o anterior multiplicado por $2$: PG de razão $q = 2$.'] },
  teoria: [
    { eb: 'Teoria · PG', titulo: 'Progressão geométrica e seu termo geral', html: `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>PG:</strong> sequência em que cada termo, a partir do segundo, é o anterior <strong>multiplicado</strong> por uma constante $q$ (a <strong>razão</strong>).</li>
                <li><strong>Razão:</strong> $q = {a_{2}|a_{1}} = {a_{3}|a_{2}}$.</li>
                <li><strong>Termo geral:</strong> $a_{n} = a_{1} · q^{n−1}$.</li>
                <li>$q > 1$ com $a_{1} > 0$: crescente; $0 < q < 1$: decrescente; $q < 0$: termos de sinais alternados.</li>
                <li>PA: crescimento <strong>linear</strong> (reta); PG: crescimento <strong>exponencial</strong>.</li>
              </ul>
            </div>
            <div><p class="hint">Aumento de 10% ao mês significa $q = 1,1$; redução de 20%, $q = 0,8$.</p></div>
          </div>` }
  ],
  exemplos: [
    ['Oitavo termo', 'Qual o 8º termo da PG $(3, 6, 12, …)$?', [['Razão', '$q = 6 ÷ 3 = 2$.'], ['Termo geral', '$a_{8} = 3 · 2^{7} = 3 · 128 = 384$.']], '$a_{8} = 384$.'],
    ['Colônia de bactérias', 'Uma colônia tem $5$ bactérias e dobra a cada hora. Quantas há após $6$ horas?', [['Modelo', '$a_{1} = 5$ (hora 0); após $6$ horas é o 7º termo: $a_{7} = 5 · 2^{6}$.'], ['Conta', '$5 · 64 = 320$.']], 'Há $320$ bactérias.'],
    ['PG decrescente', 'Qual o 7º termo da PG $(64, 32, 16, …)$?', [['Razão', '$q = 32 ÷ 64 = {1|2}$.'], ['Termo', '$a_{7} = 64 · ({1|2})^{6} = 64 ÷ 64 = 1$.']], '$a_{7} = 1$.'],
    ['É PA ou PG?', 'Classifique $(2, 6, 18, 54, …)$ e $(2, 6, 10, 14, …)$.', [['Primeira', 'Quocientes: $6 ÷ 2 = 18 ÷ 6 = 3$: <strong>PG</strong> de razão $3$.'], ['Segunda', 'Diferenças: $6 − 2 = 10 − 6 = 4$: <strong>PA</strong> de razão $4$.']], 'A primeira é PG ($q = 3$) e a segunda é PA ($r = 4$).'],
    ['Juros compostos', 'R$ 1.000 rendem $10$% ao mês. Qual o montante após $3$ meses?', [['Razão', '$q = 1,1$.'], ['Montante', '$a_{4} = 1000 · 1,1^{3} = 1000 · 1,331 = 1331$.']], 'O montante é R$ 1.331,00.']
  ].map(e => e),
  pratique: [
    ['Termo geral', 'O 6º termo da PG $(2, 6, 18, …)$ é:', ['$162$', '$324$', '$486$', '$972$'], 2, '$a_{6} = 2 · 3^{5} = 486$. <strong>Alternativa C.</strong>'],
    ['Razão', 'Em uma PG, $a_{1} = 5$ e $a_{4} = 40$. A razão é:', ['$2$', '$3$', '$5$', '$8$'], 0, '$40 = 5 · q^{3}$ ⇒ $q^{3} = 8$ ⇒ $q = 2$. <strong>Alternativa A.</strong>'],
    ['Poupança', 'Amadeu tem R$ 2.400, poupa R$ 420 por mês (PA) e quer uma moto de R$ 6.180. Em quantos meses?', ['$7$', '$8$', '$9$', '$10$'], 2, '$2400 + 420 · n ≥ 6180$ ⇒ $n ≥ 9$. <strong>Alternativa C.</strong>']
  ],
  enem: ['Aplicação financeira', 'Uma aplicação rende $10$% ao mês e o saldo inicial é de R$ 2.000. O saldo após $2$ meses é:', ['R$ 2.200', 'R$ 2.400', 'R$ 2.420', 'R$ 2.440', 'R$ 2.600'], 2, '$2000 · 1,1^{2} = 2000 · 1,21 = 2420$. <strong>Alternativa C.</strong>'],
  cuidados: [['Confundir razão com diferença', 'Na PG o que é constante é o <strong>quociente</strong>, não a diferença.'], ['Expoente n em vez de n − 1', 'Do $a_{1}$ ao $a_{n}$ há $n − 1$ multiplicações.'], ['Porcentagem como razão', '$10$% de aumento é $q = 1,1$, não $0,1$.'], ['Chamar de PG o que é PA', 'Teste sempre por diferença e por quociente.']],
  quiz: [{ q: 'O termo geral de uma PG é:', o: ['$a_{1} + (n − 1) q$', '$a_{1} · q^{n−1}$', '$a_{1} · n · q$', '$q^{n}$'], a: 1 }, { q: 'A sequência $(5, 10, 20, 40)$ é uma PG de razão:', o: ['$2$', '$5$', '$10$', '$35$'], a: 0 }, { q: 'Um aumento de $5$% ao mês corresponde à razão:', o: ['$0,05$', '$1,05$', '$5$', '$1,5$'], a: 1 }, { q: 'Na PG $(81, 27, 9, …)$ a razão é:', o: ['$3$', '$ {1|3}$', '$−3$', '$54$'].map(t => t.replace('${', '$ {')), a: 1 }],
  fecha: { cards: [['Razão', '$q = a_{2} ÷ a_{1}$ (quociente constante).'], ['Termo geral', '$a_{n} = a_{1} · q^{n−1}$.'], ['PA × PG', 'Soma de $r$ (linear) contra multiplicação por $q$ (exponencial).']], msg: 'A PG cresce (ou decresce) em ritmo exponencial. Próxima retomada: a soma dos termos de uma PG.' }
});

// ===================== R16: soma da PG =====================
const b = R.build({
  eb: 'Matemática · 2ª série · Retomada R16', h1: 'Retomada: <span style="color:var(--primary);">soma dos termos de uma PG</span>',
  sub: 'Na lenda do xadrez, um grão de trigo na 1ª casa, dois na 2ª, quatro na 3ª, e assim por diante: a soma dos grãos nas 64 casas é um número gigantesco. A soma de uma PG tem fórmula própria, até para infinitos termos quando a razão é pequena.',
  badges: [['Sₙ = a₁ (qⁿ − 1) ÷ (q − 1)'], ['soma infinita', 'growth'], ['|q| < 1', 'decay']],
  roteiro: ['Da lenda do xadrez à soma infinita.', [['Soma finita', 'Sₙ de uma PG', 'bulb'], ['A fórmula', 'a₁ (qⁿ − 1) ÷ (q − 1)', 'target'], ['q entre 0 e 1', 'a soma não explode', 'chart'], ['Soma infinita', 'a₁ ÷ (1 − q), com |q| < 1', 'link'], ['Dízimas', 'frações geratrizes', 'scale']]],
  objetivos: ['Calcular a <strong>soma dos $n$ primeiros termos</strong> de uma PG: $S_{n} = {a_{1} (q^{n} − 1)|q − 1}$.', 'Calcular a <strong>soma infinita</strong> $S = {a_{1}|1 − q}$ quando $|q| < 1$.', 'Resolver problemas de <strong>acúmulo</strong> (lenda do xadrez, bola que quica, dízimas periódicas).'],
  dica: 'Antes de somar infinitos termos, confira <strong>$|q| < 1$</strong>. Se $|q| ≥ 1$, a soma infinita não existe (diverge).',
  abertura: { titulo: 'A lenda do xadrez', texto: 'O inventor do xadrez pediu um grão de trigo na 1ª casa, dois na 2ª, quatro na 3ª, e assim por diante, dobrando até a 64ª casa. Os grãos formam uma PG de razão $2$. A soma cresce de forma impressionante.',
    extra: W.box('Soma de uma PG', W.row(W.nm('s16-a', 'a₁', 1, 'any'), W.nm('s16-q', 'razão q', 2, 'any'), W.rg('s16-n', 'n', 1, 20, 1, 10, '')) + W.svg('s16-s', '0 0 360 200', '340px') + W.txt('s16-t', 'Sₙ: ') + W.hint('s16-h')),
    mini: ['A soma $1 + 2 + 4 + 8$ vale:', ['$14$', '$15$', '$16$', '$31$'], 1, '$S_{4} = 1 · (2^{4} − 1) ÷ (2 − 1) = 15$.'] },
  teoria: [
    { eb: 'Teoria · soma da PG', titulo: 'Soma finita e soma infinita', html: `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Soma dos $n$ primeiros termos</strong> ($q ≠ 1$): $S_{n} = {a_{1} · (q^{n} − 1)|q − 1}$. Se $q = 1$, $S_{n} = n · a_{1}$.</li>
                <li><strong>Soma infinita</strong> com $|q| < 1$: $S = {a_{1}|1 − q}$ (os termos tendem a zero e a soma “se acomoda”).</li>
                <li>Com $|q| ≥ 1$ a soma infinita <strong>não existe</strong> (diverge).</li>
                <li>Aplicação: dízima periódica. $0,333… = 0,3 + 0,03 + … = {0,3|1 − 0,1} = {1|3}$.</li>
              </ul>
            </div>
            <div><p class="hint">No widget, com $|q| < 1$ a soma $S_{n}$ se aproxima do limite $ {a_{1}|1 − q}$ à medida que $n$ cresce.</p></div>
          </div>` }
  ],
  exemplos: [
    ['Soma de 10 termos', 'Calcule $1 + 2 + 4 + … + 2^{9}$.', [['Dados', '$a_{1} = 1$, $q = 2$, $n = 10$.'], ['Soma', '$S_{10} = {1 · (2^{10} − 1)|2 − 1} = 1023$.']], 'A soma é $1023$.'],
    ['Soma de 8 termos', 'Calcule a soma dos $8$ primeiros termos da PG $(3, 6, 12, …)$.', [['Dados', '$a_{1} = 3$, $q = 2$, $n = 8$.'], ['Soma', '$S_{8} = {3 · (256 − 1)|1} = 765$.']], 'A soma é $765$.'],
    ['Soma infinita', 'Calcule $12 + 4 + {4|3} + …$ (infinitos termos).', [['Razão', '$q = 4 ÷ 12 = {1|3}$, e $|q| < 1$.'], ['Soma', '$S = {12|1 − {1|3}} = {12|{2|3}} = 18$.']], 'A soma é $18$.'],
    ['Dízima periódica', 'Escreva $0,555…$ como fração.', [['Como PG', '$0,5 + 0,05 + 0,005 + …$: $a_{1} = 0,5$ e $q = 0,1$.'], ['Soma', '$S = {0,5|1 − 0,1} = {0,5|0,9} = {5|9}$.']], '$0,555… = {5|9}$.'],
    ['A bola que quica', 'Uma bola é solta de $8$ m e, a cada quique, sobe $ {1|2}$ da altura anterior. Qual a distância total percorrida até parar?', [['Descida inicial', '$8$ m.'], ['Subidas e descidas', 'Cada quique soma subida e descida: $2 · (4 + 2 + 1 + …)$.'], ['Soma', '$4 + 2 + 1 + … = {4|1 − {1|2}} = 8$; total: $8 + 2 · 8 = 24$.']], 'A bola percorre $24$ m.']
  ],
  pratique: [
    ['Soma finita', 'A soma $2 + 6 + 18 + 54$ vale:', ['$60$', '$80$', '$120$', '$162$'], 1, '$S_{4} = 2 · (81 − 1) ÷ 2 = 80$. <strong>Alternativa B.</strong>'],
    ['Soma infinita', 'A soma $1 + {1|2} + {1|4} + {1|8} + …$ vale:', ['$1,5$', '$2$', '$2,5$', '$3$'], 1, '$S = {1|1 − {1|2}} = 2$. <strong>Alternativa B.</strong>'],
    ['Dízima', 'A dízima $0,222…$ é igual a:', ['${1|5}$', '${2|9}$', '${1|4}$', '${2|11}$'].map(t => t.replace('${', '$ {')), 1, '$S = {0,2|1 − 0,1} = {2|9}$. <strong>Alternativa B.</strong>']
  ],
  enem: ['Lenda do xadrez (10 casas)', 'Em um tabuleiro de $10$ casas, colocam-se $1$ grão na 1ª, $2$ na 2ª, $4$ na 3ª, dobrando a cada casa. O total de grãos nas $10$ casas é:', ['$512$', '$1000$', '$1023$', '$1024$', '$2046$'], 2, '$S_{10} = 2^{10} − 1 = 1023$. <strong>Alternativa C.</strong>'],
  cuidados: [['Soma infinita com |q| ≥ 1', 'Não existe: a soma diverge.'], ['Usar q no lugar de qⁿ', 'A fórmula tem $q^{n}$, não $q$.'], ['Esquecer o denominador q − 1', 'Divida por $q − 1$ (ou por $1 − q$ na soma infinita).'], ['Dízima sem identificar a₁ e q', 'Para $0,\\overline{3}$ use $a_{1} = 0,3$ e $q = 0,1$.'.replace('\\overline{3}', '333…')]],
  quiz: [{ q: 'A soma de uma PG infinita só existe se:', o: ['$q > 1$', '$|q| < 1$', '$q = 1$', '$q < −1$'], a: 1 }, { q: 'Com $a_{1} = 1$ e $q = 2$, $S_{3}$ vale:', o: ['$5$', '$7$', '$8$', '$9$'], a: 1 }, { q: 'A soma infinita de $a_{1} = 6$ e $q = {1|2}$ é:'.replace('${', '$ {'), o: ['$6$', '$9$', '$12$', '$18$'], a: 2 }, { q: 'Na soma finita da PG o denominador é:', o: ['$q$', '$q + 1$', '$q − 1$', '$n$'], a: 2 }],
  fecha: { cards: [['Soma finita', '$S_{n} = a_{1} (q^{n} − 1) ÷ (q − 1)$.'], ['Soma infinita', '$S = a_{1} ÷ (1 − q)$, com $|q| < 1$.'], ['Aplicações', 'Lenda do xadrez, quiques da bola, dízimas periódicas.']], msg: 'Fechamos as retomadas do 2º trimestre: equação do 2º grau, funções, sistemas, PA e PG.' }
});

const pages = [];
pages.push({ out: BASE + 'aula-1-retomada-pa-e-pg.html', html: K.deck({
  title: 'Retomada: PA e PG, termo geral — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Retomada R15 · PA e PG', slides: a,
  extra: WJS + BIND + UT + String.raw`
  bind(['g15-a', 'g15-r', 'g15-q', 'g15-n'], function(){ var a1 = +$('g15-a').value, r = +$('g15-r').value, q = +$('g15-q').value, n = +$('g15-n').value; $('g15-nv').textContent = n; if(!isFinite(a1) || !isFinite(r) || !isFinite(q)){ $('g15-s').innerHTML = ''; return; }
    var i, pa = [], pg = [], hi = 1; for(i = 1; i <= n; i++){ pa.push(a1 + (i - 1) * r); pg.push(a1 * Math.pow(q, i - 1)); hi = Math.max(hi, pa[i - 1], pg[i - 1]); } hi = Math.min(hi, 400);
    var svg = $('g15-s'), P = plano(svg, 0, 13, 0, Math.ceil(hi * 1.05), 360, 220, 0); pa.forEach(function(v, k){ if(v <= hi * 1.05) ponto(svg, P, k + 1, v, 'var(--primary)', ''); }); pg.forEach(function(v, k){ if(v <= hi * 1.05 && v >= 0) ponto(svg, P, k + 1, v, 'var(--growth)', ''); });
    $('g15-t').textContent = pt(pa[n - 1]) + ' · ' + pt(pg[n - 1]); $('g15-h').textContent = 'Azul: PA (soma ' + pt(r) + '); laranja: PG (multiplica por ' + pt(q) + '). Com q > 1 a PG logo ultrapassa a PA. (O desenho corta valores acima de 400.)'; });`
}) });
pages.push({ out: BASE + 'aula-2-retomada-soma-da-pg.html', html: K.deck({
  title: 'Retomada: soma dos termos de uma PG — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Retomada R16 · Soma da PG', slides: b,
  extra: WJS + BIND + UT + String.raw`
  bind(['s16-a', 's16-q', 's16-n'], function(){ var a1 = +$('s16-a').value, q = +$('s16-q').value, n = +$('s16-n').value; $('s16-nv').textContent = n; if(!isFinite(a1) || !isFinite(q)){ $('s16-s').innerHTML = ''; return; }
    var svg = $('s16-s'), W = 360, H = 200, pad = 22, vals = [], i, mx = 0, S = 0; for(i = 0; i < n; i++){ var v = a1 * Math.pow(q, i); vals.push(v); S += v; mx = Math.max(mx, Math.abs(v)); } mx = mx || 1;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = ''; var bw = (W - 2 * pad) / n, base = H - pad;
    vals.forEach(function(v, k){ var h = Math.min(Math.abs(v) / mx * (H - 2 * pad), H - 2 * pad); el('rect', {x: pad + k * bw + 1, y: base - h, width: Math.max(bw - 2, 1), height: h, fill: v >= 0 ? 'var(--primary)' : 'var(--danger)', 'fill-opacity': 0.75}, svg); });
    $('s16-t').textContent = pt(S, 4); $('s16-h').textContent = Math.abs(q) < 1 ? 'Com |q| < 1 a soma tende a ' + pt(a1 / (1 - q), 4) + ' (soma infinita a₁ ÷ (1 − q)).' : (q === 1 ? 'q = 1: Sₙ = n · a₁.' : 'Com |q| ≥ 1 a soma infinita não existe: Sₙ = ' + pt(S, 4) + ' cresce sem limite.'); });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Retomada: progressão geométrica', accent: 'success', icon: 'curve-up',
  aulas: [['Aula R15', 'Retomada: PA e PG; termo geral da PG', 'aula-1-retomada-pa-e-pg.html'], ['Aula R16', 'Retomada: soma dos termos de uma PG', 'aula-2-retomada-soma-da-pg.html']],
  pendente: true
}, pages };
