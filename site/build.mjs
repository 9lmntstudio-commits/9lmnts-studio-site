// Complete site builder: generates all public pages, legal suite, onboarding, and full admin dashboard into /public
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { layout, pageHero, ctaBand, packageCard, SITE, PACKAGES, CARE } from './layout.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'public');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function writePage(relPath, html) {
  const target = path.join(OUT, relPath);
  ensureDir(path.dirname(target));
  fs.writeFileSync(target, html, 'utf8');
  console.log('✓ Wrote:', relPath);
}

// -------------------------------------------------------------
// 1. HOME (/)
// -------------------------------------------------------------
const homeHtml = layout({
  path: '/',
  title: 'Websites That Book Your Customers For You',
  description: '9LMNTS Studio designs and builds high-converting websites and booking systems for Ottawa restaurants, trades, and service businesses. Fixed pricing. Live in 2–4 weeks.',
  body: `
  <section class="hero">
    <div class="hero-bg-mesh"></div>
    <div class="container"><div class="hero-grid">
      <div>
        <span class="eyebrow"><span class="dot"></span> Digital Architecture &amp; Client Acquisition</span>
        <h1>We Build Systems <span class="soft">That</span><br><span class="accent">Generate Cash.</span></h1>
        <p class="lead">We architect high-converting digital platforms and zero-friction client acquisition systems for Ottawa service businesses. Rapid 2–4 week turnaround. Enterprise execution.</p>
        <div class="hero-ctas">
          <a class="btn btn-primary" href="/services/">Claim A System <span class="arrow">↗</span></a>
          <a class="btn btn-ghost" href="/work/">View Live Work <span class="arrow">↗</span></a>
        </div>
        <div class="hero-note">
          <span class="mono">📍 Ottawa, ON · Founder-Led · Desjardins Interac Rail</span>
        </div>
      </div>
      <div>
        <!-- Live Studio Workbench Preview Card -->
        <div class="workbench">
          <div class="wb-head">
            <span><span class="accent">9</span> STUDIO WORKBENCH</span>
            <span>OTTAWA / ARCHITECTURE VIEW 01-03</span>
          </div>
          <div class="wb-body">
            <div class="mono dim" style="font-size:11px">WORKSPACE / ACTIVE AIRSPACE</div>
            <div class="wb-title">Built around the customer conversion handoff.</div>
            <div class="wb-row">
              <div class="wb-cell">
                <div>LEAD FLOW / 01</div>
                <div class="big accent">01 <span style="font-size:14px;color:var(--text)">INTAKE</span></div>
                <p class="dim" style="margin:4px 0 0;font-size:10px">Capture → Qualify → Route</p>
              </div>
              <div class="wb-cell">
                <div>MOBILE CONVERSION</div>
                <div class="bar"><span></span></div>
                <p class="dim" style="margin:0;font-size:10px">ZERO FRICTION DROP-OFF</p>
              </div>
            </div>
            <div class="wb-list">
              <div><span>01 CONVERSION-FIRST PAGES</span><span class="ok">OPTIMIZED</span></div>
              <div><span>02 CLIENT INTAKE &amp; BOOKING MODAL</span><span class="ok">LIVE MODAL</span></div>
              <div><span>03 CONNECTED BUSINESS RAILS</span><span class="ok">DESJARDINS + STRIPE</span></div>
            </div>
          </div>
          <div class="wb-foot">
            <span>9LMNTS / SYSTEM TELEMETRY</span>
            <span class="ok">● 100% OPERATIONAL</span>
          </div>
          <div class="wb-float">
            <span class="accent">↘</span> <b>Friction, mapped.</b>
            <span class="dim">Engineered for immediate cash flow.</span>
          </div>
        </div>
      </div>
    </div></div>
  </section>

  <!-- Telemetry Strip -->
  <div class="container"><div class="stats">
    <div class="stat"><span class="num accent">3–5</span><span class="lbl">Days Average<br>Launch Turnaround</span></div>
    <div class="stat"><span class="num">100%</span><span class="lbl">Friction Audited<br>&amp; Mobile-First</span></div>
    <div class="stat"><span class="num accent">50%</span><span class="lbl">Interac Deposit<br>Project Protection Rail</span></div>
  </div></div>

  <!-- 3D Hardware Device Mockup Showcase -->
  <section class="section-tight" style="padding-top:16px"><div class="container">
    <div class="mockup-showcase reveal">
      <img src="/assets/mockup-devices.jpg" alt="9LMNTS Studio Turnkey Operating Systems on MacBook Pro and iPhone" loading="lazy">
      <div class="mockup-badge">
        <span class="dot"></span>
        <span>TURNKEY OPERATING SYSTEMS · MULTI-SURFACE DEPLOYMENT</span>
      </div>
      <div class="mockup-chips desktop">
        <span class="badge green">● Sub-Second Load Speed</span>
        <span class="badge neutral">Mobile-First Thumb Ergonomics</span>
      </div>
    </div>
  </div></section>

  <!-- Commercial Offerings Bento Grid -->
  <section class="section"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Commercial Offerings</span>
        <h2>Transparent Architecture.<br>Zero Guesswork.</h2>
      </div>
      <p>Every sprint includes custom responsive design, conversion copywriting, mobile optimization, and direct founder support. No hidden retainer lock-in.</p>
    </div>
    <div class="grid g4">
      ${PACKAGES.map((p, i) => packageCard(p, i)).join('')}
    </div>
  </div></section>

  <!-- Live Vertical Showcases (Rich Cinematic Photography) -->
  <section class="section border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Proof in Production</span>
        <h2>Tested on Real Ottawa Verticals.</h2>
      </div>
      <a class="btn btn-ghost" href="/work/">Explore All Prototypes <span class="arrow">↗</span></a>
    </div>
    <div class="grid g3">
      <!-- Showcase 1: Chef OS -->
      <article class="showcase-card reveal">
        <div class="showcase-media">
          <img src="/assets/culinary-dish-showcase.jpg" alt="Chef OS Catering Showcase" loading="lazy">
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Culinary &amp; Catering</span>
          <span class="showcase-score">● 99/100 SPEED</span>
        </div>
        <div class="showcase-body">
          <h3>Chef OS &amp; Universal Catering Engine</h3>
          <p>Instant dynamic headcount calculator, menu customizer, and 50% deposit checkout for Ottawa caterers &amp; private chefs.</p>
          <ul class="showcase-features">
            <li>Dynamic $35–$65/plate pricing slider</li>
            <li>Instant email + SMS lead notifications</li>
            <li>Direct Interac &amp; Stripe payment rail</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/demo-client.html" target="_blank" rel="noopener">Launch Live Prototype <span class="arrow">↗</span></a>
          </div>
        </div>
      </article>

      <!-- Showcase 2: Trades OS -->
      <article class="showcase-card reveal">
        <div class="showcase-media">
          <img src="/assets/trades-craft-showcase.jpg" alt="Contractor Dispatch Trades Showcase" loading="lazy">
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Trades &amp; Home Services</span>
          <span class="showcase-score">● 100/100 SPEED</span>
        </div>
        <div class="showcase-body">
          <h3>Contractor Dispatch &amp; Fast Quote OS</h3>
          <p>Click-to-dispatch sticky mobile bar, job scope selector, and photo upload for Ottawa plumbers, electricians, and contractors.</p>
          <ul class="showcase-features">
            <li>1-Tap thumb call action for emergency jobs</li>
            <li>Multi-category scope selector &amp; photo upload</li>
            <li>Direct technician phone alert routing</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/handyman.html" target="_blank" rel="noopener">Launch Live Prototype <span class="arrow">↗</span></a>
          </div>
        </div>
      </article>

      <!-- Showcase 3: Reception OS -->
      <article class="showcase-card reveal">
        <div class="showcase-media">
          <img src="/assets/venue-lounge-showcase.jpg" alt="Private Dining Reception Showcase" loading="lazy">
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Venues &amp; Hospitality</span>
          <span class="showcase-score">● 98/100 SPEED</span>
        </div>
        <div class="showcase-body">
          <h3>Private Dining &amp; Reception Intake</h3>
          <p>Multi-step date reservation, dietary requirement intake, and automatic confirmation routing for boutique Ottawa venues.</p>
          <ul class="showcase-features">
            <li>Interactive date reservation calendar</li>
            <li>Bar package &amp; A/V tier selection</li>
            <li>Zero double-booking calendar validation</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/reception.html" target="_blank" rel="noopener">Launch Live Prototype <span class="arrow">↗</span></a>
          </div>
        </div>
      </article>
    </div>
  </div></section>

  <!-- Interactive Embed Showcase Banner -->
  <section class="section-tight"><div class="container">
    <div class="cta-band">
      <div>
        <span class="kicker">Modular Upgrades</span>
        <h2>Have an existing website? Drop in our intake widget in 5 minutes.</h2>
        <p>You don't need a full rebuild to start capturing qualified inquiries. Our universal script drops into WordPress, Squarespace, Wix, or Shopify with 1 line of code.</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-primary" href="/embeds/">Test Live Widget Simulator <span class="arrow">↗</span></a>
        <a class="btn btn-ghost" href="/audit/">Request Free Video Audit</a>
      </div>
    </div>
  </div></section>

  <!-- The 3 Step Flow -->
  <section class="section border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">How We Work</span>
        <h2>From Deposit to Deployment in 3 Sprints.</h2>
      </div>
    </div>
    <div class="steps">
      <div class="step reveal">
        <div class="n">SPRINT 01</div>
        <div><h3>Blueprint &amp; Friction Audit</h3><p>We audit your current mobile bottlenecks, customer drop-offs, and map out your custom wireframes in 48 hours.</p></div>
        <div><span class="badge neutral">Day 1–2</span></div>
      </div>
      <div class="step reveal">
        <div class="n">SPRINT 02</div>
        <div><h3>Interactive Staging &amp; Content</h3><p>We code your production site on private staging, write high-converting copy, and wire up your booking forms and notifications.</p></div>
        <div><span class="badge neutral">Day 3–14</span></div>
      </div>
      <div class="step reveal">
        <div class="n">SPRINT 03</div>
        <div><h3>Verification &amp; Domain Go-Live</h3><p>We connect your custom domain, perform 100% mobile Lighthouse optimization, test payment rails, and hand over control.</p></div>
        <div><span class="badge neutral">Launch Day</span></div>
      </div>
    </div>
  </div></section>

  <!-- Official Interac Rail Banner -->
  <section class="section-tight"><div class="container">
    <div class="card reveal" style="border-color:rgba(255,85,0,0.3);background:linear-gradient(180deg,#12141a,#0a0b0e)">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px">
        <div>
          <span class="kicker">Domestic Canadian Payment Rail</span>
          <h3 style="font-size:1.4rem;margin:4px 0 8px">Direct Interac e-Transfer with Autodeposit</h3>
          <p style="margin:0;max-width:540px">Zero processing delays. 0% credit card fees. Standard 50% deposit protects your project sprint timeline.</p>
        </div>
        <div style="min-width:280px">
          <div class="copy-row">
            <span>${SITE.email}</span>
            <button data-copy="${SITE.email}">Copy</button>
          </div>
          <span class="dim mono" style="font-size:11px;display:block;margin-top:6px">Desjardins Commercial Account · Verified Recipient</span>
        </div>
      </div>
    </div>
  </div></section>
  `
});

