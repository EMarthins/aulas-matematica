// Unidade 9 — Análise combinatória (capítulo 9)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/09-analise-combinatoria/';
const out = [];

// ====================== AULA 1: princípios, arranjo, permutação, combinação ======================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 9 · Aula 1', h1: 'Contagem: <span style="color:var(--primary);">princípio multiplicativo</span> e fórmulas',
  sub: 'Etapas independentes se multiplicam; casos que não se misturam se somam. Fatorial, arranjo, permutação e combinação, e a pergunta de ouro: a ordem importa?',
  badges: [['3 questões em 60'], ['n! · A(n,k) · C(n,k)', 'growth'], ['Comece pelo mais restrito', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Contar sem listar: três ideias bastam.', [
  ['Multiplicar ou somar?', 'etapas “e” × casos “ou”', 'scale'],
  ['Fatorial', 'n! e 0! = 1', 'chart'],
  ['Regra de ouro', 'comece pela etapa mais restrita (ENA 2025 Q2)', 'bulb'],
  ['Arranjo, permutação, combinação', 'a ordem importa?', 'link'],
  ['Senhas sem repetição vizinha', 'ENA 2026 Q12', 'lock']
]));
a.push(objetivosSlide([
  'Distinguir o princípio <strong>multiplicativo</strong> do <strong>aditivo</strong>.',
  'Calcular <strong>fatoriais</strong>, <strong>arranjos</strong>, <strong>permutações</strong> e <strong>combinações</strong>.',
  'Aplicar a <strong>regra de ouro</strong> (etapa mais restrita primeiro) em números com algarismos distintos.',
  'Contar <strong>senhas</strong> com restrição entre dígitos vizinhos.'
], 'Em prova', 'Pontos “baratos” se você domina o multiplicativo. Pergunte sempre: <strong>trocar a ordem gera um resultado diferente?</strong>', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Camisas e calças', `
          ${lede('Marina tem <strong>4 camisas</strong> e <strong>3 calças</strong>. Quantos <strong>looks</strong> diferentes (uma camisa e uma calça) ela pode montar?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Número de looks:', ['7', '12', '24', '3'], 1, 'Para cada camisa (4 escolhas) há 3 calças: $4 × 3 = 12$. As etapas são independentes e ligadas por “e” → <strong>multiplica-se</strong>. Se fosse “uma camisa <em>ou</em> uma calça” (casos que não se misturam), somaríamos: 7.')}
            ${W.box('Monte os looks', W.row(W.nm('k1-c', 'camisas', 4, 1, 'min="1" max="6"'), W.nm('k1-p', 'calças', 3, 1, 'min="1" max="6"')) + '<div id="k1-r" style="margin-top:8px;font-size:.85rem;line-height:1.6;max-height:7em;overflow:auto;"></div>' + W.hint('k1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · princípios', 'Multiplicativo × aditivo e o fatorial', `
          <div class="grid2">
            ${card('<strong>Multiplicativo (“e”)</strong><p style="font-size:.92rem;margin-top:8px;">Tarefa em <strong>etapas independentes</strong>: multiplique as opções de cada etapa. Ex.: PIN de 3 dígitos: $10 · 10 · 10 = 1000$.</p>', 'growth')}
            ${card('<strong>Aditivo (“ou”)</strong><p style="font-size:.92rem;margin-top:8px;">Casos que <strong>não se misturam</strong>: some. Ex.: ir de ônibus (3 linhas) <em>ou</em> de metrô (2 linhas): $3 + 2 = 5$.</p>', 'decay')}
          </div>
          <div class="grid2" style="margin-top:10px;">
            ${F('n! = n(n − 1)(n − 2)⋯1   0! = 1', true)}
            ${W.box('Fatorial', W.rg('k2-n', 'n', 0, 12, 1, 5) + W.txt('k2-r', 'n! = ') + W.hint('k2-h'))}
          </div>`, { cls: '' }));

a.push(sl('Regra de ouro', 'Comece pela etapa mais restrita', `
          ${lede('Número <strong>ímpar</strong>? Escolha primeiro o algarismo das unidades. O primeiro dígito não pode ser 0? Trate-o cedo. Depois conte as demais, descontando o que já foi usado.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Números com algarismos distintos', W.row(W.nm('k3-k', 'nº de algarismos (2 a 5)', 4, 1, 'min="2" max="5"'), W.sel('k3-t', 'Tipo', ['quaisquer', 'ímpares', 'pares'], 1)) + W.txt('k3-r', 'Quantidade (contagem direta): ') + W.txt('k3-f', 'Pelos espaços: ') + W.hint('k3-h'))}
            ${callout('ENA 2025 Q2', 'Ímpares de 4 algarismos distintos: unidades $5$ opções (1, 3, 5, 7, 9); milhar $8$ (≠ 0 e ≠ unidade); centena $8$; dezena $7$. Total $5 · 8 · 8 · 7 = 2240$.', 'success')}
          </div>`, { cls: '' }));

a.push(ja('ENA 2025 · Q2', 'Ímpares de quatro algarismos distintos',
  'Quantos são os números inteiros positivos <strong>ímpares</strong> de quatro algarismos <strong>distintos</strong>?',
  ['1960', '2240', '2520', '2800', '4536'], 1,
  'Unidades: $1, 3, 5, 7, 9$ → 5. Milhar: não pode ser 0 nem o das unidades → 8. Centena: sobram $10 − 2 = 8$. Dezena: $10 − 3 = 7$. Total $5 · 8 · 8 · 7 = 2240$. <strong>Alternativa B.</strong> (Se começasse pelo milhar, teria de separar o caso “unidade já usada”.)'));

a.push(sl('Teoria · fórmulas', 'Permutação, arranjo e combinação', `
          <div class="grid2">
            <div>
              ${F('P_n = n!   A_{n,k} = {n!|(n − k)!}   C_{n,k} = {n!|k!(n − k)!}', true)}
              ${tbl(['Pergunta de ouro', 'Resposta'], [['Trocar a ordem gera outro resultado?', ''], ['Senha, fila, pódio, número', '<strong>sim</strong> → arranjo / multiplicativo'], ['Comissão, time, subconjunto, mão de cartas', '<strong>não</strong> → combinação']])}
              ${F('C_{n,k} = C_{n,n−k}   C_{n,0} = 1   C_{n,1} = n')}
            </div>
            ${W.box('P, A e C', W.row(W.nm('k4-n', 'n', 8, 1, 'min="0" max="15"'), W.nm('k4-k', 'k', 3, 1, 'min="0" max="15"')) + W.txt('k4-p', 'Pₙ = ') + W.txt('k4-a', 'A(n, k) = ') + W.txt('k4-c', 'C(n, k) = ') + W.hint('k4-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Treino 9.3', 'Comissão ou diretoria?', 'De quantas formas se escolhe uma comissão de 3 entre 8 pessoas? E presidente, vice e secretário?', [
  ['Comissão (ordem não importa)', '$C(8, 3) = {8·7·6|3!} = 56$'],
  ['Cargos distintos (ordem importa)', '$8 · 7 · 6 = 336$ (ou $A(8, 3)$)'],
  ['Relação', '$A(8,3) = C(8,3) · 3!$ → $56 · 6 = 336$']
], 'Com cargos há $3! = 6$ vezes mais possibilidades, porque cada trio pode ser ordenado de 6 modos.', 'primary'));

a.push(sl('Padrão que cai', 'Senhas sem dígitos iguais consecutivos', `
          ${lede('Senha de $n$ dígitos (0 a 9), <strong>repetição permitida</strong>, exceto dois dígitos <strong>vizinhos</strong> iguais: o 1º dígito é livre (10 opções) e cada um dos seguintes tem <strong>9</strong> opções (qualquer um exceto o anterior).')}
          ${F('10 · 9^{n−1}', true)}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Conte as senhas', W.nm('k5-n', 'nº de dígitos n', 6, 1, 'min="1" max="12"') + W.txt('k5-r', '10 · 9ⁿ⁻¹ = ') + W.txt('k5-t', 'Total sem restrição 10ⁿ = ') + W.hint('k5-h'))}
            ${callout('Zero à esquerda', 'Em <strong>senha</strong> de dígitos vale: $021413$ é uma senha válida. Em <strong>número</strong>, o primeiro dígito não pode ser 0.', 'success')}
          </div>`, { cls: '' }));

a.push(ja('ENA 2026 · Q12', 'Senha de 6 dígitos sem iguais consecutivos',
  'Uma senha tem 6 dígitos (0 a 9) e <strong>não pode ter dígitos iguais consecutivos</strong> (ex.: 344563 é inválida; 345463 e 021413 são válidas). Quantas senhas são possíveis?',
  ['$10^6$', '$10 · 9^6$', '$9^6$', '$10 · 9^5$', '$10 · 9 · 8^4$'], 3,
  '1º dígito: 10 opções. Cada um dos 5 seguintes: 9 opções (qualquer um exceto o anterior). Total: $10 · 9 · 9 · 9 · 9 · 9 = 10 · 9^5$. <strong>Alternativa D.</strong>'));

a.push(armadilhas('Cuidado', 'Onde se perde ponto em contagem', [
  ['Não começar pelo mais restrito', 'Ao escolher primeiro o milhar, a unidade “gasta” um algarismo que ainda não sabemos. Comece pela condição (ímpar → unidades).'],
  ['Contar o zero à esquerda', 'Em <strong>números</strong>, o primeiro dígito não é 0. Em <strong>senhas</strong> de dígitos, vale.'],
  ['Esquecer que algarismos distintos “gastam” opções', 'No ENA 2025 Q2: 5 · 8 · 8 · 7, e não 5 · 9 · 8 · 7.'],
  ['Ordem importa × não importa', 'Comissão → combinação; presidente/vice → arranjo. Pergunte: “trocar a ordem muda o resultado?”']
]));

a.push(quiz([
  { q: 'Quantos números de 3 algarismos distintos existem?', o: ['720', '648', '900', '504'], a: 1 },
  { q: 'Quantas senhas de 4 letras distintas podem ser formadas com as 26 letras?', o: ['456 976', '358 800', '14 950', '17 576'], a: 1 },
  { q: 'De quantas formas se escolhe uma comissão de 3 entre 8 pessoas?', o: ['24', '56', '336', '512'], a: 1 },
  { q: 'Quantas senhas de 5 dígitos não têm dois dígitos iguais consecutivos?', o: ['100 000', '65 610', '59 049', '30 240'], a: 1 }
]));
a.push(fechamento([
  ['Multiplicar/somar', 'Etapas independentes (“e”) multiplicam; casos exclusivos (“ou”) somam.'],
  ['Ordem importa?', 'Sim: arranjo/multiplicativo. Não: combinação $C(n, k)$.'],
  ['Mais restrito primeiro', 'Ímpar → unidade primeiro; depois desconte o que foi usado.']
], 'Comece pela etapa mais restrita e pergunte se a ordem importa.'));

out.push({ out: DIR + 'aula-1-principios-arranjo-permutacao-combinacao.html', html: K.deck({
  title: 'Contagem: princípio multiplicativo e fórmulas — ENA · PROFMAT', brand: 'Análise Combinatória', key: 'c9a1', meta: 'Capítulo 9 · Aula 1 · Princípios e fórmulas', slides: a,
  extra: WJS + BIND + String.raw`
  function C(n, k){ if(k < 0 || k > n) return 0; var r = 1; for(var i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); }
  function A(n, k){ if(k < 0 || k > n) return 0; var r = 1; for(var i = 0; i < k; i++) r *= (n - i); return r; }
  function fat(n){ var r = 1; for(var i = 2; i <= n; i++) r *= i; return r; }
  bind(['k1-c', 'k1-p'], function(){ var c = Math.round(+$('k1-c').value), p = Math.round(+$('k1-p').value); if(c < 1 || p < 1) return; var L = []; for(var i = 1; i <= c; i++) for(var j = 1; j <= p; j++) L.push('C' + i + '+P' + j); $('k1-r').textContent = L.join('  '); $('k1-h').textContent = c + ' × ' + p + ' = ' + c * p + ' looks (princípio multiplicativo).'; });
  bind(['k2-n'], function(){ var n = +$('k2-n').value; $('k2-nv').textContent = n; $('k2-r').textContent = fat(n).toLocaleString('pt-BR'); $('k2-h').textContent = n === 0 ? '0! = 1 por convenção (há 1 maneira de ordenar “nada”).' : n + '! = ' + Array.apply(null, {length: n}).map(function(_, i){ return n - i; }).join(' · '); });
  bind(['k3-k', 'k3-t'], function(){ var k = Math.round(+$('k3-k').value), t = +$('k3-t').value; if(k < 2 || k > 5) return; var lo = Math.pow(10, k - 1), hi = Math.pow(10, k), cnt = 0;
    for(var n = lo; n < hi; n++){ var s = String(n), ok = true, seen = {}; for(var i = 0; i < s.length; i++){ if(seen[s[i]]){ ok = false; break; } seen[s[i]] = 1; } if(ok && t === 1 && (+s[k - 1]) % 2 === 0) ok = false; if(ok && t === 2 && (+s[k - 1]) % 2 === 1) ok = false; if(ok) cnt++; }
    $('k3-r').textContent = cnt.toLocaleString('pt-BR'); var f, expl, i;
    if(t === 0){ f = 9; expl = '9'; for(i = 1; i < k; i++){ f *= 10 - i; expl += '·' + (10 - i); } }
    else if(t === 1){ f = 40; expl = '5·8'; for(i = 2; i < k; i++){ f *= 10 - i; expl += '·' + (10 - i); } }
    else { var z = 1, e = 32; for(i = 0; i < k - 1; i++) z *= 9 - i; for(i = 0; i < k - 2; i++) e *= 8 - i; f = z + e; expl = 'unidade 0: ' + z + ' + unidades 2,4,6,8: ' + e; }
    $('k3-f').textContent = expl + ' = ' + f.toLocaleString('pt-BR'); $('k3-h').textContent = cnt === f ? '✔ A contagem direta (força bruta) coincide com a conta pelos espaços.' : 'Contagem direta: ' + cnt; });
  bind(['k4-n', 'k4-k'], function(){ var n = Math.round(+$('k4-n').value), k = Math.round(+$('k4-k').value); if(n < 0) return; $('k4-p').textContent = fat(n).toLocaleString('pt-BR'); $('k4-a').textContent = A(n, k).toLocaleString('pt-BR'); $('k4-c').textContent = C(n, k).toLocaleString('pt-BR'); $('k4-h').textContent = k > n ? 'k maior que n: 0 possibilidades.' : 'A(n, k) = C(n, k) · k! → ' + C(n, k) + ' · ' + fat(k) + ' = ' + A(n, k) + '.'; });
  bind(['k5-n'], function(){ var n = Math.round(+$('k5-n').value); if(n < 1) return; $('k5-r').textContent = (10 * Math.pow(9, n - 1)).toLocaleString('pt-BR'); $('k5-t').textContent = Math.pow(10, n).toLocaleString('pt-BR'); $('k5-h').textContent = 'Fração válida: ' + nf(Math.pow(0.9, n - 1) * 100, 2) + '% das senhas possíveis.'; });`
}) });

// ====================== AULA 2: anagramas, circular, complementar, binômio ======================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 9 · Aula 2', h1: 'Anagramas, mesa redonda e <span style="color:var(--growth);">outros padrões</span>',
  sub: 'Permutação com repetição, blocos e extremidades, permutação circular, o truque do complementar (“pelo menos um”), casa dos pombos, soluções inteiras e o binômio de Newton.',
  badges: [['ENA 2025 Q11'], ['n!/(a!b!⋯)', 'growth'], ['(n − 1)! na mesa', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Os padrões que mais se repetem em provas de contagem.', [
  ['Anagramas com repetição', 'n!/(a!b!c!⋯) (ENA 2025 Q11)', 'book'],
  ['Letras juntas e extremidades', 'trate o bloco como uma letra; fixe e permute o resto', 'link'],
  ['Complementar', '“pelo menos um” = total − nenhum', 'scale'],
  ['Mesa redonda', 'permutação circular (n − 1)!', 'people'],
  ['Casa dos pombos e soluções inteiras', 'C(n + k − 1, k − 1)', 'target'],
  ['Binômio de Newton', 'termo geral e soma dos coeficientes', 'chart']
]));
b.push(objetivosSlide([
  'Contar <strong>anagramas</strong> de palavras com letras repetidas, com blocos e com restrições de posição.',
  'Usar o <strong>complementar</strong> para problemas de “pelo menos um”.',
  'Resolver <strong>permutação circular</strong> e a <strong>casa dos pombos</strong>.',
  'Aplicar o <strong>binômio de Newton</strong> e contar soluções inteiras não negativas.'
], 'Em prova', 'Em anagramas, o erro típico é esquecer de dividir pelas repetições — ou contar o mesmo caso duas vezes.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Quantos anagramas tem CASA?', `
          ${lede('Um <strong>anagrama</strong> é qualquer rearranjo das letras (com ou sem sentido). CASA tem 4 letras, mas a letra <strong>A aparece duas vezes</strong>.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Quantos anagramas tem a palavra CASA?', ['24', '12', '6', '4'], 1, 'Se as 4 letras fossem distintas: $4! = 24$. Como o A repete 2 vezes, trocar os dois A’s não gera anagrama novo: dividimos por $2!$ → ${4!|2!} = 12$.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Cada letra repetida $m$ vezes divide o total por $m!$: ${n!|a!·b!·c!⋯}$.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · anagramas', 'Permutação com repetição', `
          ${F('{n!|a!·b!·c!⋯}', true)}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Contador de anagramas', '<div><label>Palavra (até 14 letras)</label><input type="text" id="m1-w" value="DIVISIBILIDADE" maxlength="14" style="font:inherit;width:100%;padding:.4em .6em;border-radius:10px;border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);text-transform:uppercase"></div>' + W.txt('m1-f', 'Letras: ') + W.txt('m1-n', 'Anagramas: ') + W.txt('m1-p', 'Começam com a 1ª letra: ') + W.hint('m1-h'))}
            ${callout('Truques', '<strong>Letras juntas</strong>: trate o bloco como uma letra. <strong>Nas extremidades</strong> / começando com: fixe e permute o resto. Ex.: anagramas de CASA que começam com A: fixa A, sobram C, S, A: $3! = 6$.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2025 · Q11', 'Anagramas de DIVISIBILIDADE',
  'Quantos são os anagramas da palavra DIVISIBILIDADE?',
  ['${14!|3!·5!}$', '${14!|3! + 5!}$', '${14!|5!}$', '${14!|3!}$', '$14!$'], 0,
  '14 letras: D (3 vezes), I (5 vezes) e V, S, B, L, A, E (1 vez cada). Divide-se por $3!$ e por $5!$ pelas repetições: ${14!|3!·5!}$. <strong>Alternativa A.</strong> (Dividir pela <em>soma</em> $3! + 5!$ seria erro.)'));

b.push(exemplo('Treino 9.1', 'Anagramas de MATEMATICA', 'Quantos anagramas tem a palavra MATEMATICA?', [
  ['Conte as letras', 'M, A, T, E, M, A, T, I, C, A → 10 letras'],
  ['Repetições', 'M aparece 2 vezes; A, 3 vezes; T, 2 vezes'],
  ['Divida', '${10!|2!·3!·2!} = {3 628 800|24} = 151 200$']
], 'A palavra tem <strong>151 200</strong> anagramas.', 'growth'));

b.push(sl('Complementar', '“Pelo menos um” = total − nenhum', `
          ${lede('Contar “pelo menos um” diretamente exige somar muitos casos (1, 2, 3, … ocorrências). O <strong>complementar</strong> é bem mais curto: tudo menos o caso em que <strong>nenhum</strong> aparece.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Senha com pelo menos um dígito d', W.row(W.nm('m2-n', 'nº de dígitos', 3, 1, 'min="1" max="9"')) + W.txt('m2-t', 'Total 10ⁿ = ') + W.txt('m2-z', 'Sem o dígito 9ⁿ = ') + W.out('m2-r', '1.3rem') + W.hint('m2-h'))}
            ${callout('Exemplo', 'Senhas de 3 dígitos com <strong>pelo menos um 7</strong>: total $10^3 = 1000$; sem 7: $9^3 = 729$; logo $1000 − 729 = 271$.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(sl('Permutação circular', 'Mesa redonda: fixe uma pessoa', `
          ${lede('Em uma roda, só importa <strong>quem está ao lado de quem</strong>: girar todos não gera arrumação nova. Fixe uma pessoa e permute as outras: $(n − 1)!$.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Mesa com n pessoas', W.rg('m3-n', 'n', 3, 10, 1, 5) + W.txt('m3-r', 'Arrumações: (n − 1)! = ') + W.txt('m3-j', 'Com 2 pessoas específicas juntas: ') + W.hint('m3-h'))}
            ${callout('Treino 9.5', '5 pessoas: $4! = 24$. Duas sempre juntas: bloco + 3 pessoas = 4 elementos → $3! · 2 = 12$ (o 2 é a ordem das duas dentro do bloco).', 'success')}
          </div>`, { cls: 'growth' }));

b.push(sl('Outros padrões', 'Casa dos pombos, soluções inteiras e binômio', `
          <div class="grid2">
            <div>
              ${card('<strong>Casa dos pombos</strong><p style="font-size:.9rem;margin-top:8px;">Com $n + 1$ objetos em $n$ caixas, <strong>alguma caixa</strong> tem pelo menos 2.</p>', 'decay')}
              ${F('x_1 + ⋯ + x_k = n\\ (x_i ≥ 0)   ⇒   C(n + k − 1,\\ k − 1)')}
              ${F('(x + y)^n = ∑ C(n, k) x^{n−k} y^k   T_{k+1} = C(n, k) x^{n−k} y^k')}
              ${callout('Soma dos coeficientes', 'Faça $x = y = 1$: a soma é $2^n$. Em $(2x + 1)^4$: $(2 + 1)^4 = 81$.', 'success')}
            </div>
            ${W.box('Soluções inteiras e linha de Pascal', W.row(W.nm('m4-n', 'n (soma)', 5, 1, 'min="0" max="30"'), W.nm('m4-k', 'k (variáveis)', 3, 1, 'min="1" max="10"')) + W.txt('m4-r', 'Soluções: ') + W.txt('m4-l', 'Linha n de Pascal (coeficientes de (x + y)ⁿ): ') + W.hint('m4-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Treino 9.2', 'Números de 3 algarismos distintos: todos e pares', 'Quantos números de 3 algarismos distintos existem? E quantos são pares?', [
  ['Todos', 'Centena: 9 (≠ 0) · dezena: 9 · unidade: 8 → $9 · 9 · 8 = 648$'],
  ['Pares: unidade 0', 'Centena 9 · dezena 8 → $9 · 8 = 72$'],
  ['Pares: unidade 2, 4, 6 ou 8', '4 opções · centena 8 (≠ 0 e ≠ unidade) · dezena 8 → $4 · 8 · 8 = 256$'],
  ['Total de pares', '$72 + 256 = 328$']
], 'Existem <strong>648</strong> números e <strong>328</strong> deles são pares. (Separamos o caso do 0 porque ele não pode abrir o número.)', 'growth'));

b.push(armadilhas('Cuidado', 'Onde se perde ponto em anagramas e padrões', [
  ['Esquecer as repetições', 'Em DIVISIBILIDADE divide-se por $3!$ e por $5!$ — e <strong>multiplica-se</strong> no denominador, não se soma.'],
  ['Contar duas vezes o mesmo caso', 'O “ou” exige descontar a interseção (inclusão–exclusão). O complementar evita isso.'],
  ['Mesa redonda com $n!$', 'Em roda, $(n − 1)!$. Girar a mesa não cria arrumação nova.'],
  ['Fixar o último dígito e esquecer o gasto', 'Ao fixar a unidade você já “gastou” um algarismo: ajuste as opções das demais posições.']
]));

b.push(quiz([
  { q: 'Quantos anagramas tem a palavra CASA?', o: ['24', '12', '6', '4'], a: 1 },
  { q: 'De quantas maneiras 5 pessoas podem sentar-se em uma mesa redonda?', o: ['120', '60', '24', '12'], a: 2 },
  { q: 'Quantos termos tem o desenvolvimento de $(x + y)^7$?', o: ['7', '8', '14', '128'], a: 1 },
  { q: 'A soma dos coeficientes de $(2x + 1)^4$ é:', o: ['16', '27', '81', '256'], a: 2 }
]));
b.push(fechamento([
  ['Anagramas', '$n!/(a!b!c!⋯)$; bloco para “juntas”; fixe para “começando com”.'],
  ['Complementar', '“Pelo menos um” = total − nenhum. Mesa redonda: $(n − 1)!$.'],
  ['Binômio', '$T_{k+1} = C(n,k)x^{n−k}y^k$; soma dos coeficientes: $2^n$ (faça $x = y = 1$).']
], 'Em contagem, reconheça o padrão antes de calcular.'));

out.push({ out: DIR + 'aula-2-anagramas-circular-complementar-binomio.html', html: K.deck({
  title: 'Anagramas, mesa redonda e outros padrões — ENA · PROFMAT', brand: 'Análise Combinatória', key: 'c9a2', meta: 'Capítulo 9 · Aula 2 · Anagramas e padrões', slides: b,
  extra: WJS + BIND + String.raw`
  function fat(n){ var r = 1; for(var i = 2; i <= n; i++) r *= i; return r; }
  function C(n, k){ if(k < 0 || k > n) return 0; var r = 1; for(var i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); }
  bind(['m1-w'], function(){ var w = ($('m1-w').value || '').toUpperCase().replace(/[^A-ZÇ]/g, ''); if(!w){ $('m1-f').textContent = '—'; return; } var c = {}; w.split('').forEach(function(x){ c[x] = (c[x] || 0) + 1; }); var den = 1, parts = []; for(var k in c){ den *= fat(c[k]); if(c[k] > 1) parts.push(c[k] + '!'); } var n = w.length, tot = fat(n) / den; $('m1-f').textContent = Object.keys(c).map(function(k){ return k + '×' + c[k]; }).join(' '); $('m1-n').textContent = n + '!' + (parts.length ? '/(' + parts.join('·') + ')' : '') + ' = ' + Math.round(tot).toLocaleString('pt-BR'); var c0 = w[0], d2 = den / c[c0]; $('m1-p').textContent = Math.round(fat(n - 1) / d2).toLocaleString('pt-BR') + ' (fixa ' + c0 + ')'; $('m1-h').textContent = n > 14 ? 'Use no máximo 14 letras.' : 'Para DIVISIBILIDADE: 14!/(3!·5!) = 14!/720 = ' + Math.round(fat(14) / 720).toLocaleString('pt-BR') + '.'; });
  bind(['m2-n'], function(){ var n = Math.round(+$('m2-n').value); if(n < 1) return; $('m2-t').textContent = Math.pow(10, n).toLocaleString('pt-BR'); $('m2-z').textContent = Math.pow(9, n).toLocaleString('pt-BR'); $('m2-r').textContent = (Math.pow(10, n) - Math.pow(9, n)).toLocaleString('pt-BR') + ' senhas'; $('m2-h').textContent = '10^' + n + ' − 9^' + n + '. Para n = 3: 1000 − 729 = 271.'; });
  bind(['m3-n'], function(){ var n = +$('m3-n').value; $('m3-nv').textContent = n; $('m3-r').textContent = fat(n - 1).toLocaleString('pt-BR'); $('m3-j').textContent = (fat(n - 2) * 2).toLocaleString('pt-BR') + '  (bloco + ' + (n - 2) + ' pessoas = ' + (n - 1) + ' elementos: (' + (n - 2) + ')!·2)'; $('m3-h').textContent = 'Em fila seriam ' + fat(n).toLocaleString('pt-BR') + ' (n!); em roda, ' + n + ' vezes menos.'; });
  bind(['m4-n', 'm4-k'], function(){ var n = Math.round(+$('m4-n').value), k = Math.round(+$('m4-k').value); if(n < 0 || k < 1) return; $('m4-r').textContent = C(n + k - 1, k - 1).toLocaleString('pt-BR') + '  = C(' + (n + k - 1) + ', ' + (k - 1) + ')'; var L = []; for(var i = 0; i <= Math.min(n, 14); i++) L.push(C(n, i)); $('m4-l').textContent = L.join(' · ') + (n > 14 ? ' …' : ''); $('m4-h').textContent = 'Soma da linha: 2^' + n + ' = ' + Math.pow(2, n).toLocaleString('pt-BR') + '.'; });`
}) });

module.exports = out;
