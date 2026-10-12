// Unidade 1 — Notação científica (aulas 01 a 03)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { p, wl, call, prop, T: tb, li, steps, chips } = G;
const TRI = 1, DIR = 'notacao-cientifica', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u01', BRAND = 'Notação Científica', CAP = 'Aulas 01 a 03';
const pages = [];

// JS comum aos dois decks: formata números em notação científica
const NCJS = String.raw`
function sup10(n){ return '10<sup>' + String(n).replace('-', '−') + '</sup>'; }
function ptn(v, d){ return (Math.round(v * Math.pow(10, d == null ? 6 : d)) / Math.pow(10, d == null ? 6 : d)).toLocaleString('pt-BR', {maximumFractionDigits: d == null ? 6 : d}); }
function norm(m, e){ if(m === 0) return [0, 0]; var s = m < 0 ? -1 : 1; m = Math.abs(m); var k = 0; while(m >= 10 - 1e-9){ m /= 10; e++; if(++k > 400) break; } k = 0; while(m < 1 - 1e-9){ m *= 10; e--; if(++k > 400) break; } return [s * Math.round(m * 1e9) / 1e9, e]; }
function nc(m, e){ var r = norm(m, e); return r[0] === 0 ? '0' : ptn(r[0]) + ' · ' + sup10(r[1]); }
function lerNum(s){ s = String(s).trim().replace(/\s/g, '').replace(/\./g, '').replace(',', '.'); return s === '' ? NaN : +s; }
`;

// ===================== AULA 1: o que é e como escrever =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aula 01', h1: 'Notação científica: <span style="color:var(--primary);">números gigantes sem zeros demais</span>',
  sub: 'Como escrever distâncias do espaço e tamanhos de moléculas com um número entre 1 e 10 vezes uma potência de 10 — e como converter nos dois sentidos.',
  badges: [['a · 10ⁿ'], ['1 ≤ a < 10', 'growth'], ['prefixos do SI', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do número comprido ao número “compactado”.', [
  ['Por que compactar?', 'a distância Terra–Sol tem 9 zeros', 'bulb'],
  ['A forma a · 10ⁿ', 'regra do número entre 1 e 10', 'chart'],
  ['Converter: contar casas', 'vírgula para a esquerda/direita e o sinal do expoente', 'link'],
  ['Prefixos do SI', 'nano, micro, mili, quilo, mega, giga…', 'scale'],
  ['Praticar', 'neurônios, bilhões e uma miniatura microscópica', 'target']
]));
a.push(objetivosSlide([
  'Escrever um número como <strong>$a · 10^n$</strong>, com $1 ≤ a < 10$ e $n$ inteiro.',
  'Decidir o <strong>sinal do expoente</strong> contando as casas da vírgula.',
  'Usar os <strong>prefixos do SI</strong> para passar de nanômetro, micrômetro etc. para metro.',
  'Converter de volta: de $a · 10^n$ para o número com todos os algarismos.'
], 'Ideia-chave', 'Notação científica é uma <strong>forma de organizar</strong> o número: o expoente diz a <strong>ordem de grandeza</strong> e o número entre 1 e 10 guarda os algarismos.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A distância até o Sol tem 9 zeros', `
          ${lede('A distância média entre a Terra e o Sol é de aproximadamente <strong>150 000 000 km</strong>. Escrever e comparar números assim, com tantos zeros, dá trabalho — e é fácil errar a conta dos zeros.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Qual destas é uma forma compacta de escrever 150 000 000?', ['$1,5 · 10^{8}$', '$15 · 10^{6}$', '$1,5 · 10^{9}$', '$150 · 10^{7}$'], 0, '$150 000 000$ tem 8 casas depois do primeiro algarismo: $1,5 · 10^{8}$. As outras também valem (ex.: $15 · 10^{7}$) mas só a primeira tem o número entre 1 e 10 — é a <strong>notação científica</strong>.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Em vez de contar zeros, guardamos <strong>quantas casas</strong> a vírgula andou: esse é o expoente de 10.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · definição', 'A forma a · 10ⁿ', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Um número em <strong>notação científica</strong> é escrito como $a · 10^{n}$.</li>
                <li>$a$ é um número real com <strong>$1 ≤ a < 10$</strong> (um algarismo antes da vírgula, e não pode ser zero).</li>
                <li>$n$ é um <strong>número inteiro</strong>: positivo para números grandes, negativo para números pequenos (entre 0 e 1).</li>
                <li>Serve para massas de átomos, distâncias do universo, tamanhos de vírus… e para <strong>comparar</strong> ordens de grandeza.</li>
              </ul>
              ${callout('Regra de ouro', 'O número que multiplica a potência (a “mantissa”) tem de estar <strong>entre 1 e 10</strong>. $12,5 · 10^{5}$ e $0,9 · 10^{-3}$ <strong>não</strong> estão em notação científica.', 'success')}
            </div>
            ${W.box('Conversor para notação científica', '<div><label>Digite um número (pode usar vírgula)</label><input type="text" id="c1-x" value="150000000" inputmode="decimal"></div>' + W.txt('c1-t', 'Em notação científica: ') + W.txt('c1-d', 'A vírgula andou: ') + W.hint('c1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Como converter', 'Conte as casas da vírgula', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Número grande (≥ 10):</strong> ande com a vírgula para a <strong>esquerda</strong> até sobrar um algarismo antes dela. O expoente é <strong>positivo</strong> e igual ao número de casas.</li>
                <li><strong>Número pequeno (entre 0 e 1):</strong> ande para a <strong>direita</strong> até o primeiro algarismo diferente de zero ficar antes da vírgula. O expoente é <strong>negativo</strong>.</li>
                <li>Para voltar: expoente $n > 0$ → ande $n$ casas para a direita (completando com zeros); $n < 0$ → ande $|n|$ casas para a esquerda.</li>
              </ul>
            </div>
            ${tbl(['Número', 'Casas', 'Notação científica'], [
              ['$150 000 000$', '8 para a esquerda', '$1,5 · 10^{8}$'],
              ['$45 000$', '4 para a esquerda', '$4,5 · 10^{4}$'],
              ['$0,0097$', '3 para a direita', '$9,7 · 10^{-3}$'],
              ['$0,000 000 150$', '7 para a direita', '$1,5 · 10^{-7}$']
            ])}
          </div>`, { cls: '' }));

