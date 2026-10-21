#!/usr/bin/env node
/**
 * ⚡ 9LMNTS Studio — 48-Hour $5,000 CAD Capital Sprint Engine
 * Target: Hit $5,000 in Desjardins Interac Account by Friday, October 23, 2026
 * Executive Curator: Darnley Sanon
 */

import fs from 'node:fs';
import path from 'node:path';

// Primary Brand & Rail Constants
const DOMAIN = 'https://9lmntsstudio.com';
const INTERAC_EMAIL = '9lmntstudio@gmail.com'; // Desjardins Autodeposit
const PAYMENTS_EMAIL = 'payments@9lmntsstudio.com';
const FOUNDER_PHONE = '613-909-4038';

// Top High-Probability Hitlist (Ottawa-Gatineau)
const PROSPECTS = [
  {
    id: "SPRINT-01",
    name: "Margo Caribbean & Canadian Restaurant",
    owner: "Kivenson Augustin",
    phone: "613-241-1400",
    altPhone: "613-421-4005",
    vertical: "chef",
    lang: "kreyol", // or FR/EN
    targetPackage: "Turnkey Chef OS & Catering Engine",
    fullPriceCAD: 2800,
    depositCAD: 1400,
    hook: "Eliminate 30% third-party app commission on Oxtail & Griot + instant catering headcount slider for Rideau & Bank locations.",
    demoUrl: `${DOMAIN}/demo-client.html?biz=Margo%20Caribbean%20Restaurant`
  },
  {
    id: "SPRINT-02",
    name: "Island Flava",
    owner: "Lennox Antoine",
    phone: "613-321-4198",
    vertical: "chef",
    lang: "en",
    targetPackage: "The Revenue Recovery System + WebAR Menu",
    fullPriceCAD: 1650,
    depositCAD: 825,
    hook: "Automated lunch rush mobile pickup + 3D WebAR Jerk Chicken popup on Dalhousie foot traffic.",
    demoUrl: `${DOMAIN}/demo-client.html?biz=Island%20Flava`
  },
  {
    id: "SPRINT-03",
    name: "Baccanalle Artisanal Catering",
    owner: "Chef Resa Solomon-St. Lewis",
    phone: "613-859-6297",
    vertical: "chef",
    lang: "en",
    targetPackage: "Turnkey Catering OS + Custom Headcount Engine",
    fullPriceCAD: 3200,
    depositCAD: 1600,
    hook: "Corporate catering instant quote calculator ($25-$60/plate) with 50% automated online booking deposit.",
    demoUrl: `${DOMAIN}/demo-client.html?biz=Baccanalle%20Catering`
  },
  {
    id: "SPRINT-04",
    name: "YKO Wood Charcoal Chicken (Poulet Braisé)",
    owner: "Management & Head Pitmaster",
    phone: "613-680-8956",
    vertical: "chef",
    lang: "fr",
    targetPackage: "The Revenue Recovery System",
    fullPriceCAD: 1200,
    depositCAD: 600,
    hook: "Commande directe sans commission 30% pour les commandes de poulet braisé et bananes pesées sur McArthur.",
    demoUrl: `${DOMAIN}/demo-client.html?biz=YKO%20Chicken`
  },
  {
    id: "SPRINT-05",
    name: "Nuvo Lounge / Event Arena",
    owner: "Executive Management",
    phone: "613-244-3555",
    vertical: "venue",
    lang: "en",
    targetPackage: "Nightlife OS + VIP Table Reservation Portal",
    fullPriceCAD: 3500,
    depositCAD: 1750,
    hook: "0%-fee VIP bottle service deposit collection + DJ sound clash live voting integration.",
    demoUrl: `${DOMAIN}/demos/venue-os-nuvo-lounge.html`
  },
  {
    id: "SPRINT-06",
    name: "Moe's BBQ Ottawa South",
    owner: "Moe / Pitmaster",
    phone: "613-733-6637",
    vertical: "chef",
    lang: "en",
    targetPackage: "The Revenue Recovery System",
    fullPriceCAD: 1200,
    depositCAD: 600,
    hook: "Large party smoked brisket & platter catering inquiries captured in under 60 seconds directly to phone.",
    demoUrl: `${DOMAIN}/demo-client.html?biz=Moes%20BBQ%20Ottawa`
  },
  {
    id: "SPRINT-07",
    name: "Ottawa Elite Handyman & Trades",
    owner: "Operations Dispatcher",
    phone: "613-555-0188",
    vertical: "trades",
    lang: "en",
    targetPackage: "Worker Bee OS / Dispatch Modal Upgrade",
    fullPriceCAD: 1800,
    depositCAD: 900,
    hook: "Stop losing $1,500 repair jobs to voicemail when on ladder. 4-second instant dispatch intake modal.",
    demoUrl: `${DOMAIN}/workerbee.html`
  },
  {
    id: "SPRINT-08",
    name: "Tipikliz Caribbean Restaurant",
    owner: "Head Chef / Management",
    phone: "613-805-4041",
    vertical: "chef",
    lang: "kreyol",
    targetPackage: "The Revenue Recovery System",
    fullPriceCAD: 1200,
    depositCAD: 600,
    hook: "Sistèm kòmand dirèk pou evite pèdi kliyan Orleans sou liy telefòn ki okipe pandan lè dine.",
    demoUrl: `${DOMAIN}/demo-client.html?biz=Tipikliz%20Caribbean`
  }
];

function cleanDigits(phone) {
  return phone.replace(/[^0-9]/g, '');
}

