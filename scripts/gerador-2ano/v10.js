// Unidade v10 — Sequências numéricas: padrões e termo geral (aulas 21 e 22 da 2ª série, 1º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cClassificar } = K;
const { p, wl, call, li } = G;
const TRI = 1, DIR = 'sequencias-numericas', BASE = 'aulas/2-ano/1-tri/' + DIR + '/';
const KEY = 'm2v10', BRAND = 'Sequências Numéricas', CAP = 'Aulas 21 e 22';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 2ª série · Aulas 21 e 22', h1: 'Sequências numéricas: <span style="color:var(--primary);">padrões que se prevêem</span>',
  sub: 'Os anéis de uma árvore revelam sua idade; as figuras de uma sequência revelam uma regra. Descobrir o padrão permite prever qualquer termo, sem listar todos.',
  badges: [['aₙ'], ['padrões', 'growth'], ['lei de formação', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do padrão à fórmula.', [
  ['Sequência', 'lista ordenada de números', 'bulb'],
  ['Padrão', 'o que muda de termo a termo', 'target'],
  ['Termo geral', 'aₙ em função de n', 'chart'],
  ['Recursão', 'cada termo pelo anterior', 'link'],
  ['Figuras', 'contar e achar a lei', 'scale']
]));
a.push(objetivosSlide([
  'Reconhecer <strong>padrões</strong> em sequências numéricas e de figuras e <strong>prever termos</strong>.',
  'Escrever o <strong>termo geral</strong> $a_n$ (lei de formação) e usá-lo para calcular qualquer termo.',
  'Distinguir crescimentos <strong>constante</strong> (soma), <strong>quadrático</strong> ($n^{2}$) e <strong>exponencial</strong> (multiplicação).',
  'Usar a <strong>lei recursiva</strong> $a_{n+1} = a_n + r$ e relacioná-la ao termo geral.'
], 'Dica', 'Compare termos consecutivos: se a <strong>diferença</strong> é constante, o padrão é aditivo; se o <strong>quociente</strong> é constante, é multiplicativo; se as diferenças <strong>crescem</strong> de forma regular, é quadrático.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Dendrocronologia', `
          ${lede('A <strong>dendrocronologia</strong> estuda os anéis de crescimento das árvores: pelo padrão dos anéis conhecemos a idade e outras características. Na Matemática, <strong>padrões em números</strong> também permitem prever.')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Sequência', 'Padrão', 'Próximo'], [['$(1, 2, 3, 4, …)$', 'soma 1', '5'], ['$(13, −1, −15, −29, −43, …)$', 'soma $−14$', '$−57$'], ['$(3, 6, 12, 24, …)$', 'multiplica por 2', '48']])}
            ${mini('Qual o próximo termo de $(13, −1, −15, −29, −43, ?)$?', ['−57', '−55', '−58', '−44'], 0, 'Cada termo é o anterior $− 14$: $−43 − 14 = −57$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · termo geral', 'Lei de formação $a_n$', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Sequência:</strong> lista ordenada $(a_1, a_2, a_3, …)$; $a_n$ é o termo de ordem $n$.</li>
                <li><strong>Termo geral (lei de formação):</strong> fórmula que dá $a_n$ em função de $n$. Ex.: $a_n = n^{2}$ dá $(1, 4, 9, 16, 25, …)$.</li>
                <li><strong>Recursão:</strong> cada termo depende do anterior, como $a_1 = 2$ e $a_{n+1} = a_n + 5$.</li>
                <li>Famílias: <strong>afim</strong> ($a_n = pn + q$), <strong>quadrática</strong> ($pn^{2} + q$) e <strong>exponencial</strong> ($p · r^{n−1}$).</li>
              </ul>
            </div>
            ${W.box('Primeiros termos', W.row(W.sel('sq-t', 'tipo', ['pn + q (soma)', 'pn² + q', 'p · q^(n−1)'], 0), W.nm('sq-p', 'p', 2, 'any'), W.nm('sq-q', 'q', 1, 'any')) + W.txt('sq-l', 'Lei: ') + W.txt('sq-s', 'a₁ … a₈: ') + W.txt('sq-d', 'a₁₀ = ') + W.hint('sq-h'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Três famílias de sequências', `
          ${tbl(['Lei', 'Primeiros termos', 'Como cresce'], [['$a_n = 2n + 1$', '$3, 5, 7, 9, …$', 'soma 2 a cada termo'], ['$a_n = n^{2}$', '$1, 4, 9, 16, 25, …$', 'diferenças $3, 5, 7, …$'], ['$a_n = 3 · 2^{n−1}$', '$3, 6, 12, 24, 48, …$', 'multiplica por 2']])}
          <div class="grid2" style="margin-top:8px;">
            ${callout('Palitos de fósforo', '$n$ quadrados em fila usam $3n + 1$ palitos: $4, 7, 10, 13, …$.', 'success')}
            ${callout('Rápido demais', 'Exponenciais crescem <strong>muito</strong> mais rápido que as afins e as quadráticas.', 'success')}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Termo geral quadrático', 'Dada $a_n = n^{2}$, escreva os 5 primeiros termos e calcule $a_{10}$.', [
  ['Termos', '$1^{2}, 2^{2}, 3^{2}, 4^{2}, 5^{2}$ = $1, 4, 9, 16, 25$.'],
  ['$a_{10}$', '$10^{2} = 100$.']
], '$(1, 4, 9, 16, 25, …)$ e $a_{10} = 100$.'));
a.push(exemplo('Exemplo resolvido', 'Termo geral exponencial', 'Para $a_n = 3 · 2^{n−1}$, escreva os termos de $n = 1$ a $5$ e calcule $a_6$.', [
  ['Termos', '$3, 6, 12, 24, 48$.'],
  ['$a_6$', '$3 · 2^{5} = 96$.']
], '$a_6 = 96$.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Figuras de palitos', 'Com palitos formam-se $n$ quadrados em fila: 1 quadrado usa 4 palitos, 2 usam 7, 3 usam 10. Qual a lei e quantos palitos para 10 quadrados?', [
  ['Padrão', 'Cada novo quadrado acrescenta 3 palitos.'],
  ['Lei', '$P(n) = 4 + 3(n − 1) = 3n + 1$.'],
  ['$n = 10$', '$P(10) = 31$.']
], '$P(n) = 3n + 1$; 10 quadrados usam <strong>31 palitos</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Recursão e termo geral', 'Seja $a_1 = 2$ e $a_{n+1} = a_n + 5$. Escreva os termos e uma fórmula para $a_n$.', [
  ['Termos', '$2, 7, 12, 17, 22, …$'],
  ['Fórmula', '$a_n = 2 + 5(n − 1) = 5n − 3$.']
], '$a_n = 5n − 3$ (confira: $a_4 = 17$ ✓).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Descobrindo a lei', 'Ache a lei de $(2, 5, 10, 17, 26, …)$.', [
  ['Diferenças', '$3, 5, 7, 9$: crescem de 2 em 2 ⇒ quadrática.'],
  ['Comparação com $n^{2}$', '$1, 4, 9, 16, 25$: cada termo é $n^{2} + 1$.']
], '$a_n = n^{2} + 1$ (e $a_8 = 65$).', 'growth'));

