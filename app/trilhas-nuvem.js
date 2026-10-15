// Sincroniza as turmas das trilhas (app/trilhas.js) com a nuvem para professores logados: teachers/{uid}/trilhas/{turma}.
// Offline primeiro: o armazenamento local continua sendo a cópia de trabalho; sem login/sem rede nada muda.
// Uso: const s = await iniciarSyncTrilhas({ aoAtualizar, aoEstado });  s && s.alterou();
import { Trilhas } from './trilhas.js';

const META = 'trilhas:nuvem:meta', DONO = 'trilhas:nuvem:uid';
const jl = (k, d) => { try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } };
const sl = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* cheio */ } };

const local = {
  ler(col) { return col === 'trilhas' ? Trilhas.ler().turmas : {}; },
  gravar(col, v) { if (col !== 'trilhas') return; const o = Trilhas.ler(); o.turmas = v; Trilhas.gravar(o); },
  lerMeta: () => jl(META, {}),
  gravarMeta: m => sl(META, m)
};

let ativo = null;
export async function iniciarSyncTrilhas({ aoAtualizar, aoEstado } = {}) {
  const user = jl('sb:user', null);
  if (!user || user.role !== 'professor') { aoEstado && aoEstado({ estado: 'sem-login' }); return null; }
  try {
    const [{ aoMudarAuth }, { remotoFirestore }, { criarSincronizador }] = await Promise.all([import('./auth.js'), import('./nuvem-firestore.js'), import('./nuvem.js')]);
    return await new Promise(resolve => {
      let feito = false;
      aoMudarAuth(u => {
        if (!u) { if (!feito) { feito = true; aoEstado && aoEstado({ estado: 'sem-login' }); resolve(null); } return; }
        if (feito) return; feito = true;
        // dados de outra conta neste navegador: não mistura (zera o controle de sincronização)
        const dono = jl(DONO, null);
        if (dono && dono !== u.uid) sl(META, {});
        sl(DONO, u.uid);
        if (ativo) ativo.parar();
        ativo = criarSincronizador({ local, remoto: remotoFirestore(u.uid), colecoes: ['trilhas'], limites: {}, aoEstado, aoAtualizarLocal: aoAtualizar });
        ativo.agora();
        resolve(ativo);
      });
    });
  } catch (e) { aoEstado && aoEstado({ estado: 'erro' }); return null; }
}
