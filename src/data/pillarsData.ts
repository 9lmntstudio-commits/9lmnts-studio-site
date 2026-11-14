export interface UnifiedPillar {
  id: string;
  index: string;
  shortLabel: string;
  title: string;
  culturalRoots: string;
  headline: string;
  summary: string;
  aiActionLabel: string;
  aiWorkflowDetail: string;
  metrics: string[];
  deliverables: string[];
  idealFor: string;
  recommendedTierId: 'spark' | 'flow' | 'cypher';
  recommendedNiche: string;
}

export interface NineElementItem {
  number: string;
  element: string;
  discipline: string;
  businessTranslation: string;
}

export interface PricingTier {
  id: 'spark' | 'flow' | 'cypher';
  code: string;
  name: string;
  badge?: string;
  price: string;
  deposit: string;
  turnaround: string;
  idealClient: string;
  bullets: string[];
  ctaLabel: string;
}

export const UNIFIED_PILLARS: UnifiedPillar[] = [
  {
    id: 'identity',
    index: '01',
    shortLabel: 'Brand Identity',
    title: 'Brand Identity & Visual Storytelling',
    culturalRoots: 'Graffiti (Visual Art) + Street Fashion (Wearables)',
    headline: 'Look unforgettable before you say a word.',
    summary:
      'Custom typography, dish-authentic and product-accurate visuals, high-contrast palettes tailored to your business, and physical-to-digital QR/WebAR packaging.',
    aiActionLabel: 'ORCHESTRATOR // VISUAL ENGINE',
    aiWorkflowDetail:
      'Extracts your business DNA, art-directs high-contrast studio photography on matte stoneware or editorial light, and compiles reusable brand tokens across web, print, and merch.',
    metrics: ['48–72h Visual System', 'Zero Stock Clutter', 'QR / WebAR Ready'],
    deliverables: [
      'Custom wordmark lockup, typography scale & native color tokens',
      'Dish-authentic hospitality menus or crisp streetwear lookbook framing',
      'Social launch graphics + QR table tent / hangtag digital twin integration',
    ],
    idealFor: 'Restaurants, coffee roasters, clothing drops & boutique local brands ready to ditch generic templates.',
    recommendedTierId: 'flow',
    recommendedNiche: 'Ottawa Shawarma / QSR',
  },
  {
    id: 'interactive',
    index: '02',
    shortLabel: 'Websites & Stages',
    title: 'Interactive Websites & Live Stages',
    culturalRoots: "DJing (Flow & Mixing) + Breakin' (Kinetic Motion)",
    headline: 'Websites that move, engage & convert faster.',
    summary:
      'Mobile-first storefronts engineered around your brand palette, interactive click-to-order menus replacing clunky PDFs, plus 8-contender Sound Clash & event battle arenas.',
    aiActionLabel: 'ORCHESTRATOR // STAGE ARCHITECT',
    aiWorkflowDetail:
      'Mixes smooth 60fps scroll stages, interactive product swatches, and mobile-first thumb zones while isolating each client brand in its own native light, warm, or cyber colorway.',
    metrics: ['98+ Mobile Speed', 'Zero PDF Menus', 'Sound Clash OS Sync'],
    deliverables: [
      'Responsive multi-stage React + Tailwind web experience hosted on global edge',
      'Interactive menu builders, flavour switchers, or lookbook cart drawers',
      'Optional Sound Clash OS / Sports / Pitch Battle 8-contender live arena modules',
    ],
    idealFor: 'Business owners losing 40%+ mobile visitors to slow brochure sites, PDF menus, or confusing booking links.',
    recommendedTierId: 'flow',
    recommendedNiche: 'Specialty Coffee / Cafe',
  },
  {
    id: 'automation',
    index: '03',
    shortLabel: 'AI Lead Engines',
    title: 'AI Automation & 24/7 Lead Capture',
    culturalRoots: 'MCing (Narrative) + Street Language (Chat) + Beatboxing (Voice) + Knowledge of Self',
    headline: 'Answer, qualify & book every customer automatically.',
    summary:
      '60-second Mobile Friction Audits, bilingual EN/FR/Kreyol AI chat & voice concierges, Instagram/WhatsApp keyword triggers, and instant quote follow-ups.',
    aiActionLabel: 'ORCHESTRATOR // LEAD CONCIERGE',
    aiWorkflowDetail:
      'Routes every DM, website inquiry, or catering lead in under 30 seconds — answering pricing FAQs in natural human voice, collecting guest counts, and booking calls onto your calendar.',
    metrics: ['<30s Lead Reply', 'EN / FR / Kreyol', 'IG & WhatsApp Triggers'],
    deliverables: [
      'Instant Speed-to-Lead intake forms with webhook alerts to SMS, Email & CRM',
      '1-word social funnel triggers (DM "MENU", "CLASH", or "VIP") wired to automated replies',
      'Dedicated Brand Voice AI assistant trained exclusively on your hours, menu & pricing',
    ],
    idealFor: 'Owners tired of missing DMs, catering leads, and appointment calls while running daily operations.',
    recommendedTierId: 'cypher',
    recommendedNiche: 'Local Services & Trades',
  },
  {
    id: 'commerce',
    index: '04',
    shortLabel: 'Business-in-a-Box OS',
    title: 'Owner Command Center & 0%-Fee Payments',
    culturalRoots: 'Entrepreneurialism (Direct Trade & Sovereign Rails)',
    headline: 'Keep every booking, deposit & dollar direct.',
    summary:
      'Turnkey ordering, catering & event ticketing powered natively by PayPal Complete Payments (PayPal, Pay Later 4x, Apple Pay, Google Pay, Cards) with zero middleman app fees.',
    aiActionLabel: 'ORCHESTRATOR // COMMERCE RAILS',
    aiWorkflowDetail:
      'Calculates dynamic catering deposits or cart totals, triggers 1-tap PayPal / Apple Pay checkout on your website, and logs verified orders cleanly for your kitchen or fulfillment team.',
    metrics: ['0% App Commission', 'PayPal + Pay Later 4x', 'Apple Pay & Cards'],
    deliverables: [
      'Direct PayPal Complete Payments storefront checkout with 4x Pay Later support',
      'Automated 50% catering deposit calculators, drop timers & VIP pass checkouts',
      'Clean Owner Command view tracking revenue, leads, and fulfillment status without bloat',
    ],
    idealFor: 'Operators paying 20–30% commissions to third-party delivery apps or juggling manual e-Transfers and spreadsheets.',
    recommendedTierId: 'cypher',
    recommendedNiche: 'Streetwear & Apparel',
  },
];

