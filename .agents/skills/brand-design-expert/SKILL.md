---
name: brand-design-expert
description: >-
  Master Brand Identity, UI/UX Art Direction, and DESIGN.md Reverse-Engineering
  Skill (combining Google Stitch DESIGN.md, VoltAgent/awesome-design-md,
  nextlevelbuilder/ui-ux-pro-max-skill, and Apple HIG standards). Activate
  whenever designing, auditing, or upgrading UI/UX, reverse-engineering
  Pinterest/reference inspirations into a DESIGN.md specification, generating
  brand-accurate photography assets, or syncing with Google Stitch MCP.
---

# Brand Design Expert & `DESIGN.md` Reverse-Engineering Skill

This skill upgrades the agent into an Executive Creative Director, Brand Systems Architect, and UI/UX Design Engineer on par with Apple Human Interface Guidelines (HIG), Stripe Press, and luxury hospitality/editorial design systems.

---

## 1. Core Anti-Slop & Brand Integrity Laws

1. **Never Generate Generic AI UI ("AI Slop")**:
   - Strictly ban default purple/indigo AI gradients, unstyled system cards, mismatched stock photos, and generic `Inter`/`Roboto`-only layouts without typographic hierarchy.
2. **Always Ground in a `DESIGN.md` Contract**:
   - Before writing or modifying any frontend UI, read or generate the project's `DESIGN.md` file (or reverse-engineer one from the user's reference URLs/Pinterest pins).
3. **100% Visual-to-Copy Asset Accuracy**:
   - Every image on a page MUST match the exact cultural, culinary, or product details in the text (e.g., if a card says *Diri Djon Djon Black Mushroom Rice* or *Tassot Cabrit*, never use generic ribs or stir-fry stock photos; scrape the real brand assets or generate exact dish/product photography via `image-generator` and inspect every generated image with `view_file` to ensure no hallucinated text/logos appear).
4. **Zero-Step Visual Verification & Cache-Busting**:
   - Always render HTML builds in a headless browser (`chrome-devtools-mcp` at `1440×1020`) and present full-color screenshot carousels in a Markdown artifact.
   - **CRITICAL CACHE-BUSTING RULE**: Never overwrite an existing screenshot filename in the artifact directory when updating visuals (the UI caches images by filename). Always increment the filename version (e.g., `slide_1_v2.png`, `slide_1_v3.png`) so the user immediately sees the new render.

---

## 2. How to Reverse-Engineer Reference Links / Pinterest Pins into `DESIGN.md`

When the user provides reference links (Pinterest, Dribbble, Awwwards, live URLs) or uploads inspiration images:

1. **Step 1 — Visual Extraction**:
   - Fetch or screenshot the reference image and inspect it with `view_file`.
   - Extract the **60-30-10 Color Architecture**:
     - `60% Dominant Surface` (e.g., Deep Espresso `#171310` + Warm Ivory contrast section `#FAF6F0`)
     - `30% Secondary Structural Surface / Card Glass` (e.g., `#221C17`, `#F2ECE1`)
     - `10% Brand Accent & Interactive Highlight` (e.g., Camel Bronze `#C69C6D`, Warm Gold `#D99B26`)
   - Extract the **4-Tier Typographic System**:
     - `Display / Hero Serif` (e.g., `Cormorant Garamond` / `Playfair Display`, tight tracking `-0.02em`)
     - `Signature / Script Accent` (e.g., `Alex Brush` for founder/chef signatures)
     - `UI / Body Sans` (e.g., `Plus Jakarta Sans` / `Inter`)
     - `Numeric / Price Tabular` (`font-variant-numeric: tabular-nums`)
   - Extract **Spatial & Component Tokens**:
     - Border radii (`999px` pill CTAs, `24px` editorial cards, `44px` mobile device frames)
     - Lighting & elevation (warm ambient radial glows, multi-layered drop shadows, `1px` specular borders)

2. **Step 2 — Write or Update `DESIGN.md`**:
   - Compile the extracted tokens into a machine-parseable YAML frontmatter + Markdown specification in `DESIGN.md` (compatible with Google Stitch's `upload_design_md` and `create_design_system_from_design_md` MCP tools).

---

## 3. Pre-Built Brand Archetype Presets (`ui-ux-pro-max` Library)

Use these curated design system matrices when matching a client vertical:

| Vertical Archetype | Surface Palette (Dark / Light Rhythm) | Accent Tokens | Typography Pairing | Key Signature UI Pattern |
| :--- | :--- | :--- | :--- | :--- |
| **1. Luxury Hospitality & Catering (`Chef OS` / Caterix × Bon Appétit)** | `#171310` Espresso Charcoal $\leftrightarrow$ `#FAF6F0` Warm Ivory | `#C69C6D` Camel Bronze, `#D99B26` Amber Gold | `Playfair Display` + `Cormorant Garamond` + `Alex Brush` + `Plus Jakarta Sans` | Overhead 3-plate circular carousel, sunrise arc, warm ivory menu cards, cursive chef signature, Stripe deposit calculator |
| **2. Executive Corporate & Venture (`Pitch OS` / Stripe × Linear)** | `#0A0D14` Obsidian Slate $\leftrightarrow$ `#F8FAFC` Crisp Alabaster | `#635BFF` Stripe Indigo, `#10B981` Signal Emerald | `Instrument Serif` + `Plus Jakarta Sans` + `JetBrains Mono` | Live tabular telemetry bars, 1px hairline bento grids, real-time contender duel meters, instant Stripe underwriting |
| **3. High-Voltage Arena & Nightlife (`Sound Clash OS` / Boiler Room)** | `#070709` Carbon Black $\leftrightarrow$ `#12131A` Smoked Glass | `#FF3B30` Clash Crimson, `#FFB800` Dubplate Gold | `Syne` / `Clash Display` + `Space Grotesk` + `JetBrains Mono` | Live decibel/crowd vote meters, neon-rimmed VS contender cards, VIP pass unlock drawer |
| **4. Editorial Haute Couture (`Runway OS` / Vogue × SSENSE)** | `#FAF8F5` Gallery Paper $\leftrightarrow$ `#111111` Ink Black | `#8C6D46` Champagne Bronze | `Bodoni Moda` / `Cormorant` + `Inter` | Full-bleed portrait lookbooks, ultra-thin `1px` borders, editorial index numbering (`01 / 08`) |

---

## 4. Google Stitch MCP Sync Workflow

Whenever the user wants to push the local `DESIGN.md` into Google Stitch:
1. Read `DESIGN.md` and base64-encode its UTF-8 contents.
2. Call `stitch:upload_design_md` with `projectId` and `designMdBase64`.
3. Immediately call `stitch:create_design_system_from_design_md` to render and apply the design system across Stitch screens.
