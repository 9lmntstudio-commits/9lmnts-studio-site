/**
 * 9LMNTS Studio — Universal Modular Intake Embed Widget (v1.0.0)
 * 2026 Linear/Vercel Enterprise Standard | Plug-and-Play Script
 * 
 * Usage:
 * <script 
 *   src="https://9lmntsstudio.com/embed/intake.js" 
 *   data-client-id="my-client-slug" 
 *   data-business="Capital Catering" 
 *   data-theme="dark" 
 *   data-color="#FF5500"
 *   data-title="Book Catering & Private Events"
 *   data-webhook="https://loabrain.app.n8n.cloud/webhook/scraper-intake"
 * ></script>
 * 
 * Trigger via HTML attribute:
 * <button data-9lmnts-trigger>Book Now</button>
 */

(function () {
    'use strict';

    if (window.__9LMNTS_INTAKE_INITIALIZED__) return;
    window.__9LMNTS_INTAKE_INITIALIZED__ = true;

    // --- 1. CONFIGURATION & SCRIPT ATTRIBUTES ---
    const currentScript = document.currentScript || (function() {
        const scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();

    const config = {
        clientId: (currentScript && currentScript.getAttribute('data-client-id')) || 'default-client',
        businessName: (currentScript && currentScript.getAttribute('data-business')) || '9LMNTS Partner',
        theme: (currentScript && currentScript.getAttribute('data-theme')) || 'dark', // 'dark' | 'light'
        primaryColor: (currentScript && currentScript.getAttribute('data-color')) || '#FF5500',
        title: (currentScript && currentScript.getAttribute('data-title')) || 'Instant Quote & Booking Intake',
        subtitle: (currentScript && currentScript.getAttribute('data-subtitle')) || 'Sub-second mobile intake powered by 9LMNTS Studio. Instant confirmation.',
        webhookUrl: (currentScript && currentScript.getAttribute('data-webhook')) || 'https://loabrain.app.n8n.cloud/webhook/scraper-intake',
        showFloatingPill: (currentScript && currentScript.getAttribute('data-floating-pill')) !== 'false',
        pillText: (currentScript && currentScript.getAttribute('data-pill-text')) || '⚡ Book Instant Quote'
    };

    // Check URL parameters to allow dynamic overrides
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('biz')) config.businessName = decodeURIComponent(urlParams.get('biz'));
    if (urlParams.get('theme')) config.theme = urlParams.get('theme');

    // --- 2. INJECT ENCAPSULATED CSS ---
    const isDark = config.theme === 'dark';
    const bgBase = isDark ? '#08090C' : '#FFFFFF';
    const bgCard = isDark ? '#101218' : '#F8F9FA';
    const bgElevated = isDark ? '#161922' : '#FFFFFF';
    const textPrimary = isDark ? '#FFFFFF' : '#0A0A0A';
    const textSecondary = isDark ? '#94A3B8' : '#52525B';
    const textTertiary = isDark ? '#64748B' : '#71717A';
    const borderSubtle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
    const borderMedium = isDark ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.14)';
    const scrim = isDark ? 'rgba(0, 0, 0, 0.82)' : 'rgba(15, 23, 42, 0.55)';
    const shadowElevated = isDark ? '0 24px 60px rgba(0, 0, 0, 0.8)' : '0 20px 40px rgba(0, 0, 0, 0.1)';

    const styleEl = document.createElement('style');
    styleEl.id = 'nine-elements-embed-styles';
    styleEl.textContent = `
        /* 9LMNTS Embed Namespace */
        .nl-backdrop {
            display: none;
            position: fixed;
            inset: 0;
            background: ${scrim};
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            z-index: 999999;
            justify-content: center;
            align-items: center;
            padding: 16px;
            opacity: 0;
            transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            box-sizing: border-box;
        }

        .nl-backdrop.nl-active {
            display: flex;
            opacity: 1;
        }

        .nl-modal {
            background: ${bgElevated};
            color: ${textPrimary};
            border: 1px solid ${borderMedium};
            border-radius: 24px;
            width: 100%;
            max-width: 520px;
            max-height: 92vh;
            overflow-y: auto;
            padding: 28px 24px;
            position: relative;
            box-shadow: ${shadowElevated};
            transform: scale(0.96) translateY(8px);
            transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            box-sizing: border-box;
        }

        .nl-backdrop.nl-active .nl-modal {
            transform: scale(1) translateY(0);
        }

        .nl-close-btn {
            position: absolute;
            top: 18px;
            right: 18px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: ${bgCard};
            border: 1px solid ${borderSubtle};
            color: ${textSecondary};
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 15px;
            line-height: 1;
            padding: 0;
            transition: all 0.2s ease;
        }

        .nl-close-btn:hover {
            color: ${textPrimary};
            border-color: ${config.primaryColor};
            transform: rotate(90deg);
        }

        .nl-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 9999px;
            background: ${isDark ? 'rgba(255, 85, 0, 0.12)' : 'rgba(255, 85, 0, 0.08)'};
            border: 1px solid ${config.primaryColor}44;
            color: ${config.primaryColor};
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            margin-bottom: 12px;
        }

        .nl-pulse {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: ${config.primaryColor};
            box-shadow: 0 0 8px ${config.primaryColor};
            animation: nlPulse 2s infinite;
        }

        @keyframes nlPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(1.3); }
        }

        .nl-title {
            font-size: 22px;
            font-weight: 800;
            letter-spacing: -0.02em;
            margin: 0 0 6px 0;
            line-height: 1.25;
            color: ${textPrimary};
        }

        .nl-subtitle {
            font-size: 13px;
            color: ${textSecondary};
            margin: 0 0 20px 0;
            line-height: 1.5;
        }

        .nl-form-group {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-bottom: 14px;
            text-align: left;
        }

        .nl-label {
            font-size: 12px;
            font-weight: 600;
            color: ${textPrimary};
            letter-spacing: -0.01em;
        }

        .nl-input, .nl-select, .nl-textarea {
            width: 100%;
            padding: 11px 14px;
            background: ${bgCard};
            border: 1px solid ${borderSubtle};
            border-radius: 12px;
            color: ${textPrimary};
            font-size: 14px;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
            font-family: inherit;
        }

        .nl-input:focus, .nl-select:focus, .nl-textarea:focus {
            border-color: ${config.primaryColor};
            box-shadow: 0 0 0 3px ${config.primaryColor}22;
        }

        .nl-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }

        .nl-btn-submit {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            background: ${config.primaryColor};
            color: #FFFFFF !important;
            padding: 13px 20px;
            border-radius: 9999px;
            font-size: 14px;
            font-weight: 700;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 4px 16px ${config.primaryColor}40;
            margin-top: 8px;
            box-sizing: border-box;
        }

        .nl-btn-submit:hover {
            opacity: 0.94;
            transform: translateY(-1px);
            box-shadow: 0 6px 20px ${config.primaryColor}60;
        }

        .nl-btn-submit:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        .nl-trust-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 16px;
            font-size: 11px;
            color: ${textTertiary};
        }

        .nl-trust-link {
            color: ${textSecondary};
            text-decoration: none;
            font-weight: 600;
        }

        .nl-trust-link:hover {
            color: ${config.primaryColor};
        }

        /* Floating Trigger Pill */
        .nl-floating-pill {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 999998;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: ${config.primaryColor};
            color: #FFFFFF !important;
            padding: 12px 20px;
            border-radius: 9999px;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: -0.01em;
            cursor: pointer;
            box-shadow: 0 8px 24px ${config.primaryColor}55;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            user-select: none;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .nl-floating-pill:hover {
            transform: translateY(-2px) scale(1.02);
            box-shadow: 0 12px 30px ${config.primaryColor}77;
        }

        /* Success Card */
        .nl-success-view {
            display: none;
            text-align: center;
            padding: 16px 8px;
        }

        .nl-success-icon {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: ${config.primaryColor}18;
            color: ${config.primaryColor};
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            font-weight: 800;
            margin: 0 auto 16px auto;
            border: 1px solid ${config.primaryColor}44;
        }

        @media (max-width: 480px) {
            .nl-row {
                grid-template-columns: 1fr;
            }
            .nl-modal {
                padding: 24px 18px;
            }
            .nl-floating-pill {
                bottom: 16px;
                right: 16px;
                padding: 10px 16px;
                font-size: 12px;
            }
        }
    `;
    document.head.appendChild(styleEl);

    // --- 3. INJECT MODAL HTML INTO DOM ---
    const modalWrapper = document.createElement('div');
    modalWrapper.id = 'nine-elements-intake-root';
    modalWrapper.innerHTML = `
        <div class="nl-backdrop" id="nlBackdrop">
            <div class="nl-modal" id="nlModal" role="dialog" aria-modal="true">
                <button class="nl-close-btn" id="nlCloseBtn" aria-label="Close Modal">✕</button>

                <!-- FORM VIEW -->
                <div id="nlFormView">
                    <div class="nl-badge">
                        <span class="nl-pulse"></span>
                        <span id="nlBadgeBiz">${escapeHtml(config.businessName)}</span>
                    </div>

                    <h2 class="nl-title" id="nlModalTitle">${escapeHtml(config.title)}</h2>
                    <p class="nl-subtitle" id="nlModalSub">${escapeHtml(config.subtitle)}</p>

                    <form id="nlIntakeForm" onsubmit="return false;">
                        <div class="nl-form-group">
                            <label class="nl-label" for="nlService">Required Service / Package *</label>
                            <select class="nl-select" id="nlService" required>
                                <option value="Corporate Catering">Corporate Catering (25–250+ Guests)</option>
                                <option value="Private Chef Dining">Private Chef Dinner & Tasting</option>
                                <option value="Wedding Banquet">Wedding & Reception Banquet</option>
                                <option value="Commercial Contract">Commercial On-Site Service</option>
                                <option value="Custom Quote">Other / Custom Inquiry</option>
                            </select>
                        </div>

                        <div class="nl-row">
                            <div class="nl-form-group">
                                <label class="nl-label" for="nlHeadcount">Headcount / Guests</label>
                                <input type="text" class="nl-input" id="nlHeadcount" placeholder="e.g. 50–75" />
                            </div>
                            <div class="nl-form-group">
                                <label class="nl-label" for="nlDate">Target Date</label>
                                <input type="text" class="nl-input" id="nlDate" placeholder="e.g. Nov 14 or Flexible" />
                            </div>
                        </div>

                        <div class="nl-row">
                            <div class="nl-form-group">
                                <label class="nl-label" for="nlClientName">Your Name *</label>
                                <input type="text" class="nl-input" id="nlClientName" placeholder="Full name" required />
                            </div>
                            <div class="nl-form-group">
                                <label class="nl-label" for="nlPhone">Direct Mobile / WhatsApp *</label>
                                <input type="tel" class="nl-input" id="nlPhone" placeholder="(613) 555-0199" required />
                            </div>
                        </div>

                        <div class="nl-form-group">
                            <label class="nl-label" for="nlNotes">Special Dietary, Venue or Custom Notes</label>
                            <input type="text" class="nl-input" id="nlNotes" placeholder="Allergies, location, or budget considerations" />
                        </div>

                        <button type="submit" class="nl-btn-submit" id="nlSubmitBtn">
                            Submit Request (Instant Mobile Notification) →
                        </button>
                    </form>

                    <div class="nl-trust-bar">
                        <span>⚡ Sub-second response rail</span>
                        <span>•</span>
                        <a href="https://9lmntsstudio.com" target="_blank" class="nl-trust-link">Engineered by 9LMNTS Studio</a>
                    </div>
                </div>

                <!-- SUCCESS VIEW -->
                <div class="nl-success-view" id="nlSuccessView">
                    <div class="nl-success-icon">✓</div>
                    <h3 class="nl-title" style="margin-bottom: 8px;">Request Received</h3>
                    <p class="nl-subtitle" style="margin-bottom: 20px;">
                        Thank you, <strong id="nlSuccessName">Client</strong>! Your inquiry has been routed to <strong>${escapeHtml(config.businessName)}</strong>. We will text your phone directly within 15 minutes.
                    </p>
                    <button class="nl-btn-submit" id="nlSuccessDoneBtn">
                        Done
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modalWrapper);

    // --- 4. FLOATING TRIGGER PILL ---
    if (config.showFloatingPill) {
        const pill = document.createElement('div');
        pill.className = 'nl-floating-pill';
        pill.id = 'nlFloatingPill';
        pill.innerHTML = `<span>${escapeHtml(config.pillText)}</span>`;
        pill.addEventListener('click', () => openModal());
        document.body.appendChild(pill);
    }

    // --- 5. EVENT BINDINGS & CONTROLLER ---
    const backdrop = document.getElementById('nlBackdrop');
    const closeBtn = document.getElementById('nlCloseBtn');
    const formView = document.getElementById('nlFormView');
    const successView = document.getElementById('nlSuccessView');
    const intakeForm = document.getElementById('nlIntakeForm');
    const submitBtn = document.getElementById('nlSubmitBtn');
    const successDoneBtn = document.getElementById('nlSuccessDoneBtn');

    function openModal(customTitle, customBiz) {
        if (customTitle) document.getElementById('nlModalTitle').textContent = customTitle;
        if (customBiz) {
            document.getElementById('nlBadgeBiz').textContent = customBiz;
        }
        formView.style.display = 'block';
        successView.style.display = 'none';
        backdrop.classList.add('nl-active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        backdrop.classList.remove('nl-active');
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    successDoneBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && backdrop.classList.contains('nl-active')) {
            closeModal();
        }
    });

    // Bind all buttons with [data-9lmnts-trigger] or [data-9lmnts-modal]
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-9lmnts-trigger], [data-9lmnts-modal]');
        if (trigger) {
            e.preventDefault();
            const customTitle = trigger.getAttribute('data-9lmnts-title');
            const customBiz = trigger.getAttribute('data-9lmnts-biz');
            openModal(customTitle, customBiz);
        }
    });

    // Form Submission Handler
    intakeForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('nlClientName').value.trim();
        const phone = document.getElementById('nlPhone').value.trim();
        const service = document.getElementById('nlService').value;
        const headcount = document.getElementById('nlHeadcount').value.trim();
        const date = document.getElementById('nlDate').value.trim();
        const notes = document.getElementById('nlNotes').value.trim();

        if (!name || !phone) {
            alert('Please provide your name and mobile phone number.');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Transmitting Request...';

        const payload = {
            clientId: config.clientId,
            businessName: config.businessName,
            clientName: name,
            phone: phone,
            service: service,
            headcount: headcount || 'Not specified',
            targetDate: date || 'Flexible',
            notes: notes || 'None',
            sourceUrl: window.location.href,
            timestamp: new Date().toISOString()
        };

        // Cache locally for zero-loss reliability
        try {
            const history = JSON.parse(localStorage.getItem('9lmnts_embed_leads') || '[]');
            history.unshift(payload);
            localStorage.setItem('9lmnts_embed_leads', JSON.stringify(history.slice(0, 20)));
        } catch (err) {}

        // Send to n8n webhook asynchronously
        if (config.webhookUrl) {
            try {
                fetch(config.webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                    mode: 'no-cors' // Allows cross-origin webhook dispatch without CORS blocking
                }).catch(() => {});
            } catch (err) {}
        }

        // Show Success
        setTimeout(() => {
            document.getElementById('nlSuccessName').textContent = name;
            formView.style.display = 'none';
            successView.style.display = 'block';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Request (Instant Mobile Notification) →';
            intakeForm.reset();
        }, 350);
    });

    function escapeHtml(str) {
        return String(str || '').replace(/[&<>"']/g, function(m) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
        });
    }

    // Expose global controller
    window.NineElementsIntake = {
        open: openModal,
        close: closeModal,
        config: config
    };

})();