a.push(pratique('Próximo termo', 'O próximo termo de $(13, −1, −15, −29, −43)$ é:',
  ['−57', '−55', '−58', '−44', '−71'], 0,
  'Soma $−14$: $−43 − 14 = −57$. <strong>Alternativa A.</strong>'));
a.push(pratique('Termo geral', 'Se $a_n = 3 · 2^{n−1}$, então $a_6$ vale:',
  ['36', '48', '96', '192', '384'], 2,
  '$3 · 2^{5} = 96$. <strong>Alternativa C.</strong>', '', 'growth'));
a.push(estiloEnem('Palitos', 'Com palitos formam-se $n$ quadrados em fila (4 palitos para 1, 7 para 2, 10 para 3). Para 10 quadrados são necessários:',
  ['30', '31', '34', '40', '41'], 1,
  '$3n + 1 = 31$. <strong>Alternativa B.</strong>'));

a.push(armadilhas('Cuidados', 'Onde as sequências enganam', [
  ['Padrão pelos dois primeiros termos', 'Dois termos não definem a regra: confira com os demais.'],
  ['Confundir n com a_n', '$n$ é a posição; $a_n$ é o valor do termo.'],
  ['Erro de expoente', '$3 · 2^{n−1}$: o primeiro termo usa expoente 0.'],
  ['Somar quando é multiplicar', 'Verifique se é a diferença ou o quociente que é constante.']
]));
a.push(quiz([
  { q: 'Em $a_n = 2n + 1$, o termo $a_5$ é:', o: ['9', '10', '11', '12'], a: 2 },
  { q: 'A sequência $(1, 4, 9, 16, …)$ tem termo geral:', o: ['$n + 3$', '$n^{2}$', '$2n$', '$3^{n}$'], a: 1 },
  { q: 'Em $(3, 6, 12, 24, …)$, o padrão é:', o: ['soma 3', 'soma 6', 'multiplica por 2', 'eleva ao quadrado'], a: 2 },
  { q: 'Se $a_1 = 2$ e $a_{n+1} = a_n + 5$, então $a_3$ vale:', o: ['7', '10', '12', '17'], a: 2 }
]));
a.push(fechamento([
  ['Padrão', 'Diferença, quociente ou diferenças crescentes.'],
  ['Termo geral', '$a_n$ em função de $n$.'],
  ['Famílias', 'Afim, quadrática, exponencial.']
], 'Descubra o padrão e a sequência inteira cabe em uma fórmula.'));

