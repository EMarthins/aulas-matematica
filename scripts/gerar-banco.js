// Gera app/banco.json: banco de questões de múltipla escolha extraído das aulas e atividades.
// Alimenta o simulado (simulado.html) e o gabarito do professor (professor/gabarito.html).
//
//   node scripts/gerar-banco.js .
const fs = require('fs'), path = require('path');
const root = path.resolve(process.argv[2] || '.');

const strip = h => String(h || '').replace(/<span class="qnum">[^<]*<\/span>\s*/g, '').replace(/<abbr class="ft-g"[^>]*>([^<]*)<\/abbr>/g, '$1').replace(/\s+/g, ' ').trim();
const text = h => strip(h).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();
const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };

async function main(){
  const cat = await import('file:///' + path.join(root, 'app/catalog.js').split(path.sep).join('/'));
  const info = {};
  for(const mat of cat.MATERIAS) for(const a of mat.CATALOG) for(const t of a.trimestres) for(const u of t.unidades) for(const it of u.itens){
    info[it.arquivo] = { m: mat.id, mn: mat.nome, a: a.ano, tri: t.nome, u: u.titulo, titulo: it.titulo, tipo: it.tipo, sub: it.sub || '' };
  }
  const out = []; const vistos = new Set();
  const push = (arq, tp, q, opts, sol) => {
    const qq = strip(q); if (!qq || opts.length < 2 || !opts.some(o => o.ok)) return;
    const id = hash(arq + '|' + qq); if (vistos.has(id)) return; vistos.add(id);
    const i = info[arq] || {};
    out.push({ id, k: arq, tp, m: i.m || '', mn: i.mn || '', a: i.a || '', u: i.u || '', t: i.titulo || '', q: qq, o: opts, sol: strip(sol) });
  };
  for(const [arq] of Object.entries(info)){
    const f = path.join(root, arq); if(!fs.existsSync(f)) continue;
    const html = fs.readFileSync(f, 'utf8');
    // 1) questões das atividades "ENEM" (cartões .qcard)
    const partes = html.split('<div class="card qcard"').slice(1);
    for(const p of partes){
      const corpo = p.split(/<div class="card (?:success|qcard)"/)[0];
      const iq = corpo.indexOf('<div class="qz"'); if(iq < 0) continue;
      const qHtml = corpo.slice(corpo.indexOf('>') + 1, iq).replace(/<span class="badge">[\s\S]*?<\/span>/, '');
      const qz = corpo.slice(iq).split('<div class="fb">')[0];
      const opts = [...qz.matchAll(/<button class="choice qopt" data-ok="(\d)">([\s\S]*?)<\/button>/g)].map(m => ({ t: strip(m[2]), ok: m[1] === '1' }));
      const an = corpo.match(/<div class="answer">([\s\S]*?)\s*<\/div>\s*<\/div>/);
      push(arq, 'enem', qHtml, opts, an ? an[1] : '');
    }
    // 2) quizzes dos slides (<p>n. pergunta</p><div class="qz">…)
    for(const m of html.matchAll(/<p style="font-weight:700;font-size:\.9rem;">([\s\S]*?)<\/p>\s*<div class="qz" data-q="\d+">([\s\S]*?)<\/div>/g)){
      const opts = [...m[2].matchAll(/<button class="choice qopt" data-ok="(\d)">([\s\S]*?)<\/button>/g)].map(x => ({ t: strip(x[2]), ok: x[1] === '1' }));
      push(arq, 'quiz', m[1].replace(/^\s*\d+\.\s*/, ''), opts, '');
    }
    // 3) mini-quizzes dos slides (.mq)
    for(const m of html.matchAll(/<div class="mq" data-a="(\d)"><p[^>]*>([\s\S]*?)<\/p>([\s\S]*?)<div class="fb"><\/div><div class="answer"><p>([\s\S]*?)<\/p><\/div><\/div>/g)){
      const a = +m[1];
      const opts = [...m[3].matchAll(/<button class="choice mqo" data-i="(\d+)">([\s\S]*?)<\/button>/g)].map(x => ({ t: strip(x[2]), ok: +x[1] === a }));
      push(arq, 'mini', m[2], opts, m[4]);
    }
  }
  const alvo = path.join(root, 'app/banco.json');
  fs.writeFileSync(alvo, JSON.stringify({ gerado: new Date().toISOString().slice(0, 10), n: out.length, questoes: out }));
  const porTp = {}; out.forEach(q => porTp[q.tp] = (porTp[q.tp] || 0) + 1);
  const porMat = {}; out.forEach(q => porMat[q.mn + ' ' + q.a] = (porMat[q.mn + ' ' + q.a] || 0) + 1);
  console.log('questões:', out.length, JSON.stringify(porTp)); console.log(porMat);
}
main().catch(e => { console.error(e); process.exit(1); });
