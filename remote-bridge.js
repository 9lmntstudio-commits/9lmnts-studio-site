#!/usr/bin/env node
/**
 * 9LMNTS Studio — Gemini Mobile Brain & Remote Bridge (v1.0.0)
 * Connects Gemini Mobile App / Google Tasks to Local Antigravity Engine
 * 
 * Port: 8888
 * Mobile URL: http://<YOUR_LOCAL_IP>:8888/remote-cockpit.html
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PORT = process.env.PORT || 8888;
const WORKSPACE_DIR = __dirname;
const DATA_DIR = path.join(WORKSPACE_DIR, 'data');
const QUEUE_FILE = path.join(DATA_DIR, 'task_queue.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure task queue file exists
if (!fs.existsSync(QUEUE_FILE)) {
    fs.writeFileSync(QUEUE_FILE, JSON.stringify([], null, 2), 'utf8');
}

const server = http.createServer((req, res) => {
    // CORS headers for mobile access
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const url = new URL(req.url, `http://localhost:${PORT}`);
    const pathname = url.pathname;

    // --- 1. SERVE MOBILE COCKPIT HTML ---
    if (pathname === '/' || pathname === '/remote-cockpit.html') {
        const cockpitFile = path.join(WORKSPACE_DIR, 'remote-cockpit.html');
        if (fs.existsSync(cockpitFile)) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(fs.readFileSync(cockpitFile, 'utf8'));
            return;
        }
    }

    // --- 2. API: GET STATUS & QUEUE ---
    if (pathname === '/api/status' && req.method === 'GET') {
        let queue = [];
        try { queue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8')); } catch(e){}
        let leads = [];
        try { leads = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'crm_leads.json'), 'utf8')); } catch(e){}

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'ONLINE',
            serverTime: new Date().toISOString(),
            workspace: WORKSPACE_DIR,
            activeQueueLength: queue.length,
            recentTasks: queue.slice(0, 5),
            leadsCount: leads.length
        }));
        return;
    }

    // --- 3. API: POST NEW TASK FROM GEMINI APP / MOBILE ---
    if (pathname === '/api/task' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const data = JSON.parse(body || '{}');
                const taskText = data.task || data.prompt || data.text;
                const source = data.source || 'Gemini Mobile App';

                if (!taskText) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Missing task text' }));
                    return;
                }

                const taskRecord = {
                    id: `task_${Date.now()}`,
                    createdAt: new Date().toISOString(),
                    source: source,
                    task: taskText,
                    status: 'PENDING',
                    result: null
                };

                // Check for built-in fast actions
                const lower = taskText.toLowerCase();
                if (lower.startsWith('snapshot') || lower.includes('vault snapshot')) {
                    try {
                        const out = execSync('node antigravity-vault.js snapshot --label "mobile_task"', { cwd: WORKSPACE_DIR }).toString();
                        taskRecord.status = 'COMPLETED';
                        taskRecord.result = out.split('\n').filter(l => l.includes('SNAPSHOT SECURED') || l.includes('Archive File')).join(' | ');
                    } catch (err) {
                        taskRecord.status = 'FAILED';
                        taskRecord.result = err.message;
                    }
                } else if (lower.startsWith('pitch') || lower.includes('generate pitch')) {
                    try {
                        const out = execSync(`node automation/generate-pitch.js --client "${data.client || 'Client'}" --vertical "${data.vertical || 'chef'}"`, { cwd: WORKSPACE_DIR }).toString();
                        taskRecord.status = 'COMPLETED';
                        taskRecord.result = 'Pitch generated and logged to CRM.';
                    } catch (err) {
                        taskRecord.status = 'FAILED';
                        taskRecord.result = err.message;
                    }
                }

                // Append to queue file
                let queue = [];
                try { queue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8')); } catch(e){}
                queue.unshift(taskRecord);
                fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue.slice(0, 50), null, 2), 'utf8');

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    success: true,
                    message: 'Task received and queued for execution',
                    task: taskRecord
                }));
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
        return;
    }

    // --- 4. API: GET PENDING TASKS ---
    if (pathname === '/api/tasks' && req.method === 'GET') {
        let queue = [];
        try { queue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8')); } catch(e){}
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(queue));
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('\n================================================================');
    console.log(`⚡ 9LMNTS STUDIO — GEMINI MOBILE BRAIN BRIDGE RUNNING ON PORT ${PORT}`);
    console.log('================================================================');
    console.log(`Local Access:    http://localhost:${PORT}/remote-cockpit.html`);
    console.log(`API Endpoint:    POST http://localhost:${PORT}/api/task`);
    console.log(`Queue File:      ${QUEUE_FILE}`);
    console.log('Use with Gemini Mobile App, n8n webhook, or local network browser.');
    console.log('================================================================\n');
});
