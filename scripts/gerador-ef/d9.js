// 1ª série — Deck D: Código de Defesa do Consumidor e PROCON (aula 42)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 1ª série · Trimestre 3',
  h1: 'Seus direitos de <span style="color:var(--success);">consumidor</span>: CDC e PROCON',
  sub: 'O que a lei garante quando o produto vem com defeito, a cobrança é abusiva ou a etiqueta esconde o preço — e como reclamar do jeito certo.',
  badges: [['AULA 42'], ['Lei nº 8.078/1990', 'success'], ['consumidor.gov.br', 'primary']],
  color: 'success', curve: 'M40,200 C 200,190 320,150 460,120 C 600,90 740,60 840,36', end: [840, 36]
}));

slides.push(roteiroSlide('Do produto com defeito à reclamação formalizada.', [
  ['O que você faria?', 'compra online errada, loja física, troca e devolução', 'bulb'],
  ['A cobrança da comanda', 'multa por perder a comanda: pode?', 'warn'],
  ['O Código de Defesa do Consumidor', 'a lei 8.078 e os direitos básicos', 'book'],
  ['Preço por quilo na etiqueta', 'regra de três para comparar preços', 'scale'],
  ['O PROCON e o consumidor.gov.br', 'onde reclamar e como checar a reputação da empresa', 'building'],
  ['Deveres do consumidor', 'direitos e deveres andam juntos', 'shield'],
  ['ENEM', 'o "novo consumidor" e a cultura do comércio eletrônico', 'target']
]));

slides.push(objetivosSlide([
  'Conhecer o <strong>Código de Defesa do Consumidor</strong> e seus direitos básicos.',
  'Compreender a atuação do <strong>PROCON</strong> para que o código seja aplicado.',
  'Usar a <strong>matemática</strong> (regra de três) para conferir preços por unidade de medida.',
  'Pesquisar a <strong>reputação das empresas</strong> antes de comprar e saber como reclamar.'
], 'Habilidade do ENEM', 'CH H12 — analisar o papel da justiça como instituição na organização das sociedades. O CDC é um exemplo de lei que equilibra uma relação desigual.', 'success', 'success'));

slides.push(sl('Para início de conversa', 'A compra que não saiu como o anunciado', `
          ${lede('Você compra um item <strong>online</strong>; ao recebê-lo, percebe que ele <strong>não era o anunciado</strong>, ou veio com <strong>defeito</strong>. Você tem direito à troca? E à devolução do valor pago? E se a compra tivesse sido em <strong>loja física</strong>, isso mudaria?')}
          <div class="grid2" style="margin-top:8px;">
            ${card('<strong>Produto com defeito (vício)</strong><p style="font-size:.9rem;margin-top:8px;">O fornecedor tem até <strong>30 dias</strong> para sanar o vício (art. 18). Se não resolver, você escolhe: <strong>troca</strong>, <strong>abatimento do preço</strong> ou <strong>devolução do dinheiro</strong>.</p>')}
            ${card('<strong>Compra fora da loja (online, telefone)</strong><p style="font-size:.9rem;margin-top:8px;">Você pode se <strong>arrepender em até 7 dias</strong> após receber o produto e pedir o dinheiro de volta (art. 49) — sem precisar justificar.</p>', 'success')}
          </div>
          ${mini('Comprou um fone na internet e não gostou. Dentro de quantos dias pode desistir sem justificar?', ['3 dias', '7 dias, contados do recebimento', '30 dias', 'Não pode desistir'], 1, 'Compra feita <strong>fora do estabelecimento</strong> (internet, telefone): arrependimento em <strong>7 dias</strong> (art. 49). Em loja física, a troca por simples arrependimento não é obrigatória por lei (vale a política da loja), mas o defeito é sempre direito seu.')}`, { cls: 'success' }));

