---
name: immersive-3d-scrollytelling
description: >-
  AI-Generated Pseudo-3D Explosion, Canvas Frame-Sequence Scrubbing & 2.5D Virtual Camera Rigging Skill
  (Zoom, Focal-Point Pan, Dolly Portals, Multi-Plane Parallax). Uses AI images & AI video clips instead
  of complex Three.js 3D modeling to create $15,000+ Apple & Awwwards scroll experiences. Activate
  whenever building 3D-feel scrolling, exploding product/architecture reveals, or camera-pan websites.
---

# AI Pseudo-3D Explosion & Virtual Camera Scrollytelling Skill (v4.0)

**Core Engineering Philosophy:**
Do **not** waste time or break visual realism with real-time Three.js geometric primitives (`CylinderGeometry`, `BoxGeometry`) or heavy `.glb` 3D modeling pipelines. Instead, achieve **hyper-realistic $15,000+ 3D scroll & explosion visuals** using **AI-Generated Studio Keyframes & Video Clips** driven by **GSAP `ScrollTrigger` `<canvas>` Scrubbing** and **2.5D Virtual Camera Rigging (Zooms, Pans & Depth Portals)**—distilled from:
- **GreenSock Official `<canvas>` `imageSequence` Scrubber** (Apple AirPods Pro / MacBook Pro technique)
- **[`Relaxkartikey/prior-gsap-animation-portfolio-website-template`](https://github.com/Relaxkartikey/prior-gsap-animation-portfolio-website-template)** (Vanilla HTML/JS `<canvas>` frame-scrubbing + camera zoom portals)
- **[`KaranChandekar/scroll-storytelling`](https://github.com/KaranChandekar/scroll-storytelling)** (Multi-beat pinned scroll storytelling & parallax)
- **[`darkroomengineering/satus`](https://github.com/darkroomengineering/satus)** (Lenis smooth inertia synced to GSAP `ScrollTrigger`)

---

## 1. The Three AI-Driven Pseudo-3D Camera Techniques

Combine these three techniques across a site so the user experiences continuous 3D depth, explosion, and camera motion using **only AI images and AI video clips**:

### Technique A: AI Explosion / Deconstruction `<canvas>` Frame Scrubber (Hero Showstopper)
1. **Generate 2 Photorealistic AI Studio Keyframes (`image-generator`):**
   - **Keyframe 1 (`start.jpg`):** Subject assembled in dramatic studio lighting on a seamless matching backdrop (e.g., `#000000` pitch black or exact brand canvas tone), 85mm commercial lens, zero text.
   - **Keyframe 2 (`end.jpg`):** Exact same camera angle, lens, and lighting—subject suspended in a **dramatic zero-gravity exploded / deconstructed state** (e.g., roof & steel layers separated vertically; espresso crema erupting with floating beans; culinary ingredients levitating above matte stoneware).
2. **Generate Smooth AI Motion Clip & Extract Frames:**
   - Run **Google Gemini Omni 1.1 Flash** (`generate_video.py --first-frame start.jpg --last-frame end.jpg --duration 5`), **Google Labs Flow (Veo 3.1 Camera Controls: Dolly, Orbit, Pan, Ingredients-to-Video)**, or **Google Cloud `mcp-genmedia` (`mcp-veo-go`)** to create a smooth slow-motion explosion/camera-orbit video clip.
   - Extract `60–120` lightweight WebP frames via `ffmpeg`:
     ```bash
     ffmpeg -y -i explosion.mp4 -vf "fps=24,scale=1600:-2" -c:v libwebp -q:v 82 frames/frame_%04d.webp
     ```
   - *(Note: Never bind scroll directly to `<video>.currentTime`—video keyframe decoding stutters backward on mobile/Safari. Always draw preloaded WebP frames onto a `<canvas>`).*
3. **Scrub with HiDPI `object-fit: cover` Math + LERP Smoothing:**
   - Pin a `100vh` `<canvas>` over a `320vh–400vh` scroll track and map `ScrollTrigger` progress (`scrub: 0.6`) to the frame playhead while animated SVG callout pins appear at exact explosion milestones.

---

### Technique B: 2.5D Virtual Camera Rig (Scroll-Linked Zooms, Focal-Point Pans & Rack Focus)
Even with **1–3 ultra-high-resolution AI images** (zero video required!), you can create a breathtaking pseudo-3D camera tour by treating the viewport as a **moving cinema lens** over a high-res (`2400px+`) scene:

```javascript
// Virtual Camera Waypoint Choreography (GSAP ScrollTrigger Pinned Rig)
const camRig = gsap.timeline({
  scrollTrigger: {
    trigger: "#camera-stage-track",
    start: "top top",
    end: "+=320%",
    pin: true,
    scrub: 0.85 // Buttery camera inertia
  }
});

camRig
  // Waypoint 1: Wide Establishing Shot -> Push-in & Pan to Upper-Right Detail
  .to("#ai-scene-layer", {
    scale: 2.15,
    xPercent: -22,
    yPercent: 16,
    rotationZ: -0.8,
    ease: "power2.inOut",
    duration: 1
  }, 0)
  .fromTo("#hotspot-callout-1", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.35 }, 0.65)

  // Waypoint 2: Smooth Lateral Camera Whip-Pan to Lower-Left Mechanism
  .to("#hotspot-callout-1", { autoAlpha: 0, y: -16, duration: 0.25 }, 1.2)
  .to("#ai-scene-layer", {
    scale: 2.45,
    xPercent: 24,
    yPercent: -18,
    rotationZ: 0.6,
    ease: "power2.inOut",
    duration: 1.1
  }, 1.2)
  .fromTo("#hotspot-callout-2", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.35 }, 1.95)

  // Waypoint 3: Dramatic Z-Axis Dolly Pull-Back to Full Hero Composition
  .to("#hotspot-callout-2", { autoAlpha: 0, duration: 0.25 }, 2.5)
  .to("#ai-scene-layer", {
    scale: 1.0,
    xPercent: 0,
    yPercent: 0,
    rotationZ: 0,
    ease: "power3.out",
    duration: 1
  }, 2.5);
```

**Adding 2.5D Depth Layers to the Camera Rig:**
- **Layer 0 (Deep Background):** Main AI architectural/product scene (`transform-origin: center center`, `will-change: transform`).
- **Layer 1 (Foreground Floating Out-of-Focus Particles / Vignette):** Subtle transparent dust/steam/bokeh foreground layer moving at `1.45x` the pan speed with `filter: blur(4px)`—creating immediate binocular 3D parallax!
- **Layer 2 (Mouse Tilt Micro-Parallax):** Subtle pointer-linked tilt (`rotateX(±2.5deg) rotateY(±3.5deg)` inside `perspective: 1400px`) so the scene responds alive to cursor movement even when the user stops scrolling.

---

### Technique C: Z-Axis Expanding Scroll Portal (`clip-path` Cinema Window)
Used between editorial sections to transition from clean typography into a full-screen AI motion loop or exploded scene:

```javascript
gsap.fromTo("#portal-media-wrap",
  {
    clipPath: "inset(18% 22% 18% 22% round 16px)",
    scale: 0.92
  },
  {
    clipPath: "inset(0% 0% 0% 0% round 0px)",
    scale: 1.0,
    ease: "none",
    scrollTrigger: {
      trigger: "#portal-section",
      start: "top top",
      end: "+=160%",
      pin: true,
      scrub: 0.5
    }
  }
);
```

---

## 2. Production `<canvas>` Sequence Scrubber Snippet (HiDPI Cover + Responsive)

Always use proportional `cover` / `contain` canvas math so the AI explosion never stretches or distorts on ultrawide monitors or vertical iPhones:

```javascript
function createCanvasSequenceScrubber({ canvasSelector, triggerSelector, frameUrls }) {
  const canvas = document.querySelector(canvasSelector);
  const ctx = canvas.getContext("2d");
  const images = new Array(frameUrls.length);
  const playhead = { frame: 0 };

  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    renderFrame();
  }

  function renderFrame() {
    const idx = Math.min(frameUrls.length - 1, Math.max(0, Math.round(playhead.frame)));
    const img = images[idx];
    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;
    ctx.clearRect(0, 0, cw, ch);

    // Responsive cover/contain hybrid: cover on desktop, smart-fit on portrait mobile
    const isMobile = window.innerWidth < 768;
    const scale = isMobile
      ? Math.max((cw * 0.95) / img.naturalWidth, (ch * 0.62) / img.naturalHeight)
      : Math.max(cw / img.naturalWidth, ch / img.naturalHeight);

    const drawW = img.naturalWidth * scale;
    const drawH = img.naturalHeight * scale;
    const drawX = (cw - drawW) * 0.5;
    const drawY = (ch - drawH) * 0.5;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  frameUrls.forEach((src, i) => {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
    img.onload = () => {
      images[i] = img;
      if (i === 0) renderFrame();
    };
  });

  window.addEventListener("resize", resizeCanvas, { passive: true });
  resizeCanvas();

  return gsap.to(playhead, {
    frame: frameUrls.length - 1,
    ease: "none",
    onUpdate: renderFrame,
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top top",
      end: "+=320%",
      pin: true,
      scrub: 0.65
    }
  });
}
```

---

## 3. Prompt Formula for AI Explosion & Camera-Pan Assets

When prompting `image-generator` or Gemini Omni Flash video for pseudo-3D scroll assets:
1. **High-Detail Macro Sharpness:** Request `8K medium-format commercial photography, Hasselblad H6D 80mm f/4, edge-to-edge tack-sharp detail` so when the virtual camera zooms in `2.4x`, every texture (water droplets, steel welds, coffee crema bubbles, fabric weave) remains razor-sharp.
2. **Intentional Focal Landmarks:** Compose the scene with 3 distinct spatial zones (e.g., top crest, central core, base foundation) so the virtual camera pan has meaningful storytelling stops to visit on scroll.
3. **Zero Burned-In Text:** Always specify `zero text, zero labels, zero watermarks`—all typography and animated SVG callout lines are rendered cleanly in live HTML/SVG motion graphics on top of the visual!
