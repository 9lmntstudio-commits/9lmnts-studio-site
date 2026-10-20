#!/usr/bin/env node
/**
 * 9LMNTS Studio — Autonomous Deposit-First Pitch & Link Generator
 * Fast Execution Engine for Creative Director Darnley Sanon
 * 
 * Usage:
 * node automation/generate-pitch.js --client "Margo Caribbean Restaurant" --vertical "chef" --phone "613-555-0199" --lang "en"
 * node automation/generate-pitch.js --client "Handyman Personnel" --vertical "handyman" --phone "613-555-0188" --lang "en"
 * node automation/generate-pitch.js --client "Romeo & Juliet Banquets" --vertical "reception" --phone "613-555-0177" --lang "fr"
 */

const fs = require('fs');
const path = require('path');

// Parse CLI flags
const args = process.argv.slice(2);
function getArg(key, defaultVal) {
    const idx = args.indexOf(`--${key}`);
    if (idx !== -1 && args[idx + 1]) {
        return args[idx + 1];
    }
    return defaultVal;
}

const clientName = getArg('client', 'Commercial Partner');
const vertical = (getArg('vertical', 'chef')).toLowerCase(); // chef, handyman, reception, modular
const phone = getArg('phone', 'N/A');
const lang = (getArg('lang', 'en')).toLowerCase(); // en, fr, kreyol
const domain = getArg('domain', 'https://9lmnts-studio.netlify.app');

// Determine vertical properties
let demoPath = 'demo-client.html';
let osName = 'Chef OS & Universal Catering Engine';
let sprintTier = '$1,500 CAD (The Revenue Recovery System)';
let depositDue = '$750 CAD';
let keyProblem = '30% third-party food app commission leak and lost catering inquiries';
let keySolution = '0%-fee direct ordering, real-time headcount catering slider, and WebAR 3D signature dish showcase';

if (vertical.includes('handy') || vertical.includes('trade') || vertical.includes('labor')) {
    demoPath = 'handyman.html';
    osName = 'Handyman OS & Fleet Dispatch System';
    sprintTier = '$3,000 CAD (The Turnkey Business OS)';
    depositDue = '$1,500 CAD';
    keyProblem = '5:00 AM lobby check-in bottleneck, paper slips, and manual payroll calculations';
    keySolution = '4-second worker QR check-in, dispatch queue, driver GPS manifests, and paperless payouts';
} else if (vertical.includes('recept') || vertical.includes('wed') || vertical.includes('event')) {
    demoPath = 'reception.html';
    osName = 'Reception OS & Luxury Celebration Suite';
    sprintTier = '$1,500 CAD (V1 Vault) or $3,000 CAD (Full Suite)';
    depositDue = '$750 CAD';
    keyProblem = 'lost RSVPs, dietary confusion, and registry fees eating into cash gifts';
    keySolution = 'cinematic pre-wedding RSVPs, 0%-fee Interac honeymoon gift fund, and live ballroom photo stream';
} else if (vertical.includes('mod') || vertical.includes('500') || vertical.includes('embed')) {
    demoPath = 'index.html#demo';
    osName = 'Modular System Upgrade ($500 Plug-and-Play)';
    sprintTier = '$500 CAD (Modular System Upgrade)';
    depositDue = '$250 CAD';
    keyProblem = 'static website bouncing mobile visitors without capturing their booking info';
    keySolution = 'single-script 48-hour drop-in intake modal routing leads straight to your phone';
}

const encodedBiz = encodeURIComponent(clientName);
const liveDemoUrl = `${domain}/${demoPath}${demoPath.includes('?') ? '&' : '?'}biz=${encodedBiz}`;

// Generate Multi-Lingual Pitch Scripts
let voiceScript = '';
let textPitch = '';

