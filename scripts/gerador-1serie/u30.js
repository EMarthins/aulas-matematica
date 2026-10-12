// Unidade 30 — Medidas de tendência central: média, moda e mediana (aulas 89 a 91)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cDetetive } = K;
const { barras, fmt, resumo } = require('./stat.js');
const { p, wl, call, li } = G;
const TRI = 3, DIR = 'media-moda-e-mediana', BASE = 'aulas/1-ano/3-tri/' + DIR + '/';
const KEY = 'm1u30', BRAND = 'Média, Moda e Mediana', CAP = 'Aulas 89 a 91';
const pages = [];

const MJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function lista(txt){ return txt.split(/[;]+/).map(function(s){ return s.trim().replace(',', '.'); }).filter(function(s){ return s !== ''; }).map(Number); }
  function resumo(dados){ var d = dados.slice().sort(function(a, b){ return a - b; }), n = d.length, soma = d.reduce(function(s, v){ return s + v; }, 0), med = n % 2 ? d[(n - 1) / 2] : (d[n / 2 - 1] + d[n / 2]) / 2, f = {}; d.forEach(function(v){ f[v] = (f[v] || 0) + 1; });
    var mf = Math.max.apply(null, Object.keys(f).map(function(k){ return f[k]; })), moda = mf === 1 ? [] : Object.keys(f).filter(function(k){ return f[k] === mf; }).map(Number); return {n: n, rol: d, media: soma / n, mediana: med, moda: moda, amp: d[n - 1] - d[0]}; }
  function txtModa(m){ return m.length ? m.map(function(v){ return pt(v); }).join(' e ') : 'não há moda'; }