a.push(sl('Prefixos do SI', 'Nano, micro, mili… são potências de 10', `
          ${lede('As camadas antirreflexo das telas de celular têm cerca de <strong>150 nanômetros</strong> de espessura. Quanto é um nanômetro? Basta lembrar que o prefixo <strong>nano</strong> vale $10^{-9}$.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Prefixo', 'Símbolo', 'Fator'], [
              ['giga', 'G', '$10^{9}$'], ['mega', 'M', '$10^{6}$'], ['quilo', 'k', '$10^{3}$'],
              ['mili', 'm', '$10^{-3}$'], ['micro', 'µ', '$10^{-6}$'], ['nano', 'n', '$10^{-9}$'], ['pico', 'p', '$10^{-12}$']
            ])}
            ${callout('Aplicando', '$150 "nm"$ = $150 · 10^{-9}$ m = $1,5 · 10^{2} · 10^{-9}$ m = <strong>$1,5 · 10^{-7}$ m</strong> (0,000 000 15 m, com 7 casas depois da vírgula).', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Uma miniatura de 100 micrômetros', 'Uma impressora 3D produz um carrinho microscópico com <strong>100 micrômetros</strong> de comprimento. Qual é esse comprimento em metros, em notação científica?', [
  ['Use o prefixo', '1 micrômetro (µm) = $10^{-6}$ m.'],
  ['Multiplique', '$100 · 10^{-6}$ m.'],
  ['Ajuste a mantissa para entre 1 e 10', '$100 = 1 · 10^{2}$, logo $100 · 10^{-6} = 1 · 10^{2} · 10^{-6}$.'],
  ['Some os expoentes (mesma base)', '$10^{2} · 10^{-6} = 10^{-4}$.']
], 'O carrinho mede <strong>$1 · 10^{-4}$ m</strong> (0,0001 m = 0,1 mm).'));

a.push(pratique('Oito bilhões de pessoas', 'A população mundial passou de 8 bilhões em 2022. Como se escreve “8 bilhões” em notação científica?',
  ['$8 · 10^{6}$', '$8 · 10^{8}$', '$8 · 10^{9}$', '$0,8 · 10^{10}$'], 2,
  '8 bilhões = 8 000 000 000: depois do 8 há <strong>9 zeros</strong>, então a vírgula andou 9 casas: $8,0 · 10^{9}$. A última opção, $0,8 · 10^{10}$, vale o mesmo, mas a mantissa é menor que 1.'));

a.push(pratique('Neurônios do cérebro', 'Acreditava-se que o cérebro humano tinha cerca de 100 bilhões de neurônios; pesquisas recentes sugerem 86 bilhões. Qual a diferença entre as duas estimativas, em notação científica?',
  ['$1 · 10^{11}$', '$8,6 · 10^{9}$', '$1,4 · 10^{9}$', '$1,4 · 10^{10}$', '$14 · 10^{10}$'], 3,
  '$100 − 86 = 14$ bilhões $= 14 000 000 000$. A vírgula anda 10 casas para a esquerda: $1,4 · 10^{10}$. A alternativa $14 · 10^{10}$ está errada: a mantissa passou de 10.', '', 'growth'));

a.push(armadilhas('Cuidados', 'Onde mais se erra', [
  ['Mantissa fora do intervalo', '$12,5 · 10^{5}$ e $0,9 · 10^{-3}$ valem, mas <strong>não são</strong> notação científica. Reescreva: $1,25 · 10^{6}$ e $9 · 10^{-4}$.'],
  ['Sinal do expoente trocado', 'Número <strong>pequeno</strong> (entre 0 e 1) tem expoente <strong>negativo</strong>; número grande, positivo. $0,0097 = 9,7 · 10^{-3}$, nunca $10^{3}$.'],
  ['Contar mal as casas', 'Em $0,000 007$ são <strong>6</strong> casas até o 7. Conte a partir da vírgula até o primeiro algarismo não nulo.'],
  ['Esquecer o prefixo', '“150 nm” não é $150 · 10^{9}$: o prefixo nano é <strong>$10^{-9}$</strong>, expoente negativo.']
]));

a.push(quiz([
  { q: 'O número $0,000 25$ em notação científica é:', o: ['$2,5 · 10^{4}$', '$2,5 · 10^{-4}$', '$25 · 10^{-5}$', '$0,25 · 10^{-3}$'], a: 1 },
  { q: '$3,2 · 10^{6}$ escrito com todos os algarismos é:', o: ['3 200', '32 000', '3 200 000', '320 000 000'], a: 2 },
  { q: 'Qual destes está em notação científica correta?', o: ['$18 · 10^{3}$', '$0,4 · 10^{5}$', '$7,05 · 10^{-2}$', '$10 · 10^{-6}$'], a: 2 },
  { q: '$45 "nm"$ em metros (notação científica):', o: ['$4,5 · 10^{-8}$', '$4,5 · 10^{-9}$', '$4,5 · 10^{8}$', '$45 · 10^{9}$'], a: 0 }
]));
a.push(fechamento([
  ['A forma', '$a · 10^{n}$ com $1 ≤ a < 10$ e $n$ inteiro.'],
  ['O expoente', 'Número de casas que a vírgula andou: positivo para grandes, negativo para pequenos.'],
  ['Os prefixos', 'nano $= 10^{-9}$, micro $= 10^{-6}$, mili $= 10^{-3}$, quilo $= 10^{3}$, mega $= 10^{6}$, giga $= 10^{9}$.']
], 'Primeiro ajuste a mantissa entre 1 e 10; o expoente guarda o resto.'));

pages.push({ out: BASE + 'aula-1-escrever-numeros.html', html: K.deck({
  title: 'Notação científica: escrever e converter — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 01 · Notação científica', slides: a,
  extra: WJS + BIND + NCJS + String.raw`
  bind(['c1-x'], function(){
    var s = $('c1-x').value, x = lerNum(s);
    if(!isFinite(x) || x === 0){ $('c1-t').innerHTML = '—'; $('c1-d').textContent = ''; $('c1-h').textContent = 'Digite um número diferente de zero (ex.: 0,0097 ou 150000000).'; return; }
    var p = x.toExponential(8).split('e'), m = +p[0], e = parseInt(p[1], 10);
    $('c1-t').innerHTML = nc(m, e);
    $('c1-d').textContent = e === 0 ? 'não precisou andar (já está entre 1 e 10)' : Math.abs(e) + (Math.abs(e) === 1 ? ' casa' : ' casas') + ' para a ' + (e > 0 ? 'esquerda → expoente positivo' : 'direita → expoente negativo');
    $('c1-h').textContent = Math.abs(x) >= 10 ? 'Número grande: o expoente é positivo.' : Math.abs(x) < 1 ? 'Número entre 0 e 1: o expoente é negativo.' : 'Já está entre 1 e 10: o expoente é zero.';
  });`
}) });

// ===================== AULA 2: operar e comparar =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 02 e 03', h1: 'Operações e comparações <span style="color:var(--growth);">em notação científica</span>',
  sub: 'Somar, subtrair, multiplicar e dividir sem perder a conta dos zeros — e descobrir qual número é maior só olhando o expoente.',
  badges: [['+ − · ÷'], ['mesmo expoente', 'growth'], ['ordem de grandeza', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Operar com potências de 10 como se fossem “letras iguais”.', [
  ['Soma e subtração', 'só com o mesmo expoente (como termos semelhantes)', 'scale'],
  ['Igualar expoentes', 'quando são diferentes: ande com a vírgula', 'link'],
  ['Multiplicação e divisão', 'coeficientes à parte, expoentes somam ou subtraem', 'chart'],
  ['Comparar e ordem de grandeza', 'o expoente “manda”', 'target'],
  ['Problemas', 'Terra–Marte, cabelo × nanofio, idade do Universo', 'bulb']
]));
b.push(objetivosSlide([
  'Somar e subtrair números em notação científica <strong>igualando os expoentes</strong>.',
  'Multiplicar e dividir tratando <strong>mantissas</strong> e <strong>potências</strong> separadamente.',
  '<strong>Renormalizar</strong> o resultado quando a mantissa sai do intervalo $[1, 10)$.',
  'Comparar números e achar a <strong>ordem de grandeza</strong>.'
], 'Dica', 'Soma e subtração de notação científica funcionam como $5m + 7m = 12m$: $5 · 10^{3} + 7 · 10^{3} = 12 · 10^{3}$.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Dobre um papel 42 vezes', `
          ${lede('Uma folha tem cerca de <strong>0,1 mm</strong> de espessura. Cada dobra <strong>dobra</strong> a espessura (0,2 mm; 0,4 mm; …). A Lua está a 384 400 km. Quantas dobras seriam necessárias para a pilha chegar à Lua?')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Dobrando a folha (de verdade só dá ~7 vezes!)', W.rg('c2-d', 'Dobras', 0, 45, 1, 20) + W.txt('c2-e', 'Espessura: ') + W.txt('c2-k', 'Em quilômetros: ') + W.hint('c2-h'))}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">A espessura é $0,1 · 2^{n}$ mm. Com <strong>42</strong> dobras passa de 440 mil km — mais que Terra–Lua. Números enormes aparecem rápido; a notação científica os mantém legíveis.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · soma e subtração', 'Mesmo expoente: some as mantissas', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Com <strong>o mesmo expoente</strong>, soma-se (ou subtrai-se) só a mantissa e repete-se a potência: $3,3 · 10^{8} + 4,8 · 10^{8} = 8,1 · 10^{8}$.</li>
                <li>É igual a somar termos semelhantes: $5m + 7m = 12m$.</li>
                <li>Se o expoente for <strong>diferente</strong>, ande com a vírgula de um dos números até igualar: $1,2 · 10^{5} + 0,3 · 10^{4} = 12 · 10^{4} + 0,3 · 10^{4} = 12,3 · 10^{4} = 1,23 · 10^{5}$.</li>
                <li>No fim, <strong>renormalize</strong> se a mantissa saiu de $[1, 10)$.</li>
              </ul>
              ${callout('Exemplo com número comum', '$200 + 4,5 · 10^{2}$: escreva $200 = 2 · 10^{2}$ e some: $(2 + 4,5) · 10^{2} = 6,5 · 10^{2}$.', 'success')}
            </div>
            ${W.box('Calculadora de notação científica', W.row(W.nm('c3-a1', 'a₁', 1.2, 'any'), W.nm('c3-n1', 'n₁', 5)) + W.sel('c3-op', 'Operação', ['+ (soma)', '− (subtração)', '· (multiplicação)', '÷ (divisão)'], 0) + W.row(W.nm('c3-a2', 'a₂', 0.3, 'any'), W.nm('c3-n2', 'n₂', 4)) + W.txt('c3-p', 'Passo: ') + W.txt('c3-r', 'Resultado: ') + W.hint('c3-h'))}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · multiplicação e divisão', 'Coeficientes de um lado, potências do outro', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Multiplicação:</strong> multiplique as mantissas e <strong>some</strong> os expoentes: $(a · 10^{m})(b · 10^{n}) = (ab) · 10^{m+n}$.</li>
                <li><strong>Divisão:</strong> divida as mantissas e <strong>subtraia</strong> os expoentes: \${a · 10^{m}|b · 10^{n}} = {a|b} · 10^{m−n}$.</li>
                <li>Depois, renormalize a mantissa.</li>
              </ul>
            </div>
            <div>
              ${callout('Multiplicando', '$5,06 · 10^{-17} · 4,5 · 10^{13}$ = $22,77 · 10^{-4}$ = $2,277 · 10^{1} · 10^{-4}$ = <strong>$2,277 · 10^{-3}$</strong>.', 'success')}
              ${callout('Dividindo', '$9,6 · 10^{13} ÷ (3,2 · 10^{10})$ = $3 · 10^{13−10}$ = <strong>$3 · 10^{3}$</strong>.')}
            </div>
          </div>`, { cls: 'growth' }));

b.push(sl('Comparar e ordem de grandeza', 'Quem manda é o expoente', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Entre dois números positivos em notação científica, <strong>maior expoente = maior número</strong>. Só se os expoentes forem iguais é que se comparam as mantissas.</li>
                <li>$4,2 · 10^{6}$ é maior que $8,5 · 10^{5}$, mesmo $8,5 > 4,2$: o primeiro é da ordem dos milhões; o segundo, das centenas de milhar.</li>
                <li><strong>Ordem de grandeza</strong>: a potência de 10 mais próxima. Em $a · 10^{n}$: se $a < √10 ≈ 3,16$, a ordem é $10^{n}$; se $a ≥ 3,16$, é $10^{n+1}$.</li>
              </ul>
            </div>
            ${callout('Exemplo', 'Ordem de grandeza de $2,9 · 10^{7}$: $2,9 < 3,16$ → $10^{7}$. De $6,1 · 10^{7}$: $6,1 ≥ 3,16$ → $10^{8}$.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Quantas células cabem?', 'Uma bactéria ultrapequena tem volume médio de $0,009 "µm"^3$. Seriam necessárias <strong>150 mil</strong> delas para encher uma célula de outra bactéria. Qual o volume dessa célula, em µm³?', [
  ['Escreva os dois números em notação científica', '$0,009 = 9 · 10^{-3}$ e $150 000 = 1,5 · 10^{5}$.'],
  ['Multiplique mantissas', '$9 · 1,5 = 13,5$.'],
  ['Some os expoentes', '$10^{-3} · 10^{5} = 10^{2}$, então o produto é $13,5 · 10^{2}$.'],
  ['Renormalize', '$13,5 · 10^{2} = 1,35 · 10^{1} · 10^{2} = 1,35 · 10^{3}$.']
], 'A célula tem cerca de <strong>$1,35 · 10^{3} "µm"^3$</strong> (1 350 µm³).', 'growth'));

b.push(pratique('Terra, Marte e Sol', 'A distância média da Terra a Marte é cerca de $2,25 · 10^{8}$ km; da Terra ao Sol, $1,50 · 10^{8}$ km. Quanto a primeira é maior que a segunda, em notação científica?',
  ['$0,75 · 10^{8}$ km', '$7,5 · 10^{7}$ km', '$7,5 · 10^{8}$ km', '$0,75 · 10^{7}$ km'], 1,
  'Mesmo expoente: $(2,25 − 1,50) · 10^{8} = 0,75 · 10^{8}$. Renormalize: $0,75 = 7,5 · 10^{-1}$, logo $7,5 · 10^{7}$ km. A primeira opção tem mantissa menor que 1.', '', 'growth'));

b.push(pratique('Cabelo e nanofio', 'Um fio de cabelo tem diâmetro de cerca de $7 · 10^{-5}$ m e um nanofio, $5 · 10^{-8}$ m. Quantas vezes o diâmetro do cabelo é maior que o do nanofio?',
  ['$1,4 · 10^{3}$', '$1,4 · 10^{-3}$', '$3,5 · 10^{-12}$', '$1,4 · 10^{13}$'], 0,
  'Divisão: $7 ÷ 5 = 1,4$ e $10^{-5} ÷ 10^{-8} = 10^{-5−(−8)} = 10^{3}$. Resposta: $1,4 · 10^{3}$ — o cabelo é cerca de 1 400 vezes mais grosso.', '', 'growth'));

b.push(estiloEnem('Idade do Universo em segundos', 'Estima-se que o Universo tenha cerca de $1,38 · 10^{10}$ anos. Sabendo que 1 ano tem aproximadamente $3,2 · 10^{7}$ segundos, a ordem de grandeza da idade do Universo, em segundos, é:',
  ['$10^{16}$', '$10^{17}$', '$10^{18}$', '$10^{19}$', '$10^{20}$'], 2,
  '$1,38 · 10^{10} · 3,2 · 10^{7} = 4,416 · 10^{17}$. Como $4,416 ≥ 3,16$, a ordem de grandeza é $10^{17+1} = 10^{18}$. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Cinco erros clássicos nas operações', [
  ['Somar com expoentes diferentes', '$2 · 10^{3} + 3 · 10^{4}$ não é $5 · 10^{7}$! Iguale: $0,2 · 10^{4} + 3 · 10^{4} = 3,2 · 10^{4}$.'],
  ['Somar expoentes na soma', 'Na <strong>soma</strong> o expoente <strong>não muda</strong>; só na multiplicação os expoentes se somam.'],
  ['Esquecer de renormalizar', '$22,77 · 10^{-4}$ ainda precisa virar $2,277 · 10^{-3}$.'],
  ['Comparar só as mantissas', '$9 · 10^{3} < 1 · 10^{4}$ porque $9 000 < 10 000$: veja o expoente primeiro.']
]));
b.push(quiz([
  { q: '$3,3 · 10^{8} + 4,8 · 10^{8} =$', o: ['$8,1 · 10^{8}$', '$8,1 · 10^{16}$', '$1,5 · 10^{8}$', '$8,1 · 10^{9}$'], a: 0 },
  { q: '$(2 · 10^{4}) · (3 · 10^{5}) =$', o: ['$6 · 10^{9}$', '$6 · 10^{20}$', '$5 · 10^{9}$', '$6 · 10^{1}$'], a: 0 },
  { q: '$(8 · 10^{6}) ÷ (4 · 10^{2}) =$', o: ['$2 · 10^{3}$', '$2 · 10^{4}$', '$2 · 10^{8}$', '$12 · 10^{4}$'], a: 1 },
  { q: 'Qual é o maior número?', o: ['$9,9 · 10^{3}$', '$1,0 · 10^{4}$', '$8,5 · 10^{3}$', '$9,0 · 10^{2}$'], a: 1 }
]));
b.push(fechamento([
  ['Soma e subtração', 'Mesmo expoente; some só as mantissas e renormalize.'],
  ['Multiplicação e divisão', 'Mantissas × ou ÷; expoentes somam ou subtraem.'],
  ['Comparar', 'Expoente primeiro, depois a mantissa; ordem de grandeza com o limite 3,16.']
], 'Operar com notação científica é cuidar do expoente e da mantissa — cada um no seu lugar.'));

pages.push({ out: BASE + 'aula-2-operacoes-e-comparacoes.html', html: K.deck({
  title: 'Notação científica: operações e comparações — Matemática 1ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 02 e 03 · Notação científica', slides: b,
  extra: WJS + BIND + NCJS + String.raw`
  bind(['c2-d'], function(){
    var d = +$('c2-d').value, mm = 0.1 * Math.pow(2, d), km = mm / 1e6;
    $('c2-d' + 'v').textContent = d;
    $('c2-e').innerHTML = nc(mm, 0) + ' mm';
    $('c2-k').innerHTML = km < 1e-3 ? 'menos de 1 metro' : nc(km, 0) + ' km';
    $('c2-h').textContent = km >= 384400 ? 'Passou da distância Terra–Lua (384 400 km)!' : 'Ainda não chegou à Lua (faltam ' + ptn(384400 - km, 0) + ' km).';
  });
  bind(['c3-a1', 'c3-n1', 'c3-a2', 'c3-n2', 'c3-op'], function(){
    var a1 = +$('c3-a1').value, n1 = parseInt($('c3-n1').value, 10), a2 = +$('c3-a2').value, n2 = parseInt($('c3-n2').value, 10), op = +$('c3-op').value;
    if(!isFinite(a1) || !isFinite(a2) || isNaN(n1) || isNaN(n2)){ $('c3-r').textContent = '—'; return; }
    var passo = '', m, e;
    if(op < 2){
      e = Math.max(n1, n2); var x = a1 * Math.pow(10, n1 - e), y = a2 * Math.pow(10, n2 - e);
      passo = '(' + ptn(x) + (op === 0 ? ' + ' : ' − ') + ptn(y) + ') · ' + sup10(e); m = op === 0 ? x + y : x - y;
      $('c3-h').textContent = n1 === n2 ? 'Mesmo expoente: some (ou subtraia) só as mantissas.' : 'Expoentes diferentes: igualamos os dois ao maior (' + e + ') andando com a vírgula.';
    } else if(op === 2){ m = a1 * a2; e = n1 + n2; passo = '(' + ptn(a1) + ' · ' + ptn(a2) + ') · ' + sup10(e); $('c3-h').textContent = 'Multiplicação: mantissas se multiplicam e os expoentes se somam (' + n1 + ' + ' + n2 + ').'; }
    else { if(a2 === 0){ $('c3-r').textContent = 'divisão por zero'; return; } m = a1 / a2; e = n1 - n2; passo = '(' + ptn(a1) + ' ÷ ' + ptn(a2) + ') · ' + sup10(e); $('c3-h').textContent = 'Divisão: mantissas se dividem e os expoentes se subtraem (' + n1 + ' − ' + (n2 < 0 ? '(' + n2 + ')' : n2) + ').'; }
    $('c3-p').innerHTML = passo + ' = ' + ptn(m) + ' · ' + sup10(e);
    $('c3-r').innerHTML = nc(m, e);
  });`
}) });

// ===================== GUIA VISUAL =====================
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;
const g = K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Notação científica: <span>a·10ⁿ em uma página</span>',
  lede: 'Como escrever números muito grandes ou muito pequenos, operar com eles e compará-los — com os prefixos do SI e os erros mais comuns.',
  badges: ['1 ≤ a < 10', 'n inteiro', 'ordem de grandeza', 'prefixos do SI'],
  curve: 'M20,160 C 120,150 200,110 280,80 C 360,50 420,34 480,22',
  sections: [
    ['Definição', 'A forma a · 10ⁿ', 'chart', 'primary', fx('a · 10^{n}   1 ≤ a < 10   n ∈ ℤ') + p('$n > 0$ para números grandes; $n < 0$ para números entre 0 e 1.')],
    ['Converter', 'Conte as casas', 'link', 'growth', li(['Grande: vírgula para a <strong>esquerda</strong>, expoente <strong>positivo</strong>.', 'Pequeno: vírgula para a <strong>direita</strong>, expoente <strong>negativo</strong>.', '$150 000 000 = 1,5 · 10^{8}$ · $0,0097 = 9,7 · 10^{-3}$'])],
    ['Prefixos do SI', 'Potências de 10', 'scale', 'decay', tb(['Prefixo', 'Fator'], [['giga (G)', '$10^{9}$'], ['mega (M)', '$10^{6}$'], ['quilo (k)', '$10^{3}$'], ['mili (m)', '$10^{-3}$'], ['micro (µ)', '$10^{-6}$'], ['nano (n)', '$10^{-9}$']])],
    ['Soma e subtração', 'Mesmo expoente', 'check', 'success', fx('(a·10^{n}) ± (b·10^{n}) = (a ± b)·10^{n}') + p('Expoentes diferentes? Ande com a vírgula até igualar. Depois renormalize.')],
    ['Produto e quociente', 'Mantissas × expoentes', 'target', 'primary', fx('(a·10^{m})(b·10^{n}) = ab·10^{m+n}') + fx('{a·10^{m}|b·10^{n}} = {a|b}·10^{m−n}')],
    ['Comparar', 'O expoente manda', 'up', 'growth', p('Maior expoente = maior número. Ordem de grandeza: mantissa $< 3,16$ → $10^{n}$; senão $10^{n+1}$.') + call('Exemplo', '$4,4 · 10^{17}$ tem ordem $10^{18}$.', 'success')]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Mantissa fora de $[1, 10)$: $12,5·10^{5}$ não é notação científica.', 'Sinal do expoente trocado em números pequenos.', 'Somar com expoentes diferentes sem igualar.', 'Esquecer de renormalizar o resultado.', 'Comparar só as mantissas.'])]]
});
pages.push(g);

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Notação científica <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: conversão, prefixos, operações e ordem de grandeza.',
  final: 'Mantissa entre 1 e 10, expoente com o sinal certo e atenção ao operar: é tudo o que a prova pede.',
  questions: [
    { badge: 'Estilo ENEM · conversão', text: 'O diâmetro de um vírus é de aproximadamente $0,000 000 12$ metro.', cmd: 'Em notação científica, esse diâmetro é:', opts: ['$1,2 · 10^{-6}$ m', '$1,2 · 10^{-7}$ m', '$1,2 · 10^{-8}$ m', '$1,2 · 10^{7}$ m', '$12 · 10^{-8}$ m'], a: 1,
      sol: '<p>Para chegar em 1,2 a vírgula anda <strong>7 casas</strong> para a direita (6 zeros e o algarismo 1): $1,2 · 10^{-7}$ m. A última opção vale o mesmo valor, mas a mantissa $12$ passou de 10.</p>' },
    { badge: 'Estilo ENEM · prefixos', text: 'Um transistor de um processador moderno mede 5 nanômetros.', cmd: 'Em metros, em notação científica:', opts: ['$5 · 10^{-3}$', '$5 · 10^{-6}$', '$5 · 10^{-9}$', '$5 · 10^{9}$', '$0,5 · 10^{-8}$'], a: 2,
      sol: '<p>Nano $= 10^{-9}$: $5 "nm" = 5 · 10^{-9}$ m. A última opção vale o mesmo, mas a mantissa $0,5$ não está entre 1 e 10.</p>' },
    { badge: 'Estilo ENEM · soma', text: 'Uma loja vendeu $2,4 · 10^{6}$ reais em janeiro e $8 · 10^{5}$ reais em fevereiro.', cmd: 'O total vendido nos dois meses, em reais, foi:', opts: ['$3,2 · 10^{6}$', '$3,2 · 10^{11}$', '$1,04 · 10^{7}$', '$10,4 · 10^{5}$', '$3,2 · 10^{5}$'], a: 0,
      sol: '<p>Iguale os expoentes: $8 · 10^{5} = 0,8 · 10^{6}$. Soma: $(2,4 + 0,8) · 10^{6} = 3,2 · 10^{6}$ reais.</p>' },
    { badge: 'Estilo ENEM · produto', text: 'Um satélite viaja a $7,5 · 10^{3}$ m/s durante $4 · 10^{4}$ segundos.', cmd: 'A distância percorrida, em metros, é:', opts: ['$3 · 10^{7}$', '$3 · 10^{8}$', '$3 · 10^{12}$', '$30 · 10^{7}$', '$1,9 · 10^{-1}$'], a: 1,
      sol: '<p>$7,5 · 4 = 30$ e $10^{3} · 10^{4} = 10^{7}$: $30 · 10^{7}$. Renormalizando: $3 · 10^{8}$ m. (A alternativa D tem a mantissa fora do intervalo.)</p>' },
    { badge: 'Estilo ENEM · ordem de grandeza', text: 'O coração humano bate cerca de $7 · 10^{1}$ vezes por minuto. Em 80 anos há aproximadamente $4,2 · 10^{7}$ minutos.', cmd: 'A ordem de grandeza do número de batimentos em 80 anos é:', opts: ['$10^{7}$', '$10^{8}$', '$10^{9}$', '$10^{10}$', '$10^{11}$'], a: 2,
      sol: '<p>$7 · 10^{1} · 4,2 · 10^{7} = 29,4 · 10^{8} = 2,94 · 10^{9}$. Como $2,94 < 3,16$, a ordem de grandeza é $10^{9}$. <strong>Alternativa C.</strong></p>' }
  ]
}));
pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Está em <span style="color:var(--growth);">notação científica?</span>',
  subtitle: 'Classifique cada número: correto, mantissa fora do intervalo ou expoente com sinal errado.',
  tpl: cClassificar({
    cats: ['Correto', 'Mantissa fora de [1, 10)', 'Expoente com sinal errado'],
    intro: 'Cada cartão traz um número que <strong>deveria</strong> estar em notação científica. Escolha a categoria e clique em <strong>Conferir</strong>.',
    final: 'Mantissa entre 1 e 10 e sinal do expoente certo: é só isso que define uma boa notação.',
    itens: [
      ['$12,5 · 10^{5}$ (para $1 250 000$)', 1, 'A mantissa passou de 10. O certo é $1,25 · 10^{6}$.'],
      ['$7,05 · 10^{-2}$ (para $0,0705$)', 0, 'Mantissa entre 1 e 10 e expoente negativo para um número pequeno: correto.'],
      ['$3 · 10^{4}$ (para $0,0003$)', 2, 'O número é pequeno, então o expoente é negativo: $3 · 10^{-4}$.'],
      ['$0,9 · 10^{-3}$ (para $0,0009$)', 1, 'A mantissa é menor que 1: o certo é $9 · 10^{-4}$.'],
      ['$1,0 · 10^{8}$ (para $100 000 000$)', 0, 'A mantissa $1,0$ está dentro do intervalo $[1, 10)$: correto.'],
      ['$4,5 · 10^{-9}$ (para $4 500 000 000$)', 2, 'Número grande pede expoente positivo: $4,5 · 10^{9}$.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Notação científica: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas, da conversão simples à ordem de grandeza. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: converter, operar e comparar números gigantes e minúsculos.',
  problems: [
    { tag: 'Conversão', q: 'Escreva $150 000 000$ em notação científica. Qual é o <strong>expoente</strong> $n$ de $1,5 · 10^{n}$?', a: 8, ph: 'n', hint: 'Conte quantas casas a vírgula anda para a esquerda até sobrar “1,5”.', sol: '<p>$150 000 000 = 1,5 · 10^{8}$: a vírgula andou 8 casas. <strong>n = 8</strong>.</p>' },
    { tag: 'Número pequeno', q: 'Em $0,000 7 = 7 · 10^{n}$, qual é o valor de $n$ (com sinal)?', a: -4, ph: 'n', hint: 'A vírgula anda 4 casas para a <strong>direita</strong>: expoente negativo.', sol: '<p>Para chegar em 7, a vírgula andou 4 casas para a direita: $7 · 10^{-4}$. <strong>n = −4</strong>.</p>' },
    { tag: 'Prefixos', q: '$250 "nm" = a · 10^{-7}$ m. Quanto vale a mantissa $a$?', a: 2.5, ph: 'a', hint: '$250 · 10^{-9} = 2,5 · 10^{2} · 10^{-9}$.', sol: '<p>$250 · 10^{-9} = 2,5 · 10^{2} · 10^{-9} = 2,5 · 10^{-7}$. <strong>a = 2,5</strong>.</p>' },
    { tag: 'Soma', q: '$3,5 · 10^{4} + 1,5 · 10^{4} = x · 10^{4}$. Qual é $x$?', a: 5, ph: 'x', hint: 'Mesmo expoente: some só as mantissas.', sol: '<p>$(3,5 + 1,5) · 10^{4} = 5 · 10^{4}$. <strong>x = 5</strong>.</p>' },
    { tag: 'Produto', q: '$(6 · 10^{5}) · (5 · 10^{3}) = 3 · 10^{n}$. Qual o valor de $n$?', a: 9, ph: 'n', hint: '$6 · 5 = 30 = 3 · 10^{1}$; depois some os expoentes.', sol: '<p>$30 · 10^{8} = 3 · 10^{1} · 10^{8} = 3 · 10^{9}$. <strong>n = 9</strong>.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Notação Científica', accent: 'primary', icon: 'numbers',
  aulas: [['Aula 1', 'Escrever e converter números', 'aula-1-escrever-numeros.html'], ['Aulas 2–3', 'Operações e comparações', 'aula-2-operacoes-e-comparacoes.html']],
  enem: 'Notação científica no estilo ENEM', cria: 'Está em notação científica?', pratica: 'Notação científica: trilha de desafios'
}, pages };
