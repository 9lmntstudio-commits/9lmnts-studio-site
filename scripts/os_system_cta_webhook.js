#!/usr/bin/env node
/**
 * 9LMNTS Studio — Automated CTA Workflow & Intake Dispatch Engine (Node.js ESM)
 * Triggered by YouTube comments containing 'OS system', 'OS', or related commands.
 */

import http from 'node:http';

export const BRAND_NAME_VISUAL = "9LMNTS Studio";
export const BRAND_NAME_AUDIO = "Nine Elements Studio";
export const PRIMARY_DOMAIN = "9lmntsstudio.com";
export const INTAKE_URL = `https://${PRIMARY_DOMAIN}/os`;
export const DEPOSIT_EMAIL = "payments@9lmntsstudio.com";
export const FOUNDER_NAME = "Darnley Sanon";
export const FOUNDER_HANDLE = "@9lmntsstudio";

export const SERVICES = {
  revenue_recovery: {
    title: "The Revenue Recovery System",
    price_cad: 1200,
    deposit_cad: 600,
    turnaround_days: "3–5 days (72-hour fast track)",
    deliverables: [
      "High-converting mobile landing page",
      "24/7 automated SMS/Email lead intake engine",
      "Speed-to-lead auto-responder webhook",
      "Sub-second mobile performance optimization"
    ]
  },
  turnkey_os: {
    title: "Turnkey Business OS / Chef OS",
    price_range_cad: "2,200 – 3,200",
    deposit_range_cad: "1,100 – 1,600",
    turnaround_days: "5–7 days",
    deliverables: [
      "Full custom web application + Supabase database",
      "Live customer booking & calendar reservation portal",
      "Custom dynamic quote calculator",
      "Automated catering/project intake pipeline"
    ]
  },
  webar_menu: {
    title: "WebAR Signature Menu Add-On",
    price_cad: 450,
    deposit_cad: 225,
    turnaround_days: "48 hours",
    deliverables: [
      "3–5 signature dishes or products rendered into interactive 3D WebAR browser models",
      "QR code table tents & printable flyers for zero-app camera scanning",
      "Direct Apple QuickLook & Android SceneViewer compatibility"
    ]
  }
};

const TRIGGER_REGEX = /\b(os\s*system|os\b|system\b|revenue\b|audit\b|recovery\b)/i;

export function matchesTrigger(commentText) {
  return TRIGGER_REGEX.test(commentText);
}

export function generatePublicReply(author = "there") {
  return `Appreciate you connecting with ${BRAND_NAME_AUDIO}. Your system blueprint is ready. Head directly to ${PRIMARY_DOMAIN}/os or check your messages to run your free 60-second intake audit.`;
}

export function qualifyClientTriage(businessUrl, frictionBottleneck, contactInfo) {
  const text = (frictionBottleneck || "").toLowerCase();
  let serviceKey = "revenue_recovery";

  if (/menu|food|dish|ar|3d|webar|table tent/i.test(text)) {
    serviceKey = "webar_menu";
  } else if (/booking|portal|chef|catering|complex|database|turnkey|app/i.test(text)) {
    serviceKey = "turnkey_os";
  }

  const pkg = SERVICES[serviceKey];
  const now = new Date();
  const slaDeadline = new Date(now.getTime() + 72 * 60 * 60 * 1000);
  const auditId = `AUDIT-${Math.floor(now.getTime() / 1000)}`;

  return {
    audit_id: auditId,
    timestamp: now.toISOString(),
    client: {
      business_url: businessUrl,
      friction_bottleneck: frictionBottleneck,
      contact_info: contactInfo
    },
    recommended_package: {
      key: serviceKey,
      title: pkg.title,
      total_price_cad: pkg.price_range_cad || pkg.price_cad,
      deposit_required_cad: pkg.deposit_range_cad || pkg.deposit_cad,
      turnaround: pkg.turnaround_days,
      deliverables: pkg.deliverables
    },
    payment_lock: {
      domestic_canada_rail: {
        method: "Interac e-Transfer",
        recipient: DEPOSIT_EMAIL,
        memo_reference: `Deposit: ${auditId} - ${contactInfo}`,
        terms: "50% non-refundable deposit. Work commences immediately upon clearance."
      },
      international_rail: {
        method: "Direct PayPal Business Invoice",
        recipient: DEPOSIT_EMAIL,
        terms: "50% non-refundable deposit."
      }
    },
    dispatch_sla: {
      sla_hours: 72,
      target_completion: slaDeadline.toISOString(),
      founder_alert: {
        recipient: FOUNDER_NAME,
        channel: "SMS / Webhook Priority 1",
        status: "AWAITING_DEPOSIT_CONFIRMATION"
      }
    }
  };
}

export function handleYoutubeCommentWebhook(payload) {
  const comment = payload.comment || "";
  const author = payload.author || "Founder";
  const videoId = payload.video_id || "PODCAST_DROP";
  const triggered = matchesTrigger(comment);

  const result = {
    received_at: new Date().toISOString(),
    video_id: videoId,
    author,
    comment,
    triggered
  };

  if (triggered) {
    result.public_reply = generatePublicReply(author);
    result.intake_gateway = INTAKE_URL;
    result.status = "REPLY_DISPATCHED";
  } else {
    result.status = "IGNORED_NO_TRIGGER_KEYWORD";
  }
  return result;
}

// CLI runner
const args = process.argv.slice(2);
if (args.length > 0) {
  if (args[0] === '--simulate') {
    const comment = args.slice(1).join(' ') || "OS system";
    console.log(`\n[+] Testing YouTube Comment Trigger: "${comment}"`);
    const res = handleYoutubeCommentWebhook({ comment, author: "OttawaClient", video_id: "EP_04" });
    console.log(JSON.stringify(res, null, 2));
  } else if (args[0] === '--triage') {
    const url = args[1] || "https://ottawa-catering.ca";
    const friction = args[2] || "Missed calls, need instant booking system";
    const contact = args[3] || "owner@ottawa-catering.ca / 613-555-0199";
    console.log(`\n[+] Processing 3-Step Client Triage:`);
    const res = qualifyClientTriage(url, friction, contact);
    console.log(JSON.stringify(res, null, 2));
  } else if (args[0] === '--server') {
    const port = parseInt(args[1] || "8088", 10);
    const server = http.createServer((req, res) => {
      if (req.method === 'POST' && req.url === '/webhook/youtube-comment') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            const response = handleYoutubeCommentWebhook(data);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(response, null, 2));
          } catch (e) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: e.message }));
          }
        });
      } else if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: "Online", gateway: INTAKE_URL }));
      } else {
        res.writeHead(404);
        res.end();
      }
    });
    server.listen(port, () => {
      console.log(`[⚡] 9LMNTS Studio CTA Webhook running on http://127.0.0.1:${port}`);
    });
  }
}