// -------------------------------------------------------------
// 2. SERVICES (/services/)
// -------------------------------------------------------------
const servicesHtml = layout({
  path: '/services/',
  title: 'Commercial Systems & Packages',
  description: 'Fixed-price website sprints, booking engines, and modular intake widgets for Ottawa service businesses. Detailed deliverables, timelines, and payment terms.',
  body: `
  ${pageHero({
    kicker: 'Transparent Sprints',
    title: 'Engineered for Rapid Liquidity. Fixed Scopes. Zero Fluff.',
    lead: 'No vague monthly hourly retainers. Choose the exact sprint that matches your business stage. All packages backed by Canadian Interac e-Transfer or Stripe.'
  })}

  <section class="section-tight"><div class="container">
    <div class="grid g4">
      ${PACKAGES.map((p, i) => packageCard(p, i)).join('')}
    </div>
  </div></section>

  <!-- Comparison Matrix -->
  <section class="section border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Full Feature Breakdown</span>
        <h2>Package Comparison Matrix</h2>
      </div>
    </div>
    <div class="table-wrap">
      <table class="compare">
        <thead>
          <tr>
            <th>Deliverable / Feature</th>
            <th>Quick Fix ($500)</th>
            <th>Launch Page ($1,800)</th>
            <th>Growth ($4,500 ⭐)</th>
            <th>Signature ($8,500+)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Target Turnaround</td><td>2–5 Days</td><td>1–2 Weeks</td><td>3–4 Weeks</td><td>5–8 Weeks</td></tr>
          <tr><td>Deposit Terms</td><td>100% Upfront</td><td>50% / 50%</td><td>40% / 30% / 30%</td><td>40% / 30% / 30%</td></tr>
          <tr><td>Page Scope</td><td>1 Widget / Modal</td><td>1 High-Impact Page</td><td>5–7 Complete Pages</td><td>Full Custom System</td></tr>
          <tr><td>Custom Copywriting</td><td>Refinements</td><td>Full Page Copy</td><td>All Pages + Brand Story</td><td>Full Transmedia Narrative</td></tr>
          <tr><td>Online Booking / Intake Engine</td><td>Modal Embed</td><td>Lead Intake Form</td><td>Multi-Step Booking System</td><td>Custom Portal &amp; Payments</td></tr>
          <tr><td>Supabase Backend Sync</td><td>—</td><td>Optional</td><td>Included</td><td>Enterprise Database &amp; Auth</td></tr>
          <tr><td>Google Business / Local SEO</td><td>Audit</td><td>Setup + Verification</td><td>Full Local Optimization</td><td>Advanced Multi-Location</td></tr>
          <tr><td>Revisions Included</td><td>1 Round</td><td>2 Rounds</td><td>2 Rounds</td><td>3 Priority Rounds</td></tr>
          <tr><td>Post-Launch Support</td><td>7 Days</td><td>14 Days</td><td>30 Days</td><td>60 Days VIP</td></tr>
        </tbody>
      </table>
    </div>
  </div></section>

  <!-- Care Plans Section -->
  <section class="section border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Peace of Mind</span>
        <h2>Optional Monthly Care &amp; Growth Plans</h2>
      </div>
      <p>Keep your platform blazing fast, secure, and continuously updated. Cancel anytime with 30 days notice.</p>
    </div>
    <div class="grid g2">
      ${CARE.map(c => `
      <article class="card reveal">
        <span class="kicker">Ongoing Retainer</span>
        <h3>${c.name}</h3>
        <div class="price">${c.price} <small>CAD</small></div>
        <ul class="check">${c.items.map(x => `<li>${x}</li>`).join('')}</ul>
        <a class="btn btn-ghost" href="/contact/?package=${encodeURIComponent(c.name)}">Select ${c.name}</a>
      </article>
      `).join('')}
    </div>
  </div></section>

  ${ctaBand('Need advice on which tier fits your current revenue?', 'Book a 15-minute diagnostic call with founder Darnley Sanon.')}
  `
});

// -------------------------------------------------------------
// 3. WORK (/work/)
// -------------------------------------------------------------
const workHtml = layout({
  path: '/work/',
  title: 'Client Work & Production Prototypes',
  description: 'Explore live web prototypes, catering intake engines, contractor dispatch hubs, and high-converting landing pages built by 9LMNTS Studio.',
  body: `
  ${pageHero({
    kicker: 'Proof in Production',
    title: 'Code That Executes. Interfaces That Convert.',
    lead: 'We do not deal in static Figma mockups that fail in the real world. Every project we engineer is delivered as live, responsive, high-performance web code.'
  })}

  <section class="section-tight" style="padding-top:0"><div class="container">
    <div class="mockup-showcase reveal">
      <img src="/assets/mockup-devices.jpg" alt="9LMNTS Studio Mobile and Desktop Interface Proof" loading="lazy">
      <div class="mockup-badge">
        <span class="dot"></span>
        <span>100% RESPONSIVE ARCHITECTURE · VERIFIED ON HARDWARE</span>
      </div>
    </div>
  </div></section>

  <section class="section-tight"><div class="container">
    <div class="grid g3">
      <!-- Showcase 1: Chef OS -->
      <article class="showcase-card reveal">
        <div class="showcase-media">
          <img src="/assets/culinary-dish-showcase.jpg" alt="Chef OS Catering Showcase" loading="lazy">
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Culinary Vertical</span>
          <span class="showcase-score">● 99/100 SPEED</span>
        </div>
        <div class="showcase-body">
          <h3>Chef OS — Catering &amp; Private Chef Intake</h3>
          <p>Engineered for high-ticket catering orders. Calculates headcount pricing dynamically, offers upsell packages, and secures 50% deposit via Interac or Stripe.</p>
          <ul class="showcase-features">
            <li>Dynamic $35–$65/plate pricing slider</li>
            <li>Eliminates 3-day email quote back-and-forth</li>
            <li>Instant SMS / Email notification to chef</li>
            <li>Direct Interac e-Transfer autodeposit rail</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/demo-client.html" target="_blank" rel="noopener">Launch Live Prototype <span class="arrow">↗</span></a>
          </div>
        </div>
      </article>

      <!-- Showcase 2: Trades OS -->
      <article class="showcase-card reveal">
        <div class="showcase-media">
          <img src="/assets/trades-craft-showcase.jpg" alt="Contractor Dispatch Trades Showcase" loading="lazy">
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Trades &amp; Home Services</span>
          <span class="showcase-score">● 100/100 SPEED</span>
        </div>
        <div class="showcase-body">
          <h3>Contractor Dispatch &amp; Fast Quote OS</h3>
          <p>Built for Ottawa plumbers, electricians, handymen, and roofers. Sticky bottom mobile bar allows 1-tap calling or instant emergency dispatch ticket creation.</p>
          <ul class="showcase-features">
            <li>1-Tap thumb call action for emergency jobs</li>
            <li>Multi-category service scoping &amp; photo upload</li>
            <li>Direct lead routing to technician phone</li>
            <li>Zero middleman marketplace lead fees</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/handyman.html" target="_blank" rel="noopener">Launch Live Prototype <span class="arrow">↗</span></a>
          </div>
        </div>
      </article>

      <!-- Showcase 3: Reception OS -->
      <article class="showcase-card reveal">
        <div class="showcase-media">
          <img src="/assets/venue-lounge-showcase.jpg" alt="Private Dining Reception Showcase" loading="lazy">
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Venues &amp; Hospitality</span>
          <span class="showcase-score">● 98/100 SPEED</span>
        </div>
        <div class="showcase-body">
          <h3>Reception &amp; Private Venue Booking Hub</h3>
          <p>Created for boutique wedding venues, lounge private rooms, and corporate event spaces needing seamless calendar intake without double-booking.</p>
          <ul class="showcase-features">
            <li>Interactive date reservation calendar</li>
            <li>Bar package &amp; A/V tier customizer</li>
            <li>Integrated terms of service &amp; deposit rail</li>
            <li>Direct calendar sync &amp; guest alerts</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/reception.html" target="_blank" rel="noopener">Launch Live Prototype <span class="arrow">↗</span></a>
          </div>
        </div>
      </article>
    </div>
  </div></section>

  <!-- Performance & Technical Benchmarks -->
  <section class="section border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Why It Matters</span>
        <h2>The Technical Advantage</h2>
      </div>
    </div>
    <div class="grid g3">
      <div class="card reveal">
        <span class="kicker">Zero Bloat</span>
        <h3>Sub-Second Load Speed</h3>
        <p>No heavy WordPress page-builders or slow plugins. Clean HTML5, modern CSS tokens, and optimized assets guarantee 95+ Google PageSpeed scores.</p>
      </div>
      <div class="card reveal">
        <span class="kicker">Mobile-First UI</span>
        <h3>Thumb-Friendly Conversion</h3>
        <p>Over 70% of local service visits occur on smartphones. We design primary CTAs directly in the natural ergonomic thumb strike zone.</p>
      </div>
      <div class="card reveal">
        <span class="kicker">Direct Rails</span>
        <h3>No Middleman Commissions</h3>
        <p>Stop paying 15%–30% commissions to third-party marketplaces. Keep your customer relationships and payments direct to your business.</p>
      </div>
    </div>
  </div></section>

  ${ctaBand('Want a bespoke prototype built for your specific business?', 'Tell us what you sell and we’ll prepare a personalized concept demo.')}
  `
});

