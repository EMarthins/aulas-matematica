// 1ª série — Deck G: perfil empreendedor (aula 48)
const L = require('./lib.js');
const { sl, lede, card, cardT, callout, formula, g2, g3, tbl, reveal, checks, stat, badge, vf, mini, quizSlide, sintese, refsSlide, roteiroSlide, objetivosSlide, coverSlide, ic } = L;
const slides = [];

slides.push(coverSlide({
  eyebrow: 'Educação Financeira · 1ª série · Trimestre 3',
  h1: 'Perfil <span style="color:var(--growth);">empreendedor</span>: transformar ideias em algo novo e útil',
  sub: 'O que é empreender, quais características ajudam, o teste de perfil, o Círculo Dourado do "porquê" e como identificar o "empreendedor de palco".',
  badges: [['AULA 48'], ['O quê · Como · Por quê', 'growth'], ['ENEM 2020 · H23', 'primary']],
  color: 'growth', curve: 'M40,205 C 160,190 240,140 340,140 C 440,140 500,80 620,70 C 720,62 790,44 840,26', end: [840, 26]
}));

slides.push(roteiroSlide('Da ideia ao jeito de pensar do empreendedor.', [
  ['O doce que todo mundo deveria provar', 'indicar ou produzir e vender?', 'bulb'],
  ['O que é empreender', 'atitude que se aprende e se pratica', 'target'],
  ['Duas músicas, dois perfis', 'quem não para e quem faz o melhor no seu papel', 'people'],
  ['Características do empreendedor', 'organização, risco e trabalho duro', 'scale'],
  ['Teste do seu perfil', 'autoavaliação em 8 afirmações', 'chart'],
  ['O Círculo Dourado', 'o quê, como e por quê', 'coin'],
  ['ENEM 2020 · H23', 'o "empreendedor de palco" e sua linguagem', 'book']
]));

slides.push(objetivosSlide([
  'Compreender o que é ter um <strong>perfil empreendedor</strong>.',
  'Reconhecer <strong>características</strong> e <strong>riscos</strong> de empreender.',
  'Usar o <strong>Círculo Dourado</strong> para organizar uma ideia de empreendimento (o quê, como e por quê).',
  'Inferir, em um texto, os <strong>objetivos do autor</strong> e o <strong>público-alvo</strong> pela análise dos procedimentos argumentativos.'
], 'Habilidade do ENEM', 'LC H23 — inferir em um texto quais são os objetivos de seu produtor e quem é seu público-alvo, pela análise dos procedimentos argumentativos utilizados.', 'growth', 'growth-ink'));

slides.push(sl('Para início de conversa', 'O doce mais delicioso do mundo', `
          ${lede('Você viaja a um país distante e experimenta o doce mais delicioso da sua vida. Pensa: <strong>"Todo mundo deveria experimentar essa delícia!"</strong> Há duas formas de fazer isso acontecer:')}
          <div class="grid2" style="margin-top:8px;">
            ${card('<strong>Opção 1</strong><p style="font-size:.95rem;margin-top:8px;">Você <strong>diz onde comeu</strong> e indica o local para as pessoas.</p>')}
            ${card('<strong>Opção 2</strong><p style="font-size:.95rem;margin-top:8px;">Você mesmo(a) <strong>produz (ou importa) e vende</strong> para todos.</p>', 'growth')}
          </div>
          ${callout('A sua resposta define um perfil', 'Qual das duas você usaria? <strong>A resposta a esta pergunta define um perfil empreendedor</strong>. Não há certo ou errado: é uma questão de personalidade e de oportunidade.')}`, { cls: 'growth' }));

