// Unidade 4 — Lógica, contraexemplos e demonstração (capítulo 4)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W, vfBlock } = K;
const DIR = 'ena-profmat/04-logica-demonstracao/';
const out = [];

// ====================== AULA 1: proposições, conectivos, negações ======================
const a = [];
a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 4 · Aula 1', h1: 'Lógica: <span style="color:var(--primary);">conectivos e negações</span>',
  sub: 'E, ou, não, “se… então” e “se e somente se”. Como negar frases com “todo” e “existe” e por que a contrapositiva é equivalente — e a recíproca não.',
  badges: [['5 questões em 60'], ['P ⇒ Q só falha se P é V e Q é F', 'growth'], ['¬Q ⇒ ¬P ≡ P ⇒ Q', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Poucas regras, usadas com muito cuidado.', [
  ['Proposições e conectivos', '∧, ∨, ¬, ⇒, ⇔ e a tabela-verdade', 'check'],
  ['“Se… então”', 'quando é falsa? a promessa quebrada', 'scale'],
  ['Negações', 'todo/existe, e/ou, se/então (De Morgan)', 'warn'],
  ['Contrapositiva, recíproca e inversa', 'qual é equivalente?', 'link'],
  ['Treino rápido', 'verdadeiro ou falso?', 'bulb']
]));
a.push(objetivosSlide([
  'Montar a <strong>tabela-verdade</strong> dos conectivos e reconhecer <strong>equivalências</strong>.',
  'Dizer quando “se P então Q” é <strong>falsa</strong>.',
  '<strong>Negar</strong> frases com “todo”, “existe”, “e”, “ou” e “se… então”.',
  'Distinguir <strong>contrapositiva</strong> (equivalente) de <strong>recíproca</strong> (não equivalente).'
], 'Em prova', 'Lógica no ENA é raciocínio puro: quase nenhuma conta, muita atenção ao texto. Negar corretamente é metade do trabalho.', 'growth', 'growth-ink'));

