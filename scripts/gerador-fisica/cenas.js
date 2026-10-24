// Ilustrações ORIGINAIS (SVG 320 × 200, só com as cores do tema) para as imagens de contextualização das aulas de Física.
// Cada chave é uma função que devolve o miolo do SVG; as aulas usam a chave em E()/H() (lib.js).
const { R, C, L, T, P, chao } = require('../gerador-padrao/ilus.js');
const seta = (x1, y1, x2, y2, st = 'ink', w = 2.5) => {
  const a = Math.atan2(y2 - y1, x2 - x1), h = 7, f = d => [x2 - h * Math.cos(a + d), y2 - h * Math.sin(a + d)];
  const [ax, ay] = f(0.5), [bx, by] = f(-0.5);
  return L(x1, y1, x2, y2, st, w) + L(x2, y2, ax, ay, st, w) + L(x2, y2, bx, by, st, w);
};
const elip = (cx, cy, rx, ry, st = 'ink-soft', w = 2, rot = 0, fill = 'none') => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill === 'none' ? 'none' : `var(--${fill})`}" stroke="var(--${st})" stroke-width="${w}"${rot ? ` transform="rotate(${rot} ${cx} ${cy})"` : ''}/>`;
const carga = (x, y, s, r = 17) => C(x, y, r, s === '+' ? 'decay-soft' : 'primary-soft', s === '+' ? 'decay' : 'primary') + T(x, y + 7, s === '+' ? '+' : '−', 22, s === '+' ? 'decay' : 'primary', 'middle');
const onda = (x0, x1, y, amp, k0, k1, st = 'primary', w = 3) => { let d = '', ph = 0; for (let x = x0; x <= x1; x += 2) { ph += k0 + (k1 - k0) * (x - x0) / (x1 - x0); d += (x === x0 ? 'M' : 'L') + x + ' ' + (y + amp * Math.sin(ph)).toFixed(1) + ' '; } return P(d, 'none', st, w); };

