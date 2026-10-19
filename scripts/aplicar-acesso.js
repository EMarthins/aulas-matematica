// Aplica a trava de acesso nas páginas do catálogo: todas pedem conta, EXCETO as aulas grátis (app/acesso.js).
// Idempotente — rode sempre que mudar a regra ou criar páginas novas:   node scripts/aplicar-acesso.js .
// A trava é uma checagem no navegador (localStorage 'sb:user', gravado por app/auth.js ao entrar). Sem conta, a
// página mostra um aviso com "Criar conta" / "Entrar" e esconde o conteúdo. Páginas grátis ficam sem nada.
const fs = require('fs'), path = require('path');
const root = path.resolve(process.argv[2] || '.');
const INI = '<!--acesso:inicio-->', FIM = '<!--acesso:fim-->';

const gate = R => `${INI}
<script>(function(){
  try{ if(localStorage.getItem('sb:user')) return; }catch(e){}
  var R = '${R}', p = location.pathname, i = -1, k = ['/aulas/', '/educacao-financeira/', '/ena-profmat/'];
  for(var j = 0; j < k.length && i < 0; j++) i = p.indexOf(k[j]);
  var q = 'voltar=' + encodeURIComponent(i < 0 ? '' : p.slice(i + 1));
  document.documentElement.className += ' sem-acesso';
  var st = document.createElement('style');
  st.textContent = 'html.sem-acesso{overflow:hidden}html.sem-acesso body>*:not(#parede){display:none!important}#parede{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:20px;background:#0C0D18;color:#EEEFFC;font:16px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}#parede .c{max-width:30rem;text-align:center;background:#15172A;border:1px solid #3B3E68;border-radius:20px;padding:28px 24px;box-shadow:0 30px 70px -24px #000}#parede h1{margin:.2em 0 .3em;font-size:1.35rem}#parede p{margin:0 0 1.1em;color:#AEB1D6;font-size:.95rem}#parede a{display:block;text-decoration:none;font-weight:800;border-radius:12px;padding:.8em 1em;margin-top:8px}#parede .p{background:#9089F5;color:#12102B}#parede .s{border:1.5px solid #3B3E68;color:#EEEFFC}#parede .l{color:#9089F5;font-weight:700;margin-top:12px;font-size:.88rem}';
  document.head.appendChild(st);
  function mostra(){
    if(document.getElementById('parede')) return;
    var w = document.createElement('div'); w.id = 'parede';
    w.innerHTML = '<div class="c"><div style="font-size:2rem">&#128274;</div><h1>Esta aula é para quem tem conta</h1><p>Sem conta você acessa 1 aula por ano e trimestre. Crie sua conta grátis (ou entre) para liberar todas as aulas, guias e atividades.</p><a class="p" target="_top" href="' + R + 'login.html?modo=cadastrar&' + q + '">Criar conta grátis</a><a class="s" target="_top" href="' + R + 'login.html?' + q + '">Já tenho conta · Entrar</a><a class="l" target="_top" href="' + R + 'catalogo.html#gratis">Ver as aulas grátis</a></div>';
    document.body.appendChild(w);
  }
  if(document.body) mostra(); else document.addEventListener('DOMContentLoaded', mostra);
})();</script>
${FIM}
`;

(async () => {
  const cat = await import('file:///' + path.join(root, 'app/catalog.js').split(path.sep).join('/'));
  const ac = await import('file:///' + path.join(root, 'app/acesso.js').split(path.sep).join('/'));
  const gratis = new Set(ac.aulasGratis(cat.MATERIAS).map(x => x.item.arquivo));
  const todos = new Set(); cat.MATERIAS.forEach(m => m.CATALOG.forEach(a => a.trimestres.forEach(t => t.unidades.forEach(u => u.itens.forEach(i => todos.add(i.arquivo))))));
  const tiraGate = t => { let a; while ((a = t.indexOf(INI)) >= 0) { const b = t.indexOf(FIM, a); if (b < 0) break; let e = b + FIM.length; if (t[e] === String.fromCharCode(10)) e++; t = t.slice(0, a) + t.slice(e); } return t; };
  let travadas = 0, livres = 0, semHead = [];
  for (const arq of todos) {
    const f = path.join(root, arq); if (!fs.existsSync(f)) continue;
    const raw = fs.readFileSync(f, 'utf8'), crlf = raw.includes('\r\n');
    let s = raw.replace(/\r\n/g, '\n');
    s = tiraGate(s);
    if (!gratis.has(arq)) {
      const R = '../'.repeat(arq.split('/').length - 1);
      // antes de </head>; sem <head> (páginas em fragmento), logo depois do <meta charset> (que precisa ficar nos primeiros 1024 bytes)
      if (/<\/head>/i.test(s)) s = s.replace(/<\/head>/i, m => gate(R) + m);
      else if (/<meta[^>]*charset[^>]*>/i.test(s)) s = s.replace(/<meta[^>]*charset[^>]*>\n?/i, m => m.replace(/\n?$/, '\n') + gate(R));
      else { semHead.push(arq); continue; }
      travadas++;
    } else livres++;
    fs.writeFileSync(f, crlf ? s.replace(/\n/g, '\r\n') : s, 'utf8');
  }
  // lista das aulas grátis para a trava de servidor (Cloudflare Pages Functions: functions/_middleware.js)
  fs.mkdirSync(path.join(root, 'functions'), { recursive: true });
  const NL = String.fromCharCode(10);
  fs.writeFileSync(path.join(root, 'functions', '_gratis.js'), '// GERADO por scripts/aplicar-acesso.js — aulas liberadas sem conta. Não edite à mão.' + NL + 'export const GRATIS = ' + JSON.stringify([...gratis].filter(a => todos.has(a)).sort(), null, 2) + ';' + NL);
  console.log('acesso: ' + travadas + ' páginas pedem conta · ' + livres + ' aulas grátis' + (semHead.length ? ' · SEM </head>: ' + semHead.join(', ') : ''));
})();
