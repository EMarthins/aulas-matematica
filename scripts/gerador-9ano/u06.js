// Módulo 6 · 9º ano · Recomposição · 1º trimestre — Grandezas proporcionais (aulas 17 a 20 do plano)
// Cuidado: nunca escreva "R$" sem número logo depois. Sem barras invertidas neste arquivo.
const K = require('./kit.js');
const { g2, card, callout, tbl, checks } = K;
const { unidade } = require('./aula.js');
const Wd = require('./wid.js');
const co = c => `<span style="color:var(--${c});">`;
const wd1 = Wd.proporcao('rq1');
const wd3 = Wd.proporcao('rq3');

module.exports = unidade({
  tri: 1, dir: 'grandezas-proporcionais', titulo: 'Grandezas proporcionais', accent: 'growth', icon: 'curve-up', key: 'r1u6',
  aulas: [
    // ---------------------------------------------------------------- aula 1
    {
      slug: 'grandezas-diretamente-proporcionais-i', titulo: 'Grandezas diretamente proporcionais I',
      h1: `Grandezas ${co('growth')}diretamente proporcionais</span>`,
      sub: 'Duas grandezas são diretamente proporcionais quando, ao dobrar uma, a outra também dobra. A razão entre elas é sempre a mesma (a constante de proporcionalidade).',
      badges: [['razão'], ['proporção', 'growth'], ['constante', 'decay']], color: 'growth',
      roteiro: ['Reconhecer, testar e escrever uma proporção.', [['Razão', 'comparar por divisão', 'bulb'], ['Proporção', 'duas razões iguais', 'scale'], ['Direta', 'dobra, dobra', 'chart'], ['Constante k', 'a razão fixa', 'target'], ['Tabela e gráfico', 'reta pela origem', 'book']]],
      objetivos: ['Reconhecer grandezas <strong>diretamente proporcionais</strong>.', 'Calcular a <strong>constante de proporcionalidade</strong>.', 'Completar <strong>tabelas</strong> proporcionais.'],
      dica: 'Direta: <strong>y ÷ x é sempre o mesmo número</strong> (constante $k$). Se $x$ dobra, $y$ dobra.',
      gancho: { titulo: 'Pacotes de figurinhas', texto: 'Um pacote de figurinhas custa <strong>R$ 4</strong>. Quanto custam <strong>3</strong> pacotes? E <strong>6</strong> pacotes?', mini: ['O preço de 6 pacotes é:', ['R$ 10', 'R$ 18', 'R$ 24', 'R$ 30'], 2, 'Preço = $4 · $ pacotes: $4 · 6 = 24$. Se os pacotes dobram, o preço dobra. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · proporção direta', 'A razão não muda', g2(`<div>
              ${checks(['<strong>Razão</strong> entre $a$ e $b$: ${a|b}$.', '<strong>Proporção</strong>: igualdade de duas razões, ${a|b} = {c|d}$.', 'Grandezas <strong>diretamente proporcionais</strong>: aumentando uma, a outra aumenta <strong>na mesma razão</strong>.', 'Na tabela, $y ÷ x$ dá sempre o mesmo valor $k$: $y = k · x$.'], '.95rem')}
            </div>`, card(`<strong>Exemplo da tabela</strong>
              ${tbl(['Pacotes (x)', 'Preço (y)', 'y ÷ x'], [['$1$', '$4$', '$4$'], ['$3$', '$12$', '$4$'], ['$6$', '$24$', '$4$'], ['$10$', '$40$', '$4$']])}
              <p class="hint" style="margin-top:6px;">Constante $k = 4$ reais por pacote.</p>`, 'primary'))],
        ['Teoria · propriedade fundamental', 'Produto dos meios e extremos', g2(`<div>
              ${checks(['Em ${a|b} = {c|d}$, vale $a · d = b · c$ (produtos em cruz).', 'Para achar um termo desconhecido: ${3|5} = {x|20}$ ⇒ $5x = 60$ ⇒ $x = 12$.', 'Também vale: $y = k · x$, com $k$ constante.', 'O <strong>gráfico</strong> de duas grandezas diretamente proporcionais é uma <strong>reta que passa pela origem</strong>.'], '.95rem')}
            </div>`, callout('Nem toda tabela crescente é proporcional', 'Altura e idade crescem juntas, mas a razão <strong>não</strong> é constante — logo, não são proporcionais.', 'growth'))]
      ],
      exemplos: [
        ['Testando proporcionalidade', 'A tabela relaciona o número de camisetas ao custo: $2 → 30$; $5 → 75$; $8 → 120$. As grandezas são diretamente proporcionais?', [['Razões', '${30|2} = 15$; ${75|5} = 15$; ${120|8} = 15$.'], ['Comparar', 'Todas iguais a $15$.']], 'Sim: a constante é <strong>R$ 15 por camiseta</strong>.'],
        ['Completando a tabela', 'Uma receita usa $3$ ovos para cada $500$ g de farinha. Quantos ovos para $1 500$ g?', [['Proporção', '${3|500} = {x|1500}$.'], ['Produtos em cruz', '$500x = 4500$.'], ['Resolver', '$x = 9$.']], 'São necessários <strong>9 ovos</strong>.']
      ],
      widget: { titulo: 'Tabela de proporcionalidade', html: wd1.html, js: wd1.js },
      pratique: [
        ['Constante', 'A tabela mostra $x: 2, 4, 6$ e $y: 10, 20, 30$. A constante de proporcionalidade é:', ['$2$', '$4$', '$5$', '$10$'], 2, '$10 ÷ 2 = 5$, $20 ÷ 4 = 5$, $30 ÷ 6 = 5$. <strong>Alternativa C.</strong>'],
        ['Termo desconhecido', 'Na proporção ${4|9} = {12|x}$, o valor de $x$ é:', ['$3$', '$24$', '$27$', '$36$'], 2, '$4x = 108$ ⇒ $x = 27$. <strong>Alternativa C.</strong>'],
        ['É proporcional?', 'Qual par de grandezas é diretamente proporcional?', ['idade e altura de uma pessoa', 'número de balas e o seu preço (preço fixo cada)', 'tempo de viagem e velocidade', 'dia do mês e temperatura'], 1, 'Preço fixo por bala ⇒ razão preço/quantidade constante. <strong>Alternativa B.</strong>']
      ],
      enem: ['Mapa e distância', 'Em um mapa, $2$ cm representam $50$ km. Duas cidades estão a $7$ cm uma da outra no mapa. A distância real é:', ['$100$ km', '$125$ km', '$150$ km', '$175$ km', '$350$ km'], 3, '${2|50} = {7|x}$ ⇒ $2x = 350$ ⇒ $x = 175$ km. <strong>Alternativa D.</strong>'],
      cuidados: [['Crescer junto não basta', 'A razão precisa ser <strong>constante</strong>; testes com duas linhas da tabela confirmam.'], ['Ordem da razão', 'Mantenha a mesma ordem nas duas razões: preço/quantidade nos dois lados.'], ['Cruzar errado', 'Em ${a|b} = {c|d}$ multiplicamos $a · d$ e $b · c$, não $a · c$.'], ['Unidades diferentes', 'Converta antes (cm e km, horas e minutos).']],
      quiz: [
        { q: 'Se $4$ canetas custam R$ 10, $6$ canetas custam:', o: ['R$ 12', 'R$ 14', 'R$ 15', 'R$ 20'], a: 2 },
        { q: 'No gráfico, a proporcionalidade direta é uma:', o: ['curva', 'reta que passa pela origem', 'reta horizontal', 'parábola'], a: 1 },
        { q: 'Em ${x|12} = {5|20}$, o valor de $x$ é:', o: ['$2$', '$3$', '$4$', '$6$'], a: 1 },
        { q: 'A razão constante entre $y$ e $x$ chama-se:', o: ['produto', 'soma', 'constante de proporcionalidade', 'diferença'], a: 2 }
      ],
      sintese: [['Direta', 'Uma dobra, a outra dobra; razão y÷x constante.'], ['Proporção', 'Produtos em cruz iguais.'], ['Gráfico', 'Reta que passa pela origem.']],
      msg: 'Próxima aula: regra de três simples direta e problemas.'
    },
    // ---------------------------------------------------------------- aula 2
    {
      slug: 'grandezas-diretamente-proporcionais-ii', titulo: 'Grandezas diretamente proporcionais II',
      h1: `Regra de três ${co('growth')}simples e direta</span>`,
      sub: 'A regra de três simples resolve problemas de proporcionalidade direta em quatro passos: organizar, comparar, montar a proporção e resolver.',
      badges: [['regra de três'], ['escala', 'growth'], ['divisão proporcional', 'decay']], color: 'growth',
      roteiro: ['Regra de três e suas aplicações.', [['Organizar', 'tabela com as grandezas', 'book'], ['Montar', 'proporção direta', 'scale'], ['Resolver', 'produtos em cruz', 'chart'], ['Escala', 'mapas e maquetes', 'target'], ['Divisão proporcional', 'repartir em partes', 'coin']]],
      objetivos: ['Resolver problemas com <strong>regra de três simples direta</strong>.', 'Usar <strong>escala</strong> em mapas e maquetes.', 'Fazer <strong>divisões proporcionais</strong> simples.'],
      dica: 'Monte a tabela com <strong>cada grandeza em uma coluna</strong> e as unidades iguais na mesma coluna.',
      gancho: { titulo: 'Consumo do carro', texto: 'Um carro consome <strong>8 litros</strong> de gasolina em <strong>100 km</strong>. Quantos litros ele consome em <strong>250 km</strong>?', mini: ['O consumo em 250 km é:', ['16 L', '18 L', '20 L', '25 L'], 2, 'Distância e litros são diretamente proporcionais: ${8|100} = {x|250}$ ⇒ $x = 20$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · regra de três', 'Quatro passos', g2(`<div>
              ${checks(['<strong>1. Organizar</strong> a tabela: grandeza A e grandeza B.', '<strong>2. Classificar:</strong> se A aumenta, B aumenta? Então é direta.', '<strong>3. Montar</strong> a proporção mantendo a ordem: ${8|100} = {x|250}$.', '<strong>4. Resolver:</strong> $100x = 2000$ ⇒ $x = 20$.'], '.95rem')}
            </div>`, card(`<strong>Modelo de tabela</strong>
              ${tbl(['Litros', 'Distância (km)'], [['$8$', '$100$'], ['$x$', '$250$']])}`, 'primary'))],
        ['Teoria · escala e partes', 'Mapas e divisão proporcional', g2(`<div>
              ${checks(['<strong>Escala</strong> $1 : 50 000$ significa que $1$ cm no mapa é $50 000$ cm $= 500$ m na realidade.', '$4$ cm no mapa ⇒ $4 · 50 000 = 200 000$ cm $= 2$ km.', '<strong>Divisão proporcional:</strong> dividir $120$ em partes proporcionais a $1$ e $3$: soma das partes $= 4$; cada parte vale $30$ ⇒ $30$ e $90$.', 'Em partes proporcionais a $2, 3$ e $5$: soma $= 10$; $120$ vira $24, 36$ e $60$.'], '.95rem')}
            </div>`, callout('Verificação', 'A soma das partes deve voltar ao total: $24 + 36 + 60 = 120$.', 'growth'))]
      ],
      exemplos: [
        ['Regra de três', 'Uma impressora imprime $45$ páginas em $3$ minutos. Quantas páginas em $8$ minutos?', [['Tabela', 'páginas: $45$ e $x$; minutos: $3$ e $8$.'], ['Direta?', 'Mais tempo, mais páginas: sim.'], ['Proporção', '${45|3} = {x|8}$ ⇒ $3x = 360$.'], ['Resolver', '$x = 120$.']], 'Imprime <strong>120 páginas</strong>.'],
        ['Divisão proporcional', 'Dois sócios investiram R$ 3.000 e R$ 5.000 e lucraram R$ 2.400. Quanto cabe a cada um, proporcionalmente?', [['Soma dos investimentos', '$3000 + 5000 = 8000$.'], ['Parte de cada real investido', '$2400 ÷ 8000 = 0,30$ por real.'], ['Valores', '$3000 · 0,3 = 900$ e $5000 · 0,3 = 1500$.']], 'Os lucros são <strong>R$ 900 e R$ 1.500</strong>.']
      ],
      pratique: [
        ['Regra de três', 'Se $5$ kg de arroz custam R$ 30, o preço de $8$ kg é:', ['R$ 40', 'R$ 44', 'R$ 48', 'R$ 52'], 2, '${5|30} = {8|x}$ ⇒ $5x = 240$ ⇒ $x = 48$. <strong>Alternativa C.</strong>'],
        ['Escala', 'Na escala $1 : 100$, uma sala de $5$ m aparece no desenho com:', ['$5$ cm', '$50$ cm', '$0,5$ cm', '$500$ cm'], 0, '$500$ cm $÷ 100 = 5$ cm. <strong>Alternativa A.</strong>'],
        ['Divisão proporcional', 'Dividir $200$ em partes proporcionais a $2$ e $3$ resulta em:', ['$80$ e $120$', '$100$ e $100$', '$60$ e $140$', '$90$ e $110$'], 0, 'Soma das partes $= 5$; cada parte $= 40$ ⇒ $80$ e $120$. <strong>Alternativa A.</strong>']
      ],
      enem: ['O pedreiro e o muro', 'Um pedreiro constrói $12$ m² de muro em $3$ horas. Mantendo o ritmo, em quantas horas ele constrói $20$ m²?', ['$4$ h', '$4$ h $30$ min', '$5$ h', '$5$ h $30$ min', '$6$ h'], 2, '${12|3} = {20|x}$ ⇒ $12x = 60$ ⇒ $x = 5$ h. <strong>Alternativa C.</strong>'],
      cuidados: [['Inverter uma razão', '${8|100} = {250|x}$ está errado: mantenha a ordem (litros/km).'], ['Escala com unidades', 'Converta para a mesma unidade antes de comparar.'], ['Direta ou inversa?', 'Teste: se uma dobra, a outra dobra? Se sim, direta.'], ['Partes que não somam', 'Confira que as partes somam o total.']],
      quiz: [
        { q: 'Se $3$ cadernos custam R$ 27, $5$ cadernos custam:', o: ['R$ 35', 'R$ 40', 'R$ 45', 'R$ 50'], a: 2 },
        { q: 'Escala $1 : 200$: $3$ cm no mapa correspondem a:', o: ['$6$ m', '$60$ m', '$600$ m', '$3$ m'], a: 0 },
        { q: 'Repartir $90$ em partes proporcionais a $1$ e $2$:', o: ['$30$ e $60$', '$45$ e $45$', '$20$ e $70$', '$10$ e $80$'], a: 0 },
        { q: 'Na regra de três direta, as razões são:', o: ['inversas', 'iguais na mesma ordem', 'somadas', 'subtraídas'], a: 1 }
      ],
      sintese: [['Regra de três', 'Organize, classifique, monte e resolva.'], ['Escala', 'Medida no desenho vezes o denominador.'], ['Partes proporcionais', 'Total ÷ soma das partes × cada parte.']],
      msg: 'Próxima aula: grandezas inversamente proporcionais.'
    },
    // ---------------------------------------------------------------- aula 3
    {
      slug: 'grandezas-inversamente-proporcionais-i', titulo: 'Grandezas inversamente proporcionais I',
      h1: `Grandezas ${co('growth')}inversamente proporcionais</span>`,
      sub: 'Duas grandezas são inversamente proporcionais quando, ao dobrar uma, a outra cai pela metade. O que fica constante é o produto entre elas.',
      badges: [['inversa'], ['produto constante', 'growth'], ['hipérbole', 'decay']], color: 'growth',
      roteiro: ['Reconhecer o "dobra e cai pela metade".', [['Situações inversas', 'tempo e velocidade', 'bulb'], ['Produto constante', 'x · y = k', 'scale'], ['Tabela inversa', 'completar', 'chart'], ['Gráfico', 'curva (hipérbole)', 'target'], ['Direta ou inversa?', 'como decidir', 'book']]],
      objetivos: ['Reconhecer grandezas <strong>inversamente proporcionais</strong>.', 'Identificar o <strong>produto constante</strong>.', '<strong>Completar tabelas</strong> inversamente proporcionais.'],
      dica: 'Inversa: <strong>x · y é sempre o mesmo número</strong>. Se $x$ dobra, $y$ cai pela metade.',
      gancho: { titulo: 'A viagem de carro', texto: 'Uma viagem de <strong>120 km</strong> leva <strong>2 h</strong> a <strong>60 km/h</strong>. Se a velocidade dobrar, para <strong>120 km/h</strong>, quanto tempo leva?', mini: ['O tempo com o dobro da velocidade:', ['4 h', '3 h', '1 h', '30 min'], 2, 'Velocidade dobrou ⇒ tempo caiu pela metade: $2 ÷ 2 = 1$ h. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · proporção inversa', 'O produto não muda', g2(`<div>
              ${checks(['Grandezas <strong>inversamente proporcionais</strong>: quando uma aumenta, a outra <strong>diminui na mesma razão</strong>.', 'O produto é constante: $x · y = k$.', 'Exemplo: $120$ km em tempo $t$ e velocidade $v$: $v · t = 120$.', 'Gráfico: <strong>curva</strong> (hipérbole), que não toca os eixos.'], '.95rem')}
            </div>`, card(`<strong>Tabela inversa</strong>
              ${tbl(['Velocidade (km/h)', 'Tempo (h)', 'Produto'], [['$30$', '$4$', '$120$'], ['$60$', '$2$', '$120$'], ['$120$', '$1$', '$120$'], ['$40$', '$3$', '$120$']])}`, 'primary'))],
        ['Teoria · direta ou inversa?', 'Como decidir', g2(`<div>
              ${checks(['<strong>Pergunta-chave:</strong> se uma grandeza <strong>dobra</strong>, o que acontece com a outra?', 'Dobra também ⇒ <strong>direta</strong> (razão constante).', 'Cai pela metade ⇒ <strong>inversa</strong> (produto constante).', 'Exemplos inversos: operários e dias de obra; torneiras e tempo de encher; velocidade e tempo.'], '.95rem')}
            </div>`, callout('Compare as duas', 'Direta: <strong>y = k · x</strong>. Inversa: <strong>y = k ÷ x</strong>.', 'growth'))]
      ],
      exemplos: [
        ['Completando a tabela', 'Uma obra tem 6 operários e leva $20$ dias. Se forem $10$ operários (mesmo ritmo), quantos dias serão?', [['Produto constante', 'operários × dias $= 6 · 20 = 120$.'], ['Novos operários', '$10 · x = 120$.'], ['Resolver', '$x = 12$.']], 'A obra leva <strong>12 dias</strong>.'],
        ['Reconhecendo', 'A tabela $x: 2, 4, 8$ e $y: 12, 6, 3$ é de grandezas inversamente proporcionais?', [['Produtos', '$2 · 12 = 24$; $4 · 6 = 24$; $8 · 3 = 24$.'], ['Conclusão', 'Produto constante.']], 'Sim: <strong>inversamente proporcionais</strong>, com $k = 24$.']
      ],
      widget: { titulo: 'Tabela inversa: o produto fica fixo', html: wd3.html, js: wd3.js },
      pratique: [
        ['Constante', 'Em $x: 3, 6, 9$ e $y: 18, 9, 6$, o produto constante é:', ['$9$', '$18$', '$54$', '$27$'], 2, '$3 · 18 = 54$; $6 · 9 = 54$; $9 · 6 = 54$. <strong>Alternativa C.</strong>'],
        ['Tabela', 'Se $x · y = 40$ e $x = 8$, então $y$ vale:', ['$3$', '$5$', '$32$', '$48$'], 1, '$y = 40 ÷ 8 = 5$. <strong>Alternativa B.</strong>'],
        ['Classificação', 'Qual par é inversamente proporcional?', ['quantidade de pizza e preço', 'número de pedreiros e tempo para terminar a obra', 'altura e peso', 'lados de um quadrado e o seu perímetro'], 1, 'Mais pedreiros, menos tempo. <strong>Alternativa B.</strong>']
      ],
      enem: ['A torneira', 'Duas torneiras iguais enchem um tanque em $6$ horas. Com $3$ torneiras iguais a essas, o tempo para encher o mesmo tanque é:', ['$2$ h', '$3$ h', '$4$ h', '$9$ h', '$12$ h'], 2, 'Torneiras × tempo $= 2 · 6 = 12$; com $3$: $3t = 12$ ⇒ $t = 4$ h. <strong>Alternativa C.</strong>'],
      cuidados: [['Usar a razão em vez do produto', 'Na inversa o que não muda é o <strong>produto</strong>.'], ['Achar que aumentar e diminuir é inversa', 'Precisa ser na <strong>mesma razão</strong> (dobra → metade).'], ['Esquecer a unidade', 'Velocidade em km/h e tempo em horas.'], ['Gráfico em reta', 'Inversa é curva; reta pela origem é direta.']],
      quiz: [
        { q: 'Se a velocidade triplica, o tempo (mesma distância):', o: ['triplica', 'fica ${1|3}$', 'não muda', 'dobra'], a: 1 },
        { q: 'Em grandezas inversamente proporcionais, é constante:', o: ['a soma', 'a diferença', 'o produto', 'a razão'], a: 2 },
        { q: '$x · y = 60$. Se $x = 5$, $y$ vale:', o: ['$10$', '$12$', '$55$', '$65$'], a: 1 },
        { q: 'O gráfico de grandezas inversamente proporcionais é uma:', o: ['reta pela origem', 'reta horizontal', 'curva', 'circunferência'], a: 2 }
      ],
      sintese: [['Inversa', 'Uma dobra, a outra cai pela metade; produto constante.'], ['Gráfico', 'Curva que não toca os eixos.'], ['Decidir', 'Dobra → dobra (direta); dobra → metade (inversa).']],
      msg: 'Próxima aula: regra de três inversa e problemas.'
    },
    // ---------------------------------------------------------------- aula 4
    {
      slug: 'grandezas-inversamente-proporcionais-ii', titulo: 'Grandezas inversamente proporcionais II',
      h1: `Regra de três ${co('growth')}inversa e composta</span>`,
      sub: 'Na regra de três inversa, uma das razões é invertida. Com mais de duas grandezas, a regra de três composta combina razões diretas e inversas.',
      badges: [['inversa'], ['composta', 'growth'], ['problemas', 'decay']], color: 'growth',
      roteiro: ['Trocar a ordem da razão e resolver.', [['Regra de três inversa', 'inverter uma razão', 'scale'], ['Conferir', 'direta ou inversa?', 'target'], ['Composta', 'três grandezas', 'chart'], ['Problemas', 'obras e viagens', 'book'], ['Revisão', 'do trimestre', 'bulb']]],
      objetivos: ['Resolver problemas com <strong>regra de três inversa</strong>.', 'Combinar razões em uma <strong>regra de três composta</strong> simples.', '<strong>Decidir</strong> entre direta e inversa.'],
      dica: 'Na inversa, <strong>inverta</strong> uma das razões antes de igualar, ou use <strong>produto constante</strong>.',
      gancho: { titulo: 'A caixa de bombons', texto: '<strong>12 amigos</strong> dividiram igualmente uma caixa e cada um recebeu <strong>5 bombons</strong>. Se fossem <strong>10 amigos</strong>, quantos bombons cada um receberia?', mini: ['Com 10 amigos, cada um recebe:', ['4', '5', '6', '7'], 2, '$12 · 5 = 60$ bombons; $60 ÷ 10 = 6$. <strong>Alternativa C.</strong>'] },
      teoria: [
        ['Teoria · regra de três inversa', 'Produto constante ou razão invertida', g2(`<div>
              ${checks(['<strong>Produto constante:</strong> $12 · 5 = 10 · x$ ⇒ $x = 6$.', '<strong>Razão invertida:</strong> ${12|10} = {x|5}$ ⇒ $10x = 60$ ⇒ $x = 6$.', 'Em ambos os jeitos, o resultado é o mesmo.', 'Confira: menos amigos ⇒ mais bombons por pessoa ⇒ resultado maior que $5$.'], '.95rem')}
            </div>`, card(`<strong>Modelo</strong>
              ${tbl(['Amigos', 'Bombons cada'], [['$12$', '$5$'], ['$10$', '$x$']])}
              <p class="hint" style="margin-top:6px;">Amigos diminuem ⇒ bombons aumentam (inversa).</p>`, 'primary'))],
        ['Teoria · regra de três composta', 'Três grandezas', g2(`<div>
              ${checks(['Exemplo: $4$ máquinas fazem $200$ peças em $5$ dias. Quantas peças $6$ máquinas fazem em $10$ dias?', 'Peças × máquinas: <strong>direta</strong> (mais máquinas, mais peças). Peças × dias: <strong>direta</strong>.', 'Fator das máquinas: ${6|4} = 1,5$. Fator dos dias: ${10|5} = 2$.', 'Resultado: $200 · 1,5 · 2 = 600$ peças.'], '.95rem')}
            </div>`, callout('Cada razão separada', 'Compare a grandeza da pergunta com <strong>uma de cada vez</strong>: direta mantém a razão; inversa inverte.', 'growth'))]
      ],
      exemplos: [
        ['Operários e dias', '$8$ operários constroem uma casa em $30$ dias. Em quantos dias $12$ operários, no mesmo ritmo, construiriam?', [['Inversa', 'Mais operários, menos dias.'], ['Produto', '$8 · 30 = 240$.'], ['Novos dias', '$12x = 240$ ⇒ $x = 20$.']], 'Constroem em <strong>20 dias</strong>.'],
        ['Regra de três composta', '$3$ torneiras despejam $900$ litros em $2$ horas. Quantos litros $5$ torneiras iguais despejam em $3$ horas?', [['Torneiras', 'Direta: fator ${5|3}$.'], ['Horas', 'Direta: fator ${3|2}$.'], ['Resultado', '$900 · {5|3} · {3|2} = 900 · {15|6} = 2250$.']], 'Despejam <strong>2 250 litros</strong>.']
      ],
      pratique: [
        ['Inversa', '$6$ pedreiros levam $15$ dias em uma obra. Com $9$ pedreiros, levam:', ['$8$ dias', '$10$ dias', '$12$ dias', '$22$ dias'], 1, '$6 · 15 = 90$; $90 ÷ 9 = 10$. <strong>Alternativa B.</strong>'],
        ['Velocidade e tempo', 'A $80$ km/h, uma viagem leva $3$ h. A $60$ km/h, leva:', ['$2$ h', '$3$ h $30$ min', '$4$ h', '$5$ h'], 2, '$80 · 3 = 240$ km; $240 ÷ 60 = 4$ h. <strong>Alternativa C.</strong>'],
        ['Composta', '$2$ máquinas produzem $100$ peças em $4$ dias. $4$ máquinas em $4$ dias produzem:', ['$100$', '$150$', '$200$', '$400$'], 2, 'Dobrou as máquinas, mesmo tempo: dobra as peças. <strong>Alternativa C.</strong>']
      ],
      enem: ['A reforma', 'Para pintar uma casa em $12$ dias, são necessários $5$ pintores. Se o prazo cair para $6$ dias, quantos pintores serão necessários (mesmo ritmo)?', ['$6$', '$8$', '$10$', '$12$', '$15$'], 2, '$5 · 12 = 60$; $6p = 60$ ⇒ $p = 10$. <strong>Alternativa C.</strong>'],
      cuidados: [['Tratar como direta', 'Mais operários, mais dias? Não! Mais operários, <strong>menos</strong> dias.'], ['Resultado fracionário', 'Em problemas de pessoas, arredonde para cima se for preciso cumprir o prazo.'], ['Composta com mistura', 'Se uma é inversa, inverta só a razão dela.'], ['Esquecer de conferir', 'Verifique se o resultado aumentou ou diminuiu no sentido certo.']],
      quiz: [
        { q: '$4$ pessoas limpam um salão em $6$ horas. $8$ pessoas limpam em:', o: ['$12$ h', '$3$ h', '$2$ h', '$24$ h'], a: 1 },
        { q: '$x · y = 36$ e $y = 9$; $x$ vale:', o: ['$4$', '$27$', '$45$', '$324$'], a: 0 },
        { q: 'Mais operários numa obra implica:', o: ['mais dias', 'menos dias', 'mesmo prazo', 'obra maior'], a: 1 },
        { q: 'Na regra de três composta, comparamos a grandeza da pergunta com:', o: ['a soma das outras', 'uma de cada vez', 'apenas a primeira', 'a maior delas'], a: 1 }
      ],
      sintese: [['Inversa', 'Produto constante, ou razão invertida na proporção.'], ['Composta', 'Compare uma grandeza de cada vez e multiplique os fatores.'], ['Conferir', 'O sentido do resultado precisa fazer sentido.']],
      msg: 'Fechamos o 1º trimestre. No 2º, começa a geometria: polígonos, triângulos, quadriláteros e círculo.'
    }
  ]
});
