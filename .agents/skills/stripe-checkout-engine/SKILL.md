---
name: stripe-checkout-engine
description: "[LEGACY / OPT-IN ONLY] Automates Stripe customer checkouts only when a client explicitly requests Stripe. Default B2C e-Commerce stack is paypal-commerce-engine."
---

# Stripe Checkout Engine Skill (`stripe-checkout-engine` — Legacy Opt-In)

> **NOTE:** 9LMNTS Studio defaults to **PayPal e-Commerce (`paypal-commerce-engine`)**. Only use this skill if a client explicitly requires Stripe (`stripe` in `mcp_config.json` is set `disabled: true` by default).

This skill interfaces directly with the official Stripe API via the registered `stripe` MCP server (`stripe-mcp`) and custom Stripe web components.

---

## 1. Registered MCP Server

In `C:\Users\Darnl\.gemini\config\mcp_config.json`:
- **Server Name**: `stripe`
- **Command**: `npx.cmd -y stripe-mcp`
- **Env**: `STRIPE_SECRET_KEY` (Supports test keys `sk_test_...` and live keys `sk_live_...`)

---

## 2. Core Capabilities

1. **Payment Links & Direct Checkout**:
   - Generate instant checkout links for client deposits (`$1,100 CAD` sprint kickoff).
   - Generate contender registration links for Competition OS arenas (`$50 - $250`).
   - Create 50% catering deposit checkouts for restaurant platforms (`Island Flava`, `Margo`, `Rozo`, `Baccanalle`).

2. **Customer & Card Vaulting**:
   - Create and query Stripe Customer objects.
   - Attach payment methods (Apple Pay, Google Pay, Credit/Debit cards).

3. **Webhook Verification**:
   - Handle `checkout.session.completed` events to automatically unlock tournament contender passes or confirm catering bookings.

---

## 3. Two-Layer Payment Rule Compliance

- **Agency Fee**: 9LMNTS Studio B2B sprint fees (`$1,100 CAD` deposit on `$2,200 CAD`) are collected via signed contract + Interac e-Transfer to `9lmntstudio@gmail.com`.
- **Client Website Revenue**: All customer online orders, catering bookings, ticket sales, and merchandise are processed directly via Stripe on the client's own accounts with 0% agency commission.
