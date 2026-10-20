# 9LMNTS Studio — Production Website & Systems Architecture

> **"Websites that book your customers for you."**  
> High-converting digital platforms, modular intake widgets, and client acquisition engines engineered for Ottawa service businesses, culinary operators, and commercial trades.

---

## ⚡ Overview & Features

- **Multi-Page Architecture**: High-speed, responsive, zero-bloat static compilation (`public/`).
- **Commercial Sprints**:
  1. **Quick Fix ($500 CAD)** — Drop-in intake and booking widget for existing CMS sites.
  2. **Launch Page ($1,800 CAD)** — 1 high-impact conversion page with lead automations.
  3. **Growth Website ($4,500 CAD ⭐)** — 5–7 page custom platform with booking engine & Supabase sync.
  4. **Signature System (from $8,500 CAD)** — Full enterprise design system & client portal.
- **Domestic Canadian Payment Rail**: Direct Interac e-Transfer autodeposit to `9lmntstudio@gmail.com` (Desjardins Commercial Bank).
- **Executive Command Cockpit**: Operator CRM, lead intake pipeline, 1-click contract & agreement generator, and invoice builder located at `/admin/`.
- **Full Legal Suite**: Ontario-compliant Terms of Service, Privacy Policy (PIPEDA), Payment & Refund Terms, Cookie Policy, and WCAG 2.1 AA Accessibility Statement.

---

## 🛠️ Build & Development

Compile all pages, legal documents, prototypes, and admin tools:

```bash
node site/build.mjs
```

All compiled output is staged cleanly in `/public`.

---

## 🚀 Netlify Deployment Configuration

- **Build command**: `node site/build.mjs`
- **Publish directory**: `public`
- **Clean URLs**: Redirect rules defined in `_redirects` and `netlify.toml`.

---
© 2026 9LMNTS Studio. All rights reserved.
