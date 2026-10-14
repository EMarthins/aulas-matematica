// Unidade v35 — Retomada: progressão aritmética e sua soma (aulas R13 e R14 da 2ª série, 2º trimestre) — só as aulas; guia e atividades ficam para depois
const K = require('./kit.js');
const { W, WJS, BIND } = K;
const R = require('./rev.js');
const TRI = 2, DIR = 'retomada-progressao-aritmetica', BASE = 'aulas/2-ano/2-tri/' + DIR + '/';
const KEY = 'm2v35', BRAND = 'Retomada: progressão aritmética';
const UT = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

// ===================== R13: termo geral da PA =====================
const a = R.build({
  eb: 'Matemática · 2ª série · Retomada R13', h1: 'Retomada: <span style="color:var(--primary);">termo geral da progressão aritmética</span>',
  sub: 'Copas do Mundo, Olimpíadas e outros eventos acontecem a cada quatro anos: os anos formam uma progressão aritmética. A fórmula do termo geral diz o ano (ou a edição) de qualquer evento, sem listar todos.',
  badges: [['aₙ = a₁ + (n − 1) · r'], ['razão constante', 'growth'], ['quantos termos?', 'decay']],
  roteiro: ['Do padrão à fórmula.', [['O que é PA', 'soma de uma razão r constante', 'bulb'], ['Termo geral', 'aₙ = a₁ + (n − 1) · r', 'target'], ['Número de termos', 'isolar n', 'chart'], ['Razão e primeiro termo', 'resolver a equação', 'link'], ['Problemas', 'eventos, treinos e capacidades', 'scale']]],
  objetivos: ['Reconhecer uma <strong>progressão aritmética</strong> e identificar a <strong>razão</strong> $r$.', 'Usar $a_{n} = a_{1} + (n − 1) · r$ para achar <strong>termos, o número de termos, a razão e o primeiro termo</strong>.', 'Resolver <strong>problemas contextualizados</strong> com PA.'],
  dica: 'Conte os <strong>passos</strong>, não os termos: do $a_{1}$ ao $a_{n}$ há $n − 1$ passos de tamanho $r$.',
  abertura: { titulo: 'Eventos que se repetem a cada 4 anos', texto: 'Os Jogos Olímpicos de Verão acontecem a cada quatro anos. Os anos de realização formam uma <strong>sequência</strong> em que cada termo é o anterior mais $4$: uma <strong>progressão aritmética</strong> de razão $r = 4$.',
    extra: W.box('Explore uma PA', W.row(W.nm('p13-a', 'a₁', 5, 'any'), W.nm('p13-r', 'razão r', 3, 'any'), W.rg('p13-n', 'n', 1, 20, 1, 8, '')) + W.svg('p13-s', '0 0 360 200', '340px') + W.txt('p13-t', 'Termo aₙ: ') + W.hint('p13-h')),
    mini: ['Na PA $(2, 7, 12, 17, …)$, a razão vale:', ['$2$', '$4$', '$5$', '$7$'], 2, '$7 − 2 = 5$: cada termo é o anterior mais $5$.'] },
  teoria: [
    { eb: 'Teoria · termo geral', titulo: 'Progressão aritmética e seu termo geral', html: `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>PA:</strong> sequência em que cada termo, a partir do segundo, é o anterior somado a uma constante $r$, a <strong>razão</strong>.</li>
                <li><strong>Termo geral:</strong> $a_{n} = a_{1} + (n − 1) · r$.</li>
                <li><strong>Número de termos</strong> de uma PA finita: $n = {a_{n} − a_{1}|r} + 1$.</li>
                <li>Razão a partir de dois termos: $a_{m} = a_{k} + (m − k) · r$.</li>
                <li>$r > 0$: PA <strong>crescente</strong>; $r < 0$: <strong>decrescente</strong>; $r = 0$: constante.</li>
              </ul>
            </div>
            <div><p class="hint">O gráfico de uma PA é um conjunto de pontos <strong>alinhados</strong>: a PA é uma função do 1º grau definida nos números naturais.</p></div>
          </div>` }
  ],
  exemplos: [
    ['Vigésimo termo', 'Determine o 20º termo da PA $(2, 7, 12, 17, …)$.', [['Dados', '$a_{1} = 2$ e $r = 5$.'], ['Fórmula', '$a_{20} = 2 + 19 · 5 = 97$.']], '$a_{20} = 97$.'],
    ['Quantos termos', 'Quantos termos tem a PA finita $(10, 14, 18, …, 98)$?', [['Dados', '$a_{1} = 10$, $r = 4$, $a_{n} = 98$.'], ['Isolar n', '$98 = 10 + (n − 1) · 4$ ⇒ $n − 1 = 22$ ⇒ $n = 23$.']], 'A PA tem $23$ termos.'],
    ['A edição dos Jogos', 'Os Jogos de 2016 foram a 31ª edição e acontecem a cada $4$ anos. Qual será a edição em 2096?', [['Passos', '$(2096 − 2016) ÷ 4 = 20$ passos.'], ['Edição', '$31 + 20 = 51$.']], 'Em 2096 será a $51$ª edição.'],
    ['O primeiro termo', 'Um maratonista correu $62$ km na 8ª semana, aumentando $4$ km por semana. Quantos km correu na 1ª semana?', [['Fórmula', '$62 = a_{1} + 7 · 4$.'], ['Resolver', '$a_{1} = 62 − 28 = 34$.']], 'Na 1ª semana correu $34$ km.'],
    ['A razão', 'A capacidade de um centro de distribuição foi de $120$ mil caixas no 1º ano a $400$ mil no 15º, com ampliações anuais constantes. De quanto foi o aumento anual?', [['Fórmula', '$400 = 120 + 14 · r$.'], ['Resolver', '$r = 280 ÷ 14 = 20$.']], 'Aumento de $20$ mil caixas por ano.']
  ],
  pratique: [
    ['Décimo termo', 'O 10º termo da PA $(3, 8, 13, …)$ é:', ['$43$', '$48$', '$53$', '$58$'], 1, '$a_{10} = 3 + 9 · 5 = 48$. <strong>Alternativa B.</strong>'],
    ['Primeiro termo', 'Em uma PA de razão $4$, o 5º termo é $23$. O 1º termo é:', ['$5$', '$7$', '$9$', '$11$'], 1, '$23 = a_{1} + 4 · 4$ ⇒ $a_{1} = 7$. <strong>Alternativa B.</strong>'],
    ['Número de termos', 'A PA $(7, 13, 19, …, 97)$ tem quantos termos?', ['$14$', '$15$', '$16$', '$17$'], 2, '$n = (97 − 7) ÷ 6 + 1 = 16$. <strong>Alternativa C.</strong>']
  ],
  enem: ['Treino de corrida', 'Uma corredora faz $5$ km na 1ª semana e aumenta $1,5$ km por semana. Em qual semana ela correrá $20$ km?', ['$9$ª', '$10$ª', '$11$ª', '$12$ª', '$13$ª'], 2, '$20 = 5 + (n − 1) · 1,5$ ⇒ $n − 1 = 10$ ⇒ $n = 11$. <strong>Alternativa C.</strong>'],
  cuidados: [['Usar n em vez de n − 1', 'Entre $a_{1}$ e $a_{n}$ há $n − 1$ passos de tamanho $r$.'], ['Razão com sinal errado', 'Em uma PA decrescente, $r$ é <strong>negativo</strong>.'], ['Esquecer o +1 no número de termos', '$n = (a_{n} − a_{1}) ÷ r + 1$.'], ['Confundir PA com PG', 'Na PA <strong>soma-se</strong> $r$; na PG <strong>multiplica-se</strong> por $q$.']],
  quiz: [{ q: 'O termo geral de uma PA é:', o: ['$a_{1} · r^{n}$', '$a_{1} + (n − 1) · r$', '$a_{1} + n · r$', '$a_{1} · n$'], a: 1 }, { q: 'Na PA $(10, 7, 4, …)$ a razão é:', o: ['$3$', '$−3$', '$17$', '$−7$'], a: 1 }, { q: 'O 6º termo da PA $(1, 4, 7, …)$ é:', o: ['$16$', '$19$', '$22$', '$25$'], a: 0 }, { q: 'Uma PA com $r > 0$ é:', o: ['crescente', 'decrescente', 'constante', 'alternada'], a: 0 }],
  fecha: { cards: [['Termo geral', '$a_{n} = a_{1} + (n − 1) · r$.'], ['Número de termos', '$n = (a_{n} − a_{1}) ÷ r + 1$.'], ['Estratégia', 'Anote $a_{1}$, $r$, $n$ e $a_{n}$ e isole o que falta.']], msg: 'Com o termo geral da PA, qualquer posição fica ao alcance. Próxima retomada: a soma dos termos.' }
});