module.exports = {
  // cargas iguais se repelem, opostas se atraem
  eletrizacao: () => chao(180) + carga(70, 56, '+') + carga(150, 56, '+') + seta(48, 56, 22, 56, 'decay') + seta(172, 56, 198, 56, 'decay') + T(250, 52, 'repelem', 14, 'decay', 'middle') +
    carga(70, 130, '+') + carga(150, 130, '−') + seta(94, 130, 110, 130, 'ink') + seta(126, 130, 110, 130, 'ink') + T(250, 126, 'atraem', 14, 'primary', 'middle') + T(160, 196, 'cargas elétricas: iguais repelem, opostas atraem', 11, 'ink-soft', 'middle'),
  // carga puntiforme e linhas de campo
  'campo-eletrico': () => Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return seta(160 + 24 * Math.cos(a), 100 + 24 * Math.sin(a), 160 + 80 * Math.cos(a), 100 + 80 * Math.sin(a), 'primary', 2); }).join('') +
    carga(160, 100, '+') + C(268, 40, 9, 'growth-soft', 'growth') + T(268, 45, '+q', 11, 'growth', 'middle') + seta(268, 40, 296, 28, 'growth') + T(296, 20, 'F', 12, 'growth', 'middle') + T(160, 196, 'linhas de campo saem da carga positiva', 11, 'ink-soft', 'middle'),
  // circuito simples: pilha, resistor e lâmpada
  circuito: () => L(60, 50, 110, 50, 'ink', 3) + P('M110 50 l10 -14 l12 28 l12 -28 l12 28 l12 -28 l10 14', 'none', 'decay', 3) + L(178, 50, 260, 50, 'ink', 3) + L(260, 50, 260, 80, 'ink', 3) + C(260, 100, 20, 'decay-soft', 'decay') +
    L(246, 86, 274, 114, 'decay', 2) + L(274, 86, 246, 114, 'decay', 2) + L(260, 120, 260, 150, 'ink', 3) + L(60, 150, 260, 150, 'ink', 3) + L(60, 50, 60, 88, 'ink', 3) + L(60, 112, 60, 150, 'ink', 3) +
    L(44, 88, 76, 88, 'ink', 5) + L(52, 100, 68, 100, 'ink', 5) + L(44, 112, 76, 112, 'ink', 0.1) + T(34, 90, '+', 14, 'decay', 'middle') + seta(130, 30, 190, 30, 'primary', 3) + T(160, 22, 'corrente i', 12, 'primary', 'middle') +
    T(145, 80, 'R', 14, 'decay', 'middle') + T(160, 186, 'pilha → resistor → lâmpada', 11, 'ink-soft', 'middle'),
  // ímã e linhas de campo magnético
  ima: () => R(100, 86, 60, 28, 'decay-soft', 'decay', 4) + R(160, 86, 60, 28, 'primary-soft', 'primary', 4) + T(130, 107, 'N', 20, 'decay', 'middle') + T(190, 107, 'S', 20, 'primary', 'middle') +
    P('M100 92 C 60 20, 260 20, 220 92', 'none', 'ink-faint', 2) + P('M100 92 C 20 -10, 300 -10, 220 92', 'none', 'ink-faint', 2) + P('M100 108 C 60 180, 260 180, 220 108', 'none', 'ink-faint', 2) + P('M100 108 C 20 210, 300 210, 220 108', 'none', 'ink-faint', 2) +
    C(278, 150, 16, 'surface', 'line-strong') + L(278, 150, 268, 138, 'decay', 3) + L(278, 150, 288, 162, 'primary', 3) + T(278, 184, 'bússola', 11, 'ink-soft', 'middle') + T(160, 196, 'campo magnético: sai do polo norte e entra no sul', 10, 'ink-soft', 'middle'),
  // ímã se aproximando de uma bobina ligada a um medidor
  inducao: () => R(20, 86, 54, 28, 'decay-soft', 'decay', 4) + R(74, 86, 26, 28, 'primary-soft', 'primary', 4) + T(47, 106, 'N', 18, 'decay', 'middle') + T(87, 106, 'S', 16, 'primary', 'middle') + seta(40, 70, 100, 70, 'growth', 3) + T(70, 60, 'v', 12, 'growth', 'middle') +
    [0, 1, 2, 3, 4, 5].map(i => elip(150 + i * 14, 100, 10, 30, 'ink', 3)).join('') + P('M150 130 C 150 180, 250 180, 250 140', 'none', 'ink', 3) + P('M220 100 C 260 100, 270 100, 270 118', 'none', 'ink', 3) +
    C(262, 145, 22, 'surface', 'line-strong') + L(262, 145, 274, 129, 'danger', 3) + T(262, 152, 'G', 12, 'ink-soft', 'middle') + T(160, 196, 'variação do fluxo → corrente induzida', 11, 'ink-soft', 'middle'),
  // espectro eletromagnético
  'onda-em': () => onda(14, 306, 52, 22, 0.04, 0.9) + ['primary-soft', 'growth-soft', 'decay-soft', 'success-soft', 'primary', 'growth', 'decay'].map((c, i) => R(14 + i * 42, 112, 42, 30, c, 'line-strong')).join('') +
    ['rádio', 'micro-', 'infra-', 'visível', 'ultra-', 'raios X', 'gama'].map((t, i) => T(35 + i * 42, 160, t, 10, 'ink', 'middle')).join('') + ['', 'ondas', 'vermelho', '', 'violeta', '', ''].map((t, i) => T(35 + i * 42, 172, t, 9, 'ink-soft', 'middle')).join('') +
    seta(20, 100, 300, 100, 'ink-soft', 2) + T(40, 94, 'maior λ, menor f', 10, 'ink-soft', 'middle') + T(280, 94, 'maior f', 10, 'ink-soft', 'middle') + T(160, 196, 'a luz é só uma faixa do espectro', 11, 'ink-soft', 'middle'),
  // relógio de luz (relatividade)
  relatividade: () => R(80, 48, 130, 8, 'ink-soft', '', 3) + R(80, 148, 130, 8, 'ink-soft', '', 3) + L(110, 148, 145, 56, 'decay', 2) + L(145, 56, 180, 148, 'decay', 2) + C(145, 56, 6, 'decay') + seta(40, 100, 74, 100, 'primary', 3) + T(40, 90, 'v', 13, 'primary', 'middle') +
    T(246, 96, 'c', 24, 'primary', 'middle') + T(246, 118, '3·10⁸ m/s', 11, 'ink-soft', 'middle') + T(145, 40, 'espelho', 11, 'ink-soft', 'middle') + T(145, 176, 'o pulso de luz sobe e desce', 11, 'ink-soft', 'middle') + T(160, 196, 'relógio de luz em movimento', 11, 'ink-soft', 'middle'),
  // modelo atômico de Bohr + fóton
  atomo: () => elip(160, 100, 100, 50, 'line-strong', 1.5) + elip(160, 100, 70, 34, 'line-strong', 1.5) + elip(160, 100, 40, 20, 'line-strong', 1.5) + C(160, 100, 12, 'decay-soft', 'decay') + T(160, 105, '+', 14, 'decay', 'middle') +
    C(200, 100, 5, 'primary') + C(160, 66, 5, 'primary') + C(60, 100, 5, 'primary') + T(206, 92, 'n=1', 10, 'ink-soft') + T(224, 82, 'n=2', 10, 'ink-soft') + T(256, 70, 'n=3', 10, 'ink-soft') +
    P('M14 30 q8 -12 16 0 t16 0 t16 0', 'none', 'growth', 3) + seta(62, 30, 84, 42, 'growth', 3) + T(40, 22, 'fóton', 11, 'growth', 'middle') + T(160, 196, 'elétron salta entre níveis ao absorver ou emitir luz', 10, 'ink-soft', 'middle'),
  // efeito fotoelétrico
  fotoeletrico: () => R(40, 150, 240, 22, 'ink-faint', 'line-strong', 4) + T(160, 166, 'placa metálica', 12, 'ink', 'middle') + P('M40 30 q10 -10 20 0 t20 0 t20 0', 'none', 'growth', 3).replace('M40 30', 'M40 30') + seta(106, 28, 136, 84, 'growth', 3) +
    P('M150 22 q10 -10 20 0 t20 0 t20 0', 'none', 'growth', 3) + seta(216, 20, 246, 76, 'growth', 3) + T(60, 18, 'luz', 12, 'growth', 'middle') + C(160, 130, 6, 'primary') + seta(160, 126, 176, 100, 'primary', 2) + C(250, 128, 6, 'primary') + seta(250, 124, 268, 96, 'primary', 2) +
    T(190, 96, 'e⁻', 13, 'primary', 'middle') + T(160, 196, 'a luz arranca elétrons do metal', 11, 'ink-soft', 'middle'),
  // radioatividade: núcleo e emissões
  radioativo: () => [[70, 96], [86, 108], [72, 114], [88, 90], [56, 106], [96, 126], [76, 132]].map(([x, y], i) => C(x, y, 11, i % 2 ? 'primary-soft' : 'decay-soft', i % 2 ? 'primary' : 'decay')).join('') +
    seta(116, 100, 190, 60, 'decay', 3) + C(206, 54, 6, 'decay') + C(216, 54, 6, 'primary') + T(210, 38, 'α', 16, 'decay', 'middle') + seta(116, 110, 190, 110, 'primary', 3) + C(206, 110, 4, 'primary') + T(226, 114, 'β', 16, 'primary', 'middle') +
    P('M116 124 q10 -10 20 0 t20 0 t20 0 t20 0', 'none', 'growth', 3) + seta(196, 130, 214, 136, 'growth', 3) + T(232, 144, 'γ', 16, 'growth', 'middle') + T(160, 196, 'núcleo instável emite radiação', 11, 'ink-soft', 'middle'),
  // diodo emissor de luz
  led: () => L(40, 100, 130, 100, 'ink', 3) + P('M130 58 L130 142 L196 100 Z', 'decay-soft', 'decay', 3) + L(196, 58, 196, 142, 'ink', 5) + L(196, 100, 270, 100, 'ink', 3) +
    seta(200, 56, 232, 22, 'growth', 3) + seta(220, 66, 254, 34, 'growth', 3) + T(70, 90, '+', 16, 'decay', 'middle') + T(250, 90, '−', 16, 'primary', 'middle') + T(163, 160, 'LED', 13, 'decay', 'middle') + T(160, 192, 'a corrente passa em um só sentido e a junção emite luz', 10, 'ink-soft', 'middle'),
  // transformador
  transformador: () => P('M100 36 H220 V164 H100 Z M132 70 V130 H188 V70 Z', 'surface', 'line-strong', 3).replace('<path ', '<path fill-rule="evenodd" ') + [0, 1, 2, 3, 4].map(i => elip(116, 76 + i * 12, 22, 5, 'decay', 3)).join('') + [0, 1, 2].map(i => elip(204, 88 + i * 12, 22, 5, 'primary', 3)).join('') +
    L(30, 70, 94, 76, 'decay', 3) + L(30, 130, 94, 124, 'decay', 3) + L(226, 94, 290, 90, 'primary', 3) + L(226, 124, 290, 128, 'primary', 3) + T(34, 100, 'Vp', 14, 'decay') + T(280, 112, 'Vs', 14, 'primary', 'end') + T(116, 28, 'N₁', 13, 'decay', 'middle') + T(204, 28, 'N₂', 13, 'primary', 'middle') + T(160, 186, 'a corrente variável induz tensão na segunda bobina', 10, 'ink-soft', 'middle')
};
