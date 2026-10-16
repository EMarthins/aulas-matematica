// Módulo 5 · Matemática · 3ª série · 3º trimestre — Progressão geométrica: soma dos termos (aulas 82, 83 e 84 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w82 = Wd.somas('sg82');
const w84 = Wd.somas('sg84');

module.exports = unidade({
  materia: 'matematica', ano: '3° Ano', tri: 3, pasta: 'aulas/3-ano/3-tri/pg-soma-dos-termos/',
  titulo: 'Progressão geométrica: soma dos termos', accent: 'growth', icon: 'curve-up', key: 'm3x05', keyp: 'm3', area: 'Matemática · 3ª série',
  refs: ['Aulas 82 a 84 do plano de Matemática da 3ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'A lenda do xadrez e a corrente de e-mails são exemplos clássicos de soma de PG.'],
  aulas: [
    // ------------------------------------------------------------ aula 82
    {
      slug: 'progressao-geometrica-soma-dos-termos-i', titulo: 'Progressão geométrica: soma dos termos de uma PG finita I',
      h1: `Soma da ${co('growth')}PG finita:</span> a fórmula`,
      sub: 'Somar os n primeiros termos de uma PG tem fórmula própria: multiplicando a soma por q e subtraindo, quase tudo se cancela. A fórmula funciona para qualquer razão diferente de 1.',
      badges: [['Sₙ'], ['a₁(qⁿ − 1) ÷ (q − 1)', 'growth'], ['q ≠ 1', 'decay']], color: 'growth',
      roteiro: ['Do cancelamento à fórmula.', [['A ideia', 'Sₙ e q·Sₙ', 'bulb'], ['A fórmula', 'a₁(qⁿ − 1) ÷ (q − 1)', 'target'], ['Calcular', 'dados a₁, q e n', 'chart'], ['Caso q = 1', 'n·a₁', 'scale'], ['Exemplos', 'xadrez e dobras', 'book']]],
      objetivos: ['Deduzir $S_{n} = {a_{1}(q^{n} − 1)|q − 1}$.', 'Calcular a <strong>soma</strong> dos $n$ primeiros termos de uma PG.', 'Tratar o caso especial <strong>$q = 1$</strong>.'],
      dica: 'Soma da PG = $a_{1}$ vezes ($q^{n} − 1$) dividido por ($q − 1$). Em dúvida, <strong>some termo a termo</strong> para conferir com poucos termos.',
      gancho: { titulo: 'O tabuleiro de xadrez', texto: 'Um grão na 1ª casa, dois na 2ª, quatro na 3ª, dobrando até a 64ª. Quantos grãos no total? $S_{64} = {1 · (2^{64} − 1)|2 − 1} = 2^{64} − 1 ≈ 1,8 · 10^{19}$: mais do que toda a produção de trigo da humanidade.', mini: ['$1 + 2 + 4 + 8 + 16$ vale:', ['$30$', '$31$', '$32$', '$62$'], 1, '$S_{5} = {2^{5} − 1|1} = 31$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · dedução', 'A soma e o truque', g2(`<div>
              ${checks(['$S_{n} = a_{1} + a_{1} q + a_{1} q² + … + a_{1} q^{n−1}$.', 'Multiplique por $q$: $q S_{n} = a_{1} q + a_{1} q² + … + a_{1} q^{n}$.', 'Subtraia: $q S_{n} − S_{n} = a_{1} q^{n} − a_{1}$ ⇒ <strong>$S_{n} = {a_{1}(q^{n} − 1)|q − 1}$</strong> ($q ≠ 1$).', 'Se $q = 1$: todos os termos são iguais e $S_{n} = n · a_{1}$.'], '.95rem')}
            </div>`, card(`<strong>Exemplo</strong>
              <p style="font-size:.92rem;margin-top:8px;">$(3, 6, 12, …)$, $n = 6$: $S_{6} = {3(2^{6} − 1)|2 − 1} = 3 · 63 = 189$.</p>`, 'primary'))],
        ['Teoria · simulador', 'Soma e termos', g2(`<div>
              ${checks(['No simulador, escolha “PG” e varie $a_{1}$, $q$ e $n$.', 'O gráfico de barras mostra os termos; a soma é conferida pela fórmula.', 'Com $|q| < 1$, os termos diminuem e a soma se estabiliza.', 'Com $q < 0$, os termos alternam de sinal e a soma oscila.'], '.95rem')}
            </div>`, callout('Forma alternativa', 'Para $q < 1$ também se usa $S_{n} = {a_{1}(1 − q^{n})|1 − q}$ (mesma fórmula, outros sinais).', 'growth'))]
      ],
      exemplos: [
        ['Soma de PG', 'Calcule a soma dos $8$ primeiros termos de $(5, 10, 20, …)$.', [['Dados', '$a_{1} = 5$, $q = 2$, $n = 8$.'], ['Fórmula', '$S_{8} = {5(2^{8} − 1)|2 − 1}$.'], ['Calcule', '$5 · 255 = 1275$.']], '$S_{8} = 1275$.'],
        ['Razão fracionária', 'Calcule a soma dos $4$ primeiros termos de $(81, 27, 9, …)$.', [['Dados', '$a_{1} = 81$, $q = {1|3}$.'], ['Termos', '$81 + 27 + 9 + 3$.']], '$S_{4} = 120$.']
      ],
      widget: { titulo: 'Soma de PG e PA', html: w82.html, js: w82.js },
      pratique: [
        ['Fórmula', 'A soma dos $5$ primeiros termos de $(2, 6, 18, …)$ é:', ['$242$', '$486$', '$728$', '$364$'], 0, '${2(3^{5} − 1)|2} = 242$. <strong>Alternativa A.</strong>'],
        ['Potências de 2', '$1 + 2 + 4 + … + 512$ vale:', ['$512$', '$1 023$', '$1 024$', '$1 025$'], 1, '$n = 10$: $2^{10} − 1$. <strong>Alternativa B.</strong>'],
        ['q = 1', 'A soma dos $7$ primeiros termos de $(4, 4, 4, …)$ é:', ['$11$', '$28$', '$4^{7}$', '$32$'], 1, '$7 · 4$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A corrente de mensagens', 'Uma pessoa envia uma mensagem para $3$ amigos; cada um que a recebe a repassa a outros $3$, durante $5$ rodadas (a 1ª rodada tem $3$ envios). Quantas mensagens foram enviadas no total?', ['$243$', '$363$', '$364$', '$729$', '$1 093$'], 1, '$3 + 9 + 27 + 81 + 243 = 363$. <strong>Alternativa B.</strong>'],
      cuidados: [['Usar $q^{n−1}$ na soma', 'Na soma o expoente é $n$: $q^{n} − 1$.'], ['Esquecer o denominador', 'Divida por $q − 1$.'], ['$q = 1$', 'A fórmula geral não vale; use $n · a_{1}$.'], ['Contar termos', 'Confira se $n$ é o número de termos somados.']],
      quiz: [
        { q: 'A soma da PG finita (com $q ≠ 1$) é:', o: ['${a_{1}(q^{n} − 1)|q − 1}$', '${(a_{1} + a_{n}) n|2}$', '$a_{1} q^{n−1}$', '$n · a_{1}$'], a: 0 },
        { q: '$1 + 3 + 9 + 27$ vale:', o: ['$39$', '$40$', '$80$', '$81$'], a: 1 },
        { q: 'Se $q = 1$, a soma vale:', o: ['$0$', '$n · a_{1}$', '$a_{1}^{n}$', 'não existe'], a: 1 },
        { q: '$1 + 2 + 4 + … + 2^{9}$ vale:', o: ['$511$', '$512$', '$1 023$', '$1 024$'], a: 2 }
      ],
      sintese: [['Fórmula', 'Sₙ = a₁(qⁿ − 1) ÷ (q − 1).'], ['q = 1', 'Sₙ = n·a₁.'], ['Dedução', 'qSₙ − Sₙ cancela quase tudo.']],
      msg: 'Na próxima aula: problemas com a soma da PG.'
    },
    // ------------------------------------------------------------ aula 83
    {
      slug: 'progressao-geometrica-soma-dos-termos-ii', titulo: 'Progressão geométrica: soma dos termos de uma PG finita II',
      h1: `Soma da PG: ${co('growth')}problemas de acúmulo</span>`,
      sub: 'Contágios, correntes, poupança com aportes que crescem e lenda do xadrez: situações em que o total é a soma de uma PG. Aprendemos a identificar a razão, o número de termos e a conferir.',
      badges: [['modelar'], ['acúmulo', 'growth'], ['conferir', 'decay']], color: 'growth',
      roteiro: ['Do problema à soma.', [['Identificar a PG', 'razão e número de termos', 'target'], ['Calcular Sₙ', 'fórmula', 'chart'], ['Achar n', 'dado o total', 'scale'], ['Achar q ou a₁', 'dado o total', 'book'], ['Conferir', 'somar à mão', 'bulb']]],
      objetivos: ['<strong>Reconhecer</strong> situações de acúmulo modeladas por PG.', 'Resolver problemas em que a <strong>soma é dada</strong>.', '<strong>Conferir</strong> o resultado com poucos termos.'],
      dica: 'Para achar $n$ a partir da soma, isole $q^{n}$: $q^{n} = {S_{n}(q − 1)|a_{1}} + 1$ e compare potências.',
      gancho: { titulo: 'Aportes que dobram', texto: 'Um investidor aplica R$ 100 no 1º mês e dobra o aporte a cada mês: $100, 200, 400, …$ Em $6$ meses o total aplicado é $S_{6} = {100(2^{6} − 1)|2 − 1} = 6300$.', mini: ['O total aplicado em $6$ meses é:', ['R$ 3.200', 'R$ 6.300', 'R$ 6.400', 'R$ 12.700'], 1, '$100 · 63 = 6300$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · achar n', 'Pela soma', g2(`<div>
              ${checks(['De $S_{n} = {a_{1}(q^{n} − 1)|q − 1}$: $q^{n} = {S_{n}(q − 1)|a_{1}} + 1$.', 'Exemplo: $(2, 4, 8, …)$ com $S_{n} = 510$: $2^{n} = {510 · 1|2} + 1 = 256$ ⇒ $n = 8$.', 'Para razões não inteiras use logaritmos: $n = {log(...)|log q}$.', 'Sempre teste somando alguns termos.'], '.95rem')}
            </div>`, card(`<strong>Dado o total e o último termo</strong>
              <p style="font-size:.92rem;margin-top:8px;">$S_{n} = {a_{n} q − a_{1}|q − 1}$ (outra forma da soma).</p>`, 'primary'))],
        ['Teoria · aplicações', 'Corrente e contágio', g2(`<div>
              ${checks(['<strong>Corrente de e-mails:</strong> cada pessoa repassa a $4$; após $4$ rodadas, total de mensagens: $4 + 16 + 64 + 256 = 340$.', '<strong>Contágio:</strong> $1$ pessoa contagia $3$ por dia: casos novos $3, 9, 27, …$', '<strong>Dobras de papel:</strong> camadas $1, 2, 4, 8, …$', '<strong>Cuidado:</strong> distinga “total acumulado” (soma) de “valor no n-ésimo período” (termo).'], '.95rem')}
            </div>`, callout('Termo × soma', 'O termo $a_{n}$ é o valor <strong>em</strong> um período; a soma $S_{n}$ é o total <strong>até</strong> o período $n$.', 'growth'))]
      ],
      exemplos: [
        ['Acúmulo', 'Uma árvore genealógica tem $2$ pais, $4$ avós, $8$ bisavós… Quantos antepassados até a 10ª geração?', [['PG', '$a_{1} = 2$, $q = 2$, $n = 10$.'], ['Soma', '${2(2^{10} − 1)|1} = 2046$.']], '<strong>2.046</strong> antepassados.'],
        ['Achar n', 'Quantos termos da PG $(3, 9, 27, …)$ somam $3 279$?', [['Fórmula', '$3279 = {3(3^{n} − 1)|2}$.'], ['Isole', '$3^{n} − 1 = 2186$ ⇒ $3^{n} = 2187 = 3^{7}$.']], '<strong>7 termos</strong>.']
      ],
      pratique: [
        ['Total', 'Aportes de R$ 50, R$ 150, R$ 450, … durante $5$ meses somam:', ['R$ 2.000', 'R$ 3.050', 'R$ 6.050', 'R$ 12.150'], 2, '${50(3^{5} − 1)|2} = 6050$. <strong>Alternativa C.</strong>'],
        ['Achar n', 'Quantos termos de $(1, 2, 4, …)$ somam $255$?', ['$6$', '$7$', '$8$', '$9$'], 2, '$2^{n} − 1 = 255$ ⇒ $n = 8$. <strong>Alternativa C.</strong>'],
        ['Corrente', 'Uma mensagem é repassada a $2$ pessoas por rodada, durante $6$ rodadas. Total de envios:', ['$62$', '$64$', '$126$', '$128$'], 2, '$2 + 4 + 8 + 16 + 32 + 64 = 126$. <strong>Alternativa C.</strong>']
      ],
      enem: ['A propaganda em cadeia', 'Uma campanha envia um e-mail a $5$ pessoas; cada uma o repassa a $5$ novas pessoas, por $4$ rodadas. Quantos e-mails foram enviados no total?', ['$625$', '$780$', '$781$', '$3 125$', '$3 905$'], 1, '$5 + 25 + 125 + 625 = 780$. <strong>Alternativa B.</strong>'],
      cuidados: [['Mistura de termo e soma', 'Veja se o problema pede o valor de um período ou o total acumulado.'], ['Contar a rodada zero', 'Confira se o primeiro termo é de $1$ ou de $q$ envios.'], ['Arredondar $q^{n}$', 'Calcule potências com exatidão.'], ['Esquecer a conferência', 'Some poucos termos para validar.']],
      quiz: [
        { q: '$3 + 9 + 27 + 81$ vale:', o: ['$120$', '$121$', '$117$', '$243$'], a: 0 },
        { q: 'Em uma corrente que triplica por rodada, a soma de $3$ rodadas ($1, 3, 9$) é:', o: ['$13$', '$27$', '$12$', '$9$'], a: 0 },
        { q: 'O valor em um período é:', o: ['um termo', 'a soma', 'a razão', 'o primeiro termo sempre'], a: 0 },
        { q: '$1 + 2 + … + 2^{7}$ vale:', o: ['$255$', '$256$', '$127$', '$128$'], a: 0 }
      ],
      sintese: [['Total acumulado', 'Soma da PG.'], ['Achar n', 'Isole qⁿ e compare potências.'], ['Conferir', 'Some alguns termos à mão.']],
      msg: 'Na próxima aula: soma infinita e outras aplicações.'
    },
    // ------------------------------------------------------------ aula 84
    {
      slug: 'progressao-geometrica-soma-dos-termos-iii', titulo: 'Progressão geométrica: soma dos termos III (soma infinita)',
      h1: `Soma da PG ${co('growth')}infinita:</span> quando a soma se acomoda`,
      sub: 'Se a razão está entre −1 e 1, os termos encolhem tanto que a soma de infinitos termos tem valor finito: S = a₁ ÷ (1 − q). É assim que as dízimas periódicas viram frações.',
      badges: [['|q| < 1'], ['S = a₁ ÷ (1 − q)', 'growth'], ['dízimas', 'decay']], color: 'growth',
      roteiro: ['Infinito com resultado finito.', [['Ideia', 'termos que somem', 'bulb'], ['Condição', '|q| < 1', 'target'], ['A fórmula', 'S = a₁ ÷ (1 − q)', 'book'], ['Dízimas periódicas', 'fração geratriz', 'scale'], ['Aplicações', 'distâncias e áreas', 'chart']]],
      objetivos: ['Reconhecer quando a soma infinita <strong>existe</strong> ($|q| < 1$).', 'Aplicar $S = {a_{1}|1 − q}$.', 'Obter a <strong>fração geratriz</strong> de uma dízima periódica.'],
      dica: 'Antes de somar infinitos termos, confira <strong>$|q| < 1$</strong>. Caso contrário, a soma diverge.',
      gancho: { titulo: 'O paradoxo de Zenão', texto: 'Para ir de um ponto a outro, é preciso percorrer metade da distância, depois metade da metade, e assim por diante: $1 + {1|2} + {1|4} + {1|8} + …$ Infinitos passos, mas a soma é finita: $2$.', mini: ['$1 + {1|2} + {1|4} + …$ tende a:', ['$1$', '$2$', '$3$', 'infinito'], 1, '$S = {1|1 − {1|2}} = 2$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · soma infinita', 'Fórmula e condição', g2(`<div>
              ${checks(['Se $|q| < 1$, $q^{n} → 0$ e $S_{n} → {a_{1}|1 − q}$.', '<strong>$S = {a_{1}|1 − q}$</strong> (soma dos infinitos termos).', 'Exemplo: $(12, 6, 3, …)$: $S = {12|1 − {1|2}} = 24$.', 'Se $|q| ≥ 1$, a soma infinita <strong>não existe</strong> (diverge).'], '.95rem')}
            </div>`, card(`<strong>Dízimas periódicas</strong>
              <p style="font-size:.92rem;margin-top:8px;">$0,333… = 0,3 + 0,03 + 0,003 + … = {0,3|1 − 0,1} = {1|3}$.</p>
              <p style="font-size:.92rem;">$0,232323… = {0,23|1 − 0,01} = {23|99}$.</p>`, 'primary'))],
        ['Teoria · simulador e usos', 'Veja a soma se estabilizar', g2(`<div>
              ${checks(['No simulador, use $|q| < 1$ (por exemplo, $0,5$) e aumente $n$: $S_{n}$ se aproxima de ${a_{1}|1 − q}$.', 'Uma bola que quica e sobe sempre ${2|3}$ da altura anterior percorre uma distância total finita.', 'Fractais e séries geométricas usam o mesmo raciocínio.', 'Para $q < 0$ (com $|q| < 1$), a soma também converge, oscilando em torno do valor.'], '.95rem')}
            </div>`, callout('Bola que quica', 'Cai de $9$ m e sobe ${2|3}$ da altura. Descidas: $9 + 6 + 4 + … = {9|1 − {2|3}} = 27$. Subidas: $27 − 9 = 18$. Total: $45$ m.', 'growth'))]
      ],
      exemplos: [
        ['Soma infinita', 'Calcule $8 + 4 + 2 + 1 + …$', [['Razão', '$q = {1|2}$ ($|q| < 1$).'], ['Soma', '$S = {8|1 − {1|2}} = 16$.']], '$S = 16$.'],
        ['Geratriz', 'Encontre a fração geratriz de $0,777…$', [['PG', '$0,7 + 0,07 + 0,007 + …$ com $a_{1} = 0,7$ e $q = 0,1$.'], ['Soma', '${0,7|1 − 0,1} = {0,7|0,9}$.']], '$0,777… = {7|9}$.']
      ],
      widget: { titulo: 'Soma que se acomoda', html: w84.html, js: w84.js },
      pratique: [
        ['Soma infinita', '$18 + 6 + 2 + … $ (razão ${1|3}$) vale:', ['$24$', '$27$', '$36$', 'não existe'], 1, '$S = {18|1 − {1|3}} = 27$. <strong>Alternativa B.</strong>'],
        ['Existência', 'A soma infinita de $(2, 6, 18, …)$:', ['vale $3$', 'vale $−1$', 'não existe ($q = 3$)', 'vale $2$'], 2, '$|q| ≥ 1$. <strong>Alternativa C.</strong>'],
        ['Geratriz', '$0,666…$ é igual a:', ['${1|3}$', '${2|3}$', '${6|10}$', '${6|100}$'], 1, '${0,6|0,9} = {2|3}$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A bola que quica', 'Uma bola é solta de $12$ m e, a cada quique, sobe ${1|2}$ da altura anterior. A distância total percorrida até parar é:', ['$24$ m', '$30$ m', '$36$ m', '$48$ m', 'infinita'], 2, 'Descidas: $12 + 6 + 3 + … = 24$; subidas: $24 − 12 = 12$; total $36$. <strong>Alternativa C.</strong>'],
      cuidados: [['Esquecer $|q| < 1$', 'Sem essa condição, a soma não existe.'], ['Somar só a descida', 'Na bola que quica, inclua subidas e descidas.'], ['Confundir com a soma finita', 'A infinita não tem $q^{n}$.'], ['Razão negativa', 'Use $|q|$ para verificar; a fórmula vale com $q$ negativo.']],
      quiz: [
        { q: 'A soma infinita da PG existe se:', o: ['$|q| ≥ 1$', '$|q| < 1$', '$q = 1$', '$q > 2$'], a: 1 },
        { q: '$5 + 2,5 + 1,25 + …$ vale:', o: ['$7,5$', '$10$', '$12,5$', '$15$'], a: 1 },
        { q: '$0,111…$ é igual a:', o: ['${1|9}$', '${1|10}$', '${1|11}$', '${1|3}$'], a: 0 },
        { q: 'A fórmula da soma infinita é:', o: ['${a_{1}|1 − q}$', '${a_{1}|q − 1}$', '$a_{1}(1 − q)$', '$a_{1} · q$'], a: 0 }
      ],
      sintese: [['Soma infinita', 'S = a₁ ÷ (1 − q), com |q| < 1.'], ['Dízimas', 'São somas de PG infinita.'], ['Aplicações', 'Quiques, distâncias, fractais.']],
      msg: 'Na próxima aula: relações métricas no triângulo retângulo.'
    }
  ]
});