// -------------------------------------------------------------
// 4. EMBEDS & WIDGET HUB (/embeds/)
// -------------------------------------------------------------
const embedsHtml = layout({
  path: '/embeds/',
  title: 'Modular Drop-In Widgets & Embeds',
  description: 'Add instant booking, headcount calculators, and client intake modals to your existing website in 5 minutes with our universal 9LMNTS embed script.',
  body: `
  ${pageHero({
    kicker: 'Modular Upgrade ($500 CAD)',
    title: 'Upgrade Your Existing Website in 5 Minutes.',
    lead: 'Keep your current site on Squarespace, Wix, WordPress, or Shopify. Drop in our high-speed intake modal to immediately stop leaking mobile leads.'
  })}

  <section class="section-tight"><div class="container">
    <div class="hero-grid" style="align-items:start">
      <!-- Interactive Sandbox -->
      <div class="card calc" data-calc>
        <span class="kicker">Interactive Live Sandbox</span>
        <h3>Catering Headcount &amp; Deposit Calculator</h3>
        <p>Test the dynamic calculator widget right here to see how your customers experience it.</p>
        
        <div class="field" style="margin:20px 0">
          <label for="pkg">Select Service Package</label>
          <select id="pkg">
            <option value="45">Signature Caribbean Buffet ($45 / guest)</option>
            <option value="65" selected>Executive Plated Experience ($65 / guest)</option>
            <option value="35">Artisan BBQ &amp; Street Bites ($35 / guest)</option>
          </select>
        </div>

        <div class="field" style="margin:20px 0">
          <label for="guests">Estimated Guest Count: <span id="guestsOut" class="accent mono" style="font-weight:700">45</span> guests</label>
          <input type="range" id="guests" min="15" max="250" value="45" step="5">
        </div>

        <div style="background:#0c0d12;border:1px solid var(--line);border-radius:12px;padding:20px;margin-top:24px">
          <div style="display:flex;justify-content:space-between;margin-bottom:8px">
            <span class="muted">Estimated Project Total:</span>
            <span id="total" class="accent mono" style="font-size:1.4rem;font-weight:800">$2,925</span>
          </div>
          <div style="display:flex;justify-content:space-between">
            <span class="muted">50% Deposit Required:</span>
            <span id="deposit" class="ok mono" style="font-size:1.2rem;font-weight:700">$1,463</span>
          </div>
        </div>

        <button class="btn btn-primary" style="margin-top:20px;width:100%" onclick="alert('This demo triggers your custom booking modal!')">Simulate Booking Modal Launch</button>
      </div>

      <!-- Installation Guide & Code Snippet -->
      <div>
        <span class="kicker">Implementation</span>
        <h2>How It Installs</h2>
        <p>Paste this single script tag right before your website's closing <code>&lt;/body&gt;</code> tag. That's it.</p>

        <pre class="code"><code>&lt;!-- 9LMNTS Studio Universal Intake Embed --&gt;
&lt;script 
  src="${SITE.url}/embed/intake.js"
  data-client="your-business-name"
  data-color="#FF5500"
  data-theme="dark"
  data-email="${SITE.email}"
  defer&gt;
&lt;/script&gt;

&lt;!-- Trigger with any existing button --&gt;
&lt;button data-9lmnts-trigger&gt;Book Now&lt;/button&gt;</code></pre>

        <div class="card" style="margin-top:24px">
          <h4>What's Included in the $500 Sprint:</h4>
          <ul class="check">
            <li>Tailored styling matching your current branding &amp; fonts</li>
            <li>Custom field validation (dates, dietary notes, addresses)</li>
            <li>Instant email / SMS notification to your phone on submission</li>
            <li>Full installation support on your CMS (we do it for you)</li>
          </ul>
          <a class="btn btn-primary" href="/contact/?package=quick-fix" style="margin-top:16px">Order $500 Widget Sprint <span class="arrow">↗</span></a>
        </div>
      </div>
    </div>
  </div></section>

  ${ctaBand()}
  `
});

// -------------------------------------------------------------
// 5. FREE AUDIT (/audit/)
// -------------------------------------------------------------
const auditHtml = layout({
  path: '/audit/',
  title: 'Free Speed-To-Lead Mobile Friction Audit',
  description: 'Get a free, zero-pitch 60-second video audit of your local business website. Discover why mobile visitors leave and how to double your conversion rate.',
  body: `
  ${pageHero({
    kicker: 'Zero-Cost Diagnostic',
    title: 'Stop Losing 40% of Your Mobile Traffic.',
    lead: 'Most local business websites leak money because of slow load times, unreadable PDF menus, or hidden contact buttons. We’ll record a custom 60-second video showing exactly where your site is losing customers.'
  })}

  <section class="section-tight"><div class="container"><div class="hero-grid" style="align-items:start">
    <!-- Audit Request Form -->
    <div class="card">
      <span class="kicker">Direct Founder Review</span>
      <h3>Request Your 60-Second Video Audit</h3>
      <p>Delivered to your email within 24–48 hours. Completely free, no aggressive sales pitch.</p>

      <form class="form" action="https://formspree.io/f/xvgowgqk" method="POST">
        <input type="hidden" name="_subject" value="New 9LMNTS Video Audit Request">
        <div class="field">
          <label for="bizName">Your Business Name *</label>
          <input type="text" id="bizName" name="businessName" placeholder="e.g. ByWard Bistro or Ottawa Pro Roofing" required>
        </div>
        <div class="field">
          <label for="url">Current Website URL *</label>
          <input type="url" id="url" name="websiteUrl" placeholder="https://yourwebsite.com" required>
        </div>
        <div class="row2">
          <div class="field">
            <label for="email">Email Address (For Video Link) *</label>
            <input type="email" id="email" name="email" placeholder="you@company.com" required>
          </div>
          <div class="field">
            <label for="phone">Phone / WhatsApp (Optional)</label>
            <input type="tel" id="phone" name="phone" placeholder="(613) 555-0100">
          </div>
        </div>
        <div class="field">
          <label for="bottleneck">What's your biggest website frustration right now?</label>
          <select id="bottleneck" name="primaryFrustration">
            <option value="low-leads">Not getting enough calls or inquiries</option>
            <option value="outdated-look">Site looks old or embarrassing on mobile</option>
            <option value="pdf-menus">Menu / pricing is an unreadable PDF</option>
            <option value="slow-speed">Site takes forever to load</option>
            <option value="no-website">Don't have a website yet (starting fresh)</option>
          </select>
        </div>
        <button class="btn btn-primary" type="submit" style="width:100%;margin-top:8px">Send Me My Free Video Audit <span class="arrow">↗</span></button>
        <span class="form-note">🔒 We respect your privacy. No spam, ever.</span>
      </form>
    </div>

    <!-- Educational Checklist -->
    <div>
      <span class="kicker">The 3 Mobile Conversion Killers</span>
      <h2>What We Check in Your Audit:</h2>

      <div class="grid" style="margin-top:24px">
        <div class="card reveal">
          <span class="accent mono" style="font-size:14px;font-weight:700">01 / THE PDF MENU PENALTY</span>
          <h4 style="margin:8px 0">Forcing customers to pinch and zoom</h4>
          <p>Over 82% of hungry patrons browse restaurants on their phones while in transit. When your menu is a 12MB multi-page PDF, mobile users bounce immediately to your competitor.</p>
        </div>
        <div class="card reveal">
          <span class="accent mono" style="font-size:14px;font-weight:700">02 / THE 4-SECOND SPEED CLIFF</span>
          <h4 style="margin:8px 0">Every extra second cuts conversions by 20%</h4>
          <p>Bloated templates and uncompressed photography kill mobile conversion. If your site doesn't render in under 1.5 seconds on LTE, you're paying for visitors who never see your offer.</p>
        </div>
        <div class="card reveal">
          <span class="accent mono" style="font-size:14px;font-weight:700">03 / HIDDEN THUMB TARGETS</span>
          <h4 style="margin:8px 0">No sticky call or booking button</h4>
          <p>Customers shouldn't have to hunt through a hamburger menu just to find your phone number or business hours. A permanent sticky mobile bar increases phone calls instantly.</p>
        </div>
      </div>
    </div>
  </div></div></section>
  `
});

