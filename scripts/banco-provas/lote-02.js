// Lote 02 do banco autoral do EduMath: questões de NIVELAMENTO (álgebra básica) — a partir da prova "1° ano nivelamento 2° tri" do CD, com gabarito e resolução.
// Idempotente: remove as questões bp8-niv-* de app/banco-provas.json e grava de novo.
//   node scripts/banco-provas/lote-02.js
const fs = require('fs'), path = require('path');
const arq = path.join(__dirname, '../../app/banco-provas.json');
const M = 'Matemática', F = 'Banco do professor';
const Q = [];
const add = o => Q.push(Object.assign({ materia: M, fonte: F, dificuldade: 2, pontos: 1 }, o));
const T = (t, ok) => ({ t, ok: !!ok });
const S = '8º Ano', U = 'Nivelamento: álgebra e equações';

add({ id: 'bp8-niv-01', tipo: 'mc', serie: S, unidade: U, topicos: ['termos semelhantes', 'expressão algébrica'], dificuldade: 1,
  enunciado: 'Simplifique a expressão $3x + 2x - 5x + 4$ e marque a alternativa correta:',
  alternativas: [T('$0$'), T('$4$', 1), T('$3x$'), T('$0x + 4$'), T('$10x + 4$')],
  resolucao: '$3x + 2x - 5x = 0x = 0$. Sobra apenas o $4$. A forma $0x + 4$ vale o mesmo, mas a forma simplificada é $4$.' });
add({ id: 'bp8-niv-02', tipo: 'aberta', serie: S, unidade: U, topicos: ['produtos notáveis', 'quadrado da soma', 'área'], dificuldade: 2, pontos: 2,
  enunciado: 'Um arquiteto projetou um pequeno jardim quadrado, com um caminho de $3$ m de largura ao redor. A área total do espaço (jardim + caminho) pode ser representada por $(x + 3)^2$, em que $x$ é o lado do jardim. (a) Desenvolva a expressão da área total. (b) Que tipo de produto notável foi usado? Justifique. (c) Se o jardim tem $5$ m de lado, qual é a área total?',
  resposta: { modo: 'linhas', n: 6 }, gabarito: '(a) $x^2 + 6x + 9$; (b) quadrado da soma de dois termos; (c) $64$ m²',
  resolucao: '(a) $(x + 3)^2 = x^2 + 2 · x · 3 + 3^2 = x^2 + 6x + 9$. (b) Quadrado da soma: $(a + b)^2 = a^2 + 2ab + b^2$. (c) Com $x = 5$: $25 + 30 + 9 = 64$ m² (ou $(5 + 3)^2 = 8^2 = 64$).' });
add({ id: 'bp8-niv-03', tipo: 'vf', serie: S, unidade: U, topicos: ['equação do 1º grau', 'raiz'], dificuldade: 1,
  enunciado: 'Classifique como verdadeiro (V) ou falso (F):',
  afirmacoes: [T('A equação $2x + 3 = 7$ tem como solução $x = 2$.', 1), T('A equação $5x = 0$ não possui solução.'), T('Toda equação do 1º grau ($ax + b = 0$, com $a ≠ 0$) possui exatamente uma raiz real.', 1)],
  resolucao: 'V ($2 · 2 + 3 = 7$); F ($5x = 0$ tem solução $x = 0$); V (a raiz é $x = -{b|a}$, única).' });
add({ id: 'bp8-niv-04', tipo: 'assoc', serie: S, unidade: U, topicos: ['produtos notáveis'], dificuldade: 1,
  enunciado: 'Relacione cada produto notável da coluna A ao seu desenvolvimento, na coluna B.',
  colunaA: ['$(a - b)^2$', '$(x + y)^2$', '$(m + n)(m - n)$'],
  colunaB: ['$x^2 + 2xy + y^2$', '$a^2 - 2ab + b^2$', '$m^2 - n^2$', '$a^2 + b^2$'], pares: [1, 0, 2],
  resolucao: 'Quadrado da diferença: $a^2 - 2ab + b^2$; quadrado da soma: $x^2 + 2xy + y^2$; soma pela diferença: $m^2 - n^2$. A opção $a^2 + b^2$ não corresponde a nenhum deles.' });
add({ id: 'bp8-niv-05', tipo: 'aberta', serie: S, unidade: U, topicos: ['equação do 1º grau', 'problema'], dificuldade: 1, pontos: 1,
  enunciado: 'Em uma lanchonete, um salgado custa R&#36; 5,00. João comprou alguns salgados e gastou R&#36; 35,00. (a) Monte a equação que representa essa situação. (b) Quantos salgados João comprou?',
  resposta: { modo: 'linhas', n: 3 }, gabarito: '(a) $5x = 35$; (b) $7$ salgados',
  resolucao: 'Se $x$ é o número de salgados, $5x = 35$. Logo $x = 35 ÷ 5 = 7$.' });
