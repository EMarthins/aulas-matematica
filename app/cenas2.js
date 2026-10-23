/* Cenas interativas de abertura — Artes, Ciências, Biologia, Educação Física, Filosofia, Física, Geografia, História, Inglês, Química e Sociologia.
   Carregado por app/cenas.js só quando uma aula dessas matérias pede a cena. */
(function(){
  var C = window.EduCenas; if(!C || C.REG.arte) return;
  var u = C.util, h = u.h, svg = u.svg, tx = u.tx, ln = u.ln, clk = u.clk, c = u.cores, rad = u.rad, reg = C.reg;
  var P = c.P, G = c.G, X = c.X, INK = c.INK, F = c.F, S2 = c.S2, L = c.L, SF = c.SF;
  function ops(o){ return Object.keys(o).map(function(k){ return [k, o[k][0] || o[k]]; }); }

  // Artes visuais: elementos da linguagem visual
  var ART = { ponto: ['Ponto', 'O ponto é a marca mais simples. Muitos pontos juntos formam texturas, sombras e atraem o olhar.'], linha: ['Linha', 'A linha é um ponto em movimento: pode ser reta, curva ou ondulada, sugerir movimento ou separar espaços.'],
    forma: ['Forma', 'A forma nasce quando a linha se fecha: geométrica (triângulo, círculo) ou orgânica (a de uma folha).'], cor: ['Cor', 'As cores quentes (vermelho, laranja) energizam e aproximam; as frias (azul, verde) acalmam e afastam.'], textura: ['Textura', 'A textura é o aspecto da superfície — lisa, áspera, riscada, pontilhada — que se vê e imagina tocar.'] };
  reg('arte', { alt: 'Composição abstrata com ponto, linha, forma, cor e textura destacáveis', leg: 'Toque em cada parte da composição para descobrir um elemento da linguagem visual.', est: { k: 'ponto' },
    ctl: [{ o: 'k', ops: ops(ART) }],
    svg: function(e){ function g(k){ return e.k === k ? ' stroke="' + INK + '" stroke-width="3"' : ''; }
      var dots = ''; for(var i = 0; i < 24; i++) dots += '<circle cx="' + (232 + (i % 6) * 12) + '" cy="' + (30 + Math.floor(i / 6) * 12) + '" r="2.4" fill="' + X + '"/>';
      var hach = ''; for(i = 0; i < 9; i++) hach += ln(218 + i * 10, 118, 208 + i * 10, 168, INK, 1.3);
      return svg(320, 190, '<rect x="2" y="2" width="316" height="186" rx="12" fill="' + SF + '" stroke="' + L + '"/>' +
        '<g ' + clk('k', 'ponto', 'ponto') + '><rect x="224" y="20" width="84" height="56" fill="transparent"' + g('ponto') + '/>' + dots + '</g>' +
        '<g ' + clk('k', 'linha', 'linha') + '><rect x="14" y="20" width="190" height="50" fill="transparent"' + g('linha') + '/><path d="M24 54 Q54 6 84 40 T144 36 T194 34" fill="none" stroke="' + P + '" stroke-width="5" stroke-linecap="round"/></g>' +
        '<g ' + clk('k', 'forma', 'forma') + '><rect x="14" y="84" width="96" height="94" fill="transparent"' + g('forma') + '/><polygon points="62,94 100,166 24,166" fill="' + G + '" opacity=".85"/><circle cx="82" cy="120" r="14" fill="#f4b942"/></g>' +
        '<g ' + clk('k', 'cor', 'cor') + '><rect x="118" y="84" width="84" height="94" fill="transparent"' + g('cor') + '/><rect x="122" y="88" width="38" height="42" fill="#e03131"/><rect x="162" y="88" width="36" height="42" fill="#f08c00"/><rect x="122" y="132" width="38" height="42" fill="#1971c2"/><rect x="162" y="132" width="36" height="42" fill="#2f9e44"/></g>' +
        '<g ' + clk('k', 'textura', 'textura') + '><rect x="208" y="108" width="100" height="70" fill="transparent"' + g('textura') + '/>' + hach + '</g>'); },
    lei: function(e){ return '<b>' + ART[e.k][0] + '.</b> ' + ART[e.k][1]; } });

  // Biologia: célula animal
  var CEL = { membrana: ['Membrana plasmática', 'Envolve a célula e controla o que entra e o que sai.'], citoplasma: ['Citoplasma', 'Gelatina onde ficam as organelas e acontece boa parte das reações químicas.'], nucleo: ['Núcleo', 'Guarda o DNA (as instruções da célula) e comanda o seu funcionamento.'], mito: ['Mitocôndria', 'A “usina de energia”: transforma o alimento em energia (ATP) para a célula.'], ribo: ['Ribossomo', 'Fabrica proteínas seguindo as instruções do núcleo.'], reticulo: ['Retículo endoplasmático', 'Rede de canais que transporta e produz substâncias dentro da célula.'] };
  reg('celula', { alt: 'Célula animal com membrana, citoplasma, núcleo, mitocôndrias, ribossomos e retículo', leg: 'Toque numa estrutura da célula para saber o que ela faz.', est: { k: 'nucleo' }, ctl: [{ o: 'k', ops: ops(CEL) }],
    svg: function(e){ function s(k){ return e.k === k ? ' stroke="' + INK + '" stroke-width="3.5"' : ''; }
      var rb = ''; [[110, 70], [124, 140], [226, 66], [214, 150], [92, 108]].forEach(function(p){ rb += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3" fill="' + X + '"/>'; });
      return svg(320, 190, '<g ' + clk('k', 'membrana', 'membrana') + '><ellipse cx="160" cy="95" rx="146" ry="86" fill="#cfe8ff" stroke="' + P + '" stroke-width="' + (e.k === 'membrana' ? 6 : 3.5) + '"/></g>' +
        '<g ' + clk('k', 'citoplasma', 'citoplasma') + '><ellipse cx="160" cy="95" rx="132" ry="73" fill="#e8f3ff" opacity=".001" stroke="none"/>' + tx(255, 100, 'citoplasma', { z: 9, c: F }) + '</g>' +
        '<g ' + clk('k', 'nucleo', 'núcleo') + '><circle cx="160" cy="92" r="34" fill="#c9b8ff"' + s('nucleo') + '/><circle cx="168" cy="96" r="9" fill="#7048e8"/></g>' +
        '<g ' + clk('k', 'mito', 'mitocôndria') + '><ellipse cx="78" cy="68" rx="20" ry="10" fill="#ffd8a8" transform="rotate(-25 78 68)"' + s('mito') + '/><ellipse cx="240" cy="116" rx="20" ry="10" fill="#ffd8a8" transform="rotate(20 240 116)"' + s('mito') + '/></g>' +
        '<g ' + clk('k', 'ribo', 'ribossomo') + '>' + rb + '</g>' +
        '<g ' + clk('k', 'reticulo', 'retículo endoplasmático') + '><path d="M198 70 q18 -6 24 8 t-6 22 q-20 2 -22 14 t14 18" fill="none" stroke="#2f9e44" stroke-width="' + (e.k === 'reticulo' ? 6 : 4) + '" stroke-linecap="round"/></g>'); },
    lei: function(e){ return '<b>' + CEL[e.k][0] + '.</b> ' + CEL[e.k][1]; } });

  // Ciências: vivo ou não vivo?
  var VIV = { pedra: ['🪨', 'Pedra', 0, 'Não tem células, não cresce por conta própria e não se reproduz.'], planta: ['🌱', 'Planta', 1, 'Tem células, faz fotossíntese, cresce e se reproduz.'], cachorro: ['🐕', 'Cachorro', 1, 'Tem células, se alimenta, cresce, responde ao ambiente e se reproduz.'], carro: ['🚗', 'Carro', 0, 'Se move e “consome” combustível, mas não tem células nem se reproduz: é uma máquina.'], fogo: ['🔥', 'Fogo', 0, 'Cresce e se espalha, mas não tem células nem metabolismo próprio.'], cogumelo: ['🍄', 'Cogumelo', 1, 'É um fungo: tem células, absorve alimento, cresce e se reproduz por esporos.'] };
  reg('vivos', { alt: 'Seis cartões com seres vivos e coisas não vivas para classificar', leg: 'Toque em cada cartão: vivo ou não vivo? Por quê?', est: { k: 'fogo' },
    svg: function(e){ var s = '', i = 0; Object.keys(VIV).forEach(function(k){ var x = 16 + (i % 3) * 102, y = 14 + Math.floor(i / 3) * 82, on = e.k === k; s += '<g ' + clk('k', k, VIV[k][1]) + '><rect x="' + x + '" y="' + y + '" width="92" height="72" rx="12" fill="' + (on ? S2 : SF) + '" stroke="' + (on ? P : L) + '" stroke-width="' + (on ? 3 : 1.5) + '"/>' + tx(x + 46, y + 40, VIV[k][0], { z: 30 }) + tx(x + 46, y + 64, VIV[k][1], { z: 10, c: F }) + '</g>'; i++; });
      return svg(320, 176, s); },
    lei: function(e){ var v = VIV[e.k]; return v[0] + ' <b>' + v[1] + ': ' + (v[2] ? 'ser vivo ✔' : 'não é ser vivo ✘') + '.</b> ' + v[3]; } });

  // Educação Física: classificação dos esportes
  var ESP = { futebol: ['⚽', 'Futebol', 'esporte <b>coletivo</b> de invasão de campo', 'passe, chute, drible, marcação'], natacao: ['🏊', 'Natação', 'esporte <b>individual</b> (ou de revezamento) no meio líquido', 'respiração, braçada, pernada, saída'], judo: ['🥋', 'Judô', 'esporte de <b>combate</b>, corpo a corpo', 'quedas, projeções, imobilizações'], volei: ['🏐', 'Vôlei', 'esporte <b>coletivo</b> com rede divisória (sem contato)', 'saque, toque, manchete, cortada'], ginastica: ['🤸', 'Ginástica artística', 'esporte <b>individual</b> de arte e precisão', 'equilíbrio, giros, saltos, flexibilidade'], atletismo: ['🏃', 'Atletismo', 'esporte <b>individual</b> de corridas, saltos e arremessos', 'largada, passada, salto, lançamento'] };
  reg('esportes', { alt: 'Seis esportes para classificar', leg: 'Toque num esporte para ver a classificação e os fundamentos.', est: { k: 'futebol' },
    svg: function(e){ var s = '', i = 0; Object.keys(ESP).forEach(function(k){ var x = 16 + (i % 3) * 102, y = 14 + Math.floor(i / 3) * 82, on = e.k === k; s += '<g ' + clk('k', k, ESP[k][1]) + '><rect x="' + x + '" y="' + y + '" width="92" height="72" rx="12" fill="' + (on ? S2 : SF) + '" stroke="' + (on ? P : L) + '" stroke-width="' + (on ? 3 : 1.5) + '"/>' + tx(x + 46, y + 38, ESP[k][0], { z: 30 }) + tx(x + 46, y + 63, ESP[k][1], { z: 9, c: F }) + '</g>'; i++; });
      return svg(320, 176, s); },
    lei: function(e){ var v = ESP[e.k]; return '<b>' + v[1] + '</b> — ' + v[2] + '. Fundamentos: ' + v[3] + '.'; } });

  // Filosofia: mito e razão
  reg('mito', { alt: 'Uma tempestade explicada de duas formas: pelo mito e pela razão', leg: 'Alterne entre as duas explicações para o mesmo fenômeno: o trovão.', est: { v: 'mito' }, ctl: [{ o: 'v', ops: [['mito', 'Explicação mítica'], ['razao', 'Explicação racional']] }],
    svg: function(e){ var m = e.v === 'mito', s = '<rect x="2" y="2" width="316" height="176" rx="12" fill="' + (m ? '#3b3563' : '#1c2f4d') + '"/>' + '<ellipse cx="160" cy="46" rx="86" ry="28" fill="#6b7280"/><ellipse cx="108" cy="52" rx="44" ry="22" fill="#6b7280"/><ellipse cx="210" cy="54" rx="48" ry="22" fill="#6b7280"/>' +
      '<polygon points="150,70 178,70 160,104 176,104 140,160 152,114 136,114" fill="#ffd43b"/>';
      if(m) s += tx(52, 128, '👴', { z: 38 }) + tx(52, 156, 'Zeus', { z: 11, c: '#fff', w: 800 }) + tx(262, 126, '🏛️', { z: 34 }) + tx(262, 156, 'os deuses', { z: 10, c: '#ddd' });
      else s += ['+ + +', '− − −'].map(function(t, i){ return tx(110 + i * 100, 50, t, { z: 14, c: '#fff', w: 900 }); }).join('') + tx(52, 128, '🔬', { z: 34 }) + tx(52, 156, 'observar', { z: 10, c: '#ddd' }) + tx(262, 128, '⚡', { z: 32 }) + tx(262, 156, 'descarga', { z: 10, c: '#ddd' });
      return svg(320, 180, s); },
    lei: function(e){ return e.v === 'mito' ? '<b>Mito:</b> o trovão é Zeus lançando raios. A causa é sobrenatural, vem da tradição e se aceita sem questionar.' : '<b>Razão (lógos):</b> nuvens acumulam cargas elétricas e a descarga faz o raio e o trovão. A causa é natural: pode ser observada, discutida e testada.'; } });

  // Física: referencial e velocidade média
  reg('referencial', { alt: 'Trem em movimento e uma árvore, vistos do referencial da plataforma ou do passageiro', leg: 'Escolha de onde olhar: quem se move depende do referencial.', est: { ref: 'plat', t: 4 },
    ctl: [{ o: 'ref', ops: [['plat', 'Olhar da plataforma'], ['trem', 'Olhar de dentro do trem']] }, { r: 't', rot: 'tempo', min: 0, max: 8, fmt: function(v){ return v + ' s'; } }],
    svg: function(e){ var d = e.t * 20, K = 1.5, trem = e.ref === 'plat' ? 20 + d * K / 2 * .75 : 110, arv = e.ref === 'plat' ? 250 : 250 - d * K / 2 * .75;
      var vag = '<g transform="translate(' + trem + ' 92)"><rect x="0" y="0" width="108" height="40" rx="8" fill="' + P + '"/><rect x="8" y="8" width="20" height="14" fill="#fff" opacity=".85"/><rect x="36" y="8" width="20" height="14" fill="#fff" opacity=".85"/><rect x="64" y="8" width="20" height="14" fill="#fff" opacity=".85"/>' + tx(96, 36, '🙂', { z: 14 }) + '<circle cx="20" cy="44" r="7" fill="' + INK + '"/><circle cx="88" cy="44" r="7" fill="' + INK + '"/></g>';
      return svg(320, 170, '<rect x="2" y="2" width="316" height="166" rx="12" fill="#cfe8ff"/><rect x="2" y="136" width="316" height="32" fill="#8d6e63"/>' + ln(2, 138, 318, 138, '#555', 3) + (arv > 0 && arv < 310 ? tx(arv, 128, '🌳', { z: 34 }) : '') + vag + tx(160, 20, e.ref === 'plat' ? 'plataforma parada · trem em movimento' : 'trem “parado” · a paisagem se move', { z: 11, c: INK, w: 800 })); },
    lei: function(e){ var d = e.t * 20; return (e.ref === 'plat' ? 'Para quem está na plataforma, o <b>trem anda</b>.' : 'Para o passageiro, é a <b>árvore que se afasta</b> (para trás).') + ' Em ' + e.t + ' s: Δs = ' + d + ' m · velocidade média = Δs ÷ Δt = ' + (e.t ? d + ' ÷ ' + e.t + ' = <b>20 m/s</b> (72 km/h)' : '— (Δt = 0)'); } });

  // Geografia: orientação e rosa dos ventos
  var DIR = { N: ['Norte', '⛪', 'a igreja'], L: ['Leste', '🏥', 'o hospital'], S: ['Sul', '🏪', 'o mercado'], O: ['Oeste', '🌳', 'a praça'] };
  reg('bussola', { alt: 'Mapa com a escola no centro e quatro lugares nas direções norte, sul, leste e oeste, com rosa dos ventos', leg: 'Escolha uma direção e descubra o que fica ao norte, sul, leste ou oeste da escola.', est: { d: 'N' },
    ctl: [{ o: 'd', ops: Object.keys(DIR).map(function(k){ return [k, DIR[k][0]]; }) }],
    svg: function(e){ var pos = { N: [160, 34], L: [276, 100], S: [160, 168], O: [44, 100] }, s = '<rect x="2" y="2" width="316" height="196" rx="12" fill="#e9f5e1" stroke="' + L + '"/>' + ln(160, 18, 160, 182, '#cfd8c4', 10) + ln(26, 100, 294, 100, '#cfd8c4', 10) + tx(160, 108, '🏫', { z: 30 }) + tx(160, 122, 'escola', { z: 9, c: F });
      Object.keys(DIR).forEach(function(k){ var p = pos[k], on = e.d === k; s += '<g ' + clk('d', k, DIR[k][0]) + '><circle cx="' + p[0] + '" cy="' + (p[1] - 4) + '" r="22" fill="' + (on ? S2 : SF) + '" stroke="' + (on ? P : L) + '" stroke-width="' + (on ? 3 : 1.5) + '"/>' + tx(p[0], p[1] + 4, DIR[k][1], { z: 24 }) + '</g>' + tx(p[0] + (k === 'L' ? -34 : k === 'O' ? 34 : 34), p[1] - 22, k, { z: 12, w: 900, c: on ? P : F }); });
      var a = { N: [160, 70], L: [230, 100], S: [160, 140], O: [90, 100] }[e.d]; s += ln(160, 100, a[0], a[1], P, 3.5) + '<circle cx="' + a[0] + '" cy="' + a[1] + '" r="5" fill="' + P + '"/>';
      return svg(320, 200, s); },
    lei: function(e){ var d = DIR[e.d]; return 'Ao <b>' + d[0] + '</b> da escola fica ' + d[2] + ' ' + d[1] + '. Dica: o Sol nasce no <b>Leste</b> (L) e se põe no <b>Oeste</b> (O).'; } });

  // História: tipos de fontes
  var FON = { carta: ['📜', 'Carta antiga', 'escrita', 'Documento escrito: mostra o que a pessoa pensava e queria dizer — mas é só um ponto de vista.'], fossil: ['🦴', 'Fóssil', 'material', 'Vestígio material: revela como viviam seres e povos sem precisar de palavras.'], foto: ['📷', 'Fotografia', 'visual', 'Fonte visual: congela um momento, mas quem fotografa escolhe o que mostrar.'], oral: ['🎙️', 'Relato oral', 'oral', 'Fonte oral: guarda memórias de quem viveu ou ouviu — a memória também seleciona e interpreta.'], vaso: ['🏺', 'Vaso de cerâmica', 'material', 'Objeto do cotidiano: mostra técnicas, comércio, religião e hábitos de um povo.'], jornal: ['📰', 'Jornal', 'escrita', 'Fonte escrita da imprensa: informa e também defende interesses — é preciso perguntar quem escreveu e para quê.'] };
  reg('fontes', { alt: 'Seis tipos de fontes históricas para explorar', leg: 'Toque numa fonte: a História é contada a partir de vestígios como estes.', est: { k: 'carta' },
    svg: function(e){ var s = '', i = 0; Object.keys(FON).forEach(function(k){ var x = 16 + (i % 3) * 102, y = 14 + Math.floor(i / 3) * 82, on = e.k === k; s += '<g ' + clk('k', k, FON[k][1]) + '><rect x="' + x + '" y="' + y + '" width="92" height="72" rx="12" fill="' + (on ? S2 : SF) + '" stroke="' + (on ? P : L) + '" stroke-width="' + (on ? 3 : 1.5) + '"/>' + tx(x + 46, y + 38, FON[k][0], { z: 30 }) + tx(x + 46, y + 63, FON[k][1], { z: 9, c: F }) + '</g>'; i++; });
      return svg(320, 176, s); },
    lei: function(e){ var f = FON[e.k]; return '<b>' + f[1] + '</b> — fonte <b>' + f[2] + '</b>. ' + f[3] + ' <i>Pergunte: quem produziu? quando? para quê?</i>'; } });

  // Inglês: cumprimentos
  reg('greetings', { alt: 'Céu com sol ou lua conforme a hora do dia e um balão com o cumprimento em inglês', leg: 'Mude a hora do dia e escolha o cumprimento certo em inglês.', est: { h: 9 },
    ctl: [{ r: 'h', rot: 'hora', min: 0, max: 23, fmt: function(v){ return v + ':00'; } }, { b: '🔊 Ouvir em inglês', fn: function(e){ try{ var m = new SpeechSynthesisUtterance('Hello! ' + sau(e.h)); m.lang = 'en-US'; m.rate = .85; speechSynthesis.cancel(); speechSynthesis.speak(m); }catch(x){} } }],
    svg: function(e){ var hr = e.h, dia = hr >= 6 && hr < 18, a = dia ? (hr - 6) / 12 : ((hr + 6) % 24) / 12, x = 30 + a * 260, y = 120 - Math.sin(a * Math.PI) * 80, cor = hr < 5 || hr >= 21 ? '#1b2a49' : hr < 8 ? '#ffd8a8' : hr < 17 ? '#a5d8ff' : '#ffa94d';
      return svg(320, 180, '<rect x="2" y="2" width="316" height="176" rx="12" fill="' + cor + '"/><rect x="2" y="140" width="316" height="38" fill="#2f7d4f"/>' + tx(x, y + 8, dia ? '☀️' : '🌙', { z: 32 }) +
        '<rect x="70" y="14" width="180" height="40" rx="14" fill="' + SF + '" stroke="' + P + '" stroke-width="2"/>' + tx(160, 40, sau(hr), { z: 17, w: 900, c: P }) + tx(160, 168, '🧑‍🤝‍🧑', { z: 24 })); },
    lei: function(e){ return '<b>' + sau(e.h) + '</b> = ' + trad(e.h) + '. “Hello” e “Hi” servem para qualquer hora; “Good night” também é despedida.'; } });
  function sau(h){ return h >= 5 && h < 12 ? 'Good morning!' : h >= 12 && h < 18 ? 'Good afternoon!' : h >= 18 && h < 22 ? 'Good evening!' : 'Good night!'; }
  function trad(h){ return h >= 5 && h < 12 ? 'bom dia (até o meio-dia)' : h >= 12 && h < 18 ? 'boa tarde' : h >= 18 && h < 22 ? 'boa noite (ao chegar)' : 'boa noite (ao dormir/despedir)'; }

  // Química: misturas
  var MIS = { sal: ['Água + sal', 1, 'homogênea', 'o sal se dissolve e some à vista', 'evaporação (a água sai e o sal fica)'], areia: ['Água + areia', 2, 'heterogênea', 'a areia afunda e forma outra fase', 'decantação ou filtração'], oleo: ['Água + óleo', 2, 'heterogênea', 'o óleo flutua sobre a água', 'decantação (funil de separação)'], acucar: ['Água + açúcar', 1, 'homogênea', 'o açúcar se dissolve por completo', 'destilação ou evaporação'] };
  reg('misturas', { alt: 'Béquer com água misturada a sal, areia, óleo ou açúcar', leg: 'Misture a água com outras substâncias e veja quantas fases aparecem.', est: { m: 'sal' }, ctl: [{ o: 'm', ops: Object.keys(MIS).map(function(k){ return [k, MIS[k][0]]; }) }],
    svg: function(e){ var m = e.m, s = '<path d="M100 20 L100 150 Q100 166 116 166 L204 166 Q220 166 220 150 L220 20" fill="none" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>';
      var agua = '<rect x="103" y="64" width="114" height="100" rx="8" fill="#74c0fc" opacity=".75"/>';
      if(m === 'sal' || m === 'acucar') s = agua + s + ['M130 96 h0', 'M170 120 h0', 'M196 90 h0', 'M146 140 h0'].map(function(d){ return '<path d="' + d + '" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/>'; }).join('');
      else if(m === 'areia') s = agua + '<rect x="103" y="140" width="114" height="24" rx="6" fill="#d9b779"/>' + s;
      else s = '<rect x="103" y="64" width="114" height="100" rx="8" fill="#74c0fc" opacity=".75"/><rect x="103" y="40" width="114" height="30" fill="#ffd43b" opacity=".9"/>' + s;
      return svg(320, 184, s + tx(260, 100, MIS[m][1] + (MIS[m][1] === 1 ? ' fase' : ' fases'), { z: 13, w: 800, c: P }) + tx(60, 100, m === 'sal' ? '🧂' : m === 'areia' ? '🏖️' : m === 'oleo' ? '🫒' : '🍬', { z: 30 })); },
    lei: function(e){ var v = MIS[e.m]; return '<b>' + v[0] + ':</b> mistura <b>' + v[2] + '</b> — ' + v[3] + '. Separar por: ' + v[4] + '.'; } });

  // Sociologia: o iceberg da cultura
  var ICE = { visivel: ['Acima da água', 'O que se vê: comida, roupas, música, festas, língua, danças. É a parte mais fácil de notar.'], meio: ['Na linha d’água', 'O que se percebe ao conviver: jeitos de falar, gestos, humor, regras de educação, o uso do tempo.'], fundo: ['Abaixo da água', 'O que quase não se vê: valores, crenças, ideias de certo e errado, noções de família e de respeito — o que sustenta o resto.'] };
  reg('iceberg', { alt: 'Iceberg com a parte visível da cultura acima da água e a parte profunda abaixo', leg: 'Toque nas partes do iceberg: a cultura tem uma face visível e outra escondida.', est: { k: 'visivel' },
    svg: function(e){ function s(k, c0){ return ' fill="' + c0 + '" stroke="' + (e.k === k ? INK : 'none') + '" stroke-width="3"'; }
      return svg(320, 190, '<rect x="2" y="2" width="316" height="186" rx="12" fill="#e7f5ff"/><rect x="2" y="70" width="316" height="118" fill="#4dabf7" opacity=".55"/>' +
        '<g ' + clk('k', 'visivel', 'parte visível') + '><polygon points="130,70 160,16 184,42 204,24 226,70"' + s('visivel', '#ffffff') + '/>' + tx(176, 56, 'comida · roupa · música', { z: 8, c: INK }) + '</g>' +
        '<g ' + clk('k', 'meio', 'linha dágua') + '><polygon points="108,70 246,70 252,98 100,98"' + s('meio', '#d0ebff') + '/>' + tx(176, 88, 'gestos · humor · regras', { z: 8, c: INK }) + '</g>' +
        '<g ' + clk('k', 'fundo', 'parte profunda') + '><polygon points="100,98 252,98 276,142 214,176 126,180 70,138"' + s('fundo', '#a5d8ff') + '/>' + tx(172, 132, 'valores · crenças', { z: 10, w: 800, c: INK }) + tx(172, 150, 'ideias de certo e errado', { z: 9, c: INK }) + '</g>'); },
    lei: function(e){ return '<b>' + ICE[e.k][0] + '.</b> ' + ICE[e.k][1]; } });
})();
