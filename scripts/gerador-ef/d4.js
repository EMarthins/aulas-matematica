// Deck 4 — Apostas, bets e cassino (aulas 35, 42, 47)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 2ª série · Trimestre 3',
  h1: 'A ilusão do <span style="color:var(--danger);">dinheiro fácil</span>',
  sub: 'Como funcionam as bets e o "jogo do Tigrinho", a matemática escondida por trás das apostas e por que a única forma garantida de ganhar é não jogar.',
  badges: [['AULAS 35, 42, 47'], ['RTP: quem sempre lucra?', 'danger'], ['R$ 62,5 bi perdidos em 2025', 'danger']],
  color: 'danger', curve: 'M40,40 C 160,50 260,120 400,150 C 560,182 700,150 840,70', end: [840, 70]
}));

slides.push(roteiroSlide('Sete paradas para enxergar a matemática e a psicologia por trás das apostas on-line.', [
  ['Promessa x realidade', 'por que as bets investem bilhões em publicidade', 'phone'],
  ['O impacto em números', 'dívidas, cortes na alimentação, faculdade adiada', 'chart'],
  ['O mecanismo da aposta e o RTP', 'o "lucro da casa" calculado com números reais', 'coin'],
  ['Por que é tão difícil parar', 'dopamina, ilusão de controle e o ciclo das perdas', 'bulb'],
  ['Sinais de alerta e onde buscar ajuda', 'o que fazer e a quem recorrer', 'shield'],
  ['A matemática do caça-níquel e do Tigrinho', 'combinações, chances reais e o papel dos influenciadores', 'dice'],
  ['O verdadeiro jeito de ficar rico', 'investir com constância, sem depender de sorte', 'up']
]));

slides.push(objetivosSlide([
  '<strong>Identificar os riscos</strong> dos jogos de aposta on-line (bets, cassinos virtuais, "Tigrinho").',
  'Compreender o <strong>mecanismo da aposta</strong> e o <strong>RTP</strong>: por que a casa sempre lucra.',
  'Reconhecer a <strong>psicologia do vício</strong> e os sinais de alerta — e saber onde buscar ajuda.',
  'Entender que <strong>aposta não é investimento</strong> e quais são as alternativas reais.'
], 'Por que isso importa agora', 'Aproximadamente <strong>12,8 milhões de brasileiros</strong> estão em situação de risco pelo vício em apostas, e 2026 — ano de Copa do Mundo — tende a intensificar a publicidade e o consumo desses jogos.', 'danger', 'danger'));