slides.push(sl('Aula 48 · teoria', 'O que é empreender?', `
          <div class="grid2">
            <div>
              ${lede('<strong>Empreendedores</strong> são pessoas determinadas, visionárias e movidas pela vontade de fazer acontecer. Podem abrir a própria empresa, <strong>ajudar a crescer</strong> a empresa em que trabalham, ou atuar pelo bairro, escola ou cidade.')}
            </div>
            <div>
              ${callout('Atitude que se aprende', '<em>"Empreendedorismo é um modo de pensar, uma atitude que pode ser desenvolvida e aprendida, se for praticada. Um traço comum dos empreendedores é a capacidade de não se conformarem com o estado atual das coisas."</em> (ROSA, 2015)')}
              ${callout('A essência', 'Transformar <strong>ideias</strong> em algo <strong>novo e útil</strong>.', 'success')}
            </div>
          </div>
          ${reveal('Empreendedor só abre empresa?', '<p>Não! Há o <strong>empreendedor interno</strong> (que inova dentro da empresa onde trabalha) e o <strong>social</strong> (que cria soluções para a comunidade, a escola ou a cidade).</p>')}`, { cls: 'growth' }));

slides.push(sl('Aula 48 · para refletir', 'Duas músicas, dois perfis', `
          ${lede('Observe os trechos e escolha com qual você mais se identifica. <strong>Não há certo ou errado: é uma questão de personalidade.</strong>')}
          <div class="grid2" style="margin-top:8px;">
            <button class="choice mp" data-m="a" type="button" style="margin:0;"><strong>Legião Urbana</strong><br><em>"…porque esperar se podemos começar tudo de novo, agora mesmo…"</em></button>
            <button class="choice mp" data-m="b" type="button" style="margin:0;"><strong>Zeca Pagodinho</strong><br><em>"…Se a coisa não sai do jeito que eu quero, também não me desespero, o negócio é deixar rolar…"</em></button>
          </div>
          <div class="wid" id="mp-r" style="margin-top:10px;display:none;"></div>`, { cls: 'growth' }));

slides.push(sl('Aula 48 · teoria', 'Características e riscos de quem empreende', `
          <div class="grid2">
            <div>
              ${checks(['<strong>Organização</strong>: você será o chefe e o empregado ao mesmo tempo.', '<strong>Inconformismo construtivo</strong>: não aceita o estado atual das coisas.', '<strong>Disposição para o risco</strong>: não há a segurança de um salário mensal.', '<strong>Persistência</strong>: é normal as coisas não darem certo na 1ª, 2ª ou 3ª tentativa.', '<strong>Visão de oportunidade</strong>: enxerga ocasião em quase toda dificuldade.'], '.95rem')}
            </div>
            <div>
              ${callout('Perguntas sem resposta pronta', 'Na escola, a pergunta tem uma resposta certa ("4 + 4 é…?"). Para o empreendedor, o desafio é do tipo <strong>"8 é…?"</strong>: pode ser 5+3, 10−2… Não há resposta pronta. (SEBRAE, <em>Guia Essencial para Novos Empreendedores</em>)')}
              ${callout('Embora pareça uma ideia legal…', 'você não terá a segurança de um salário mensal nem saberá se o negócio dará certo: terá de enfrentar riscos e trabalhar duro.', 'danger')}
            </div>
          </div>`, { cls: 'growth' }));

slides.push(sl('Atividade', 'Empreender é…', `
          ${lede('Escreva uma frase de até 3 linhas que resuma o que vimos, começando com a expressão <strong>"Empreender é…"</strong>:')}
          <div class="wid">
            <textarea id="em-t" rows="3" maxlength="240" placeholder="Empreender é…" style="font:inherit;width:100%;padding:.6em .8em;border-radius:12px;border:1.5px solid var(--line-strong);background:var(--surface);color:var(--ink);">Empreender é </textarea>
            <p class="small" id="em-c" style="margin:6px 0 0;"></p>
          </div>
          <div id="em-card" style="margin-top:12px;border-radius:18px;padding:22px;text-align:center;color:#fff;background:linear-gradient(135deg,#D9531A,#382EAE);font-family:'Archivo',sans-serif;font-weight:900;font-size:1.3rem;line-height:1.2;"></div>
          ${callout('Uma inspiração', '<em>"Empreender é estar apaixonado por uma ideia e correr atrás. É preciso ter um brilho nos olhos e uma vontade de fazer, mesmo que seja a segunda, terceira, quarta iniciativa. É normal as coisas não darem certo."</em> — Pedro Passos, Natura', '')}`, { cls: 'growth' }));

