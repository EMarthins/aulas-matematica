// Unidade 20 — Polinômios: raízes e decomposição em fatores do 1º grau (aulas 57 e 58)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cMemoria } = K;
const { graf, amostra, PL } = require('./graf.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'polinomios-e-fatoracao', BASE = 'aulas/1-ano/2-tri/' + DIR + '/';
const KEY = 'm1u20', BRAND = 'Polinômios e Fatoração', CAP = 'Aulas 57 e 58';
const pages = [];

const PJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function lista(txt){ return txt.split(/[;]+/).map(function(s){ return s.trim().replace(',', '.'); }).filter(function(s){ return s !== ''; }).map(Number); }
  function sup(n){ var m = {'0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'}; return String(n).split('').map(function(c){ return m[c] || c; }).join(''); }
  function textoPoli(co){ var g = co.length - 1, s = '', i; for(i = 0; i <= g; i++){ var c = co[i], e = g - i; if(Math.abs(c) < 1e-12) continue;
      var ab = Math.abs(c), parte = (ab === 1 && e > 0 ? '' : pt(ab)) + (e > 0 ? 'x' + (e > 1 ? sup(e) : '') : ''); s += (s === '' ? (c < 0 ? '−' : '') : (c < 0 ? ' − ' : ' + ')) + parte; } return s === '' ? '0' : s; }
  function avalia(co, x){ var r = 0; co.forEach(function(c){ r = r * x + c; }); return r; }
  function expande(a, raizes){ var co = [a]; raizes.forEach(function(r){ var n = co.length + 1, novo = new Array(n).fill(0); for(var i = 0; i < co.length; i++){ novo[i] += co[i]; novo[i + 1] -= co[i] * r; } co = novo; }); return co; }
`;

// ===================== AULA 1: polinômios e raízes =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 57', h1: 'Polinômios e suas raízes: <span style="color:var(--primary);">peças que se encaixam</span>',
  sub: 'Um carro não nasce de uma peça só: é montado de partes simples. Um polinômio também pode ser montado a partir de fatores simples, e as raízes são a chave desse encaixe.',
  badges: [['grau'], ['valor numérico', 'growth'], ['p(r) = 0: raiz', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do polinômio às suas raízes.', [
  ['O que é um polinômio', 'termos, coeficientes e grau', 'bulb'],
  ['Valor numérico', 'substituir x e calcular', 'chart'],
  ['Raiz', 'valor que anula o polinômio', 'target'],
  ['Raízes de grau 2', 'equação do 2º grau', 'link'],
  ['Mais de uma raiz', 'testar valores inteiros', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer um <strong>polinômio</strong> e dizer seu <strong>grau</strong> e <strong>coeficientes</strong>.',
  'Calcular o <strong>valor numérico</strong> $p(x)$.',
  'Entender <strong>raiz</strong> como valor que torna $p(x) = 0$.',
  'Encontrar raízes <strong>testando valores</strong> e pela equação do 2º grau.'
], 'Dica', 'Ao calcular $p(−2)$, use parênteses e respeite a ordem: <strong>potências</strong>, depois <strong>multiplicações</strong>, depois somas e subtrações.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Uma fábrica monta carros por peças', `
          ${lede('Uma fábrica de carros <strong>não</strong> funde o carro inteiro numa peça só: monta módulos pequenos que se encaixam. Em Matemática também grandes expressões podem ser <strong>desmontadas em peças menores</strong> — os fatores. Para chegar lá precisamos primeiro conhecer o material: os <strong>polinômios</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('O polinômio $x^{3} − 6x^{2} + 11x − 6$ tem grau:', ['1', '2', '3', '4'], 2, 'O grau é o <strong>maior expoente</strong> de $x$ com coeficiente diferente de zero: aqui é $3$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Polinômio: $p(x) = a_n x^{n} + ... + a_1 x + a_0$. <strong>Raiz</strong>: valor $r$ com $p(r) = 0$.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · polinômio', 'Termos, grau e coeficientes', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Polinômio na variável $x$: $p(x) = a_n x^{n} + a_{n−1} x^{n−1} + ... + a_1 x + a_0$, com expoentes naturais.</li>
                <li><strong>Coeficientes</strong>: $a_n, ..., a_0$. <strong>Grau</strong>: maior $n$ com $a_n ≠ 0$.</li>
                <li>Se todos os coeficientes forem zero, o polinômio é <strong>nulo</strong> (sem grau definido).</li>
                <li><strong>Valor numérico</strong>: $p(c)$, substituindo $x$ por $c$.</li>
                <li><strong>Raiz</strong>: $c$ tal que $p(c) = 0$. Um polinômio de grau $n$ tem <strong>no máximo $n$ raízes</strong> reais.</li>
              </ul>
            </div>
            ${W.box('Valor numérico e raízes inteiras', '<div><label>Coeficientes, do maior grau ao termo constante (separe por ponto e vírgula)</label><input type="text" id="p1-c" value="1; -6; 11; -6" inputmode="decimal"></div>' + W.nm('p1-x', 'x', 10, 'any') + W.txt('p1-l', 'Polinômio: ') + W.txt('p1-v', 'p(x): ') + W.txt('p1-r', 'Raízes inteiras de −8 a 8: ') + W.hint('p1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Valor numérico e raízes', 'Para $p(x) = x^{3} − 6x^{2} + 11x − 6$, calcule $p(10)$, $p(1)$, $p(2)$ e $p(3)$. O que você conclui?', [
  ['p(10)', '$1\\ 000 − 600 + 110 − 6 = 504$.'],
  ['p(1), p(2) e p(3)', '$p(1) = 1 − 6 + 11 − 6 = 0$ · $p(2) = 8 − 24 + 22 − 6 = 0$ · $p(3) = 27 − 54 + 33 − 6 = 0$.'],
  ['Conclusão', 'Os valores $1$, $2$ e $3$ <strong>anulam</strong> o polinômio: são raízes.']
], 'Raízes $1$, $2$ e $3$ — o polinômio de grau 3 tem três raízes reais.'));
a.push(exemplo('Exemplo resolvido', 'Raízes de um polinômio de grau 2', 'Encontre as raízes de $x^{2} + 3x − 4$.', [
  ['Equação', '$x^{2} + 3x − 4 = 0$.'],
  ['Soma e produto', 'Soma $−3$ e produto $−4$: os números são $−4$ e $1$.'],
  ['Teste', '$(−4)^{2} + 3(−4) − 4 = 16 − 12 − 4 = 0$ ✓ e $1 + 3 − 4 = 0$ ✓.']
], 'Raízes $−4$ e $1$.', 'growth'));

a.push(pratique('Valor numérico', 'Para $p(x) = x^{3} − 6x^{2} + 11x − 6$, o valor de $p(4)$ é:',
  ['0', '6', '10', '18', '24'], 1,
  '$64 − 96 + 44 − 6 = 6$. <strong>Alternativa B.</strong> (Como $p(4) ≠ 0$, 4 não é raiz.)'));
a.push(pratique('Raízes', 'As raízes do polinômio $x^{2} − x − 12$ são:',
  ['−4 e 3', '4 e −3', '−4 e −3', '4 e 3', '−1 e 12'], 1,
  'Soma $1$ e produto $−12$: $4$ e $−3$. Teste: $16 − 4 − 12 = 0$ ✓. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Raiz de grau 3', 'Qual dos números é raiz do polinômio $p(x) = x^{3} − 2x^{2} − 5x + 6$?',
  ['−1', '0', '1', '2', '4'], 2,
  '$p(1) = 1 − 2 − 5 + 6 = 0$. Os outros: $p(−1) = 8$, $p(0) = 6$, $p(2) = −4$, $p(4) = 18$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os polinômios enganam', [
  ['Esquecer parênteses em x negativo', '$p(−2)$ de $x^{3}$ é $(−2)^{3} = −8$, não $−2^{3}$ lido de outro modo.'],
  ['Confundir grau e número de termos', 'Grau é o maior expoente, não a quantidade de termos.'],
  ['Achar que há sempre n raízes reais', 'Grau $n$ tem <strong>no máximo</strong> $n$ raízes reais (pode ter menos).'],
  ['Testar um só valor', 'Para achar raízes, teste vários valores (divisores do termo constante ajudam).']
]));
a.push(quiz([
  { q: 'O grau de $2x^{4} − x + 7$ é:', o: ['2', '3', '4', '7'], a: 2 },
  { q: 'Se $p(2) = 0$, então 2 é:', o: ['coeficiente de p', 'raiz de p', 'grau de p', 'valor de p(0)'], a: 1 },
  { q: 'O valor numérico de $x^{2} − 3x − 10$ em $x = 5$ é:', o: ['0', '5', '10', '−10'], a: 0 },
  { q: 'Um polinômio de grau 3 tem, no máximo:', o: ['1 raiz real', '2 raízes reais', '3 raízes reais', '4 raízes reais'], a: 2 }
]));
a.push(fechamento([
  ['Polinômio', 'Soma de termos com expoentes naturais; grau = maior expoente.'],
  ['Valor numérico', 'Substitua x e calcule com parênteses.'],
  ['Raiz', 'p(r) = 0; no máximo n raízes para grau n.']
], 'Peças simples, raízes à vista: o início da decomposição.'));

pages.push({ out: BASE + 'aula-1-polinomios-e-raizes.html', html: K.deck({
  title: 'Polinômios e raízes — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 57 · Polinômios e raízes', slides: a,
  extra: WJS + BIND + PJS + String.raw`
  bind(['p1-c', 'p1-x'], function(){ var co = lista($('p1-c').value), x = +$('p1-x').value; if(!co.length || !co.every(isFinite) || co.length > 8 || co[0] === 0){ $('p1-l').textContent = 'use de 1 a 7 coeficientes; o primeiro deve ser diferente de zero'; $('p1-v').textContent = ''; $('p1-r').textContent = ''; return; }
    $('p1-l').textContent = 'p(x) = ' + textoPoli(co) + ' (grau ' + (co.length - 1) + ')'; $('p1-v').textContent = isFinite(x) ? pt(avalia(co, x)) + (avalia(co, x) === 0 ? ' → x é raiz' : '') : '—';
    var r = []; for(var k = -8; k <= 8; k++) if(Math.abs(avalia(co, k)) < 1e-9) r.push(k); $('p1-r').textContent = r.length ? r.map(function(v){ return pt(v); }).join(', ') : 'nenhuma';
    $('p1-h').textContent = 'Grau ' + (co.length - 1) + ': no máximo ' + (co.length - 1) + ' raízes reais.'; });`
}) });

// ===================== AULA 2: decomposição em fatores =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 58', h1: 'Decomposição em fatores do 1º grau: <span style="color:var(--growth);">montando o polinômio pelas raízes</span>',
  sub: 'Se você conhece as raízes de um polinômio, pode escrevê-lo como produto de fatores (x − raiz). E se conhece a forma fatorada, enxerga as raízes de imediato.',
  badges: [['p(x) = a(x − r₁)(x − r₂)…'], ['do produto às raízes', 'growth'], ['do gráfico à lei', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do menu de criação ao resultado.', [
  ['Forma fatorada', 'a · (x − r₁) · (x − r₂) · …', 'bulb'],
  ['Fatorar', 'achar raízes e montar o produto', 'chart'],
  ['Ler as raízes', 'cada fator zerado dá uma raiz', 'target'],
  ['O papel do a', 'coeficiente líder', 'link'],
  ['Gráfico', 'raízes no gráfico + um ponto', 'scale']
]));
b.push(objetivosSlide([
  'Escrever um polinômio na <strong>forma fatorada</strong> a partir das raízes.',
  'Obter as <strong>raízes</strong> a partir da forma fatorada.',
  'Determinar o <strong>coeficiente $a$</strong> usando um ponto conhecido.',
  '<strong>Expandir</strong> o produto para recuperar a forma geral.'
], 'Dica', 'Raiz $r$ ⇒ fator $(x − r)$. Atenção ao <strong>sinal</strong>: raiz $−3$ gera o fator $(x + 3)$.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'O menu de criação de personagem', `
          ${lede('Ao criar um personagem de jogo você escolhe opções <strong>individuais</strong> (força, velocidade, aparência) e o personagem final nasce delas. Na decomposição, as escolhas são as <strong>raízes</strong>: cada raiz vira um fator e o produto dos fatores é o polinômio.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A equação $(x + 1)(x − 2) = 0$ tem como raízes:', ['1 e 2', '−1 e 2', '−1 e −2', '1 e −2'], 1, 'Cada fator zerado dá uma raiz: $x + 1 = 0$ ⇒ $x = −1$; $x − 2 = 0$ ⇒ $x = 2$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">$p(x) = a(x − r_1)(x − r_2) ... (x − r_n)$, onde $a$ é o coeficiente do termo de maior grau e $r_i$ são as raízes.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · forma fatorada', 'Do produto aos termos e de volta', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Um polinômio de grau $n$ com $n$ raízes reais $r_1, ..., r_n$ se decompõe em <strong>$n$ fatores do 1º grau</strong>.</li>
                <li>$p(x) = a(x − r_1)(x − r_2) ... (x − r_n)$.</li>
                <li>Para <strong>expandir</strong>, use a distributiva: $(x + 1)(x − 2) = x^{2} − x − 2$.</li>
                <li>Para <strong>fatorar</strong> um de grau 2: ache as raízes e monte $a(x − x')(x − x'')$.</li>
                <li>$a$ <strong>não</strong> vem das raízes: vem de um ponto extra (por exemplo, $p(0)$).</li>
              </ul>
            </div>
            ${W.box('Fatorar e expandir', W.row(W.nm('f1-a', 'a', 2, 'any'), W.nm('f1-r1', 'raiz 1', 3, 'any')) + W.row(W.nm('f1-r2', 'raiz 2', -2, 'any'), W.nm('f1-r3', 'raiz 3 (opcional)', '', 'any')) + W.txt('f1-f', 'Forma fatorada: ') + W.txt('f1-e', 'Forma expandida: ') + W.txt('f1-z', 'Valor em x = 0: ') + W.hint('f1-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Fatorando x² − 2x − 24', 'Escreva $x^{2} − 2x − 24$ na forma fatorada.', [
  ['Ache as raízes', 'Soma $2$ e produto $−24$: $6$ e $−4$.'],
  ['Monte os fatores', '$a = 1$: $(x − 6)(x − (−4)) = (x − 6)(x + 4)$.'],
  ['Confira expandindo', '$(x − 6)(x + 4) = x^{2} + 4x − 6x − 24 = x^{2} − 2x − 24$ ✓.']
], '$x^{2} − 2x − 24 = (x − 6)(x + 4)$.'));
b.push(exemplo('Exemplo resolvido', 'Do gráfico à lei', 'Uma função quadrática tem gráfico que corta o eixo $x$ em $−1$ e $4$ e o eixo $y$ em $(0, 8)$. Determine a lei.', [
  ['Forma fatorada', '$f(x) = a(x + 1)(x − 4)$ (raízes $−1$ e $4$).'],
  ['Use (0, 8)', '$8 = a(0 + 1)(0 − 4) = −4a$ ⇒ $a = −2$.'],
  ['Expanda', '$f(x) = −2(x^{2} − 3x − 4) = −2x^{2} + 6x + 8$.']
], '$f(x) = −2(x + 1)(x − 4) = −2x^{2} + 6x + 8$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Um polinômio de grau 3', 'As raízes de um polinômio $q(x)$ de grau 3 são $−3$, $−1$ e $2$, com coeficiente líder $1$. Escreva a forma fatorada e calcule $q(0)$.', [
  ['Forma fatorada', '$q(x) = (x + 3)(x + 1)(x − 2)$.'],
  ['Valor em x = 0', '$q(0) = 3 · 1 · (−2) = −6$.'],
  ['Confira', 'Expandindo: $x^{3} + 2x^{2} − 5x − 6$, e $q(0) = −6$ ✓.']
], '$q(x) = (x + 3)(x + 1)(x − 2) = x^{3} + 2x^{2} − 5x − 6$.', 'growth'));

b.push(pratique('Forma fatorada', 'A equação $x^{2} − 2x − 24 = 0$ pode ser escrita como:',
  ['(x − 4)(x + 6) = 0', '(x + 4)(x − 6) = 0', '(x + 4)(x + 6) = 0', '(x − 4)(x − 6) = 0', '(x − 2)(x + 12) = 0'], 1,
  'Raízes $6$ e $−4$: $(x − 6)(x + 4) = 0$. <strong>Alternativa B.</strong>'));
b.push(pratique('Raízes pelo produto', 'As raízes do polinômio $p(x) = (x + 7)(x − 3)(x − 4)$ são:',
  ['−7, −3 e 4', '−7, 3 e 4', '−4, 3 e 7', '7, −3 e −4', '−3, 4 e 7'], 1,
  'Cada fator zerado: $x = −7$, $x = 3$, $x = 4$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('O valor de a', 'Uma função quadrática tem zeros $−1$ e $4$ e seu gráfico passa por $(0, 8)$. O coeficiente de $x^{2}$ é:',
  ['−4', '−2', '−1', '2', '4'], 1,
  '$f(x) = a(x + 1)(x − 4)$; $f(0) = −4a = 8$ ⇒ $a = −2$. <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a fatoração engana', [
  ['Sinal do fator', 'Raiz $−4$ ⇒ fator $(x + 4)$; raiz $6$ ⇒ fator $(x − 6)$.'],
  ['Esquecer o coeficiente a', 'Sem $a$, o produto $(x + 1)(x − 4)$ não é a função do gráfico: falta multiplicar por $a = −2$.'],
  ['Achar que o a vem das raízes', 'O $a$ vem de um ponto extra, como a ordenada na origem.'],
  ['Conferir sem expandir', 'Expanda o produto e compare com o polinômio dado.']
]));
b.push(quiz([
  { q: 'As raízes de $(x − 5)(x + 2)$ são:', o: ['5 e 2', '5 e −2', '−5 e 2', '−5 e −2'], a: 1 },
  { q: 'A forma fatorada de $x^{2} − 9$ é:', o: ['(x − 3)(x − 3)', '(x − 3)(x + 3)', '(x + 9)(x − 1)', '(x − 9)(x + 1)'], a: 1 },
  { q: 'Raízes $1$ e $2$ e $a = 3$: $p(x)$ é:', o: ['3(x + 1)(x + 2)', '3(x − 1)(x − 2)', '(x − 3)(x − 1)(x − 2)', '(x − 1)(x − 2)'], a: 1 },
  { q: '$(x + 1)(x − 2)$ expandido é:', o: ['x² − x − 2', 'x² + x − 2', 'x² − 2', 'x² − x + 2'], a: 0 }
]));
b.push(fechamento([
  ['Forma fatorada', 'p(x) = a(x − r₁)…(x − rₙ).'],
  ['Sinal do fator', 'Raiz r ⇒ fator (x − r).'],
  ['O a', 'Determine-o com um ponto conhecido.']
], 'Raízes dão fatores; um ponto dá o coeficiente.'));

pages.push({ out: BASE + 'aula-2-decomposicao-em-fatores.html', html: K.deck({
  title: 'Decomposição em fatores do 1º grau — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 58 · Decomposição em fatores', slides: b,
  extra: WJS + BIND + PJS + String.raw`
  function fator(r){ return r === 0 ? 'x' : r > 0 ? '(x − ' + pt(r) + ')' : '(x + ' + pt(-r) + ')'; }
  bind(['f1-a', 'f1-r1', 'f1-r2', 'f1-r3'], function(){ var a = +$('f1-a').value, r1 = +$('f1-r1').value, r2 = +$('f1-r2').value, t3 = $('f1-r3').value.trim(), r3 = t3 === '' ? null : +t3;
    if(!isFinite(a) || a === 0 || !isFinite(r1) || !isFinite(r2) || (r3 !== null && !isFinite(r3))){ $('f1-f').textContent = a === 0 ? 'a não pode ser zero' : '—'; $('f1-e').textContent = ''; $('f1-z').textContent = ''; return; }
    var rs = [r1, r2].concat(r3 === null ? [] : [r3]), co = expande(a, rs);
    $('f1-f').textContent = (a === 1 ? '' : a === -1 ? '−' : pt(a)) + rs.map(fator).join(''); $('f1-e').textContent = 'p(x) = ' + textoPoli(co) + ' (grau ' + rs.length + ')'; $('f1-z').textContent = pt(avalia(co, 0));
    $('f1-h').textContent = 'Raiz r gera o fator (x − r). O termo constante é a · (−1)ⁿ · produto das raízes.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Polinômios e fatoração: <span>raízes, fatores e coeficiente a</span>',
  lede: 'Grau, valor numérico e raízes de um polinômio; forma fatorada a(x − r₁)(x − r₂)…; leitura das raízes e determinação do coeficiente líder.',
  badges: ['p(r) = 0', 'fator (x − r)', 'a por um ponto'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Polinômio', 'Grau e coeficientes', 'chart', 'primary', p('Grau = maior expoente com coeficiente ≠ 0.') + call('Exemplo', 'x³ − 6x² + 11x − 6: grau 3.', 'success')],
    ['Valor numérico', 'Substituir', 'target', 'growth', p('$p(10) = 1\\ 000 − 600 + 110 − 6 = 504$') + call('Cuidado', 'Parênteses com negativos.', 'danger')],
    ['Raiz', 'p(r) = 0', 'scale', 'decay', p('Grau $n$: no máximo $n$ raízes reais.') + call('Exemplo', 'Raízes 1, 2 e 3.', 'success')],
    ['Forma fatorada', 'a(x − r₁)(x − r₂)…', 'link', 'success', p('Raiz −4 ⇒ fator $(x + 4)$.') + call('Exemplo', 'x² − 2x − 24 = (x − 6)(x + 4).', 'success')],
    ['O coeficiente a', 'Ponto extra', 'up', 'primary', p('$f(0) = a · (−r_1)(−r_2)$') + call('Exemplo', 'Raízes −1 e 4, f(0) = 8: a = −2.', 'success')],
    ['Conferência', 'Expandir', 'check', 'growth', li(['Multiplique os fatores.', 'Compare com o polinômio.', 'Teste uma raiz.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Trocar o sinal do fator.', 'Esquecer o coeficiente a.', 'Confundir grau com número de termos.', 'Achar que sempre existem n raízes reais.', 'Não conferir expandindo.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
const gq4 = graf({ xmin: -3, xmax: 6, ymin: -2, ymax: 11, px: 1, py: 2, series: [{ pts: amostra(x => -2 * (x + 1) * (x - 4), -1.8, 4.8, 60) }], marcas: [[-1, 0, '−1', -8, -8], [4, 0, '4', 8, -8], [0, 8, '(0, 8)', 10, -4]], max: '300px' });
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Polinômios e fatoração <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: valor numérico, raízes, forma fatorada, coeficiente a e raízes pelos fatores.',
  final: 'Raiz r gera o fator (x − r); o coeficiente a vem de um ponto conhecido.',
  questions: [
    { badge: 'Estilo ENEM · valor numérico', text: 'Considere $p(x) = x^{3} − 6x^{2} + 11x − 6$.', cmd: 'O valor de $p(4)$ é:', opts: ['0', '6', '10', '18', '24'], a: 1,
      sol: '<p>$64 − 96 + 44 − 6 = 6$.</p>' },
    { badge: 'Estilo ENEM · raízes', text: 'Considere o polinômio $x^{2} − x − 12$.', cmd: 'Suas raízes são:', opts: ['−4 e 3', '4 e −3', '−4 e −3', '4 e 3', '−1 e 12'], a: 1,
      sol: '<p>Soma $1$ e produto $−12$: $4$ e $−3$.</p>' },
    { badge: 'Estilo ENEM · forma fatorada', text: 'A equação $x^{2} − 2x − 24 = 0$ pode ser escrita na forma fatorada.', cmd: 'A forma fatorada é:', opts: ['(x − 4)(x + 6) = 0', '(x + 4)(x − 6) = 0', '(x + 4)(x + 6) = 0', '(x − 4)(x − 6) = 0', '(x − 2)(x + 12) = 0'], a: 1,
      sol: '<p>Raízes $6$ e $−4$: $(x − 6)(x + 4) = 0$.</p>' },
    { badge: 'Estilo ENEM · coeficiente a', text: 'O gráfico de uma função quadrática corta o eixo $x$ em $−1$ e $4$ e o eixo $y$ em $(0, 8)$.' + gq4, cmd: 'O coeficiente de $x^{2}$ é:', opts: ['−4', '−2', '−1', '2', '4'], a: 1,
      sol: '<p>$f(x) = a(x + 1)(x − 4)$; $f(0) = −4a = 8$ ⇒ $a = −2$.</p>' },
    { badge: 'Estilo ENEM · raízes pelos fatores', text: 'Um polinômio é dado na forma fatorada $p(x) = (x + 7)(x − 3)(x − 4)$.', cmd: 'Suas raízes são:', opts: ['−7, −3 e 4', '−7, 3 e 4', '−4, 3 e 7', '7, −3 e −4', '−3, 4 e 7'], a: 1,
      sol: '<p>$x + 7 = 0$ ⇒ $−7$; $x − 3 = 0$ ⇒ $3$; $x − 4 = 0$ ⇒ $4$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Memória: <span style="color:var(--growth);">polinômio e forma fatorada</span>',
  subtitle: 'Encontre os pares: cada expressão com a forma equivalente.',
  tpl: cMemoria({
    intro: 'Vire duas cartas por vez: se formarem um par (expressão e forma equivalente), elas ficam abertas.',
    final: 'Fatorar é achar as raízes e escrever (x − r) para cada uma.',
    pares: [['(x − 1)(x − 2)(x − 3)', 'raízes 1, 2 e 3'], ['x² − 5x + 6', '(x − 2)(x − 3)'], ['x² − 9', '(x − 3)(x + 3)'], ['x² + 2x + 1', '(x + 1)²'], ['2(x − 1)(x + 2)', 'raízes 1 e −2; a = 2'], ['x(x − 4)', 'raízes 0 e 4']]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Polinômios e fatoração: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: valor numérico, raízes, a e soma. Digite o número pedido.',
  final: 'Você percorreu a trilha: valor numérico, raízes, coeficiente a e relações entre raízes.',
  problems: [
    { tag: 'Valor numérico', q: 'Se $p(x) = x^{3} − 6x^{2} + 11x − 6$, quanto vale $p(4)$?', a: 6, ph: 'p(4)', hint: '64 − 96 + 44 − 6.', sol: '<p>$6$.</p>' },
    { tag: 'Valor numérico', q: 'Quanto vale $p(10)$ para o mesmo polinômio?', a: 504, ph: 'p(10)', hint: '1 000 − 600 + 110 − 6.', sol: '<p>$504$.</p>' },
    { tag: 'Raízes', q: 'Qual a <strong>maior</strong> raiz de $x^{2} − x − 12$?', a: 4, ph: 'raiz', hint: 'Soma 1, produto −12.', sol: '<p>$4$ e $−3$: a maior é $4$.</p>' },
    { tag: 'Coeficiente a', q: 'Uma quadrática tem zeros $−1$ e $4$ e passa por $(0, 8)$. Qual o valor de $a$?', a: -2, ph: 'a', hint: 'f(0) = −4a.', sol: '<p>$−4a = 8$ ⇒ $a = −2$.</p>' },
    { tag: 'Soma das raízes', q: 'Qual a soma das raízes de $x^{3} − 6x^{2} + 11x − 6$?', a: 6, ph: 'soma', hint: 'Raízes 1, 2 e 3.', sol: '<p>$1 + 2 + 3 = 6$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Polinômios e Fatoração', accent: 'primary', icon: 'algebra',
  aulas: [['Aula 57', 'Polinômios e raízes', 'aula-1-polinomios-e-raizes.html'], ['Aula 58', 'Decomposição em fatores', 'aula-2-decomposicao-em-fatores.html']],
  enem: 'Polinômios e fatoração no estilo ENEM', cria: 'Memória: polinômio e forma fatorada', pratica: 'Polinômios e fatoração: trilha de desafios'
}, pages };
