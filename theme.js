(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  if (!button) return;
  function setTheme(theme) {
    root.dataset.theme = theme;
    button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    button.querySelector('span').textContent = theme === 'dark' ? '☀' : '☾';
  }
  var saved;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  setTheme(saved === 'light' || saved === 'dark' ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  button.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
}());
