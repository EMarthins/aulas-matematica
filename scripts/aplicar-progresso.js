// Acrescenta às aulas, guias e atividades um pequeno script que guarda o progresso NO APARELHO do aluno
// (localStorage): "aberto" ao entrar e a melhor nota ao concluir um quiz/atividade. A página inicial lê isso
// para mostrar ✓ e a nota ao lado de cada item. Idempotente: rode sempre que criar páginas novas.
//
//   node scripts/aplicar-progresso.js .
//
// Funciona sem login e sem internet. Quando a página roda dentro do player.html (plataforma), o script não
// interfere: lá o progresso vai para o Firestore pelo postMessage normal.
const fs = require('fs'), path = require('path');
const root = process.argv[2] || '.';
const MARK = 'id="progresso-local"';

const SCRIPT = `
<script ${MARK}>
(function(){
  try{
    var p = location.pathname, i = p.indexOf('/aulas/'); if(i < 0) i = p.indexOf('/educacao-financeira/'); if(i < 0) i = p.indexOf('/ena-profmat/'); if(i < 0) return;
    var key = 'prog:' + p.slice(i + 1);
    function ler(){ try{ return JSON.parse(localStorage.getItem(key) || 'null') || {}; }catch(e){ return {}; } }
    function gravar(o){ try{ localStorage.setItem(key, JSON.stringify(o)); }catch(e){} }
    var o = ler(); if(!o.v){ o.v = 1; o.d = Date.now(); gravar(o); }
    // aberta direto (sem iframe) o postMessage das aulas chega à própria janela
    window.addEventListener('message', function(e){
      var m = e.data; if(e.source !== window || !m || m.type !== 'lesson-progress') return;
      if(m.event === 'quiz-completed' && m.total){
        var c = ler(); c.v = 1;
        if(c.t !== m.total || (m.score / m.total) >= ((c.s || 0) / (c.t || 1))){ c.s = m.score; c.t = m.total; }
        c.d = Date.now(); gravar(c);
      }
    });
  }catch(e){}
})();
</script>`;

function* walk(d){ for(const n of fs.readdirSync(d)){ const p = path.join(d, n); const s = fs.statSync(p);
  if(s.isDirectory()) yield* walk(p); else if(n.endsWith('.html')) yield p; } }

let novos = 0, ja = 0;
for(const sub of ['aulas', 'educacao-financeira', 'ena-profmat']){
  const base = path.join(root, sub); if(!fs.existsSync(base)) continue;
  for(const f of walk(base)){
    const html = fs.readFileSync(f, 'utf8');
    if(html.includes(MARK)){ ja++; continue; }
    fs.writeFileSync(f, html.replace(/\s*$/, '\n') + SCRIPT + '\n', 'utf8'); novos++;
  }
}
console.log('progresso local adicionado:', novos, '| já tinham:', ja);