// ===================== R14: soma da PA =====================
const b = R.build({
  eb: 'Matemática · 2ª série · Retomada R14', h1: 'Retomada: <span style="color:var(--primary);">soma dos termos de uma PA</span>',
  sub: 'Poupar R$ 1 na 1ª semana, R$ 2 na 2ª, e assim por diante durante um ano: quanto sobra no fim? Gauss, ainda criança, descobriu como somar sem fazer todas as contas: a soma dos termos de uma PA.',
  badges: [['Sₙ = (a₁ + aₙ) · n ÷ 2'], ['pares com a mesma soma', 'growth'], ['totais acumulados', 'decay']],
  roteiro: ['Dos pares de Gauss à fórmula.', [['O truque de Gauss', 'somar o primeiro com o último', 'bulb'], ['A fórmula', 'Sₙ = (a₁ + aₙ) · n ÷ 2', 'target'], ['Sem o último termo', 'calcule aₙ antes', 'chart'], ['Soma acumulada', 'Sₙ como função de n', 'link'], ['Problemas', 'poupança, produção e parcelas', 'scale']]],
  objetivos: ['Deduzir e aplicar $S_{n} = {(a_{1} + a_{n}) · n|2}$.', 'Calcular a soma quando o <strong>último termo não é dado</strong> (usando o termo geral).', 'Resolver problemas de <strong>poupança, produção e financiamento</strong> com PA.'],
  dica: 'A soma de uma PA é <strong>(média do primeiro e do último) × número de termos</strong>: $S_{n} = {a_{1} + a_{n}|2} · n$.',
  abertura: { titulo: 'O truque de Gauss', texto: 'Somar $1 + 2 + 3 + … + 100$: o primeiro com o último dá $101$; o segundo com o penúltimo, $101$; e assim por diante, em $50$ pares. Logo a soma é $50 · 101 = 5050$.',
    extra: W.box('Soma dos termos', W.row(W.nm('p14-a', 'a₁', 1, 'any'), W.nm('p14-r', 'razão r', 1, 'any'), W.rg('p14-n', 'n', 1, 52, 1, 10, '')) + W.svg('p14-s', '0 0 360 200', '340px') + W.txt('p14-t', 'aₙ · Sₙ: ') + W.hint('p14-h')),
    mini: ['A soma $1 + 2 + … + 10$ é:', ['$45$', '$50$', '$55$', '$100$'], 2, '$S_{10} = (1 + 10) · 10 ÷ 2 = 55$.'] },
  teoria: [
    { eb: 'Teoria · a soma', titulo: 'Sₙ = (a₁ + aₙ) · n ÷ 2', html: `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>Em uma PA, os termos <strong>equidistantes</strong> dos extremos somam o mesmo valor: $a_{1} + a_{n} = a_{2} + a_{n−1} = …$</li>
                <li>Há $n ÷ 2$ pares com essa soma: $S_{n} = {(a_{1} + a_{n}) · n|2}$.</li>
                <li>Sem $a_{n}$, use $a_{n} = a_{1} + (n − 1) · r$ ou $S_{n} = {[2a_{1} + (n − 1) · r] · n|2}$.</li>
                <li>$S_{n}$ <strong>acumula</strong> os $n$ primeiros termos: o total gasto, produzido ou poupado até o período $n$.</li>
              </ul>
            </div>
            <div><p class="hint">Observe no widget: $S_{n}$ é a área da “escada” de barras; a fórmula conta pela <strong>média</strong> das barras vezes o número de barras.</p></div>
          </div>` }
  ],
  exemplos: [
    ['Poupança em um ano', 'Poupa-se R$ 1 na 1ª semana, R$ 2 na 2ª, e assim por 52 semanas. Qual o total?', [['PA', '$a_{1} = 1$, $r = 1$, $n = 52$ ⇒ $a_{52} = 52$.'], ['Soma', '$S_{52} = (1 + 52) · 52 ÷ 2 = 53 · 26 = 1378$.']], 'Ao final, R$ 1.378,00.'],
    ['Sem o último termo', 'Um corredor treina $600$ m no 1º dia e aumenta $50$ m por dia, por $30$ dias. Quantos metros correu no total?', [['Último termo', '$a_{30} = 600 + 29 · 50 = 2050$.'], ['Soma', '$S_{30} = (600 + 2050) · 30 ÷ 2 = 2650 · 15 = 39750$.']], 'Correu $39750$ m no mês.'],
    ['Produção de brinquedos', 'Uma fábrica produz $100$ brinquedos no 1º mês e aumenta $20$ a cada mês. Qual o total em um ano?', [['a₁₂', '$100 + 11 · 20 = 320$.'], ['Soma', '$(100 + 320) · 12 ÷ 2 = 2520$.']], 'O total é de $2520$ brinquedos.'],
    ['Parcelas decrescentes (SAC)', 'Um empréstimo é pago em $10$ parcelas: R$ 2.000 na 1ª e R$ 200 a menos a cada mês. Qual o total pago?', [['Última parcela', '$a_{10} = 2000 − 9 · 200 = 200$.'], ['Soma', '$S_{10} = (2000 + 200) · 10 ÷ 2 = 11000$.']], 'O total pago é R$ 11.000,00.']
  ],
  pratique: [
    ['Soma de 1 a 100', '$1 + 2 + 3 + … + 100$ vale:', ['$4950$', '$5000$', '$5050$', '$5100$'], 2, '$(1 + 100) · 100 ÷ 2 = 5050$. <strong>Alternativa C.</strong>'],
    ['Múltiplos de 5', 'A soma dos múltiplos de $5$ de $5$ a $100$ é:', ['$525$', '$1050$', '$1100$', '$2100$'], 1, '$20$ termos: $(5 + 100) · 20 ÷ 2 = 1050$. <strong>Alternativa B.</strong>'],
    ['Dez termos', 'A soma dos $10$ primeiros termos da PA $(5, 8, 11, …)$ é:', ['$150$', '$185$', '$200$', '$250$'], 1, '$a_{10} = 5 + 27 = 32$; $S = (5 + 32) · 5 = 185$. <strong>Alternativa B.</strong>']
  ],
  enem: ['Poltronas do teatro', 'Um teatro tem $20$ fileiras: $10$ poltronas na 1ª, $12$ na 2ª, $14$ na 3ª, e assim por diante. Quantas poltronas tem o teatro?', ['$480$', '$500$', '$560$', '$580$', '$600$'], 3, '$a_{20} = 10 + 19 · 2 = 48$; $S = (10 + 48) · 20 ÷ 2 = 580$. <strong>Alternativa D.</strong>'],
  cuidados: [['Usar n em vez de n ÷ 2 pares', 'A soma é $(a_{1} + a_{n}) · n ÷ 2$: não esqueça o $÷ 2$.'], ['Último termo errado', 'Calcule $a_{n}$ com o termo geral antes de somar.'], ['Somar só razões', 'A soma acumula <strong>termos</strong>, não só a razão.'], ['Contar os termos', 'O número de termos é $n$ (incluindo $a_{1}$ e $a_{n}$).']],
  quiz: [{ q: 'A soma dos termos de uma PA é:', o: ['$(a_{1} + a_{n}) · n$', '$(a_{1} + a_{n}) · n ÷ 2$', '$a_{1} · n$', '$a_{n} · r$'], a: 1 }, { q: 'A soma $2 + 4 + 6 + 8 + 10$ vale:', o: ['$20$', '$25$', '$30$', '$35$'], a: 2 }, { q: 'Os termos equidistantes dos extremos:', o: ['somam sempre o mesmo valor', 'são iguais', 'são nulos', 'não se relacionam'], a: 0 }, { q: 'Na PA $(1, 3, 5, …)$ a soma dos $4$ primeiros termos é:', o: ['$12$', '$14$', '$16$', '$20$'], a: 2 }],
  fecha: { cards: [['Soma', '$S_{n} = (a_{1} + a_{n}) · n ÷ 2$.'], ['Sem o último', 'Use $a_{n} = a_{1} + (n − 1) · r$.'], ['Interpretar', 'Totais acumulados de poupança, produção e parcelas.']], msg: 'A soma da PA fecha o estudo das progressões aritméticas. Próxima retomada: progressões geométricas.' }
});

