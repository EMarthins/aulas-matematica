// Unidade 4 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cOrdenar } = K;
const { p, wl, call, prop, T: tb, f } = G;
const dir = 'ena-profmat/04-logica-demonstracao/', key = 'c4', brand = 'Lógica e Demonstração', cap = 'Capítulo 4';

const g = guia({
  dir, key, brand, cap, color: 'primary',
  h1: 'Lógica: <span>negar, refutar e provar</span>',
  lede: 'Cinco questões em 60 e quase nenhuma conta: conectivos, negações, contrapositiva, contraexemplos, eliminação e provas por casos e por absurdo.',
  badges: ['5× nas provas 2025–26', 'P⇒Q só falha com P=V e Q=F', 'Um contraexemplo basta', 'Contrapositiva ≡ original'],
  curve: 'M20,160 C 100,120 160,150 240,90 C 320,40 400,70 480,24',
  sections: [
    ['Conectivos', 'Quando é verdadeira', 'check', 'primary', tb(['Símbolo', 'Verdadeira quando'], [['$P ∧ Q$', 'as duas são V'], ['$P ∨ Q$', 'pelo menos uma é V'], ['$P ⇒ Q$', 'exceto P V e Q F'], ['$P ⇔ Q$', 'mesmo valor']])],
    ['Negações', 'Como negar', 'warn', 'danger', tb(['Afirmação', 'Negação'], [['Todo A é B', 'Existe A que <strong>não</strong> é B'], ['Existe A que é B', 'Nenhum A é B'], ['$P ∧ Q$', '$¬P ∨ ¬Q$'], ['$P ∨ Q$', '$¬P ∧ ¬Q$'], ['$P ⇒ Q$', '$P ∧ ¬Q$']])],
    ['Equivalência', 'Contrapositiva × recíproca', 'link', 'success', p('A contrapositiva $¬Q ⇒ ¬P$ é <strong>equivalente</strong> a $P ⇒ Q$. A recíproca $Q ⇒ P$ <strong>não</strong> é.') + call('Exemplo', '“Se chove, a rua molha” ≡ “se a rua não molha, não chove”.', 'success')],
    ['Contraexemplo', 'Como refutar', 'target', 'growth', p('Para refutar “$P ⇒ Q$”, ache <strong>$P$ verdadeira e $Q$ falsa</strong>. Premissa falsa ou conclusão verdadeira não refutam.') + call('Exemplo', '$x > y ⇒ x^2 > y^2$: $x = −1$, $y = −2$.', 'success')],
    ['Verdades falsas', 'Cuidado com estas', 'warn', 'danger', tb(['Falsa', 'Contraexemplo'], [['$α^2 = 1 ⇒ α = 1$', '$α = −1$'], ['$√{a^2} = a$', '$a < 0$'], ['$(a+b)^2 = a^2 + b^2$', 'falta $2ab$'], ['primos são ímpares', '2']])],
    ['Eliminação', 'Senhas e V/F', 'chart', 'decay', p('Liste o que cada dica elimina; teste a hipótese mais restritiva primeiro e procure a contradição.') + call('ENA 2026 Q22 e Q25', 'Senha 349; sequência V F V V F.', 'success')],
    ['Demonstração', 'Absurdo e casos', 'bulb', 'primary', p('<strong>Absurdo</strong>: suponha o contrário e chegue a algo impossível. <strong>Casos</strong>: analise todas as possibilidades.') + call('ENA 2025 Q17', 'Prova não construtiva: $√3^{√2}$ racional ou não, existem irracionais com potência racional.', '')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Negar “todo” com “nenhum” (a negação é “pelo menos um não”).', 'Confundir contrapositiva (equivalente) com recíproca (não).', 'Aceitar contraexemplo com premissa falsa.', 'Marcar “II e III, apenas” sem julgar cada item V ou F.', 'Provar “para todo” com um único exemplo.'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Lógica <span style="color:var(--primary);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: negação, contrapositiva, contraexemplo, senha por eliminação e o primeiro passo de uma prova por absurdo.',
  final: 'Negar com cuidado, refutar com um contraexemplo válido e organizar a eliminação.',
  questions: [
    { badge: 'Estilo ENA · negação', text: 'Considere a afirmação: “Todo número divisível por 6 é divisível por 4”.', cmd: 'A negação dessa afirmação é:', opts: ['Nenhum número divisível por 6 é divisível por 4', 'Existe número divisível por 6 que não é divisível por 4', 'Todo número divisível por 6 não é divisível por 4', 'Existe número divisível por 4 que não é divisível por 6', 'Todo número divisível por 4 é divisível por 6'], a: 1,
      sol: '<p>A negação de “todo A é B” é “existe A que <strong>não</strong> é B”: existe número divisível por 6 que não é divisível por 4 (ex.: 6).</p>' },
    { badge: 'Estilo ENA · contrapositiva', text: 'Considere a frase: “Se um número é múltiplo de 9, então ele é múltiplo de 3”.', cmd: 'Qual das frases abaixo é <strong>equivalente</strong> a ela?', opts: ['Se um número é múltiplo de 3, então é múltiplo de 9', 'Se um número não é múltiplo de 9, então não é múltiplo de 3', 'Se um número não é múltiplo de 3, então não é múltiplo de 9', 'Se um número é múltiplo de 9, então não é múltiplo de 3', 'Se um número não é múltiplo de 3, então é múltiplo de 9'], a: 2,
      sol: '<p>A equivalente é a <strong>contrapositiva</strong>: $¬Q ⇒ ¬P$. A alternativa A é a recíproca e B é a inversa — não equivalentes.</p>' },
    { badge: 'Estilo ENA · contraexemplo', text: 'A afirmação “se $n > 1$, então $n^2 > 2n$” é falsa.', cmd: 'Qual valor de $n$ é um <strong>contraexemplo</strong>?', opts: ['$n = 3$', '$n = 2$', '$n = 1$', '$n = 0$', '$n = −1$'], a: 1,
      sol: '<p>Precisamos de premissa verdadeira e conclusão falsa. $n = 2$: $2 > 1$ ✓ e $n^2 = 4 > 2n = 4$ é falso (4 não é maior que 4). Em $n = 3$ a conclusão vale ($9 > 6$); em $n = 1, 0, −1$ a premissa $n > 1$ é falsa.</p>' },
    { badge: 'Estilo ENA · eliminação', text: 'Uma senha tem 3 dígitos (0–9, não necessariamente distintos). Dicas: “135”: um dígito presente, em posição errada. “719”: um dígito presente, em posição errada. “052”: dois dígitos presentes, um deles na posição correta. “519”: um dígito presente, na posição correta.', cmd: 'Qual é a senha?', opts: ['527', '572', '752', '257', '582'], a: 1,
      sol: '<p>Teste <strong>572</strong>: “135” → só o 5 (pos. 3 na dica, 2 na senha: errada) ✓; “719” → só o 7 (pos. 1 na dica, 2 na senha) ✓; “052” → 5 e 2 presentes, o 2 na 3ª posição certo ✓; “519” → só o 5, na 1ª posição ✓. As outras falham em alguma dica (ex.: 527 dá dois dígitos de “052” em posição errada).</p><p class="hint">Dica de prova: testar as alternativas contra todas as dicas costuma ser mais rápido que deduzir do zero.</p>' },
    { badge: 'Estilo ENA · prova por absurdo', text: 'Deseja-se provar por absurdo que $√2$ é irracional.', cmd: 'O <strong>primeiro passo</strong> da prova é supor que:', opts: ['$√2$ é irracional', '$√2$ é racional, isto é, $√2 = p/q$ com $p, q$ inteiros', '$√2$ é um número inteiro', '2 é um quadrado perfeito', '2 é irracional'], a: 1,
      sol: '<p>Numa prova por absurdo supõe-se o <strong>contrário</strong> do que se quer provar: se queremos “$√2$ é irracional”, supomos “$√2$ é racional”, escrevendo $√2 = p/q$, e buscamos uma contradição.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'success',
  h1: 'Monte a <span style="color:var(--growth);">demonstração</span>',
  subtitle: 'Três resoluções estão embaralhadas. Toque nos passos <strong>na ordem lógica</strong> para reconstruir cada prova — treino de organizar o raciocínio.',
  tpl: cOrdenar({
    intro: 'Cada problema tem passos fora de ordem. Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante. Passos fora de lugar são rejeitados.',
    final: 'Uma demonstração é uma cadeia: cada linha decorre da anterior.',
    problemas: [
      { titulo: 'Prova por absurdo', enunciado: 'Mostre que não existe inteiro $n$ com $2n = 7$.', passos: ['Suponha, por absurdo, que existe um inteiro $n$ com $2n = 7$.', 'Então 7 é múltiplo de 2, isto é, 7 é par.', 'Mas 7 é ímpar ($7 = 2·3 + 1$).', 'Contradição! A suposição é falsa: não existe tal inteiro.'] },
      { titulo: 'Paridade', enunciado: 'Mostre que o quadrado de um número ímpar é ímpar.', passos: ['Seja $n$ ímpar, isto é, $n = 2k + 1$ com $k$ inteiro.', 'Eleve ao quadrado: $n^2 = (2k + 1)^2 = 4k^2 + 4k + 1$.', 'Fatore o 2: $n^2 = 2(2k^2 + 2k) + 1$.', 'Como $2k^2 + 2k$ é inteiro, $n^2$ tem a forma $2m + 1$: é ímpar.'] },
      { titulo: 'Eliminação', enunciado: 'Resolva a senha da ENA 2026 Q22 (dicas 012, 678, 904, 456).', passos: ['Elimine os dígitos “não presentes”: 0, 1, 2, 6, 7 e 8.', 'Em “904”, sem o 0, concluímos que 9 e 4 estão na senha.', 'Pelas posições erradas: o 9 não é o 1º e o 4 não é o 3º.', 'Em “456” só o 4 está certo (5 e 6 eliminados) e fora da 1ª posição: o 4 é o 2º dígito.', 'Então o 9 é o 3º e o 1º é o dígito que sobra, 3. Senha 349.'] }
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'decay',
  h1: 'Lógica: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Seis etapas de contagem em lógica: tabelas-verdade, contraexemplos, regras de sequência e eliminação. Responda com número.',
  final: 'Contar casos é a forma mais segura de testar uma regra lógica.',
  problems: [
    { tag: 'Tabela-verdade', q: 'Quantas linhas tem a tabela-verdade de uma proposição com <strong>3</strong> proposições simples ($P, Q, R$)?', a: 8, hint: 'Cada proposição tem 2 valores: $2 · 2 · 2$.', sol: '<p>$2^3 = 8$ linhas.</p>' },
    { tag: 'Implicação', q: 'Nas 4 combinações de valores de $(P, Q)$, em quantas $P ⇒ Q$ é <strong>verdadeira</strong>?', a: 3, hint: 'Só é falsa com $P$ verdadeira e $Q$ falsa.', sol: '<p>Falsa apenas em (V, F). Verdadeira nas outras <strong>3</strong>.</p>' },
    { tag: 'Equivalência', q: 'Em quantas das 4 combinações $P ⇔ Q$ é verdadeira?', a: 2, hint: 'Verdadeira quando $P$ e $Q$ têm o mesmo valor.', sol: '<p>(V, V) e (F, F): <strong>2</strong>.</p>' },
    { tag: 'Contraexemplos', q: 'Entre os inteiros de 1 a 20, quantos são contraexemplos de “se $n$ é múltiplo de 3, então $n$ é ímpar”?', a: 3, hint: 'Procure múltiplos de 3 que sejam <strong>pares</strong>.', sol: '<p>Múltiplos de 3 pares até 20: 6, 12, 18 → <strong>3</strong>.</p>' },
    { tag: 'Sequência V/F', q: 'Das 32 sequências V/F de 5 respostas, quantas obedecem às regras do ENA 2026 Q25 (mais V que F; nunca 3 iguais seguidas; 1ª e 5ª contrárias; 2ª é F)?', a: 1, hint: 'O raciocínio por casos já mostrou que sobra uma só.', sol: '<p>Só <strong>V F V V F</strong>: <strong>1</strong> sequência.</p>' },
    { tag: 'Eliminação', q: 'Dicas eliminam os dígitos 0, 1, 2, 6, 7 e 8. Quantos dígitos <strong>restam</strong> como possíveis na senha?', a: 4, hint: 'Há 10 dígitos (0 a 9).', sol: '<p>$10 − 6 = 4$: restam 3, 4, 5 e 9.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
