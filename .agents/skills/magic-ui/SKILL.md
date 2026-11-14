---
name: magic-ui
description: Use this skill when users want to add, customize, or troubleshoot Magic UI components in React/Next.js and modern Web 2.5 frontend projects. It covers component selection, shadcn registry installation (@magicui/*), CSS/HTML conversion, and high-impact animated micro-interactions (bento grids, animated beams, shiny buttons, marquee rails, retro grids).
metadata:
  short-description: Build and customize high-converting UIs with Magic UI animated components
---

# Magic UI (`magic-ui`)

Use this skill when the task involves **Magic UI** components, luxury animated bento sections, high-converting CTAs, or converting static UI elements into fluid interactive experiences.

---

## 1. When To Apply

Apply this skill when:
- Designing or upgrading sections with Magic UI effects (hero backgrounds, testimonials, feature bentos, glowing CTAs).
- Adding animated UI components (e.g. `marquee`, `globe`, `blur-fade`, `shiny-button`, `animated-beam`, `retro-grid`, `bento-grid`).
- Upgrading 9LMNTS Studio client builds (`the-helm.html`, `clash.html`, `margo.html`, `pricing.html`) with modern CSS/HTML micro-animations.

---

## 2. Core Component Registry & Heuristics

| Category | Recommended Components | Use Case in 9LMNTS Studio |
| :--- | :--- | :--- |
| **Social Proof & Rails** | `marquee`, `avatar-circles` | Sponsor logos, ticker ribbons, verified client testimonials. |
| **Hero & Visual Anchors** | `retro-grid`, `animated-grid-pattern`, `warp-background`, `globe` | Ambient workstation backplates, spatial cyber depth. |
| **Text Motion** | `blur-fade`, `text-animate`, `word-rotate`, `sparkles-text` | High-ticket headline entrances, ROI metrics tickers. |
| **Buttons & CTAs** | `shiny-button`, `shimmer-button`, `rainbow-button`, `ripple-button` | Instant 50% deposit triggers, contender checkout links. |
| **Bento & Cards** | `bento-grid`, `magic-card`, `border-beam` | Turnkey system deliverables, 4-box monetization grids. |

---

## 3. Installation & Usage Patterns

### Next.js / React (via shadcn registry)
```bash
npx shadcn@latest add @magicui/<component-slug>
```
Example:
```bash
npx shadcn@latest add @magicui/bento-grid @magicui/shiny-button @magicui/marquee
```

### Static Vanilla / Web 2.5 Conversion (HTML/CSS)
When integrating into static HTML/CSS files without React dependencies:
- Use pure CSS `@keyframes` equivalents for infinite marquees, shimmer glows, and border beams.
- Keep card surfaces frosted obsidian (`rgba(16, 20, 28, 0.60)`) with gold hairline borders (`rgba(198, 156, 109, 0.2)`).

---

## 4. Quality & Performance Guardrails
- **Limit High-Motion Stacking**: Use at most 1 primary visual anchor + 1 supporting effect per viewport.
- **Maintain Contrast**: Ensure text contrast remains compliant (WCAG AA) over animated canvas backgrounds.
- **Mobile First**: Disable heavy 3D WebGL or intensive keyframe loops on screens `< 768px` to preserve 60fps performance.
