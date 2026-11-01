(() => {
  const toggle = document.querySelector('.academy-page .nav-toggle');
  const menu = document.getElementById('academy-menu');
  const navbar = document.querySelector('.academy-page .navbar');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('menu-open', isOpen);
    if (isOpen) menu.querySelector('a')?.focus();
  });
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 1021px)').addEventListener('change', closeMenu);
  window.addEventListener('scroll', () => navbar?.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });
})();
