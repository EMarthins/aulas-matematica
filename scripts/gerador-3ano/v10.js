// Unidade v10 — Equação logarítmica (aula 24 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cDetetive } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'equacao-logaritmica', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v10', BRAND = 'Equação Logarítmica', CAP = 'Aula 24';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aula 24', h1: 'Equação logarítmica: <span style="color:var(--primary);">abrir o cofre pela definição</span>',
  sub: 'Se o visor mostra 100 e você digita quantas vezes multiplicar 10 por ele mesmo, a senha é 2. Equações logarítmicas pedem o mesmo: transformar o logaritmo em potência.',
  badges: [['log_a f(x) = k'], ['f(x) = aᵏ', 'growth'], ['sempre testar a condição', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Passo a passo.', [
  ['Condição de existência', 'o que x pode ser', 'bulb'],
  ['Definição', 'log_a f(x) = k ⇒ f(x) = aᵏ', 'target'],
  ['Mesma base', 'log f = log g ⇒ f = g', 'chart'],
  ['Propriedades', 'condensar somas de logaritmos', 'link'],
  ['Verificação', 'descartar raízes que violam a condição', 'scale']
]));
a.push(objetivosSlide([
  'Identificar a <strong>incógnita no logaritmando ou na base</strong> e escrever a <strong>condição de existência</strong>.',
  'Aplicar a <strong>definição</strong> para passar a equação à forma exponencial.',
  'Usar as <strong>propriedades</strong> para reduzir a um único logaritmo (ou usar substituição).',
  '<strong>Verificar</strong> cada raiz na condição de existência.'
], 'Dica', 'A condição de existência vem <strong>antes</strong> de resolver. Depois de achar as raízes, só fica a que a respeita.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O cofre dos logaritmos', `
          ${lede('O visor mostra <strong>100</strong>, mas o teclado só aceita o número de vezes que o <strong>10</strong> deve ser multiplicado por ele mesmo. Você digita 2 e o cofre abre: $log_{10} 100 = 2$.')}
          <div class="grid2" style="margin-top:6px;">
            ${card('<strong>Agora com outra base</strong><p style="font-size:.92rem;margin-top:8px;">O visor mostra <strong>64</strong> e a base é <strong>4</strong>: 4 multiplicado por ele mesmo quantas vezes dá 64? $4^{3} = 64$, logo $log_{4} 64 = 3$.</p>', 'primary')}
            ${mini('Se $log_{2} x = 5$, o valor de $x$ é:', ['7', '10', '25', '32'], 3, 'Pela definição, $x = 2^{5} = 32$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · equação logarítmica', 'Quatro situações típicas', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Condição de existência (CE):</strong> base $> 0$ e $≠ 1$; logaritmando $> 0$.</li>
                <li>$log_{a} f(x) = k$ ⇒ <strong>$f(x) = a^{k}$</strong> (definição).</li>
                <li>$log_{a} f(x) = log_{a} g(x)$ ⇒ <strong>$f(x) = g(x)$</strong> (mesma base).</li>
                <li>Soma de logaritmos: use P1 ($log_{a} b + log_{a} c = log_{a}(b · c)$) e depois a definição.</li>
                <li>Troca de variável: $(log\\ x)^{2} − 3 · log\\ x + 2 = 0$, com $y = log\\ x$.</li>
              </ul>
            </div>
            ${W.box('Resolva log_a(px + q) = k', W.row(W.nm('q1-a', 'base a', 2, 'any'), W.nm('q1-p', 'p', 1, 'any'), W.nm('q1-q', 'q', 3, 'any'), W.nm('q1-k', 'k', 4, 'any')) + W.txt('q1-e', 'Forma exponencial: ') + W.txt('q1-x', 'Solução: ') + W.txt('q1-c', 'Condição: ') + W.hint('q1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Roteiro de resolução', `
          ${tbl(['Passo', 'O que fazer', 'Exemplo: log₂(x+3) = 4'], [['1', 'Escrever a CE', '$x + 3 > 0$ ⇒ $x > −3$'], ['2', 'Passar para a forma exponencial', '$x + 3 = 2^{4} = 16$'], ['3', 'Resolver', '$x = 13$'], ['4', 'Conferir a CE', '$13 > −3$ ✓']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Raiz descartada', 'Se a raiz viola a CE, ela <strong>não</strong> é solução, mesmo que resolva a equação “sem logaritmos”.', 'success')}
            ${callout('Duas raízes válidas', 'Também é possível que as duas raízes respeitem a CE: confira uma a uma.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Definição direta', 'Resolva $log_{2}(x + 3) = 4$ e $log_{3}(2x − 1) = 2$.', [
  ['Primeira', 'CE: $x > −3$. $x + 3 = 2^{4} = 16$ ⇒ $x = 13$ ✓.'],
  ['Segunda', 'CE: $2x − 1 > 0$. $2x − 1 = 3^{2} = 9$ ⇒ $x = 5$ ✓.']
], '$x = 13$ e $x = 5$.'));
a.push(exemplo('Exemplo resolvido', 'Mesma base', 'Resolva $log(x + 1) = log(2x − 5)$.', [
  ['CE', '$x + 1 > 0$ e $2x − 5 > 0$ ⇒ $x > 2,5$.'],
  ['Igualar', '$x + 1 = 2x − 5$ ⇒ $x = 6$.'],
  ['Conferir', '$6 > 2,5$ ✓ e $log\\ 7 = log\\ 7$.']
], '$x = 6$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Soma de logaritmos', 'Resolva $log_{2} x + log_{2}(x − 2) = 3$.', [
  ['CE', '$x > 0$ e $x − 2 > 0$ ⇒ $x > 2$.'],
  ['Produto', '$log_{2}[x(x − 2)] = 3$ ⇒ $x(x − 2) = 2^{3} = 8$.'],
  ['Equação do 2º grau', '$x^{2} − 2x − 8 = 0$ ⇒ $x = 4$ ou $x = −2$.'],
  ['Conferir a CE', '$x = −2$ não serve ($−2 < 2$); $x = 4$ serve: $2 + 1 = 3$ ✓.']
], '$x = 4$ (a raiz $−2$ é descartada).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Incógnita na base', 'Resolva $log_{x} 16 = 2$.', [
  ['CE', 'Base: $x > 0$ e $x ≠ 1$.'],
  ['Definição', '$x^{2} = 16$ ⇒ $x = 4$ ou $x = −4$.'],
  ['Conferir', '$−4$ viola $x > 0$; $4$ serve.']
], '$x = 4$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'As duas raízes servem', 'Resolva $log_{2}(x^{2} − 3x) = 2$.', [
  ['CE', '$x^{2} − 3x > 0$ ⇒ $x < 0$ ou $x > 3$.'],
  ['Definição', '$x^{2} − 3x = 2^{2} = 4$ ⇒ $x^{2} − 3x − 4 = 0$ ⇒ $x = −1$ ou $x = 4$.'],
  ['Conferir', '$x = −1$: $1 + 3 = 4 > 0$ ✓. $x = 4$: $16 − 12 = 4 > 0$ ✓.']
], '$S = \\{−1, 4\\}$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Troca de variável', 'Resolva $(log\\ x)^{2} − 3 · log\\ x + 2 = 0$.', [
  ['Troca', '$y = log\\ x$ ⇒ $y^{2} − 3y + 2 = 0$ ⇒ $y = 1$ ou $y = 2$.'],
  ['Volte', '$log\\ x = 1$ ⇒ $x = 10$; $log\\ x = 2$ ⇒ $x = 100$.'],
  ['CE', '$x > 0$: os dois servem.']
], '$S = \\{10, 100\\}$.', 'growth'));

a.push(pratique('Definição', 'A solução de $log_{4}(3x + 1) = 2$ é:',
  ['3', '4', '5', '7', '15'], 2,
  '$3x + 1 = 4^{2} = 16$ ⇒ $x = 5$. <strong>Alternativa C.</strong>'));
a.push(pratique('Descartar raiz', 'A solução de $log_{2} x + log_{2}(x − 2) = 3$ é:',
  ['−2', '4', '−2 e 4', '2', '8'], 1,
  '$x(x − 2) = 8$ ⇒ $x = 4$ ou $x = −2$; só $4 > 2$ serve. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('O cofre', 'A senha $x$ de um cofre satisfaz $log_{2}(x + 3) = 4$. O valor de $x$ é:',
  ['5', '7', '11', '13', '19'], 3,
  '$x + 3 = 2^{4} = 16$ ⇒ $x = 13$. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a equação logarítmica engana', [
  ['Esquecer a CE', 'Sem conferir, a raiz $−2$ de $log_{2} x + log_{2}(x − 2) = 3$ entraria na resposta.'],
  ['Errar a potência', '$log_{3}(2x − 1) = 2$ significa $2x − 1 = 3^{2} = 9$ (e não $6$).'],
  ['Igualar logaritmandos com bases diferentes', 'Só vale se os logaritmos têm a <strong>mesma base</strong>.'],
  ['Confundir $log\\ x$ com $x$ na troca de variável', 'Depois de achar $y$, resolva $log\\ x = y$ para obter $x$.']
]));
a.push(quiz([
  { q: 'A solução de $log_{3} x = 4$ é:', o: ['12', '64', '81', '7'], a: 2 },
  { q: 'Se $log\\ (x − 1) = log\\ 4$, então $x$ vale:', o: ['3', '4', '5', '16'], a: 2 },
  { q: 'Em $log_{2} x + log_{2}(x − 2) = 3$, a condição de existência é:', o: ['$x > 0$', '$x > 2$', '$x < 2$', '$x ≠ 2$'], a: 1 },
  { q: 'Se uma raiz viola a condição de existência, ela:', o: ['é solução', 'é descartada', 'vale zero', 'dobra'], a: 1 }
]));
a.push(fechamento([
  ['Antes', 'Escreva a condição de existência.'],
  ['Durante', 'Definição, mesma base ou propriedades.'],
  ['Depois', 'Teste as raízes na condição.']
], 'Logaritmo pede cuidado em dobro: resolver e verificar.'));

pages.push({ out: BASE + 'aula-1-equacao-logaritmica.html', html: K.deck({
  title: 'Equação logarítmica — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 24 · Equação logarítmica', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['q1-a', 'q1-p', 'q1-q', 'q1-k'], function(){ var a = +$('q1-a').value, p = +$('q1-p').value, q = +$('q1-q').value, k = +$('q1-k').value;
    if(![a, p, q, k].every(isFinite) || a <= 0 || a === 1 || p === 0){ ['q1-e', 'q1-x', 'q1-c'].forEach(function(i){ $(i).textContent = '—'; }); $('q1-h').textContent = p === 0 ? 'p = 0: não há incógnita.' : 'Base inválida: a > 0 e a ≠ 1.'; return; }
    var rhs = Math.pow(a, k), x = (rhs - q) / p, lim = -q / p + 0;
    $('q1-e').textContent = (p === 1 ? '' : p === -1 ? '−' : pt(p)) + 'x ' + (q < 0 ? '− ' + pt(-q) : '+ ' + pt(q)) + ' = ' + pt(a) + '^' + pt(k) + ' = ' + pt(rhs, 4);
    $('q1-x').textContent = 'x = ' + pt(x, 4);
    $('q1-c').textContent = 'p·x + q > 0 ⇒ x ' + (p > 0 ? '> ' : '< ') + pt(lim, 4);
    $('q1-h').textContent = 'Conferência: p·x + q = ' + pt(p * x + q, 4) + ' > 0 ✓, e ' + pt(a) + '^' + pt(k) + ' = ' + pt(rhs, 4) + '. A raiz respeita a condição (potência de base positiva é sempre positiva).'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Equação logarítmica: <span>condição, definição e verificação</span>',
  lede: 'Escreva a condição de existência, passe à forma exponencial (ou iguale logaritmandos de mesma base) e descarte as raízes que violam a condição.',
  badges: ['CE primeiro', 'log_a f = k ⇒ f = aᵏ', 'verifique as raízes'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Condição', 'Antes de resolver', 'chart', 'primary', p('Base $> 0$, $≠ 1$ e logaritmando $> 0$.') + call('Exemplo', '$log_{2}(x + 3)$: $x > −3$.', 'success')],
    ['Definição', 'Forma exponencial', 'target', 'growth', p('$log_{a} f(x) = k ⇒ f(x) = a^{k}$') + call('Exemplo', '$log_{2}(x + 3) = 4$ ⇒ $x = 13$.', 'success')],
    ['Mesma base', 'Igualar logaritmandos', 'scale', 'decay', p('$log_{a} f = log_{a} g ⇒ f = g$') + call('Exemplo', '$log(x + 1) = log(2x − 5)$ ⇒ $x = 6$.', 'success')],
    ['Soma de logs', 'Condensar', 'link', 'success', p('$log_{2} x + log_{2}(x − 2) = log_{2}[x(x − 2)]$') + call('Resultado', '$x = 4$ (descarte $−2$).', 'success')],
    ['Troca de variável', 'Equação em log x', 'up', 'primary', p('$y = log\\ x$ ⇒ $y^{2} − 3y + 2 = 0$') + call('Resultado', '$x = 10$ ou $x = 100$.', 'success')],
    ['Verificação', 'Sempre', 'check', 'growth', li(['Substitua na equação.', 'Confira cada logaritmando.', 'Descarte raízes proibidas.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer a condição de existência.', 'Errar a potência na forma exponencial.', 'Igualar logaritmandos de bases diferentes.', 'Parar em $y$ na troca de variável.', 'Aceitar base negativa.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Equação logarítmica <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: definição, soma de logaritmos, troca de variável e raízes válidas.',
  final: 'Condição, definição e verificação: três passos para toda equação logarítmica.',
  questions: [
    { badge: 'Estilo ENEM · definição', text: 'A senha $x$ de um cofre satisfaz $log_{2}(x + 3) = 4$.', cmd: 'O valor de $x$ é:', opts: ['5', '7', '11', '13', '19'], a: 3,
      sol: '<p>$x + 3 = 2^{4} = 16$ ⇒ $x = 13$.</p>' },
    { badge: 'Estilo ENEM · definição', text: 'Considere a equação $log_{3}(2x − 1) = 2$.', cmd: 'A solução é:', opts: ['5', '2', '4', '9', '10'], a: 0,
      sol: '<p>$2x − 1 = 9$ ⇒ $x = 5$.</p>' },
    { badge: 'Estilo ENEM · soma de logaritmos', text: 'Considere $log_{2} x + log_{2}(x − 2) = 3$.', cmd: 'O conjunto solução é:', opts: ['$\\{−2, 4\\}$', '$\\{4\\}$', '$\\{2\\}$', '$\\{8\\}$', '$\\{−2\\}$'], a: 1,
      sol: '<p>CE: $x > 2$. $x(x − 2) = 8$ ⇒ $x = 4$ ou $x = −2$; só $4$ serve.</p>' },
    { badge: 'Estilo ENEM · troca de variável', text: 'Considere a equação $(log\\ x)^{2} − 3 · log\\ x + 2 = 0$.', cmd: 'A soma das soluções é:', opts: ['3', '12', '110', '1 000', '1 100'], a: 2,
      sol: '<p>$y = 1$ ou $y = 2$ ⇒ $x = 10$ ou $x = 100$. Soma: $110$.</p>' },
    { badge: 'Estilo ENEM · raízes válidas', text: 'Considere $log_{2}(x^{2} − 3x) = 2$.', cmd: 'A soma das soluções reais é:', opts: ['−3', '−1', '1', '3', '4'], a: 3,
      sol: '<p>$x^{2} − 3x = 4$ ⇒ $x = −1$ ou $x = 4$; as duas respeitam $x^{2} − 3x > 0$. Soma: $3$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Detetive: onde está o <span style="color:var(--decay);">erro</span>?',
  subtitle: 'Cada resolução de equação logarítmica tem uma linha errada.',
  tpl: cDetetive({
    intro: 'Leia cada resolução e clique na <strong>linha errada</strong>.',
    final: 'Os erros mais comuns: potência errada, esquecer a CE e esquecer de voltar ao x.',
    casos: [
      { titulo: 'Definição', enunciado: 'Resolva $log_{3}(2x − 1) = 2$.', linhas: ['Condição: $2x − 1 > 0$ ⇒ $x > 1 ÷ 2$.', 'Pela definição: $2x − 1 = 3^{2}$.', '$2x − 1 = 6$ ⇒ $x = 3,5$.', 'Resposta: $x = 3,5$.'], erro: 2, porque: '$3^{2} = 9$, e não 6. Então $2x − 1 = 9$ ⇒ $x = 5$.' },
      { titulo: 'Soma de logaritmos', enunciado: 'Resolva $log_{2} x + log_{2}(x − 2) = 3$.', linhas: ['Condição: $x > 2$.', 'Produto: $x(x − 2) = 2^{3} = 8$.', '$x^{2} − 2x − 8 = 0$ ⇒ $x = 4$ ou $x = −2$.', 'As duas raízes servem: $S = \\{−2, 4\\}$.'], erro: 3, porque: '$x = −2$ viola a condição $x > 2$. Só $x = 4$ é solução.' },
      { titulo: 'Mesma base', enunciado: 'Resolva $log\\ (x + 1) = log\\ (2x − 5)$.', linhas: ['Condição: $x + 1 > 0$ e $2x − 5 > 0$.', 'Igualando os logaritmandos: $x + 1 = 2x − 5$.', '$x − 2x = −5 − 1$ ⇒ $−x = −6$ ⇒ $x = −6$.', 'Resposta: $x = −6$.'], erro: 2, porque: '$−x = −6$ dá $x = 6$ (multiplique por $−1$ nos dois lados). E $x = −6$ violaria a condição.' },
      { titulo: 'Troca de variável', enunciado: 'Resolva $(log\\ x)^{2} − 3 · log\\ x + 2 = 0$.', linhas: ['Faça $y = log\\ x$: $y^{2} − 3y + 2 = 0$.', 'Raízes: $y = 1$ ou $y = 2$.', 'Volte: $x = 1$ ou $x = 2$.', 'Resposta: $S = \\{1, 2\\}$.'], erro: 2, porque: '$y = log\\ x$ ⇒ $x = 10^{y}$: $x = 10$ ou $x = 100$.' }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'growth',
  h1: 'Equação logarítmica: <span style="color:var(--growth);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: definição, outra base, incógnita na base, soma de logs e troca de variável. Digite o número pedido.',
  final: 'Você percorreu a trilha: definição, base, soma e troca de variável.',
  problems: [
    { tag: 'Definição', q: 'Resolva $log_{2}(x + 3) = 4$.', a: 13, ph: 'x', hint: 'x + 3 = 16.', sol: '<p>$x = 13$.</p>' },
    { tag: 'Outra base', q: 'Resolva $log_{4}(3x + 1) = 2$.', a: 5, ph: 'x', hint: '3x + 1 = 16.', sol: '<p>$x = 5$.</p>' },
    { tag: 'Base desconhecida', q: 'Qual a base positiva $x$ em $log_{x} 16 = 2$?', a: 4, ph: 'x', hint: 'x² = 16.', sol: '<p>$x = 4$.</p>' },
    { tag: 'Soma de logs', q: 'Resolva $log_{2} x + log_{2}(x − 2) = 3$ (apenas a solução válida).', a: 4, ph: 'x', hint: 'x(x − 2) = 8 e x > 2.', sol: '<p>$x = 4$.</p>' },
    { tag: 'Troca de variável', q: 'Qual a <strong>maior</strong> solução de $(log\\ x)^{2} − 3 · log\\ x + 2 = 0$?', a: 100, ph: 'x', hint: 'log x = 1 ou 2.', sol: '<p>$x = 10$ ou $100$: a maior é $100$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Equação Logarítmica', accent: 'primary', icon: 'sigma',
  aulas: [['Aula 24', 'Equação logarítmica', 'aula-1-equacao-logaritmica.html']],
  enem: 'Equação logarítmica no estilo ENEM', cria: 'Detetive: onde está o erro?', pratica: 'Equação logarítmica: trilha de desafios'
}, pages };
