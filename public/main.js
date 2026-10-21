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

  // 9LMNTS Studio OS Triage & Audit Engine (/os/)
  const triageForm = document.getElementById('triageForm');
  const triageResult = document.getElementById('triageResult');
  const triageOptions = document.querySelectorAll('.triage-option');

  if (triageForm && triageResult) {
    const pkgTitle = document.getElementById('triagePkgTitle');
    const pkgPrice = document.getElementById('triagePkgPrice');
    const pkgDeposit = document.getElementById('triagePkgDeposit');
    const pkgTurnaround = document.getElementById('triagePkgTurnaround');
    const pkgDeliverables = document.getElementById('triagePkgDeliverables');
    const waLink = document.getElementById('triageWaLink');
    const memoRef = document.getElementById('triageMemoRef');

    const PACKAGES_MAP = {
      revenue_recovery: {
        title: 'The Revenue Recovery System',
        price: '$1,200 CAD',
        deposit: '$600 CAD (50% upfront deposit)',
        turnaround: '3–5 Days (72-Hour Fast Track)',
        deliverables: [
          'High-converting mobile landing page',
          '24/7 automated SMS/Email lead intake engine',
          'Speed-to-lead auto-responder webhook',
          'Sub-second mobile performance optimization'
        ]
      },
      turnkey_os: {
        title: 'Turnkey Business OS / Chef OS',
        price: '$2,200 – $3,200 CAD',
        deposit: '$1,100 – $1,600 CAD (50% upfront deposit)',
        turnaround: '5–7 Days',
        deliverables: [
          'Full custom web application + Supabase database',
          'Live customer booking & calendar reservation portal',
          'Custom dynamic quote calculator',
          'Automated catering/project intake pipeline'
        ]
      },
      webar_menu: {
        title: 'WebAR Signature Menu Add-On',
        price: '$450 CAD',
        deposit: '$225 CAD (50% upfront deposit)',
        turnaround: '48 Hours',
        deliverables: [
          '3–5 signature products or dishes rendered into interactive 3D WebAR browser models',
          'QR code table tents & printable flyers for zero-app camera scanning',
          'Direct Apple QuickLook & Android SceneViewer compatibility'
        ]
      }
    };

    triageOptions.forEach((opt) => {
      opt.addEventListener('click', () => {
        triageOptions.forEach((o) => o.classList.remove('selected'));
        opt.classList.add('selected');
        const radio = opt.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });

    triageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedRadio = triageForm.querySelector('input[name="bottleneck"]:checked');
      const val = selectedRadio ? selectedRadio.value : 'revenue_recovery';
      const pkg = PACKAGES_MAP[val] || PACKAGES_MAP.revenue_recovery;
      const url = document.getElementById('triageUrl')?.value || 'Your Business';
      const contact = document.getElementById('triageContact')?.value || 'Pending';

      if (pkgTitle) pkgTitle.textContent = pkg.title;
      if (pkgPrice) pkgPrice.textContent = pkg.price;
      if (pkgDeposit) pkgDeposit.textContent = pkg.deposit;
      if (pkgTurnaround) pkgTurnaround.textContent = pkg.turnaround;
      if (pkgDeliverables) {
        pkgDeliverables.innerHTML = pkg.deliverables.map((d) => `<li><span class="ok" style="color:#00D2FF">✓</span> ${d}</li>`).join('');
      }
      if (memoRef) {
        memoRef.textContent = `Deposit: ${url.replace(/^https?:\/\//, '')} · ${contact}`;
      }
      if (waLink) {
        const text = encodeURIComponent(`Hi Darnley, I just ran the 60s Mobile Friction Audit for ${url}. Qualified for ${pkg.title} (${pkg.price}). Direct contact: ${contact}. Ready to send deposit.`);
        waLink.href = `https://wa.me/16139094038?text=${text}`;
      }

      triageResult.style.display = 'block';
      triageResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));
})();
