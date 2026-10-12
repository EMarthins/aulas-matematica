// ============================================================
// Acesso gratuito x conta. REGRA ÚNICA (usada pela página inicial e por scripts/aplicar-acesso.js):
// sem conta, cada matéria libera UMA aula por ano e trimestre — a primeira "Aula" do primeiro módulo que a tem.
// Guias, atividades e todo o resto só abrem depois de entrar com a conta.
// Para mudar quais aulas são grátis, mude a função aulasGratis() e rode:  node scripts/aplicar-acesso.js .
// ATENÇÃO: é uma trava no navegador (o site é estático, sem servidor). Ela barra o uso normal, mas quem
// sabe mexer no navegador consegue contornar; proteção de verdade exigiria servir as aulas por um backend.
// ============================================================
export const tipoDe = item => item.tipo === 'Atividade' ? 'atividade' : item.tipo === 'Guia' ? 'guia' : 'aula';

/** [{ materia, ano, trimestre, unidade, item }] — uma por matéria × ano × trimestre que tenha aula. */
export function aulasGratis(MATERIAS) {
  const lista = [];
  MATERIAS.forEach(m => {
    if (m.id === 'gratis') return;
    m.CATALOG.forEach(a => a.trimestres.forEach(t => {
      for (const u of t.unidades) {
        const item = u.itens.find(i => tipoDe(i) === 'aula');
        if (item) { lista.push({ materia: m, ano: a.ano, trimestre: t.nome, unidade: u, item }); return; }
      }
    }));
  });
  return lista;
}

/** Há uma conta entrando neste aparelho? (guardado por app/auth.js quando o perfil é carregado) */
export function logado() { try { return !!localStorage.getItem('sb:user'); } catch (e) { return false; } }

/** Endereço do login que volta para `destino` (caminho a partir da raiz do site). */
export function linkLogin(raiz, destino, cadastrar) {
  const p = []; if (cadastrar) p.push('modo=cadastrar'); if (destino) p.push('voltar=' + encodeURIComponent(destino));
  return raiz + 'login.html' + (p.length ? '?' + p.join('&') : '');
}
