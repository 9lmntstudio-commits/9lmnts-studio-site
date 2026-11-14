# DESIGN.md — 9LMNTS Studio Showroom + Client Brand Chameleon Spec

## 1. Visual Architecture Overview

`9lmntsstudio.com` separates **who we are** (an elite Obsidian + Flame Orange AI Creative Agency rooted in the 9 Elements of Hip-Hop) from **what we build** (authentic, industry-native digital storefronts and operating systems for each client).

### A. Outer Agency Showroom Tokens
- **Void Obsidian (`--bg-void`)**: `#050505` — Root page canvas
- **Deep Obsidian (`--bg-obsidian`)**: `#08090C` — Workflow showcase & modal backdrop
- **Subtle Glass (`--bg-glass`)**: `rgba(12, 14, 20, 0.72)` — Sticky pill header, navigation rail, and modal surfaces with `backdrop-filter: blur(18px)`
- **Flame Orange (`--accent-flame`)**: `#FF5500` (hover `#FF6B1A`) — Primary CTAs, `9L` wordmark, handwritten script `+ AI` / `Studio`, leader pins, and orbital glow
- **Telemetry Cyan (`--accent-cyan`)**: `#00D2FF` — Technical nodes & LUA/Gaming bridge
- **Live Matrix Green (`--accent-live`)**: `#00FF88` — Ottawa Studio availability beacon
- **Hairline Borders**: `rgba(255, 255, 255, 0.10)` (never heavy cards or boxed grids)

### B. Typography Hierarchy
- **Display & Wordmark**: `Syne` (700/800) — High-impact geometric headers (`9 Elements`, `SPARK`, `FLOW`, `CYPHER`)
- **Handwritten Script**: `Alex Brush` & `Caveat` — Warm human signature contrasting sharp tech (`+ AI`, `Studio`)
- **UI & Client Copy**: `Plus Jakarta Sans` (400–800) — Frictionless business-owner readability
- **Editorial Accent**: `Instrument Serif` (regular/italic) — Client stage headlines inside `#work`
- **Pricing & Telemetry**: `JetBrains Mono` (400–600) — Monospace prices, turnaround timers, and sprint tags

---

## 2. Layout Discipline (Zero Bento Mandate)
1. **No Bento Grids on the Agency Shell**: Do not box agency concepts inside symmetrical multi-card grids. Use asymmetric open dark space (`#050505`), floating text columns, hairline SVG leader pins anchored to `/assets/hero-orchestrator.jpg`, and progressive modal overlays (`85vh` frosted obsidian) when visitors want deeper breakdowns.
2. **Subtle Ambient Culture Layer**: Low-opacity ambient SVG glyphs (`#FFFFFF` at 3–6% opacity, plus subtle `#FF5500` AI sparks) drifting slowly behind the hero and workflow section — evoking vinyl grooves, spray nozzles, sneaker silhouettes, microphones, code brackets, and neural nodes without visual clutter.

---

## 3. Client Brand Chameleon Firewall (`#work`)
When the visitor enters `#work`, each live industry demonstration swaps cleanly into its authentic palette:
1. **Shawarma & Mediterranean Bistro (`#stage-shawarma`)**: `#FAF6EF` Warm Limestone · `#A84A28` Terracotta · `#FF5500` PayPal Complete Payments 1-Tap Order & Catering Calculator
2. **Kremas & Crema Specialty Coffee (`#stage-crema`)**: `#FFFFFF` Gallery White · Scroll-scrubbed espresso extraction + PayPal Express Menu
3. **Atelier Streetwear Capsule (`#stage-streetwear`)**: `#FFFFFF` Studio Light · Floating hover garment rack + PayPal Express Slide-Out Cart
4. **Artisan Bakery & Smash Co. (`#stage-bakery`)**: `#F7F5F0` Editorial Cream · Interactive Morning/Evening split + Box Checkout
5. **Project LOA & Sound Clash Arena (`#stage-lua`)**: `#08090C` Night HUD · `#00D2FF` Cyber Cyan · Direct live bridges to `clash.9lmntsstudio.com` and `artist.9lmntsstudio.com`
