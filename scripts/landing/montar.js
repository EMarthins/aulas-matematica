// Monta index.html (a página inicial) a partir de scripts/landing/index.tpl.html, preenchendo os números reais
// do catálogo e do banco de questões.   node scripts/landing/montar.js
const fs = require('fs'), path = require('path'), { pathToFileURL } = require('url');
const raiz = path.resolve(__dirname, '../..');
const fmt = n => n.toLocaleString('pt-BR');

(async () => {
  const cat = await import(pathToFileURL(path.join(raiz, 'app/catalog.js')).href);
  const venda = await import(pathToFileURL(path.join(raiz, 'app/config-venda.js')).href);
  const tipo = i => i.tipo === 'Atividade' ? 'atividade' : i.tipo === 'Guia' ? 'guia' : 'aula';
  const tot = { aula: 0, guia: 0, atividade: 0 }, por = {};
  for (const m of cat.MATERIAS) {
    if (m.oculta) continue; // ENA escondida
    const c = { aula: 0, mod: 0 };
    for (const a of (m.CATALOG || [])) for (const t of a.trimestres) for (const u of t.unidades) {
      if (u.itens.length) c.mod++;
      for (const i of u.itens) { const k = tipo(i); tot[k]++; if (k === 'aula') c.aula++; }
    }
    por[m.id] = c;
  }
  const ler = f => JSON.parse(fs.readFileSync(path.join(raiz, f), 'utf8'));
  const questoes = ler('app/banco.json').questoes.length + (ler('app/banco-provas.json').questoes || []).length;
  const v = {
    N_AULAS: fmt(tot.aula), N_AULAS_RAW: tot.aula, N_GUIAS: fmt(tot.guia), N_GUIAS_RAW: tot.guia, N_ATIV: fmt(tot.atividade), N_ATIV_RAW: tot.atividade,
    N_QUESTOES: fmt(questoes), N_QUESTOES_RAW: questoes,
    N_AULAS_MAT: por.matematica.aula, N_MODS_MAT: por.matematica.mod, N_AULAS_EF: por['educacao-financeira'].aula, N_MODS_EF: por['educacao-financeira'].mod,
    PRECO_MES: venda.VENDA.precoMensal, PRECO_ANO: venda.VENDA.precoAnual, ANO: new Date().getFullYear()
  };
  let html = fs.readFileSync(path.join(__dirname, 'index.tpl.html'), 'utf8');
  html = html.replace(/\{\{([A-Z_]+)\}\}/g, (m, k) => { if (!(k in v)) throw new Error('placeholder sem valor: ' + k); return String(v[k]); });
  fs.writeFileSync(path.join(raiz, 'index.html'), html);
  console.log('index.html (página inicial) montado:', html.length, 'bytes ·', tot.aula, 'aulas,', tot.guia, 'guias,', tot.atividade, 'atividades,', questoes, 'questões');
})().catch(e => { console.error(e); process.exit(1); });