slides.push(sl('Teste · autoavaliação', 'Qual é o seu perfil empreendedor?', `
          ${lede('Dê uma nota de <strong>1</strong> (nada a ver comigo) a <strong>5</strong> (tudo a ver comigo). Independentemente do resultado, o empreendedorismo pode ser <strong>desenvolvido</strong>.')}
          <div id="tp-q" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(18rem,1fr));gap:8px;margin-top:8px;"></div>
          <div class="wid" style="margin-top:10px;"><p class="small" style="margin:0;">Sua pontuação</p><div class="out" id="tp-s" style="font-size:1.8rem;"></div><p id="tp-t" style="margin:4px 0 0;font-weight:700;"></p></div>
          <p class="hint" style="margin-top:6px;">Autoavaliação didática, sem valor científico: use para refletir e conversar.</p>`, { cls: 'growth' }));

slides.push(sl('Atividade · Círculo Dourado', 'O quê, como e por quê', `
          <div class="grid2">
            <div class="wid">
              <label>1 · O QUÊ — qual desafio (seu ou da comunidade) você resolve?</label>
              <input type="text" id="cd-o" value="Ajudar alunos a organizar o dinheiro da semana">
              <label>2 · COMO — de que formas seu projeto se destacará?</label>
              <input type="text" id="cd-c" value="App simples, desafios entre amigos e dicas curtas">
              <label>3 · POR QUÊ — qual é a sua causa, sua motivação?</label>
              <input type="text" id="cd-p" value="Porque dinheiro organizado dá liberdade para sonhar">
            </div>
            <div style="display:flex;align-items:center;justify-content:center;">
              <svg viewBox="0 0 300 300" style="width:min(100%,24rem);height:auto;">
                <circle cx="150" cy="150" r="140" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"/>
                <circle cx="150" cy="165" r="95" fill="var(--growth-soft)" stroke="var(--growth)" stroke-width="2"/>
                <circle cx="150" cy="190" r="50" fill="#F2C94C" stroke="#B8860B" stroke-width="2"/>
                <text x="150" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="var(--primary)">O QUÊ</text>
                <foreignObject x="40" y="44" width="220" height="60"><div xmlns="http://www.w3.org/1999/xhtml" id="cd-vo" style="font-size:11px;text-align:center;color:var(--ink);"></div></foreignObject>
                <text x="150" y="108" text-anchor="middle" font-size="12" font-weight="700" fill="var(--growth-ink)">COMO</text>
                <foreignObject x="80" y="112" width="140" height="50"><div xmlns="http://www.w3.org/1999/xhtml" id="cd-vc" style="font-size:10px;text-align:center;color:var(--ink);"></div></foreignObject>
                <text x="150" y="168" text-anchor="middle" font-size="11" font-weight="800" fill="#6B4E00">POR QUÊ</text>
                <foreignObject x="115" y="172" width="70" height="50"><div xmlns="http://www.w3.org/1999/xhtml" id="cd-vp" style="font-size:8px;text-align:center;color:#3A2A00;"></div></foreignObject>
              </svg>
            </div>
          </div>
          ${reveal('Exemplo da aula: Fábio Porchat', '<p><b>O quê:</b> empresário, roteirista, humorista, ator. <b>Como:</b> criou uma empresa de humor para a web — apresentações ao vivo, vídeos para a internet, textos originais, atuação na TV. <b>Por quê:</b> levar alegria para as pessoas.</p>')}`, { cls: 'growth' }));

