// Tela de Trilhas (trilhas.html): minhas turmas (onde cada turma parou, próxima aula, roteiro em módulos) e trilhas prontas por matéria/ano/trimestre.
import { TRILHAS, MATERIAS_TRILHA, trilhaPorId, Trilhas } from './trilhas.js';
import { iniciarSyncTrilhas } from './trilhas-nuvem.js';

const $app = document.getElementById('tlApp');
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const jl = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
const user = jl('sb:user', null);
const ehProf = !!user && user.role === 'professor';
const rotuloTurma = ehProf ? 'turma' : 'turma';

// matéria de atuação: perfil do professor (conta) ou a última escolha aqui
const materiaPref = () => { const m = (user && user.materia && user.materia !== 'varias' && user.materia) || Trilhas.perfil().materia || localStorage.getItem('materia-pref') || 'matematica'; return MATERIAS_TRILHA.some(x => x.id === m) ? m : (MATERIAS_TRILHA[0] ? MATERIAS_TRILHA[0].id : 'matematica'); };

const ICO = {
  ok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
  mais: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  voltar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5-7 7 7 7"/></svg>',
  lixo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>'
};

function quando(t) {
  if (!t) return '';
  const d = Math.floor((Date.now() - t) / 864e5);
  return d <= 0 ? 'hoje' : d === 1 ? 'ontem' : 'há ' + d + ' dias';
}
function barra(pct) { return '<span class="tl-bar" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><i style="width:' + pct + '%"></i></span>'; }

/* ---------------- roteiros ---------------- */
const vistoLocal = arq => { try { const p = JSON.parse(localStorage.getItem('prog:' + arq) || 'null'); return !!(p && p.v); } catch (e) { return false; } };
function listaModulos(tr, turma, aluno) {
  return '<ol class="tl-mods">' + tr.modulos.map(m => {
    const feitasM = turma ? m.aulas.filter(a => turma.feitas[a.arquivo]).length : 0;
    const completo = turma && feitasM === m.aulas.length;
    const aulas = m.aulas.map(a => {
      const feita = aluno ? vistoLocal(a.arquivo) : turma && turma.feitas[a.arquivo], pos = turma && turma.pos[a.arquivo];
      const parou = pos && !feita && pos.s > 0;
      const href = turma ? Trilhas.href(a.arquivo, turma.id, 0) : a.arquivo;
      const estado = feita ? '<span class="tl-st ok" title="Concluída">' + ICO.ok + '</span>' : parou ? '<span class="tl-st par" title="Parou aqui">' + ICO.play + '</span>' : '<span class="tl-st"></span>';
      const notaPos = parou ? '<small class="tl-pos">parou no slide ' + (pos.s + 1) + (pos.n ? ' de ' + pos.n : '') + ' · ' + quando(pos.t) + '</small>' : '';
      const nota = turma && turma.notas && turma.notas[a.arquivo] ? turma.notas[a.arquivo] : '';
      const acao = turma ? '<button type="button" class="tl-notab' + (nota ? ' on' : '') + '" data-nota="' + esc(a.arquivo) + '" title="Anotação desta aula">✎</button><button type="button" class="tl-chk' + (feita ? ' on' : '') + '" data-feita="' + esc(a.arquivo) + '" title="' + (feita ? 'Desmarcar como concluída' : 'Marcar como concluída') + '" aria-pressed="' + (!!feita) + '">' + ICO.ok + '</button>' : '';
      const notaLi = turma ? '<li class="tl-nota-li" data-nl="' + esc(a.arquivo) + '"' + (nota ? '' : ' hidden') + '><textarea class="tl-nota-ta" data-nota-ta="' + esc(a.arquivo) + '" rows="2" placeholder="Anotação desta aula para esta turma (ex.: faltou o exemplo 3; revisar na terça)">' + esc(nota) + '</textarea></li>' : '';
      return '<li class="tl-aula' + (feita ? ' feita' : '') + (parou ? ' parou' : '') + '">' + estado +
        '<a class="tl-al" href="' + esc(href) + '"><span class="tl-rot">' + esc(a.rotulo) + '</span><b>' + esc(a.titulo) + '</b>' + notaPos + '</a>' + acao + '</li>' + notaLi;
    }).join('');
    const extras = []
      .concat(m.guias.map(g => '<a class="tl-ex" href="' + esc(g.arquivo) + '">Guia visual</a>'))
      .concat(m.atividades.map(a => '<a class="tl-ex" href="' + esc(a.arquivo) + '">' + esc(a.sub ? 'Atividade · ' + a.sub : 'Atividade') + '</a>'));
    const pend = m.pendente ? '<div class="tl-pend">Guia visual e atividades · em breve</div>' : '';
    return '<li class="tl-mod' + (completo ? ' completo' : '') + '" style="--acc:var(--' + esc(m.accent) + ');--acc-soft:var(--' + esc(m.accent) + '-soft)">' +
      '<div class="tl-mh"><span class="tl-n">' + String(m.n).padStart(2, '0') + '</span><div><small>Módulo ' + String(m.n).padStart(2, '0') + '</small><h3>' + esc(m.titulo) + '</h3></div>' +
      (turma ? '<span class="tl-mc">' + feitasM + '/' + m.aulas.length + '</span>' : '<span class="tl-mc">' + m.aulas.length + (m.aulas.length === 1 ? ' aula' : ' aulas') + '</span>') + '</div>' +
      '<ul class="tl-aulas">' + aulas + '</ul>' + (extras.length ? '<div class="tl-exs">' + extras.join('') + '</div>' : '') + pend + '</li>';
  }).join('') + '</ol>';
}

