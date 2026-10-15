// ============================================================
// Trilhas de estudo: roteiros prontos por matéria · ano · trimestre (módulos enumerados na ordem sugerida do catálogo)
// e o registro, por turma, de onde cada uma parou (aula + slide) e do que já foi feito.
//
//   TRILHAS            lista de trilhas montada a partir de app/catalog.js (sem as matérias ocultas)
//   Trilhas.*          armazenamento (localStorage 'trilhas:v1'; o app/ferramentas.js escreve nele também, ao navegar pelos slides)
//
// Formato do armazenamento:
//   { v: 1, perfil: { materia }, turmas: { <id>: { id, nome, trilha, criada, atualizado, ultima,
//        pos: { <arquivo>: { s, n, t } },            // slide em que a turma parou (s 0-based), total de slides e quando
//        feitas: { <arquivo>: t } } } }              // aulas concluídas (chegou ao último slide ou marcada à mão)
// Funciona sem login e offline; a sincronização com a nuvem (por professor) entra como coleção 'trilhas' depois.
// ============================================================
import { MATERIAS } from './catalog.js';

const KEY = 'trilhas:v1';
const slug = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[°º]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const bonito = s => String(s).replace('°', 'º');

export const tipoDe = it => (it.tipo === 'Atividade' ? 'atividade' : it.tipo === 'Guia' ? 'guia' : 'aula');

/** Monta as trilhas: uma por matéria · ano · trimestre, com módulos numerados e aulas em ordem ("Aula 1", "Aula 2"…). */
function construir() {
  const out = [];
  for (const m of MATERIAS) {
    if (m.oculta || !m.CATALOG) continue;
    for (const a of m.CATALOG) {
      for (const t of a.trimestres) {
        const modulos = [];
        // o número do módulo é a posição da unidade no trimestre (igual ao catálogo e ao topo das aulas)
        t.unidades.forEach((u, ui) => {
          if (!u.itens || !u.itens.length) return;
          const aulas = [], guias = [], ativ = [];
          for (const it of u.itens) {
            const tp = tipoDe(it);
            if (tp === 'aula') aulas.push({ arquivo: it.arquivo, titulo: it.titulo, rotulo: 'Aula ' + (aulas.length + 1) });
            else if (tp === 'guia') guias.push({ arquivo: it.arquivo, titulo: it.titulo });
            else ativ.push({ arquivo: it.arquivo, titulo: it.titulo, sub: it.sub || '' });
          }
          if (!aulas.length) return;
          modulos.push({ n: ui + 1, titulo: u.titulo, accent: u.accent || 'primary', icon: u.icon || 'numbers', pendente: !!u.pendente, aulas, guias, atividades: ativ });
        });
        if (!modulos.length) continue;
        const total = modulos.reduce((c, x) => c + x.aulas.length, 0);
        out.push({
          id: m.id + ':' + slug(a.ano) + ':' + slug(t.nome), materia: m.id, materiaNome: m.nome, icon: m.icon,
          ano: bonito(a.ano), trimestre: bonito(t.nome), titulo: m.nome + ' · ' + bonito(a.ano) + ' · ' + bonito(t.nome),
          modulos, totalAulas: total, totalModulos: modulos.length
        });
      }
    }
  }
  return out;
}
export const TRILHAS = construir();
export const trilhaPorId = id => TRILHAS.find(t => t.id === id) || null;
export const MATERIAS_TRILHA = [...new Map(TRILHAS.map(t => [t.materia, t.materiaNome])).entries()].map(([id, nome]) => ({ id, nome }));

// ---------- armazenamento ----------
const ls = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }
};
function ler() { try { const o = JSON.parse(ls.get(KEY) || 'null'); if (o && o.v === 1) return o; } catch (e) { /* recomeça */ } return { v: 1, perfil: {}, turmas: {} }; }
function gravar(o) { return ls.set(KEY, JSON.stringify(o)); }
/** Lista plana (na ordem sugerida) das aulas da trilha: guardada na turma para as aulas saberem qual é a próxima. */
const roteiroDe = tr => { const r = []; if (tr) tr.modulos.forEach(m => m.aulas.forEach(a => r.push({ a: a.arquivo, t: a.titulo, m: m.n }))); return r; };
const novoId = () => 't' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const agora = () => Date.now();

