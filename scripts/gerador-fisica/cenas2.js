// Ilustrações ORIGINAIS (SVG 320 × 200) de Física do 2º ano: calor, gases, óptica, ondas, som e fluidos.
const { R, C, L, T, P, chao } = require('../gerador-padrao/ilus.js');
const seta = (x1, y1, x2, y2, st = 'ink', w = 2.5) => {
  const a = Math.atan2(y2 - y1, x2 - x1), h = 7, f = d => [x2 - h * Math.cos(a + d), y2 - h * Math.sin(a + d)];
  const [ax, ay] = f(0.5), [bx, by] = f(-0.5);
  return L(x1, y1, x2, y2, st, w) + L(x2, y2, ax, ay, st, w) + L(x2, y2, bx, by, st, w);
};
const elip = (cx, cy, rx, ry, st = 'ink-soft', w = 2, fill = 'none') => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill === 'none' ? 'none' : `var(--${fill})`}" stroke="var(--${st})" stroke-width="${w}"/>`;
const senoide = (x0, x1, y, amp, k, st = 'primary', w = 3) => { let d = ''; for (let x = x0; x <= x1; x += 2) d += (x === x0 ? 'M' : 'L') + x + ' ' + (y - amp * Math.sin((x - x0) * k)).toFixed(1) + ' '; return P(d, 'none', st, w); };
const tracejado = (x1, y1, x2, y2, st = 'ink-faint', w = 2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--${st})" stroke-width="${w}" stroke-dasharray="5 4" stroke-linecap="round"/>`;