function generateCopy(p) {
  let pitchText = '';
  let voiceScript = '';

  if (p.lang === 'kreyol') {
    pitchText = `Bonswa ${p.owner}! 👋 Se Darnley Sanon nan 9LMNTS Studio isit Ottawa. Mwen te wè biznis ou ${p.name} epi mwen bati yon demonstrasyon prive sou mobil pou ${p.targetPackage}: ${p.demoUrl}

Li elimine frè aplikasyon 30% epi li pèmèt kliyan rezève kòmand ak catering dirèkteman sou telefòn yo. Turnaround se 48–72 èdtan. Depo kickoff la se 50% (${p.depositCAD} CAD) sou Interac dirèk: ${INTERAC_EMAIL}. 

Èske ou lib pou yon kout apèl 3 minit jodi a pou mwen montre w kijan li fonksyone?`;

    voiceScript = `Bonswa ${p.owner}! Se Darnley Sanon nan 9LMNTS Studio. Mwen monte yon demonstrasyon prive espesyalman pou ${p.name} pou elimine frè 30% aplikasyon livrezon yo epi pran gwo kòmand catering dirèkteman. Tcheke lyen prive sa a sou telefòn ou kounye a: ${p.demoUrl}. Nou ka deplwaye tout sistèm nan pou ou anvan fen semèn nan ak yon ti depo 50% sou Interac.`;
  } else if (p.lang === 'fr') {
    pitchText = `Bonjour ${p.owner}! 👋 Ici Darnley Sanon, directeur chez 9LMNTS Studio à Ottawa. J'ai préparé un banc d'essai interactif privé sur mobile pour ${p.name}: ${p.demoUrl}

Notre architecture élimine les commissions tierces de 30% et automatise vos devis traiteur en 60 secondes. Déploiement en 72 heures. Acompte de démarrage strict de 50% (${p.depositCAD} CAD) par virement Interac à ${INTERAC_EMAIL}.

Disponible pour un échange rapide de 3 minutes aujourd'hui?`;

    voiceScript = `Bonjour ${p.owner}! Ici Darnley Sanon de 9LMNTS Studio. Nous avons remarqué que les clients mobiles de ${p.name} cherchaient un moyen direct de commander et réserver pour des événements. J'ai conçu un prototype privé interactif sur mesure pour vous: ${p.demoUrl}. Nous livrons le système complet d'ici vendredi avec un acompte strict de 50% par Interac.`;
  } else {
    pitchText = `Hey ${p.owner}! 👋 Darnley Sanon here from 9LMNTS Studio in Ottawa. I noticed ${p.name} was losing potential mobile orders and catering inquiries, so I built a private interactive prototype for your brand: ${p.demoUrl}

It eliminates the 30% third-party app commission leak and adds an instant headcount catering slider. We deliver turnkey in 72 hours. The kickoff deposit is 50% ($${p.depositCAD} CAD) via Interac e-Transfer autodeposit to ${INTERAC_EMAIL}.

Do you have 3 minutes for a quick screen test today?`;

    voiceScript = `Hi ${p.owner}! This is Darnley Sanon from 9LMNTS Studio here in Ottawa. I built an interactive prototype specifically for ${p.name} to capture direct mobile orders and corporate catering bookings without the 30% app commissions. Pull up this private staging link on your phone right now: ${p.demoUrl}. We can have this live for your weekend rush with a clean 50% kickoff deposit via Interac.`;
  }

  const phoneNum = cleanDigits(p.phone);
  const waPhone = phoneNum.startsWith('1') ? phoneNum : `1${phoneNum}`;
  const encodedText = encodeURIComponent(pitchText);
  const waLink = `https://wa.me/${waPhone}?text=${encodedText}`;

  return { pitchText, voiceScript, waLink };
}

console.log('========================================================================');
console.log('⚡ 9LMNTS STUDIO — 48-HOUR $5,000 CAD CAPITAL SPRINT HITLIST');
console.log('Target: $5,000 CAD in Desjardins Interac by Friday, Oct 23, 2026 (5:00 PM)');
console.log('Executive Curator: Darnley Sanon · 9lmntstudio@gmail.com');
console.log('========================================================================\n');

let totalDepositsPossible = 0;

PROSPECTS.forEach((p, idx) => {
  const { pitchText, voiceScript, waLink } = generateCopy(p);
  totalDepositsPossible += p.depositCAD;

  console.log(`[PROSPECT ${idx + 1}/8] ${p.name.toUpperCase()}`);
  console.log(`• Decision Maker:   ${p.owner}`);
  console.log(`• Phone Number:     ${p.phone} ${p.altPhone ? `(Alt: ${p.altPhone})` : ''}`);
  console.log(`• Language:         ${p.lang.toUpperCase()}`);
  console.log(`• Target Package:   ${p.targetPackage} ($${p.fullPriceCAD} CAD)`);
  console.log(`• 50% Deposit Due:  $${p.depositCAD} CAD (Interac to: ${INTERAC_EMAIL})`);
  console.log(`• Interactive Demo: ${p.demoUrl}`);
  console.log(`• 1-Tap WhatsApp:   ${waLink}`);
  console.log(`\n--- 📱 COPY-PASTE SMS / DM ---`);
  console.log(pitchText);
  console.log(`\n--- 🎙️ 30s VOICE NOTE SCRIPT ---`);
  console.log(voiceScript);
  console.log('------------------------------------------------------------------------\n');
});

console.log(`💰 Total Pipeline Deposit Value: $${totalDepositsPossible} CAD`);
console.log(`🎯 Closing just 3 to 4 of these 8 prospects achieves $5,000+ CAD by Friday!`);
