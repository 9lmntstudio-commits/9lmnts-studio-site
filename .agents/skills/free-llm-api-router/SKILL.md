---
name: free-llm-api-router
description: Manages and queries the local FreeLLMAPI gateway (tashfeenahmed/freellmapi) to route AI requests across 34 free provider tiers (Groq Llama 3.3, Google Gemini, Cerebras, Mistral, OpenRouter) via a single unified OpenAI-compatible /v1 endpoint with auto-failover and zero API fees.
---

# FreeLLMAPI Router Skill (`free-llm-api-router`)

This skill integrates the open-source **FreeLLMAPI** gateway ([`tashfeenahmed/freellmapi`](https://github.com/tashfeenahmed/freellmapi)) into Antigravity workflows for high-volume background tasks, lead scoring, code audits, and autonomous agent operations with **zero third-party API costs**.

---

## 1. What It Does

- **Unified OpenAI Endpoint**: Exposes a standard OpenAI-compatible `/v1/chat/completions` API at `http://localhost:3001/v1`.
- **Smart Quota Tracking & Auto-Failover**: If a free key (e.g., Groq) hits a 429 rate limit, the router automatically fails over to the next provider (e.g., Cerebras, Mistral, Gemini Flash, or OpenRouter) with zero dropped requests.
- **Local AES-256-GCM Encryption**: All provider API keys are encrypted at rest on disk in a local SQLite database.

---

## 2. Launching the Local Gateway

### Quick Start via Docker
```bash
# Pull and start FreeLLMAPI container on port 3001
docker run -d \
  --name freellmapi \
  -p 3001:3001 \
  -e ENCRYPTION_KEY="your-random-32-byte-hex-key" \
  -v freellmapi-data:/app/data \
  ghcr.io/tashfeenahmed/freellmapi:latest
```

### Windows Desktop App
Download the pre-compiled `.exe` from [`github.com/tashfeenahmed/freellmapi/releases`](https://github.com/tashfeenahmed/freellmapi/releases).

---

## 3. Querying via Python / Node / cURL

### cURL Test
```bash
curl http://localhost:3001/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-local-freellmapi-key" \
  -d '{
    "model": "auto",
    "messages": [
      {"role": "user", "content": "Extract the decision-maker contact info from this restaurant website."}
    ]
  }'
```

### Python OpenAI Client
```python
import os
from openai import OpenAI

# Connect to local FreeLLMAPI gateway
client = OpenAI(
    base_url="http://localhost:3001/v1",
    api_key=os.getenv("FREELLMAPI_KEY", "local-dev-key")
)

response = client.chat.completions.create(
    model="auto", # or "groq/llama-3.3-70b-versatile", "google/gemini-2.0-flash"
    messages=[
        {"role": "system", "content": "You are an elite lead qualification engine."},
        {"role": "user", "content": "Analyze Ottawa hospitality leads and calculate 30% delivery app bleed."}
    ]
)

print(response.choices[0].message.content)
```

---

## 4. Operational Best Practices
- **Use for High-Volume Batch Work**: Ideal for background lead scraping, CSV data cleaning, social media qualification, and draft synthesis.
- **Production Boundary**: Always keep client-facing website checkouts and mission-critical live platforms on dedicated, paid cloud endpoints as recommended by provider terms of service.
