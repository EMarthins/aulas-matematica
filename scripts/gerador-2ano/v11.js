// Unidade v11 — Progressão aritmética: termo geral (aulas 23 a 25 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cOrdenar } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'pa-termo-geral', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v11', BRAND = 'Progressão Aritmética: Termo Geral', CAP = 'Aulas 23 a 25';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 23 a 25', h1: 'Progressão aritmética: <span style="color:var(--primary);">somar sempre o mesmo valor</span>',
  sub: 'Os assentos de um auditório crescem de 3 em 3 por fileira; a parcela de um financiamento sobe R$ 20 por mês. Uma sequência em que cada termo é o anterior mais uma constante é uma PA.',
  badges: [['razão r'], ['aₙ = a₁ + (n − 1)·r', 'growth'], ['termo médio', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da razão ao termo geral.', [
  ['Definição', 'aₙ₊₁ = aₙ + r', 'bulb'],
  ['Classificação', 'crescente, decrescente, constante', 'target'],
  ['Termo geral', 'aₙ = a₁ + (n − 1)r', 'chart'],
  ['Termo médio', 'o do meio é a média', 'link'],
  ['Interpolação', 'inserir termos entre dois dados', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer uma <strong>PA</strong> e calcular sua <strong>razão</strong> $r = a_{n+1} − a_n$.',
  'Classificar a PA em <strong>crescente</strong> ($r > 0$), <strong>decrescente</strong> ($r < 0$) ou <strong>constante</strong> ($r = 0$).',
  'Usar o <strong>termo geral</strong> $a_n = a_1 + (n − 1) r$ e $a_n = a_k + (n − k) r$.',
  'Aplicar a <strong>propriedade do termo médio</strong> e fazer <strong>interpolação aritmética</strong>.'
], 'Dica', 'Em uma PA, o termo de ordem $n$ é o primeiro mais $(n − 1)$ razões: <strong>de $a_1$ até $a_n$ há $n − 1$ saltos</strong>.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O auditório', `
          ${lede('Em um auditório, a <strong>fileira 1</strong> tem <strong>12 lugares</strong> e cada fileira seguinte tem <strong>3 lugares a mais</strong>: $12, 15, 18, 21, …$ Quantos lugares tem a <strong>fileira 15</strong>? É uma <strong>progressão aritmética</strong> de razão $r = 3$.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Fileira n', 'Lugares aₙ'], [['1', '12'], ['2', '15'], ['3', '18'], ['4', '21'], ['15', '$12 + 14 · 3 = 54$']])}
            ${mini('A fileira 15 tem quantos lugares?', ['45', '48', '54', '57'], 2, '$a_{15} = 12 + (15 − 1) · 3 = 12 + 42 = 54$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · PA', 'Definição, razão e termo geral', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>PA:</strong> cada termo é o anterior somado a uma constante $r$ (<strong>razão</strong>): $a_{n+1} = a_n + r$.</li>
                <li>$r > 0$: crescente · $r < 0$: decrescente · $r = 0$: constante.</li>
                <li><strong>Termo geral:</strong> <strong>$a_n = a_1 + (n − 1) · r$</strong>; e, a partir de qualquer termo, <strong>$a_n = a_k + (n − k) · r$</strong>.</li>
                <li><strong>Termo médio:</strong> em três termos consecutivos $a, b, c$: <strong>$b = {a + c|2}$</strong>.</li>
                <li><strong>Interpolação:</strong> inserir $m$ termos entre $a$ e $b$ dá razão $r = {b − a|m + 1}$.</li>
              </ul>
            </div>
            ${W.box('Termo geral da PA', W.row(W.nm('pa-a', 'a₁', 5, 'any'), W.nm('pa-r', 'razão r', 4, 'any'), W.nm('pa-n', 'n', 20, '1', 'min="1"'), W.nm('pa-x', 'valor X', 101, 'any')) + W.txt('pa-t', 'aₙ = ') + W.txt('pa-p', 'X é o termo de ordem: ') + W.hint('pa-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Três PAs', `
          ${tbl(['PA', 'a₁', 'r', 'Tipo', 'Termo geral'], [['$(5, 9, 13, 17, …)$', '5', '4', 'crescente', '$4n + 1$'], ['$(20, 17, 14, 11, …)$', '20', '−3', 'decrescente', '$−3n + 23$'], ['$(7, 7, 7, 7, …)$', '7', '0', 'constante', '$7$']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Confira', 'Sempre teste a fórmula com um termo conhecido: em $a_n = 4n + 1$, $a_1 = 5$ ✓.', 'success')}
            ${callout('Gráfico', 'Os pontos $(n, a_n)$ de uma PA ficam sobre uma <strong>reta</strong>: a razão é o coeficiente angular.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Vigésimo termo', 'Na PA $(5, 9, 13, …)$, calcule $a_{20}$.', [
  ['Razão', '$r = 9 − 5 = 4$.'],
  ['Termo geral', '$a_{20} = 5 + 19 · 4 = 81$.']
], '$a_{20} = 81$.'));
a.push(exemplo('Exemplo resolvido', 'Quantos termos?', 'Quantos termos tem a PA $(5, 9, 13, …, 101)$?', [
  ['Termo geral', '$101 = 5 + (n − 1) · 4$.'],
  ['Resolva', '$96 = 4(n − 1)$ ⇒ $n − 1 = 24$ ⇒ $n = 25$.']
], '<strong>25 termos</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Dois termos dados', 'Em uma PA, $a_3 = 11$ e $a_8 = 26$. Determine $r$ e $a_1$.', [
  ['Razão', '$a_8 = a_3 + 5r$ ⇒ $26 = 11 + 5r$ ⇒ $r = 3$.'],
  ['Primeiro termo', '$a_1 = a_3 − 2r = 11 − 6 = 5$.']
], '$r = 3$ e $a_1 = 5$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Termo médio', 'Determine $x$ para que $(x + 1, 3x − 1, 4x + 3)$ seja uma PA.', [
  ['Termo médio', '$2(3x − 1) = (x + 1) + (4x + 3)$.'],
  ['Resolva', '$6x − 2 = 5x + 4$ ⇒ $x = 6$.'],
  ['Termos', '$7, 17, 27$: razão $10$ ✓.']
], '$x = 6$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Interpolação aritmética', 'Insira 4 termos em PA entre 3 e 23.', [
  ['Razão', '$r = {23 − 3|4 + 1} = 4$.'],
  ['Termos', '$3, 7, 11, 15, 19, 23$.']
], 'Os meios aritméticos são $7, 11, 15$ e $19$.', 'growth'));

a.push(pratique('Termo geral', 'Na PA $(5, 9, 13, …)$, o vigésimo termo é:',
  ['76', '77', '81', '85', '100'], 2,
  '$5 + 19 · 4 = 81$. <strong>Alternativa C.</strong>'));
a.push(pratique('Número de termos', 'A PA $(5, 9, 13, …, 101)$ tem quantos termos?',
  ['20', '23', '24', '25', '26'], 3,
  '$n − 1 = 96 ÷ 4 = 24$ ⇒ $n = 25$. <strong>Alternativa D.</strong>', '', 'growth'));
a.push(estiloEnem('Primeiro termo', 'Em uma PA, o 3º termo vale 11 e o 8º vale 26. O primeiro termo é:',
  ['5', '1', '3', '7', '9'], 0,
  '$r = 3$; $a_1 = 11 − 2 · 3 = 5$. <strong>Alternativa A.</strong>'));

a.push(armadilhas('Cuidados', 'Onde a PA engana', [
  ['Usar n em vez de n − 1', '$a_n = a_1 + (n − 1) r$: de $a_1$ a $a_n$ há $n − 1$ saltos.'],
  ['Sinal da razão', 'Em PA decrescente, $r < 0$: $r = a_2 − a_1$.'],
  ['Contar termos errado', 'O número de termos de $(a_1, …, a_n)$ é $n = (a_n − a_1) ÷ r + 1$.'],
  ['Termo médio em não consecutivos', 'A média vale só para três termos <strong>consecutivos</strong> (ou simétricos).']
]));
a.push(quiz([
  { q: 'A razão da PA $(20, 17, 14, …)$ é:', o: ['3', '−3', '17', '−17'], a: 1 },
  { q: 'Em $a_n = 2 + 3(n − 1)$, o termo $a_{10}$ é:', o: ['29', '30', '32', '33'], a: 0 },
  { q: 'O termo médio de $(4, x, 10)$ em PA é:', o: ['6', '7', '8', '14'], a: 1 },
  { q: 'Inserindo 3 termos entre 2 e 14 em PA, a razão é:', o: ['3', '4', '5', '12'], a: 0 }
]));
a.push(fechamento([
  ['Termo geral', '$a_n = a_1 + (n − 1) r$.'],
  ['Termo médio', '$b = (a + c) ÷ 2$.'],
  ['Interpolação', '$r = (b − a) ÷ (m + 1)$.']
], 'n − 1 saltos de tamanho r: a PA inteira em uma linha.'));

pages.push({ out: BASE + 'aula-1-termo-geral-da-pa.html', html: K.deck({
  title: 'Progressão aritmética: termo geral — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 23 a 25 · Termo geral da PA', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['pa-a', 'pa-r', 'pa-n', 'pa-x'], function(){ var a1 = +$('pa-a').value, r = +$('pa-r').value, n = +$('pa-n').value, X = +$('pa-x').value;
    if(![a1, r, n, X].every(isFinite) || n < 1){ $('pa-t').textContent = '—'; $('pa-p').textContent = '—'; $('pa-h').textContent = 'Use n ≥ 1.'; return; }
    $('pa-t').textContent = pt(a1 + (n - 1) * r, 4);
    if(r === 0){ $('pa-p').textContent = X === a1 ? 'todos os termos' : 'nenhuma'; }
    else { var k = (X - a1) / r + 1; $('pa-p').textContent = (k >= 1 && Math.abs(k - Math.round(k)) < 1e-9) ? 'n = ' + pt(Math.round(k)) : 'X não pertence à PA'; }
    $('pa-h').textContent = 'aₙ = a₁ + (n − 1)·r. Para saber se X é termo: n = (X − a₁) ÷ r + 1 deve ser inteiro positivo.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Progressão aritmética: <span>razão, termo geral e interpolação</span>',
  lede: 'Cada termo é o anterior mais a razão r. O termo geral é aₙ = a₁ + (n − 1)·r, o termo médio é a média dos vizinhos e a interpolação distribui m termos com razão (b − a) ÷ (m + 1).',
  badges: ['aₙ = a₁ + (n − 1)r', 'termo médio', 'interpolação'],
  curve: 'M20,160 C 100,150 180,130 260,100 C 340,70 420,40 480,24',
  sections: [
    ['Razão', 'r = aₙ₊₁ − aₙ', 'chart', 'primary', li(['r > 0: crescente.', 'r < 0: decrescente.', 'r = 0: constante.'])],
    ['Termo geral', 'a₁ + (n − 1)r', 'target', 'growth', p('Ou $a_k + (n − k) r$.') + call('Exemplo', '$a_{20} = 5 + 19 · 4 = 81$.', 'success')],
    ['Número de termos', 'n = (aₙ − a₁)/r + 1', 'scale', 'decay', p('Para $(5, 9, …, 101)$: 25.') + call('Cuidado', 'Some 1 no final.', 'success')],
    ['Termo médio', '(a + c)/2', 'link', 'success', p('Três termos consecutivos.') + call('Exemplo', '$x = 6$.', 'success')],
    ['Interpolação', 'r = (b − a)/(m + 1)', 'up', 'primary', p('Entre 3 e 23, 4 meios.') + call('Resultado', '$r = 4$.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['n − 1 saltos.', 'Sinal da razão.', 'Teste com um termo dado.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Usar n em vez de n − 1.', 'Errar o sinal da razão.', 'Esquecer o + 1 no número de termos.', 'Aplicar a média a termos não consecutivos.', 'Dividir por m em vez de m + 1.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'PA: termo geral <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: termo geral, número de termos, primeiro termo, termo médio e auditório.',
  final: 'n − 1 saltos de tamanho r.',
  questions: [
    { badge: 'Estilo ENEM · termo geral', text: 'Na PA $(5, 9, 13, …)$.', cmd: 'O vigésimo termo é:', opts: ['76', '77', '81', '85', '100'], a: 2,
      sol: '<p>$5 + 19 · 4 = 81$.</p>' },
    { badge: 'Estilo ENEM · número de termos', text: 'Considere a PA $(5, 9, 13, …, 101)$.', cmd: 'O número de termos é:', opts: ['20', '23', '24', '25', '26'], a: 3,
      sol: '<p>$n = (101 − 5) ÷ 4 + 1 = 25$.</p>' },
    { badge: 'Estilo ENEM · primeiro termo', text: 'Em uma PA, $a_3 = 11$ e $a_8 = 26$.', cmd: 'O primeiro termo é:', opts: ['5', '1', '3', '7', '9'], a: 0,
      sol: '<p>$r = 3$; $a_1 = 11 − 6 = 5$.</p>' },
    { badge: 'Estilo ENEM · termo médio', text: 'Os números $x + 1$, $3x − 1$ e $4x + 3$ estão, nessa ordem, em PA.', cmd: 'O valor de $x$ é:', opts: ['4', '5', '6', '7', '8'], a: 2,
      sol: '<p>$2(3x − 1) = 5x + 4$ ⇒ $x = 6$.</p>' },
    { badge: 'Estilo ENEM · auditório', text: 'Em um auditório, a fileira 1 tem 12 lugares e cada fileira seguinte tem 3 lugares a mais.', cmd: 'A fileira 15 tem:', opts: ['39', '45', '48', '54', '57'], a: 3,
      sol: '<p>$12 + 14 · 3 = 54$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Ordene a <span style="color:var(--growth);">resolução</span>',
  subtitle: 'Coloque os passos dos problemas de PA na ordem certa.',
  tpl: cOrdenar({
    intro: 'Toque no passo que vem <strong>primeiro</strong>, depois no segundo, e assim por diante.',
    final: 'Razão, fórmula e substituição: a ordem de toda PA.',
    problemas: [
      { titulo: 'Vigésimo termo', enunciado: 'Na PA $(5, 9, 13, …)$, qual o vigésimo termo?', passos: ['Calcule a razão: $r = 9 − 5 = 4$.', 'Escreva o termo geral: $a_n = a_1 + (n − 1) r$.', 'Substitua: $a_{20} = 5 + 19 · 4$.', 'Calcule: $a_{20} = 81$.'] },
      { titulo: 'Interpolação', enunciado: 'Insira 4 termos em PA entre 3 e 23.', passos: ['Identifique $a_1 = 3$ e que $23$ será o 6º termo ($4 + 2 = 6$).', 'Use $23 = 3 + 5r$.', 'Resolva: $r = 4$.', 'Escreva a PA: $3, 7, 11, 15, 19, 23$.'] },
      { titulo: 'Termo médio', enunciado: 'Ache $x$ para que $(x + 1, 3x − 1, 4x + 3)$ seja uma PA.', passos: ['Use o termo médio: $2(3x − 1) = (x + 1) + (4x + 3)$.', 'Desenvolva: $6x − 2 = 5x + 4$.', 'Resolva: $x = 6$.', 'Confira: os termos $7, 17, 27$ têm razão $10$.'] }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'PA: termo geral <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: razão, vigésimo termo, número de termos, razão por dois termos e auditório. Digite o número pedido.',
  final: 'Você percorreu a trilha: razão, termo geral e contagem.',
  problems: [
    { tag: 'Razão', q: 'Qual a razão da PA $(5, 9, 13, …)$?', a: 4, ph: 'r', hint: '9 − 5.', sol: '<p>$4$.</p>' },
    { tag: 'Termo geral', q: 'Qual o vigésimo termo dessa PA?', a: 81, ph: 'a₂₀', hint: '5 + 19 · 4.', sol: '<p>$81$.</p>' },
    { tag: 'Número de termos', q: 'Quantos termos tem $(5, 9, 13, …, 101)$?', a: 25, ph: 'n', hint: '96 ÷ 4 + 1.', sol: '<p>$25$.</p>' },
    { tag: 'Dois termos dados', q: 'Com $a_3 = 11$ e $a_8 = 26$, qual a razão?', a: 3, ph: 'r', hint: '(26 − 11) ÷ 5.', sol: '<p>$3$.</p>' },
    { tag: 'Auditório', q: 'Fileira 1 com 12 lugares e +3 por fileira: quantos lugares na fileira 15?', a: 54, ph: 'lugares', hint: '12 + 14 · 3.', sol: '<p>$54$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Progressão Aritmética: Termo Geral', accent: 'primary', icon: 'stairs',
  aulas: [['Aulas 23–25', 'Progressão aritmética: termo geral', 'aula-1-termo-geral-da-pa.html']],
  enem: 'PA: termo geral no estilo ENEM', cria: 'Ordene a resolução', pratica: 'PA: termo geral — trilha de desafios'
}, pages };