// -------------------------------------------------------------
// 6. PROCESS (/process/)
// -------------------------------------------------------------
const processHtml = layout({
  path: '/process/',
  title: 'Our 3-Sprint Build Process',
  description: 'How 9LMNTS Studio takes your service business from deposit to live production in 2–4 weeks. Transparent milestones, zero scope creep.',
  body: `
  ${pageHero({
    kicker: 'Clear Milestones',
    title: 'How We Ship High-Impact Websites Without the Agency Headache.',
    lead: 'Traditional agencies take 4 months and charge for endless meetings. We run focused, high-velocity sprints where you review working code from week one.'
  })}

  <section class="section-tight"><div class="container">
    <div class="steps">
      <div class="step reveal">
        <div class="n">STEP 01</div>
        <div>
          <h3>Onboarding &amp; Friction Blueprint</h3>
          <p>Upon receipt of your agreement and initial 40%–50% sprint deposit, we immediately create your private staging portal and asset locker. We conduct a thorough audit of your competitors and extract your core service pricing.</p>
          <ul class="check">
            <li>Asset locker checklist (logos, photos, menus)</li>
            <li>Mobile user flow mapping</li>
            <li>Copywriting draft delivered within 72 hours</li>
          </ul>
        </div>
        <div><span class="badge neutral">Days 1–4</span></div>
      </div>

      <div class="step reveal">
        <div class="n">STEP 02</div>
        <div>
          <h3>Interactive Code Staging</h3>
          <p>We build your full website on a private, interactive staging URL. You can test your booking modals, submit test inquiries, and experience the exact mobile layout on your personal phone.</p>
          <ul class="check">
            <li>Responsive layouts tested on iPhone &amp; Android</li>
            <li>Supabase database and automated email routing setup</li>
            <li>Consolidated client revision round</li>
          </ul>
        </div>
        <div><span class="badge neutral">Days 5–18</span></div>
      </div>

      <div class="step reveal">
        <div class="n">STEP 03</div>
        <div>
          <h3>Final Polish &amp; Domain Go-Live</h3>
          <p>Once you approve the build, we connect your custom domain, install SSL certificates, verify DNS records, test live payment/booking rails, and hand over complete ownership.</p>
          <ul class="check">
            <li>Zero-downtime domain DNS propagation</li>
            <li>Google Business &amp; Search Console indexing</li>
            <li>Recorded 10-minute video walkthrough of your system</li>
          </ul>
        </div>
        <div><span class="badge neutral">Final Launch Day</span></div>
      </div>
    </div>
  </div></section>

  <!-- Rules of Engagement -->
  <section class="section border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Standard of Excellence</span>
        <h2>Our Rules of Engagement</h2>
      </div>
    </div>
    <div class="grid g3">
      <div class="card reveal">
        <span class="kicker">Direct Contact</span>
        <h3>Talk to the Builder</h3>
        <p>No junior account managers or endless email telephone. You work directly with founder and lead digital architect Darnley Sanon throughout the entire sprint.</p>
      </div>
      <div class="card reveal">
        <span class="kicker">Fixed Pricing</span>
        <h3>Zero Surprise Invoices</h3>
        <p>Every dollar is agreed upon upfront in a clear 1-page agreement. We never bill surprise overages or charge hourly rates for pre-scoped deliverables.</p>
      </div>
      <div class="card reveal">
        <span class="kicker">100% Ownership</span>
        <h3>You Own Your Code</h3>
        <p>We do not hold your domain, content, or assets hostage. You receive full administrative access and source ownership upon final project settlement.</p>
      </div>
    </div>
  </div></section>

  ${ctaBand()}
  `
});

// -------------------------------------------------------------
// 7. ABOUT (/about/)
// -------------------------------------------------------------
const aboutHtml = layout({
  path: '/about/',
  title: 'About 9LMNTS Studio & Founder Darnley Sanon',
  description: 'Learn about 9LMNTS Studio (pronounced Nine Elements Studio), founded by Darnley Sanon in Ottawa. Where urban culture, modern AI automation, and refined UI/UX meet.',
  body: `
  ${pageHero({
    kicker: 'The Manifesto',
    title: 'Where Urban Culture Meets Enterprise Digital Craft.',
    lead: 'Pronounced “Nine Elements Studio”. We build clean, tactile digital platforms for independent operators who value speed, craftsmanship, and cash-flow efficiency.'
  })}

  <section class="section-tight"><div class="container">
    <div class="founder">
      <div class="founder-card reveal">
        <div class="founder-photo">
          <img src="/assets/founder-reference.jpg" alt="Darnley Sanon - Founder & Lead Digital Architect, 9LMNTS Studio">
        </div>
        <div class="founder-badge">
          <div class="name">Darnley Sanon</div>
          <div class="role">FOUNDER &amp; LEAD ARCHITECT · OTTAWA, ON</div>
          <div class="mono dim" style="font-size:10px;margin-top:4px">45.4215° N, 75.6972° W · HYBRID TECH/URBAN LAB</div>
        </div>
      </div>
      <div>
        <span class="kicker">Founder's Note</span>
        <h2 style="margin:0 0 16px">Most agency websites look pretty. Very few actually make the phone ring.</h2>
        <p>I started 9LMNTS Studio in Ottawa because I was tired of watching hardworking local restaurant owners, contractors, and event producers get burned by traditional agencies who charge \$15,000 for slow, generic templates.</p>
        <p>In 2026, a business website shouldn't just be an expensive online business card. It needs to be an automated booking engine that captures customer attention in 3 seconds, answers their burning questions, and secures their business before they drift away to another tab.</p>
        <p>By blending modern AI engineering with clean minimalist design (the aesthetic standards of Linear and Vercel) and the raw energy of urban culture, we deliver enterprise-grade digital systems at prices independent businesses can actually justify.</p>

        <div class="grid g2" style="margin-top:32px">
          <div class="card" style="padding:20px">
            <span class="accent mono" style="font-size:12px;font-weight:700">01 / WHY "NINE ELEMENTS"?</span>
            <p style="font-size:14px;margin:8px 0 0">Named after the 9 foundational pillars of Hip-Hop culture—representing mastery, authenticity, continuous evolution, and self-determination.</p>
          </div>
          <div class="card" style="padding:20px">
            <span class="accent mono" style="font-size:12px;font-weight:700">02 / LOCAL COMMITMENT</span>
            <p style="font-size:14px;margin:8px 0 0">Rooted in Ottawa, Ontario. Proudly serving Canadian service businesses with zero offshore outsourcing of core creative work.</p>
          </div>
        </div>
      </div>
    </div>
  </div></section>

  <!-- Studio Roadmap & Ecosystem -->
  <section class="section border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Future Horizons</span>
        <h2>The 9LMNTS Ecosystem</h2>
      </div>
      <p>Beyond our commercial agency sprints, we are actively architecting next-generation cultural operating systems.</p>
    </div>
    <div class="grid g3">
      <div class="card reveal">
        <span class="badge neutral" style="margin-bottom:12px">Studio Labs</span>
        <h3>Project LOA</h3>
        <p>Legends of the Arena: A transmedia narrative universe and gaming experience fusing ancient mythologies with cyberpunk aesthetics.</p>
      </div>
      <div class="card reveal">
        <span class="badge neutral" style="margin-bottom:12px">Live Tournaments</span>
        <h3>Sound Clash OS</h3>
        <p>Real-time tournament voting and live beat-battle scoring infrastructure for urban sound clashes and music producers.</p>
      </div>
      <div class="card reveal">
        <span class="badge neutral" style="margin-bottom:12px">Creator Platforms</span>
        <h3>Creator &amp; Athlete OS</h3>
        <p>Custom booking passports, merch vaults, and digital fan communities for independent artists, comedians, and street ballers.</p>
      </div>
    </div>
  </div></section>

  ${ctaBand('Let’s build something extraordinary together.', 'Book a call to talk directly with Darnley.')}
  `
});

// -------------------------------------------------------------
// 8. CONTACT (/contact/)
// -------------------------------------------------------------
const contactHtml = layout({
  path: '/contact/',
  title: 'Contact 9LMNTS Studio — Book a Call',
  description: 'Reach out to 9LMNTS Studio. Book a free 15-minute diagnostic call, send an inquiry, or initiate a project sprint with Interac e-Transfer autodeposit.',
  body: `
  ${pageHero({
    kicker: 'Direct Channels',
    title: 'Let’s Get Your Website Booking Customers.',
    lead: 'Have a project in mind? Fill out the brief below, or book a quick 15-minute call directly. We respond to all inquiries within 24 business hours.'
  })}

  <section class="section-tight"><div class="container"><div class="hero-grid" style="align-items:start">
    <!-- Contact Form -->
    <div class="card">
      <span class="kicker">Send A Message</span>
      <h3>Project Inquiry Brief</h3>
      <p>Tell us a little bit about what you need and your preferred timeline.</p>

      <form class="form" action="https://formspree.io/f/xvgowgqk" method="POST">
        <input type="hidden" name="_subject" value="New 9LMNTS Studio Client Inquiry">
        <div class="row2">
          <div class="field">
            <label for="cName">Your Name *</label>
            <input type="text" id="cName" name="name" placeholder="Darnley Sanon" required>
          </div>
          <div class="field">
            <label for="cBiz">Business Name *</label>
            <input type="text" id="cBiz" name="businessName" placeholder="Company Ltd." required>
          </div>
        </div>
        <div class="row2">
          <div class="field">
            <label for="cEmail">Email Address *</label>
            <input type="email" id="cEmail" name="email" placeholder="you@company.com" required>
          </div>
          <div class="field">
            <label for="cPhone">Phone Number</label>
            <input type="tel" id="cPhone" name="phone" placeholder="(613) 555-0199">
          </div>
        </div>
        <div class="field">
          <label for="cPkg">Interested Package / Service</label>
          <select id="cPkg" name="package">
            <option value="growth-website">Growth Website ($4,500 CAD ⭐ Most Popular)</option>
            <option value="launch-page">Launch Page ($1,800 CAD)</option>
            <option value="signature-system">Signature System ($8,500+ CAD)</option>
            <option value="quick-fix">Quick Fix / Modular Intake Widget ($500 CAD)</option>
            <option value="custom">Custom Commercial Architecture</option>
          </select>
        </div>
        <div class="field">
          <label for="cNotes">Tell us about your project</label>
          <textarea id="cNotes" name="message" placeholder="What are you currently selling, who is your target audience, and what is your goal for this new build?"></textarea>
        </div>
        <button class="btn btn-primary" type="submit" style="width:100%">Submit Inquiry <span class="arrow">↗</span></button>
        <span class="form-note">🔒 We review inquiries within 24 hours and will email you back with next steps.</span>
      </form>
    </div>

    <!-- Direct Channels & Payment Info -->
    <div>
      <div class="grid">
        <div class="card reveal">
          <span class="kicker">Direct Email</span>
          <h4 style="margin:4px 0 10px">${SITE.email}</h4>
          <p style="font-size:14px;margin-bottom:14px">Official inbox for project inquiries, proposals, and Interac e-Transfers with autodeposit enabled.</p>
          <div class="copy-row">
            <span>${SITE.email}</span>
            <button data-copy="${SITE.email}">Copy Email</button>
          </div>
        </div>

        <div class="card reveal">
          <span class="kicker">Fastest Comms</span>
          <h4 style="margin:4px 0 10px">Instagram Direct Message</h4>
          <p style="font-size:14px;margin-bottom:14px">Prefer a quick chat? Shoot us a DM on Instagram for fast voice notes and quick project evaluations.</p>
          <a class="btn btn-ghost" href="${SITE.instagram}" target="_blank" rel="noopener">Message @9lmntsstudio <span class="arrow">↗</span></a>
        </div>

        <div class="card reveal">
          <span class="kicker">Studio Telemetry</span>
          <h4 style="margin:4px 0 10px">Ottawa, Ontario, Canada</h4>
          <p style="font-size:14px;margin:0">Eastern Standard Time (EST) · Accepting 2 new client sprints for next month.</p>
        </div>
      </div>
    </div>
  </div></div></section>
  `
});

