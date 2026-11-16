import { useState, type MouseEvent } from 'react';
import { ArrowRight, CalendarCheck2, Camera, CreditCard, MessageSquareCode, Users } from 'lucide-react';

interface StudioConsoleSectionProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    focus?: string;
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

const CAMERA_WAYPOINTS = [
  {
    id: 'wide',
    label: '01 // WIDE_ATELIER_RIG',
    transform: 'scale(1.02) translate(0%, 0%)',
    caption: 'Ottawa Command Desk · Analog SSL Mastering + Dual Display Pipeline',
  },
  {
    id: 'hoodie',
    label: '02 // PHYGITAL_QR_WEAVE',
    transform: 'scale(1.24) translate(-6%, 5%)',
    caption: 'Direct NFC / QR Apparel Scan Into Live Digital Merch Vaults',
  },
  {
    id: 'console',
    label: '03 // SSL_CONSOLE_MACRO',
    transform: 'scale(1.32) translate(7%, -7%)',
    caption: 'Real-Time AI Audio/Lead Routing & 0%-Fee Checkout Controls',
  },
];

const CONSOLE_MODULES = [
  {
    id: 'booking',
    code: '01_BOOKING_CALENDAR',
    label: 'Booking Calendar',
    icon: CalendarCheck2,
    headline: 'Instant 50% Deposit Scheduling Without Back-and-Forth DM Lag',
    detail:
      'Prospects select a table, consultation, or sprint date, lock it against your real calendar, and receive automatic SMS reminders.',
    metrics: ['48-Hr Install Available', 'Zero Double-Bookings', 'SMS + Email Reminders'],
  },
  {
    id: 'paypal',
    code: '02_PAYPAL_DIRECT_CHECKOUT',
    label: 'PayPal Complete Checkout',
    icon: CreditCard,
    headline: '0% Studio Commission Ordering, Apple Pay & Pay Later 4× Split',
    detail:
      'Stop handing 28% of restaurant and e-commerce margin to aggregators. Direct Apple Pay, Google Pay, Cards, and 50% catering deposits.',
    metrics: ['0% 9LMNTS Cut', '50% Catering Deposits', 'Pay Later 4× Enabled'],
  },
  {
    id: 'ai',
    code: '03_VOICE_CHAT_RECEPTION',
    label: 'AI Voice & Chat',
    icon: MessageSquareCode,
    headline: 'EN / FR / Kreyòl Reception Answering Every Missed Call in 3 Seconds',
    detail:
      'Captures late-night catering requests, tables, and service quotes automatically while routing hot prospects straight to your phone.',
    metrics: ['Trilingual Ready', 'Instant Quote Capture', 'WhatsApp & SMS Sync'],
  },
  {
    id: 'crm',
    code: '04_OWNER_CRM_LEDGER',
    label: 'Owner CRM Ledger',
    icon: Users,
    headline: 'Every Lead, Deposit, Invoice & Repeat Customer in One Obsidian Ledger',
    detail:
      'Connected directly to Supabase & webhook triggers so every inquiry turns into a tagged client record with lifetime spend tracking.',
    metrics: ['Real-Time Webhook Sync', 'Zero Spreadsheet Mess', 'One-Tap Reactivation'],
  },
];

