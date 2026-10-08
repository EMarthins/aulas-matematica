// Unidade 9 — guia visual e atividades
const K = require('./kit.js');
const { G, guia, atvEna, atvPratica, atvCria, cClassificar } = K;
const { p, wl, call, prop, T: tb } = G;
const dir = 'ena-profmat/09-analise-combinatoria/', key = 'c9', brand = 'Análise Combinatória', cap = 'Capítulo 9';
const fx = e => `      <p class="formula">${K.fm(e)}</p>`;

const g = guia({
  dir, key, brand, cap, color: 'primary',
  h1: 'Combinatória: <span>contar sem listar</span>',
  lede: 'Três questões em 60 e muitas outras que usam contagem por dentro. Princípio multiplicativo, arranjo, combinação, anagramas, complementar e mesa redonda.',
  badges: ['3× nas provas 2025–26', 'Mais restrito primeiro', 'n!/(a!b!⋯)', 'Total − nenhum'],
  curve: 'M20,150 C 120,150 160,100 240,100 C 320,100 380,50 480,26',
  sections: [
    ['Princípios', 'Multiplicar ou somar', 'scale', 'primary', p('<strong>Etapas independentes</strong> (“e”): multiplique. <strong>Casos exclusivos</strong> (“ou”): some.') + call('Regra de ouro', 'Comece pela etapa mais restrita (ímpar → unidade primeiro).', 'success')],
    ['Fórmulas', 'P, A e C', 'chart', 'growth', fx('P_n = n!   A_{n,k} = {n!|(n−k)!}   C_{n,k} = {n!|k!(n−k)!}') + p('Pergunta de ouro: trocar a ordem gera resultado diferente? Sim → arranjo. Não → combinação.')],
    ['Números', 'Algarismos distintos', 'target', 'success', p('ENA 2025 Q2: ímpares de 4 algarismos distintos → $5·8·8·7 = 2240$.') + call('Cuidado', 'Zero à esquerda: não vale em <strong>número</strong>; vale em <strong>senha</strong>.', 'danger')],
    ['Senhas', 'Sem iguais vizinhos', 'link', 'decay', fx('10 · 9^{n−1}') + call('ENA 2026 Q12', '6 dígitos: $10 · 9^5$.', 'success')],
    ['Anagramas', 'Com repetição', 'book', 'primary', fx('{n!|a!·b!·c!⋯}') + call('ENA 2025 Q11', 'DIVISIBILIDADE: $14!/(3!·5!)$.', 'success') + p('Juntas: bloco = 1 letra. Extremidades: fixe e permute o resto.')],
    ['Complementar', 'Pelo menos um', 'warn', 'danger', p('<strong>Total − nenhum</strong>. Ex.: senhas de 3 dígitos com pelo menos um 7: $10^3 − 9^3 = 271$.')],
    ['Outros', 'Mesa e pombos', 'people', 'growth', p('Mesa redonda: $(n−1)!$. Casa dos pombos: $n + 1$ objetos em $n$ caixas → alguma tem ≥ 2.')],
    ['Binômio', 'Newton e soluções', 'coin', 'decay', fx('(x+y)^n = ∑ C(n,k)x^{n−k}y^k') + p('Soma dos coeficientes: $x = y = 1$. Soluções inteiras de $x_1 + ⋯ + x_k = n$: $C(n+k−1, k−1)$.')]
  ],
  wide: [
    ['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Não começar pela etapa mais restrita.', 'Contar o zero à esquerda em números.', 'Esquecer de dividir pelas repetições em anagramas (e <strong>somar</strong> em vez de multiplicar fatoriais).', 'Contar duas vezes o mesmo caso com “ou”.', 'Usar $n!$ na mesa redonda (é $(n−1)!$).'])]
  ]
});

const a1 = atvEna({
  dir, key, brand, cap, cls: '',
  h1: 'Combinatória <span style="color:var(--primary);">no estilo ENA</span>',
  subtitle: 'Cinco questões originais: números pares com algarismos distintos, anagramas com repetição, “pelo menos um” por complementar e mesa redonda com restrição.',
  final: 'Mais restrito primeiro, dividir pelas repetições, complementar e fixar uma pessoa na roda.',
  questions: [
    { badge: 'Estilo ENA · algarismos distintos', text: 'Considere os números inteiros positivos de <strong>quatro algarismos distintos</strong>.', cmd: 'Quantos deles são <strong>pares</strong>?', opts: ['2240', '2296', '2520', '2800', '4536'], a: 1,
      sol: '<p>Dois casos (o 0 não pode abrir o número):</p><p>Unidade 0: $9 · 8 · 7 = 504$.</p><p>Unidade 2, 4, 6 ou 8 (4 opções): milhar $8$ (≠ 0 e ≠ unidade), centena $8$, dezena $7$ → $4 · 8 · 8 · 7 = 1792$.</p><p>Total: $504 + 1792 = 2296$.</p><p class="hint">Confirmação: os ímpares são 2240 (ENA 2025 Q2) e $2240 + 2296 = 4536$, o total de números de 4 algarismos distintos.</p>' },
    { badge: 'Estilo ENA · anagramas', text: 'Considere a palavra ARARA.', cmd: 'Quantos anagramas distintos ela possui?', opts: ['10', '20', '30', '60', '120'], a: 0,
      sol: '<p>5 letras: A (3 vezes) e R (2 vezes). ${5!|3!·2!} = {120|12} = 10$.</p>' },
    { badge: 'Estilo ENA · complementar', text: 'Um grupo tem <strong>6 homens</strong> e <strong>4 mulheres</strong>.', cmd: 'Quantas comissões de 3 pessoas têm <strong>pelo menos uma mulher</strong>?', opts: ['80', '90', '100', '110', '120'], a: 2,
      sol: '<p>Total: $C(10, 3) = 120$. Sem mulheres (só homens): $C(6, 3) = 20$. Pelo menos uma mulher: $120 − 20 = 100$.</p>' },
    { badge: 'Estilo ENA · senhas', text: 'Uma senha tem 4 dígitos (0 a 9, com repetição permitida).', cmd: 'Quantas senhas têm <strong>pelo menos um dígito 5</strong>?', opts: ['3439', '3600', '4096', '5000', '6561'], a: 0,
      sol: '<p>Total: $10^4 = 10000$. Sem nenhum 5: $9^4 = 6561$. Logo $10000 − 6561 = 3439$.</p>' },
    { badge: 'Estilo ENA · mesa redonda', text: 'Seis pessoas, entre elas Ana e Beto, vão sentar-se em torno de uma mesa redonda.', cmd: 'De quantas maneiras isso pode ser feito se Ana e Beto <strong>não</strong> podem ficar lado a lado?', opts: ['48', '72', '96', '120', '240'], a: 1,
      sol: '<p>Total em roda: $(6 − 1)! = 120$. Ana e Beto juntos: bloco + 4 pessoas = 5 elementos → $(5 − 1)! · 2 = 48$. Não juntos: $120 − 48 = 72$.</p>' }
  ]
});

