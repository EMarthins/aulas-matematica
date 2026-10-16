// Cenas extras (ilustrações originais) + escolha automática da cena pelo título/assunto. Estende o objeto `cenas` de ilus.js.
module.exports = function (ilus) {
  const { cenas, R, C, L, T, P, chao } = ilus;
  const cor = ['primary', 'growth', 'decay', 'success'];
  Object.assign(cenas, {
    // termômetro + reta numérica com negativos
    termometro: () => chao() + R(60, 20, 26, 130, 'surface', 'line-strong', 13) + C(73, 156, 18, 'decay-soft', 'decay') + R(68, 60, 10, 96, 'decay') +
      [0, 1, 2, 3, 4, 5].map(i => L(88, 30 + i * 22, 100, 30 + i * 22, 'ink-soft', 2) + T(106, 34 + i * 22, String(15 - i * 5), 12, 'ink-soft')).join('') +
      L(190, 100, 300, 100, 'ink-soft', 3) + [-3, -2, -1, 0, 1, 2, 3].map((v, i) => L(196 + i * 16, 94, 196 + i * 16, 106, 'ink-soft', 2) + T(196 + i * 16, 124, String(v).replace('-', '−'), 11, v < 0 ? 'primary' : 'growth', 'middle')).join('') + C(212, 100, 6, 'primary'),
    // terreno cercado
    terreno: () => chao() + R(60, 40, 200, 110, 'success-soft', 'success', 6) +
      [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => R(58 + i * 25, 36, 6, 10, 'ink-faint') + R(58 + i * 25, 146, 6, 10, 'ink-faint')).join('') +
      T(160, 28, '20 m', 13, 'ink', 'middle') + T(266, 98, '11 m', 13, 'ink') + T(160, 100, 'terreno', 14, 'success', 'middle') + T(160, 190, 'cerca = perímetro · grama = área', 12, 'ink-soft', 'middle'),
    // caixa (bloco retangular)
    caixa: () => chao(172) + P('M80 80 L80 150 L200 150 L200 80 Z', 'primary-soft', 'primary', 3) + P('M80 80 L120 50 L240 50 L200 80 Z', 'growth-soft', 'growth', 3) + P('M200 80 L240 50 L240 120 L200 150 Z', 'decay-soft', 'decay', 3) +
      T(140, 166, 'comprimento', 12, 'ink', 'middle') + T(246, 100, 'altura', 12, 'ink') + T(150, 44, 'largura', 12, 'ink', 'middle') + T(160, 192, 'volume = c · l · h', 12, 'ink-soft', 'middle'),
    // colônia crescendo + curva
    colonia: () => C(100, 100, 74, 'surface', 'line-strong') +
      [[70, 80], [110, 70], [92, 112], [132, 110], [62, 122], [108, 140], [138, 82], [82, 60], [56, 98], [124, 128], [96, 92], [76, 136]].map(([x, y], i) => C(x, y, 7, i % 2 ? 'growth-soft' : 'success-soft', i % 2 ? 'growth' : 'success')).join('') +
      P('M200 164 Q250 156 270 112 Q285 70 300 20', 'none', 'decay', 4) + L(196, 170, 308, 170, 'ink-soft', 2) + L(196, 170, 196, 14, 'ink-soft', 2) + T(252, 190, 'tempo', 12, 'ink-soft', 'middle'),
    // sismógrafo / escala logarítmica
    sismografo: () => chao() + L(20, 96, 300, 96, 'line-strong', 1) + P('M20 96 L60 96 L68 70 L76 124 L86 50 L96 140 L108 30 L120 150 L134 62 L146 120 L160 88 L180 100 L200 94 L260 96 L300 96', 'none', 'decay', 3) +
      T(160, 18, 'escalas que “comprimem” números enormes', 12, 'ink-soft', 'middle') +
      [0, 1, 2, 3].map(i => R(40 + i * 66, 164, 54, 16, ['success-soft', 'growth-soft', 'primary-soft', 'decay-soft'][i], cor[[3, 1, 0, 2][i]], 3) + T(67 + i * 66, 176, String(i + 4), 11, 'ink', 'middle')).join(''),
    // torre + observador + ângulo
    torre: () => chao(168) + R(220, 26, 30, 142, 'primary-soft', 'primary', 3) + P('M214 26 L235 6 L256 26 Z', 'decay-soft', 'decay', 2) + C(60, 132, 8, 'growth-soft', 'growth') + L(60, 140, 60, 168, 'growth', 3) +
      L(60, 132, 235, 40, 'decay', 2) + L(60, 132, 235, 132, 'ink-soft', 1.5) + P('M96 132 A36 36 0 0 0 91 113', 'none', 'primary', 2.5) + T(112, 126, 'θ', 14, 'primary') + T(258, 100, 'h', 14, 'ink') + T(140, 152, 'd', 13, 'ink', 'middle'),
    // escada numérica
    escada: () => chao() + [0, 1, 2, 3, 4].map(i => R(30 + i * 52, 150 - i * 28, 52, 20 + i * 28, ['primary-soft', 'growth-soft', 'decay-soft', 'success-soft', 'primary-soft'][i], cor[i % 4], 2) + T(56 + i * 52, 142 - i * 28, [3, 7, 11, 15, 19][i], 15, 'ink', 'middle')).join('') + T(160, 192, 'cada degrau: + 4', 12, 'ink-soft', 'middle'),
    // dois dados
    dados: () => chao() + R(50, 50, 80, 80, 'surface', 'primary', 14) + [[70, 70], [110, 110], [90, 90]].map(([x, y]) => C(x, y, 7, 'primary')).join('') +
      R(170, 60, 80, 80, 'surface', 'decay', 14) + [[190, 80], [230, 80], [190, 120], [230, 120], [190, 100], [230, 100]].map(([x, y]) => C(x, y, 7, 'decay')).join('') + T(160, 180, 'quais resultados são possíveis?', 12, 'ink-soft', 'middle'),
    // diagrama de Venn
    venn: () => R(20, 14, 280, 170, 'surface', 'line-strong', 10) + C(125, 100, 62, 'primary-soft', 'primary') + C(195, 100, 62, 'growth-soft', 'growth') + T(90, 104, 'A', 18, 'primary', 'middle') + T(230, 104, 'B', 18, 'growth', 'middle') + T(160, 104, 'A∩B', 14, 'ink', 'middle') + T(160, 178, 'conjuntos e relações', 12, 'ink-soft', 'middle'),
    // bola em parábola
    bola: () => chao() + '<path d="M40 160 Q150 -10 260 120" fill="none" stroke="var(--primary)" stroke-width="3" stroke-dasharray="6 6" stroke-linecap="round"/>' + C(40, 160, 9, 'decay-soft', 'decay') + R(262, 70, 5, 100, 'ink-faint') + R(250, 66, 26, 6, 'decay') + P('M252 72 L260 92 L270 92 L276 72', 'none', 'danger', 2) + T(160, 192, 'trajetória em parábola', 12, 'ink-soft', 'middle'),
    // roda / circunferência
    roda: () => chao(176) + C(160, 96, 70, 'surface', 'primary') + C(160, 96, 8, 'primary') + [0, 1, 2, 3, 4, 5].map(i => L(160, 96, (160 + 70 * Math.cos(i * Math.PI / 3)).toFixed(1), (96 + 70 * Math.sin(i * Math.PI / 3)).toFixed(1), 'primary', 2)).join('') + L(160, 96, 230, 96, 'decay', 3) + T(196, 88, 'r', 14, 'decay', 'middle'),
    // telhado triangular
    telhado: () => chao(170) + R(70, 90, 180, 80, 'primary-soft', 'primary', 3) + P('M54 92 L160 20 L266 92 Z', 'decay-soft', 'decay', 3) + R(140, 120, 40, 50, 'surface', 'primary', 3) + R(88, 108, 30, 26, 'surface', 'primary', 3) + R(202, 108, 30, 26, 'surface', 'primary', 3) + L(160, 20, 160, 92, 'ink-soft', 1.5) + T(168, 62, 'h', 13, 'ink'),
    // piso de hexágonos
    piso: () => [[0, 0], [1, 0], [2, 0], [3, 0], [0.5, 1], [1.5, 1], [2.5, 1], [3.5, 1], [0, 2], [1, 2], [2, 2], [3, 2]].map(([c, r], i) => {
      const cx = 70 + c * 52, cy = 40 + r * 44;
      return P('M' + [0, 1, 2, 3, 4, 5].map(k => (cx + 28 * Math.cos(k * Math.PI / 3 + Math.PI / 6)).toFixed(1) + ' ' + (cy + 28 * Math.sin(k * Math.PI / 3 + Math.PI / 6)).toFixed(1)).join(' L') + ' Z', ['primary-soft', 'growth-soft', 'decay-soft', 'success-soft'][i % 4], cor[i % 4], 2);
    }).join(''),
    // táxi + função afim
    taxi: () => chao(172) + R(40, 110, 140, 40, 'decay-soft', 'decay', 10) + P('M62 110 L84 78 L150 78 L170 110 Z', 'surface', 'decay', 3) + C(78, 152, 14, 'ink', 'ink-soft') + C(148, 152, 14, 'ink', 'ink-soft') + R(100, 62, 40, 14, 'growth', '', 3) + T(120, 73, 'TÁXI', 10, 'surface', 'middle') +
      R(200, 40, 100, 70, 'surface', 'line-strong', 8) + T(250, 66, 'P = 5 + 3x', 15, 'primary', 'middle') + T(250, 92, 'fixo + por km', 11, 'ink-soft', 'middle'),
    // tabela / matriz
    tabela: () => chao() + [0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => R(60 + c * 52, 24 + r * 36, 50, 32, r === 0 || c === 0 ? 'primary-soft' : 'surface', 'line-strong', 4) + (r > 0 && c > 0 ? T(85 + c * 52 - 52 + 52, 46 + r * 36, String((r * 3 + c * 2) % 9 + 1), 14, 'ink', 'middle') : '')).join('')).join(''),
    // ondas
    ondas: () => chao() + L(20, 96, 300, 96, 'line-strong', 1.5) + P('M20 96 C50 20 80 20 110 96 C140 172 170 172 200 96 C230 20 260 20 290 96', 'none', 'primary', 4) +
      '<path d="M20 60 C50 -4 80 -4 110 60 C140 124 170 124 200 60 C230 -4 260 -4 290 60" fill="none" stroke="var(--decay)" stroke-width="3" stroke-dasharray="7 6" stroke-linecap="round"/>' + T(160, 192, 'ondas que se repetem', 12, 'ink-soft', 'middle'),
    // plano cartesiano com pontos
    plano: () => R(20, 14, 280, 170, 'surface', 'line-strong', 8) + [1, 2, 3, 4, 5].map(i => L(20 + i * 46.6, 14, 20 + i * 46.6, 184, 'line', 1)).join('') + [1, 2, 3].map(i => L(20, 14 + i * 42.5, 300, 14 + i * 42.5, 'line', 1)).join('') +
      L(20, 142, 300, 142, 'ink-soft', 2) + L(66, 14, 66, 184, 'ink-soft', 2) + C(160, 100, 6, 'primary') + C(252, 56, 6, 'decay') + L(160, 100, 252, 56, 'growth', 3) + T(166, 118, 'A', 13, 'primary') + T(258, 52, 'B', 13, 'decay'),
    // balança (equações)
    balanca: () => chao() + R(150, 40, 20, 126, 'ink-faint', '', 3) + R(120, 160, 80, 12, 'ink-faint', '', 3) + L(60, 54, 260, 54, 'ink', 4) + L(60, 54, 40, 100, 'ink-soft', 2) + L(60, 54, 80, 100, 'ink-soft', 2) + L(260, 54, 240, 100, 'ink-soft', 2) + L(260, 54, 280, 100, 'ink-soft', 2) +
      R(26, 100, 68, 12, 'primary-soft', 'primary', 4) + R(226, 100, 68, 12, 'growth-soft', 'growth', 4) + T(60, 90, 'x + 3', 14, 'primary', 'middle') + T(260, 90, '12', 14, 'growth', 'middle'),
    // cartas (contagem)
    cartas: () => chao() + [0, 1, 2, 3, 4].map(i => R(70 + i * 34, 40 + Math.abs(i - 2) * 6, 60, 90, ['primary-soft', 'growth-soft', 'decay-soft', 'success-soft', 'primary-soft'][i], cor[i % 4], 8) + T(100 + i * 34, 96 + Math.abs(i - 2) * 6, ['A', 'K', 'Q', 'J', '10'][i], 20, 'ink', 'middle')).join('') + T(160, 188, 'de quantas maneiras?', 12, 'ink-soft', 'middle'),
    // laboratório / ciência
    lab: () => chao() + P('M120 30 L120 80 L82 150 Q76 164 94 164 L170 164 Q188 164 182 150 L144 80 L144 30 Z', 'primary-soft', 'primary', 3) + R(112, 22, 40, 10, 'surface', 'primary', 3) + P('M96 126 L168 126 L182 150 Q188 164 170 164 L94 164 Q76 164 82 150 Z', 'growth-soft', 'growth', 2) +
      C(112, 140, 5, 'surface') + C(140, 146, 4, 'surface') + R(210, 70, 60, 94, 'decay-soft', 'decay', 6) + R(220, 54, 40, 18, 'surface', 'decay', 4) + C(240, 116, 20, 'surface', 'decay') + L(240, 116, 240, 102, 'decay', 3),
    // linha do tempo
    linha: () => chao() + L(30, 100, 290, 100, 'ink-soft', 4) + [0, 1, 2, 3, 4].map(i => C(50 + i * 55, 100, 9, ['primary-soft', 'growth-soft', 'decay-soft', 'success-soft', 'primary-soft'][i], cor[i % 4]) + R(26 + i * 55, i % 2 ? 114 : 40, 48, 36, 'surface', 'line-strong', 6) + L(50 + i * 55, i % 2 ? 109 : 76, 50 + i * 55, i % 2 ? 114 : 100, 'line-strong', 2) + L(36 + i * 55, i % 2 ? 126 : 52, 64 + i * 55, i % 2 ? 126 : 52, 'ink-faint', 2) + L(36 + i * 55, i % 2 ? 136 : 62, 56 + i * 55, i % 2 ? 136 : 62, 'ink-faint', 2)).join('') + T(160, 192, 'antes · durante · depois', 12, 'ink-soft', 'middle'),
    // globo / mundo
    globo: () => chao() + C(160, 92, 74, 'primary-soft', 'primary') + P('M110 70 Q130 52 154 62 Q164 84 142 98 Q124 100 112 90 Z', 'success-soft', 'success', 2) + P('M176 100 Q200 84 220 102 Q222 130 196 136 Q178 126 176 100 Z', 'success-soft', 'success', 2) + P('M86 92 Q160 120 234 92', 'none', 'primary', 1.5) + P('M160 18 Q196 92 160 166', 'none', 'primary', 1.5) + P('M160 18 Q124 92 160 166', 'none', 'primary', 1.5),
    // dna / célula / corpo
    celula: () => chao() + '<ellipse cx="160" cy="96" rx="104" ry="72" fill="var(--growth-soft)" stroke="var(--growth)" stroke-width="3"/>' + C(160, 96, 28, 'primary-soft', 'primary') + C(160, 96, 10, 'primary') + C(106, 70, 10, 'decay-soft', 'decay') + C(210, 124, 12, 'decay-soft', 'decay') + C(220, 68, 9, 'success-soft', 'success') + C(100, 128, 9, 'success-soft', 'success') + P('M120 142 Q150 130 168 148', 'none', 'ink-soft', 2),
    // circuito / energia
    energia: () => chao() + R(40, 40, 240, 110, 'none', 'ink-soft', 8).replace('fill="var(--none)"', 'fill="none"') + R(130, 30, 60, 20, 'decay-soft', 'decay', 4) + T(160, 45, '9 V', 12, 'decay', 'middle') + C(60, 95, 14, 'surface', 'primary') + P('M50 95 L58 85 L62 105 L70 95', 'none', 'primary', 2) + R(230, 80, 36, 30, 'success-soft', 'success', 4) + C(160, 150, 10, 'surface', 'growth') + L(150, 150, 170, 150, 'growth', 3),
    // pessoas / sociedade
    pessoas: () => chao() + [0, 1, 2, 3, 4].map(i => C(52 + i * 54, 74, 16, ['primary-soft', 'growth-soft', 'decay-soft', 'success-soft', 'primary-soft'][i], cor[i % 4]) + P('M' + (30 + i * 54) + ' 168 Q' + (52 + i * 54) + ' 96 ' + (74 + i * 54) + ' 168 Z', ['primary-soft', 'growth-soft', 'decay-soft', 'success-soft', 'primary-soft'][i], cor[i % 4], 2)).join(''),
    // nuvem + dados digitais
    nuvem: () => chao() + P('M92 110 Q70 110 70 88 Q70 66 96 66 Q102 40 132 40 Q164 40 172 64 Q200 62 204 90 Q206 110 182 110 Z', 'primary-soft', 'primary', 3) + R(60, 128, 50, 36, 'surface', 'line-strong', 4) + R(130, 128, 50, 36, 'surface', 'line-strong', 4) + R(200, 128, 50, 36, 'surface', 'line-strong', 4) + T(85, 152, '01', 14, 'growth', 'middle') + T(155, 152, '10', 14, 'decay', 'middle') + T(225, 152, '11', 14, 'primary', 'middle') + L(85, 128, 105, 112, 'ink-faint', 2) + L(155, 128, 140, 112, 'ink-faint', 2) + L(225, 128, 180, 112, 'ink-faint', 2) + T(250, 60, 'bits e bytes', 12, 'ink-soft'),
    // régua / medidas
    regua: () => chao() + R(30, 70, 260, 44, 'decay-soft', 'decay', 5) + Array.from({ length: 27 }, (_, i) => L(40 + i * 9.2, 70, 40 + i * 9.2, i % 5 === 0 ? 96 : 84, 'decay', 1.5)).join('') + [0, 5, 10, 15, 20, 25].map(i => T(40 + i * 9.2, 108, String(i), 11, 'ink', 'middle')).join('') + T(160, 150, 'medir exige unidade e precisão', 12, 'ink-soft', 'middle') + C(260, 36, 14, 'growth-soft', 'growth') + T(260, 40, 'm', 13, 'growth', 'middle'),
    // arte: paleta e pincel
    arte: () => chao() + '<ellipse cx="140" cy="96" rx="100" ry="70" fill="var(--decay-soft)" stroke="var(--decay)" stroke-width="3"/>' + C(98, 78, 14, 'primary') + C(132, 58, 14, 'growth') + C(172, 62, 14, 'success') + C(200, 92, 14, 'danger') + C(120, 112, 16, 'surface', 'decay') + L(220, 160, 288, 36, 'ink', 6) + P('M284 44 L296 28 L300 52 Z', 'primary', 'primary', 2),
    // esporte: quadra e bola
    esporte: () => chao() + R(30, 40, 260, 120, 'success-soft', 'success', 6) + L(160, 40, 160, 160, 'surface', 3) + C(160, 100, 24, 'none', 'surface').replace('fill="var(--none)"', 'fill="none"') + R(30, 76, 28, 48, 'none', 'surface', 2).replace('fill="var(--none)"', 'fill="none"') + R(262, 76, 28, 48, 'none', 'surface', 2).replace('fill="var(--none)"', 'fill="none"') + C(210, 70, 12, 'surface', 'ink') + P('M200 70 L220 70 M210 58 L210 82', 'none', 'ink', 1.5),
    // fábrica / revolução industrial
    fabrica: () => chao(170) + R(40, 90, 240, 80, 'primary-soft', 'primary', 3) + R(60, 40, 20, 52, 'decay-soft', 'decay', 2) + R(100, 54, 20, 38, 'decay-soft', 'decay', 2) + C(70, 28, 12, 'surface', 'line-strong') + C(86, 16, 9, 'surface', 'line-strong') + [0, 1, 2, 3].map(i => P('M' + (60 + i * 52) + ' 90 L' + (60 + i * 52) + ' 76 L' + (88 + i * 52) + ' 90 Z', 'growth-soft', 'growth', 2)).join('') + [0, 1, 2].map(i => R(70 + i * 70, 112, 34, 28, 'surface', 'primary', 3)).join('')
  });

  // escolhe a cena de contextualização pelo texto (sem acentos / maiúsculas)
  const REGRAS = [
    [/armazenamento|\bbits?\b|\bbytes?\b|nuvem|transferencia de dados|computa|internet|digital|tecnolog|program|algoritm|criptoativ/, 'nuvem'],
    [/sistema internacional|algarismos significativos|unidades? de medida|conversao de unidades|multiplos e submultiplos|prefixos|medidas de comprimento/, 'regua'],
    [/triangulo retangulo|razoes trigonom|lei dos (senos|cossenos)|angulo de elevacao|trigonometria (no |do )?triangulo|seno e cosseno de um angulo|\bo seno\b|cosseno e tangente/, 'torre'],
    [/numeros reais|na reta|intervalo|reta real|reta numerica/, 'termometro'],
    [/\bpa\b|\bpg\b/, 'escada'],
    [/exponencial|crescimento populacional|bacteri|decaimento|meia vida/, 'colonia'],
    [/logaritm|richter|decibel|\bph\b|escala logaritm/, 'sismografo'],
    [/estatistic|grafico de|graficos|quartil|box|dispersao|tendencia central|histograma|frequencia|media|mediana|moda|amostra|pesquisa|ramos e folhas|pictograma/, 'grafico'],
    [/area|perimetro|terreno|superficie/, 'terreno'],
    [/funcao (seno|cosseno|tangente)|funcoes trigonom|periodic|senoide|circunferencia trigonom|trigonometria (no )?ciclo|\barco|radiano|trigonometri/, 'ondas'],
    [/progress|sequenc|termo geral|padroes|recorrenc/, 'escada'],
    [/probabilid|aleatori|espaco amostral|lancamento de dado|jogos? de azar|apostas?/, 'dados'],
    [/combinat|fatorial|arranjo|permutac|combinac|principio (multiplicativo|fundamental)|binomi/, 'cartas'],
    [/conjunto|venn|proposic|inclusao|logica|demonstracao/, 'venn'],
    [/quadratic|parabola|lancamento|segundo grau|2o grau|vertice/, 'bola'],
    [/matriz|matrizes|determinante|sistema linear|sistemas lineares|escalonamento/, 'tabela'],
    [/geometria analitica|plano cartesiano|coordenadas|distancia entre dois pontos|equacao da reta|reta no plano/, 'plano'],
    [/juros|porcent|financ|desconto|orcamento|preco|dinheiro|salario|invest|credito|consumo|imposto|lucro|renda|moeda|empreend|poupanc|divida|inflac/, 'dinheiro'],
    [/funcao|grandezas|regra de tres|proporcion|razao|taxa de variacao|afim/, 'taxi'],
    [/volume|prisma|cilindro|piramide|\bcone\b|esfera|poliedro|solido|capacidade|espacial/, 'caixa'],
    [/area|perimetro|terreno|superficie/, 'terreno'],
    [/circunferencia|circulo|\barco|angulo central|angulo inscrito|\bpi\b/, 'roda'],
    [/triangulo|pitagoras|semelhanca|relacoes metricas|teorema|congruencia/, 'telhado'],
    [/poligono|quadrilatero|mosaico|ladrilh|hexagono|losango|paralelogramo|trapezio|figuras planas|simetria/, 'piso'],
    [/grafico|tabela|estatistica|media|mediana|moda|pesquisa|amostra|desvio|frequencia|histograma/, 'grafico'],
    [/mapa|localizacao|croqui|orientacao|cardeal|regiao|territorio|geografia/, 'mapa'],
    [/tempo|hora|relogio|duracao|calendario/, 'relogio'],
    [/equacao|igualdade|inequacao|expressao|algebr|incognita|polinomio|fatoracao|produtos notaveis/, 'balanca'],
    [/inteiros|reta numerica|negativ|temperatura|modulo|oposto/, 'termometro'],
    [/fracao|decimal|racionais|equivalente|razoes/, 'pizza'],
    [/adicao|subtracao|multiplicacao|divisao|operacoes|calcul|potencia|raiz|radiciacao|naturais|mmc|mdc|divisores|multiplos|primos/, 'calculadora'],
    [/numeracao|ordens|classes|sistema decimal|numero/, 'blocos'],
    [/revolucao industrial|industria|fabrica|trabalhador|maquina/, 'fabrica'],
    [/historia|antig|imperio|colonia|era |seculo|idade|civilizac|periodo/, 'linha'],
    [/celula|biolog|corpo|saude|genetic|dna|organismo|ser vivo/, 'celula'],
    [/quimic|atomo|reacao|mistura|laboratorio|experiment|materia e|substancia/, 'lab'],
    [/energia|eletric|circuito|fisica|forca|movimento|velocidade/, 'energia'],
    [/sociedade|cidadania|cultura|diversidade|politic|direito|sociolog|filosof|convivencia|identidade/, 'pessoas'],
    [/planeta|mundo|globo|clima|ambient|ecolog|sustentab|globaliz/, 'globo'],
    [/texto|leitura|narrativ|conto|poema|poesia|literat|romance|cronica|genero|redacao|gramatica|interpretacao|escrita|coesao/, 'livro'],
    [/ingles|english|spanish|espanhol|idioma|lingua estrangeira|conversa|dialogo/, 'baloes'],
    [/noticia|jornal|midia|argument|opiniao|artigo/, 'jornal']
  ];
  const norm = t => String(t).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/<[^>]+>/g, ' ').toLowerCase();
  ilus.escolheCena = (...textos) => {
    const t = norm(textos.join(' '));
    for (const [re, c] of REGRAS) if (re.test(t) && cenas[c]) return c;
    return 'natureza';
  };
};