export const NINE_ELEMENTS_MAP: NineElementItem[] = [
  {
    number: '01',
    element: 'Graffiti',
    discipline: 'Visual Identity & Design Systems',
    businessTranslation: 'Bold logos, bespoke colour tokens, menus, and high-contrast visual authority.',
  },
  {
    number: '02',
    element: 'DJing',
    discipline: 'Interactive Flow & Live Arenas',
    businessTranslation: 'Smooth navigation pacing, live Sound Clash brackets, and real-time hype meters.',
  },
  {
    number: '03',
    element: "Breakin'",
    discipline: 'Kinetic Motion & 3D Staging',
    businessTranslation: 'Hardware-accelerated micro-interactions, scroll stories, and 3D product reveals.',
  },
  {
    number: '04',
    element: 'MCing',
    discipline: 'Copywriting & Brand Storytelling',
    businessTranslation: 'Clear business-owner headlines that explain your value in under 5 seconds.',
  },
  {
    number: '05',
    element: 'Beatboxing',
    discipline: 'Voice AI & Audio Cues',
    businessTranslation: 'Natural voice receptionists, acoustic UI feedback, and multilingual audio support.',
  },
  {
    number: '06',
    element: 'Street Fashion',
    discipline: 'Digital Lookbooks & Smart Merch',
    businessTranslation: 'Shoppable apparel capsules, QR-enabled garments, and tactile packaging systems.',
  },
  {
    number: '07',
    element: 'Street Language',
    discipline: 'Natural Chat & DM Funnels',
    businessTranslation: 'Authentic Instagram, WhatsApp & SMS bots that speak like your best staff member.',
  },
  {
    number: '08',
    element: 'Entrepreneurialism',
    discipline: 'Direct Checkouts & Cashless Rails',
    businessTranslation: '0%-commission PayPal Complete Payments, 50% deposit automation & ticketing.',
  },
  {
    number: '09',
    element: 'Knowledge of Self',
    discipline: 'Autonomous Owner Second Brain',
    businessTranslation: 'Centralized Command Center connecting bookings, analytics & daily executive ops.',
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'spark',
    code: 'TIER 01 // DROP-IN OR EXPRESS',
    name: 'SPARK',
    price: '$500 CAD',
    deposit: '$250 CAD (50% Deposit)',
    turnaround: '48-Hour Delivery',
    idealClient: 'Existing websites needing instant conversion power',
    bullets: [
      'Express Single-Offer Landing Page OR Modular Booking / Catering Calculator Widget embedded into your existing site',
      'Instant webhook lead notifications via SMS & Email',
      '60-Second Mobile Friction Audit + speed fixes included',
    ],
    ctaLabel: 'Launch SPARK ($500)',
  },
  {
    id: 'flow',
    code: 'TIER 02 // MOST POPULAR',
    name: 'FLOW',
    badge: 'Most Popular',
    price: '$1,500 – $2,200 CAD',
    deposit: '$750 – $1,100 CAD (50% Deposit)',
    turnaround: '3–7 Day Sprint',
    idealClient: 'Restaurants, cafés, streetwear drops & local services',
    bullets: [
      'Custom Brand Chameleon website built in your authentic colour palette (zero templates)',
      'Native PayPal Complete Payments (PayPal, Pay Later 4x, Apple Pay & Cards · 0% agency fee)',
      'Interactive menu/catalog switcher + automated AI lead intake & local SEO schema',
    ],
    ctaLabel: 'Book FLOW Sprint',
  },
  {
    id: 'cypher',
    code: 'TIER 03 // FLAGSHIP OS',
    name: 'CYPHER',
    price: '$3,000 – $5,000 CAD',
    deposit: '$1,500 – $2,500 CAD (50% Deposit)',
    turnaround: '10–14 Day Build',
    idealClient: 'Multi-location brands, flagship creators & live event promoters',
    bullets: [
      'Full Business-in-a-Box OS with database dashboard, client portal & multi-page UX',
      'Custom 24/7 AI Voice / DM Concierge trained on your pricing, hours & inventory',
      'Optional Sound Clash Arena, WebAR merch unlock ($450 add-on) & full design system',
    ],
    ctaLabel: 'Reserve CYPHER OS',
  },
];