export function StudioConsoleSection({ onOpenModal }: StudioConsoleSectionProps) {
  const [waypointIdx, setWaypointIdx] = useState(0);
  const [moduleIdx, setModuleIdx] = useState(0);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const activeWaypoint = CAMERA_WAYPOINTS[waypointIdx] ?? CAMERA_WAYPOINTS[0];
  const activeModule = CONSOLE_MODULES[moduleIdx] ?? CONSOLE_MODULES[0];
  const ActiveIcon = activeModule.icon;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: ny * -4, ry: nx * 5 });
  };

  return (
    <section
      id="studio"
      className="relative border-t border-white/[0.08] bg-[#060608] text-[#F3F4F6]"
    >
      {/* Chapter Telemetry Header */}
      <div className="border-b border-white/[0.08] bg-[#09090C]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <div className="flex items-center gap-3 font-mono-hud text-[11px] tracking-[0.18em] uppercase">
            <span className="text-[#E95004]">CHAPTER 03 //</span>
            <span className="text-white">THE STUDIO HELM — PRODUCTION COMMAND</span>
          </div>
          <div className="flex items-center gap-2 font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#9CA3AF]">
            <Camera className="h-3.5 w-3.5 text-[#E5A93C]" />
            <span>3-WAYPOINT 2.5D CAMERA RIG</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8">
        {/* Pull Quote Row */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <p className="font-mono-hud text-[11px] tracking-[0.18em] uppercase text-[#E95004]">
              LIVE WORKBENCH HARDWARE &amp; OPS
            </p>
            <h2 className="mt-2 font-syne text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Your site as a command desk.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <blockquote className="border-l-2 border-[#E95004] pl-5 font-editorial-serif text-xl italic leading-relaxed text-[#D1D5DB] sm:text-2xl">
              &ldquo;We don&apos;t hand you a pretty mockup and wish you luck. Every system ships wired to your real calendar, customer payments, and follow-up messages.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Full-Bleed 2.5D Camera Rig Stage */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
          className="relative border border-white/[0.12] bg-[#050507]"
          style={{ perspective: '1200px' }}
        >
          <div className="relative aspect-[16/9] max-h-[620px] w-full overflow-hidden">
            <img
              src="/assets/studio-console-darnley.jpg"
              alt="Darnley Sanon 9LMNTS Studio Console Helm"
              style={{
                transform: `${activeWaypoint.transform} rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              }}
              className="h-full w-full object-cover object-center transition-transform duration-500 ease-out will-change-transform"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-[#060608]/45" />

            {/* Architectural Corner Registration Marks */}
            <span className="pointer-events-none absolute top-4 left-4 font-mono-hud text-xs text-white/60">
              [+]
            </span>
            <span className="pointer-events-none absolute top-4 right-4 font-mono-hud text-xs text-white/60">
              [+]
            </span>

            {/* Waypoint Switcher Bar */}
            <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-[#060608]/88 px-4 py-3.5 backdrop-blur-md sm:px-6">
              <div>
                <p className="font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#E5A93C]">
                  ACTIVE CAMERA WAYPOINT
                </p>
                <p className="mt-0.5 text-xs text-[#E5E7EB] sm:text-sm">
                  {activeWaypoint.caption}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {CAMERA_WAYPOINTS.map((wp, idx) => (
                  <button
                    key={wp.id}
                    type="button"
                    onClick={() => setWaypointIdx(idx)}
                    className={`cursor-pointer border px-3 py-1.5 font-mono-hud text-[10px] tracking-[0.14em] uppercase transition-colors ${
                      waypointIdx === idx
                        ? 'border-[#E95004] bg-[#E95004] text-white'
                        : 'border-white/15 bg-[#0B0B0F] text-[#9CA3AF] hover:border-white/40 hover:text-white'
                    }`}
                  >
                    {wp.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Docked 4-Tab Operational Module Ledger */}
          <div className="grid grid-cols-2 border-t border-white/[0.1] bg-[#0A0A0E] sm:grid-cols-4">
            {CONSOLE_MODULES.map((mod, idx) => {
              const Icon = mod.icon;
              const active = idx === moduleIdx;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setModuleIdx(idx)}
                  className={`flex cursor-pointer items-center gap-2.5 border-b border-r border-white/[0.08] px-4 py-4 text-left transition-colors sm:border-b-0 last:border-r-0 ${
                    active
                      ? 'bg-[#14141A] text-white border-t-2 border-t-[#E95004]'
                      : 'text-[#9CA3AF] hover:bg-white/[0.02] hover:text-white'
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${active ? 'text-[#FF5500]' : 'text-[#6B7280]'}`} />
                  <div>
                    <p className="font-mono-hud text-[9px] tracking-[0.14em] uppercase text-[#E5A93C]">
                      {mod.code}
                    </p>
                    <p className="mt-0.5 text-xs font-bold">{mod.label}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Module Detail Panel */}
          <div className="grid grid-cols-1 gap-6 border-t border-white/[0.08] bg-[#0D0D12] p-6 lg:grid-cols-12 lg:items-center lg:p-8">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#E95004]">
                <ActiveIcon className="h-4 w-4" />
                <span>{activeModule.code}</span>
              </div>
              <h3 className="mt-2 font-syne text-2xl font-bold text-white sm:text-3xl">
                {activeModule.headline}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#9CA3AF]">
                {activeModule.detail}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-4 lg:col-span-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <div className="space-y-1.5 font-mono-hud text-xs">
                {activeModule.metrics.map((metric) => (
                  <p key={metric} className="text-[#E5E7EB]">
                    <span className="mr-2 text-[#E5A93C]">[+]</span>
                    {metric}
                  </p>
                ))}
              </div>
              <button
                type="button"
                onClick={() =>
                  onOpenModal({
                    path: 'agency',
                    tier: 'beat',
                    focus: 'Full Studio Console & Owner CRM',
                  })
                }
                className="inline-flex cursor-pointer items-center justify-center gap-2 bg-[#E95004] px-5 py-3 font-mono-hud text-xs font-bold tracking-[0.16em] uppercase text-white transition-colors hover:bg-[#FF5500]"
              >
                <span>Deploy Console Stack</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
