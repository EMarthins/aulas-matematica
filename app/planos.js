// ============================================================
// Planos e limites. O plano do professor fica em teachers/{uid} (plano, planoAte) e SÓ o administrador altera
// (firestore.rules + admin.html). Os limites abaixo são aplicados pelo site (no navegador); a trava definitiva
// por servidor entra junto com a cobrança automática (ver docs/roadmap-venda.md).
// TESTE GRÁTIS: todo professor novo ganha o Pro por VENDA.diasDeTeste dias (app/config-venda.js), contados do cadastro
// (teachers/{uid}.createdAt). Depois volta ao Gratuito sozinho, a não ser que o administrador libere um plano.
// ============================================================
import { VENDA } from './config-venda.js';

export const PLANOS = {
  free: { id: 'free', nome: 'Gratuito', provasNuvem: 3, questoesProprias: 40, turmas: 2 },
  pro: { id: 'pro', nome: 'Pro', provasNuvem: Infinity, questoesProprias: Infinity, turmas: Infinity },
  escola: { id: 'escola', nome: 'Escola', provasNuvem: Infinity, questoesProprias: Infinity, turmas: Infinity }
};

// Firestore Timestamp, {seconds}, texto, número ou Date -> Date (ou null)
function paraData(v) {
  let d = v;
  if (d && typeof d.toDate === 'function') d = d.toDate();
  else if (d && typeof d.seconds === 'number') d = new Date(d.seconds * 1000);
  else if (typeof d === 'string' || typeof d === 'number') d = new Date(d);
  return d instanceof Date && !isNaN(d) ? d : null;
}

/** Plano em vigor: 'pro'/'escola' só valem com planoAte no futuro; senão, teste grátis (se recente) ou gratuito. `doc` = dados de teachers/{uid}. */
export function planoVigente(doc, agora) {
  agora = agora || new Date();
  if (!doc) return PLANOS.free;
  if (doc.plano === 'pro' || doc.plano === 'escola') {
    const ate = paraData(doc.planoAte);
    if (ate && ate > agora) return PLANOS[doc.plano];
  }
  const dias = Number(VENDA.diasDeTeste) || 0, ini = paraData(doc.createdAt);
  if (dias > 0 && ini) {
    const fim = new Date(ini.getTime() + dias * 86400000);
    if (fim > agora) return Object.assign({}, PLANOS.pro, { nome: 'Pro (teste grátis)', teste: true, ate: fim });
  }
  return PLANOS.free;
}

/** Dias que faltam do teste grátis (0 se não está em teste). */
export function diasDeTesteRestantes(plano, agora) {
  if (!plano || !plano.teste || !plano.ate) return 0;
  return Math.max(0, Math.ceil((plano.ate - (agora || new Date())) / 86400000));
}

export const fmtData = d => { try { return (d && d.toDate ? d.toDate() : new Date(d)).toLocaleDateString('pt-BR'); } catch (e) { return ''; } };
