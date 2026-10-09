  // ---- "continuar de onde parou" e "próxima sugerida" ----
  function achaItem(arq){ var r = null; MATERIAS.forEach(function(m, mi){ m.CATALOG.forEach(function(a){ a.trimestres.forEach(function(t){ t.unidades.forEach(function(u){ u.itens.forEach(function(i){ if(i.arquivo === arq) r = { item: i, unidade: u, ano: a.ano, mi: mi }; }); }); }); }); }); return r; }
  function sugerida(idx){
    var m = MATERIAS[idx]; var achado = null;
    m.CATALOG.forEach(function(a){ a.trimestres.forEach(function(t){ t.unidades.forEach(function(u){ u.itens.forEach(function(i){ if(!achado && i.tipo.indexOf('Aula') === 0){ var p = prog(i.arquivo); if(!(p && p.v)) achado = { item: i, unidade: u, ano: a.ano }; } }); }); }); });
    return achado;
  }
  function renderContinuar(){
    var box = document.getElementById('continuar'); box.innerHTML = '';
    var u = null; try{ u = JSON.parse(localStorage.getItem('prog:ultimo') || 'null'); }catch(e){}
    if(u && u.a && achaItem(u.a)){ var a = document.createElement('a'); a.className = 'cont-card'; a.href = u.a + (u.s > 0 ? '#s=' + (u.s + 1) : '');
      a.innerHTML = '<small>▶ Continuar de onde parou</small><b>' + achaItem(u.a).item.titulo + '</b><span>' + (u.s > 0 ? 'slide ' + (u.s + 1) + ' · ' : '') + achaItem(u.a).unidade.titulo + '</span>'; box.appendChild(a); }
    var s = sugerida(estado.idx);
    if(s){ var b = document.createElement('a'); b.className = 'cont-card'; b.href = s.item.arquivo; b.innerHTML = '<small>★ Próxima aula sugerida</small><b>' + s.item.titulo + '</b><span>' + s.ano + ' · ' + s.unidade.titulo + '</span>'; box.appendChild(b); }
  }

  // ---- revisão pendente, sequência de dias e conquistas ----
  function jl(k, d){ try{ var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; }catch(e){ return d; } }
  function sequencia(){
    var dias = jl('prog:dias', []); if(!dias.length) return 0; var set = {}; dias.forEach(function(d){ set[d] = 1; });
    var n = 0, d = new Date(); function f(x){ return x.getFullYear() + '-' + ('0' + (x.getMonth() + 1)).slice(-2) + '-' + ('0' + x.getDate()).slice(-2); }
    if(!set[f(d)]) d.setDate(d.getDate() - 1);
    while(set[f(d)]){ n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function coletaProgresso(){
    var vistos = 0, aulas = 0, ativ = 0, perfeitas = 0;
    MATERIAS.forEach(function(m){ m.CATALOG.forEach(function(a){ a.trimestres.forEach(function(t){ t.unidades.forEach(function(u){ u.itens.forEach(function(i){ var p = prog(i.arquivo); if(!(p && p.v)) return; vistos++; if(i.tipo.indexOf('Aula') === 0) aulas++; if(i.tipo === 'Atividade' && p.t){ ativ++; if(p.s === p.t) perfeitas++; } }); }); }); }); });
    return { vistos: vistos, aulas: aulas, ativ: ativ, perfeitas: perfeitas };
  }
  function renderConquistas(){
    var c = coletaProgresso(), seq = sequencia(), dom = +(localStorage.getItem('rev:dominadas') || 0), sims = jl('sim:hist', []), bom = sims.some(function(s){ return s.a / s.n >= .8; });
    var L = [
      ['🌱', 'Primeiro passo', 'Abra sua primeira aula', Math.min(1, c.aulas), 1],
      ['📚', 'Estudante dedicado', 'Abra 10 aulas', Math.min(10, c.aulas), 10],
      ['🏫', 'Maratonista', 'Abra 25 aulas', Math.min(25, c.aulas), 25],
      ['🎯', 'Mão na massa', 'Conclua 10 atividades', Math.min(10, c.ativ), 10],
      ['💯', 'Nota máxima', 'Gabarite uma atividade', Math.min(1, c.perfeitas), 1],
      ['🏅', 'Colecionador de 10', 'Gabarite 10 atividades', Math.min(10, c.perfeitas), 10],
      ['🔥', '3 dias seguidos', 'Estude 3 dias seguidos', Math.min(3, seq), 3],
      ['⚡', 'Semana de fogo', 'Estude 7 dias seguidos', Math.min(7, seq), 7],
      ['🔁', 'Persistente', 'Domine 1 questão na Revisão', Math.min(1, dom), 1],
      ['🧠', 'Memória de elefante', 'Domine 10 questões', Math.min(10, dom), 10],
      ['📝', 'Simulado feito', 'Termine um simulado', Math.min(1, sims.length), 1],
      ['🏆', 'Mandou bem', 'Tire 80% ou mais em um simulado', bom ? 1 : 0, 1]
    ];
    var box = document.getElementById('conqs'); box.innerHTML = '';
    L.forEach(function(x){ var ok = x[3] >= x[4]; var d = document.createElement('div'); d.className = 'conq' + (ok ? ' on' : ''); d.innerHTML = '<div class="ic">' + x[0] + '</div><b>' + x[1] + '</b><span>' + x[2] + '</span><i><u style="width:' + Math.round(x[3] / x[4] * 100) + '%"></u></i><span style="font-size:.7rem">' + x[3] + '/' + x[4] + (ok ? ' ✔' : '') + '</span>'; box.appendChild(d); });
    return { feitas: L.filter(function(x){ return x[3] >= x[4]; }).length, total: L.length, seq: seq };
  }
  function marcadores(){
    var due = jl('rev:itens', []).filter(function(x){ return x.due <= Date.now(); }).length, n = document.getElementById('revN');
    n.hidden = !due; n.textContent = due;
    var r = renderConquistas(); document.getElementById('btnConq').textContent = '🏆 Conquistas ' + r.feitas + '/' + r.total + (r.seq > 1 ? ' · 🔥 ' + r.seq + ' dias' : '');
  }
  document.getElementById('btnConq').addEventListener('click', function(){ renderConquistas(); document.getElementById('mConq').classList.add('on'); });
  document.getElementById('fecharConq').addEventListener('click', function(){ document.getElementById('mConq').classList.remove('on'); });
  document.getElementById('mConq').addEventListener('click', function(e){ if(e.target === this) this.classList.remove('on'); });
  // instalar como app
  var evInst = null;
  window.addEventListener('beforeinstallprompt', function(e){ e.preventDefault(); evInst = e; document.getElementById('btnInstalar').hidden = false; });
  document.getElementById('btnInstalar').addEventListener('click', function(){ if(evInst){ evInst.prompt(); evInst = null; this.hidden = true; } });
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('sw.js').catch(function(){}); }