/* ---------------- minhas turmas ---------------- */
function cartaoTurma(t) {
  const r = Trilhas.resumo(t), tr = r.trilha;
  const prox = r.proxima;
  let corpo;
  if (!tr) corpo = '<p class="tl-vazio-s">Escolha uma trilha para esta ' + rotuloTurma + '.</p>';
  else {
    corpo = '<div class="tl-prog">' + barra(r.pct) + '<span>' + r.feitas + ' de ' + r.total + ' aulas</span></div>';
    if (prox) {
      const p = prox.pos && prox.pos.s > 0 && !t.feitas[prox.aula.arquivo];
      corpo += '<div class="tl-onde"><small>' + (p ? 'Parou em' : (r.feitas ? 'Próxima aula' : 'Começar por')) + '</small><b>Módulo ' + String(prox.modulo.n).padStart(2, '0') + ' · ' + esc(prox.aula.titulo) + '</b>' +
        (p ? '<span>slide ' + (prox.pos.s + 1) + (prox.pos.n ? ' de ' + prox.pos.n : '') + ' · ' + quando(prox.pos.t) + '</span>' : '') + '</div>';
    } else corpo += '<div class="tl-onde ok"><b>Trilha concluída 🎉</b></div>';
  }
  const href = prox ? Trilhas.href(prox.aula.arquivo, t.id, prox.pos && !t.feitas[prox.aula.arquivo] ? prox.pos.s : 0) : '';
  return '<article class="tl-card" data-id="' + esc(t.id) + '">' +
    '<header><h3>' + esc(t.nome) + '</h3><small>' + (tr ? esc(tr.titulo) : 'sem trilha') + '</small></header>' + corpo +
    '<footer>' + (prox && href ? '<a class="tl-btn p" href="' + esc(href) + '">' + ICO.play + (r.feitas || (prox.pos && prox.pos.s > 0) ? 'Continuar' : 'Começar') + '</a>' : '') +
    '<a class="tl-btn" href="#turma/' + esc(t.id) + '">Ver roteiro</a></footer></article>';
}
function viewTurmas() {
  const ts = Trilhas.turmas();
  const novo = '<button type="button" class="tl-card tl-novo" data-nova><span class="tl-plus">' + ICO.mais + '</span><b>Nova ' + rotuloTurma + '</b><small>Escolha a trilha e acompanhe onde ' + (ehProf ? 'ela' : 'você') + ' parou</small></button>';
  if (!ts.length) {
    return '<div class="tl-intro"><h2>Comece criando uma ' + rotuloTurma + '</h2><p>Uma <b>turma</b> aqui é o seu caderno de bordo: você escolhe uma trilha (por exemplo, <i>Matemática · 1º ano · 1º trimestre</i>) e o EduMath guarda a aula e o slide em que ela parou — da próxima vez é só clicar em <b>Continuar</b>.</p>' +
      '<div class="tl-cta"><button type="button" class="tl-btn p" data-nova>' + ICO.mais + 'Criar minha primeira ' + rotuloTurma + '</button><a class="tl-btn" href="#prontas">Ver trilhas prontas</a></div></div>';
  }
  return '<div class="tl-grid">' + ts.map(cartaoTurma).join('') + novo + '</div>';
}
function viewRoteiro(id) {
  const tr = trilhaPorId(decodeURIComponent(id)); if (!tr) return '<p class="tl-vazio-s">Trilha não encontrada.</p>';
  const total = tr.totalAulas, vistas = tr.modulos.reduce((c, m) => c + m.aulas.filter(a => vistoLocal(a.arquivo)).length, 0), pct = total ? Math.round(vistas / total * 100) : 0;
  return '<a class="tl-volta" href="javascript:history.back()">' + ICO.voltar + 'Voltar</a><header class="tl-th" style="grid-template-columns:1fr"><div><label class="tl-lb">Trilha</label><h2 style="margin:0;font:900 1.4rem Archivo,sans-serif">' + esc(tr.titulo) + '</h2></div></header><div class="tl-resumo">' + barra(pct) + '<span><b>' + pct + '%</b> · ' + vistas + ' de ' + total + ' aulas que você já abriu</span></div>' + listaModulos(tr, null, true);
}
function viewTurma(id) {
  const t = Trilhas.turma(id); if (!t) { location.hash = '#turmas'; return ''; }
  const r = Trilhas.resumo(t), tr = r.trilha;
  const opts = TRILHAS.map(x => '<option value="' + esc(x.id) + '"' + (x.id === t.trilha ? ' selected' : '') + '>' + esc(x.titulo) + '</option>').join('');
  const prox = r.proxima;
  const href = prox ? Trilhas.href(prox.aula.arquivo, t.id, prox.pos && !t.feitas[prox.aula.arquivo] ? prox.pos.s : 0) : '';
  return '<a class="tl-volta" href="#turmas">' + ICO.voltar + 'Minhas ' + rotuloTurma + 's</a>' +
    '<header class="tl-th"><div><label class="tl-lb">Nome da ' + rotuloTurma + '</label><input class="tl-nome" id="tlNome" value="' + esc(t.nome) + '" maxlength="60"></div>' +
    '<div><label class="tl-lb">Trilha</label><select class="tl-sel" id="tlTrilha"><option value="">— escolha —</option>' + opts + '</select></div>' +
    '<button type="button" class="tl-btn danger" data-excluir title="Excluir esta ' + rotuloTurma + '">' + ICO.lixo + '</button></header>' +
    (t.classId ? '<p class="tl-vinc">Ligada à turma do Painel · os alunos aprovados veem esta trilha e a aula em que a turma está.</p>' : '') +
    (tr ? '<div class="tl-resumo">' + barra(r.pct) + '<button type="button" class="tl-btn" data-registro>Registro de aulas</button>' + '<span><b>' + r.pct + '%</b> · ' + r.feitas + ' de ' + r.total + ' aulas</span>' +
      (prox && href ? '<a class="tl-btn p" href="' + esc(href) + '">' + ICO.play + (r.feitas || (prox.pos && prox.pos.s > 0) ? 'Continuar' : 'Começar') + ': ' + esc(prox.aula.titulo) + '</a>' : '') + '</div>' + listaModulos(tr, t)
      : '<p class="tl-vazio-s">Escolha uma trilha acima para ver o roteiro.</p>');
}

