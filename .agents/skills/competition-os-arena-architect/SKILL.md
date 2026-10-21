---
name: competition-os-arena-architect
description: >-
  Builds, upgrades, and monetizes 9LMNTS Studio's 25 Live Competition OS Arenas
  (01_Sound_Clash_OS.html through 25_Illusion_Clash_OS_Magic_Arena.html,
  clash.html, and boilerplates/pitch-os/). Activate whenever working on 8-contender
  tournament brackets, live audience QR voting, judge scorecards, contender
  entry checkout, or event sponsor slots.
---

# 9LMNTS Competition OS Arena Architect (`competition-os-arena-architect`)

## Overview
Powers **Engine 2 of 9LMNTS Studio**: the **25 Universal 8-Contender Live Competition Arenas** spanning nightlife, hip-hop culture, sports, corporate pitches, and creator battles:
- `01_Sound_Clash_OS.html` (DJ Battles)
- `02_Comedian_OS_Roast_Battle.html` (Stand-Up Roast Battles)
- `03_Bars_OS_Battle_Rap.html` (MC Battle Rap)
- `04_Runway_OS_Fashion_Battle.html` (Runway & Streetwear Clash)
- `05_Feast_OS_Chef_Battle.html` (Culinary Clash)
- `06_Hoops_OS_3v3_Streetball.html` (3v3 Streetball)
- `07_GameOS_Pro_Esports.html` (Esports Tournaments)
- `08_Pitch_Battle_OS_Corporate_Clash.html` (Startup / Corporate Pitch Clash)
- `09_Dance_Clash_OS_BBoy_Arena.html` through `25_Illusion_Clash_OS_Magic_Arena.html`

## Core Architecture & Monetization Formula
Every Competition OS Arena is engineered to make a venue or promoter profitable **before the doors even open**:
1. **8-Contender Bracket Engine**: Quarterfinals → Semifinals → Championship Final with interactive round timers, decibel/hype meters, and live crowd vote percentages.
2. **Self-Funding Revenue Math**:
   - **8 Contender Entry Slots** (e.g., `8 × $250 CAD = $2,000 CAD`)
   - **3 Commercial Sponsorship Slots**:
     - *Title Arena Sponsor* (`$2,500 CAD`)
     - *Prize Pot Partner* (`$1,000 CAD`)
     - *WebAR / Live Poll Brand Activation* (`$1,500 CAD`)
   - **Audience Pass / VIP Table Checkout & Paid Boost Votes**
3. **Database & API Layer (`boilerplates/pitch-os/`)**:
   - Uses `boilerplates/pitch-os/schema_pitch_os.sql` and `boilerplates/pitch-os/api/vote/route.js` for real-time vote tallying and SMS/IG lead capture.

## Workflow
1. **Customizing an Arena for a Venue / Promoter**:
   - Load the matching vertical HTML file (`01`–`25`) and `boilerplates/pitch-os/config.json`.
   - Configure the 8 contender profiles, round structure, prize pool, and sponsor banners.
2. **Ensuring Checkout Integrity**:
   - Verify `openPayPalCheckout()`, `closePayPalModal()`, and `executePayPalOrder()` (or Stripe online ticket/slot checkout) are wired to every Contender Slot, Audience Pass, and Sponsor CTA button.
3. **Syncing with Build & Sitemaps**:
   - Ensure all 25 `^\d{2}_.*\.html$` arena files are automatically picked up by `build.js` and indexed in `services.html` and `sitemap.xml`.
