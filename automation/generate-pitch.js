#!/usr/bin/env node
/**
 * 9LMNTS Studio — Zero-Free-Work Deposit-First Pitch & Gateway Generator (v2)
 * Enforces:
 *   1. ZERO FREE WORK: Never constructs public unpaid demo URLs (demo-client.html, etc.).
 *      Routes prospects to live flagship gateway (https://9lmntsstudio.com/#gateways),
 *      live published SaaS (clash.9lmntsstudio.com / artist.9lmntsstudio.com),
 *      and private local concept slide packs (assets/<slug>/outreach_slides/).
 *   2. TWO-LAYER PAYMENT ARCHITECTURE:
 *      - B2B Studio Kickoff: 1-Page Agreement + 50% Deposit via Interac e-Transfer
 *        to 9lmntstudio@gmail.com (1 's') or PayPal Business Invoice.
 *      - B2C Client Storefront: PayPal Complete Payments (PayPal, Pay Later 4x,
 *        Cards, Apple Pay, Google Pay) at 0% agency commission.
 *
 * Usage:
 *   node automation/generate-pitch.js --client "Fishy's Original Jerk" --vertical "chef" --tier "flow" --phone "(613) 834-6226" --lang "en"
 *   node automation/generate-pitch.js --client "IVONA Restaurant & Bar" --vertical "dual" --tier "cypher" --phone "(819) 205-4866" --lang "fr"
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
function getArg(key, defaultVal) {
  const idx = args.indexOf(`--${key}`);
  if (idx !== -1 && args[idx + 1]) {
    return args[idx + 1];
  }
  return defaultVal;
}

function slugify(text) {
  return String(text || 'client')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 32);
}

const clientName = getArg('client', 'Commercial Partner');
const vertical = getArg('vertical', 'chef').toLowerCase(); // chef, dual, clash, artist, modular
const requestedTier = getArg('tier', '').toLowerCase();
const phone = getArg('phone', 'N/A');
const lang = getArg('lang', 'en').toLowerCase(); // en, fr, kreyol
const gatewayDomain = getArg('domain', 'https://9lmntsstudio.com').replace(/\/+$/, '');

const SPRINT_TIERS = {
  spark: { label: 'Spark Drop-In ($500 CAD)', deposit: '$250 CAD', turnaround: '48 Hours' },
  flow: { label: 'Flow Sprint ($1,500 CAD)', deposit: '$750 CAD', turnaround: '5–7 Days' },
  beat: { label: 'Beat Sprint ($3,000 CAD)', deposit: '$1,500 CAD', turnaround: '1–2 Weeks' },
  cypher: { label: 'Cypher OS ($5,000 CAD)', deposit: '$2,500 CAD', turnaround: '2–3 Weeks' },
};

let osName = 'Chef OS & Direct Ordering Engine';
let selectedTierKey = 'flow';
let keyProblem = '30% third-party delivery app commissions and unpaid phone/DM catering quote tag';
let keySolution = '0%-agency-fee PayPal Complete Payments (PayPal, Pay Later 4x, Apple Pay, Google Pay, Cards) plus automated 50% online catering deposits';
let destinationUrl = `${gatewayDomain}/#gateways`;

if (vertical.includes('dual') || vertical.includes('lounge')) {
  osName = 'Chef OS + Live SoundClash OS Dual-Pitch Arena';
  selectedTierKey = 'cypher';
  keyProblem = '30% delivery fees, unpaid VIP booth holds, and quiet mid-week lounge nights';
  keySolution = 'PayPal 0%-fee VIP/catering deposits paired with SoundClash OS (8-DJ QR battle brackets & $50 Power Hype Jumbotron shoutouts)';
  destinationUrl = `${gatewayDomain}/#gateways (plus live SoundClash OS at https://clash.9lmntsstudio.com)`;
} else if (vertical.includes('clash') || vertical.includes('event')) {
  osName = 'SoundClash OS Live Tournament Platform';
  selectedTierKey = 'cypher';
  keyProblem = 'flat single-DJ nights, Eventbrite ticketing cuts, and passive bar crowds';
  keySolution = '8-DJ sudden-death QR brackets, zero app downloads, 1-Tap Apple/Google Pay voting & $1,500 Sponsor Stage Dominance';
  destinationUrl = 'https://clash.9lmntsstudio.com';
} else if (vertical.includes('artist') || vertical.includes('music')) {
  osName = 'Artist OS & $250/Stem 0%-Fee Vault';
  selectedTierKey = 'flow';
  keyProblem = '$0.003/stream payouts and dead-end Linktree traffic';
  keySolution = '24-bit/96kHz stem licensing at $250/stem (0% studio cut), Tour Planner, Band Splits Ledger & Tip QR';
  destinationUrl = 'https://artist.9lmntsstudio.com';
} else if (vertical.includes('mod') || vertical.includes('spark') || vertical.includes('500')) {
  osName = 'Spark Drop-In Booking & Catering Modal';
  selectedTierKey = 'spark';
  keyProblem = 'static website bouncing mobile visitors without capturing instant bookings';
  keySolution = '48-hour modular intake widget routing leads and 50% deposit requests straight to your phone';
  destinationUrl = `${gatewayDomain}/#gateways`;
}

if (requestedTier && SPRINT_TIERS[requestedTier]) {
  selectedTierKey = requestedTier;
}

const tier = SPRINT_TIERS[selectedTierKey];
const clientSlug = slugify(clientName);
const privateConceptPackPath = `assets/${clientSlug}/outreach_slides/`;

let voiceScript = '';
let textPitch = '';

if (lang === 'kreyol') {
  voiceScript = `Sak pase ekip ${clientName}! Se Darnley Sanon nan 9LMNTS Studio isit nan Ottawa — (613) 400-9691. Nou prepare yon seri imaj konsèp prive (${osName}) pou nou elimine ${keyProblem} grasa ${keySolution}. Gade vitrin nou an ak de opsyon yo sou ${destinationUrl}. Si nou vle lanse nan ${tier.turnaround} ak ${tier.label}, nou jis siyen kontra 1 paj la epi voye depo 50% (${tier.deposit}) sou Interac nan 9lmntstudio@gmail.com oswa PayPal Invoice.`;
  textPitch = `Sak pase ekip ${clientName}! 🔥 Se Darnley Sanon nan 9LMNTS Studio. Nou prepare yon pakèt konsèp prive (${osName}) nan ${privateConceptPackPath} — ZERO lyen piblik anvan depo.\n\nLi elimine ${keyProblem} ak ${keySolution}.\n• Pake: ${tier.label} (${tier.turnaround})\n• Kòmanse: Kontra 1 Paj + 50% Depo (${tier.deposit}) via Interac sou 9lmntstudio@gmail.com oswa PayPal Invoice.\n\nGade vitrin ofisyèl nou an sou ${destinationUrl}. Disponib 5 minit jodi a? — (613) 400-9691`;
} else if (lang === 'fr') {
  voiceScript = `Bonjour l'équipe de ${clientName} ! Ici Darnley Sanon chez 9LMNTS Studio à Ottawa-Gatineau — (613) 400-9691. Nous avons préparé vos visuels de concept privés pour ${osName}, afin d'éliminer ${keyProblem} grâce à ${keySolution}. Découvrez notre passerelle live sur ${destinationUrl}. Démarrage rapide en ${tier.turnaround} (${tier.label}) avec un Contrat 1 Page + dépôt de 50% (${tier.deposit}) par virement Interac à 9lmntstudio@gmail.com ou Facture PayPal.`;
  textPitch = `Bonjour l'équipe ${clientName} ! 👋 Ici Darnley Sanon, 9LMNTS Studio. J'ai préparé vos visuels de concept privés (${osName}) ci-joints (${privateConceptPackPath}) — aucune maquette publique avant dépôt.\n\nObjectif : éliminer ${keyProblem} grâce à ${keySolution}.\n• Forfait : ${tier.label} · Livraison : ${tier.turnaround}\n• Lancement : Contrat 1 Page + acompte de 50% (${tier.deposit}) par Interac à 9lmntstudio@gmail.com ou Facture PayPal.\n\nExplorez notre vitrine officielle sur ${destinationUrl}. Dispo 5 minutes aujourd'hui ? — (613) 400-9691`;
} else {
  voiceScript = `Hey team at ${clientName}! Darnley Sanon here from 9LMNTS Studio in Ottawa — (613) 400-9691. We put together private dark-mode concept slides for ${osName} to eliminate ${keyProblem} using ${keySolution}. Check our live studio showcase & 2-Option Gateway right now at ${destinationUrl}. We deliver ${tier.label} in ${tier.turnaround} — locked cleanly with a 1-Page Agreement and 50% deposit (${tier.deposit}) via Interac e-Transfer to 9lmntstudio@gmail.com or PayPal Business Invoice.`;
  textPitch = `Respect ${clientName} team! 🔥 Darnley Sanon here from 9LMNTS Studio (Ottawa). Attached are your private concept slides (${privateConceptPackPath}) for ${osName} — built cleanly around your brand.\n\n✅ Eliminates: ${keyProblem}\n✅ Deploys: ${keySolution}\n• Package: ${tier.label} (${tier.turnaround})\n• Kickoff: Signed 1-Page Agreement + 50% Deposit (${tier.deposit}) via Interac to 9lmntstudio@gmail.com or PayPal Invoice.\n\nVerify our live systems right now at ${destinationUrl}. Want a quick 5-minute walkthrough today? — (613) 400-9691`;
}

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const leadsFile = path.join(dataDir, 'crm_leads.json');
let leads = [];
try {
  if (fs.existsSync(leadsFile)) {
    leads = JSON.parse(fs.readFileSync(leadsFile, 'utf8'));
  }
} catch {
  leads = [];
}

const leadRecord = {
  id: `lead_${Date.now()}`,
  createdAt: new Date().toISOString(),
  clientName,
  vertical,
  osName,
  phone,
  lang,
  sprintTier: tier.label,
  depositDue: tier.deposit,
  turnaround: tier.turnaround,
  publicReferenceUrl: destinationUrl,
  privateConceptPackPath,
  status: 'CONCEPT_SLIDES_LOCKED_LOCAL',
};

leads.unshift(leadRecord);
fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), 'utf8');

console.log('\n================================================================');
console.log('⚡ 9LMNTS STUDIO — ZERO-FREE-WORK CLIENT OUTREACH DOSSIER');
console.log('================================================================');
console.log(`Target Client:     ${clientName}`);
console.log(`Vertical / OS:     ${osName}`);
console.log(`Direct Contact:    ${phone}`);
console.log(`Language Rail:     ${lang.toUpperCase()}`);
console.log(`Sprint Scope:      ${tier.label} (${tier.turnaround})`);
console.log(`50% Kickoff Due:   ${tier.deposit} (Interac: 9lmntstudio@gmail.com or PayPal Invoice)`);
console.log(`Public Showcase:   ${destinationUrl}`);
console.log(`Private Concept:   ${privateConceptPackPath}`);
console.log('----------------------------------------------------------------');
console.log('📱 1-TAP WHATSAPP / SMS OUTREACH COPY:');
console.log(textPitch);
console.log('----------------------------------------------------------------');
console.log('🎙️ 30-SECOND VOICE AUDIO MEMO SCRIPT:');
console.log(voiceScript);
console.log('----------------------------------------------------------------');
console.log('✓ Lead logged to data/crm_leads.json successfully.');
console.log('================================================================\n');
