// Unidade v08 — Logaritmo: condições de existência (aulas 17 e 18 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cVF } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'logaritmo-condicao-existencia', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v08', BRAND = 'Logaritmo: Condição de Existência', CAP = 'Aulas 17 e 18';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 17 e 18', h1: 'Condições de existência: <span style="color:var(--danger);">onde o logaritmo não pode ir</span>',
  sub: 'Como um mapa com áreas proibidas, o logaritmo só existe para certos valores de base e logaritmando. Conhecer as regras evita erros e define o domínio.',
  badges: [['base > 0'], ['base ≠ 1', 'growth'], ['logaritmando > 0', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('As três condições.', [
  ['Por que existem', 'testar casos que não funcionam', 'bulb'],
  ['Logaritmando', 'precisa ser positivo', 'target'],
  ['Base', 'positiva e diferente de 1', 'chart'],
  ['Domínio', 'resolver as desigualdades juntas', 'link'],
  ['Conferência', 'testar um valor', 'scale']
]));
a.push(objetivosSlide([
  'Justificar por que o logaritmando deve ser <strong>positivo</strong> e a base <strong>positiva e diferente de 1</strong>.',
  'Decidir se um logaritmo numérico <strong>existe</strong>.',
  'Determinar o <strong>domínio</strong> de $log_{a} f(x)$ resolvendo desigualdades.',
  'Combinar as condições com <strong>interseção</strong> de intervalos.'
], 'Dica', 'Monte uma lista com as três condições (base $> 0$, base $≠ 1$, logaritmando $> 0$), resolva cada uma e <strong>intersecte</strong> os resultados.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Quando a pergunta não tem resposta', `
          ${lede('$log_{a} b = x$ pergunta: <strong>a elevado a quanto dá $b$?</strong> Vamos testar perguntas que <strong>não têm resposta</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Tentativa', 'Equação', 'Problema'], [['$log_{2}(−8)$', '$2^{x} = −8$', 'potência positiva nunca é negativa'], ['$log_{1} 5$', '$1^{x} = 5$', '$1^{x}$ vale sempre 1'], ['$log_{−2} 4$', '$(−2)^{x} = 4$', 'base negativa: $(−2)^{1÷2}$ não é real'], ['$log_{5} 0$', '$5^{x} = 0$', 'potência de base positiva nunca é 0']])}
            ${mini('Qual dos logaritmos abaixo <strong>não</strong> existe?', ['$log_{2} 8$', '$log_{1÷2} 4$', '$log_{3}(−9)$', '$log_{10} 0,1$'], 2, 'O logaritmando $−9$ é negativo: $3^{x} = −9$ não tem solução real. Os demais existem ($3$, $−2$ e $−1$).')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · condição de existência', '$log_{a} b$ existe quando…', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Logaritmando positivo:</strong> $b > 0$.</li>
                <li><strong>Base positiva:</strong> $a > 0$.</li>
                <li><strong>Base diferente de 1:</strong> $a ≠ 1$.</li>
                <li>Resumo: <strong>$a > 0$, $a ≠ 1$ e $b > 0$</strong>.</li>
                <li>Em $log_{g(x)} f(x)$: resolva $g(x) > 0$, $g(x) ≠ 1$ e $f(x) > 0$ e <strong>intersecte</strong>.</li>
              </ul>
            </div>
            ${W.box('Testa $log_{x−p}(x−q)$', W.row(W.nm('x1-p', 'p', 2, 'any'), W.nm('x1-q', 'q', 0, 'any'), W.nm('x1-x', 'x', 5, 'any')) + W.txt('x1-b', 'Base: ') + W.txt('x1-a', 'Logaritmando: ') + W.txt('x1-r', 'Existe? ') + W.txt('x1-d', 'Domínio: ') + W.hint('x1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Três condições, três exemplos', `
          ${tbl(['Expressão', 'Condições', 'Domínio'], [['$log_{5}(3x − 6)$', '$3x − 6 > 0$', '$x > 2$'], ['$log_{x−2} 7$', '$x − 2 > 0$ e $x − 2 ≠ 1$', '$x > 2$ e $x ≠ 3$'], ['$log_{x}(x^{2} − 4x + 3)$', '$x > 0$, $x ≠ 1$ e $x^{2} − 4x + 3 > 0$', '$0 < x < 1$ ou $x > 3$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Interseção', 'O domínio é onde <strong>todas</strong> as condições valem ao mesmo tempo: use a reta real.', 'success')}
            ${callout('Teste final', 'Escolha um $x$ do domínio e um fora dele e confira o logaritmo.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Existe ou não existe?', 'Diga se $log_{1÷2} 8$, $log_{2} {1|4}$ e $log_{5} 0$ existem.', [
  ['Primeiro', 'Base $1 ÷ 2$ está entre 0 e 1 e $8 > 0$: existe. $({1|2})^{−3} = 8$ ⇒ valor $−3$.'],
  ['Segundo', 'Base $2$ e logaritmando ${1|4} > 0$: existe. $log_{2} {1|4} = −2$.'],
  ['Terceiro', 'Logaritmando $0$ não é positivo: <strong>não existe</strong>.']
], 'Existem os dois primeiros ($−3$ e $−2$); $log_{5} 0$ não existe.'));
a.push(exemplo('Exemplo resolvido', 'Domínio com logaritmando', 'Determine o domínio de $f(x) = log_{5}(3x − 6)$.', [
  ['Condição', 'Base 5 é válida; o logaritmando precisa ser positivo: $3x − 6 > 0$.'],
  ['Resolva', '$3x > 6$ ⇒ $x > 2$.']
], '$D = \\{x ∈ ℝ ∣ x > 2\\}$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Domínio com base variável', 'Determine o domínio de $f(x) = log_{x−2} 7$.', [
  ['Base positiva', '$x − 2 > 0$ ⇒ $x > 2$.'],
  ['Base diferente de 1', '$x − 2 ≠ 1$ ⇒ $x ≠ 3$.'],
  ['Logaritmando', '$7 > 0$: sempre vale.']
], 'O domínio é o conjunto dos $x$ com $x > 2$ e $x ≠ 3$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Base e logaritmando variáveis', 'Determine o domínio de $f(x) = log_{x}(x^{2} − 4x + 3)$.', [
  ['Base', '$x > 0$ e $x ≠ 1$.'],
  ['Logaritmando', '$x^{2} − 4x + 3 > 0$. Raízes $1$ e $3$; parábola para cima ⇒ $x < 1$ ou $x > 3$.'],
  ['Interseção', '$(x > 0$ e $x ≠ 1)$ e $(x < 1$ ou $x > 3)$ ⇒ $0 < x < 1$ ou $x > 3$.']
], '$D = ]0, 1[ ∪ ]3, +∞[$. Teste: $x = 2$ não serve ($2^{2} − 8 + 3 = −1 < 0$).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Quadrado no logaritmando', 'Para que valores de $x$ existe $log_{2}(x^{2} − 9)$?', [
  ['Condição', '$x^{2} − 9 > 0$ ⇒ $x^{2} > 9$.'],
  ['Resolva', '$|x| > 3$ ⇒ $x < −3$ ou $x > 3$.'],
  ['Teste', '$x = 0$: $0 − 9 < 0$ (não existe); $x = 4$: $16 − 9 = 7 > 0$ (existe).']
], '$x < −3$ ou $x > 3$.', 'growth'));

a.push(pratique('Domínio', 'O domínio de $f(x) = log_{3}(2x − 8)$ é:',
  ['$x > 2$', '$x > 4$', '$x > 8$', '$x < 4$', '$x ≠ 4$'], 1,
  '$2x − 8 > 0$ ⇒ $x > 4$. <strong>Alternativa B.</strong>'));
a.push(pratique('Base variável', 'Para que $log_{x−1} 5$ exista, é preciso que:',
  ['$x > 1$', '$x > 2$', '$x > 1$ e $x ≠ 2$', '$x ≠ 2$', '$x < 1$'], 2,
  '$x − 1 > 0$ ⇒ $x > 1$ e $x − 1 ≠ 1$ ⇒ $x ≠ 2$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Dois requisitos', 'Quantos números inteiros de 1 a 10 pertencem ao domínio de $f(x) = log_{x−2}(10 − x)$?',
  ['4', '5', '6', '7', '8'], 2,
  'Base: $x > 2$ e $x ≠ 3$. Logaritmando: $10 − x > 0$ ⇒ $x < 10$. Inteiros: $4, 5, 6, 7, 8, 9$ ⇒ 6. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a condição de existência engana', [
  ['Esquecer a base ≠ 1', 'Em $log_{x−2} 7$ não basta $x > 2$: $x = 3$ também fica de fora.'],
  ['Aceitar logaritmando nulo', '$log_{a} 0$ não existe: o logaritmando é <strong>estritamente</strong> positivo.'],
  ['Resolver só uma condição', 'O domínio é a <strong>interseção</strong> de todas as condições.'],
  ['Erro com desigualdade quadrática', '$x^{2} > 9$ dá $x < −3$ ou $x > 3$ (e não só $x > 3$).']
]));
a.push(quiz([
  { q: 'O logaritmo $log_{1} 5$:', o: ['vale 0', 'vale 5', 'não existe', 'vale 1'], a: 2 },
  { q: 'O logaritmo $log_{2} 0$:', o: ['vale 0', 'não existe', 'vale 1', 'vale −1'], a: 1 },
  { q: 'O domínio de $log_{3}(x − 5)$ é:', o: ['$x > 5$', '$x < 5$', '$x ≥ 5$', '$x > 3$'], a: 0 },
  { q: 'Em $log_{x} 9$, a base $x$ precisa satisfazer:', o: ['$x > 0$', '$x > 0$ e $x ≠ 1$', '$x ≠ 0$', '$x > 1$'], a: 1 }
]));
a.push(fechamento([
  ['Logaritmando', '$b > 0$.'],
  ['Base', '$a > 0$ e $a ≠ 1$.'],
  ['Domínio', 'Interseção de todas as condições.']
], 'Antes de calcular, pergunte: este logaritmo existe?'));

pages.push({ out: BASE + 'aula-1-condicao-de-existencia.html', html: K.deck({
  title: 'Logaritmo: condição de existência — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 17 e 18 · Condição de existência', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['x1-p', 'x1-q', 'x1-x'], function(){ var p = +$('x1-p').value, q = +$('x1-q').value, x = +$('x1-x').value;
    if(![p, q, x].every(isFinite)){ ['x1-b', 'x1-a', 'x1-r', 'x1-d'].forEach(function(i){ $(i).textContent = '—'; }); $('x1-h').textContent = ''; return; }
    var b = x - p, g = x - q, falhas = [];
    if(!(b > 0)) falhas.push('base ≤ 0'); if(b === 1) falhas.push('base = 1'); if(!(g > 0)) falhas.push('logaritmando ≤ 0');
    $('x1-b').textContent = 'x − p = ' + pt(b);
    $('x1-a').textContent = 'x − q = ' + pt(g);
    $('x1-r').textContent = falhas.length ? 'não existe (' + falhas.join('; ') + ')' : 'existe';
    var L = Math.max(p, q); $('x1-d').textContent = 'x > ' + pt(L) + (p + 1 > L ? ' e x ≠ ' + pt(p + 1) : '');
    $('x1-h').textContent = 'Condições: x − p > 0, x − p ≠ 1 e x − q > 0. A base vale ' + pt(b) + ' e o logaritmando ' + pt(g) + '.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Logaritmo: <span>condições de existência e domínio</span>',
  lede: 'log_a b só existe se a > 0, a ≠ 1 e b > 0. Em funções, o domínio é a interseção das condições sobre base e logaritmando.',
  badges: ['a > 0', 'a ≠ 1', 'b > 0'],
  curve: 'M20,150 C 100,150 180,140 260,100 C 340,60 420,32 480,20',
  sections: [
    ['Logaritmando', 'b > 0', 'chart', 'primary', p('$a^{x}$ nunca é negativo ou zero.') + call('Exemplo', '$log_{3}(−9)$ não existe.', 'success')],
    ['Base', 'a > 0 e a ≠ 1', 'target', 'growth', li(['Base negativa: potência não real.', 'Base 1: $1^{x} = 1$.', 'Base 0 também não vale.'])],
    ['Domínio simples', 'Só o logaritmando', 'scale', 'decay', p('$log_{5}(3x − 6)$: $x > 2$.') + call('Método', 'Resolva $3x − 6 > 0$.', 'success')],
    ['Base variável', 'Duas condições', 'link', 'success', p('$log_{x−2} 7$: $x > 2$ e $x ≠ 3$.') + call('Atenção', 'Não esqueça a base ≠ 1.', 'success')],
    ['Interseção', 'Juntar tudo', 'up', 'primary', li(['Liste as condições.', 'Resolva uma a uma.', 'Intersecte na reta real.'])],
    ['Conferência', 'Testar valores', 'check', 'growth', li(['Um valor dentro: existe?', 'Um valor fora: falha?', 'Extremos: incluídos?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer a base ≠ 1.', 'Aceitar logaritmando nulo.', 'Resolver só uma condição.', 'Trocar $x^{2} > 9$ por $x > 3$.', 'Não testar um valor.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Condição de existência <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: qual existe, domínio simples, base variável, base e logaritmando e contagem de inteiros.',
  final: 'Três condições, uma interseção: o domínio está pronto.',
  questions: [
    { badge: 'Estilo ENEM · existência', text: 'Considere os logaritmos abaixo.', cmd: 'Qual deles existe no conjunto dos números reais?', opts: ['$log_{0} 5$', '$log_{1} 8$', '$log_{−2} 4$', '$log_{5} 0$', '$log_{1÷2} 8$'], a: 4,
      sol: '<p>Só $log_{1÷2} 8$ tem base positiva diferente de 1 e logaritmando positivo ($= −3$).</p>' },
    { badge: 'Estilo ENEM · domínio simples', text: 'Considere $f(x) = log_{3}(2x − 8)$.', cmd: 'O domínio de $f$ é:', opts: ['$x > 2$', '$x > 4$', '$x > 8$', '$x < 4$', '$x ≠ 4$'], a: 1,
      sol: '<p>$2x − 8 > 0$ ⇒ $x > 4$.</p>' },
    { badge: 'Estilo ENEM · base variável', text: 'Considere $f(x) = log_{x−1} 5$.', cmd: 'O domínio de $f$ é:', opts: ['$x > 1$', '$x > 2$', '$x > 1$ e $x ≠ 2$', '$x ≠ 2$', '$x < 1$'], a: 2,
      sol: '<p>Base: $x − 1 > 0$ e $x − 1 ≠ 1$ ⇒ $x > 1$ e $x ≠ 2$.</p>' },
    { badge: 'Estilo ENEM · base e logaritmando', text: 'Considere $f(x) = log_{x}(x^{2} − 4x + 3)$.', cmd: 'O domínio de $f$ é:', opts: ['$x > 0$ e $x ≠ 1$', '$0 < x < 1$ ou $x > 3$', '$x > 3$', '$x < 1$ ou $x > 3$', '$1 < x < 3$'], a: 1,
      sol: '<p>$x > 0$, $x ≠ 1$ e $(x − 1)(x − 3) > 0$ ⇒ $0 < x < 1$ ou $x > 3$.</p>' },
    { badge: 'Estilo ENEM · contagem', text: 'Considere $f(x) = log_{x−2}(10 − x)$.', cmd: 'Quantos inteiros de 1 a 10 pertencem ao domínio de $f$?', opts: ['4', '5', '6', '7', '8'], a: 2,
      sol: '<p>$x > 2$, $x ≠ 3$ e $x < 10$ ⇒ $4, 5, 6, 7, 8, 9$: seis inteiros.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Verdadeiro ou falso: <span style="color:var(--decay);">existência</span>',
  subtitle: 'Este logaritmo existe? Julgue cada afirmação.',
  tpl: cVF({
    intro: 'Clique em <strong>Verdadeira</strong> ou <strong>Falsa</strong> e leia a explicação.',
    final: 'Base positiva diferente de 1 e logaritmando positivo: sem isso, o logaritmo não existe.',
    afirmacoes: [
      ['$log_{2}(−8)$ existe.', false, 'Falsa: logaritmando negativo; $2^{x} = −8$ não tem solução real.'],
      ['$log_{1÷2} 8$ existe.', true, 'Verdadeira: a base está entre 0 e 1 e $8 > 0$; vale $−3$.'],
      ['$log_{1} 5$ existe.', false, 'Falsa: $1^{x} = 1$ para todo $x$, nunca 5.'],
      ['$log_{5} 1$ existe.', true, 'Verdadeira: logaritmando positivo; vale $0$.'],
      ['$log_{−3} 9$ existe.', false, 'Falsa: a base é negativa.'],
      ['$log_{5} 0$ existe.', false, 'Falsa: $5^{x}$ nunca é zero.'],
      ['O domínio de $log_{3}(x − 2)$ é $x > 2$.', true, 'Verdadeira: $x − 2 > 0$.'],
      ['O domínio de $log_{x} 7$ é $x > 0$.', false, 'Falsa: também é preciso $x ≠ 1$.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'growth',
  h1: 'Condição de existência: <span style="color:var(--growth);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: limite do domínio, valor proibido, contagem, checagem e conjunto finito. Digite o número pedido.',
  final: 'Você percorreu a trilha: limites, valor proibido, contagem e teste.',
  problems: [
    { tag: 'Limite', q: 'Qual o <strong>menor inteiro</strong> do domínio de $f(x) = log_{3}(2x − 8)$?', a: 5, ph: 'x', hint: 'x > 4.', sol: '<p>$x > 4$: o menor inteiro é $5$.</p>' },
    { tag: 'Valor proibido', q: 'Para $x > 1$, qual valor de $x$ torna $log_{x−1} 5$ inexistente?', a: 2, ph: 'x', hint: 'Base 1.', sol: '<p>$x − 1 = 1$ ⇒ $x = 2$.</p>' },
    { tag: 'Contagem', q: 'Quantos inteiros de 1 a 10 estão no domínio de $f(x) = log_{x−2}(10 − x)$?', a: 6, ph: 'inteiros', hint: '4, 5, 6, 7, 8, 9.', sol: '<p>$6$.</p>' },
    { tag: 'Teste', q: 'Qual o valor de $x^{2} − 4x + 3$ em $x = 2$?', a: -1, ph: 'valor', hint: '4 − 8 + 3.', sol: '<p>$−1 < 0$: não existe $log(x^{2} − 4x + 3)$ em $x = 2$.</p>' },
    { tag: 'Conjunto', q: 'Quantos inteiros $x$ entre $−5$ e $5$ fazem existir $log(x^{2} − 9)$?', a: 4, ph: 'inteiros', hint: '|x| > 3.', sol: '<p>$−5, −4, 4, 5$: quatro valores.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Logaritmo: Condição de Existência', accent: 'primary', icon: 'sigma',
  aulas: [['Aulas 17–18', 'Condição de existência do logaritmo', 'aula-1-condicao-de-existencia.html']],
  enem: 'Condição de existência no estilo ENEM', cria: 'Verdadeiro ou falso: existência', pratica: 'Condição de existência: trilha de desafios'
}, pages };
