---
name: ai-voice-crm-and-manychat-ops
description: >-
  Manages Station 04 (ai-voice.html), the Gemini Live AI Voice Operator, Day-1
  Zero-State vs. Client Sandbox CRM telemetry, the 6 ManyChat Keyword Triggers
  (CLASH, COMEDY, ARTIST, BALLER, DEV, SPONSOR), the 50-Agent Argon Swarm
  (argon_50_agent_swarm.py), and the Gemini Mobile Brain Bridge
  (remote-bridge.js / remote-cockpit.html). Activate whenever working on AI
  agents, CRM, ManyChat funnels, or mobile remote control.
---

# AI Voice Operator, ManyChat Funnels & Mobile Brain Ops (`ai-voice-crm-and-manychat-ops`)

## Overview
Governs **Station 04 (`ai-voice.html`)**, the **50-Agent Argon Cloud Swarm (`boilerplates/swarm/argon_50_agent_swarm.py`)**, and the **Gemini Mobile Brain Sync (`remote-bridge.js`, `remote-cockpit.html`, `9LMNTS_GEMINI_MOBILE_BRAIN_SYNC.md`)**.

## Core Subsystems

### 1. Day-1 Zero-State Production Mode vs. Sandbox Demo (`ai-voice.html`)
- **Day-1 Zero-State Mode (Default)**: Displays authentic Day-1 live telemetry (`$0.00 CAD` active revenue, `0 Leads`) alongside **3 Actionable Commercial Sponsorship Slots**:
  1. *Title Arena Sponsor* (`$2,500 CAD`)
  2. *Prize Pot Partner* (`$1,000 CAD`)
  3. *WebAR Brand Activation* (`$1,500 CAD`)
- **Client Sandbox Demo Mode**: Toggleable interactive simulation showing prospective agency clients how incoming voice calls and IG DMs populate the pipeline.

### 2. The 6 Official ManyChat & Supabase Edge Keyword Triggers
Whenever configuring Instagram DM / WhatsApp / SMS automation flows, enforce these 6 canonical keyword triggers:
- **`CLASH`** → Routes DJs, battle rappers, and event voters into `01_Sound_Clash_OS.html` / `clash.html`.
- **`COMEDY`** → Routes stand-up comics and comedy fans into `02_Comedian_OS_Roast_Battle.html`.
- **`ARTIST`** → Routes musicians and producers into Artist OS / `vault.html` stem packs.
- **`BALLER`** → Routes hoopers and athletes into `06_Hoops_OS_3v3_Streetball.html` & Scouting Passports.
- **`DEV`** → Routes agency B2B clients into the 7-Day Sprint intake (`services.html` / `pricing.html`).
- **`SPONSOR`** → Routes brand sponsors directly to the `$1,000–$2,500 CAD` Commercial Sponsorship checkout.

### 3. Gemini Mobile App Live Brain & Remote Bridge (`remote-bridge.js`)
- Runs via `node server.js` or `npm run bridge` on port `8888`.
- Supports mobile remote commands (`build`, `status`, `list`, `read <file>`, `sync`, `exec <cmd>`) from `/remote-cockpit.html` or Google Drive doc `9LMNTS_GEMINI_LIVE_BRAIN`.
