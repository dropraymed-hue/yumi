// Shared by the Yumi web pages: fills the developer name, contact email and links from config.json.
window.SITE = fetch('config.json', { cache: 'no-store' }).then(r => r.json()).catch(() => ({})).then(cfg => {
  const real = v => v && !/YOUR_/.test(v) ? v : '';
  document.querySelectorAll('[data-cfg]').forEach(el => {
    const v = real(cfg[el.dataset.cfg]);
    if (!v) return;
    if (el.dataset.cfg === 'contactEmail') { el.textContent = v; if (el.tagName === 'A') el.href = 'mailto:' + v; }
    else if (el.dataset.cfg === 'anpdpNumber') el.textContent = ' (' + v + ')';
    else el.textContent = v;
  });
  return cfg;
});
