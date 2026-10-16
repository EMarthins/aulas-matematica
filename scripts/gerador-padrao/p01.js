// Matemática · 6º ano · 1º trimestre · Sistema de numeração decimal (aulas 01 a 04 do RCO) — NA ESTRUTURA PADRÃO DE EXATAS (docs/estrutura-aulas.md)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas; números grandes com espaço fino (&nbsp;).
const P = require('./kit.js');
const { unidade } = require('./aula.js');
const { tbl, checks, callout, card, g2 } = P;
const co = c => `<span style="color:var(--${c});">`;
const sp = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '&nbsp;');

// quadro de valor posicional para um número de até 4 ordens
const quadro = (n, rot = ['UM', 'C', 'D', 'U']) => {
  const d = String(n).padStart(rot.length, '0').split('');
  return tbl(rot, [d.map((x, i) => `<strong style="font-size:1.3rem;">${x}</strong>`)]) + `<p class="hint" style="text-align:center;">${rot.map((r, i) => r === 'UM' ? 'UM = unidade de milhar' : r === 'C' ? 'C = centena' : r === 'D' ? 'D = dezena' : r === 'U' ? 'U = unidade' : '').filter(Boolean).join(' · ')}</p>`;
};

module.exports = unidade({
  tipo: 'exatas', materia: 'matematica', ano: '6° Ano', tri: 1, pasta: 'aulas/6-ano/1-tri/sistema-de-numeracao-decimal/', inicio: 1,
  titulo: 'Sistema de numeração decimal', accent: 'primary', icon: 'numbers', key: 'm6p01', keyp: 'm6', area: 'Matemática · 6º ano',
  refs: ['Aulas 01 a 04 do plano de Matemática do 6º ano (1º trimestre), reescritas na estrutura padrão do EduMath, com ilustrações e problemas originais.', 'Habilidade D24 (Prova Paraná): reconhecer as representações decimais dos números naturais e racionais.'],
  aulas: [
    // ============================================================ aula 01
    {
      slug: 'caracteristicas-do-sistema-de-numeracao-decimal-i', titulo: 'Características do sistema de numeração decimal I',
      h1: `Só ${co('primary')}10 símbolos</span> escrevem qualquer número`,
      pergunta: 'No mercado, os preços vão de R$ 7 a R$ 1.250. Como apenas dez símbolos, de 0 a 9, são suficientes para escrever todos eles?',
      cena: 'mercado', legenda: 'Ilustração original: prateleiras com preços.', badges: [['algarismos'], ['base 10', 'growth'], ['valor posicional', 'decay']],
      previos: { texto: 'Você lê preços e placares todos os dias. Vamos descobrir o que está “escondido” dentro de cada número.', mini: ['No número $305$, o algarismo $3$ representa:', ['$3$ unidades', '$30$ unidades', '$300$ unidades', '$305$ unidades'], 2, 'O $3$ está na ordem das centenas: vale $300$.'], dupla: 'Por que escrevemos $305$ e não $35$? O que o zero está fazendo no meio?' },
      objetivos: ['Reconhecer os <strong>dez algarismos</strong> e a <strong>base 10</strong>.', 'Explicar o <strong>valor posicional</strong> de um algarismo.', 'Descrever o <strong>papel do zero</strong> em um número.'],
      dica: 'O que importa não é só <strong>qual</strong> algarismo, mas <strong>onde</strong> ele está: a posição muda o valor.',
      explicacao: [
        { titulo: 'Dez algarismos e agrupamentos de 10', html: checks(['Usamos <strong>10 algarismos</strong>: $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$.', 'O sistema é de <strong>base 10</strong>: agrupamos de $10$ em $10$.', '$10$ unidades formam $1$ dezena; $10$ dezenas formam $1$ centena; $10$ centenas formam $1$ unidade de milhar.'], '1.12rem'),
          fig: P.figura('blocos', 'Ilustração original: unidade, dezena e centena.', '320px') + tbl(['Agrupamento', 'Resultado'], [['$10$ unidades', '$1$ dezena'], ['$10$ dezenas', '$1$ centena'], ['$10$ centenas', '$1$ unidade de milhar']]) },
        { titulo: 'O valor depende da posição', html: checks(['O mesmo algarismo vale coisas diferentes: em $222$, os três “2” valem $200$, $20$ e $2$.', 'Cada posição vale $10$ vezes a posição à direita.', 'Por isso o sistema é chamado de <strong>posicional</strong>.'], '1.12rem'),
          fig: tbl(['C', 'D', 'U'], [['<strong>2</strong>', '<strong>2</strong>', '<strong>2</strong>'], ['$200$', '$20$', '$2$']]) },
        { titulo: 'O papel do zero', html: checks(['O zero <strong>ocupa uma posição vazia</strong>: em $305$ não há dezenas, mas a posição existe.', 'Sem o zero, $305$ viraria $35$, outro número.', 'O zero à esquerda não muda o valor: $0305 = 305$.'], '1.12rem'),
          fig: callout('Decomposição de 305', '$305 = 3 · 100 + 0 · 10 + 5 · 1$', 'primary') }
      ],
      exemplos: [
        { titulo: 'Valor de cada algarismo', enun: `Qual é o valor de cada algarismo no número ${sp(4072)}?`, passos: [['Escreva no quadro de ordens', 'UM = 4; C = 0; D = 7; U = 2.'], ['Valor do 4', 'Está na unidade de milhar: $4 · 1000 = 4000$.'], ['Valor do 0', 'Está na centena: $0 · 100 = 0$.'], ['Valor do 7 e do 2', '$7 · 10 = 70$ e $2 · 1 = 2$.']], resposta: '$4072 = 4000 + 0 + 70 + 2$', verif: 'A soma $4000 + 70 + 2$ volta ao número $4072$.', fig: quadro(4072) },
        { titulo: 'Do valor ao número', enun: 'Escreva o número formado por $5$ centenas, $0$ dezenas e $3$ unidades.', passos: [['Posição das centenas', '$5$ centenas ⇒ algarismo $5$.'], ['Posição das dezenas', '$0$ dezenas ⇒ algarismo $0$ (a posição não pode ficar vazia).'], ['Posição das unidades', '$3$ unidades ⇒ algarismo $3$.']], resposta: 'O número é <strong>503</strong>.', verif: '$5 · 100 + 0 · 10 + 3 = 503$ ✓.', fig: quadro(503, ['C', 'D', 'U']) }
      ],
      guiada: { titulo: 'No número 2 408…', enun: `No número ${sp(2408)}, qual é o valor do algarismo $4$? E o do algarismo $8$?`, dicas: ['Monte o quadro: UM, C, D, U.', 'O $4$ está na terceira posição da direita para a esquerda: são centenas.', 'O $8$ está na primeira posição: unidades.'], resolucao: 'O $4$ vale $400$ (centenas) e o $8$ vale $8$ (unidades). Ou seja, $2408 = 2000 + 400 + 0 + 8$.', fig: quadro(2408) },
      pratica: [
        ['Em $7 316$, o algarismo $3$ vale:', ['$3$', '$30$', '$300$', '$3000$'], 2, 'O $3$ está na centena: $300$.'],
        ['O número formado por $2$ unidades de milhar, $0$ centenas, $5$ dezenas e $1$ unidade é:', ['$2501$', '$2051$', '$2510$', '$251$'], 1, 'UM=2, C=0, D=5, U=1 ⇒ $2051$.'],
        ['Quantos algarismos diferentes existem no sistema decimal?', ['$8$', '$9$', '$10$', '$12$'], 2, 'De $0$ a $9$: dez algarismos.'],
        ['Qual é a decomposição de $608$?', ['$600 + 8$', '$60 + 8$', '$6 + 0 + 8$', '$600 + 80$'], 0, '$608 = 6 · 100 + 0 · 10 + 8 = 600 + 8$.']
      ],
      sintese: { ideias: [['Algarismos', 'Dez símbolos, de $0$ a $9$, e base $10$.'], ['Posição', 'O valor do algarismo depende da posição.'], ['Zero', 'Ocupa a posição vazia e muda o número.']], pergunta: 'Explique, com as suas palavras, por que $305$ e $35$ são números diferentes.', retomada: 'Voltando ao mercado: com dez símbolos e posições, escrevemos desde R$ 7 até R$ 1.250.' },
      saida: [{ q: 'O valor do algarismo $9$ em $9 204$ é:', o: ['$9$', '$90$', '$900$', '$9000$'], a: 3 }, { q: 'O número $4030$ tem zero em quais ordens?', o: ['centena e unidade', 'dezena e unidade', 'somente na centena', 'somente na unidade'], a: 0 }, { q: 'O sistema decimal tem base:', o: ['$2$', '$5$', '$10$', '$20$'], a: 2 }]
    },
    // ============================================================ aula 02
    {
      slug: 'caracteristicas-do-sistema-de-numeracao-decimal-ii', titulo: 'Características do sistema de numeração decimal II',
      h1: `Valor absoluto, ${co('primary')}valor relativo</span> e decomposição`,
      pergunta: 'O odômetro de um carro marca 12 479 km. Se o carro rodar mais 1 000 km, quais algarismos mudam?',
      cena: 'odometro', legenda: 'Ilustração original: odômetro com seis dígitos.', badges: [['absoluto × relativo'], ['decomposição', 'growth'], ['comparação', 'decay']],
      previos: { texto: 'Você já viu números no odômetro, no relógio digital e na conta do mercado. Cada algarismo tem uma “função” na posição em que está.', mini: ['No número $2 537$, o algarismo $5$ está na ordem das:', ['unidades', 'dezenas', 'centenas', 'unidades de milhar'], 2, '$5$ está na terceira ordem: centenas.'], dupla: 'Quem é maior: $4 999$ ou $5 000$? Como você decidiu?' },
      objetivos: ['Diferenciar <strong>valor absoluto</strong> e <strong>valor relativo</strong>.', '<strong>Decompor</strong> números naturais de duas formas.', '<strong>Comparar</strong> números naturais usando as ordens.'],
      dica: 'Valor absoluto é o do algarismo “sozinho”; valor relativo é o que ele vale na <strong>posição</strong> em que está.',
      explicacao: [
        { titulo: 'Valor absoluto e valor relativo', html: checks(['<strong>Valor absoluto:</strong> o próprio algarismo (em $472$, o $7$ vale $7$).', '<strong>Valor relativo:</strong> o valor pela posição (em $472$, o $7$ vale $70$).', 'O valor relativo é o <strong>algarismo × valor da ordem</strong>.'], '1.12rem'),
          fig: tbl(['Número', 'Algarismo', 'Absoluto', 'Relativo'], [['$472$', '$7$', '$7$', '$70$'], ['$3 805$', '$8$', '$8$', '$800$']]) },
        { titulo: 'Decomposição aditiva e multiplicativa', html: checks(['<strong>Aditiva:</strong> $2 537 = 2000 + 500 + 30 + 7$.', '<strong>Multiplicativa:</strong> $2 537 = 2 · 1000 + 5 · 100 + 3 · 10 + 7 · 1$.', 'As duas formas dizem a mesma coisa; a segunda mostra as ordens.'], '1.12rem'),
          fig: callout('Para lembrar', 'Decompor é separar o número nas suas ordens.', 'primary') },
        { titulo: 'Comparando números naturais', html: checks(['Mais algarismos ⇒ número <strong>maior</strong> ($1 000 > 999$).', 'Mesma quantidade de algarismos: compare da <strong>esquerda para a direita</strong>, a primeira diferença decide.', 'Exemplo: $4 829$ e $4 791$ ⇒ iguais em $4$; centenas $8 > 7$ ⇒ $4 829 > 4 791$.'], '1.12rem'),
          fig: tbl(['Comparação', 'Símbolo'], [['$5 000$ e $4 999$', '$5000 > 4999$'], ['$320$ e $3 200$', '$320 < 3200$']]) }
      ],
      exemplos: [
        { titulo: 'Absoluto ou relativo?', enun: 'No número $6 419$, qual é o valor absoluto e o valor relativo do algarismo $4$?', passos: [['Localize o $4$', 'Está na ordem das centenas.'], ['Valor absoluto', 'O algarismo sozinho: $4$.'], ['Valor relativo', '$4 · 100 = 400$.']], resposta: 'Valor absoluto <strong>4</strong>; valor relativo <strong>400</strong>.', verif: 'O relativo vale $100$ vezes o absoluto, como a ordem das centenas pede.' },
        { titulo: 'Ordenando', enun: 'Coloque em ordem crescente: $3 420$, $3 042$ e $3 402$.', passos: [['Mesma quantidade de algarismos', 'Todos têm $4$ algarismos.'], ['Compare da esquerda', 'Todos começam com $3$; olhe a centena: $4$, $0$ e $4$.'], ['Desempate', '$3 042$ tem centena $0$ (menor). Entre $3 420$ e $3 402$, a dezena: $2 > 0$.']], resposta: '$3 042 < 3 402 < 3 420$.', verif: 'Lendo: três mil e quarenta e dois; três mil quatrocentos e dois; três mil quatrocentos e vinte.' }
      ],
      guiada: { titulo: 'Decomponha', enun: 'Escreva $8 036$ na forma $8 · 1000 + … + 6 · 1$.', dicas: ['Quais ordens estão presentes? UM = 8; C = 0; D = 3; U = 6.', 'A centena é $0$: o termo $0 · 100$ vale zero.', 'Falta o termo das dezenas: $3 · 10$.'], resolucao: '$8036 = 8 · 1000 + 0 · 100 + 3 · 10 + 6 · 1 = 8000 + 30 + 6$.' },
      pratica: [
        ['Em $9 158$, o valor relativo do $1$ é:', ['$1$', '$10$', '$100$', '$1000$'], 2, 'O $1$ está na centena: $100$.'],
        ['Qual decomposição de $4 507$ está correta?', ['$4000 + 500 + 7$', '$4000 + 50 + 7$', '$400 + 500 + 7$', '$4000 + 500 + 70$'], 0, '$4 507 = 4000 + 500 + 0 + 7$.'],
        ['O maior número entre $6 120$, $6 102$ e $6 210$ é:', ['$6 120$', '$6 102$', '$6 210$', 'são iguais'], 2, 'Todos começam por $6$; a centena $2$ de $6 210$ é a maior.'],
        ['Comparando $5099$ e $5100$, o sinal correto é:', ['$5099 > 5100$', '$5099 < 5100$', '$5099 = 5100$', 'não dá para comparar'], 1, '$5099 < 5100$: a centena $0 < 1$.']
      ],
      sintese: { ideias: [['Absoluto × relativo', 'Absoluto é o algarismo; relativo é o valor pela posição.'], ['Decomposição', 'Separar o número em suas ordens, somando ou multiplicando.'], ['Comparação', 'Mais algarismos é maior; senão, compare da esquerda.']], pergunta: 'No odômetro, ao somar $1 000$ km a $12 479$, qual algarismo muda e por quê?', retomada: 'Somar $1000$ muda a ordem das unidades de milhar: $12 479 → 13 479$.' },
      saida: [{ q: 'O valor relativo do $5$ em $15 230$ é:', o: ['$5$', '$50$', '$500$', '$5000$'], a: 3 }, { q: 'Na decomposição de $7305$ em $7000 + (termo) + 5$, o termo é:', o: ['$30$', '$300$', '$3000$', '$3$'], a: 1 }, { q: 'Qual é o maior?', o: ['$9 899$', '$9 900$', '$9 890$', '$9 089$'], a: 1 }]
    },
    // ============================================================ aula 03
    {
      slug: 'sistema-de-numeracao-decimal-ordens-e-classes-i', titulo: 'Sistema de numeração decimal: ordens e classes I',
      h1: `Ordens e ${co('primary')}classes:</span> lendo números grandes`,
      pergunta: 'Uma cidade tem 2 000 000 de habitantes. Como lemos esse número, e por que ele é escrito com espaços?',
      cena: 'cidade', legenda: 'Ilustração original: uma cidade grande.', badges: [['ordens'], ['classes', 'growth'], ['milhares e milhões', 'decay']],
      previos: { texto: 'Notícias falam de populações, distâncias e orçamentos com números enormes. Existe um jeito de ler qualquer um deles.', mini: ['Quantas dezenas há em $100$ unidades?', ['$1$', '$10$', '$100$', '$1000$'], 1, '$100 ÷ 10 = 10$ dezenas.'], dupla: 'Por que separamos os algarismos em grupos de três (ex.: $45 302$)?' },
      objetivos: ['Identificar as <strong>ordens</strong> de um número natural.', 'Reconhecer as <strong>classes</strong> (unidades simples, milhares, milhões).', '<strong>Ler</strong> números até a classe dos milhões.'],
      dica: 'Separe o número em grupos de <strong>3 algarismos</strong>, da direita para a esquerda. Cada grupo é uma classe.',
      explicacao: [
        { titulo: 'Ordens: da direita para a esquerda', html: checks(['<strong>1ª ordem:</strong> unidades. <strong>2ª:</strong> dezenas. <strong>3ª:</strong> centenas.', '<strong>4ª:</strong> unidades de milhar. <strong>5ª:</strong> dezenas de milhar. <strong>6ª:</strong> centenas de milhar.', '<strong>7ª:</strong> unidades de milhão, e assim por diante.'], '1.12rem'),
          fig: tbl(['Ordem', 'Nome'], [['1ª', 'unidade'], ['2ª', 'dezena'], ['3ª', 'centena'], ['4ª', 'unidade de milhar'], ['5ª', 'dezena de milhar'], ['6ª', 'centena de milhar']]) },
        { titulo: 'Classes: grupos de três ordens', html: checks(['<strong>Classe das unidades simples:</strong> unidades, dezenas, centenas.', '<strong>Classe dos milhares:</strong> unidades, dezenas e centenas de milhar.', '<strong>Classe dos milhões:</strong> unidades, dezenas e centenas de milhão.'], '1.12rem'),
          fig: tbl(['Milhões', 'Milhares', 'Unidades simples'], [['2', '000', '000']]) + '<p class="hint" style="text-align:center;">2 000 000 = dois milhões</p>' },
        { titulo: 'Como ler um número', html: checks(['Leia cada classe da esquerda para a direita, dizendo o nome da classe.', '$45 302$: <strong>quarenta e cinco mil, trezentos e dois</strong>.', 'Classe com $000$ não é lida: $2 000 000$ = dois milhões.'], '1.12rem'),
          fig: callout('Exemplo', '$3 420 150$ = três milhões, quatrocentos e vinte mil, cento e cinquenta.', 'primary') }
      ],
      exemplos: [
        { titulo: 'Separando em classes', enun: 'Separe em classes e leia: $7405120$.', passos: [['Grupos de 3 da direita', '$7 405 120$.'], ['Classe dos milhões', '$7$ ⇒ sete milhões.'], ['Classe dos milhares', '$405$ ⇒ quatrocentos e cinco mil.'], ['Unidades simples', '$120$ ⇒ cento e vinte.']], resposta: '<strong>Sete milhões, quatrocentos e cinco mil, cento e vinte.</strong>', verif: 'Ao reescrever: $7 000 000 + 405 000 + 120 = 7 405 120$ ✓.' },
        { titulo: 'Qual a ordem?', enun: 'No número $538 204$, em que ordem está o algarismo $3$?', passos: [['Conte da direita', '4 (1ª), 0 (2ª), 2 (3ª), 8 (4ª), 3 (5ª), 5 (6ª).'], ['Quinta ordem', 'Dezena de milhar.']], resposta: 'O $3$ está na ordem das <strong>dezenas de milhar</strong>.', verif: 'Vale $3 · 10 000 = 30 000$.' }
      ],
      guiada: { titulo: 'Leia o número', enun: 'Como se lê $12 090$?', dicas: ['Separe em classes: $12$ e $090$.', 'A classe dos milhares é $12$.', 'A classe das unidades simples é $090$: noventa.'], resolucao: '<strong>Doze mil e noventa.</strong>' },
      pratica: [
        ['Em $652 301$, a classe dos milhares é:', ['$652$', '$301$', '$65$', '$2301$'], 0, 'Os três primeiros algarismos da esquerda formam $652$ (milhares).'],
        ['O número “quatro mil e cinquenta” é:', ['$4 500$', '$4 050$', '$450$', '$40 050$'], 1, '$4$ mil $+ 50 = 4 050$.'],
        ['No número $3 471 820$, o algarismo $4$ ocupa a:', ['centena de milhar', 'dezena de milhar', 'unidade de milhar', 'centena'], 0, 'Conte da direita: $0, 2, 8, 1, 7, 4$ ⇒ sexta ordem.'],
        ['Quantas classes tem o número $25 430 000$?', ['$2$', '$3$', '$4$', '$8$'], 1, 'Milhões, milhares e unidades simples: $3$ classes.']
      ],
      sintese: { ideias: [['Ordens', 'Posições dos algarismos, contadas da direita.'], ['Classes', 'Grupos de três ordens: simples, milhares, milhões.'], ['Leitura', 'Ler cada classe e dizer seu nome.']], pergunta: 'Escreva por extenso $2 000 000$ e diga quantas classes ele tem.', retomada: 'A cidade tem dois milhões de habitantes: classe dos milhões e duas classes com zeros.' },
      saida: [{ q: 'O número $18 045$ é lido:', o: ['dezoito mil e quarenta e cinco', 'cento e oitenta mil e quarenta e cinco', 'mil oitocentos e quarenta e cinco', 'dezoito e quarenta e cinco'], a: 0 }, { q: 'Um grupo de três ordens é chamado de:', o: ['classe', 'dezena', 'período inicial', 'posição'], a: 0 }, { q: 'Em $7 300 000$, o $7$ está na:', o: ['unidade de milhão', 'dezena de milhão', 'centena de milhar', 'unidade de milhar'], a: 0 }]
    },
    // ============================================================ aula 04
    {
      slug: 'sistema-de-numeracao-decimal-ordens-e-classes-ii', titulo: 'Sistema de numeração decimal: ordens e classes II',
      h1: `Escrevendo e ${co('primary')}comparando</span> números grandes`,
      pergunta: 'Um estádio recebeu 48 000 torcedores. Como escrevemos esse número por extenso e como o comparamos com outro, como 84 000?',
      cena: 'estadio', legenda: 'Ilustração original: estádio com torcida.', badges: [['escrever por extenso'], ['compor e decompor', 'growth'], ['sucessor e antecessor', 'decay']],
      previos: { texto: 'Você já sabe ler números até os milhões. Agora vamos escrevê-los, compará-los e encontrar o número seguinte e o anterior.', mini: ['O número “vinte e cinco mil e três” é:', ['$25 003$', '$25 030$', '$2 503$', '$250 003$'], 0, '$25$ mil e $3$ unidades: $25 003$.'], dupla: 'Qual é o número que vem depois de $9 999$? O que acontece com as ordens?' },
      objetivos: ['<strong>Escrever</strong> números por extenso e em algarismos.', '<strong>Compor e decompor</strong> números por ordens e classes.', 'Determinar o <strong>sucessor</strong> e o <strong>antecessor</strong>.'],
      dica: 'Para escrever em algarismos, vá classe por classe, completando com zeros as ordens que não aparecem.',
      explicacao: [
        { titulo: 'Do extenso aos algarismos', html: checks(['“Quarenta e oito mil” ⇒ $48 000$.', '“Três milhões e duzentos mil” ⇒ $3 200 000$.', 'Se uma ordem não é citada, ela vale $0$.'], '1.12rem'),
          fig: tbl(['Por extenso', 'Algarismos'], [['quarenta e oito mil', '$48 000$'], ['três milhões e duzentos mil', '$3 200 000$'], ['cem mil e cinco', '$100 005$']]) },
        { titulo: 'Compor e decompor por classes', html: checks(['$48 000 = 40 000 + 8 000$.', '$3 215 640 = 3 000 000 + 200 000 + 15 000 + 600 + 40$.', 'Decompor por classes: $3$ milhões, $215$ milhares e $640$ unidades.'], '1.12rem'),
          fig: callout('Composição', '$40 000 + 8 000 = 48 000$.', 'primary') },
        { titulo: 'Sucessor e antecessor', html: checks(['<strong>Sucessor</strong> de $n$: $n + 1$. <strong>Antecessor</strong>: $n − 1$.', 'Sucessor de $9 999$ é $10 000$ (muda a ordem de milhar).', 'O zero é o menor natural e <strong>não tem antecessor</strong> nos naturais.'], '1.12rem'),
          fig: tbl(['Antecessor', 'Número', 'Sucessor'], [['$8 999$', '$9 000$', '$9 001$'], ['$99 999$', '$100 000$', '$100 001$']]) }
      ],
      exemplos: [
        { titulo: 'Escrevendo em algarismos', enun: 'Escreva em algarismos: “dois milhões, trezentos e quinze mil e vinte e quatro”.', passos: [['Classe dos milhões', 'Dois milhões ⇒ $2$.'], ['Classe dos milhares', 'Trezentos e quinze mil ⇒ $315$.'], ['Unidades simples', 'Vinte e quatro ⇒ $024$ (completa com zero).']], resposta: '<strong>2 315 024</strong>.', verif: 'Lendo de volta: dois milhões, trezentos e quinze mil e vinte e quatro ✓.' },
        { titulo: 'Sucessor e antecessor', enun: 'Qual é o sucessor e o antecessor de $60 000$?', passos: [['Sucessor', '$60 000 + 1 = 60 001$.'], ['Antecessor', '$60 000 − 1 = 59 999$ (a ordem de milhar muda).']], resposta: 'Sucessor <strong>60 001</strong>; antecessor <strong>59 999</strong>.', verif: 'Entre $59 999$ e $60 000$ a diferença é $1$ ✓.' }
      ],
      guiada: { titulo: 'Compare', enun: 'Qual é maior: $48 000$ ou $84 000$? Qual a diferença entre eles?', dicas: ['Mesma quantidade de algarismos: compare da esquerda.', 'Primeiro algarismo: $4$ e $8$.', 'A diferença é $84 000 − 48 000$.'], resolucao: '$84 000 > 48 000$ e a diferença é $36 000$.' },
      pratica: [
        ['O número “cinquenta mil e dois” é:', ['$5 002$', '$50 002$', '$50 020$', '$500 002$'], 1, '$50$ mil e $2$ unidades: $50 002$.'],
        ['O antecessor de $100 000$ é:', ['$99 990$', '$99 999$', '$100 001$', '$10 000$'], 1, '$100 000 − 1 = 99 999$.'],
        ['Qual decomposição está correta para $5 204 000$?', ['$5 000 000 + 204 000$', '$5 000 000 + 24 000$', '$500 000 + 204 000$', '$5 000 000 + 2 040$'], 0, 'Cinco milhões e duzentos e quatro mil.'],
        ['Em ordem decrescente, $12 300$, $12 030$ e $13 000$ ficam:', ['$13 000, 12 300, 12 030$', '$12 030, 12 300, 13 000$', '$12 300, 13 000, 12 030$', '$13 000, 12 030, 12 300$'], 0, 'O maior começa por $13$; depois $12 300 > 12 030$.']
      ],
      sintese: { ideias: [['Extenso ↔ algarismos', 'Traduza classe por classe; ordem não citada vale zero.'], ['Composição', 'Some as partes de cada classe.'], ['Sucessor e antecessor', '$+1$ e $−1$; o zero não tem antecessor nos naturais.']], pergunta: 'Escreva por extenso $48 000$ e compare com $84 000$.', retomada: 'No estádio: quarenta e oito mil é menor que oitenta e quatro mil.' },
      saida: [{ q: 'O sucessor de $199 999$ é:', o: ['$200 000$', '$199 990$', '$200 999$', '$1 000 000$'], a: 0 }, { q: '“Um milhão e duzentos mil” é:', o: ['$1 200 000$', '$1 020 000$', '$12 000 000$', '$120 000$'], a: 0 }, { q: 'O menor número natural é:', o: ['$0$', '$1$', '$10$', 'não existe'], a: 0 }]
    }
  ]
});
