// 9LMNTS Studio — site interactions (no dependencies)
(() => {
  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Copy-to-clipboard
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        const old = btn.textContent;
        btn.textContent = 'Copied ✓';
        setTimeout(() => (btn.textContent = old), 1600);
      } catch { /* clipboard unavailable */ }
    });
  });

  // Reveal on scroll
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add('in'));
  }

  // Booking / deposit calculator (embeds page)
  const calc = document.querySelector('[data-calc]');
  if (calc) {
    const guests = calc.querySelector('#guests');
    const pkg = calc.querySelector('#pkg');
    const out = calc.querySelector('#total');
    const dep = calc.querySelector('#deposit');
    const gOut = calc.querySelector('#guestsOut');
    const fmt = (n) => n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 });
    const run = () => {
      const total = Number(guests.value) * Number(pkg.value);
      gOut.textContent = guests.value;
      out.textContent = fmt(total);
      dep.textContent = fmt(total * 0.5);
    };
    guests.addEventListener('input', run);
    pkg.addEventListener('change', run);
    run();
  }

  // Package preselect from ?package= on contact form
  const sel = document.querySelector('select[name="package"]');
  const p = new URLSearchParams(location.search).get('package');
  if (sel && p) {
    [...sel.options].forEach((o) => { if (o.value.toLowerCase().startsWith(p.toLowerCase())) sel.value = o.value; });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
})();
