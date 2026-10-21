---
name: reverse-engineer-anything
description: >-
  Universal Reverse-Engineering, Scraper, and Repository/Model Cloning Skill.
  Clones and deconstructs any GitHub repository, Hugging Face model/space/dataset,
  live competitor website, or design system into production-ready 9LMNTS Studio
  architectures, database schemas, edge functions, and Apple HIG / 9LMNTS DESIGN.md specifications.
---

# Reverse Engineer Anything Skill (`reverse-engineer-anything`)

## Overview
Empowers the Antigravity agent to autonomously clone, scrape, reverse-engineer, and synthesize any external software asset—whether a **GitHub repository**, a **Hugging Face model/space**, a **live web application**, or a **Figma/Pinterest visual design**—into clean, modular, zero-bloat 9LMNTS Studio production code.

---

## 1. Multi-Source Ingestion & Cloning Protocols

### A. GitHub Repository Reverse-Engineering
When given a GitHub repository URL:
1. **Shallow Clone & Manifest Inspection**:
   ```bash
   git clone --depth 1 <repo_url> scratch/cloned-repo
   ```
2. **Architecture & Dependency Mapping**:
   - Scan package definitions (`package.json`, `pyproject.toml`, `Cargo.toml`, `go.mod`).
   - Extract data structures, entity models (Prisma, Drizzle, SQL schemas), and API routes (`src/api`, `app/api`, `routes`).
   - Identify core algorithms, state stores, and rendering components.
3. **Synthesis into 9LMNTS Architecture**:
   - Convert complex multi-tier dependencies into zero-dependency vanilla JS/TS, React components, or Supabase Edge Functions.
   - Extract relevant UI cards into 9LMNTS Bento Grid modules.

### B. Hugging Face Spaces & Models Extraction
When given a Hugging Face model, space, or dataset URL (`https://huggingface.co/spaces/...` or `https://huggingface.co/...`):
1. **Space Code & Inference Pipeline Cloning**:
   ```bash
   git clone --depth 1 https://huggingface.co/spaces/<user>/<space> scratch/hf-space
   ```
2. **Deconstruct the AI Pipeline**:
   - Extract Gradio / Streamlit input/output schemas (`app.py`, `requirements.txt`).
   - Map underlying pipeline (Transformers, Diffusers, SpeechT5, Whisper, Kokoro TTS, RMBG background removal, or VLM vision).
3. **Web-Optimized Adapter**:
   - Expose the pipeline as a serverless edge webhook (via Supabase Edge Functions or Hugging Face Inference API / Serverless Endpoints).
   - Create a high-speed browser client component with audio playback, live camera stream, or drag-and-drop file upload.

### C. Live Website & Competitor Scraping
When given a live URL or reference website:
1. **Asset & DOM Scraping**:
   - Scrape full HTML, script entrypoints, style sheets, and SVG/image assets.
   - Extract font families, font weights, and spacing systems.
2. **CSS Token & Bento Grid Extraction**:
   - Deconstruct layout into 60-30-10 color rules, surface elevation, and border radiance.
   - Generate or update `DESIGN.md` using the `brand-design-expert` specification.
3. **Content Extraction**:
   - Extract real menus, pricing, contact details, and value props.

---

## 2. 9LMNTS Studio Translation Standards

Every reverse-engineered component must adhere to:
1. **The 9LMNTS Palette**:
   - Background: Obsidian Void (`#08090C`), Dark Charcoal (`#101218`)
   - Accent: Flame Orange (`#FF5500`), Amber Gold (`#D99B26`), Signal Emerald (`#10B981`)
   - Surface: Glassmorphic dark card (`rgba(16, 18, 24, 0.75)`), Specular border (`rgba(255, 85, 0, 0.15)`)
2. **Apple HIG & Spring Motion**:
   - Fluid tactile feedback, interruptible spring curves, and 44px minimum mobile tap targets.
3. **Modal-First Conversion**:
   - No unnecessary full-page redirects. Use high-speed interactive drawers and modals.
4. **Domestic Canadian Settlement**:
   - All pricing in CAD, 50% deposit locks, Desjardins Interac e-Transfer autodeposit (`9lmntstudio@gmail.com`).

---

## 3. Automation Scripts & CLI Helpers

Run the scraper and cloner script:
```bash
# Clone and reverse engineer a GitHub repository
node scripts/reverse-engineer.js --github https://github.com/user/repo --out src/cloned/

# Reverse engineer a Hugging Face space
node scripts/reverse-engineer.js --hf https://huggingface.co/spaces/user/space --out src/ai-lab/

# Scrape and extract design tokens from a live URL
node scripts/reverse-engineer.js --scrape https://example.com --out DESIGN.md
```
