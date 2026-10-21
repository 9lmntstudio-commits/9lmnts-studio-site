#!/usr/bin/env python3
"""
9LMNTS Studio — Automated CTA Workflow & Intake Dispatch Engine
Triggered by YouTube comments containing 'OS system', 'OS', or related commands.

Handles:
1. YouTube Comment Webhook ingestion & regex keyword matching.
2. Immediate public reply dispatch (<10s SLA).
3. 3-question client triage (Business URL, friction point, direct contact).
4. Service qualification & proposal routing ($1,200 Revenue Recovery, $2,200-$3,200 Turnkey OS, $450 WebAR).
5. 50% non-refundable deposit lock via Interac e-Transfer / PayPal.
6. Dispatch notification to Darnley Sanon initiating the 72-hour delivery sprint.
"""

import sys
import os
import json
import re
from datetime import datetime, timezone, timedelta
from http.server import HTTPServer, BaseHTTPRequestHandler

# Brand Identity & Phonetics Standard
BRAND_NAME_VISUAL = "9LMNTS Studio"
BRAND_NAME_AUDIO = "Nine Elements Studio"
PRIMARY_DOMAIN = "9lmntsstudio.com"
INTAKE_URL = f"https://{PRIMARY_DOMAIN}/os"
DEPOSIT_EMAIL = "payments@9lmntsstudio.com"
FOUNDER_NAME = "Darnley Sanon"
FOUNDER_HANDLE = "@9lmntsstudio"

# Commercial Service Packages & Pricing Matrix (CAD)
SERVICES = {
    "revenue_recovery": {
        "title": "The Revenue Recovery System",
        "price_cad": 1200,
        "deposit_cad": 600,
        "turnaround_days": "3–5 days (72-hour fast track)",
        "deliverables": [
            "High-converting mobile landing page",
            "24/7 automated SMS/Email lead intake engine",
            "Speed-to-lead auto-responder webhook",
            "Sub-second mobile performance optimization"
        ]
    },
    "turnkey_os": {
        "title": "Turnkey Business OS / Chef OS",
        "price_cad": 2600,  # midpoint of $2,200–$3,200
        "price_range_cad": "2,200 – 3,200",
        "deposit_cad": 1300,
        "deposit_range_cad": "1,100 – 1,600",
        "turnaround_days": "5–7 days",
        "deliverables": [
            "Full custom web application + Supabase database",
            "Live customer booking & calendar reservation portal",
            "Custom dynamic quote calculator",
            "Automated catering/project intake pipeline"
        ]
    },
    "webar_menu": {
        "title": "WebAR Signature Menu Add-On",
        "price_cad": 450,
        "deposit_cad": 225,
        "turnaround_days": "48 hours",
        "deliverables": [
            "3–5 signature dishes or products rendered into interactive 3D WebAR browser models",
            "QR code table tents & printable flyers for zero-app camera scanning",
            "Direct Apple QuickLook & Android SceneViewer compatibility"
        ]
    }
}

# Regex pattern for YouTube comment triggers
TRIGGER_REGEX = re.compile(
    r'\b(os\s*system|os\b|system\b|revenue\b|audit\b|recovery\b)',
    re.IGNORECASE
)

def matches_trigger(comment_text: str) -> bool:
    """Evaluates whether the comment contains any designated conversion keywords."""
    return bool(TRIGGER_REGEX.search(comment_text))

def generate_public_reply(author_name: str = "there") -> str:
    """Generates broadcast-compliant YouTube public reply within 10-second SLA."""
    return (
        f"Appreciate you connecting with {BRAND_NAME_AUDIO}. "
        f"Your system blueprint is ready. Head directly to {PRIMARY_DOMAIN}/os "
        f"or check your messages to run your free 60-second intake audit."
    )

