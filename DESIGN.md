# DESIGN.md — 9LMNTS Studio Design System & Visual Specification

**Brand Identity:** 9LMNTS Studio  
**Design Philosophy:** Tactile Minimalist Tech / Modern High-Converting B2B Creative Agency  
**Target Visual Benchmark:** Clean Split-Hero & Bento Grid (Reference: Pinterest agency standard)  
**Conversion Focus:** Immediate Founder-Led Cash Flow ($500 – $5,000 Sprints with 50% Upfront Interac e-Transfer Deposit)

---

## 1. Color System (Strict Triad + Luminescence)

| Token | Light Mode Value | Dark Mode Value | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--canvas-base` | `#FFFFFF` (Crisp Paper) | `#08090C` (Obsidian Void) | Root page background |
| `--surface-card` | `#F8F9FA` (Soft Alabaster) | `#101218` (Smoked Obsidian) | Bento cards, containers |
| `--surface-elevated`| `#FFFFFF` (Pure White) | `#161922` (Elevated Charcoal) | Floating modals, popovers |
| `--border-subtle` | `rgba(0, 0, 0, 0.08)` | `rgba(255, 255, 255, 0.08)` | 1px hairline card borders |
| `--border-glow` | `rgba(255, 85, 0, 0.35)` | `rgba(255, 85, 0, 0.45)` | Active borders, hover states |
| `--text-primary` | `#0A0A0A` (Deep Carbon) | `#FFFFFF` (Stark White) | Display hero text, titles |
| `--text-secondary` | `#52525B` (Slate Graphite) | `#94A3B8` (Cool Slate) | Body copy, descriptions |
| `--text-tertiary` | `#71717A` (Muted Zinc) | `#64748B` (Muted Steel) | Telemetry labels, microcopy |
| `--brand-orange` | `#FF5500` (Flame Orange) | `#FF5500` (Flame Orange) | Primary CTAs, active highlights |
| `--brand-orange-hover`| `#E04B00` | `#FF6A1A` | Button hover/active states |
| `--brand-orange-subtle`| `rgba(255, 85, 0, 0.08)`| `rgba(255, 85, 0, 0.12)`| Accent badges, active pill backgrounds |

---

## 2. Typography Hierarchy

- **Hero Display:** `Syne` or `Inter Display`, 800 ExtraBold, `-0.035em` tracking.
- **Section H1:** `Inter`, 700 Bold, `-0.025em` tracking.
- **Bento Card Titles (H2):** `Inter`, 600 SemiBold, `-0.015em` tracking.
- **Body & Subtitles:** `Inter`, 400 Regular / 500 Medium, `160%` line-height.
- **Eyebrow Badges & Status:** `Inter`, 700 Bold, `+0.06em` letter-spacing, uppercase.
- **Telemetry & Numbers:** `JetBrains Mono` or `Inter`, 700 Bold, `tabular-nums`.
- **Signature Script (Logo):** `Caveat` or `Alex Brush` for "Studio" accent.

---

## 3. Spatial & Component Metrics (Strict 8pt Grid)

- **Container Max-Width:** `1200px` (with `24px` gutter on desktop, `16px` on mobile).
- **Corner Radii:**
  - Pills & Badges: `9999px`
  - Bento Modules & Cards: `24px`
  - Modal Dialogs: `24px`
  - Input Fields & Buttons: `12px`
- **Backdrop Blur:** `backdrop-filter: blur(16px)` on floating navigation and modals.

---

## 4. Commercial Offerings

> **Superseded (Oct 2026):** Current packages are Quick Fix (from $500), Launch Page ($1,800), Growth Website ($4,500), Signature System (from $8,500), Care Plan ($199/$449/mo) — see `GEMINI.md` §2. The legacy list below is kept for reference only.

### Legacy (pre-Oct 2026) — The 4 Commercial Offerings

1. **Modular System Upgrade** — `$500 CAD` (50% Deposit: `$250 CAD`)
   - 24–48h Turnaround. Drop-in interactive modal for existing websites without rebuilding.
2. **The Revenue Recovery System** — `$1,500 CAD` (50% Deposit: `$750 CAD`)
   - 3–5 Business Days. High-speed, mobile-first landing page with automated lead capture.
3. **The Turnkey Business OS** — `$3,000 CAD` (50% Deposit: `$1,500 CAD`)
   - 2–3 Weeks. [⭐ Most Popular] Complete digital headquarters, multi-step booking engine, and database sync.
4. **The Enterprise Sprint** — `$5,000 CAD` (50% Deposit: `$2,500 CAD`)
   - 3–4 Weeks. Bespoke digital architecture, reusable Figma design system, advanced logic, and developer handoff.

---

## 5. Payment Rail Standard

- **Domestic Rail (Canada):** Direct Interac e-Transfer to `9lmntstudio@gmail.com` with Autodeposit enabled (Desjardins account). 0% merchant fees, instant 2-minute settlement.
- **International Rail (US/Global):** Direct PayPal 50% deposit checkout button.
- **Terms:** Strict 50% upfront deposit to lock in development sprint; 50% final balance upon staging review before live domain switch.
