/**
 * 9LMNTS Studio — Client Prototype Preview Drawer & Contact Pre-Selector
 * Enables 1-click modal preview for Handyman OS, Venue OS, and Sound Clash Arena,
 * and handles dynamic URL package pre-selection on /contact/.
 */

(function () {
  'use strict';

  const PROTOTYPES = {
    handyman: {
      title: "Handyman Dispatch OS",
      kicker: "Trades & Field Services · Lead Capture",
      tagline: "Never lose a high-ticket quote to an unreturned voicemail again.",
      price: "$1,800 CAD (or $500 modular upgrade)",
      turnaround: "1–2 weeks",
      deposit: "$900 CAD upfront via Interac",
      features: [
        "Instant speed-to-lead autoresponder under 60 seconds",
        "Mobile-first dynamic quote calculator for Ottawa homeowners",
        "Direct emergency dispatch & photo upload form",
        "Interac & credit card job deposit rail"
      ],
      previewImg: "/assets/mockup-turnkey-commerce.jpg",
      orderPkg: "launch-page"
    },
    venue: {
      title: "Venue & Reception OS",
      kicker: "Luxury Hospitality & Private Events · Guest Companion",
      tagline: "Turn private receptions and banquets into digital guest experiences.",
      price: "$4,500 CAD (Growth Website ⭐)",
      turnaround: "3–4 weeks",
      deposit: "$1,800 CAD upfront (40/30/30 rail)",
      features: [
        "Interactive guest table & seating finder",
        "Direct Apple Pay & Interac cash honeymoon fund registry",
        "Live speech battle & maid-of-honor crowd voting",
        "Automatic digital drink rail tipping straight to tables"
      ],
      previewImg: "/assets/wedding-os-sanon-reception.png",
      orderPkg: "growth-website"
    },
    clash: {
      title: "Sound Clash OS Arena",
      kicker: "Live Competition & Urban Events · Base44",
      tagline: "Turnkey 8-contender DJ sound clash and beat battle tournament engine.",
      price: "from $4,500 CAD (Custom System)",
      turnaround: "3–4 weeks",
      deposit: "$1,800 CAD upfront via Interac",
      features: [
        "8-contender sudden-death tournament bracket tree",
        "Live crowd decibel & QR mobile voting duel meters",
        "Instant VIP bottle service and door cover checkout",
        "Real-time organizer jumbotron sync via WebSockets"
      ],
      previewImg: "/assets/mobile-clash-grand-finals.jpg",
      orderPkg: "growth-website",
      externalUrl: "https://clash.9lmntsstudio.com"
    }
  };

  const PACKAGE_DETAILS = {
    'quick-fix': {
      name: 'Quick Fix / Modular Upgrade',
      price: 'from $500 CAD',
      deposit: '$500 CAD (100% upfront)',
      schedule: '100% upfront to start',
      turnaround: '2–5 business days',
      terms: 'Drop-in widget on your existing website'
    },
    'launch-page': {
      name: 'Launch Page',
      price: '$1,800 CAD',
      deposit: '$900 CAD (50% to start)',
      schedule: '50% kickoff ($900) · 50% before public launch ($900)',
      turnaround: '1–2 weeks',
      terms: 'Complete standalone high-converting single page'
    },
    'growth-website': {
      name: 'Growth Website ⭐ (Most Popular)',
      price: '$4,500 CAD',
      deposit: '$1,800 CAD (40% to start)',
      schedule: '40% kickoff ($1,800) · 30% staging ($1,350) · 30% launch ($1,350)',
      turnaround: '3–4 weeks',
      terms: 'Full 5–7 custom pages + automated booking system'
    },
    'signature-system': {
      name: 'Signature System',
      price: 'from $8,500 CAD',
      deposit: '$3,400 CAD (40% to start)',
      schedule: '40% kickoff ($3,400) · 30% mid-sprint ($2,550) · 30% launch ($2,550)',
      turnaround: '5–8 weeks',
      terms: 'Bespoke multi-service commerce & client portals'
    }
  };

  // 1. Dynamic Package Pre-Selection on /contact/
  function initContactPage() {
    const pkgSelect = document.getElementById('cPkg');
    if (!pkgSelect) return;

    // Read URL params
    const params = new URLSearchParams(window.location.search);
    const pkgParam = params.get('package');
    const sprintParam = params.get('sprint');
    const selectedPkg = pkgParam || (sprintParam ? 'growth-website' : 'growth-website');

    // Map query to select value
    if (pkgParam && pkgSelect.querySelector(`option[value="${pkgParam}"]`)) {
      pkgSelect.value = pkgParam;
    }

    if (sprintParam) {
      const notes = document.getElementById('cNotes');
      if (notes && !notes.value) {
        notes.value = `Interested in deploying: ${sprintParam}. Let's discuss requirements and kickoff timeline.`;
      }
    }

    // Insert or update package breakdown box
    let breakdown = document.getElementById('pkgBreakdown');
    if (!breakdown) {
      breakdown = document.createElement('div');
      breakdown.id = 'pkgBreakdown';
      breakdown.className = 'pkg-breakdown-card';
      pkgSelect.parentElement.appendChild(breakdown);
    }

    function renderBreakdown(pkgKey) {
      const info = PACKAGE_DETAILS[pkgKey] || PACKAGE_DETAILS['growth-website'];
      breakdown.innerHTML = `
        <div class="pbd-head">
          <div>
            <span class="pbd-kicker">SELECTED TIER</span>
            <h4>${info.name}</h4>
          </div>
          <div class="pbd-price">${info.price}</div>
        </div>
        <div class="pbd-grid">
          <div class="pbd-item">
            <span class="pbd-lbl">Upfront Kickoff Deposit</span>
            <span class="pbd-val accent">${info.deposit}</span>
          </div>
          <div class="pbd-item">
            <span class="pbd-lbl">Milestone Rail</span>
            <span class="pbd-val">${info.schedule}</span>
          </div>
          <div class="pbd-item">
            <span class="pbd-lbl">Launch Turnaround</span>
            <span class="pbd-val">${info.turnaround}</span>
          </div>
          <div class="pbd-item">
            <span class="pbd-lbl">Payment Method</span>
            <span class="pbd-val ok">Desjardins Interac Autodeposit</span>
          </div>
        </div>
        <div class="pbd-note">
          🔒 <b>100% Protection Guarantee:</b> Official numbered invoice + signed milestone agreement required before any work begins.
        </div>
      `;
    }

    renderBreakdown(pkgSelect.value);
    pkgSelect.addEventListener('change', () => renderBreakdown(pkgSelect.value));
  }

  // 2. Prototype Quick-Preview Drawer
  function initPreviewDrawer() {
    let drawer = document.getElementById('prototypePreviewDrawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'prototypePreviewDrawer';
      drawer.className = 'proto-drawer-modal';
      drawer.innerHTML = `
        <div class="proto-backdrop"></div>
        <div class="proto-content">
          <div class="proto-head">
            <div>
              <span class="proto-kicker" id="protoKicker"></span>
              <h3 id="protoTitle" style="color:#FFFFFF;margin:4px 0 0"></h3>
            </div>
            <button class="proto-close-btn" aria-label="Close preview">✕</button>
          </div>
          <div class="proto-body">
            <div class="proto-hero-img-wrap">
              <img id="protoImg" src="" alt="System Preview" style="width:100%;border-radius:12px">
            </div>
            <p id="protoTagline" style="font-size:15px;color:#FFFFFF;font-weight:600;margin:16px 0 8px"></p>
            <div class="proto-meta-strip">
              <div><span class="lbl">Investment</span><b id="protoPrice"></b></div>
              <div><span class="lbl">Kickoff Deposit</span><b id="protoDeposit" class="accent"></b></div>
              <div><span class="lbl">Turnaround</span><b id="protoTurnaround"></b></div>
            </div>
            <h5 style="color:#A1A1AA;text-transform:uppercase;font-size:11px;letter-spacing:0.06em;margin:18px 0 10px">What's Engineered Inside</h5>
            <ul class="proto-features" id="protoFeatures"></ul>
          </div>
          <div class="proto-foot">
            <a class="btn btn-primary" id="protoOrderBtn" href="/contact/">Claim This System <span class="arrow">↗</span></a>
            <a class="btn btn-ghost" id="protoLiveBtn" href="#" target="_blank" rel="noopener">Open Live Site <span class="arrow">↗</span></a>
          </div>
        </div>
      `;
      document.body.appendChild(drawer);

      drawer.querySelector('.proto-close-btn').addEventListener('click', closeDrawer);
      drawer.querySelector('.proto-backdrop').addEventListener('click', closeDrawer);
    }

    function openDrawer(key) {
      const proto = PROTOTYPES[key];
      if (!proto) return;

      document.getElementById('protoKicker').textContent = proto.kicker;
      document.getElementById('protoTitle').textContent = proto.title;
      document.getElementById('protoTagline').textContent = proto.tagline;
      document.getElementById('protoPrice').textContent = proto.price;
      document.getElementById('protoDeposit').textContent = proto.deposit;
      document.getElementById('protoTurnaround').textContent = proto.turnaround;
      document.getElementById('protoImg').src = proto.previewImg;

      const featList = document.getElementById('protoFeatures');
      featList.innerHTML = proto.features.map(f => `<li>✅ ${f}</li>`).join('');

      const orderBtn = document.getElementById('protoOrderBtn');
      orderBtn.href = `/contact/?package=${proto.orderPkg}`;

      const liveBtn = document.getElementById('protoLiveBtn');
      if (proto.externalUrl) {
        liveBtn.href = proto.externalUrl;
        liveBtn.style.display = 'inline-flex';
      } else {
        liveBtn.style.display = 'none';
      }

      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Intercept clicks on hotspot cards
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.turnkey-hotspot-card');
      if (card) {
        const href = card.getAttribute('href');
        if (href.includes('handyman')) {
          e.preventDefault();
          openDrawer('handyman');
        } else if (href.includes('wedding')) {
          e.preventDefault();
          openDrawer('venue');
        } else if (href.includes('clash')) {
          // If shift or ctrl is pressed, let them open link, else open drawer
          if (!e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            openDrawer('clash');
          }
        }
      }
    });
  }

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initContactPage();
      initPreviewDrawer();
    });
  } else {
    initContactPage();
    initPreviewDrawer();
  }
})();
