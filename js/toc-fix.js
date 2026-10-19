/* TOC interaction fixes layered on top of chic.js (Chic tocbot):
   1. Clicking a TOC entry must not collapse-then-re-expand the list.
      tocbot's refresh() (fired 420ms after each click by chic.js) resets
      every branch to collapsed; we snapshot the open branches on click and
      restore them instantly (transition suppressed) right after the rebuild.
   2. "Collapse all" must stick: tocbot's scroll tracking re-expands the
      active branch on every scroll event; while the user is in collapsed
      mode we re-collapse instantly so the state holds until they expand
      or navigate via the TOC. */
(() => {
  'use strict';
  const list = document.querySelector('.post-toc .tocbot-list');
  if (!list || !window.tocbot) return;

  let openHrefs = new Set();
  let collapsedMode = false;

  const snapshotOpenBranches = () => {
    openHrefs = new Set();
    list.querySelectorAll('ul.is-collapsible:not(.is-collapsed)').forEach(ul => {
      ul.querySelectorAll('a[href^="#"]').forEach(a => openHrefs.add(a.getAttribute('href')));
    });
  };

  const restoreOpenBranches = () => {
    list.classList.add('no-toc-anim');
    list.querySelectorAll('ul.is-collapsible').forEach(ul => {
      const open = [...ul.querySelectorAll('a[href^="#"]')].some(a => openHrefs.has(a.getAttribute('href')));
      ul.classList.toggle('is-collapsed', !open);
    });
    requestAnimationFrame(() => requestAnimationFrame(() => list.classList.remove('no-toc-anim')));
  };

  const enforceCollapsedMode = () => {
    if (!collapsedMode) return;
    /* collapse everything except the branch containing the active heading,
       so the current (possibly sub-) heading always stays visible; as the
       user scrolls, the visible branch follows the active heading */
    const active = list.querySelector('a.is-active-link');
    list.querySelectorAll('ul.is-collapsible').forEach(ul => {
      ul.classList.toggle('is-collapsed', !(active && ul.contains(active)));
    });
  };

  /* capture phase: runs before chic.js's bubble-phase click handlers */
  list.addEventListener('click', event => {
    if (!event.target.closest('a[href^="#"]')) return;
    snapshotOpenBranches(); /* keep expansion state across the 420ms refresh */
    collapsedMode = false;  /* navigating by TOC re-enables scroll tracking */
  }, true);

  /* tocbot.refresh() rebuilds the list children -> restore instantly */
  new MutationObserver(() => restoreOpenBranches()).observe(list, { childList: true });

  /* tocbot's updateToc toggles classes (expand active branch) -> re-collapse */
  new MutationObserver(enforceCollapsedMode).observe(list, { attributes: true, attributeFilter: ['class'], subtree: true });

  const expandBtn = document.querySelector('.tocbot-toc-expand');
  expandBtn && expandBtn.addEventListener('click', () => {
    /* chic.js's own handler (attached earlier) has already flipped the state:
       "Expand all" text => everything is now collapsed => sticky mode on */
    collapsedMode = expandBtn.innerText.trim() === 'Expand all';
    /* keep the rebuild-restore (MutationObserver microtask below) in sync:
       collapse-all => restore to empty; expand-all => restore to all open */
    if (collapsedMode) {
      /* keep only the active heading's branch open after the rebuild */
      openHrefs = new Set();
      const active = list.querySelector('a.is-active-link');
      if (active && active.getAttribute('href')) openHrefs.add(active.getAttribute('href'));
    } else {
      list.querySelectorAll('a[href^="#"]').forEach(a => openHrefs.add(a.getAttribute('href')));
    }
  });

  /* belt & braces alongside the class observer */
  document.addEventListener('scroll', enforceCollapsedMode, { passive: true });
})();