slides.push(sl('ENEM 2020 · Linguagens · H23', 'Como se identifica o "empreendedor de palco"?', `
          ${lede('O texto crítico descreve o palestrante que constrói a imagem de empreendedor por meio da <strong>linguagem</strong>: lista o vocabulário obrigatório, contrasta o jeito antigo ("fórmulas, equações e cálculos") com o novo ("Você irá chegar lá!") e simula um diálogo cheio de jargões ("seu <em>mindset</em> não está ajustado"). De acordo com o texto, é possível identificá-lo por:')}
          <div class="grid2" style="margin-top:6px;">
            <div>${mini('Alternativas', ['Livros por ele indicados', 'Suas habilidades em língua inglesa', 'Experiências por ele compartilhadas', 'Padrões de linguagem por ele utilizados', 'Preços acessíveis de seus treinamentos'], 3, '<strong>D</strong>: o que constrói o "empreendedor de palco" não é a eficiência do que ele vende, mas <strong>a maneira como fala</strong> e o repertório de palavras que repete.')}</div>
            <div>${callout('Dica de prova', 'Leia primeiro o <strong>comando</strong> (fim do enunciado): ele diz o que procurar no texto. Depois volte ao texto buscando <strong>evidências</strong>.', 'success')}${reveal('Por que as outras estão erradas?', '<p><b>A:</b> livros são detalhe secundário. <b>B:</b> o inglês é jargão, não domínio do idioma. <b>C:</b> o foco não é o conteúdo da vida do palestrante, é a fórmula repetitiva do discurso. <b>E:</b> a fala sobre preço é sarcástica, não informa nada real.</p>')}</div>
          </div>`, { cls: 'primary' }));

slides.push(sintese([
  ['Empreender', 'Atitude de transformar ideias em algo novo e útil — que pode ser aprendida e praticada, dentro ou fora de uma empresa.'],
  ['Riscos e traços', 'Organização, persistência e disposição para o risco: sem salário garantido, é preciso trabalhar duro e aprender com o erro.'],
  ['O porquê', 'O Círculo Dourado começa pelo desafio (o quê), passa pelo diferencial (como) e chega à causa (por quê).']
], '"Empreender é estar apaixonado por uma ideia e correr atrás."'));

slides.push(quizSlide([
  { q: 'Para ROSA (2015), empreendedorismo é:', o: ['Um dom de nascença', 'Uma atitude que pode ser desenvolvida e aprendida', 'Um privilégio de quem tem dinheiro', 'Só abrir empresas'], a: 1 },
  { q: 'O risco de empreender inclui:', o: ['Salário mensal garantido', 'Não ter segurança de um salário e não saber se o negócio dará certo', 'Nenhum risco', 'Lucro imediato'], a: 1 },
  { q: 'No Círculo Dourado, o "por quê" é:', o: ['O produto', 'A causa, a motivação do negócio', 'O preço', 'O concorrente'], a: 1 },
  { q: 'Segundo o texto do ENEM, o "empreendedor de palco" é identificado por:', o: ['Livros que indica', 'Padrões de linguagem que utiliza', 'Preços baixos', 'Experiência de vida'], a: 1 },
  { q: 'O desafio "8 é…?" da aula ilustra que, para empreendedores:', o: ['Há sempre uma única resposta certa', 'Não há respostas prontas', 'Só importa a conta mais simples', 'É preciso decorar'], a: 1 }
]));

slides.push(refsSlide([
  'ROSA (2015), conforme citado no material da aula.',
  'SEBRAE. Trecho do livro <em>Descoberta</em>, da coleção <em>Guia Essencial para Novos Empreendedores</em>.',
  'BARROS, Josi Gomes. <em>Educação financeira sustentável — 1ª série EM</em>, 2024 (p. 213–214).',
  'INEP. <em>Provas do ENEM 2020</em> (Linguagens, Códigos e suas Tecnologias).'
], 'Para continuar', 'Comece pelo "por quê"', 'Pense em um problema real da sua escola ou bairro, preencha o seu Círculo Dourado e converse com alguém sobre a ideia.'));

