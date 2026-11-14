---
name: paypal-commerce-engine
description: Primary 9LMNTS Studio B2C e-Commerce checkout skill using PayPal Commerce Platform, PayPal MCP (https://mcp.paypal.com/mcp & @paypal/mcp), PayPal JS SDK / @paypal/react-paypal-js, Pay Later 4x Split, Apple Pay / Google Pay / Cards, and PayPal Orders & Invoices v2.
---

# PayPal e-Commerce Engine Skill (`paypal-commerce-engine`)

**Default Payment Stack Rule:** Use **PayPal e-Commerce** (instead of Stripe) for all client B2C websites, Competition OS contender entries, Chef OS direct food orders, 50% customer catering deposits, and merchandising carts.

---

## 1. Registered MCP Server (`C:\Users\Darnl\.gemini\config\mcp_config.json`)

- **Hosted OAuth Server Name**: `paypal`
  - **Config Key (`serverUrl` required by Antigravity)**: `"serverUrl": "https://mcp.paypal.com/mcp"` (do not use `"url"`, which Antigravity ignores)
  - Uses standard PayPal OAuth 2.1 + PKCE + Dynamic Client Registration browser sign-in (authenticate via **Additional Options (`...`) > MCP Servers > Authenticate** or **Settings > Customizations > MCP Servers**) without manual 9-hour token rotation.
- **Alternative Local Stdio Package** (`@paypal/mcp` `v1.8.1` / `@paypal/agent-toolkit` `v1.11.0`):
  - **Command**: `npx.cmd -y @paypal/mcp --tools=all`
  - **Env**: `PAYPAL_ACCESS_TOKEN`, `PAYPAL_ENVIRONMENT` (`SANDBOX` or `PRODUCTION`)

---

## 2. Client Frontend SDK & Payment Methods

1. **Client Environment Variable**:
   - `VITE_PAYPAL_CLIENT_ID` (React / Vite — active 80-char Client ID already stored locally in `9LMNTS Studio July 11 2026/.env`)
   - Package for React 19: `@paypal/react-paypal-js` or PayPal JS SDK `<script src="https://www.paypal.com/sdk/js?client-id=...&currency=CAD&components=buttons,messages"></script>`
   - Hosted No-Code Checkout Links (when static HTML): `https://www.paypal.com/ncp/payment/<LINK_ID>` (used in `GateOSCheckoutModal.tsx`)
2. **Supported Customer Methods (`0%` Agency Commission)**:
   - **PayPal Wallet** & **1-Tap Venmo** (US)
   - **PayPal Pay Later** (`4×` interest-free installments for catering deposits & `$120+` streetwear drops)
   - **Apple Pay & Google Pay** via PayPal Complete Payments
   - **Advanced Debit & Credit Cards** (Visa, Mastercard, Amex) directly inside the client's merchant account

---

## 3. Core Capabilities & Flows

1. **Orders v2 Direct Checkout (`intent: "CAPTURE"`)**:
   - Signature plates, merch carts (`StreetwearStage`), and single tickets (`GateOSCheckoutModal`).
2. **50% Catering Deposit Lock**:
   - Guest slider calculates total package (`15–300+` guests at `$18–$24/guest`), captures `50%` immediately via PayPal Order / Pay Later 4x, and dispatches an itemized **PayPal Invoice v2** or final balance reminder prior to kitchen prep.
3. **Competition OS Entry & Voting Tickets**:
   - Contender registration (`$50–$250 CAD`) and VIP audience ballots verified on `PAYMENT.CAPTURE.COMPLETED` webhook into Supabase.

---

## 4. Two-Layer Payment Rule Compliance

- **Agency Kickoff Fee (Client -> 9LMNTS Studio)**: Signed 1-Page Sprint Contract + 50% Interac e-Transfer (`$1,100 CAD` on `$2,200 CAD` sprint) sent to `9lmntstudio@gmail.com` (`(613) 400-9691`), or PayPal Business Invoice for international clients.
- **Client Website Revenue (Customers -> Client)**: All menu orders, catering deposits, tickets, and e-Commerce checkout go straight to the client's PayPal Commerce merchant account with `0%` commission taken by 9LMNTS Studio.

---

## 5. Active Local Auto-Refreshing MCP Setup (Production)

- **Stdio Wrapper**: `c:\Users\Darnl\Downloads\9LMNTS Studio cyber V2\scripts\mcp-paypal-live.mjs` wraps `@paypal/agent-toolkit/mcp` (`ALL_ACTIONS`) over `StdioServerTransport`, reading `PAYPAL_CLIENT_ID`, `PAYPAL_CLIENT_SECRET`, and `PAYPAL_ENVIRONMENT=PRODUCTION` from the gitignored workspace `.env` and automatically refreshing OAuth2 tokens (`https://api-m.paypal.com/v1/oauth2/token`) before the 9-hour TTL expires (no browser OAuth popup needed, unlike remote `https://mcp.paypal.com/mcp`).
- **Frontend Env Boundary**: Frontend apps (e.g., `live-9lmntsstudio-com/.env`) store **only** public `VITE_PAYPAL_CLIENT_ID` — never `PAYPAL_CLIENT_SECRET`.
