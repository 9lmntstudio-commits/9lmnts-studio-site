---
name: ten-k-website-agency
description: >-
  The Complete 100% Google + Google Labs $10K-$15K Multi-Client Agency Website Pipeline synthesizing
  Google Labs (Flow / Veo 3.1 Camera Controls, Whisk, Stitch MCP, Pomelli, Mixboard), Gemini Omni 1.1
  Flash + Nano Banana 2.1 100-frame canvas explosions, and Bart Slodyczka / Metics Media 10k-websites
  felt-quality standards. Activate whenever building a new client website, customer acquisition flagship,
  or $10K scroll-animated commercial landing page.
---

# $10K Multi-Client Agency Website Skill — 100% Google & Google Labs Stack (v2.0)

Replaces third-party paid tools (such as Higgsfield) with a **100% Google + Google Labs Creative & MCP Pipeline**:
1. **Google Labs Stitch (`stitch` MCP — Live Connected):** Generates and syncs bespoke client `DESIGN.md` design systems and multi-screen UI layouts (`stitch.withgoogle.com`).
2. **Google Labs Pomelli & Mixboard (`labs.google`):**
   - **Pomelli:** Extracts a client's **Business DNA** (typography, color palette, brand voice, product visual style) from any existing URL for instant multi-client brand onboarding.
   - **Mixboard:** AI art-direction moodboarding canvas for client concept exploration before production.
3. **Nano Banana 2.1 (`gemini-nano-banana-2.1` / `image-generator`) + Google Labs Whisk (`labs.google/fx/tools/whisk`):**
   - Generates hyper-photorealistic **Assembled Start** and **Zero-Gravity Exploded End** studio keyframes with up to 14-image reference consistency, plus Subject + Scene + Style remixing in **Whisk**.
4. **Gemini Omni 1.1 Flash (`gemini-omni-1.1-flash`) + Google Labs Flow (`labs.google/fx/tools/flow` — Veo 3.1):**
   - Replaces Higgsfield completely using **Gemini Omni 1.1 Flash** (`--first-frame` + `--last-frame` transitions, `--video-reference` camera motion transfer, `--extend` up to 40s, `1080p`/`4K`) and **Google Labs Flow** (**Veo 3.1** explicit **Camera Controls**: *Dolly In/Out*, *Orbit*, *Pan*, *Pedestal*, *First-to-Last Frame*, and *Ingredients-to-Video*), plus **Google Cloud `mcp-genmedia`** (`mcp-veo-go`, `mcp-imagen-go`, `mcp-nanobanana-go`, `mcp-avtool-go`).
5. **`10k-websites` Agency Felt-Quality & Motion Choreography (`youtu.be/JB_Puhxrq6A`, `youtu.be/h2MjhbwVKLk`, `youtu.be/y1pM7bS6IY8`):**
   - FFmpeg 100-frame WebP `<canvas>` scroll scrubber + 2.5D Virtual Camera Zoom/Pan Rig + Lenis/GSAP motion graphics (`motion-graphics-director`).

---

## 1. Phase 1: Multi-Client Chameleon Brief (Google Labs Pomelli + Stitch MCP)

Before generating assets or writing code for any client, lock in a **bespoke Brand DNA Profile** so two client websites never look alike:

1. **Extract or Define Client Brand DNA (Pomelli / `brand-design-expert`):**
   - Identify the #1 high-margin action (*Book Site Walk*, *Lock VIP Table*, *Start Roast Subscription*, *Reserve Private Chef*, *Book Medspa Consult*).
   - If onboarding an existing business URL, extract their **Business DNA** (colors, typography character, tone) or select the optimal bespoke polarity from [`DESIGN.md`](../../../DESIGN.md): **Sunlit Warm Stone (`#F6F3EC`)**, **Architectural Raw Concrete (`#EAE8E2` ↔ `#0B0D10`)**, **Roasted Espresso (`#0B0908`)**, **Smoked Mahogany (`#120E0B`)**, or **Nocturnal Obsidian (`#060608`)**.
   - Lock **strictly ONE primary accent color** (`--accent`) authentic to the client's brand.
2. **Custom Font Pairing:** Pair an industry-matched display face (`Playfair Display`, `Instrument Serif`, `Cormorant Garamond`, `Syne`, `Space Grotesk`, `Archivo`, `Fraunces`) with a crisp body sans (`Plus Jakarta Sans`, `Geist`, `Inter`) and tabular monospace (`JetBrains Mono`) for numbers.
3. **Sync to Google Labs Stitch (`stitch` MCP):** Upload the client's `DESIGN.md` via `stitch:upload_design_md` + `stitch:create_design_system_from_design_md` when visual screen exploration is needed.
4. **Zero Demo / Wireframe Artifacts:** Never output `SLOT A`, `TEMPLATE #02`, *"Type your company name"*, or agency upsell banners. Every site ships as a **100% finished real-world brand**. (Prospect rebranding works invisibly via `?brand=Name&city=City` URL params + hidden `Shift + B` founder shortcut.)

---

## 2. Phase 2: 100% Google AI 3D Explosion & Camera-Motion Pipeline

