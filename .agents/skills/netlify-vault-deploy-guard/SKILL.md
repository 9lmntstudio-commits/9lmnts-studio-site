---
name: netlify-vault-deploy-guard
description: >-
  Audits build.js, _redirects, netlify.toml, and dist/ before any production
  build or Netlify deployment to guarantee zero unpaid client prototypes leak
  publicly, and provides a 1-step unlock protocol once a client's Signed Sprint
  Contract + 50% Interac e-Transfer Deposit ($1,100 CAD) is verified.
---

# Netlify Vault & Zero-Free-Work Deploy Guard (`netlify-vault-deploy-guard`)

## Overview
Protects 9LMNTS Studio's intellectual property by ensuring that custom client builds (`margo.html`, `businessmeter.html`, etc.) remain **locked in the local studio vault** until a **Signed 1-Page Sprint Contract Agreement + 50% Interac e-Transfer Deposit (`$1,100 CAD` to `9lmntsstudio@gmail.com`)** is verified.

## Workflow

### Mode A: Pre-Deploy Security Audit (Default — Before Deposit)
Before running `node build.js` or calling the `netlify` MCP server to deploy `9lmntsstudio.com`:
1. Verify `build.js` `coreFiles` array contains **only** the 9 core studio stations (`index.html`, `loa.html`, `vault.html`, `core.html`, `ai-voice.html`, `services.html`, `the-helm.html`, `clash.html`, `merch.html`, `pricing.html`) and the 25 in-house Competition OS arenas (`01_Sound_Clash_OS.html` – `25_Illusion_Clash_OS_Magic_Arena.html`).
2. Verify `_redirects` does **not** expose `/margo` or `/businessmeter` while their status in `ARGON_AUTONOMOUS_SALES_ENGINE.md` is awaiting deposit.
3. Run `node build.js` and verify with PowerShell:
   ```powershell
   Test-Path "dist\margo.html", "dist\businessmeter.html"
   ```
   Both must return `False`.

### Mode B: Post-Deposit Client Unlock Protocol (Only After 50% e-Transfer Received)
When the user confirms: *"Margo signed the contract and sent the $1,100 e-Transfer deposit"*:
1. Update `ARGON_AUTONOMOUS_SALES_ENGINE.md` row status for that client to `DEPOSIT_PAID_50%_ETRANSFER ($1,100 CAD)` and build status to `UNLOCKED_FOR_7DAY_SPRINT`.
2. Add the client's HTML file (e.g., `'margo.html'`) to `coreFiles` in `build.js` and add `/margo  /margo.html  200` to `_redirects`.
3. Connect the client's live Stripe publishable key / checkout endpoint for their website customers.
4. Run `node build.js` and deploy via the `netlify` MCP (`netlify-deploy-services-updater`) or `margorestaurant.com` DNS cutover upon final 50% balance receipt.
