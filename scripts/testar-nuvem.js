// Testa a sincronização com a nuvem (app/nuvem.js) com um "Firestore" falso em memória.   node scripts/testar-nuvem.js
const path = require('path');
(async () => {
  const N = await import('file:///' + path.resolve(__dirname, '../app/nuvem.js').split(path.sep).join('/'));
  let falhas = 0, total = 0;
  const ok = (c, msg) => { total++; if (!c) { falhas++; console.log('  ✘ ' + msg); } };

  const novoRemoto = () => { const db = { provas: {}, questoes: {}, config: {} }; return { db, quebra: false, falhaGravar: null,
    async listar(c) { if (this.quebra) throw new Error('offline'); return Object.values(db[c]).map(d => Object.assign({}, d)); },
    async gravar(c, id, d) { if (this.falhaGravar === id) throw new Error('grande demais'); db[c][id] = d; },
    async apagar(c, id) { delete db[c][id]; } }; };
  const novoLocal = (ini = {}) => { const dados = { provas: {}, questoes: {}, config: {} }; Object.assign(dados, ini); let meta = {};
    return { dados, ler: c => JSON.parse(JSON.stringify(dados[c] || {})), gravar: (c, v) => { dados[c] = v; }, lerMeta: () => meta, gravarMeta: m => { meta = m; } }; };
  const P = (id, t, extra) => Object.assign({ id, nome: 'Prova ' + id, atualizado: t, itens: [[1, 2], [3]] }, extra || {});

  // 1. primeiro login: envia o que existe
  { const r = novoRemoto(), l = novoLocal({ provas: { a: P('a', '2026-01-01'), b: P('b', '2026-01-02') } });
    const res = await N.sincronizar(l, r, {}); ok(res.enviadas === 2 && Object.keys(r.db.provas).length === 2, '1: envia as provas locais'); ok(JSON.parse(r.db.provas.a.json).itens[0][1] === 2, '1: matrizes aninhadas sobrevivem (json)'); }

  // 2. limite do plano gratuito
  { const r = novoRemoto(), l = novoLocal({ provas: { a: P('a', '1'), b: P('b', '2'), c: P('c', '3'), d: P('d', '4'), e: P('e', '5') } });
    const res = await N.sincronizar(l, r, { provas: 3 }); ok(Object.keys(r.db.provas).length === 3, '2: só 3 vão para a nuvem'); ok(res.bloqueados.provas === 2, '2: 2 ficam só no navegador'); ok(Object.keys(l.dados.provas).length === 5, '2: nada é apagado localmente');
    const res2 = await N.sincronizar(l, r, { provas: 3 }); ok(Object.keys(r.db.provas).length === 3 && res2.bloqueados.provas === 2, '2: segue estável na segunda rodada');
    const res3 = await N.sincronizar(l, r, {}); ok(Object.keys(r.db.provas).length === 5, '2: ao assinar o Pro os demais sobem'); }

  // 3. aparelho novo traz tudo
  { const r = novoRemoto(), l1 = novoLocal({ provas: { a: P('a', '1') }, questoes: { q1: { id: 'q1', enunciado: 'x' } } }); await N.sincronizar(l1, r, {});
    const l2 = novoLocal(); const res = await N.sincronizar(l2, r, {}); ok(l2.dados.provas.a && l2.dados.questoes.q1 && res.trazidas === 2, '3: aparelho novo recebe provas e questões'); }

  // 4. edição de um lado propaga
  { const r = novoRemoto(), l1 = novoLocal({ provas: { a: P('a', '1') } }), l2 = novoLocal(); await N.sincronizar(l1, r, {}); await N.sincronizar(l2, r, {});
    l1.dados.provas.a = P('a', '2', { nome: 'Editada' }); await N.sincronizar(l1, r, {}); await N.sincronizar(l2, r, {});
    ok(l2.dados.provas.a.nome === 'Editada', '4: edição do aparelho 1 chega ao aparelho 2'); }

  // 5. exclusão propaga nos dois sentidos
  { const r = novoRemoto(), l1 = novoLocal({ provas: { a: P('a', '1'), b: P('b', '1') } }), l2 = novoLocal(); await N.sincronizar(l1, r, {}); await N.sincronizar(l2, r, {});
    delete l1.dados.provas.a; await N.sincronizar(l1, r, {}); ok(!r.db.provas.a, '5: excluir aqui exclui na nuvem'); await N.sincronizar(l2, r, {}); ok(!l2.dados.provas.a && l2.dados.provas.b, '5: e no outro aparelho'); }

  // 6. conflito: o mais recente vence
  { const r = novoRemoto(), l1 = novoLocal({ provas: { a: P('a', '1') } }), l2 = novoLocal(); await N.sincronizar(l1, r, {}); await N.sincronizar(l2, r, {});
    l1.dados.provas.a = P('a', '2026-05-01', { nome: 'Do 1' }); l2.dados.provas.a = P('a', '2026-06-01', { nome: 'Do 2' });
    await N.sincronizar(l2, r, {}); await N.sincronizar(l1, r, {}); ok(l1.dados.provas.a.nome === 'Do 2' && JSON.parse(r.db.provas.a.json).nome === 'Do 2', '6: vence a edição mais recente'); }

  // 7. editou depois de excluído em outro aparelho: não perde o trabalho
  { const r = novoRemoto(), l1 = novoLocal({ provas: { a: P('a', '1') } }), l2 = novoLocal(); await N.sincronizar(l1, r, {}); await N.sincronizar(l2, r, {});
    delete l1.dados.provas.a; await N.sincronizar(l1, r, {}); l2.dados.provas.a = P('a', '9', { nome: 'Mexi depois' }); await N.sincronizar(l2, r, {});
    ok(l2.dados.provas.a && r.db.provas.a, '7: item editado depois da exclusão é preservado'); }

  // 8. falha ao enviar um item: tenta de novo depois, sem travar o resto
  { const r = novoRemoto(), l = novoLocal({ provas: { a: P('a', '1'), b: P('b', '1') } }); r.falhaGravar = 'a';
    const res = await N.sincronizar(l, r, {}); ok(res.falhas.length === 1 && r.db.provas.b && !r.db.provas.a, '8: um item falha, o outro sobe'); r.falhaGravar = null;
    await N.sincronizar(l, r, {}); ok(!!r.db.provas.a, '8: na próxima rodada o item que falhou sobe'); }

  // 9. offline: erro claro e nada local é perdido
  { const r = novoRemoto(), l = novoLocal({ provas: { a: P('a', '1') } }); r.quebra = true; let erro = null; try { await N.sincronizar(l, r, {}); } catch (e) { erro = e; }
    ok(erro && l.dados.provas.a, '9: offline lança erro e mantém os dados locais'); }

  // 11. trilhas (só a coleção "trilhas"): a turma sobe, vai para outro aparelho e a mais recente vence
  { const r = novoRemoto(); r.db.trilhas = {}; const l1 = novoLocal({ trilhas: { t1: { id: 't1', nome: '2º A', trilha: 'x', atualizado: 1000, pos: { 'a.html': { s: 4, n: 19, t: 1000 } }, feitas: {} } } }), l2 = novoLocal();
    await N.sincronizar(l1, r, {}, ['trilhas']); ok(!!r.db.trilhas.t1 && !r.db.provas.t1, '11: a turma sobe só na coleção trilhas');
    await N.sincronizar(l2, r, {}, ['trilhas']); ok(l2.dados.trilhas.t1 && l2.dados.trilhas.t1.pos['a.html'].s === 4, '11: outro aparelho recebe onde a turma parou');
    l2.dados.trilhas.t1.pos['a.html'] = { s: 9, n: 19, t: 2000 }; l2.dados.trilhas.t1.atualizado = 2000;
    await N.sincronizar(l2, r, {}, ['trilhas']); await N.sincronizar(l1, r, {}, ['trilhas']); ok(l1.dados.trilhas.t1.pos['a.html'].s === 9, '11: o avanço mais recente chega ao primeiro aparelho'); }

  // 10. impressão digital estável
  ok(N.ser({ b: 1, a: [1, { d: 1, c: 2 }] }) === N.ser({ a: [1, { c: 2, d: 1 }], b: 1 }), '10: texto estável independe da ordem das chaves');

  console.log(falhas ? '✘ nuvem: ' + falhas + ' falha(s) em ' + total + ' verificações' : '✔ nuvem: ' + total + ' verificações ok');
  process.exit(falhas ? 1 : 0);
})();
