---
name: reach-agent
description: >-
  Internet capability router based on Panniantong/Agent-Reach. Gives the agent
  direct read, search, and research capabilities across 16+ platforms (Twitter/X,
  Reddit, YouTube, GitHub, Bilibili, XiaoHongShu, LinkedIn, RSS, Jina Reader)
  with zero API fees, multi-backend routing, and zero-config fallbacks.
---

# Agent Reach — Internet Capability Router (`reach-agent`)

## Overview
Based on [`Panniantong/Agent-Reach`](https://github.com/Panniantong/Agent-Reach) (98,000+ stars, MIT licensed). Equips AI agents with cross-platform internet browsing, research, and data gathering across 16+ major networks without requiring paid API keys.

## Security & Malware Audit Status
- **Repository**: `Panniantong/Agent-Reach`
- **License**: MIT
- **Security Policy**: Present (`SECURITY.md` with responsible disclosure timeline)
- **Dependencies**: Verified standard packages (`requests`, `feedparser`, `python-dotenv`, `pyyaml`, `yt-dlp`, `rich`, `loguru`)
- **Malware & Exfiltration Audit**: **CLEAN**. No hidden webhook callbacks, no unauthorized credential forwarding, and browser cookie access is strictly least-privilege (local inspection only for explicitly requested domains).

---

## Capabilities & Routing Table

| Category | Platforms | Method / Tool | Zero-Config? |
| :--- | :--- | :--- | :--- |
| **Web Search** | Google / Exa AI | `mcporter call exa.web_search_exa query="..." numResults=5` | Yes |
| **Web Content Reader** | Any public URL / Article | `curl -s "https://r.jina.ai/<URL>"` | Yes |
| **Dev & Code** | GitHub Repos, Code, Issues | `gh search repos "query" --sort stars --limit 10` | Yes |
| **Video & Audio** | YouTube transcripts, audio | `yt-dlp --write-sub --write-auto-sub --skip-download "URL"` | Yes |
| **Tech Forums** | V2EX Hot Topics & Discussions | `curl -s "https://www.v2ex.com/api/topics/hot.json"` | Yes |
| **Video Sharing** | Bilibili Video Search | `bili search "query" --type video -n 5` | Yes |
| **Social Media** | Twitter/X Search & Threads | `twitter search "query" -n 10` (requires session token) | Auth Required |
| **Discussions** | Reddit Discussions | `opencli reddit search "query"` (requires browser session) | Auth Required |
| **Lifestyle & Asian Markets** | XiaoHongShu (RED) | `opencli xiaohongshu search "query"` (local browser profile) | Auth Required |
| **Career & Recruiting** | LinkedIn / Jobs | OpenCLI or CDP browser profile | Auth Required |

---

## Operating Protocol for Agents

1. **Prioritize Zero-Config Endpoints First**:
   - For reading any webpage without paywalls or bot blocks: Use `https://r.jina.ai/<URL>`.
   - For searching YouTube audio/transcripts: Use `yt-dlp` subtitle extraction.
   - For dev research: Use GitHub search and public JSON feeds.
2. **Announce Execution**:
   - Always state: `"Using reach-agent: platform [X] via backend [Y]"`.
3. **Workspace Integrity**:
   - Never store raw temporary scrapes in the user's workspace root. Use scratch storage or `/tmp/` and parse only structured intelligence into conversation artifacts.
4. **Login Boundary**:
   - Never attempt automated unauthorized logins. When session cookies are needed (e.g. Twitter or Reddit), respect user-controlled browser profiles or manual exports.
