// Gera um .docx de teste a partir dos bancos de questões e confere a estrutura (XML bem formado, relações, mídias).
//   node scripts/testar-docx.js [saida.docx] [colunas] [--gab]
// Variações: CAB='{"modelo":"compacto"}' LAYOUT='{"colunas":1}' VERSAO=B node scripts/testar-docx.js …
// O resultado pode ser aberto no Word (o teste visual é feito por scripts/word-pdf.ps1).
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..');
const url = p => require('url').pathToFileURL(path.join(root, p)).href;
const PNG1 = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');

function bemFormado(nome, xml) {
  const pilha = []; const re = /<(\/?)([A-Za-z_][\w:.-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>/g; let m;
  const semTags = xml.replace(/<\?[\s\S]*?\?>/g, '');
  while ((m = re.exec(semTags))) {
    if (m[4]) continue;
    if (m[1]) { const t = pilha.pop(); if (t !== m[2]) throw new Error(`${nome}: </${m[2]}> fecha <${t}> (posição ${m.index}: …${semTags.slice(Math.max(0, m.index - 80), m.index + 40)})`); } else pilha.push(m[2]);
  }
  if (pilha.length) throw new Error(`${nome}: tags abertas: ${pilha.slice(-4).join(',')}`);
  if (/&(?!amp;|lt;|gt;|quot;|#\d+;|#x[0-9a-f]+;)/i.test(semTags.replace(/="[^"]*"/g, m => m.replace(/&(amp|lt|gt|quot);/g, '')))) throw new Error(nome + ': entidade solta &');
}

(async () => {
  const saida = process.argv[2] || path.join(root, 'teste-prova.docx'), colunas = +process.argv[3] || 2, gab = process.argv.includes('--gab');
  const D = await import(url('app/docx.js')), Q = await import(url('app/questoes.js'));
  const prop = JSON.parse(fs.readFileSync(path.join(root, 'app/banco-provas.json'), 'utf8').replace(/(["'])img:((?:enem|cdb)[\w.-]+)/g, '$1../app/img-questoes/$2')); // mesma regra do prova-app.js
  const leg = JSON.parse(fs.readFileSync(path.join(root, 'app/banco.json'), 'utf8'));
  const proprias = (Array.isArray(prop) ? prop : prop.questoes).map(Q.normalizar), legado = leg.questoes.map(Q.normalizar);
  const tem = (q, re) => re.test(JSON.stringify([q.enunciado, q.alternativas, q.afirmacoes]));
  const pega = (lista, f, n) => lista.filter(f).slice(0, n);
  const sel = [].concat(
    pega(proprias, q => q.tipo === 'mc' && /\$[^$]*\{[^$]*\|[^$]*\}[^$]*\$/.test(JSON.stringify(q.enunciado)), 3),     // fração
    pega(proprias, q => q.tipo === 'mc' && /√/.test(JSON.stringify(q.enunciado)), 2),
    pega(proprias, q => q.tipo === 'mc' && /\^/.test(q.enunciado) && !q.figura, 2),
    pega(proprias, q => q.figura && q.figura.tipo === 'funcao', 1),
    pega(proprias, q => q.figura && q.figura.tipo === 'barras', 1),
    pega(proprias, q => q.figura && q.figura.tipo === 'tabela', 1),
    pega(proprias, q => q.figura && q.figura.tipo === 'img', 2),
    pega(proprias, q => q.figura && q.figura.tipo === 'svg', 1),
    pega(proprias, q => q.soImagem && q.tipo === 'mc', 2), pega(proprias, q => q.soImagem && q.tipo === 'soma', 1), pega(proprias, q => q.soImagem && q.tipo === 'vf', 1), pega(proprias, q => q.soImagem && q.tipo === 'aberta' && q.resolucaoImg, 2),
    pega(proprias, q => q.tipo === 'vf', 1), pega(proprias, q => q.tipo === 'soma', 1), pega(proprias, q => q.tipo === 'assoc', 1), pega(proprias, q => q.tipo === 'aberta', 2),
    pega(legado, q => /class="fr"/.test(q.enunciado) , 2), pega(legado, q => /<svg/.test(q.enunciado), 1), pega(proprias, q => q.tipo === 'mc' && q.alternativas.some(a => /fr/.test(mat(a.t))) , 1)
  );
  function mat(s) { return s; }
  const vistos = new Set(), lista = sel.filter(q => !vistos.has(q.id) && vistos.add(q.id)).map((q, i) => ({ q, num: i + 1, valor: 1 }));
  const modelo = {
    nome: 'Avaliação de teste', versao: 'A', total: lista.length,
    cab: { modelo: 'caixas', titulo: 'Avaliação de Matemática', subtitulo: '2º trimestre', disciplina: 'Matemática', escola: 'Colégio Exemplo', professor: 'Profa. Exemplo', turma: '2º A', trimestre: '2º trimestre', data: '', logo: '', instrucoes: 'Leia com atenção. Use caneta azul ou preta.\nNão é permitido o uso de calculadora.', totalNota: true, mostrar: { nome: true, num: true, turma: true, data: true, escola: true, professor: true, nota: true, trimestre: true } },
    layout: { colunas, fonte: 11, margem: 12, gapq: 5, gap: 8, num: 'ponto', alt: 'auto', sep: true, rodape: true, pontos: true },
    gab: { anexar: gab, res: true }, lista
  };
  if (process.env.CAB) Object.assign(modelo.cab, JSON.parse(process.env.CAB));
  if (process.env.LAYOUT) Object.assign(modelo.layout, JSON.parse(process.env.LAYOUT));
  if (process.env.VERSAO) modelo.versao = process.env.VERSAO;
  const io = {
    async carregarImagem(src) {
      let buf;
      if (/^data:/i.test(src)) { const m = /^data:[^;,]*(;base64)?,(.*)$/s.exec(src); buf = m[1] ? Buffer.from(m[2], 'base64') : Buffer.from(decodeURIComponent(m[2])); }
      else { const f = [path.resolve(root, 'professor', src), path.join(root, src)].find(x => fs.existsSync(x)); if (!f) return null; buf = fs.readFileSync(f); }
      const bytes = new Uint8Array(buf), tipo = D.tipoImagem(bytes); return tipo ? { bytes, tipo } : null;
    },
    async rasterizarSvg() { return { bytes: new Uint8Array(PNG1) }; }
  };
  const t0 = Date.now(), bytes = await D.gerarDocx(modelo, io);
  fs.writeFileSync(saida, Buffer.from(bytes));
  // leitura do zip (somente "store") para conferir o conteúdo
  const b = Buffer.from(bytes), arq = {}; let p = 0;
  while (b.readUInt32LE(p) === 0x04034b50) { const cs = b.readUInt32LE(p + 18), nl = b.readUInt16LE(p + 26), el = b.readUInt16LE(p + 28), nome = b.toString('utf8', p + 30, p + 30 + nl); arq[nome] = b.subarray(p + 30 + nl + el, p + 30 + nl + el + cs); p += 30 + nl + el + cs; }
  Object.keys(arq).filter(n => /\.(xml|rels)$/.test(n)).forEach(n => bemFormado(n, arq[n].toString('utf8')));
  const doc = arq['word/document.xml'].toString('utf8'), rels = arq['word/_rels/document.xml.rels'].toString('utf8');
  const ids = [...doc.matchAll(/r:embed="([^"]+)"/g)].map(m => m[1]);
  ids.forEach(id => { if (!rels.includes(`Id="${id}"`)) throw new Error('relação ausente: ' + id); });
  Object.keys(arq).filter(n => n.startsWith('word/media/')).forEach(n => { if (!rels.includes(n.replace('word/', ''))) throw new Error('mídia sem relação: ' + n); });
  const cont = s => (doc.match(new RegExp(s, 'g')) || []).length;
  console.log(`ok · ${lista.length} questões · ${(bytes.length / 1024).toFixed(0)} KB · ${Date.now() - t0} ms · ${Object.keys(arq).length} partes`);
  console.log(`  parágrafos ${cont('<w:p>')} · tabelas ${cont('<w:tbl>')} · equações ${cont('<m:oMath>')} (frações ${cont('<m:f>')}, raízes ${cont('<m:rad>')}) · imagens ${ids.length} · seções ${cont('<w:sectPr>')}`);
  console.log('  tipos:', lista.map(x => x.q.tipo + (x.q.soImagem ? '*' : '')).join(' '));
  console.log('  salvo em', saida);
})().catch(e => { console.error('FALHOU:', e.stack || e.message); process.exit(1); });
