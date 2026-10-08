// Testes estáticos do site (rodam em segundos, sem navegador):
//   node scripts/testar.js .
// Verifica catálogo, páginas (título, viewport, layout, progresso, ferramentas, fontes locais, sintaxe dos
// scripts, chaves de tema), banco de questões, quizzes e arquivos do modo offline.
// Para testes no navegador (erros de JavaScript, rolagem dos slides, conclusão das atividades) abra testes.html.
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.resolve(process.argv[2] || '.');
const falhas = [], avisos = []; let ok = 0;
const F = m => falhas.push(m), A = m => avisos.push(m);
const lê = f => fs.readFileSync(path.join(root, f), 'utf8');
const existe = f => fs.existsSync(path.join(root, f));

async function main(){
  // ---- catálogo ----
  const cat = await import('file:///' + path.join(root, 'app/catalog.js').split(path.sep).join('/'));
  const arquivos = [], titulosPorUnidade = {};
  for(const m of cat.MATERIAS) for(const a of m.CATALOG) for(const t of a.trimestres) for(const u of t.unidades){
    if(!cat.ICONS[u.icon]) F(`catálogo: ícone inexistente "${u.icon}" em "${u.titulo}"`);
    const vistos = new Set();
    for(const it of u.itens){
      arquivos.push(it.arquivo);
      if(!existe(it.arquivo)) F('catálogo: arquivo não existe → ' + it.arquivo);
      const k = it.tipo + '|' + it.titulo; if(vistos.has(k)) A(`catálogo: título repetido em "${u.titulo}": ${it.titulo}`); vistos.add(k);
    }
  }
  ok += arquivos.length;

  // ---- páginas ----
  const temas = {};
  let nPag = 0;
  for(const arq of arquivos){
    if(!existe(arq)) continue; nPag++;
    const h = lê(arq); const nome = arq;
    if(!/<title>[^<]+<\/title>/.test(h)) F(nome + ': sem <title>');
    if(!/name="viewport"/.test(h)) F(nome + ': sem <meta viewport>');
    if(!h.includes('id="layout-v2"')) F(nome + ': sem layout v2 (rode scripts/aplicar-layout.js)');
    if(!h.includes('id="progresso-local"')) F(nome + ': sem progresso local (scripts/aplicar-progresso.js)');
    const mf = h.match(/<script src="([^"]*ferramentas\.js)" id="ferramentas">/);
    if(!mf) F(nome + ': sem ferramentas (scripts/aplicar-ferramentas.js)');
    else if(!existe(path.relative(root, path.resolve(path.dirname(path.join(root, arq)), mf[1])))) F(nome + ': caminho de ferramentas.js quebrado');
    if(/fonts\.googleapis\.com/.test(h)) F(nome + ': ainda usa fontes do Google (scripts/aplicar-fontes.js)');
    const mfont = h.match(/<link href="([^"]*fonts\.css)"/); if(!mfont) F(nome + ': sem fonts.css local');
    else if(!existe(path.relative(root, path.resolve(path.dirname(path.join(root, arq)), mfont[1])))) F(nome + ': caminho de fonts.css quebrado');
    if(/(?:href|src)="\/[^\/]/.test(h)) F(nome + ': caminho absoluto (quebra no GitHub Pages)');
    const abre = (h.match(/<script/g) || []).length, fecha = (h.match(/<\/script>/g) || []).length; if(abre !== fecha) F(nome + `: <script> desbalanceado ${abre}/${fecha}`);
    const re = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g; let m, i = 0;
    while((m = re.exec(h))){ i++; try{ new vm.Script(m[1]); }catch(e){ F(`${nome}: erro de sintaxe no script ${i}: ${e.message}`); } }
    const k = (h.match(/KEY = '(theme-pref-[^']+)'/) || [])[1]; if(k){ (temas[k] = temas[k] || []).push(nome); }
    // quizzes: pontuação máxima = número de grupos .qz
    const grupos = (h.match(/<div class="qz"/g) || []).length;
    const mp = h.match(/Pontos: <span id="scoreVal">0<\/span>\/(\d+)/) || h.match(/Acertos: <span id="scoreVal">0<\/span>\/(\d+)/);
    if(mp && grupos && +mp[1] !== grupos) A(`${nome}: placar diz /${mp[1]} e há ${grupos} grupos .qz (ok se houver questões de outro tipo)`);
    for(const g of h.matchAll(/<div class="qz"[^>]*>([\s\S]*?)<\/div>/g)){
      const corretas = (g[1].match(/data-ok="1"/g) || []).length; if(corretas !== 1) F(`${nome}: questão com ${corretas} alternativas corretas`);
    }
    if(/reportarConclusao\(/.test(h) && !/window\.reportarConclusao\s*=/.test(h)) F(nome + ': chama reportarConclusao sem definir');
  }
  for(const [k, l] of Object.entries(temas)) if(l.length > 1) A(`chave de tema repetida "${k}" em ${l.length} páginas (não quebra, mas mistura preferências)`);

  // ---- banco de questões ----
  if(!existe('app/banco.json')) F('app/banco.json ausente (node scripts/gerar-banco.js .)');
  else {
    const b = JSON.parse(lê('app/banco.json')); const ids = new Set();
    for(const q of b.questoes){
      if(ids.has(q.id)) F('banco: id repetido ' + q.id); ids.add(q.id);
      if(q.o.filter(o => o.ok).length !== 1) F('banco: questão sem exatamente 1 correta → ' + q.k + ' · ' + q.q.slice(0, 40));
      if(q.o.some(o => !o.t)) F('banco: alternativa vazia → ' + q.k);
      if(!existe(q.k)) F('banco: origem inexistente ' + q.k);
    }
    ok += b.questoes.length;
    // o banco precisa estar em dia com as páginas
    const antes = fs.statSync(path.join(root, 'app/banco.json')).mtimeMs;
    const novas = arquivos.filter(a => existe(a) && fs.statSync(path.join(root, a)).mtimeMs > antes + 1000);
    if(novas.length) A(`banco.json é mais antigo que ${novas.length} página(s) — rode node scripts/gerar-banco.js .`);
  }

  // ---- modo offline ----
  const sw = lê('sw.js'); const base = (sw.match(/var BASE = \[([^\]]*)\]/) || [])[1] || '';
  for(const f of [...base.matchAll(/'([^']+)'/g)].map(x => x[1])) if(f !== './' && !existe(f)) F('sw.js: arquivo do cache inexistente → ' + f);
  if(!existe('manifest.webmanifest') || !existe('icon.svg')) F('manifesto/ícone do app ausentes');
  for(const f of ['assets/fonts.css']) if(!existe(f)) F('ausente: ' + f);
  const fonts = [...lê('assets/fonts.css').matchAll(/url\(([^)]+)\)/g)].map(x => x[1]); for(const f of fonts) if(!existe('assets/' + f)) F('fonte ausente: ' + f);

  console.log(`Páginas verificadas: ${nPag} · itens do catálogo: ${arquivos.length}`);
  if(avisos.length){ console.log('\nAvisos (' + avisos.length + '):'); avisos.slice(0, 20).forEach(a => console.log('  ! ' + a)); }
  if(falhas.length){ console.log('\nFALHAS (' + falhas.length + '):'); falhas.slice(0, 60).forEach(a => console.log('  ✘ ' + a)); process.exit(1); }
  console.log('\n✔ Tudo certo.');
}
main().catch(e => { console.error(e); process.exit(2); });