module.exports = {
  // termômetro com três escalas
  escalas: () => R(150, 18, 20, 120, 'surface', 'line-strong', 10) + C(160, 150, 20, 'decay-soft', 'decay') + R(155, 60, 10, 90, 'decay') + C(160, 150, 12, 'decay') +
    L(172, 36, 186, 36, 'ink', 2) + L(172, 128, 186, 128, 'ink', 2) + T(192, 40, '100 °C', 13, 'decay') + T(192, 132, '0 °C', 13, 'primary') + L(134, 36, 148, 36, 'ink', 2) + L(134, 128, 148, 128, 'ink', 2) +
    T(128, 40, '373 K', 12, 'ink-soft', 'end') + T(128, 132, '273 K', 12, 'ink-soft', 'end') + T(256, 40, '212 °F', 12, 'ink-soft') + T(256, 132, '32 °F', 12, 'ink-soft') + T(160, 192, 'a mesma temperatura em três escalas', 11, 'ink-soft', 'middle'),
  // calor flui do mais quente para o mais frio
  calor: () => R(24, 60, 90, 80, 'decay-soft', 'decay', 10) + T(69, 106, 'quente', 15, 'decay', 'middle') + R(206, 60, 90, 80, 'primary-soft', 'primary', 10) + T(251, 106, 'frio', 15, 'primary', 'middle') +
    seta(122, 84, 198, 84, 'decay', 3) + seta(122, 100, 198, 100, 'decay', 3) + seta(122, 116, 198, 116, 'decay', 3) + T(160, 62, 'calor Q', 14, 'decay', 'middle') + T(160, 186, 'o calor flui espontaneamente do mais quente para o mais frio', 10, 'ink-soft', 'middle'),
  // gás em cilindro com êmbolo
  'gas-pistao': () => R(60, 50, 170, 100, 'surface', 'line-strong', 4) + R(206, 46, 14, 108, 'ink-faint', 'line-strong', 3) + L(220, 100, 280, 100, 'ink-soft', 6) + R(280, 84, 10, 32, 'ink-soft') + seta(262, 70, 262, 70, 'decay', 1) + seta(300, 100, 270, 100, 'decay', 3) +
    [[84, 74], [118, 96], [150, 70], [176, 112], [100, 128], [140, 130], [188, 84], [72, 108]].map(([x, y], i) => C(x, y, 6, i % 2 ? 'primary-soft' : 'growth-soft', i % 2 ? 'primary' : 'growth')).join('') +
    T(130, 40, 'P, V, T', 14, 'ink', 'middle') + T(160, 186, 'transformações: comprimir, expandir e aquecer o gás', 11, 'ink-soft', 'middle'),
  // máquina térmica
  'maquina-termica': () => R(100, 14, 120, 38, 'decay-soft', 'decay', 8) + T(160, 38, 'fonte quente  Tq', 13, 'decay', 'middle') + C(160, 100, 28, 'surface', 'line-strong') + T(160, 106, 'M', 20, 'ink', 'middle') +
    R(100, 150, 120, 38, 'primary-soft', 'primary', 8) + T(160, 174, 'fonte fria  Tf', 13, 'primary', 'middle') + seta(160, 52, 160, 70, 'decay', 3) + T(176, 64, 'Q₁', 13, 'decay') + seta(160, 130, 160, 148, 'primary', 3) + T(176, 142, 'Q₂', 13, 'primary') +
    seta(190, 100, 270, 100, 'growth', 3) + T(260, 90, 'W', 14, 'growth', 'middle') + T(70, 100, 'W = Q₁ − Q₂', 11, 'ink-soft', 'middle'),
  // espelho plano
  espelho: () => L(190, 14, 190, 186, 'line-strong', 5) + [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => L(190, 20 + i * 20, 198, 12 + i * 20, 'ink-faint', 2)).join('') +
    seta(80, 150, 80, 90, 'primary', 4) + T(80, 172, 'objeto', 12, 'primary', 'middle') + tracejado(300, 150, 300, 90, 'ink-soft', 3) + seta(300, 90, 300, 90, 'ink-soft', 1) + P('M300 90 l-6 12 M300 90 l6 12', 'none', 'ink-soft', 3) + T(300, 172, 'imagem', 12, 'ink-soft', 'middle') +
    L(80, 90, 190, 110, 'decay', 2) + tracejado(190, 110, 300, 90, 'decay', 2) + T(160, 196, 'imagem virtual, do mesmo tamanho, à mesma distância atrás do espelho', 10, 'ink-soft', 'middle'),
  // lente convergente com raios
  lente: () => L(20, 100, 300, 100, 'line', 1.5) + elip(150, 100, 12, 72, 'primary', 3, 'primary-soft') + L(30, 50, 150, 50, 'decay', 2.5) + L(150, 50, 250, 100, 'decay', 2.5) + L(30, 150, 150, 150, 'decay', 2.5) + L(150, 150, 250, 100, 'decay', 2.5) +
    L(30, 100, 250, 100, 'decay', 2.5) + C(250, 100, 5, 'danger') + T(250, 124, 'F', 14, 'danger', 'middle') + C(50, 100, 4, 'ink-soft') + T(150, 20, 'lente convergente', 12, 'primary', 'middle') + T(160, 192, 'raios paralelos convergem no foco', 11, 'ink-soft', 'middle'),
  // refração na interface
  refracao: () => R(0, 100, 320, 100, 'primary-soft') + L(0, 100, 320, 100, 'line-strong', 2) + tracejado(160, 20, 160, 190, 'ink-soft', 2) + seta(60, 20, 160, 100, 'decay', 3) + seta(160, 100, 214, 186, 'decay', 3) + P('M160 60 A40 40 0 0 0 130 70', 'none', 'ink-soft', 2) + T(136, 58, 'θ₁', 14, 'ink') + T(176, 150, 'θ₂', 14, 'ink') +
    T(250, 40, 'ar  n₁', 14, 'ink-soft', 'middle') + T(250, 130, 'água  n₂', 14, 'primary', 'middle') + T(160, 196, 'n₁ · sen θ₁ = n₂ · sen θ₂', 11, 'ink-soft', 'middle'),
  // olho humano
  olho: () => elip(150, 100, 90, 64, 'line-strong', 3, 'surface') + elip(80, 100, 14, 38, 'primary', 3, 'primary-soft') + P('M62 66 Q40 100 62 134', 'none', 'ink-soft', 3) + P('M238 66 Q258 100 238 134', 'none', 'danger', 4) + L(10, 70, 66, 90, 'decay', 2.5) + L(10, 130, 66, 110, 'decay', 2.5) + L(66, 90, 244, 100, 'decay', 2.5) + L(66, 110, 244, 100, 'decay', 2.5) +
    T(262, 90, 'retina', 12, 'danger') + T(80, 40, 'cristalino', 12, 'primary', 'middle') + T(160, 192, 'a imagem se forma na retina', 11, 'ink-soft', 'middle'),
  // onda com comprimento e amplitude
  onda: () => L(20, 100, 300, 100, 'line', 1.5) + senoide(30, 290, 100, 46, 0.1) + seta(30, 160, 30, 160, 'ink', 1) + L(63, 156, 189, 156, 'decay', 2.5) + P('M63 150 v12 M189 150 v12', 'none', 'decay', 2.5) + T(126, 150, 'λ', 16, 'decay', 'middle') +
    L(248, 100, 248, 54, 'growth', 2.5) + T(268, 80, 'A', 16, 'growth', 'middle') + T(160, 192, 'comprimento de onda λ e amplitude A', 11, 'ink-soft', 'middle'),
  // alto-falante e frentes de onda sonora
  som: () => R(24, 80, 28, 40, 'ink-soft') + P('M52 80 L96 48 L96 152 L52 120 Z', 'primary-soft', 'primary', 3) +
    [0, 1, 2, 3].map(i => P(`M${120 + i * 34} ${100 - 26 - i * 14} Q${150 + i * 34} 100 ${120 + i * 34} ${100 + 26 + i * 14}`, 'none', 'primary', 3)).join('') + T(160, 192, 'compressões e rarefações do ar propagam o som', 11, 'ink-soft', 'middle'),
  // efeito Doppler
  doppler: () => [24, 42, 62, 84].map((r, i) => `<circle cx="${180 - 10 - i * 14 + r * 0}" cy="100" r="${r}" fill="none" stroke="var(--primary)" stroke-width="2" opacity="${1 - i * 0.18}"/>`).join('') + C(170, 100, 9, 'decay', 'decay') + seta(182, 100, 262, 100, 'decay', 3) + T(240, 88, 'v', 14, 'decay', 'middle') +
    T(250, 130, 'f maior', 12, 'primary', 'middle') + T(70, 130, 'f menor', 12, 'primary', 'middle') + T(160, 192, 'fonte em movimento: frentes comprimidas à frente', 11, 'ink-soft', 'middle'),
  // tubo sonoro com onda estacionária
  tubo: () => R(30, 70, 260, 60, 'surface', 'line-strong', 10) + senoide(40, 280, 100, 22, 0.0654) + L(40, 100, 280, 100, 'line', 1) + C(40, 100, 4, 'danger') + C(280, 100, 4, 'danger') + T(160, 56, 'onda estacionária no tubo', 13, 'ink', 'middle') + T(160, 160, 'f = n · v / 2L', 15, 'primary', 'middle') + T(160, 192, 'ressonância: a coluna de ar vibra na sua frequência natural', 10, 'ink-soft', 'middle'),
  // coluna de líquido e pressão
  hidro: () => R(70, 40, 180, 130, 'primary-soft', 'primary', 4) + L(70, 40, 250, 40, 'primary', 3) + seta(300, 40, 300, 168, 'ink', 2.5) + T(284, 112, 'h', 15, 'ink', 'middle') + [0, 1, 2, 3, 4].map(i => seta(100 + i * 36, 150, 100 + i * 36, 172, 'decay', 2)).join('') +
    T(160, 28, 'p₀ (atmosfera)', 12, 'ink-soft', 'middle') + T(160, 100, 'p = p₀ + ρ · g · h', 15, 'primary', 'middle') + T(160, 192, 'a pressão cresce com a profundidade', 11, 'ink-soft', 'middle'),
  // prensa hidráulica
  prensa: () => R(40, 90, 60, 80, 'primary-soft', 'primary') + R(220, 110, 70, 60, 'primary-soft', 'primary') + R(100, 150, 120, 20, 'primary-soft', 'primary') + R(40, 74, 60, 12, 'ink-soft') + R(220, 94, 70, 12, 'ink-soft') +
    seta(70, 30, 70, 70, 'decay', 3) + T(88, 48, 'F₁', 14, 'decay') + seta(255, 40, 255, 90, 'growth', 4) + T(276, 60, 'F₂', 14, 'growth') + T(70, 128, 'A₁', 14, 'ink', 'middle') + T(255, 146, 'A₂', 14, 'ink', 'middle') + T(160, 192, 'F₁ / A₁ = F₂ / A₂', 12, 'ink-soft', 'middle'),
  // empuxo
  empuxo: () => R(20, 100, 280, 90, 'primary-soft', 'primary', 4) + L(20, 100, 300, 100, 'primary', 3) + R(110, 66, 100, 76, 'decay-soft', 'decay', 4) + seta(160, 142, 160, 168, 'danger', 0.1) + seta(160, 104, 160, 40, 'growth', 3.5) + T(184, 54, 'E (empuxo)', 13, 'growth') +
    seta(160, 90, 160, 160, 'decay', 3.5) + T(184, 160, 'P (peso)', 13, 'decay') + T(262, 150, 'E = ρ · g · V', 13, 'ink', 'middle') + T(262, 168, 'V = volume deslocado', 10, 'ink-soft', 'middle'),
  // sombra e penumbra de uma fonte extensa
  sombra: () => C(46, 100, 16, 'decay-soft', 'decay') + T(46, 138, 'fonte', 11, 'decay', 'middle') + R(140, 70, 14, 60, 'ink-soft') + T(147, 150, 'objeto', 11, 'ink-soft', 'middle') + L(262, 14, 262, 186, 'ink', 4) +
    tracejado(46, 86, 262, 52, 'decay', 2) + tracejado(46, 114, 262, 148, 'decay', 2) + tracejado(46, 86, 262, 182, 'ink-soft', 1.5) + tracejado(46, 114, 262, 18, 'ink-soft', 1.5) + R(258, 66, 8, 68, 'ink') + T(290, 104, 'sombra', 12, 'ink', 'middle') + T(290, 40, 'penumbra', 11, 'ink-soft', 'middle') + T(160, 196, 'a luz viaja em linha reta: o objeto opaco projeta sombra', 10, 'ink-soft', 'middle'),
  // lançamento oblíquo (esporte)
  esporte: () => chao(176) + P('M30 170 Q120 -10 210 170', 'none', 'primary', 3).replace('stroke-linecap="round"', 'stroke-linecap="round" stroke-dasharray="6 5"') + C(30, 170, 8, 'decay') + C(120, 40, 8, 'decay-soft', 'decay') + seta(34, 164, 74, 112, 'growth', 3) + T(66, 150, 'v₀', 14, 'growth') +
    P('M44 170 A16 16 0 0 0 40 158', 'none', 'ink-soft', 2) + T(54, 166, 'θ', 14, 'ink') + L(30, 188, 210, 188, 'ink-soft', 2) + T(120, 186, 'alcance', 11, 'ink-soft', 'middle') + T(250, 60, 'altura máxima', 11, 'ink-soft', 'middle') + tracejado(120, 48, 230, 48, 'ink-faint', 2)
};
