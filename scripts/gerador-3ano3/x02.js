// Módulo 2 · Matemática · 3ª série · 3º trimestre — Progressão aritmética: termo geral (aulas 73, 74 e 75 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('../gerador-9ano/wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w73 = Wd.sequencia('pa73');

module.exports = unidade({
  materia: 'matematica', ano: '3° Ano', tri: 3, pasta: 'aulas/3-ano/3-tri/pa-termo-geral/',
  titulo: 'Progressão aritmética: termo geral', accent: 'primary', icon: 'stairs', key: 'm3x02', keyp: 'm3', area: 'Matemática · 3ª série',
  refs: ['Aulas 73 a 75 do plano de Matemática da 3ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Questões do ENEM só quando citadas; demais exercícios são originais.'],
  aulas: [
    // ------------------------------------------------------------ aula 73
    {
      slug: 'progressao-aritmetica-termo-geral-i', titulo: 'Progressão aritmética: termo geral I',
      h1: `Progressão ${co('primary')}aritmética:</span> somar sempre o mesmo`,
      sub: 'Uma progressão aritmética (PA) é uma sequência em que cada termo, a partir do segundo, é o anterior mais uma constante r, a razão. Isso dá uma fórmula direta para qualquer termo.',
      badges: [['PA'], ['razão r', 'growth'], ['aₙ = a₁ + (n − 1)r', 'decay']], color: 'primary',
      roteiro: ['Da definição ao termo geral.', [['PA', 'diferença constante', 'target'], ['Razão r', 'aₙ₊₁ − aₙ', 'scale'], ['Classificação', 'crescente, decrescente, constante', 'chart'], ['Termo geral', 'aₙ = a₁ + (n − 1)r', 'book'], ['Aplicar', 'termos distantes', 'bulb']]],
      objetivos: ['Definir <strong>PA</strong> e calcular a <strong>razão</strong>.', 'Classificar uma PA conforme o sinal de $r$.', 'Deduzir e aplicar o <strong>termo geral</strong> $a_{n} = a_{1} + (n − 1) · r$.'],
      dica: 'Para ir de $a_{1}$ até $a_{n}$ dão-se <strong>$n − 1$ passos</strong> de tamanho $r$: por isso $a_{n} = a_{1} + (n − 1) r$.',
      gancho: { titulo: 'O aluguel que sobe', texto: 'Um aluguel começa em R$ 800 e sobe R$ 50 todo ano. Os valores formam $800, 850, 900, 950, …$ Quanto será o aluguel no 10º ano?', mini: ['O aluguel no 10º ano é:', ['R$ 1.200', 'R$ 1.250', 'R$ 1.300', 'R$ 1.350'], 1, '$800 + 9 · 50 = 1250$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · definição', 'PA, razão e classificação', g2(`<div>
              ${checks(['<strong>PA:</strong> $a_{n+1} = a_{n} + r$ para todo $n$; $r$ é a <strong>razão</strong>.', '<strong>Razão:</strong> $r = a_{2} − a_{1} = a_{3} − a_{2} = …$', '<strong>$r > 0$:</strong> crescente. <strong>$r < 0$:</strong> decrescente. <strong>$r = 0$:</strong> constante.', 'Exemplos: $(5, 9, 13, …)$, $r = 4$; $(20, 17, 14, …)$, $r = −3$; $(6, 6, 6, …)$, $r = 0$.'], '.95rem')}
            </div>`, card(`<strong>Termo geral</strong>
              <p style="font-size:1rem;margin-top:8px;">$a_{n} = a_{1} + (n − 1) · r$</p>
              <p class="hint" style="margin-top:6px;">Ex.: $(5, 9, 13, …)$: $a_{20} = 5 + 19 · 4 = 81$.</p>`, 'primary'))],
        ['Teoria · dedução', 'De onde vem a fórmula', g2(`<div>
              ${checks(['$a_{2} = a_{1} + r$; $a_{3} = a_{1} + 2r$; $a_{4} = a_{1} + 3r$…', 'O padrão: $a_{n} = a_{1} + (n − 1) r$.', 'Também vale entre quaisquer termos: $a_{n} = a_{k} + (n − k) r$.', 'Exemplo: $a_{10} = a_{4} + 6r$.'], '.95rem')}
            </div>`, callout('Simule', 'No simulador, escolha “Soma o mesmo número” e veja a tabela de termos mudar com $a_{1}$ e $r$.', 'primary'))]
      ],
      exemplos: [
        ['Termo geral', 'Qual é o 15º termo da PA $(7, 11, 15, …)$?', [['Razão', '$r = 4$.'], ['Fórmula', '$a_{15} = 7 + 14 · 4$.'], ['Calcule', '$7 + 56 = 63$.']], '$a_{15} = 63$.'],
        ['Entre termos', 'Em uma PA, $a_{4} = 14$ e $r = 3$. Calcule $a_{10}$.', [['Fórmula', '$a_{10} = a_{4} + 6r$.'], ['Calcule', '$14 + 18 = 32$.']], '$a_{10} = 32$.']
      ],
      widget: { titulo: 'PA: termos e razão', html: w73.html, js: w73.js },
      pratique: [
        ['Razão', 'A razão da PA $(12, 7, 2, −3, …)$ é:', ['$5$', '$−5$', '$−10$', '$2$'], 1, '$7 − 12 = −5$. <strong>Alternativa B.</strong>'],
        ['Termo', 'O 12º termo da PA $(3, 8, 13, …)$ é:', ['$55$', '$58$', '$60$', '$63$'], 1, '$3 + 11 · 5 = 58$. <strong>Alternativa B.</strong>'],
        ['Classificação', 'Uma PA com $r = −4$ é:', ['crescente', 'decrescente', 'constante', 'oscilante'], 1, '$r < 0$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A plantação', 'Uma árvore mede $40$ cm e cresce $8$ cm por mês. Quanto medirá após $12$ meses?', ['$96$ cm', '$128$ cm', '$136$ cm', '$144$ cm', '$152$ cm'], 2, 'Medidas formam PA: $40 + 12 · 8 = 136$. <strong>Alternativa C.</strong>'],
      cuidados: [['$n$ em vez de $n − 1$', 'Em $a_{n} = a_{1} + (n − 1) r$ o fator é $n − 1$.'], ['Razão com sinal trocado', '$r = a_{2} − a_{1}$, não $a_{1} − a_{2}$.'], ['Mesmo $r$ em tudo', 'Se $r$ não for constante, não é PA.'], ['Contar o termo inicial', '"Após 12 meses" é o $13º$ termo se a PA começa no mês $0$.']],
      quiz: [
        { q: 'Em uma PA, $a_{1} = 2$ e $r = 5$. $a_{4}$ vale:', o: ['$12$', '$17$', '$22$', '$7$'], a: 1 },
        { q: 'A razão de $(9, 13, 17, …)$ é:', o: ['$3$', '$4$', '$5$', '$9$'], a: 1 },
        { q: 'O termo geral de uma PA é:', o: ['$a_{1} · q^{n−1}$', '$a_{1} + (n − 1) r$', '$a_{1} + n r$', '$r^{n}$'], a: 1 },
        { q: 'PA com $r = 0$ é:', o: ['crescente', 'decrescente', 'constante', 'impossível'], a: 2 }
      ],
      sintese: [['PA', 'Diferença constante r.'], ['Termo geral', 'aₙ = a₁ + (n − 1)·r.'], ['Classificação', 'r > 0 cresce; r < 0 decresce; r = 0 constante.']],
      msg: 'Na próxima aula: achar r, a₁ e n a partir de dados.'
    },
    // ------------------------------------------------------------ aula 74
    {
      slug: 'progressao-aritmetica-termo-geral-ii', titulo: 'Progressão aritmética: termo geral II',
      h1: `Progressão aritmética: ${co('primary')}achar r, a₁ e n</span>`,
      sub: 'Muitos problemas dão dois termos e pedem a razão, o primeiro termo ou a posição de um termo. A fórmula do termo geral, usada como equação, resolve todos eles.',
      badges: [['achar r'], ['achar a₁', 'growth'], ['achar n', 'decay']], color: 'primary',
      roteiro: ['Quatro incógnitas, uma fórmula.', [['Montar', 'aₙ = a₁ + (n − 1)r', 'target'], ['Achar a razão', 'dois termos dados', 'scale'], ['Achar a₁', 'termo e razão', 'chart'], ['Achar n', 'posição de um termo', 'book'], ['Interpolar', 'inserir termos', 'bulb']]],
      objetivos: ['Determinar <strong>$r$</strong>, <strong>$a_{1}$</strong> ou <strong>$n$</strong> usando o termo geral.', 'Resolver <strong>sistemas simples</strong> com dois termos conhecidos.', 'Fazer <strong>interpolação aritmética</strong> (inserir meios aritméticos).'],
      dica: 'Dados $a_{p}$ e $a_{q}$: $r = {a_{q} − a_{p}|q − p}$. Depois use $a_{n} = a_{p} + (n − p) r$.',
      gancho: { titulo: 'Subindo a escada', texto: 'No 3º degrau de uma escada a altura é $50$ cm e, no 7º degrau, $130$ cm. Cada degrau tem a mesma altura. Qual a altura de cada degrau? Do 3º ao 7º são $4$ passos que somam $80$ cm: $r = 20$.', mini: ['Em uma PA, $a_{3} = 50$ e $a_{7} = 130$. A razão é:', ['$10$', '$20$', '$25$', '$40$'], 1, '${130 − 50|7 − 3} = 20$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · dois termos dados', 'A razão pela diferença', g2(`<div>
              ${checks(['<strong>$a_{q} = a_{p} + (q − p) r$</strong> ⇒ $r = {a_{q} − a_{p}|q − p}$.', 'Exemplo: $a_{2} = 9$ e $a_{8} = 33$ ⇒ $r = {24|6} = 4$ e $a_{1} = 9 − 4 = 5$.', '<strong>Achar $n$:</strong> $a_{n} = a_{1} + (n − 1) r$ ⇒ $n = {a_{n} − a_{1}|r} + 1$.', '<strong>Achar $a_{1}$:</strong> $a_{1} = a_{n} − (n − 1) r$.'], '.95rem')}
            </div>`, card(`<strong>Exemplo: quantos termos?</strong>
              <p style="font-size:.92rem;margin-top:8px;">A PA $(4, 9, 14, …, 99)$: $99 = 4 + (n − 1) · 5$ ⇒ $n − 1 = 19$ ⇒ $n = 20$ termos.</p>`, 'primary'))],
        ['Teoria · interpolação', 'Inserir meios aritméticos', g2(`<div>
              ${checks(['<strong>Interpolar $k$ meios</strong> entre $a$ e $b$: a PA terá $k + 2$ termos, com $a_{1} = a$ e $a_{k+2} = b$.', 'Razão: $r = {b − a|k + 1}$.', 'Exemplo: inserir $3$ meios entre $2$ e $18$: $r = {16|4} = 4$ ⇒ $(2, 6, 10, 14, 18)$.', 'Aplicação: dividir um intervalo em partes iguais.'], '.95rem')}
            </div>`, callout('Conta rápida', 'Entre $a$ e $b$, com $k$ meios, há $k + 1$ “degraus” de tamanho $r$.', 'primary'))]
      ],
      exemplos: [
        ['Razão e primeiro termo', 'Em uma PA, $a_{3} = 11$ e $a_{9} = 35$. Calcule $r$ e $a_{1}$.', [['Razão', '$r = {35 − 11|9 − 3} = 4$.'], ['Primeiro termo', '$a_{1} = a_{3} − 2r = 11 − 8 = 3$.']], '$r = 4$ e $a_{1} = 3$.'],
        ['Quantos termos', 'Quantos termos tem a PA $(6, 10, 14, …, 94)$?', [['Fórmula', '$94 = 6 + (n − 1) · 4$.'], ['Isole', '$n − 1 = 22$.']], 'A PA tem <strong>23 termos</strong>.']
      ],
      pratique: [
        ['Razão', 'Se $a_{2} = 7$ e $a_{6} = 19$ em uma PA, então $r$ vale:', ['$2$', '$3$', '$4$', '$12$'], 1, '${12|4} = 3$. <strong>Alternativa B.</strong>'],
        ['Número de termos', 'A PA $(3, 8, 13, …, 98)$ tem quantos termos?', ['$19$', '$20$', '$21$', '$22$'], 1, '$98 = 3 + (n − 1) · 5$ ⇒ $n = 20$. <strong>Alternativa B.</strong>'],
        ['Interpolar', 'Inserindo $4$ meios aritméticos entre $1$ e $21$, a razão é:', ['$4$', '$5$', '$6$', '$20$'], 0, '$r = {20|5} = 4$. <strong>Alternativa A.</strong>']
      ],
      enem: ['Os marcos da estrada', 'Em uma estrada, há marcos quilométricos a cada $5$ km. O 1º marco está no km $12$ e o último no km $162$. Quantos marcos existem?', ['$29$', '$30$', '$31$', '$32$', '$33$'], 2, '$162 = 12 + (n − 1) · 5$ ⇒ $n = 31$. <strong>Alternativa C.</strong>'],
      cuidados: [['Esquecer o $+ 1$ na contagem', '$n = {a_{n} − a_{1}|r} + 1$.'], ['Diferença de posições', 'Em $r = {a_{q} − a_{p}|q − p}$ use a diferença das <strong>posições</strong>.'], ['Meios × termos', '$k$ meios dá $k + 2$ termos.'], ['Resultado não inteiro', 'Se $n$ não é inteiro, o valor dado não pertence à PA.']],
      quiz: [
        { q: 'Entre $2$ e $22$, inserindo $4$ meios, a razão é:', o: ['$4$', '$5$', '$6$', '$10$'], a: 0 },
        { q: 'A PA $(1, 4, 7, …, 100)$ tem:', o: ['$33$ termos', '$34$ termos', '$100$ termos', '$99$ termos'], a: 1 },
        { q: 'Se $a_{5} = 20$ e $r = 3$, então $a_{1}$ vale:', o: ['$5$', '$8$', '$11$', '$17$'], a: 1 },
        { q: '$r = {a_{q} − a_{p}|q − p}$ vale para:', o: ['qualquer sequência', 'PA', 'PG', 'só frações'], a: 1 }
      ],
      sintese: [['Razão', 'r = (aq − ap) ÷ (q − p).'], ['Contagem', 'n = (aₙ − a₁) ÷ r + 1.'], ['Interpolação', 'k meios ⇒ k + 1 passos.']],
      msg: 'Na próxima aula: propriedades da PA e a ligação com a função afim.'
    },
    // ------------------------------------------------------------ aula 75
    {
      slug: 'progressao-aritmetica-termo-geral-iii', titulo: 'Progressão aritmética: termo geral III',
      h1: `Progressão aritmética: ${co('primary')}propriedades e função afim</span>`,
      sub: 'A PA tem propriedades elegantes: o termo central é a média dos vizinhos e termos equidistantes dos extremos somam o mesmo valor. Além disso, aₙ é uma função afim de n.',
      badges: [['termo médio'], ['equidistantes', 'growth'], ['função afim', 'decay']], color: 'primary',
      roteiro: ['Propriedades e conexões.', [['Média aritmética', 'aₙ = (aₙ₋₁ + aₙ₊₁) ÷ 2', 'target'], ['Equidistantes', 'soma constante', 'scale'], ['Três termos em PA', 'x − r, x, x + r', 'chart'], ['PA e função afim', 'reta de pontos', 'book'], ['Problemas', 'aplicar tudo', 'bulb']]],
      objetivos: ['Aplicar a propriedade do <strong>termo médio</strong>.', 'Usar a soma de <strong>termos equidistantes</strong> dos extremos.', 'Relacionar a PA à <strong>função afim</strong> $a_{n} = r · n + (a_{1} − r)$.'],
      dica: 'Três números em PA: chame-os de $x − r$, $x$, $x + r$. A soma dá $3x$ e o termo central fica fácil.',
      gancho: { titulo: 'Três números em PA', texto: 'Três números estão em PA e somam $24$; o maior é o dobro do menor. Chame-os $x − r$, $x$ e $x + r$: a soma é $3x = 24$, logo $x = 8$.', mini: ['Em uma PA, $a_{2} = 6$ e $a_{4} = 14$. O termo $a_{3}$ é:', ['$9$', '$10$', '$11$', '$8$'], 1, 'Média: ${6 + 14|2} = 10$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · propriedades', 'Termo médio e equidistantes', g2(`<div>
              ${checks(['<strong>Termo médio:</strong> $a_{n} = {a_{n−1} + a_{n+1}|2}$ (média aritmética dos vizinhos).', '<strong>Equidistantes dos extremos:</strong> $a_{1} + a_{n} = a_{2} + a_{n−1} = a_{3} + a_{n−2} = …$', 'Em $(2, 5, 8, 11, 14)$: $2 + 14 = 5 + 11 = 8 + 8 = 16$.', 'Três termos em PA: $x − r$, $x$, $x + r$.'], '.95rem')}
            </div>`, card(`<strong>PA e função afim</strong>
              <p style="font-size:.92rem;margin-top:8px;">$a_{n} = a_{1} + (n − 1) r = r · n + (a_{1} − r)$.</p>
              <p style="font-size:.92rem;">Os pontos $(n, a_{n})$ ficam alinhados em uma <strong>reta</strong> de inclinação $r$.</p>`, 'primary'))],
        ['Teoria · problemas típicos', 'Roteiro', g2(`<div>
              ${checks(['Soma conhecida de três termos: use $x − r$, $x$, $x + r$.', 'Cinco termos: $x − 2r$, $x − r$, $x$, $x + r$, $x + 2r$.', 'Se dois termos são dados, ache $r$ e depois o que for pedido.', 'Termo médio: para $a, b, c$ em PA, $2b = a + c$.'], '.95rem')}
            </div>`, callout('Teste de PA', 'Para saber se $a, b, c$ estão em PA, verifique se $2b = a + c$.', 'primary'))]
      ],
      exemplos: [
        ['Três números', 'Três números em PA somam $15$ e o produto é $105$. Quais são?', [['Incógnitas', '$x − r$, $x$, $x + r$.'], ['Soma', '$3x = 15$ ⇒ $x = 5$.'], ['Produto', '$5(25 − r²) = 105$ ⇒ $25 − r² = 21$ ⇒ $r = ±2$.']], 'Os números são <strong>3, 5 e 7</strong> (ou 7, 5 e 3).'],
        ['Termo médio', 'Qual valor de $x$ faz $(x, 2x + 1, 5x − 2)$ ser uma PA?', [['Condição', '$2(2x + 1) = x + (5x − 2)$.'], ['Resolva', '$4x + 2 = 6x − 2$ ⇒ $x = 2$.']], '$x = 2$ (PA: $2, 5, 8$).']
      ],
      pratique: [
        ['Termo médio', 'O termo médio de $7$ e $19$ em uma PA é:', ['$12$', '$13$', '$14$', '$26$'], 1, '${7 + 19|2} = 13$. <strong>Alternativa B.</strong>'],
        ['Equidistantes', 'Em uma PA de $9$ termos, $a_{2} + a_{8}$ é igual a:', ['$a_{1} + a_{9}$', '$a_{5}$', '$2a_{9}$', '$a_{1}$'], 0, 'Equidistantes dos extremos somam o mesmo valor. <strong>Alternativa A.</strong>'],
        ['Teste', 'Qual terna está em PA?', ['$(1, 2, 4)$', '$(3, 6, 9)$', '$(2, 4, 9)$', '$(5, 7, 10)$'], 1, '$2 · 6 = 3 + 9$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Salários em PA', 'Os salários de três funcionárias estão em PA, somam R$ 9.000 e o maior é R$ 4.000. Qual o salário da funcionária do meio?', ['R$ 2.000', 'R$ 2.500', 'R$ 3.000', 'R$ 3.500', 'R$ 4.000'], 2, '$3x = 9000$ ⇒ $x = 3000$. <strong>Alternativa C.</strong>'],
      cuidados: [['Termo médio em PG', 'A média aritmética vale só para PA; na PG é a média geométrica.'], ['Soma de equidistantes', 'Os termos precisam estar à mesma distância dos extremos.'], ['Inclinação da reta', 'A inclinação é $r$, não $a_{1}$.'], ['Perder a solução com $r = −2$', 'Ela dá a mesma terna invertida.']],
      quiz: [
        { q: '$2b = a + c$ caracteriza:', o: ['PG', 'PA', 'qualquer sequência', 'função quadrática'], a: 1 },
        { q: 'Em $(2, 6, 10, 14, 18)$, $a_{1} + a_{5}$ vale:', o: ['$16$', '$18$', '$20$', '$24$'], a: 2 },
        { q: 'Três números em PA, soma $30$: o do meio é:', o: ['$5$', '$10$', '$15$', '$30$'], a: 1 },
        { q: 'Os pontos $(n, a_{n})$ de uma PA estão em:', o: ['uma parábola', 'uma reta', 'uma circunferência', 'um ponto'], a: 1 }
      ],
      sintese: [['Termo médio', 'aₙ = (aₙ₋₁ + aₙ₊₁) ÷ 2.'], ['Equidistantes', 'Somam o mesmo valor.'], ['Função afim', 'aₙ = r·n + (a₁ − r).']],
      msg: 'Na próxima aula: a soma dos termos de uma PA.'
    }
  ]
});