def qualify_client_triage(business_url: str, friction_bottleneck: str, contact_info: str) -> dict:
    """
    Evaluates client 3-step triage answers and qualifies the prospect for the exact
    service package and deposit lock.
    """
    bottleneck = friction_bottleneck.lower().strip()
    
    # Qualification logic based on primary operational bottleneck
    if any(k in bottleneck for k in ["menu", "food", "dish", "ar", "3d", "webar", "table tent"]):
        service_key = "webar_menu"
    elif any(k in bottleneck for k in ["booking", "portal", "chef", "catering", "complex", "database", "turnkey", "app"]):
        service_key = "turnkey_os"
    else:
        # Default high-velocity package: Revenue Recovery
        service_key = "revenue_recovery"
        
    pkg = SERVICES[service_key]
    
    timestamp = datetime.now(timezone.utc)
    sla_deadline = timestamp + timedelta(hours=72)
    
    audit_id = f"AUDIT-{int(timestamp.timestamp())}"
    
    return {
        "audit_id": audit_id,
        "timestamp": timestamp.isoformat(),
        "client": {
            "business_url": business_url,
            "friction_bottleneck": friction_bottleneck,
            "contact_info": contact_info
        },
        "recommended_package": {
            "key": service_key,
            "title": pkg["title"],
            "total_price_cad": pkg.get("price_range_cad", pkg.get("price_cad")),
            "deposit_required_cad": pkg.get("deposit_range_cad", pkg.get("deposit_cad")),
            "turnaround": pkg["turnaround_days"],
            "deliverables": pkg["deliverables"]
        },
        "payment_lock": {
            "domestic_canada_rail": {
                "method": "Interac e-Transfer",
                "recipient": DEPOSIT_EMAIL,
                "memo_reference": f"Deposit: {audit_id} - {contact_info}",
                "terms": "50% non-refundable deposit. Work commences immediately upon clearance."
            },
            "international_rail": {
                "method": "Direct PayPal Business Invoice",
                "recipient": DEPOSIT_EMAIL,
                "terms": "50% non-refundable deposit."
            }
        },
        "dispatch_sla": {
            "sla_hours": 72,
            "target_completion": sla_deadline.isoformat(),
            "founder_alert": {
                "recipient": FOUNDER_NAME,
                "channel": "SMS / Webhook Priority 1",
                "status": "AWAITING_DEPOSIT_CONFIRMATION"
            }
        }
    }

def handle_youtube_comment_webhook(payload: dict) -> dict:
    """Processes incoming YouTube comment webhook payload."""
    comment = payload.get("comment", "")
    author = payload.get("author", "Founder")
    video_id = payload.get("video_id", "LIVE_STREAM")
    
    triggered = matches_trigger(comment)
    
    result = {
        "received_at": datetime.now(timezone.utc).isoformat(),
        "video_id": video_id,
        "author": author,
        "comment": comment,
        "triggered": triggered
    }
    
    if triggered:
        reply = generate_public_reply(author)
        result["public_reply"] = reply
        result["intake_gateway"] = INTAKE_URL
        result["status"] = "REPLY_DISPATCHED"
    else:
        result["status"] = "IGNORED_NO_TRIGGER_KEYWORD"
        
    return result

class WebhookHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode('utf-8')
        
        try:
            payload = json.loads(body)
        except json.JSONDecodeError:
            self.send_response(400)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"error": "Invalid JSON"}).encode('utf-8'))
            return
            
        if self.path == "/webhook/youtube-comment":
            res = handle_youtube_comment_webhook(payload)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(res, indent=2).encode('utf-8'))
            
        elif self.path == "/webhook/intake-triage":
            url = payload.get("business_url", "")
            friction = payload.get("friction", "")
            contact = payload.get("contact", "")
            res = qualify_client_triage(url, friction, contact)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(res, indent=2).encode('utf-8'))
            
        else:
            self.send_response(404)
            self.end_headers()

    def do_GET(self):
        if self.path == "/health":
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "9LMNTS Studio CTA Webhook Online", "gateway": INTAKE_URL}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

def run_cli():
    args = sys.argv[1:]
    if not args or "--help" in args:
        print("9LMNTS Studio — Automated CTA Workflow & Intake Dispatch Engine")
        print("\nUsage:")
        print("  python scripts/os_system_cta_webhook.py --simulate <comment_text>")
        print("  python scripts/os_system_cta_webhook.py --triage <business_url> <friction> <contact>")
        print("  python scripts/os_system_cta_webhook.py --server [port]")
        return

    if args[0] == "--simulate":
        comment = " ".join(args[1:]) if len(args) > 1 else "OS system please"
        print(f"\n[+] Testing YouTube Comment Trigger: \"{comment}\"")
        payload = {"comment": comment, "author": "OttawaContractor", "video_id": "EP_04"}
        out = handle_youtube_comment_webhook(payload)
        print(json.dumps(out, indent=2))

    elif args[0] == "--triage":
        url = args[1] if len(args) > 1 else "https://ottawa-eats.ca"
        friction = args[2] if len(args) > 2 else "Losing calls on mobile & need instant booking"
        contact = args[3] if len(args) > 3 else "owner@ottawa-eats.ca / 613-555-0199"
        print(f"\n[+] Processing 3-Step Client Triage:")
        out = qualify_client_triage(url, friction, contact)
        print(json.dumps(out, indent=2))

    elif args[0] == "--server":
        port = int(args[1]) if len(args) > 1 else 8088
        server = HTTPServer(('127.0.0.1', port), WebhookHandler)
        print(f"[⚡] 9LMNTS Studio CTA Webhook running on http://127.0.0.1:{port}")
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == "__main__":
    run_cli()
