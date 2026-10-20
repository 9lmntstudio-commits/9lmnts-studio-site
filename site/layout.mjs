// Shared layout + business constants (single source of truth for the site)
export const SITE = {
  name: '9LMNTS Studio',
  url: 'https://9lmntsstudio.com',
  email: '9lmntstudio@gmail.com',
  instagram: 'https://instagram.com/9lmntsstudio',
  city: 'Ottawa, Ontario, Canada',
  founder: 'Darnley Sanon',
  legalName: '9LMNTS Studio (a registered Ontario business name)',
  updated: 'October 20, 2026',
};

export const PACKAGES = [
  {
    id: 'quick-fix', name: 'Quick Fix', price: 'from $500', terms: '100% upfront', time: '2–5 days',
    for: 'You have a website, it just isn’t bringing in customers.',
    items: ['Booking or inquiry widget added to your current site', 'Sticky click-to-call / text bar for mobile', 'PDF menu or price list turned into a fast mobile page', 'Speed + Google basics fix', '1 revision round'],
  },
  {
    id: 'launch-page', name: 'Launch Page', price: '$1,800', terms: '50% to start · 50% before launch', time: '1–2 weeks',
    for: 'New business or no website yet. Get online fast and start taking inquiries.',
    items: ['1 high-converting page, written for you', 'Inquiry form with instant email alert', 'Google Business Profile setup', 'Mobile-first, fast, SEO basics', 'Domain + hosting setup', '2 revision rounds'],
  },
  {
    id: 'growth-website', name: 'Growth Website', price: '$4,500', terms: '40% · 30% · 30%', time: '3–4 weeks', featured: true,
    for: 'Established local business ready to look premium and fill the calendar.',
    items: ['5–7 custom pages + copywriting', 'Online booking or quote-request system', 'Automatic confirmation + follow-up emails', 'Optional card deposits via Stripe', 'Local SEO, analytics, Google Business', '2 revision rounds · 30 days support'],
  },
  {
    id: 'signature-system', name: 'Signature System', price: 'from $8,500', terms: '40% · 30% · 30%', time: '5–8 weeks',
    for: 'Multi-service or multi-location brands that need custom booking and payments.',
    items: ['Custom design system + brand polish', 'Booking + deposits + client portal', 'Customer database & automations', 'Integrations (calendar, POS, CRM, SMS)', 'Training + handoff docs', '3 revision rounds · 60 days support'],
  },
];

export const CARE = [
  { name: 'Care Essential', price: '$199/mo', items: ['Hosting & domain management', 'Security + uptime monitoring', 'Monthly backups', 'Up to 1 hour of edits / month'] },
  { name: 'Care Growth', price: '$449/mo', items: ['Everything in Essential', 'Up to 3 hours of edits / month', 'Monthly performance report', 'Google Business posts (2/mo)', 'Priority response (1 business day)'] },
];

