# Magic UI Component Reference

## Purpose
Use this document to choose the right Magic UI component and avoid integration mistakes before implementation.

## Install Contract
- Initialize shadcn once per project:
```bash
npx shadcn@latest init
```
- Add components via registry:
```bash
npx shadcn@latest add @magicui/<component-slug>
```
- Default import path is usually:
```tsx
import { ComponentName } from "@/components/ui/<component-slug>"
```

## Families

### Layout And Social Proof
- `marquee`
- `avatar-circles`
- `bento-grid`

### Hero And Visual Anchors
- `globe`
- `warp-background`
- `animated-grid-pattern`
- `retro-grid`

### Text Motion
- `blur-fade`
- `text-animate`
- `word-rotate`
- `sparkles-text`
- `typing-animation`

### Buttons And CTA Emphasis
- `shiny-button`
- `shimmer-button`
- `rainbow-button`
- `ripple-button`

### Ambient Effects
- `particles`
- `flickering-grid`
- `dot-pattern`
- `grid-pattern`
- `light-rays`
