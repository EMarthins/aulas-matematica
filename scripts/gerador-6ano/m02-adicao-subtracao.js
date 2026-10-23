// Módulo · Matemática · 6º ano · 1º trimestre — Adição e subtração de números naturais (aulas 07 a 11 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo. Em math, "${a|b}" só dentro de aspas simples.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const { co } = require('./util.js');

module.exports = unidade({
  materia: 'matematica', ano: '6° Ano', tri: 1, pasta: 'aulas/6-ano/1-tri/adicao-e-subtracao-de-numeros-naturais/',
  titulo: 'Adição e subtração de números naturais', accent: 'growth', icon: 'adicao-subtracao', key: 'm6m02', keyp: 'm6', area: 'Matemática · 6º ano',
  refs: ['Aulas 07 a 11 do plano de Matemática do 6º ano (1º trimestre) do RCO/NRE, reescritas e ampliadas com problemas originais.', 'Exercícios e problemas originais (estilo SAEB); questões de provas oficiais só quando citadas.'],
  aulas: [
    // ------------------------------------------------------------ aula 07
    {
      slug: 'processos-de-adicao', titulo: 'Processos de adição',
      h1: `${co('growth')}Adição:</span> juntar quantidades de vários jeitos`,
      sub: 'Somar é juntar. Veja o algoritmo com reagrupamento, a decomposição e o cálculo mental.',
      badges: [['parcela + parcela'], ['reagrupar', 'growth'], ['estimar', 'decay']], color: 'growth',
      roteiro: ['Da cantina da escola ao algoritmo da adição.', [['Somar é juntar', 'parcelas e soma', 'target'], ['Algoritmo', 'unidade com unidade, dezena com dezena', 'calc'], ['Reagrupar', 'quando passa de $9$', 'bulb'], ['Cálculo mental e estimativa', 'arredondar para conferir', 'scale']]],
      objetivos: ['Efetuar adições <strong>com e sem reagrupamento</strong>.', 'Usar a <strong>decomposição</strong> e o <strong>cálculo mental</strong>.', 'Fazer uma <strong>estimativa</strong> para conferir o resultado.'],
      dica: 'Alinhe sempre <strong>unidade com unidade</strong>, dezena com dezena, centena com centena.',
      gancho: { titulo: 'A cantina da escola', texto: 'Na cantina, em um dia, foram vendidos $128$ pães e $95$ sucos. Quantos itens foram vendidos ao todo?', mini: ['O total de itens vendidos foi:', ['$213$', '$223$', '$233$', '$1 223$'], 1, '$128 + 95 = 223$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · o algoritmo', 'Parcelas, soma e reagrupamento', g2(`<div>
              ${checks(['Os números que se juntam são as <strong>parcelas</strong>; o resultado é a <strong>soma</strong> (ou total).', 'Escreva um número embaixo do outro, alinhando as <strong>ordens</strong> (unidades, dezenas, centenas).', 'Some da <strong>direita para a esquerda</strong>.', 'Se uma ordem passar de $9$, <strong>reagrupe</strong>: $10$ unidades viram $1$ dezena, e assim por diante.'])}
            </div>`, card(`<strong>$128 + 95$ passo a passo</strong>${tbl(['Ordem', 'Conta', 'Resultado'], [['Unidades', '$8 + 5 = 13$', 'fica $3$, vai $1$'], ['Dezenas', '$2 + 9 + 1 = 12$', 'fica $2$, vai $1$'], ['Centenas', '$1 + 0 + 1 = 2$', 'fica $2$']])}<p class="hint" style="margin-top:8px;">Soma: $223$.</p>`, 'growth'))],
        ['Teoria · outros jeitos', 'Decomposição, cálculo mental e estimativa', g2(`<div>
              ${checks(['<strong>Decomposição:</strong> $128 + 95 = 100 + 20 + 8 + 90 + 5 = 223$.', '<strong>Cálculo mental:</strong> $128 + 95 = 128 + 100 − 5 = 223$.', '<strong>Estimativa:</strong> arredonde para conferir. $128 ≈ 130$ e $95 ≈ 100$: a soma fica perto de $230$.'])}
            </div>`, callout('Conferindo', 'Se a conta exata deu muito diferente da estimativa, <strong>refaça</strong>: provavelmente houve erro de reagrupamento.', 'growth'))]
      ],
      exemplos: [
        ['Com reagrupamento', 'Calcule $487 + 356$.', [['Unidades', '$7 + 6 = 13$: fica $3$ e vai $1$.'], ['Dezenas', '$8 + 5 + 1 = 14$: fica $4$ e vai $1$.'], ['Centenas', '$4 + 3 + 1 = 8$.']], '$487 + 356 = 843$.'],
        ['Cálculo mental', 'Calcule mentalmente $99 + 46$.', [['Arredonde', '$99$ é quase $100$: $100 + 46 = 146$.'], ['Compense', 'Como somou $1$ a mais, tire $1$: $146 − 1$.']], '$99 + 46 = 145$.']
      ],
      pratique: [
        ['Sem reagrupar', 'O valor de $234 + 125$ é:', ['$349$', '$359$', '$369$', '$459$'], 1, '$234 + 125 = 359$. <strong>Alternativa B.</strong>'],
        ['Reagrupando', 'O valor de $576 + 248$ é:', ['$714$', '$724$', '$814$', '$824$'], 3, '$6 + 8 = 14$ (vai $1$); $7 + 4 + 1 = 12$ (vai $1$); $5 + 2 + 1 = 8$. Soma: $824$. <strong>Alternativa D.</strong>'],
        ['Estimativa', 'Para estimar $398 + 205$, o melhor arredondamento é:', ['$300 + 200$', '$400 + 200$', '$400 + 300$', '$390 + 250$'], 1, '$398 ≈ 400$ e $205 ≈ 200$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O ingresso do show', 'Em uma rifa foram vendidas $1 450$ cartelas na primeira semana e $875$ na segunda. Quantas cartelas foram vendidas nas duas semanas?', ['$2 225$', '$2 325$', '$2 335$', '$2 425$'], 1, '$1 450 + 875 = 2 325$. <strong>Alternativa B.</strong>'],
      cuidados: [['Desalinhar as ordens', 'Unidade com unidade, dezena com dezena: números de tamanhos diferentes se alinham pela <strong>direita</strong>.'], ['Esquecer o que "vai"', 'Anote o que vai para a ordem seguinte e some junto.'], ['Não conferir', 'Faça uma estimativa: o resultado exato não pode ficar longe dela.']],
      quiz: [
        { q: 'O resultado de $605 + 297$ é:', o: ['$802$', '$892$', '$902$', '$912$'], a: 2 },
        { q: 'Na adição, os números que se somam chamam-se:', o: ['fatores', 'parcelas', 'quocientes', 'restos'], a: 1 },
        { q: 'Se uma ordem soma $13$, o que se faz?', o: ['escreve $13$ naquela ordem', 'fica $3$ e vai $1$ para a ordem seguinte', 'fica $1$ e vai $3$', 'ignora o $1$'], a: 1 },
        { q: 'Uma boa estimativa para $89 + 112$ é:', o: ['$150$', '$200$', '$300$', '$20$'], a: 1 }
      ],
      sintese: [['Algoritmo', 'Alinhe as ordens e some da direita para a esquerda, reagrupando.'], ['Outros jeitos', 'Decomposição e cálculo mental compensando.'], ['Conferir', 'Estimativa por arredondamento.']],
      msg: 'Na próxima aula você vai conhecer as propriedades da adição para calcular mais rápido.'
    },
    // ------------------------------------------------------------ aula 08
    {
      slug: 'propriedades-da-adicao', titulo: 'Adição: propriedades',
      h1: `Propriedades da ${co('primary')}adição:</span> calcular mais rápido`,
      sub: 'Trocar a ordem, agrupar de outro jeito e usar o zero: as propriedades simplificam as contas.',
      badges: [['comutativa'], ['associativa', 'growth'], ['elemento neutro', 'decay']], color: 'primary',
      roteiro: ['Do jogo de cartas às propriedades da adição.', [['Comutativa', 'a ordem não muda a soma', 'scale'], ['Associativa', 'agrupar como convém', 'link'], ['Elemento neutro', 'somar zero', 'target'], ['Cálculo esperto', 'formar dezenas e centenas', 'bulb']]],
      objetivos: ['Reconhecer as propriedades <strong>comutativa</strong>, <strong>associativa</strong> e do <strong>elemento neutro</strong>.', 'Usá-las para <strong>calcular de forma mais rápida</strong>.', 'Saber que a soma de dois naturais é sempre um natural.'],
      dica: 'Procure parcelas que somam <strong>$10$, $100$ ou $1 000$</strong>: elas facilitam a conta.',
      gancho: { titulo: 'O jogo de cartas', texto: 'Em um jogo, Lia fez $18$ pontos na primeira rodada e $27$ na segunda. Teo fez $27$ na primeira e $18$ na segunda. Quem fez mais pontos?', mini: ['Os dois fizeram:', ['$45$ pontos, empatados', '$46$ pontos, empatados', 'Lia fez mais', 'Teo fez mais'], 0, '$18 + 27 = 27 + 18 = 45$: a ordem não muda a soma. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · as propriedades', 'Comutativa, associativa e elemento neutro', g2(`<div>
              ${checks(['<strong>Comutativa:</strong> $a + b = b + a$. Trocar a ordem das parcelas não muda a soma.', '<strong>Associativa:</strong> $(a + b) + c = a + (b + c)$. Podemos agrupar como quisermos.', '<strong>Elemento neutro:</strong> $a + 0 = a$. O zero não altera a soma.', '<strong>Fechamento:</strong> a soma de dois números naturais é sempre um número natural.'])}
            </div>`, card(`<strong>Exemplos</strong>
              <p style="font-size:.9rem;margin-top:8px;">$15 + 40 = 40 + 15 = 55$</p>
              <p style="font-size:.9rem;">$(7 + 8) + 2 = 7 + (8 + 2) = 17$</p>
              <p style="font-size:.9rem;">$312 + 0 = 312$</p>`, 'primary'))],
        ['Teoria · cálculo esperto', 'Formando dezenas e centenas', g2(`<div>
              ${checks(['Combine as parcelas que <strong>fecham dezenas</strong>: $6 + 4$, $7 + 3$, $8 + 2$…', 'Ou que fecham <strong>centenas</strong>: $30 + 70$, $45 + 55$…', 'Exemplo: $38 + 15 + 62 = (38 + 62) + 15 = 100 + 15 = 115$.'])}
            </div>`, callout('Atenção', 'A <strong>subtração não é comutativa</strong>: $9 − 4 ≠ 4 − 9$ (e $4 − 9$ nem existe entre os naturais). As propriedades desta aula valem para a adição.', 'growth'))]
      ],
      exemplos: [
        ['Associativa na prática', 'Calcule $38 + 15 + 62$ do jeito mais fácil.', [['Procure parcelas que fecham centena', '$38 + 62 = 100$.'], ['Reagrupe', '$(38 + 62) + 15$.'], ['Some', '$100 + 15 = 115$.']], '$38 + 15 + 62 = 115$.'],
        ['Qual propriedade?', 'Indique a propriedade usada em $(25 + 17) + 3 = 25 + (17 + 3)$ e calcule.', [['Observe', 'Mudou o <strong>agrupamento</strong> das parcelas, não a ordem.'], ['Nome', 'Propriedade <strong>associativa</strong>.'], ['Calcule', '$25 + 20 = 45$.']], 'Associativa; o resultado é $45$.']
      ],
      pratique: [
        ['Comutativa', 'Qual igualdade mostra a propriedade comutativa?', ['$8 + 0 = 8$', '$12 + 5 = 5 + 12$', '$(2 + 3) + 4 = 2 + (3 + 4)$', '$7 − 3 = 3 − 7$'], 1, 'Trocar a ordem das parcelas: $12 + 5 = 5 + 12$. <strong>Alternativa B.</strong>'],
        ['Elemento neutro', 'O valor de $n$ em $n + 0 = 479$ é:', ['$0$', '$479$', '$480$', '$4 790$'], 1, 'Somar zero não altera: $n = 479$. <strong>Alternativa B.</strong>'],
        ['Cálculo esperto', 'O valor de $46 + 27 + 54$ é:', ['$117$', '$127$', '$137$', '$147$'], 1, '$(46 + 54) + 27 = 100 + 27 = 127$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O álbum de figurinhas', 'Duda colou $64$ figurinhas na primeira página, $18$ na segunda e $36$ na terceira. Agrupando $64$ com $36$ para facilitar, quantas figurinhas ela colou ao todo?', ['$108$', '$118$', '$128$', '$98$'], 1, '$(64 + 36) + 18 = 100 + 18 = 118$. <strong>Alternativa B.</strong>'],
      cuidados: [['Achar que vale para a subtração', 'A subtração <strong>não</strong> é comutativa nem associativa.'], ['Confundir comutativa com associativa', 'Comutativa: <strong>troca a ordem</strong>. Associativa: <strong>muda o agrupamento</strong>.'], ['Esquecer parênteses', 'Os parênteses indicam o que se calcula primeiro.']],
      quiz: [
        { q: 'A propriedade que diz $a + b = b + a$ é a:', o: ['associativa', 'comutativa', 'distributiva', 'do elemento neutro'], a: 1 },
        { q: 'O elemento neutro da adição é:', o: ['$1$', '$10$', '$0$', '$100$'], a: 2 },
        { q: 'O valor de $25 + 48 + 75$ é:', o: ['$138$', '$148$', '$158$', '$168$'], a: 1 },
        { q: 'A soma de dois números naturais é:', o: ['sempre natural', 'às vezes negativa', 'sempre menor que as parcelas', 'sempre par'], a: 0 }
      ],
      sintese: [['Comutativa', 'a + b = b + a.'], ['Associativa', '(a + b) + c = a + (b + c).'], ['Elemento neutro', 'a + 0 = a.']],
      msg: 'Na próxima aula você vai estudar a subtração e suas ideias: retirar, comparar e completar.'
    },
    // ------------------------------------------------------------ aula 09
    {
      slug: 'subtracao-ideias-associadas', titulo: 'Subtração: ideias associadas',
      h1: `${co('decay')}Subtração:</span> retirar, comparar e completar`,
      sub: 'Subtrair não é só tirar. A subtração também compara quantidades e descobre quanto falta.',
      badges: [['retirar'], ['comparar', 'growth'], ['completar', 'decay']], color: 'decay',
      roteiro: ['Do mercado ao algoritmo da subtração.', [['Retirar', 'o que sobrou', 'down'], ['Comparar', 'a diferença entre dois valores', 'scale'], ['Completar', 'quanto falta', 'target'], ['Algoritmo', 'com empréstimo de ordem', 'calc']]],
      objetivos: ['Reconhecer as ideias de <strong>retirar</strong>, <strong>comparar</strong> e <strong>completar</strong>.', 'Efetuar subtrações <strong>com e sem reagrupamento</strong>.', 'Identificar <strong>minuendo</strong>, <strong>subtraendo</strong> e <strong>resto</strong>.'],
      dica: 'Antes de calcular, pergunte: o problema pede o que <strong>sobrou</strong>, a <strong>diferença</strong> ou o que <strong>falta</strong>?',
      gancho: { titulo: 'Três perguntas, uma conta', texto: 'Ana tem $50$ figurinhas e Bia tem $32$. (1) Ana deu $32$ à irmã: com quantas ficou? (2) Quantas Ana tem a mais que Bia? (3) Quantas faltam para Bia ter as mesmas figurinhas que Ana? Todas usam a conta $50 − 32$.', mini: ['O valor de $50 − 32$ é:', ['$18$', '$28$', '$22$', '$82$'], 0, '$50 − 32 = 18$. <strong>Alternativa A.</strong>'] },
      teoria: [
        ['Teoria · três ideias', 'Retirar, comparar e completar', g2(`<div>
              ${checks(['<strong>Retirar:</strong> tinha $50$, tirou $32$, restam $18$.', '<strong>Comparar:</strong> $50$ é $18$ a mais que $32$ — a <strong>diferença</strong>.', '<strong>Completar:</strong> de $32$ para $50$ faltam $18$.', 'Nomes: <strong>minuendo</strong> (quem perde), <strong>subtraendo</strong> (o que sai) e <strong>resto</strong> ou diferença.'])}
            </div>`, card(`<strong>Os nomes da conta</strong>
              <p style="font-size:.95rem;margin-top:8px;">$50 − 32 = 18$</p>
              ${tbl(['Número', 'Nome'], [['$50$', 'minuendo'], ['$32$', 'subtraendo'], ['$18$', 'resto / diferença']])}`, 'decay'))],
        ['Teoria · o algoritmo', 'Subtraindo com reagrupamento', g2(`<div>
              ${checks(['Alinhe as ordens e subtraia da <strong>direita para a esquerda</strong>.', 'Se o número de cima for menor que o de baixo, <strong>desfaça uma dezena</strong> da ordem vizinha: ela vira $10$ unidades.', 'Exemplo: $42 − 17$. Em $2 − 7$ não dá: tire $1$ dezena de $4$ ($3$ dezenas ficam) e junte $10$ às unidades: $12 − 7 = 5$; depois $3 − 1 = 2$.'])}
            </div>`, callout('Resultado', '$42 − 17 = 25$. Confira somando: $25 + 17 = 42$.', 'growth'))]
      ],
      exemplos: [
        ['Subtração com reagrupamento', 'Calcule $500 − 238$.', [['Unidades', '$0 − 8$ não dá. A dezena e a centena estão em $0$: desfaça $1$ centena em $10$ dezenas e depois $1$ dezena em $10$ unidades.'], ['Unidades e dezenas', 'Ficam $10 − 8 = 2$ unidades e $9 − 3 = 6$ dezenas.'], ['Centenas', '$4 − 2 = 2$ centenas.']], '$500 − 238 = 262$.'],
        ['Qual ideia?', 'Rui tem $120$ reais e quer uma bicicleta de $175$ reais. Quanto falta?', [['Ideia', 'Falta completar: ideia de <strong>completar</strong>.'], ['Conta', '$175 − 120$.'], ['Resultado', '$55$.']], 'Faltam $55$ reais.']
      ],
      pratique: [
        ['Retirar', 'Em uma caixa havia $240$ ovos e se quebraram $65$. Quantos sobraram inteiros?', ['$165$', '$175$', '$185$', '$305$'], 1, '$240 − 65 = 175$. <strong>Alternativa B.</strong>'],
        ['Comparar', 'A escola A tem $1 200$ alunos e a escola B tem $950$. A diferença é de:', ['$150$', '$250$', '$350$', '$2 150$'], 1, '$1 200 − 950 = 250$. <strong>Alternativa B.</strong>'],
        ['Algoritmo', 'O valor de $803 − 457$ é:', ['$346$', '$356$', '$446$', '$1 260$'], 0, '$803 − 457 = 346$. <strong>Alternativa A.</strong>']
      ],
      enem: ['A viagem de ônibus', 'Uma viagem de $640$ km foi feita em duas etapas. Na primeira, o ônibus percorreu $275$ km. Quantos quilômetros faltam para completar a viagem?', ['$265$', '$365$', '$375$', '$915$'], 1, '$640 − 275 = 365$. <strong>Alternativa B.</strong>'],
      cuidados: [['Inverter os números', 'Em $a − b$, o <strong>maior</strong> vem primeiro (nos naturais).'], ['Subtrair "o menor do maior" por coluna', 'Em cada coluna a ordem é de cima menos o de baixo; se não dá, <strong>reagrupe</strong>.'], ['Esquecer o que foi emprestado', 'A ordem que cedeu fica com $1$ a menos.']],
      quiz: [
        { q: 'Na conta $90 − 45 = 45$, o número $90$ é o:', o: ['subtraendo', 'minuendo', 'resto', 'fator'], a: 1 },
        { q: 'O valor de $1 000 − 1$ é:', o: ['$1$', '$999$', '$990$', '$1 001$'], a: 1 },
        { q: 'Para saber quanto falta para $80$ chegar a $130$, calcula-se:', o: ['$80 + 130$', '$130 − 80$', '$80 − 130$', '$130 ÷ 80$'], a: 1 },
        { q: 'O valor de $72 − 38$ é:', o: ['$34$', '$44$', '$36$', '$110$'], a: 0 }
      ],
      sintese: [['Ideias', 'Retirar, comparar (diferença) e completar (quanto falta).'], ['Nomes', 'Minuendo − subtraendo = resto.'], ['Algoritmo', 'Da direita para a esquerda, desfazendo uma ordem quando não dá.']],
      msg: 'Na próxima aula você vai ver a relação fundamental: como conferir uma subtração somando.'
    },
    // ------------------------------------------------------------ aula 10
    {
      slug: 'subtracao-relacao-fundamental', titulo: 'Subtração: relação fundamental',
      h1: `${co('primary')}Subtração e adição:</span> operações inversas`,
      sub: 'A adição desfaz a subtração. Essa relação confere contas e ajuda a descobrir números desconhecidos.',
      badges: [['prova real'], ['operação inversa', 'growth'], ['incógnita', 'decay']], color: 'primary',
      roteiro: ['Da prova real ao número desconhecido.', [['Relação fundamental', 'resto + subtraendo = minuendo', 'link'], ['Prova real', 'conferir somando', 'check'], ['Número desconhecido', 'a conta com $x$', 'bulb'], ['Propriedades', 'o que não vale na subtração', 'scale']]],
      objetivos: ['Usar a <strong>relação fundamental</strong>: resto + subtraendo = minuendo.', 'Fazer a <strong>prova real</strong> da subtração.', 'Descobrir um <strong>termo desconhecido</strong> em adições e subtrações.'],
      dica: 'Subtrair é "desfazer" uma adição: se $18 + 32 = 50$, então $50 − 32 = 18$.',
      gancho: { titulo: 'A conta da cantina', texto: 'Na cantina, o lanche custou $27$ reais e Luca pagou com uma nota de $50$ reais. O troco foi de $23$ reais. Será que a conta está certa? Se estiver, $23 + 27$ deve dar o valor da nota.', mini: ['A soma $23 + 27$ vale:', ['$40$', '$50$', '$60$', '$4$'], 1, '$23 + 27 = 50$: o troco está certo. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · relação fundamental', 'Adição e subtração são inversas', g2(`<div>
              ${checks(['<strong>Relação fundamental:</strong> se $a − b = c$, então $c + b = a$.', '<strong>Prova real da subtração:</strong> some o resto ao subtraendo; deve dar o minuendo.', 'Uma subtração gera <strong>duas adições</strong>: $50 − 32 = 18$ ⇒ $18 + 32 = 50$ e $32 + 18 = 50$.'])}
            </div>`, card(`<strong>Família de contas</strong>
              <p style="font-size:.95rem;margin-top:8px;">$18 + 32 = 50$</p>
              <p style="font-size:.95rem;">$32 + 18 = 50$</p>
              <p style="font-size:.95rem;">$50 − 32 = 18$</p>
              <p style="font-size:.95rem;">$50 − 18 = 32$</p>`, 'primary'))],
        ['Teoria · termo desconhecido', 'Descobrindo o número que falta', g2(`<div>
              ${checks(['Em $x + 18 = 50$, falta uma <strong>parcela</strong>: $x = 50 − 18 = 32$.', 'Em $x − 18 = 50$, falta o <strong>minuendo</strong>: $x = 50 + 18 = 68$.', 'Em $50 − x = 18$, falta o <strong>subtraendo</strong>: $x = 50 − 18 = 32$.'])}
            </div>`, callout('Atenção', 'A subtração <strong>não é comutativa</strong> nem associativa: $10 − 4 − 3$ é diferente de $10 − (4 − 3)$.', 'growth'))]
      ],
      exemplos: [
        ['Prova real', 'Confira se $704 − 359 = 345$ está correto.', [['Relação', 'O resto mais o subtraendo deve dar o minuendo.'], ['Some', '$345 + 359 = 704$.'], ['Compare', 'O resultado é igual a $704$.']], 'A conta está <strong>correta</strong>.'],
        ['Número desconhecido', 'Em $x + 275 = 600$, qual é o valor de $x$?', [['Identifique', '$x$ é uma <strong>parcela</strong> desconhecida.'], ['Operação inversa', '$x = 600 − 275$.'], ['Calcule', '$600 − 275 = 325$.']], '$x = 325$. Confirma: $325 + 275 = 600$.']
      ],
      pratique: [
        ['Relação', 'Se $a − b = c$, então:', ['$a + b = c$', '$c + b = a$', '$c − b = a$', '$a + c = b$'], 1, 'O resto mais o subtraendo é o minuendo. <strong>Alternativa B.</strong>'],
        ['Termo desconhecido', 'O valor de $x$ em $x − 48 = 52$ é:', ['$4$', '$90$', '$100$', '$110$'], 2, '$x = 52 + 48 = 100$. <strong>Alternativa C.</strong>'],
        ['Prova real', 'Qual subtração está correta?', ['$300 − 125 = 185$', '$300 − 125 = 175$', '$300 − 125 = 225$', '$300 − 125 = 165$'], 1, '$175 + 125 = 300$. <strong>Alternativa B.</strong>']
      ],
      enem: ['O valor perdido', 'Após comprar um jogo por $89$ reais, Caio ficou com $46$ reais. Quanto ele tinha antes da compra?', ['$43$', '$125$', '$135$', '$145$'], 2, 'Antes: $x − 89 = 46$ ⇒ $x = 46 + 89 = 135$. <strong>Alternativa C.</strong>'],
      cuidados: [['Subtrair em vez de somar', 'Para achar o <strong>minuendo</strong>, some: $x − 18 = 50$ ⇒ $x = 50 + 18$.'], ['Achar que $a − b = b − a$', 'A subtração <strong>não é comutativa</strong>.'], ['Pular a prova real', 'Somar o resto ao subtraendo leva poucos segundos e evita erros.']],
      quiz: [
        { q: 'A prova real de $90 − 35 = 55$ é:', o: ['$55 − 35 = 90$', '$55 + 35 = 90$', '$90 + 35 = 55$', '$55 + 90 = 35$'], a: 1 },
        { q: 'O valor de $x$ em $x + 60 = 200$ é:', o: ['$140$', '$260$', '$120$', '$160$'], a: 0 },
        { q: 'O valor de $x$ em $200 − x = 60$ é:', o: ['$140$', '$260$', '$120$', '$160$'], a: 0 },
        { q: 'Qual igualdade é verdadeira?', o: ['$9 − 4 = 4 − 9$', '$9 − 4 = 5$', '$4 − 9 = 5$', '$9 − 4 = 13$'], a: 1 }
      ],
      sintese: [['Relação fundamental', 'Se $a − b = c$, então $c + b = a$.'], ['Prova real', 'Resto + subtraendo = minuendo.'], ['Termo desconhecido', 'Use a operação inversa.']],
      msg: 'Na próxima aula você vai resolver situações-problema que misturam adição e subtração.'
    },
    // ------------------------------------------------------------ aula 11
    {
      slug: 'adicao-e-subtracao-situacoes-problema', titulo: 'Adição e subtração: situações-problema',
      h1: `${co('growth')}Resolvendo problemas</span> com adição e subtração`,
      sub: 'Ler, planejar, calcular e conferir: um roteiro para qualquer problema com as duas operações.',
      badges: [['ler'], ['planejar', 'growth'], ['conferir', 'decay']], color: 'growth',
      roteiro: ['Do enunciado à resposta com segurança.', [['Ler com atenção', 'dados e pergunta', 'book'], ['Escolher a operação', 'juntar, retirar, comparar…', 'bulb'], ['Resolver em etapas', 'problemas de dois passos', 'target'], ['Conferir', 'estimativa e prova real', 'check']]],
      objetivos: ['Seguir um <strong>roteiro</strong> para resolver problemas.', 'Resolver problemas de <strong>uma e de duas etapas</strong>.', '<strong>Conferir</strong> a resposta com estimativa e prova real.'],
      dica: 'Releia a <strong>pergunta</strong> antes de responder: muitos erros são respostas à pergunta errada.',
      gancho: { titulo: 'A rifa da turma', texto: 'A turma do 6º ano vendeu $128$ cartelas na primeira semana e $175$ na segunda. A meta era $400$ cartelas. Quantas cartelas ainda faltam para a meta?', mini: ['Faltam:', ['$87$', '$97$', '$103$', '$303$'], 1, '$128 + 175 = 303$ e $400 − 303 = 97$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · o roteiro', 'Quatro passos para resolver', g2(`<div>
              ${checks(['<strong>1. Ler:</strong> destaque os dados e a pergunta.', '<strong>2. Planejar:</strong> escolha a operação (juntar → soma; retirar, comparar ou completar → subtração).', '<strong>3. Resolver:</strong> faça as contas, uma etapa de cada vez.', '<strong>4. Conferir:</strong> a resposta tem sentido? Faça estimativa ou prova real.'])}
            </div>`, card(`<strong>Palavras-pista</strong>${tbl(['Costuma indicar soma', 'Costuma indicar subtração'], [['ao todo, juntos, total', 'sobraram, restam, faltam'], ['acrescentou, ganhou', 'gastou, perdeu, tirou'], ['no total, somando', 'diferença, a mais, a menos']])}<p class="hint" style="margin-top:8px;">São pistas, não regras: sempre entenda a situação.</p>`, 'growth'))],
        ['Teoria · dois passos', 'Quando uma conta não basta', g2(`<div>
              ${checks(['Alguns problemas precisam de <strong>duas ou mais contas</strong>.', 'Anote o resultado de cada etapa e dê um <strong>nome</strong> a ele.', 'Exemplo: primeiro ache o total vendido; depois, quanto falta para a meta.'])}
            </div>`, callout('Dica', 'Desenhar um <strong>esquema</strong> (barras ou setas) ajuda a ver quais valores se juntam e quais se tiram.', 'growth'))]
      ],
      exemplos: [
        ['Problema de uma etapa', 'Uma loja tinha $350$ camisetas e vendeu $129$. Quantas restam?', [['Leia', 'Havia $350$; saíram $129$.'], ['Operação', 'Retirar: subtração.'], ['Calcule', '$350 − 129 = 221$.']], 'Restam $221$ camisetas. Prova real: $221 + 129 = 350$.'],
        ['Problema de duas etapas', 'Bia tem $48$ reais. Ganhou $35$ reais da avó e gastou $60$ reais em um livro. Com quanto ficou?', [['Primeira etapa', 'Ganhou: $48 + 35 = 83$.'], ['Segunda etapa', 'Gastou: $83 − 60 = 23$.']], 'Bia ficou com $23$ reais.']
      ],
      pratique: [
        ['Uma etapa', 'Um estádio tem $5 000$ lugares e $3 742$ estão ocupados. Quantos estão livres?', ['$1 158$', '$1 258$', '$1 358$', '$8 742$'], 1, '$5 000 − 3 742 = 1 258$. <strong>Alternativa B.</strong>'],
        ['Duas etapas', 'Tomás leu $86$ páginas na semana 1 e $94$ na semana 2. O livro tem $300$ páginas. Quantas faltam?', ['$100$', '$110$', '$120$', '$180$'], 2, '$86 + 94 = 180$ e $300 − 180 = 120$. <strong>Alternativa C.</strong>'],
        ['Conferir', 'Maria calculou $1 000 − 357 = 643$. Para conferir a conta, ela deve calcular:', ['$643 − 357$', '$643 + 357$', '$1 000 + 357$', '$357 − 643$'], 1, 'Prova real: resto mais subtraendo deve dar o minuendo. $643 + 357 = 1 000$, então a conta está certa. <strong>Alternativa B.</strong>']
      ],
      enem: ['O orçamento da festa', 'Para uma festa foram gastos $245$ reais com comida, $130$ reais com decoração e $85$ reais com bebidas. A turma arrecadou $500$ reais. O que aconteceu com o dinheiro?', ['sobraram $40$ reais', 'faltaram $40$ reais', 'sobraram $460$ reais', 'faltaram $460$ reais'], 0, 'Gastos: $245 + 130 + 85 = 460$. Como foram arrecadados $500$, sobraram $500 − 460 = 40$ reais. <strong>Alternativa A.</strong>'],
      cuidados: [['Responder à pergunta errada', 'Reescreva a pergunta com suas palavras antes de calcular.'], ['Usar só as palavras-pista', 'Entenda a situação: "restam" nem sempre é subtração de números soltos.'], ['Não conferir', 'Pergunte: a resposta é <strong>razoável</strong>?']],
      quiz: [
        { q: 'Ao todo, $245 + 130 + 85$ é:', o: ['$450$', '$460$', '$470$', '$560$'], a: 1 },
        { q: 'Um problema que pergunta "quanto falta" costuma envolver:', o: ['soma de parcelas iguais', 'subtração (completar)', 'multiplicação', 'raiz quadrada'], a: 1 },
        { q: 'A primeira etapa para resolver um problema é:', o: ['calcular', 'ler e identificar os dados e a pergunta', 'escrever a resposta', 'adivinhar'], a: 1 },
        { q: 'Tinha $200$, ganhou $50$ e gastou $120$. Ficou com:', o: ['$130$', '$80$', '$370$', '$30$'], a: 0 }
      ],
      sintese: [['Roteiro', 'Ler, planejar, resolver e conferir.'], ['Duas etapas', 'Guarde o resultado de cada etapa.'], ['Conferir', 'Estimativa e prova real.']],
      msg: 'Na próxima aula você vai organizar informações em tabelas e gráficos de colunas.'
    }
  ]
});
