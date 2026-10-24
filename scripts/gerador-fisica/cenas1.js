// Ilustrações ORIGINAIS (SVG 320 × 200) de Física do 1º ano: movimento, forças, energia e gravitação.
const { R, C, L, T, P, chao } = require('../gerador-padrao/ilus.js');
const seta = (x1, y1, x2, y2, st = 'ink', w = 2.5) => {
  const a = Math.atan2(y2 - y1, x2 - x1), h = 7, f = d => [x2 - h * Math.cos(a + d), y2 - h * Math.sin(a + d)];
  const [ax, ay] = f(0.5), [bx, by] = f(-0.5);
  return L(x1, y1, x2, y2, st, w) + L(x2, y2, ax, ay, st, w) + L(x2, y2, bx, by, st, w);
};
const elip = (cx, cy, rx, ry, st = 'ink-soft', w = 2, fill = 'none') => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill === 'none' ? 'none' : `var(--${fill})`}" stroke="var(--${st})" stroke-width="${w}"/>`;
const tracejado = (x1, y1, x2, y2, st = 'ink-faint', w = 2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--${st})" stroke-width="${w}" stroke-dasharray="5 4" stroke-linecap="round"/>`;
const carro = (x, y, cor = 'primary') => R(x, y - 26, 62, 18, cor + '-soft', cor, 6) + R(x + 12, y - 40, 36, 16, cor + '-soft', cor, 5) + C(x + 14, y - 6, 8, 'ink-soft') + C(x + 48, y - 6, 8, 'ink-soft');
const bloco = (x, y, w = 50, h = 34, cor = 'decay') => R(x, y, w, h, cor + '-soft', cor, 4);

