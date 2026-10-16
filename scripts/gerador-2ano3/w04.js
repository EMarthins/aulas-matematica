// Módulo 4 · Matemática · 2ª série · 3º trimestre — Logaritmos decimais e condição de existência (aulas 78 e 79 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/logaritmos-decimais-e-existencia/',
  titulo: 'Logaritmos decimais e condição de existência', accent: 'decay', icon: 'curve-log', key: 'm2w04', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 78 e 79 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Valores aproximados: log 2 ≈ 0,30; log 3 ≈ 0,48; log 5 ≈ 0,70.'],
  aulas: [
    // ------------------------------------------------------------ aula 78
    {
      slug: 'logaritmo-de-base-10', titulo: 'Logaritmo de base 10',
      h1: `Logaritmo ${co('decay')}decimal:</span> a base 10`,
      sub: 'O logaritmo na base 10 é o mais usado nas ciências. Quando a base não aparece, ela vale 10. Ele mede ordens de grandeza: pH, decibéis e escala Richter são logaritmos decimais.',
      badges: [['log x = log₁₀ x'], ['ordem de grandeza', 'growth'], ['escalas', 'decay']], color: 'decay',
      roteiro: ['Do log decimal às escalas científicas.', [['Base 10', 'log x = log₁₀ x', 'target'], ['Potências de 10', 'log 10ⁿ = n', 'scale'], ['Calcular', 'tabela e calculadora', 'chart'], ['Outras bases', 'ln, log₂', 'book'], ['Escalas', 'pH e decibéis', 'bulb']]],
      objetivos: ['Calcular <strong>logaritmos decimais</strong> de potências de $10$.', 'Conhecer outras bases comuns: <strong>natural ($ln$)</strong> e <strong>binária ($log_{2}$)</strong>.', 'Interpretar <strong>escalas logarítmicas</strong> simples.'],
      dica: 'Sem base escrita, $log\ x$ significa $log_{10} x$. Para potências de $10$: $log\ 10^{n} = n$.',
      gancho: { titulo: 'O pH da água', texto: 'O pH mede a acidez: $pH = −log\[H^{+}]$. Na água pura, $[H^{+}] = 10^{−7}$ mol/L. Então $pH = −log\ 10^{−7} = 7$. Cada unidade de pH muda a concentração <strong>dez vezes</strong>.', mini: ['$log\ 1000$ vale:', ['$2$', '$3$', '$10$', '$100$'], 1, '$10^{3} = 1000$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · logaritmo decimal', 'Potências de 10', g2(`<div>
              ${checks(['<strong>Logaritmo decimal:</strong> $log\ x = log_{10} x$.', '$log\ 10 = 1$, $log\ 100 = 2$, $log\ 1000 = 3$ e $log\ 1 = 0$.', '$log\ 0,1 = −1$ e $log\ 0,001 = −3$.', 'Se $100 < x < 1000$, então $2 < log\ x < 3$.'], '.95rem')}
            </div>`, card(`<strong>Valores úteis</strong>
              ${tbl(['$x$', '$log\ x$ (aprox.)'], [['$2$', '$0,30$'], ['$3$', '$0,48$'], ['$5$', '$0,70$'], ['$7$', '$0,85$'], ['$10$', '$1$']])}`, 'primary'))],
        ['Teoria · outras bases e escalas', 'Natural, binária e aplicações', g2(`<div>
              ${checks(['<strong>Logaritmo natural:</strong> base $e ≈ 2,718$, escreve-se $ln\ x$. Aparece em crescimento contínuo.', '<strong>Logaritmo binário:</strong> $log_{2} x$, usado em computação (bits).', '<strong>pH</strong> $= −log\[H^{+}]$; <strong>decibel</strong> $= 10 · log\ {I|I_{0}}$; <strong>Richter</strong>: cada ponto vale cerca de $32$ vezes mais energia.', 'Escala logarítmica comprime números enormes em uma régua curta.'], '.95rem')}
            </div>`, callout('Ordem de grandeza', 'Se $log\ A − log\ B = 2$, então $A$ é $10² = 100$ vezes $B$.', 'decay'))]
      ],
      exemplos: [
        ['Decimais', 'Calcule $log\ 10 000$ e $log\ 0,01$.', [['Potências', '$10 000 = 10^{4}$ e $0,01 = 10^{−2}$.'], ['Logaritmos', '$4$ e $−2$.']], '$log\ 10 000 = 4$ e $log\ 0,01 = −2$.'],
        ['pH', 'Um suco tem $[H^{+}] = 10^{−3}$ mol/L. Qual o pH?', [['Fórmula', '$pH = −log\[H^{+}]$.'], ['Substituir', '$−log\ 10^{−3} = −(−3) = 3$.']], 'O pH é <strong>3</strong> (ácido).']
      ],
      pratique: [
        ['Potência de 10', '$log\ 100 000$ vale:', ['$4$', '$5$', '$6$', '$100$'], 1, '$10^{5}$. <strong>Alternativa B.</strong>'],
        ['Fração decimal', '$log\ 0,0001$ vale:', ['$−4$', '$−3$', '$3$', '$4$'], 0, '$10^{−4}$. <strong>Alternativa A.</strong>'],
        ['Escala', 'Se o pH de uma solução é $5$, então $[H^{+}]$ vale:', ['$10^{5}$', '$10^{−5}$', '$5$', '$0,5$'], 1, '$pH = −log\[H^{+}] = 5$ ⇒ $[H^{+}] = 10^{−5}$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Escala Richter simplificada', 'Em uma escala, a magnitude é $M = log\ I$. Um terremoto tem $I = 10^{6}$. A sua magnitude é:', ['$3$', '$6$', '$10$', '$60$', '$1 000 000$'], 1, '$log\ 10^{6} = 6$. <strong>Alternativa B.</strong>'],
      cuidados: [['$log\ 10 = 10$?', 'Não: $log\ 10 = 1$.'], ['Base omitida', 'Sem base, é $10$ (e $ln$ é base $e$).'], ['Sinal do pH', 'O pH é o <strong>oposto</strong> do log da concentração.'], ['Escala não linear', 'Diferença de $1$ na escala = fator $10$ (ou $32$ etc.).']],
      quiz: [
        { q: '$log\ 1 000 000$ vale:', o: ['$5$', '$6$', '$7$', '$10$'], a: 1 },
        { q: '$log\ 0,1$ vale:', o: ['$1$', '$−1$', '$0,1$', '$−10$'], a: 1 },
        { q: 'Base de $ln$ é:', o: ['$10$', '$2$', '$e$', '$1$'], a: 2 },
        { q: 'Se $log\ x = 3$, então $x$ vale:', o: ['$3$', '$30$', '$1 000$', '$10^{−3}$'], a: 2 }
      ],
      sintese: [['Decimal', 'log x = log₁₀ x; log 10ⁿ = n.'], ['Outras bases', 'ln (base e) e log₂ (base 2).'], ['Escalas', 'pH, decibel e Richter são logaritmos.']],
      msg: 'Na próxima aula você descobre quando um logaritmo existe.'
    },
    // ------------------------------------------------------------ aula 79
    {
      slug: 'logaritmo-condicao-de-existencia', titulo: 'Logaritmo: condição de existência',
      h1: `Logaritmo: ${co('decay')}quando ele existe?</span>`,
      sub: 'Nem todo log_a b existe. A base precisa ser positiva e diferente de 1 e o logaritmando precisa ser positivo. Determinar as condições é o primeiro passo ao resolver equações logarítmicas.',
      badges: [['a > 0, a ≠ 1'], ['b > 0', 'growth'], ['domínio', 'decay']], color: 'decay',
      roteiro: ['Das condições ao conjunto de valores de x.', [['Condições', 'a > 0, a ≠ 1, b > 0', 'target'], ['Por que?', 'o que quebra', 'bulb'], ['Logaritmando com x', 'inequação', 'chart'], ['Base com x', 'a > 0 e a ≠ 1', 'scale'], ['Intersecção', 'todas as condições', 'book']]],
      objetivos: ['Enunciar as <strong>condições de existência</strong> do logaritmo.', 'Determinar os valores de $x$ para os quais $log_{a} b$ existe.', 'Entender o <strong>porquê</strong> de cada condição.'],
      dica: 'Condições: <strong>base $> 0$, base $≠ 1$, logaritmando $> 0$</strong>. Se $x$ aparece, resolva as inequações e faça a <strong>intersecção</strong>.',
      gancho: { titulo: 'Log de número negativo?', texto: 'Existe um expoente $x$ tal que $2^{x} = −4$? Potência de base positiva nunca é negativa. Logo, $log_{2} (−4)$ <strong>não existe</strong> nos reais.', mini: ['Qual logaritmo existe nos reais?', ['$log_{2} (−8)$', '$log_{2} 0$', '$log_{2} 8$', '$log_{1} 8$'], 2, 'Só $log_{2} 8$ tem base válida e logaritmando positivo. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · condições', 'Por que cada uma?', g2(`<div>
              ${checks(['<strong>Logaritmando $b > 0$:</strong> $a^{x} > 0$ sempre; logo $b$ não pode ser $0$ nem negativo.', '<strong>Base $a > 0$:</strong> para $a^{x}$ existir para todo $x$ real.', '<strong>Base $a ≠ 1$:</strong> $1^{x} = 1$ não gera outros valores; $log_{1} b$ seria ambíguo.', 'Resumo: $log_{a} b$ existe ⇔ $a > 0$, $a ≠ 1$ e $b > 0$.'], '.95rem')}
            </div>`, card(`<strong>Exemplos</strong>
              ${tbl(['Expressão', 'Existe?'], [['$log_{2} 5$', 'sim'], ['$log_{−2} 8$', 'não (base negativa)'], ['$log_{1} 5$', 'não (base 1)'], ['$log_{3} 0$', 'não (logaritmando 0)']])}`, 'primary'))],
        ['Teoria · com incógnita', 'Resolvendo as condições', g2(`<div>
              ${checks(['$log_{5} (x − 3)$: $x − 3 > 0$ ⇒ $x > 3$.', '$log_{x} 7$: $x > 0$ e $x ≠ 1$.', '$log_{(x−1)} (6 − x)$: $x − 1 > 0$, $x − 1 ≠ 1$, $6 − x > 0$ ⇒ $1 < x < 6$ e $x ≠ 2$.', 'O conjunto de valores é a <strong>intersecção</strong> de todas as condições.'], '.95rem')}
            </div>`, callout('Dica', 'Faça uma reta numérica com cada condição e marque a região comum.', 'decay'))]
      ],
      exemplos: [
        ['Só logaritmando', 'Para quais $x$ existe $log_{3} (2x − 8)$?', [['Condição', '$2x − 8 > 0$.'], ['Resolva', '$2x > 8$ ⇒ $x > 4$.']], '$x > 4$.'],
        ['Base e logaritmando', 'Para quais $x$ existe $log_{(x−2)} (10 − x)$?', [['Base', '$x − 2 > 0$ ⇒ $x > 2$ e $x − 2 ≠ 1$ ⇒ $x ≠ 3$.'], ['Logaritmando', '$10 − x > 0$ ⇒ $x < 10$.'], ['Intersecção', '$2 < x < 10$ e $x ≠ 3$.']], '$2 < x < 10$, com $x ≠ 3$.']
      ],
      pratique: [
        ['Existe?', 'Qual logaritmo <strong>não</strong> existe nos reais?', ['$log_{10} 3$', '$log_{3} 10$', '$log_{5} (−1)$', '$log_{2} 1$'], 2, 'Logaritmando negativo. <strong>Alternativa C.</strong>'],
        ['Condição', '$log_{2} (x + 5)$ existe para:', ['$x > −5$', '$x < −5$', '$x > 5$', '$x ≠ −5$'], 0, '$x + 5 > 0$. <strong>Alternativa A.</strong>'],
        ['Base', '$log_{x} 9$ existe para:', ['$x > 0$', '$x > 0$ e $x ≠ 1$', '$x ≠ 0$', '$x ≥ 1$'], 1, 'Base positiva e diferente de $1$. <strong>Alternativa B.</strong>']
      ],
      enem: ['A fórmula de decibéis', 'Em $N = 10 · log\ {I|I_{0}}$, o logaritmo existe quando:', ['$I < 0$', '${I|I_{0}} > 0$', '${I|I_{0}} = 0$', '$I_{0} < 0$ apenas', '$I$ qualquer'], 1, 'O logaritmando precisa ser positivo. <strong>Alternativa B.</strong>'],
      cuidados: [['Esquecer $a ≠ 1$', 'A base não pode ser $1$.'], ['Condição só no logaritmando', 'Se a base tem $x$, também há condições nela.'], ['Intersecção × união', 'As condições valem <strong>ao mesmo tempo</strong>: use a intersecção.'], ['Conferir ao final', 'Depois de resolver uma equação, confira as raízes nas condições.']],
      quiz: [
        { q: 'A base de um logaritmo deve ser:', o: ['negativa', 'positiva e diferente de $1$', 'qualquer real', 'inteira apenas'], a: 1 },
        { q: '$log_{2} (x − 1)$ existe se:', o: ['$x > 1$', '$x < 1$', '$x ≠ 1$', '$x ≥ 1$'], a: 0 },
        { q: '$log_{3} 0$:', o: ['vale $0$', 'vale $1$', 'não existe', 'vale $3$'], a: 2 },
        { q: '$log_{(x+1)} 5$ exige:', o: ['$x > −1$ e $x ≠ 0$', '$x > 0$', '$x < −1$', '$x = 0$'], a: 0 }
      ],
      sintese: [['Condições', 'a > 0, a ≠ 1, b > 0.'], ['Com incógnita', 'Resolva as inequações e intersecte.'], ['Sempre', 'Confira as soluções com as condições.']],
      msg: 'Na próxima aula: logaritmo de um produto, de um quociente e de uma potência.'
    }
  ]
});