slides.push(sl('Aula 42 · caso real', 'A comanda perdida: R$ 200 de multa?', `
          <div class="grid2">
            <div>
              ${lede('A <strong>comanda</strong> registra o consumo de cada cliente em lanchonetes e restaurantes. Alguns estabelecimentos escrevem: <em>"Em caso de perda ou extravio, multa de R$ 200 para liberação."</em> O que você pensa dessa cobrança?')}
              ${vf('"Cobrar R$ 200 pela comanda perdida é uma vantagem excessiva e, portanto, abusiva."', true, 'Verdadeira — o art. 39, V do CDC proíbe "exigir do consumidor vantagem manifestamente excessiva".')}
              ${vf('"O estabelecimento pode me impedir de sair até eu pagar a multa."', false, 'Falsa — constranger ou coagir o consumidor na cobrança é ilegal (art. 71 do CDC, com pena de detenção e multa).')}
            </div>
            <div>
              ${callout('Art. 39, V — CDC', '<em>É vedado ao fornecedor de produtos ou serviços exigir do consumidor vantagem manifestamente excessiva.</em>', 'success')}
              ${callout('Art. 71 — CDC', '<em>Utilizar, na cobrança de dívidas, ameaça, coação, constrangimento físico ou moral, afirmações falsas, incorretas ou enganosas, ou qualquer procedimento que exponha o consumidor a ridículo ou interfira em seu trabalho, descanso ou lazer.</em> Pena: detenção de 3 meses a 1 ano e multa.', 'danger')}
            </div>
          </div>`, { cls: 'success' }));

slides.push(sl('Aula 42 · teoria', 'O Código de Defesa do Consumidor', `
          ${lede('Para regular a relação entre fornecedores e consumidores, a <strong>Lei nº 8.078</strong> foi sancionada em <strong>11 de setembro de 1990</strong>: é o <strong>CDC</strong>.')}
          <p style="font-weight:700;margin:8px 0;">Direitos básicos do consumidor (art. 6º) — clique para marcar os que você já conhecia:</p>
          <div id="dc-box" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(17rem,1fr));gap:8px;"></div>
          <p class="small" id="dc-t" style="margin-top:8px;font-weight:700;"></p>
          ${reveal('Atividade: artigos 13 e 14 e o produto com defeito', '<p>Frase-modelo: "<strong>O fornecedor responde pelos danos causados por produtos ou serviços com defeito e deve repará-los, independentemente de culpa.</strong>"</p>')}`, { cls: 'success' }));

slides.push(sl('Atividade · matemática na etiqueta', 'O preço por quilo está certo?', `
          ${lede('O CDC garante o <strong>direito à informação do preço por unidade de medida</strong> (por quilo, litro, metro). Corrija a etiqueta do <strong>iogurte polpa 510 g — R$ 7,39</strong> com uma regra de três:')}
          <div class="grid2" style="margin-top:8px;">
            <div>
              ${formula('510 g — R$ 7,39<br>1.000 g — x', false)}
              <p class="small">510 · x = 7,39 · 1.000 → <b>x ≈ R$ 14,49 por kg</b></p>
              ${reveal('Etiqueta corrigida', '<div style="border:2px dashed var(--line-strong);border-radius:12px;padding:12px;text-align:center;font-family:\'JetBrains Mono\',monospace;"><b>IOG POLPA 510 g · 2 sabores</b><br><span style="font-size:1.5rem;">R$ 7,39</span><br><b>Preço por kg: R$ 14,49</b></div>')}
            </div>
            <div class="wid">
              <p class="small" style="margin:0 0 6px;"><b>Qual compensa mais?</b></p>
              <div class="row"><div><label>Produto A: preço (R$)</label><input type="number" id="pk-a" value="7.39" step="0.1"></div><div><label>Quantidade (g ou mL)</label><input type="number" id="pk-ag" value="510" step="10"></div></div>
              <div class="row"><div><label>Produto B: preço (R$)</label><input type="number" id="pk-b" value="12.90" step="0.1"></div><div><label>Quantidade (g ou mL)</label><input type="number" id="pk-bg" value="900" step="10"></div></div>
              <p class="small" style="margin:10px 0 0;">A: <b id="pk-ra" class="mono"></b> /kg · B: <b id="pk-rb" class="mono"></b> /kg</p>
              <p id="pk-t" style="margin:4px 0 0;font-weight:700;"></p>
            </div>
          </div>`, { cls: 'success' }));

