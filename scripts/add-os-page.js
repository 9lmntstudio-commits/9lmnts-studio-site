import fs from 'node:fs';
import path from 'node:path';

const file = path.resolve('site/build.mjs');
let content = fs.readFileSync(file, 'utf8');

const target = '// 4. EMBEDS & WIDGET HUB (/embeds/)';

const osHtmlCode = `// -------------------------------------------------------------
// 3B. 9LMNTS STUDIO OS & REVENUE RECOVERY GATEWAY (/os/)
// -------------------------------------------------------------
const osHtml = layout({
  path: '/os/',
  title: '9LMNTS Studio OS — 72-Hour Intake Engine & Revenue Recovery',
  description: 'Official intake gateway for the 9LMNTS Studio faceless podcast channel (@9lmntsstudio). Run your 60-second mobile friction audit and deploy your 72-hour revenue recovery engine.',
  body: \`
  \${pageHero({
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

  \${ctaBand('Ready to eliminate your inbound lead friction?', 'Run your audit above or message founder Darnley Sanon directly.')}
  \`
});

`;

if (!content.includes('const osHtml = layout({')) {
  content = content.replace(target, `${osHtmlCode}\n${target}`);
  console.log('✓ Injected osHtml definition into build.mjs');
}

// Ensure writePage for os
if (!content.includes("writePage('os/index.html', osHtml);")) {
  content = content.replace(
    "writePage('work/index.html', workHtml);",
    "writePage('work/index.html', workHtml);\nwritePage('os/index.html', osHtml);"
  );
  console.log('✓ Added writePage for os/index.html');
}

// Update _redirects
content = content.replace(
  "/os              /work/index.html     200",
  "/os              /os/index.html       200\n/os/             /os/index.html       200"
);

// Update sitemap.xml
if (!content.includes("<url><loc>${SITE.url}/os/</loc><priority>0.95</priority></url>")) {
  content = content.replace(
    "<url><loc>${SITE.url}/work/</loc><priority>0.9</priority></url>",
    "<url><loc>${SITE.url}/work/</loc><priority>0.9</priority></url>\n  <url><loc>${SITE.url}/os/</loc><priority>0.95</priority></url>"
  );
  console.log('✓ Added /os/ to sitemap.xml');
}

fs.writeFileSync(file, content, 'utf8');
console.log('✅ Successfully updated site/build.mjs with /os route!');
