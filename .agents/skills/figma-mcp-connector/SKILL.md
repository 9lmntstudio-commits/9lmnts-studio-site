---
name: figma-mcp-connector
description: Guides the configuration and usage of the Figma MCP servers (Official Remote at https://mcp.figma.com/mcp and local figma-developer-mcp stdio). Enables reading design tokens, layouts, frames, and converting Figma designs into pixel-perfect code.
---

# Figma MCP Connector Skill (`figma-mcp-connector`)

This skill integrates Figma directly into 9LMNTS Studio / Antigravity workflows using the Model Context Protocol (MCP).

---

## 1. Configured Servers

In `C:\Users\Darnl\.gemini\config\mcp_config.json`, two Figma MCP servers are registered:

1. **Official Remote MCP Server**:
   - **Endpoint**: `https://mcp.figma.com/mcp`
   - **Type**: HTTP remote server supporting canvas inspection, code connect, and design context extraction.
2. **Local Stdio MCP Server (`figma-developer-mcp`)**:
   - **Command**: `npx.cmd -y figma-developer-mcp --stdio`
   - **Env**: `FIGMA_ACCESS_TOKEN`

---

## 2. Setting Up Your Figma Access Token

To enable local frame extraction and design-to-code pipelines:
1. Open Figma and go to **Account Settings** -> **Personal Access Tokens**.
2. Click **Generate new personal access token** (Name: `Antigravity-Figma-MCP`, Expiration: No expiration or 1 year).
3. Copy the token (starts with `figd_...`).
4. Set it in `C:\Users\Darnl\.gemini\config\mcp_config.json` under `figma-developer.env.FIGMA_ACCESS_TOKEN` or your system environment variables:
   ```powershell
   [System.Environment]::SetEnvironmentVariable('FIGMA_ACCESS_TOKEN', 'figd_your_token_here', 'User')
   ```

---

## 3. Core Capabilities
- **Extract Layouts**: Inspect Figma node trees, auto-layout hierarchies, padding, and constraints.
- **Design Tokens**: Pull color palettes, gradient stops, typography scales, and shadow elevations directly into `DESIGN.md` or CSS variables.
- **Component Translation**: Convert Figma frames into Tailwind, Vanilla CSS, or React components in one-shot.
