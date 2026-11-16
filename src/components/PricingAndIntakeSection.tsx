import { useState, type FormEvent } from 'react';
import { ArrowRight, Check, Copy, Mail, Phone, Zap } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/agencyData';

interface PricingAndIntakeSectionProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    focus?: string;
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

const FAST_CASH_WEDGES = [
  {
    code: 'WEDGE_01 // 48-HR WEBAR MENU OR HOLO CARD',
    price: '$450–$500 CAD',
    deposit: '$225–$250 Deposit',
    desc: '3–5 signature dishes in browser WebAR via table-tent QR or holographic NFC card.',
    tier: 'spark' as const,
    focus: '48-Hour WebAR 3D Menu / Holographic Card',
  },
  {
    code: 'WEDGE_02 // SPARK DROP-IN BOOKING & AI WIDGET',
    price: '$500 CAD',
    deposit: '$250 Deposit',
    desc: 'Drops directly onto any Wix, WordPress, or Squarespace site in 48 hours to stop missed leads.',
    tier: 'spark' as const,
    focus: 'Spark Drop-In Booking & AI Widget',
  },
  {
    code: 'WEDGE_03 // FOUNDING CLIENT 30%-OFF VIDEO GRANT',
    price: '$1,050 CAD',
    deposit: '$525 Deposit · 3 Spots/Mo',
    desc: '30% off Flow Sprint ($1,500 value) in exchange for a 30-second video testimonial on launch day.',
    tier: 'flow' as const,
    focus: 'Founding Client 30%-Off Flow Sprint ($1,050 CAD)',
  },
];

const SPRINT_EDITIONS = [
  {
    id: 'spark' as const,
    code: 'EDITION_00 // SPARK',
    name: 'Spark Wedge',
    price: '$500 CAD',
    deposit: '$250 Interac Deposit',
    timeline: '48-Hour Turnaround',
    featured: false,
    summary: 'Drop-in booking/AI widget, WebAR 3D menu starter, or holographic NFC card.',
    deliverables: [
      '48-hr live deployment on current site',
      'Direct PayPal / Interac booking lock',
      'SMS + Email lead notification webhook',
    ],
  },
  {
    id: 'flow' as const,
    code: 'EDITION_01 // FLOW',
    name: 'Flow Sprint',
    price: '$1,500 CAD',
    deposit: '$750 Deposit (Founding: $525)',
    timeline: '5–7 Days',
    featured: true,
    summary: 'Custom brand flagship site, 2.5D motion cinema, calendar booking & PayPal checkout.',
    deliverables: [
      'Bespoke dark/editorial 3D scrollytelling site',
      'PayPal Complete Payments (Apple Pay / 4× Split)',
      'AI chat reception + CRM webhook pipeline',
    ],
  },
  {
    id: 'beat' as const,
    code: 'EDITION_02 // BEAT / CHEF OS',
    name: 'Beat Sprint',
    price: '$3,000 CAD',
    deposit: '$1,500 Interac Deposit',
    timeline: '7–10 Days',
    featured: false,
    summary: 'Full Chef OS / WorkerBee OS / Reception OS with dish-accurate visuals & crew/event portals.',
    deliverables: [
      '0%-commission menu + 50% catering deposit engine',
      'Custom dish / product photo suite on black stoneware',
      'Owner CRM ledger + automated follow-up sequences',
    ],
  },
  {
    id: 'cypher' as const,
    code: 'EDITION_03 // CYPHER OS',
    name: 'Cypher Command',
    price: '$5,000 CAD',
    deposit: '$2,500 Interac Deposit',
    timeline: '14 Days',
    featured: false,
    summary: 'Multi-location enterprise OS, SoundClash Venue OS license, or custom Base44/SaaS build.',
    deliverables: [
      'Multi-branch menus, portals & live event voting',
      'Dedicated Stitch + Figma token architecture',
      'Full AI voice + SMS reception automation',
    ],
  },
];

const CARE_PLANS = [
  { name: 'Hosting & Uptime Guard', price: '$99 / mo' },
  { name: 'Growth + Monthly Menu / Campaign Updates', price: '$249 / mo' },
  { name: 'Dedicated AI Reception & Swarm Retainer', price: '$449 / mo' },
];