slides.push(sl('Aula 42 · teoria', 'PROCON: quando o direito não é atendido', `
          ${lede('O <strong>PROCON</strong> é um órgão do governo estadual que existe para <strong>orientar, educar, proteger e defender</strong> os consumidores contra abusos de fornecedores de bens e serviços.')}
          <div class="grid2" style="margin-top:8px;">
            ${card('<strong>Onde reclamar</strong><p style="font-size:.9rem;margin-top:8px;">Pelo site <strong>consumidor.gov.br</strong> (empresas cadastradas) ou, se a empresa não está lá, <strong>pessoalmente no PROCON</strong> ou pelo site do PROCON/PR.</p>', 'success')}
            ${card('<strong>Reputação antes de comprar</strong><p style="font-size:.9rem;margin-top:8px;">A plataforma mostra, por empresa: quantas reclamações recebeu, <strong>% solucionadas</strong>, <strong>satisfação</strong> e <strong>prazo médio</strong> de resposta.</p>')}
          </div>
          <div class="wid" style="margin-top:10px;">
            <p class="small" style="margin:0 0 6px;"><b>Exemplo da aula:</b> uma empresa recebeu <b>3.078</b> reclamações em 2026; <b>86,9%</b> foram solucionadas; satisfação <b>3,3 de 5</b>; prazo médio <b>6,4 dias</b>.</p>
            <div class="row"><div><label>Reclamações</label><input type="number" id="rp-n" value="3078"></div><div><label>% solucionadas</label><input type="number" id="rp-s" value="86.9" step="0.1"></div><div><label>Satisfação (0–5)</label><input type="number" id="rp-q" value="3.3" step="0.1"></div></div>
            <p class="small" style="margin:8px 0 0;">Reclamações resolvidas: <b id="rp-r" class="mono"></b> · não resolvidas: <b id="rp-nr" class="mono"></b> · <span id="rp-j" style="font-weight:700;"></span></p>
          </div>`, { cls: 'success' }));

slides.push(sl('Estudo de caso · Sandra', 'O plano de internet que veio mais caro', `
          <div class="grid2">
            <div>
              ${lede('Sandra contratou internet por <strong>R$ 99,00</strong> por mês, mas o primeiro boleto veio <strong>R$ 129,00</strong>. Conhecendo seus direitos, formalizou uma reclamação no PROCON.')}
              ${stat('+30,3%', 'R$ 129 ÷ R$ 99: cobrança acima do contratado', 'danger')}
            </div>
            <div>
              <div style="display:flex;flex-direction:column;gap:8px;">
                <div class="step-row"><span class="badge">1</span><div><strong>Reunir provas</strong><div class="hint">comprovante de contratação e boletos recebidos</div></div></div>
                <div class="step-row"><span class="badge">2</span><div><strong>Formalizar a reclamação</strong><div class="hint">no PROCON</div></div></div>
                <div class="step-row"><span class="badge">3</span><div><strong>Acordo</strong><div class="hint">o atendente ligou para a empresa; novo boleto emitido</div></div></div>
                <div class="step-row"><span class="badge">4</span><div><strong>Pagar o contratado</strong><div class="hint">Sandra pagou só R$ 99,00</div></div></div>
              </div>
            </div>
          </div>
          ${callout('Atividade', 'Escolha <strong>três empresas de áreas diferentes</strong> (varejo, farmácia, banco...), pesquise a reputação delas no consumidor.gov.br, escreva um resumo como o do exemplo e decida se vale manter relação comercial com cada uma.', 'success')}`, { cls: 'success' }));