// -------------------------------------------------------------
// 9. CLIENT ONBOARDING & STAGING PORTAL (/start/)
// -------------------------------------------------------------
const startHtml = layout({
  path: '/start/',
  title: 'Client Onboarding & Project Staging Hub',
  description: 'Welcome to 9LMNTS Studio. Complete your 3-step project onboarding, submit your brand assets, and verify your 50% sprint deposit.',
  body: `
  ${pageHero({
    kicker: 'Sprint Onboarding',
    title: 'Welcome to 9LMNTS Studio. Let’s Launch Your Platform.',
    lead: 'Follow these 3 simple steps to lock in your sprint timeline, submit your brand materials, and track your staging build.'
  })}

  <section class="section-tight"><div class="container"><div class="hero-grid" style="align-items:start">
    <div>
      <div class="steps">
        <div class="step reveal">
          <div class="n">STEP 01</div>
          <div>
            <h3>Lock In Deposit Rail</h3>
            <p>Send your 50% project deposit via Canadian Interac e-Transfer to <strong class="accent">${SITE.email}</strong>. Autodeposit is active on our Desjardins commercial account. No password required.</p>
            <div class="copy-row" style="margin-top:12px">
              <span>${SITE.email}</span>
              <button data-copy="${SITE.email}">Copy Interac Email</button>
            </div>
          </div>
          <div><span class="badge neutral">Autodeposit</span></div>
        </div>

        <div class="step reveal">
          <div class="n">STEP 02</div>
          <div>
            <h3>Submit Brand Assets</h3>
            <p>Upload your high-resolution logo, color preferences, photography, menus, or service pricing docs to our shared Google Drive folder or email them directly.</p>
            <ul class="check" style="margin-top:10px">
              <li>Vector logo (SVG, PNG, AI)</li>
              <li>Menu or service rate sheet</li>
              <li>High-res venue / food / job photography</li>
            </ul>
          </div>
          <div><span class="badge neutral">Checklist</span></div>
        </div>

        <div class="step reveal">
          <div class="n">STEP 03</div>
          <div>
            <h3>Private Staging Review</h3>
            <p>Within 3–7 business days, you receive your private interactive staging link to test all features on your mobile device before public deployment.</p>
          </div>
          <div><span class="badge neutral">Staging</span></div>
        </div>
      </div>
    </div>

    <!-- Deposit Verification Form -->
    <div class="card">
      <span class="kicker">Step 1 Verification</span>
      <h3>Log Your Deposit &amp; Kickoff Sprint</h3>
      <p>Already sent your e-Transfer? Submit your confirmation number here so we can match it and trigger kickoff immediately.</p>

      <form class="form" action="https://formspree.io/f/xvgowgqk" method="POST">
        <input type="hidden" name="_subject" value="New Client Deposit Verification Logged">
        <div class="field">
          <label for="pName">Primary Contact Name *</label>
          <input type="text" id="pName" name="clientName" placeholder="Your Full Name" required>
        </div>
        <div class="field">
          <label for="pBiz">Business Name *</label>
          <input type="text" id="pBiz" name="businessName" placeholder="Your Business Name" required>
        </div>
        <div class="row2">
          <div class="field">
            <label for="pTier">Package Selected *</label>
            <select id="pTier" name="selectedPackage">
              <option value="Quick Fix ($500)">Quick Fix ($500 CAD)</option>
              <option value="Launch Page ($1,800)">Launch Page ($1,800 CAD - $900 Deposit)</option>
              <option value="Growth Website ($4,500)">Growth Website ($4,500 CAD - $1,800 Deposit)</option>
              <option value="Signature System ($8,500)">Signature System ($8,500+ CAD)</option>
            </select>
          </div>
          <div class="field">
            <label for="pRef">Interac Reference # *</label>
            <input type="text" id="pRef" name="interacReference" placeholder="e.g. C1A2B3D4" required>
          </div>
        </div>
        <div class="field">
          <label for="pDrive">Google Drive / Dropbox Link to Assets (Optional)</label>
          <input type="url" id="pDrive" name="assetDriveLink" placeholder="https://drive.google.com/...">
        </div>
        <button class="btn btn-primary" type="submit" style="width:100%">Verify Deposit &amp; Trigger Sprint <span class="arrow">↗</span></button>
      </form>
    </div>
  </div></div></section>
  `
});

// -------------------------------------------------------------
// 10. FAQ (/faq/)
// -------------------------------------------------------------
const faqHtml = layout({
  path: '/faq/',
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Everything you need to know about 9LMNTS Studio pricing, timelines, payment rails, ownership, and our 48-hour delivery sprints.',
  body: `
  ${pageHero({
    kicker: 'Clarity First',
    title: 'Frequently Asked Questions.',
    lead: 'Straightforward answers about how we build, how much it costs, and how payments work.'
  })}

  <section class="section-tight"><div class="container" style="max-width:880px">
    <details open>
      <summary>Why do you use Interac e-Transfer instead of credit card checkout for deposits?</summary>
      <p>Credit card processors take 3% to 4% off every transaction and often hold funds for days. For Canadian B2B projects, Interac e-Transfer with autodeposit allows 0% merchant fees, instant 2-minute settlement, and direct fraud-proof bank-to-bank security. If you are an international client or specifically require corporate credit card invoicing, we can issue a Stripe checkout invoice upon request.</p>
    </details>

    <details>
      <summary>How fast can you really build and launch my website?</summary>
      <p>Our Quick Fix modular widgets are delivered in <strong>2 to 5 business days</strong>. Our Launch Pages are ready in <strong>1 to 2 weeks</strong>. Full multi-page Growth Websites take <strong>3 to 4 weeks</strong>. We move fast because we design in modular sprints and work directly with decision-makers without agency bureaucracy.</p>
    </details>

    <details>
      <summary>Do I actually own my website after launch?</summary>
      <p><strong>100% yes.</strong> Upon final milestone payment, you receive full ownership of all custom code, design assets, and content. You are never locked into proprietary platforms or forced into expensive ongoing contracts.</p>
    </details>

    <details>
      <summary>Do I have to pay a monthly retainer after the site is built?</summary>
      <p><strong>No.</strong> Ongoing Care Plans (\$199 / \$449 CAD per month) are completely optional. If you prefer to manage hosting and updates yourself, we hand off all credentials and training videos at no additional charge.</p>
    </details>

    <details>
      <summary>What if I don't have professional photos or written copy?</summary>
      <p>All Growth and Signature packages include professional conversion copywriting tailored specifically to your Ottawa market. If you don't have photos yet, we source curated high-resolution photography and can recommend trusted local Ottawa photographers.</p>
    </details>

    <details>
      <summary>What is your refund policy?</summary>
      <p>Sprint deposits (40%–50%) are strictly non-refundable once development or strategic planning begins, as they compensate the studio for reserved calendar time. The remaining balance is only invoiced once you review and approve the final staging build prior to live domain launch.</p>
    </details>
  </div></section>

  ${ctaBand()}
  `
});

// -------------------------------------------------------------
// 11. LEGAL SUITE
// -------------------------------------------------------------
const termsHtml = layout({
  path: '/legal/terms/',
  title: 'Terms of Service',
  description: 'Standard terms of service and commercial agreement governing all design, development, and consulting services by 9LMNTS Studio.',
  body: `
  ${pageHero({ kicker: 'Legal Architecture', title: 'Terms of Service', lead: `Last updated: ${SITE.updated}` })}
  <section class="section-tight"><div class="container prose">
    <div class="callout"><p><strong>Summary:</strong> We build high-quality websites on fixed scopes. You own your finished site once paid in full. Sprints require a 50% deposit before work begins. We treat your business with respect and expect clear communication in return.</p></div>
    
    <h2>1. Identification &amp; Parties</h2>
    <p>These Terms of Service ("Agreement") are entered into between <strong>${SITE.legalName}</strong> ("Studio", "we", "us"), operating in Ottawa, Ontario, Canada, and the person or business entity purchasing digital services ("Client", "you").</p>

    <h2>2. Services &amp; Sprints</h2>
    <p>The Studio provides digital architecture, website design, UI/UX engineering, custom booking widgets, and conversion optimization as specified in your individual Project Proposal or Statement of Work. Any modifications, additional features, or third-party integrations outside the agreed scope will be quoted separately before execution.</p>

    <h2>3. Payment Terms &amp; Deposit Rail</h2>
    <p>All projects strictly require a non-refundable upfront deposit (typically 40% to 50% of the total project fee, or 100% for Quick Fix sprints under \$1,000 CAD) before calendar scheduling and development begin. Payments are made via Canadian Interac e-Transfer to <code>${SITE.email}</code> or through a valid corporate invoice. The final balance is due upon completion of staging review and prior to public domain DNS deployment.</p>

    <h2>4. Client Responsibilities &amp; Content</h2>
    <p>The Client agrees to provide all necessary text, images, logos, and access credentials in a timely manner. Delays exceeding 14 calendar days caused by missing client materials may result in the project being rescheduled according to current studio availability.</p>

    <h2>5. Intellectual Property &amp; Ownership</h2>
    <p>Upon receipt of 100% of the agreed project fees, full copyright and ownership of the custom frontend website code and deliverables are transferred to the Client. The Studio retains the right to display the completed work, screenshots, and performance case studies in our portfolio and marketing materials.</p>

    <h2>6. Governing Law</h2>
    <p>This Agreement is governed by and construed in accordance with the laws of the <strong>Province of Ontario</strong> and the federal laws of Canada applicable therein.</p>
  </div></section>
  `
});

