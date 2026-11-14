export interface ServicePill {
  id: string;
  label: string;
  focusArea: string;
}

export interface LivePlatform {
  id: 'soundclash' | 'artist';
  code: string;
  name: string;
  tagline: string;
  url: string;
  badge: string;
  image: string;
  summary: string;
  highlights: string[];
  idealFor: string;
}

export interface CulturalElementItem {
  number: string;
  name: string;
  craft: string;
  agencyOutcome: string;
  isAiMultiplier?: boolean;
}

export interface CorePillarItem {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioCase {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  outcomes: string[];
  recommendedTier: 'flow' | 'beat' | 'cypher';
  nichePreset: string;
}

export interface AgencyPackage {
  id: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
  name: string;
  tagline: string;
  price: string;
  deposit: string;
  timeline: string;
  featured?: boolean;
  bullets: string[];
}

export const STUDIO_CONTACT = {
  founder: 'Darnley Sanon',
  role: 'Founder & Principal Creative Director',
  city: 'Ottawa · Gatineau · Global Remote',
  email: '9lmntstudio@gmail.com',
  phoneDisplay: '(613) 400-9691',
  phoneHref: 'tel:6134009691',
  webhookUrl: 'https://loabrain.app.n8n.cloud/webhook/scraper-intake',
};

export const HERO_SERVICE_PILLS: ServicePill[] = [
  { id: 'ui', label: 'UI', focusArea: 'Visual Identity & UI/UX' },
  { id: 'ux', label: 'UX', focusArea: 'Website Flow & Conversion UX' },
  { id: 'branding', label: 'Branding', focusArea: 'Full Brand System & Story' },
  { id: 'web-design', label: 'Web Design', focusArea: 'Custom Agency Landing Page' },
  { id: 'development', label: 'Development', focusArea: 'Fast Responsive Launch' },
  { id: 'content', label: 'Content & Creative', focusArea: 'Art Direction & Copywriting' },
  { id: 'marketing', label: 'Marketing', focusArea: 'Booking & Lead Funnels' },
  { id: 'ai-systems', label: 'AI Systems', focusArea: 'Practical AI & DM Concierge' },
];

export const LIVE_SAAS_PLATFORMS: LivePlatform[] = [
  {
    id: 'soundclash',
    code: '01',
    name: 'SoundClash OS',
    tagline: 'Live Competition & Event Arena Platform',
    url: 'https://clash.9lmntsstudio.com',
    badge: 'Live & Published Today',
    image: '/assets/screenshot-sound-clash.png',
    summary:
      'Turn any sound clash, DJ battle, pitch night, or live showcase into an interactive crowd experience with 8-contender tournament brackets, QR mobile voting, live hype meters, and VIP passes.',
    highlights: [
      'Real-time crowd QR voting & bracket progression',
      'Live hype tracking & VIP table / drink gifting flows',
      'Published at clash.9lmntsstudio.com — ready to use today',
    ],
    idealFor: 'Event promoters, venues, festival organizers & live culture hosts',
  },
  {
    id: 'artist',
    code: '02',
    name: 'Artist OS',
    tagline: 'Always-On Creator Flagship & Music Hub',
    url: 'https://artist.9lmntsstudio.com',
    badge: 'Live & Published Today',
    image: '/assets/event-os-stage.png',
    summary:
      'A sleek permanent home for independent artists, producers, and touring creators to showcase releases, sell merch and VIP experiences, share interactive stems, and grow their direct audience.',
    highlights: [
      'Release showcase, tour schedule & direct fan capture',
      'Merch drops & QR-connected studio storytelling',
      'Published at artist.9lmntsstudio.com — ready to use today',
    ],
    idealFor: 'Recording artists, producers, performers & creative collectives',
  },
];

export const CULTURAL_ELEMENTS: CulturalElementItem[] = [
  {
    number: '01',
    name: 'DJing',
    craft: 'Flow & Pacing',
    agencyOutcome: 'Shapes how smoothly visitors move from curiosity to booking without friction.',
  },
  {
    number: '02',
    name: 'MCing',
    craft: 'Voice & Narrative',
    agencyOutcome: 'Clear, human messaging that explains what you do in under five seconds.',
  },
  {
    number: '03',
    name: 'Breaking',
    craft: 'Kinetic Energy',
    agencyOutcome: 'Responsive motion and tactile interactions that keep pages feeling alive.',
  },
  {
    number: '04',
    name: 'Graffiti',
    craft: 'Visual Authority',
    agencyOutcome: 'Bold bespoke typography, custom color identity, and unforgettable visuals.',
  },
  {
    number: '05',
    name: 'Beatboxing',
    craft: 'Rhythm & Audio',
    agencyOutcome: 'Responsive audio cues, voice workflows, and crisp cadence across touchpoints.',
  },
  {
    number: '06',
    name: 'Street Fashion',
    craft: 'Physical-to-Digital',
    agencyOutcome: 'Editorial styling, merch lookbooks, and scannable QR garments.',
  },
  {
    number: '07',
    name: 'Language',
    craft: 'Human Dialogue',
    agencyOutcome: 'Natural EN, FR & Kreyòl chat and inquiry flows that feel like real hospitality.',
  },
  {
    number: '08',
    name: 'Knowledge',
    craft: 'Founder Clarity',
    agencyOutcome: 'Straightforward analytics and clean structure with zero confusing fluff.',
  },
  {
    number: '09',
    name: 'Entrepreneurship',
    craft: 'Direct Revenue',
    agencyOutcome: 'Bookings, 50% deposits, and PayPal/Interac flows built to pay you directly.',
  },
  {
    number: '10',
    name: '10th Element: Practical AI',
    craft: 'Understand · Design · Refine · Launch',
    agencyOutcome:
      'Instead of handing you complex AI software to figure out alone, we weave practical AI quietly behind the scenes to prototype faster and automate follow-ups.',
    isAiMultiplier: true,
  },
];

export const CORE_PILLARS: CorePillarItem[] = [
  {
    number: '01',
    title: 'Authenticity',
    description: 'Designs rooted in your real story and heritage — never cookie-cutter templates.',
  },
  {
    number: '02',
    title: 'Innovation',
    description: 'Modern creative direction paired seamlessly with thoughtful, behind-the-scenes AI.',
  },
  {
    number: '03',
    title: 'Excellence',
    description: 'Obsessive focus on visual hierarchy, mobile speed, and effortless booking flow.',
  },
];

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: 'hospitality',
    category: 'Hospitality & Dining',
    title: 'Culinary Flagship & Catering Ordering',
    subtitle: 'Hospitality Concept · Direct Ordering & 50% Catering Deposits',
    image: '/assets/culinary-dish-showcase.jpg',
    description:
      'Replacing slow PDF restaurant menus with authentic on-plate photography, mobile-first browsing, and instant PayPal / Interac 50% catering deposit requests.',
    outcomes: [
      'Dish-authentic editorial menu presentation',
      '0%-commission direct pickup & event inquiry flow',
      'Mobile-first speed designed for hungry diners',
    ],
    recommendedTier: 'flow',
    nichePreset: 'Restaurant / Hospitality & Catering',
  },
  {
    id: 'roastery',
    category: 'Café & Local Brands',
    title: 'Specialty Coffee & Roastery Storefront',
    subtitle: 'Artisan Beverage Brand · Mobile Morning Ordering',
    image: '/assets/crema-pour.jpg',
    description:
      'Bright studio light framing tailored around beverage craft, clean flavour selection, wholesale inquiries, and repeat neighborhood pickup orders.',
    outcomes: [
      'Brand-native daylight aesthetic tailored to craft coffee',
      'One-tap wholesale & event espresso bar inquiry',
      'Zero developer jargon — simple for any customer',
    ],
    recommendedTier: 'flow',
    nichePreset: 'Specialty Coffee / Cafe Brand',
  },
  {
    id: 'merch',
    category: 'Apparel & Merch',
    title: 'Wearable Studio Merch & QR Experience',
    subtitle: 'Fashion & Physical-Digital Bridge · Sleeve QR Launch',
    image: '/assets/merch-tshirt-modules-mockup.png',
    description:
      'Custom studio apparel uniting streetwear silhouette with scannable sleeve QR identity that opens your digital lookbook or portfolio in a single phone scan.',
    outcomes: [
      'Direct physical-to-digital QR customer gateway',
      'High-contrast editorial lookbook framing',
      'Built for capsule drops & live pop-up activations',
    ],
    recommendedTier: 'beat',
    nichePreset: 'Fashion / Apparel & Merch Brand',
  },
  {
    id: 'arenas',
    category: 'Live Event Systems',
    title: 'SoundClash & Live Showcase Portals',
    subtitle: 'Published SaaS Ecosystem · Crowd Engagement',
    image: '/assets/screenshot-sound-clash.png',
    description:
      'Built once and already live today — connecting venues, music events, and touring creators to interactive brackets, voting, and artist flagships.',
    outcomes: [
      'Already published at clash.9lmntsstudio.com & artist.9lmntsstudio.com',
      'Zero wait to test or deploy for upcoming shows',
      'Optional custom agency skinning for sponsors & festivals',
    ],
    recommendedTier: 'cypher',
    nichePreset: 'Event Promoter / Sound Clash / Creator',
  },
];