add({ id: 'bp8-niv-06', tipo: 'aberta', serie: S, unidade: U, topicos: ['sistema de equações', 'substituição'], dificuldade: 2, pontos: 2,
  enunciado: 'Ana comprou $3$ ingressos de cinema e $2$ de teatro e pagou R&#36; 130,00. Bia comprou $2$ ingressos de cinema e $3$ de teatro e pagou R&#36; 145,00. (a) Monte o sistema de equações que representa a situação. (b) Resolva pelo método da substituição e dê o preço de cada ingresso.',
  resposta: { modo: 'linhas', n: 7 }, gabarito: '(a) $3c + 2t = 130$ e $2c + 3t = 145$; (b) cinema R&#36; 20 e teatro R&#36; 35',
  resolucao: '(a) Com $c$ = cinema e $t$ = teatro: $3c + 2t = 130$ e $2c + 3t = 145$. (b) Da 1ª: $c = {130 - 2t|3}$. Na 2ª: $2 · {130 - 2t|3} + 3t = 145$ ⇒ $260 - 4t + 9t = 435$ ⇒ $5t = 175$ ⇒ $t = 35$ e $c = {130 - 70|3} = 20$.' });
add({ id: 'bp8-niv-07', tipo: 'aberta', serie: S, unidade: U, topicos: ['sistema de equações', 'adição'], dificuldade: 2, pontos: 2,
  enunciado: 'Dois amigos foram à feira. O primeiro pagou R&#36; 18,00 por $4$ kg de bananas e $2$ kg de maçãs. O segundo pagou R&#36; 24,00 por $3$ kg de bananas e $3$ kg de maçãs. (a) Monte o sistema de equações. (b) Resolva pelo método da adição para achar o preço do quilo de cada fruta.',
  resposta: { modo: 'linhas', n: 7 }, gabarito: '(a) $4b + 2m = 18$ e $3b + 3m = 24$; (b) bananas R&#36; 1 e maçãs R&#36; 7 o quilo',
  resolucao: '(a) $4b + 2m = 18$ e $3b + 3m = 24$ (equivale a $b + m = 8$). (b) Dividindo a 1ª equação por $2$: $2b + m = 9$. A 2ª, dividida por $3$, é $b + m = 8$. Subtraindo, $b = 1$; então $m = 7$. Conferência: $4 · 1 + 2 · 7 = 18$ e $3 · 1 + 3 · 7 = 24$.' });
add({ id: 'bp8-niv-08', tipo: 'aberta', serie: S, unidade: U, topicos: ['sistema de equações', 'problema'], dificuldade: 3, pontos: 2,
  enunciado: 'Uma prova tem $20$ questões: cada acerto vale $5$ pontos e cada erro desconta $2$ pontos. Um aluno fez $72$ pontos. Quantas questões ele acertou e quantas errou?',
  resposta: { modo: 'linhas', n: 6 }, gabarito: '$16$ acertos e $4$ erros',
  resolucao: 'Acertos $a$ e erros $e$: $a + e = 20$ e $5a - 2e = 72$. De $e = 20 - a$: $5a - 2(20 - a) = 72$ ⇒ $7a = 112$ ⇒ $a = 16$ e $e = 4$. Conferência: $16 · 5 - 4 · 2 = 80 - 8 = 72$.' });
add({ id: 'bp8-niv-09', tipo: 'aberta', serie: S, unidade: U, topicos: ['equação do 1º grau', 'análise de erro'], dificuldade: 2, pontos: 1,
  enunciado: 'Um aluno disse que o resultado da equação $4x - 2 = 10$ é $x = 3$. Você concorda? Se não, identifique o erro e corrija; se sim, justifique conferindo.',
  resposta: { modo: 'linhas', n: 4 }, gabarito: 'Concorda: $x = 3$ está correto, pois $4 · 3 - 2 = 10$',
  resolucao: '$4x - 2 = 10$ ⇒ $4x = 12$ ⇒ $x = 3$. Conferência: $4 · 3 - 2 = 12 - 2 = 10$. O resultado do aluno está correto.' });

// ---------- grava ----------
const j = JSON.parse(fs.readFileSync(arq, 'utf8'));
j.questoes = j.questoes.filter(q => !/^bp8-niv-/.test(q.id)).concat(Q);
j.gerado = new Date().toISOString().slice(0, 10);
fs.writeFileSync(arq, JSON.stringify(j, null, 1));
console.log('lote 02:', Q.length, 'questões · banco autoral:', j.questoes.length);
