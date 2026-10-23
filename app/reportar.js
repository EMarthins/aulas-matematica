/* "Reportar erro" — janelinha usada pelas aulas/guias/atividades (menu ⋯ de app/ferramentas.js) e pelo EduMath Provas.
   Envia o relato para a coleção `reports` do Firestore pela API REST (sem carregar o SDK do Firebase e sem login):
   as regras (firestore.rules) aceitam só criar, com campos e tamanhos limitados; só o administrador lê (admin.html → Relatos).
   Uso:  EduReportar.abrir({ tipo: 'aula' | 'questao' | 'site', alvo: 'caminho ou id', titulo: 'texto mostrado' })
   Os valores abaixo são públicos por design do Firebase (a segurança vem das regras). */
(function(){
  if(window.EduReportar) return;
  var PROJETO = 'estude-app-marth', CHAVE = 'AIzaSyCH48C_LHkHB1O8T38gwACat-39tmWRH4M';
  var D = document, W = window;
  var CATEGORIAS = {
    aula: ['Erro de conteúdo (matemática, fato ou conceito)', 'Erro de digitação ou texto confuso', 'Resposta ou gabarito errado', 'Figura ou gráfico errado', 'Algo não funciona (botão, quiz, simulador)', 'Outro'],
    questao: ['Gabarito errado', 'Enunciado com erro ou incompleto', 'Figura ou imagem errada', 'Alternativas repetidas ou faltando', 'Resolução errada', 'Outro'],
    site: ['Algo não funciona', 'Erro de texto', 'Sugestão', 'Outro']
  };
  var SUGESTOES = ['Mais ilustração ou animação', 'Mais interação na figura (arrastar, deslizar, clicar)', 'Falta conteúdo ou exemplo', 'Mais exercícios ou desafios', 'Explicar de outro jeito (mais claro)', 'Melhorar a aparência ou a leitura', 'Outra ideia'];
  function lsGet(k){ try{ return W.localStorage.getItem(k); }catch(e){ return null; } }
  function lsSet(k, v){ try{ W.localStorage.setItem(k, v); }catch(e){} }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function corta(s, n){ s = String(s == null ? '' : s); return s.length > n ? s.slice(0, n - 1) + '…' : s; }

  var css = 'dialog.rp-ov{position:fixed;inset:0;z-index:100000;width:100%;height:100%;max-width:none;max-height:none;margin:0;border:0;background:rgba(0,0,0,.5);color:inherit;padding:14px;box-sizing:border-box;align-items:center;justify-content:center;font-family:Archivo,Arial,sans-serif}' +
    'dialog.rp-ov[open]{display:flex}dialog.rp-ov::backdrop{background:transparent}' +
    '.rp-box{width:min(30rem,100%);max-height:calc(100vh - 28px);overflow:auto;background:var(--surface,#fff);color:var(--ink,#111);border:1px solid var(--line-strong,#bbb);border-radius:18px;padding:18px 20px 20px;box-shadow:0 30px 80px -20px rgba(0,0,0,.5)}' +
    '.rp-box h3{margin:0;font-size:1.1rem;display:flex;justify-content:space-between;align-items:center;gap:10px}' +
    '.rp-x{border:0;background:transparent;color:var(--ink-faint,#777);cursor:pointer;font-size:1.2rem;line-height:1}' +
    '.rp-alvo{margin:6px 0 12px;font-size:.82rem;color:var(--ink-faint,#777);background:var(--surface-2,#f3f3f6);border-radius:10px;padding:.5em .7em;word-break:break-word}' +
    '.rp-box label{display:block;font-size:.8rem;font-weight:700;margin:10px 0 4px}' +
    '.rp-box select,.rp-box textarea,.rp-box input[type=text]{width:100%;box-sizing:border-box;font:inherit;font-size:.9rem;padding:.55em .7em;border-radius:10px;border:1.5px solid var(--line-strong,#bbb);background:var(--surface,#fff);color:var(--ink,#111)}' +
    '.rp-box textarea{min-height:6.5rem;resize:vertical}' +
    '.rp-box select:focus,.rp-box textarea:focus,.rp-box input:focus{outline:2px solid var(--primary,#382EAE);outline-offset:1px}' +
    '.rp-hp{position:absolute;left:-9999px;width:1px;height:1px;opacity:0}' +
    '.rp-acoes{display:flex;gap:8px;justify-content:flex-end;flex-wrap:wrap;margin-top:14px}' +
    '.rp-b{font:inherit;font-size:.86rem;font-weight:800;border-radius:10px;padding:.55em 1.1em;cursor:pointer;border:1.5px solid var(--line-strong,#bbb);background:var(--surface,#fff);color:var(--ink,#111)}' +
    '.rp-b.p{background:var(--primary,#382EAE);border-color:var(--primary,#382EAE);color:var(--primary-ink,#fff)}' +
    '.rp-b:disabled{opacity:.55;cursor:default}' +
    '.rp-msg{margin-top:10px;font-size:.84rem;font-weight:700;border-radius:10px;padding:.55em .8em}' +
    '.rp-msg.ok{background:var(--success-soft,#e3f6e8);color:var(--success,#157a3a)}.rp-msg.er{background:var(--danger-soft,#fde7e7);color:var(--danger,#b00020)}' +
    '@media print{.rp-ov{display:none!important}}';
  var st = D.createElement('style'); st.textContent = css; (D.head || D.documentElement).appendChild(st);

  var aberto = null;
  function fechar(){ if(aberto){ aberto.remove(); aberto = null; D.removeEventListener('keydown', teclas, true); } }
  function teclas(e){ if(e.key === 'Escape'){ e.stopPropagation(); fechar(); } }

  function abrir(o){
    o = o || {}; fechar();
    var tipo = CATEGORIAS[o.tipo] ? o.tipo : 'site', sug = o.modo === 'sugestao', cats = sug ? SUGESTOES : CATEGORIAS[tipo];
    var ov = D.createElement('dialog'); ov.className = 'rp-ov'; ov.setAttribute('aria-label', sug ? 'Sugerir melhoria' : 'Reportar erro'); // janela nativa: fica acima de outras janelas abertas
    ov.innerHTML = '<div class="rp-box"><h3><span>' + (sug ? '💡 Sugerir melhoria' : '⚑ Reportar um erro') + '</span><button class="rp-x" type="button" aria-label="Fechar">✕</button></h3>' +
      '<div class="rp-alvo">' + esc(o.titulo || o.alvo || W.location.pathname) + '</div>' +
      '<label for="rp-cat">' + (sug ? 'Que tipo de melhoria?' : 'O que aconteceu?') + '</label><select id="rp-cat">' + cats.map(function(c){ return '<option>' + esc(c) + '</option>'; }).join('') + '</select>' +
      '<label for="rp-txt">' + (sug ? 'Conte a sua ideia' : 'Conte o erro') + ' <span style="font-weight:600;color:var(--ink-faint,#777)">(onde está e qual seria o correto, se souber)</span></label><textarea id="rp-txt" maxlength="2000" placeholder="' + (sug ? 'Ex.: deixar o aluno arrastar o ponto da reta e ver o gráfico mudar.' : 'Ex.: no slide 5, a resposta correta é 12, e não 10.') + '"></textarea>' +
      '<label for="rp-ct">Seu e-mail ou WhatsApp <span style="font-weight:600;color:var(--ink-faint,#777)">(opcional, para avisarmos quando corrigir)</span></label><input type="text" id="rp-ct" maxlength="120" autocomplete="email">' +
      '<input class="rp-hp" type="text" id="rp-site" tabindex="-1" autocomplete="off" aria-hidden="true">' +
      '<div id="rp-msg"></div><div class="rp-acoes"><button class="rp-b" type="button" data-c>Cancelar</button><button class="rp-b p" type="button" data-e>' + (sug ? 'Enviar sugestão' : 'Enviar relato') + '</button></div></div>';
    D.body.appendChild(ov); aberto = ov; D.addEventListener('keydown', teclas, true);
    if(ov.showModal) ov.showModal(); else ov.setAttribute('open', '');
    ov.addEventListener('cancel', function(e){ e.preventDefault(); fechar(); });
    ov.addEventListener('click', function(e){ if(e.target === ov) fechar(); });
    ov.querySelector('.rp-x').addEventListener('click', fechar); ov.querySelector('[data-c]').addEventListener('click', fechar);
    var txt = ov.querySelector('#rp-txt'), msg = ov.querySelector('#rp-msg'), btn = ov.querySelector('[data-e]'), ct = ov.querySelector('#rp-ct');
    ct.value = lsGet('rp:contato') || ''; setTimeout(function(){ txt.focus(); }, 30);
    function aviso(t, ok){ msg.innerHTML = '<div class="rp-msg ' + (ok ? 'ok' : 'er') + '">' + esc(t) + '</div>'; }

    btn.addEventListener('click', function(){
      var mensagem = txt.value.trim();
      if(ov.querySelector('#rp-site').value) { fechar(); return; } // robô: o campo invisível foi preenchido
      if(mensagem.length < 5){ aviso(sug ? 'Escreva pelo menos uma frase curta com a sua ideia.' : 'Escreva pelo menos uma frase curta sobre o erro.', false); txt.focus(); return; }
      var agora = Date.now(), ultimo = +lsGet('rp:ultimo') || 0;
      if(agora - ultimo < 20000){ aviso('Aguarde alguns segundos antes de enviar outro relato.', false); return; }
      var corpo = {
        tipo: tipo, categoria: corta((sug ? 'Sugestão: ' : '') + ov.querySelector('#rp-cat').value, 120), alvo: corta(o.alvo || W.location.pathname, 300), titulo: corta(o.titulo || D.title, 200),
        mensagem: corta(mensagem, 2000), pagina: corta(W.location.href.split('#')[0] + (o.slide ? '#s=' + o.slide : ''), 300), quando: new Date(), status: 'novo', app: corta(navigator.userAgent, 120)
      };
      var contato = ct.value.trim(); if(contato) corpo.contato = corta(contato, 120);
      btn.disabled = true; btn.textContent = 'Enviando…'; msg.innerHTML = '';
      enviar(corpo).then(function(){
        lsSet('rp:ultimo', String(Date.now())); if(contato) lsSet('rp:contato', contato);
        txt.disabled = true; btn.style.display = 'none'; ov.querySelector('[data-c]').textContent = 'Fechar';
        aviso(sug ? 'Obrigado pela ideia! Vamos analisar com carinho.' : 'Obrigado! Recebemos o seu relato e vamos conferir.', true);
      }, function(e){
        btn.disabled = false; btn.textContent = 'Tentar de novo';
        var offline = navigator.onLine === false;
        aviso(offline ? 'Sem internet agora. Seu texto continua aqui: tente de novo quando conectar.' : 'Não foi possível enviar agora. Tente de novo em instantes.', false);
        if(W.console) console.warn('reportar:', e);
      });
    });
  }

  function enviar(c){
    var campos = {};
    Object.keys(c).forEach(function(k){
      var v = c[k];
      campos[k] = v instanceof Date ? { timestampValue: v.toISOString() } : { stringValue: String(v) };
    });
    var url = 'https://firestore.googleapis.com/v1/projects/' + PROJETO + '/databases/(default)/documents/reports?key=' + CHAVE;
    return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ fields: campos }) }).then(function(r){
      if(!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    });
  }

  W.EduReportar = { abrir: abrir, fechar: fechar };
})();
