---
name: website-layout-architect
description: >-
  Provides end-to-end procedures, design tokens, responsive breakpoints, and Bento grid layout
  blueprints for designing and building modern, high-converting websites and web applications.
  Activate whenever creating new web pages, refactoring layouts, or building responsive UI components.
---

# Website Layout Architect Skill

Use this skill to design, wireframe, and code world-class website layouts using modern web standards, CSS Grid Bento boxes, glassmorphic dark mode styling, and mobile-first responsiveness.

## 1. Modern Bento Grid Blueprint

```css
.bento-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.bento-card-large {
  grid-column: span 8;
  min-height: 420px;
}

.bento-card-medium {
  grid-column: span 4;
  min-height: 420px;
}

.bento-card-small {
  grid-column: span 4;
  min-height: 260px;
}

@media (max-width: 1024px) {
  .bento-card-large,
  .bento-card-medium,
  .bento-card-small {
    grid-column: span 6;
  }
}

@media (max-width: 640px) {
  .bento-card-large,
  .bento-card-medium,
  .bento-card-small {
    grid-column: span 12;
    min-height: auto;
  }
}
```

## 2. Dark Mode Glassmorphism Surface Tokens

```css
:root {
  --bg-void: #08090C;
  --bg-surface: rgba(18, 20, 26, 0.75);
  --bg-surface-hover: rgba(26, 29, 38, 0.85);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-active: rgba(255, 85, 0, 0.4);
  --accent-primary: #FF5500;
  --text-primary: #FFFFFF;
  --text-muted: #8E95A5;
  --radius-card: 16px;
  --radius-button: 9999px;
  --blur-glass: blur(16px);
}

.glass-surface {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-card);
  backdrop-filter: var(--blur-glass);
  -webkit-backdrop-filter: var(--blur-glass);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-surface:hover {
  background: var(--bg-surface-hover);
  border-color: var(--border-active);
  transform: translateY(-2px);
}
```
