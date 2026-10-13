// Unidade v22 — Cone: volume (aulas 60 e 61 da 3ª série, 2º trimestre)
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, exemplo, armadilhas, quiz, fechamento, pratique, estiloEnem, WJS, BIND, W, G, cDetetive } = K;
const S = require('./solidos.js');
const { p, wl, call, li } = G;
const TRI = 2, DIR = 'cone-volume', BASE = 'aulas/3-ano/2-tri/' + DIR + '/';
const KEY = 'm3v22', BRAND = 'Cone: Volume', CAP = 'Aulas 60 e 61';
const pages = [];

const PTJS = String.raw`
  function pt(v, d){ return v.toLocaleString('pt-BR', {minimumFractionDigits: 0, maximumFractionDigits: d == null ? 3 : d}).replace('-', '−'); }
`;

const a = [];
a.push(coverSlide({
  eyebrow: 'Matemática · 3ª série · Aulas 60 e 61', h1: 'Volume do cone: <span style="color:var(--primary);">um terço do cilindro</span>',
  sub: 'Um chocolate em forma de cone, uma casquinha de sorvete, um funil: quanto cabe em cada um? O cone ocupa exatamente um terço do cilindro de mesma base e mesma altura.',
  badges: [['V = πr²h ÷ 3'], ['⅓ do cilindro', 'growth'], ['reduzir volume ⇒ r muda', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Do cilindro ao cone.', [
  ['Cone e cilindro', 'mesma base e altura', 'bulb'],
  ['Fórmula', 'V = πr²h ÷ 3', 'target'],
  ['Escala', 'dobrar r ou h', 'link'],
  ['Semelhança', 'funil cheio até a metade', 'chart'],
  ['Problemas', 'percentuais de volume', 'scale']
]));
a.push(objetivosSlide([
  'Relacionar o volume do cone ao do <strong>cilindro de mesma base e altura</strong>: $V_{cone} = {1|3} V_{cil}$.',
  'Calcular <strong>$V = {π r^{2} h|3}$</strong> e capacidades em litros.',
  'Resolver problemas em que o volume muda por um <strong>percentual</strong> (como no ENEM 2022 do chocolate).',
  'Usar <strong>semelhança</strong>: cone cheio até a metade da altura tem $1 ÷ 8$ do volume.'
], 'Dica', 'Se a <strong>altura</strong> é mantida e o volume muda, o <strong>raio</strong> muda pela <strong>raiz quadrada</strong> do fator do volume: volume 19% menor ⇒ $r ∝ √{0,81} = 0,9$.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'O chocolate em forma de cone', `
          ${lede('Uma empresa vende chocolate maciço em forma de <strong>cone circular reto</strong> com <strong>8 cm de diâmetro</strong> e <strong>10 cm de altura</strong>. Com o aumento dos ingredientes, ela decide fazer o chocolate com <strong>volume 19% menor</strong>, mantendo a altura. Qual deve ser o novo raio?')}
          <div class="grid2" style="margin-top:6px;">
            ${tbl(['Passo', 'Cálculo ($π = 3$)'], [['Volume atual', '$3 · 4^{2} · 10 ÷ 3 = 160$ cm³'], ['Volume novo (−19%)', '$0,81 · 160 = 129,6$ cm³'], ['Novo raio', '$r^{2} = 12,96$ ⇒ $r = 3,6$ cm']])}
            ${mini('O novo raio do chocolate, em cm, é:', ['3,0', '3,2', '3,6', '3,8'], 2, '$V = {π r^{2} · 10|3}$: com $0,81 · V$, $r^{2}$ fica $0,81 · 16 = 12,96$ ⇒ $r = 3,6$.')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · volume do cone', 'V = πr²h ÷ 3', `
          <div class="grid2">
            <div>
              <ul class="plain" style="font-size:.95rem;line-height:1.7;">
                <li><strong>Cone e cilindro de mesma base e altura:</strong> três cones preenchem um cilindro.</li>
                <li><strong>$V_{cone} = {1|3} · π r^{2} h$</strong> (qualquer cone, reto ou oblíquo).</li>
                <li><strong>Escala:</strong> $r$ dobra ⇒ $V$ ×4; $h$ dobra ⇒ $V$ ×2.</li>
                <li><strong>Semelhança:</strong> um cone menor semelhante, de razão $k$, tem volume $k^{3} V$. Funil cheio até a metade da altura: $(1 ÷ 2)^{3} = 1 ÷ 8$ do volume.</li>
                <li>Capacidade: 1 cm³ $= 1$ mL; 1 dm³ $= 1$ L.</li>
              </ul>
            </div>
            ${W.box('Volume do cone (π = 3,14)', W.row(W.nm('cv-r', 'raio r', 3, 'any', 'min="0"'), W.nm('cv-h', 'altura h', 4, 'any', 'min="0"')) + W.txt('cv-v', 'Volume do cone = ') + W.txt('cv-c', 'Cilindro de mesma base e altura = ') + W.txt('cv-p', 'Raio para um volume p% do atual (altura fixa): ') + W.hint('cv-hh'))}
          </div>`, { cls: '' }));

a.push(sl('Resumo visual', 'Cone, cilindro e pirâmide', `
          <div class="grid2">
            <div>${S.cone({ lr: 'r', lh: 'h', w: 230, h: 180 })}</div>
            <div>${tbl(['Sólido', 'Volume'], [['Cilindro', '$π r^{2} h$'], ['Cone', '$π r^{2} h ÷ 3$'], ['Prisma', '$A_B · h$'], ['Pirâmide', '$A_B · h ÷ 3$']])}</div>
          </div>`, { cls: '' }));

a.push(exemplo('Exemplo resolvido', 'Volume do cone', 'Calcule o volume de um cone reto de raio 3 cm e altura 4 cm. (Use $π = 3$.)', [
  ['Cilindro de mesma base e altura', '$π r^{2} h = 3 · 9 · 4 = 108$ cm³.'],
  ['Cone', '$108 ÷ 3 = 36$ cm³.']
], '$V = 36$ cm³.'));
a.push(exemplo('Exemplo resolvido', 'Cone dentro do cilindro', 'Um cilindro de volume 90 cm³ contém um cone de mesma base e altura. Qual o volume do cone? E o espaço restante?', [
  ['Cone', '$90 ÷ 3 = 30$ cm³.'],
  ['Restante', '$90 − 30 = 60$ cm³ (dois terços).']
], 'Cone: <strong>30 cm³</strong>; espaço restante: <strong>60 cm³</strong>.', 'growth'));
a.push(exemplo('Exemplo resolvido', 'O chocolate (ENEM 2022)', 'Um chocolate em forma de cone tem diâmetro 8 cm e altura 10 cm. O novo chocolate terá volume 19% menor, mantendo a altura. Qual o novo raio? (Use $π = 3$.)', [
  ['Volume atual', '$V = {3 · 4^{2} · 10|3} = 160$ cm³.'],
  ['Volume novo', '$0,81 · 160 = 129,6$ cm³.'],
  ['Raio novo', '$129,6 = {3 · r^{2} · 10|3} = 10 r^{2}$ ⇒ $r^{2} = 12,96$ ⇒ $r = 3,6$ cm.']
], 'O novo raio é <strong>3,6 cm</strong> (diâmetro 7,2 cm).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Funil cheio pela metade', 'Um funil cônico cheio tem 120 mL. Quanto de líquido há quando a altura do líquido é a metade da altura do funil?', [
  ['Semelhança', 'O líquido forma um cone semelhante, com razão $1 ÷ 2$.'],
  ['Volumes', 'Razão de volumes: $(1 ÷ 2)^{3} = 1 ÷ 8$.'],
  ['Valor', '$120 ÷ 8 = 15$ mL.']
], '<strong>15 mL</strong> (e não 60 mL!).', 'growth'));
a.push(exemplo('Exemplo resolvido', 'Copo cônico', 'Um copo cônico tem raio 4 cm e altura 9 cm. Qual a capacidade em mL? (Use $π = 3$.)', [
  ['Volume', '$V = {3 · 16 · 9|3} = 144$ cm³.'],
  ['Em mL', '$144$ mL.']
], '<strong>144 mL</strong>.', 'growth'));

a.push(pratique('Volume', 'O volume de um cone reto de raio 3 e altura 4, com $π = 3$, é:',
  ['12', '24', '36', '72', '108'], 2,
  '$3 · 9 · 4 ÷ 3 = 36$. <strong>Alternativa C.</strong>'));
a.push(pratique('Cone no cilindro', 'Um cilindro de 90 cm³ contém um cone de mesma base e altura. O volume do cone é:',
  ['15 cm³', '30 cm³', '45 cm³', '60 cm³', '180 cm³'], 1,
  '$90 ÷ 3 = 30$. <strong>Alternativa B.</strong>', '', 'growth'));
a.push(estiloEnem('Chocolate menor', 'Um chocolate em forma de cone tem raio 4 cm e altura 10 cm. A empresa produzirá um com volume 19% menor, mantendo a altura de 10 cm. O raio do novo chocolate será de:',
  ['3,0 cm', '3,2 cm', '3,6 cm', '3,8 cm', '4,0 cm'], 2,
  '$r^{2} = 0,81 · 16 = 12,96$ ⇒ $r = 3,6$. <strong>Alternativa C.</strong>'));

a.push(armadilhas('Cuidados', 'Onde o volume do cone engana', [
  ['Esquecer o ÷ 3', 'Sem o fator $1 ÷ 3$ você calcula o <strong>cilindro</strong>.'],
  ['Variação de volume e do raio', 'Volume 19% menor com altura fixa não reduz o raio em 19%: reduz em 10% ($√{0,81} = 0,9$).'],
  ['Funil pela metade', 'Altura pela metade ⇒ volume por 8 (e não por 2).'],
  ['Diâmetro como raio', 'Divida o diâmetro por 2 antes de elevar ao quadrado.']
]));
a.push(quiz([
  { q: 'O volume do cone é:', o: ['$π r^{2} h$', '$π r^{2} h ÷ 3$', '$π r h ÷ 3$', '$2π r h ÷ 3$'], a: 1 },
  { q: 'Três cones iguais, de mesma base e altura de um cilindro, preenchem:', o: ['metade do cilindro', 'o cilindro', 'o dobro do cilindro', 'um terço do cilindro'], a: 1 },
  { q: 'Dobrando o raio de um cone, o volume:', o: ['dobra', 'triplica', 'quadruplica', 'não muda'], a: 2 },
  { q: 'Um funil cônico cheio até a metade da altura contém que fração do volume total?', o: ['1/2', '1/4', '1/6', '1/8'], a: 3 }
]));
a.push(fechamento([
  ['Fórmula', '$V = π r^{2} h ÷ 3$.'],
  ['Relação', 'Um terço do cilindro de mesma base e altura.'],
  ['Semelhança', 'Razão $k$ ⇒ volume $k^{3}$.']
], 'Cilindro dividido por três: o cone está pronto.'));

pages.push({ out: BASE + 'aula-1-volume-do-cone.html', html: K.deck({
  title: 'Volume do cone — Matemática 3ª série', brand: BRAND, key: KEY + 'a1', meta: 'Aulas 60 e 61 · Volume do cone', slides: a,
  extra: WJS + BIND + PTJS + String.raw`
  bind(['cv-r', 'cv-h'], function(){ var r = +$('cv-r').value, h = +$('cv-h').value, PI = 3.14;
    if(![r, h].every(isFinite) || r <= 0 || h <= 0){ ['cv-v', 'cv-c', 'cv-p'].forEach(function(i){ $(i).textContent = '—'; }); $('cv-hh').textContent = 'Use valores positivos.'; return; }
    var cil = PI * r * r * h;
    $('cv-v').textContent = pt(cil / 3, 3); $('cv-c').textContent = pt(cil, 3); $('cv-p').textContent = 'p = 81% ⇒ r = ' + pt(r * 0.9, 3) + ' (r · √0,81)';
    $('cv-hh').textContent = 'V = π·r²·h ÷ 3 (π = 3,14). Com h fixa, volume ×k ⇒ raio ×√k.'; });`
}) });

pages.push(K.guia({
  dir: BASE, key: KEY, brand: BRAND, cap: CAP, color: 'primary',
  h1: 'Cone: <span>volume</span>',
  lede: 'V = πr²h ÷ 3: um terço do cilindro de mesma base e altura. Mudança de volume com altura fixa muda o raio pela raiz quadrada; semelhança multiplica o volume pelo cubo da razão.',
  badges: ['V = πr²h ÷ 3', '⅓ do cilindro', 'razão k ⇒ volume k³'],
  curve: 'M20,160 C 120,155 200,130 280,92 C 360,56 420,36 480,20',
  sections: [
    ['Fórmula', 'πr²h ÷ 3', 'chart', 'primary', p('Qualquer cone.') + call('Exemplo', 'r = 3, h = 4, π = 3: 36.', 'success')],
    ['Cone × cilindro', 'Um terço', 'target', 'growth', p('Mesma base e altura.') + call('Exemplo', '90 ⇒ 30.', 'success')],
    ['Escala', 'Dobrar r ou h', 'scale', 'decay', li(['$r$ ×2 ⇒ $V$ ×4.', '$h$ ×2 ⇒ $V$ ×2.', 'Ambos ×2 ⇒ $V$ ×8.'])],
    ['Percentual', 'Volume −19%', 'link', 'success', p('Altura fixa: $r^{2}$ ×0,81 ⇒ $r$ ×0,9.') + call('Resultado', 'r de 4 cm a 3,6 cm.', 'success')],
    ['Semelhança', 'Funil pela metade', 'up', 'primary', p('Razão $k$ ⇒ volume $k^{3}$.') + call('Exemplo', '120 mL ⇒ 15 mL.', 'success')],
    ['Conferência', 'Antes de responder', 'check', 'growth', li(['Dividiu por 3?', 'Raio ao quadrado?', 'Diâmetro ÷ 2?'])]
  ],
  wide: [['Armadilhas', 'O que mais tira ponto', 'warn', 'danger', wl(['Esquecer o ÷ 3.', 'Reduzir o raio pelo mesmo percentual do volume.', 'Achar que metade da altura é metade do volume.', 'Usar o diâmetro como raio.', 'Errar a conversão para litros.'])]]
}));

const ATV = { dir: BASE, key: KEY, brand: BRAND, cap: CAP };
pages.push(K.atvEnem({ ...ATV, cls: '',
  h1: 'Volume do cone <span style="color:var(--primary);">no estilo ENEM</span>',
  subtitle: 'Cinco questões originais: volume, cone no cilindro, chocolate, funil e copo.',
  final: 'Divida por 3; com volume por percentual, a raiz quadrada entra no raio.',
  questions: [
    { badge: 'Estilo ENEM · volume', text: 'Um cone reto tem raio 3 cm e altura 4 cm. Use $π = 3$.', cmd: 'Seu volume, em cm³, é:', opts: ['12', '24', '36', '72', '108'], a: 2,
      sol: '<p>$3 · 9 · 4 ÷ 3 = 36$.</p>' },
    { badge: 'Estilo ENEM · cone no cilindro', text: 'Um cilindro de 90 cm³ contém um cone de mesma base e altura.', cmd: 'O volume do cone, em cm³, é:', opts: ['15', '30', '45', '60', '180'], a: 1,
      sol: '<p>$90 ÷ 3 = 30$.</p>' },
    { badge: 'Estilo ENEM · chocolate', text: 'Um chocolate em forma de cone tem raio 4 cm e altura 10 cm. Faz-se um novo, de volume 19% menor e mesma altura.', cmd: 'O raio do novo chocolate, em cm, é:', opts: ['3,0', '3,2', '3,6', '3,8', '4,0'], a: 2,
      sol: '<p>$r^{2} = 0,81 · 16 = 12,96$ ⇒ $r = 3,6$.</p>' },
    { badge: 'Estilo ENEM · funil', text: 'Um funil cônico cheio tem 120 mL. O líquido atinge a metade da altura do funil.', cmd: 'O volume de líquido, em mL, é:', opts: ['60', '30', '40', '15', '24'], a: 3,
      sol: '<p>Razão de volumes $(1 ÷ 2)^{3} = 1 ÷ 8$: $120 ÷ 8 = 15$.</p>' },
    { badge: 'Estilo ENEM · copo cônico', text: 'Um copo cônico tem raio 4 cm e altura 9 cm. Use $π = 3$.', cmd: 'Sua capacidade, em mL, é:', opts: ['108', '144', '216', '432', '1 296'], a: 1,
      sol: '<p>$3 · 16 · 9 ÷ 3 = 144$ cm³ $= 144$ mL.</p>' }
  ]
}));

pages.push(K.atvCria({ ...ATV, cls: 'decay',
  h1: 'Detetive: onde está o <span style="color:var(--decay);">erro</span>?',
  subtitle: 'Cada resolução de volume do cone tem uma linha errada.',
  tpl: cDetetive({
    intro: 'Leia cada resolução e clique na <strong>linha errada</strong>.',
    final: 'Erros típicos: esquecer o ÷ 3, tratar semelhança como linear e extrair a raiz errado.',
    casos: [
      { titulo: 'Volume do cone', enunciado: 'Qual o volume de um cone com $r = 3$, $h = 4$ e $π = 3$?', linhas: ['Raio 3, altura 4, π = 3.', 'Volume do cone: $V = π r^{2} h ÷ 3$.', '$V = 3 · 9 · 4 = 108$.', 'Resposta: 108.'], erro: 2, porque: 'Faltou dividir por 3: $108 ÷ 3 = 36$.' },
      { titulo: 'Chocolate', enunciado: 'O volume de um cone de raio 4 e altura 10 cai 19% (altura fixa). Qual o novo raio?', linhas: ['Volume atual: $V = 3 · 16 · 10 ÷ 3 = 160$.', 'Volume novo: $0,81 · 160 = 129,6$.', '$r^{2} = 129,6 ÷ 10 = 12,96$.', 'Logo, $r = 6,48$.'], erro: 3, porque: 'É preciso extrair a raiz quadrada: $r = √{12,96} = 3,6$ cm (e não $12,96 ÷ 2 = 6,48$).' },
      { titulo: 'Cone no cilindro', enunciado: 'Um cilindro de 90 cm³ contém um cone de mesma base e altura. Qual o volume do cone?', linhas: ['Cilindro: 90 cm³.', 'O cone tem a mesma base e altura.', 'O volume do cone é o dobro do cilindro: 180 cm³.'], erro: 2, porque: 'O cone tem <strong>um terço</strong> do cilindro: $90 ÷ 3 = 30$ cm³.' },
      { titulo: 'Funil', enunciado: 'Um funil cônico cheio tem 120 mL. Quanto há quando o líquido está na metade da altura?', linhas: ['Funil cheio: 120 mL.', 'Altura do líquido: metade da altura do funil.', 'Cones semelhantes, de razão $1 ÷ 2$.', 'Volume do líquido: $120 ÷ 2 = 60$ mL.'], erro: 3, porque: 'Volumes seguem o <strong>cubo</strong> da razão: $(1 ÷ 2)^{3} = 1 ÷ 8$ ⇒ $15$ mL.' }
    ]
  })
}));

pages.push(K.atvPratica({ ...ATV, cls: 'growth',
  h1: 'Volume do cone: <span style="color:var(--growth);">trilha de desafios</span>',
  subtitle: 'Cinco etapas: volume, cone no cilindro, chocolate, funil e copo. Digite o número pedido (use vírgula ou ponto).',
  final: 'Você percorreu a trilha: ÷ 3, percentuais e semelhança.',
  problems: [
    { tag: 'Volume', q: 'Cone de raio 3 e altura 4, π = 3: qual o volume?', a: 36, ph: 'V', hint: '108 ÷ 3.', sol: '<p>$36$.</p>' },
    { tag: 'Cone no cilindro', q: 'Um cilindro de 90 cm³ contém um cone de mesma base e altura. Qual o volume do cone?', a: 30, ph: 'cm³', hint: '90 ÷ 3.', sol: '<p>$30$.</p>' },
    { tag: 'Chocolate', q: 'Raio 4, altura 10, volume 19% menor com altura fixa: qual o novo raio, em cm?', a: 3.6, ph: 'cm', hint: 'r² = 0,81 · 16.', sol: '<p>$3,6$.</p>' },
    { tag: 'Funil', q: 'Funil de 120 mL cheio até a metade da altura: quantos mL de líquido?', a: 15, ph: 'mL', hint: '120 ÷ 8.', sol: '<p>$15$.</p>' },
    { tag: 'Copo', q: 'Copo cônico de raio 4 cm e altura 9 cm (π = 3): qual a capacidade, em mL?', a: 144, ph: 'mL', hint: '3 · 16 · 9 ÷ 3.', sol: '<p>$144$.</p>' }
  ]
}));

module.exports = { meta: {
  tri: TRI, dir: DIR, titulo: 'Cone: Volume', accent: 'growth', icon: 'triangle',
  aulas: [['Aulas 60–61', 'Volume do cone', 'aula-1-volume-do-cone.html']],
  enem: 'Volume do cone no estilo ENEM', cria: 'Detetive: onde está o erro?', pratica: 'Volume do cone: trilha de desafios'
}, pages };
