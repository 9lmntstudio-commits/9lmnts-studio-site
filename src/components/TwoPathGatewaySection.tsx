import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Disc3, ExternalLink, Layers, Sparkles } from 'lucide-react';

interface TwoPathGatewaySectionProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    focus?: string;
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

const AGENCY_LEDGER_ROWS = [
  {
    code: 'WEBAR_01',
    name: '48-Hr WebAR 3D Menu / Holo Card',
    price: '$450–$500 CAD',
    deposit: '$225–$250 Dep',
    tier: 'spark' as const,
  },
  {
    code: 'SPRINT_01',
    name: 'Flow Custom Brand + Booking + AI',
    price: '$1,500 CAD',
    deposit: '$750 Dep · 5–7 Days',
    tier: 'flow' as const,
  },
  {
    code: 'SPRINT_02',
    name: 'Beat / Chef OS 0%-Commission Menu',
    price: '$3,000 CAD',
    deposit: '$1,500 Dep · 7–10 Days',
    tier: 'beat' as const,
  },
  {
    code: 'SPRINT_03',
    name: 'Cypher / Command OS Multi-Portal',
    price: '$5,000 CAD',
    deposit: '$2,500 Dep · 14 Days',
    tier: 'cypher' as const,
  },
];

const CLASH_BASE44_SCREENS = [
  {
    id: 'arena',
    label: '01 // 8-Contender Bracket',
    src: '/assets/screenshot-sound-clash.png',
    caption: 'Live Base44 Arena · 8-DJ Knockout & Crowd Voting',
  },
  {
    id: 'bracket',
    label: '02 // Mobile Bracket Tree',
    src: '/assets/mobile-clash-bracket-tree.jpg',
    caption: 'Authentic Base44 Mobile Matchup Progression',
  },
  {
    id: 'hype',
    label: '03 // $50 25× Power Hype',
    src: '/assets/mobile-clash-tipping-powerhype.jpg',
    caption: '4-Box Monetization ($20 GA / $10 Tip / $50 Hype / $150 VIP)',
  },
  {
    id: 'tickets',
    label: '04 // Finals & Door Entry',
    src: '/assets/mobile-clash-grand-finals.jpg',
    caption: '$500 Base Pot · 70/30 Split · $1,500 Sponsor Stage Dominance',
  },
];

