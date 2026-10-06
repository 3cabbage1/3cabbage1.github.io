/* Cosmos-Chic: theme switch & TOC scripts */
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
