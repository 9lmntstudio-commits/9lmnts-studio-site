# VÒLT Hybrid Energy & Pre-Workout — White-Label Client Deployment Manual

## 1. Directory Architecture & Asset Map

```
public/
├── assets/
│   └── preworkout/
│       ├── hero-can.jpg        # 16oz ultra-matte black can with cold condensation beads
│       ├── exploded-can.jpg    # 3D deconstructed exploded can with floating ice & powder
│       ├── powder-tub.jpg      # 40-serving heavy obsidian tub with cyan metallic lid
│       ├── flavor-trio.jpg     # 3-can horizontal flavor lineup on glass pedestal
│       └── hero-sequence.mp4   # 60fps LERP video scrubbing playhead
└── demo/
    └── preworkout/
        ├── index.html          # High-performance 3D scrollytelling web application
        ├── BRAND_KIT.md        # Full identity, Pomelli tokens, clinical dosing matrix
        ├── SOCIAL_MEDIA_KIT.md # 3x 9:16 viral scripts, 6-slide carousel, ManyChat funnel
        └── README.md           # White-label deployment manual & query parameter overrides
```

---

## 2. The Scrollytelling Architecture (Pinterest Reference Benchmark)

- **Beat 01 · Hero Stage (0:00 – 0:06):**
  - Minimalist top navigation with brand logo, telemetry pill tabs, and Quick Cart badge.
  - Floating kinetic headline: *"OVERCLOCK YOUR OUTPUT."* with electric cyan skew.
  - Floating clinical telemetry card on the right: *"CLINICAL DOSING · 01 / 6,000mg L-Citrulline / 3,200mg Beta-Alanine"*.
  - Smooth 60fps video scrub playhead mapped to scroll velocity.
- **Beat 02 · The Unique Shop Selection Row (Pinterest Reference t=12s):**
  - Section title: *"One relentless formula. Five explosive expressions."*
  - Horizontal scroll shelf showing all 5 expressions:
    - Active item is **zoomed (1.18x)** with an **electric cyan radiant spotlight**.
    - Inactive items are dimmed (0.88x scale, 0.48 opacity).
    - Selecting any item floods the background liquid blend aura in real time.
    - Direct **"Add to Cart +"** and **"Lab Spec →"** buttons.
- **Beat 03 · Double-Row Clinical Telemetry Ticker (Pinterest Reference t=14s):**
  - Row 1: `[6,000mg L-Citrulline ★] [+] [3,200mg CarnoSyn®] [★] [300mg PurCaf® Organic] [+] [1,500mg L-Tyrosine]`
  - Row 2: `[0g Sugar ♦] [♥ 100% Non-Proprietary Label] [♦ Zero Synthetic Dyes] [★ 5 Calories] [♥ Fast-Acting Vasodilation]`
- **Beat 04 · Side Detail Drawer (`#sideDetailModal`):**
  - Slides smoothly from the right edge with:
    - High-res product zoom
    - Active compound milligram breakdown
    - Nitric Oxide Vasodilation meter, Neuro-Focus meter, and Muscular Endurance meter
    - Quick Cart integration
- **Beat 05 · Revenue & Order Engine:**
  - Slide-up bottom checkout drawer with live total calculation, 12-can case quantity stepper, wholesale gym pricing, and Interac e-Transfer autodeposit (`9lmntstudio@gmail.com`) / Direct SMS dispatch (`+16134009691`).

---

## 3. Client Demonstration & Instant Rebranding

1. **Founder Drawer Shortcut:** Press `Shift + B` anywhere on the page to open the live rebranding panel.
2. **URL Parameter Overrides:**
   - `?brand=Titan`: Instantly rewrites the brand logo and titles to "Titan".
   - `?city=Toronto`: Updates lab location and dispatch hub.
   - `?accent=39FF14`: Forces the accent color to Acid Neon Lime.
