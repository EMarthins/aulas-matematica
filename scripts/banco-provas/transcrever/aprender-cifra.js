// Aprende o mapa do texto embaralhado do ENEM 2018 (glifos deslocados) comparando com transcrições feitas à mão.
const fs = require('fs');
const j = JSON.parse(fs.readFileSync(__dirname + '/../../../app/banco-provas.json', 'utf8'));
const feitas = new Map();
fs.readdirSync(__dirname).filter(f => /^lote-\d+-enem2018\.jsonl$/.test(f)).forEach(f => fs.readFileSync(__dirname + '/' + f, 'utf8').split('\n').filter(Boolean).forEach(l => { const r = JSON.parse(l); feitas.set(r.id, [r.e, r.p || '', ...(r.a || [])].join(' ').replace(/<[^>]+>/g, '').replace(/\$/g, '').replace(/\n+/g, ' ')); }));
const base = c => { const k = c.charCodeAt(0); if (k === 3) return ' '; if (k >= 36 && k <= 93 && !/[0-9:;<=>?@]/.test(c) && k !== 39 && k !== 40 && k !== 41 && k !== 43 && k !== 44 && k !== 45 && k !== 46 && k !== 47) return String.fromCharCode(k + 29); return c; };
const votos = {};
for (const [id, tipado] of feitas) {
  const q = j.questoes.find(x => x.id === id); if (!q || !q.busca) continue; // já transcrita: busca foi apagada; usa cópia guardada
}
const bk = JSON.parse(fs.readFileSync(__dirname + '/busca-2018.json', 'utf8'));
for (const [id, tipado] of feitas) {
  const b = bk[id]; if (!b) continue;
  const a = [...b].map(c => c), t = [...tipado];
  // LCS em minúsculas sem espaços
  const A = a.filter(c => c.trim()), T = t.filter(c => c.trim());
  const m = A.length, n = T.length; if (m * n > 6e6) continue;
  const dp = Array.from({ length: m + 1 }, () => new Uint16Array(n + 1));
  const eq = (x, y) => base(x).toLowerCase() === y.toLowerCase();
  for (let i = m - 1; i >= 0; i--) for (let k = n - 1; k >= 0; k--) dp[i][k] = eq(A[i], T[k]) ? dp[i + 1][k + 1] + 1 : Math.max(dp[i + 1][k], dp[i][k + 1]);
  let i = 0, k = 0;
  while (i < m && k < n) { if (eq(A[i], T[k])) { i++; k++; } else if (dp[i + 1][k] >= dp[i][k + 1]) { // possível substituição 1-1
      if (dp[i + 1][k + 1] >= dp[i + 1][k] - 0 && i + 1 < m && k + 1 < n && eq(A[i + 1], T[k + 1])) { const key = A[i].charCodeAt(0) + '→' + T[k]; votos[key] = (votos[key] || 0) + 1; i++; k++; } else i++; } else k++; }
}
console.log(Object.entries(votos).sort((a, b) => b[1] - a[1]).slice(0, 60).map(([k, v]) => k + ' x' + v).join('\n'));
