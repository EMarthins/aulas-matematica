// Alternância de tema claro/escuro, compartilhada pelas páginas do app.
export function iniciarThemeToggle(storageKey){
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  if(!btn) return;
  var sunIcon = btn.querySelector('.i-sun');
  var moonIcon = btn.querySelector('.i-moon');

  function systemTheme(){
    try{ return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
    catch(e){ return 'dark'; }
  }
  function getStored(){ try{ return localStorage.getItem(storageKey); }catch(e){ return null; } }
  function setStored(v){ try{ localStorage.setItem(storageKey, v); }catch(e){} }
  function apply(theme){
    root.setAttribute('data-theme', theme);
    var isDark = theme === 'dark';
    if(isDark){ sunIcon.removeAttribute('hidden'); moonIcon.setAttribute('hidden',''); }
    else{ sunIcon.setAttribute('hidden',''); moonIcon.removeAttribute('hidden'); }
    btn.setAttribute('aria-label', isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro');
  }
  apply(getStored() || systemTheme());
  btn.addEventListener('click', function(){
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    apply(next);
    setStored(next);
  });
}