a.push(sl('Para início de conversa', 'Como se nega “todos foram aprovados”?', `
          ${lede('Uma notícia diz: “<strong>Todos os alunos</strong> foram aprovados.” A notícia é falsa. O que isso significa?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A negação de “todos os alunos foram aprovados” é:', ['Nenhum aluno foi aprovado', 'Pelo menos um aluno não foi aprovado', 'Todos os alunos foram reprovados', 'Existe aluno aprovado'], 1, 'Para <strong>desmentir</strong> “todos”, basta <strong>um</strong> contra-exemplo: pelo menos um aluno não foi aprovado. “Nenhum aprovado” é bem mais forte — é o oposto extremo, não a negação.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Negar não é “dizer o contrário”: é dizer exatamente o que torna a frase <strong>falsa</strong>. Para “todos”, basta existir uma exceção.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

a.push(sl('Teoria · conectivos', 'Os cinco conectivos e a tabela-verdade', `
          ${lede('Uma <strong>proposição</strong> é uma frase que é verdadeira ou falsa. Com os conectivos, formamos outras:')}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${tbl(['Símbolo', 'Lê-se', 'Verdadeira quando'], [['$P ∧ Q$', 'P e Q', 'as duas são V'], ['$P ∨ Q$', 'P ou Q (inclusivo)', 'pelo menos uma é V'], ['$¬P$', 'não P', 'P é F'], ['$P ⇒ Q$', 'se P então Q', 'exceto P V e Q F'], ['$P ⇔ Q$', 'P se e só se Q', 'têm o mesmo valor']])}
            </div>
            ${W.box('Tabela-verdade ao vivo', W.row(W.sel('l1-p', 'P', ['V', 'F'], 0), W.sel('l1-q', 'Q', ['V', 'F'], 1)) + '<div id="l1-r" style="margin-top:10px;font-size:.95rem;line-height:1.9;"></div>')}
          </div>`, { cls: 'growth' }));

a.push(sl('Teoria · “se… então”', 'Quando uma promessa é falsa?', `
          ${lede('“<strong>Se</strong> eu passar no exame, <strong>então</strong> comemoro.” Só se mente nessa promessa quando <strong>passei e não comemorei</strong>. Nos outros casos a promessa não foi quebrada.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['P (passou)', 'Q (comemorou)', 'P ⇒ Q'], [['V', 'V', 'V'], ['V', 'F', '<strong style="color:var(--danger);">F</strong>'], ['F', 'V', 'V'], ['F', 'F', 'V']])}
            ${mini('Quando “se chove, a rua molha” é falsa?', ['Chove e a rua molha', 'Não chove e a rua molha', 'Chove e a rua <strong>não</strong> molha', 'Não chove e a rua não molha'], 2, 'Só quando a premissa (<em>chove</em>) é verdadeira e a conclusão (<em>a rua molha</em>) é falsa. Se não chove, a promessa nada afirma — fica verdadeira.')}
          </div>`, { cls: 'growth' }));

a.push(sl('Teoria · negações', 'Como negar corretamente', `
          <div class="grid2">
            <div>
              ${tbl(['Afirmação', 'Negação'], [['Todo A é B', 'Existe A que <strong>não</strong> é B'], ['Existe A que é B', 'Nenhum A é B'], ['$P ∧ Q$', '$¬P ∨ ¬Q$'], ['$P ∨ Q$', '$¬P ∧ ¬Q$'], ['$P ⇒ Q$', '$P ∧ ¬Q$']])}
              ${callout('Leis de De Morgan', '$¬(P ∧ Q) = ¬P ∨ ¬Q$ e $¬(P ∨ Q) = ¬P ∧ ¬Q$: trocar “e” por “ou” ao negar.', 'success')}
            </div>
            ${W.box('Negador de frases', W.sel('l2-s', 'Frase', ['Todos os alunos foram aprovados', 'Existe número primo par', 'Chove e faz frio', 'Estudo ou trabalho', 'Se chove, a rua molha', 'Todo múltiplo de 4 é par'], 0) + '<p class="small" style="margin:10px 0 2px;">Negação:</p><div class="out" id="l2-n" style="font-size:1.05rem;"></div>' + W.hint('l2-h'))}
          </div>`, { cls: 'growth' }));

a.push(sl('Teoria · equivalências', 'Contrapositiva, recíproca e inversa', `
          ${lede('A partir de $P ⇒ Q$ (“se chove, a rua molha”) formamos três outras frases. <strong>Só a contrapositiva é equivalente</strong>:')}
          <div class="grid2" style="margin-top:6px;">
            <div>
              ${tbl(['Frase', 'Texto', 'Equivalente?'], [['Original $P ⇒ Q$', 'se chove, a rua molha', '—'], ['Contrapositiva $¬Q ⇒ ¬P$', 'se a rua não molha, não chove', '<strong style="color:var(--success);">sim</strong>'], ['Recíproca $Q ⇒ P$', 'se a rua molha, chove', '<strong style="color:var(--danger);">não</strong>'], ['Inversa $¬P ⇒ ¬Q$', 'se não chove, a rua não molha', '<strong style="color:var(--danger);">não</strong>']])}
            </div>
            ${W.box('Compare duas frases', W.row(W.sel('l3-a', 'Frase 1', ['P ⇒ Q', '¬P ∨ Q', '¬Q ⇒ ¬P', 'Q ⇒ P', 'P ∧ ¬Q', '¬(P ∧ Q)', '¬P ∨ ¬Q', '¬(P ∨ Q)', '¬P ∧ ¬Q', 'P ⇔ Q'], 0), W.sel('l3-b', 'Frase 2', ['P ⇒ Q', '¬P ∨ Q', '¬Q ⇒ ¬P', 'Q ⇒ P', 'P ∧ ¬Q', '¬(P ∧ Q)', '¬P ∨ ¬Q', '¬(P ∨ Q)', '¬P ∧ ¬Q', 'P ⇔ Q'], 2)) + '<div id="l3-r" style="margin-top:8px;font-size:.9rem;"></div>' + W.hint('l3-h'))}
          </div>`, { cls: 'growth' }));

a.push(exemplo('Treino 4.1', 'Negue e transforme', 'Escreva a negação de “todos os alunos foram aprovados” e a contrapositiva de “se chove, a rua molha”.', [
  ['Negação de “todos”', '“Pelo menos um aluno <strong>não</strong> foi aprovado.” (existe um contra-exemplo)'],
  ['Contrapositiva', 'Troque e negue: “se a rua <strong>não</strong> molha, então <strong>não</strong> chove.”'],
  ['Verificação', 'A contrapositiva é equivalente; a recíproca (“se molha, chove”) não é — a rua pode molhar por outra causa.']
], 'Negação e contrapositiva são duas ferramentas diferentes: uma <strong>nega</strong> a frase, a outra a <strong>reescreve</strong> de forma equivalente.', 'growth'));

a.push(sl('Verdadeiro ou falso?', 'Teste rápido de conceitos', `
          ${lede('Clique em cada afirmação para ver se é verdadeira e por quê.')}
          ${vfBlock([
  ['A negação de “Todo A é B” é “Nenhum A é B”.', false, 'Falso. A negação é “Existe A que <strong>não</strong> é B”. “Nenhum A é B” é muito mais forte.'],
  ['A contrapositiva de $P ⇒ Q$ é $¬Q ⇒ ¬P$ e é equivalente à original.', true, 'Verdadeiro. As duas só são falsas no mesmo caso: $P$ verdadeira e $Q$ falsa.'],
  ['A recíproca $Q ⇒ P$ é sempre equivalente a $P ⇒ Q$.', false, 'Falso. “Se chove, a rua molha” não garante “se a rua molha, chove”.'],
  ['$P ⇒ Q$ é falsa somente quando $P$ é verdadeira e $Q$ é falsa.', true, 'Verdadeiro. Se $P$ é falsa, a implicação é verdadeira (não há promessa a cumprir).']
])}`, { cls: 'growth' }));

a.push(armadilhas('Cuidado', 'Onde se perde ponto em lógica', [
  ['Negar “todo” com “nenhum”', 'A negação de “todos” é “pelo menos um não”. “Nenhum” é a negação de “existe”.'],
  ['Trocar contrapositiva por recíproca', 'Contrapositiva: inverta <strong>e</strong> negue ($¬Q ⇒ ¬P$). Só inverter ($Q ⇒ P$) é a recíproca — outra frase.'],
  ['“Ou” exclusivo', 'Em matemática, “ou” é inclusivo: vale se pelo menos uma parte vale (inclusive as duas).'],
  ['Achar que premissa falsa “refuta”', 'Se $P$ é falsa, $P ⇒ Q$ é verdadeira. Para refutar, é preciso $P$ verdadeira e $Q$ falsa.']
]));

a.push(quiz([
  { q: 'A negação de “Existe número primo par” é:', o: ['Todo número primo é par', 'Nenhum número primo é par', 'Existe primo ímpar', 'Todo primo é ímpar ou par'], a: 1 },
  { q: 'A contrapositiva de “se $n$ é múltiplo de 6, então $n$ é par” é:', o: ['se $n$ é par, então $n$ é múltiplo de 6', 'se $n$ não é par, então $n$ não é múltiplo de 6', 'se $n$ não é múltiplo de 6, então $n$ não é par', 'se $n$ é ímpar, então $n$ é múltiplo de 6'], a: 1 },
  { q: 'A negação de “Chove <strong>e</strong> faz frio” é:', o: ['Não chove e não faz frio', 'Não chove ou não faz frio', 'Chove ou faz frio', 'Não chove e faz frio'], a: 1 },
  { q: 'Quando $P ⇒ Q$ é falsa?', o: ['$P$ F e $Q$ V', '$P$ F e $Q$ F', '$P$ V e $Q$ F', '$P$ V e $Q$ V'], a: 2 }
]));
a.push(fechamento([
  ['Implicação', '$P ⇒ Q$ só é falsa quando $P$ é V e $Q$ é F.'],
  ['Negações', 'Todo → existe não; e ↔ ou (De Morgan); $P ⇒ Q$ → $P ∧ ¬Q$.'],
  ['Equivalência', 'Contrapositiva é equivalente; recíproca e inversa não.']
], 'Negar é dizer exatamente o que torna a frase falsa.'));

out.push({ out: DIR + 'aula-1-conectivos-negacoes.html', html: K.deck({
  title: 'Lógica: conectivos e negações — ENA · PROFMAT', brand: 'Lógica', key: 'c4a1', meta: 'Capítulo 4 · Aula 1 · Conectivos e negações', slides: a,
  extra: WJS + BIND + String.raw`
  function ev(k, P, Q){ switch(k){ case 0: return !P || Q; case 1: return !P || Q; case 2: return Q || !P; case 3: return !Q || P; case 4: return P && !Q; case 5: return !(P && Q); case 6: return !P || !Q; case 7: return !(P || Q); case 8: return !P && !Q; case 9: return P === Q; } }
  bind(['l1-p', 'l1-q'], function(){ var P = $('l1-p').value === '0', Q = $('l1-q').value === '0'; function V(b){ return '<b style="color:' + (b ? 'var(--success)' : 'var(--danger)') + ';">' + (b ? 'V' : 'F') + '</b>'; } $('l1-r').innerHTML = 'P ∧ Q = ' + V(P && Q) + '<br>P ∨ Q = ' + V(P || Q) + '<br>¬P = ' + V(!P) + '<br>P ⇒ Q = ' + V(!P || Q) + '<br>P ⇔ Q = ' + V(P === Q); });
  var NEG = [['Pelo menos um aluno não foi aprovado.', 'Para negar “todos”, basta uma exceção.'], ['Nenhum número primo é par.', 'Negação de “existe”: nenhum. (Aqui a frase original é verdadeira: o 2.)'], ['Não chove ou não faz frio.', 'De Morgan: ¬(P ∧ Q) = ¬P ∨ ¬Q.'], ['Não estudo e não trabalho.', 'De Morgan: ¬(P ∨ Q) = ¬P ∧ ¬Q.'], ['Chove e a rua não molha.', 'A negação de P ⇒ Q é P ∧ ¬Q.'], ['Existe múltiplo de 4 que não é par.', 'Essa negação é falsa porque a frase original é verdadeira.']];
  bind(['l2-s'], function(){ var i = +$('l2-s').value; $('l2-n').textContent = NEG[i][0]; $('l2-h').textContent = NEG[i][1]; });
  bind(['l3-a', 'l3-b'], function(){ var A = +$('l3-a').value, B = +$('l3-b').value, rows = [[true, true], [true, false], [false, true], [false, false]], eq = true, h = '<table class="tbl" style="margin:0;"><tr><th>P</th><th>Q</th><th>Frase 1</th><th>Frase 2</th></tr>';
    rows.forEach(function(r){ var x = ev(A, r[0], r[1]), y = ev(B, r[0], r[1]); if(x !== y) eq = false; function V(b){ return b ? 'V' : 'F'; } h += '<tr><td>' + V(r[0]) + '</td><td>' + V(r[1]) + '</td><td>' + V(x) + '</td><td style="' + (x !== y ? 'color:var(--danger);font-weight:700;' : '') + '">' + V(y) + '</td></tr>'; });
    $('l3-r').innerHTML = h + '</table>'; $('l3-h').textContent = eq ? '✔ As duas frases têm a mesma tabela-verdade: são equivalentes.' : '✘ Tabelas diferentes: as frases não são equivalentes.'; });`
}) });

// ====================== AULA 2: contraexemplo, eliminação, casos, absurdo ======================
const b = [];
b.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 4 · Aula 2', h1: 'Contraexemplos, <span style="color:var(--growth);">eliminação</span> e demonstração',
  sub: 'Como derrubar uma “verdade” falsa com um único exemplo, resolver senhas e testes por eliminação e entender as provas por casos e por absurdo.',
  badges: [['ENA 2026 Q11, Q22, Q25'], ['ENA 2025 Q3, Q17'], ['Um contraexemplo basta', 'growth']], color: 'growth'
}));
b.push(roteiroSlide('Do exemplo que refuta à prova que garante.', [
  ['Contraexemplo', 'P verdadeira e Q falsa', 'target'],
  ['“Verdades” que são falsas', 'α²=1, x>y, √(a²), (a+b)²…', 'warn'],
  ['Eliminação (senhas)', 'ENA 2026 Q22', 'check'],
  ['Sequências V/F', 'ENA 2026 Q25', 'chart'],
  ['Prova por absurdo e por casos', 'ENA 2025 Q17: √3^√2', 'bulb']
]));
b.push(objetivosSlide([
  'Refutar uma afirmação com um <strong>contraexemplo válido</strong>.',
  'Reconhecer as <strong>“verdades” falsas</strong> mais comuns (potências, raízes, desigualdades).',
  'Resolver problemas de <strong>eliminação e casos</strong> (senhas, V/F em sequência).',
  'Entender uma <strong>prova por casos</strong> e uma prova <strong>não construtiva</strong>.'
], 'Em prova', 'Cinco questões do ENA em dois anos. Elas valem tanto quanto geometria, mas quase não exigem conta.', 'growth', 'growth-ink'));

b.push(sl('Para início de conversa', 'x > y implica x² > y²?', `
          ${lede('Tente com números: $x = 3$, $y = 2$ → $9 > 4$ ✓. Parece sempre verdade… mas e se os números forem negativos?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Qual par mostra que “$x > y ⇒ x^2 > y^2$” é falsa?', ['$x = 5,\\ y = 3$', '$x = −1,\\ y = −2$', '$x = 2,\\ y = 2$', '$x = 0,\\ y = 3$'], 1, '$−1 > −2$ é verdadeira, mas $(−1)^2 = 1$ e $(−2)^2 = 4$, então $1 > 4$ é falsa. Um único caso assim <strong>derruba</strong> a afirmação geral.')}
            ${card('<strong>Contraexemplo</strong><p style="font-size:.92rem;margin-top:8px;">Para refutar “$P ⇒ Q$”, ache um caso com <strong>$P$ verdadeira e $Q$ falsa</strong>. Um exemplo em que a premissa é falsa não refuta nada; um em que a conclusão é verdadeira também não.</p>', 'growth')}
          </div>`, { cls: 'growth' }));

b.push(sl('Ferramenta', 'Testador de contraexemplos', `
          ${lede('Escolha uma afirmação, digite valores e veja se é um contraexemplo válido — ou por que não é.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Afirmação “P ⇒ Q”', W.sel('x1-s', 'Afirmação', ['α² = 1 ⇒ α = 1', 'x > y ⇒ x² > y²', '√(a²) = a (para todo a)', '(a + b)² = a² + b²', 'n primo ⇒ n ímpar', 'a < b ⇒ 1/a > 1/b'], 1) + W.row(W.nm('x1-a', 'x / α / a / n', -1, 1), W.nm('x1-b', 'y / b', -2, 1)) + '<div id="x1-r" style="margin-top:10px;font-weight:700;"></div>' + W.hint('x1-h'))}
            ${callout('Lembre', 'Contraexemplo válido = premissa <strong>verdadeira</strong> e conclusão <strong>falsa</strong>. Se a premissa é falsa, ou a conclusão é verdadeira, nada se refuta.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(sl('Cuidado', '“Verdades” que são falsas', `
          <div class="grid2" style="margin-top:6px;">
            ${card('<strong>$α^2 = 1 ⇒ α = 1$</strong> ✗<p style="font-size:.88rem;margin-top:6px;">contraexemplo $α = −1$.</p>', 'danger')}
            ${card('<strong>$x > y ⇒ x^2 > y^2$</strong> ✗<p style="font-size:.88rem;margin-top:6px;">contraexemplo $x = −1,\\ y = −2$. Só vale para $x, y ≥ 0$.</p>', 'danger')}
            ${card('<strong>$√{a^2} = a$</strong> ✗<p style="font-size:.88rem;margin-top:6px;">para $a < 0$: $√{a^2} = ∣a∣$.</p>', 'danger')}
            ${card('<strong>$(a + b)^2 = a^2 + b^2$</strong> ✗ e <strong>$√{a + b} = √a + √b$</strong> ✗<p style="font-size:.88rem;margin-top:6px;">falta o $2ab$.</p>', 'danger')}
            ${card('<strong>$a/b = 4/7 ⇒ a = 4,\\ b = 7$</strong> ✗<p style="font-size:.88rem;margin-top:6px;">frações equivalentes: $8/14$.</p>', 'danger')}
            ${card('<strong>“Primos são ímpares”</strong> ✗<p style="font-size:.88rem;margin-top:6px;">contraexemplo: o 2. E $a < b ⇒ 1/a > 1/b$ só se $a, b$ têm o mesmo sinal.</p>', 'danger')}
          </div>`, { cls: 'danger' }));

b.push(ja('ENA 2025 · Q3', 'Contraexemplos para duas afirmações falsas',
  'As afirmações são falsas: <strong>I)</strong> para todo real $α$, $α^2 = 1 ⇒ α = 1$; <strong>II)</strong> para reais $x, y$, $x > y ⇒ x^2 > y^2$. Qual alternativa traz contraexemplos para <strong>ambas</strong>?',
  ['$α = 1,\\ x = 2,\\ y = 1$', '$α = −1,\\ x = −1,\\ y = −2$', '$α = −1/2,\\ x = 3,\\ y = 1$', '$α = 2,\\ x = 0,\\ y = −1$', '$α = 0,\\ x = 1,\\ y = −1$'], 1,
  'I: $α = −1$ tem $α^2 = 1$ e $α ≠ 1$ ✓. II: $−1 > −2$, mas $1 < 4$ ✓. As outras falham: em A, $α = 1$ satisfaz a conclusão; em C e E, $α^2 ≠ 1$ (premissa falsa); em D, $α = 2$ também. <strong>Alternativa B.</strong>'));

b.push(ja('ENA 2026 · Q11', 'Quais afirmações são verdadeiras?',
  '<strong>I)</strong> $a, b$ inteiros positivos com $a/b = 4/7 ⇒ a = 4$ e $b = 7$. <strong>II)</strong> $a$ real ⇒ $√{a^2} = a$. <strong>III)</strong> $a$ real ⇒ $∛{a^3} = a$. O que é correto?',
  ['I, apenas', 'III, apenas', 'I e II, apenas', 'II e III, apenas', 'I, II e III'], 1,
  'I é falsa: $8/14 = 4/7$. II é falsa: $√{a^2} = ∣a∣$ (contraexemplo $a = −3$). III é verdadeira: raiz de <strong>índice ímpar</strong> preserva o sinal. <strong>Alternativa B.</strong>'));

b.push(sl('Eliminação · senhas', 'Qual é a senha? (ENA 2026 Q22)', `
          ${lede('Senha de <strong>3 dígitos</strong> (0–9). Dicas: <b class="mono">012</b>: nenhum dígito presente · <b class="mono">678</b>: nenhum presente · <b class="mono">904</b>: dois dígitos presentes, ambos em posições erradas · <b class="mono">456</b>: um dígito presente, em posição errada.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Teste uma senha', W.nm('s1-n', 'Senha (3 dígitos)', '349', 1, 'min="0" max="999"') + '<div id="s1-r" style="margin-top:10px;font-size:.9rem;line-height:1.8;"></div>' + W.hint('s1-h'))}
            ${callout('Raciocínio', 'Elimine 0,1,2,6,7,8. Em “904”, o 0 não existe → <strong>9 e 4</strong> estão na senha: o 9 não é o 1º; o 4 não é o 3º. Em “456”, só um certo (o 4), então 5 e 6 não estão, e o 4 não é o 1º → <strong>4 é o 2º</strong>, 9 é o 3º e o 1º é o dígito que sobra: <strong>3</strong>. Senha <strong>349</strong>.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q22', 'A senha do cofre',
  'Senha de 3 dígitos (0–9). “012”: nenhum dígito presente. “678”: nenhum presente. “904”: dois dígitos presentes, ambos em posições erradas. “456”: um dígito presente, em posição errada. Qual a senha?',
  ['394', '439', '493', '349', '934'], 3,
  'Eliminados: 0, 1, 2, 6, 7, 8. De “904”: o 9 e o 4 estão na senha, o 9 não na 1ª e o 4 não na 3ª. De “456”: só o 4 está certo e fora do 1º lugar → 4 é a 2ª. O 9 só pode ser a 3ª; a 1ª é o dígito restante, 3. <strong>Senha 349 — alternativa D.</strong>'));

b.push(sl('Eliminação · V/F em sequência', 'Teste com cinco questões V/F (ENA 2026 Q25)', `
          ${lede('Regras: há <strong>mais V que F</strong>; <strong>nunca três seguidas</strong> iguais; a <strong>1ª e a 5ª</strong> têm valores contrários; a <strong>2ª é F</strong>. Monte a sequência e veja quais regras falham.')}
          <div class="grid2" style="margin-top:6px;">
            ${W.box('Monte as respostas', '<div class="row" id="v1-b"></div><div id="v1-r" style="margin-top:10px;font-size:.92rem;line-height:1.8;"></div>' + W.hint('v1-h'))}
            ${callout('Raciocínio por casos', 'Se a 1ª fosse F, a 5ª seria V; para ter mais V que F, 3ª e 4ª seriam V → V V V nas posições 3-4-5: proibido. Logo a 1ª é V e a 5ª é F. Com a 2ª F: para ter ≥ 3 V, precisamos 3ª e 4ª V → <strong>V F V V F</strong>.', 'success')}
          </div>`, { cls: 'growth' }));

b.push(ja('ENA 2026 · Q25', 'As respostas do teste V/F',
  'Teste com 5 questões V/F. Há mais verdadeiras que falsas; nunca três seguidas iguais; a 1ª e a 5ª têm valores contrários; a 2ª é falsa. Quais as respostas, em ordem?',
  ['V V F V F', 'F F V V V', 'V F F V F', 'V F V F V', 'V F V V F'], 4,
  'Se a 1ª fosse F, a 5ª seria V e, para ter mais V que F, a 3ª e a 4ª seriam V → V, V, V nas posições 3-4-5: proibido. Logo a 1ª é V e a 5ª é F. Com 2ª = F, precisamos de 3 V entre 5: 3ª e 4ª = V → <strong>V, F, V, V, F</strong> (não há três iguais seguidas). <strong>Alternativa E.</strong>'));

b.push(sl('Demonstração', 'Prova por absurdo e prova por casos', `
          <div class="grid2">
            ${card('<strong>Por absurdo</strong><p style="font-size:.9rem;margin-top:8px;">Suponha o contrário do que quer provar e chegue a algo impossível. Ex.: não existe inteiro $n$ com $2n = 7$: se existisse, 7 seria par; mas 7 é ímpar — absurdo.</p>', 'growth')}
            ${card('<strong>Por casos</strong><p style="font-size:.9rem;margin-top:8px;">Se você não sabe qual de duas situações ocorre, analise as <strong>duas</strong> e mostre que em ambas a conclusão vale.</p>', 'decay')}
          </div>
          ${callout('Prova não construtiva (ENA 2025 Q17)', 'Seja $z = √3^{√2}$. <strong>Caso 1:</strong> $z$ é racional → temos irracional elevado a irracional dando racional. <strong>Caso 2:</strong> $z$ é irracional → $z^{√2} = √3^{√2·√2} = √3^2 = 3$, racional. Em ambos os casos, existem irracionais $x, y$ com $x^y$ racional — sem dizer <strong>qual</strong> caso ocorre.', 'success')}`, { cls: 'growth' }));

b.push(ja('ENA 2025 · Q17', 'O argumento de √3^√2',
  'Se $√3^{√2}$ for racional, temos irracional elevado a irracional dando racional. Se for irracional, $(√3^{√2})^{√2} = √3^2 = 3$. O que o argumento prova?',
  ['todo irracional elevado a irracional é racional', '$√3^{√2}$ é irracional', '$√3^{√2}$ é racional', 'existem $x, y$ irracionais tais que $x^y$ é racional', 'nenhum irracional elevado a irracional é racional'], 3,
  'Em cada caso exibimos um par irracional–irracional cuja potência é racional (caso 1: $√3, √2$; caso 2: $√3^{√2}, √2$). O argumento <strong>não decide</strong> qual dos casos ocorre; garante apenas a existência. <strong>Alternativa D.</strong>'));

b.push(exemplo('Treino 4.4 · absurdo', 'Prove por absurdo que 2n = 7 não tem solução inteira', 'Não existe inteiro $n$ com $2n = 7$.', [
  ['Suponha o contrário', 'Existe inteiro $n$ com $2n = 7$.'],
  ['Deduza', 'Então 7 seria múltiplo de 2, isto é, <strong>par</strong>.'],
  ['Ache o absurdo', 'Mas 7 é ímpar. Contradição.'],
  ['Conclua', 'A suposição é falsa: não existe tal inteiro.']
], 'A negação de “existe aluno que gosta de matemática” é “<strong>nenhum</strong> aluno gosta de matemática”.', 'growth'));

b.push(armadilhas('Cuidado', 'Onde se perde ponto em contraexemplos e provas', [
  ['Contraexemplo com premissa falsa', 'Em $α^2 = 1 ⇒ α = 1$, o valor $α = 1/2$ não refuta: a premissa é falsa. O contraexemplo precisa de $α^2 = 1$ e $α ≠ 1$.'],
  ['Ler errado o “apenas”', '“II e III, apenas” e “III, apenas” são alternativas diferentes. Marque cada afirmação V ou F antes de olhar as opções.'],
  ['Esquecer o raciocínio por casos', 'Em sequências V/F e senhas, teste a hipótese mais restritiva primeiro e procure a contradição.'],
  ['Provar com um exemplo', 'Um exemplo não prova uma afirmação “para todo”. Só serve para refutar (contraexemplo) ou para ter a ideia.']
]));

b.push(quiz([
  { q: 'Um contraexemplo para “se $n$ é primo, então $n$ é ímpar” é:', o: ['$n = 3$', '$n = 9$', '$n = 2$', '$n = 1$'], a: 2 },
  { q: 'Qual é verdadeira para todo real $a$?', o: ['$√{a^2} = a$', '$∛{a^3} = a$', '$a^2 > a$', '$(a + 1)^2 = a^2 + 1$'], a: 1 },
  { q: 'Para refutar “$P ⇒ Q$” precisamos de um caso em que:', o: ['$P$ e $Q$ são falsas', '$P$ é falsa e $Q$ é verdadeira', '$P$ é verdadeira e $Q$ é falsa', '$P$ e $Q$ são verdadeiras'], a: 2 },
  { q: 'Numa prova por absurdo, começamos:', o: ['supondo o que queremos provar', 'supondo o contrário do que queremos provar', 'testando um exemplo', 'negando as hipóteses'], a: 1 }
]));
b.push(fechamento([
  ['Contraexemplo', 'Premissa verdadeira e conclusão falsa. Um caso basta para refutar.'],
  ['Eliminação', 'Liste o que cada dica elimina; teste a hipótese mais restritiva e procure contradição.'],
  ['Demonstração', 'Absurdo: suponha o contrário. Casos: analise todas as possibilidades.']
], 'Para refutar, um exemplo basta; para provar, é preciso argumentar.'));

out.push({ out: DIR + 'aula-2-contraexemplos-eliminacao-demonstracao.html', html: K.deck({
  title: 'Contraexemplos, eliminação e demonstração — ENA · PROFMAT', brand: 'Lógica', key: 'c4a2', meta: 'Capítulo 4 · Aula 2 · Contraexemplos e demonstração', slides: b,
  extra: WJS + BIND + String.raw`
  var AF = [
    function(a, b){ return [a * a === 1, a === 1]; },
    function(x, y){ return [x > y, x * x > y * y]; },
    function(a){ return [true, Math.sqrt(a * a) === a]; },
    function(a, b){ return [true, (a + b) * (a + b) === a * a + b * b]; },
    function(n){ function pr(k){ if(k < 2) return false; for(var i = 2; i * i <= k; i++) if(k % i === 0) return false; return true; } return [pr(n), n % 2 !== 0]; },
    function(a, b){ return [a < b && a !== 0 && b !== 0, 1 / a > 1 / b]; }
  ];
  bind(['x1-s', 'x1-a', 'x1-b'], function(){ var k = +$('x1-s').value, a = +$('x1-a').value, b = +$('x1-b').value, r = AF[k](a, b), P = r[0], Q = r[1], el = $('x1-r');
    if(P && !Q){ el.textContent = '✔ Contraexemplo válido!'; el.style.color = 'var(--success)'; $('x1-h').textContent = 'Premissa verdadeira e conclusão falsa: a afirmação geral é falsa.'; }
    else if(!P){ el.textContent = '✘ Não refuta: a premissa é falsa.'; el.style.color = 'var(--danger)'; $('x1-h').textContent = 'Com premissa falsa, “P ⇒ Q” é verdadeira. Escolha valores que satisfaçam a premissa.'; }
    else { el.textContent = '✘ Não refuta: a conclusão é verdadeira.'; el.style.color = 'var(--danger)'; $('x1-h').textContent = 'Premissa e conclusão verdadeiras: este caso apenas “confirma”. Procure outro.'; } });
  var DICAS = [['012', 0, 0], ['678', 0, 0], ['904', 2, 0], ['456', 1, 0]];
  bind(['s1-n'], function(){ var v = String(Math.round(+$('s1-n').value)); while(v.length < 3) v = '0' + v; v = v.slice(-3); var ok = true, h = ''; DICAS.forEach(function(d){ var pres = 0, cert = 0; for(var i = 0; i < 3; i++){ if(v.indexOf(d[0][i]) >= 0) pres++; if(v[i] === d[0][i]) cert++; } var bom = pres === d[1] && cert === d[2]; if(!bom) ok = false; h += '<b class="mono">' + d[0] + '</b>: presentes ' + pres + ' (esperado ' + d[1] + '), posição certa ' + cert + ' (esperado ' + d[2] + ') <span style="color:' + (bom ? 'var(--success)' : 'var(--danger)') + ';font-weight:700;">' + (bom ? '✔' : '✘') + '</span><br>'; }); $('s1-r').innerHTML = h; $('s1-h').textContent = ok ? 'Senha ' + v + ' satisfaz todas as dicas!' : 'A senha ' + v + ' não satisfaz todas as dicas.'; });
  var vv = [true, false, true, true, false];
  function vdraw(){ var box = $('v1-b'); box.innerHTML = ''; vv.forEach(function(x, i){ var b = document.createElement('button'); b.type = 'button'; b.className = 'chip' + (x ? ' on' : ''); b.textContent = (i + 1) + 'ª: ' + (x ? 'V' : 'F'); b.addEventListener('click', function(){ vv[i] = !vv[i]; vdraw(); }); box.appendChild(b); });
    var nV = vv.filter(function(x){ return x; }).length, tres = false; for(var i = 0; i + 2 < 5; i++) if(vv[i] === vv[i + 1] && vv[i + 1] === vv[i + 2]) tres = true;
    var regras = [['Mais V que F (' + nV + ' V)', nV >= 3], ['Nunca três seguidas iguais', !tres], ['1ª e 5ª contrárias', vv[0] !== vv[4]], ['2ª é F', vv[1] === false]];
    $('v1-r').innerHTML = regras.map(function(r){ return '<span style="color:' + (r[1] ? 'var(--success)' : 'var(--danger)') + ';font-weight:700;">' + (r[1] ? '✔' : '✘') + '</span> ' + r[0]; }).join('<br>');
    var tot = 0, sol = []; for(var m = 0; m < 32; m++){ var s = [0, 1, 2, 3, 4].map(function(i){ return !!(m >> i & 1); }), n = s.filter(function(x){ return x; }).length, t3 = false; for(var j = 0; j + 2 < 5; j++) if(s[j] === s[j + 1] && s[j + 1] === s[j + 2]) t3 = true; if(n >= 3 && !t3 && s[0] !== s[4] && s[1] === false){ tot++; sol.push(s.map(function(x){ return x ? 'V' : 'F'; }).join(' ')); } }
    $('v1-h').textContent = 'Das 32 sequências possíveis, ' + tot + ' obedece(m) às quatro regras: ' + sol.join(' | '); }
  vdraw();`
}) });

module.exports = out;
