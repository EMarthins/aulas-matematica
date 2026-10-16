// Módulo 8 · Matemática · 3ª série · 3º trimestre — Relação fundamental e arcos da circunferência (aulas 92 e 93 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const w93 = Wd.ciclo('ar93');

module.exports = unidade({
  materia: 'matematica', ano: '3° Ano', tri: 3, pasta: 'aulas/3-ano/3-tri/relacao-fundamental-e-arcos/',
  titulo: 'Relação fundamental e arcos da circunferência', accent: 'decay', icon: 'wave', key: 'm3x08', keyp: 'm3', area: 'Matemática · 3ª série',
  refs: ['Aulas 92 e 93 do plano de Matemática da 3ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Habilidade H20 da Matriz de Referência do ENEM: interpretar gráfico cartesiano que represente relações entre grandezas.'],
  aulas: [
    // ------------------------------------------------------------ aula 92
    {
      slug: 'relacao-fundamental-da-trigonometria', titulo: 'Relação fundamental da trigonometria',
      h1: `Relação ${co('decay')}fundamental:</span> sen² + cos² = 1`,
      sub: 'Para qualquer ângulo, o quadrado do seno somado ao quadrado do cosseno vale 1. É a identidade mais usada da trigonometria e vem direto do teorema de Pitágoras.',
      badges: [['sen² θ + cos² θ = 1'], ['Pitágoras', 'growth'], ['identidade', 'decay']], color: 'decay',
      roteiro: ['Da hipotenusa 1 à identidade.', [['Dedução', 'Pitágoras na hipotenusa 1', 'bulb'], ['A relação', 'sen² + cos² = 1', 'target'], ['Achar cos', 'dado o seno', 'chart'], ['Tangente', 'tg = sen ÷ cos', 'scale'], ['Simplificar', 'expressões', 'book']]],
      objetivos: ['Deduzir e aplicar $sen² θ + cos² θ = 1$.', 'Calcular o <strong>cosseno</strong> a partir do seno (e vice-versa).', 'Simplificar <strong>expressões trigonométricas</strong>.'],
      dica: 'Dado $sen θ$ de um ângulo agudo: $cos θ = √{1 − sen² θ}$ (positivo). E $tg θ = {sen θ|cos θ}$.',
      gancho: { titulo: 'Seno 0,6, cosseno?', texto: 'Se um ângulo agudo tem $sen θ = 0,6$, quanto vale $cos θ$? Como $0,6² + cos² θ = 1$, $cos² θ = 0,64$ e $cos θ = 0,8$. Repare: $0,6$ e $0,8$ são catetos do triângulo $3$-$4$-$5$ com hipotenusa $1$.', mini: ['Se $sen θ = {3|5}$ (θ agudo), $cos θ$ vale:', ['${2|5}$', '${4|5}$', '${5|4}$', '${3|4}$'], 1, '$cos² θ = 1 − {9|25} = {16|25}$ ⇒ ${4|5}$. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · dedução', 'Pitágoras com hipotenusa 1', g2(`<div>
              ${checks(['Em um triângulo retângulo de hipotenusa $1$: oposto $= sen θ$ e adjacente $= cos θ$.', 'Pitágoras: $(sen θ)² + (cos θ)² = 1²$.', '<strong>$sen² θ + cos² θ = 1$</strong>, para qualquer ângulo.', 'Escreve-se $sen² θ$ no lugar de $(sen θ)²$.'], '.95rem')}
            </div>`, card(`<strong>Consequências</strong>
              <p style="font-size:.92rem;margin-top:8px;">$sen² θ = 1 − cos² θ$ e $cos² θ = 1 − sen² θ$.</p>
              <p style="font-size:.92rem;">$1 + tg² θ = {1|cos² θ}$ (divida tudo por $cos² θ$).</p>`, 'primary'))],
        ['Teoria · usos', 'Achar valores e simplificar', g2(`<div>
              ${checks(['<strong>Achar o cosseno:</strong> $sen θ = {5|13}$ ⇒ $cos² θ = 1 − {25|169} = {144|169}$ ⇒ $cos θ = {12|13}$ (agudo).', '<strong>Achar a tangente:</strong> $tg θ = {sen θ|cos θ} = {5|12}$.', '<strong>Simplificar:</strong> $sen² θ + cos² θ + 3 = 1 + 3 = 4$.', 'Também vale com $θ$ obtuso: o sinal do cosseno é negativo (próximas aulas).'], '.95rem')}
            </div>`, callout('Verificação', 'Para $30°$: $({1|2})² + ({√{3}|2})² = {1|4} + {3|4} = 1$ ✓.', 'decay'))]
      ],
      exemplos: [
        ['Achar o cosseno', 'Se $sen θ = 0,8$ e $θ$ é agudo, calcule $cos θ$ e $tg θ$.', [['$cos² θ$', '$1 − 0,64 = 0,36$ ⇒ $cos θ = 0,6$.'], ['$tg θ$', '${0,8|0,6} = {4|3}$.']], '$cos θ = 0,6$ e $tg θ = {4|3}$.'],
        ['Simplificando', 'Simplifique $(1 − cos θ)(1 + cos θ)$.', [['Produto notável', '$1 − cos² θ$.'], ['Relação', '$= sen² θ$.']], '$(1 − cos θ)(1 + cos θ) = sen² θ$.']
      ],
      pratique: [
        ['Valor', 'Se $cos θ = {5|13}$ (agudo), $sen θ$ vale:', ['${8|13}$', '${12|13}$', '${5|12}$', '${13|12}$'], 1, '$1 − {25|169} = {144|169}$. <strong>Alternativa B.</strong>'],
        ['Identidade', '$sen² 40° + cos² 40°$ vale:', ['$0$', '$1$', '$2$', '$80°$'], 1, 'Relação fundamental. <strong>Alternativa B.</strong>'],
        ['Tangente', 'Se $sen θ = 0,6$ e $cos θ = 0,8$, $tg θ$ vale:', ['$0,48$', '$0,75$', '$1,33$', '$1,4$'], 1, '${0,6|0,8} = 0,75$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Conferindo uma tabela', 'Em uma tabela trigonométrica aparece, para um ângulo agudo, $sen θ = 0,28$ e $cos θ = 0,96$. Esses valores são compatíveis? Calcule $sen² + cos²$.', ['sim, pois a soma é $1,00$', 'não, pois a soma é $0,50$', 'não, pois a soma é $1,24$', 'sim, pois a soma é $1,24$', 'depende do ângulo'], 0, '$0,0784 + 0,9216 = 1,0$. <strong>Alternativa A.</strong>'],
      cuidados: [['$sen² θ$ não é $sen θ²$', '$sen² θ$ é o seno elevado ao quadrado.'], ['Esquecer a raiz', 'Depois de achar $cos² θ$, extraia a raiz.'], ['Sinal do cosseno', 'Para ângulo agudo é positivo; em outros quadrantes, depende.'], ['Aplicar com ângulos diferentes', 'A relação vale para o <strong>mesmo</strong> ângulo.']],
      quiz: [
        { q: '$sen² θ + cos² θ$ vale:', o: ['$0$', '$1$', '$2$', '$θ$'], a: 1 },
        { q: 'Se $sen θ = 0,6$, $cos θ$ (agudo) vale:', o: ['$0,4$', '$0,64$', '$0,8$', '$1,4$'], a: 2 },
        { q: '$tg θ$ é igual a:', o: ['${sen θ|cos θ}$', '${cos θ|sen θ}$', '$sen θ · cos θ$', '$sen θ + cos θ$'], a: 0 },
        { q: 'A relação fundamental vem de:', o: ['Pitágoras', 'Bhaskara', 'Tales', 'Euler'], a: 0 }
      ],
      sintese: [['Relação', 'sen² θ + cos² θ = 1.'], ['Usos', 'Achar cos a partir do sen e simplificar.'], ['Tangente', 'tg θ = sen θ ÷ cos θ.']],
      msg: 'Na próxima aula: arcos e a circunferência.'
    },
    // ------------------------------------------------------------ aula 93
    {
      slug: 'razoes-trigonometricas-na-circunferencia-arcos-i', titulo: 'Razões trigonométricas na circunferência: arcos I',
      h1: `Arcos na ${co('decay')}circunferência:</span> graus e radianos`,
      sub: 'Um arco é uma parte da circunferência. Medimos arcos em graus ou radianos, e a conversão entre as duas unidades é a base para estender a trigonometria além dos triângulos.',
      badges: [['arco'], ['graus ↔ radianos', 'growth'], ['π rad = 180°', 'decay']], color: 'decay',
      roteiro: ['Medir arcos e converter unidades.', [['Arco e ângulo central', 'mesma medida', 'target'], ['Grau', '1/360 da volta', 'scale'], ['Radiano', 'arco = raio', 'chart'], ['Conversão', 'π rad = 180°', 'book'], ['Comprimento do arco', 'ℓ = α·r', 'bulb']]],
      objetivos: ['Distinguir <strong>arco</strong> de seu <strong>comprimento</strong>.', '<strong>Converter</strong> entre graus e radianos.', 'Calcular o <strong>comprimento de um arco</strong>.'],
      dica: 'Conversão: $180° = π$ rad. Para graus → rad: multiplique por ${π|180}$; rad → graus: multiplique por ${180|π}$.',
      gancho: { titulo: 'A pizza em 8 fatias', texto: 'Uma pizza cortada em $8$ fatias iguais tem cada fatia com um ângulo central de $360° ÷ 8 = 45°$. Em radianos, é ${π|4}$. O ângulo e o arco têm a mesma medida angular.', mini: ['$180°$ correspondem a:', ['${π|2}$ rad', '$π$ rad', '$2π$ rad', '${π|4}$ rad'], 1, '$180° = π$ rad. <strong>Alternativa B.</strong>'] },
      teoria: [
        ['Teoria · unidades', 'Grau e radiano', g2(`<div>
              ${checks(['<strong>Arco:</strong> parte da circunferência; sua medida angular é igual à do ângulo central.', '<strong>Grau:</strong> ${1|360}$ da volta. Volta completa $= 360°$.', '<strong>Radiano:</strong> medida do arco cujo <strong>comprimento é igual ao raio</strong>. Volta completa $= 2π$ rad.', '<strong>Conversão:</strong> $π$ rad $= 180°$.'], '.95rem')}
            </div>`, card(`<strong>Tabela</strong>
              ${tbl(['Graus', '$30°$', '$45°$', '$60°$', '$90°$', '$180°$', '$360°$'], [['Radianos', '${π|6}$', '${π|4}$', '${π|3}$', '${π|2}$', '$π$', '$2π$']])}`, 'primary'))],
        ['Teoria · comprimento do arco', 'ℓ = α · r', g2(`<div>
              ${checks(['Com $α$ em <strong>radianos</strong>: <strong>comprimento do arco $ℓ = α · r$</strong>.', 'Com $α$ em graus: $ℓ = {α|360} · 2π r$.', 'Exemplo: $r = 10$ cm e $α = {π|3}$ rad: $ℓ = {10π|3} ≈ 10,5$ cm.', 'Volta completa: $ℓ = 2π r$.'], '.95rem')}
            </div>`, callout('Simule', 'No simulador, arraste o arco em graus e observe o ângulo e o ponto sobre a circunferência de raio $1$.', 'decay'))]
      ],
      exemplos: [
        ['Convertendo', 'Converta $150°$ em radianos e ${3π|4}$ rad em graus.', [['Graus → rad', '$150 · {π|180} = {5π|6}$.'], ['Rad → graus', '${3π|4} · {180|π} = 135°$.']], '$150° = {5π|6}$ rad e ${3π|4}$ rad $= 135°$.'],
        ['Comprimento do arco', 'Em uma circunferência de raio $6$ cm, qual o comprimento de um arco de $60°$?', [['Radianos', '$60° = {π|3}$ rad.'], ['Fórmula', '$ℓ = {π|3} · 6 = 2π$.']], '$ℓ = 2π ≈ 6,28$ cm.']
      ],
      widget: { titulo: 'A circunferência trigonométrica', html: w93.html, js: w93.js },
      pratique: [
        ['Conversão', '$270°$ em radianos valem:', ['${π|2}$', '$π$', '${3π|2}$', '$2π$'], 2, '$270 · {π|180} = {3π|2}$. <strong>Alternativa C.</strong>'],
        ['Rad → graus', '${π|3}$ rad correspondem a:', ['$30°$', '$45°$', '$60°$', '$90°$'], 2, '${180|3} = 60$. <strong>Alternativa C.</strong>'],
        ['Comprimento', 'Arco de $π$ rad em circunferência de raio $4$: comprimento:', ['$π$', '$2π$', '$4π$', '$8π$'], 2, '$ℓ = π · 4$. <strong>Alternativa C.</strong>']
      ],
      enem: ['O ponteiro do relógio', 'O ponteiro dos minutos de um relógio gira $90°$ em $15$ minutos. Em radianos, esse giro vale:', ['${π|4}$', '${π|2}$', '${3π|4}$', '$π$', '$2π$'], 1, '$90° = {π|2}$ rad. <strong>Alternativa B.</strong>'],
      cuidados: [['Arco × comprimento', 'Arco é medida angular; comprimento depende do raio.'], ['Esquecer o $π$', 'Radianos de ângulos usuais envolvem $π$.'], ['Calculadora', 'Para $sen$ de graus use modo DEG; de radianos, RAD.'], ['Fórmula do comprimento em graus', 'Use ${α|360} · 2π r$, não ${α|180}$.']],
      quiz: [
        { q: '$π$ rad correspondem a:', o: ['$90°$', '$180°$', '$270°$', '$360°$'], a: 1 },
        { q: '$60°$ em radianos:', o: ['${π|6}$', '${π|4}$', '${π|3}$', '${π|2}$'], a: 2 },
        { q: 'A volta completa em radianos vale:', o: ['$π$', '$2π$', '$360$', '$π²$'], a: 1 },
        { q: 'O comprimento do arco com $α$ em rad é:', o: ['$α · r$', '$α + r$', '${α|r}$', '$r²$'], a: 0 }
      ],
      sintese: [['Unidades', 'π rad = 180°; volta = 2π.'], ['Conversão', 'Graus × π/180 = rad.'], ['Comprimento', 'ℓ = α·r (α em rad).']],
      msg: 'Na próxima aula: arcos côngruos e a circunferência trigonométrica.'
    }
  ]
});
