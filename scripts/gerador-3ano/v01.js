// Unidade v01 — Equação exponencial (aulas 1 a 3 da 3ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'equacao-exponencial', BASE = 'aulas/3-ano/1-tri/' + DIR + '/';
const KEY = 'm3v01', BRAND = 'Equação Exponencial', CAP = 'Aulas 1 a 3';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
  function sg(v){ return (v < 0 ? '− ' : '+ ') + pt(Math.abs(v)); }
`;

// ===================== AULA 1: mesma base =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aula 1', h1: 'Equação exponencial: <span style="color:var(--primary);">a incógnita no expoente</span>',
  sub: 'Um boato dobra de alcance todo dia. Em quantos dias ele chega a 384 pessoas? Para responder, a incógnita precisa sair do expoente.',
  badges: [['aˣ = aʸ'], ['x = y', 'growth'], ['mesma base', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do boato à mesma base.', [
  ['Crescimento exponencial', 'o boato que dobra todo dia', 'bulb'],
  ['O que é', 'incógnita no expoente', 'target'],
  ['Método', 'reduzir à mesma base e igualar expoentes', 'chart'],
  ['Bases diferentes', 'potências de 2, 3, 5 e frações', 'link'],
  ['Conferência', 'substituir e validar', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer uma <strong>equação exponencial</strong>: a incógnita aparece no <strong>expoente</strong>.',
  'Resolver reduzindo os dois membros a <strong>potências de mesma base</strong> e igualando os expoentes.',
  'Escrever números como potências ($8 = 2^{3}$, ${1|4} = 2^{−2}$) para encontrar a base comum.',
  'Montar e resolver a equação de um <strong>problema de crescimento</strong>.'
], 'Dica', 'Comece sempre procurando a <strong>menor base comum</strong>: 4, 8, 16 e 32 são potências de 2; 9, 27 e 81 são potências de 3.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O boato que dobra todo dia', `
          ${lede('Uma notícia falsa começa com <strong>3 pessoas</strong> e, a cada dia, o número de pessoas que acreditam nela <strong>dobra</strong>: 3, 6, 12, 24… Depois de $n$ dias há $3 · 2^{n}$ pessoas.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Dia', 'Pessoas'], [['0', '3'], ['1', '6'], ['2', '12'], ['3', '24'], ['4', '48']])}
            ${mini('Depois de 3 dias, quantas pessoas acreditam no boato?', ['9', '18', '24', '27'], 2, '$3 · 2^{3} = 3 · 8 = 24$ pessoas. Note que o número de dias aparece no <strong>expoente</strong>: isso é crescimento exponencial.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · equação exponencial', 'Igualar as bases, igualar os expoentes', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Equação exponencial</strong>: a incógnita está no expoente de uma ou mais potências, como $2^{x} = 32$.</li>
                <li>Para $a > 0$ e $a ≠ 1$: <strong>$a^{x} = a^{y} ⇒ x = y$</strong> (a função $a^{x}$ nunca repete valores).</li>
                <li>Método: escreva os dois lados como <strong>potências da mesma base</strong> e iguale os expoentes.</li>
                <li>Propriedades úteis: $(a^{m})^{n} = a^{mn}$, $a^{−n} = {1|a^{n}}$ e $a^{m} · a^{n} = a^{m+n}$.</li>
              </ul>
            </div>
            ${W.box('Resolva a^(px + q) = a^r', W.row(W.nm('e1-a', 'base a', 2, 'any'), W.nm('e1-p', 'p', 2, 'any'), W.nm('e1-q', 'q', 1, 'any'), W.nm('e1-r', 'r', 7, 'any')) + W.txt('e1-e', 'Equação: ') + W.txt('e1-x', 'Solução: ') + W.hint('e1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Bases comuns que aparecem sempre', `
          ${tbl(['Base', 'Potências para decorar'], [['2', '2, 4, 8, 16, 32, 64, 128, 256 (de $2^{1}$ a $2^{8}$)'], ['3', '3, 9, 27, 81, 243 (de $3^{1}$ a $3^{5}$)'], ['5', '5, 25, 125, 625 (de $5^{1}$ a $5^{4}$)'], ['10', '10, 100, 1 000, 10 000…']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Frações', '$({1|2})^{x} = 2^{−x}$: para trocar a base de uma fração por seu inverso, <strong>troque o sinal do expoente</strong>.', 'success')}
            ${callout('Raízes', '$√{x} = x^{1 ÷ 2}$: a raiz também é uma potência (expoente fracionário).', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Base igual de primeira', 'Resolva $2^{x} = 32$.', [
  ['Escreva 32 como potência de 2', '$32 = 2^{5}$.'],
  ['Iguale os expoentes', '$2^{x} = 2^{5}$ ⇒ $x = 5$.'],
  ['Confira', '$2^{5} = 32$ ✓.']
], 'Solução: $x = 5$.'));
a.push(exemplo('Exemplo resolvido', 'Bases diferentes, mesma família', 'Resolva $9^{x} = 27$.', [
  ['Leve tudo à base 3', '$9 = 3^{2}$ e $27 = 3^{3}$.'],
  ['Potência de potência', '$(3^{2})^{x} = 3^{2x}$, logo $3^{2x} = 3^{3}$.'],
  ['Iguale os expoentes', '$2x = 3$ ⇒ $x = {3|2} = 1,5$.']
], 'Solução: $x = {3|2}$. Conferindo: $9^{1,5} = (3^{2})^{1,5} = 3^{3} = 27$ ✓.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Expoentes com a incógnita nos dois lados', 'Resolva $4^{x+1} = 8^{x−1}$.', [
  ['Base 2', '$4 = 2^{2}$ e $8 = 2^{3}$.'],
  ['Distribua', '$2^{2(x+1)} = 2^{3(x−1)}$ ⇒ $2x + 2 = 3x − 3$.'],
  ['Resolva', '$2 + 3 = 3x − 2x$ ⇒ $x = 5$.']
], 'Solução: $x = 5$. Conferindo: $4^{6} = 4\\ 096$ e $8^{4} = 4\\ 096$ ✓.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Fração e expoente negativo', 'Resolva $({1|2})^{x} = 16$.', [
  ['Inverta a base', '$({1|2})^{x} = 2^{−x}$.'],
  ['Escreva 16', '$16 = 2^{4}$.'],
  ['Iguale', '$−x = 4$ ⇒ $x = −4$.']
], 'Solução: $x = −4$. Conferindo: $({1|2})^{−4} = 2^{4} = 16$ ✓.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'O boato do começo', 'Quando o boato chegará a 384 pessoas, se $N(n) = 3 · 2^{n}$?', [
  ['Monte a equação', '$3 · 2^{n} = 384$.'],
  ['Isole a potência', '$2^{n} = 384 ÷ 3 = 128$.'],
  ['Mesma base', '$128 = 2^{7}$ ⇒ $n = 7$.']
], 'Em <strong>7 dias</strong> o boato alcança 384 pessoas ($3 · 128 = 384$ ✓).', 'growth'));

a.push(pratique('Mesma base', 'A solução de $3^{x} = 243$ é:',
  ['3', '4', '5', '6', '81'], 2,
  '$243 = 3^{5}$, logo $x = 5$. <strong>Alternativa C.</strong>'));
a.push(pratique('Raiz da família', 'A solução de $25^{x} = 125$ é:',
  ['0,6', '1', '1,5', '2', '5'], 2,
  '$25 = 5^{2}$ e $125 = 5^{3}$: $5^{2x} = 5^{3}$ ⇒ $2x = 3$ ⇒ $x = 1,5$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Quando o conteúdo viraliza', 'Um vídeo é visto por 5 pessoas no primeiro minuto e, a cada minuto, o número total de visualizações <strong>triplica</strong>: após $t$ minutos, $V = 5 · 3^{t}$. Em quantos minutos o vídeo atinge 1 215 visualizações?',
  ['3', '4', '5', '6', '7'], 2,
  '$5 · 3^{t} = 1\\ 215$ ⇒ $3^{t} = 243 = 3^{5}$ ⇒ $t = 5$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a equação exponencial engana', [
  ['Multiplicar as bases', 'Não é $2^{x} = 8 ⇒ x = 4$: a base fica e só os <strong>expoentes</strong> se igualam ($x = 3$).'],
  ['Distribuir errado', 'Em $4^{x+1} = 2^{2x+2}$, o expoente $x+1$ é multiplicado por 2 <strong>inteiro</strong>, não só o $x$.'],
  ['Expoente negativo', '$({1|2})^{x} = 2^{−x}$ — o sinal do expoente muda ao inverter a base.'],
  ['Bases diferentes sem família', 'Se não houver base comum (como $2^{x} = 5$), é preciso logaritmo — assunto das próximas aulas.']
]));
a.push(quiz([
  { q: 'Qual destas é uma equação exponencial?', o: ['$x^{2} = 9$', '$2^{x} = 9$', '$2x = 9$', '$√{x} = 9$'], a: 1 },
  { q: 'A solução de $2^{x} = 64$ é:', o: ['5', '6', '7', '32'], a: 1 },
  { q: 'Se $5^{x} = 5^{3}$, então:', o: ['$x = 3$', '$x = 15$', '$x = 125$', '$x = 5$'], a: 0 },
  { q: 'Escrevendo $9^{x} = 3^{2x}$ usamos a propriedade:', o: ['potência de potência', 'produto de potências', 'quociente de potências', 'raiz quadrada'], a: 0 }
]));
a.push(fechamento([
  ['Definição', 'Incógnita no expoente: $2^{x} = 32$.'],
  ['Método', 'Mesma base ⇒ iguale os expoentes.'],
  ['Conferência', 'Substitua $x$ e verifique os dois lados.']
], 'Primeiro a base comum; depois, uma equação comum entre os expoentes.'));

pages.push({ out: BASE + 'aula-1-mesma-base.html', html: K.deck({
  title: 'Equação exponencial: mesma base — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aula 1 · Equação exponencial', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['e1-a', 'e1-p', 'e1-q', 'e1-r'], function(){ var a = +$('e1-a').value, p = +$('e1-p').value, q = +$('e1-q').value, r = +$('e1-r').value;
    if(![a, p, q, r].every(isFinite) || a <= 0 || a === 1 || p === 0){ $('e1-e').textContent = (a <= 0 || a === 1) ? 'base inválida: a > 0 e a ≠ 1' : 'p = 0: não há incógnita'; $('e1-x').textContent = '—'; $('e1-h').textContent = ''; return; }
    var x = (r - q) / p;
    $('e1-e').textContent = pt(a) + '^(' + pt(p) + 'x ' + sg(q) + ') = ' + pt(a) + '^' + pt(r);
    $('e1-x').textContent = 'x = ' + pt(x);
    $('e1-h').textContent = 'Mesma base: igualamos os expoentes, ' + pt(p) + 'x ' + sg(q) + ' = ' + pt(r) + '. Conferência: ' + pt(a) + '^' + pt(r) + ' = ' + pt(Math.pow(a, r), 4) + ' nos dois lados.'; });`
}) });

// ===================== AULA 2: substituição e aplicações =====================
const b = [];
b.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 2 e 3', h1: 'Equações exponenciais com <span style="color:var(--growth);">substituição</span>',
  sub: 'Nem todo lado vira uma só potência. Quando aparecem aˣ e a²ˣ juntos, uma troca de variável y = aˣ transforma tudo em uma equação do 2º grau.',
  badges: [['y = aˣ'], ['y² + py + q = 0', 'growth'], ['y > 0', 'decay']], color: 'growth'
}));
b.push(roteiroSlide('Quando só igualar não basta.', [
  ['O problema', 'termos com $4^{x}$ e $2^{x}$ juntos', 'bulb'],
  ['A troca', '$y = 2^{x}$', 'chart'],
  ['O 2º grau', 'soma e produto ou Bhaskara', 'target'],
  ['Voltar ao x', 'só vale $y > 0$', 'link'],
  ['Aplicações', 'usuários, Pix e juros', 'scale']
]));
b.push(objetivosSlide([
  'Reconhecer quando é preciso <strong>substituir</strong> $y = a^{x}$.',
  'Transformar a equação em uma equação do <strong>2º grau</strong> em $y$ e resolvê-la.',
  'Usar a condição <strong>$y > 0$</strong> para descartar raízes e <strong>voltar</strong> ao valor de $x$.',
  'Resolver equações com <strong>soma de potências</strong> pondo $a^{x}$ em evidência.'
], 'Dica', 'Depois de achar $y$, resolva $a^{x} = y$ e <strong>confira no enunciado</strong>: um $y$ negativo ou nulo não tem $x$ real.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'Por que 4ˣ vira y²', `
          ${lede('Em $4^{x} − 6 · 2^{x} + 8 = 0$ não dá para igualar as bases direto. Mas $4^{x} = (2^{2})^{x} = (2^{x})^{2}$. Se chamarmos $y = 2^{x}$, o termo $4^{x}$ vira $y^{2}$.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Com $y = 3^{x}$, o termo $9^{x}$ vira:', ['$y$', '$2y$', '$y^{2}$', '$y^{3}$'], 2, '$9^{x} = (3^{2})^{x} = (3^{x})^{2} = y^{2}$.')}
            ${card('<strong>A ideia</strong><p style="font-size:.92rem;margin-top:8px;">Uma equação em $x$ vira uma equação do 2º grau em $y$. Resolva em $y$ e <strong>depois</strong> volte para o $x$.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Teoria · substituição', 'y = aˣ e a condição y > 0', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Para $a^{2x} + p · a^{x} + q = 0$, faça <strong>$y = a^{x}$</strong>; fica $y^{2} + py + q = 0$.</li>
                <li>Resolva em $y$ por soma e produto ou por Bhaskara.</li>
                <li><strong>Condição:</strong> $a^{x} > 0$ para todo $x$. Raízes $y ≤ 0$ <strong>não servem</strong>.</li>
                <li>Para cada $y > 0$ resolva $a^{x} = y$: mesma base, ou logaritmo (se não houver).</li>
                <li>Com soma de potências, como $2^{x+1} + 2^{x}$, escreva $2^{x+1} = 2 · 2^{x}$ e use $y$ ou fatore.</li>
              </ul>
            </div>
            ${W.box('Resolva a^(2x) + p·a^x + q = 0', W.row(W.nm('e2-a', 'base a', 2, 'any'), W.nm('e2-p', 'p', -6, 'any'), W.nm('e2-q', 'q', 8, 'any')) + W.txt('e2-e', 'Em y: ') + W.txt('e2-y', 'Raízes y: ') + W.txt('e2-x', 'Soluções x: ') + W.hint('e2-h'))}
          </div>`, { cls: 'growth' }));

b.push(exemplo('Exemplo resolvido', 'Duas soluções', 'Resolva $4^{x} − 6 · 2^{x} + 8 = 0$.', [
  ['Substitua', '$y = 2^{x}$ ⇒ $y^{2} − 6y + 8 = 0$.'],
  ['Soma e produto', '$S = 6$ e $P = 8$ ⇒ $y = 2$ ou $y = 4$ (ambos positivos).'],
  ['Volte a x', '$2^{x} = 2$ ⇒ $x = 1$; $2^{x} = 4$ ⇒ $x = 2$.']
], 'Solução: $x = 1$ ou $x = 2$. Conferindo: $4 − 12 + 8 = 0$ ✓ e $16 − 24 + 8 = 0$ ✓.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Base 3', 'Resolva $9^{x} − 4 · 3^{x} + 3 = 0$.', [
  ['Substitua', '$y = 3^{x}$ ⇒ $y^{2} − 4y + 3 = 0$.'],
  ['Raízes em y', '$S = 4$ e $P = 3$ ⇒ $y = 1$ ou $y = 3$.'],
  ['Volte a x', '$3^{x} = 1 = 3^{0}$ ⇒ $x = 0$; $3^{x} = 3$ ⇒ $x = 1$.']
], 'Solução: $x = 0$ ou $x = 1$. Conferindo: $1 − 4 + 3 = 0$ ✓ e $9 − 12 + 3 = 0$ ✓.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Descartando uma raiz', 'Resolva $4^{x} − 2^{x} − 2 = 0$.', [
  ['Substitua', '$y = 2^{x}$ ⇒ $y^{2} − y − 2 = 0$.'],
  ['Raízes em y', '$Δ = 1 + 8 = 9$ ⇒ $y = {1 ± 3|2}$ ⇒ $y = 2$ ou $y = −1$.'],
  ['Condição y > 0', '$y = −1$ <strong>não serve</strong>, pois $2^{x}$ nunca é negativo. Fica $2^{x} = 2$ ⇒ $x = 1$.']
], 'Solução única: $x = 1$. Conferindo: $4 − 2 − 2 = 0$ ✓.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Soma de potências', 'Resolva $2^{x+1} + 2^{x} = 24$.', [
  ['Separe o expoente', '$2^{x+1} = 2^{x} · 2^{1} = 2 · 2^{x}$.'],
  ['Evidência', '$2 · 2^{x} + 2^{x} = 3 · 2^{x} = 24$.'],
  ['Isole e iguale', '$2^{x} = 8 = 2^{3}$ ⇒ $x = 3$.']
], 'Solução: $x = 3$. Conferindo: $2^{4} + 2^{3} = 16 + 8 = 24$ ✓.', 'growth'));
b.push(exemplo('Exemplo resolvido', 'Um aplicativo que triplica', 'O número de usuários de um app é $N(t) = 500 · 3^{t}$, com $t$ em meses. Em quantos meses haverá 40 500 usuários?', [
  ['Monte a equação', '$500 · 3^{t} = 40\\ 500$.'],
  ['Isole a potência', '$3^{t} = 40\\ 500 ÷ 500 = 81$.'],
  ['Mesma base', '$81 = 3^{4}$ ⇒ $t = 4$.']
], 'Em <strong>4 meses</strong> ($500 · 81 = 40\\ 500$ ✓).', 'growth'));

b.push(pratique('Substituindo', 'As soluções de $4^{x} − 5 · 2^{x} + 4 = 0$ são:',
  ['1 e 4', '0 e 2', '1 e 2', '0 e 4', '2 e 4'], 1,
  '$y = 2^{x}$: $y^{2} − 5y + 4 = 0$ ⇒ $y = 1$ ou $y = 4$ ⇒ $x = 0$ ou $x = 2$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(pratique('Soma de potências', 'A solução de $3^{x+1} + 3^{x} = 36$ é:',
  ['1', '2', '3', '4', '9'], 1,
  '$3 · 3^{x} + 3^{x} = 4 · 3^{x} = 36$ ⇒ $3^{x} = 9$ ⇒ $x = 2$. <strong>Alternativa B.</strong>', '', 'growth'));
b.push(estiloEnem('Meia-vida de um medicamento', 'A quantidade de um medicamento no sangue, em mg, é $M(t) = 80 · ({1|2})^{t ÷ 5}$, com $t$ em horas. Em quanto tempo restam 5 mg?',
  ['10 h', '15 h', '20 h', '25 h', '40 h'], 2,
  '$80 · ({1|2})^{t/5} = 5$ ⇒ $({1|2})^{t/5} = {1|16} = ({1|2})^{4}$ ⇒ $t ÷ 5 = 4$ ⇒ $t = 20$ h. <strong>Alternativa C.</strong>'));

b.push(armadilhas('Cuidados', 'Onde a substituição escorrega', [
  ['Parar em y', 'Achar $y$ não é terminar: falta resolver $a^{x} = y$ para chegar em $x$.'],
  ['Aceitar y negativo', '$a^{x} > 0$: raízes $y ≤ 0$ são descartadas.'],
  ['Somar expoentes errado', '$2^{x+1}$ é $2 · 2^{x}$ (e não $2^{x} + 1$).'],
  ['Misturar bases', 'A substituição só funciona se todas as bases forem potências da mesma base ($4 = 2^{2}$).']
]));
b.push(quiz([
  { q: 'Em $4^{x} − 3 · 2^{x} + 2 = 0$, a substituição adequada é:', o: ['$y = 4^{x}$', '$y = 2^{x}$', '$y = x$', '$y = 2x$'], a: 1 },
  { q: 'Se $2^{x} = y$, o termo $4^{x}$ vale:', o: ['$y$', '$2y$', '$y^{2}$', '$y^{4}$'], a: 2 },
  { q: 'A raiz $y = −3$ de uma equação em $y = 2^{x}$:', o: ['gera $x = −3$', 'é descartada', 'gera $x = 8$', 'gera $x = 0$'], a: 1 },
  { q: 'Em $2^{x+2} = 4 · 2^{x}$, a igualdade é:', o: ['falsa', 'verdadeira para todo x', 'verdadeira só para x = 2', 'verdadeira só para x = 0'], a: 1 }
]));
b.push(fechamento([
  ['Troca', '$y = a^{x}$ transforma em 2º grau.'],
  ['Condição', '$y > 0$ — descarte o resto.'],
  ['Retorno', 'Resolva $a^{x} = y$ para cada raiz válida.']
], 'Troque a variável, resolva e volte — sem esquecer de checar o sinal de y.'));

pages.push({ out: BASE + 'aula-2-substituicao-e-aplicacoes.html', html: K.deck({
  title: 'Equação exponencial: substituição e aplicações — Matemática 3ª série', brand: BRAND, key: KEY + 'a2', meta: 'Aulas 2 e 3 · Substituição e aplicações', slides: b,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['e2-a', 'e2-p', 'e2-q'], function(){ var a = +$('e2-a').value, p = +$('e2-p').value, q = +$('e2-q').value;
    if(![a, p, q].every(isFinite) || a <= 0 || a === 1){ $('e2-e').textContent = 'base inválida: a > 0 e a ≠ 1'; $('e2-y').textContent = '—'; $('e2-x').textContent = '—'; $('e2-h').textContent = ''; return; }
    $('e2-e').textContent = 'y² ' + (p === 0 ? '' : (p === 1 ? '+ ' : p === -1 ? '− ' : sg(p)) + 'y ') + sg(q) + ' = 0';
    var d = p * p - 4 * q;
    if(d < 0){ $('e2-y').textContent = 'sem raízes reais (Δ = ' + pt(d) + ')'; $('e2-x').textContent = 'nenhuma'; $('e2-h').textContent = 'Δ < 0: a equação em y não tem solução real, então a exponencial também não tem.'; return; }
    var s = Math.sqrt(d), y1 = (-p - s) / 2, y2 = (-p + s) / 2, ys = d === 0 ? [y1] : [y1, y2], ok = ys.filter(function(v){ return v > 0; });
    $('e2-y').textContent = ys.map(pt).join(' e ');
    $('e2-x').textContent = ok.length ? ok.map(function(v){ return 'x = ' + pt(Math.log(v) / Math.log(a), 3); }).join(' ou ') : 'nenhuma';
    $('e2-h').textContent = ok.length < ys.length ? (ok.length ? 'Raízes y ≤ 0 foram descartadas: a^x é sempre positivo.' : 'Todas as raízes y são ≤ 0: não existe x real.') : 'As raízes y positivas viram x resolvendo a^x = y.'; });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Equação exponencial: <span>da mesma base à substituição</span>',
  lede: 'A incógnita está no expoente. Se as bases se igualam, igualamos os expoentes; se não, trocamos a variável por y = aˣ e voltamos ao x no fim.',
  badges: ['aˣ = aʸ ⇒ x = y', 'y = aˣ', 'y > 0'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Definição', 'Incógnita no expoente', 'chart', 'primary', p('Exemplos: $2^{x} = 32$ e $4^{x} − 6 · 2^{x} + 8 = 0$.') + call('Lembrete', 'A base é positiva e diferente de 1.', 'success')],
    ['Mesma base', 'O método simples', 'target', 'growth', li(['Escreva os dois lados como potências da mesma base.', 'Iguale os expoentes.', 'Resolva a equação resultante.'])],
    ['Frações e raízes', 'Cuidados de base', 'scale', 'decay', p('$({1|2})^{x} = 2^{−x}$ e $√{2} = 2^{1 ÷ 2}$') + call('Exemplo', '$({1|2})^{x} = 16$ ⇒ $x = −4$.', 'success')],
    ['Substituição', 'Quando há aˣ e a²ˣ', 'link', 'success', p('$y = a^{x}$ ⇒ $y^{2} + py + q = 0$') + call('Passo final', 'Volte ao x: resolva $a^{x} = y$.', 'success')],
    ['Soma de potências', 'Evidência', 'up', 'primary', p('$2^{x+1} + 2^{x} = 3 · 2^{x}$') + call('Exemplo', '$3 · 2^{x} = 24$ ⇒ $x = 3$.', 'success')],
    ['Aplicações', 'Crescimento e decaimento', 'check', 'growth', li(['Boato, usuários e juros: $N = N_0 · b^{t}$.', 'Meia-vida: base $1/2$.', 'Monte a equação e isole a potência.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Multiplicar bases em vez de igualar expoentes.', 'Esquecer o fator do expoente ao trocar a base ($4^{x+1}$).', 'Aceitar $y ≤ 0$.', 'Parar em $y$ sem voltar ao $x$.', 'Trocar o sinal do expoente de forma errada ao inverter a base.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Equação exponencial <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: mesma base, crescimento de boato, substituição, meia-vida e soma de potências.',
  final: 'Mesma base, substituição ou evidência: a técnica depende da equação.',
  questions: [
    { badge: 'Estilo ENEM · mesma base', text: 'Considere a equação $25^{x} = 125$.', cmd: 'O valor de $x$ é:', opts: ['0,6', '1', '1,5', '2', '2,5'], a: 2,
      sol: '<p>$5^{2x} = 5^{3}$ ⇒ $2x = 3$ ⇒ $x = 1,5$.</p>' },
    { badge: 'Estilo ENEM · crescimento', text: 'Um boato começa com 3 pessoas e o número de pessoas que acreditam nele dobra a cada dia: $N = 3 · 2^{n}$.', cmd: 'Em quantos dias o boato alcança 768 pessoas?', opts: ['5', '6', '7', '8', '9'], a: 3,
      sol: '<p>$3 · 2^{n} = 768$ ⇒ $2^{n} = 256 = 2^{8}$ ⇒ $n = 8$.</p>' },
    { badge: 'Estilo ENEM · substituição', text: 'Considere a equação $9^{x} − 12 · 3^{x} + 27 = 0$.', cmd: 'A soma de suas soluções reais é:', opts: ['3', '4', '5', '6', '7'], a: 0,
      sol: '<p>$y = 3^{x}$: $y^{2} − 12y + 27 = 0$ ⇒ $y = 3$ ou $y = 9$ ⇒ $x = 1$ ou $x = 2$. Soma: $3$.</p>' },
    { badge: 'Estilo ENEM · meia-vida', text: 'A quantidade de um medicamento no sangue, em mg, é $M(t) = 80 · ({1|2})^{t ÷ 5}$, com $t$ em horas.', cmd: 'Em quantas horas restam 5 mg?', opts: ['5', '10', '15', '20', '25'], a: 3,
      sol: '<p>$({1|2})^{t/5} = {5|80} = {1|16} = ({1|2})^{4}$ ⇒ $t ÷ 5 = 4$ ⇒ $t = 20$ h.</p>' },
    { badge: 'Estilo ENEM · soma de potências', text: 'Uma grandeza satisfaz $2^{x+2} + 2^{x} = 20$.', cmd: 'O valor de $x$ é:', opts: ['1', '2', '3', '4', '5'], a: 1,
      sol: '<p>$4 · 2^{x} + 2^{x} = 5 · 2^{x} = 20$ ⇒ $2^{x} = 4$ ⇒ $x = 2$. Conferindo: $16 + 4 = 20$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Qual é o <span style="color:var(--growth);">método</span>?',
  subtitle: 'Mesma base, substituição ou sem solução? Decida antes de calcular.',
  tpl: cClassificar({
    cats: ['Mesma base', 'Substituição y = aˣ', 'Sem solução real'],
    intro: 'Cada cartão traz uma equação exponencial. Escolha a categoria e clique em <strong>Conferir</strong>.',
    final: 'Olhe para as bases e para o sinal do resultado antes de qualquer conta.',
    itens: [
      ['$3^{x} = 81$', 0, '$81 = 3^{4}$ ⇒ $x = 4$.'],
      ['$4^{x} − 5 · 2^{x} + 4 = 0$', 1, '$y = 2^{x}$: $y^{2} − 5y + 4 = 0$ ⇒ $x = 0$ ou $x = 2$.'],
      ['$2^{x} = −8$', 2, 'Uma potência de base positiva nunca é negativa: sem solução real.'],
      ['$25^{x} = 5^{x+3}$', 0, '$5^{2x} = 5^{x+3}$ ⇒ $2x = x + 3$ ⇒ $x = 3$.'],
      ['$9^{x} − 4 · 3^{x} + 3 = 0$', 1, '$y = 3^{x}$: $y^{2} − 4y + 3 = 0$ ⇒ $x = 0$ ou $x = 1$.'],
      ['$5^{x} + 3 = 0$', 2, '$5^{x} = −3$: impossível, pois $5^{x} > 0$.'],
      ['$({1|2})^{x} = 8$', 0, '$2^{−x} = 2^{3}$ ⇒ $x = −3$.'],
      ['$4^{x} + 2^{x} − 12 = 0$', 1, '$y = 2^{x}$: $y^{2} + y − 12 = 0$ ⇒ $y = 3$ (serve) ou $y = −4$ (descartado).'],
      ['$7^{x} = 0$', 2, 'Potências de base positiva nunca são nulas: sem solução.']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Equação exponencial: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: mesma base, expoente fracionário, equação com x nos dois lados, substituição e boato. Digite o número pedido.',
  final: 'Você percorreu a trilha: base, fração, igualdade de expoentes, y e crescimento.',
  problems: [
    { tag: 'Mesma base', q: 'Qual o valor de $x$ em $2^{x} = 64$?', a: 6, ph: 'x', hint: '64 = 2⁶.', sol: '<p>$2^{x} = 2^{6}$ ⇒ $x = 6$.</p>' },
    { tag: 'Fração no expoente', q: 'Qual o valor de $x$ em $9^{x} = 27$?', a: 1.5, ph: 'x', hint: '9 = 3² e 27 = 3³.', sol: '<p>$3^{2x} = 3^{3}$ ⇒ $x = 1,5$.</p>' },
    { tag: 'x nos dois lados', q: 'Qual o valor de $x$ em $4^{x+1} = 8^{x−1}$?', a: 5, ph: 'x', hint: 'Base 2: 2x + 2 = 3x − 3.', sol: '<p>$x = 5$.</p>' },
    { tag: 'Substituição', q: 'Qual a <strong>maior</strong> solução de $4^{x} − 6 · 2^{x} + 8 = 0$?', a: 2, ph: 'x', hint: 'y = 2ˣ, y² − 6y + 8 = 0.', sol: '<p>$y = 2$ ou $4$ ⇒ $x = 1$ ou $2$. A maior: $2$.</p>' },
    { tag: 'Boato', q: 'Em $N = 3 · 2^{n}$, em quantos dias $N = 384$?', a: 7, ph: 'dias', hint: '2ⁿ = 128.', sol: '<p>$2^{n} = 128 = 2^{7}$ ⇒ $n = 7$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Equação Exponencial', accent: 'primary', icon: 'algebra',
  aulas: [['Aula 1', 'Equação exponencial: mesma base', 'aula-1-mesma-base.html'], ['Aulas 2–3', 'Equação exponencial: substituição e aplicações', 'aula-2-substituicao-e-aplicacoes.html']],
  enem: 'Equação exponencial no estilo ENEM', cria: 'Qual é o método?', pratica: 'Equação exponencial: trilha de desafios'
}, pages };