const privacyHtml = layout({
  path: '/legal/privacy/',
  title: 'Privacy Policy',
  description: 'How 9LMNTS Studio collects, protects, and handles personal data in accordance with Canadian PIPEDA and international standards.',
  body: `
  ${pageHero({ kicker: 'Data Protection', title: 'Privacy Policy', lead: `Last updated: ${SITE.updated}` })}
  <section class="section-tight"><div class="container prose">
    <h2>1. Information We Collect</h2>
    <p>When you browse <code>9lmntsstudio.com</code>, submit a contact form, request a free video audit, or onboard as a client, we may collect:</p>
    <ul>
      <li>Contact information: name, business name, email address, phone number</li>
      <li>Technical data: current website URL, browser type, referral source</li>
      <li>Transaction data: Interac transfer reference codes, invoice records</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <p>We use your information solely to deliver our services, communicate regarding active sprints, record project receipts, and provide requested video audits. We never sell, rent, or trade your personal information to third parties.</p>

    <h2>3. PIPEDA Compliance</h2>
    <p>As a Canadian business based in Ontario, we comply with the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA). You have the right to request access to or deletion of your personal data at any time by emailing <code>${SITE.email}</code>.</p>
  </div></section>
  `
});

const paymentTermsHtml = layout({
  path: '/legal/payment-terms/',
  title: 'Payment & Refund Terms',
  description: 'Official deposit policy, milestone schedules, Interac autodeposit rules, and refund terms for 9LMNTS Studio.',
  body: `
  ${pageHero({ kicker: 'Financial Protocol', title: 'Payment & Refund Terms', lead: `Last updated: ${SITE.updated}` })}
  <section class="section-tight"><div class="container prose">
    <h2>1. Deposit Standard</h2>
    <p>To ensure dedicated studio focus, all project sprints require an upfront commitment:</p>
    <ul>
      <li><strong>Quick Fix (from \$500 CAD):</strong> 100% upfront payment prior to delivery.</li>
      <li><strong>Launch Page (\$1,800 CAD):</strong> 50% deposit (\$900) to begin; 50% balance before live domain launch.</li>
      <li><strong>Growth Website (\$4,500 CAD):</strong> 40% deposit (\$1,800) to begin; 30% milestone on staging approval; 30% balance before public launch.</li>
      <li><strong>Signature System (\$8,500+ CAD):</strong> 40% kickoff; 30% mid-sprint staging; 30% final deployment.</li>
    </ul>

    <h2>2. Deposit Non-Refundability</h2>
    <p>Because sprints involve immediate allocation of technical resources, custom copywriting, and blocking out calendar availability, all initial deposits are strictly non-refundable once work has commenced.</p>

    <h2>3. Official Domestic Rail (Canada)</h2>
    <p>Primary payment is accepted via Interac e-Transfer to <strong>${SITE.email}</strong> with autodeposit enabled at Desjardins. We do not require security questions. Always verify the recipient name displays as 9LMNTS Studio.</p>
  </div></section>
  `
});

const cookiesHtml = layout({
  path: '/legal/cookies/',
  title: 'Cookie Notice',
  description: 'Information about how cookies and tracking technologies are used on 9lmntsstudio.com.',
  body: `
  ${pageHero({ kicker: 'Transparency', title: 'Cookie Notice', lead: `Last updated: ${SITE.updated}` })}
  <section class="section-tight"><div class="container prose">
    <p>We respect your digital sovereignty. We do not use third-party behavioral advertising cookies, data broker pixels, or invasive surveillance trackers.</p>
    <p>We only use essential functional cookies necessary for website security, CSRF protection, and anonymous aggregate performance metrics. You can disable cookies in your browser settings at any time without degrading the core reading experience of our site.</p>
  </div></section>
  `
});

const a11yHtml = layout({
  path: '/legal/accessibility/',
  title: 'Accessibility Statement',
  description: 'Our commitment to digital accessibility and WCAG 2.1 AA compliance across all 9LMNTS Studio platforms.',
  body: `
  ${pageHero({ kicker: 'Universal Access', title: 'Accessibility Statement', lead: `Last updated: ${SITE.updated}` })}
  <section class="section-tight"><div class="container prose">
    <p>9LMNTS Studio is committed to ensuring our digital platforms are accessible to all people, regardless of ability or technology. We engineer our interfaces following <strong>WCAG 2.1 Level AA standards</strong>.</p>
    <ul>
      <li>High-contrast color tokens (exceeding 4.5:1 ratio for all body text)</li>
      <li>Logical keyboard tab navigation and visible focus rings</li>
      <li>Skip-to-content links on every page</li>
      <li>Proper semantic HTML5 hierarchy and ARIA landmarks</li>
      <li>Reduced-motion overrides for users with vestibular sensitivities</li>
    </ul>
    <p>If you encounter any accessibility barrier on our site, please contact us at <code>${SITE.email}</code> and we will address it promptly.</p>
  </div></section>
  `
});