`;
const sal = [2, 2, 2.5, 3, 3, 3, 20];

// ===================== AULA 1: média, moda e mediana =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 89 e 90', h1: 'Média, moda e mediana: <span style="color:var(--primary);">um valor para representar todos</span>',
  sub: 'Quanto tempo você usa o celular por dia? Quanto cada pessoa ganhou? Um único número resume um conjunto de dados — mas qual: média, moda ou mediana? Cada um conta uma história.',
  badges: [['média: soma ÷ n'], ['moda: o mais frequente', 'growth'], ['mediana: o valor central', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Três maneiras de resumir.', [
  ['Média aritmética', 'soma dos valores ÷ quantidade', 'bulb'],
  ['Moda', 'o valor mais frequente', 'target'],
  ['Mediana', 'o valor central do rol', 'chart'],
  ['Quando usar cada uma', 'valores extremos mudam a média', 'link'],
  ['Problemas', 'notas, salários e tempos', 'scale']
]));
a.push(objetivosSlide([
  'Calcular <strong>média</strong>, <strong>moda</strong> e <strong>mediana</strong> de um conjunto de dados.',
  'Ordenar os dados (<strong>rol</strong>) para achar a mediana (par ou ímpar).',
  'Reconhecer o efeito de <strong>valores extremos</strong> na média.',
  'Escolher a medida mais <strong>representativa</strong> para cada situação.'
], 'Dica', 'Antes de calcular a mediana, <strong>ordene os dados</strong>. Com quantidade <strong>ímpar</strong>, é o do meio; com <strong>par</strong>, é a média dos dois do meio.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A média esconde algo?', `
          ${lede('Em 2022 o brasileiro usou o celular, em média, 4,82 horas por dia. Isso significa que <strong>todos</strong> usaram 4,82 h? Claro que não: há quem use 1 h e quem use 10 h. A média resume, mas pode esconder diferenças — por isso existem a <strong>moda</strong> e a <strong>mediana</strong> também.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Em uma festa, “em média, cada pessoa comeu dois pedaços de bolo”. Isso garante que:', ['todos comeram exatamente dois pedaços', 'a soma dos pedaços dividida pelo número de pessoas é 2', 'ninguém comeu mais de dois', 'a moda é 2'], 1, 'Média $= {"total de pedaços"|"número de pessoas"} = 2$. Pode ser que um tenha comido 5 e outro, nenhum: a média <strong>não mostra</strong> a distribuição.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Média: <strong>soma ÷ n</strong>. Moda: valor de <strong>maior frequência</strong>. Mediana: valor <strong>central</strong> do rol.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · as três medidas', 'Definições e cálculo', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Média aritmética</strong>: $\\bar{x} = {x_1 + x_2 + ... + x_n|n}$.</li>
                <li><strong>Moda</strong>: valor que mais se repete (pode haver duas modas, ou nenhuma).</li>
                <li><strong>Mediana</strong>: com os dados em ordem, é o valor central. $n$ ímpar: o do meio; $n$ par: a média dos dois centrais.</li>
                <li>Mediana e moda sofrem <strong>pouco</strong> com valores extremos; a média sofre <strong>muito</strong>.</li>
              </ul>
            </div>
            ${W.box('Calculadora de medidas', '<div><label>Dados (separe por ponto e vírgula)</label><input type="text" id="m1-d" value="2; 2; 2,5; 3; 3; 3; 20" inputmode="decimal"></div>' + W.nm('m1-x', 'Acrescentar um valor (opcional)', '', 'any') + W.txt('m1-a', 'Rol: ') + W.txt('m1-b', 'Média, mediana, moda: ') + W.txt('m1-c', 'Sem o valor extra: ') + W.hint('m1-h'))}
          </div>`.replace('$\\bar{x} = {x_1 + x_2 + ... + x_n|n}$', '$"média" = {x_1 + x_2 + ... + x_n|n}$'), { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'As notas de um aluno', 'As notas de um aluno em cinco provas foram 6, 7, 8, 8 e 6. Calcule a média, a moda e a mediana.', [
  ['Média', '$(6 + 7 + 8 + 8 + 6) ÷ 5 = 35 ÷ 5 = 7$.'],
  ['Moda', 'O 6 e o 8 aparecem duas vezes: <strong>bimodal</strong> (6 e 8).'],
  ['Mediana', 'Rol: $6, 6, 7, 8, 8$. Cinco dados: o do meio é <strong>7</strong>.']
], 'Média $7$, modas $6$ e $8$, mediana $7$.'));
a.push(exemplo('Exemplo resolvido', 'Mediana com quantidade par', 'Os tempos (s) de oito atletas em uma prova foram 20,90; 20,90; 20,50; 20,80; 20,60; 20,60; 20,90 e 20,96. Qual a mediana?', [
  ['Rol (ordem crescente)', '$20,50;\\ 20,60;\\ 20,60;\\ 20,80;\\ 20,90;\\ 20,90;\\ 20,90;\\ 20,96$.'],
  ['Centrais', 'Oito dados: o 4º ($20,80$) e o 5º ($20,90$).'],
  ['Média dos centrais', '$(20,80 + 20,90) ÷ 2 = 20,85$.']
], 'Mediana: <strong>20,85 s</strong>. Cuidado: o quadro costuma vir ordenado por raia, não por tempo — <strong>ordene antes</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Média × mediana nos salários', 'Os salários (mil reais) de 7 funcionários: 2; 2; 2,5; 3; 3; 3; 20. Compare média e mediana.', [
  ['Média', '$(2 + 2 + 2,5 + 3 + 3 + 3 + 20) ÷ 7 = 35,5 ÷ 7 ≈ 5,07$.'],
  ['Mediana', 'Rol já ordenado; 7 dados: o 4º valor é <strong>3</strong>.'],
  ['Interpretação', 'Um salário muito alto (20) “puxa” a média para cima: a mediana (3) representa melhor o funcionário típico.']
], 'Média $≈ 5,07$ × mediana $3$ × moda $3$: com valores extremos, prefira a <strong>mediana</strong>.', 'growth'));

a.push(pratique('Média', 'As quatro notas de um aluno foram 4, 7, 9 e 10. A média é:',
  ['6,5', '7', '7,5', '8', '9'], 2,
  '$(4 + 7 + 9 + 10) ÷ 4 = 30 ÷ 4 = 7,5$. <strong>Alternativa C.</strong>'));
a.push(pratique('Mediana de tempos', 'Os tempos de oito atletas (s) foram 20,90; 20,90; 20,50; 20,80; 20,60; 20,60; 20,90 e 20,96. A mediana é:',
  ['20,70', '20,77', '20,80', '20,85', '20,90'], 3,
  'Rol: $20,50; 20,60; 20,60; 20,80; 20,90; 20,90; 20,90; 20,96$. Centrais: $20,80$ e $20,90$: média $20,85$. <strong>Alternativa D.</strong>', '', 'growth'));
a.push(estiloEnem('A moda do calçado', 'Em uma loja, os números de calçados vendidos em um dia foram 36, 37, 37, 38, 38, 38, 39 e 40. A moda é:',
  ['37', '38', '38,5', '39', '40'], 1,
  'O $38$ aparece três vezes (mais que qualquer outro): moda $= 38$. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde as medidas enganam', [
  ['Mediana sem ordenar', 'Os dados precisam estar em ordem crescente (rol).'],
  ['Mediana com n par', 'É a média dos <strong>dois</strong> valores centrais, não o maior deles.'],
  ['Moda × frequência', 'Moda é o <strong>valor</strong> que mais aparece, não o número de vezes.'],
  ['Média com valor extremo', 'Poucos valores muito altos ou baixos distorcem a média; confira também a mediana.']
]));
a.push(quiz([
  { q: 'A mediana de 3, 9, 5, 7, 1 é:', o: ['3', '5', '7', '9'], a: 1 },
  { q: 'A média de 2, 4 e 9 é:', o: ['4', '5', '6', '15'], a: 1 },
  { q: 'A moda de 1, 2, 2, 3, 3, 3 é:', o: ['2', '3', '2,5', '6'], a: 1 },
  { q: 'Qual medida é menos afetada por um valor muito alto?', o: ['média', 'mediana', 'soma', 'amplitude'], a: 1 }
]));
a.push(fechamento([
  ['Média', 'Soma ÷ n; sensível a extremos.'],
  ['Moda', 'Valor mais frequente.'],
  ['Mediana', 'Centro do rol; resistente a extremos.']
], 'Calcule as três: elas contam histórias diferentes.'));

pages.push({ out: BASE + 'aula-1-media-moda-e-mediana.html', html: K.deck({
  title: 'Média, moda e mediana — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 89 e 90 · Média, moda e mediana', slides: a,
  extra: WJS + BIND + MJS + String.raw`
  bind(['m1-d', 'm1-x'], function(){ var d = lista($('m1-d').value); if(!d.length || !d.every(isFinite) || d.length > 100){ $('m1-a').textContent = 'informe de 1 a 100 números'; $('m1-b').textContent = ''; $('m1-c').textContent = ''; return; }
    var xt = $('m1-x').value.trim(), x = xt === '' ? null : +xt.replace(',', '.'), base = resumo(d), todos = x !== null && isFinite(x) ? d.concat([x]) : d, r = resumo(todos);
    $('m1-a').textContent = r.rol.map(function(v){ return pt(v); }).join('; '); $('m1-b').textContent = 'média ' + pt(r.media, 3) + ' · mediana ' + pt(r.mediana, 3) + ' · moda: ' + txtModa(r.moda);
    $('m1-c').textContent = todos === d ? '(sem valor extra)' : 'média ' + pt(base.media, 3) + ' · mediana ' + pt(base.mediana, 3); $('m1-h').textContent = todos === d ? 'Acrescente um valor muito maior ou menor e compare: a média muda bastante; a mediana, pouco.' : 'Veja como o valor extra mudou a média (' + pt(r.media - base.media, 3) + ') e a mediana (' + pt(r.mediana - base.mediana, 3) + ').'; });`
}) });

// ===================== AULA 2: dados agrupados sem classes =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 91', h1: 'Medidas para dados agrupados em tabela: <span style="color:var(--growth);">média ponderada pela frequência</span>',
  sub: 'Quando os dados já vêm em uma tabela de frequências, não é preciso listá-los um a um: multiplique cada valor pela sua frequência, some e divida pelo total.',
  badges: [['x̄ = Σ xᵢ·fᵢ ÷ n'], ['moda: maior fᵢ', 'growth'], ['mediana: pela acumulada', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Das frequências às medidas.', [
  ['Média ponderada', 'xᵢ · fᵢ', 'bulb'],
  ['Moda', 'valor de maior frequência', 'target'],
  ['Mediana', 'posição n/2 pela acumulada', 'chart'],
  ['Conferência', 'comparar com a lista completa', 'link'],
  ['Problemas', 'famílias, livros e notas', 'scale']
]));
b.push(objetivosSlide([
  'Calcular a <strong>média ponderada</strong> $\\bar{x} = {∑ x_i f_i|n}$ de uma tabela de frequências.'.replace('$\\bar{x} = {∑ x_i f_i|n}$', '$"média" = {∑ x_i f_i|n}$'),
  'Identificar a <strong>moda</strong> pela maior frequência.',
  'Achar a <strong>mediana</strong> usando a frequência acumulada.',
  'Interpretar os resultados <strong>no contexto</strong>.'
], 'Dica', 'Divida por $n = ∑ f_i$ (o <strong>total de dados</strong>), e <strong>não</strong> pelo número de linhas da tabela.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'A tabela dos livros', `
          ${lede('Vinte estudantes informaram quantos livros leram no semestre: <strong>0 livro</strong>: 1 estudante; <strong>1</strong>: 2; <strong>2</strong>: 4; <strong>3</strong>: 5; <strong>4</strong>: 3; <strong>5</strong>: 3; <strong>6</strong>: 1; <strong>7</strong>: 1. Qual a média? Em vez de escrever 20 números, usamos as frequências como “pesos”.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['xᵢ', '0', '1', '2', '3', '4', '5', '6', '7'], [['fᵢ', '1', '2', '4', '5', '3', '3', '1', '1'], ['xᵢ·fᵢ', '0', '2', '8', '15', '12', '15', '6', '7']])}
            ${mini('A soma dos produtos $x_i · f_i$ é $65$ e há $20$ estudantes. A média de livros é:', ['2,5', '3', '3,25', '3,5'], 2, '$\\bar{x} = {65|20} = 3,25$ livros por estudante.'.replace('\\bar{x}', '"média"'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · medidas em tabelas', 'Média, moda e mediana com frequências', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Média</strong>: $"média" = {x_1 f_1 + x_2 f_2 + ... + x_k f_k|f_1 + f_2 + ... + f_k}$ $= {∑ x_i f_i|n}$.</li>
                <li><strong>Moda</strong>: o $x_i$ com <strong>maior $f_i$</strong>.</li>
                <li><strong>Mediana</strong>: com a frequência <strong>acumulada</strong> $F_i$, ache o valor na posição $n ÷ 2$ (ou nas posições $n ÷ 2$ e $n ÷ 2 + 1$, se $n$ é par).</li>
              </ul>
            </div>
            ${W.box('Calculadora com frequências', '<div><label>Valores (separe por ponto e vírgula)</label><input type="text" id="p1-x" value="0; 1; 2; 3; 4; 5; 6; 7" inputmode="decimal"></div><div><label>Frequências (mesma quantidade de valores)</label><input type="text" id="p1-f" value="1; 2; 4; 5; 3; 3; 1; 1" inputmode="decimal"></div>' + W.txt('p1-a', 'Total n e Σ xᵢ·fᵢ: ') + W.txt('p1-b', 'Média, moda e mediana: ') + W.hint('p1-h'))}
          </div>`.replace('$"média" = {x_1 f_1', '$"média" = {x_1 f_1'), { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Livros lidos: as três medidas', 'Com a tabela dos livros (valores $0$ a $7$ com frequências $1, 2, 4, 5, 3, 3, 1, 1$), calcule a média, a moda e a mediana.', [
  ['Média', '$∑ x_i f_i = 0 + 2 + 8 + 15 + 12 + 15 + 6 + 7 = 65$; $n = 20$; média $= 65 ÷ 20 = 3,25$.'],
  ['Moda', 'Maior frequência: $5$ (valor $3$): moda $= 3$.'],
  ['Mediana', '$n = 20$ (par): posições $10$ e $11$. Acumuladas: $1, 3, 7, 12, ...$ ⇒ o 10º e o 11º estão no valor $3$: mediana $= 3$.']
], 'Média <strong>3,25</strong>, moda <strong>3</strong>, mediana <strong>3</strong> livros.'));
b.push(exemplo('Exemplo resolvido', 'Filhos por família', 'Em 50 famílias, o número de filhos foi: 0 filho: 5 famílias; 1: 12; 2: 18; 3: 10; 4: 5. Calcule as três medidas.', [
  ['Média', '$(0 · 5 + 1 · 12 + 2 · 18 + 3 · 10 + 4 · 5) ÷ 50 = 98 ÷ 50 = 1,96$.'],
  ['Moda', 'Maior frequência: $18$ (valor $2$): moda $= 2$.'],
  ['Mediana', '$n = 50$: posições $25$ e $26$. Acumuladas: $5, 17, 35$ ⇒ ambas no valor $2$: mediana $= 2$.']
], 'Média $1,96$, moda $2$, mediana $2$ filhos.', 'growth'));

b.push(pratique('Média ponderada', 'Valores $1, 2, 3$ com frequências $2, 3, 5$. A média é:',
  ['2', '2,3', '2,5', '3', '7,67'], 1,
  '$(1 · 2 + 2 · 3 + 3 · 5) ÷ (2 + 3 + 5) = (2 + 6 + 15) ÷ 10 = 2,3$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Mediana pela acumulada', 'Em uma tabela com $n = 20$, as frequências acumuladas dos valores 0, 1, 2, 3 são 1, 3, 7, 12. A mediana está no valor:',
  ['0', '1', '2', '3', '7'], 3,
  'Posições $10$ e $11$: acumulada passa de $7$ (valor $2$) para $12$ (valor $3$): ambas são do valor $3$. <strong>Alternativa D.</strong>', '', 'growth'));
b.push(estiloEnem('Média de livros', 'Na tabela dos livros (frequências 1, 2, 4, 5, 3, 3, 1, 1 para os valores 0 a 7), a média de livros por estudante é:',
  ['2,5', '3', '3,25', '3,5', '4'], 2,
  '$65 ÷ 20 = 3,25$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde as tabelas enganam', [
  ['Dividir pelo número de linhas', 'Divida por $n = ∑ f_i$, não pela quantidade de valores diferentes.'],
  ['Moda como a frequência', 'A moda é o <strong>valor</strong> (3), não a frequência (5).'],
  ['Média simples dos valores', '$(0 + 1 + ... + 7) ÷ 8$ ignora as frequências e dá resultado errado.'],
  ['Posição da mediana', 'Para $n = 20$, as posições centrais são $10$ e $11$ (use a acumulada).']
]));
b.push(quiz([
  { q: 'Em uma tabela de frequências, a média usa:', o: ['Σ xᵢ·fᵢ ÷ n', 'Σ xᵢ ÷ k', 'Σ fᵢ ÷ k', 'xᵢ máximo'], a: 0 },
  { q: 'Valores 1, 2 com f = 3, 1. A média é:', o: ['1,25', '1,5', '1,75', '2'], a: 0 },
  { q: 'A moda é o valor com:', o: ['maior xᵢ', 'maior fᵢ', 'menor fᵢ', 'maior acumulada'], a: 1 },
  { q: 'Para n = 50, a mediana está nas posições:', o: ['25 e 26', '24 e 25', '50', '1 e 50'], a: 0 }
]));
b.push(fechamento([
  ['Média', 'Σ xᵢ·fᵢ ÷ n, com n = Σ fᵢ.'],
  ['Moda', 'Valor de maior frequência.'],
  ['Mediana', 'Posição n/2 pela acumulada.']
], 'Frequência é peso: multiplique, some e divida pelo total.'));

pages.push({ out: BASE + 'aula-2-medidas-em-tabelas.html', html: K.deck({
  title: 'Medidas em tabelas de frequência — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 91 · Medidas em tabelas', slides: b,
  extra: WJS + BIND + MJS + String.raw`
  bind(['p1-x', 'p1-f'], function(){ var x = lista($('p1-x').value), f = lista($('p1-f').value); if(!x.length || x.length !== f.length || !x.every(isFinite) || !f.every(function(v){ return isFinite(v) && v >= 0 && Math.round(v) === v; }) || x.length > 30){ $('p1-a').textContent = 'informe valores e frequências inteiras, em mesma quantidade'; $('p1-b').textContent = ''; return; }
    var n = f.reduce(function(s, v){ return s + v; }, 0); if(n <= 0){ $('p1-a').textContent = 'a soma das frequências deve ser positiva'; $('p1-b').textContent = ''; return; }
    var idx = x.map(function(_, i){ return i; }).sort(function(a, b){ return x[a] - x[b]; }), soma = 0, rol = []; idx.forEach(function(i){ soma += x[i] * f[i]; for(var k = 0; k < f[i]; k++) rol.push(x[i]); });
    var r = resumo(rol); $('p1-a').textContent = 'n = ' + n + ' · Σ xᵢ·fᵢ = ' + pt(soma, 3); $('p1-b').textContent = 'média ' + pt(soma / n, 3) + ' · moda: ' + txtModa(r.moda) + ' · mediana ' + pt(r.mediana, 3); $('p1-h').textContent = 'Média = ' + pt(soma, 3) + ' ÷ ' + n + '. A mediana usa as posições centrais do rol (' + (n % 2 ? (n + 1) / 2 : n / 2 + ' e ' + (n / 2 + 1)) + ').'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Média, moda e mediana: <span>resumindo dados</span>',
  lede: 'Calcule as três medidas com dados brutos e com tabelas de frequência, e escolha a mais representativa conforme os valores extremos.',
  badges: ['média: soma/n', 'moda: mais frequente', 'mediana: centro'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Média', 'Soma ÷ n', 'chart', 'primary', p('$(6 + 7 + 8 + 8 + 6) ÷ 5 = 7$') + call('Cuidado', 'Sensível a extremos.', 'danger')],
    ['Moda', 'Mais frequente', 'target', 'growth', p('1, 2, 2, 3, 3, 3: moda 3.') + call('Obs.', 'Pode ter duas modas ou nenhuma.', 'success')],
    ['Mediana', 'Centro do rol', 'link', 'decay', li(['Ordene.', 'n ímpar: valor do meio.', 'n par: média dos dois centrais.'])],
    ['Média ponderada', 'Com frequências', 'scale', 'success', p('$"média" = {∑ x_i f_i|n}$') + call('Exemplo', '65 ÷ 20 = 3,25.', 'success')],
    ['Mediana em tabela', 'Pela acumulada', 'up', 'primary', p('Posição n/2 (e n/2 + 1 se n par).')],
    ['Escolha', 'Qual usar', 'check', 'growth', li(['Sem extremos: média.', 'Com extremos: mediana.', 'Categorias: moda.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Mediana sem ordenar.', 'n par: pegar um só valor.', 'Dividir pelo número de linhas da tabela.', 'Moda como frequência.', 'Média simples ignorando frequências.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Média, moda e mediana <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: média, mediana, moda, média ponderada e escolha da medida.',
  final: 'Ordene antes da mediana, use frequências como peso e cuidado com valores extremos.',
  questions: [
    { badge: 'Estilo ENEM · média', text: 'As quatro notas de um aluno foram 4, 7, 9 e 10.', cmd: 'A média das notas é:', opts: ['6,5', '7', '7,5', '8', '9'], a: 2,
      sol: '<p>$30 ÷ 4 = 7,5$.</p>' },
    { badge: 'Estilo ENEM · mediana', text: 'Os tempos (s) de oito atletas: 20,90; 20,90; 20,50; 20,80; 20,60; 20,60; 20,90; 20,96.', cmd: 'A mediana é:', opts: ['20,70', '20,77', '20,80', '20,85', '20,90'], a: 3,
      sol: '<p>Rol: $20,50; 20,60; 20,60; 20,80; 20,90; 20,90; 20,90; 20,96$. $(20,80 + 20,90) ÷ 2 = 20,85$.</p>' },
    { badge: 'Estilo ENEM · moda', text: 'Calçados vendidos em um dia: 36, 37, 37, 38, 38, 38, 39, 40.', cmd: 'A moda é:', opts: ['37', '38', '38,5', '39', '40'], a: 1,
      sol: '<p>O $38$ aparece três vezes: moda $38$.</p>' },
    { badge: 'Estilo ENEM · média ponderada', text: 'Número de livros lidos por 20 estudantes (valor: frequência): 0: 1; 1: 2; 2: 4; 3: 5; 4: 3; 5: 3; 6: 1; 7: 1.', cmd: 'A média de livros por estudante é:', opts: ['2,5', '3', '3,25', '3,5', '4'], a: 2,
      sol: '<p>$∑ x_i f_i = 65$; $65 ÷ 20 = 3,25$.</p>' },
    { badge: 'Estilo ENEM · escolha da medida', text: 'Os salários (mil reais) de 7 funcionários: 2; 2; 2,5; 3; 3; 3; 20.', cmd: 'Qual medida representa melhor o salário típico?', opts: ['média (≈ 5,07)', 'mediana (3)', 'soma (35,5)', 'amplitude (18)', 'o maior valor (20)'], a: 1,
      sol: '<p>O valor $20$ puxa a média para cima; a mediana ($3$) está próxima da maioria.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Detetive das <span style="color:var(--decay);">medidas</span>',
  subtitle: 'Cada resolução esconde um erro de cálculo. Ache a linha errada.',
  tpl: cDetetive({
    intro: 'Leia cada resolução e clique na <strong>linha errada</strong>.',
    final: 'Ordene antes da mediana, divida pelo total de dados, moda é valor e n par pede dois valores centrais.',
    casos: [
      { titulo: 'Mediana sem ordenar', enunciado: 'Qual a mediana de 9, 2, 7, 4, 5?', linhas: ['Cinco dados: o valor central é o 3º.', 'Na ordem dada, o 3º dado é 7.', 'Logo a mediana é 7.', 'Confirmamos: há dois valores menores e dois maiores que 7.'], erro: 1, porque: 'Antes de achar o centro é preciso <strong>ordenar</strong>: $2, 4, 5, 7, 9$. O 3º é $5$: mediana $= 5$.' },
      { titulo: 'Média com frequências', enunciado: 'Valores 1, 2 e 3 com frequências 2, 3 e 5. Qual a média?', linhas: ['Calculamos xᵢ·fᵢ: 1·2 = 2; 2·3 = 6; 3·5 = 15.', 'A soma dos produtos é 2 + 6 + 15 = 23.', 'Dividimos pelo número de linhas da tabela, 3.', 'Logo a média é 23 ÷ 3 ≈ 7,67.'], erro: 2, porque: 'Divide-se pelo <strong>total de dados</strong> $n = 2 + 3 + 5 = 10$, não por 3: média $= 23 ÷ 10 = 2,3$.' },
      { titulo: 'Mediana com n par', enunciado: 'Qual a mediana de 3, 5, 8, 10?', linhas: ['Os dados já estão em ordem.', 'São 4 dados: os centrais são o 2º e o 3º (5 e 8).', 'A mediana é o maior dos dois centrais: 8.', 'Logo a mediana é 8.'], erro: 2, porque: 'Com $n$ par, a mediana é a <strong>média</strong> dos centrais: $(5 + 8) ÷ 2 = 6,5$.' },
      { titulo: 'Moda e frequência', enunciado: 'Em uma tabela, os valores 2, 3 e 4 têm frequências 5, 9 e 6. Qual a moda?', linhas: ['A moda é o valor de maior frequência.', 'A maior frequência é 9.', 'Logo a moda é 9.', 'O valor 9 corresponde ao 3.'], erro: 2, porque: 'A moda é o <strong>valor</strong> ($3$), não a frequência ($9$): moda $= 3$.' }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'primary',
  h1: 'Média, moda e mediana: <span style="color:var(--primary);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de cálculo de medidas. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: média, mediana, moda, média ponderada e escolha da medida.',
  problems: [
    { tag: 'Média', q: 'Notas 4, 7, 9 e 10. Qual a média?', a: 7.5, ph: 'média', hint: '30 ÷ 4.', sol: '<p>$7,5$.</p>' },
    { tag: 'Mediana', q: 'Tempos (s): 20,90; 20,90; 20,50; 20,80; 20,60; 20,60; 20,90; 20,96. Qual a mediana?', a: 20.85, ph: 's', hint: 'Ordene e use os dois centrais.', sol: '<p>$20,85$.</p>' },
    { tag: 'Moda', q: 'Calçados: 36, 37, 37, 38, 38, 38, 39, 40. Qual a moda?', a: 38, ph: 'moda', hint: 'O que mais aparece.', sol: '<p>$38$.</p>' },
    { tag: 'Média ponderada', q: 'Livros lidos: Σ xᵢ·fᵢ = 65 e n = 20. Qual a média?', a: 3.25, ph: 'média', hint: '65 ÷ 20.', sol: '<p>$3,25$.</p>' },
    { tag: 'Mediana', q: 'Salários (mil): 2; 2; 2,5; 3; 3; 3; 20. Qual a mediana?', a: 3, ph: 'mil reais', hint: 'O 4º valor.', sol: '<p>$3$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Média, Moda e Mediana', accent: 'primary', icon: 'sigma',
  aulas: [['Aulas 89–90', 'Média, moda e mediana', 'aula-1-media-moda-e-mediana.html'], ['Aula 91', 'Medidas em tabelas de frequência', 'aula-2-medidas-em-tabelas.html']],
  enem: 'Média, moda e mediana no estilo ENEM', cria: 'Detetive das medidas', pratica: 'Média, moda e mediana: trilha de desafios'
}, pages };
