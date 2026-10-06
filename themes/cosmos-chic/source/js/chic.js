/* Cosmos-Chic: theme switch, home mobile menu & TOC scripts */
(() => {
  'use strict';

  /* ===== Light/dark theme switch (Chic toggleBtn) ===== */
  const pagebody = document.body;
  const switchDefault = document.getElementById('switch_default');

  function setTheme(status = 'light') {
    if (status === 'dark') {
      window.sessionStorage.theme = 'dark';
      pagebody.classList.add('dark-theme');
      if (switchDefault) switchDefault.checked = true;
    } else {
      window.sessionStorage.theme = 'light';
      pagebody.classList.remove('dark-theme');
      if (switchDefault) switchDefault.checked = false;
    }
  }

  setTheme(window.sessionStorage.theme ?? 'light');

  switchDefault && switchDefault.addEventListener('change', () => {
    setTheme(switchDefault.checked ? 'dark' : 'light');
  });

  /* ===== Home mobile menu (Chic navbar-mobile) ===== */
  const menuToggle = document.querySelector('.chic-header .menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  function closeMenu() {
    if (!menuToggle) return;
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu && mobileMenu.classList.remove('active');
  }

  menuToggle && menuToggle.addEventListener('click', () => {
    const open = !menuToggle.classList.contains('active');
    menuToggle.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileMenu && mobileMenu.classList.toggle('active', open);
  });
  mobileMenu && mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => closeMenu()));
  document.addEventListener('click', event => {
    if (menuToggle && !event.target.closest('.navbar-mobile')) closeMenu();
  });
  matchMedia('(min-width: 769px)').addEventListener('change', () => closeMenu());
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle?.classList.contains('active')) {
      closeMenu();
      menuToggle.focus();
    }
  });

  /* ===== Post TOC (Chic tocbot) ===== */
  if (window.tocbot && document.querySelector('.post-toc')) {
    const DEPTH_MAX = 6;
    let tocbotTimer;
    const tocbotDefaultConfig = {
      tocSelector: '.tocbot-list',
      contentSelector: '.post-content',
      headingSelector: 'h1, h2, h3, h4, h5',
      orderedList: false,
      scrollSmooth: true,
      onClick: extendClick
    };

    function extendClick() {
      clearTimeout(tocbotTimer);
      tocbotTimer = setTimeout(() => {
        tocbot.refresh(objMerge(tocbotDefaultConfig, { hasInnerContainers: true }));
      }, 420);
    }

    function objMerge(target, source) {
      for (const item in source) {
        if (Object.prototype.hasOwnProperty.call(source, item)) target[item] = source[item];
      }
      return target;
    }

    tocbot.init(objMerge(tocbotDefaultConfig, { collapseDepth: 1 }));

    const expandBtn = document.querySelector('.tocbot-toc-expand');
    expandBtn && expandBtn.addEventListener('click', () => {
      const expanded = expandBtn.getAttribute('data-expanded');
      if (expanded) expandBtn.removeAttribute('data-expanded');
      else expandBtn.setAttribute('data-expanded', 'true');
      tocbot.refresh(objMerge(tocbotDefaultConfig, { collapseDepth: expanded ? 1 : DEPTH_MAX }));
      expandBtn.innerText = expanded ? 'Expand all' : 'Collapse all';
    });

    const topBtn = document.querySelector('.tocbot-toc-top');
    topBtn && topBtn.addEventListener('click', () => window.scrollTo(0, 0));
    const bottomBtn = document.querySelector('.tocbot-toc-bottom');
    bottomBtn && bottomBtn.addEventListener('click', () => window.scrollTo(0, document.body.scrollHeight));
  }
})();