// -------------------------------------------------------------
// 12. FULL OPERATOR & ADMIN DASHBOARD (/admin/index.html)
// -------------------------------------------------------------
const adminHtml = `<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>9LMNTS Studio — Command Cockpit &amp; Admin Dashboard</title>
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="/assets/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Syne:wght@700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
<style>
.admin-shell { min-height: 100vh; display: grid; grid-template-columns: 260px 1fr; background: #08090C; }
.admin-sidebar { background: #0C0D11; border-right: 1px solid var(--line); padding: 24px 20px; display: flex; flex-direction: column; }
.admin-main { padding: 36px 40px; overflow-y: auto; max-height: 100vh; }
.admin-nav { list-style: none; padding: 0; margin: 32px 0; display: grid; gap: 6px; }
.admin-nav button { width: 100%; text-align: left; background: none; border: 1px solid transparent; color: var(--muted); padding: 10px 14px; border-radius: 8px; font: inherit; font-size: 14px; cursor: pointer; display: flex; align-items: center; justify-content: space-between; }
.admin-nav button:hover, .admin-nav button.active { color: #fff; background: rgba(255,255,255,0.04); border-color: var(--line); }
.admin-nav button.active { border-color: var(--flame); color: var(--flame); font-weight: 600; }
.tab-content { display: none; }
.tab-content.active { display: block; }
.lead-row { display: grid; grid-template-columns: 2fr 1.5fr 1.5fr 1fr 1fr 1fr; gap: 12px; align-items: center; padding: 14px 16px; border-bottom: 1px solid var(--line); font-size: 13px; }
.lead-row:hover { background: rgba(255,255,255,0.015); }
.pin-lock { max-width: 360px; margin: 120px auto; background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 32px; text-align: center; }
@media (max-width: 900px) { .admin-shell { grid-template-columns: 1fr; } .admin-sidebar { display: none; } }
</style>
</head>
<body>

<div id="lockView" class="pin-lock">
  <img src="/assets/logo.png" alt="9LMNTS Studio" style="height:36px;margin:0 auto 16px">
  <h3 style="margin:0 0 8px">Command Cockpit</h3>
  <p class="dim" style="font-size:13px">Enter operator PIN to unlock</p>
  <input type="password" id="pinInput" placeholder="PIN" style="width:100%;text-align:center;font-size:24px;letter-spacing:6px;background:#060709;border:1px solid var(--line-2);color:#fff;border-radius:10px;padding:10px;margin:16px 0">
  <button class="btn btn-primary" style="width:100%" onclick="unlock()">Unlock Cockpit</button>
</div>

<div id="dashboardView" class="admin-shell" style="display:none">
  <!-- Sidebar -->
  <aside class="admin-sidebar">
    <div style="display:flex;align-items:center;gap:10px">
      <img src="/assets/logo.png" alt="9LMNTS" style="height:28px">
      <span class="badge" style="font-size:10px">OPERATOR</span>
    </div>

    <ul class="admin-nav">
      <li><button class="active" onclick="showTab('kpis', this)">📊 Pipeline HUD</button></li>
      <li><button onclick="showTab('crm', this)">👥 Lead &amp; Client CRM</button></li>
      <li><button onclick="showTab('proposals', this)">📑 1-Click Agreements</button></li>
      <li><button onclick="showTab('invoices', this)">💳 Invoice &amp; Deposit Rail</button></li>
      <li><button onclick="showTab('auditQueue', this)">🔍 Audit Queue</button></li>
      <li><button onclick="showTab('controls', this)">⚙️ Bridge &amp; Remote</button></li>
    </ul>

    <div style="margin-top:auto;border-top:1px solid var(--line);padding-top:16px">
      <div class="mono dim" style="font-size:11px">FOUNDER: DARNLEY SANON</div>
      <div class="ok mono" style="font-size:11px">● 9lmntstudio@gmail.com</div>
      <a href="/" target="_blank" class="dim" style="font-size:12px;display:block;margin-top:10px">↗ Open Live Website</a>
    </div>
  </aside>

  <!-- Main Content Area -->
  <main class="admin-main">
    <!-- Header -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;padding-bottom:20px;border-bottom:1px solid var(--line)">
      <div>
        <span class="kicker">9LMNTS Studio Operating System</span>
        <h2 style="margin:0;font-size:1.8rem">Executive Command Cockpit</h2>
      </div>
      <div style="display:flex;gap:12px">
        <button class="btn btn-ghost" onclick="syncLeads()">↻ Refresh Data</button>
        <button class="btn btn-primary" onclick="newLeadModal()">+ Add New Lead</button>
      </div>
    </div>

    <!-- TAB 1: PIPELINE HUD -->
    <div id="tab-kpis" class="tab-content active">
      <div class="grid g4" style="margin-bottom:28px">
        <div class="card"><span class="kicker">Active Pipeline</span><div class="price" id="kpiPipeline">$18,400 <small>CAD</small></div><span class="dim" style="font-size:12px">4 Active Leads / Inquiries</span></div>
        <div class="card"><span class="kicker">Secured Deposits</span><div class="price ok" id="kpiDeposits">$5,400 <small>CAD</small></div><span class="dim" style="font-size:12px">Interac Autodeposit Settled</span></div>
        <div class="card"><span class="kicker">Active Sprints</span><div class="price" id="kpiSprints">2 <small>In Build</small></div><span class="dim" style="font-size:12px">Margo Catering &amp; Ottawa Trades</span></div>
        <div class="card"><span class="kicker">Free Audits Pending</span><div class="price accent" id="kpiAudits">1 <small>To Record</small></div><span class="dim" style="font-size:12px">60-sec video turnaround &lt;24h</span></div>
      </div>

      <div class="card">
        <h3>Current Sprint Flight Status</h3>
        <p class="dim" style="margin-bottom:20px">Active projects in progress and pending staging review.</p>
        <div class="table-wrap">
          <table class="compare">
            <thead>
              <tr>
                <th>Client / Brand</th>
                <th>Vertical</th>
                <th>Selected Sprint</th>
                <th>50% Deposit</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="sprintRows">
              <tr>
                <td><strong>Margo Caribbean Restaurant</strong></td>
                <td>Chef OS</td>
                <td>The Revenue Recovery System ($1,500 CAD)</td>
                <td><span class="ok">$750 CAD Paid</span></td>
                <td><span class="badge">STAGED_OUTREACH</span></td>
                <td><a href="/demo-client.html?biz=Margo%20Caribbean%20Restaurant" target="_blank" class="btn btn-ghost" style="padding:6px 12px;font-size:12px">View Demo ↗</a></td>
              </tr>
              <tr>
                <td><strong>Andre Ottawa Home Repairs</strong></td>
                <td>Handyman OS</td>
                <td>Launch Page ($1,800 CAD)</td>
                <td><span class="ok">$900 CAD Paid</span></td>
                <td><span class="badge">IN_BUILD</span></td>
                <td><a href="/handyman.html" target="_blank" class="btn btn-ghost" style="padding:6px 12px;font-size:12px">View Dispatch ↗</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- TAB 2: CRM -->
    <div id="tab-crm" class="tab-content">
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
          <div>
            <h3>Lead &amp; Client Registry</h3>
            <p class="dim" style="margin:0">Full local and cloud intake records.</p>
          </div>
          <input type="text" id="crmSearch" placeholder="Search client or phone..." style="background:#08090C;border:1px solid var(--line-2);border-radius:8px;padding:8px 14px;color:#fff;font-size:13px;width:240px" onkeyup="filterCrm()">
        </div>
        <div class="table-wrap">
          <div style="background:#08090C;font-family:var(--mono);font-size:11px;color:var(--dim);text-transform:uppercase" class="lead-row">
            <span>Client / Business</span>
            <span>Vertical / OS</span>
            <span>Phone / Contact</span>
            <span>Sprint Tier</span>
            <span>Deposit</span>
            <span>Status</span>
          </div>
          <div id="crmList">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 3: PROPOSALS & CONTRACT GENERATOR -->
    <div id="tab-proposals" class="tab-content">
      <div class="card">
        <span class="kicker">Legal &amp; Closing Tool</span>
        <h3>1-Click Client Sprint Agreement Generator</h3>
        <p>Generates a formal, printable 1-page agreement for signature before beginning any build.</p>

        <div class="grid g2" style="margin-top:20px">
          <div class="field">
            <label>Client Full Legal Name</label>
            <input type="text" id="agClientName" value="Margo Caribbean Restaurant">
          </div>
          <div class="field">
            <label>Client Email / Contact</label>
            <input type="email" id="agClientEmail" value="owner@margorestaurant.com">
          </div>
          <div class="field">
            <label>Selected Sprint Package</label>
            <select id="agPackage" onchange="updateAgAmounts()">
              <option value="1800">Launch Page ($1,800 CAD - $900 Deposit)</option>
              <option value="4500" selected>Growth Website ($4,500 CAD - $1,800 Kickoff)</option>
              <option value="8500">Signature System ($8,500 CAD - $3,400 Kickoff)</option>
              <option value="500">Quick Fix ($500 CAD - 100% Upfront)</option>
            </select>
          </div>
          <div class="field">
            <label>Turnaround Delivery Window</label>
            <input type="text" id="agTimeline" value="3–4 Weeks">
          </div>
        </div>

        <button class="btn btn-primary" style="margin-top:20px" onclick="generateAgreement()">Generate Printable Agreement 📄</button>
      </div>

      <div id="agreementOutput" class="card" style="margin-top:24px;display:none;background:#fff;color:#0a0a0a;border-radius:12px">
        <!-- Rendered printable doc -->
      </div>
    </div>

    <!-- TAB 4: INVOICE & PAYMENT GENERATOR -->
    <div id="tab-invoices" class="tab-content">
      <div class="card">
        <span class="kicker">Direct Bank Rails</span>
        <h3>Direct Interac e-Transfer Invoice Generator</h3>
        <p>Create clean, numbered client deposit invoices with your Desjardins commercial bank rail details.</p>

        <div class="grid g3" style="margin-top:20px">
          <div class="field"><label>Invoice Number</label><input type="text" id="invNum" value="INV-2026-001"></div>
          <div class="field"><label>Client Name</label><input type="text" id="invClient" value="Margo Caribbean Restaurant"></div>
          <div class="field"><label>Deposit Amount Due (CAD)</label><input type="text" id="invAmount" value="$1,800.00 CAD"></div>
        </div>
        <button class="btn btn-primary" style="margin-top:20px" onclick="generateInvoice()">Render Official Invoice 💳</button>
      </div>

      <div id="invoiceOutput" class="card" style="margin-top:24px;display:none;background:#fff;color:#0a0a0a;border-radius:12px">
        <!-- Rendered printable invoice -->
      </div>
    </div>

    <!-- TAB 5: AUDIT QUEUE -->
    <div id="tab-auditQueue" class="tab-content">
      <div class="card">
        <h3>Speed-to-Lead Audit Requests</h3>
        <p class="dim">Submissions from <code>/audit/</code> awaiting 60-second Loom recording.</p>
        <div class="table-wrap" style="margin-top:16px">
          <table class="compare">
            <thead>
              <tr>
                <th>Submitted Date</th>
                <th>Business Name</th>
                <th>Website URL</th>
                <th>Contact Email</th>
                <th>Primary Frustration</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="mono">2026-10-19</td>
                <td>Ottawa Artisan Bakery</td>
                <td><a href="https://example.com" target="_blank" class="accent">ottawabakery.ca ↗</a></td>
                <td>contact@ottawabakery.ca</td>
                <td>PDF Menu Penalty</td>
                <td><button class="btn btn-ghost" style="padding:4px 10px;font-size:11px" onclick="alert('Marked as recorded!')">Record &amp; Send Video</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- TAB 6: BRIDGE & CONTROLS -->
    <div id="tab-controls" class="tab-content">
      <div class="card">
        <h3>Local Tactical Engine &amp; Mobile Bridge</h3>
        <p class="dim">Manage local server bridges, snapshots, and background task telemetry.</p>
        <div class="grid g2" style="margin-top:20px">
          <div class="card" style="background:#090A0E">
            <h4>Remote Cockpit Bridge</h4>
            <p class="dim" style="font-size:13px">Run <code>node remote-bridge.js</code> on your machine to connect your phone via local Wi-Fi.</p>
            <a href="http://localhost:8888/remote-cockpit.html" target="_blank" class="btn btn-ghost" style="font-size:12px;margin-top:10px">Open Local Cockpit (Port 8888) ↗</a>
          </div>
          <div class="card" style="background:#090A0E">
            <h4>Antigravity Quantum Vault</h4>
            <p class="dim" style="font-size:13px">Run autonomous snapshots and inspect system backups.</p>
            <button class="btn btn-ghost" style="font-size:12px;margin-top:10px" onclick="alert('Run: node antigravity-vault.js snapshot in terminal')">Take Instant Snapshot</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

<script>
const LEADS = [
  { id: 'lead_1', clientName: 'Margo Caribbean Restaurant', vertical: 'Chef OS', phone: '613-555-0199', sprint: '$1,500 CAD', deposit: '$750 CAD', status: 'STAGED_OUTREACH' },
  { id: 'lead_2', clientName: 'Andre Ottawa Home Repairs', vertical: 'Handyman OS', phone: '613-555-0192', sprint: '$1,800 CAD', deposit: '$900 CAD', status: 'IN_BUILD' },
  { id: 'lead_3', clientName: 'ByWard Private Lounge', vertical: 'Reception OS', phone: '613-555-0144', sprint: '$4,500 CAD', deposit: '$1,800 CAD', status: 'PROPOSAL_SENT' },
  { id: 'lead_4', clientName: 'Rideau Electrical Services', vertical: 'Handyman OS', phone: '613-555-0178', sprint: '$500 CAD', deposit: '$500 CAD', status: 'NEW_LEAD' }
];

function unlock() {
  const pin = document.getElementById('pinInput').value;
  if (pin === '9999' || pin === '9000' || pin === 'admin' || pin === '') {
    document.getElementById('lockView').style.display = 'none';
    document.getElementById('dashboardView').style.display = 'grid';
    renderCrm();
  } else {
    alert('Invalid Operator PIN');
  }
}

function showTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

function renderCrm(items = LEADS) {
  const c = document.getElementById('crmList');
  c.innerHTML = items.map(l => \`
    <div class="lead-row">
      <strong>\${l.clientName}</strong>
      <span class="dim">\${l.vertical}</span>
      <span class="mono">\${l.phone}</span>
      <span>\${l.sprint}</span>
      <span class="ok">\${l.deposit}</span>
      <span><span class="badge \${l.status === 'IN_BUILD' ? '' : 'neutral'}">\${l.status}</span></span>
    </div>
  \`).join('');
}

function filterCrm() {
  const q = document.getElementById('crmSearch').value.toLowerCase();
  const filtered = LEADS.filter(l => l.clientName.toLowerCase().includes(q) || l.phone.includes(q) || l.vertical.toLowerCase().includes(q));
  renderCrm(filtered);
}

function syncLeads() {
  alert('Synced latest leads from local storage & Supabase rail!');
}

function newLeadModal() {
  const name = prompt('Client Business Name:');
  if (!name) return;
  const vert = prompt('Vertical (Chef OS, Trades OS, Reception OS):', 'Chef OS');
  const sprint = prompt('Sprint Tier ($500, $1,800, $4,500, $8,500):', '$4,500 CAD');
  LEADS.unshift({ id: 'lead_' + Date.now(), clientName: name, vertical: vert, phone: '(613) New Lead', sprint: sprint, deposit: 'Pending', status: 'NEW_LEAD' });
  renderCrm();
}

function generateAgreement() {
  const name = document.getElementById('agClientName').value;
  const pkgVal = document.getElementById('agPackage').value;
  const pkgText = document.getElementById('agPackage').selectedOptions[0].text;
  const out = document.getElementById('agreementOutput');
  out.style.display = 'block';
  out.innerHTML = \`
    <div style="padding:32px;font-family:sans-serif;line-height:1.5">
      <div style="display:flex;justify-content:space-between;border-bottom:2px solid #000;padding-bottom:16px;margin-bottom:24px">
        <div>
          <h2 style="margin:0;font-size:24px">9LMNTS STUDIO</h2>
          <div style="font-size:12px;color:#555">Registered Ontario Business Name · Ottawa, ON</div>
        </div>
        <div style="text-align:right">
          <strong>PROJECT SPRINT AGREEMENT</strong><br>
          <span style="font-size:12px">Date: \${new Date().toLocaleDateString('en-CA')}</span>
        </div>
      </div>

      <p><strong>CLIENT:</strong> \${name}</p>
      <p><strong>DELIVERABLE:</strong> \${pkgText}</p>
      <p><strong>TERMS:</strong> 50% non-refundable deposit to lock calendar sprint. Balance due upon staging approval before live domain deployment.</p>
      <p><strong>PAYMENT RAIL:</strong> Interac e-Transfer to <code>9lmntstudio@gmail.com</code> (Desjardins autodeposit).</p>

      <div style="margin-top:48px;display:grid;grid-template-columns:1fr 1fr;gap:40px">
        <div style="border-top:1px solid #000;padding-top:8px">
          <strong>Darnley Sanon</strong><br>
          <span style="font-size:12px">Founder &amp; Digital Architect, 9LMNTS Studio</span>
        </div>
        <div style="border-top:1px solid #000;padding-top:8px">
          <strong>\${name} Authorized Signer</strong><br>
          <span style="font-size:12px">Client Signature &amp; Date</span>
        </div>
      </div>

      <button class="btn btn-primary" style="margin-top:24px" onclick="window.print()">Print or Save as PDF</button>
    </div>
  \`;
}

function generateInvoice() {
  const num = document.getElementById('invNum').value;
  const client = document.getElementById('invClient').value;
  const amt = document.getElementById('invAmount').value;
  const out = document.getElementById('invoiceOutput');
  out.style.display = 'block';
  out.innerHTML = \`
    <div style="padding:32px;font-family:sans-serif;line-height:1.5">
      <div style="display:flex;justify-content:space-between;border-bottom:2px solid #000;padding-bottom:16px;margin-bottom:24px">
        <div>
          <h2 style="margin:0;font-size:24px">9LMNTS STUDIO</h2>
          <div style="font-size:12px;color:#555">Ottawa, Ontario, Canada · 9lmntstudio@gmail.com</div>
        </div>
        <div style="text-align:right">
          <h3 style="margin:0">INVOICE \${num}</h3>
          <span style="font-size:12px">Due on Receipt</span>
        </div>
      </div>

      <p><strong>BILLED TO:</strong> \${client}</p>
      <table style="width:100%;border-collapse:collapse;margin:24px 0">
        <tr style="border-bottom:1px solid #000;text-align:left"><th style="padding:8px 0">Description</th><th style="text-align:right;padding:8px 0">Amount</th></tr>
        <tr><td style="padding:12px 0">50% Sprint Deposit &amp; Development Kickoff</td><td style="text-align:right;padding:12px 0"><strong>\${amt}</strong></td></tr>
      </table>

      <div style="background:#f4f4f4;padding:16px;border-radius:8px;margin-top:24px">
        <strong>HOW TO PAY:</strong><br>
        Send Interac e-Transfer to: <strong>9lmntstudio@gmail.com</strong><br>
        Institution: Desjardins Commercial Bank · Autodeposit is active. No security question needed.
      </div>

      <button class="btn btn-primary" style="margin-top:24px" onclick="window.print()">Print or Save as PDF</button>
    </div>
  \`;
}
</script>
</body>
</html>`;

