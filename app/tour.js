/* Demonstração automática de ~2 minutos (carregada por app/ferramentas.js: menu ⋯ → "Ver a demonstração" ou o endereço da aula com #tour).
   Usa as ferramentas REAIS da aula (cena interativa, caneta, régua, compasso, 1 rad, figuras, gráficos, quadro lateral, calculadora, votação),
   com legendas e um cursor visível — serve para mostrar a escolas e colegas. Espaço = pausar · Esc = sair. Nada é gravado nem enviado. */
(function(){
  if(window.EduTour) return;
  var D = document, W = window, R = D.documentElement;
  var SRC = (D.currentScript || {}).src || '';
  var base = SRC.replace(/tour\.js.*$/, '');
  function el(tag, cls, html){ var e = D.createElement(tag); if(cls) e.className = cls; if(html != null) e.innerHTML = html; return e; }

  var css = '.tr-leg{position:fixed;z-index:99999;left:50%;bottom:18px;transform:translateX(-50%);width:min(46rem,calc(100vw - 24px));background:rgba(17,17,28,.93);color:#fff;border-radius:18px;padding:14px 20px 12px;font-family:Archivo,Arial,sans-serif;box-shadow:0 24px 60px -18px rgba(0,0,0,.6);pointer-events:none}' +
    '.tr-leg small{display:block;font-weight:800;letter-spacing:.09em;text-transform:uppercase;font-size:.66rem;color:#a5b4fc;margin-bottom:3px}.tr-leg b{display:block;font-size:1.18rem;line-height:1.25}.tr-leg span{display:block;font-size:.92rem;opacity:.86;margin-top:3px;line-height:1.35}' +
    '.tr-prog{height:4px;border-radius:9px;background:rgba(255,255,255,.18);margin-top:10px;overflow:hidden}.tr-prog i{display:block;height:100%;background:#818cf8;width:0;transition:width .4s}' +
    '.tr-ctl{position:fixed;z-index:100000;right:14px;top:14px;display:flex;gap:6px}.tr-ctl button{font:700 .8rem Archivo,Arial,sans-serif;border:0;border-radius:99px;padding:.55em 1.1em;background:rgba(17,17,28,.9);color:#fff;cursor:pointer}' +
    '.tr-cur{position:fixed;z-index:100001;left:0;top:0;width:26px;height:26px;margin:-13px 0 0 -13px;border-radius:50%;border:3px solid #fff;background:rgba(239,68,68,.55);box-shadow:0 0 0 2px rgba(0,0,0,.45),0 6px 16px rgba(0,0,0,.4);pointer-events:none;transition:transform .12s,opacity .3s;opacity:0}.tr-cur.on{opacity:1}.tr-cur.cl{transform:scale(.6)}' +
    '.tr-fim{position:fixed;z-index:100002;inset:0;background:rgba(10,10,24,.82);display:flex;align-items:center;justify-content:center;font-family:Archivo,Arial,sans-serif;padding:20px}.tr-fim div{background:#fff;color:#111;border-radius:22px;padding:28px 30px;max-width:30rem;text-align:center;box-shadow:0 30px 80px -20px rgba(0,0,0,.6)}' +
    '.tr-fim h2{margin:0 0 8px;font-size:1.5rem}.tr-fim p{margin:0 0 16px;color:#444;line-height:1.45}.tr-fim a,.tr-fim button{display:inline-block;margin:4px;font:800 .92rem Archivo,Arial,sans-serif;border-radius:12px;padding:.7em 1.3em;border:1.5px solid #382EAE;text-decoration:none;cursor:pointer}.tr-fim a.p{background:#382EAE;color:#fff}.tr-fim button,.tr-fim a.s{background:#fff;color:#382EAE}' +
    '@media print{.tr-leg,.tr-ctl,.tr-cur,.tr-fim{display:none!important}}';
  var st = el('style'); st.textContent = css; (D.head || R).appendChild(st);

  var leg = el('div', 'tr-leg'), cur = el('div', 'tr-cur'), ctl = el('div', 'tr-ctl'), pausado = false, parado = false, fim = null;
  ctl.innerHTML = '<button type="button" data-p>⏸ Pausar (Espaço)</button><button type="button" data-x>✕ Sair (Esc)</button>';
  var passoAtual = 0, TOTAL = 10;
  function legenda(kick, titulo, texto){ leg.innerHTML = '<small>' + kick + '</small><b>' + titulo + '</b>' + (texto ? '<span>' + texto + '</span>' : '') + '<div class="tr-prog"><i style="width:' + Math.round(passoAtual / TOTAL * 100) + '%"></i></div>'; }

  function esp(ms){ return new Promise(function(ok, no){ var t = 0, iv = setInterval(function(){ if(parado){ clearInterval(iv); no(new Error('parou')); return; } if(pausado) return; t += 50; if(t >= ms){ clearInterval(iv); ok(); } }, 50); }); }
  function tecla(e){ if(e.key === ' '){ e.preventDefault(); e.stopPropagation(); alternaPausa(); } else if(e.key === 'Escape'){ e.preventDefault(); e.stopPropagation(); sair(); } else { e.stopPropagation(); e.preventDefault(); } }
  function alternaPausa(){ pausado = !pausado; ctl.querySelector('[data-p]').textContent = pausado ? '▶ Continuar (Espaço)' : '⏸ Pausar (Espaço)'; }

  // ---------- cursor e eventos ----------
  var pos = [W.innerWidth / 2, W.innerHeight / 2];
  function poe(x, y){ pos = [x, y]; cur.style.left = x + 'px'; cur.style.top = y + 'px'; }
  function anim(de, para, ms, f){ return new Promise(function(ok, no){ var t0 = performance.now(); (function p(a){ if(parado){ no(new Error('parou')); return; } if(pausado){ t0 += 16; requestAnimationFrame(p); return; } var t = Math.min(1, (a - t0) / ms), e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; f(de + (para - de) * e, t); if(t < 1) requestAnimationFrame(p); else ok(); })(t0); }); }
  function vai(x, y, ms){ cur.classList.add('on'); var x0 = pos[0], y0 = pos[1]; return anim(0, 1, ms || 500, function(v){ poe(x0 + (x - x0) * v, y0 + (y - y0) * v); }); }
  function clique(){ cur.classList.add('cl'); return esp(140).then(function(){ cur.classList.remove('cl'); }); }
  function cv(sel){ return D.querySelector(sel || '.qd-cv.slide-cv'); }
  function ptr(c, tipo, x, y, extra){ c.dispatchEvent(new PointerEvent(tipo, Object.assign({ bubbles: true, pointerId: 7, pointerType: 'mouse', clientX: x, clientY: y, button: 0, buttons: tipo === 'pointerup' ? 0 : 1 }, extra || {}))); }
  // desenha um caminho (frações da área da camada) movendo o cursor e mandando eventos reais de ponteiro
  function traco(c, pts, ms){
    var r = c.getBoundingClientRect(), P = pts.map(function(p){ return [r.left + p[0] * r.width, r.top + p[1] * r.height]; });
    return vai(P[0][0], P[0][1], 450).then(function(){ ptr(c, 'pointerdown', P[0][0], P[0][1]); var tot = P.length - 1;
      return anim(0, tot, ms, function(v){ var i = Math.min(tot - 1, Math.floor(v)), f = v - i, x = P[i][0] + (P[i + 1][0] - P[i][0]) * f, y = P[i][1] + (P[i + 1][1] - P[i][1]) * f; poe(x, y); ptr(c, 'pointermove', x, y); }); })
      .then(function(){ var u = P[P.length - 1]; ptr(c, 'pointerup', u[0], u[1]); return esp(250); });
  }
  function toque(c, fx, fy){ var r = c.getBoundingClientRect(), x = r.left + fx * r.width, y = r.top + fy * r.height; return vai(x, y, 450).then(function(){ ptr(c, 'pointerdown', x, y); ptr(c, 'pointerup', x, y); return esp(200); }); }
  function barra(){ return D.querySelector('.qd-bar'); }
  function acha(sub){ var b = [].slice.call((barra() || D).querySelectorAll('button')).filter(function(x){ return (x.title || '').indexOf(sub) >= 0; })[0]; return b || null; }
  function aperta(sub){ var b = acha(sub); if(!b) return Promise.resolve(); var r = b.getBoundingClientRect(); return vai(r.left + r.width / 2, r.top + r.height / 2, 420).then(clique).then(function(){ b.click(); return esp(260); }); }
  function chip(txt){ var b = [].slice.call(D.querySelectorAll('.qd-sel button')).filter(function(x){ return x.textContent.indexOf(txt) >= 0; })[0]; if(!b) return Promise.resolve(); var r = b.getBoundingClientRect(); return vai(r.left + r.width / 2, r.top + r.height / 2, 420).then(clique).then(function(){ b.click(); return esp(300); }); }
  function carrega(arq, glob){ return new Promise(function(ok){ if(W[glob]) return ok(); var s = D.createElement('script'); s.src = base + arq; s.onload = ok; s.onerror = ok; (D.head || R).appendChild(s); }); }
  function slides(){ return D.querySelectorAll('.slide').length; }
  function ir(i){ if(W.goTo) W.goTo(Math.max(0, Math.min(slides() - 1, i))); return esp(500); }

  function limpaTudo(){ var l = acha('Limpar'); if(l) l.click(); }

  // ---------- roteiro ----------
  var PASSOS = [
    function(){ passoAtual = 0; legenda('EduMath · demonstração de 2 minutos', 'Aulas prontas, interativas, com lousa digital', 'Tudo o que você vai ver é a plataforma de verdade, funcionando nesta aula.'); return ir(0).then(function(){ return esp(4200); }).then(function(){
      var r = D.querySelector('figure[data-cena] input[type=range]'); if(!r) return esp(1500);
      var a = +r.min, b = +r.max, v0 = +r.value; legenda('1 · Abertura que se manipula', 'Cada aula abre com uma ilustração interativa', 'Arraste: o aluno descobre o conceito antes da definição.');
      return anim(v0, b, 1600, function(v){ r.value = Math.round(v / (+r.step || 1)) * (+r.step || 1); r.dispatchEvent(new Event('input', { bubbles: true })); }).then(function(){ return anim(b, a, 2200, function(v){ r.value = Math.round(v / (+r.step || 1)) * (+r.step || 1); r.dispatchEvent(new Event('input', { bubbles: true })); }); }).then(function(){ return esp(700); }); }); },
    function(){ passoAtual = 1; legenda('2 · Roteiro de slides', 'Exemplo resolvido, prática, correção e questão de saída', 'Cada aula segue as mesmas etapas — o aluno sabe sempre onde está.'); var n = Math.min(slides() - 1, 5), p = Promise.resolve(), i; for(i = 1; i <= n; i++) (function(k){ p = p.then(function(){ return ir(k); }).then(function(){ return esp(2300); }); })(i); return p.then(function(){ return ir(Math.min(2, slides() - 1)); }); },
    function(){ passoAtual = 2; legenda('3 · Caneta na própria aula', 'Marca-texto, caneta, setas e texto direto no slide', 'Atalho: D (ou menu ⋯). Funciona com mouse, toque e caneta de lousa digital.');
      return carrega('quadro.js', 'EduQuadro').then(function(){ W.EduQuadro.abrir(); return esp(700); }).then(function(){ return aperta('Marca-texto'); }).then(function(){ return traco(cv(), [[.08, .30], [.5, .31]], 1400); })
        .then(function(){ return aperta('Cor: vermelho'); }).then(function(){ return aperta('Caneta'); }).then(function(){ return traco(cv(), [[.55, .24], [.72, .22], [.78, .34], [.66, .44], [.54, .38], [.55, .24]], 1700); })
        .then(function(){ return aperta('Seta'); }).then(function(){ return traco(cv(), [[.3, .62], [.5, .5]], 900); }).then(function(){ return esp(2200); }); },
    function(){ passoAtual = 3; limpaTudo(); legenda('4 · Régua, esquadros e transferidor', 'A caneta “gruda” na borda: a linha sai reta, mesmo tremendo', 'Régua de 15 cm, esquadros de 45° e 60° e transferidor — arraste, gire e meça.');
      return aperta('Régua').then(function(){ return esp(500); }).then(function(){ var c = cv(), r = c.getBoundingClientRect(), k = Math.max(.55, Math.min(1.6, Math.min(r.width / 1100, r.height / 650))), u = 37.8 * k, y = .62 * r.height - 1.4 * u - 4, x0 = .5 * r.width - 5 * u, x1 = .5 * r.width + 5 * u, f = function(x, yy){ return [x / r.width, yy / r.height]; };
        return aperta('Caneta').then(function(){ return traco(c, [f(x0, y), f(x0 + (x1 - x0) * .25, y - 9), f(x0 + (x1 - x0) * .55, y + 8), f(x1, y - 3)], 2000); }); })
        .then(function(){ return esp(2600); }).then(function(){ return aperta('Régua'); }); },
    function(){ passoAtual = 4; limpaTudo(); legenda('5 · Radianos de verdade', 'O arco do tamanho do raio vira uma reta do tamanho do raio', 'Compasso → selecionar → “1 rad” → “Endireitar”: a curva se desenrola mantendo o comprimento.'); var c = cv();
      return aperta('Compasso').then(function(){ return traco(c, [[.34, .56], [.5, .56]], 1100); }).then(function(){ return aperta('Selecionar'); }).then(function(){ return toque(c, .5, .56); }).then(function(){ return esp(500); })
        .then(function(){ return chip('1 rad'); }).then(function(){ return esp(2200); }).then(function(){ legenda('5 · Radianos de verdade', 'Agora, endireite o arco…', 'Ele tem exatamente o comprimento do raio: por isso 1 rad ≈ 57,3°.'); return chip('Endireitar'); }).then(function(){ return esp(3600); }); },
    function(){ passoAtual = 5; limpaTudo(); legenda('6 · Figuras prontas', 'Sólidos, círculo trigonométrico, reta numérica, plano cartesiano…', 'Entram como traços: mova, redimensione, gire e escreva por cima.');
      return carrega('figuras-apoio.js', 'EduFiguras').then(function(){ return aperta('Figuras de apoio'); }).then(function(){ return esp(1100); }).then(function(){ var b = [].slice.call(D.querySelectorAll('.fg-g button')).filter(function(x){ return x.textContent.indexOf('Cilindro') >= 0; })[0]; if(!b) return; var r = b.getBoundingClientRect(); return vai(r.left + r.width / 2, r.top + r.height / 2, 500).then(clique).then(function(){ b.click(); return esp(900); }); })
        .then(function(){ var c = cv(), r = c.getBoundingClientRect(); return traco(c, [[.5, .48], [.72, .48]], 1300); }).then(function(){ return esp(2800); }); },
    function(){ passoAtual = 6; limpaTudo(); legenda('7 · Gráficos de funções', 'Digite a função: raízes, vértice e interseções aparecem sozinhos', 'Com a, b e c deslizantes, a parábola se transforma na frente da turma.');
      return carrega('graficos.js', 'EduGraficos').then(function(){ W.EduGraficos.definir(['a x^2 + b x + c']); return esp(1600); }).then(function(){ var g = D.querySelector('.gf-w'); var sa = g && g.querySelector('.gf-par input[data-k=a]'), sb = g && g.querySelector('.gf-par input[data-k=b]'), sc = g && g.querySelector('.gf-par input[data-k=c]'); if(!sa) return esp(1000);
        function mexe(inp, a, b, ms){ return anim(a, b, ms, function(v){ inp.value = Math.round(v * 10) / 10; inp.dispatchEvent(new Event('input', { bubbles: true })); }); }
        return mexe(sb, 0, 0, 10).then(function(){ return mexe(sc, 0, -3, 1100); }).then(function(){ return mexe(sb, 0, -4, 1400); }).then(function(){ return mexe(sa, 1, -1.5, 1500); }).then(function(){ return mexe(sa, -1.5, 2, 1500); }); })
        .then(function(){ return esp(700); }).then(function(){ if(W.EduGraficos) W.EduGraficos.alternar(); return esp(400); }); },
    function(){ passoAtual = 7; limpaTudo(); legenda('8 · Quadro lateral', 'O slide encolhe e libera um quarto da tela para os cálculos', 'Também há lousa cheia (clara ou escura) e fundo quadriculado, pontilhado ou com eixos.');
      return aperta('Quadro lateral à direita').then(function(){ return esp(700); }).then(function(){ var b = D.querySelector('.qd-board canvas'); if(!b) return; return aperta('Texto').then(function(){ return toque(b, .12, .22); }).then(function(){ var t = D.querySelector('.qd-txt'); if(t){ t.value = 'a² + b² = c²'; t.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })); } return esp(500); }).then(function(){ return aperta('Caneta'); }).then(function(){ return traco(b, [[.1, .5], [.7, .48], [.45, .6], [.8, .72]], 1700); }); })
        .then(function(){ return esp(900); }).then(function(){ return aperta('Quadro lateral à direita'); }); },
    function(){ passoAtual = 8; limpaTudo(); legenda('9 · E tem mais', 'Calculadora científica, votação A–E, cronômetro, sorteio, laser e holofote', 'Tudo na mesma aula, sem trocar de programa nem de janela.');
      return carrega('calculadora.js', 'EduCalc').then(function(){ return aperta('Calculadora'); }).then(function(){ var ks = ['1', '2', '×', '(', '3', '+', '4', ')', '=']; var p = esp(500); ks.forEach(function(k){ p = p.then(function(){ var b = D.querySelector('.cl-g button[data-k="' + k + '"]'); if(!b) return; var r = b.getBoundingClientRect(); return vai(r.left + r.width / 2, r.top + r.height / 2, 260).then(clique).then(function(){ b.click(); return esp(120); }); }); }); return p; })
        .then(function(){ return esp(1400); }).then(function(){ if(W.EduCalc) W.EduCalc.alternar(); return aperta('Votação'); }).then(function(){ var p = esp(600); ['A', 'B', 'A', 'A', 'C'].forEach(function(k){ p = p.then(function(){ var b = D.querySelector('.qd-voto button[data-k="' + k + '"]'); if(!b) return; var r = b.getBoundingClientRect(); return vai(r.left + r.width / 2, r.top + r.height / 2, 300).then(clique).then(function(){ b.click(); return esp(160); }); }); }); return p; })
        .then(function(){ return esp(1600); }).then(function(){ return aperta('Votação'); }); },
    function(){ passoAtual = 10; legenda('10 · Para o professor', 'Trilhas por turma, plano de aulas por data e provas em Word', 'Banco com milhares de questões, painel de turmas e aulas organizadas por matéria, ano e trimestre.'); return esp(6000); }
  ];

  function limpa(){ document.removeEventListener('keydown', tecla, true); try{ limpaTudo(); }catch(e){} try{ if(W.EduQuadro && W.EduQuadro.aberto()) W.EduQuadro.fechar(); }catch(e){} try{ var g = D.querySelector('.gf-w.on'); if(g && W.EduGraficos) W.EduGraficos.alternar(); var c = D.querySelector('.cl-w.on'); if(c && W.EduCalc) W.EduCalc.alternar(); var f = D.querySelector('.fg-w.on'); if(f && W.EduFiguras) W.EduFiguras.alternar(); var v = D.querySelector('.qd-voto'); if(v) v.remove(); }catch(e){} [leg, cur, ctl, fim].forEach(function(n){ if(n && n.parentNode) n.remove(); }); try{ if(W.goTo) W.goTo(0); }catch(e){} }
  function sair(){ parado = true; limpa(); }
  function final(){
    fim = el('div', 'tr-fim'); fim.innerHTML = '<div><h2>Gostou? Isso é só uma aula.</h2><p>Mais de 700 aulas, banco de questões, EduMath Provas, trilhas por turma e plano de aulas. Crie a conta grátis e teste com a sua turma — sem cartão.</p><a class="p" href="' + base.replace(/app\/$/, '') + 'login.html?modo=cadastrar">Criar conta grátis</a><a class="s" href="' + base.replace(/app\/$/, '') + 'planos.html">Ver planos</a><br><button type="button" data-r>↺ Ver de novo</button><button type="button" data-x>Fechar</button></div>';
    fim.addEventListener('click', function(e){ var b = e.target.closest('button'); if(!b) return; if(b.hasAttribute('data-x')) sair(); else if(b.hasAttribute('data-r')){ limpa(); iniciar(); } });
    (D.body || R).appendChild(fim); leg.remove(); ctl.remove(); document.removeEventListener('keydown', tecla, true);
  }
  function iniciar(){
    parado = false; pausado = false; passoAtual = 0; [leg, cur, ctl].forEach(function(n){ (D.body || R).appendChild(n); });
    ctl.onclick = function(e){ var b = e.target.closest('button'); if(!b) return; if(b.hasAttribute('data-x')) sair(); else alternaPausa(); };
    document.addEventListener('keydown', tecla, true);
    var p = Promise.resolve(); PASSOS.forEach(function(f){ p = p.then(function(){ if(parado) throw new Error('parou'); return Promise.resolve().then(f).catch(function(e){ if(e && e.message === 'parou') throw e; if(W.console) console.warn('tour:', e); }); }); });
    p.then(function(){ if(!parado) { limpa(); fim = null; document.removeEventListener('keydown', tecla, true); final(); } }).catch(function(){ /* saiu */ });
  }
  W.EduTour = { iniciar: iniciar, sair: sair, alternar: function(){ iniciar(); } };
  iniciar();
})();
