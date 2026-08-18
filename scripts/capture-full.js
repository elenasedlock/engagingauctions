// FULL-SPECTRUM capture: typography + box model + colour + border + layout.
// Run on live and on localhost at the same viewport, then diff the two maps.
// Key = element text (first 40 chars) or, for text-less boxes, a structural path.
(() => {
  const g = el => getComputedStyle(el);
  const vis = el => {
    const r = el.getBoundingClientRect(), s = g(el);
    return s.display !== 'none' && s.visibility !== 'hidden' && r.width > 0 && r.height > 0;
  };
  const norm = t => (t || '').replace(/\s+/g, ' ').trim().slice(0, 40);
  const px = v => (v === '0px' ? '0' : v);
  const out = {};
  let anon = 0;

  document.querySelectorAll('body *').forEach(el => {
    if (!vis(el)) return;
    if (['SCRIPT','STYLE','NOSCRIPT','SVG','PATH','HEAD'].includes(el.tagName)) return;
    if (el.closest('#wpadminbar')) return;                 // ignore the WP admin bar
    const s = g(el);
    const r = el.getBoundingClientRect();
    const text = norm(el.innerText);
    const own = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
    // key: text-bearing leaves by text, boxes by tag+size+background
    const key = (text && own && text.length > 3)
      ? text
      : `«${el.tagName.toLowerCase()}#${++anon}»`;
    if (out[key]) return;
    out[key] = {
      tag: el.tagName.toLowerCase(),
      // geometry
      w: Math.round(r.width), h: Math.round(r.height),
      // typography
      ff: s.fontFamily.split(',')[0].replace(/"/g, ''), fs: s.fontSize, fw: s.fontWeight,
      lh: s.lineHeight, ls: s.letterSpacing, tt: s.textTransform, ta: s.textAlign,
      color: s.color,
      // colour + border
      bg: s.backgroundColor, bgImg: s.backgroundImage === 'none' ? '' : 'img',
      bw: px(s.borderWidth), bc: s.borderColor, br: px(s.borderRadius),
      // box model
      pad: px(s.padding), mar: px(s.margin),
      // layout
      disp: s.display, dir: s.flexDirection, jc: s.justifyContent, ai: s.alignItems,
      gap: px(s.gap), pos: s.position,
    };
  });
  return JSON.stringify(out);
})()
