(function () {
  'use strict';

  const DENYLIST = new Set([
    'admin', 'api', 'login', 'logout', 'contact', 'kontakt', 'impressum', 'datenschutz',
    'about', 'ueber', 'dashboard', 'home', 'index', 'robots', 'sitemap', 'favicon',
    'test', 'null', 'undefined', 'nan', 'true', 'false', 'asdf', 'foo', 'bar', 'xxx',
    'asshole', 'arsch', 'arschloch', 'fuck', 'shit', 'scheisse', 'wichser', 'idiot',
    'hitler', 'nazi',
  ]);

  const NAME_RE = /^\p{L}+(?:-\p{L}+)?$/u;
  const MAX_LEN = 20;

  function parseName(pathname) {
    let raw = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
    if (!raw) return null;
    try { raw = decodeURIComponent(raw); } catch (_) { return null; }
    if (raw.length > MAX_LEN) return null;
    if (!NAME_RE.test(raw)) return null;

    const parts = raw.split('-');
    for (const part of parts) {
      if (DENYLIST.has(part.toLowerCase())) return null;
    }
    if (DENYLIST.has(raw.toLowerCase())) return null;

    return parts
      .map(p => p.charAt(0).toLocaleUpperCase() + p.slice(1).toLocaleLowerCase())
      .join(' ');
  }

  function injectStyles() {
    if (document.getElementById('pf-personalize-styles')) return;
    const style = document.createElement('style');
    style.id = 'pf-personalize-styles';
    style.textContent = `
      .pf-robot { width: 16px; height: 16px; color: #4ade80; flex: none; }
      .pf-robot-eye { transform-origin: center; transform-box: fill-box; animation: pf-blink 6s ease-in-out infinite; }
      .pf-robot-eye-r { animation-delay: 0.08s; }
      .pf-robot-smile { animation: pf-breathe 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      @keyframes pf-blink { 0%, 92%, 100% { transform: scaleY(1); } 94%, 96% { transform: scaleY(0.1); } }
      @keyframes pf-breathe { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
      @media (prefers-reduced-motion: reduce) {
        .pf-robot-eye, .pf-robot-smile { animation: none !important; opacity: 1 !important; transform: none !important; }
      }
    `;
    document.head.appendChild(style);
  }

  function renderBadge(name) {
    const badge = document.querySelector('[data-personalize="hero-badge"]');
    if (!badge) return;
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', 'pf-robot');
    svg.innerHTML = `
      <line x1="8" y1="1.5" x2="8" y2="3" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
      <rect x="2" y="3" width="12" height="10" rx="2" stroke="currentColor" stroke-width="1.1" fill="none"/>
      <circle class="pf-robot-eye pf-robot-eye-l" cx="5.7" cy="7.2" r="0.95" fill="currentColor"/>
      <circle class="pf-robot-eye pf-robot-eye-r" cx="10.3" cy="7.2" r="0.95" fill="currentColor"/>
      <path class="pf-robot-smile" d="M 5.8 10.3 Q 8 11.1 10.2 10.3" stroke="currentColor" stroke-width="1.0" fill="none" stroke-linecap="round"/>
    `;
    badge.textContent = '';
    badge.appendChild(svg);
    badge.appendChild(document.createTextNode(' Willkommen ' + name));
  }

  function renderKontakt(name) {
    const el = document.querySelector('[data-personalize="kontakt-lead"]');
    if (!el) return;
    const original = (el.textContent || '').trim();
    if (!original) return;
    const lowered = original.charAt(0).toLocaleLowerCase() + original.slice(1);
    el.textContent = name + ', ' + lowered;
  }

  function init() {
    const path = window.location.pathname;
    const name = parseName(path);
    if (!name) {
      if (path !== '/' && path !== '') {
        try { history.replaceState(null, '', '/'); } catch (_) {}
      }
      return;
    }
    injectStyles();
    renderBadge(name);
    renderKontakt(name);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