slides.push(sl('Aula 42 · teoria', 'O consumidor também tem deveres!', `
          <div class="grid2">
            ${checks(['<strong>Conhecer os termos</strong> do contrato que assina.', '<strong>Conhecer suas condições financeiras</strong> antes de adquirir produto ou serviço.', '<strong>Usar corretamente</strong> o produto, conforme informado pelo fornecedor e pelos manuais.', '<strong>Cumprir o contrato</strong>, inclusive pagando as parcelas no vencimento e respeitando os prazos de troca.', '<strong>Conhecer seus direitos</strong> para usá-los bem e evitar acúmulo de ações na Justiça.'], '.92rem')}
            <div>
              ${callout('Direitos e deveres', 'A relação de consumo funciona quando <strong>os dois lados</strong> cumprem o combinado. Reclamação bem feita — com provas e canal certo — é mais rápida e eficaz.', 'success')}
              ${mini('Qual destes é um DEVER do consumidor?', ['Ler e conhecer os termos do contrato', 'Receber produto grátis sempre', 'Não pagar parcelas atrasadas', 'Ignorar o manual'], 0, 'Ler e <strong>conhecer o contrato</strong> que assina — antes de se comprometer.')}
            </div>
          </div>`, { cls: 'success' }));

slides.push(sl('ENEM · Linguagens', 'O "novo consumidor social"', `
          ${lede('Um texto com diagrama descreve o consumidor que usa canais <strong>online</strong>, lê e escreve <strong>avaliações</strong> e quer dar feedback sobre produtos. Que fator exerce maior influência sobre esse novo comportamento de consumo?')}
          <div class="grid2" style="margin-top:6px;">
            <div>${mini('Alternativas', ['Cultura do comércio eletrônico', 'Busca constante pelo menor preço', 'Divulgação de informações pelas empresas', 'Necessidade recorrente de consumo', 'Postura comum aos consumidores tradicionais'], 0, '<strong>Cultura do comércio eletrônico</strong> (A): o diagrama destaca suporte e recomendações on-line, feedback e avaliações de terceiros — interação digital, não só preço.')}</div>
            <div>${reveal('Por que as outras erram?', '<p><b>B:</b> o foco não é só preço, é a interação on-line. <b>C:</b> a influência maior vem das trocas entre consumidores. <b>D:</b> o texto trata de mudança de comportamento, não de compulsão. <b>E:</b> o comportamento descrito é <em>diferente</em> do modelo tradicional.</p>')}${callout('Da questão para a vida', 'Avaliações e reclamações públicas são poder de consumidor: leia a reputação (consumidor.gov.br, avaliações) <strong>antes</strong> de comprar.', 'success')}</div>
          </div>`, { cls: 'primary' }));

slides.push(sintese([
  ['CDC', 'Lei 8.078/1990: protege contra abusos (multa da comanda, cobrança vexatória) e garante informação clara, inclusive preço por unidade.'],
  ['PROCON', 'Canal público para orientar e defender. Consumidor.gov.br mostra a reputação das empresas; guarde provas.'],
  ['Deveres', 'Conhecer o contrato, saber quanto pode pagar e cumprir o combinado: a boa relação de consumo depende dos dois lados.']
], '"Quem conhece os próprios direitos não paga o que não deve."'));

slides.push(quizSlide([
  { q: 'O Código de Defesa do Consumidor é a lei:', o: ['nº 8.078, de 1990', 'nº 1.000, de 2000', 'nº 5.555, de 1980', 'nº 9.999, de 2020'], a: 0 },
  { q: 'Cobrar multa de R$ 200 por perder a comanda é:', o: ['Permitido sempre', 'Vantagem excessiva, prática abusiva', 'Obrigatório por lei', 'Um direito do consumidor'], a: 1 },
  { q: 'Iogurte de 510 g por R$ 7,39: o preço por quilo é aproximadamente:', o: ['R$ 7,39', 'R$ 14,49', 'R$ 3,77', 'R$ 51,00'], a: 1 },
  { q: 'Onde se pode ver a reputação das empresas e registrar reclamações on-line?', o: ['consumidor.gov.br', 'Só em jornais', 'Apenas em lojas físicas', 'Em nenhum lugar'], a: 0 },
  { q: 'Sandra pagou R$ 129 em vez de R$ 99. O aumento percentual foi de aproximadamente:', o: ['10%', '20%', '30,3%', '50%'], a: 2 }
]));