/* ---------------- trilhas prontas ---------------- */
const filtroP = { materia: '', ano: '' };
function viewProntas(abrirId) {
  const alvo = abrirId ? trilhaPorId(abrirId) : null;
  if (alvo) { filtroP.materia = alvo.materia; if (filtroP.ano && filtroP.ano !== alvo.ano) filtroP.ano = ''; }
  if (!filtroP.materia) filtroP.materia = materiaPref();
  if (!MATERIAS_TRILHA.some(m => m.id === filtroP.materia)) filtroP.materia = MATERIAS_TRILHA[0] ? MATERIAS_TRILHA[0].id : '';
  const da = TRILHAS.filter(t => t.materia === filtroP.materia);
  const anos = [...new Set(da.map(t => t.ano))];
  const lista = da.filter(t => !filtroP.ano || t.ano === filtroP.ano);
  const chips = MATERIAS_TRILHA.map(m => '<button type="button" class="tl-chip' + (m.id === filtroP.materia ? ' on' : '') + '" data-mat="' + esc(m.id) + '">' + esc(m.nome) + '</button>').join('');
  const anoChips = '<button type="button" class="tl-chip s' + (!filtroP.ano ? ' on' : '') + '" data-ano="">Todos os anos</button>' + anos.map(a => '<button type="button" class="tl-chip s' + (a === filtroP.ano ? ' on' : '') + '" data-ano="' + esc(a) + '">' + esc(a) + '</button>').join('');
  const cards = lista.map(t => {
    const aberta = abrirId === t.id;
    return '<article class="tl-card tl-pronta' + (aberta ? ' aberta' : '') + '" id="p-' + esc(t.id.replace(/[^a-z0-9]/gi, '_')) + '">' +
      '<header><h3>' + esc(t.ano) + ' · ' + esc(t.trilhaCurta || t.trimestre) + '</h3><small>' + esc(t.materiaNome) + '</small></header>' +
      '<div class="tl-num"><b>' + t.totalModulos + '</b> módulos <span>·</span> <b>' + t.totalAulas + '</b> aulas</div>' +
      '<footer><button type="button" class="tl-btn p" data-usar="' + esc(t.id) + '">' + ICO.mais + 'Usar numa ' + rotuloTurma + '</button><button type="button" class="tl-btn" data-ver="' + esc(t.id) + '">' + (aberta ? 'Fechar roteiro' : 'Ver roteiro') + '</button></footer>' +
      (aberta ? '<div class="tl-prev">' + listaModulos(t, null) + '</div>' : '') + '</article>';
  }).join('') || '<p class="tl-vazio-s">Ainda não há trilhas para esta matéria.</p>';
  return '<div class="tl-filtros"><div class="tl-chips">' + chips + '</div><div class="tl-chips">' + anoChips + '</div></div><div class="tl-grid prontas">' + cards + '</div>';
}

