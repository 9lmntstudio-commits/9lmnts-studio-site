import { useState } from 'react';
import { Exploded3DStage } from './components/Exploded3DStage';
import { HeroSection } from './components/HeroSection';
import { PricingShowcase, type SprintTierId } from './components/PricingShowcase';

const TIER_DETAILS: Record<SprintTierId, { name: string; total: string; upfront: string; memo: string; turnaround: string }> = {
  spark: {
    name: '48-Hr Menu & Booking Upgrade',
    total: '$500 CAD (+HST = $565)',
    upfront: '$500 CAD (100% Upfront One-Time)',
    memo: 'CLIENT-48HR-100',
    turnaround: '48 Hours',
  },
  flow: {
    name: 'Full Restaurant or Trades OS',
    total: '$1,500 – $2,200 CAD',
    upfront: '$750 – $1,100 CAD (50% Deposit)',
    memo: 'CLIENT-SPRINT-50',
    turnaround: '5–7 Days',
  },
  beat: {
    name: 'Founding-Client 30%-Off Sprint',
    total: '$1,050 CAD (+HST = $1,186.50)',
    upfront: '$525 CAD (50% Deposit)',
    memo: 'FOUNDING-SPRINT-50',
    turnaround: '5 Days',
  },
  cypher: {
    name: 'Enterprise & Venue Command OS',
    total: '$5,000 CAD (+HST = $5,650)',
    upfront: '$2,500 CAD (50% Deposit)',
    memo: 'CYPHER-OS-50',
    turnaround: '14 Days',
  },
};

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<SprintTierId>('spark');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const openBooking = (tier?: SprintTierId) => {
    if (tier) setSelectedTier(tier);
    setDrawerOpen(true);
  };

  const copyInterac = () => {
    navigator.clipboard?.writeText('9lmntstudio@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const activeOffer = TIER_DETAILS[selectedTier];

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#121212] selection:bg-[#FF5500] selection:text-white">
      <main>
        <HeroSection onOpenBooking={openBooking} />
        <Exploded3DStage onBook={() => openBooking('spark')} />
        <PricingShowcase onSelectTier={openBooking} />
      </main>

      {/* Spatial Editorial Footer */}
      <footer className="border-t border-[#121212]/10 bg-[#F7F5F0] py-14 text-[#121212]">
        <div className="mx-auto flex max-w-[1380px] flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center sm:px-12">
          <div className="space-y-2">
            <img
              src="/brand/9LMNTS LOGO.svg"
              onError={(e) => {
                e.currentTarget.src = '/brand/website nav logo.png';
              }}
              alt="9LMNTS Studio"
              className="h-9 w-auto object-contain"
            />
            <p className="text-xs text-[#474747]">
              Ottawa, Ontario, Canada · High-Conversion Websites, Booking Systems &amp; AI Receptionists
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-bold">
            <a href="/demo/coffee/" target="_blank" rel="noreferrer" className="hover:text-[#FF5500]">
              Kremas Coffee Demo ↗
            </a>
            <a href="/demo/belfanm/" target="_blank" rel="noreferrer" className="hover:text-[#FF5500]">
              BelFanm Demo ↗
            </a>
            <a href="/demo/preworkout/" target="_blank" rel="noreferrer" className="hover:text-[#FF5500]">
              VÒLT Demo ↗
            </a>
            <a href="tel:+16134009691" className="text-[#FF5500]">
              (613) 400-9691
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Kickoff & Interac Deposit Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-[#121212]/50 backdrop-blur-sm sm:items-center sm:p-6">
          <div className="w-full max-w-lg rounded-t-[28px] bg-[#F7F5F0] p-7 text-[#121212] shadow-2xl sm:rounded-[28px] sm:p-9">
            <div className="flex items-center justify-between border-b border-[#121212]/10 pb-4">
              <span className="font-mono-hud text-xs font-bold tracking-widest uppercase text-[#FF5500]">
                9LMNTS Kickoff &amp; Deposit Lock
              </span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="cursor-pointer rounded-full bg-[#EAE6DF] px-3 py-1 text-xs font-bold hover:bg-[#121212] hover:text-white"
              >
                ✕ Close
              </button>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              {(['spark', 'flow', 'cypher'] as SprintTierId[]).map((tid) => (
                <button
                  key={tid}
                  type="button"
                  onClick={() => setSelectedTier(tid)}
                  className={`cursor-pointer rounded-xl px-3 py-2 text-xs font-bold transition ${
                    selectedTier === tid
                      ? 'bg-[#121212] text-white'
                      : 'bg-white text-[#474747] hover:bg-[#EAE6DF]'
                  }`}
                >
                  {tid === 'spark' ? '$500 (48h)' : tid === 'flow' ? '$1.5k–$2.2k' : '$5,000 OS'}
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-xl font-extrabold">{activeOffer.name}</h3>
              <p className="mt-1 text-xs font-semibold text-[#474747]">
                Turnaround: {activeOffer.turnaround} · Total: {activeOffer.total}
              </p>
              <div className="mt-4 rounded-xl bg-[#F7F5F0] p-4">
                <p className="text-[11px] font-bold uppercase text-[#FF5500]">
                  Step 1: Send Kickoff Payment via Interac e-Transfer
                </p>
                <p className="mt-1 text-base font-extrabold">{activeOffer.upfront}</p>
                <p className="mt-1 text-xs text-[#474747]">
                  Autodeposit Email: <strong>9lmntstudio@gmail.com</strong> · Memo:{' '}
                  <code className="rounded bg-white px-1.5 py-0.5 font-bold">{activeOffer.memo}</code>
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={copyInterac}
                className="flex-1 cursor-pointer rounded-full bg-[#FF5500] py-3.5 text-xs font-bold text-white transition hover:bg-[#E04B00]"
              >
                {copiedEmail ? '✓ Copied 9lmntstudio@gmail.com' : 'Copy Interac Email'}
              </button>
              <a
                href="sms:+16134009691?&body=Hi%20Darnley%2C%20I%20want%20to%20lock%20a%209LMNTS%20Studio%20build%20slot."
                className="flex-1 rounded-full bg-[#121212] py-3.5 text-center text-xs font-bold text-white transition hover:bg-[#333333]"
              >
                Text Darnley (613) 400-9691
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

