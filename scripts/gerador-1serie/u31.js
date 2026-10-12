// Unidade 31 — Medidas de tendência central para dados agrupados em classes (aulas 92 e 93)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { histograma, fmt } = require('./stat.js');
const { p, wl, call, li } = G;
const TRI = 3, DIR = 'tendencia-central-em-classes', BASE = 'aulas/1-ano/3-tri/' + DIR + '/';
const KEY = 'm1u31', BRAND = 'Tendência Central em Classes', CAP = 'Aulas 92 e 93';
const pages = [];

const massas = [[40, 50, 4], [50, 60, 10], [60, 70, 7], [70, 80, 6], [80, 90, 3]];
const entregas = [[10, 20, 12], [20, 30, 24], [30, 40, 8], [40, 50, 4], [50, 60, 2]];
const mp = c => (c[0] + c[1]) / 2;
const tabela = cl => { let ac = 0; return cl.map(c => { ac += c[2]; return [`${c[0]} ⊢ ${c[1]}`, String(mp(c)).replace('.', ','), String(c[2]), String(ac), String(mp(c) * c[2]).replace('.', ',')]; }); };

const CJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}); }
  function lista(txt){ return txt.split(/[;]+/).map(function(s){ return s.trim().replace(',', '.'); }).filter(function(s){ return s !== ''; }).map(Number); }
  function medidasClasses(i0, w, f){ var n = f.reduce(function(s, v){ return s + v; }, 0), soma = 0, ac = 0, md = null, moda = [], mf = Math.max.apply(null, f), p1 = n % 2 ? (n + 1) / 2 : n / 2, p2 = n % 2 ? p1 : p1 + 1, achouP1 = null, achouP2 = null;
    f.forEach(function(v, i){ var m = i0 + w * i + w / 2; soma += m * v; var antes = ac; ac += v; if(achouP1 === null && p1 <= ac) achouP1 = m; if(achouP2 === null && p2 <= ac) achouP2 = m; if(v === mf) moda.push(m); });
    return {n: n, media: soma / n, soma: soma, moda: moda, mediana: (achouP1 + achouP2) / 2, p1: p1, p2: p2}; }