/* ---------------- diálogo: nova turma / usar trilha ---------------- */
function dialogoNova(trilhaId) {
  const d = document.getElementById('tlDlg');
  const ts = Trilhas.turmas();
  const opts = TRILHAS.filter(t => t.materia === materiaPref()).concat(TRILHAS.filter(t => t.materia !== materiaPref()))
    .map(t => '<option value="' + esc(t.id) + '"' + (t.id === trilhaId ? ' selected' : '') + '>' + esc(t.titulo) + '</option>').join('');
  const existentes = ts.length ? '<div class="tl-ou"><label class="tl-lb">Ou use numa ' + rotuloTurma + ' que você já tem</label><select class="tl-sel" id="dgExist"><option value="">— nova ' + rotuloTurma + ' —</option>' + ts.map(t => '<option value="' + esc(t.id) + '">' + esc(t.nome) + '</option>').join('') + '</select></div>' : '';
  d.innerHTML = '<form method="dialog" class="tl-dlg-f"><h2>' + (trilhaId ? 'Usar esta trilha' : 'Nova ' + rotuloTurma) + '</h2>' +
    '<label class="tl-lb" for="dgNome">Nome da ' + rotuloTurma + '</label><input class="tl-nome" id="dgNome" placeholder="Ex.: 1º ano A · manhã" maxlength="60" autocomplete="off">' +
    '<label class="tl-lb" for="dgTr">Trilha</label><select class="tl-sel" id="dgTr">' + opts + '</select>' + existentes +
    '<div class="tl-dlg-b"><button type="button" class="tl-btn" data-fechar>Cancelar</button><button type="submit" class="tl-btn p" value="ok">Criar</button></div></form>';
  d.showModal();
  const nome = d.querySelector('#dgNome'), ex = d.querySelector('#dgExist');
  if (ex) ex.addEventListener('change', () => { nome.disabled = !!ex.value; d.querySelector('button[type=submit]').textContent = ex.value ? 'Usar' : 'Criar'; });
  d.querySelector('[data-fechar]').addEventListener('click', () => d.close());
  d.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const tr = d.querySelector('#dgTr').value, idEx = ex ? ex.value : '';
    let id;
    if (idEx) { Trilhas.trocarTrilha(idEx, tr); id = idEx; }
    else id = Trilhas.criar(nome.value || 'Minha turma', tr).id;
    d.close(); salvou(); location.hash = '#turma/' + id; render();
  });
  setTimeout(() => nome.focus(), 50);
}

/* ---------------- registro de aulas da turma ---------------- */
function dialogoRegistro(id) {
  const t = Trilhas.turma(id); if (!t) return;
  const d = document.getElementById('tlDlg'), txt = Trilhas.registro(t);
  d.innerHTML = '<form method="dialog" class="tl-dlg-f"><h2>Registro de aulas</h2><p class="tl-vazio-s" style="margin:0">Aulas dadas, onde parou e suas anotações — copie para o diário ou imprima.</p><textarea class="tl-nota-ta" id="dgReg" rows="14" readonly style="font-family:JetBrains Mono,monospace;font-size:.8rem"></textarea><div class="tl-dlg-b"><button type="button" class="tl-btn" data-fechar>Fechar</button><button type="button" class="tl-btn" data-copiar>Copiar</button><button type="button" class="tl-btn p" data-imprimir>Imprimir</button></div></form>';
  d.querySelector('#dgReg').value = txt; d.showModal();
  d.querySelector('[data-fechar]').addEventListener('click', () => d.close());
  d.querySelector('[data-copiar]').addEventListener('click', async e => { try { await navigator.clipboard.writeText(txt); e.target.textContent = 'Copiado ✓'; } catch (_) { d.querySelector('#dgReg').select(); document.execCommand('copy'); e.target.textContent = 'Copiado ✓'; } });
  d.querySelector('[data-imprimir]').addEventListener('click', () => { const w = window.open('', '_blank'); if (!w) return; w.document.write('<pre style="font:13px/1.5 Georgia,serif;white-space:pre-wrap;margin:24px">' + esc(txt) + '</pre>'); w.document.close(); w.focus(); w.print(); });
}

