// Biblioteca de ilustrações ORIGINAIS (SVG) para as imagens de contextualização das aulas. Cada função devolve o miolo de um SVG 320 × 200.
// Usa só as cores do tema (var(--...)), então funciona em claro e escuro. Sem imagens de terceiros.
const R = (x, y, w, h, fill, st = '', rx = 0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="var(--${fill})" ${st ? `stroke="var(--${st})" stroke-width="2"` : ''}/>`;
const C = (cx, cy, r, fill, st = '') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--${fill})" ${st ? `stroke="var(--${st})" stroke-width="2"` : ''}/>`;
const L = (x1, y1, x2, y2, st = 'ink-soft', w = 2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--${st})" stroke-width="${w}" stroke-linecap="round"/>`;
const T = (x, y, s, size = 13, fill = 'ink', anchor = 'start', weight = 700) => `<text x="${x}" y="${y}" font-size="${size}" fill="var(--${fill})" text-anchor="${anchor}" font-weight="${weight}">${s}</text>`;
const P = (d, fill = 'none', st = 'ink-soft', w = 2) => `<path d="${d}" fill="${fill === 'none' ? 'none' : `var(--${fill})`}" stroke="var(--${st})" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const chao = (y = 170) => R(0, y, 320, 200 - y, 'surface') + L(0, y, 320, y, 'line-strong', 2);

const cenas = {
  // mercado: prateleira com produtos e etiquetas de preço
  mercado: () => chao() + R(20, 40, 280, 10, 'ink-faint') + R(20, 100, 280, 10, 'ink-faint') +
    [0, 1, 2, 3].map(i => R(34 + i * 68, 8, 44, 32, ['primary-soft', 'growth-soft', 'decay-soft', 'success-soft'][i], ['primary', 'growth', 'decay', 'success'][i], 5) + R(40 + i * 68, 18, 32, 12, 'surface', '', 3)).join('') +
    [0, 1, 2, 3].map(i => R(34 + i * 68, 68, 44, 32, ['decay-soft', 'success-soft', 'primary-soft', 'growth-soft'][i], ['decay', 'success', 'primary', 'growth'][i], 5)).join('') +
    [0, 1, 2, 3].map(i => R(30 + i * 68, 52, 52, 18, 'surface', 'line-strong', 3) + T(56 + i * 68, 65, ['R&#36; 7', 'R&#36; 12', 'R&#36; 25', 'R&#36; 148'][i], 11, 'ink', 'middle')).join('') +
    C(60, 144, 17, 'primary-soft', 'primary') + C(100, 150, 12, 'growth-soft', 'growth') + R(190, 128, 94, 38, 'surface', 'line-strong', 6) + T(237, 152, 'R&#36; 1.250', 14, 'decay', 'middle'),
  // odômetro de carro / contador
  odometro: () => chao() + R(40, 60, 240, 70, 'surface', 'line-strong', 10) +
    [0, 1, 2, 3, 4, 5].map(i => R(52 + i * 36, 74, 30, 42, i === 5 ? 'primary-soft' : 'surface', i === 5 ? 'primary' : 'line-strong', 5) + T(67 + i * 36, 104, ['0', '1', '2', '4', '7', '9'][i], 24, i === 5 ? 'primary' : 'ink', 'middle')).join('') +
    T(160, 150, 'km rodados', 13, 'ink-soft', 'middle') + P('M40 40 Q160 10 280 40', 'none', 'primary', 3) + C(40, 40, 5, 'primary') + C(280, 40, 5, 'primary'),
  // skyline de cidade com sol
  cidade: () => chao(168) + C(262, 40, 22, 'decay-soft', 'decay') +
    R(20, 90, 46, 78, 'primary-soft', 'primary') + R(74, 60, 52, 108, 'growth-soft', 'growth') + R(134, 100, 44, 68, 'decay-soft', 'decay') + R(186, 70, 56, 98, 'success-soft', 'success') + R(250, 110, 50, 58, 'primary-soft', 'primary') +
    [0, 1, 2].map(r => [0, 1].map(c => R(84 + c * 22, 72 + r * 26, 12, 14, 'surface')).join('')).join('') + [0, 1, 2].map(r => [0, 1, 2].map(c => R(194 + c * 16, 82 + r * 24, 9, 12, 'surface')).join('')).join('') +
    T(100, 24, '2 000 000 de habitantes', 12, 'ink-soft', 'middle'),
  // estádio com público
  estadio: () => chao(176) + P('M10 150 Q160 20 310 150', 'surface', 'line-strong', 3) + P('M30 150 Q160 50 290 150', 'primary-soft', 'primary', 2) + R(40, 150, 240, 24, 'growth-soft', 'growth', 5) +
    Array.from({ length: 36 }, (_, i) => C(70 + (i % 12) * 16 + (Math.floor(i / 12) % 2) * 6, 92 + Math.floor(i / 12) * 16 - (Math.abs((i % 12) - 5.5) * 3), 4, ['decay', 'success', 'primary', 'growth'][i % 4])).join('') +
    T(160, 192, '48 000 torcedores', 12, 'ink-soft', 'middle'),
  // bilhete na geladeira
  bilhete: () => chao() + R(90, 10, 140, 156, 'surface', 'line-strong', 12) + R(96, 70, 128, 3, 'line') + R(210, 40, 10, 24, 'ink-faint', '', 3) +
    R(116, 44, 98, 84, 'decay-soft', 'decay', 4) + [0, 1, 2, 3].map(i => L(126, 62 + i * 16, 204, 62 + i * 16, 'ink-soft', 2)).join('') + C(120, 40, 5, 'danger') + T(160, 188, 'recado na geladeira', 12, 'ink-soft', 'middle'),
  // conversa: dois balões
  baloes: () => chao() + R(20, 20, 150, 60, 'primary-soft', 'primary', 14) + P('M60 80 L50 100 L84 80', 'primary-soft', 'primary', 2) + L(36, 40, 140, 40, 'primary', 2) + L(36, 56, 110, 56, 'primary', 2) +
    R(150, 100, 150, 60, 'growth-soft', 'growth', 14) + P('M262 160 L276 178 L242 160', 'growth-soft', 'growth', 2) + L(166, 120, 284, 120, 'growth', 2) + L(166, 136, 250, 136, 'growth', 2) + T(95, 192, 'quem fala? o que quer dizer?', 12, 'ink-soft', 'middle'),
  // jornal
  jornal: () => chao() + R(50, 14, 220, 150, 'surface', 'line-strong', 6) + R(62, 26, 196, 26, 'primary-soft', 'primary', 4) + T(160, 45, 'NOTÍCIA DO DIA', 15, 'primary', 'middle') + R(62, 62, 90, 60, 'decay-soft', 'decay', 4) +
    [0, 1, 2, 3, 4].map(i => L(164, 70 + i * 12, 258, 70 + i * 12, 'ink-soft', 2)).join('') + [0, 1, 2].map(i => L(62, 134 + i * 10, 258, 134 + i * 10, 'ink-faint', 2)).join('') + T(160, 192, 'o texto informa fatos', 12, 'ink-soft', 'middle'),
  // livro aberto + estrela
  livro: () => chao() + P('M160 40 C130 28 80 28 40 40 L40 150 C80 138 130 138 160 150 Z', 'primary-soft', 'primary', 3) + P('M160 40 C190 28 240 28 280 40 L280 150 C240 138 190 138 160 150 Z', 'growth-soft', 'growth', 3) +
    [0, 1, 2, 3].map(i => L(54, 62 + i * 18, 144, 62 + i * 18 - 6, 'primary', 2)).join('') + [0, 1, 2, 3].map(i => L(176, 56 + i * 18, 266, 62 + i * 18, 'growth', 2)).join('') + P('M160 12 L165 24 L178 25 L168 33 L171 46 L160 39 L149 46 L152 33 L142 25 L155 24 Z', 'decay-soft', 'decay', 2) + T(160, 190, 'era uma vez…', 13, 'ink-soft', 'middle'),
  // pizza dividida
  pizza: () => chao() + C(160, 96, 68, 'decay-soft', 'decay') + [0, 1, 2, 3, 4, 5, 6, 7].map(i => L(160, 96, 160 + 68 * Math.cos(i * Math.PI / 4), 96 + 68 * Math.sin(i * Math.PI / 4), 'decay', 2)).join('') + C(190, 76, 6, 'danger') + C(130, 110, 6, 'danger') + C(168, 128, 6, 'danger') + C(136, 72, 6, 'danger') + T(160, 192, '8 fatias iguais', 12, 'ink-soft', 'middle'),
  // mapa com rota
  mapa: () => R(20, 14, 280, 156, 'surface', 'line-strong', 8) + [1, 2, 3].map(i => L(20 + i * 70, 14, 20 + i * 70, 170, 'line', 1)).join('') + [1, 2].map(i => L(20, 14 + i * 52, 300, 14 + i * 52, 'line', 1)).join('') +
    R(36, 30, 40, 30, 'primary-soft', 'primary', 4) + R(210, 112, 60, 40, 'growth-soft', 'growth', 4) + P('M56 62 L56 100 L150 100 L150 66 L240 66 L240 112', 'none', 'decay', 4) + C(56, 62, 6, 'primary') + P('M240 90 C228 76 228 62 240 56 C252 62 252 76 240 90 Z', 'danger', 'danger', 1) + T(160, 192, 'norte, sul, leste, oeste', 12, 'ink-soft', 'middle'),
  // gráfico de barras
  grafico: () => chao(168) + L(36, 20, 36, 168, 'ink-soft', 2) + [['A', 70, 'primary'], ['B', 110, 'growth'], ['C', 54, 'decay'], ['D', 90, 'success']].map(([l, h, c], i) => R(56 + i * 62, 168 - h, 40, h, c + '-soft', c, 4) + T(76 + i * 62, 186, l, 12, 'ink-soft', 'middle')).join('') + T(160, 14, 'preferência da turma', 12, 'ink-soft', 'middle'),
  // relógio / tempo
  relogio: () => chao() + C(160, 92, 70, 'surface', 'line-strong') + C(160, 92, 4, 'ink') + L(160, 92, 160, 46, 'primary', 4) + L(160, 92, 196, 108, 'decay', 4) + [0, 1, 2, 3].map(i => T(160 + 56 * Math.sin(i * Math.PI / 2), 97 - 56 * Math.cos(i * Math.PI / 2), ['12', '3', '6', '9'][i], 13, 'ink', 'middle')).join(''),
  // dinheiro / moedas e notas
  dinheiro: () => chao() + [0, 1, 2].map(i => C(60 + i * 34, 132 - i * 8, 22, 'decay-soft', 'decay') + T(60 + i * 34, 138 - i * 8, 'R&#36;', 13, 'decay', 'middle')).join('') + R(170, 60, 120, 64, 'success-soft', 'success', 8) + C(230, 92, 16, 'surface', 'success') + T(230, 98, '50', 16, 'success', 'middle') + R(176, 118, 120, 16, 'success-soft', 'success', 6),
  // escola
  escola: () => chao(170) + R(50, 70, 220, 100, 'primary-soft', 'primary', 4) + P('M40 72 L160 20 L280 72 Z', 'decay-soft', 'decay', 3) + R(140, 120, 40, 50, 'surface', 'primary', 3) + [0, 1, 2].map(i => R(66 + i * 0, 90, 0, 0, 'surface')).join('') +
    R(66, 90, 34, 28, 'surface', 'primary', 3) + R(220, 90, 34, 28, 'surface', 'primary', 3) + L(160, 20, 160, 4, 'ink-soft', 2) + R(160, 4, 22, 12, 'success', '', 2),
  // árvore + sol (natureza)
  natureza: () => chao() + C(260, 40, 20, 'decay-soft', 'decay') + R(90, 90, 20, 80, 'ink-faint', '', 3) + C(100, 70, 40, 'success-soft', 'success') + C(70, 100, 28, 'success-soft', 'success') + C(132, 98, 26, 'success-soft', 'success') + R(210, 130, 60, 40, 'primary-soft', 'primary', 6),
  // blocos de base 10: unidade, dezena (barra), centena (placa)
  blocos: () => chao(176) + R(24, 90, 14, 14, 'primary-soft', 'primary') + T(31, 124, '1', 13, 'primary', 'middle') +
    R(72, 40, 14, 130, 'growth-soft', 'growth') + [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => L(72, 40 + i * 13, 86, 40 + i * 13, 'growth', 1)).join('') + T(79, 188, '10', 13, 'growth', 'middle') +
    R(130, 40, 130, 130, 'decay-soft', 'decay') + [1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => L(130 + i * 13, 40, 130 + i * 13, 170, 'decay', 1) + L(130, 40 + i * 13, 260, 40 + i * 13, 'decay', 1)).join('') + T(195, 188, '100', 13, 'decay', 'middle') +
    T(160, 22, 'cada peça vale 10 vezes a anterior', 12, 'ink-soft', 'middle'),
  // calculadora
  calculadora: () => chao() + R(100, 12, 120, 160, 'surface', 'line-strong', 12) + R(112, 24, 96, 32, 'primary-soft', 'primary', 6) + T(200, 48, '1 234', 18, 'primary', 'end') +
    [0, 1, 2, 3].map(r => [0, 1, 2].map(c => R(112 + c * 34, 66 + r * 26, 28, 20, c === 2 ? 'decay-soft' : 'growth-soft', c === 2 ? 'decay' : 'growth', 4)).join('')).join('')
};
module.exports = { cenas, R, C, L, T, P, chao };
require('./ilus2.js')(module.exports);
