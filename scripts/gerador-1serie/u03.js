// Unidade 3 — Algarismos significativos e duvidosos (aulas 08 e 09)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cDetetive, svg, ln, rect, tx, txu, dot, pri, gro, soft } = K;
const { p, wl, call, li } = G, tb = G.T;
const TRI = 1, DIR = 'algarismos-significativos', BASE = 'aulas/1-ano/1-tri/' + DIR + '/';
const KEY = 'm1u03', BRAND = 'Algarismos Significativos', CAP = 'Aulas 08 e 09';
const pages = [];

// régua graduada em centímetros: a barra termina em 11,6 cm
const regua = (() => {
  let s = '';
  const x0 = 24, u = 25;
  s += rect(x0, 18, u * 11.6, 22, 'var(--primary-soft)', pri, 2, 4);
  s += rect(x0 - 4, 44, u * 13 + 8, 34, 'var(--surface-2)', 'var(--line-strong)', 1.5, 4);
  for (let i = 0; i <= 13; i++) { s += ln(x0 + i * u, 44, x0 + i * u, 58, 'var(--ink)', 1.8) + txu(x0 + i * u, 74, String(i), 'var(--ink-soft)', 11); }
  s += ln(x0 + u * 11.6, 14, x0 + u * 11.6, 44, gro, 2, 'stroke-dasharray="4 3"') + txu(x0 + u * 11.6, 11, '≈ 11,6', gro, 12);
  return svg(360, 90, s, '460px');
})();