/* ---------------- roteamento ---------------- */
function rota() { const h = location.hash.replace(/^#/, '').split('/'); return { v: h[0] || 'turmas', a: h[1] || '' }; }
function render() {
  Trilhas.atualizarRoteiros();
  const r = rota();
  document.querySelectorAll('.tl-tab').forEach(b => b.classList.toggle('on', (b.dataset.v === 'turmas' && (r.v === 'turmas' || r.v === 'turma')) || b.dataset.v === r.v));
  $app.innerHTML = r.v === 'roteiro' ? viewRoteiro(r.a) : r.v === 'turma' ? viewTurma(r.a) : r.v === 'prontas' ? viewProntas(r.a ? decodeURIComponent(r.a) : '') : viewTurmas();
  if (r.v === 'prontas' && r.a) { const el = $app.querySelector('.tl-pronta.aberta'); if (el) el.scrollIntoView({ block: 'nearest' }); }
}
$app.addEventListener('click', e => {
  const t = e.target.closest('button'); if (!t) return;
  if (t.hasAttribute('data-nova')) return dialogoNova('');
  if (t.dataset.usar) return dialogoNova(t.dataset.usar);
  if (t.dataset.ver) { const aberta = rota().a === t.dataset.ver; location.hash = aberta ? '#prontas' : '#prontas/' + encodeURIComponent(t.dataset.ver); return; }
  if (t.dataset.mat) { filtroP.materia = t.dataset.mat; filtroP.ano = ''; return render(); }
  if (t.hasAttribute('data-ano')) { filtroP.ano = t.dataset.ano; return render(); }
  if (t.dataset.nota) { const li = $app.querySelector('[data-nl="' + CSS.escape(t.dataset.nota) + '"]'); if (li) { li.hidden = !li.hidden; if (!li.hidden) li.querySelector('textarea').focus(); } return; }
  if (t.hasAttribute('data-registro')) return dialogoRegistro(rota().a);
  if (t.dataset.feita) { const id = rota().a; Trilhas.alternarFeita(id, t.dataset.feita); salvou(); return render(); }
  if (t.hasAttribute('data-excluir')) { const id = rota().a, tt = Trilhas.turma(id); if (tt && confirm('Excluir "' + tt.nome + '"? O registro de onde ela parou será apagado.')) { Trilhas.remover(id); salvou(); location.hash = '#turmas'; } return; }
});
$app.addEventListener('change', e => {
  if (e.target.id === 'tlTrilha') { Trilhas.trocarTrilha(rota().a, e.target.value); salvou(); render(); }
});
$app.addEventListener('input', e => { if (e.target.dataset && e.target.dataset.notaTa) { Trilhas.anotar(rota().a, e.target.dataset.notaTa, e.target.value); salvou(); const b = $app.querySelector('[data-nota="' + CSS.escape(e.target.dataset.notaTa) + '"]'); if (b) b.classList.toggle('on', !!e.target.value.trim()); return; }
  if (e.target.id === 'tlNome') { Trilhas.renomear(rota().a, e.target.value); salvou(); } });
/* ---------------- nuvem (só professor logado; o resto continua local) ---------------- */
let sinc = null;
const salvou = () => { if (sinc) sinc.alterou(); };
function pintaNuvem(e) {
  const el = document.getElementById('tlNuvem'); if (!el) return;
  const T = { sincronizando: ['sync', 'Sincronizando…'], ok: ['ok', 'Salvo na nuvem'], parcial: ['aviso', 'Parte não subiu'], offline: ['aviso', 'Sem conexão — fica neste navegador'], erro: ['aviso', 'Só neste navegador (sem nuvem agora)'] }[e.estado];
  if (!T) { el.hidden = true; return; }
  el.hidden = false; el.className = 'tl-nuvem ' + T[0]; el.textContent = '☁ ' + T[1];
}
iniciarSyncTrilhas({ aoAtualizar: render, aoEstado: pintaNuvem }).then(s => { sinc = s; });

document.querySelectorAll('.tl-tab').forEach(b => b.addEventListener('click', () => { location.hash = '#' + b.dataset.v; }));
window.addEventListener('hashchange', render);
window.addEventListener('storage', render);
render();
