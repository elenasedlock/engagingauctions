// Run in the browser console (or via javascript_tool) on either site at 1280x800.
// Returns a JSON map: text -> [tag, family, size, weight, lineHeight, letterSpacing,
//                              transform, color, align]
(() => {
  const g = el => getComputedStyle(el);
  const vis = el => {
    const r = el.getBoundingClientRect(), s = g(el);
    return s.display !== 'none' && s.visibility !== 'hidden' && r.height > 0 && r.width > 0;
  };
  const norm = t => t.replace(/\s+/g, ' ').trim().slice(0, 40);
  const out = {};
  document.querySelectorAll('h1,h2,h3,h4,h5,p,li,a,span,blockquote').forEach(el => {
    if (!vis(el)) return;
    const t = norm(el.innerText || '');
    if (!t || t.length < 6) return;
    if (el.querySelector('h1,h2,h3,h4,p,li,a')) return;   // leaf text only
    const s = g(el);
    if (!out[t]) out[t] = [
      el.tagName.toLowerCase(), s.fontFamily.split(',')[0].replace(/"/g, ''),
      s.fontSize, s.fontWeight, s.lineHeight, s.letterSpacing,
      s.textTransform, s.color, s.textAlign,
    ];
  });
  return JSON.stringify(out);
})()