export function TwoPathGatewaySection({ onOpenModal }: TwoPathGatewaySectionProps) {
  const [activeSaas, setActiveSaas] = useState<'soundclash' | 'artist'>('soundclash');
  const [clashScreenIdx, setClashScreenIdx] = useState(0);

  const currentClashScreen = CLASH_BASE44_SCREENS[clashScreenIdx] ?? CLASH_BASE44_SCREENS[0];

  return (
    <section
      id="gateways"
      className="relative border-t border-white/[0.08] bg-[#060608] text-[#F3F4F6]"
    >
      {/* Chapter Perimeter Telemetry Bar */}
      <div className="border-b border-white/[0.08] bg-[#09090C]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <div className="flex items-center gap-3 font-mono-hud text-[11px] tracking-[0.18em] uppercase">
            <span className="text-[#E95004]">CHAPTER 01 //</span>
            <span className="text-white">DUAL ACQUISITION MONOLITHS</span>
          </div>
          <div className="flex items-center gap-4 font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#9CA3AF]">
            <span>[ + ] BESPOKE AGENCY BUILD</span>
            <span className="hidden sm:inline">//</span>
            <span className="text-[#E5A93C]">[ + ] LIVE BASE44 FLAGSHIPS</span>
          </div>
        </div>
      </div>

      {/* Split Monolith Grid (0px radius, 1px hairline partition) */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
        {/* LEFT MONOLITH: BESPOKE AGENCY ARCHITECTURE */}
        <article className="group relative flex flex-col justify-between border-b border-white/[0.08] lg:border-r lg:border-b-0">
          {/* Full-Bleed Architectural Plate */}
          <div className="relative h-[360px] w-full overflow-hidden border-b border-white/[0.08] sm:h-[420px]">
            <img
              src="/assets/work/solarium/room_01_atrium_start.jpg"
              alt="9LMNTS Studio Bespoke 3D Scrollytelling Architecture"
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/45 to-transparent" />

            {/* Top HUD Stamp */}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono-hud text-[10px] tracking-[0.18em] uppercase">
              <span className="border border-white/20 bg-[#060608]/80 px-2.5 py-1 text-white backdrop-blur-md">
                PATH_01 // AGENCY_BUILD
              </span>
              <span className="border border-[#E95004]/50 bg-[#E95004]/15 px-2.5 py-1 text-[#FF781F] backdrop-blur-md">
                48-HR TO 14-DAY SPRINTS
              </span>
            </div>

            {/* Bottom Monolith Overlay Title */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <div className="flex items-center gap-2 font-mono-hud text-[11px] tracking-[0.16em] uppercase text-[#E95004]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>CUSTOM WEB ARCHITECTURE &amp; AI</span>
              </div>
              <h2 className="mt-2 font-syne text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Sites, WebAR &amp; Chef OS
              </h2>
              <p className="mt-2 max-w-xl font-editorial-serif text-xl italic leading-snug text-[#D1D5DB]">
                Built for your brand from zero: 3D visual storytelling, 0%-commission direct PayPal ordering, and bilingual AI reception.
              </p>
            </div>
          </div>

          {/* Hairline Sprint Ledger */}
          <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
            <div className="divide-y divide-white/[0.08] border border-white/[0.08] bg-[#0B0B0F]">
              {AGENCY_LEDGER_ROWS.map((row) => (
                <button
                  key={row.code}
                  type="button"
                  onClick={() =>
                    onOpenModal({
                      path: 'agency',
                      tier: row.tier,
                      focus: row.name,
                    })
                  }
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3.5 text-left transition-colors hover:bg-white/[0.03]"
                >
                  <div>
                    <p className="font-mono-hud text-[10px] tracking-[0.14em] uppercase text-[#E95004]">
                      {row.code}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-white">{row.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono-hud text-sm font-bold text-[#E5A93C]">{row.price}</p>
                    <p className="font-mono-hud text-[10px] text-[#9CA3AF]">{row.deposit}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onOpenModal({ path: 'agency', tier: 'flow' })}
                className="inline-flex cursor-pointer items-center gap-2 bg-[#E95004] px-6 py-3.5 font-mono-hud text-xs font-bold tracking-[0.16em] uppercase text-white transition-colors hover:bg-[#FF5500]"
              >
                <span>Configure Agency Sprint</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#pricing"
                className="border border-white/15 px-5 py-3.5 font-mono-hud text-xs tracking-[0.14em] uppercase text-[#D1D5DB] transition-colors hover:border-white hover:text-white"
              >
                Founding 30%-Off Offer →
              </a>
            </div>
          </div>
        </article>

        {/* RIGHT MONOLITH: LIVE BASE44 FLAGSHIP SYSTEMS (UNTOUCHED CANONICAL APPS) */}
        <article className="relative flex flex-col justify-between bg-[#08080B]">
          {/* Switcher Header */}
          <div className="border-b border-white/[0.08] p-6 sm:p-8 sm:pb-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-mono-hud text-[10px] tracking-[0.18em] uppercase text-[#E5A93C]">
                  PATH_02 // LIVE BASE44 PRODUCTION SYSTEMS
                </p>
                <h2 className="mt-1.5 font-syne text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  SoundClash &amp; Artist OS
                </h2>
              </div>
              <span className="border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono-hud text-[10px] font-bold tracking-[0.16em] uppercase text-emerald-300">
                ● LIVE CANONICAL UI
              </span>
            </div>

            <p className="mt-2 font-editorial-serif text-xl italic leading-snug text-[#D1D5DB]">
              Already engineered and shipped live on Base44 — inspect the real production interfaces and launch straight into either platform.
            </p>

            {/* Dual Base44 Switcher Tabs */}
            <div className="mt-5 grid grid-cols-2 border border-white/[0.12] bg-[#0D0D12]">
              <button
                type="button"
                onClick={() => setActiveSaas('soundclash')}
                className={`flex cursor-pointer items-center justify-center gap-2 border-r border-white/[0.12] px-4 py-3 font-mono-hud text-[11px] font-bold tracking-[0.14em] uppercase transition-colors ${
                  activeSaas === 'soundclash'
                    ? 'bg-[#E95004] text-white'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <Disc3 className="h-3.5 w-3.5" />
                <span>SoundClash OS</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveSaas('artist')}
                className={`flex cursor-pointer items-center justify-center gap-2 px-4 py-3 font-mono-hud text-[11px] font-bold tracking-[0.14em] uppercase transition-colors ${
                  activeSaas === 'artist'
                    ? 'bg-[#E95004] text-white'
                    : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                <Layers className="h-3.5 w-3.5" />
                <span>Artist OS</span>
              </button>
            </div>
          </div>

          {/* Authentic Base44 Viewport */}
          <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 sm:pt-6">
            {activeSaas === 'soundclash' ? (
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/[0.12] bg-[#050507]">
                  <img
                    src={currentClashScreen.src}
                    alt={currentClashScreen.caption}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#060608]/90 px-4 py-2.5 backdrop-blur-md">
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono-hud text-[10px] tracking-[0.14em] uppercase">
                      <span className="text-[#E5A93C]">{currentClashScreen.caption}</span>
                      <span className="text-[#9CA3AF]">clash.9lmntsstudio.com</span>
                    </div>
                  </div>
                </div>

                {/* Screen State Switcher */}
                <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
                  {CLASH_BASE44_SCREENS.map((screen, idx) => (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => setClashScreenIdx(idx)}
                      className={`cursor-pointer border px-2.5 py-2 text-left font-mono-hud text-[10px] leading-tight transition-colors ${
                        clashScreenIdx === idx
                          ? 'border-[#E95004] bg-[#E95004]/15 text-white'
                          : 'border-white/[0.08] bg-[#0B0B0F] text-[#9CA3AF] hover:border-white/25 hover:text-white'
                      }`}
                    >
                      {screen.label}
                    </button>
                  ))}
                </div>

                {/* SoundClash Specs */}
                <div className="mt-4 grid grid-cols-3 border border-white/[0.08] bg-[#0B0B0F] text-center font-mono-hud">
                  <div className="border-r border-white/[0.08] p-3">
                    <p className="text-[10px] text-[#9CA3AF]">FORMAT</p>
                    <p className="mt-1 text-xs font-bold text-white">8-Contender KO</p>
                  </div>
                  <div className="border-r border-white/[0.08] p-3">
                    <p className="text-[10px] text-[#9CA3AF]">CROWD POWER</p>
                    <p className="mt-1 text-xs font-bold text-[#E5A93C]">$20 / $50 / $150</p>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] text-[#9CA3AF]">SPONSOR SLOT</p>
                    <p className="mt-1 text-xs font-bold text-[#FF781F]">$1,500 CAD</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="https://clash.9lmntsstudio.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white px-6 py-3.5 font-mono-hud text-xs font-bold tracking-[0.14em] uppercase text-[#060608] transition-colors hover:bg-[#E5A93C]"
                  >
                    <span>Launch SoundClash OS</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenModal({ path: 'saas', saasId: 'soundclash' })}
                    className="inline-flex cursor-pointer items-center gap-1.5 border border-white/20 px-5 py-3.5 font-mono-hud text-xs tracking-[0.14em] uppercase text-white transition-colors hover:border-[#E95004] hover:text-[#E95004]"
                  >
                    <span>Book Venue / Sponsor</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/[0.12] bg-[#050507]">
                  <video
                    src="/assets/artist-os-scrolling-walkthrough.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#060608]/90 px-4 py-2.5 backdrop-blur-md">
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono-hud text-[10px] tracking-[0.14em] uppercase">
                      <span className="text-[#E5A93C]">
                        Live Base44 Command Center Walkthrough
                      </span>
                      <span className="text-[#9CA3AF]">artist.9lmntsstudio.com</span>
                    </div>
                  </div>
                </div>

                {/* Artist OS Specs */}
                <div className="mt-4 grid grid-cols-3 border border-white/[0.08] bg-[#0B0B0F] text-center font-mono-hud">
                  <div className="border-r border-white/[0.08] p-3">
                    <p className="text-[10px] text-[#9CA3AF]">STEM VAULT</p>
                    <p className="mt-1 text-xs font-bold text-[#E5A93C]">$250 / 24-Bit WAV</p>
                  </div>
                  <div className="border-r border-white/[0.08] p-3">
                    <p className="text-[10px] text-[#9CA3AF]">PLATFORM FEE</p>
                    <p className="mt-1 text-xs font-bold text-white">0% Artist Cut</p>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] text-[#9CA3AF]">MODULES</p>
                    <p className="mt-1 text-xs font-bold text-[#FF781F]">Tour · Splits · CRM</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="https://artist.9lmntsstudio.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white px-6 py-3.5 font-mono-hud text-xs font-bold tracking-[0.14em] uppercase text-[#060608] transition-colors hover:bg-[#E5A93C]"
                  >
                    <span>Launch Artist OS</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenModal({ path: 'saas', saasId: 'artist' })}
                    className="inline-flex cursor-pointer items-center gap-1.5 border border-white/20 px-5 py-3.5 font-mono-hud text-xs tracking-[0.14em] uppercase text-white transition-colors hover:border-[#E95004] hover:text-[#E95004]"
                  >
                    <span>Reserve Artist OS Setup</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