// ===================== AULA ÚNICA =====================
const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 1ª série · Aulas 08 e 09', h1: 'Algarismos significativos: <span style="color:var(--primary);">o quanto você pode afirmar de uma medida</span>',
  sub: 'Toda medida tem um algarismo duvidoso. Aprenda a contar os algarismos significativos, a escrever medidas com a precisão certa e a operar sem inventar precisão.',
  badges: [['corretos + 1 duvidoso'], ['zeros à esquerda não contam', 'growth'], ['soma × produto', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Da leitura do instrumento ao resultado de uma conta.', [
  ['Ler um instrumento', 'velocímetro, régua e termômetro: o que é certo e o que é estimativa', 'bulb'],
  ['Algarismos significativos', 'corretos + o primeiro duvidoso', 'chart'],
  ['Como contar', 'zeros à esquerda, no meio e à direita', 'link'],
  ['Notação científica e unidades', 'a precisão não muda quando muda a unidade', 'scale'],
  ['Operar com medidas', 'soma e subtração × produto e quociente', 'target']
]));
a.push(objetivosSlide([
  'Distinguir <strong>algarismos corretos</strong> e <strong>duvidoso</strong> em uma leitura.',
  '<strong>Contar</strong> os algarismos significativos de uma medida.',
  'Manter a precisão ao <strong>mudar de unidade</strong> e ao usar <strong>notação científica</strong>.',
  'Registrar o resultado de <strong>somas, subtrações, produtos e quocientes</strong> de medidas.'
], 'Ideia-chave', 'Escrever mais algarismos do que o instrumento permite é <strong>inventar precisão</strong>. Um bom registro mostra exatamente o que se sabe.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'Dois velocímetros, a mesma velocidade', `
          ${lede('Um velocímetro tem marcas de 5 em 5 km/h; outro, de 1 em 1 km/h. Os dois mostram a mesma velocidade. Qual deles permite uma leitura mais precisa?')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('Com marcas de 5 em 5, o ponteiro parece estar em 77 km/h. Nesse registro, qual algarismo é duvidoso?', ['O primeiro 7', 'O segundo 7', 'Os dois', 'Nenhum'], 1, 'Temos certeza de que está <strong>perto de 75</strong> (o primeiro 7 é correto). O segundo algarismo ($7$ em $77$) foi <strong>estimado a olho</strong>: é o duvidoso.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Toda leitura combina o que o instrumento garante com uma <strong>estimativa</strong> do último algarismo. Escalas mais finas permitem registrar <strong>mais</strong> algarismos corretos.</p>', 'primary')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · corretos e duvidoso', 'Corretos + o primeiro duvidoso', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Algarismos corretos</strong> são os que o instrumento garante.</li>
                <li><strong>Algarismo duvidoso</strong> é o primeiro estimado, além da escala.</li>
                <li><strong>Algarismos significativos</strong> = corretos + <strong>um</strong> duvidoso. Não se escreve mais de um duvidoso: <em>76,8</em> km/h é aceitável; <em>76,82</em> km/h, não.</li>
                <li>Na régua ao lado (marcas de 1 em 1 cm) a barra termina entre 11 e 12 cm. Lemos <strong>11,6 cm</strong>: o 1 e o 1 são corretos; o <strong>6</strong> é o duvidoso. Medida com <strong>3 algarismos significativos</strong>.</li>
              </ul>
            </div>
            <div>${regua}<p class="hint" style="text-align:center;">Régua graduada em centímetros; a leitura estimada é 11,6 cm (valores como 11,5 ou 11,7 também seriam aceitos).</p></div>
          </div>`, { cls: '' }));

a.push(sl('Como contar', 'Quais zeros contam?', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Zeros à esquerda</strong> do primeiro algarismo diferente de zero <strong>não contam</strong>: só posicionam a vírgula. $0,0005$ tem <strong>1</strong>; $0,005069$ tem <strong>4</strong>.</li>
                <li><strong>Zeros entre</strong> algarismos significativos <strong>contam</strong>: $5,0003$ tem <strong>5</strong>.</li>
                <li><strong>Zeros à direita depois da vírgula</strong> <strong>contam</strong> (indicam precisão): $0,1050$ tem <strong>4</strong>; $5,00$ tem <strong>3</strong>.</li>
                <li>Zeros à direita de número inteiro sem vírgula ($25\\ 600$) são ambíguos; a notação científica resolve: $2,56 · 10^{4}$ (3) ou $2,560 · 10^{4}$ (4).</li>
              </ul>
            </div>
            ${W.box('Contador de algarismos significativos', '<div><label>Digite uma medida (ex.: 0,005069)</label><input type="text" id="g1-x" value="0,005069" inputmode="decimal"></div>' + W.txt('g1-n', 'Algarismos significativos: ') + W.txt('g1-d', 'Destacados: ') + W.hint('g1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Mudar de unidade ou de forma', 'A precisão não muda — só a posição da vírgula', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li>$8,43$ cm $= 0,0000843$ km: continuam <strong>3</strong> algarismos significativos (8, 4 e 3). Os zeros novos só posicionam a vírgula.</li>
                <li>Em <strong>notação científica</strong> a mantissa guarda exatamente os algarismos significativos: $0,03301 = 3,301 · 10^{-2}$ (<strong>4</strong>).</li>
                <li>$875 = 8,75 · 10^{2}$ (3) · $70,00548 = 7,000548 · 10^{1}$ (7).</li>
              </ul>
            </div>
            ${callout('Regra de ouro', 'Se a conversão <strong>muda</strong> a quantidade de algarismos significativos, alguma coisa foi inventada ou perdida. O que muda é só o expoente.', 'success')}
          </div>`, { cls: '' }));

a.push(sl('Operando com medidas', 'Soma e subtração × produto e quociente', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Soma e subtração:</strong> o resultado tem tantas <strong>casas decimais</strong> quanto a parcela com <strong>menos</strong> casas decimais.</li>
                <li><strong>Multiplicação e divisão:</strong> o resultado tem tantos <strong>algarismos significativos</strong> quanto o fator com <strong>menos</strong> deles.</li>
                <li>Números <strong>exatos</strong> (contagens, “um terço”, o 2 de $2πr$) não limitam a precisão.</li>
                <li>Arredonde só no final, mantendo uns algarismos a mais nos passos intermediários.</li>
              </ul>
            </div>
            ${W.box('Calculadora de medidas', W.row('<div><label>Medida 1</label><input type="text" id="g2-a" value="5,7" inputmode="decimal"></div>', W.sel('g2-op', 'Operação', ['+ (soma)', '− (subtração)', '· (produto)', '÷ (quociente)'], 2), '<div><label>Medida 2</label><input type="text" id="g2-b" value="1,25" inputmode="decimal"></div>') + W.txt('g2-t', 'Resultado da conta: ') + W.txt('g2-r', 'Registrado corretamente: ') + W.hint('g2-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Água na lata', 'Uma lata contém <strong>18,2 L</strong> de água. Despeja-se mais <strong>0,2360 L</strong>. Quantos algarismos significativos tem o volume final?', [
  ['Some', '$18,2 + 0,2360 = 18,436$ L.'],
  ['Veja as casas decimais', '18,2 tem <strong>1</strong> casa; 0,2360 tem 4. Vale a menor: <strong>1</strong>.'],
  ['Arredonde para 1 casa', '$18,436 ≈ 18,4$ L.'],
  ['Conte', '18,4 tem <strong>3</strong> algarismos significativos.']
], 'O volume final deve ser registrado como <strong>18,4 L</strong>, com <strong>3</strong> algarismos significativos.'));

b_pratique();
function b_pratique() {
  a.push(pratique('Quantos algarismos significativos?', 'Quantos algarismos significativos tem a medida <strong>0,005069 cm</strong>?',
    ['1', '3', '4', '6', '7'], 2,
    'Os zeros à esquerda do 5 não contam. Contam 5, <strong>0</strong> (entre algarismos), 6 e 9: <strong>4</strong> algarismos significativos. Alternativa C.'));
  a.push(pratique('A área do corredor', 'Um corredor mede 5,7 m de comprimento e 1,25 m de largura. A área, registrada só com algarismos significativos, é:',
    ['7,125 m²', '7,12 m²', '7,13 m²', '7,1 m²', '7 m²'], 3,
    'Produto: $5,7 · 1,25 = 7,125$. O fator com menos algarismos significativos é 5,7 (<strong>2</strong>); o resultado fica com 2: <strong>7,1 m²</strong>. Alternativa D.', '', 'growth'));
  a.push(estiloEnem('Notação científica com a precisão', 'A massa de uma amostra foi medida como 0,00380 kg. Escrita em notação científica <strong>mantendo todos</strong> os algarismos significativos, ela é:',
    ['$3,8 · 10^{-3}$ kg', '$3,80 · 10^{-3}$ kg', '$3,80 · 10^{-2}$ kg', '$38,0 · 10^{-4}$ kg', '$380 · 10^{-5}$ kg'], 1,
    'Os zeros à esquerda não contam; o zero final, depois da vírgula, <strong>conta</strong>: 3, 8 e 0 → 3 algarismos. Em notação científica: $3,80 · 10^{-3}$ kg (mantissa entre 1 e 10, expoente −3). Alternativa B.'));
}

a.push(armadilhas('Cuidados', 'Onde a precisão escapa', [
  ['Contar zeros à esquerda', '$0,0005$ tem <strong>1</strong> algarismo significativo, não 5.'],
  ['Apagar o zero final', '$0,500$ tem <strong>3</strong>; escrever $0,5$ muda a precisão da medida.'],
  ['Usar a regra errada', 'Soma e subtração: <strong>casas decimais</strong>. Produto e quociente: <strong>algarismos significativos</strong>.'],
  ['Arredondar no meio', 'Mantenha algarismos extras nos passos intermediários e arredonde só o resultado.']
]));
a.push(quiz([
  { q: '$5,0003$ s tem quantos algarismos significativos?', o: ['2', '3', '4', '5'], a: 3 },
  { q: '$0,1050$ m tem:', o: ['2', '3', '4', '5'], a: 2 },
  { q: '$12,3 + 4,56$ (medidas), registrando corretamente:', o: ['16,86', '16,9', '17', '16,8'], a: 1 },
  { q: '$25\\ 600$ km em notação científica com 3 algarismos significativos:', o: ['$2,6 · 10^{4}$', '$2,56 · 10^{4}$', '$25,6 · 10^{3}$', '$2,560 · 10^{4}$'], a: 1 }
]));
a.push(fechamento([
  ['Definição', 'Significativos = corretos + o primeiro duvidoso.'],
  ['Contagem', 'Zeros à esquerda não contam; entre e depois da vírgula, contam.'],
  ['Operações', 'Soma: menos casas decimais. Produto: menos algarismos significativos.']
], 'Registrar uma medida é dizer o que se sabe — nem mais, nem menos.'));

pages.push({ out: BASE + 'aula-algarismos-significativos.html', html: K.deck({
  title: 'Algarismos significativos e duvidosos — Matemática 1ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 08 e 09 · Algarismos significativos', slides: a,
  extra: WJS + BIND + String.raw`
  function limpa(s){ return String(s).trim().replace(/\s/g, '').replace(',', '.').replace(/^[+-]/, ''); }
  function contar(s){ s = limpa(s); if(!/^\d*\.?\d*$/.test(s) || s === '' || s === '.') return null;
    var temPonto = s.indexOf('.') >= 0, d = s.replace('.', ''), i = 0; while(i < d.length && d.charAt(i) === '0') i++;
    d = d.slice(i); if(!d.length) return {n: 0, sig: ''};
    if(!temPonto) d = d.replace(/0+$/, '');
    return {n: d.length, sig: d}; }
  function casas(s){ s = limpa(s); var i = s.indexOf('.'); return i < 0 ? 0 : s.length - i - 1; }
  function pt(v, c){ return v.toLocaleString('pt-BR', {minimumFractionDigits: c, maximumFractionDigits: c}); }
  bind(['g1-x'], function(){
    var r = contar($('g1-x').value);
    if(!r || r.n === 0){ $('g1-n').textContent = '—'; $('g1-d').textContent = ''; $('g1-h').textContent = 'Digite um número (ex.: 0,005069 ou 12,30).'; return; }
    $('g1-n').textContent = r.n; $('g1-d').textContent = r.sig;
    $('g1-h').textContent = limpa($('g1-x').value).indexOf('.') < 0 ? 'Número inteiro: zeros finais foram tratados como não significativos (ambíguos).' : 'Zeros à esquerda não contam; zeros no meio e à direita depois da vírgula contam.';
  });
  bind(['g2-a', 'g2-b', 'g2-op'], function(){
    var A = $('g2-a').value, B = $('g2-b').value, op = +$('g2-op').value, ca = contar(A), cb = contar(B);
    if(!ca || !cb || !ca.n || !cb.n){ $('g2-t').textContent = '—'; $('g2-r').textContent = ''; return; }
    var a = parseFloat(limpa(A)), b = parseFloat(limpa(B));
    if(op === 3 && b === 0){ $('g2-t').textContent = 'divisão por zero'; return; }
    var v = op === 0 ? a + b : op === 1 ? a - b : op === 2 ? a * b : a / b;
    $('g2-t').textContent = String(+v.toPrecision(10)).replace('.', ',');
    if(op < 2){
      var c = Math.min(casas(A), casas(B));
      $('g2-r').textContent = pt(v, c) + '  (' + c + (c === 1 ? ' casa decimal' : ' casas decimais') + ')';
      $('g2-h').textContent = 'Soma/subtração: vale a parcela com menos casas decimais (' + casas(A) + ' e ' + casas(B) + ').';
    } else {
      var n = Math.min(ca.n, cb.n), s = v.toPrecision(Math.max(1, n));
      if(/e/.test(s)) s = String(+s);
      $('g2-r').textContent = s.replace('.', ',') + '  (' + n + ' alg. sig.)';
      $('g2-h').textContent = 'Produto/quociente: vale o fator com menos algarismos significativos (' + ca.n + ' e ' + cb.n + ').';
    }
  });`
}) });

// ===================== GUIA =====================
pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Algarismos significativos: <span>a precisão em uma página</span>',
  lede: 'Corretos e duvidoso, a contagem dos zeros, a mudança de unidade e as regras para somar, subtrair, multiplicar e dividir medidas.',
  badges: ['corretos + 1 duvidoso', 'zeros à esquerda: não', 'soma: casas decimais', 'produto: alg. sig.'],
  curve: 'M20,150 C 100,120 180,140 260,90 C 340,50 420,40 480,24',
  sections: [
    ['Definição', 'O que é', 'chart', 'primary', p('Algarismos <strong>corretos</strong> (garantidos pelo instrumento) + o <strong>primeiro duvidoso</strong> (estimado).') + call('Régua em cm', 'barra entre 11 e 12 → 11,6 cm: 3 algarismos significativos.', 'success')],
    ['Contagem', 'Quais zeros contam', 'link', 'growth', tb(['Medida', 'Algarismos'], [['0,0005', '1'], ['0,005069', '4'], ['5,0003', '5'], ['0,1050', '4'], ['5,00', '3']])],
    ['Unidade', 'Muda a vírgula, não a precisão', 'scale', 'decay', p('8,43 cm = 0,0000843 km (3 alg. sig.). Zeros novos só posicionam a vírgula.')],
    ['Notação científica', 'A mantissa guarda tudo', 'target', 'success', li(['$0,03301 = 3,301 · 10^{-2}$ (4)', '$875 = 8,75 · 10^{2}$ (3)', '$25\\ 600 = 2,56 · 10^{4}$ (3)'])],
    ['Soma e subtração', 'Casas decimais', 'check', 'primary', p('Vale a parcela com <strong>menos casas decimais</strong>.') + call('Exemplo', '18,2 + 0,2360 = 18,436 → <strong>18,4</strong>.', 'success')],
    ['Produto e quociente', 'Algarismos significativos', 'up', 'growth', p('Vale o fator com <strong>menos algarismos significativos</strong>.') + call('Exemplo', '5,7 × 1,25 = 7,125 → <strong>7,1</strong>.', 'success')]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Contar os zeros à esquerda como significativos.', 'Apagar o zero final depois da vírgula.', 'Aplicar a regra de produto em uma soma.', 'Arredondar nos passos intermediários.', 'Deixar “inventar” precisão ao converter de unidade.'])]]
}));

// ===================== ATIVIDADES =====================
const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Algarismos significativos <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: contagem, leitura de régua, soma, produto e notação científica.',
  final: 'Contar certo e usar a regra certa em cada operação: essa é a base de todo relatório de medição.',
  questions: [
    { badge: 'Estilo ENEM · contagem', text: 'Uma balança de precisão indicou a massa $0,004050$ g.', cmd: 'Quantos algarismos significativos tem essa medida?', opts: ['2', '3', '4', '5', '6'], a: 2,
      sol: '<p>Zeros à esquerda não contam. Contam $4$, $0$ (entre algarismos), $5$ e $0$ (depois da vírgula, no fim): <strong>4</strong>.</p>' },
    { badge: 'Estilo ENEM · leitura', text: 'Uma régua é graduada em centímetros. A extremidade de uma barra fica entre as marcas 12 e 13, um pouco depois do meio.', cmd: 'Qual registro respeita os algarismos significativos dessa leitura?', opts: ['12 cm', '12,6 cm', '12,60 cm', '12,625 cm', '13 cm'], a: 1,
      sol: '<p>A escala garante 12; estima-se um algarismo a mais (o duvidoso): $12,6$ cm, com 3 algarismos significativos. Escrever $12,60$ ou $12,625$ sugeriria precisão que a régua não tem.</p>' },
    { badge: 'Estilo ENEM · soma', text: 'Duas tábuas medem $3,25$ m e $0,6$ m e são emendadas.', cmd: 'O comprimento total, com a precisão correta, é:', opts: ['3,85 m', '3,9 m', '3,8 m', '4 m', '3,850 m'], a: 1,
      sol: '<p>Soma: $3,25 + 0,6 = 3,85$. A parcela com menos casas decimais é $0,6$ (1 casa). Arredondando: $3,9$ m.</p>' },
    { badge: 'Estilo ENEM · produto', text: 'Um painel retangular mede $2,5$ m por $4,32$ m.', cmd: 'Sua área, com a precisão correta, é:', opts: ['10,8 m²', '10,80 m²', '11 m²', '10 m²', '11,0 m²'], a: 2,
      sol: '<p>Produto: $2,5 · 4,32 = 10,8$. O fator $2,5$ tem 2 algarismos significativos: o resultado também fica com 2 → <strong>11 m²</strong>.</p>' },
    { badge: 'Estilo ENEM · notação científica', text: 'A distância medida foi $25\\ 600$ km, com os três primeiros algarismos significativos.', cmd: 'Em notação científica, preservando a precisão:', opts: ['$2,6 · 10^{4}$ km', '$2,56 · 10^{4}$ km', '$25,6 · 10^{3}$ km', '$2,560 · 10^{4}$ km', '$2,56 · 10^{3}$ km'], a: 1,
      sol: '<p>$25\\ 600 = 2,56 · 10^{4}$: mantissa entre 1 e 10 e três algarismos significativos (2, 5 e 6).</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'growth',
  h1: 'Detetive da <span style="color:var(--growth);">precisão</span>',
  subtitle: 'Em cada resolução há uma linha com erro de algarismos significativos. Ache-a.',
  tpl: cDetetive({
    intro: 'Leia cada resolução e clique na <strong>linha errada</strong>.',
    final: 'Zero à esquerda não conta; soma usa casas decimais; produto usa algarismos significativos.',
    casos: [
      { titulo: 'Contando zeros', enunciado: 'Quantos algarismos significativos tem $0,00560$ m?', linhas: ['Os zeros à esquerda só posicionam a vírgula: não contam.', 'Sobram os algarismos 5, 6 e 0.', 'O zero final, depois da vírgula, não é significativo.', 'Logo, a medida tem 2 algarismos significativos.'], erro: 2, porque: 'Zero à direita <strong>depois da vírgula conta</strong>: indica a precisão. A medida tem 3 algarismos significativos.' },
      { titulo: 'Somando medidas', enunciado: 'Some $125,3$ cm e $4,56$ cm com a precisão correta.', linhas: ['$125,3 + 4,56 = 129,86$.', 'Na soma, vale o menor número de algarismos significativos: 125,3 tem 4; 4,56 tem 3 → 3.', 'Arredondando para 3 algarismos significativos: 130.', 'Resposta: 130 cm.'], erro: 1, porque: 'Na <strong>soma</strong> o critério é o de <strong>casas decimais</strong> (a menor é 1, de 125,3): $129,9$ cm.' },
      { titulo: 'Área de um painel', enunciado: 'Calcule $5,7$ m × $1,25$ m com a precisão correta.', linhas: ['$5,7 · 1,25 = 7,125$.', 'No produto vale o fator com menos algarismos significativos: 5,7 tem 2; 1,25 tem 3.', 'Então o resultado fica com 3 algarismos significativos: 7,13 m².', 'Resposta: 7,13 m².'], erro: 2, porque: 'O <strong>menor</strong> número de algarismos é 2, não 3: o resultado é $7,1$ m².' },
      { titulo: 'Mudando de unidade', enunciado: 'Converta $8,43$ cm para quilômetros e diga quantos algarismos significativos tem o resultado.', linhas: ['$8,43\\ "cm" = 0,0000843\\ "km"$.', 'Os zeros à esquerda só posicionam a vírgula.', 'Contando todos os algarismos depois da vírgula, há 7 algarismos significativos.', 'A mantissa em notação científica seria $8,43 · 10^{-5}$.'], erro: 2, porque: 'Zeros à esquerda <strong>não contam</strong>: continuam <strong>3</strong> algarismos significativos (8, 4 e 3), como em $8,43 · 10^{-5}$ km.' }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'decay',
  h1: 'Algarismos significativos: <span style="color:var(--decay);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: contagem, soma, produto e notação científica. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: contar, operar e registrar medidas com a precisão certa.',
  problems: [
    { tag: 'Contagem', q: 'Quantos algarismos significativos tem <strong>0,00720</strong> m?', a: 3, ph: 'quantidade', hint: 'Zeros à esquerda não contam; o zero final depois da vírgula conta.', sol: '<p>Contam 7, 2 e 0: <strong>3</strong>.</p>' },
    { tag: 'Inteiro com vírgula', q: 'Quantos algarismos significativos tem <strong>1500,0</strong> g?', a: 5, ph: 'quantidade', hint: 'Há vírgula: os zeros à direita contam.', sol: '<p>Com a vírgula, o zero final indica precisão: 1, 5, 0, 0 e 0 → <strong>5</strong>.</p>' },
    { tag: 'Soma', q: 'Some $7,24 + 1,2$ (medidas) e registre com a precisão correta. Resposta:', a: 8.4, ph: 'resultado', hint: 'Soma: vale a parcela com menos casas decimais (1 casa).', sol: '<p>$7,24 + 1,2 = 8,44$. Com 1 casa decimal: <strong>8,4</strong>.</p>' },
    { tag: 'Produto', q: 'Calcule $3,2 · 1,45$ (medidas) com a precisão correta. Resposta:', a: 4.6, ph: 'resultado', hint: 'Produto: o fator 3,2 tem 2 algarismos significativos.', sol: '<p>$3,2 · 1,45 = 4,64$. Com 2 algarismos significativos: <strong>4,6</strong>.</p>' },
    { tag: 'Notação científica', q: 'A constante $6,02 · 10^{23}$ tem quantos algarismos significativos?', a: 3, ph: 'quantidade', hint: 'Na notação científica, a mantissa guarda os algarismos significativos.', sol: '<p>A mantissa $6,02$ tem <strong>3</strong> algarismos significativos.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Algarismos Significativos', accent: 'decay', icon: 'numbers',
  aulas: [['Aulas 8–9', 'Algarismos significativos e duvidosos', 'aula-algarismos-significativos.html']],
  enem: 'Algarismos significativos no estilo ENEM', cria: 'Detetive da precisão', pratica: 'Algarismos significativos: trilha de desafios'
}, pages };
