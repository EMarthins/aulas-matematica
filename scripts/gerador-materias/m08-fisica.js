// Física · 1º ano · 1º trimestre · Mecânica — Aula 1 (texto e exemplos originais)
// Cuidado: nunca escreva "R$" sem número logo depois; sem barras invertidas neste arquivo.
const K = require('../gerador-9ano/kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const co = c => `<span style="color:var(--${c});">`;

module.exports = unidade({
  materia: 'fisica', ano: '1° Ano', tri: 1, pasta: 'aulas/fisica/1-ano/1-tri/mecanica/',
  titulo: 'Mecânica', accent: 'primary', icon: 'wave', key: 'fi1u1', keyp: 'fi', area: 'Física · 1º ano',
  refs: ['Texto, exemplos e questões originais, elaborados a partir das habilidades de Ciências da Natureza previstas na BNCC (Ensino Médio).', 'Dica de estudo: sempre faça um desenho da situação e indique as unidades.'],
  aulas: [{
    slug: 'movimento-referencial-e-velocidade-media', titulo: 'Movimento: referencial, deslocamento e velocidade média',
    h1: `Movimento: ${co('primary')}referencial e velocidade média</span>`,
    sub: 'Para dizer se algo está em movimento, é preciso um referencial. A velocidade média compara a distância percorrida com o tempo gasto.',
    badges: [['referencial'], ['deslocamento', 'growth'], ['v = Δs/Δt', 'decay']], color: 'primary',
    roteiro: ['Da ideia de movimento à velocidade média.', [['Referencial', 'em relação a quê?', 'bulb'], ['Posição e deslocamento', 'onde está e quanto mudou', 'target'], ['Velocidade média', 'Δs ÷ Δt', 'scale'], ['Unidades', 'km/h e m/s', 'chart'], ['Problemas', 'viagens e corridas', 'book']]],
    objetivos: ['Entender <strong>movimento e repouso</strong> como conceitos relativos ao referencial.', 'Calcular <strong>deslocamento</strong> e <strong>velocidade média</strong>.', '<strong>Converter</strong> entre km/h e m/s.'],
    dica: 'Para converter: km/h ÷ 3,6 = m/s e m/s × 3,6 = km/h.',
    gancho: { titulo: 'Parado ou em movimento?', texto: 'Você está sentado dentro de um ônibus que anda a 60 km/h. Em relação ao <strong>banco do ônibus</strong>, você está parado. Em relação à <strong>calçada</strong>, você se move a 60 km/h. Você está parado ou em movimento?', mini: ['O movimento de um corpo depende:', ['do referencial adotado', 'apenas da massa', 'apenas da cor', 'de nada'], 0, 'Movimento e repouso são relativos ao referencial. <strong>Alternativa A.</strong>'] },
    teoria: [
      ['Teoria · conceitos', 'Referencial, posição e deslocamento', g2(`<div>
          ${checks(['<strong>Referencial:</strong> corpo ou ponto em relação ao qual descrevemos o movimento.', '<strong>Posição</strong> ($s$): onde o corpo está na trajetória, medida em metros (m).', '<strong>Deslocamento</strong> $Δs = s_{f} − s_{i}$ (posição final menos inicial).', '<strong>Distância percorrida</strong> é o comprimento do caminho real; pode ser maior que o deslocamento.'], '.95rem')}
        </div>`, card(`<strong>Exemplo</strong>
          <p style="font-size:.92rem;margin-top:8px;">Um carro vai da posição $s = 20$ km para $s = 80$ km: $Δs = 60$ km.</p>`, 'primary'))],
      ['Teoria · velocidade média', 'Distância e tempo', g2(`<div>
          ${checks(['<strong>$v_{m} = {Δs|Δt}$</strong> (variação da posição dividida pelo intervalo de tempo).', 'Unidades no SI: <strong>m/s</strong>. Muito usada: <strong>km/h</strong>.', 'Conversão: $1$ m/s $= 3,6$ km/h. Exemplo: $72$ km/h $= 20$ m/s.', 'A velocidade média não diz como foi a variação da velocidade durante o trajeto.'], '.95rem')}
        </div>`, callout('Lembre', '$Δs = v_{m} · Δt$ e $Δt = {Δs|v_{m}}$: a mesma relação de proporção direta que você usa na Matemática.', 'primary'))]
    ],
    exemplos: [
      ['Velocidade média', 'Um carro percorre 150 km em 2,5 h. Qual é a velocidade média?', [['Fórmula', '$v_{m} = {Δs|Δt}$.'], ['Substituir', '${150|2,5} = 60$.']], 'A velocidade média é <strong>60 km/h</strong>.'],
      ['Conversão', 'Converta 90 km/h para m/s.', [['Fator', 'Divida por $3,6$.'], ['Calcular', '$90 ÷ 3,6 = 25$.']], '$90$ km/h $=$ <strong>25 m/s</strong>.']
    ],
    pratique: [
      ['Deslocamento', 'Uma pessoa vai da posição $10$ m para $45$ m. O deslocamento é:', ['$−35$ m', '$35$ m', '$55$ m', '$450$ m'], 1, '$45 − 10 = 35$ m. <strong>Alternativa B.</strong>'],
      ['Velocidade', 'Um ciclista percorre $30$ km em $1,5$ h. A velocidade média é:', ['$15$ km/h', '$20$ km/h', '$30$ km/h', '$45$ km/h'], 1, '${30|1,5} = 20$. <strong>Alternativa B.</strong>'],
      ['Conversão', '$36$ km/h equivalem a:', ['$5$ m/s', '$10$ m/s', '$36$ m/s', '$129,6$ m/s'], 1, '$36 ÷ 3,6 = 10$. <strong>Alternativa B.</strong>']
    ],
    enem: ['A viagem de ônibus', 'Um ônibus sai de uma cidade às 8h e chega a outra, 240 km adiante, às 11h. Qual a velocidade média da viagem?', ['60 km/h', '70 km/h', '80 km/h', '90 km/h', '120 km/h'], 2, 'Tempo $= 3$ h; ${240|3} = 80$ km/h. <strong>Alternativa C.</strong>'],
    cuidados: [['Distância × deslocamento', 'Em uma volta completa, o deslocamento é zero e a distância não.'], ['km/h e m/s misturados', 'Converta antes de usar as fórmulas.'], ['Tempo mal calculado', '2h30 é $2,5$ h, não $2,3$ h.'], ['Repouso absoluto', 'Não existe: tudo é relativo a um referencial.']],
    quiz: [
      { q: 'A velocidade média é dada por:', o: ['Δt ÷ Δs', 'Δs ÷ Δt', 'Δs · Δt', 'Δs − Δt'], a: 1 },
      { q: '$20$ m/s correspondem a:', o: ['$5,6$ km/h', '$36$ km/h', '$72$ km/h', '$200$ km/h'], a: 2 },
      { q: 'O deslocamento de $s_{i} = 5$ m a $s_{f} = 2$ m é:', o: ['$−3$ m', '$3$ m', '$7$ m', '$10$ m'], a: 0 },
      { q: 'Quem está “parado” depende de:', o: ['do referencial', 'do peso', 'da cor', 'da altura'], a: 0 }
    ],
    sintese: [['Referencial', 'Movimento e repouso são relativos.'], ['Deslocamento', 'Δs = posição final − inicial.'], ['Velocidade média', 'v = Δs ÷ Δt; 3,6 converte m/s e km/h.']],
    msg: 'Na próxima aula você estuda o movimento uniforme e seus gráficos.'
  }]
});
