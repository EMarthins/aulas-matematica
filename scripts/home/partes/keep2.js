  // ============ THEME TOGGLE ============
  var root = document.documentElement;
  var btn = document.getElementById('themeToggle');
  var sunIcon = btn.querySelector('.i-sun');
  var moonIcon = btn.querySelector('.i-moon');
  var KEY = 'theme-pref-hub';

  function systemTheme(){
    try{ return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
    catch(e){ return 'dark'; }
  }
  function getStored(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
  function setStored(v){ try{ localStorage.setItem(KEY, v); }catch(e){} }
  function apply(theme){
    root.setAttribute('data-theme', theme);
    var isDark = theme === 'dark';
    if(isDark){ sunIcon.removeAttribute('hidden'); moonIcon.setAttribute('hidden',''); }
    else{ sunIcon.setAttribute('hidden',''); moonIcon.removeAttribute('hidden'); }
    btn.setAttribute('aria-label', isDark ? 'Mudar para modo claro (ideal para projetor)' : 'Mudar para modo escuro');
    btn.title = isDark ? 'Modo claro — ideal para sala iluminada / projetor' : 'Modo escuro';
  }
  apply(getStored() || systemTheme());
  btn.addEventListener('click', function(){
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    apply(next);
    setStored(next);
  });
})();
</script>
</body>
</html>

