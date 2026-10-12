// Unidade 27 — Distribuição de frequência: valores isolados e classes (aulas 81 e 82)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cOrdenar } = K;
const { barras, histograma, fmt } = require('./stat.js');
const { p, wl, call, li } = G;
const TRI = 3, DIR = 'distribuicao-de-frequencia', BASE = 'aulas/1-ano/3-tri/' + DIR + '/';
const KEY = 'm1u27', BRAND = 'Distribuição de Frequência', CAP = 'Aulas 81 e 82';
const pages = [];

// ---------- dados e tabelas calculadas ----------
const livros = [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 7];
const tabLivros = (() => {
  const n = livros.length, cont = {}; livros.forEach(v => { cont[v] = (cont[v] || 0) + 1; });
  let ac = 0; return Object.keys(cont).map(Number).sort((a, b) => a - b).map(v => { ac += cont[v]; return [String(v), String(cont[v]), fmt(cont[v] / n), fmt(cont[v] / n * 100) + '%', String(ac)]; });
})();
const notas = [34, 41, 47, 52, 55, 58, 60, 62, 63, 65, 66, 68, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 82, 83, 85, 86, 88, 90, 94, 98];
const classesNotas = [[30, 40], [40, 50], [50, 60], [60, 70], [70, 80], [80, 90], [90, 100]].map(([a, b]) => [a, b, notas.filter(v => v >= a && v < b).length]);
const tabNotas = (() => { let ac = 0; return classesNotas.map(([a, b, f]) => { ac += f; return [`${a} ⊢ ${b}`, String(f), fmt(f / notas.length), fmt(f / notas.length * 100) + '%', String(ac)]; }); })();

const FJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function lista(txt){ return txt.split(/[;]+/).map(function(s){ return s.trim().replace(',', '.'); }).filter(function(s){ return s !== ''; }).map(Number); }
`;

// ===================== AULA 1: frequências =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 81', h1: 'Distribuição de frequência: <span style="color:var(--primary);">resumir centenas de dados em uma tabela</span>',
  sub: 'Quantas vezes cada valor apareceu? Contar, dividir pelo total e acumular transforma uma lista longa em uma imagem organizada dos dados.',
  badges: [['fi: frequência absoluta'], ['fr = fi ÷ n', 'growth'], ['acumulada Fi', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da lista bruta à tabela.', [
  ['Rol', 'dados em ordem crescente', 'bulb'],
  ['Frequência absoluta', 'quantas vezes cada valor aparece', 'chart'],
  ['Frequência relativa', 'a fração (ou percentual) do total', 'target'],
  ['Frequência acumulada', 'quantos há até determinado valor', 'link'],
  ['Leitura', 'responder perguntas com a tabela', 'scale']
]));
a.push(objetivosSlide([
  'Construir uma <strong>tabela de distribuição de frequência</strong> com $f_i$, $f_r$, percentual e acumulada.',
  'Calcular a <strong>frequência relativa</strong> $f_r = f_i ÷ n$ e expressá-la em percentual.',
  'Usar a <strong>frequência acumulada</strong> para responder “quantos até…”.',
  'Verificar o resultado: $∑ f_i = n$ e $∑ f_r = 1$.'
], 'Dica', 'Confira sempre os totais: a soma das frequências absolutas deve dar o <strong>número de dados</strong> ($n$) e a das relativas, <strong>1</strong> (ou 100%).', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O que a turma faz no tempo livre?', `
          ${lede('Durante uma semana, cada estudante anota quantas vezes fez cada atividade no tempo livre: jogar, ver vídeos, ouvir música, praticar esporte, ler. Como organizar as respostas da turma para descobrir <strong>quantas vezes cada atividade apareceu</strong>? Contando e agrupando — e é isso que a <strong>tabela de frequências</strong> faz.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Em 20 estudantes, 6 têm nível básico de informática, 9 intermediário e 5 avançado. A frequência relativa do nível intermediário é:', ['9', '0,25', '0,45', '0,6'], 2, '$f_r = 9 ÷ 20 = 0,45 = 45%$. A frequência <strong>absoluta</strong> é 9 (a contagem); a <strong>relativa</strong> é a fração do total.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">$f_i$ (absoluta): <strong>contagem</strong>. $f_r$ (relativa): <strong>$f_i ÷ n$</strong>. $F_i$ (acumulada): soma de todas as frequências <strong>até</strong> aquele valor.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · tabela de frequências', 'Quatro colunas que contam a história dos dados', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Rol</strong>: dados em ordem crescente.</li>
                <li><strong>Frequência absoluta</strong> $f_i$: quantas vezes o valor aparece.</li>
                <li><strong>Frequência relativa</strong> $f_r = {f_i|n}$ (em decimal ou em percentual).</li>
                <li><strong>Frequência acumulada</strong> $F_i$: $f_1 + f_2 + ... + f_i$.</li>
                <li>Totais: $∑ f_i = n$ e $∑ f_r = 1$ (100%).</li>
              </ul>
            </div>
            ${W.box('Construa a tabela', '<div><label>Dados (separe por ponto e vírgula)</label><input type="text" id="d1-d" value="0; 1; 1; 2; 2; 2; 2; 3; 3; 3; 3; 3; 4; 4; 4; 5; 5; 5; 6; 7" inputmode="decimal"></div>' + W.txt('d1-t', 'Tabela (valor: fi · fr · acumulada): ') + W.txt('d1-s', 'Totais: ') + W.hint('d1-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Livros lidos por 20 estudantes', 'Os números de livros lidos no semestre por 20 estudantes foram: 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 7. Construa a tabela de frequências.', [
  ['Conte cada valor', '0: 1 · 1: 2 · 2: 4 · 3: 5 · 4: 3 · 5: 3 · 6: 1 · 7: 1 (soma $20$ ✓).'],
  ['Frequência relativa', 'Divida por $20$: $0,05$; $0,10$; $0,20$; $0,25$; $0,15$; $0,15$; $0,05$; $0,05$ (soma $1$ ✓).'],
  ['Acumule', '$1, 3, 7, 12, 15, 18, 19, 20$.']
], 'Tabela pronta (veja ao lado). Moda: <strong>3 livros</strong> (maior frequência, $5$).'));
a.push(sl('Tabela', 'Livros lidos: distribuição de frequências', `
          <div class="grid2">
            ${tbl(['Livros', 'fi', 'fr', '%', 'Fi'], tabLivros)}
            <div>
              ${barras({ cats: tabLivros.map(r => r[0]), vals: tabLivros.map(r => +r[1]), max: 6, passo: 1, maxw: '340px' })}
              ${callout('Leituras rápidas', 'Quantos leram <strong>no máximo 3</strong> livros? $F = 12$. Quantos leram <strong>5 ou mais</strong>? $3 + 1 + 1 = 5$ (25%).', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Respondendo com a tabela', 'Com a tabela dos livros: (a) Quantos estudantes leram menos de 3 livros? (b) Que percentual leu 5 livros ou mais?', [
  ['(a) Menos de 3', 'Valores $0$, $1$ e $2$: $F(2) = 7$ estudantes.'],
  ['(b) 5 ou mais', 'Valores $5$, $6$ e $7$: $3 + 1 + 1 = 5$ estudantes.'],
  ['Percentual', '$5 ÷ 20 = 0,25 = 25%$.']
], '(a) <strong>7</strong> estudantes; (b) <strong>25%</strong>.', 'growth'));

a.push(pratique('Frequência relativa', 'Em 20 estudantes, 6 têm nível básico, 9 intermediário e 5 avançado. A frequência relativa do nível intermediário é:',
  ['9%', '25%', '45%', '60%', '90%'], 2,
  '$9 ÷ 20 = 0,45 = 45%$. <strong>Alternativa C.</strong>'));
a.push(pratique('Acumulada', 'Na tabela dos livros, quantos estudantes leram <strong>no máximo 3</strong> livros?',
  ['5', '7', '12', '15', '20'], 2,
  'Frequência acumulada até $3$: $1 + 2 + 4 + 5 = 12$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Percentual de leitores', 'Na mesma tabela (20 estudantes), o percentual dos que leram <strong>5 livros ou mais</strong> é:',
  ['15%', '20%', '25%', '30%', '50%'], 2,
  '$5, 6$ e $7$ livros: $3 + 1 + 1 = 5$ estudantes; $5 ÷ 20 = 25%$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a tabela engana', [
  ['Frequência absoluta × relativa', '“9” é absoluta; “45%” é relativa. Não misture as colunas.'],
  ['Acumulada que “desce”', 'A acumulada nunca diminui e termina em $n$.'],
  ['Totais que não fecham', 'Se $∑ f_i ≠ n$ ou $∑ f_r ≠ 1$, falta ou sobrou algum dado.'],
  ['“Menos de” × “no máximo”', '“Menos de 3” exclui o 3; “no máximo 3” inclui.']
]));
a.push(quiz([
  { q: 'A soma das frequências relativas de uma tabela é:', o: ['n', '1', '100', 'depende'], a: 1 },
  { q: '$f_i = 8$ em $n = 40$. A frequência relativa é:', o: ['0,2', '5', '0,08', '32'], a: 0 },
  { q: 'A frequência acumulada final é igual a:', o: ['1', 'n', 'à moda', 'à média'], a: 1 },
  { q: 'A frequência absoluta de um valor é:', o: ['a fração do total', 'quantas vezes ele aparece', 'a soma até ele', 'sua porcentagem'], a: 1 }
]));
a.push(fechamento([
  ['fi', 'Contagem de cada valor.'],
  ['fr', 'fi ÷ n (decimal ou %).'],
  ['Fi', 'Soma das frequências até o valor; termina em n.']
], 'Conte, divida, acumule e confira os totais.'));

pages.push({ out: BASE + 'aula-1-tabela-de-frequencias.html', html: K.deck({
  title: 'Tabela de frequências — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 81 · Tabela de frequências', slides: a,
  extra: WJS + BIND + FJS + String.raw`
  bind(['d1-d'], function(){ var d = lista($('d1-d').value); if(!d.length || !d.every(isFinite) || d.length > 200){ $('d1-t').textContent = 'informe de 1 a 200 números'; $('d1-s').textContent = ''; return; }
    var n = d.length, c = {}; d.forEach(function(v){ c[v] = (c[v] || 0) + 1; }); var ks = Object.keys(c).map(Number).sort(function(a, b){ return a - b; }), ac = 0, linhas = [];
    ks.forEach(function(k){ ac += c[k]; linhas.push(pt(k) + ': ' + c[k] + ' · ' + pt(c[k] / n, 3) + ' (' + pt(c[k] / n * 100, 1) + '%) · ' + ac); });
    $('d1-t').textContent = linhas.join('  |  '); $('d1-s').textContent = 'n = ' + n + ' · Σ fr = ' + pt(ks.reduce(function(s, k){ return s + c[k] / n; }, 0), 3); var mf = Math.max.apply(null, ks.map(function(k){ return c[k]; })); $('d1-h').textContent = 'Moda: ' + ks.filter(function(k){ return c[k] === mf; }).map(function(k){ return pt(k); }).join(' e ') + ' (' + mf + ' vezes).'; });`
}) });

// ===================== AULA 2: classes =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 82', h1: 'Dados agrupados em classes: <span style="color:var(--growth);">quando os valores são muitos demais</span>',
  sub: 'Se cada estudante registra o tempo exato de uso do celular, a lista fica enorme. Agrupar em intervalos (classes) mantém a ideia geral e esconde o excesso de detalhes.',
  badges: [['amplitude total'], ['classes de mesma amplitude', 'growth'], ['intervalo [a, b)', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do rol ao agrupamento em classes.', [
  ['Por que agrupar', 'muitos valores diferentes', 'bulb'],
  ['Amplitude', 'maior − menor', 'target'],
  ['Número e amplitude das classes', '√n e arredondamento', 'chart'],
  ['Limites das classes', 'o intervalo é fechado à esquerda e aberto à direita', 'link'],
  ['Tabela por classes', 'fi, fr e acumulada', 'scale']
]));
b.push(objetivosSlide([
  'Calcular a <strong>amplitude total</strong> e escolher a <strong>amplitude de classe</strong>.',
  'Construir a <strong>tabela de distribuição por classes</strong> com $f_i$, $f_r$ e $F_i$.',
  'Usar a notação $a ⊢ b$ (<strong>fechado em $a$ e aberto em $b$</strong>).',
  'Responder perguntas sobre <strong>percentuais</strong> de classes.'
], 'Dica', 'Cada dado pertence a <strong>uma só classe</strong>. Em $a ⊢ b$, o limite $a$ está <strong>dentro</strong> e o limite $b$ está <strong>fora</strong> (pertence à classe seguinte).', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Notas de 30 estudantes', `
          ${lede('Em um simulado, 30 estudantes tiveram notas de 0 a 100: 34, 41, 47, 52, 55, 58, 60, 62, 63, 65, 66, 68, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 82, 83, 85, 86, 88, 90, 94, 98. Uma tabela com um valor por linha seria longa. Agrupando em <strong>faixas de 10 pontos</strong> a leitura fica imediata.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Quantas classes de amplitude 10 (começando em 30) cobrem notas de 34 a 98?', ['5', '6', '7', '8'], 2, 'Classes: $30 ⊢ 40$, $40 ⊢ 50$, $50 ⊢ 60$, $60 ⊢ 70$, $70 ⊢ 80$, $80 ⊢ 90$, $90 ⊢ 100$: <strong>7</strong> classes.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Amplitude total $= x_{máx} − x_{mín}$ $= 98 − 34 = 64$. Com $k$ classes, amplitude de classe $h ≥ {64|k}$ (arredondada).</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · como agrupar', 'Passo a passo', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>1.</strong> Ordene os dados (rol) e ache a <strong>amplitude total</strong> $A = x_{máx} − x_{mín}$.</li>
                <li><strong>2.</strong> Escolha o número de classes $k$ (uma regra prática: $k ≈ √{n}$, entre 5 e 10 para $n$ moderado).</li>
                <li><strong>3.</strong> Amplitude de classe: $h ≥ {A|k}$, arredondada para cima (valor “redondo”).</li>
                <li><strong>4.</strong> Forme as classes $a ⊢ a + h$ (fechada à esquerda, aberta à direita) e conte $f_i$.</li>
                <li><strong>5.</strong> Calcule $f_r$ e $F_i$; confira os totais.</li>
              </ul>
            </div>
            ${W.box('Agrupador em classes', '<div><label>Dados (separe por ponto e vírgula)</label><input type="text" id="g1-d" value="34; 41; 47; 52; 55; 58; 60; 62; 63; 65; 66; 68; 70; 71; 72; 73; 74; 75; 76; 78; 79; 80; 82; 83; 85; 86; 88; 90; 94; 98" inputmode="decimal"></div>' + W.row(W.nm('g1-i', 'Início da 1ª classe', 30, 'any'), W.nm('g1-h', 'Amplitude da classe', 10, 'any')) + W.txt('g1-a', 'Amplitude total e nº de classes: ') + W.txt('g1-t', 'Classes (fi · %): ') + W.hint('g1-hh'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Tabela', 'Notas do simulado agrupadas em classes', `
          <div class="grid2">
            ${tbl(['Notas', 'fi', 'fr', '%', 'Fi'], tabNotas)}
            <div>
              ${histograma({ classes: classesNotas, max: 10, passo: 2, maxw: '340px' })}
              ${callout('Atenção', 'Na classe $90 ⊢ 100$, entram $90$, $94$ e $98$. Uma nota $100$ (se existisse) estaria na classe seguinte, ou a última classe seria fechada nos dois lados.', 'success')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Escolhendo as classes', 'Em 30 dados entre 34 e 98, quantas classes e que amplitude usar?', [
  ['Amplitude total', '$A = 98 − 34 = 64$.'],
  ['Número de classes', '$√{30} ≈ 5,5$: escolhe-se $k = 6$ ou $7$.'],
  ['Amplitude de classe', '${64|6} ≈ 10,7$: arredonda-se para um valor “redondo”, $h = 10$ (e usa-se $7$ classes: $30$ a $100$).']
], 'Classes de amplitude $10$, de $30 ⊢ 40$ até $90 ⊢ 100$.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Respondendo com a tabela por classes', 'Com a tabela das notas: (a) Que percentual obteve nota inferior a 60? (b) Quantos tiveram 70 ou mais?', [
  ['(a) Menos de 60', 'Classes $30 ⊢ 40$, $40 ⊢ 50$, $50 ⊢ 60$: $1 + 2 + 3 = 6$ estudantes; $6 ÷ 30 = 0,20 = 20%$.'],
  ['(b) 70 ou mais', 'Classes $70 ⊢ 80$, $80 ⊢ 90$, $90 ⊢ 100$: $9 + 6 + 3 = 18$ estudantes.'],
  ['Conferência', '$18 ÷ 30 = 60%$; $20% + 20% + 60% = 100%$ (classe $60 ⊢ 70$ com $6$ = $20%$).']
], '(a) <strong>20%</strong>; (b) <strong>18</strong> estudantes (60%).', 'growth'));

b.push(pratique('Número de classes', 'Notas entre 34 e 98 serão agrupadas em classes de amplitude 10, começando em 30. O número de classes é:',
  ['5', '6', '7', '8', '10'], 2,
  'De $30$ a $100$ com passo $10$: $30, 40, 50, 60, 70, 80, 90, 100$ → $7$ classes. <strong>Alternativa C.</strong>', '', 'growth'));
b.push(pratique('Percentual por classes', 'Na tabela por classes das notas, o percentual de estudantes com nota <strong>70 ou mais</strong> é:',
  ['30%', '40%', '50%', '60%', '70%'], 3,
  '$9 + 6 + 3 = 18$; $18 ÷ 30 = 60%$. <strong>Alternativa D.</strong>', '', 'growth'));
b.push(estiloEnem('Nota inferior a 60', 'Na distribuição das notas em classes, o número de estudantes com nota <strong>inferior a 60</strong> é:',
  ['3', '6', '9', '12', '15'], 1,
  'Classes até $50 ⊢ 60$: $1 + 2 + 3 = 6$. <strong>Alternativa B.</strong>'));

b.push(armadilhas('Cuidados', 'Onde as classes enganam', [
  ['Limite fora ou dentro', 'Em $a ⊢ b$ o $b$ <strong>não</strong> pertence à classe: $60$ entra em $60 ⊢ 70$, e não em $50 ⊢ 60$.'],
  ['Classes de amplitudes diferentes', 'Use classes de <strong>mesma amplitude</strong> (para o histograma ficar fiel).'],
  ['Perder dados', 'Confira se $∑ f_i = n$: uma classe esquecida faz sumir dados.'],
  ['Perda de detalhe', 'Ao agrupar, perde-se o valor exato de cada dado (medidas por classes serão aproximações).']
]));
b.push(quiz([
  { q: 'A amplitude total de 34 a 98 é:', o: ['34', '64', '98', '132'], a: 1 },
  { q: 'O valor 60 pertence à classe:', o: ['50 ⊢ 60', '60 ⊢ 70', 'às duas', 'a nenhuma'], a: 1 },
  { q: 'Em 30 dados, $f_i = 9$ em uma classe. O percentual é:', o: ['9%', '30%', '33%', '27%'], a: 1 },
  { q: 'A soma das frequências de todas as classes é:', o: ['1', 'n', '100', 'depende'], a: 1 }
]));
b.push(fechamento([
  ['Amplitude', 'A = máx − mín; h ≥ A ÷ k.'],
  ['Classes', 'a ⊢ b: inclui a, exclui b; mesma amplitude.'],
  ['Conferência', 'Σ fi = n e Σ fr = 1.']
], 'Agrupe com classes iguais e confira os totais.'));

pages.push({ out: BASE + 'aula-2-dados-em-classes.html', html: K.deck({
  title: 'Dados agrupados em classes — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 82 · Dados em classes', slides: b,
  extra: WJS + BIND + FJS + String.raw`
  bind(['g1-d', 'g1-i', 'g1-h'], function(){ var d = lista($('g1-d').value), i0 = +$('g1-i').value, h = +$('g1-h').value; if(!d.length || !d.every(isFinite) || d.length > 300 || !isFinite(i0) || !isFinite(h) || h <= 0){ $('g1-a').textContent = 'informe os dados, o início e uma amplitude positiva'; $('g1-t').textContent = ''; return; }
    var mn = Math.min.apply(null, d), mx = Math.max.apply(null, d), A = mx - mn; if(i0 > mn){ $('g1-a').textContent = 'o início deve ser menor ou igual ao menor dado (' + pt(mn) + ')'; $('g1-t').textContent = ''; return; }
    var k = Math.floor((mx - i0) / h) + 1, cl = [], n = d.length, ac = 0; for(var j = 0; j < k; j++){ var a = i0 + j * h, b = a + h, f = d.filter(function(v){ return v >= a && v < b; }).length; ac += f; cl.push(pt(a) + ' ⊢ ' + pt(b) + ': ' + f + ' (' + pt(f / n * 100, 1) + '%)'); }
    $('g1-a').textContent = 'A = ' + pt(mx) + ' − ' + pt(mn) + ' = ' + pt(A) + ' · ' + k + ' classes (√n ≈ ' + pt(Math.sqrt(n), 1) + ')'; $('g1-t').textContent = cl.join('  |  '); $('g1-hh').textContent = 'Total de dados nas classes: ' + ac + ' de ' + n + (ac === n ? ' ✓' : ' (algum dado ficou fora)') + '.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Distribuição de frequência: <span>tabelas por valor e por classe</span>',
  lede: 'Frequências absoluta, relativa e acumulada, e como agrupar dados em classes de mesma amplitude para ler tendências sem se perder em detalhes.',
  badges: ['fi', 'fr = fi/n', 'a ⊢ b'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Rol', 'Dados ordenados', 'chart', 'primary', p('Base de qualquer tabela.')],
    ['fi e fr', 'Contagem e fração', 'target', 'growth', p('$f_r = {f_i|n}$') + call('Exemplo', '9 de 20: 45%.', 'success')],
    ['Fi', 'Acumulada', 'link', 'decay', p('Soma até o valor; termina em $n$.') + call('Exemplo', 'Até 3 livros: 12.', 'success')],
    ['Amplitude', 'Máx − mín', 'scale', 'success', p('$A = x_{máx} − x_{mín}$; $h ≥ A ÷ k$.') + call('Exemplo', '98 − 34 = 64.', 'success')],
    ['Classes', 'a ⊢ b', 'up', 'primary', li(['Mesma amplitude.', 'Fechada em a, aberta em b.', 'Cada dado em uma só classe.'])],
    ['Conferência', 'Totais', 'check', 'growth', li(['Σ fi = n.', 'Σ fr = 1.', 'Fi final = n.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Confundir fi e fr.', 'Limite da classe dentro/fora.', 'Classes de amplitudes diferentes.', 'Totais que não fecham.', '“Menos de” com “no máximo”.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Distribuição de frequência <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: frequência relativa, acumulada, percentual, classes e leitura da tabela.',
  final: 'Total certo, frequência certa e a classe certa para cada dado.',
  questions: [
    { badge: 'Estilo ENEM · frequência relativa', text: 'Em 20 estudantes, 6 têm nível básico de informática, 9 têm nível intermediário e 5, avançado.', cmd: 'A frequência relativa do nível intermediário é:', opts: ['9%', '25%', '45%', '60%', '90%'], a: 2,
      sol: '<p>$9 ÷ 20 = 0,45 = 45%$.</p>' },
    { badge: 'Estilo ENEM · acumulada', text: 'Número de livros lidos por 20 estudantes (valor: frequência): 0: 1; 1: 2; 2: 4; 3: 5; 4: 3; 5: 3; 6: 1; 7: 1.', cmd: 'Quantos estudantes leram no máximo 3 livros?', opts: ['5', '7', '12', '15', '20'], a: 2,
      sol: '<p>$1 + 2 + 4 + 5 = 12$.</p>' },
    { badge: 'Estilo ENEM · percentual', text: 'Na mesma tabela de livros lidos (20 estudantes):', cmd: 'O percentual dos que leram 5 livros ou mais é:', opts: ['15%', '20%', '25%', '30%', '50%'], a: 2,
      sol: '<p>$3 + 1 + 1 = 5$; $5 ÷ 20 = 25%$.</p>' },
    { badge: 'Estilo ENEM · classes', text: 'Notas de 34 a 98 serão agrupadas em classes de amplitude 10, começando em 30.', cmd: 'O número de classes é:', opts: ['5', '6', '7', '8', '10'], a: 2,
      sol: '<p>$30, 40, 50, 60, 70, 80, 90, 100$: sete classes.</p>' },
    { badge: 'Estilo ENEM · leitura', text: 'Em 30 notas agrupadas, as classes $70 ⊢ 80$, $80 ⊢ 90$ e $90 ⊢ 100$ têm 9, 6 e 3 estudantes.', cmd: 'O percentual de estudantes com nota 70 ou mais é:', opts: ['30%', '40%', '50%', '60%', '70%'], a: 3,
      sol: '<p>$18 ÷ 30 = 60%$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Ordene a <span style="color:var(--growth);">construção</span>',
  subtitle: 'Passos embaralhados da construção de tabelas de frequência.',
  tpl: cOrdenar({
    intro: 'Cada problema tem passos fora de ordem. Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante. Passos fora de lugar são rejeitados.',
    final: 'Rol, contagem, frequências e conferência: a ordem se repete em toda tabela.',
    problemas: [
      { titulo: 'Tabela por valor', enunciado: 'Construir a tabela dos livros lidos (20 estudantes).', passos: ['Ordene os dados: faça o rol.', 'Conte quantas vezes aparece cada valor ($f_i$).', 'Divida cada $f_i$ por $20$ para obter $f_r$.', 'Acumule os $f_i$ e confira: $∑ f_i = 20$ e $∑ f_r = 1$.'] },
      { titulo: 'Escolhendo as classes', enunciado: 'Agrupar 30 notas entre 34 e 98.', passos: ['Ache a amplitude total: $98 − 34 = 64$.', 'Escolha o número de classes ($√{30} ≈ 5,5$ ⇒ cerca de 6 ou 7).', 'Escolha a amplitude “redonda”: $h = 10$.', 'Monte as classes $30 ⊢ 40$, ..., $90 ⊢ 100$ e conte cada uma.'] },
      { titulo: 'Percentual de uma faixa', enunciado: 'Que percentual obteve nota inferior a 60?', passos: ['Identifique as classes: $30 ⊢ 40$, $40 ⊢ 50$ e $50 ⊢ 60$.', 'Some as frequências: $1 + 2 + 3 = 6$.', 'Divida pelo total: $6 ÷ 30 = 0,20$.', 'Converta para percentual: $20%$.'] }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Distribuição de frequência: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas com tabelas de frequência. Digite o número pedido.',
  final: 'Você percorreu a trilha: relativa, acumulada, percentual, classes e leitura.',
  problems: [
    { tag: 'Relativa', q: 'Em 20 estudantes, 9 têm nível intermediário. Qual a frequência relativa em %?', a: 45, ph: '%', hint: '9 ÷ 20.', sol: '<p>$45%$.</p>' },
    { tag: 'Acumulada', q: 'Livros lidos (20 estudantes): 0:1, 1:2, 2:4, 3:5. Quantos leram no máximo 3?', a: 12, ph: 'estudantes', hint: '1 + 2 + 4 + 5.', sol: '<p>$12$.</p>' },
    { tag: 'Percentual', q: 'Na mesma tabela, 5 estudantes leram 5 livros ou mais. Qual o percentual de 20?', a: 25, ph: '%', hint: '5 ÷ 20.', sol: '<p>$25%$.</p>' },
    { tag: 'Classes', q: 'Notas de 34 a 98 em classes de amplitude 10 a partir de 30: quantas classes?', a: 7, ph: 'classes', hint: '30 até 100.', sol: '<p>$7$.</p>' },
    { tag: 'Leitura', q: 'Em 30 notas, as classes de 70 em diante têm 9, 6 e 3 estudantes. Qual o percentual com 70 ou mais?', a: 60, ph: '%', hint: '18 ÷ 30.', sol: '<p>$60%$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Distribuição de Frequência', accent: 'growth', icon: 'bars',
  aulas: [['Aula 81', 'Tabela de frequências', 'aula-1-tabela-de-frequencias.html'], ['Aula 82', 'Dados agrupados em classes', 'aula-2-dados-em-classes.html']],
  enem: 'Distribuição de frequência no estilo ENEM', cria: 'Ordene a construção', pratica: 'Distribuição de frequência: trilha de desafios'
}, pages };
