---
name: argon-deposit-sales-engine
description: >-
  Generates Deposit-First Outbound Sales Dossiers, 30-second Kreyòl/EN/FR voice
  scripts, bilingual DM/WhatsApp pitches, 1-Page Turnkey Sprint Contract
  Agreements, and 50% Interac e-Transfer Deposit Invoices (package deposit per GEMINI.md: $900 Launch Page / $1,800 Growth Website / 40% Signature System to
  9lmntstudio@gmail.com) while pitching built-in Stripe Online Checkout for the
  client's website customers. Activate whenever processing leads from
  ARGON_AUTONOMOUS_SALES_ENGINE.md or data/ottawa_hospitality_leads.csv.
---

# Argon Deposit-First Outbound Sales Engine (`argon-deposit-sales-engine`)

## Overview
Automates the **9LMNTS Studio Deposit-First Sales Pipeline** for hospitality, nightlife, and creator prospects in the Ottawa–Gatineau region (`EN / FR / Kreyòl`). Enforces the **Zero Free Work Law** and **Two-Layer Payment Architecture**:
1. **B2B Agency Kickoff (Prospect → 9LMNTS Studio)**: Signed **1-Page 7-Day Sprint Contract Agreement** + **50% Interac e-Transfer Deposit (`package deposit per GEMINI.md: $900 Launch Page / $1,800 Growth Website / 40% Signature System` to `9lmntstudio@gmail.com`)** before any custom build handoff or staging deployment.
2. **B2C Website Checkout (Customers → Prospect's Website)**: Built-in **Stripe Online Checkout** (Visa, Mastercard, Amex, 1-Tap Apple Pay, Google Pay, and 4× Installment Split) for 0%-commission direct food orders and automatic **50% online catering deposits**.

## Dependencies
- **`brand-design-expert`**: Ensures any concept slides attached to the outreach dossier follow the Unified Slide 1 Dark Mode specification in `DESIGN.md`.
- **`visual-concept-packager`**: Packages the 6 Dark Mode concept screenshots into `assets/<slug>/outreach_slides/`.

## Quick Start
Run the CLI generator to process any lead from `ARGON_AUTONOMOUS_SALES_ENGINE.md` or generate a complete dossier for a specific restaurant:

```powershell
node 9lmnts-lead-engine.js --dossier --name "Island Flava" --owner "Lennox Antoine" --locations "412 Dalhousie St, Ottawa" --phone "(613) 321-4198" --handle "@islandflavaottawa" --output "data/island_flava_outreach_copy.md"
```

Or process all rows marked `PROCESS` / `NEW` in `ARGON_AUTONOMOUS_SALES_ENGINE.md`:
```powershell
node 9lmnts-lead-engine.js --once
```

## Workflow

### Step 1: Audit Target Friction & Revenue Upside
1. Identify the prospect's locations, phone numbers, owner/decision-maker name, and top 3–6 signature dishes.
2. Calculate their primary revenue friction:
   - **30% UberEats / DoorDash commission leak** on signature plates.
   - **Manual DM/phone tag for catering quotes** (`15–300+ guests`) with zero instant online deposit collection.

### Step 2: Generate the 4-Part Deposit-First Outreach Dossier (`data/<slug>_outreach_copy.md`)
Every generated dossier must contain:
1. **30-Second Voice Note Script (`EN / FR / Kreyòl`)**:
   - Hook with respect for their craft and specific signature dishes.
   - Pitch the **Stripe Online Checkout & Catering Deposit Slider** built for *their customers*.
   - Close with the **1-Page Sprint Contract Agreement + 50% Interac e-Transfer deposit (`package deposit per GEMINI.md: $900 Launch Page / $1,800 Growth Website / 40% Signature System`)** to start the 7-day build.
2. **1-Tap Bilingual DM / WhatsApp Copy (`EN` + `FR`)**:
   - Designed to be sent alongside the **6 Unified Dark Mode Concept Slides** (`01_hero_dark.png` – `06_culinary_host_reviews_dark.png`).
3. **Sprint Contract & 50% Interac e-Transfer Summary Block (`INV-9LMNTS-<SLUG>-50LOCK`)**:
   - Clearly separates **1. Website Customer Payments (Stripe Online Checkout)** from **2. Project Fee & Studio Payment Terms (`package deposit per GEMINI.md: $900 Launch Page / $1,800 Growth Website / 40% Signature System` Interac e-Transfer to `9lmntstudio@gmail.com`)**.
4. **1-Page Turnkey Web Architecture Agreement**:
   - Ready-to-sign agreement between **9LMNTS Studio** and the client.

### Step 3: Schedule Outreach Automation (Optional)
If the user asks to schedule the outreach launch (e.g., Monday at 9:30 AM EDT), use the `automation` skill to create a scheduled sidecar in `~/.gemini/config/sidecars/<slug>-outreach/sidecar.json` with `CRON_TZ=America/Toronto`.

## Common Mistakes to Avoid
- **Never generate or share a public `https://9lmntsstudio.com/<client>` link before the 50% Interac e-Transfer deposit is paid.** Attach the 6 local Dark Mode concept screenshots instead.
- **Never confuse the two payment flows**: Stripe is for the restaurant's customers ordering food/catering on the website; Interac e-Transfer + Contract Agreement is for the restaurant owner paying 9LMNTS Studio.