`;

// ===================== AULA 1 =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 92', h1: 'Dados agrupados em classes: <span style="color:var(--primary);">o ponto médio fala pela classe</span>',
  sub: 'Quando só conhecemos quantos dados caíram em cada intervalo, usamos o ponto médio da classe como representante dela. Com isso calculamos média, moda e mediana.',
  badges: [['ponto médio xᵢ'], ['média: Σ xᵢ·fᵢ ÷ n', 'growth'], ['moda e mediana: classes', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da tabela por classes às três medidas.', [
  ['Convenção', 'frequências uniformes na classe', 'bulb'],
  ['Ponto médio', 'xᵢ = (a + b) ÷ 2', 'target'],
  ['Média', 'Σ xᵢ·fᵢ ÷ n', 'chart'],
  ['Moda', 'ponto médio da classe modal', 'link'],
  ['Mediana', 'ponto médio da classe central', 'scale']
]));
a.push(objetivosSlide([
  'Calcular o <strong>ponto médio</strong> de cada classe.',
  'Obter a <strong>média</strong> de dados agrupados com $∑ x_i f_i ÷ n$.',
  'Encontrar a <strong>classe modal</strong> e a <strong>classe mediana</strong> e seus pontos médios.',
  'Entender que os resultados são <strong>aproximações</strong> dos valores reais.'
], 'Dica', 'Por convenção, consideramos os dados <strong>distribuídos uniformemente</strong> em cada classe: assim o <strong>ponto médio</strong> representa a classe inteira.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A média das médias', `
          ${lede('Em uma gincana é preciso descobrir a <strong>altura média</strong> dos alunos do colégio, mas não há tempo para medir todos. Uma ideia: pedir a cada turma um resumo — por exemplo, <strong>quantos alunos há em cada faixa de altura</strong> — e calcular a média a partir desses resumos. É o que se faz com <strong>dados agrupados em classes</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Qual o ponto médio da classe $60 ⊢ 70$?', ['60', '65', '70', '130'], 1, '$(60 + 70) ÷ 2 = 65$. Esse valor representa todos os dados da classe.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Com dados em classes, <strong>não conhecemos os valores exatos</strong>: usamos $x_i$ = ponto médio. Os resultados são <strong>aproximados</strong>.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · as três medidas', 'Média, moda e mediana com classes', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Ponto médio</strong> da classe $a ⊢ b$: $x_i = {a + b|2}$.</li>
                <li><strong>Média</strong>: $"média" = {∑ x_i f_i|n}$ (multiplique cada ponto médio pela frequência).</li>
                <li><strong>Moda</strong>: ponto médio da <strong>classe modal</strong> (maior $f_i$).</li>
                <li><strong>Mediana</strong>: ponto médio da <strong>classe mediana</strong>, a que contém o dado central (posição $n ÷ 2$; se $n$ é par, as posições $n ÷ 2$ e $n ÷ 2 + 1$).</li>
              </ul>
            </div>
            ${W.box('Medidas por classes', W.row(W.nm('c1-i', 'Início da 1ª classe', 40, 'any'), W.nm('c1-w', 'Amplitude', 10, 'any')) + '<div><label>Frequências (separe por ponto e vírgula)</label><input type="text" id="c1-f" value="4; 10; 7; 6; 3" inputmode="decimal"></div>' + W.txt('c1-a', 'n e Σ xᵢ·fᵢ: ') + W.txt('c1-b', 'Média: ') + W.txt('c1-c', 'Moda e mediana: ') + W.hint('c1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Tabela', 'Massa de 30 alunos', `
          <div class="grid2">
            ${tbl(['Massa (kg)', 'xᵢ', 'fᵢ', 'Fᵢ', 'xᵢ·fᵢ'], tabela(massas))}
            <div>
              ${histograma({ classes: massas, max: 12, passo: 2, maxw: '340px' })}
              ${callout('Total', '$∑ f_i = 30$ e $∑ x_i f_i = 1\\ 890$.', 'success')}
            </div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'As três medidas das massas', 'Com a tabela da massa de 30 alunos (classes $40 ⊢ 50$ a $80 ⊢ 90$ com frequências $4, 10, 7, 6, 3$), calcule a média, a moda e a mediana.', [
  ['Média', '$x_i$: $45, 55, 65, 75, 85$. $∑ x_i f_i = 180 + 550 + 455 + 450 + 255 = 1\\ 890$; média $= 1\\ 890 ÷ 30 = 63$ kg.'],
  ['Moda', 'Classe modal: $50 ⊢ 60$ ($f = 10$); moda $= 55$ kg.'],
  ['Mediana', '$n = 30$: posições $15$ e $16$. Acumuladas: $4, 14, 21$ ⇒ ambas na classe $60 ⊢ 70$: mediana $= 65$ kg.']
], 'Média <strong>63 kg</strong>, moda <strong>55 kg</strong>, mediana <strong>65 kg</strong> (valores aproximados).'));
a.push(exemplo('Exemplo resolvido', 'Salário semanal', 'O salário semanal (reais) de 35 colaboradores: $280 ⊢ 300$: 5; $300 ⊢ 320$: 13; $320 ⊢ 340$: 9; $340 ⊢ 360$: 5; $360 ⊢ 380$: 3. Calcule as três medidas.', [
  ['Média', '$x_i$: $290, 310, 330, 350, 370$. $∑ x_i f_i = 1\\ 450 + 4\\ 030 + 2\\ 970 + 1\\ 750 + 1\\ 110 = 11\\ 310$; média $= 11\\ 310 ÷ 35 ≈ 323,14$.'],
  ['Moda', 'Classe modal $300 ⊢ 320$ ($13$): moda $= 310$.'],
  ['Mediana', '$n = 35$ (ímpar): posição $18$. Acumuladas $5, 18, ...$ ⇒ 18º na classe $300 ⊢ 320$: mediana $= 310$.']
], 'Média <strong>≈ R$ 323,14</strong>; moda e mediana <strong>R$ 310</strong>.', 'growth'));

a.push(pratique('Média por classes', 'Na tabela das massas (classes de $40$ a $90$ com frequências $4, 10, 7, 6, 3$), a massa média, em kg, é:',
  ['58', '60', '63', '65', '70'], 2,
  '$∑ x_i f_i = 1\\ 890$; $1\\ 890 ÷ 30 = 63$. <strong>Alternativa C.</strong>'));
a.push(pratique('Moda por classes', 'Na mesma tabela, a moda é:',
  ['50 kg', '55 kg', '60 kg', '65 kg', '10 kg'], 1,
  'A classe modal é $50 ⊢ 60$ ($f = 10$); a moda é o ponto médio: $55$ kg. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Mediana por classes', 'Na mesma tabela (n = 30), a mediana é:',
  ['55 kg', '60 kg', '63 kg', '65 kg', '75 kg'], 3,
  'Posições $15$ e $16$ estão na classe $60 ⊢ 70$ (acumuladas $4, 14, 21$): ponto médio $65$ kg. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidados', 'Onde as classes enganam', [
  ['Usar o limite no lugar do ponto médio', 'O valor representativo é $(a + b) ÷ 2$, não $a$ nem $b$.'],
  ['Dividir pelo número de classes', 'Divida por $n = ∑ f_i$ (total de dados).'],
  ['Classe modal × frequência', 'A moda é o <strong>ponto médio</strong> da classe, não a frequência.'],
  ['Achar que é exato', 'Com dados agrupados, os resultados são <strong>aproximações</strong>.']
]));
a.push(quiz([
  { q: 'O ponto médio de $20 ⊢ 30$ é:', o: ['20', '25', '30', '50'], a: 1 },
  { q: 'A moda de dados em classes é:', o: ['a maior frequência', 'o ponto médio da classe modal', 'a soma das classes', 'o maior limite'], a: 1 },
  { q: 'Classes de ponto médio 5 e 15 com f = 2 e 3: a média é:', o: ['10', '11', '12', '8'], a: 1 },
  { q: 'A mediana de dados em classes usa a classe que contém:', o: ['a maior frequência', 'o dado central', 'o primeiro dado', 'o último'], a: 1 }
]));
a.push(fechamento([
  ['Ponto médio', 'xᵢ = (a + b) ÷ 2 representa a classe.'],
  ['Média', 'Σ xᵢ·fᵢ ÷ n.'],
  ['Moda e mediana', 'Pontos médios das classes modal e mediana.']
], 'Pontos médios como representantes e conferência do total.'));

pages.push({ out: BASE + 'aula-1-medidas-em-classes.html', html: K.deck({
  title: 'Medidas de tendência central em classes — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 92 · Medidas em classes', slides: a,
  extra: WJS + BIND + CJS + String.raw`
  bind(['c1-i', 'c1-w', 'c1-f'], function(){ var i0 = +$('c1-i').value, w = +$('c1-w').value, f = lista($('c1-f').value); if(!isFinite(i0) || !isFinite(w) || w <= 0 || !f.length || f.length > 20 || !f.every(function(v){ return isFinite(v) && v >= 0 && Math.round(v) === v; }) || f.reduce(function(s, v){ return s + v; }, 0) <= 0){ $('c1-a').textContent = 'informe início, amplitude positiva e frequências inteiras'; $('c1-b').textContent = ''; $('c1-c').textContent = ''; return; }
    var r = medidasClasses(i0, w, f); $('c1-a').textContent = 'n = ' + r.n + ' · Σ xᵢ·fᵢ = ' + pt(r.soma, 3); $('c1-b').textContent = pt(r.soma, 3) + ' ÷ ' + r.n + ' = ' + pt(r.media, 3);
    $('c1-c').textContent = 'moda ' + r.moda.map(function(v){ return pt(v); }).join(' e ') + ' · mediana ' + pt(r.mediana, 3); $('c1-h').textContent = 'Posição(ões) da mediana: ' + (r.p1 === r.p2 ? r.p1 : r.p1 + ' e ' + r.p2) + '. Os valores usam pontos médios: são aproximações.'; });`
}) });

// ===================== AULA 2: valores discrepantes e escolha =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 93', h1: 'Valores discrepantes e a escolha da medida: <span style="color:var(--growth);">qual número representa melhor?</span>',
  sub: 'Poucos valores muito altos (ou muito baixos) puxam a média e enganam. Saber reconhecer valores discrepantes ajuda a escolher entre média, mediana e moda e a justificar a escolha.',
  badges: [['outlier para mais: média > mediana'], ['mediana: resistente', 'growth'], ['moda: mais frequente', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Do dado estranho à decisão.', [
  ['Valor discrepante', 'extremo em relação ao grupo', 'bulb'],
  ['Efeito na média', 'puxa para o lado do extremo', 'chart'],
  ['Comparar medidas', 'média × mediana × moda', 'target'],
  ['Escolher a medida', 'justificar com a distribuição', 'link'],
  ['Problemas', 'entregas, salários e grupos', 'scale']
]));
b.push(objetivosSlide([
  'Reconhecer <strong>valores discrepantes</strong> (outliers) em tabelas por classes.',
  'Explicar o efeito deles na <strong>média</strong>, e a resistência da <strong>mediana</strong> e da <strong>moda</strong>.',
  '<strong>Escolher</strong> a medida mais adequada e justificar.',
  'Calcular as medidas em <strong>tabelas por classes</strong>.'
], 'Dica', 'Compare as três medidas: se a <strong>média é bem diferente da mediana</strong>, há assimetria ou valores discrepantes. Nesse caso, prefira a <strong>mediana</strong>.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Quantas horas por semana você estuda em casa?', `
          ${lede('Se coletarmos as respostas da turma, haverá quem estude pouco e quem estude bastante. A coordenação quer <strong>um número</strong> para resumir: a média? o valor que mais apareceu? o intervalo mais comum? A resposta depende de a distribuição ter ou não <strong>valores discrepantes</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Tipo', 'Posição', 'Efeito na média'], [['Discrepante para mais', 'à direita (valor muito alto)', 'média sobe: média > mediana'], ['Discrepante para menos', 'à esquerda (valor muito baixo)', 'média cai: média < mediana']])}
            ${mini('Em uma empresa, um diretor ganha muito mais que todos. Para descrever o salário típico, a medida mais adequada é:', ['a média', 'a mediana', 'o maior salário', 'a soma'], 1, 'O salário do diretor é um <strong>valor discrepante para mais</strong> e puxa a média para cima; a <strong>mediana</strong> continua representando o funcionário típico.')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · escolhendo a medida', 'Cada medida, o seu uso', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Valor discrepante (outlier)</strong>: dado muito afastado do restante. Para mais ou para menos.</li>
                <li><strong>Média</strong>: ótima para dados <strong>simétricos</strong> e sem discrepantes; <strong>sensível</strong> a extremos.</li>
                <li><strong>Mediana</strong>: a melhor quando há discrepantes (salários, preços de imóveis, tempos de espera).</li>
                <li><strong>Moda</strong>: indicada para dados <strong>qualitativos</strong> ou quando interessa o valor mais comum (tamanho de roupa mais vendido).</li>
              </ul>
            </div>
            ${W.box('Efeito de uma cauda longa', W.row(W.nm('o1-i', 'Início da 1ª classe', 10, 'any'), W.nm('o1-w', 'Amplitude', 10, 'any')) + '<div><label>Frequências (separe por ponto e vírgula)</label><input type="text" id="o1-f" value="12; 24; 8; 4; 2" inputmode="decimal"></div>' + W.nm('o1-x', 'Somar à última classe (valores extras)', 0, 'any') + W.txt('o1-a', 'Média, moda e mediana: ') + W.txt('o1-b', 'Média − mediana: ') + W.hint('o1-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Tabela', 'Tempo de entrega de 50 pedidos', `
          <div class="grid2">
            ${tbl(['Tempo (min)', 'xᵢ', 'fᵢ', 'Fᵢ', 'xᵢ·fᵢ'], tabela(entregas))}
            <div>
              ${histograma({ classes: entregas, max: 28, passo: 4, maxw: '340px' })}
              ${callout('Cauda à direita', 'Poucas entregas muito demoradas ($50 ⊢ 60$) formam uma <strong>cauda</strong> à direita e puxam a média para cima.', 'success')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'O tempo padrão de entrega', 'Com a tabela das entregas (frequências $12, 24, 8, 4, 2$ nas classes de $10$ a $60$), calcule média, moda e mediana e decida qual divulgar como “tempo padrão”.', [
  ['Média', '$∑ x_i f_i = 180 + 600 + 280 + 180 + 110 = 1\\ 350$; média $= 1\\ 350 ÷ 50 = 27$ min.'],
  ['Moda e mediana', 'Classe modal $20 ⊢ 30$ (moda $25$). $n = 50$: posições $25$ e $26$ na classe $20 ⊢ 30$ (acumuladas $12, 36$): mediana $25$.'],
  ['Escolha', 'A média ($27$) é puxada pelas entregas lentas; <strong>mediana e moda ($25$)</strong> descrevem melhor a entrega comum.']
], 'Divulgar <strong>25 minutos</strong> (mediana/moda) é mais justo que 27 min.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Escolhendo por tipo de dado', 'Escolha a medida mais adequada: (a) tamanho de camisa mais vendido; (b) preços de imóveis em um bairro com algumas mansões; (c) notas de uma prova, sem valores extremos.', [
  ['(a) Tamanho mais vendido', 'Variável qualitativa/ordinal: <strong>moda</strong>.'],
  ['(b) Imóveis com mansões', 'Valores discrepantes para mais: <strong>mediana</strong>.'],
  ['(c) Notas sem extremos', 'Distribuição simétrica: <strong>média</strong>.']
], '(a) moda · (b) mediana · (c) média.', 'growth'));

b.push(pratique('Efeito na média', 'Em uma distribuição com poucos valores muito altos, é <strong>mais provável</strong> que:',
  ['a média seja menor que a mediana', 'a média seja maior que a mediana', 'a média seja igual à moda', 'a média não exista', 'a mediana seja negativa'], 1,
  'Valores altos puxam a média para cima: média $>$ mediana. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Medida das entregas', 'Na tabela das entregas (média 27 min; mediana e moda 25 min), a medida mais adequada para divulgar o tempo padrão é:',
  ['a média, por ser a mais precisa', 'a mediana, pois a média é puxada pelas entregas mais demoradas', 'a soma dos tempos', 'a amplitude', 'qualquer uma é igualmente adequada'], 1,
  'A média é afetada pela cauda de entregas lentas; a mediana descreve melhor a entrega típica. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('Salário médio', 'Na tabela do salário semanal de 35 colaboradores ($280 ⊢ 300$: 5; $300 ⊢ 320$: 13; $320 ⊢ 340$: 9; $340 ⊢ 360$: 5; $360 ⊢ 380$: 3), o salário médio, usando pontos médios, é, aproximadamente:',
  ['R$ 310,00', 'R$ 320,00', 'R$ 323,14', 'R$ 330,00', 'R$ 340,00'], 2,
  '$∑ x_i f_i = 11\\ 310$; $11\\ 310 ÷ 35 ≈ 323,14$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a escolha da medida engana', [
  ['Escolher sempre a média', 'Com valores discrepantes ela distorce o retrato do grupo.'],
  ['Remover o outlier sem pensar', 'Um valor extremo pode ser <strong>real</strong> e importante: analise, não apague.'],
  ['Mediana igual à média', 'Só coincidem (aproximadamente) em distribuições simétricas.'],
  ['Moda para dados contínuos', 'Em dados contínuos, use a classe modal e seu ponto médio.']
]));
b.push(quiz([
  { q: 'Um valor discrepante para mais:', o: ['reduz a média', 'aumenta a média', 'não altera nada', 'altera só a moda'], a: 1 },
  { q: 'Com salários de uma empresa e um diretor muito bem pago, a melhor medida é:', o: ['média', 'mediana', 'soma', 'amplitude'], a: 1 },
  { q: 'Para o tamanho de camisa mais vendido, usa-se:', o: ['média', 'mediana', 'moda', 'variância'], a: 2 },
  { q: 'Se média > mediana, a distribuição tende a ter:', o: ['cauda à direita', 'cauda à esquerda', 'simetria perfeita', 'nenhum dado'], a: 0 }
]));
b.push(fechamento([
  ['Discrepantes', 'Extremos puxam a média; mediana resiste.'],
  ['Escolha', 'Média: simétrica. Mediana: com discrepantes. Moda: qualitativas e mais comum.'],
  ['Justificar', 'Compare as três medidas e explique.']
], 'Comparar as três medidas revela a forma dos dados.'));

pages.push({ out: BASE + 'aula-2-valores-discrepantes-e-escolha.html', html: K.deck({
  title: 'Valores discrepantes e escolha da medida — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aula 93 · Discrepantes e escolha da medida', slides: b,
  extra: WJS + BIND + CJS + String.raw`
  bind(['o1-i', 'o1-w', 'o1-f', 'o1-x'], function(){ var i0 = +$('o1-i').value, w = +$('o1-w').value, f = lista($('o1-f').value), x = +$('o1-x').value; if(!isFinite(i0) || !isFinite(w) || w <= 0 || !f.length || f.length > 20 || !f.every(function(v){ return isFinite(v) && v >= 0 && Math.round(v) === v; }) || !isFinite(x) || x < 0 || f.reduce(function(s, v){ return s + v; }, 0) <= 0){ $('o1-a').textContent = 'informe início, amplitude e frequências inteiras'; $('o1-b').textContent = ''; return; }
    f[f.length - 1] += Math.round(x); var r = medidasClasses(i0, w, f); $('o1-a').textContent = 'n = ' + r.n + ' · média ' + pt(r.media, 3) + ' · moda ' + r.moda.map(function(v){ return pt(v); }).join(' e ') + ' · mediana ' + pt(r.mediana, 3);
    $('o1-b').textContent = pt(r.media - r.mediana, 3) + (r.media > r.mediana ? ' (média acima da mediana: cauda à direita)' : r.media < r.mediana ? ' (média abaixo: cauda à esquerda)' : ''); $('o1-h').textContent = 'Some valores à última classe e veja a média se afastar da mediana: ela é sensível à cauda; a mediana, não.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Tendência central em classes: <span>ponto médio e escolha da medida</span>',
  lede: 'Média, moda e mediana de dados agrupados em classes, usando pontos médios, e como escolher a medida em presença de valores discrepantes.',
  badges: ['xᵢ = (a+b)/2', 'média = Σ xᵢ·fᵢ/n', 'discrepante: mediana'],
  curve: 'M20,150 C 100,140 180,110 250,84 C 330,56 410,38 480,22',
  sections: [
    ['Ponto médio', 'Representante', 'chart', 'primary', p('$x_i = (a + b) ÷ 2$') + call('Exemplo', '60 ⊢ 70: 65.', 'success')],
    ['Média', 'Ponderada', 'target', 'growth', p('$"média" = {∑ x_i f_i|n}$') + call('Exemplo', '1 890 ÷ 30 = 63.', 'success')],
    ['Moda', 'Classe modal', 'link', 'decay', p('Ponto médio da classe de maior $f_i$.')],
    ['Mediana', 'Classe central', 'scale', 'success', p('Posição $n ÷ 2$ (e $n ÷ 2 + 1$) pela acumulada.')],
    ['Discrepantes', 'Extremos', 'up', 'primary', li(['Para mais: média > mediana.', 'Para menos: média < mediana.', 'Mediana resiste.'])],
    ['Escolha', 'Qual usar', 'check', 'growth', li(['Simétrica: média.', 'Com extremos: mediana.', 'Qualitativa/mais comum: moda.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar o limite da classe, não o ponto médio.', 'Dividir pelo número de classes.', 'Moda como frequência.', 'Média em dados com outliers.', 'Esquecer que são aproximações.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Tendência central em classes <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: média, moda, mediana, escolha da medida e salário médio.',
  final: 'Ponto médio, total certo e a medida adequada à forma dos dados.',
  questions: [
    { badge: 'Estilo ENEM · média', text: 'Massa de 30 alunos em classes ($40 ⊢ 50$ a $80 ⊢ 90$) com frequências 4, 10, 7, 6 e 3.', cmd: 'A massa média, em kg, é:', opts: ['58', '60', '63', '65', '70'], a: 2,
      sol: '<p>$∑ x_i f_i = 1\\ 890$; $1\\ 890 ÷ 30 = 63$.</p>' },
    { badge: 'Estilo ENEM · moda', text: 'Mesma tabela das massas.', cmd: 'A moda é:', opts: ['50 kg', '55 kg', '60 kg', '65 kg', '10 kg'], a: 1,
      sol: '<p>Classe modal $50 ⊢ 60$: ponto médio $55$.</p>' },
    { badge: 'Estilo ENEM · mediana', text: 'Mesma tabela (n = 30).', cmd: 'A mediana é:', opts: ['55 kg', '60 kg', '63 kg', '65 kg', '75 kg'], a: 3,
      sol: '<p>Posições $15$ e $16$ na classe $60 ⊢ 70$: $65$.</p>' },
    { badge: 'Estilo ENEM · escolha da medida', text: 'Tempos de entrega de 50 pedidos têm média 27 min e mediana e moda 25 min, com poucas entregas muito demoradas.', cmd: 'Para divulgar o tempo padrão, a melhor escolha é:', opts: ['a média, por ser a maior', 'a mediana (ou moda), pois a média é puxada pelas entregas lentas', 'a soma dos tempos', 'qualquer valor, tanto faz', 'a amplitude'], a: 1,
      sol: '<p>A cauda de entregas lentas eleva a média; mediana e moda refletem a entrega comum.</p>' },
    { badge: 'Estilo ENEM · salário médio', text: 'Salário semanal de 35 colaboradores: $280 ⊢ 300$: 5; $300 ⊢ 320$: 13; $320 ⊢ 340$: 9; $340 ⊢ 360$: 5; $360 ⊢ 380$: 3.', cmd: 'O salário médio (pontos médios) é, aproximadamente:', opts: ['R$ 310,00', 'R$ 320,00', 'R$ 323,14', 'R$ 330,00', 'R$ 340,00'], a: 2,
      sol: '<p>$11\\ 310 ÷ 35 ≈ 323,14$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Qual <span style="color:var(--growth);">medida</span> usar?',
  subtitle: 'Média, mediana ou moda: escolha a melhor para cada situação.',
  tpl: cClassificar({
    cats: ['média', 'mediana', 'moda'],
    intro: 'Cada cartão descreve uma situação. Escolha a medida mais adequada e clique em <strong>Conferir</strong>.',
    final: 'Média: simétrica sem extremos. Mediana: com valores discrepantes. Moda: o mais frequente ou qualitativo.',
    itens: [
      ['Salários de uma empresa em que o diretor ganha muito mais que os demais', 1, 'Valor discrepante para mais: mediana.'],
      ['Tamanho de camisa mais vendido', 2, 'Valor mais frequente: moda.'],
      ['Notas de uma prova sem valores extremos', 0, 'Distribuição simétrica: média.'],
      ['Preços de imóveis em um bairro com algumas mansões', 1, 'Discrepantes para mais: mediana.'],
      ['Cor de carro mais comprada', 2, 'Variável qualitativa: moda.'],
      ['Tempo de entrega com poucas entregas muito atrasadas', 1, 'Cauda longa: mediana.'],
      ['Alturas de alunos de uma turma, distribuição simétrica', 0, 'Simétrica: média.'],
      ['Sabor de pizza preferido', 2, 'Qualitativa nominal: moda.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Tendência central em classes: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas de cálculo com pontos médios. Digite o número pedido.',
  final: 'Você percorreu a trilha: média, moda, mediana e média das entregas.',
  problems: [
    { tag: 'Média', q: 'Massas em classes de 40 a 90 com frequências 4, 10, 7, 6, 3. Qual a média (kg)?', a: 63, ph: 'kg', hint: 'Σ xᵢ·fᵢ = 1 890; n = 30.', sol: '<p>$63$.</p>' },
    { tag: 'Moda', q: 'Qual a moda (kg) da mesma tabela?', a: 55, ph: 'kg', hint: 'Ponto médio da classe de f = 10.', sol: '<p>$55$.</p>' },
    { tag: 'Mediana', q: 'Qual a mediana (kg) da mesma tabela?', a: 65, ph: 'kg', hint: 'Posições 15 e 16.', sol: '<p>$65$.</p>' },
    { tag: 'Média', q: 'Entregas: classes de 10 a 60 com frequências 12, 24, 8, 4, 2. Qual a média (min)?', a: 27, ph: 'min', hint: 'Σ xᵢ·fᵢ = 1 350; n = 50.', sol: '<p>$27$.</p>' },
    { tag: 'Ponto médio', q: 'Qual o ponto médio da classe 60 ⊢ 70?', a: 65, ph: 'xᵢ', hint: '(60 + 70) ÷ 2.', sol: '<p>$65$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Tendência Central em Classes', accent: 'primary', icon: 'sigma',
  aulas: [['Aula 92', 'Medidas em classes', 'aula-1-medidas-em-classes.html'], ['Aula 93', 'Valores discrepantes e escolha da medida', 'aula-2-valores-discrepantes-e-escolha.html']],
  enem: 'Tendência central em classes no estilo ENEM', cria: 'Qual medida usar?', pratica: 'Tendência central em classes: trilha de desafios'
}, pages };
