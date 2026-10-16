// Módulo 3 · Matemática · 3ª série · 3º trimestre — Progressão aritmética: soma dos termos (aulas 76, 77 e 78 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w76 = Wd.somas('sa76');

module.exports = unidade({
  materia: 'matematica', ano: '3° Ano', tri: 3, pasta: 'aulas/3-ano/3-tri/pa-soma-dos-termos/',
  titulo: 'Progressão aritmética: soma dos termos', accent: 'primary', icon: 'stairs', key: 'm3x03', keyp: 'm3', area: 'Matemática · 3ª série',
  refs: ['Aulas 76 a 78 do plano de Matemática da 3ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'A soma de 1 a 100 atribuída ao jovem Gauss é o exemplo clássico desta fórmula.'],
  aulas: [
    // ------------------------------------------------------------ aula 76
    {
      slug: 'progressao-aritmetica-soma-dos-termos-i', titulo: 'Progressão aritmética: soma dos termos I',
      h1: `Soma dos termos de uma ${co('primary')}PA:</span> a ideia de Gauss`,
      sub: 'Contam que o jovem Gauss somou de 1 a 100 em segundos: emparelhou o primeiro com o último, o segundo com o penúltimo e viu que todos os pares somam 101. Essa ideia vira a fórmula da soma da PA.',
      badges: [['Sₙ'], ['(a₁ + aₙ)·n ÷ 2', 'growth'], ['Gauss', 'decay']], color: 'primary',
      roteiro: ['De Gauss à fórmula.', [['Pares que somam igual', 'extremos', 'target'], ['A fórmula', 'Sₙ = (a₁ + aₙ)·n ÷ 2', 'book'], ['Calcular Sₙ', 'dados a₁, aₙ e n', 'chart'], ['Sem o último', 'usar aₙ = a₁ + (n−1)r', 'scale'], ['Exemplos', '1 a 100 e ímpares', 'bulb']]],
      objetivos: ['Deduzir a fórmula $S_{n} = {(a_{1} + a_{n}) · n|2}$.', 'Calcular a <strong>soma</strong> dos $n$ primeiros termos de uma PA.', 'Usar a fórmula em contextos (<strong>1 a 100</strong>, ímpares, pares).'],
      dica: 'Soma da PA = <strong>média entre o primeiro e o último termo</strong>, multiplicada pela <strong>quantidade</strong> de termos.',
      gancho: { titulo: 'O truque de Gauss', texto: 'Some $1 + 2 + 3 + … + 100$. Emparelhe: $1 + 100 = 101$, $2 + 99 = 101$, $3 + 98 = 101$… Há $50$ pares, cada um valendo $101$. A soma é $50 · 101 = 5050$.', mini: ['$1 + 2 + 3 + … + 10$ vale:', ['$45$', '$50$', '$55$', '$100$'], 2, '${(1 + 10) · 10|2} = 55$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · a fórmula', 'Dedução e uso', g2(`<div>
              ${checks(['<strong>$S_{n} = {(a_{1} + a_{n}) · n|2}$</strong>.', '<strong>Dedução:</strong> escreva a soma duas vezes, uma na ordem inversa; cada coluna soma $a_{1} + a_{n}$ e há $n$ colunas: $2S_{n} = (a_{1} + a_{n}) · n$.', 'Se não souber $a_{n}$: $a_{n} = a_{1} + (n − 1) r$ ⇒ $S_{n} = {[2a_{1} + (n − 1) r] · n|2}$.', 'Exemplo: $(2, 5, 8, …)$ com $10$ termos: $a_{10} = 29$; $S_{10} = {(2 + 29) · 10|2} = 155$.'], '.95rem')}
            </div>`, card(`<strong>Somas famosas</strong>
              ${tbl(['Soma', 'Valor'], [['$1 + 2 + … + n$', '${n(n + 1)|2}$'], ['$1 + 3 + 5 + … + (2n − 1)$', '$n²$'], ['$2 + 4 + 6 + … + 2n$', '$n(n + 1)$']])}`, 'primary'))],
        ['Teoria · simulador', 'Veja a soma crescer', g2(`<div>
              ${checks(['No simulador, escolha “PA” e mude $a_{1}$, $r$ e $n$.', 'As barras mostram os termos; a soma aparece conferida com a fórmula.', 'Com $r$ negativo, os termos diminuem e a soma pode até ficar negativa.', 'Compare: soma por fórmula e soma termo a termo coincidem.'], '.95rem')}
            </div>`, callout('Dica', 'Para a soma de $1$ a $n$: ${n(n + 1)|2}$. Memorize: é o “truque de Gauss”.', 'primary'))]
      ],
      exemplos: [
        ['Soma de 1 a 100', 'Calcule $1 + 2 + … + 100$.', [['PA', '$a_{1} = 1$, $a_{100} = 100$, $n = 100$.'], ['Fórmula', '${(1 + 100) · 100|2} = 5050$.']], 'A soma é <strong>5050</strong>.'],
        ['Soma dos ímpares', 'Calcule $1 + 3 + 5 + … + 49$.', [['Quantos termos', '$49 = 1 + (n − 1) · 2$ ⇒ $n = 25$.'], ['Soma', '${(1 + 49) · 25|2} = 625$.']], 'A soma é <strong>625</strong> ($= 25²$).']
      ],
      widget: { titulo: 'Soma de PA e PG', html: w76.html, js: w76.js },
      pratique: [
        ['Fórmula', 'A soma dos $20$ primeiros termos de uma PA com $a_{1} = 3$ e $a_{20} = 60$ é:', ['$315$', '$630$', '$60$', '$1 260$'], 1, '${(3 + 60) · 20|2} = 630$. <strong>Alternativa B.</strong>'],
        ['Pares', '$2 + 4 + 6 + … + 20$ vale:', ['$100$', '$110$', '$120$', '$210$'], 1, '$n = 10$: ${(2 + 20) · 10|2} = 110$. <strong>Alternativa B.</strong>'],
        ['Sem o último', 'A soma dos $10$ primeiros termos de $(4, 7, 10, …)$ é:', ['$175$', '$185$', '$195$', '$205$'], 0, '$a_{10} = 31$; ${(4 + 31) · 10|2} = 175$. <strong>Alternativa A.</strong>']
      ],
      enem: ['O treino de corrida', 'Um atleta corre $2$ km no 1º dia e aumenta $0,5$ km a cada dia. Quantos km corre em $10$ dias?', ['$32,5$', '$42,5$', '$45$', '$47,5$', '$52,5$'], 1, '$a_{10} = 6,5$; $S = {(2 + 6,5) · 10|2} = 42,5$. <strong>Alternativa B.</strong>'],
      cuidados: [['Esquecer o ÷ 2', 'A soma é metade de $(a_{1} + a_{n}) · n$.'], ['$n$ errado', 'Conte os termos: $n = {a_{n} − a_{1}|r} + 1$.'], ['Somar sem ser PA', 'A fórmula só vale se a diferença for constante.'], ['Confundir $a_{n}$ com $S_{n}$', '$a_{n}$ é um termo; $S_{n}$ é a soma dos $n$ primeiros.']],
      quiz: [
        { q: '$1 + 2 + … + 50$ vale:', o: ['$1 225$', '$1 275$', '$2 550$', '$50$'], a: 1 },
        { q: 'A fórmula da soma da PA é:', o: ['${(a_{1} + a_{n}) · n|2}$', '$(a_{1} + a_{n}) · n$', '$a_{1} · n$', '${a_{n}|2}$'], a: 0 },
        { q: '$1 + 3 + 5 + 7 + 9$ vale:', o: ['$20$', '$25$', '$30$', '$45$'], a: 1 },
        { q: 'Na soma de Gauss, os pares somam:', o: ['valores diferentes', 'o mesmo valor', 'zero', 'o dobro'], a: 1 }
      ],
      sintese: [['Fórmula', 'Sₙ = (a₁ + aₙ)·n ÷ 2.'], ['Gauss', 'Pares dos extremos somam o mesmo valor.'], ['Somas famosas', '1+…+n = n(n+1)/2; ímpares = n².']],
      msg: 'Na próxima aula: usar a soma para achar n, a₁ e r.'
    },
    // ------------------------------------------------------------ aula 77
    {
      slug: 'progressao-aritmetica-soma-dos-termos-ii', titulo: 'Progressão aritmética: soma dos termos II',
      h1: `Soma da PA: ${co('primary')}achar n, a₁ e r</span>`,
      sub: 'A fórmula da soma também resolve problemas inversos: dada a soma, descobrir quantos termos há, qual é o primeiro termo ou a razão. Combinamos a soma com o termo geral.',
      badges: [['achar n'], ['achar a₁', 'growth'], ['sistema', 'decay']], color: 'primary',
      roteiro: ['Soma e termo geral juntos.', [['Duas fórmulas', 'aₙ e Sₙ', 'book'], ['Achar n', 'equação do 2º grau', 'target'], ['Achar a₁ ou r', 'sistema', 'scale'], ['Soma entre posições', 'Sₚ,q', 'chart'], ['Conferir', 'testar', 'bulb']]],
      objetivos: ['Resolver problemas em que a <strong>soma é dada</strong> e se pede $n$, $a_{1}$ ou $r$.', 'Calcular a soma de <strong>termos intermediários</strong>.', 'Usar a <strong>equação do 2º grau</strong> que surge ao achar $n$.'],
      dica: 'Ao achar $n$ a partir de $S_{n}$, aparece uma equação do <strong>2º grau</strong> em $n$; só serve a raiz <strong>inteira positiva</strong>.',
      gancho: { titulo: 'Quantos dias de treino?', texto: 'Uma atleta corre $1$ km no 1º dia, $2$ no 2º, $3$ no 3º, e assim por diante. Quantos dias para acumular $55$ km? É preciso $1 + 2 + … + n = 55$.', mini: ['Se $1 + 2 + … + n = 55$, então $n$ vale:', ['$9$', '$10$', '$11$', '$55$'], 1, '${n(n + 1)|2} = 55$ ⇒ $n = 10$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · achar n', 'Equação do 2º grau', g2(`<div>
              ${checks(['Com $a_{1}$ e $r$ dados: $S_{n} = {[2a_{1} + (n − 1) r] · n|2}$ — é uma equação de grau $2$ em $n$.', 'Exemplo: $(3, 5, 7, …)$ com $S_{n} = 120$: $S_{n} = n² + 2n$ ⇒ $n² + 2n − 120 = 0$ ⇒ $n = 10$ (descarta $−12$).', 'Regra: aceite só $n$ <strong>inteiro positivo</strong>.', 'Teste: $S_{10} = {(3 + 21) · 10|2} = 120$ ✓.'], '.95rem')}
            </div>`, card(`<strong>Soma de termos intermediários</strong>
              <p style="font-size:.92rem;margin-top:8px;">Soma do $p$-ésimo ao $q$-ésimo termo: $S_{q} − S_{p−1}$.</p>`, 'primary'))],
        ['Teoria · achar a₁ ou r', 'Sistemas', g2(`<div>
              ${checks(['Dados $S_{n}$ e $a_{n}$: $a_{1} = {2S_{n}|n} − a_{n}$.', 'Dados $a_{1}$, $a_{n}$ e $S_{n}$: $n = {2S_{n}|a_{1} + a_{n}}$.', 'Exemplo: $S_{10} = 100$ e $a_{10} = 19$: $a_{1} = {200|10} − 19 = 1$.', 'Em seguida, $r = {a_{10} − a_{1}|9} = 2$.'], '.95rem')}
            </div>`, callout('Atalho', 'Se você sabe $S_{n}$ e $n$, a <strong>média dos termos</strong> é ${S_{n}|n}$ e é igual a ${a_{1} + a_{n}|2}$.', 'primary'))]
      ],
      exemplos: [
        ['Achando n', 'Quantos termos da PA $(5, 8, 11, …)$ devem ser somados para dar $220$?', [['Soma', '$S_{n} = {[10 + 3(n − 1)] · n|2} = {(3n + 7) n|2}$.'], ['Equação', '$3n² + 7n = 440$ ⇒ $3n² + 7n − 440 = 0$.'], ['Raízes', '$n = 11$ (a outra é negativa).']], '<strong>11 termos</strong>.'],
        ['Termos intermediários', 'Na PA $(2, 5, 8, …)$, some do 4º ao 8º termo.', [['$S_{8}$', '$a_{8} = 23$; ${(2 + 23) · 8|2} = 100$.'], ['$S_{3}$', '$a_{3} = 8$; ${(2 + 8) · 3|2} = 15$.'], ['Diferença', '$100 − 15 = 85$.']], 'A soma é <strong>85</strong>.']
      ],
      pratique: [
        ['Achar a₁', 'Se $S_{8} = 96$ e $a_{8} = 19$, então $a_{1}$ vale:', ['$3$', '$5$', '$7$', '$12$'], 1, '$a_{1} = {192|8} − 19 = 5$. <strong>Alternativa B.</strong>'],
        ['Achar n', 'Se $a_{1} = 4$, $a_{n} = 40$ e $S_{n} = 220$, então $n$ vale:', ['$8$', '$10$', '$11$', '$12$'], 1, '$n = {440|44} = 10$. <strong>Alternativa B.</strong>'],
        ['Intermediários', 'A soma do 3º ao 6º termo de $(1, 4, 7, …)$ é:', ['$38$', '$46$', '$54$', '$62$'], 1, '$7 + 10 + 13 + 16 = 46$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A pilha de troncos', 'Uma pilha tem $n$ camadas: $1$ tronco na de cima, $2$ na seguinte, e assim por diante. Se há $66$ troncos, quantas camadas tem a pilha?', ['$10$', '$11$', '$12$', '$13$', '$33$'], 1, '${n(n + 1)|2} = 66$ ⇒ $n² + n − 132 = 0$ ⇒ $n = 11$. <strong>Alternativa B.</strong>'],
      cuidados: [['Raiz negativa de $n$', 'Descarte raízes negativas ou não inteiras.'], ['Esquecer os termos intermediários', 'Use $S_{q} − S_{p−1}$, não $S_{q} − S_{p}$.'], ['Misturar $a_{n}$ e $S_{n}$', 'Escreva os dados em uma lista antes de usar as fórmulas.'], ['Conferir', 'Teste a resposta recalculando $S_{n}$.']],
      quiz: [
        { q: '$1 + 2 + … + n = 36$ ⇒ $n$ vale:', o: ['$7$', '$8$', '$9$', '$18$'], a: 1 },
        { q: 'Soma do 2º ao 4º termo de $(5, 7, 9, 11, …)$:', o: ['$21$', '$27$', '$32$', '$36$'], a: 1 },
        { q: 'A média dos termos de uma PA é:', o: ['${S_{n}|n}$', '$S_{n} · n$', '$a_{1} · a_{n}$', '$n$'], a: 0 },
        { q: 'Ao achar $n$ pela soma, aceitamos:', o: ['qualquer raiz', 'só raiz inteira positiva', 'só raiz negativa', 'só decimal'], a: 1 }
      ],
      sintese: [['Achar n', 'Equação do 2º grau; raiz inteira positiva.'], ['Intermediários', 'S_q − S_(p−1).'], ['Média', 'S_n ÷ n = (a₁ + aₙ) ÷ 2.']],
      msg: 'Na próxima aula: problemas variados com PA.'
    },
    // ------------------------------------------------------------ aula 78
    {
      slug: 'progressao-aritmetica-soma-dos-termos-iii', titulo: 'Progressão aritmética: soma dos termos III',
      h1: `Soma da PA: ${co('primary')}problemas do dia a dia</span>`,
      sub: 'Poupanças que crescem em degraus, assentos de teatro, empilhamentos e treinos progressivos. Aprendemos a reconhecer a PA escondida e usar a soma.',
      badges: [['modelar'], ['arquibancadas', 'growth'], ['poupança', 'decay']], color: 'primary',
      roteiro: ['Reconhecer a PA e calcular.', [['Ler', 'o que cresce de modo constante', 'book'], ['Identificar a₁, r, n', 'organizar os dados', 'target'], ['Calcular', 'termo e soma', 'chart'], ['Conferir', 'ordem de grandeza', 'scale'], ['Variações', 'PA decrescente', 'bulb']]],
      objetivos: ['<strong>Reconhecer</strong> situações modeladas por PA.', 'Combinar <strong>termo geral e soma</strong> em problemas.', 'Resolver problemas de <strong>pilhas, filas, poupança e treino</strong>.'],
      dica: 'Liste: <strong>$a_{1}$</strong> (primeiro valor), <strong>$r$</strong> (acréscimo fixo), <strong>$n$</strong> (quantidade). Depois decida: pede-se um termo ou a soma?',
      gancho: { titulo: 'A poupança em degraus', texto: 'Júlia guarda R$ 20 no 1º mês e aumenta R$ 10 a cada mês: $20, 30, 40, …$ Em um ano ela terá guardado $S_{12}$. Primeiro: $a_{12} = 20 + 11 · 10 = 130$. Depois: $S_{12} = {(20 + 130) · 12|2} = 900$.', mini: ['O total guardado em $12$ meses é:', ['R$ 780', 'R$ 900', 'R$ 1.020', 'R$ 1.800'], 1, '$S_{12} = 900$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · roteiro', 'Dois passos', g2(`<div>
              ${checks(['<strong>1.</strong> Ache o último termo: $a_{n} = a_{1} + (n − 1) r$.', '<strong>2.</strong> Some: $S_{n} = {(a_{1} + a_{n}) · n|2}$.', 'Se o problema for decrescente, $r < 0$ e a fórmula é a mesma.', 'Para saber <strong>quando</strong> um total é atingido, resolva a equação em $n$.'], '.95rem')}
            </div>`, card(`<strong>Exemplo decrescente</strong>
              <p style="font-size:.92rem;margin-top:8px;">Uma dívida de R$ 1.000 é paga com parcelas de $150, 140, 130, …$ Quanto se paga em $5$ parcelas? $a_{5} = 110$; $S_{5} = {(150 + 110) · 5|2} = 650$.</p>`, 'primary'))],
        ['Teoria · pilhas e arquibancadas', 'Contagens clássicas', g2(`<div>
              ${checks(['<strong>Pilha triangular:</strong> $1 + 2 + … + n = {n(n + 1)|2}$ itens.', '<strong>Arquibancada:</strong> $20$ assentos na 1ª fila, $+ 2$ por fila, $15$ filas: $a_{15} = 48$; $S_{15} = {(20 + 48) · 15|2} = 510$.', '<strong>Escada de blocos:</strong> $a_{n} = n$ ou $a_{n} = 2n − 1$ dependendo do padrão.', 'Confira a ordem de grandeza: $S_{n} ≈ n · $ (termo do meio).'], '.95rem')}
            </div>`, callout('Verificação rápida', 'A soma é aproximadamente $n$ vezes o <strong>termo do meio</strong>. Se o resultado destoa, revise a conta.', 'primary'))]
      ],
      exemplos: [
        ['Arquibancada', 'A 1ª fila de uma arquibancada tem $18$ assentos e cada fila seguinte tem $3$ a mais. Há $12$ filas. Quantos assentos no total?', [['Última fila', '$a_{12} = 18 + 11 · 3 = 51$.'], ['Soma', '${(18 + 51) · 12|2} = 414$.']], 'São <strong>414 assentos</strong>.'],
        ['Parcelas decrescentes', 'Uma dívida é paga em parcelas de R$ 300, R$ 280, R$ 260, …, até a última, de R$ 20. Quanto será pago no total?', [['Quantas parcelas', '$20 = 300 + (n − 1)(−20)$ ⇒ $n = 15$.'], ['Soma', '${(300 + 20) · 15|2}$.'], ['Calcule', '$320 · 15 ÷ 2 = 2400$.']], 'Total pago: <strong>R$ 2.400</strong>.']
      ],
      pratique: [
        ['Poupança', 'Guardando R$ 50, R$ 60, R$ 70, … durante $10$ meses, o total é:', ['R$ 950', 'R$ 1.000', 'R$ 1.050', 'R$ 1.100'], 0, '$a_{10} = 140$; ${(50 + 140) · 10|2} = 950$. <strong>Alternativa A.</strong>'],
        ['Fileiras', 'Um auditório tem $10$ fileiras: $12$ cadeiras na primeira e $2$ a mais em cada seguinte. O total é:', ['$150$', '$210$', '$220$', '$300$'], 1, '$a_{10} = 30$; ${(12 + 30) · 10|2} = 210$. <strong>Alternativa B.</strong>'],
        ['Pilha', 'Uma pilha com $1, 2, 3, …, 15$ latas tem total:', ['$105$', '$115$', '$120$', '$225$'], 2, '${15 · 16|2} = 120$. <strong>Alternativa C.</strong>']
      ],
      enem: ['Treino progressivo', 'Um corredor faz $3$ km no 1º dia e aumenta $1$ km por dia. Em quantos dias terá percorrido, no total, $63$ km?', ['$5$', '$6$', '$7$', '$8$', '$9$'], 4, '$S_{n} = {n(n + 5)|2} = 63$ ⇒ $n² + 5n − 126 = 0$ ⇒ $n = 9$. <strong>Alternativa E.</strong>'],
      cuidados: [['Somar só a primeira e a última', 'Multiplique por $n$ e divida por $2$.'], ['Termo × soma', 'Leia se o problema pede um termo ou a soma.'], ['PA decrescente', 'Com $r < 0$, verifique se os termos não ficam negativos sem sentido.'], ['Parcelas nulas', 'Pare quando o valor chegar a zero.']],
      quiz: [
        { q: '$5 + 10 + 15 + … + 50$ vale:', o: ['$250$', '$275$', '$300$', '$500$'], a: 1 },
        { q: 'Poupar R$ 10, 20, 30, …, R$ 100 (10 meses) dá:', o: ['R$ 450', 'R$ 500', 'R$ 550', 'R$ 1.000'], a: 2 },
        { q: 'Uma PA aparece quando o acréscimo é:', o: ['percentual', 'constante', 'aleatório', 'quadrático'], a: 1 },
        { q: 'Para achar $S_{n}$ primeiro encontramos:', o: ['$a_{n}$', '$q$', 'a derivada', 'o logaritmo'], a: 0 }
      ],
      sintese: [['Roteiro', 'a₁, r, n → aₙ → Sₙ.'], ['Problemas', 'Pilhas, filas, poupanças e treinos.'], ['Verificar', 'Soma ≈ n × termo do meio.']],
      msg: 'Na próxima aula: progressão geométrica.'
    }
  ]
});