const extra = `
  function $(id){ return document.getElementById(id); }
  var MP = {a: ['Legião Urbana', 'Destaca o empreendedor que <strong>não fica parado</strong>: está sempre em busca de mudanças e inovações. "Começar tudo de novo, agora mesmo."'], b: ['Zeca Pagodinho', 'Identifica um perfil que <strong>segue as normas da empresa</strong>, desempenha sua função da melhor forma possível e é grato pelo emprego. "Deixar rolar."']};
  document.querySelectorAll('.mp').forEach(function(b){ b.addEventListener('click', function(){ document.querySelectorAll('.mp').forEach(function(x){ x.classList.remove('correct'); }); b.classList.add('correct'); var r = $('mp-r'); r.style.display = 'block'; var m = MP[b.dataset.m]; r.innerHTML = '<strong>' + m[0] + '</strong><p style="margin:6px 0 0;">' + m[1] + '</p><p class="hint" style="margin:6px 0 0;">Os dois perfis são valiosos: o empreendedor que cria o negócio e o colaborador que faz o seu papel com excelência. Não há certo e errado.</p>'; }); });
  function emUp(){ var v = $('em-t').value || ''; $('em-card').textContent = v.trim() || 'Empreender é…'; $('em-c').textContent = v.length + ' / 240 caracteres'; }
  $('em-t').addEventListener('input', emUp); emUp();
  var TQ = ['Não me conformo quando algo poderia ser melhor.', 'Gosto de transformar ideias em ações.', 'Aceito riscos calculados para chegar a um objetivo.', 'Não desisto fácil quando uma tentativa dá errado.', 'Sou organizado(a) com tempo, dinheiro e tarefas.', 'Costumo ver oportunidade onde outros veem problema.', 'Gosto de aprender com quem já fez.', 'Assumo responsabilidade pelas minhas escolhas.'];
  var tq = $('tp-q'), sc = TQ.map(function(){ return 3; });
  TQ.forEach(function(t, k){ var d = document.createElement('div'); d.className = 'wid'; d.innerHTML = '<p class="small" style="margin:0 0 4px;">' + (k + 1) + '. ' + t + '</p><input type="range" min="1" max="5" value="3"><div class="small mono" style="text-align:right;">3</div>'; d.querySelector('input').addEventListener('input', function(){ sc[k] = +this.value; d.querySelector('div').textContent = this.value; tpUp(); }); tq.appendChild(d); });
  function tpUp(){ var s = sc.reduce(function(a, b){ return a + b; }, 0); $('tp-s').textContent = s + ' / 40'; var t = $('tp-t'); if(s >= 32){ t.textContent = 'Perfil muito empreendedor: pratique, dê forma às ideias e aprenda com os riscos.'; } else if(s >= 24){ t.textContent = 'Boas características empreendedoras: desenvolva as que estiverem mais baixas.'; } else { t.textContent = 'Perfil mais voltado a executar bem o seu papel: ótimo para equipes — e o empreendedorismo pode ser desenvolvido!'; } }
  tpUp();
  function cdUp(){ $('cd-vo').textContent = $('cd-o').value; $('cd-vc').textContent = $('cd-c').value; $('cd-vp').textContent = $('cd-p').value; }
  ['cd-o','cd-c','cd-p'].forEach(function(i){ $(i).addEventListener('input', cdUp); }); cdUp();
`;

module.exports = { title: 'Perfil Empreendedor', brand: 'Perfil Empreendedor', aulas: 'Aula 48', serie: '1ª Série', key: 'emp1', slides, extra, out: 'educacao-financeira/1-ano/3-tri/perfil-empreendedor/aula.html' };