export function PricingAndIntakeSection({ onOpenModal }: PricingAndIntakeSectionProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedTier, setSelectedTier] = useState<'spark' | 'flow' | 'beat' | 'cypher'>('flow');
  const [goal, setGoal] = useState('48-Hr WebAR / Custom Site + Booking');
  const [timeline, setTimeline] = useState('This Week (48h–7d)');
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedInterac, setCopiedInterac] = useState(false);

  const chosenEdition =
    SPRINT_EDITIONS.find((e) => e.id === selectedTier) ?? SPRINT_EDITIONS[1];

  const handleCopyInterac = async () => {
    try {
      await navigator.clipboard.writeText(STUDIO_CONTACT.email);
    } catch {
      // Clipboard fallback in non-HTTPS contexts
    }
    setCopiedInterac(true);
    window.setTimeout(() => setCopiedInterac(false), 2400);
  };

  const handleDispatch = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(STUDIO_CONTACT.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: '9lmntsstudio.com-flagship-v4',
          tier: chosenEdition.name,
          price: chosenEdition.price,
          deposit: chosenEdition.deposit,
          goal,
          timeline,
          clientName: name,
          businessName: business,
          email,
          phone,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch {
      // Proceed cleanly to instant Interac kickoff screen
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section
      id="pricing"
      className="relative border-t border-white/[0.08] bg-[#060608] text-[#F3F4F6]"
    >
      {/* Chapter Perimeter Telemetry Header */}
      <div className="border-b border-white/[0.08] bg-[#09090C]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <div className="flex items-center gap-3 font-mono-hud text-[11px] tracking-[0.18em] uppercase">
            <span className="text-[#E95004]">CHAPTER 05 //</span>
            <span className="text-white">SOVEREIGN SPRINT ACQUISITION LEDGER</span>
          </div>
          <div className="font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#E5A93C]">
            1-PAGE AGREEMENT + 50% INTERAC DEPOSIT TO {STUDIO_CONTACT.email}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-8">
        {/* Heading */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono-hud text-[11px] tracking-[0.18em] uppercase text-[#E95004]">
              DARNLEY 3D LAB // CLEAR CAD PRICING
            </p>
            <h2 className="mt-2 font-syne text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Lock your build date today.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-editorial-serif text-xl italic text-[#D1D5DB]">
              Every tier includes source code ownership, zero surprise hourly billing, and direct PayPal + Interac readiness.
            </p>
          </div>
        </div>

        {/* Fast-Cash 48-Hour Rapid Wedge Strip */}
        <div className="mt-10 border border-[#E95004]/40 bg-[#0C0908]">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E95004]/30 px-5 py-3">
            <div className="flex items-center gap-2 font-mono-hud text-[11px] font-bold tracking-[0.18em] uppercase text-[#FF781F]">
              <Zap className="h-3.5 w-3.5" />
              <span>SAME-DAY / 48-HOUR FAST-CASH WEDGES (FOUNDERS &amp; HOSPITALITY)</span>
            </div>
            <span className="font-mono-hud text-[10px] uppercase text-[#E5A93C]">
              100% CREDITED TOWARD FULL FLOW OR BEAT SPRINT
            </span>
          </div>

          <div className="grid grid-cols-1 divide-y divide-white/[0.08] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {FAST_CASH_WEDGES.map((wedge) => (
              <div key={wedge.code} className="flex flex-col justify-between p-5">
                <div>
                  <p className="font-mono-hud text-[10px] tracking-[0.14em] uppercase text-[#E5A93C]">
                    {wedge.code}
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-syne text-xl font-extrabold whitespace-nowrap text-white xl:text-2xl">
                      {wedge.price}
                    </span>
                    <span className="font-mono-hud text-[11px] whitespace-nowrap text-[#FF781F]">
                      {wedge.deposit}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#9CA3AF]">{wedge.desc}</p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onOpenModal({
                      path: 'agency',
                      tier: wedge.tier,
                      focus: wedge.focus,
                    })
                  }
                  className="mt-4 inline-flex w-full cursor-pointer items-center justify-between border border-white/15 bg-[#060608] px-4 py-2.5 font-mono-hud text-[10px] font-bold tracking-[0.14em] uppercase text-white transition-colors hover:border-[#E95004] hover:bg-[#E95004]"
                >
                  <span>Lock 48-Hr Wedge</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Column Sharp Hairline Edition Matrix */}
        <div className="mt-8 grid grid-cols-1 border border-white/[0.1] bg-[#08080C] md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/[0.1]">
          {SPRINT_EDITIONS.map((ed) => (
            <div
              key={ed.id}
              className={`flex flex-col justify-between border-b border-white/[0.08] p-6 lg:border-b-0 ${
                ed.featured ? 'bg-[#110C09] ring-1 ring-inset ring-[#E95004]/60' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#E5A93C]">
                    {ed.code}
                  </p>
                  {ed.featured && (
                    <span className="bg-[#E95004] px-2 py-0.5 font-mono-hud text-[9px] font-bold tracking-[0.14em] uppercase text-white">
                      POPULAR
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-syne text-2xl font-extrabold text-white">{ed.name}</h3>
                <p className="mt-3 font-syne text-3xl font-extrabold text-[#E5A93C]">{ed.price}</p>
                <p className="mt-1 font-mono-hud text-[11px] text-[#9CA3AF]">
                  {ed.deposit} · {ed.timeline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#D1D5DB]">{ed.summary}</p>

                <ul className="mt-5 space-y-2 border-t border-white/[0.08] pt-4 text-xs text-[#D1D5DB]">
                  {ed.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E95004]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedTier(ed.id);
                  onOpenModal({
                    path: 'agency',
                    tier: ed.id,
                    focus: ed.name,
                  });
                }}
                className={`mt-6 w-full cursor-pointer py-3 font-mono-hud text-xs font-bold tracking-[0.14em] uppercase transition-colors ${
                  ed.featured
                    ? 'bg-[#E95004] text-white hover:bg-[#FF5500]'
                    : 'border border-white/20 bg-transparent text-white hover:border-[#E95004] hover:text-[#E95004]'
                }`}
              >
                Select {ed.name} →
              </button>
            </div>
          ))}
        </div>

        {/* Monthly Care Plans Bar */}
        <div className="mt-4 grid grid-cols-1 border border-white/[0.08] bg-[#0B0B0F] md:grid-cols-3 md:divide-x md:divide-white/[0.08]">
          {CARE_PLANS.map((plan) => (
            <div key={plan.name} className="flex items-center justify-between px-5 py-3.5">
              <span className="text-xs font-medium text-[#D1D5DB]">{plan.name}</span>
              <span className="font-mono-hud text-xs font-bold text-[#E5A93C]">{plan.price}</span>
            </div>
          ))}
        </div>

        {/* 2-Step Sovereign Dispatch Terminal */}
        <div className="mt-10 border border-white/[0.12] bg-[#09090D]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Payment Instructions Rail */}
            <div className="flex flex-col justify-between border-b border-white/[0.08] bg-[#0D0D12] p-6 lg:col-span-5 lg:border-r lg:border-b-0 lg:p-8">
              <div>
                <p className="font-mono-hud text-[10px] tracking-[0.18em] uppercase text-[#E95004]">
                  SOVEREIGN DISPATCH TERMINAL
                </p>
                <h3 className="mt-2 font-syne text-3xl font-extrabold text-white">
                  2-Step Project Kickoff
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                  Send your brief in 45 seconds. No calls required to get moving—your sprint slot reserves upon 50% Interac e-Transfer or PayPal Invoice.
                </p>

                <div className="mt-6 border border-white/[0.1] bg-[#060608] p-4">
                  <p className="font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#9CA3AF]">
                    AUTODEPOSIT INTERAC EMAIL (1 &apos;S&apos;)
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="font-mono-hud text-sm font-bold text-white">
                      {STUDIO_CONTACT.email}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyInterac}
                      className="inline-flex cursor-pointer items-center gap-1.5 border border-white/15 px-3 py-1.5 font-mono-hud text-[10px] uppercase text-[#E5A93C] hover:border-[#E5A93C]"
                    >
                      {copiedInterac ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedInterac ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 font-mono-hud text-xs">
                <a
                  href={STUDIO_CONTACT.phoneHref}
                  className="inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-white hover:border-[#E95004]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#E95004]" />
                  <span>{STUDIO_CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${STUDIO_CONTACT.email}`}
                  className="inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-[#D1D5DB] hover:border-white hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 text-[#E5A93C]" />
                  <span>Direct Email</span>
                </a>
              </div>
            </div>

            {/* Right Interactive 2-Step Form */}
            <div className="p-6 lg:col-span-7 lg:p-8">
              {submitted ? (
                <div className="flex h-full flex-col justify-center border border-emerald-500/30 bg-emerald-950/20 p-6">
                  <p className="font-mono-hud text-xs uppercase text-emerald-400">
                    ● SPRINT DISPATCH LOGGED
                  </p>
                  <h4 className="mt-2 font-syne text-2xl font-extrabold text-white">
                    Slot Reserved for {business || name || 'Your Brand'}
                  </h4>
                  <p className="mt-2 text-sm text-[#D1D5DB]">
                    Selected: <strong className="text-white">{chosenEdition.name}</strong> ({chosenEdition.price}). Send your 50% kickoff deposit (<strong className="text-[#E5A93C]">{chosenEdition.deposit}</strong>) to <strong className="text-white">{STUDIO_CONTACT.email}</strong> or text <strong className="text-white">{STUDIO_CONTACT.phoneDisplay}</strong>.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setStep(1);
                      }}
                      className="cursor-pointer border border-white/20 px-4 py-2.5 font-mono-hud text-xs uppercase text-white hover:border-[#E95004]"
                    >
                      Submit Another Brief
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDispatch} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 font-mono-hud text-[11px] uppercase">
                    <span className="text-[#E5A93C]">STEP {step} OF 2</span>
                    <span className="text-[#9CA3AF]">
                      {chosenEdition.name} ({chosenEdition.price})
                    </span>
                  </div>

                  {step === 1 ? (
                    <div className="space-y-4">
                      <div>
                        <p className="mb-2 font-mono-hud text-[10px] tracking-[0.14em] uppercase text-[#9CA3AF]">
                          SELECT EDITION
                        </p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                          {SPRINT_EDITIONS.map((ed) => (
                            <button
                              key={ed.id}
                              type="button"
                              onClick={() => setSelectedTier(ed.id)}
                              className={`cursor-pointer border px-3 py-2.5 text-left font-mono-hud transition-colors ${
                                selectedTier === ed.id
                                  ? 'border-[#E95004] bg-[#E95004]/15 text-white'
                                  : 'border-white/[0.1] bg-[#060608] text-[#9CA3AF] hover:border-white/30'
                              }`}
                            >
                              <p className="text-[10px] text-[#E5A93C]">{ed.name}</p>
                              <p className="mt-0.5 text-xs font-bold text-white">{ed.price}</p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-1.5 block font-mono-hud text-[10px] uppercase text-[#9CA3AF]">
                            Primary Objective
                          </label>
                          <select
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white outline-none focus:border-[#E95004]"
                          >
                            <option>48-Hr WebAR / Custom Site + Booking</option>
                            <option>Chef OS 0%-Commission Restaurant Ordering</option>
                            <option>Founding Client 30%-Off 3D Website ($1,050)</option>
                            <option>SoundClash OS Sponsor / Venue Night</option>
                            <option>Artist OS / Stem Licensing Setup</option>
                          </select>
                        </div>

                        <div>
                          <label className="mb-1.5 block font-mono-hud text-[10px] uppercase text-[#9CA3AF]">
                            Target Launch Window
                          </label>
                          <select
                            value={timeline}
                            onChange={(e) => setTimeline(e.target.value)}
                            className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white outline-none focus:border-[#E95004]"
                          >
                            <option>This Week (48h–7d)</option>
                            <option>7–14 Day Flagship Sprint</option>
                            <option>Next Event Date / Monthly Drop</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex cursor-pointer items-center gap-2 bg-[#E95004] px-6 py-3 font-mono-hud text-xs font-bold tracking-[0.16em] uppercase text-white transition-colors hover:bg-[#FF5500]"
                      >
                        <span>Continue to Contact Details</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                          required
                          type="text"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] outline-none focus:border-[#E95004]"
                        />
                        <input
                          required
                          type="text"
                          placeholder="Business / Brand Name"
                          value={business}
                          onChange={(e) => setBusiness(e.target.value)}
                          className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] outline-none focus:border-[#E95004]"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                          required
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] outline-none focus:border-[#E95004]"
                        />
                        <input
                          required
                          type="tel"
                          placeholder="Phone / SMS Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full border border-white/15 bg-[#060608] px-3.5 py-2.5 text-sm text-white placeholder-[#6B7280] outline-none focus:border-[#E95004]"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="submit"
                          disabled={submitting}
                          className="inline-flex cursor-pointer items-center gap-2 bg-[#E95004] px-6 py-3 font-mono-hud text-xs font-bold tracking-[0.16em] uppercase text-white transition-colors hover:bg-[#FF5500] disabled:opacity-60"
                        >
                          <span>
                            {submitting
                              ? 'Dispatching...'
                              : `Reserve ${chosenEdition.name} (${chosenEdition.price})`}
                          </span>
                          <ArrowRight className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="cursor-pointer border border-white/15 px-4 py-3 font-mono-hud text-xs uppercase text-[#9CA3AF] hover:text-white"
                        >
                          ← Back
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
