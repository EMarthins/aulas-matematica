// ============================================================
// Sincronização do Proveiro com a nuvem (Firestore), sem perder o uso offline.
//
// O navegador continua sendo a cópia de trabalho (localStorage). A nuvem guarda uma cópia por professor:
//   teachers/{uid}/provas/{id}    · uma prova salva
//   teachers/{uid}/questoes/{id}  · uma questão própria
//   teachers/{uid}/config/{id}    · perfil padrão do cabeçalho
// Cada item vira { id, t, json } (json = o item inteiro em texto: o Firestore não aceita matrizes aninhadas).
//
// Regra de sincronização (três vias): guarda-se, por item, a "impressão digital" da última versão sincronizada.
//   · só mudou aqui  → envia · só mudou na nuvem → traz · mudou nos dois → vence o mais recente (empate: o daqui)
//   · sumiu de um lado (e já tinha sido sincronizado) → foi excluído lá: exclui do outro lado também
// Este módulo é puro (sem Firebase): `remoto` e `local` são adaptadores — assim dá para testar em Node.
// ============================================================

/** Texto estável (chaves ordenadas) para comparar e guardar itens. */
export function ser(v) {
  if (Array.isArray(v)) return '[' + v.map(ser).join(',') + ']';
  if (v && typeof v === 'object') return '{' + Object.keys(v).filter(k => v[k] !== undefined).sort().map(k => JSON.stringify(k) + ':' + ser(v[k])).join(',') + '}';
  return JSON.stringify(v === undefined ? null : v);
}
/** Impressão digital curta (FNV-1a de 32 bits + tamanho). */
export function digital(texto) {
  let h = 0x811c9dc5;
  for (let i = 0; i < texto.length; i++) { h ^= texto.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(36) + '.' + texto.length.toString(36);
}
const tempoDe = it => String((it && (it.atualizado || it._t)) || '');

/**
 * Sincroniza UMA coleção.
 *  L: { id: item } locais · R: { id: { id, t, json } } remotos · S: { id: digital } da última sincronização
 *  limite: máximo de itens na nuvem (Infinity = sem limite)
 * Devolve { L2, S2, subir: [item], baixar: [item], apagarRemoto: [id], bloqueados: n, resumo }
 */
export function mesclar(L, R, S, limite) {
  const L2 = Object.assign({}, L), S2 = {}, subir = [], baixar = [], apagarRemoto = [];
  let bloqueados = 0, noRemoto = Object.keys(R).length;
  const ids = new Set([...Object.keys(L), ...Object.keys(R)]);
  for (const id of ids) {
    const l = L[id], r = R[id], s = S[id];
    if (l !== undefined && r !== undefined) {
      const tl = ser(l), hl = digital(tl), hr = digital(r.json), rItem = JSON.parse(r.json);
      if (hl === hr) { S2[id] = hl; continue; }
      let enviar;
      if (s === undefined) enviar = true;                 // existe nos dois mas nunca sincronizou: o daqui vence
      else if (hl === s) enviar = false;                  // só mudou na nuvem
      else if (hr === s) enviar = true;                   // só mudou aqui
      else enviar = tempoDe(l) >= tempoDe(rItem);         // mudou nos dois: o mais recente
      if (enviar) { subir.push(l); S2[id] = hl; } else { L2[id] = rItem; baixar.push(rItem); S2[id] = hr; }
    } else if (l !== undefined) {
      const hl = digital(ser(l));
      if (s !== undefined && hl === s) { delete L2[id]; }   // já sincronizado, sem mudanças e sumiu da nuvem: excluído em outro aparelho
      else if (noRemoto < limite || s !== undefined) { subir.push(l); S2[id] = hl; noRemoto++; } // novo (ou editado depois de excluído lá): envia
      else bloqueados++;                                   // acima do limite do plano: fica só neste navegador
    } else {
      const rItem = JSON.parse(r.json), hr = digital(r.json);
      if (s !== undefined && hr === s) { apagarRemoto.push(id); noRemoto--; } // já sincronizado, sem mudanças e sumiu daqui: excluído neste aparelho
      else { L2[id] = rItem; baixar.push(rItem); S2[id] = hr; }                // novo na nuvem (ou editado depois de excluído aqui): traz
    }
  }
  return { L2, S2, subir, baixar, apagarRemoto, bloqueados };
}

export const COLECOES = ['provas', 'questoes', 'config'];

/**
 * Sincroniza tudo. local: { ler(col) → { id: item }, gravar(col, { id: item }), lerMeta() → {col:{id:digital}}, gravarMeta(meta) }
 * remoto: { listar(col) → [{ id, t, json }], gravar(col, id, { id, t, json }), apagar(col, id) }
 * limites: { provas, questoes, config } (Infinity = sem limite)
 */
export async function sincronizar(local, remoto, limites = {}, colecoes = COLECOES) {
  const meta = local.lerMeta() || {}, meta2 = {}, resumo = { enviadas: 0, trazidas: 0, apagadasNuvem: 0, bloqueados: {}, falhas: [] };
  for (const col of colecoes) {
    const L = local.ler(col) || {};
    const lista = await remoto.listar(col), R = {};
    lista.forEach(d => { if (d && d.json) R[d.id] = d; });
    const lim = limites[col] == null ? Infinity : limites[col];
    const { L2, S2, subir, baixar, apagarRemoto, bloqueados } = mesclar(L, R, meta[col] || {}, lim);
    const S3 = Object.assign({}, S2);
    for (const item of subir) {
      try { await remoto.gravar(col, item.id, { id: item.id, t: tempoDe(item) || new Date().toISOString(), json: ser(item) }); resumo.enviadas++; }
      catch (e) { resumo.falhas.push({ col, id: item.id, erro: String(e && e.message || e) }); delete S3[item.id]; }
    }
    for (const id of apagarRemoto) {
      try { await remoto.apagar(col, id); resumo.apagadasNuvem++; } catch (e) { resumo.falhas.push({ col, id, erro: String(e && e.message || e) }); S3[id] = meta[col] && meta[col][id]; }
    }
    resumo.trazidas += baixar.length;
    local.gravar(col, L2);
    resumo.bloqueados[col] = bloqueados;
    meta2[col] = S3;
  }
  local.gravarMeta(meta2);
  return resumo;
}

/** Controla quando sincronizar (ao entrar, ao alterar, ao voltar a ficar online) e avisa a tela do estado. */
export function criarSincronizador({ local, remoto, limites, colecoes, aoEstado, aoAtualizarLocal, atraso = 1500 }) {
  let timer = null, rodando = false, pendente = false, ativo = true;
  const estado = (e, extra) => { try { aoEstado && aoEstado(Object.assign({ estado: e }, extra || {})); } catch (_) { /* tela */ } };
  async function rodar() {
    if (!ativo) return;
    if (rodando) { pendente = true; return; }
    rodando = true; estado('sincronizando');
    try {
      const r = await sincronizar(local, remoto, typeof limites === 'function' ? limites() : (limites || {}), colecoes || COLECOES);
      estado(r.falhas.length ? 'parcial' : 'ok', { resumo: r, bloqueados: r.bloqueados, quando: new Date().toISOString() });
      if (r.trazidas && aoAtualizarLocal) aoAtualizarLocal(r);
    } catch (e) {
      estado(typeof navigator !== 'undefined' && navigator.onLine === false ? 'offline' : 'erro', { erro: String(e && e.message || e) });
    }
    rodando = false;
    if (pendente) { pendente = false; agendar(); }
  }
  function agendar() { clearTimeout(timer); timer = setTimeout(rodar, atraso); }
  if (typeof window !== 'undefined') window.addEventListener('online', () => { if (ativo) agendar(); });
  return { agora: rodar, alterou: agendar, parar() { ativo = false; clearTimeout(timer); } };
}
