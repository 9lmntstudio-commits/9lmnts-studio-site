---
name: chef-os-menu-scraper
description: >-
  Scrapes a target restaurant's real menu items, authentic cultural ingredients,
  local pricing, and branch addresses/phones, then orchestrates the
  image-generator subagent to produce 100% dish-accurate overhead/45-degree food
  photography on matte-black stoneware plus an unbranded executive chef coat
  portrait. Activate when onboarding any restaurant or hospitality lead.
---

# Chef OS Menu Scraper & Authentic Culinary Asset Generator (`chef-os-menu-scraper`)

## Overview
Ensures every `Chef OS` restaurant concept or build uses **100% authentic, dish-accurate food photography** and **real local menu pricing** rather than generic stock imagery.

## Dependencies
- **`brand-design-expert`**: Supplies the art direction (`#130F0C` dark espresso lighting, matte-black circular stoneware plates, warm golden-amber rim light).
- **Subagent**: `image-generator` (for generating the 6 signature dish plates, 2 catering banquet/buffet shots, and 1 clean unbranded Culinary Host portrait).

## Workflow

### Step 1: Scrape Real Restaurant Menu, Pricing & Branches
1. Use `read_url_content` and `search_web` on the restaurant's official domain, UberEats/DoorDash listings, and local Ottawa–Gatineau directories.
2. Extract:
   - Exact branch street addresses and phone numbers (e.g., `606 Rideau St (613) 241-1400` & `1563 Bank St (613) 421-4005`).
   - Owner / Executive Chef name.
   - Top **6 Signature Dishes** with exact traditional components and real CAD prices (e.g., *Griot Royal `$23.00`*, *Diri Djon Djon `$24.99`*, *Tassot Cabrit `$25.00`*, *Grand Fritaille `$46.00`*, *Légume Haïtien & Poulet Créole `$24.00`*, *Griot Poutine `$17.50`*).
3. Inspect existing images on the target's website: if they only have cartoon graphics, low-res snapshots, or mismatched stock photos, proceed to Step 2.

### Step 2: Generate the 9 Authentic Culinary & Hospitality Assets (`assets/<slug>/`)
Invoke the `image-generator` subagent with explicit culinary prompts specifying every garnish, starch, sauce, and vessel:
1. **6 Signature Dish Plates (`griot_royal.jpg`, `diri_djon_djon.jpg`, etc.)**:
   - **Angle**: Overhead (90°) for circular composed plates; 45° editorial angle for sharing platters and poutine bowls.
   - **Vessel**: Matte-black artisanal ceramic stoneware on a dark walnut/espresso surface.
   - **Accuracy**: Every cultural ingredient mentioned in the card description (e.g., *banane pesée*, *diri kole ak pwa*, *pikliz*, *sos pwa*, *akra*, *St-Albert curds*) must be visibly rendered on the plate.
2. **2 Event & Catering Shots (`catering_wedding_banquet.jpg`, `corporate_buffet_trays.jpg`)**:
   - Gold-accented chafing dishes and executive office catering trays filled with the restaurant's actual cuisine.
3. **1 Culinary Host Portrait (`chef_host.jpg`)**:
   - **STRICT RULE — ZERO LOGOS / ZERO WATERMARKS**: Must wear a **clean, unbranded dark-espresso double-breasted executive chef coat** (no third-party catering patches, no stock watermarks, no text on clothing).

### Step 3: Compress & Wire Into HTML
1. Convert generated PNGs in the artifact folder to optimized `.jpg` files in `assets/<slug>/` using PowerShell `System.Drawing.Bitmap` so page load stays fast.
2. Wire all 9 image paths into the Hero 3-Plate Carousel, Event Category Cards, 6 Signature Dish Cards, and Meet Your Culinary Host section.
