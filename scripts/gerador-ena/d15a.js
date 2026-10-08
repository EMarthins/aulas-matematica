// Unidade 15 — Tópicos complementares · Aula 1: geometria analítica, exponencial e logaritmo
const K = require('./kit.js');
const { sl, lede, card, callout, tbl, mini, coverSlide, roteiroSlide, objetivosSlide, ja, exemplo, armadilhas, quiz, fechamento, F, WJS, BIND, W } = K;
const DIR = 'ena-profmat/15-topicos-complementares/';
const a = [];

a.push(coverSlide({
  eyebrow: 'ENA · PROFMAT · Capítulo 15 · Aula 1', h1: 'Geometria analítica, <span style="color:var(--primary);">exponencial e logaritmo</span>',
  sub: 'Tópicos EXTRA: não caíram diretamente em 2025/2026, mas pertencem à matemática básica cobrada e ajudam a resolver questões “por outro caminho”.',
  badges: [['EXTRA'], ['d = √(Δx² + Δy²)', 'growth'], ['log_a b = x ⇔ aˣ = b', 'decay']], color: 'primary'
}));
a.push(roteiroSlide('Priorize depois de dominar os capítulos 1 a 14.', [
  ['Pontos e retas', 'distância, ponto médio, reta, distância ponto–reta', 'chart'],
  ['Circunferência', 'equação reduzida e geral, tangência', 'planet'],
  ['Exponencial', 'aˣ = aʸ ⇔ x = y e inequações', 'curve-up'],
  ['Logaritmo', 'definição, propriedades, mudança de base', 'curve-log']
]));
a.push(objetivosSlide([
  'Calcular <strong>distância</strong>, <strong>ponto médio</strong> e a <strong>equação da reta</strong> no plano cartesiano.',
  'Achar <strong>centro e raio</strong> de uma circunferência completando quadrados.',
  'Resolver <strong>equações exponenciais</strong> e aplicar as <strong>propriedades dos logaritmos</strong>.',
  'Usar a <strong>mudança de base</strong> e as condições de existência.'
], 'Em prova', 'Coordenadas são o plano B de geometria plana (aula 3 do capítulo 12). Exponencial e logaritmo aparecem em prazos e crescimento.', 'primary', 'primary'));

a.push(sl('Para início de conversa', 'A distância no plano', `
          ${lede('Os pontos $A = (1, 2)$ e $B = (4, 6)$ formam um triângulo retângulo com catetos paralelos aos eixos: $Δx = 3$ e $Δy = 4$.')}
          <div class="grid2" style="margin-top:6px;">
            ${mini('A distância $AB$ é:', ['5', '7', '$√7$', '25'], 0, '$d = √{3^2 + 4^2} = 5$ (terno 3-4-5). A fórmula é Pitágoras no plano cartesiano.')}
            ${card('<strong>Ideia-chave</strong><p style="font-size:.92rem;margin-top:8px;">Geometria analítica traduz figuras em números: distâncias viram Pitágoras e retas viram $y = mx + n$.</p>', 'growth')}
          </div>`, { cls: '' }));