module.exports = {
  // carro em movimento uniforme sobre a estrada, com marcos de posição
  mu: () => chao(150) + [0, 1, 2, 3, 4].map(i => L(40 + i * 60, 150, 40 + i * 60, 160, 'ink-soft', 2) + T(40 + i * 60, 178, String(i * 50), 12, 'ink-soft', 'middle')).join('') + carro(70, 150) + seta(140, 90, 210, 90, 'growth', 3.5) + T(176, 78, 'v constante', 13, 'growth', 'middle') +
    T(160, 20, 'posição s (m)', 13, 'ink-soft', 'middle') + tracejado(40, 40, 280, 40, 'ink-faint', 2) + T(160, 196, 'em intervalos iguais, deslocamentos iguais', 11, 'ink-soft', 'middle'),
  // gráfico s × t de um MU
  'grafico-s-t': () => L(40, 160, 290, 160, 'ink', 2.5) + L(40, 160, 40, 20, 'ink', 2.5) + L(40, 140, 250, 50, 'primary', 4) + C(40, 140, 5, 'primary') + C(250, 50, 5, 'primary') + tracejado(250, 50, 250, 160, 'ink-faint', 2) + tracejado(40, 50, 250, 50, 'ink-faint', 2) +
    T(290, 176, 't (s)', 13, 'ink', 'end') + T(52, 28, 's (m)', 13, 'ink') + T(250, 176, 't', 12, 'ink-soft', 'middle') + T(26, 56, 's', 12, 'ink-soft', 'end') + T(150, 120, 'inclinação = v', 13, 'primary', 'middle'),
  // queda livre: posições a cada segundo
  queda: () => L(60, 10, 60, 190, 'ink-soft', 2) + [[0, 0], [1, 5], [2, 20], [3, 45]].map(([t, y], i) => C(120 + i * 6, 24 + y * 3, 9, 'decay-soft', 'decay') + T(150 + i * 6, 28 + y * 3, 't = ' + t + ' s  ·  ' + y + ' m', 12, 'ink-soft')).join('') + tracejado(120, 24, 138, 159, 'ink-faint', 2) +
    seta(60, 40, 60, 100, 'growth', 3) + T(40, 80, 'g', 15, 'growth', 'middle') + T(160, 196, 'queda livre: deslocamentos 1 : 3 : 5 …', 11, 'ink-soft', 'middle'),
  // forças em um bloco
  forcas: () => chao(130) + bloco(120, 96, 80, 34) + seta(160, 96, 160, 40, 'primary', 3) + T(176, 52, 'N', 15, 'primary') + seta(160, 130, 160, 176, 'decay', 3) + T(176, 168, 'P', 15, 'decay') + seta(200, 113, 270, 113, 'growth', 3) + T(262, 103, 'F', 15, 'growth', 'middle') +
    seta(120, 118, 70, 118, 'danger', 3) + T(88, 142, 'atrito', 12, 'danger', 'middle') + T(160, 196, 'a força resultante determina a aceleração', 11, 'ink-soft', 'middle'),
  // plano inclinado
  'plano-inclinado': () => P('M30 170 L270 170 L270 60 Z', 'surface', 'line-strong', 3) + R(122, 88, 44, 28, 'decay-soft', 'decay', 4).replace('<rect ', '<rect transform="rotate(-24.6 144 102)" ') + seta(144, 102, 144, 156, 'decay', 3) + T(156, 154, 'P', 14, 'decay') +
    seta(144, 102, 89, 127, 'growth', 2.5) + T(80, 142, 'Pₓ', 13, 'growth') + seta(144, 102, 123, 57, 'primary', 3) + T(108, 54, 'N', 14, 'primary') + P('M60 170 A30 30 0 0 0 57.3 157.5', 'none', 'ink-soft', 2) + T(72, 164, 'θ', 14, 'ink') + T(160, 196, 'o peso se decompõe em Pₓ (ao longo do plano) e Pᵧ', 10, 'ink-soft', 'middle'),
  // mola com bloco
  mola: () => chao(150) + R(20, 60, 12, 90, 'ink-soft') + P('M32 114 H60 l8 -22 l16 44 l16 -44 l16 44 l16 -44 l16 44 l8 -22 H170', 'none', 'primary', 3) + bloco(170, 100, 54, 50) + seta(224, 125, 280, 125, 'growth', 3) + T(260, 112, 'x', 14, 'growth', 'middle') +
    T(110, 172, 'F = k · x', 16, 'primary', 'middle') + tracejado(224, 100, 224, 40, 'ink-faint', 2) + T(160, 196, 'a mola reage com força proporcional à deformação', 11, 'ink-soft', 'middle'),
  // movimento circular
  circular: () => C(160, 100, 66, 'surface', 'line-strong').replace('stroke-width="2"', 'stroke-width="3"') + C(160, 100, 4, 'ink') + C(226, 100, 10, 'decay', 'decay') + seta(226, 100, 226, 40, 'growth', 3.5) + T(244, 52, 'v', 15, 'growth') + seta(226, 100, 172, 100, 'primary', 3.5) + T(200, 90, 'Fc', 14, 'primary', 'middle') +
    L(160, 100, 226, 100, 'ink-faint', 1.5) + T(188, 120, 'R', 14, 'ink-soft', 'middle') + T(160, 196, 'a força centrípeta aponta para o centro; v é tangente', 10, 'ink-soft', 'middle'),
  // trabalho de uma força
  trabalho: () => chao(150) + bloco(80, 108, 70, 42) + seta(150, 118, 210, 90, 'growth', 3.5) + T(212, 84, 'F', 15, 'growth') + P('M168 118 A20 20 0 0 0 176 108', 'none', 'ink-soft', 2) + T(184, 124, 'θ', 14, 'ink') + L(80, 168, 260, 168, 'ink', 2.5) + P('M80 162 v12 M260 162 v12', 'none', 'ink', 2.5) +
    T(170, 188, 'deslocamento d', 12, 'ink', 'middle') + T(160, 40, 'W = F · d · cos θ', 17, 'primary', 'middle'),
  // montanha-russa e energia
  'montanha-russa': () => P('M10 60 C60 60 80 170 140 170 C200 170 210 90 250 90 C280 90 290 120 310 120', 'none', 'primary', 4) + C(30, 52, 10, 'decay-soft', 'decay') + T(52, 40, 'Ep máxima', 12, 'decay') + C(140, 158, 10, 'growth-soft', 'growth') + T(140, 146, 'Ec máxima', 12, 'growth', 'middle') + tracejado(10, 60, 310, 60, 'ink-faint', 1.5) + T(160, 196, 'Ep + Ec = constante (sem atrito)', 11, 'ink-soft', 'middle'),
  // colisão de dois carrinhos
  colisao: () => chao(110) + bloco(40, 76, 50, 34, 'decay') + seta(40, 60, 90, 60, 'decay', 3) + T(65, 48, 'v₁', 13, 'decay', 'middle') + bloco(170, 76, 50, 34, 'primary') + seta(220, 60, 170, 60, 'primary', 3) + T(195, 48, 'v₂', 13, 'primary', 'middle') + T(130, 94, '×', 22, 'ink', 'middle') +
    chao(190).replace(/y="190"/, 'y="190"') + bloco(60, 156, 50, 30, 'primary') + bloco(200, 156, 50, 30, 'decay') + seta(110, 172, 130, 172, 'ink', 2) + T(160, 150, 'depois da colisão', 12, 'ink-soft', 'middle') + T(160, 20, 'Q antes = Q depois', 15, 'primary', 'middle'),
  // órbita elíptica
  orbita: () => elip(160, 100, 130, 70, 'line-strong', 2.5) + C(220, 100, 14, 'decay-soft', 'decay') + T(220, 130, 'Sol', 12, 'decay', 'middle') + C(60, 100, 8, 'primary-soft', 'primary') + T(60, 86, 'afélio', 11, 'primary', 'middle') + C(266, 100, 6, 'primary') + T(278, 90, 'periélio', 11, 'primary') +
    P('M220 100 L266 100 L262 78 Z', 'growth-soft', 'growth', 1.5) + P('M220 100 L120 168 L170 166 Z', 'growth-soft', 'growth', 1.5) + T(160, 196, 'áreas iguais em tempos iguais (2ª lei de Kepler)', 10, 'ink-soft', 'middle'),
  // soma de vetores
  vetores: () => L(30, 160, 290, 160, 'line', 1.5) + seta(50, 150, 160, 150, 'primary', 3.5) + T(105, 170, 'a', 15, 'primary', 'middle') + seta(160, 150, 220, 70, 'decay', 3.5) + T(204, 118, 'b', 15, 'decay') + seta(50, 150, 220, 70, 'growth', 4) + T(120, 96, 'a + b', 16, 'growth', 'middle') +
    tracejado(50, 150, 110, 70, 'decay', 1.5) + tracejado(110, 70, 220, 70, 'primary', 1.5) + T(160, 196, 'regra do paralelogramo', 11, 'ink-soft', 'middle')
};