pages.push({ out: BASE + 'aula-1-padroes-e-termo-geral.html', html: K.deck({
  title: 'Sequências numéricas — Matemática 2ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 21 e 22 · Padrões e termo geral', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['sq-t', 'sq-p', 'sq-q'], function(){ var t = +$('sq-t').value, p = +$('sq-p').value, q = +$('sq-q').value, L, f;
    if(![p, q].every(isFinite)){ $('sq-l').textContent = '—'; $('sq-s').textContent = '—'; $('sq-d').textContent = '—'; return; }
    if(t === 0){ f = function(n){ return p * n + q; }; L = 'aₙ = ' + pt(p) + 'n ' + (q < 0 ? '− ' + pt(-q) : '+ ' + pt(q)); }
    else if(t === 1){ f = function(n){ return p * n * n + q; }; L = 'aₙ = ' + pt(p) + 'n² ' + (q < 0 ? '− ' + pt(-q) : '+ ' + pt(q)); }
    else { f = function(n){ return p * Math.pow(q, n - 1); }; L = 'aₙ = ' + pt(p) + ' · ' + pt(q) + '^(n−1)'; }
    var s = []; for(var n = 1; n <= 8; n++) s.push(pt(f(n), 3));
    $('sq-l').textContent = L; $('sq-s').textContent = s.join(', '); $('sq-d').textContent = pt(f(10), 3);
    $('sq-h').textContent = t === 0 ? 'Diferença constante = ' + pt(p) + ': progressão aritmética.' : t === 1 ? 'Diferenças crescem 2p a cada passo: crescimento quadrático.' : 'Quociente constante = ' + pt(q) + ': progressão geométrica.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Sequências numéricas: <span>padrões e termo geral</span>',
  lede: 'Uma sequência é uma lista ordenada. O termo geral aₙ dá qualquer termo; a recursão liga um termo ao anterior. Diferença constante: afim; quociente constante: exponencial; diferenças crescentes: quadrática.',
  badges: ['aₙ', 'recursão', 'afim · quadrática · exponencial'],
  curve: 'M20,160 C 100,150 180,130 260,100 C 340,70 420,40 480,24',
  sections: [
    ['Padrão', 'Soma ou produto', 'chart', 'primary', p('Compare termos consecutivos.') + call('Exemplo', '13, −1, −15: soma −14.', 'success')],
    ['Termo geral', 'aₙ em n', 'target', 'growth', p('Calcula qualquer termo.') + call('Exemplo', '$a_n = n^{2}$: $a_{10} = 100$.', 'success')],
    ['Recursão', 'Pelo anterior', 'scale', 'decay', p('$a_{n+1} = a_n + 5$') + call('Resultado', '$a_n = 5n − 3$.', 'success')],
    ['Figuras', 'Contar e generalizar', 'link', 'success', p('Quadrados com palitos: $3n + 1$.') + call('Teste', '$n = 3$: 10.', 'success')],
    ['Crescimentos', 'Três famílias', 'up', 'primary', li(['Afim: soma constante.', 'Quadrática: $n^{2}$.', 'Exponencial: multiplica.'])],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Teste com mais termos.', 'Expoente $n − 1$.', 'n ≠ aₙ.'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Definir regra por 2 termos.', 'Confundir n e aₙ.', 'Errar o expoente n − 1.', 'Somar onde se multiplica.', 'Não conferir com um termo conhecido.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Sequências numéricas <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: próximo termo, termo geral afim, exponencial, palitos e lei quadrática.',
  final: 'Padrão, lei e conferência: a sequência inteira em uma fórmula.',
  questions: [
    { badge: 'Estilo ENEM · próximo termo', text: 'Considere a sequência $(13, −1, −15, −29, −43, …)$.', cmd: 'O próximo termo é:', opts: ['−57', '−55', '−58', '−44', '−71'], a: 0,
      sol: '<p>Soma $−14$: $−43 − 14 = −57$.</p>' },
    { badge: 'Estilo ENEM · termo geral afim', text: 'O termo geral de uma sequência é $a_n = 2n + 1$.', cmd: 'O décimo termo é:', opts: ['19', '20', '21', '22', '23'], a: 2,
      sol: '<p>$2 · 10 + 1 = 21$.</p>' },
    { badge: 'Estilo ENEM · exponencial', text: 'O termo geral de uma sequência é $a_n = 3 · 2^{n−1}$.', cmd: 'O sexto termo é:', opts: ['36', '48', '96', '192', '384'], a: 2,
      sol: '<p>$3 · 2^{5} = 96$.</p>' },
    { badge: 'Estilo ENEM · palitos', text: 'Com palitos formam-se $n$ quadrados em fila (4, 7 e 10 palitos para $n = 1, 2, 3$).', cmd: 'O número de palitos para 10 quadrados é:', opts: ['30', '31', '34', '40', '41'], a: 1,
      sol: '<p>$P(n) = 3n + 1$ ⇒ $31$.</p>' },
    { badge: 'Estilo ENEM · lei quadrática', text: 'Considere a sequência $(2, 5, 10, 17, 26, …)$.', cmd: 'O oitavo termo é:', opts: ['50', '62', '65', '66', '82'], a: 2,
      sol: '<p>$a_n = n^{2} + 1$ ⇒ $a_8 = 65$.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Como a sequência <span style="color:var(--growth);">cresce</span>?',
  subtitle: 'Soma constante, multiplicação ou crescimento quadrático?',
  tpl: cClassificar({
    cats: ['Soma constante', 'Multiplica por constante', 'Quadrática ($n^{2}$ ± c)'],
    intro: 'Cada cartão traz os primeiros termos. Compare termos consecutivos e clique em <strong>Conferir</strong>.',
    final: 'Diferença constante, quociente constante ou diferenças crescentes.',
    itens: [
      ['$(3, 7, 11, 15, …)$', 0, 'Soma 4.'],
      ['$(3, 6, 12, 24, …)$', 1, 'Multiplica por 2.'],
      ['$(1, 4, 9, 16, …)$', 2, '$n^{2}$.'],
      ['$(10, 20, 30, 40, …)$', 0, 'Soma 10.'],
      ['$(2, 6, 18, 54, …)$', 1, 'Multiplica por 3.'],
      ['$(2, 5, 10, 17, …)$', 2, '$n^{2} + 1$ (diferenças 3, 5, 7).'],
      ['$(100, 95, 90, 85, …)$', 0, 'Soma $−5$.'],
      ['$(1, 10, 100, 1000, …)$', 1, 'Multiplica por 10.'],
      ['$(0, 3, 8, 15, …)$', 2, '$n^{2} − 1$ (diferenças 3, 5, 7).']
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Sequências numéricas: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: próximo termo, a₁₀, a₆, palitos e lei quadrática. Digite o número pedido.',
  final: 'Você percorreu a trilha: padrões e termos gerais.',
  problems: [
    { tag: 'Próximo termo', q: 'Qual o próximo termo de $(13, −1, −15, −29, −43)$?', a: -57, ph: 'termo', hint: 'Soma −14.', sol: '<p>$−57$.</p>' },
    { tag: 'Quadrática', q: 'Se $a_n = n^{2}$, quanto vale $a_{10}$?', a: 100, ph: 'a₁₀', hint: '10².', sol: '<p>$100$.</p>' },
    { tag: 'Exponencial', q: 'Se $a_n = 3 · 2^{n−1}$, quanto vale $a_6$?', a: 96, ph: 'a₆', hint: '3 · 32.', sol: '<p>$96$.</p>' },
    { tag: 'Palitos', q: 'Para 10 quadrados em fila, quantos palitos ($3n + 1$)?', a: 31, ph: 'palitos', hint: '3 · 10 + 1.', sol: '<p>$31$.</p>' },
    { tag: 'Lei', q: 'Para $(2, 5, 10, 17, …)$ com $a_n = n^{2} + 1$, quanto vale $a_8$?', a: 65, ph: 'a₈', hint: '64 + 1.', sol: '<p>$65$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Sequências Numéricas', accent: 'primary', icon: 'stairs',
  aulas: [['Aulas 21–22', 'Sequências numéricas: padrões e termo geral', 'aula-1-padroes-e-termo-geral.html']],
  enem: 'Sequências numéricas no estilo ENEM', cria: 'Como a sequência cresce?', pratica: 'Sequências numéricas: trilha de desafios'
}, pages };
