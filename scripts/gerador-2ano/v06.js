// Unidade v06 — Problemas que envolvem funções do 2º grau (aulas 14 e 15 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cOrdenar } = K;
const { graf, amostra, PL } = require('./graf.js');
const { QJS } = require('./quad.js');
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'problemas-funcao-quadratica', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v06', BRAND = 'Problemas com Função Quadrática', CAP = 'Aulas 14 e 15';
const pages = [];

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 14 e 15', h1: 'Problemas com função do 2º grau: <span style="color:var(--primary);">treino, erro e tentativa</span>',
  sub: 'Andar de bicicleta se aprende com treino e tentativa. Os problemas de função quadrática também: modele, escolha a ferramenta (zeros, vértice, sinais) e confira o sentido da resposta.',
  badges: [['zeros: Bhaskara'], ['vértice: máximo/mínimo', 'growth'], ['sinais: inequação', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do enunciado à resposta.', [
  ['Modelar', 'montar a lei da função', 'bulb'],
  ['Escolher', 'zeros, vértice ou sinais', 'target'],
  ['Calcular', 'Bhaskara e vértice', 'chart'],
  ['Interpretar', 'unidade e sentido', 'link'],
  ['Conferir', 'substituir na lei', 'scale']
]));
a.push(objetivosSlide([
  '<strong>Modelar</strong> situações (lançamentos, receita, áreas) com $f(x) = ax^{2} + bx + c$.',
  'Decidir a ferramenta: <strong>zeros</strong> (quando atinge zero), <strong>vértice</strong> (máximo ou mínimo) ou <strong>sinais</strong> (quando é positivo ou negativo).',
  '<strong>Interpretar</strong> o resultado: descartar raízes sem sentido e dar a unidade.',
  'Resolver problemas de <strong>altura, receita, área e produto</strong>.'
], 'Dica', 'Palavras-chave: “quando <strong>atinge o solo</strong>” ⇒ zeros; “<strong>maior</strong>/<strong>menor</strong>” ⇒ vértice; “<strong>acima</strong> de” ⇒ inequação.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Resumo das ferramentas', `
          ${tbl(['Pergunta', 'Ferramenta', 'Fórmula'], [['Quando atinge o solo? Qual a distância?', 'zeros', '$x = (−b ± √Δ) ÷ 2a$'], ['Qual o maior/menor valor?', 'vértice', '$x_v = −b ÷ 2a$; $y_v = f(x_v)$'], ['Em que intervalo é maior que k?', 'sinais', '$f(x) > k$ ⇒ resolver e esboçar']])}
          <div class="grid2" style="margin-top:6px;">
            ${card('<strong>Exemplo de enunciado</strong><p style="font-size:.92rem;margin-top:8px;">“O preço $p$ de um produto gera uma receita $R(p) = −4p^{2} + 120p$. Qual o preço que maximiza a receita?” ⇒ <strong>vértice</strong>.</p>', 'primary')}
            ${mini('Em “em que instante a bola toca o solo?”, a ferramenta é:', ['vértice', 'zeros', 'imagem', 'sinal de a'], 1, 'Tocar o solo é $h = 0$: os <strong>zeros</strong> da função.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · modelos comuns', 'Alguns modelos que viram parábola', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Lançamento vertical:</strong> $h(t) = h_0 + v_0 t − 5t^{2}$ ($g ≈ 10$ m/s²).</li>
                <li><strong>Receita:</strong> preço $×$ quantidade vendida: $R(p) = p · q(p)$.</li>
                <li><strong>Área com perímetro fixo:</strong> $A(x) = x · (s − x)$, com $s$ o semiperímetro.</li>
                <li><strong>Produto com soma fixa:</strong> $P(x) = x(S − x)$, máximo em $x = S ÷ 2$.</li>
              </ul>
            </div>
            ${W.box('Lançamento do alto', W.row(W.nm('l-h', 'altura inicial h₀ (m)', 0, 'any'), W.nm('l-v', 'velocidade v₀ (m/s)', 20, 'any')) + W.txt('l-t', 'Instante da altura máxima: ') + W.txt('l-m', 'Altura máxima: ') + W.txt('l-s', 'Tempo até o solo: ') + W.hint('l-hh'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Receita máxima', 'Um produto é vendido a $p$ reais e vendem-se $120 − 4p$ unidades. Qual o preço que maximiza a receita e qual a receita máxima?', [
  ['Receita', '$R(p) = p(120 − 4p) = −4p^{2} + 120p$.'],
  ['Preço', '$p_v = −{120|2 · (−4)} = 15$.'],
  ['Receita máxima', '$R(15) = −900 + 1\\ 800 = 900$.']
], 'Preço <strong>R$ 15</strong> e receita máxima de <strong>R$ 900</strong>.'));
a.push(exemplo('Exemplo resolvido', 'Lançamento do alto', 'Uma pedra é lançada de uma altura de 15 m para cima: $h(t) = −5t^{2} + 10t + 15$. Em quanto tempo atinge o solo?', [
  ['Solo', '$h = 0$ ⇒ $−5t^{2} + 10t + 15 = 0$ ⇒ $t^{2} − 2t − 3 = 0$.'],
  ['Raízes', '$t = 3$ ou $t = −1$.'],
  ['Sentido', 'Tempo negativo não serve.']
], 'Atinge o solo aos <strong>3 s</strong>. (Altura máxima: $h(1) = 20$ m.)', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Área máxima', 'Com 40 m de tela, forma-se um cercado retangular. Quais as dimensões de maior área?', [
  ['Modelo', 'Lados $x$ e $20 − x$: $A(x) = x(20 − x) = −x^{2} + 20x$.'],
  ['Vértice', '$x_v = 10$; $A(10) = 100$.']
], 'Um quadrado de <strong>10 m</strong> de lado, com <strong>100 m²</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Quando fica acima de 15 m?', 'Com $h(t) = −5t^{2} + 20t$, durante quanto tempo a bola está acima de 15 m?', [
  ['Inequação', '$−5t^{2} + 20t > 15$ ⇒ $t^{2} − 4t + 3 < 0$.'],
  ['Zeros', '$1$ e $3$; $a > 0$: negativa entre eles.'],
  ['Solução', '$1 < t < 3$: duração $3 − 1 = 2$ s.']
], 'Fica acima de 15 m durante <strong>2 s</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Soma fixa, produto máximo', 'A soma de dois números é 30. Qual o maior produto?', [
  ['Modelo', '$P(x) = x(30 − x)$.'],
  ['Máximo', '$x = 15$ ⇒ $P = 225$.']
], '<strong>225</strong> (com $15$ e $15$).', 'growth'));

a.push(pratique('Receita', 'Com $R(p) = −4p^{2} + 120p$, a receita máxima é:',
  ['450', '600', '900', '1 200', '1 800'], 2,
  '$p_v = 15$; $R(15) = 900$. <strong>Alternativa C.</strong>'));
a.push(pratique('Tempo no ar', 'Uma pedra lançada de 15 m de altura tem $h(t) = −5t^{2} + 10t + 15$. O tempo até o solo é:',
  ['1 s', '2 s', '3 s', '4 s', '5 s'], 2,
  '$t^{2} − 2t − 3 = 0$ ⇒ $t = 3$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Altura máxima', 'A altura (m) de uma bola é $h(t) = −5t^{2} + 30t$. A altura máxima, em metros, é:',
  ['30', '40', '45', '60', '90'], 2,
  '$t_v = 3$; $h(3) = −45 + 90 = 45$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde os problemas enganam', [
  ['Aceitar raiz sem sentido', 'Tempo ou comprimento negativo é descartado.'],
  ['Trocar valor e posição', 'Preço que maximiza ($x_v$) ≠ receita máxima ($y_v$).'],
  ['Esquecer a unidade', 'Responda com a unidade do enunciado (m, s, reais).'],
  ['Montar a lei errado', 'Receita é preço × quantidade; área é produto das dimensões.']
]));
a.push(quiz([
  { q: '“Quando o objeto atinge o solo” corresponde a:', o: ['$f(x) = 0$', '$f(x) = c$', '$x = x_v$', '$a = 0$'], a: 0 },
  { q: 'Com 40 m de tela, o retângulo de maior área tem lado:', o: ['5 m', '10 m', '15 m', '20 m'], a: 1 },
  { q: 'Dois números de soma 30: o produto máximo é:', o: ['150', '200', '225', '300'], a: 2 },
  { q: 'Para $h(t) = −5t^{2} + 30t$, a bola volta ao solo em:', o: ['3 s', '6 s', '9 s', '30 s'], a: 1 }
]));
a.push(fechamento([
  ['Modelar', 'Escreva a lei da função.'],
  ['Ferramenta', 'Zeros, vértice ou sinais.'],
  ['Interpretar', 'Descarte raízes sem sentido; dê a unidade.']
], 'Treino, esforço, tentativa e erro: é assim que se aprende a resolver problemas.'));

pages.push({ out: BASE + 'aula-1-problemas-com-funcao-quadratica.html', html: K.deck({
  title: 'Problemas com função quadrática — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 14 e 15 · Problemas', slides: a,
  extra: WJS + BIND + QJS + String.raw`
  bind(['l-h', 'l-v'], function(){ var h0 = +$('l-h').value, v0 = +$('l-v').value;
    if(![h0, v0].every(isFinite) || h0 < 0 || v0 < 0){ ['l-t', 'l-m', 'l-s'].forEach(function(i){ $(i).textContent = '—'; }); $('l-hh').textContent = 'Use valores não negativos.'; return; }
    var tv = v0 / 10, hm = h0 + v0 * v0 / 20, ts = (v0 + Math.sqrt(v0 * v0 + 20 * h0)) / 10;
    $('l-t').textContent = pt(tv, 3) + ' s'; $('l-m').textContent = pt(hm, 3) + ' m'; $('l-s').textContent = pt(ts, 3) + ' s';
    $('l-hh').textContent = 'h(t) = h₀ + v₀·t − 5t². Vértice: t = v₀ ÷ 10. Solo: raiz positiva de −5t² + v₀t + h₀ = 0.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Problemas com função quadrática: <span>zeros, vértice e sinais</span>',
  lede: 'Modele, escolha a ferramenta (zeros para “atinge o solo”, vértice para “maior ou menor”, sinais para “acima de”) e interprete o resultado com unidade e bom senso.',
  badges: ['zeros', 'vértice', 'sinais'],
  curve: 'M20,40 C 100,140 180,150 260,100 C 340,50 420,30 480,60',
  sections: [
    ['Lançamento', 'h(t) = h₀ + v₀t − 5t²', 'chart', 'primary', p('Zeros: solo; vértice: máximo.') + call('Exemplo', '$−5t^{2} + 10t + 15$: 3 s.', 'success')],
    ['Receita', 'p · q(p)', 'target', 'growth', p('Vértice do preço.') + call('Exemplo', '$−4p^{2} + 120p$: 900.', 'success')],
    ['Área', 'Perímetro fixo', 'scale', 'decay', p('$x(20 − x)$ máx. em 10.') + call('Resultado', '100 m².', 'success')],
    ['Produto', 'Soma fixa', 'link', 'success', p('$x(S − x)$.') + call('Exemplo', 'S = 30: 225.', 'success')],
    ['Acima de k', 'Inequação', 'up', 'primary', p('$f(x) > k$.') + call('Exemplo', 'acima de 15 m: 2 s.', 'success')],
    ['Interpretar', 'Sentido e unidade', 'check', 'growth', li(['Descarte raiz negativa.', 'Valor × posição.', 'Unidade do enunciado.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Aceitar tempo negativo.', 'Trocar valor e posição do vértice.', 'Esquecer a unidade.', 'Montar a lei com a grandeza errada.', 'Parar nas raízes sem conferir.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Problemas com função quadrática <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: receita, lançamento, área, produto e altura máxima.',
  final: 'Modele, escolha a ferramenta e interprete.',
  questions: [
    { badge: 'Estilo ENEM · receita', text: 'Um produto é vendido a $p$ reais e vendem-se $120 − 4p$ unidades.', cmd: 'A receita máxima, em reais, é:', opts: ['450', '600', '900', '1 200', '1 800'], a: 2,
      sol: '<p>$R = −4p^{2} + 120p$; $p_v = 15$; $R(15) = 900$.</p>' },
    { badge: 'Estilo ENEM · lançamento', text: 'Uma pedra é lançada de 15 m de altura: $h(t) = −5t^{2} + 10t + 15$.', cmd: 'O tempo até atingir o solo é:', opts: ['1 s', '2 s', '3 s', '4 s', '5 s'], a: 2,
      sol: '<p>$t^{2} − 2t − 3 = 0$ ⇒ $t = 3$.</p>' },
    { badge: 'Estilo ENEM · área', text: 'Com 40 m de tela forma-se um cercado retangular.', cmd: 'A maior área possível, em m², é:', opts: ['75', '91', '96', '100', '120'], a: 3,
      sol: '<p>$x(20 − x)$, máximo $100$ em $x = 10$.</p>' },
    { badge: 'Estilo ENEM · produto', text: 'A soma de dois números é 30.', cmd: 'O maior produto possível é:', opts: ['150', '200', '225', '250', '300'], a: 2,
      sol: '<p>$x(30 − x)$, máximo em $x = 15$: $225$.</p>' },
    { badge: 'Estilo ENEM · altura máxima', text: 'A altura (m) de uma bola é $h(t) = −5t^{2} + 30t$.', cmd: 'A altura máxima, em metros, é:', opts: ['30', '40', '45', '60', '90'], a: 2,
      sol: '<p>$t_v = 3$; $h(3) = 45$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Ordene a <span style="color:var(--growth);">resolução</span>',
  subtitle: 'Coloque os passos de cada problema na ordem certa.',
  tpl: cOrdenar({
    intro: 'Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante.',
    final: 'Modelar, escolher a ferramenta, calcular e interpretar.',
    problemas: [
      { titulo: 'Receita máxima', enunciado: 'Vendem-se $120 − 4p$ unidades a $p$ reais. Qual a receita máxima?', passos: ['Monte a receita: $R(p) = p(120 − 4p) = −4p^{2} + 120p$.', 'Como se pede o máximo, use o vértice.', 'Preço do vértice: $p_v = 120 ÷ 8 = 15$.', 'Receita máxima: $R(15) = 900$ reais.'] },
      { titulo: 'Pedra lançada do alto', enunciado: 'Com $h(t) = −5t^{2} + 10t + 15$, quando a pedra atinge o solo?', passos: ['Atingir o solo significa $h = 0$.', 'Escreva a equação: $−5t^{2} + 10t + 15 = 0$, ou $t^{2} − 2t − 3 = 0$.', 'Resolva: $t = 3$ ou $t = −1$.', 'Descarte $t = −1$: o tempo é 3 s.'] },
      { titulo: 'Bola acima de 15 m', enunciado: 'Com $h(t) = −5t^{2} + 20t$, por quanto tempo a bola está acima de 15 m?', passos: ['Escreva a inequação: $−5t^{2} + 20t > 15$.', 'Simplifique: $t^{2} − 4t + 3 < 0$.', 'Zeros: $t = 1$ e $t = 3$; negativa entre eles.', 'Duração: $3 − 1 = 2$ s.'] }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Problemas com função quadrática: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: preço, receita, tempo no ar, área e produto. Digite o número pedido.',
  final: 'Você percorreu a trilha: receita, lançamento, área e produto.',
  problems: [
    { tag: 'Preço ótimo', q: 'Com $R(p) = −4p^{2} + 120p$, qual o preço que maximiza a receita?', a: 15, ph: 'p', hint: '120 ÷ 8.', sol: '<p>$15$.</p>' },
    { tag: 'Receita', q: 'Qual a receita máxima?', a: 900, ph: 'R', hint: 'R(15).', sol: '<p>$900$.</p>' },
    { tag: 'Tempo no ar', q: 'Com $h(t) = −5t^{2} + 10t + 15$, em quantos segundos a pedra atinge o solo?', a: 3, ph: 's', hint: 't² − 2t − 3 = 0.', sol: '<p>$3$.</p>' },
    { tag: 'Área', q: 'Com 40 m de tela, qual a maior área do cercado (m²)?', a: 100, ph: 'm²', hint: 'Quadrado 10 × 10.', sol: '<p>$100$.</p>' },
    { tag: 'Produto', q: 'Dois números de soma 30: qual o maior produto?', a: 225, ph: 'P', hint: '15 · 15.', sol: '<p>$225$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Problemas com Função Quadrática', accent: 'growth', icon: 'parabola',
  aulas: [['Aulas 14–15', 'Problemas que envolvem funções do 2º grau', 'aula-1-problemas-com-funcao-quadratica.html']],
  enem: 'Problemas com função quadrática no estilo ENEM', cria: 'Ordene a resolução', pratica: 'Problemas com função quadrática: trilha de desafios'
}, pages };
