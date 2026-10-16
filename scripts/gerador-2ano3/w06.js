// Módulo 6 · Matemática · 2ª série · 3º trimestre — Logaritmos: problemas e mudança de base (aulas 83 e 84 do RCO)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo (escreva "log 2", sem vírgula nem barra).
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('../gerador-materias/aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'matematica', ano: '2° Ano', tri: 3, pasta: 'aulas/2-ano/3-tri/logaritmos-problemas-e-mudanca-de-base/',
  titulo: 'Logaritmos: problemas e mudança de base', accent: 'decay', icon: 'curve-log', key: 'm2w06', keyp: 'm2', area: 'Matemática · 2ª série',
  refs: ['Aulas 83 e 84 do plano de Matemática da 2ª série (3º trimestre), reescritas e ampliadas com problemas originais.', 'Valores aproximados usados: log 2 ≈ 0,30; log 3 ≈ 0,48; log 5 ≈ 0,70; log 7 ≈ 0,85.'],
  aulas: [
    // ------------------------------------------------------------ aula 83
    {
      slug: 'logaritmo-resolucao-de-problemas', titulo: 'Logaritmo: resolução de problemas',
      h1: `Logaritmos em ${co('decay')}problemas:</span> tempo, juros e escalas`,
      sub: 'Os logaritmos resolvem o que as potências sozinhas não resolvem: em quanto tempo algo dobra, quanto falta para atingir uma meta, quantas vezes uma intensidade é maior que outra.',
      badges: [['tempo'], ['juros', 'growth'], ['escalas', 'decay']], color: 'decay',
      roteiro: ['Quatro tipos de problema.', [['Tempo de crescimento', 'aᵗ = M', 'bulb'], ['Juros compostos', 'quando atinge a meta', 'coin'], ['Decaimento', 'meia-vida', 'chart'], ['Escalas', 'pH, decibel, Richter', 'target'], ['Estratégia', 'passo a passo', 'book']]],
      objetivos: ['Resolver <strong>equações exponenciais</strong> aplicando logaritmos.', 'Calcular <strong>tempos</strong> em crescimento e decaimento.', 'Interpretar <strong>escalas logarítmicas</strong>.'],
      dica: 'Roteiro: <strong>1)</strong> monte a equação exponencial; <strong>2)</strong> aplique log nos dois lados; <strong>3)</strong> isole $t$; <strong>4)</strong> calcule com os valores dados.',
      gancho: { titulo: 'Quando o dinheiro dobra', texto: 'Um capital rende $10%$ ao ano (juros compostos). Em quanto tempo ele dobra? Precisamos de $1,1^{t} = 2$.', mini: ['Com $log 2 = 0,30$ e $log 1,1 = 0,04$, o tempo é:', ['$2,5$ anos', '$5$ anos', '$7,5$ anos', '$10$ anos'], 2, '$t = {0,30|0,04} = 7,5$ anos. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · crescimento e juros', 'Isolando o expoente', g2(`<div>
              ${checks(['<strong>Montante:</strong> $M = C · (1 + i)^{t}$ ⇒ $(1 + i)^{t} = {M|C}$.', 'Aplicando log: $t · log(1 + i) = log {M|C}$ ⇒ $t = {log {M|C}|log(1 + i)}$.', '<strong>Duplicação:</strong> $M = 2C$ ⇒ $t = {log 2|log(1 + i)}$.', '<strong>Meia-vida:</strong> $N = N_{0} · ({1|2})^{t / T}$ ⇒ $t = T · {log ({N|N_{0}})|log ({1|2})}$.'], '.95rem')}
            </div>`, card(`<strong>Exemplo de decaimento</strong>
              <p style="font-size:.92rem;margin-top:8px;">Uma amostra perde $10%$ por dia ($a = 0,9$). Quando resta metade? $0,9^{t} = 0,5$ ⇒ $t = {log 0,5|log 0,9} ≈ {−0,30|−0,046} ≈ 6,5$ dias.</p>`, 'primary'))],
        ['Teoria · escalas', 'pH, decibel e Richter', g2(`<div>
              ${checks(['<strong>pH</strong> $= −log [H^{+}]$: pH $3$ ⇒ $[H^{+}] = 10^{−3}$; cada unidade a menos = $10$ vezes mais ácido.', '<strong>Decibel:</strong> $β = 10 · log {I|I_{0}}$; $+10$ dB = intensidade $10$ vezes maior.', '<strong>Richter:</strong> cada ponto de magnitude ≈ $32$ vezes mais energia.', 'Diferença de $k$ na escala ⇒ razão $10^{k}$ entre as grandezas (escalas de base $10$).'], '.95rem')}
            </div>`, callout('Dica', 'Se $pH_{1} = 2$ e $pH_{2} = 5$, a razão das concentrações é $10^{5−2} = 1000$.', 'decay'))]
      ],
      exemplos: [
        ['Tempo para triplicar', 'Uma população cresce $20%$ ao ano. Com $log 3 = 0,48$ e $log 1,2 = 0,08$, em quantos anos ela triplica?', [['Equação', '$1,2^{t} = 3$.'], ['Aplique log', '$t · log 1,2 = log 3$.'], ['Isole', '$t = {0,48|0,08} = 6$.']], 'Triplica em <strong>6 anos</strong>.'],
        ['Decibéis', 'Um som tem $60$ dB e outro $80$ dB. Quantas vezes o segundo é mais intenso?', [['Diferença', '$80 − 60 = 20$ dB.'], ['Razão', '$10 · log {I_{2}|I_{1}} = 20$ ⇒ $log {I_{2}|I_{1}} = 2$.'], ['Intensidades', '${I_{2}|I_{1}} = 10² = 100$.']], 'O segundo é <strong>100 vezes</strong> mais intenso.']
      ],
      pratique: [
        ['Tempo', 'Com $log 2 = 0,30$ e $log 1,5 = 0,18$, em quantas unidades de tempo um valor com taxa $50%$ dobra?', ['$1,2$', '$1,67$', '$2,5$', '$6$'], 1, '$t = {0,30|0,18} ≈ 1,67$. <strong>Alternativa B.</strong>'],
        ['pH', 'Uma solução de pH $4$ tem concentração de $H^{+}$ igual a:', ['$10^{4}$', '$10^{−4}$', '$4$', '$0,4$'], 1, '$[H^{+}] = 10^{−pH}$. <strong>Alternativa B.</strong>'],
        ['Escala', 'Um terremoto de magnitude $7$ libera, em relação a um de magnitude $6$, aproximadamente:', ['$7$ vezes mais energia', '$10$ vezes mais energia', '$32$ vezes mais energia', '$100$ vezes mais energia'], 2, 'Cada ponto ≈ $32$ vezes. <strong>Alternativa C.</strong>']
      ],
      enem: ['A bactéria que dobra', 'Uma cultura cresce $50%$ por hora. Com $log 2 = 0,30$ e $log 1,5 = 0,18$, o tempo aproximado para duplicar é:', ['$1$ h $40$ min', '$2$ h', '$2$ h $30$ min', '$3$ h', '$5$ h'], 0, '$t ≈ 1,67$ h $≈ 1$ h $40$ min. <strong>Alternativa A.</strong>'],
      cuidados: [['Esquecer de isolar o expoente', 'Depois do log, divida pelo $log$ da base.'], ['Sinal do log da base < 1', '$log 0,9 < 0$: o quociente continua positivo.'], ['Escala linear', 'Em escalas logarítmicas a diferença é de <strong>razão</strong>, não de soma.'], ['Arredondamentos', 'Use tabelas fornecidas pelo problema.']],
      quiz: [
        { q: 'Para isolar $t$ em $a^{t} = M$ usamos:', o: ['$t = M − a$', '$t = {log M|log a}$', '$t = M ÷ a$', '$t = a^{M}$'], a: 1 },
        { q: 'Diferença de $20$ dB significa intensidade:', o: ['$2$ vezes', '$20$ vezes', '$100$ vezes', '$200$ vezes'], a: 2 },
        { q: 'pH $= 7$ corresponde a $[H^{+}] =$', o: ['$10^{7}$', '$7$', '$10^{−7}$', '$0,7$'], a: 2 },
        { q: 'Na meia-vida, resta:', o: ['$1/4$', '$1/2$', '$1/3$', 'tudo'], a: 1 }
      ],
      sintese: [['Tempo', 't = log(M/C) ÷ log(1 + i).'], ['Escalas', 'Diferença k ⇒ razão 10ᵏ.'], ['Roteiro', 'Montar, aplicar log, isolar, calcular.']],
      msg: 'Na próxima aula: a mudança de base.'
    },
    // ------------------------------------------------------------ aula 84
    {
      slug: 'logaritmo-mudanca-de-base', titulo: 'Logaritmo: mudança de base',
      h1: `Logaritmo: ${co('decay')}mudança de base</span>`,
      sub: 'Calculadoras só trazem log (base 10) e ln (base e). A mudança de base permite calcular logaritmos em qualquer base a partir deles.',
      badges: [['log_a b = log_c b ÷ log_c a'], ['bases', 'growth'], ['inversa', 'decay']], color: 'decay',
      roteiro: ['Trocando de base.', [['A fórmula', 'logₐ b = log_c b ÷ log_c a', 'target'], ['Prova', 'a partir da definição', 'bulb'], ['Consequências', 'logₐ b = 1 ÷ log_b a', 'scale'], ['Potências da base', 'log_{aⁿ} bᵐ', 'chart'], ['Aplicar', 'calcular com log 2 e log 3', 'book']]],
      objetivos: ['Aplicar a fórmula de <strong>mudança de base</strong>.', 'Usar $log_{a} b = {1|log_{b} a}$.', 'Resolver problemas <strong>escolhendo a base conveniente</strong>.'],
      dica: 'Escolha a nova base $c$ que facilite: normalmente $10$ (ou a base dos dados que você conhece).',
      gancho: { titulo: 'A calculadora só tem log', texto: 'Para calcular $log_{2} 10$ numa calculadora que só tem a tecla $log$ (base $10$), usamos: $log_{2} 10 = {log 10|log 2} = {1|0,30} ≈ 3,33$.', mini: ['Sabendo que $log 3 = 0,48$ e $log 2 = 0,30$, $log_{2} 3$ vale:', ['$0,18$', '$0,78$', '$1,6$', '$0,625$'], 2, '${log 3|log 2} = {0,48|0,30} = 1,6$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · mudança de base', 'A fórmula', g2(`<div>
              ${checks(['<strong>$log_{a} b = {log_{c} b|log_{c} a}$</strong>, para qualquer base nova $c$ válida.', '<strong>Prova:</strong> $log_{a} b = x$ ⇒ $a^{x} = b$ ⇒ (aplicando $log_{c}$) $x · log_{c} a = log_{c} b$.', 'Caso especial: $log_{a} b = {1|log_{b} a}$ (escolha $c = b$).', 'Exemplo: $log_{4} 8 = {log_{2} 8|log_{2} 4} = {3|2}$.'], '.95rem')}
            </div>`, card(`<strong>Atalhos úteis</strong>
              <p style="font-size:.92rem;margin-top:8px;">$log_{a^{n}} b^{m} = {m|n} · log_{a} b$.</p>
              <p style="font-size:.92rem;">Ex.: $log_{8} 16 = log_{2^{3}} 2^{4} = {4|3}$.</p>`, 'primary'))],
        ['Teoria · aplicando', 'Escolhendo a base', g2(`<div>
              ${checks(['Dados $log 2 = 0,30$ e $log 3 = 0,48$: $log_{6} 12 = {log 12|log 6} = {2 · 0,30 + 0,48|0,30 + 0,48} = {1,08|0,78} ≈ 1,38$.', '$log_{2} 5 · log_{5} 2 = 1$ (pois $log_{a} b · log_{b} a = 1$).', '$log_{2} 3 · log_{3} 4 = log_{2} 4 = 2$ (cadeia de bases: $log_{a} b · log_{b} c = log_{a} c$).', 'Para estimar $log_{3} 50$: ${log 50|log 3} = {1,70|0,48} ≈ 3,5$.'], '.95rem')}
            </div>`, callout('Cadeia', '$log_{a} b · log_{b} c · log_{c} d = log_{a} d$: “os do meio se cancelam”.', 'decay'))]
      ],
      exemplos: [
        ['Mudança de base', 'Com $log 2 = 0,30$ e $log 7 = 0,85$, calcule $log_{2} 7$.', [['Fórmula', '$log_{2} 7 = {log 7|log 2}$.'], ['Substitua', '${0,85|0,30} ≈ 2,83$.']], '$log_{2} 7 ≈ 2,83$ ($2^{3} = 8$, coerente).'],
        ['Cadeia', 'Calcule $log_{2} 3 · log_{3} 5 · log_{5} 16$.', [['Cadeia', 'Os do meio se cancelam.'], ['Resultado', '$log_{2} 16 = 4$.']], 'O valor é <strong>4</strong>.']
      ],
      pratique: [
        ['Fórmula', 'Qual expressão é igual a $log_{5} 9$?', ['${log 5|log 9}$', '${log 9|log 5}$', '$log 9 − log 5$', '$log 9 · log 5$'], 1, 'Mudança de base. <strong>Alternativa B.</strong>'],
        ['Inverso', '$log_{3} 5 · log_{5} 3$ vale:', ['$0$', '$1$', '$15$', '$8$'], 1, 'Produto dos inversos. <strong>Alternativa B.</strong>'],
        ['Base potência', '$log_{4} 32$ vale:', ['$2$', '${5|2}$', '$8$', '$3$'], 1, '${log_{2} 32|log_{2} 4} = {5|2}$. <strong>Alternativa B.</strong>']
      ],
      enem: ['Tempo em outra base', 'Com $log 2 = 0,30$ e $log 3 = 0,48$, o valor de $log_{3} 2$ é:', ['$0,18$', '$0,625$', '$0,78$', '$1,6$', '$1,44$'], 1, '${0,30|0,48} = 0,625$. <strong>Alternativa B.</strong>'],
      cuidados: [['Inverter numerador e denominador', 'O log da <strong>base antiga</strong> fica no denominador.'], ['Mudar só um dos logs', 'Troque os dois logs pela mesma base.'], ['Subtrair em vez de dividir', 'Mudança de base é <strong>quociente</strong>.'], ['Bases inválidas', 'A nova base também deve ser positiva e diferente de $1$.']],
      quiz: [
        { q: '$log_{2} 8$ pela mudança para base $10$ é:', o: ['${log 8|log 2}$', '${log 2|log 8}$', '$log 8 − log 2$', '$log 16$'], a: 0 },
        { q: '$log_{a} b · log_{b} a$ vale:', o: ['$0$', '$1$', '$a$', '$b$'], a: 1 },
        { q: '$log_{9} 27$ vale:', o: ['$3$', '${3|2}$', '$18$', '$2$'], a: 1 },
        { q: '$log_{2} 3 · log_{3} 8$ vale:', o: ['$3$', '$5$', '$24$', '$8$'], a: 0 }
      ],
      sintese: [['Fórmula', 'log_a b = log_c b ÷ log_c a.'], ['Inverso', 'log_a b = 1 ÷ log_b a.'], ['Cadeia', 'log_a b · log_b c = log_a c.']],
      msg: 'Na próxima aula: equações logarítmicas e, em seguida, a função logarítmica.'
    }
  ]
});
