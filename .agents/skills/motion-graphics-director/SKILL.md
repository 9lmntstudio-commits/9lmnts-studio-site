---
name: motion-graphics-director
description: >-
  Awwwards & Broadcast Motion Graphics Engineering Skill synthesizing FullStackEmpire/GSAP-Awwwards-Website,
  remotion-dev/skills, DavidHDev/react-bits, and ibelick/motion-primitives. Delivers kinetic typography,
  geometric clip-path wipes, self-drawing SVG callout HUDs, velocity-reactive marquees, and staggered
  motion choreography across multi-client agency websites and commercial videos. Activate whenever
  designing animations, kinetic text, scroll transitions, HUD callouts, or motion graphics.
---

# Motion Graphics Director Skill (v1.0)

Distilled from the leading open-source motion design & creative coding repositories:
- **[`FullStackEmpire/GSAP-Awwwards-Website`](https://github.com/FullStackEmpire/gsap-awwwards-website)** & **[`rof1yev/mojito_with_gsap`](https://github.com/rof1yev/mojito_with_gsap)** — GSAP `ScrollTrigger` timelines, `clip-path` geometric wipes, and split-text kinetic choreography.
- **[`remotion-dev/skills`](https://github.com/remotion-dev/skills)** — Frame-accurate interpolation, camera choreography, spring physics, and commercial social reel motion graphics.
- **[`DavidHDev/react-bits`](https://github.com/DavidHDev/react-bits)** & **[`ibelick/motion-primitives`](https://github.com/ibelick/motion-primitives)** — Kinetic text reveals, magnetic cursors, number tickers, and spotlight interactions.
- **Apple WWDC *Designing Fluid Interfaces*** — Interruptible springs, velocity handoff, and compositor-only 60fps smoothness.

---

## 1. The 5 Core Web Motion Graphic Systems

Every 9LMNTS Studio client build must weave **at least 3 of these 5 motion graphic systems** into the page so the experience feels alive, directed, and unmistakably custom:

### System 1: Masked Kinetic Typography (Split-Line & Split-Word Reveals)
Never use lazy generic `opacity: 0; transform: translateY(30px)` fade-ups on every block. Use **architectural baseline masks** where headlines slice cleanly up from invisible horizon lines:

```html
<h1 class="hero-title">
  <span class="line-mask"><span class="line-inner">Architectural</span></span>
  <span class="line-mask"><span class="line-inner">Precision.</span></span>
</h1>
```

```css
.line-mask {
  display: block;
  overflow: hidden;
  padding-bottom: 0.08em; /* Prevents descender clipping */
}
.line-inner {
  display: block;
  will-change: transform;
}
```

```javascript
gsap.from(".line-inner", {
  yPercent: 112,
  rotateZ: 1.5,
  duration: 1.05,
  ease: "power4.out",
  stagger: 0.085
});
```

---

### System 2: Self-Drawing SVG Engineering / Editorial Callout Lines
When the virtual camera zooms into an AI-generated product or exploded structure, anchor floating specification labels using **live-drawing SVG vector leader lines** (`stroke-dashoffset`) + pulsing target reticles:

```html
<svg class="callout-svg" viewBox="0 0 320 120" fill="none">
  <circle class="reticle-dot" cx="12" cy="108" r="4" fill="currentColor" />
  <circle class="reticle-ring" cx="12" cy="108" r="10" stroke="currentColor" stroke-opacity="0.4" />
  <path class="leader-path" d="M 12 108 L 76 24 L 308 24" stroke="currentColor" stroke-width="1.25" />
</svg>
```

```javascript
function animateCalloutIn(container) {
  const path = container.querySelector(".leader-path");
  const length = path.getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

  const tl = gsap.timeline();
  tl.fromTo(container.querySelector(".reticle-dot"), { scale: 0 }, { scale: 1, duration: 0.25, ease: "back.out(2)" })
    .to(path, { strokeDashoffset: 0, duration: 0.55, ease: "power3.inOut" }, "-=0.1")
    .fromTo(container.querySelector(".callout-copy"), { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.35 }, "-=0.2");
  return tl;
}
```

---

### System 3: Scroll-Velocity Kinetic Marquee & Directional Skew
Create editorial rhythm between sections with a kinetic typography ticker that accelerates and reverses direction smoothly based on the user's scroll velocity:

```javascript
let marqueeX = 0;
let scrollDirection = -1;
let velocityBoost = 0;

ScrollTrigger.create({
  onUpdate(self) {
    scrollDirection = self.direction === 1 ? -1 : 1;
    velocityBoost = Math.min(Math.abs(self.getVelocity() / 350), 6);
  }
});

gsap.ticker.add(() => {
  velocityBoost *= 0.92; // Smooth decay
  marqueeX += scrollDirection * (0.045 + velocityBoost * 0.08);
  if (marqueeX <= -50) marqueeX += 50;
  if (marqueeX > 0) marqueeX -= 50;
  gsap.set(".kinetic-marquee-track", {
    xPercent: marqueeX,
    skewX: scrollDirection * velocityBoost * 1.4
  });
});
```

---

### System 4: Geometric `clip-path` Shutter Wipes & Image Parallax
Unveil editorial photography like a mechanical camera shutter opening while the inner photograph settles smoothly from `scale(1.15)` to `scale(1.0)`:

```javascript
document.querySelectorAll(".shutter-reveal").forEach((wrap) => {
  const img = wrap.querySelector("img");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrap,
      start: "top 82%",
      toggleActions: "play none none none"
    }
  });

  tl.fromTo(wrap,
    { clipPath: "inset(100% 0% 0% 0%)" },
    { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "expo.out" }
  ).fromTo(img,
    { scale: 1.18 },
    { scale: 1.0, duration: 1.4, ease: "expo.out" },
    0
  );
});
```

---

### System 5: Animated Tabular Counters & Magnetic Tactile Controls
1. **Live Rolling Counters (`tabular-nums`):** Animate metrics, prices, and square-footage estimates smoothly using `gsap.to(counterObj, { val: targetVal, duration: 0.45, ease: "power2.out" })` so numbers glide rather than jump.
2. **Magnetic Primary CTA (`@media (hover: hover)`):** Let primary action buttons pull `18%` toward the cursor on hover and snap back with an elastic spring (`elastic.out(1, 0.4)`) on `pointerleave`.

---

## 2. Motion Discipline & Guardrails (`GEMINI.md` + Apple HIG)

1. **Natural, Unhurried Luxury Pacing:** Never make animations frantic, chaotic, or jittery. Hero camera moves and commercial motion sequences should breathe with confident cinema weight (`0.8s–1.2s` expo/power4 curves for editorial reveals; `120ms–220ms` crisp springs for UI controls).
2. **Compositor-Only Rule:** Strictly animate `transform` (`translate3d`, `scale`, `rotate`), `opacity`, `clip-path`, and SVG `stroke-dashoffset`. Never animate `top`, `left`, `width`, `height`, or `margin`.
3. **Reduced-Motion Accessibility:** Wrap scroll-pinning and kinetic skew inside `gsap.matchMedia()` (`"(prefers-reduced-motion: no-preference)"`) so users with motion sensitivity receive clean, instant opacity transitions.
