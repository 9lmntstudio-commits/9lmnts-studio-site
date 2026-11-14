---
name: agent-reach
description: >-
  Operate Panniantong/Agent-Reach, the open-source installer, doctor, and routing layer for platform-specific
  internet research tools. Use when researching Twitter/X, Reddit, YouTube transcripts, GitHub, Bilibili,
  Xiaohongshu, RSS feeds, or arbitrary web URLs with zero API fees or paid keys.
---

# Agent Reach Skill (`Panniantong/Agent-Reach`)

**Agent Reach** is an open-source capability layer and CLI router designed to give AI coding assistants direct, zero-cost access to search, scrape, and read live content across 16+ internet platforms without requiring expensive official API keys.

* **Upstream Repository:** [`Panniantong/Agent-Reach`](https://github.com/Panniantong/Agent-Reach)
* **License:** MIT (100% Free & Open Source)
* **Target Channels:** Twitter/X, Reddit, YouTube, GitHub, Bilibili, Xiaohongshu (RED), Douyin, Weibo, WeChat Articles, Podcasts, RSS, and General Webpages via Jina Reader.

---

## 1. Quick Reference & Diagnostic Commands

Run diagnostics before fetching platform data to verify channel health:

```bash
# Check overall health and backend routing across all channels
agent-reach doctor

# List all available channels and their active backends
agent-reach channels

# Output diagnostic results as structured JSON
agent-reach doctor --json
```

---

## 2. Platform Routing & CLI Execution Table

When a user asks to inspect or pull live data from any supported platform, route through the appropriate backend:

| Channel | Recommended Backend / Tool | Command Example | Output / Purpose |
| :--- | :--- | :--- | :--- |
| **Twitter / X** | `xreach` (CLI) | `xreach search "query" -n 10 --json`<br>`xreach tweets @username -n 20 --json` | Search posts, fetch user timelines, pull full thread discussions without Twitter API keys. |
| **Reddit** | `rdt-cli` / Jina Reddit | `curl -s "https://r.jina.ai/https://www.reddit.com/r/webdev/comments/..."` | Pull structured posts and full discussion comments bypassing 403 Forbidden blockers. |
| **YouTube** | `yt-dlp` | `yt-dlp --dump-json "https://youtu.be/..."`<br>`yt-dlp --write-sub --write-auto-sub --sub-lang en --skip-download -o "/tmp/%(id)s" "https://youtu.be/..."` | Extract complete video metadata, chapters, descriptions, and auto-generated subtitle transcripts (`.vtt`). |
| **Webpages** | Jina Reader (`r.jina.ai`) | `curl -s "https://r.jina.ai/https://example.com"` | Converts heavy HTML "tag soup" into clean, LLM-ready markdown for instant analysis. |
| **GitHub** | `gh` / GitHub Public API | `gh repo view owner/repo --json description,stargazers`<br>`gh search issues "bug" --repo owner/repo` | Search code, read repositories, inspect issues, pull requests, and releases. |
| **Bilibili** | `bili-cli` | `bili-cli video BV1xxxxxx --json` | Video metadata, danmaku comments, and subtitle transcripts. |
| **Xiaohongshu** | XHS Scraper | `agent-reach xhs inspect "NOTE_ID"` | High-density trend research and product visual reviews. |
| **RSS Feeds** | Native RSS Parser | `agent-reach rss read "https://feed.url"` | Pull real-time news and blog updates. |

---

## 3. Strict Workspace & Security Guardrails

Follow these core safety rules whenever executing Agent-Reach commands:

1. **Zero Workspace Clutter:** Never write raw scrape outputs, cookies, or temporary subtitle files directly inside the primary repository or project workspace.
   * Store temporary downloads in `/tmp/` (or `$env:TEMP` on Windows).
   * Store persistent credentials, cookie handoffs, or cache in `~/.agent-reach/`.
2. **Local Cookie Protection:** Never share, upload, or commit cookies or session tokens. Cookies stay 100% local on the machine.
3. **Graceful Fallbacks:** If a platform-specific scraper hits an anti-bot hurdle, immediately fall back to Jina Reader (`https://r.jina.ai/<url>`) or web search.

---

## 4. Installation & Environment Setup

If `agent-reach` is not yet installed on the host:

### Method A: Install via `uv` (Recommended Standard)
```bash
# Windows (PowerShell):
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
uv tool install https://github.com/Panniantong/Agent-Reach/releases/latest/download/agent-reach.zip
agent-reach setup
```

### Method B: Install via `pipx`
```bash
pipx install https://github.com/Panniantong/agent-reach/archive/main.zip
agent-reach install --env=auto
```

### Method C: Add via Agent Skills CLI
```bash
npx -y skills add Panniantong/Agent-Reach
```
