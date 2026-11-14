import { useEffect, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, CreditCard, Phone, Sparkles, X } from 'lucide-react';
import { PRICING_TIERS } from '../data/pillarsData';

interface BookBuildDrawerProps {
  isOpen: boolean;
  initialNiche?: string;
  initialTier?: 'spark' | 'flow' | 'cypher';
  onClose: () => void;
}

const NICHES = [
  'Ottawa Shawarma / Restaurant',
  'Kremas / Specialty Coffee Cafe',
  'Streetwear & Apparel Drop',
  'Artisan Bakery & Dessert',
  'Local Services & Trades',
  'Project LOA / Sound Clash / Event Arena',
];

export function BookBuildDrawer({
  isOpen,
  initialNiche,
  initialTier,
  onClose,
}: BookBuildDrawerProps) {
  const [selectedTier, setSelectedTier] = useState<'spark' | 'flow' | 'cypher'>(
    initialTier || 'flow'
  );
  const [niche, setNiche] = useState(initialNiche || NICHES[0]);
  const [careRetainer, setCareRetainer] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'interac' | 'paypal'>('interac');
  const [businessName, setBusinessName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialNiche) setNiche(initialNiche);
  }, [initialNiche]);

  useEffect(() => {
    if (initialTier) setSelectedTier(initialTier);
  }, [initialTier]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const activeTier =
    PRICING_TIERS.find((t) => t.id === selectedTier) ?? PRICING_TIERS[1];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('9lmntstudio@gmail.com');
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(true);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[90] flex justify-end">
          {/* Dark Blur Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Obsidian Showroom Intake Drawer */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Book a 9LMNTS Studio Build"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="relative z-10 flex h-full w-full max-w-xl flex-col overflow-y-auto border-l border-white/12 bg-[#0B0D12] p-6 text-white shadow-2xl sm:p-9"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF5500]/40 bg-[#FF5500]/10 px-3 py-1 font-telemetry text-[11px] font-semibold tracking-[0.14em] uppercase text-[#FF5500]">
                  <Sparkles className="h-3 w-3" />
                  9LMNTS Studio // Project Kickoff
                </span>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white">
                  Reserve Your Sprint.
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Direct 1-on-1 kickoff with Darnley. Zero middlemen, clear scope, 50% deposit starts the clock.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking drawer"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white transition-colors hover:bg-[#FF5500]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {submitted ? (
              <div className="my-auto py-8">
                <div className="rounded-3xl border border-white/12 bg-[#12151E] p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5500] text-white shadow-[0_0_25px_rgba(255,85,0,0.45)]">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold text-white">
                    Sprint Brief Locked for {businessName || 'Your Brand'}.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    Tier selected: <strong className="text-white">{activeTier.name}</strong> ({activeTier.price} · {niche})
                    {careRetainer ? ' + $297/mo Growth Care' : ''}. Call or text{' '}
                    <a
                      href="tel:6134009691"
                      className="font-semibold text-[#FF5500] underline underline-offset-4"
                    >
                      (613) 400-9691
                    </a>{' '}
                    or initiate your <strong className="text-white">{activeTier.deposit}</strong> via{' '}
                    {paymentMethod === 'interac'
                      ? 'Interac e-Transfer Autodeposit:'
                      : 'PayPal Business Invoice / Pay in 4 (sent upon SMS/Email ping):'}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#08090C] px-4 py-3.5">
                    <div>
                      <p className="font-telemetry text-[10px] uppercase tracking-wider text-zinc-400">
                        Official 9LMNTS Settlement Email (1 s)
                      </p>
                      <p className="font-telemetry text-sm font-semibold text-white">
                        9lmntstudio@gmail.com
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#FF5500] px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-[#FF6B1A]"
                    >
                      {copiedEmail ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      {copiedEmail ? 'Copied' : 'Copy Email'}
                    </button>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="tel:6134009691"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#050505] transition-transform hover:scale-[1.02]"
                    >
                      <Phone className="h-4 w-4 text-[#FF5500]" />
                      Call (613) 400-9691
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="cursor-pointer rounded-full border border-white/18 px-5 py-3 text-sm font-semibold text-zinc-200 hover:border-white/40"
                    >
                      Edit Brief
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col gap-5">
                {/* 1. Tier Selector */}
                <div>
                  <p className="mb-2.5 font-telemetry text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
                    1 · Select Package Tier
                  </p>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {PRICING_TIERS.map((tier) => {
                      const active = selectedTier === tier.id;
                      return (
                        <button
                          key={tier.id}
                          type="button"
                          onClick={() => setSelectedTier(tier.id)}
                          className={`cursor-pointer rounded-2xl border p-3.5 text-left transition-all ${
                            active
                              ? 'border-[#FF5500] bg-[#FF5500]/12 shadow-[0_8px_24px_rgba(255,85,0,0.2)]'
                              : 'border-white/10 bg-white/[0.03] hover:border-white/25'
                          }`}
                        >
                          <p className="font-telemetry text-[10px] font-bold uppercase text-[#FF5500]">
                            {tier.name}
                          </p>
                          <p className="mt-1 text-sm font-extrabold text-white">
                            {tier.price}
                          </p>
                          <p className="mt-0.5 text-[11px] text-zinc-400">
                            {tier.turnaround}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Industry Focus */}
                <div>
                  <label
                    htmlFor="book-niche"
                    className="mb-2 block font-telemetry text-[11px] font-semibold tracking-wider uppercase text-zinc-400"
                  >
                    2 · Your Industry / Brand Universe
                  </label>
                  <select
                    id="book-niche"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="w-full rounded-xl border border-white/14 bg-[#12151E] px-4 py-3 text-sm font-medium text-white outline-none focus:border-[#FF5500]"
                  >
                    {NICHES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. B2B Kickoff Payment Rail */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 font-telemetry text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
                      3 · B2B Deposit Method
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('interac')}
                        className={`flex-1 cursor-pointer rounded-xl border px-3 py-2.5 text-xs font-bold transition-colors ${
                          paymentMethod === 'interac'
                            ? 'border-[#FF5500] bg-[#FF5500]/15 text-white'
                            : 'border-white/12 bg-white/[0.03] text-zinc-400'
                        }`}
                      >
                        Interac (CAD)
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('paypal')}
                        className={`inline-flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-xl border px-3 py-2.5 text-xs font-bold transition-colors ${
                          paymentMethod === 'paypal'
                            ? 'border-[#FF5500] bg-[#FF5500]/15 text-white'
                            : 'border-white/12 bg-white/[0.03] text-zinc-400'
                        }`}
                      >
                        <CreditCard className="h-3.5 w-3.5" />
                        PayPal Invoice
                      </button>
                    </div>
                  </div>

                  <label className="flex cursor-pointer items-center gap-3 self-end rounded-xl border border-white/12 bg-white/[0.03] px-3.5 py-2.5">
                    <input
                      type="checkbox"
                      checked={careRetainer}
                      onChange={(e) => setCareRetainer(e.target.checked)}
                      className="h-4 w-4 accent-[#FF5500]"
                    />
                    <span className="text-xs text-zinc-200">
                      Add <strong className="text-white">$297/mo</strong> Growth Care
                    </span>
                  </label>
                </div>

                {/* 4. Business Contact Info */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="book-business"
                      className="mb-1.5 block font-telemetry text-[11px] font-semibold uppercase text-zinc-400"
                    >
                      Business Name
                    </label>
                    <input
                      id="book-business"
                      required
                      type="text"
                      placeholder="e.g. Rideau Kremas & Roasters"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full rounded-xl border border-white/14 bg-[#12151E] px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-[#FF5500]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="book-phone"
                      className="mb-1.5 block font-telemetry text-[11px] font-semibold uppercase text-zinc-400"
                    >
                      Phone / Text Number
                    </label>
                    <input
                      id="book-phone"
                      required
                      type="tel"
                      placeholder="(613) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-white/14 bg-[#12151E] px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-[#FF5500]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="book-email"
                    className="mb-1.5 block font-telemetry text-[11px] font-semibold uppercase text-zinc-400"
                  >
                    Email Address
                  </label>
                  <input
                    id="book-email"
                    required
                    type="email"
                    placeholder="owner@yourbusiness.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/14 bg-[#12151E] px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="book-notes"
                    className="mb-1.5 block font-telemetry text-[11px] font-semibold uppercase text-zinc-400"
                  >
                    What Do You Want Automated First?
                  </label>
                  <textarea
                    id="book-notes"
                    rows={2}
                    placeholder="e.g. Replace PDF menu, add PayPal catering deposits, or connect IG DM bot..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-white/14 bg-[#12151E] px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-[#FF5500]"
                  />
                </div>

                <div className="mt-auto border-t border-white/10 pt-4">
                  <div className="mb-3 flex items-center justify-between text-xs text-zinc-400">
                    <span>Selected 50% Kickoff Deposit:</span>
                    <span className="font-telemetry font-bold text-[#FF5500]">
                      {activeTier.deposit}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="w-full cursor-pointer rounded-full bg-[#FF5500] px-6 py-4 text-sm font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(255,85,0,0.35)] transition-all hover:bg-[#FF6B1A]"
                  >
                    Lock In {activeTier.name} Sprint ({activeTier.price})
                  </button>
                </div>
              </form>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
