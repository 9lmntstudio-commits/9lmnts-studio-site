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

  // Stations Drawer
  const stationsToggle = document.getElementById('stationsToggle');
  const stationsDrawer = document.getElementById('stationsDrawer');
  const stationsBackdrop = document.getElementById('stationsBackdrop');
  const stationsClose = document.getElementById('stationsClose');

  const openDrawer = () => {
    if (stationsDrawer && stationsBackdrop) {
      stationsDrawer.classList.add('open');
      stationsBackdrop.classList.add('open');
      stationsToggle?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDrawer = () => {
    if (stationsDrawer && stationsBackdrop) {
      stationsDrawer.classList.remove('open');
      stationsBackdrop.classList.remove('open');
      stationsToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  };

  stationsToggle?.addEventListener('click', openDrawer);
  stationsClose?.addEventListener('click', closeDrawer);
  stationsBackdrop?.addEventListener('click', closeDrawer);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && stationsDrawer?.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Cloner simulation
  const clonerBtns = document.querySelectorAll('.cloner-btn');
  const clonerOutput = document.getElementById('clonerOutput');
  const PRESETS = {
    'hf-tts': `> Ingesting Hugging Face Space: /spaces/hexgrad/Kokoro-82M\n✓ Cloned repository: shallow --depth 1\n✓ Deconstructed Gradio pipeline -> Extracted voice models & audio buffer stream\n✓ Synthesized into lightweight client audio player + Supabase Edge Function\n✓ Estimated deployment: 48 hours | Zero server overhead`,
    'gh-booking': `> Ingesting GitHub Repository: /calcom/cal.com\n✓ Cloned repository: analyzed Prisma schemas & booking APIs\n✓ Stripped monorepo bloat (4.2 GB -> 38 KB modular intake widget)\n✓ Wired to Desjardins Interac autodeposit (9lmntstudio@gmail.com)\n✓ Estimated deployment: 72 hours | 100% mobile friction elimination`,
    'web-catering': `> Ingesting Target URL: Luxury Catering Domain\n✓ Scraped 6 signature dish platters + authentic pricing ($24-$48/guest)\n✓ Extracted 60-30-10 color palette & typography hierarchy into DESIGN.md\n✓ Generated dynamic headcount slider + 50% Interac deposit lock ($1,100 CAD)\n✓ Estimated deployment: 5 days | Turnkey live on 9lmntsstudio.com`,
    'gh-clash': `> Ingesting Competition OS Template: /boilerplates/pitch-os\n✓ Configured 8-contender live duel tournament bracket tree\n✓ Connected WebSocket crowd vote telemetry & overhead Jumbotron mirror\n✓ Integrated $20 Cover / $10 Boost / $150 VIP Table monetization grid\n✓ Estimated deployment: 7 days | Tested on Nuvo Lounge & Lansdowne Park`
  };
  clonerBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      clonerBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.dataset.sample;
      if (clonerOutput && PRESETS[key]) {
        clonerOutput.innerHTML = `<span style="color:#FF5500">&gt; Reverse-Engineering Ingestion Pipeline:</span><br>` + PRESETS[key].replace(/\n/g, '<br>');
      }
    });
  });

  // Footer year
  document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
})();
