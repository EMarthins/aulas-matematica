# uso: powershell -ExecutionPolicy Bypass -File spell.ps1 <arquivo-entrada.txt> <arquivo-saida.txt>
# lê palavras (uma por linha), devolve as que o corretor ortográfico do Word (pt-BR) aceita
param($entrada, $saida)
$w = New-Object -ComObject Word.Application
$w.Visible = $false
$doc = $w.Documents.Add()
$ok = @()
foreach ($p in (Get-Content -Encoding UTF8 $entrada)) {
  if ($p.Trim().Length -eq 0) { continue }
  $doc.Content.Text = $p
  $doc.Content.LanguageID = 1046
  $doc.Content.NoProofing = 0
  if ($doc.SpellingErrors.Count -eq 0) { $ok += $p }
}
$doc.Close(0)
$w.Quit()
Set-Content -Encoding UTF8 $saida $ok