export const AGENCY_PACKAGES: AgencyPackage[] = [
  {
    id: 'flow',
    name: 'Flow Sprint',
    tagline: 'Best for local businesses & fast launches',
    price: '$1,500 CAD',
    deposit: '$750 CAD (50% Deposit)',
    timeline: '5–7 Days',
    bullets: [
      'Focused high-converting agency website in your authentic brand style',
      'Mobile-first layout with clear story & customer booking drawer',
      'Direct Interac e-Transfer & PayPal checkout readiness (0% app fee)',
      'Fast domain launch + direct collaboration with Darnley',
    ],
  },
  {
    id: 'beat',
    name: 'Beat Sprint',
    tagline: 'Most popular for growing brands & hospitality',
    price: '$3,000 CAD',
    deposit: '$1,500 CAD (50% Deposit)',
    timeline: '1–2 Weeks',
    featured: true,
    bullets: [
      'Everything in Flow Sprint, expanded up to 10 tailored sections/pages',
      'Complete custom brand identity system, typography & photography art direction',
      'Interactive menu, showcase tabs, or automated inquiry workflow',
      'Search-ready structure & post-launch handover walkthrough',
    ],
  },
  {
    id: 'cypher',
    name: 'Cypher OS',
    tagline: 'Full flagship experience & custom AI systems',
    price: '$5,000 CAD',
    deposit: '$2,500 CAD (50% Deposit)',
    timeline: '2–3 Weeks',
    bullets: [
      'End-to-end UX strategy, bespoke UI system & interactive database workflows',
      'Custom AI inquiry concierge tuned to your hours, pricing & bilingual tone',
      'Multi-location catering, ticketing, or SoundClash / Artist OS integration',
      'Priority creative direction & dedicated launch support',
    ],
  },
];

export const EXPRESS_MODAL_PACKAGES: AgencyPackage[] = [
  {
    id: 'spark',
    name: 'Spark Drop-In',
    tagline: 'Add booking or visual refresh to an existing site',
    price: '$500 CAD',
    deposit: '$250 CAD (50% Deposit)',
    timeline: '48 Hours',
    bullets: ['Modular booking modal or single landing upgrade'],
  },
  ...AGENCY_PACKAGES,
  {
    id: 'custom',
    name: 'Custom Scale',
    tagline: 'Tailored multi-brand or event partnership scope',
    price: 'Custom Quote',
    deposit: 'Agreed Scope',
    timeline: 'Flexible',
    bullets: ['Bespoke roadmap scoped directly with Darnley'],
  },
];