export const Trilhas = {
  ler, gravar,
  perfil() { return ler().perfil || {}; },
  definirPerfil(p) { const o = ler(); o.perfil = Object.assign(o.perfil || {}, p); gravar(o); },
  turmas() { return Object.values(ler().turmas).sort((a, b) => (b.atualizado || 0) - (a.atualizado || 0)); },
  turma(id) { return ler().turmas[id] || null; },
  criar(nome, trilha) {
    const o = ler(), id = novoId();
    o.turmas[id] = { id, nome: String(nome || 'Minha turma').trim() || 'Minha turma', trilha: trilha || '', criada: agora(), atualizado: agora(), ultima: '', pos: {}, feitas: {}, roteiro: roteiroDe(trilhaPorId(trilha)) };
    gravar(o); return o.turmas[id];
  },
  renomear(id, nome) { const o = ler(), t = o.turmas[id]; if (!t) return; t.nome = String(nome).trim() || t.nome; t.atualizado = agora(); gravar(o); },
  trocarTrilha(id, trilha) { const o = ler(), t = o.turmas[id]; if (!t) return; t.trilha = trilha; t.roteiro = roteiroDe(trilhaPorId(trilha)); t.atualizado = agora(); gravar(o); },
  /** Turmas antigas (ou com a trilha reorganizada no catálogo) ganham/atualizam o roteiro; devolve true se mudou algo. */
  atualizarRoteiros() {
    const o = ler(); let mudou = false;
    Object.values(o.turmas).forEach(t => { const r = roteiroDe(trilhaPorId(t.trilha)); if (JSON.stringify(r) !== JSON.stringify(t.roteiro || [])) { t.roteiro = r; mudou = true; } });
    if (mudou) gravar(o); return mudou;
  },
  remover(id) { const o = ler(); delete o.turmas[id]; gravar(o); },
  marcarPosicao(id, arquivo, s, n) {
    const o = ler(), t = o.turmas[id]; if (!t) return;
    t.pos[arquivo] = { s, n, t: agora() }; t.ultima = arquivo; t.atualizado = agora();
    if (n && s >= n - 1) t.feitas[arquivo] = t.feitas[arquivo] || agora();
    gravar(o);
  },
  alternarFeita(id, arquivo, v) {
    const o = ler(), t = o.turmas[id]; if (!t) return;
    const ja = !!t.feitas[arquivo], quer = v == null ? !ja : !!v;
    if (quer) t.feitas[arquivo] = agora(); else delete t.feitas[arquivo];
    t.atualizado = agora(); gravar(o);
  },
  /** Liga uma turma do Painel (classId) a uma trilha: reaproveita a turma local já ligada ou cria uma. */
  vincular(classId, nome, trilha) {
    const o = ler(); let t = Object.values(o.turmas).find(x => x.classId === classId);
    if (!t) { const id = novoId(); t = o.turmas[id] = { id, nome: String(nome || 'Turma').trim() || 'Turma', trilha: trilha || '', criada: agora(), atualizado: agora(), ultima: '', pos: {}, feitas: {}, notas: {}, classId, roteiro: roteiroDe(trilhaPorId(trilha)) }; }
    else if (trilha && t.trilha !== trilha) { t.trilha = trilha; t.roteiro = roteiroDe(trilhaPorId(trilha)); t.atualizado = agora(); }
    gravar(o); return t;
  },
  porClasse(classId) { return Object.values(ler().turmas).find(x => x.classId === classId) || null; },
  /** Anotação do professor sobre uma aula naquela turma (ex.: "faltou o exemplo 3", "revisar na terça"). */
  anotar(id, arquivo, texto) { const o = ler(), t = o.turmas[id]; if (!t) return; t.notas = t.notas || {}; if (String(texto).trim()) t.notas[arquivo] = String(texto); else delete t.notas[arquivo]; t.atualizado = agora(); gravar(o); },
  /** Registro de aulas da turma em texto (aulas dadas com data, onde parou e anotações), para copiar ou imprimir. */
  registro(turma) {
    const tr = trilhaPorId(turma.trilha); if (!tr) return '';
    const dt = t => new Date(t).toLocaleDateString('pt-BR');
    const L = ['Registro de aulas — ' + turma.nome, tr.titulo, 'Emitido em ' + dt(agora()), ''];
    tr.modulos.forEach(m => {
      const linhas = [];
      m.aulas.forEach(a => {
        const feita = turma.feitas[a.arquivo], pos = turma.pos[a.arquivo], nota = (turma.notas || {})[a.arquivo];
        if (!feita && !pos && !nota) return;
        linhas.push('  ' + (feita ? '[x] ' : '[ ] ') + a.rotulo + ' · ' + a.titulo + (feita ? ' — concluída em ' + dt(feita) : pos ? ' — parou no slide ' + (pos.s + 1) + (pos.n ? ' de ' + pos.n : '') + ' (' + dt(pos.t) + ')' : ''));
        if (nota) linhas.push('      Anotação: ' + String(nota).replace(/\n/g, ' '));
      });
      if (linhas.length) { L.push('Módulo ' + String(m.n).padStart(2, '0') + ' · ' + m.titulo); L.push(...linhas); L.push(''); }
    });
    const r = this.resumo(turma); L.push('Progresso: ' + r.feitas + ' de ' + r.total + ' aulas (' + r.pct + '%)');
    if (r.proxima) L.push('Próxima aula: Módulo ' + String(r.proxima.modulo.n).padStart(2, '0') + ' · ' + r.proxima.aula.titulo);
    return L.join('\n');
  },
  /** Zera a posição guardada de uma aula (recomeça do slide 1). */
  zerarPosicao(id, arquivo) { const o = ler(), t = o.turmas[id]; if (!t) return; delete t.pos[arquivo]; gravar(o); },
  /** Resumo da turma na sua trilha: progresso, onde parou e qual é a próxima aula. */
  resumo(turma) {
    const tr = trilhaPorId(turma.trilha); if (!tr) return { trilha: null, feitas: 0, total: 0, pct: 0, ultima: null, proxima: null };
    const todas = [];
    tr.modulos.forEach(m => m.aulas.forEach(a => todas.push({ m, a })));
    const feitas = todas.filter(x => turma.feitas[x.a.arquivo]).length;
    let ultima = null;
    if (turma.ultima) { const x = todas.find(y => y.a.arquivo === turma.ultima); if (x) ultima = { modulo: x.m, aula: x.a, pos: turma.pos[x.a.arquivo] || null }; }
    // próxima: a primeira aula (na ordem sugerida) que ainda não foi concluída; se parou no meio de uma, é essa
    let proxima = null;
    if (ultima && !turma.feitas[ultima.aula.arquivo]) proxima = ultima;
    else { const x = todas.find(y => !turma.feitas[y.a.arquivo] && !y.m.pendente) || todas.find(y => !turma.feitas[y.a.arquivo]); if (x) proxima = { modulo: x.m, aula: x.a, pos: turma.pos[x.a.arquivo] || null }; }
    return { trilha: tr, feitas, total: todas.length, pct: todas.length ? Math.round(feitas / todas.length * 100) : 0, ultima, proxima };
  },
  /** Endereço para abrir uma aula já no contexto da turma (o app/ferramentas.js retoma o slide e registra o avanço). */
  href(arquivo, turmaId, slide) { return arquivo + '#t=' + turmaId + (slide > 0 ? '&s=' + (slide + 1) : ''); }
};
