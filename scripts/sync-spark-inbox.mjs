#!/usr/bin/env node
/**
 * 9LMNTS Studio — Autonomous Gemini Spark -> NotebookLM -> Antigravity Sync Engine
 * 
 * Bridges mobile ideation (Gemini App / Spark voice dumps & NotebookLM audio syntheses)
 * directly into Antigravity's task execution queue with Google AI Studio model enrichment.
 * 
 * Modes:
 *   1. Automated File Watcher / Queue Reader (.agents/inbox/spark_queue/incoming/)
 *   2. CLI Ingestion: node scripts/sync-spark-inbox.mjs --spark "Your voice dump text here"
 *   3. Google Drive Poller: Checks designated 9LMNTS-Brain-Inbox folder via gdrive CLI
 */

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const INBOX_DIR = path.join(rootDir, '.agents', 'inbox', 'spark_queue');
const INCOMING_DIR = path.join(INBOX_DIR, 'incoming');
const PROCESSED_DIR = path.join(INBOX_DIR, 'processed');

// Google Drive Master Spark Inbox Folder ID
export const GOOGLE_DRIVE_SPARK_FOLDER_ID = "1Fp5IZfu3LtZL6pD35fYECSUGUqzHOTAw"; // 9LMNTS-Brain-Inbox

// Read GEMINI_API_KEY from .env if present
let GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const envPath = path.join(rootDir, '.env');
if (!GEMINI_API_KEY && fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const match = envContent.match(/GEMINI_API_KEY=(.*)/);
  if (match) {
    GEMINI_API_KEY = match[1].trim();
  }
}

// Ensure directory layout exists
for (const dir of [INBOX_DIR, INCOMING_DIR, PROCESSED_DIR]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Call Google AI Studio Gemini API for intelligent task breakdown
 */
async function enrichSparkWithAI(rawText) {
  if (!GEMINI_API_KEY) return null;

  const prompt = `You are the lead systems architect for 9LMNTS Studio (commercial web engineering and autonomous business operating systems).
Analyze this raw spark or client idea note:
"""
${rawText}
"""

Provide a concise JSON response with:
1. "executive_summary": 1-2 sentence core intent.
2. "action_items": array of 3 concrete technical/architectural steps.
3. "commercial_angle": 1 sentence on client value or monetization.

Respond ONLY with valid JSON.`;

  return new Promise((resolve) => {
    const payload = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseMimeType: "application/json" }
    });

    const req = https.request(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 5000
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (json.candidates && json.candidates[0]) {
            const parsed = JSON.parse(json.candidates[0].content.parts[0].text);
            resolve(parsed);
          } else {
            resolve(null);
          }
        } catch {
          resolve(null);
        }
      });
    });

    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
    req.write(payload);
    req.end();
  });
}

/**
 * Categorize and parse raw spark text into structured 9LMNTS Studio actions
 */
