---
name: phygital-webar-merch-engine
description: >-
  Manages Station 08 (merch.html) and Runway OS (04_Runway_OS_Fashion_Battle.html),
  including the 18-Piece Phygital Streetwear & Wearable Advertising Catalog,
  350 GSM tees, 450-480 GSM heavyweight hoodies, NFC/QR scannable 3D holographic
  energy wings, and Darnley 2027 Kemet Gold lookbooks. Activate when editing
  merch, lookbooks, or WebAR apparel drops.
---

# Phygital WebAR Streetwear & Wearable Ad Engine (`phygital-webar-merch-engine`)

## Overview
Governs **Station 08 (`merch.html`)** and **`04_Runway_OS_Fashion_Battle.html`**: 9LMNTS Studio's physical-to-digital streetwear line and B2B **Wearable Advertising** infrastructure where heavyweight garments act as scannable WebAR portals and sponsor billboards.

## Product & Technical Specifications
1. **Garment Blank Standards**:
   - **Heavyweight Tees**: `350 GSM` combed organic cotton, boxy drop-shoulder silhouette.
   - **Cyber Cypher & Kemet Gold Hoodies**: `450–480 GSM` French terry, double-lined hood, embedded NFC/QR woven sleeve badge.
2. **WebAR Spatial Activation**:
   - Scanning the garment's chest/back graphic or sleeve NFC/QR trigger launches browser-based **3D Holographic Energy Wings** (Solar Orange `#FF5500`, Cyber Teal `#00F0FF`, Kemet Gold `#FFB300`, Aether Purple `#B026FF`) + unlocks uncompressed WAV stem drops from `vault.html`.
3. **Wearable Advertising Model (B2B Sponsor Placements)**:
   - Brands and event sponsors can sponsor limited 50–100 piece apparel runs where every scan routes street foot-traffic directly into the sponsor's ManyChat/Supabase lead funnel.

## Workflow
- When adding or updating products in `merch.html` or `04_Runway_OS_Fashion_Battle.html`, maintain the `.ar-wing-card` 50% glassmorphic bento styling (`backdrop-filter: blur(28px)`), size selector pills (`S, M, L, XL, XXL`), and interactive pre-order checkout modal.