slides.push(sl('Aula 42 · gancho', 'Por que os anúncios de apostas estão em todo lugar?', `
          <div class="grid2">
            <div>
              ${lede('Quem já viu um anúncio de aposta on-line ou um influenciador divulgando o jogo do Tigrinho? Se uma plataforma garante dinheiro fácil, <strong>por que investe bilhões em publicidade todo ano?</strong>')}
              ${tbl(['promessa do marketing', 'realidade do negócio'], [['Ganho rápido e fácil', 'Lucro estatístico da casa'], ['"Sem risco" para o usuário', 'Bilhões investidos em publicidade'], ['Entretenimento / renda', 'Retenção e depósitos constantes']])}
            </div>
            <div>
              ${stat('R$ 1,1 bi', 'destinados pelas casas de apostas aos clubes da Série A em 2025', 'danger')}
              ${reveal('A aposta entrou em campo', '<p>Camisas, placas, transmissões e intervalos: em 2025, a <strong>maioria dos clubes da Série A</strong> teve uma casa de aposta como patrocinadora master. Os clubes recebem recursos; as empresas ganham espaço na rotina da torcida.</p><p class="hint">Quando a publicidade acompanha o esporte o tempo todo, apostar passa a parecer parte natural e inofensiva do jogo. Esse anúncio foi feito para você torcer — ou para você apostar?</p>')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 35 · dados reais', 'O impacto em números', `
          <div class="grid4">
            ${stat('R$ 62,5 bi', 'perdidos pelos brasileiros só em 2025', 'danger')}
            ${stat('7,5 milhões', 'de brasileiros endividados por apostas', 'danger')}
            ${stat('60%', 'dos apostadores cortam itens básicos de alimentação', 'danger')}
            ${stat('34%', 'dos jovens (quase 1 milhão) adiaram ou desistiram da faculdade', 'danger')}
          </div>
          ${callout('O resultado das apostas', 'Pressionados pelas dívidas, muitos esgotam cartões de crédito (inclusive de terceiros), vendem bens e recorrem a agiotas, impulsionados pela falsa ilusão de recuperar o dinheiro perdido. É comum pedir empréstimo a amigos e familiares para continuar jogando.', 'danger')}
          ${reveal('Para refletir', '<p>Você conhece alguém que vive essa realidade? Considerando que 7,5 milhões de brasileiros enfrentam dívidas provocadas por apostas, <strong>vale a pena iniciar ou persistir nesse hábito?</strong></p>')}`, { cls: 'danger' }));

slides.push(sl('Aula 42 · teoria', 'O mecanismo da aposta', `
          <div class="callout danger"><h4>A regra é clara</h4><p>"Bet" é "aposta" em inglês. Em toda aposta, <strong>alguém precisa perder</strong> para que o outro ganhe. O mecanismo é simples, mas cruel: muitos perdem para alguém ganhar — e as perdas são enormes.</p></div>
          <div class="grid2" style="margin-top:12px;">
            ${cardT('Como funciona uma bet?', 'É uma espécie de "casa de apostas" virtual na qual os usuários tentam adivinhar resultados de eventos esportivos. Quem acerta o palpite ganha o dinheiro de quem errou.')}
            ${card(`<strong>Vamos refletir</strong><p style="margin-top:8px;font-size:.92rem;">Se o dinheiro só passa de quem errou para quem acertou, <strong>por que as plataformas são milionárias?</strong></p>${reveal('Ver a resposta', '<p>Porque nem todo o dinheiro apostado volta aos jogadores: uma <strong>parte fica retida pela plataforma</strong> antes de qualquer prêmio. É aí que entra o RTP.</p>')}`)}
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 42 · atividade 1 · RTP', 'O RTP: o lucro da casa', `
          ${lede('<strong>RTP (Return to Player)</strong> é o percentual do dinheiro apostado que <strong>volta</strong> aos jogadores. O restante fica com a plataforma — em bets, Tigrinho ou Aviãozinho. Nem toda plataforma informa o RTP. Calcule:')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <div class="row"><div><label>Apostadores</label><input type="number" id="rt-n" value="20000" step="1000"></div><div><label>Aposta de cada (R$)</label><input type="number" id="rt-a" value="5" step="1"></div></div>
              <div class="row"><div><label>RTP (%)</label><input type="number" id="rt-r" value="85" min="0" max="100"></div><div><label>Vencedores</label><input type="number" id="rt-v" value="8000" step="500"></div></div>
            </div>
            <div class="wid">
              <p class="small" style="margin:0;">Faturamento</p><div class="out" id="rt-f" style="color:var(--ink);">R$ 100.000,00</div>
              <p class="small" style="margin:6px 0 0;">Devolvido aos apostadores</p><div class="out" id="rt-d">R$ 85.000,00</div>
              <p class="small" style="margin:6px 0 0;">Cada vencedor recebe</p><div class="out" id="rt-p" style="color:var(--success);">R$ 10,63</div>
              <p class="small" style="margin:6px 0 0;">Lucro da plataforma</p><div class="out" id="rt-l" style="color:var(--danger);font-size:1.5rem;">R$ 15.000,00</div>
            </div>
          </div>
          ${callout('Conclusão', 'Cada vencedor ganhou cerca de <strong>R$ 10,63</strong> — e a plataforma lucrou <strong>R$ 15.000</strong>. A plataforma lucrou muito mais que qualquer apostador. E repare: a maioria (12 mil pessoas) perdeu tudo.', 'danger')}`, { cls: 'danger' }));

slides.push(sl('Aula 35 · psicologia', 'O jogo é projetado para fazer você viciar', `
          ${lede('Cada pixel e cada "bipe" é testado em laboratório para <strong>maximizar a liberação de dopamina</strong> e forçar o ciclo do vício. Por que é tão difícil parar?')}
          <div class="grid3">
            ${card('<strong>Pequenas vitórias</strong><p style="font-size:.86rem;margin-top:8px;">A tela pisca e toca a música da vitória mesmo quando você ganha R$ 2 apostando R$ 5. O cérebro registra como vitória e <strong>mascara a perda real</strong>.</p>', 'danger')}
            ${card('<strong>Cores quentes e sons agudos</strong><p style="font-size:.86rem;margin-top:8px;">Elevam a frequência cardíaca e induzem um estado de transe: você perde a noção do tempo e do dinheiro gasto.</p>', 'growth')}
            ${card('<strong>Facilidade para continuar</strong><p style="font-size:.86rem;margin-top:8px;">É fácil fazer um Pix ou "passar o cartão". Como o dinheiro não passa pela sua mão, é mais difícil perceber quanto gasta.</p>', 'decay')}
          </div>
          ${callout('Por que começam a jogar?', 'A intensa publicidade na TV e nas redes <strong>normaliza as apostas</strong>, associando-as falsamente a luxo e sucesso financeiro. A realidade não é apresentada nessas mídias.')}`, { cls: 'danger' }));

slides.push(sl('Aula 42 · psicologia', 'Dopamina, ilusão de controle e "bater na trave"', `
          <div class="grid2">
            <div>
              ${checks(['<strong>Dopamina:</strong> o prazer vem da expectativa, não só de ganhar; para sentir o mesmo, são precisas apostas maiores.', '<strong>Ilusão de controle:</strong> uma vitória pontual gera a falsa sensação de ter "descoberto um padrão".', '<strong>Bater na trave:</strong> o cérebro libera a mesma carga química de uma vitória real e se convence de que a próxima é garantida.', '<strong>Recuperar o prejuízo:</strong> o cérebro odeia perder e empurra para apostas maiores e mais arriscadas.'], '.9rem')}
            </div>
            <div>
              <p style="font-weight:700;margin:0 0 8px;">"O tio do meu amigo joga todo dia, não é viciado e nunca perde: pegou a manha do jogo!" Marque V ou F:</p>
              ${vf('"É possível que alguém ganhe sempre, só pela habilidade."', false, 'Falsa — nos jogos de azar o resultado é ditado por um algoritmo e pelas probabilidades; os "sempre ganha" são exceções que viram propaganda.')}
              ${vf('"Quem acredita na exceção ignora a regra: quase todo mundo perde no longo prazo."', true, 'Verdadeira — “comigo não vai acontecer”, “eu tenho autocontrole”, “vou recuperar tudo” são o caminho perfeito para o vício.')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Simulador · só para enxergar a matemática', 'A banca nunca perde: 100 rodadas', `
          ${lede('Simulação <strong>fictícia</strong> (sem dinheiro real): você começa com <strong>R$ 200</strong> e aposta <strong>R$ 5</strong> por rodada. O jogo "devolve" em média o RTP escolhido, mas de forma irregular. Clique e veja o saldo:')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>RTP do jogo: <b id="sm-r">85</b>%</label><input type="range" id="sm-ri" min="70" max="98" value="85">
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;">
                <button class="reveal" id="sm-1" style="margin:0;">Jogar 1 rodada</button>
                <button class="reveal" id="sm-10" style="margin:0;">Jogar 10</button>
                <button class="reveal" id="sm-50" style="margin:0;">Jogar 50</button>
                <button class="reveal" id="sm-0" style="margin:0;">Zerar</button>
              </div>
              <p class="small" style="margin:12px 0 0;">Saldo</p><div class="out" id="sm-s" style="font-size:1.8rem;">R$ 200,00</div>
              <p class="small" id="sm-t" style="margin:4px 0 0;">Rodadas: 0 · apostado: R$ 0 · devolvido: R$ 0</p>
            </div>
            <div class="wid" style="padding:8px;"><svg id="sm-svg" viewBox="0 0 400 220" style="width:100%;height:auto;display:block;"></svg></div>
          </div>
          <p class="hint" style="margin-top:6px;">Mesmo com RTP de 98%, no longo prazo o saldo tende a cair: a casa só precisa de uma <strong>pequena vantagem</strong> repetida milhares de vezes.</p>`, { cls: 'danger' }));

slides.push(sl('Aula 42 · atividades 2 e 3', 'O ciclo das perdas', `
          <div class="grid2">
            <div>
              ${card('<strong>Atividade 2 — Pequenos ganhos</strong><p style="font-size:.9rem;margin-top:6px;">Antônio apostou R$ 5 e ganhou ≈ R$ 10. No jogo seguinte apostou os R$ 10 e perdeu. "Fiquei tranquilo: apostei só o dinheiro do jogo — <strong>zero prejuízo!</strong>" Ele realmente não teve prejuízo?</p>')}
              ${reveal('Resposta', '<p>Teve: os R$ 5 do <strong>dinheiro dele</strong> foram perdidos (ele começou com R$ 5 e terminou com R$ 0). O "dinheiro do jogo" <strong>já era dele</strong>. Repetindo o comportamento, o prejuízo se acumula.</p>')}
            </div>
            <div>
              <div style="display:flex;flex-direction:column;gap:8px;">
                <div class="step-row"><span class="badge">1</span><div><strong>Pequena perda</strong><div class="hint">desconforto e desejo de recuperar</div></div></div>
                <div class="step-row"><span class="badge">2</span><div><strong>Aposta maior</strong><div class="hint">valores arriscados para voltar ao zero</div></div></div>
                <div class="step-row"><span class="badge">3</span><div><strong>Endividamento</strong><div class="hint">cartões, empréstimos ou dinheiro de terceiros</div></div></div>
                <div class="step-row"><span class="badge">4</span><div><strong>Arrependimento</strong><div class="hint">saúde mental e financeira comprometidas</div></div></div>
              </div>
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 35 · sinais de alerta', 'Fique atento — e saiba onde buscar ajuda', `
          <div class="grid2">
            <div>
              <p style="font-weight:700;margin:0 0 8px;">Sinais de alerta</p>
              <ul class="plain">${['Dificuldade de parar mesmo com perdas.', 'Esconder apostas de familiares.', 'Cancelar compromissos pessoais ou profissionais para jogar.', 'Gastar mais dinheiro do que pode.', 'Buscar no jogo uma fuga dos problemas do dia a dia.'].map(t => `<li>${ic('warn', 'warn', 18)}<span style="font-size:.9rem;">${t}</span></li>`).join('')}</ul>
              <p class="hint" style="margin-top:8px;">Costumam vir com irritabilidade, insônia e ansiedade; muitos buscam isolamento para jogar sem serem julgados.</p>
            </div>
            <div>
              ${callout('Ajuda profissional gratuita', '<strong>Jogadores Anônimos</strong>: reuniões presenciais ou virtuais (jogadoresanonimos.com.br).<br><strong>UBS e CAPS</strong> ou o app <strong>Meu SUS Digital</strong>: orientação e tratamento da compulsão por jogos.<br><strong>CVV — ligue 188</strong>: casos extremos, 24 horas.', 'success')}
              <p class="hint">Se você conhece alguém passando por isso, essa pessoa precisa de ajuda — e pode encontrá-la.</p>
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 47 · dados', 'Jovens, noite e a curiosidade que começa cedo', `
          <div class="grid3">
            ${stat('11%', 'dos jovens de 10 a 17 anos relataram apostas on-line em 2025 (é proibido para menores de 18)', 'danger')}
            ${stat('20%', 'entre os meninos de 16 e 17 anos', 'danger')}
            ${stat('38%', 'das transações ocorrem entre 18h e 23h, no fim do dia, com o celular na mão', 'danger')}
          </div>
          ${callout('A curiosidade é a porta de entrada', 'A <strong>curiosidade</strong> foi o motivo mais citado pelos jovens ouvidos na pesquisa. A publicidade também está lá: no fim do dia, o celular continua na mão e a aposta fica mais presente.', 'danger')}
          ${mini('Apostas on-line são permitidas para quem tem:', ['A partir de 12 anos', 'A partir de 16 anos', 'Somente 18 anos ou mais', 'Qualquer idade, com autorização dos pais'], 2, 'São proibidas para <strong>menores de 18 anos</strong> — mesmo assim, muitos jovens relatam apostar. Isso é um alerta, não uma permissão.')}`, { cls: 'danger' }));

slides.push(sl('Aula 47 · a matemática do caça-níquel', 'Por trás da tela: as chances reais', `
          ${lede('Em um jogo "honesto" com <strong>3 rolos</strong> e <strong>12 símbolos</strong>, uma linha de pagamento tem 12 × 12 × 12 = <strong>1.728</strong> resultados possíveis. Com um único "7" em cada rolo, a chance de três 7s é 1 em 1.728. Experimente outros números:')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Rolos: <b id="ca-r">3</b></label><input type="range" id="ca-ri" min="2" max="6" value="3">
              <label>Símbolos por rolo: <b id="ca-s">12</b></label><input type="range" id="ca-si" min="4" max="20" value="12">
            </div>
            <div class="wid">
              <p class="small" style="margin:0;">Combinações possíveis</p><div class="out" id="ca-c" style="font-size:1.6rem;">1.728</div>
              <p class="small" style="margin:6px 0 0;">Chance de ganhar o prêmio máximo</p><div class="out" id="ca-g" style="color:var(--success);">0,0579%</div>
              <p class="small" style="margin:6px 0 0;">Chance de perder</p><div class="out" id="ca-p" style="color:var(--danger);">99,9421%</div>
            </div>
          </div>
          ${callout('Pequenos ganhos mantêm você na tela', 'O jogo oferece pequenos prêmios (uma combinação de 3 símbolos iguais pode render R$ 4) só para o jogador <strong>continuar tentando</strong>, acreditando que vai recuperar o que perdeu.', 'danger')}`, { cls: 'danger' }));

slides.push(sl('Aula 47 · atividade', 'A máquina que paga depois de todas as perdas', `
          ${lede('Uma máquina com <strong>5 rolos de 15 figuras</strong> paga <strong>R$ 500 mil</strong> no prêmio máximo, numa jogada que custa <strong>R$ 1</strong>. Ela foi iniciada agora, não repete jogadas e está programada para pagar o prêmio só depois de esgotadas todas as jogadas sem prêmio. Quanto uma pessoa que sabe disso gasta até receber? Valeu a pena?')}
          ${reveal('Resolução', `<p>15 símbolos em 5 rolos: 15<sup>5</sup> = 15 × 15 × 15 × 15 × 15 = <strong>759.375</strong> combinações.</p>
            <p>Ela perde em <strong>759.374</strong> jogadas antes de receber o prêmio: gasta <strong>R$ 759.374</strong> para receber R$ 500.000 → prejuízo de <strong>R$ 259.374</strong>.</p>
            <p class="hint">Mesmo sabendo da programação perfeita, não vale a pena. Lembre-se: para pagar o prêmio é preciso ter dinheiro na máquina, e esse dinheiro saiu do bolso de alguém.</p>`)}
          ${mini('Quantas combinações tem uma máquina de 4 rolos com 10 símbolos?', ['40', '1.000', '10.000', '100.000'], 2, '10 × 10 × 10 × 10 = 10<sup>4</sup> = <strong>10.000</strong> combinações.')}`, { cls: 'danger' }));

slides.push(sl('Aula 47 · algoritmo e influenciadores', 'O algoritmo do Tigrinho e o papel dos influenciadores', `
          <div class="grid2">
            <div>
              ${card('<strong>O algoritmo</strong><p style="font-size:.9rem;margin-top:8px;">O Tigrinho é semelhante a uma máquina de rolos, mas é <strong>software</strong>: pode ser reprogramado a qualquer momento para controlar resultados. <strong>Não há auditoria externa</strong> do algoritmo, o que compromete a transparência.</p>', 'danger')}
              <p style="font-size:.88rem;margin-top:10px;">Quando há ganho, a plataforma nem sempre libera de imediato, o que retém o usuário por dias (jogando e perdendo o prêmio).</p>
            </div>
            <div>
              ${card('<strong>"Mas eu vi a pessoa ganhando e ostentando!"</strong><p style="font-size:.9rem;margin-top:8px;">Muitos divulgam links usando <strong>versões de demonstração</strong>, que pagam muito. Quanto mais seguidores entram pelo link, mais eles lucram: <strong>ganham uma porcentagem do que os jogadores depositam</strong> — lucram com as perdas do público.</p>')}
              ${reveal('Pergunta para a turma', '<p>Se alguém conhecesse uma maneira de ganhar sempre, <strong>venderia esse conhecimento na internet</strong> ou ficaria rico usando-o sozinho?</p>')}
            </div>
          </div>`, { cls: 'danger' }));

slides.push(sl('Aula 47 · o verdadeiro caminho', 'Aposta não é investimento', `
          <div class="grid2">
            ${card('<strong style="color:var(--danger);">Aposta</strong><p style="font-size:.9rem;margin-top:8px;">Baseada no acaso, sem retorno garantido, risco altíssimo. Causa dependência, ansiedade e dívidas. Brasileiros apostam em média <strong>R$ 164 por mês</strong> — e há mais apostadores que investidores.</p>', 'danger')}
            ${card('<strong style="color:var(--success);">Investimento</strong><p style="font-size:.9rem;margin-top:8px;">Tem <strong>lastro, juros</strong> e possibilidade de rentabilidade sustentada. O resultado depende de disciplina, não de sorte.</p>', 'success')}
          </div>
          <div class="wid" style="margin-top:12px;">
            <div class="row">
              <div><label>Valor mensal (R$): <b id="iv-a">164</b></label><input type="range" id="iv-ai" min="50" max="400" step="10" value="164"></div>
              <div><label>Anos: <b id="iv-t">10</b></label><input type="range" id="iv-ti" min="1" max="30" value="10"></div>
            </div>
            <p class="small" style="margin:10px 0 0;">Se esse dinheiro fosse investido a 1% ao mês: <span class="out" id="iv-f">R$ 36.806,19</span></p>
            <p class="hint">Referência da aula: R$ 100/mês por 10 anos = R$ 23.003,87; por 20 anos = R$ 98.925,54; R$ 200/mês por 20 anos = R$ 197.851,07 (1% ao mês).</p>
          </div>
          ${callout('O segredo', 'Manter o hábito de investir: o resultado vem <strong>sem depender de sorte ou do acaso</strong>.', 'success')}`, { cls: 'success' }));

slides.push(sl('Aula 35 · agora é a sua vez', 'Crie sua campanha de alerta', `
          ${lede('Com base no que aprendemos, crie uma <strong>imagem acompanhada de uma frase</strong> para conscientizar sobre o risco das apostas on-line. Em duplas ou trios, use imagens, vídeos ou outro meio.')}
          <div class="grid2" style="margin-top:8px;">
            <div class="wid">
              <label>Sua frase de impacto</label>
              <input type="text" id="cp-t" value="A casa sempre ganha. Você, não." maxlength="70" style="font:inherit;width:100%;padding:.5em .7em;border-radius:10px;border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);">
              <label>Cor do cartaz</label>
              <div style="display:flex;gap:8px;" id="cp-cols"></div>
            </div>
            <div id="cp-card" style="border-radius:18px;padding:22px;min-height:150px;display:flex;align-items:center;justify-content:center;text-align:center;color:#fff;background:#C23B3B;font-family:'Archivo',sans-serif;font-weight:900;font-size:1.5rem;line-height:1.15;box-shadow:0 14px 30px -14px var(--shadow);">A casa sempre ganha. Você, não.</div>
          </div>
          <p class="hint" style="margin-top:8px;">Compartilhe com a turma. Converse sobre este tema com seus familiares!</p>`, { cls: 'danger' }));

slides.push(sintese([
  ['RTP', 'Parte do dinheiro apostado fica sempre com a plataforma: a matemática da aposta nunca é só do jogador.'],
  ['Psicologia', 'Dopamina, pequenas vitórias e ilusão de controle são usadas de propósito para manter você jogando.'],
  ['Consequência', 'O ciclo das perdas leva ao endividamento e compromete a saúde mental e financeira. Há ajuda: CVV 188.']
], '"A única forma garantida de ganhar nas bets é não jogando."'));

slides.push(quizSlide([
  { q: 'O que é RTP?', o: ['O valor mínimo para apostar', 'O percentual do valor apostado que a plataforma devolve aos jogadores', 'O imposto do apostador', 'O tempo de uma partida'], a: 1 },
  { q: '20.000 apostas de R$ 5 e RTP de 85%. Quanto a plataforma lucra?', o: ['R$ 85.000', 'R$ 100.000', 'R$ 15.000', 'R$ 5.000'], a: 2 },
  { q: 'Quantas combinações tem uma máquina de 3 rolos com 12 símbolos cada?', o: ['36', '144', '1.728', '12.000'], a: 2 },
  { q: 'Por que é tão difícil parar de apostar?', o: ['O cérebro libera dopamina e cria ilusão de controle', 'É obrigatório continuar', 'As regras mudam a cada rodada', 'O app não deixa fechar a conta'], a: 0 },
  { q: 'Qual é a forma garantida de "ganhar" nas bets?', o: ['Apostar valores pequenos', 'Seguir influenciadores', 'Não apostar', 'Estudar padrões do jogo'], a: 2 }
]));

slides.push(refsSlide([
  'NUNES MACIEL, D. T. G.; AZEVEDO JUNIOR, W. C. de. <em>Educação econômica preventiva: materiais didáticos sobre apostas (bets), cartão de crédito e cidadania fiscal</em>. Zenodo, 2026. doi.org/10.5281/zenodo.21518009.',
  'PARANÁ. Secretaria de Estado da Educação. <em>Orientação n.º 011/2023 — DEDUC/SEED</em> (Direitos Humanos).',
  'Jogadores Anônimos: jogadoresanonimos.com.br · Centro de Valorização da Vida (CVV): <strong>188</strong>, 24 horas.',
  'Dados citados nas aulas: pesquisas e reportagens sobre apostas on-line no Brasil (2025–2026).'
], 'Para continuar', 'Converse com sua família sobre este tema', 'Leve essa conversa para casa. Entender a matemática e a psicologia das apostas é o primeiro passo para proteger o seu dinheiro — e o seu futuro. Se precisar de ajuda, ligue 188.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  // RTP
  function rtUp(){
    var n = +$('rt-n').value || 0, a = +$('rt-a').value || 0, r = (+$('rt-r').value || 0) / 100, v = +$('rt-v').value || 0;
    var f = n * a, d = f * r; $('rt-f').textContent = brl(f); $('rt-d').textContent = brl(d); $('rt-p').textContent = v > 0 ? brl(d / v) : '—'; $('rt-l').textContent = brl(f - d);
  }
  ['rt-n','rt-a','rt-r','rt-v'].forEach(function(id){ $(id).addEventListener('input', rtUp); }); rtUp();
  // simulador
  var bal = 200, rounds = 0, bet = 0, ret = 0, hist = [200];
  function smDraw(){
    var W = 400, H = 220, pad = 20, n = Math.max(hist.length - 1, 50), mx = Math.max(200, Math.max.apply(null, hist)) * 1.05;
    var d = hist.map(function(v, k){ return (pad + (W - 2*pad) * k / n).toFixed(1) + ',' + (H - pad - (H - 2*pad) * v / mx).toFixed(1); }).join(' ');
    var y0 = (H - pad - (H - 2*pad) * 200 / mx).toFixed(1);
    $('sm-svg').innerHTML = '<line x1="'+pad+'" y1="'+(H-pad)+'" x2="'+(W-pad)+'" y2="'+(H-pad)+'" stroke="var(--line-strong)" stroke-width="2"/><line x1="'+pad+'" y1="'+y0+'" x2="'+(W-pad)+'" y2="'+y0+'" stroke="var(--ink-faint)" stroke-dasharray="4 4"/><polyline fill="none" stroke="var(--danger)" stroke-width="3" points="'+d+'"/><text x="'+(W-pad)+'" y="'+(+y0-4)+'" font-size="10" text-anchor="end" fill="var(--ink-faint)">R$ 200 (início)</text>';
    $('sm-s').textContent = brl(bal); $('sm-t').textContent = 'Rodadas: ' + rounds + ' · apostado: ' + brl(bet) + ' · devolvido: ' + brl(ret) + (bet ? ' (' + (ret / bet * 100).toFixed(0) + '%)' : '');
  }
  function play(k){
    var rtp = +$('sm-ri').value / 100;
    for(var i = 0; i < k; i++){
      if(bal < 5){ break; }
      bal -= 5; bet += 5; rounds++;
      var p = 0.25; if(Math.random() < p){ var pay = 5 * rtp / p; bal += pay; ret += pay; }
      hist.push(bal);
    }
    smDraw();
  }
  $('sm-ri').addEventListener('input', function(){ $('sm-r').textContent = this.value; });
  $('sm-1').addEventListener('click', function(){ play(1); }); $('sm-10').addEventListener('click', function(){ play(10); }); $('sm-50').addEventListener('click', function(){ play(50); });
  $('sm-0').addEventListener('click', function(){ bal = 200; rounds = 0; bet = 0; ret = 0; hist = [200]; smDraw(); });
  smDraw();
  // caça-níquel
  function caUp(){
    var r = +$('ca-ri').value, s = +$('ca-si').value; $('ca-r').textContent = r; $('ca-s').textContent = s;
    var c = Math.pow(s, r); $('ca-c').textContent = c.toLocaleString('pt-BR');
    var g = 100 / c; $('ca-g').textContent = g.toLocaleString('pt-BR',{maximumFractionDigits: g < 0.01 ? 6 : 4}) + '%';
    $('ca-p').textContent = (100 - g).toLocaleString('pt-BR',{maximumFractionDigits: g < 0.01 ? 6 : 4}) + '%';
  }
  ['ca-ri','ca-si'].forEach(function(id){ $(id).addEventListener('input', caUp); }); caUp();
  // investir x apostar
  function ivUp(){
    var a = +$('iv-ai').value, t = +$('iv-ti').value; $('iv-a').textContent = a; $('iv-t').textContent = t;
    var i = 0.01, n = t * 12, f = a * (Math.pow(1 + i, n) - 1) / i; $('iv-f').textContent = brl(f);
  }
  ['iv-ai','iv-ti'].forEach(function(id){ $(id).addEventListener('input', ivUp); }); ivUp();
  // campanha
  var cols = ['#C23B3B', '#382EAE', '#0B7C82', '#D9531A', '#14162B'], cb = $('cp-cols');
  cols.forEach(function(c, k){ var b = document.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', 'cor ' + (k+1)); b.style.cssText = 'width:34px;height:34px;border-radius:50%;border:3px solid var(--surface);outline:2px solid var(--line-strong);background:' + c + ';cursor:pointer;'; b.addEventListener('click', function(){ $('cp-card').style.background = c; }); cb.appendChild(b); });
  $('cp-t').addEventListener('input', function(){ $('cp-card').textContent = this.value || ' '; });
`;

module.exports = { title: 'Apostas, Bets e Cassino: a Ilusão do Dinheiro Fácil', brand: 'Apostas, Bets e Cassino', aulas: 'Aulas 35, 42, 47', key: 'apostas', slides, extra, out: 'educacao-financeira/2-ano/3-tri/apostas-bets-cassino/aula.html' };