const NAV = [
  ['/services/', 'Services'],
  ['/work/', 'Work'],
  ['/process/', 'Process'],
  ['/audit/', 'Free Audit'],
  ['/about/', 'About'],
  ['/contact/', 'Contact'],
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export function layout({ path, title, description, body, noindex = false }) {
  const fullTitle = path === '/' ? `${SITE.name} — ${title}` : `${title} | ${SITE.name}`;
  const canonical = SITE.url + path;
  const nav = NAV.map(([href, label]) =>
    `<li><a href="${href}"${path.startsWith(href) ? ' aria-current="page"' : ''}>${label}</a></li>`).join('');
  const schema = path === '/' ? `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'ProfessionalService', name: SITE.name, alternateName: 'Nine Elements Studio',
    url: SITE.url, email: SITE.email, image: SITE.url + '/assets/og-image.png', logo: SITE.url + '/assets/logo.png',
    areaServed: ['Ottawa', 'Gatineau', 'Ontario', 'Canada'], address: { '@type': 'PostalAddress', addressLocality: 'Ottawa', addressRegion: 'ON', addressCountry: 'CA' },
    founder: { '@type': 'Person', name: SITE.founder }, priceRange: '$500–$8,500+ CAD', sameAs: [SITE.instagram],
  })}</script>` : '';

  return `<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.url}/assets/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#08090C">
<link rel="icon" href="/assets/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&family=Syne:wght@700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
${schema}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="nav-wrap">
  <nav class="nav" aria-label="Main">
    <a class="nav-logo" href="/" aria-label="9LMNTS Studio home"><img src="/assets/logo.png" alt="9LMNTS Studio" width="120" height="34"></a>
    <button class="nav-toggle" aria-expanded="false" aria-controls="nav-links">Menu</button>
    <ul class="nav-links" id="nav-links">${nav}<li class="mobile-only"><a href="/contact/">Book a call</a></li></ul>
    <a class="btn btn-primary btn-pill desktop" href="/contact/">Get Started <span class="arrow">↗</span></a>
  </nav>
</div>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="container">
    <div class="foot-grid">
      <div>
        <img src="/assets/logo.png" alt="9LMNTS Studio" width="140" height="40" style="height:40px;width:auto;margin-bottom:16px">
        <p style="max-width:320px">Websites that book your customers for you. Designed and built in Ottawa for local service businesses.</p>
        <p class="mono dim" style="font-size:12px">Pronounced “Nine Elements Studio”</p>
      </div>
      <div><h4>Studio</h4><ul>
        <li><a href="/services/">Services &amp; Pricing</a></li><li><a href="/work/">Work</a></li><li><a href="/process/">Process</a></li>
        <li><a href="/embeds/">Website Add-ons</a></li><li><a href="/about/">About</a></li><li><a href="/faq/">FAQ</a></li></ul></div>
      <div><h4>Clients</h4><ul>
        <li><a href="/audit/">Free Website Audit</a></li><li><a href="/contact/">Book a Call</a></li><li><a href="/start/">Client Onboarding</a></li>
        <li><a href="mailto:${SITE.email}">${SITE.email}</a></li><li><a href="${SITE.instagram}" rel="noopener">Instagram</a></li></ul></div>
      <div><h4>Legal</h4><ul>
        <li><a href="/legal/terms/">Terms of Service</a></li><li><a href="/legal/privacy/">Privacy Policy</a></li>
        <li><a href="/legal/payment-terms/">Payment &amp; Refund Terms</a></li><li><a href="/legal/cookies/">Cookie Notice</a></li>
        <li><a href="/legal/accessibility/">Accessibility</a></li></ul></div>
    </div>
    <div class="foot-bottom">
      <span>© <span data-year>2026</span> 9LMNTS Studio. Registered Ontario business name. All rights reserved.</span>
      <span>Ottawa, Canada · Prices in CAD</span>
    </div>
  </div>
</footer>
<script src="/main.js" defer></script>
</body>
</html>`;
}

export function pageHero({ kicker, title, lead, extra = '' }) {
  return `<section class="page-hero"><div class="container">
  <span class="eyebrow"><span class="dot"></span>${kicker}</span>
  <h1>${title}</h1>
  ${lead ? `<p class="lead">${lead}</p>` : ''}
  ${extra}
</div></section>`;
}

export function ctaBand(title = 'Ready for a website that books customers?', text = 'Book a free 15-minute call. You’ll leave with a clear plan and a fixed price — whether you hire us or not.') {
  return `<section class="section-tight"><div class="container"><div class="cta-band reveal">
  <div><span class="kicker">Next step</span><h2>${title}</h2><p>${text}</p></div>
  <div class="cta-actions">
    <a class="btn btn-primary" href="/contact/">Book a free call <span class="arrow">↗</span></a>
    <a class="btn btn-ghost" href="/audit/">Get a free website audit</a>
  </div>
</div></div></section>`;
}

export function packageCard(p, i) {
  return `<article class="card${p.featured ? ' feature' : ''} reveal">
  <span class="num-tag">0${i + 1} / ${p.time.toUpperCase()}</span>
  ${p.featured ? '<span class="badge" style="position:absolute;top:24px;right:24px">Most popular</span>' : ''}
  <h3>${p.name}</h3>
  <div class="price">${p.price} <small>CAD</small></div>
  <p style="min-height:3.2em">${p.for}</p>
  <div class="meta"><span class="badge neutral">${p.terms}</span></div>
  <ul class="check">${p.items.map((x) => `<li>${x}</li>`).join('')}</ul>
  <a class="btn ${p.featured ? 'btn-primary' : 'btn-ghost'}" href="/contact/?package=${p.id}">Start with ${p.name}</a>
</article>`;
}