if (lang === 'kreyol') {
    voiceScript = `Bonswa ekip ${clientName}! Se Darnley Sanon nan 9LMNTS Studio. Nou monte yon demonstrasyon prive sou ${osName} espesyalman pou nou. Nou elimine ${keyProblem} ak yon sistèm modèn ki enstale nan 24–48 èdtan: ${keySolution}. Tcheke lyen prive sa a kounye a sou telefòn ou: ${liveDemoUrl}. Si nou renmen li, nou ka lanse li semèn sa a ak yon ti depo 50% sou Interac.`;
    textPitch = `Salitasyon ${clientName}! 👋 Se Darnley Sanon nan 9LMNTS Studio. Nou bati yon demonstrasyon prive sou ${osName} pou biznis ou: ${liveDemoUrl}\n\nLi elimine ${keyProblem}. Enstalasyon pran 48 èdtan sèlman. Depo 50% sou Interac: 9lmntstudio@gmail.com (${depositDue}). Èske ou lib pou yon apèl 5 minit jodi a?`;
} else if (lang === 'fr') {
    voiceScript = `Bonjour à l'équipe de ${clientName}! Ici Darnley Sanon de 9LMNTS Studio à Ottawa. Nous avons préparé un prototype privé du ${osName} sur mesure pour votre entreprise. Notre architecture élimine ${keyProblem} grâce à ${keySolution}. Vous pouvez tester le système en direct sur votre mobile ici: ${liveDemoUrl}. La mise en production prend de 24 à 48 heures avec un acompte strict de 50% par virement Interac.`;
    textPitch = `Bonjour l'équipe ${clientName}! 👋 Ici Darnley Sanon, directeur chez 9LMNTS Studio. J'ai préparé un banc d'essai interactif privé pour votre entreprise: ${liveDemoUrl}\n\nCe système élimine ${keyProblem} et génère des réservations instantanées. Déploiement en 48 heures. Acompte de 50%: ${depositDue} par virement Interac à 9lmntstudio@gmail.com. Disponible pour un test rapide de 5 minutes?`;
} else {
    // English default
    voiceScript = `Hi team at ${clientName}! This is Darnley Sanon from 9LMNTS Studio here in Ottawa. We noticed mobile visitors to your business were facing friction, so we engineered an interactive private prototype of ${osName} specifically under your brand. It eliminates ${keyProblem} through ${keySolution}. Pull this up on your smartphone right now: ${liveDemoUrl}. We deliver turnkey deployments in 24 to 48 hours with a clean 50% deposit sprint protocol.`;
    textPitch = `Hey team at ${clientName}! 👋 Darnley Sanon here from 9LMNTS Studio. I built a private interactive staging prototype of ${osName} customized for your brand: ${liveDemoUrl}\n\nIt eliminates ${keyProblem} with zero rebuild required, delivering ${keySolution}. Turnaround is 24–48 hours. Kickoff deposit is 50% (${depositDue}) via Canadian Interac e-Transfer to 9lmntstudio@gmail.com. Let me know when you've tested the live link!`;
}

// Log lead into data/crm_leads.json
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
} catch (e) {
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
    sprintTier,
    depositDue,
    liveDemoUrl,
    status: 'STAGED_OUTREACH'
};

leads.unshift(leadRecord);
fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2), 'utf8');

// Print Dossier to Terminal
console.log('\n================================================================');
console.log('⚡ 9LMNTS STUDIO — DEPOSIT-FIRST CLIENT OUTREACH DOSSIER');
console.log('================================================================');
console.log(`Target Client:     ${clientName}`);
console.log(`Vertical OS:       ${osName}`);
console.log(`Direct Contact:    ${phone}`);
console.log(`Language Rail:     ${lang.toUpperCase()}`);
console.log(`Sprint Scope:      ${sprintTier}`);
console.log(`50% Kickoff Due:   ${depositDue} (Interac to: 9lmntstudio@gmail.com)`);
console.log(`Live Demo URL:     ${liveDemoUrl}`);
console.log('----------------------------------------------------------------');
console.log('📱 1-TAP WHATSAPP / SMS OUTREACH COPY:');
console.log(textPitch);
console.log('----------------------------------------------------------------');
console.log('🎙️ 30-SECOND VOICE AUDIO MEMO SCRIPT:');
console.log(voiceScript);
console.log('----------------------------------------------------------------');
console.log('✓ Lead logged to data/crm_leads.json successfully.');
console.log('================================================================\n');