const pages = [];
pages.push({ out: BASE + 'aula-1-retomada-termo-geral-da-pa.html', html: K.deck({
  title: 'Retomada: termo geral da progressão aritmética — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Retomada R13 · Termo geral da PA', slides: a,
  extra: WJS + BIND + UT + String.raw`
  bind(['p13-a', 'p13-r', 'p13-n'], function(){ var a1 = +$('p13-a').value, r = +$('p13-r').value, n = +$('p13-n').value; $('p13-nv').textContent = n; if(!isFinite(a1) || !isFinite(r)){ $('p13-s').innerHTML = ''; return; }
    var pts = [], i, lo = Infinity, hi = -Infinity; for(i = 1; i <= n; i++){ var v = a1 + (i - 1) * r; pts.push([i, v]); lo = Math.min(lo, v); hi = Math.max(hi, v); } lo = Math.min(lo, 0) - 1; hi = hi + 1;
    var svg = $('p13-s'), P = plano(svg, 0, 21, Math.floor(lo), Math.ceil(hi), 360, 200, 0); pts.forEach(function(p){ ponto(svg, P, p[0], p[1], p[0] === n ? 'var(--growth)' : 'var(--primary)', ''); });
    var an = a1 + (n - 1) * r; $('p13-t').textContent = 'a' + n + ' = ' + pt(an); $('p13-h').textContent = 'aₙ = ' + pt(a1) + ' + (' + n + ' − 1) · ' + pt(r) + ' = ' + pt(an) + '. Os pontos ficam alinhados: PA é uma função do 1º grau em n.'; });`
}) });
pages.push({ out: BASE + 'aula-2-retomada-soma-da-pa.html', html: K.deck({
  title: 'Retomada: soma dos termos de uma PA — Matemática 2ª série', brand: BRAND, key: KEY + 'a2', meta: 'Retomada R14 · Soma da PA', slides: b,
  extra: WJS + BIND + UT + String.raw`
  bind(['p14-a', 'p14-r', 'p14-n'], function(){ var a1 = +$('p14-a').value, r = +$('p14-r').value, n = +$('p14-n').value; $('p14-nv').textContent = n; if(!isFinite(a1) || !isFinite(r)){ $('p14-s').innerHTML = ''; return; }
    var svg = $('p14-s'), W = 360, H = 200, pad = 22, vals = [], i, mx = 0; for(i = 0; i < n; i++){ var v = a1 + i * r; vals.push(v); mx = Math.max(mx, Math.abs(v)); } mx = mx || 1;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H); svg.innerHTML = ''; var bw = (W - 2 * pad) / Math.max(n, 1), base = H - pad;
    vals.forEach(function(v, k){ var h = Math.max(0, v) / mx * (H - 2 * pad); el('rect', {x: pad + k * bw + 1, y: base - h, width: Math.max(bw - 2, 1), height: h, fill: k === n - 1 ? 'var(--growth)' : 'var(--primary)', 'fill-opacity': 0.75}, svg); });
    var an = a1 + (n - 1) * r, S = (a1 + an) * n / 2; $('p14-t').textContent = pt(an) + ' · ' + pt(S); $('p14-h').textContent = 'Sₙ = (' + pt(a1) + ' + ' + pt(an) + ') · ' + n + ' ÷ 2 = ' + pt(S) + '. Cada barra é um termo; a soma é a “área” das barras.'; });`
}) });

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Retomada: progressão aritmética', accent: 'decay', icon: 'stairs',
  aulas: [['Aula R13', 'Retomada: termo geral da progressão aritmética', 'aula-1-retomada-termo-geral-da-pa.html'], ['Aula R14', 'Retomada: soma dos termos de uma PA', 'aula-2-retomada-soma-da-pa.html']],
  pendente: true
}, pages };
