import { useEffect, useState, type FormEvent } from 'react';
import {
  Check,
  CheckCircle2,
  Copy,
  CreditCard,
  ExternalLink,
  Layers,
  Mail,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';
import {
  EXPRESS_MODAL_PACKAGES,
  LIVE_SAAS_PLATFORMS,
  STUDIO_CONTACT,
} from '../data/agencyData';

export interface ModalConfigState {
  isOpen: boolean;
  path: 'agency' | 'saas';
  tier: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
  focus: string;
  saasId: 'soundclash' | 'artist';
}

interface GatewayBookingModalProps {
  config: ModalConfigState;
  onChangePath: (path: 'agency' | 'saas') => void;
  onChangeSaas: (id: 'soundclash' | 'artist') => void;
  onChangeTier: (tier: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom') => void;
  onClose: () => void;
}

const FOCUS_OPTIONS = [
  'Custom Agency Website & Booking',
  'Restaurant / Hospitality & Catering',
  'Brand Identity & Visual System',
  'Specialty Coffee / Local Service Brand',
  'Fashion / Apparel & QR Merch',
  'AI Lead Automation & Concierge',
];

export function GatewayBookingModal({
  config,
  onChangePath,
  onChangeSaas,
  onChangeTier,
  onClose,
}: GatewayBookingModalProps) {
  const [focusArea, setFocusArea] = useState(config.focus || FOCUS_OPTIONS[0]);
  const [depositMethod, setDepositMethod] = useState<'interac' | 'paypal'>('interac');
  const [businessName, setBusinessName] = useState('');
  const [clientName, setClientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (config.focus) setFocusArea(config.focus);
  }, [config.focus]);

  useEffect(() => {
    if (!config.isOpen) return;
    setSubmitted(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [config.isOpen, onClose]);

  if (!config.isOpen) return null;

  const selectedPkg =
    EXPRESS_MODAL_PACKAGES.find((p) => p.id === config.tier) ??
    EXPRESS_MODAL_PACKAGES[2];
  const selectedPlatform =
    LIVE_SAAS_PLATFORMS.find((p) => p.id === config.saasId) ??
    LIVE_SAAS_PLATFORMS[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_CONTACT.email);
    } catch {
      // Clipboard API may be restricted in non-HTTPS previews; keep visual confirmation
    }
    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const payload = {
      source: '9lmntsstudio.com-gateway',
      path: 'agency',
      package: `${selectedPkg.name} (${selectedPkg.price})`,
      deposit: selectedPkg.deposit,
      paymentPreference: depositMethod,
      focusArea,
      businessName,
      clientName,
      email,
      phone,
      notes,
      submittedAt: new Date().toISOString(),
    };

    try {
      await fetch(STUDIO_CONTACT.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // Non-blocking notification; instant confirmation still displays with direct e-Transfer & email backup
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const mailtoBrief = `mailto:${STUDIO_CONTACT.email}?subject=${encodeURIComponent(
    `9LMNTS Sprint Request — ${businessName || clientName || 'New Client'} (${selectedPkg.name})`
  )}&body=${encodeURIComponent(
    `Name: ${clientName}\nBusiness: ${businessName}\nFocus: ${focusArea}\nPackage: ${selectedPkg.name} (${selectedPkg.price})\nDeposit Method: ${
      depositMethod === 'interac' ? 'Interac e-Transfer (CAD)' : 'PayPal Invoice'
    }\nPhone: ${phone}\nEmail: ${email}\n\nGoal:\n${notes}`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="9LMNTS Customer Gateway & Onboarding"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Frosted Scrim */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#111827]/60 backdrop-blur-sm"
      />

      {/* Modal Sheet */}
      <div className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6 text-[#111827] shadow-2xl sm:p-8">
        {/* Top Modal Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-black/[0.07] pb-5">
          <div>
            <p className="text-xs font-extrabold tracking-[0.14em] uppercase text-[#E95004]">
              9LMNTS Studio Gateway
            </p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {config.path === 'agency'
                ? 'Book Your Agency Sprint'
                : 'Explore Live SaaS Platforms'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-[#F9FAFB] text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* 2-Option Path Toggle */}
        <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-[#F3F4F6] p-1.5">
          <button
            type="button"
            onClick={() => onChangePath('agency')}
            className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
              config.path === 'agency'
                ? 'bg-white text-[#111827] shadow-sm'
                : 'text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            <Sparkles className="h-4 w-4 text-[#E95004]" />
            <span>Agency Services</span>
          </button>

          <button
            type="button"
            onClick={() => onChangePath('saas')}
            className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:text-sm ${
              config.path === 'saas'
                ? 'bg-white text-[#111827] shadow-sm'
                : 'text-[#6B7280] hover:text-[#111827]'
            }`}
          >
            <Layers className="h-4 w-4 text-emerald-600" />
            <span>Live SaaS Platforms</span>
          </button>
        </div>

        {/* PATH A: AGENCY SERVICES ONBOARDING & BOOKING */}
        {config.path === 'agency' && (
          <div className="mt-6">
            {submitted ? (
              <div className="rounded-3xl border border-black/[0.08] bg-[#F9FAFB] p-6 sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E95004] text-white">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-2xl font-extrabold text-[#111827]">
                  Brief Received for {businessName || clientName || 'Your Brand'}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                  Selected Package:{' '}
                  <strong className="text-[#111827]">
                    {selectedPkg.name} ({selectedPkg.price})
                  </strong>
                  . Next steps: Darnley reviews your goals, sends your{' '}
                  <strong className="text-[#111827]">1-Page Project Agreement</strong>, and
                  your build date locks upon receipt of your{' '}
                  <strong className="text-[#111827]">{selectedPkg.deposit}</strong> via{' '}
                  {depositMethod === 'interac'
                    ? 'Interac e-Transfer'
                    : 'PayPal Invoice'}
                  .
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white p-4">
                  <div>
                    <p className="text-[11px] font-bold tracking-wider uppercase text-[#6B7280]">
                      Official Interac &amp; Kickoff Email
                    </p>
                    <p className="text-sm font-extrabold text-[#111827]">
                      {STUDIO_CONTACT.email}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#111827] px-4 py-2 text-xs font-bold text-white hover:bg-[#E95004]"
                  >
                    {copiedEmail ? (
                      <Check className="h-3.5 w-3.5" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                    <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={mailtoBrief}
                    className="inline-flex items-center gap-2 rounded-full bg-[#E95004] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#FF5500]"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Open Email Backup</span>
                  </a>
                  <a
                    href={STUDIO_CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-5 py-2.5 text-xs font-bold text-[#111827] hover:border-[#E95004]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#E95004]" />
                    <span>Call {STUDIO_CONTACT.phoneDisplay}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="cursor-pointer rounded-full px-4 py-2.5 text-xs font-semibold text-[#6B7280] hover:text-[#111827]"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Package Tier Picker */}
                <div>
                  <p className="mb-2 text-xs font-extrabold tracking-wider uppercase text-[#4B5563]">
                    1 · Pick Your Sprint Scope
                  </p>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {EXPRESS_MODAL_PACKAGES.map((pkg) => {
                      const active = pkg.id === config.tier;
                      return (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => onChangeTier(pkg.id)}
                          className={`cursor-pointer rounded-2xl border p-3 text-left transition-all ${
                            active
                              ? 'border-[#E95004] bg-[#FFF7F3] shadow-xs'
                              : 'border-black/10 bg-white hover:border-black/25'
                          }`}
                        >
                          <p className="text-xs font-extrabold text-[#E95004]">
                            {pkg.name}
                          </p>
                          <p className="mt-0.5 text-sm font-black text-[#111827]">
                            {pkg.price}
                          </p>
                          <p className="text-[11px] text-[#6B7280]">{pkg.timeline}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Focus & Deposit Preference */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="modal-focus"
                      className="mb-1.5 block text-xs font-bold text-[#374151]"
                    >
                      Project Focus
                    </label>
                    <select
                      id="modal-focus"
                      value={focusArea}
                      onChange={(e) => setFocusArea(e.target.value)}
                      className="w-full rounded-xl border border-black/12 bg-[#F9FAFB] px-3.5 py-2.5 text-sm font-medium text-[#111827] outline-none focus:border-[#E95004]"
                    >
                      {!FOCUS_OPTIONS.includes(focusArea) && (
                        <option value={focusArea}>{focusArea}</option>
                      )}
                      {FOCUS_OPTIONS.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <p className="mb-1.5 text-xs font-bold text-[#374151]">
                      Preferred Kickoff Deposit Rail
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDepositMethod('interac')}
                        className={`cursor-pointer rounded-xl border px-3 py-2.5 text-xs font-bold transition-colors ${
                          depositMethod === 'interac'
                            ? 'border-[#E95004] bg-[#FFF7F3] text-[#E95004]'
                            : 'border-black/12 bg-white text-[#4B5563]'
                        }`}
                      >
                        Interac (CAD)
                      </button>
                      <button
                        type="button"
                        onClick={() => setDepositMethod('paypal')}
                        className={`inline-flex cursor-pointer items-center justify-center gap-1 rounded-xl border px-3 py-2.5 text-xs font-bold transition-colors ${
                          depositMethod === 'paypal'
                            ? 'border-[#E95004] bg-[#FFF7F3] text-[#E95004]'
                            : 'border-black/12 bg-white text-[#4B5563]'
                        }`}
                      >
                        <CreditCard className="h-3.5 w-3.5" />
                        <span>PayPal Invoice</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3. Contact Fields */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="modal-client-name"
                      className="mb-1.5 block text-xs font-bold text-[#374151]"
                    >
                      Your Name
                    </label>
                    <input
                      id="modal-client-name"
                      required
                      type="text"
                      placeholder="Alex Mercer"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full rounded-xl border border-black/12 bg-[#F9FAFB] px-3.5 py-2.5 text-sm outline-none focus:border-[#E95004]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="modal-business"
                      className="mb-1.5 block text-xs font-bold text-[#374151]"
                    >
                      Business / Brand Name
                    </label>
                    <input
                      id="modal-business"
                      required
                      type="text"
                      placeholder="Your Restaurant, Studio, or Brand"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full rounded-xl border border-black/12 bg-[#F9FAFB] px-3.5 py-2.5 text-sm outline-none focus:border-[#E95004]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="modal-email"
                      className="mb-1.5 block text-xs font-bold text-[#374151]"
                    >
                      Email Address
                    </label>
                    <input
                      id="modal-email"
                      required
                      type="email"
                      placeholder="you@yourbrand.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-black/12 bg-[#F9FAFB] px-3.5 py-2.5 text-sm outline-none focus:border-[#E95004]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="modal-phone"
                      className="mb-1.5 block text-xs font-bold text-[#374151]"
                    >
                      Phone / Text Number
                    </label>
                    <input
                      id="modal-phone"
                      required
                      type="tel"
                      placeholder="(613) 555-0148"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-black/12 bg-[#F9FAFB] px-3.5 py-2.5 text-sm outline-none focus:border-[#E95004]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="modal-notes"
                    className="mb-1.5 block text-xs font-bold text-[#374151]"
                  >
                    Tell Us What You Want To Launch
                  </label>
                  <textarea
                    id="modal-notes"
                    rows={3}
                    placeholder="Share your website goals, launch date, or current bottleneck..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-black/12 bg-[#F9FAFB] px-3.5 py-2.5 text-sm outline-none focus:border-[#E95004]"
                  />
                </div>

                {/* Kickoff Footer Strip */}
                <div className="rounded-2xl bg-[#F9FAFB] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-[#4B5563]">
                      Zero Surprises · 1-Page Agreement + 50% Kickoff Deposit:
                    </span>
                    <span className="font-extrabold text-[#E95004]">
                      {selectedPkg.deposit}
                    </span>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-3 w-full cursor-pointer rounded-full bg-[#E95004] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#FF5500] disabled:opacity-60"
                  >
                    {submitting
                      ? 'Locking Sprint Request...'
                      : `Request ${selectedPkg.name} Onboarding (${selectedPkg.price})`}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* PATH B: LIVE PUBLISHED SAAS PLATFORMS (NO REDESIGN NEEDED) */}
        {config.path === 'saas' && (
          <div className="mt-6 space-y-5">
            <div className="flex gap-2">
              {LIVE_SAAS_PLATFORMS.map((platform) => {
                const active = platform.id === selectedPlatform.id;
                return (
                  <button
                    key={platform.id}
                    type="button"
                    onClick={() => onChangeSaas(platform.id)}
                    className={`flex-1 cursor-pointer rounded-2xl border p-3.5 text-left transition-all ${
                      active
                        ? 'border-[#E95004] bg-[#FFF7F3]'
                        : 'border-black/10 bg-[#F9FAFB] hover:border-black/25'
                    }`}
                  >
                    <p className="text-[11px] font-bold uppercase text-[#E95004]">
                      Platform {platform.code}
                    </p>
                    <p className="mt-0.5 text-base font-extrabold text-[#111827]">
                      {platform.name}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="overflow-hidden rounded-3xl border border-black/[0.08] bg-[#F9FAFB]">
              <img
                src={selectedPlatform.image}
                alt={selectedPlatform.name}
                className="h-52 w-full object-cover object-top"
              />
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-extrabold text-[#111827]">
                    {selectedPlatform.name}
                  </h3>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                    {selectedPlatform.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                  {selectedPlatform.summary}
                </p>

                <ul className="mt-4 space-y-2 text-xs text-[#374151]">
                  {selectedPlatform.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E95004]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={selectedPlatform.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#E95004] px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#FF5500]"
                  >
                    <span>Open {selectedPlatform.name} Live</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      onChangePath('agency');
                      onChangeTier('cypher');
                      setFocusArea(`White-Label / Event Customization for ${selectedPlatform.name}`);
                    }}
                    className="cursor-pointer rounded-full border border-black/12 bg-white px-5 py-3 text-xs font-bold text-[#111827] hover:border-[#E95004] hover:text-[#E95004]"
                  >
                    Book White-Label Event Setup →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