### Step 2A: Exact Two-Keyframe Prompt Pair (`Nano Banana 2.1` / `image-generator` / Google Labs Whisk)
1. **Keyframe 1 — Assembled Hero Shot (`keyframe_start.jpg`):**
   > *Ultra-premium commercial studio photography of [client subject/product/architecture] centered on a seamless [exact background hex, e.g., deep pitch-black `#000000`] studio backdrop. Controlled directional rim lighting outlining curves and material textures, subtle specular reflections, high contrast, luxury editorial aesthetic. Shot on 85mm f/1.8 medium-format lens, ultra-sharp focus, zero clutter, zero text, zero logos, zero watermarks.*
2. **Keyframe 2 — Zero-Gravity Exploded View (`keyframe_end.jpg`):**
   > *Use Keyframe 1 as exact camera, lens, and lighting reference. Exploded technical studio view of the exact same [subject/product/architecture], every layer and component precisely separated and floating in mid-air alignment against the identical seamless `#000000` background. Visible internal craftsmanship and suspended micro-details, Apple-level industrial visualization, ultra-sharp focus, zero labels, zero annotations, zero text.*

### Step 2B: Smooth Cinema Camera & Explosion Video (`Gemini Omni 1.1 Flash` / `Google Labs Flow Veo 3.1`)
- **Automated Inside Antigravity (`gemini-omni-flash-api` — `gemini-omni-1.1-flash`):**
  Supports native `--first-frame` + `--last-frame` interpolation, cinema camera movements (*Dolly Zoom*, *360 Orbit*, *Macro Pan*, *Zero-Gravity Explosion*), `--video-reference` motion transfer, and `1080p`/`4K` output:
  ```bash
  python "C:\Users\Darnl\.gemini\config\plugins\gemini-api\skills\gemini-omni-flash-api\scripts\video\generate_video.py" \
    "Animated transition from assembled state to zero-gravity exploded view. Very smooth cinematic slow-motion, locked camera angle, consistent studio rim lighting, 30 FPS." \
    --first-frame keyframe_start.jpg \
    --last-frame keyframe_end.jpg \
    --aspect-ratio 16:9 \
    --duration 5 \
    --output hero_explosion.mp4
  ```
- **Interactive Director Companion in Google Labs (`Google Flow` — `labs.google/fx/tools/flow`):**
  Drop `keyframe_start.jpg` + `keyframe_end.jpg` into **Flow's Frames-to-Video (Veo 3.1)** with built-in **Camera Controls** (*Orbit*, *Dolly In*, *Pan*, *Pedestal*) when hands-on art-director camera tweaking is desired.

### Step 2C: Extract 90–120 WebP Frames via FFmpeg (Zero Video-Scrub Lag)
Never scrub an `<mp4>` `<video>` tag directly on scroll (causes severe keyframe decoding lag on mobile/Safari). Always extract numbered WebP frames:
```bash
ffmpeg -y -i hero_explosion.mp4 -vf "fps=24,scale=1600:-2" -c:v libwebp -q:v 82 frames/frame_%03d.webp
```

---

## 3. Phase 3: The 8-Pillar "$10K Felt Quality" Build Checklist

Every website built with this skill must pass all 8 pillars before presenting to the user:

1. **Pillar 1 — Instant Frame-0 Paint & Preloader:** Preload `frame_001.webp` first for instant paint, load remaining frames asynchronously with a sleek minimal percentage indicator (`00 — 100%`), and scrub smoothly at 60fps via GSAP `ScrollTrigger` + Lenis inertia.
2. **Pillar 2 — Synchronized Scroll Story Milestones:** Overlay 3–4 concise editorial beats (`0–22%`, `28–50%`, `56–78%`, `84–100%`) plus **self-drawing SVG callout leader lines** (`stroke-dashoffset`) pointing directly to the exploded layers.
3. **Pillar 3 — Secondary 2.5D Virtual Camera Zoom & Pan Stage:** Below the hero explosion, include a pinned **Virtual Camera Rig** that zooms (`scale: 2.3`) and pans (`xPercent` / `yPercent`) across ultra-crisp Nano Banana macro photography to inspect material details without needing 3D meshes.
4. **Pillar 4 — Motion Graphics Choreography:** Integrate split-line masked kinetic headlines (`yPercent: 110 -> 0`), `clip-path` shutter image reveals, and scroll-velocity kinetic marquees (per [`motion-graphics-director`](../motion-graphics-director/SKILL.md)).
5. **Pillar 5 — Varied Editorial Layout Pacing:** Alternate full-bleed cinema stages, `1px` Swiss hairline proof ledgers, asymmetric `5/7` sticky split stories, and tonal contrast bands—banning repetitive 3-box SaaS card rows.
6. **Pillar 6 — Real Interactive Revenue Engine:** Build a tactile, functional pricing/booking utility (live estimator slider, menu guest-count calculator, roast cadence configurator, or floorplan booth selector) using `tabular-nums`.
7. **Pillar 7 — Native Frictionless Checkout Sheet:** Wire primary CTAs to the spring-animated slide-up drawer (`#modalPayPalCheckout`) with Express Card/PayPal, **Canadian Interac e-Transfer (`9lmntstudio@gmail.com`)**, and SMS/WhatsApp dispatch (`+16134009691`).
8. **Pillar 8 — Mobile Safe-Zone & 60fps Audit:** Verify `375px` mobile and `1440px` desktop responsiveness (audited via **Chrome DevTools MCP**), `CLS = 0`, native touch momentum (`smoothTouch: false`), and `prefers-reduced-motion` support.