const a2 = atvCria({
  dir, key, brand, cap, cls: 'growth',
  h1: 'Qual técnica de <span style="color:var(--growth);">contagem?</span>',
  subtitle: 'Classifique cada situação como arranjo, combinação, permutação com repetição ou complementar. Treina o reconhecimento — a parte mais difícil da combinatória.',
  tpl: cClassificar({
    cats: ['Arranjo (ordem importa)', 'Combinação (ordem não importa)', 'Permutação com repetição', 'Complementar'],
    intro: 'Escolha a técnica mais adequada a cada situação e clique em <strong>Conferir</strong>.',
    final: 'Reconhecer a técnica já é metade da resposta.',
    itens: [
      ['Escolher 3 jogadores entre 8 para formar um time', 1, 'O time é um conjunto: a ordem não importa → $C(8, 3)$.'],
      ['Sortear presidente, vice e secretário entre 8 pessoas', 0, 'Os cargos são diferentes: a ordem importa → $8 · 7 · 6$.'],
      ['Anagramas da palavra ARARA', 2, 'Letras repetidas: $5!/(3!·2!)$.'],
      ['Senhas de 4 dígitos com pelo menos um dígito 5', 3, '“Pelo menos um” → total − nenhum: $10^4 − 9^4$.'],
      ['Definir o pódio (1º, 2º e 3º) de uma prova com 10 atletas', 0, 'Posições distintas: $10 · 9 · 8$.'],
      ['Escolher 5 cartas de um baralho', 1, 'A mão de cartas é um conjunto: combinação.'],
      ['Anagramas de MATEMATICA', 2, 'Repetições: $10!/(2!·3!·2!)$.'],
      ['Comissões de 3 pessoas com pelo menos uma mulher', 3, 'Complementar: total − comissões sem mulheres.']
    ]
  })
});

const a3 = atvPratica({
  dir, key, brand, cap, cls: 'success',
  h1: 'Contagem: <span style="color:var(--success);">trilha de desafios</span>',
  subtitle: 'Seis etapas, da combinação simples à mesa redonda. Responda com número; duas tentativas e dica por etapa.',
  final: 'Pergunte se a ordem importa, divida pelas repetições e use o complementar: três reflexos de contagem.',
  problems: [
    { tag: 'Combinação', q: 'De quantas formas se escolhe uma comissão de 3 pessoas entre 5?', a: 10, hint: 'A ordem não importa: $C(5, 3)$.', sol: '<p>$C(5, 3) = {5·4·3|3!} = 10$.</p>' },
    { tag: 'Arranjo', q: 'Quantas senhas de 4 letras <strong>distintas</strong> podem ser formadas com as 26 letras?', a: 358800, hint: '$26 · 25 · 24 · 23$.', sol: '<p>$26 · 25 · 24 · 23 = 358 800$.</p>' },
    { tag: 'Anagramas', q: 'Quantos anagramas tem a palavra MATEMATICA?', a: 151200, hint: '10 letras: M (2), A (3), T (2).', sol: '<p>${10!|2!·3!·2!} = 151 200$.</p>' },
    { tag: 'Números', q: 'Quantos números de 3 algarismos distintos existem?', a: 648, hint: 'Centena 9 (≠ 0), dezena 9, unidade 8.', sol: '<p>$9 · 9 · 8 = 648$.</p>' },
    { tag: 'Senhas', q: 'Quantas senhas de 6 dígitos (0–9) não têm dois dígitos iguais consecutivos?', a: 590490, hint: '$10 · 9^5$.', sol: '<p>$10 · 9^5 = 10 · 59 049 = 590 490$.</p>' },
    { tag: 'Mesa redonda', q: 'De quantas formas 5 pessoas podem sentar-se em uma mesa redonda?', a: 24, hint: 'Fixe uma pessoa: $(n − 1)!$.', sol: '<p>$4! = 24$.</p>' }
  ]
});

module.exports = [g, a1, a2, a3];