slides.push(refsSlide([
  'BRASIL. <em>Lei nº 8.078, de 11 de setembro de 1990</em> — Código de Defesa do Consumidor. planalto.gov.br.',
  'SECRETARIA NACIONAL DO CONSUMIDOR. <em>consumidor.gov.br</em> · PROCON-PR: procon.pr.gov.br.',
  'BARROS, Josi Gomes. <em>Educação financeira sustentável — 1ª série EM</em>, 2024 (p. 204).',
  'INEP. <em>Provas do ENEM</em> (Linguagens, Códigos e suas Tecnologias).'
], 'Para continuar', 'Direitos exercidos protegem todo mundo', 'Guarde notas, contratos e conversas. Quando precisar reclamar, comece pelo canal da empresa e, se não resolver, procure o PROCON.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  function brl(v){ return 'R$ ' + v.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
  var DIR = ['Direito à vida, saúde e segurança', 'Direito à educação e liberdade de escolha', 'Direito à igualdade nas contratações', 'Direito à informação clara e adequada', 'Direito à revisão de cláusulas contratuais', 'Direito de acesso à justiça', 'Direito à prestação adequada dos serviços públicos', 'Direito a práticas de crédito responsável e à prevenção do superendividamento', 'Direito à informação do preço por unidade de medida (kg, litro, metro)'];
  var db = $('dc-box'), n = 0;
  DIR.forEach(function(t){ var b = document.createElement('button'); b.type = 'button'; b.className = 'choice'; b.style.margin = '0'; b.textContent = '☐ ' + t; b.addEventListener('click', function(){ if(b.dataset.on){ return; } b.dataset.on = 1; b.classList.add('correct'); b.textContent = '☑ ' + t; n++; $('dc-t').textContent = n + ' de ' + DIR.length + ' direitos revisados' + (n === DIR.length ? ' — você revisou todos!' : ''); }); db.appendChild(b); });
  function pkUp(){ var a = (+$('pk-a').value || 0) / (+$('pk-ag').value || 1) * 1000, b = (+$('pk-b').value || 0) / (+$('pk-bg').value || 1) * 1000;
    $('pk-ra').textContent = brl(a); $('pk-rb').textContent = brl(b); var t = $('pk-t'); if(Math.abs(a - b) < 0.005){ t.textContent = 'Empate: mesmo preço por quilo.'; } else if(a < b){ t.textContent = 'O produto A é mais barato por quilo (' + brl(b - a) + ' a menos).'; t.style.color = 'var(--success)'; } else { t.textContent = 'O produto B é mais barato por quilo (' + brl(a - b) + ' a menos).'; t.style.color = 'var(--success)'; } }
  ['pk-a','pk-ag','pk-b','pk-bg'].forEach(function(i){ $(i).addEventListener('input', pkUp); }); pkUp();
  function rpUp(){ var n = +$('rp-n').value || 0, s = (+$('rp-s').value || 0) / 100, q = +$('rp-q').value || 0; $('rp-r').textContent = Math.round(n * s).toLocaleString('pt-BR'); $('rp-nr').textContent = Math.round(n * (1 - s)).toLocaleString('pt-BR');
    var j = $('rp-j'); if(s >= .85 && q >= 3){ j.textContent = 'Reputação razoável: resolve a maioria, satisfação mediana.'; j.style.color = 'var(--success)'; } else if(s >= .7){ j.textContent = 'Reputação mediana: pesquise mais antes de contratar.'; j.style.color = 'var(--growth)'; } else { j.textContent = 'Atenção: muitas reclamações sem solução.'; j.style.color = 'var(--danger)'; } }
  ['rp-n','rp-s','rp-q'].forEach(function(i){ $(i).addEventListener('input', rpUp); }); rpUp();
`;

module.exports = { title: 'Código de Defesa do Consumidor e PROCON', brand: 'Direitos do Consumidor', aulas: 'Aula 42', serie: '1ª Série', key: 'cdc', slides, extra, out: 'educacao-financeira/1-ano/3-tri/direitos-do-consumidor/aula.html' };
