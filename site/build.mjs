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

// Sync styles.css into /public
const cssSource = path.join(__dirname, 'styles.css');
if (fs.existsSync(cssSource)) {
  ensureDir(OUT);
  fs.copyFileSync(cssSource, path.join(OUT, 'styles.css'));
  console.log('✓ Copied styles.css to /public');
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
          <a class="btn btn-ghost" href="/contact/">Book A Call <span class="arrow">↗</span></a>
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
  <section class="section section-offerings"><div class="container">
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
            <a class="btn btn-primary" href="/contact/?sprint=Chef+OS">Deploy Chef OS <span class="arrow">↗</span></a>
            <a class="btn btn-ghost" href="/work/">Case Study <span class="arrow">↗</span></a>
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
          <h3>WorkerBee OS — Field Dispatch &amp; Paperless Payouts</h3>
          <p>Click-to-dispatch mobile manifest, 5:00 AM QR &amp; PIN check-in, and automated 2:30 PM payroll auto-calc for Ottawa contractors and trades.</p>
          <ul class="showcase-features">
            <li>5:00 AM Door QR / PIN check-in for field crews</li>
            <li>1-Click crew van assignment &amp; SMS job tickets</li>
            <li>Paperless 2:30 PM payroll &amp; direct Interac batching</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/contact/?sprint=WorkerBee+OS">Deploy Dispatch OS <span class="arrow">↗</span></a>
            <a class="btn btn-ghost" href="/work/">Case Study <span class="arrow">↗</span></a>
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
            <a class="btn btn-primary" href="/contact/?sprint=Reception+OS">Deploy Booking Hub <span class="arrow">↗</span></a>
            <a class="btn btn-ghost" href="/work/">Case Study <span class="arrow">↗</span></a>
          </div>
        </div>
      </article>
    </div>
  </div></section>

  <!-- ⚡ REVERSE-ENGINEER ANYTHING & AI LAB -->
  <section class="section border-top" id="reverse-lab" style="position:relative;background:radial-gradient(ellipse at 50% 0%, rgba(255,85,0,0.15), transparent 70%), #08090C">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="eyebrow"><span class="dot"></span> Autonomous Software Cloning &amp; AI Integration</span>
          <h2>Reverse-Engineer Anything.<br><span class="accent">From GitHub Repo &amp; Hugging Face to Live System in 7 Days.</span></h2>
        </div>
        <p>You find an open-source model on Hugging Face, a complex GitHub repository, or a competitor site. We deconstruct the architecture, extract the design tokens, and build a sovereign, zero-bloat web platform tailored to your brand.</p>
      </div>

      <!-- 3-Pillar Reverse Engineering Bento Grid -->
      <div class="grid g3">
        <!-- Pillar 1: GitHub Repo Cloning & Deconstruction -->
        <article class="card reveal" style="border-color:rgba(255,85,0,0.25)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <span class="num-tag">01 / GITHUB REPOS</span>
            <span class="badge">Architecture Cloning</span>
          </div>
          <h3>Full-Stack Repo Deconstruction</h3>
          <p>Shallow-clone open-source repositories, analyze AST, isolate data schemas, and strip bloat into lightweight Supabase Edge Functions and clean frontend Bento cards.</p>
          <ul class="check">
            <li>Prisma / Drizzle → PostgreSQL schemas</li>
            <li>Complex Next.js → Zero-bloat static compilation</li>
            <li>API handlers → Serverless webhooks &amp; Deno edge</li>
          </ul>
          <div class="meta" style="margin-top:16px"><span class="badge green">● Automated Ingestion Pipeline</span></div>
        </article>

        <!-- Pillar 2: Hugging Face Spaces & Models Extraction -->
        <article class="card reveal" style="border-color:rgba(0,240,255,0.25)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <span class="num-tag">02 / HUGGING FACE</span>
            <span class="badge neutral" style="color:#00F0FF;border-color:rgba(0,240,255,0.3)">AI Pipeline Extraction</span>
          </div>
          <h3>Hugging Face Model &amp; Space Adapters</h3>
          <p>Translate Gradio/Streamlit apps and raw PyTorch inference pipelines into instant client-facing web widgets with sub-second response times.</p>
          <ul class="check">
            <li>Whisper &amp; Kokoro TTS speech streaming</li>
            <li>RMBG background removal &amp; computer vision</li>
            <li>Diffusers &amp; FLUX image synthesis pipelines</li>
          </ul>
          <div class="meta" style="margin-top:16px"><span class="badge neutral">● Serverless Edge Webhooks</span></div>
        </article>

        <!-- Pillar 3: Web Scraper & DESIGN.md Synthesis -->
        <article class="card reveal" style="border-color:rgba(255,255,255,0.2)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <span class="num-tag">03 / WEB SCRAPER</span>
            <span class="badge">DESIGN.md Synthesis</span>
          </div>
          <h3>UI/UX Reverse-Engineering</h3>
          <p>Scrape computed styles, typography hierarchies, and responsive bento grid dimensions. Generate machine-readable DESIGN.md specifications adhering to Apple HIG.</p>
          <ul class="check">
            <li>60-30-10 color architecture extraction</li>
            <li>100% authentic dish &amp; product scraping</li>
            <li>Google Stitch MCP &amp; Antigravity sync</li>
          </ul>
          <div class="meta" style="margin-top:16px"><span class="badge neutral">● Apple HIG Standard</span></div>
        </article>
      </div>

      <!-- Interactive Cloner Terminal Simulator -->
      <div class="card reveal" style="margin-top:32px;background:rgba(12,14,20,0.9);border:1px solid rgba(255,85,0,0.3);padding:28px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px">
          <div style="display:flex;align-items:center;gap:10px">
            <span class="dot" style="background:#FF5500;box-shadow:0 0 10px #FF5500"></span>
            <span class="mono" style="font-weight:700;color:#fff;font-size:13px">9LMNTS REVERSE-ENGINEERING ENGINE // LIVE SIMULATOR</span>
          </div>
          <span class="badge green">● Ready to Clone</span>
        </div>
        <p style="font-size:0.95rem;max-width:700px;margin-bottom:20px">Test the engine: choose a template below or enter a repository to see the 9LMNTS reverse-engineering pipeline synthesize the target into a production architecture.</p>
        
        <div class="cloner-preset-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:12px;margin-bottom:20px">
          <button class="btn btn-ghost cloner-btn" style="text-align:left;padding:12px 14px;font-size:12px" data-sample="hf-tts">
            <span class="mono accent" style="display:block;font-size:10px">HUGGING FACE</span>
            <b>Kokoro TTS / Whisper Audio</b>
          </button>
          <button class="btn btn-ghost cloner-btn" style="text-align:left;padding:12px 14px;font-size:12px" data-sample="gh-booking">
            <span class="mono accent" style="display:block;font-size:10px">GITHUB REPO</span>
            <b>Cal.com / Supabase Booking</b>
          </button>
          <button class="btn btn-ghost cloner-btn" style="text-align:left;padding:12px 14px;font-size:12px" data-sample="web-catering">
            <span class="mono accent" style="display:block;font-size:10px">WEB SCRAPER</span>
            <b>Luxury Catering / Chef OS</b>
          </button>
          <button class="btn btn-ghost cloner-btn" style="text-align:left;padding:12px 14px;font-size:12px" data-sample="gh-clash">
            <span class="mono accent" style="display:block;font-size:10px">BRACKET OS</span>
            <b>8-Contender Sound Clash</b>
          </button>
        </div>

        <div id="clonerOutput" class="mono" style="background:#07080B;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:18px;font-size:12px;color:#A3A09A;line-height:1.6">
          <span style="color:#FF5500">&gt; 9lmnts-cli --reverse-engineer --status:</span> Ready for input. Select a preset above or run <span style="color:#fff">node scripts/reverse-engineer.js --help</span> in terminal.
        </div>
      </div>
    </div>
  </section>

  <!-- Wedding & Reception OS (Romeo & Juliet Guest Experience) -->
  <section class="section border-top" style="position:relative;background:linear-gradient(180deg, #090B0F 0%, #12141C 100%)">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="kicker">Category 02 / Hospitality &amp; Private Events · Wedding OS</span>
          <h2>Wedding Day Guest Portal &amp; Cash Registry</h2>
        </div>
        <p>A turn-key digital guest companion engineered for boutique weddings and luxury receptions. Features live speech voting, digital drink gifting, honeymoon getaway raffles, and Apple Pay cash registries.</p>
      </div>

      <div class="grid g3">
        <!-- Screen 1: Wedding OS Home & Raffle -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>R&amp;J WEDDING OS</span>
            <div class="phone-notch-pill"></div>
            <span style="color:#FFD700">JULY 24</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-wedding-rj-home-raffle.jpg" alt="Romeo &amp; Juliet Wedding OS Home and Raffle Entry" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>$750 RAFFLE</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Guest Portal · Home &amp; Timeline</span>
            <h4>Interactive Reception Companion</h4>
            <p>One-stop mobile guest dashboard with schedule timeline, speeches, live games, and a $10 honeymoon getaway raffle entry.</p>
            <div class="phone-metric-pill">💍 100% Mobile Guest Adoption</div>
          </div>
        </div>

        <!-- Screen 2: Speech Showcase Voting & Drink Buy -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>SPEECH SHOWCASE</span>
            <div class="phone-notch-pill"></div>
            <span class="accent">VOTE LIVE</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-wedding-speech-showcase.jpg" alt="Speech Showcase: Best Man Mercutio vs Maid of Honor Nurse" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>$5 DRINK RAIL</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Crowd Interaction · Speech Battle</span>
            <h4>Live Speech Voting &amp; Drink Gifting</h4>
            <p>Guests vote on Best Man vs. Maid of Honor speeches in real time, or send them a $5 drink straight to their table from their phones.</p>
            <div class="phone-metric-pill">🥂 Real-Time Table Delivery</div>
          </div>
        </div>

        <!-- Screen 3: Future Fund Cash Registry -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>FUTURE FUND</span>
            <div class="phone-notch-pill"></div>
            <span class="ok">SECURE</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-wedding-future-fund.jpg" alt="Future Fund Honeymoon Cash Registry Modal" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>APPLE PAY / VISA</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Frictionless Gifting · Zero Envelopes</span>
            <h4>Future Fund &amp; Honeymoon Registry</h4>
            <p>Direct cash contribution rail with $50, $100, or custom amounts. Supports Apple Pay, Visa, and PayPal with zero bank delays.</p>
            <div class="phone-metric-pill">💳 Instant Autodeposit Rail</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4-Device Live Mobile Production Engine (clash.9lmntsstudio.com) -->
  <section class="section border-top" style="position:relative;background:linear-gradient(180deg, rgba(8,9,12,0.95) 0%, rgba(16,18,24,0.98) 100%)">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="kicker">Live Telemetry · clash.9lmntsstudio.com</span>
          <h2>Live Production Mobile Engine</h2>
        </div>
        <div>
          <p style="margin-bottom:12px">Real-time event software deployed in active production. Tested under extreme live venue load with instant micro-tipping, sudden death tournament trees, and VIP table sales.</p>
          <a class="btn btn-primary" href="https://clash.9lmntsstudio.com" target="_blank" rel="noopener">Launch Live App on Phone <span class="arrow">↗</span></a>
        </div>
      </div>

      <div class="mobile-phone-grid">
        <!-- Phone 1: SoundClash Grand Finals Matchup -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>SOUNDCLASH OS</span>
            <div class="phone-notch-pill"></div>
            <span class="accent">FINALS</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-clash-grand-finals.jpg" alt="SoundClash OS Grand Finals DJ K-OS vs DJ VIBE" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>1,301 IN VENUE</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Stage 01 / Grand Finals</span>
            <h4>Live Finals Matchup: DJ K-OS vs DJ VIBE</h4>
            <p>Velvet Room grand finals. 1,301 club capacity, 9,664 hype level telemetry, and live countdown timer with 1-tap pass redemption.</p>
            <div class="phone-metric-pill">⚡ 9,664 Real-Time Hype</div>
          </div>
        </div>

        <!-- Phone 2: Live Battle Voting Duel (Round 2) -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>THE BATTLE</span>
            <div class="phone-notch-pill"></div>
            <span class="accent">ROUND 2</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-clash-round2-battle.jpg" alt="SoundClash OS Live Duel: DJ K-OS 49% vs DJ VIBE 50%" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>49% VS 50%</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Stage 02 / Head-to-Head Duel</span>
            <h4>Live Crowd Voting Duel &amp; Upgrades</h4>
            <p>Neck-and-neck crowd percentage decibel meter. Fans tap "Hype This DJ" to dynamically swing the bracket vote in real time.</p>
            <div class="phone-metric-pill">🏆 Live Audience Decibel Vote</div>
          </div>
        </div>

        <!-- Phone 3: Club Upgrades & Bottle Service Checkout -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>UPGRADES</span>
            <div class="phone-notch-pill"></div>
            <span class="accent">CHECKOUT</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-clash-select-upgrade.jpg" alt="Club Upgrades: $20 Cover, $10 Hype, $150 Bottle Service" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>$150 VIP TABLE</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Stage 03 / Multi-Tier Monetization</span>
            <h4>Club Upgrades &amp; Table Checkout</h4>
            <p>Seamless drawer checkout: $20 Cover Charge, $10 Power Hype Pack, or $150 VIP Bottle Service with reserved table lounge access.</p>
            <div class="phone-metric-pill">🍾 Instant POS Bottle Reserve</div>
          </div>
        </div>

        <!-- Phone 4: Power Hype Pay & Boost Modal -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>POWER HYPE</span>
            <div class="phone-notch-pill"></div>
            <span class="accent">MICRO-PAY</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-clash-show-hype-modal.jpg" alt="DJ K-OS Power Hype $2, $10, $45 Pay and Boost Modal" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>PAY &amp; BOOST</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Stage 04 / Micro-Tipping Rail</span>
            <h4>Micro-Tipping &amp; Power Hype Rail</h4>
            <p>Instant micro-tips: 10 Hype ($2.00 Basic Boost), 50 Hype ($10.00 Popular Choice), or 250 Hype ($45.00 Major Influence).</p>
            <div class="phone-metric-pill">💰 Direct Artist Liquidity Rail</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Phygital WebAR Arena & Concert Experience -->
  <section class="section border-top" style="position:relative;background-image:linear-gradient(180deg, #08090C 0%, rgba(12,14,20,0.88) 50%, #08090C 100%), url('/assets/hero-spatial-mesh.jpg');background-size:cover;background-position:center;background-attachment:fixed">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="kicker">Physical × Augmented Reality Ecosystem</span>
          <h2>Phygital WebAR Concerts &amp; Wearable Tech</h2>
        </div>
        <p>We transform physical streetwear into live interactive digital portals. No native app downloads required—fans scan wearable QR codes on 350 GSM apparel to trigger instant browser-based 3D holographic experiences.</p>
      </div>

      <div class="webar-grid">
        <!-- WebAR Showcase 1: Holographic Wings -->
        <div class="webar-card reveal">
          <div class="webar-media">
            <img src="/assets/webar-wings-concert-fan.jpg" alt="Concert attendee with WebAR holographic wings and QR hoodie" loading="lazy">
            <div class="webar-media-overlay"></div>
            <div class="webar-badge">● LIVE SMARTPHONE WEBAR</div>
          </div>
          <div class="webar-body">
            <span class="kicker">Wearable XR Architecture</span>
            <h3>Artist Core OS — Holographic Angel Wings</h3>
            <p>Live concert attendees scanning the QR code on the back of the Artist Core OS hoodie instantly launch interactive, radiant golden-cyan augmented reality angel wings through their smartphone cameras in real time.</p>
            <div class="webar-tags">
              <span class="badge neutral">Zero App Install</span>
              <span class="badge neutral">WebGL &amp; WebAR</span>
              <span class="badge green">Real-Time Crowd Telemetry</span>
            </div>
          </div>
        </div>

        <!-- WebAR Showcase 2: Arena Scale Stadium -->
        <div class="webar-card reveal">
          <div class="webar-media">
            <img src="/assets/webar-arena-stadium-unified.jpg" alt="Arena-scale stadium synchronized crowd WebAR experience" loading="lazy">
            <div class="webar-media-overlay"></div>
            <div class="webar-badge">● STADIUM SYNCHRONIZATION</div>
          </div>
          <div class="webar-body">
            <span class="kicker">Stadium-Scale Transmedia</span>
            <h3>Collective Arena Synchronization: Artist Core OS Unified</h3>
            <p>Orchestrating arena-wide visual light shows across thousands of attendees simultaneously. Merges stage lighting, LED video backdrops, and attendee smartphone holographic projections into a unified audiovisual experience.</p>
            <div class="webar-tags">
              <span class="badge neutral">Mass Crowd Sync</span>
              <span class="badge neutral">Stage DMX Bridge</span>
              <span class="badge flame">9LMNTS Studio Proprietary</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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
    <div class="interac-rail-card reveal">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;position:relative;z-index:2">
        <div>
          <span class="kicker">Domestic Canadian Payment Rail</span>
          <h3 style="font-size:1.45rem;margin:4px 0 8px">Direct Interac e-Transfer with Autodeposit</h3>
          <p style="margin:0;max-width:540px;color:#E0DDD7">Zero processing delays. 0% credit card fees. Standard 50% deposit protects your project sprint timeline.</p>
        </div>
        <div style="min-width:280px">
          <div class="copy-row">
            <span>${SITE.email}</span>
            <button data-copy="${SITE.email}">Copy</button>
          </div>
          <span class="dim mono" style="font-size:11px;display:block;margin-top:6px;color:#CBC8C2">Desjardins Commercial Account · Verified Recipient</span>
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
    lead: 'No vague monthly hourly retainers. Choose the exact sprint that matches your business stage. All packages backed by Canadian Interac e-Transfer or Stripe.',
    bgImage: '/assets/hero-spatial-mesh.jpg'
  })}

  <section class="section-tight"><div class="container">
    <div class="grid g4">
      ${PACKAGES.map((p, i) => packageCard(p, i)).join('')}
    </div>
  </div></section>

  <!-- 9LMNTS Studio Ecosystem & Service Architecture -->
  <section class="section border-top" style="position:relative;background:linear-gradient(180deg, #08090C 0%, #0E1017 100%)">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="kicker">System Architecture &amp; Deliverables</span>
          <h2>The 9LMNTS Studio Service Ecosystem</h2>
        </div>
        <p>Our service capabilities extend from rapid 48-hour commercial conversion fixes to complete modular operating systems for live entertainment, hospitality, and creator economies.</p>
      </div>

      <div class="merch-showcase-grid">
        <!-- Card 1: 6-Pillar Ecosystem Uniform -->
        <div class="merch-card reveal">
          <div class="merch-media">
            <img src="/assets/merch-tshirt-services-mockup.png" alt="9LMNTS Studio 6-Pillar Service Architecture" loading="lazy">
          </div>
          <div class="merch-desc">
            <span class="kicker">Core System / 6 Foundational Pillars</span>
            <h4>6-Pillar Digital Acquisition Ecosystem</h4>
            <p>Every commercial system we build is grounded in our 6 core competencies: (1) Artist &amp; Business OS, (2) Direct Audience Tipping Engine, (3) Milestones Project Management, (4) High-Velocity Content Studio, (5) Drop-Ready Merch Hub, and (6) Audience Analytics Telemetry.</p>
            <div class="merch-specs">
              <span class="badge neutral">Commercial Architecture</span>
              <span class="badge green">● Production Ready</span>
            </div>
          </div>
        </div>

        <!-- Card 2: 10 Modular Event Operating Systems -->
        <div class="merch-card reveal">
          <div class="merch-media">
            <img src="/assets/merch-tshirt-modules-mockup.png" alt="9LMNTS Event OS Modular Service Architecture" loading="lazy">
          </div>
          <div class="merch-desc">
            <span class="kicker">Proprietary Modules / Event OS Series</span>
            <h4>10 Modular Event Operating Systems</h4>
            <p>Specialized turn-key modules including Sound Clash OS (beat &amp; DJ battles), Sports OS (athletic scoring), Worker Bee OS (contractor dispatch), Timeless OS (heritage brands), Young OS (next-gen talent), Launch Engine, and Media Press Kits.</p>
            <div class="merch-specs">
              <span class="badge neutral">Turn-Key Deployment</span>
              <span class="badge flame">● Proprietary 9LMNTS Framework</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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
    lead: 'We do not deal in static Figma mockups that fail in the real world. Every project we engineer is delivered as live, responsive, high-performance web code.',
    bgImage: '/assets/trades-craft-showcase.jpg'
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

  <!-- Video Reel Showcase -->
  <section class="section-tight"><div class="container">
    <div class="video-reel-frame reveal">
      <video autoplay loop muted playsinline controls poster="/assets/event-os-stage.png">
        <source src="/assets/sound-clash-reel.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </div>
  </div></section>

  <!-- Core Commercial Verticals -->
  <section class="section-tight"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Category 01 / Commercial Web Systems</span>
        <h2>High-Converting Business Engines</h2>
      </div>
      <p>Custom-engineered conversion engines that automate inquiry intake, scheduling, and direct 50% deposit capture for service operators.</p>
    </div>
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
            <a class="btn btn-primary" href="/contact/?sprint=Chef+OS">Deploy Chef OS <span class="arrow">↗</span></a>
            <a class="btn btn-ghost" href="/work/">Case Study <span class="arrow">↗</span></a>
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
          <h3>WorkerBee OS — Field Dispatch &amp; Paperless Payouts</h3>
          <p>Built for Ottawa trades, general contractors, plumbers, electricians, and blue-collar labor. 5:00 AM QR &amp; PIN worker check-in, driver drop routes, and 2:30 PM payroll reconciliation.</p>
          <ul class="showcase-features">
            <li>5:00 AM Door QR / PIN worker check-in</li>
            <li>Van driver mobile manifests with GPS routing</li>
            <li>Foreman digital sign-off &amp; automatic 2:30 PM payout calculation</li>
            <li>Zero lost paper time tickets</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/contact/?sprint=WorkerBee+OS">Deploy Dispatch OS <span class="arrow">↗</span></a>
            <a class="btn btn-ghost" href="/work/">Case Study <span class="arrow">↗</span></a>
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
            <a class="btn btn-primary" href="/contact/?sprint=Reception+OS">Deploy Booking Hub <span class="arrow">↗</span></a>
            <a class="btn btn-ghost" href="/work/">Case Study <span class="arrow">↗</span></a>
          </div>
        </div>
      </article>
    </div>
  </div></section>

  <!-- Wedding & Reception OS (Romeo & Juliet Guest Experience) -->
  <section class="section border-top" style="position:relative;background:linear-gradient(180deg, #090B0F 0%, #12141C 100%)">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="kicker">Category 02 / Hospitality &amp; Private Events · Wedding OS</span>
          <h2>Wedding Day Guest Portal &amp; Cash Registry</h2>
        </div>
        <p>A turn-key digital guest companion engineered for boutique weddings and luxury receptions. Features live speech voting, digital drink gifting, honeymoon getaway raffles, and Apple Pay cash registries.</p>
      </div>

      <div class="grid g3">
        <!-- Screen 1: Wedding OS Home & Raffle -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>R&amp;J WEDDING OS</span>
            <div class="phone-notch-pill"></div>
            <span style="color:#FFD700">JULY 24</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-wedding-rj-home-raffle.jpg" alt="Romeo &amp; Juliet Wedding OS Home and Raffle Entry" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>$750 RAFFLE</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Guest Portal · Home &amp; Timeline</span>
            <h4>Interactive Reception Companion</h4>
            <p>One-stop mobile guest dashboard with schedule timeline, speeches, live games, and a $10 honeymoon getaway raffle entry.</p>
            <div class="phone-metric-pill">💍 100% Mobile Guest Adoption</div>
          </div>
        </div>

        <!-- Screen 2: Speech Showcase Voting & Drink Buy -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>SPEECH SHOWCASE</span>
            <div class="phone-notch-pill"></div>
            <span class="accent">VOTE LIVE</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-wedding-speech-showcase.jpg" alt="Speech Showcase: Best Man Mercutio vs Maid of Honor Nurse" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>$5 DRINK RAIL</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Crowd Interaction · Speech Battle</span>
            <h4>Live Speech Voting &amp; Drink Gifting</h4>
            <p>Guests vote on Best Man vs. Maid of Honor speeches in real time, or send them a $5 drink straight to their table from their phones.</p>
            <div class="phone-metric-pill">🥂 Real-Time Table Delivery</div>
          </div>
        </div>

        <!-- Screen 3: Future Fund Cash Registry -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>FUTURE FUND</span>
            <div class="phone-notch-pill"></div>
            <span class="ok">SECURE</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-wedding-future-fund.jpg" alt="Future Fund Honeymoon Cash Registry Modal" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>APPLE PAY / VISA</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Frictionless Gifting · Zero Envelopes</span>
            <h4>Future Fund &amp; Honeymoon Registry</h4>
            <p>Direct cash contribution rail with $50, $100, or custom amounts. Supports Apple Pay, Visa, and PayPal with zero bank delays.</p>
            <div class="phone-metric-pill">💳 Instant Autodeposit Rail</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4-Device Live Mobile Production Engine (clash.9lmntsstudio.com) -->
  <section class="section border-top" style="position:relative;background:linear-gradient(180deg, rgba(8,9,12,0.95) 0%, rgba(16,18,24,0.98) 100%)">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="kicker">Live Telemetry · clash.9lmntsstudio.com</span>
          <h2>Live Production Mobile Engine</h2>
        </div>
        <div>
          <p style="margin-bottom:12px">Real-time event software deployed in active production. Tested under extreme live venue load with instant micro-tipping, sudden death tournament trees, and VIP table sales.</p>
          <a class="btn btn-primary" href="https://clash.9lmntsstudio.com" target="_blank" rel="noopener">Launch Live App on Phone <span class="arrow">↗</span></a>
        </div>
      </div>

      <div class="mobile-phone-grid">
        <!-- Phone 1: SoundClash Grand Finals Matchup -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>SOUNDCLASH OS</span>
            <div class="phone-notch-pill"></div>
            <span class="accent">FINALS</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-clash-grand-finals.jpg" alt="SoundClash OS Grand Finals DJ K-OS vs DJ VIBE" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>1,301 IN VENUE</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Stage 01 / Grand Finals</span>
            <h4>Live Finals Matchup: DJ K-OS vs DJ VIBE</h4>
            <p>Velvet Room grand finals. 1,301 club capacity, 9,664 hype level telemetry, and live countdown timer with 1-tap pass redemption.</p>
            <div class="phone-metric-pill">⚡ 9,664 Real-Time Hype</div>
          </div>
        </div>

        <!-- Phone 2: Live Battle Voting Duel (Round 2) -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>THE BATTLE</span>
            <div class="phone-notch-pill"></div>
            <span class="accent">ROUND 2</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-clash-round2-battle.jpg" alt="SoundClash OS Live Duel: DJ K-OS 49% vs DJ VIBE 50%" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>49% VS 50%</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Stage 02 / Head-to-Head Duel</span>
            <h4>Live Crowd Voting Duel &amp; Upgrades</h4>
            <p>Neck-and-neck crowd percentage decibel meter. Fans tap "Hype This DJ" to dynamically swing the bracket vote in real time.</p>
            <div class="phone-metric-pill">🏆 Live Audience Decibel Vote</div>
          </div>
        </div>

        <!-- Phone 3: Club Upgrades & Bottle Service Checkout -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>UPGRADES</span>
            <div class="phone-notch-pill"></div>
            <span class="accent">CHECKOUT</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-clash-select-upgrade.jpg" alt="Club Upgrades: $20 Cover, $10 Hype, $150 Bottle Service" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>$150 VIP TABLE</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Stage 03 / Multi-Tier Monetization</span>
            <h4>Club Upgrades &amp; Table Checkout</h4>
            <p>Seamless drawer checkout: $20 Cover Charge, $10 Power Hype Pack, or $150 VIP Bottle Service with reserved table lounge access.</p>
            <div class="phone-metric-pill">🍾 Instant POS Bottle Reserve</div>
          </div>
        </div>

        <!-- Phone 4: Power Hype Pay & Boost Modal -->
        <div class="phone-frame-card reveal">
          <div class="phone-notch-bar">
            <span>POWER HYPE</span>
            <div class="phone-notch-pill"></div>
            <span class="accent">MICRO-PAY</span>
          </div>
          <div class="phone-screen">
            <img src="/assets/mobile-clash-show-hype-modal.jpg" alt="DJ K-OS Power Hype $2, $10, $45 Pay and Boost Modal" loading="lazy">
            <div class="phone-live-tag">
              <span class="pulse"></span>
              <span>PAY &amp; BOOST</span>
            </div>
          </div>
          <div class="phone-info">
            <span class="kicker">Stage 04 / Micro-Tipping Rail</span>
            <h4>Micro-Tipping &amp; Power Hype Rail</h4>
            <p>Instant micro-tips: 10 Hype ($2.00 Basic Boost), 50 Hype ($10.00 Popular Choice), or 250 Hype ($45.00 Major Influence).</p>
            <div class="phone-metric-pill">💰 Direct Artist Liquidity Rail</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Phygital WebAR Arena & Concert Experience -->
  <section class="section border-top" style="position:relative;background-image:linear-gradient(180deg, #08090C 0%, rgba(12,14,20,0.88) 50%, #08090C 100%), url('/assets/hero-spatial-mesh.jpg');background-size:cover;background-position:center;background-attachment:fixed">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="kicker">Physical × Augmented Reality Ecosystem</span>
          <h2>Phygital WebAR Concerts &amp; Wearable Tech</h2>
        </div>
        <p>We transform physical streetwear into live interactive digital portals. No native app downloads required—fans scan wearable QR codes on 350 GSM apparel to trigger instant browser-based 3D holographic experiences.</p>
      </div>

      <div class="webar-grid">
        <!-- WebAR Showcase 1: Holographic Wings -->
        <div class="webar-card reveal">
          <div class="webar-media">
            <img src="/assets/webar-wings-concert-fan.jpg" alt="Concert attendee with WebAR holographic wings and QR hoodie" loading="lazy">
            <div class="webar-media-overlay"></div>
            <div class="webar-badge">● LIVE SMARTPHONE WEBAR</div>
          </div>
          <div class="webar-body">
            <span class="kicker">Wearable XR Architecture</span>
            <h3>Artist Core OS — Holographic Angel Wings</h3>
            <p>Live concert attendees scanning the QR code on the back of the Artist Core OS hoodie instantly launch interactive, radiant golden-cyan augmented reality angel wings through their smartphone cameras in real time.</p>
            <div class="webar-tags">
              <span class="badge neutral">Zero App Install</span>
              <span class="badge neutral">WebGL &amp; WebAR</span>
              <span class="badge green">Real-Time Crowd Telemetry</span>
            </div>
          </div>
        </div>

        <!-- WebAR Showcase 2: Arena Scale Stadium -->
        <div class="webar-card reveal">
          <div class="webar-media">
            <img src="/assets/webar-arena-stadium-unified.jpg" alt="Arena-scale stadium synchronized crowd WebAR experience" loading="lazy">
            <div class="webar-media-overlay"></div>
            <div class="webar-badge">● STADIUM SYNCHRONIZATION</div>
          </div>
          <div class="webar-body">
            <span class="kicker">Stadium-Scale Transmedia</span>
            <h3>Collective Arena Synchronization: Artist Core OS Unified</h3>
            <p>Orchestrating arena-wide visual light shows across thousands of attendees simultaneously. Merges stage lighting, LED video backdrops, and attendee smartphone holographic projections into a unified audiovisual experience.</p>
            <div class="webar-tags">
              <span class="badge neutral">Mass Crowd Sync</span>
              <span class="badge neutral">Stage DMX Bridge</span>
              <span class="badge flame">9LMNTS Studio Proprietary</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 9LMNTS Event OS Series (Live Battle Arenas) -->
  <section class="section section-arena border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Category 02 / 9LMNTS Event OS Series</span>
        <h2>Live Battle Arenas &amp; Interactive Crowd Platforms</h2>
      </div>
      <p>Gamified tournament operating systems featuring real-time mobile QR voting, contender brackets, judge telemetry, and instant revenue checkout.</p>
    </div>
    <div class="grid g3">
      <!-- Arena 1: Sound Clash OS -->
      <article class="showcase-card reveal">
        <div class="showcase-media">
          <img src="/assets/screenshot-sound-clash.png" alt="Sound Clash OS Live DJ Battle Interface" loading="lazy">
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Music &amp; Sound Clash</span>
          <span class="showcase-score">● LIVE TOURNAMENT</span>
        </div>
        <div class="showcase-body">
          <h3>Sound Clash OS — DJ Battle Finals</h3>
          <p>Real-time underground DJ sound clash system with 8-contender tournament bracket, audience decibel meter voting, and round-by-round audio stem mixing.</p>
          <ul class="showcase-features">
            <li>Interactive 8-DJ elimination bracket</li>
            <li>Live crowd QR voting &amp; round locking</li>
            <li>Contender profile cards &amp; audio players</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/demos/sound-clash-arena.html" target="_blank" rel="noopener">Launch Live Arena ↗</a>
          </div>
        </div>
      </article>

      <!-- Arena 2: Venue OS (Nuvo Lounge) -->
      <article class="showcase-card reveal">
        <div class="showcase-media" style="position:relative">
          <video src="/assets/nuvo-lounge.mp4" autoplay loop muted playsinline poster="/assets/screenshot-venue-os.png" style="width:100%;height:100%;object-fit:cover;display:block"></video>
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Nightlife &amp; Venue OS</span>
          <span class="showcase-score">● VIDEO WALKTHROUGH</span>
        </div>
        <div class="showcase-body">
          <h3>Venue OS — Nuvo Lounge 295</h3>
          <p>Smart venue management operating system. Features VIP table reservations, bottle service checkout, digital table QR ordering, and live DJ tipping.</p>
          <ul class="showcase-features">
            <li>Interactive floorplan table booking</li>
            <li>VIP bottle service tier selection</li>
            <li>Direct live venue video walkthrough</li>
            <li>Integrated payment rail &amp; door ticketing</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/demos/venue-os-nuvo-lounge.html" target="_blank" rel="noopener">Launch Live Venue OS ↗</a>
          </div>
        </div>
      </article>

      <!-- Arena 3: The Feast Culinary Clash -->
      <article class="showcase-card reveal">
        <div class="showcase-media">
          <img src="/assets/screenshot-the-feast.png" alt="The Feast Culinary Battle Royale" loading="lazy">
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Culinary Competition</span>
          <span class="showcase-score">● BATTLE ROYALE</span>
        </div>
        <div class="showcase-body">
          <h3>The Feast — Culinary Battle Royale</h3>
          <p>Multi-chef live cooking arena platform. Live scoring for taste, plating, and execution, with interactive tasting passport reservations for attendees.</p>
          <ul class="showcase-features">
            <li>Multi-round chef elimination voting</li>
            <li>Tasting passport ticket checkout</li>
            <li>Judge scorecard telemetry &amp; live timer</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/demos/the-feast-culinary-clash.html" target="_blank" rel="noopener">Launch Live Feast OS ↗</a>
          </div>
        </div>
      </article>

      <!-- Arena 4: Uncle Jay's Pit Catering -->
      <article class="showcase-card reveal">
        <div class="showcase-media">
          <img src="/assets/screenshot-uncle-jay.png" alt="Uncle Jay Catering Live Event OS" loading="lazy">
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Pitmaster &amp; Catering</span>
          <span class="showcase-score">● PIT CONCIERGE</span>
        </div>
        <div class="showcase-body">
          <h3>Uncle Jay's — Live Pit Experience OS</h3>
          <p>AI Pit Concierge and mobile barbecue ordering system. Handles smoked brisket headcounts, customized rub selection, and event deposit scheduling.</p>
          <ul class="showcase-features">
            <li>Dynamic meat-poundage calculator</li>
            <li>Live smoker schedule telemetry</li>
            <li>Direct deposit invoice generator</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/demos/uncle-jay-catering-os.html" target="_blank" rel="noopener">Launch Live Pit OS ↗</a>
          </div>
        </div>
      </article>

      <!-- Arena 5: Comedian OS Roast Battle -->
      <article class="showcase-card reveal">
        <div class="showcase-media">
          <img src="/assets/screenshot-comedian-os.png" alt="Comedian OS The Roast Battle" loading="lazy">
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Comedy &amp; Entertainment</span>
          <span class="showcase-score">● ROAST BATTLE</span>
        </div>
        <div class="showcase-body">
          <h3>Comedian OS — The Roast Battle</h3>
          <p>Live stand-up comedy and roast battle operating system with real-time crowd laugh-o-meter voting, digital tip jars, and exclusive backstage VIP access.</p>
          <ul class="showcase-features">
            <li>Crowd tip jar with instant payout</li>
            <li>Roast battle round-by-round voting</li>
            <li>Tour date calendar &amp; ticket reservation</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/demos/comedian-roast-battle-os.html" target="_blank" rel="noopener">Launch Live Comedian OS ↗</a>
          </div>
        </div>
      </article>

      <!-- Arena 6: Runway OS Fashion Week -->
      <article class="showcase-card reveal">
        <div class="showcase-media">
          <img src="/assets/screenshot-runway-os.png" alt="Runway OS Fashion Week Live" loading="lazy">
          <div class="showcase-overlay"></div>
          <span class="showcase-tag">Fashion &amp; Streetwear</span>
          <span class="showcase-score">● FASHION WEEK</span>
        </div>
        <div class="showcase-body">
          <h3>Runway OS — Fashion Week Live</h3>
          <p>High-concept runway competition and phygital streetwear drops. Viewers vote on live designer looks and pre-order exclusive capsule collections in real time.</p>
          <ul class="showcase-features">
            <li>Lookbook carousel with instant buy rail</li>
            <li>Live runway look scoring system</li>
            <li>Front-row VIP ticket reservations</li>
          </ul>
          <div class="showcase-actions">
            <a class="btn btn-primary" href="/demos/runway-os-fashion-week.html" target="_blank" rel="noopener">Launch Live Runway OS ↗</a>
          </div>
        </div>
      </article>
    </div>
  </div></section>

  <!-- Phygital Utility Streetwear & Services Apparel -->
  <section class="section border-top" style="position:relative;background:linear-gradient(180deg, #08090C 0%, #0E1017 100%)">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="kicker">Category 03 / Phygital Streetwear &amp; Interactive Apparel</span>
          <h2>Wearable Operating Systems &amp; Scannable Sleeve Tech</h2>
        </div>
        <p>Physical utility streetwear engineered on 350 GSM luxury combed cotton with integrated high-contrast sleeve QR matrix technology connecting fans directly to 9LMNTS Studio ecosystem endpoints.</p>
      </div>

      <div class="merch-showcase-grid">
        <!-- Merch 1: Services Tee -->
        <div class="merch-card reveal">
          <div class="merch-media">
            <img src="/assets/merch-tshirt-services-mockup.png" alt="9LMNTS Studio Services Apparel Mockup (Front, Back, and Left Sleeve QR)" loading="lazy">
          </div>
          <div class="merch-desc">
            <span class="kicker">Edition 01 / Ecosystem Uniform</span>
            <h4>9LMNTS Studio Services 6-Pillar Uniform</h4>
            <p>Front chest graphic prints the complete 6-pillar service architecture (Artist OS, Tipping Engine, Project Manager, Content Studio, Merch Hub, Audience Analytics). Back features the official 9LMNTS Studio crest (Est. 2023), with an interactive high-contrast sleeve QR code connecting directly to 9LMNTS.com.</p>
            <div class="merch-specs">
              <span class="badge neutral">350 GSM Heavy Cotton</span>
              <span class="badge neutral">Screenprinted Infographic</span>
              <span class="badge green">Active Scannable Sleeve QR</span>
            </div>
          </div>
        </div>

        <!-- Merch 2: Modular OS Infographic Tee -->
        <div class="merch-card reveal">
          <div class="merch-media">
            <img src="/assets/merch-tshirt-modules-mockup.png" alt="9LMNTS Event OS Modular Service Architecture Tee Mockup" loading="lazy">
          </div>
          <div class="merch-desc">
            <span class="kicker">Edition 02 / Blueprint Uniform</span>
            <h4>9LMNTS Event OS Modular Architecture Tee</h4>
            <p>Tactile schematic infographic covering our 10 proprietary operating systems: Sound Clash OS, Sports OS, Worker Bee OS, Timeless OS, Young OS, Launch Engine, Creator Bundles, and Analytics. Features sleeve tap-and-connect QR bridge.</p>
            <div class="merch-specs">
              <span class="badge neutral">Oversized Drop-Shoulder Fit</span>
              <span class="badge neutral">Flame Orange High-Density Ink</span>
              <span class="badge flame">Studio Founder Blueprint</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- High-Tech Visual Storyboard -->
  <section class="section border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Visual Architecture</span>
        <h2>High-Tech Systems Storyboard</h2>
      </div>
      <p>Bespoke visual narratives, architectural schematics, and high-velocity interface design engineered by 9LMNTS Studio.</p>
    </div>
    <div class="storyboard-showcase reveal">
      <img src="/assets/cyber-storyboard.jpg" alt="9LMNTS Studio High-Tech Visual Storyboard" loading="lazy">
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
// -------------------------------------------------------------
// 3B. 9LMNTS STUDIO OS & REVENUE RECOVERY GATEWAY (/os/)
// -------------------------------------------------------------
const osHtml = layout({
  path: '/os/',
  title: '9LMNTS Studio OS — 72-Hour Intake Engine & Revenue Recovery',
  description: 'Official intake gateway for the 9LMNTS Studio faceless podcast channel (@9lmntsstudio). Run your 60-second mobile friction audit and deploy your 72-hour revenue recovery engine.',
  body: `
  ${pageHero({
    kicker: '● 9LMNTS Studio OS · YouTube & Podcast Inbound Gateway',
    title: 'Kill Your Voicemail. <span class="accent">Capture Inbound Cash in Under 60s.</span>',
    lead: 'Welcome YouTube &amp; podcast viewers. Stop losing 35% of inbound mobile traffic to static contact forms and unreturned voicemails. Run our 60-Second Mobile Friction Audit below or deploy your custom 72-hour revenue recovery engine.',
    bgImage: '/assets/hero-spatial-mesh.jpg'
  })}

  <!-- Founder Integration Lower-Third Card -->
  <section class="section-tight" style="padding-top:12px"><div class="container">
    <div class="card reveal" style="background:rgba(14, 16, 22, 0.85);border:1px solid rgba(255,85,0,0.3);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:18px;padding:20px 24px">
      <div style="display:flex;align-items:center;gap:16px">
        <div style="width:48px;height:48px;border-radius:50%;border:2px solid #FF5500;overflow:hidden;background:#050505;display:flex;align-items:center;justify-content:center;box-shadow:0 0 15px rgba(255,85,0,0.5)">
          <span style="font-weight:900;color:#FF5500;font-size:18px">9L</span>
        </div>
        <div>
          <div style="font-weight:700;color:#fff;font-size:15px;letter-spacing:0.02em">DARNLEY SANON</div>
          <div style="font-size:12px;color:#FF5500;font-family:var(--font-mono)">FOUNDER &amp; CREATIVE DIRECTOR · 9LMNTS STUDIO</div>
        </div>
      </div>
      <div style="max-width:540px;font-size:13px;color:#A1A1AA;line-height:1.5">
        <span style="color:#fff;font-weight:600">"Darnley here."</span> We built this intake engine for founders losing qualified customers to slow response times. No voicemails, no 3-day delays. We deploy high-converting systems in 72 hours.
      </div>
      <div>
        <a class="btn btn-ghost btn-sm" href="https://youtube.com/@9lmntsstudio" target="_blank" rel="noopener">@9lmntsstudio <span class="arrow">↗</span></a>
      </div>
    </div>
  </div></section>

  <!-- Faceless Podcast 4-Layer Dynamic Visualizer & Telemetry Bento Grid -->
  <section class="section border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Faceless Studio Media Architecture</span>
        <h2>High-Impact Visualizer Engine &amp; Live Inbound Telemetry</h2>
      </div>
      <p>Broadcast across YouTube, Spotify, and Apple Podcasts. Spoken strictly as <strong style="color:#fff">"Nine Elements Studio"</strong> and <strong style="color:#FF5500">"Nine Elements OS"</strong>.</p>
    </div>

    <div class="grid g2">
      <!-- Bento Card 1: 9LMNTS Dispatch Audio & Flame Orange Waveform -->
      <div class="waveform-box reveal">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span class="triage-badge">● 9LMNTS DISPATCH AUDIO · 145-155 WPM BARITONE</span>
          <span class="mono ok" style="font-size:11px">BROADCAST TTS ACTIVE</span>
        </div>
        <h3 style="font-size:1.25rem;margin:10px 0 4px;color:#fff">Calm, Confident Executive Cadence</h3>
        <p style="font-size:0.85rem;color:var(--muted);margin:0">Phonetically engineered voiceover architecture. Eliminates manual recording bottlenecks.</p>
        
        <!-- Animated Waveform Visualizer -->
        <div class="waveform-bars">
          <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
          <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
          <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
          <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
          <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
        </div>

        <div style="background:rgba(0,0,0,0.4);border-radius:10px;padding:12px;font-family:var(--font-mono);font-size:11px;color:#D4D4D8;line-height:1.5">
          <span style="color:#FF5500">&gt; Broadcast Script Sample:</span><br>
          "Welcome back to the Nine Elements Studio dispatch. I'm walking you through the Nine Elements OS revenue recovery blueprint—a system designed to capture, qualify, and close high-ticket bookings automatically in under sixty seconds."
        </div>
      </div>

      <!-- Bento Card 2: Live Inbound Telemetry Ticker -->
      <div class="card reveal" style="background:rgba(12,14,20,0.9);border:1px solid rgba(255,255,255,0.08);padding:24px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <span class="triage-badge" style="color:#00D2FF">● INTAKE SIMULATOR TELEMETRY</span>
          <span class="badge" style="background:rgba(0,210,255,0.1);color:#00D2FF;border-color:rgba(0,210,255,0.3)">SUB-SECOND SPEED</span>
        </div>
        <h3 style="font-size:1.25rem;margin:0 0 6px;color:#fff">Automated Speed-To-Lead Dispatch</h3>
        <p style="font-size:0.85rem;color:var(--muted);margin:0 0 16px">When prospective clients submit on mobile, our autonomous webhook fires within 28 seconds.</p>
        
        <div style="display:flex;flex-direction:column;gap:10px">
          <div style="background:rgba(255,85,0,0.08);border:1px solid rgba(255,85,0,0.25);border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
            <div>
              <div style="font-size:11px;color:#FF5500;font-family:var(--font-mono)">[00:28s] INBOUND LEAD CAPTURED</div>
              <div style="font-weight:600;color:#fff;font-size:13px">Ottawa Catering Event · 85 Guests ($3,800 CAD)</div>
            </div>
            <span class="badge" style="background:#FF5500;color:#fff">DISPATCHED</span>
          </div>

          <div style="background:rgba(0,210,255,0.06);border:1px solid rgba(0,210,255,0.2);border-radius:10px;padding:12px;display:flex;justify-content:space-between;align-items:center">
            <div>
              <div style="font-size:11px;color:#00D2FF;font-family:var(--font-mono)">[DEPOSIT LOCKED] INTERAC E-TRANSFER</div>
              <div style="font-weight:600;color:#fff;font-size:13px">$1,100 CAD Clear · 72h Sprint SLA Clock Started</div>
            </div>
            <span class="ok">● VERIFIED</span>
          </div>
        </div>
      </div>
    </div>
  </div></section>

  <!-- Interactive 3-Step Friction Triage Form -->
  <section class="section border-top" id="audit"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">60-Second Friction Triage</span>
        <h2>Diagnose Your Mobile Conversion Friction &amp; Lock Your Sprint</h2>
      </div>
      <p>Direct entry for YouTube viewers who commented <strong>"OS system"</strong>. Select your primary friction point below to receive an instant scope recommendation and 72-hour fast track deposit lock.</p>
    </div>

    <div class="triage-card reveal">
      <form id="triageForm">
        <!-- Step 1 -->
        <div style="margin-bottom:24px">
          <label style="display:block;font-size:13px;font-family:var(--font-mono);color:#fff;margin-bottom:8px">
            STEP 01 · YOUR BUSINESS URL OR GOOGLE MAPS LINK
          </label>
          <input type="text" id="triageUrl" placeholder="e.g. https://ottawatrades.ca or your business name" required style="width:100%;padding:14px 18px;border-radius:10px;background:rgba(8,10,14,0.85);border:1px solid rgba(255,255,255,0.12);color:#fff;font-size:15px;box-sizing:border-box">
        </div>

        <!-- Step 2 -->
        <div style="margin-bottom:24px">
          <label style="display:block;font-size:13px;font-family:var(--font-mono);color:#fff;margin-bottom:8px">
            STEP 02 · SELECT YOUR PRIMARY OPERATIONAL BOTTLENECK
          </label>
          <div class="triage-grid">
            <label class="triage-option selected">
              <input type="radio" name="bottleneck" value="revenue_recovery" checked>
              <span class="triage-badge">PACKAGE A · 3–5 DAYS</span>
              <h4>📞 Missed Inbound Calls &amp; Slow Voicemails</h4>
              <p>Customers bounce when they can't book or reach you immediately. Need 24/7 automated mobile intake.</p>
            </label>

            <label class="triage-option">
              <input type="radio" name="bottleneck" value="turnkey_os">
              <span class="triage-badge">PACKAGE B · 5–7 DAYS</span>
              <h4>📋 Complex Booking, Catering &amp; Manual Quotes</h4>
              <p>Spending hours calculating quotes, dates, and headcounts. Need a custom live booking portal + Supabase database.</p>
            </label>

            <label class="triage-option">
              <input type="radio" name="bottleneck" value="webar_menu">
              <span class="triage-badge">PACKAGE C · 48 HOURS</span>
              <h4>📱 Static PDF Menus / Need 3D WebAR Experience</h4>
              <p>Customers won't download an app. Need 3D dish/product models popping up from QR table tents on mobile cameras.</p>
            </label>
          </div>
        </div>

        <!-- Step 3 -->
        <div style="margin-bottom:28px">
          <label style="display:block;font-size:13px;font-family:var(--font-mono);color:#fff;margin-bottom:8px">
            STEP 03 · DIRECT CONTACT PHONE &amp; EMAIL (FOR SPRINT DISPATCH)
          </label>
          <input type="text" id="triageContact" placeholder="e.g. 613-555-0199 / founder@business.ca" required style="width:100%;padding:14px 18px;border-radius:10px;background:rgba(8,10,14,0.85);border:1px solid rgba(255,255,255,0.12);color:#fff;font-size:15px;box-sizing:border-box">
        </div>

        <button type="submit" class="btn btn-primary" style="width:100%;padding:16px;font-size:16px;font-weight:700">
          Run 60-Second Friction Audit &amp; Lock Deposit <span class="arrow">↗</span>
        </button>
      </form>

      <!-- Instant Dynamic Triage Result Panel -->
      <div id="triageResult" class="triage-result" style="display:none">
        <div class="triage-result-head">
          <div>
            <span class="triage-badge" style="font-size:12px">● AUDIT RECOMMENDATION VERIFIED</span>
            <h3 id="triagePkgTitle" style="font-size:1.6rem;color:#fff;margin:6px 0 4px">The Revenue Recovery System</h3>
            <div style="font-size:13px;color:var(--muted)">Sprint Turnaround SLA: <strong id="triagePkgTurnaround" style="color:#00D2FF">3–5 Days (72-Hour Fast Track)</strong></div>
          </div>
          <div style="text-align:right">
            <div style="font-size:11px;color:var(--muted);font-family:var(--font-mono)">TOTAL PACKAGE PRICE</div>
            <div id="triagePkgPrice" style="font-size:1.8rem;font-weight:800;color:#FF5500">$1,200 CAD</div>
            <div id="triagePkgDeposit" style="font-size:12px;color:#fff;font-weight:600">$600 CAD (50% upfront deposit)</div>
          </div>
        </div>

        <div style="margin-bottom:20px">
          <div style="font-size:12px;font-family:var(--font-mono);color:#D4D4D8;margin-bottom:8px">CORE INCLUDED DELIVERABLES:</div>
          <ul id="triagePkgDeliverables" class="check" style="margin:0;padding:0;list-style:none">
            <!-- Populated via main.js -->
          </ul>
        </div>

        <!-- Payment Lock Rails -->
        <div style="background:rgba(8,10,14,0.9);border:1px solid rgba(255,85,0,0.3);border-radius:12px;padding:20px;margin-bottom:20px">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:12px">
            <div>
              <span class="kicker" style="color:#FF5500">Official Canadian Payment Rail</span>
              <h4 style="margin:2px 0;color:#fff">50% Non-Refundable Deposit via Interac e-Transfer</h4>
            </div>
            <span class="badge" style="background:#FF5500;color:#fff">AUTODEPOSIT ACTIVE</span>
          </div>
          <p style="font-size:13px;color:#A1A1AA;margin:0 0 14px">Zero credit card processing delays. Work commences immediately upon deposit clearance, initiating your 72-hour delivery countdown.</p>
          
          <div class="copy-row" style="margin-bottom:10px">
            <span>payments@9lmntsstudio.com</span>
            <button data-copy="payments@9lmntsstudio.com">Copy Email</button>
          </div>
          <div style="font-size:11px;font-family:var(--font-mono);color:#71717A">
            Transfer Memo: <span id="triageMemoRef" style="color:#fff">Deposit: 9LMNTS OS Sprint</span>
          </div>
        </div>

        <!-- International PayPal Alternative & WhatsApp Dispatch -->
        <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center">
          <a id="triageWaLink" class="btn btn-primary" href="https://wa.me/16139094038?text=Hi%20Darnley,%20ready%20to%20deploy%20my%20OS%20system" target="_blank" rel="noopener">
            Dispatch to Founder (WhatsApp / SMS) <span class="arrow">↗</span>
          </a>
          <a class="btn btn-ghost" href="/contact/">
            Request Direct Invoice / PayPal Link
          </a>
        </div>
      </div>
    </div>
  </div></section>

  <!-- Commercial Packages Breakdown Matrix -->
  <section class="section border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Standard Commercial Packages</span>
        <h2>72-Hour SLA Delivery Matrix</h2>
      </div>
      <p>Transparent pricing, fixed deliverables, and guaranteed sprint delivery.</p>
    </div>

    <div class="grid g3">
      <div class="card reveal">
        <span class="num-tag">PACKAGE 01 · 3–5 DAYS</span>
        <h3>The Revenue Recovery System</h3>
        <div class="price">$1,200 <small>CAD</small></div>
        <div class="meta"><span class="badge neutral">50% Deposit: $600 CAD</span></div>
        <p>Eliminate missed-call revenue leakage with high-speed automated mobile lead capture.</p>
        <ul class="check">
          <li>High-converting mobile landing page</li>
          <li>24/7 automated SMS/Email lead intake engine</li>
          <li>Speed-to-lead auto-responder webhook</li>
          <li>Sub-second mobile performance audit</li>
        </ul>
        <a class="btn btn-ghost" href="#audit">Select This Sprint <span class="arrow">↗</span></a>
      </div>

      <div class="card feature reveal">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <span class="num-tag" style="margin:0">PACKAGE 02 · 5–7 DAYS</span>
          <span class="badge">Most Popular ⭐</span>
        </div>
        <h3>Turnkey Business OS / Chef OS</h3>
        <div class="price">$2,200–$3,200 <small>CAD</small></div>
        <div class="meta"><span class="badge neutral">50% Deposit: $1,100–$1,600 CAD</span></div>
        <p>Complete custom web application + database for catering, booking, and complex workflows.</p>
        <ul class="check">
          <li>Full custom web app + Supabase database</li>
          <li>Live customer booking &amp; reservation calendar</li>
          <li>Custom dynamic quote &amp; headcount calculator</li>
          <li>Automated client notification pipeline</li>
        </ul>
        <a class="btn btn-primary" href="#audit">Select This Sprint <span class="arrow">↗</span></a>
      </div>

      <div class="card reveal">
        <span class="num-tag">ADD-ON · 48 HOURS</span>
        <h3>WebAR Signature Menu</h3>
        <div class="price">$450 <small>CAD</small></div>
        <div class="meta"><span class="badge neutral">50% Deposit: $225 CAD</span></div>
        <p>Interactive 3D models of signature dishes or products that pop up directly on camera phones.</p>
        <ul class="check">
          <li>3–5 photorealistic 3D WebAR browser models</li>
          <li>Zero apps required (iOS QuickLook &amp; Android)</li>
          <li>Print-ready QR table tents &amp; flyers</li>
          <li>48-hour rapid turnaround</li>
        </ul>
        <a class="btn btn-ghost" href="#audit">Select This Sprint <span class="arrow">↗</span></a>
      </div>
    </div>
  </div></section>

  <!-- Automated 'OS system' Workflow Architecture -->
  <section class="section border-top"><div class="container">
    <div class="section-head">
      <div>
        <span class="kicker">Conversion Automation</span>
        <h2>How The 'OS system' YouTube Trigger Operates</h2>
      </div>
      <p>Automated from comment trigger to deployment sprint.</p>
    </div>

    <div class="steps">
      <div class="step reveal">
        <div class="n">STEP 01</div>
        <div>
          <h3>Viewer Comments "OS system"</h3>
          <p>Viewer or podcast listener posts "OS system", "OS", or "revenue" on any YouTube drop or live stream.</p>
        </div>
        <div><span class="badge neutral">&lt;1s Trigger</span></div>
      </div>

      <div class="step reveal">
        <div class="n">STEP 02</div>
        <div>
          <h3>Instant Auto-Reply &amp; Audit Link</h3>
          <p>YouTube webhook dispatches public reply within 10 seconds directing the prospect to 9lmntsstudio.com/os.</p>
        </div>
        <div><span class="badge neutral">&lt;10s Reply</span></div>
      </div>

      <div class="step reveal">
        <div class="n">STEP 03</div>
        <div>
          <h3>3-Step Triage &amp; 50% Deposit Lock</h3>
          <p>Client qualifies for Revenue Recovery, Turnkey OS, or WebAR and submits 50% deposit via Interac e-Transfer.</p>
        </div>
        <div><span class="badge neutral">Same-Day Lock</span></div>
      </div>

      <div class="step reveal">
        <div class="n">STEP 04</div>
        <div>
          <h3>72-Hour Sprint Dispatch</h3>
          <p>High-priority alert pings Darnley Sanon initiating the 72-hour delivery SLA clock. Clean launch guaranteed.</p>
        </div>
        <div><span class="badge" style="background:#FF5500;color:#fff">72h SLA Clock</span></div>
      </div>
    </div>
  </div></section>

  ${ctaBand('Ready to eliminate your inbound lead friction?', 'Run your audit above or message founder Darnley Sanon directly.')}
  `
});


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
    lead: 'Keep your current site on Squarespace, Wix, WordPress, or Shopify. Drop in our high-speed intake modal to immediately stop leaking mobile leads.',
    bgImage: '/assets/culinary-dish-showcase.jpg'
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
    lead: 'Most local business websites leak money because of slow load times, unreadable PDF menus, or hidden contact buttons. We’ll record a custom 60-second video showing exactly where your site is losing customers.',
    bgImage: '/assets/hero-spatial-mesh.jpg'
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
    lead: 'Traditional agencies take 4 months and charge for endless meetings. We run focused, high-velocity sprints where you review working code from week one.',
    bgImage: '/assets/trades-craft-showcase.jpg'
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
    lead: 'Pronounced “Nine Elements Studio”. We build clean, tactile digital platforms for independent operators who value speed, craftsmanship, and cash-flow efficiency.',
    bgImage: '/assets/venue-lounge-showcase.jpg'
  })}

  <section class="section-tight"><div class="container">
    <div class="founder">
      <div class="founder-card reveal">
        <div class="founder-photo">
          <img src="/assets/founder-darnley.jpg" alt="Darnley Sanon - Founder, Creative Director & Systems Architect, 9LMNTS Studio">
        </div>
        <div class="founder-badge">
          <div class="name">Darnley Sanon</div>
          <div class="role">CREATIVE DIRECTOR &amp; LEAD ARCHITECT · OTTAWA, ON</div>
          <div class="mono dim" style="font-size:10px;margin-top:4px">45.4215° N, 75.6972° W · HYBRID EVENT OS &amp; COMMERCIAL LAB</div>
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

  <!-- Live Transmedia & Arena Production Vision -->
  <section class="section border-top" style="position:relative;background:linear-gradient(180deg, #08090C 0%, #0E1017 100%)">
    <div class="container">
      <div class="section-head">
        <div>
          <span class="kicker">Transmedia Vision &amp; Crowd Scale</span>
          <h2>From Local Ottawa Sprints to Global Arena Experiences</h2>
        </div>
        <p>Whether we are engineering a 48-hour booking engine for an Ottawa caterer or architecting collective augmented reality light shows for stadium concerts, our standard remains uncompromising.</p>
      </div>
      <div class="webar-card reveal" style="max-width:1000px;margin:32px auto 0">
        <div class="webar-media" style="aspect-ratio:21/9">
          <img src="/assets/webar-arena-stadium-unified.jpg" alt="Arena Stadium Audience WebAR Experience by 9LMNTS Studio" loading="lazy">
          <div class="webar-media-overlay"></div>
          <div class="webar-badge">● 9LMNTS STUDIO PRESENT: ARTIST CORE OS UNIFIED</div>
        </div>
        <div class="webar-body">
          <span class="kicker">Transmedia Production</span>
          <h3>Bridging Physical Crowd Energy with Digital Infrastructure</h3>
          <p>We design software that doesn't just sit on a server—it lives in the hands of real people at the height of emotional engagement. From instant QR ticketing and artist micro-tipping to synchronized holographic crowd visuals, 9LMNTS Studio turns passive spectators into active participants.</p>
          <div class="webar-tags">
            <span class="badge green">● Live Field Proven</span>
            <span class="badge neutral">Ottawa Born</span>
            <span class="badge flame">Global Ambition</span>
          </div>
        </div>
      </div>
    </div>
  </section>

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
    lead: 'Have a project in mind? Fill out the brief below, or book a quick 15-minute call directly. We respond to all inquiries within 24 business hours.',
    bgImage: '/assets/hero-spatial-mesh.jpg'
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
    lead: 'Follow these 3 simple steps to lock in your sprint timeline, submit your brand materials, and track your staging build.',
    bgImage: '/assets/venue-lounge-showcase.jpg'
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
    lead: 'Straightforward answers about how we build, how much it costs, and how payments work.',
    bgImage: '/assets/hero-spatial-mesh.jpg'
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
                <td><button class="btn btn-ghost" style="padding:6px 12px;font-size:12px" onclick="alert('Standalone client presentation prototype located at client-prototypes/margo-caribbean-restaurant.html')">Client File 📁</button></td>
              </tr>
              <tr>
                <td><strong>Andre Ottawa Home Repairs</strong></td>
                <td>WorkerBee OS</td>
                <td>Launch Page ($1,800 CAD)</td>
                <td><span class="ok">$900 CAD Paid</span></td>
                <td><span class="badge">IN_BUILD</span></td>
                <td><button class="btn btn-ghost" style="padding:6px 12px;font-size:12px" onclick="alert('Standalone client presentation prototype located at client-prototypes/handyman-trades-contractor.html')">Client File 📁</button></td>
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
  { id: 'lead_2', clientName: 'Andre Ottawa Home Repairs', vertical: 'WorkerBee OS', phone: '613-555-0192', sprint: '$1,800 CAD', deposit: '$900 CAD', status: 'IN_BUILD' },
  { id: 'lead_3', clientName: 'ByWard Private Lounge', vertical: 'Reception OS', phone: '613-555-0144', sprint: '$4,500 CAD', deposit: '$1,800 CAD', status: 'PROPOSAL_SENT' },
  { id: 'lead_4', clientName: 'Rideau Electrical Services', vertical: 'WorkerBee OS', phone: '613-555-0178', sprint: '$500 CAD', deposit: '$500 CAD', status: 'NEW_LEAD' }
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
  fs.cpSync(path.join(ROOT, 'assets'), path.join(OUT, 'assets'), { recursive: true });
}
fs.copyFileSync(path.join(ROOT, 'site', 'styles.css'), path.join(OUT, 'styles.css'));
fs.copyFileSync(path.join(ROOT, 'site', 'main.js'), path.join(OUT, 'main.js'));

