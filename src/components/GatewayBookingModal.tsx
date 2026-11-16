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
  '48-Hour WebAR 3D Menu / Holographic Card',
  'Spark Drop-In Booking & AI Widget',
  'Founding Client 30%-Off Flow Sprint ($1,050 CAD)',
  'Restaurant / Hospitality & Catering',
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
      // Clipboard API fallback
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
      // Non-blocking notification
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
      {/* Obsidian Scrim */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#060608]/85 backdrop-blur-md"
      />

      {/* Architectural Modal Sheet (0px radius, 1px hairline) */}
      <div className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto border border-white/[0.14] bg-[#0B0B0F] p-6 text-[#F3F4F6] shadow-2xl sm:p-8">
        {/* Top Modal Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5">
          <div>
            <p className="font-mono-hud text-[10px] font-bold tracking-[0.18em] uppercase text-[#E95004]">
              9LMNTS STUDIO GATEWAY // DISPATCH
            </p>
            <h2 className="mt-1 font-syne text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {config.path === 'agency'
                ? 'Reserve Your Agency Sprint'
                : 'Launch Live Base44 Platforms'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center border border-white/15 bg-[#060608] text-white transition-colors hover:border-[#E95004] hover:bg-[#E95004]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* 2-Option Path Toggle */}
        <div className="mt-5 grid grid-cols-2 border border-white/[0.1] bg-[#060608]">
          <button
            type="button"
            onClick={() => onChangePath('agency')}
            className={`flex cursor-pointer items-center justify-center gap-2 border-r border-white/[0.1] px-4 py-3 font-mono-hud text-[11px] font-bold tracking-[0.12em] uppercase transition-colors ${
              config.path === 'agency'
                ? 'bg-[#E95004] text-white'
                : 'text-[#9CA3AF] hover:text-white'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Agency Services</span>
          </button>

          <button
            type="button"
            onClick={() => onChangePath('saas')}
            className={`flex cursor-pointer items-center justify-center gap-2 px-4 py-3 font-mono-hud text-[11px] font-bold tracking-[0.12em] uppercase transition-colors ${
              config.path === 'saas'
                ? 'bg-[#E95004] text-white'
                : 'text-[#9CA3AF] hover:text-white'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Live Base44 Flagships</span>
          </button>
        </div>

        {/* PATH A: AGENCY SERVICES ONBOARDING */}
        {config.path === 'agency' && (
          <div className="mt-6">
            {submitted ? (
              <div className="border border-emerald-500/35 bg-emerald-950/20 p-6 sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center bg-[#E95004] text-white">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-syne text-2xl font-extrabold text-white">
                  Brief Received for {businessName || clientName || 'Your Brand'}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB]">
                  Selected Package:{' '}
                  <strong className="text-[#E5A93C]">
                    {selectedPkg.name} ({selectedPkg.price})
                  </strong>
                  . Next steps: Darnley reviews your brief, sends your{' '}
                  <strong className="text-white">1-Page Project Agreement</strong>, and locks your build slot upon receipt of{' '}
                  <strong className="text-white">{selectedPkg.deposit}</strong> via{' '}
                  {depositMethod === 'interac'
                    ? 'Interac e-Transfer'
                    : 'PayPal Invoice'}
                  .
                </p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border border-white/15 bg-[#060608] p-4">
                  <div>
                    <p className="font-mono-hud text-[10px] tracking-[0.14em] uppercase text-[#9CA3AF]">
                      Official Interac &amp; Kickoff Email
                    </p>
                    <p className="mt-0.5 font-mono-hud text-sm font-bold text-white">
                      {STUDIO_CONTACT.email}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex cursor-pointer items-center gap-1.5 bg-[#E95004] px-4 py-2 font-mono-hud text-[10px] font-bold uppercase text-white hover:bg-[#FF5500]"
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
                    className="inline-flex items-center gap-2 bg-[#E95004] px-5 py-2.5 font-mono-hud text-xs font-bold uppercase text-white hover:bg-[#FF5500]"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Open Email Backup</span>
                  </a>
                  <a
                    href={STUDIO_CONTACT.phoneHref}
                    className="inline-flex items-center gap-2 border border-white/20 px-5 py-2.5 font-mono-hud text-xs font-bold uppercase text-white hover:border-[#E95004]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#E95004]" />
                    <span>Call {STUDIO_CONTACT.phoneDisplay}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="cursor-pointer px-4 py-2.5 font-mono-hud text-xs uppercase text-[#9CA3AF] hover:text-white"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 1. Package Tier Picker */}
                <div>
                  <p className="mb-2 font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#9CA3AF]">
                    1 · PICK YOUR SPRINT SCOPE
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {EXPRESS_MODAL_PACKAGES.map((pkg) => {
                      const active = pkg.id === config.tier;
                      return (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => onChangeTier(pkg.id)}
                          className={`cursor-pointer border p-3 text-left transition-colors ${
                            active
                              ? 'border-[#E95004] bg-[#E95004]/15'
                              : 'border-white/[0.1] bg-[#060608] hover:border-white/30'
                          }`}
                        >
                          <p className="font-mono-hud text-[10px] font-bold uppercase text-[#E5A93C]">
                            {pkg.name}
                          </p>
                          <p className="mt-0.5 font-syne text-sm font-extrabold text-white">
                            {pkg.price}
                          </p>
                          <p className="font-mono-hud text-[10px] text-[#9CA3AF]">{pkg.timeline}</p>
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
                      className="mb-1.5 block font-mono-hud text-[10px] uppercase text-[#9CA3AF]"
                    >
                      Project Focus
                    </label>
                    <select
                      id="modal-focus"
                      value={focusArea}
                      onChange={(e) => setFocusArea(e.target.value)}
                      className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white outline-none focus:border-[#E95004]"
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
                    <p className="mb-1.5 font-mono-hud text-[10px] uppercase text-[#9CA3AF]">
                      Preferred Kickoff Deposit Rail
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setDepositMethod('interac')}
                        className={`cursor-pointer border px-3 py-2.5 font-mono-hud text-[11px] font-bold uppercase transition-colors ${
                          depositMethod === 'interac'
                            ? 'border-[#E95004] bg-[#E95004]/15 text-[#FF781F]'
                            : 'border-white/15 bg-[#060608] text-[#9CA3AF]'
                        }`}
                      >
                        Interac (CAD)
                      </button>
                      <button
                        type="button"
                        onClick={() => setDepositMethod('paypal')}
                        className={`inline-flex cursor-pointer items-center justify-center gap-1 border px-3 py-2.5 font-mono-hud text-[11px] font-bold uppercase transition-colors ${
                          depositMethod === 'paypal'
                            ? 'border-[#E95004] bg-[#E95004]/15 text-[#FF781F]'
                            : 'border-white/15 bg-[#060608] text-[#9CA3AF]'
                        }`}
                      >
                        <CreditCard className="h-3.5 w-3.5" />
                        <span>PayPal</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3. Contact Fields */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="modal-client-name"
                      className="mb-1.5 block font-mono-hud text-[10px] uppercase text-[#9CA3AF]"
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
                      className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] outline-none focus:border-[#E95004]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="modal-business"
                      className="mb-1.5 block font-mono-hud text-[10px] uppercase text-[#9CA3AF]"
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
                      className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] outline-none focus:border-[#E95004]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="modal-email"
                      className="mb-1.5 block font-mono-hud text-[10px] uppercase text-[#9CA3AF]"
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
                      className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] outline-none focus:border-[#E95004]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="modal-phone"
                      className="mb-1.5 block font-mono-hud text-[10px] uppercase text-[#9CA3AF]"
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
                      className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] outline-none focus:border-[#E95004]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="modal-notes"
                    className="mb-1.5 block font-mono-hud text-[10px] uppercase text-[#9CA3AF]"
                  >
                    Tell Us What You Want To Launch
                  </label>
                  <textarea
                    id="modal-notes"
                    rows={3}
                    placeholder="Share your website goals, launch date, or current bottleneck..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] outline-none focus:border-[#E95004]"
                  />
                </div>

                {/* Kickoff Footer Strip */}
                <div className="border border-white/[0.1] bg-[#060608] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono-hud text-[11px]">
                    <span className="text-[#9CA3AF]">
                      1-Page Agreement + 50% Kickoff Deposit:
                    </span>
                    <span className="font-bold text-[#E5A93C]">
                      {selectedPkg.deposit}
                    </span>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-3 w-full cursor-pointer bg-[#E95004] px-6 py-3.5 font-mono-hud text-xs font-bold tracking-[0.14em] uppercase text-white transition-colors hover:bg-[#FF5500] disabled:opacity-60"
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

        {/* PATH B: LIVE PUBLISHED BASE44 PLATFORMS (UNCHANGED) */}
        {config.path === 'saas' && (
          <div className="mt-6 space-y-5">
            <div className="grid grid-cols-2 border border-white/[0.12] bg-[#060608]">
              {LIVE_SAAS_PLATFORMS.map((platform) => {
                const active = platform.id === selectedPlatform.id;
                return (
                  <button
                    key={platform.id}
                    type="button"
                    onClick={() => onChangeSaas(platform.id)}
                    className={`cursor-pointer border-r border-white/[0.1] p-3.5 text-left last:border-r-0 transition-colors ${
                      active
                        ? 'bg-[#E95004]/15 border-b-2 border-b-[#E95004]'
                        : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    <p className="font-mono-hud text-[10px] font-bold uppercase text-[#E5A93C]">
                      Base44 Platform {platform.code}
                    </p>
                    <p className="mt-0.5 font-syne text-base font-extrabold text-white">
                      {platform.name}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="border border-white/[0.12] bg-[#060608]">
              <img
                src={selectedPlatform.image}
                alt={selectedPlatform.name}
                className="h-52 w-full border-b border-white/[0.08] object-cover object-top"
              />
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-syne text-xl font-extrabold text-white">
                    {selectedPlatform.name}
                  </h3>
                  <span className="border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono-hud text-[10px] font-bold uppercase text-emerald-300">
                    {selectedPlatform.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB]">
                  {selectedPlatform.summary}
                </p>

                <ul className="mt-4 space-y-2 text-xs text-[#D1D5DB]">
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
                    className="inline-flex items-center gap-2 bg-[#E95004] px-6 py-3 font-mono-hud text-xs font-bold uppercase text-white transition-colors hover:bg-[#FF5500]"
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
                    className="cursor-pointer border border-white/20 px-5 py-3 font-mono-hud text-xs font-bold uppercase text-white transition-colors hover:border-[#E5A93C] hover:text-[#E5A93C]"
                  >
                    Book Venue / Sponsor Setup →
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
