#!/usr/bin/env node

/**
 * ⚡ ANTIGRAVITY QUANTUM VAULT (AQV) — MASTER BACKUP & DISASTER RECOVERY ENGINE
 * 
 * Designed for Google Antigravity, Claude Code, and Advanced AI Agent Workspaces.
 * Automates multi-tiered snapshots of:
 *  1. Active Workspace (9LMNTS Studio Codebase & Assets)
 *  2. Global Antigravity Config (~/.gemini/config: Skills, Sidecars, Plugins, MCPs)
 *  3. Antigravity Brain Artifacts & Persistent Agent Blueprints
 * 
 * Zero external dependencies. Uses Node.js 20+ built-ins & native tar compression.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const crypto = require('crypto');

// --- DIRECTORY DEFINITIONS ---
const HOME_DIR = process.env.USERPROFILE || process.env.HOME || 'C:\\Users\\Darnl';
const WORKSPACE_DIR = process.cwd();
const GEMINI_CONFIG_DIR = path.join(HOME_DIR, '.gemini', 'config');
const GEMINI_BRAIN_DIR = path.join(HOME_DIR, '.gemini', 'antigravity', 'brain');
const VAULT_ROOT_DIR = path.join(HOME_DIR, '.gemini', 'antigravity-backup', 'vaults');
const MANIFEST_PATH = path.join(VAULT_ROOT_DIR, 'vault_manifest.json');

// Ensure vault root directory exists
if (!fs.existsSync(VAULT_ROOT_DIR)) {
    fs.mkdirSync(VAULT_ROOT_DIR, { recursive: true });
}

// Ignore Patterns
const IGNORE_PATTERNS = [
    'node_modules',
    '.git',
    '.system_generated',
    'tempmediaStorage',
    'temp',
    'tmp',
    '.cache',
    'dist',
    'tasks',
    '.log'
];

function shouldIgnore(fileName) {
    const lower = fileName.toLowerCase();
    return IGNORE_PATTERNS.some(pattern => lower.includes(pattern));
}

function copyRecursive(src, dest) {
    if (!fs.existsSync(src)) return 0;
    let fileCount = 0;

    try {
        const stats = fs.statSync(src);

        if (stats.isDirectory()) {
            if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
            const items = fs.readdirSync(src);
            for (const item of items) {
                if (shouldIgnore(item)) continue;
                const srcItem = path.join(src, item);
                const destItem = path.join(dest, item);
                fileCount += copyRecursive(srcItem, destItem);
            }
        } else {
            if (!shouldIgnore(path.basename(src))) {
                fs.copyFileSync(src, dest);
                fileCount = 1;
            }
        }
    } catch (err) {
        // Silently skip locked/inaccessible files
    }
    return fileCount;
}

function computeSha256(filePath) {
    const fileBuffer = fs.readFileSync(filePath);
    return crypto.createHash('sha256').update(fileBuffer).digest('hex');
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function getTimestamp() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
}

function loadManifest() {
    if (fs.existsSync(MANIFEST_PATH)) {
        try {
            return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
        } catch (e) {
            return [];
        }
    }
    return [];
}

function saveManifest(manifest) {
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf8');
}

// --- COMMAND IMPLEMENTATIONS ---

function commandSnapshot(label = 'manual') {
    const timestamp = getTimestamp();
    const snapshotId = `vault_${timestamp}_${label.replace(/[^a-zA-Z0-9_-]/g, '')}`;
    const stagingDir = path.join(VAULT_ROOT_DIR, `_staging_${snapshotId}`);
    const archivePath = path.join(VAULT_ROOT_DIR, `${snapshotId}.tar.gz`);

    console.log(`\n===============================================================`);
    console.log(`⚡ ANTIGRAVITY QUANTUM VAULT — INITIATING SNAPSHOT [${snapshotId}]`);
    console.log(`===============================================================`);

    // Clean up any stale staging directories
    try {
        const vaultItems = fs.readdirSync(VAULT_ROOT_DIR);
        for (const item of vaultItems) {
            if (item.startsWith('_staging_') || item.startsWith('_restore_')) {
                fs.rmSync(path.join(VAULT_ROOT_DIR, item), { recursive: true, force: true });
            }
        }
    } catch (e) {}

    // 1. Create Staging Directories
    const stageWorkspace = path.join(stagingDir, 'workspace');
    const stageConfig = path.join(stagingDir, 'gemini_config');
    const stageBrain = path.join(stagingDir, 'antigravity_brain');

    fs.mkdirSync(stageWorkspace, { recursive: true });
    fs.mkdirSync(stageConfig, { recursive: true });
    fs.mkdirSync(stageBrain, { recursive: true });

    // 2. Stage Workspace
    console.log(`[1/3] Staging active workspace: ${WORKSPACE_DIR}`);
    const wsFiles = copyRecursive(WORKSPACE_DIR, stageWorkspace);
    console.log(`      ✓ Copied ${wsFiles} workspace files.`);

    // 3. Stage Global Config
    console.log(`[2/3] Staging global Antigravity config: ${GEMINI_CONFIG_DIR}`);
    const cfgFiles = copyRecursive(GEMINI_CONFIG_DIR, stageConfig);
    console.log(`      ✓ Copied ${cfgFiles} configuration files (Skills, Sidecars, MCPs).`);

function copyBrainArtifacts(brainDir, destDir) {
    if (!fs.existsSync(brainDir)) return 0;
    let count = 0;
    try {
        const convFolders = fs.readdirSync(brainDir);
        for (const conv of convFolders) {
            if (conv === 'tempmediaStorage' || conv.startsWith('.')) continue;
            const convPath = path.join(brainDir, conv);
            try {
                if (fs.statSync(convPath).isDirectory()) {
                    const files = fs.readdirSync(convPath);
                    for (const f of files) {
                        if (f.endsWith('.md') || f.endsWith('.json')) {
                            const destConv = path.join(destDir, conv);
                            if (!fs.existsSync(destConv)) fs.mkdirSync(destConv, { recursive: true });
                            fs.copyFileSync(path.join(convPath, f), path.join(destConv, f));
                            count++;
                        }
                    }
                }
            } catch (e) {}
        }
    } catch (e) {}
    return count;
}

// In commandSnapshot:
    // 4. Stage Brain Artifacts (Markdown reports & persistent blueprints)
    console.log(`[3/3] Staging persistent brain artifacts: ${GEMINI_BRAIN_DIR}`);
    const brainFiles = copyBrainArtifacts(GEMINI_BRAIN_DIR, stageBrain);
    console.log(`      ✓ Copied ${brainFiles} brain artifacts & conversation blueprints.`);

    // 5. Compress using native tar
    console.log(`\n📦 Compressing vault archive using native BSDTar...`);
    try {
        execSync(`tar -czf "${archivePath}" -C "${stagingDir}" .`, { stdio: 'inherit' });
    } catch (err) {
        console.error(`❌ Compression failed:`, err.message);
        // Clean staging
        fs.rmSync(stagingDir, { recursive: true, force: true });
        process.exit(1);
    }

    // 6. Clean staging
    fs.rmSync(stagingDir, { recursive: true, force: true });

    // 7. Compute Hash & Metadata
    const archiveStats = fs.statSync(archivePath);
    const checksum = computeSha256(archivePath);

    const record = {
        id: snapshotId,
        timestamp: new Date().toISOString(),
        label: label,
        archivePath: archivePath,
        sizeBytes: archiveStats.size,
        sizeHuman: formatBytes(archiveStats.size),
        totalFiles: wsFiles + cfgFiles + brainFiles,
        sha256: checksum,
        sourceWorkspace: WORKSPACE_DIR
    };

    const manifest = loadManifest();
    manifest.unshift(record);
    saveManifest(manifest);

    console.log(`\n✅ SNAPSHOT SECURED SUCCESSFULLY!`);
    console.log(`   Archive File : ${archivePath}`);
    console.log(`   Total Size   : ${record.sizeHuman}`);
    console.log(`   Total Files  : ${record.totalFiles}`);
    console.log(`   SHA256 Hash  : ${checksum}`);
    console.log(`===============================================================\n`);
    return record;
}

function commandList() {
    const manifest = loadManifest();
    console.log(`\n===============================================================`);
    console.log(`⚡ ANTIGRAVITY QUANTUM VAULT — SNAPSHOT INVENTORY (${manifest.length} ARCHIVES)`);
    console.log(`===============================================================`);

    if (manifest.length === 0) {
        console.log(`No snapshots found. Run 'node antigravity-vault.js snapshot' to create one.`);
        console.log(`===============================================================\n`);
        return;
    }

    manifest.forEach((s, idx) => {
        const dateStr = new Date(s.timestamp).toLocaleString();
        console.log(`[${idx + 1}] ID: ${s.id}`);
        console.log(`    Date     : ${dateStr} | Label: ${s.label || 'none'}`);
        console.log(`    Size     : ${s.sizeHuman} (${s.totalFiles} files)`);
        console.log(`    SHA256   : ${s.sha256.substring(0, 16)}...`);
        console.log(`    Path     : ${s.archivePath}`);
        console.log(`---------------------------------------------------------------`);
    });
    console.log(`\n`);
}

function commandVerify(targetId) {
    const manifest = loadManifest();
    const entry = manifest.find(m => m.id === targetId || m.id.includes(targetId));

    if (!entry) {
        console.error(`❌ Snapshot '${targetId}' not found in manifest.`);
        return;
    }

    console.log(`Verifying integrity of: ${entry.archivePath}...`);
    if (!fs.existsSync(entry.archivePath)) {
        console.error(`❌ Archive file missing from disk!`);
        return;
    }

    const currentHash = computeSha256(entry.archivePath);
    if (currentHash === entry.sha256) {
        console.log(`✓ SHA256 matches manifest (${currentHash})`);
    } else {
        console.error(`❌ Checksum mismatch! Manifest: ${entry.sha256}, Actual: ${currentHash}`);
        return;
    }

    try {
        execSync(`tar -tzf "${entry.archivePath}"`, { stdio: 'ignore' });
        console.log(`✓ Tar archive stream verified with zero corruption.`);
        console.log(`✅ Snapshot '${entry.id}' is 100% HEALTHY.`);
    } catch (e) {
        console.error(`❌ Tar integrity check failed!`, e.message);
    }
}

function commandRestore(targetId, targetScope = 'all') {
    const manifest = loadManifest();
    const entry = manifest.find(m => m.id === targetId || m.id.includes(targetId));

    if (!entry) {
        console.error(`❌ Snapshot '${targetId}' not found in manifest.`);
        return;
    }

    console.log(`\n⚠️ INITIATING DISASTER RECOVERY RESTORATION FOR [${entry.id}]`);
    console.log(`Target Scope: ${targetScope.toUpperCase()}`);

    // Create safety pre-restore backup first!
    console.log(`\nCreating safety pre-restore backup first...`);
    commandSnapshot('pre_restore_safety');

    const tempExtractDir = path.join(VAULT_ROOT_DIR, `_restore_${Date.now()}`);
    fs.mkdirSync(tempExtractDir, { recursive: true });

    try {
        console.log(`Extracting archive...`);
        execSync(`tar -xzf "${entry.archivePath}" -C "${tempExtractDir}"`);

        // Restore Workspace
        if (targetScope === 'all' || targetScope === 'workspace') {
            const restoredWs = path.join(tempExtractDir, 'workspace');
            if (fs.existsSync(restoredWs)) {
                console.log(`Restoring workspace to: ${WORKSPACE_DIR}`);
                copyRecursive(restoredWs, WORKSPACE_DIR);
                console.log(`✓ Workspace restored.`);
            }
        }

        // Restore Config
        if (targetScope === 'all' || targetScope === 'config') {
            const restoredCfg = path.join(tempExtractDir, 'gemini_config');
            if (fs.existsSync(restoredCfg)) {
                console.log(`Restoring global config to: ${GEMINI_CONFIG_DIR}`);
                copyRecursive(restoredCfg, GEMINI_CONFIG_DIR);
                console.log(`✓ Antigravity global config restored.`);
            }
        }

        console.log(`\n✅ RESTORATION COMPLETED SUCCESSFULLY!`);
    } catch (err) {
        console.error(`❌ Restoration failed:`, err.message);
    } finally {
        fs.rmSync(tempExtractDir, { recursive: true, force: true });
    }
}

// --- CLI ROUTER ---
const args = process.argv.slice(2);
const command = args[0] || 'help';

switch (command) {
    case 'snapshot':
    case 'backup':
        const labelArg = args.indexOf('--label');
        const label = labelArg !== -1 ? args[labelArg + 1] : 'manual';
        commandSnapshot(label);
        break;

    case 'list':
    case 'ls':
        commandList();
        break;

    case 'verify':
        if (!args[1]) {
            console.error(`Usage: node antigravity-vault.js verify <snapshot-id>`);
        } else {
            commandVerify(args[1]);
        }
        break;

    case 'restore':
        if (!args[1]) {
            console.error(`Usage: node antigravity-vault.js restore <snapshot-id> [--scope all|workspace|config]`);
        } else {
            const scopeArg = args.indexOf('--scope');
            const scope = scopeArg !== -1 ? args[scopeArg + 1] : 'all';
            commandRestore(args[1], scope);
        }
        break;

    default:
        console.log(`
⚡ ANTIGRAVITY QUANTUM VAULT (AQV) — CLI COMMANDS:
  node antigravity-vault.js snapshot [--label <name>]  -> Create instant full snapshot
  node antigravity-vault.js list                       -> Show all saved snapshots & integrity hashes
  node antigravity-vault.js verify <id>                -> Verify SHA256 and archive integrity
  node antigravity-vault.js restore <id> [--scope all] -> 1-click restore with pre-flight backup
        `);
        break;
}