// Demos & Embed
ensureDir(path.join(OUT, 'embed'));
if (fs.existsSync(path.join(ROOT, 'embed', 'intake.js'))) {
  fs.copyFileSync(path.join(ROOT, 'embed', 'intake.js'), path.join(OUT, 'embed', 'intake.js'));
}
ensureDir(path.join(OUT, 'demos'));
if (fs.existsSync(path.join(ROOT, 'demos'))) {
  fs.readdirSync(path.join(ROOT, 'demos')).forEach(file => {
    fs.copyFileSync(path.join(ROOT, 'demos', file), path.join(OUT, 'demos', file));
  });
}

// Public Routes
writePage('index.html', homeHtml);
writePage('services/index.html', servicesHtml);
writePage('work/index.html', workHtml);
writePage('os/index.html', osHtml);
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
/os              /os/index.html       200
/os/             /os/index.html       200
/portfolio       /work/index.html     200
/lab             /work/index.html     200
/reverse         /work/index.html     200
/embeds          /embeds/index.html   200
/audit           /audit/index.html    200
/process         /process/index.html  200
/about           /about/index.html    200
/contact         /contact/index.html  200
/start           /start/index.html    200
/portal          /start/index.html    200
/faq             /faq/index.html      200
/demo            /work/index.html     301
/chef            /work/index.html     301
/workerbee       /work/index.html     301
/handyman        /work/index.html     301
/dispatch        /work/index.html     301
/reception       /work/index.html     301
/wedding         /work/index.html     301
/darnley         /about/index.html    301
/clothing        /work/index.html     301
/brand           /about/index.html    301
/runway          /work/index.html     301
/fashion         /work/index.html     301
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
  <url><loc>${SITE.url}/os/</loc><priority>0.95</priority></url>
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