async function parseSparkToTask(rawText, source = 'Gemini Spark Mobile') {
  const timestamp = new Date().toISOString();
  const dateStr = timestamp.split('T')[0];
  
  // Heuristic tag matching
  let targetStation = "9LMNTS Studio Core (9lmntsstudio.com)";
  let category = "General Architecture & Revenue";
  
  const lower = rawText.toLowerCase();
  if (lower.includes('clash') || lower.includes('dj') || lower.includes('battle')) {
    targetStation = "SoundClash OS (clash.9lmntsstudio.com)";
    category = "Live Competition OS";
  } else if (lower.includes('artist') || lower.includes('music') || lower.includes('performer')) {
    targetStation = "Artist OS (artist.9lmntsstudio.com)";
    category = "Creator OS";
  } else if (lower.includes('wedding') || lower.includes('reception') || lower.includes('sanon')) {
    targetStation = "Wedding OS (The Sanon Reception)";
    category = "Hospitality & Private Events";
  } else if (lower.includes('podcast') || lower.includes('youtube') || lower.includes('faceless')) {
    targetStation = "9LMNTS Faceless Podcast (@9lmntsstudio)";
    category = "Media & Client Acquisition";
  } else if (lower.includes('chef') || lower.includes('restaurant') || lower.includes('margo')) {
    targetStation = "Chef OS / Restaurant Intake";
    category = "Hospitality Client Prototype";
  } else if (lower.includes('handyman') || lower.includes('trades') || lower.includes('contractor')) {
    targetStation = "Handyman OS / Contractor Intake";
    category = "Trades Client Prototype";
  }

  // Derive title from first line or first 10 words
  const lines = rawText.trim().split('\n').filter(l => l.trim().length > 0);
  const firstLine = lines[0] || "New Spark Idea";
  const title = firstLine.replace(/^[#*-\s]+/, '').slice(0, 80);

  // Optional AI enrichment via Gemini 3.5 Flash Lite
  const aiInsights = await enrichSparkWithAI(rawText);

  let taskMarkdown = `# [SPARK TASK] ${title}

- **Date:** ${dateStr}
- **Source:** ${source}
- **Target Station:** ${targetStation}
- **Category:** ${category}
- **Status:** READY_FOR_ANTIGRAVITY

---

## 💡 Raw Brain Dump / Grounded Synthesis
\`\`\`
${rawText.trim()}
\`\`\`
`;

  if (aiInsights) {
    taskMarkdown += `
---

## 🤖 Google AI Studio Intelligence Synthesis (Gemini 3.5 Flash Lite)
- **Executive Summary:** ${aiInsights.executive_summary || "Processed by Google AI Studio"}
- **Commercial Angle:** ${aiInsights.commercial_angle || "Integrated into 9LMNTS revenue engine"}
- **Key Action Items:**
${(aiInsights.action_items || []).map(item => `  - ${item}`).join('\n')}
`;
  }

  taskMarkdown += `
---

## ⚡ Recommended Antigravity Execution Plan
1. **Verification:** Inspect existing codebase components related to ${targetStation}.
2. **Design Compliance:** Apply Apple HIG & 9LMNTS Frosted Glass Bento styling (\`blur(28px) saturate(190%)\`, Flame Orange \`#FF5500\` highlights).
3. **Architecture:** Verify pre-flight AQV backup before applying changes.
4. **Deploy & Validate:** Test locally, build to \`public/\`, and push to \`immersive main\` for automated Netlify edge deployment.
`;

  return {
    title,
    dateStr,
    targetStation,
    taskMarkdown
  };
}

/**
 * Sync from authenticated Google Drive folder (9LMNTS-Brain-Inbox)
 */
function syncGoogleDrive() {
  const gdriveCmd = 'C:\\Users\\Darnl\\.gemini\\config\\plugins\\gdrive\\skills\\gdrive\\scripts\\gdrive.cmd';
  if (!fs.existsSync(gdriveCmd)) {
    console.log("• gdrive CLI not found at default plugin path.");
    return [];
  }

  try {
    const listJson = execSync(`"${gdriveCmd}" readonly search --parent-id ${GOOGLE_DRIVE_SPARK_FOLDER_ID} --json`, { encoding: 'utf8' });
    const files = JSON.parse(listJson.trim() || '[]');
    if (!Array.isArray(files) || files.length === 0) {
      console.log(`• Google Drive '9LMNTS-Brain-Inbox' is clean (0 pending files).`);
      return [];
    }

    console.log(`✓ Found ${files.length} remote file(s) in 9LMNTS-Brain-Inbox.`);
    const downloaded = [];

    for (const f of files) {
      console.log(`  Downloading: ${f.name} (ID: ${f.id})...`);
      const destPath = path.join(INCOMING_DIR, `${f.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`);
      try {
        if (f.mimeType && f.mimeType.includes('google-apps.document')) {
          execSync(`"${gdriveCmd}" readonly export ${f.id} --format md "${destPath}.md"`, { stdio: 'ignore' });
          downloaded.push(`${f.name}.md`);
        } else {
          execSync(`"${gdriveCmd}" readonly download ${f.id} --dest "${INCOMING_DIR}"`, { stdio: 'ignore' });
          downloaded.push(f.name);
        }
      } catch (err) {
        console.error(`  Warning: Could not download ${f.name}:`, err.message);
      }
    }
    return downloaded;
  } catch (err) {
    console.error("• Google Drive sync check failed:", err.message);
    return [];
  }
}

/**
 * Scan incoming folder for new .md or .txt files
 */
async function scanIncomingSparks() {
  const files = fs.readdirSync(INCOMING_DIR).filter(f => f.endsWith('.txt') || f.endsWith('.md'));
  if (files.length === 0) {
    return [];
  }

  const tasks = [];
  for (const file of files) {
    const fullPath = path.join(INCOMING_DIR, file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const parsed = await parseSparkToTask(content, `File: ${file}`);
    
    // Save to active inbox
    const safeName = file.replace(/\.[^/.]+$/, "");
    const taskFile = path.join(INBOX_DIR, `task_${Date.now()}_${safeName}.md`);
    fs.writeFileSync(taskFile, parsed.taskMarkdown, 'utf8');
    
    // Move source to processed
    fs.renameSync(fullPath, path.join(PROCESSED_DIR, file));
    tasks.push({ file, taskFile, title: parsed.title, station: parsed.targetStation });
  }
  return tasks;
}

// ---------------- CLI Entrypoint ----------------
async function main() {
  const args = process.argv.slice(2);

  console.log("===============================================================");
  console.log("⚡ 9LMNTS STUDIO — AUTONOMOUS GEMINI SPARK INBOX SYNCHRONIZER");
  if (GEMINI_API_KEY) {
    console.log("   [Google AI Studio: Gemini 3.5 Flash Lite Active]");
  }
  console.log("===============================================================");

  // Check for direct spark argument
  const sparkIdx = args.findIndex(a => a === '--spark' || a === '-s');
  if (sparkIdx !== -1 && args[sparkIdx + 1]) {
    const rawNote = args.slice(sparkIdx + 1).join(' ');
    console.log("• Ingesting spark with Gemini 3.5 Flash Lite intelligence...");
    const parsed = await parseSparkToTask(rawNote, "CLI Direct Input");
    const taskFile = path.join(INBOX_DIR, `task_${Date.now()}_cli.md`);
    fs.writeFileSync(taskFile, parsed.taskMarkdown, 'utf8');
    console.log(`✓ Spark ingested successfully!`);
    console.log(`  Title   : ${parsed.title}`);
    console.log(`  Station : ${parsed.targetStation}`);
    console.log(`  Task Doc: ${taskFile}`);
    process.exit(0);
  }

  // Check for Google Drive sync flag
  if (args.includes('--drive') || args.includes('-d')) {
    console.log("• Syncing with Google Drive (Folder: 9LMNTS-Brain-Inbox)...");
    syncGoogleDrive();
  }

  // Scan incoming folder
  const processed = await scanIncomingSparks();
  if (processed.length > 0) {
    console.log(`✓ Successfully processed ${processed.length} incoming spark(s):`);
    for (const t of processed) {
      console.log(`  - [${t.station}] ${t.title}`);
      console.log(`    Saved: ${t.taskFile}`);
    }
  } else {
    console.log("• No pending files in .agents/inbox/spark_queue/incoming/");
    console.log("• Available Triggers:");
    console.log('    1. Google Drive: node scripts/sync-spark-inbox.mjs --drive');
    console.log('    2. CLI Prompt:   node scripts/sync-spark-inbox.mjs --spark "Your spark notes"');
    console.log("    3. Local File:   Drop any .txt/.md into .agents/inbox/spark_queue/incoming/");
  }

  console.log("===============================================================");
}

main();
