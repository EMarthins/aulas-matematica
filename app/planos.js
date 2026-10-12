// ============================================================
// Planos e limites. O plano do professor fica em teachers/{uid} (plano, planoAte) e SÓ o administrador altera
// (firestore.rules + admin.html). Os limites abaixo são aplicados pelo site (no navegador); a trava definitiva
// por servidor entra junto com a cobrança automática (ver docs/roadmap-venda.md).
// ============================================================
export const PLANOS = {
  free: { id: 'free', nome: 'Gratuito', provasNuvem: 3, questoesProprias: 40, turmas: 2 },
  pro: { id: 'pro', nome: 'Pro', provasNuvem: Infinity, questoesProprias: Infinity, turmas: Infinity },
  escola: { id: 'escola', nome: 'Escola', provasNuvem: Infinity, questoesProprias: Infinity, turmas: Infinity }
};

/** Plano em vigor: 'pro'/'escola' só valem com planoAte no futuro; senão, gratuito. `doc` = dados de teachers/{uid}. */
export function planoVigente(doc, agora) {
  agora = agora || new Date();
  if (!doc || (doc.plano !== 'pro' && doc.plano !== 'escola')) return PLANOS.free;
  let ate = doc.planoAte;
  if (ate && typeof ate.toDate === 'function') ate = ate.toDate();
  else if (ate && typeof ate.seconds === 'number') ate = new Date(ate.seconds * 1000);
  else if (typeof ate === 'string' || typeof ate === 'number') ate = new Date(ate);
  if (!(ate instanceof Date) || isNaN(ate) || ate <= agora) return PLANOS.free;
  return PLANOS[doc.plano];
}

export const fmtData = d => { try { return (d && d.toDate ? d.toDate() : new Date(d)).toLocaleDateString('pt-BR'); } catch (e) { return ''; } };
