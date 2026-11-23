# Kremas Coffee Co. — Brand Asset & Engineering Package
**Archive Directory:** `public/demo/coffee/`  
**Production Route:** `/demo/coffee` (`https://9lmntsstudio.com/demo/coffee`)  
**Design System Version:** 2.0 (9LMNTS Studio Commercial Architecture)  
**Status:** 100% Production Ready & Client Reusable

---

## 1. Package Structure & File Inventory

```
public/demo/coffee/
├── index.html            <- Complete 3D Video Scrubbing Web App (0:05–0:06 Hero | 0:04–0:05 Tint | 0:07–0:10 Story)
├── BRAND_KIT.md          <- Complete Brand Strategy, Haitian Heritage Story, Tokens & Packaging Specs
├── SOCIAL_MEDIA_KIT.md   <- 3x 9:16 Video Scripts, 6-Slide IG Carousel, DM Automation & Agency Pitch
└── README.md             <- This Reusability & Deployment Manual

public/assets/coffee/
├── hero-sequence.mp4     <- 10.02s 60fps 4K video sequence of uncorking explosion & crema pour
├── still-01.jpg          <- Cork explosion bottle with star anise & cinnamon sticks
├── still-02.jpg          <- Crema pour with floating beans in stoneware mug
├── still-03.jpg          <- Artisanal V60 pour-over bloom extraction
└── still-04.jpg          <- Finished bottle beside vintage cocktail coupe with star anise garnish
```

---

## 2. Quick-Start Reusability: How to White-Label for a New Client

To adapt this design system for a new specialty coffee roaster, distillery, or beverage brand in under 5 minutes:

### Option A · Dynamic In-Browser Rebranding (Zero-Code)
1. Open the live page: `https://9lmntsstudio.com/demo/coffee`
2. Press **`Shift + B`** on your keyboard to reveal the **⚡ Founder Brand Switcher** drawer.
3. Type the new brand name and city (e.g. `Velvet Ember` and `Montreal`). The entire UI (logo, titles, marquee, copyright, SMS links) updates in real time.
4. Or share a client demo URL with query parameters:
   - `https://9lmntsstudio.com/demo/coffee?brand=Velvet+Ember&city=Montreal`

### Option B · Standalone Project Export
1. Copy `public/demo/coffee/` and `public/assets/coffee/` into any static host (Cloudflare Pages, Netlify, Vercel).
2. Update the color tokens in `index.html` (`:root`):
   ```css
   --bg: #0A0807;          /* Obsidian background */
   --accent: #C86428;      /* Primary single accent color */
   ```
3. Update payment destinations:
   - Search for `9lmntstudio@gmail.com` to swap the Interac e-Transfer autodeposit address.
   - Search for `+16134009691` to update the SMS concierge dispatch phone number.

---

## 3. Core Features Built-In

1. **Hardware-Accelerated 60fps Video Playhead Scrubbing:**
   - 0:05 to 0:06: Hero section with pinned headline and golden crema pour.
   - 0:04 to 0:05: Close-up liquid vortex with real-time dynamic liquid color tinting via CSS `mix-blend-mode: color`.
   - 0:07 to 0:10: Bottle & cocktail coupe reveal with editorial story, metrics, craft method, and directory.
2. **Haitian Bakery Pairing & Upsell Engine:**
   - *Pain Patate*, *Dous Makòs*, *Tablèt Kokoye*, and *Gâteau au Beurre Épicé* with instant "Add to Box +" buttons.
   - Slide-up checkout drawer dynamically recalculates subtotal, shipping, and pre-fills SMS reservation orders.
3. **Zero Developer Jargon Law:**
   - 100% benefit-driven, sensory commercial copy.

---

## 4. Licensing & Studio Rights
Crafted by **9LMNTS Studio** (`9lmntstudio@gmail.com`). Designed for high-conversion multi-client agency delivery ($2,500 – $5,000 CAD).