a.push(sl('Teoria · pontos e retas', 'Distância, ponto médio e equação da reta', `
          <div class="grid2">
            <div>
              ${F('d = √{(x_2 − x_1)^2 + (y_2 − y_1)^2}   M = ({x_1 + x_2|2}, {y_1 + y_2|2})')}
              ${F('y = mx + n   m = tg θ = {Δy|Δx}   "paralelas:" m_1 = m_2   "perpendiculares:" m_1 m_2 = −1')}
              ${F('d(P, r) = {∣a x_0 + b y_0 + c∣|√{a^2 + b^2}}   "área do triângulo" = ½∣D∣')}
            </div>
            ${W.box('Dois pontos e um terceiro', W.row(W.nm('a1-x1', 'x₁', 1), W.nm('a1-y1', 'y₁', 2), W.nm('a1-x2', 'x₂', 4), W.nm('a1-y2', 'y₂', 6)) + W.row(W.nm('a1-px', 'P: x', 0), W.nm('a1-py', 'P: y', 0)) + W.txt('a1-d', 'Distância AB = ') + W.txt('a1-m', 'Ponto médio = ') + W.txt('a1-e', 'Reta: ') + W.txt('a1-p', 'Distância de P à reta: ') + W.hint('a1-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · circunferência', 'Centro e raio: complete quadrados', `
          <div class="grid2">
            <div>
              ${F('(x − a)^2 + (y − b)^2 = r^2   x^2 + y^2 + Dx + Ey + F = 0')}
              ${callout('Da geral para a reduzida', 'Centro $(−D/2, −E/2)$ e $r = √{{D^2 + E^2|4} − F}$. Treino 15.2: $x^2 + y^2 − 4x + 6y − 3 = 0 ⇒ (x−2)^2 + (y+3)^2 = 16$: centro $(2, −3)$, raio 4.', 'success')}
              ${callout('Tangência', 'Reta tangente: a distância do centro à reta é $r$. Duas circunferências: compare a distância entre os centros com $r_1 + r_2$ e $∣r_1 − r_2∣$.')}
            </div>
            ${W.box('x² + y² + Dx + Ey + F = 0', W.row(W.nm('a2-D', 'D', -4), W.nm('a2-E', 'E', 6), W.nm('a2-F', 'F', -3)) + W.svg('a2-s', '0 0 260 220') + W.txt('a2-t', '') + W.hint('a2-h'))}
          </div>`, { cls: '' }));

a.push(exemplo('Treino 15.1', 'Distância, ponto médio e reta', 'Entre $(1, 2)$ e $(4, 6)$: distância, ponto médio e a reta que passa pelos dois.', [
  ['Distância', '$√{9 + 16} = 5$'],
  ['Ponto médio', '$({1 + 4|2}, {2 + 6|2}) = (2,5; 4)$'],
  ['Reta', '$m = {4|3}$: $y − 2 = {4|3}(x − 1) ⇒ y = {4|3}x + {2|3}$']
], 'Distância 5; ponto médio $(2,5; 4)$; reta $y = {4|3}x + {2|3}$.', 'primary'));

a.push(sl('Teoria · exponencial', 'Equações e inequações exponenciais', `
          <div class="grid2">
            <div>
              ${F('a^x = a^y ⇔ x = y\\ (a > 0, a ≠ 1)')}
              ${callout('Inequações', 'Base $a > 1$: o sentido se <strong>mantém</strong>. Base $0 < a < 1$: o sentido <strong>inverte</strong>.', 'success')}
              ${callout('Treino 15.3', '$2^{x+1} + 2^x = 24 ⇒ 2·2^x + 2^x = 24 ⇒ 3·2^x = 24 ⇒ 2^x = 8 ⇒ x = 3$.')}
            </div>
            ${W.box('Resolva a·2ˣ⁺¹ + b·2ˣ = c', W.row(W.nm('a3-a', 'a', 1), W.nm('a3-b', 'b', 1), W.nm('a3-c', 'c', 24)) + W.txt('a3-r', '') + W.hint('a3-h'))}
          </div>`, { cls: '' }));

a.push(sl('Teoria · logaritmo', 'Definição, propriedades e mudança de base', `
          <div class="grid2">
            <div>
              ${F('log_a b = x ⇔ a^x = b\\ (a > 0, a ≠ 1, b > 0)')}
              ${F('log_a(bc) = log_a b + log_a c   log_a {b|c} = log_a b − log_a c   log_a b^k = k log_a b')}
              ${F('log_a a = 1   log_a 1 = 0   a^{log_a b} = b   log_a b = {log_c b|log_c a}')}
              ${callout('Exemplo', '$log_2 8 + log_2 {1|2} = 3 − 1 = 2$. Inequação logarítmica: base $> 1$ mantém; $0 < a < 1$ inverte; exija sempre logaritmando $> 0$.', 'success')}
            </div>
            ${W.box('Logaritmo e propriedades', W.row(W.nm('a4-b', 'base a', 2), W.nm('a4-n', 'logaritmando', 8), W.nm('a4-m', 'outro valor', 4)) + W.txt('a4-l', '') + W.txt('a4-p', '') + W.txt('a4-q', '') + W.hint('a4-h'))}
          </div>`, { cls: '' }));

a.push(armadilhas('Cuidado', 'Onde se perde ponto em tópicos extras', [
  ['Esquecer o módulo na distância ponto–reta', 'A fórmula tem $∣ax_0 + by_0 + c∣$ no numerador.'],
  ['Completar quadrados sem somar dos dois lados', 'Em $x^2 − 4x$ some 4 aos dois lados da equação.'],
  ['Base entre 0 e 1', 'Inverte o sentido da inequação exponencial e logarítmica.'],
  ['Domínio do log', 'Exija logaritmando $> 0$ e base $> 0$, $≠ 1$ — e confira as raízes.']
]));

a.push(quiz([
  { q: 'O centro de $x^2 + y^2 − 4x + 6y − 3 = 0$ é:', o: ['$(2, −3)$', '$(−2, 3)$', '$(4, −6)$', '$(2, 3)$'], a: 0 },
  { q: 'O valor de $log_2 8 + log_2 {1|2}$ é:', o: ['1', '2', '3', '4'], a: 1 },
  { q: 'A distância entre $(0, 0)$ e $(5, 12)$ é:', o: ['13', '17', '7', '$√{119}$'], a: 0 },
  { q: 'A solução de $2^{x+1} + 2^x = 24$ é:', o: ['2', '3', '4', '8'], a: 1 }
]));
a.push(fechamento([
  ['Plano', 'Distância Pitágoras; ponto médio; $m_1m_2 = −1$; distância ponto–reta com módulo.'],
  ['Circunferência', 'Complete quadrados: centro $(−D/2, −E/2)$.'],
  ['Exp e log', 'Mesma base ⇒ expoentes iguais; propriedades do log; base < 1 inverte.']
], 'Coordenadas e logaritmos: ferramentas de reserva para “outro caminho”.'));

module.exports = [{ out: DIR + 'aula-1-analitica-exponencial-logaritmo.html', html: K.deck({
  title: 'Geometria analítica, exponencial e logaritmo — ENA · PROFMAT', brand: 'Tópicos Complementares', key: 'c15a1', meta: 'Capítulo 15 · Aula 1 · Analítica, exp. e log.', slides: a,
  extra: WJS + BIND + String.raw`
  bind(['a1-x1', 'a1-y1', 'a1-x2', 'a1-y2', 'a1-px', 'a1-py'], function(){ var x1 = +$('a1-x1').value, y1 = +$('a1-y1').value, x2 = +$('a1-x2').value, y2 = +$('a1-y2').value, px = +$('a1-px').value, py = +$('a1-py').value; var dx = x2 - x1, dy = y2 - y1; $('a1-d').textContent = nf(Math.sqrt(dx * dx + dy * dy), 4); $('a1-m').textContent = '(' + nf((x1 + x2) / 2, 3) + '; ' + nf((y1 + y2) / 2, 3) + ')'; if(dx === 0){ $('a1-e').textContent = 'x = ' + x1; $('a1-p').textContent = nf(Math.abs(px - x1), 4); $('a1-h').textContent = 'Reta vertical.'; return; } var m = dy / dx, n = y1 - m * x1; $('a1-e').textContent = 'y = ' + nf(m, 4) + 'x + ' + nf(n, 4) + ' (m = ' + nf(m, 4) + ')'; var A = dy, B = -dx, C = dx * y1 - dy * x1; $('a1-p').textContent = nf(Math.abs(A * px + B * py + C) / Math.sqrt(A * A + B * B), 4); $('a1-h').textContent = 'Reta na forma geral: ' + A + 'x + (' + B + ')y + (' + C + ') = 0. Perpendicular teria m = ' + (m ? nf(-1 / m, 4) : '— (vertical)') + '.'; });
  bind(['a2-D', 'a2-E', 'a2-F'], function(){ var D = +$('a2-D').value, E = +$('a2-E').value, F0 = +$('a2-F').value, cx = -D / 2, cy = -E / 2, r2 = D * D / 4 + E * E / 4 - F0, svg = $('a2-s'); svg.innerHTML = ''; if(r2 <= 0){ $('a2-t').textContent = r2 === 0 ? 'Um único ponto (raio 0).' : 'Não é circunferência real (r² < 0).'; $('a2-h').textContent = ''; return; } var r = Math.sqrt(r2), P = plano(svg, -10, 10, -10, 10, 260, 220, 5); el('circle', {cx: P.sx(cx), cy: P.sy(cy), r: r * (260 - 40) / 20, fill: 'var(--primary)', 'fill-opacity': .15, stroke: 'var(--primary)', 'stroke-width': 2.5}, svg); ponto(svg, P, cx, cy, 'var(--growth)', 'C'); $('a2-t').textContent = '(x − ' + nf(cx, 3) + ')² + (y − ' + nf(cy, 3) + ')² = ' + nf(r2, 3) + ' → centro (' + nf(cx, 3) + '; ' + nf(cy, 3) + '), raio ' + nf(r, 4); $('a2-h').textContent = 'Para D = −4, E = 6, F = −3: centro (2; −3), raio 4 (Treino 15.2).'; });
  bind(['a3-a', 'a3-b', 'a3-c'], function(){ var a = +$('a3-a').value, b = +$('a3-b').value, c = +$('a3-c').value, k = 2 * a + b; if(!k || c / k <= 0){ $('a3-r').textContent = 'sem solução real'; $('a3-h').textContent = ''; return; } var t = c / k; $('a3-r').textContent = '(2a + b)·2ˣ = c → 2ˣ = ' + nf(t, 4) + ' → x = log₂(' + nf(t, 4) + ') = ' + nf(Math.log(t) / Math.LN2, 4); $('a3-h').textContent = 'Para a = b = 1 e c = 24: 3·2ˣ = 24 → x = 3.'; });
  bind(['a4-b', 'a4-n', 'a4-m'], function(){ var b = +$('a4-b').value, N = +$('a4-n').value, M = +$('a4-m').value; if(b <= 0 || b === 1 || N <= 0 || M <= 0){ $('a4-l').textContent = 'Condições: base > 0, ≠ 1; logaritmando > 0.'; $('a4-p').textContent = ''; $('a4-q').textContent = ''; return; } function L(x){ return Math.log(x) / Math.log(b); } $('a4-l').textContent = 'log_' + b + '(' + N + ') = ' + nf(L(N), 5); $('a4-p').textContent = 'log(N·M) = ' + nf(L(N * M), 5) + ' = log N + log M = ' + nf(L(N) + L(M), 5); $('a4-q').textContent = 'log(N^k) com k = 2: ' + nf(L(N * N), 5) + ' = 2·log N = ' + nf(2 * L(N), 5); $('a4-h').textContent = 'Mudança de base: log_' + b + ' N = ln N / ln ' + b + '.'; });`
}) }];