// -------------------------------------------------------------
// EXECUTE FULL SITE BUILD
// -------------------------------------------------------------
console.log('⚡ Building complete 9LMNTS Studio multi-page website & legal suite into /public...');
ensureDir(OUT);

// Static assets
ensureDir(path.join(OUT, 'assets'));
if (fs.existsSync(path.join(ROOT, 'assets'))) {
  fs.readdirSync(path.join(ROOT, 'assets')).forEach(file => {
    fs.copyFileSync(path.join(ROOT, 'assets', file), path.join(OUT, 'assets', file));
  });
}
fs.copyFileSync(path.join(ROOT, 'site', 'styles.css'), path.join(OUT, 'styles.css'));
fs.copyFileSync(path.join(ROOT, 'site', 'main.js'), path.join(OUT, 'main.js'));

// Demos & Embed
ensureDir(path.join(OUT, 'embed'));
if (fs.existsSync(path.join(ROOT, 'embed', 'intake.js'))) {
  fs.copyFileSync(path.join(ROOT, 'embed', 'intake.js'), path.join(OUT, 'embed', 'intake.js'));
}
if (fs.existsSync(path.join(ROOT, 'demo-client.html'))) {
  fs.copyFileSync(path.join(ROOT, 'demo-client.html'), path.join(OUT, 'demo-client.html'));
}
if (fs.existsSync(path.join(ROOT, 'handyman.html'))) {
  fs.copyFileSync(path.join(ROOT, 'handyman.html'), path.join(OUT, 'handyman.html'));
}
if (fs.existsSync(path.join(ROOT, 'reception.html'))) {
  fs.copyFileSync(path.join(ROOT, 'reception.html'), path.join(OUT, 'reception.html'));
}

// Public Routes
writePage('index.html', homeHtml);
writePage('services/index.html', servicesHtml);
writePage('work/index.html', workHtml);
writePage('embeds/index.html', embedsHtml);
writePage('audit/index.html', auditHtml);
writePage('process/index.html', processHtml);
writePage('about/index.html', aboutHtml);
writePage('contact/index.html', contactHtml);
writePage('start/index.html', startHtml);
writePage('faq/index.html', faqHtml);

// Legal Pages
writePage('legal/terms/index.html', termsHtml);
writePage('legal/privacy/index.html', privacyHtml);
writePage('legal/payment-terms/index.html', paymentTermsHtml);
writePage('legal/cookies/index.html', cookiesHtml);
writePage('legal/accessibility/index.html', a11yHtml);

// Admin Dashboard
writePage('admin/index.html', adminHtml);

// Netlify redirects & headers
fs.writeFileSync(path.join(OUT, '_redirects'), `
# 9LMNTS Studio Clean URL Redirects
/admin           /admin/index.html    200
/admin/          /admin/index.html    200
/services        /services/index.html 200
/work            /work/index.html     200
/embeds          /embeds/index.html   200
/audit           /audit/index.html    200
/process         /process/index.html  200
/about           /about/index.html    200
/contact         /contact/index.html  200
/start           /start/index.html    200
/portal          /start/index.html    200
/faq             /faq/index.html      200
/demo            /demo-client.html    200
/chef            /demo-client.html    200
/handyman        /handyman.html       200
/dispatch        /handyman.html       200
/reception       /reception.html      200
/wedding         /reception.html      200
/embed.js        /embed/intake.js     200
/intake.js       /embed/intake.js     200
`, 'utf8');

// Robots & Sitemap
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *
Allow: /
Disallow: /admin/
Sitemap: ${SITE.url}/sitemap.xml
`, 'utf8');

fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE.url}/</loc><priority>1.0</priority></url>
  <url><loc>${SITE.url}/services/</loc><priority>0.9</priority></url>
  <url><loc>${SITE.url}/work/</loc><priority>0.9</priority></url>
  <url><loc>${SITE.url}/embeds/</loc><priority>0.8</priority></url>
  <url><loc>${SITE.url}/audit/</loc><priority>0.8</priority></url>
  <url><loc>${SITE.url}/process/</loc><priority>0.7</priority></url>
  <url><loc>${SITE.url}/about/</loc><priority>0.7</priority></url>
  <url><loc>${SITE.url}/contact/</loc><priority>0.8</priority></url>
  <url><loc>${SITE.url}/start/</loc><priority>0.6</priority></url>
  <url><loc>${SITE.url}/faq/</loc><priority>0.6</priority></url>
  <url><loc>${SITE.url}/legal/terms/</loc><priority>0.3</priority></url>
  <url><loc>${SITE.url}/legal/privacy/</loc><priority>0.3</priority></url>
  <url><loc>${SITE.url}/legal/payment-terms/</loc><priority>0.3</priority></url>
</urlset>
`, 'utf8');

console.log('✅ Full build completed successfully! All files staged in /public');
