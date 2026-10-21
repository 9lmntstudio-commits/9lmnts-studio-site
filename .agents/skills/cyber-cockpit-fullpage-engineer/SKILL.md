---
name: cyber-cockpit-fullpage-engineer
description: >-
  Maintains the 9LMNTS Studio 4K Cyber Cypher Spatial Workstation (index.html),
  Mobile Cockpit (mobile.html), Founder Dossier (the-helm.html), Core Services
  (core.html, services.html, pricing.html), 50% glassmorphic bento styling
  (styles/fullpage.css), Netlify HUD suppression, and SEO/LLM indexing
  (sitemap.xml, llms.txt). Activate when editing core studio pages or layout
  infrastructure.
---

# 9LMNTS Cyber Cockpit & Fullpage Infrastructure Engineer (`cyber-cockpit-fullpage-engineer`)

## Overview
Governs the master 9LMNTS Studio agency shell (`https://9lmntsstudio.com`) across all **9 Unified Studio Cockpit Stations**:
- **Master Spatial Cockpit**: `index.html` (4K desktop interactive room) & `mobile.html` (touch-optimized mobile cockpit)
- **Station 01**: `loa.html` (Project LOA Universe)
- **Station 02**: `vault.html` (Original Music Vault & Multitrack Stem Deck)
- **Station 03**: `core.html` (Core Architecture & EventOS Simulator)
- **Station 04**: `ai-voice.html` (AI Voice Operator & Supabase CRM)
- **Station 05**: `services.html` (Studio Services, 9 Cultural Pillars & Video Reels)
- **Station 06**: `the-helm.html` (The Helm — Founder Dossier: Darnley Sanon)
- **Station 07**: `clash.html` (Sound Clash OS Live Battle Arena)
- **Station 08**: `merch.html` (WebAR Merch & 18-Piece Holographic Wearables)
- **Station 09**: `pricing.html` (Creator HQ & Official Transparent Pricing Matrix)

## Core Engineering & Aesthetic Standards (`Cyber Cypher V5`)
1. **Cyber Cypher Color & Typography Tokens**:
   - `--bg-dark`: `#06070A` / `#07080B`
   - `--neon-orange`: `#FF5500` (Primary Agency / Station 05 / Clash Accent)
   - `--cyber-teal`: `#00F0FF` / `#00D4FF` (Station 02 Vault / Station 04 AI Voice / Station 08 WebAR Accent)
   - `--cyber-purple`: `#B026FF` (Project LOA / Aether Accent)
   - `--matrix-green`: `#00FF88` / `#10B981` (Live Telemetry & Active Status)
   - **Fonts**: `Orbitron` (Display HUD headers), `Plus Jakarta Sans` / `Inter` (UI & Body), `JetBrains Mono` (Telemetry, Badges, & Code), `Mrs Saint Delafield` (Founder/Script accent).
2. **50% Glassmorphic Bento Architecture (`styles/fullpage.css`)**:
   - Cards use `background: rgba(10, 13, 20, 0.50)`, `backdrop-filter: blur(28px) saturate(180%)`, top 2px neon accent borders, and deep ambient radial glows so background portal art shines through.
3. **Netlify Badge / HUD Suppression**:
   - Every core HTML page includes the `localStorage.setItem('nl-hud:public:v1', 'hidden')` script and CSS rules hiding `#nl-badge-frame` and `iframe[title*="Netlify"]`.
4. **LLM & Search Indexing (`llms.txt` & `sitemap.xml`)**:
   - Whenever adding a new public station or Competition OS arena, update `llms.txt`, `sitemap.xml`, and `build.js`.
