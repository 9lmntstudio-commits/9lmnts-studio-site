---
name: visual-concept-packager
description: >-
  Renders local 9LMNTS Studio client prototypes in Chrome DevTools MCP at
  1440x1020, hides floating overlays during capture, verifies Unified Slide 1
  Dark Mode contrast, and packages a clean 6-slide PNG concept deck into
  assets/<slug>/outreach_slides/ plus an interactive carousel review artifact.
  Activate whenever previewing UI/UX or preparing outreach visuals.
---

# 9LMNTS Visual Concept Packager (`visual-concept-packager`)

## Overview
Eliminates manual code pasting and multi-step browser setup by rendering local HTML prototypes via `chrome-devtools-mcp` at `1440×1020` and exporting a standardized **6-Slide Unified Dark Mode Concept Deck** ready for both user approval (via an inline Antigravity ````carousel artifact) and client outreach (`assets/<slug>/outreach_slides/`).

## Dependencies
- **`brand-design-expert`**: Enforces the Unified Slide 1 Dark Mode palette (`#130F0C` / `#1E1814` / `#211A15` + `#C69C6D` camel-bronze + `#E5C178` gold) before capturing screenshots.
- **MCP Server**: `chrome-devtools-mcp` (`new_page`, `resize_page`, `evaluate_script`, `take_screenshot`).

## Standardized 6-Slide Concept Deck Architecture
Every `Chef OS` hospitality concept deck must capture these exact 6 views at `1440×1020`:

1. **`01_<slug>_hero_dark.png`**:
   - Top of page (`scrollY: 0`) showing the Dual-Location Hub Switcher, Hero Headline, and 3-Plate Interactive Culinary Carousel.
2. **`02_<slug>_menus_dark.png`**:
   - Scrolled to `#menus` (`Explore Our Delicious Menus` — 4 Event Category Cards: *Weddings & Galas*, *Corporate Events*, *Private Parties*, *Buffet Packages* in `#211A15` smoked espresso dark mode).
3. **`03_<slug>_signature_dishes_dark.png`**:
   - Scrolled to the **6 Signature Dish Cards** (`scrollY: 1580`) showing authentic dish plates, real prices in `#E5C178` gold, and `Order` buttons.
4. **`04_<slug>_catering_calculator_dark.png`**:
   - Scrolled to `#catering` showing the interactive guest count slider (`15–300+ guests`), package tier selector (`$18–$24/guest`), and real-time **50% Online Customer Deposit** breakdown.
5. **`05_<slug>_stripe_checkout_dark.png`**:
   - Trigger `openDepositModal('catering')` via `evaluate_script` to capture the **Stripe Online Checkout Modal** (Credit Card, 1-Tap Apple Pay / Google Pay, and 4× Installment Split).
6. **`06_<slug>_culinary_host_reviews_dark.png`**:
   - Close modal (`closeDepositModal()`) and scroll to `#story` to capture **Meet Your Culinary Host** (clean unbranded espresso chef coat portrait), **Why Choose Us**, and **4.9★ Client Reviews** in Unified Dark Mode.

## Critical Capture Rules (Mandatory)
1. **Hide `.floating-dock` During Section Captures**:
   - Before capturing Slides 2, 3, 4, and 6, run:
     ```javascript
     () => {
       const dock = document.querySelector('.floating-dock');
       if (dock) dock.style.display = 'none';
     }
     ```
   - Restore `dock.style.display = ''` after screenshots complete.
2. **Cache-Busted Artifact Filenames**:
   - Antigravity's markdown viewer caches images by filename. Whenever re-shooting after a UI/UX edit, increment the version prefix in the artifact directory (e.g., `<slug>_v2_dark_*.png`, `<slug>_v3_dark_*.png`) so the user immediately sees the updated render.
3. **Export to Outreach Folder**:
   - Copy all 6 approved PNGs to `c:\Users\Darnl\Downloads\9LMNTS Studio cyber V2\assets\<slug>\outreach_slides\01..06_*.png` so they are immediately ready to attach on WhatsApp, Instagram DM, or email.
