---
name: framer-mcp-connector
description: Guides the configuration and usage of the Framer MCP gateway (https://mcp.unframer.co/) and official Framer Agent CLI (@framer/agent). Enables inspecting Framer components, managing CMS collections, and bridging AI coding agents directly to Framer projects.
---

# Framer MCP Connector Skill (`framer-mcp-connector`)

This skill integrates Framer directly into 9LMNTS Studio / Antigravity workflows using the Model Context Protocol (MCP) and the official Framer Agent toolchain.

---

## 1. Configured MCP Endpoints

In `C:\Users\Darnl\.gemini\config\mcp_config.json`, the Framer MCP server is registered:

- **Server ID**: `framer`
- **Server URL**: `https://mcp.unframer.co/`
- **Function**: Remote WebSocket & HTTP MCP tunnel bridging AI assistants to Framer canvases, node selections, color/text styles, and components.

---

## 2. Official Framer Agent Setup

Framer also provides its official `@framer/agent` package to connect external agents directly into your Framer projects:

```bash
# In your terminal:
npx @framer/agent setup
```

Once initialized:
1. Open your Framer project in the browser or Framer desktop app.
2. Link your active project session using the project API key or authorization token provided by Framer.
3. Your agent can read project structure, extract page layouts, publish updates, and edit CMS collections.

---

## 3. Core Capabilities
- **Canvas Inspection**: Query page layouts, responsive breakpoints, frame dimensions, and visual styling.
- **Component Synchronization**: Sync React components or custom code blocks directly into your Framer component library.
- **CMS Automation**: Bulk create, update, or schedule Framer CMS items (e.g. restaurant menus, tournament contenders, artist rosters).
