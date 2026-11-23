import React, { useState } from 'react';

interface HeroSectionProps {
  onOpenBooking?: (presetTier?: 'spark' | 'flow' | 'beat' | 'cypher') => void;
}

const LIVE_DEMOS = [
  {
    id: 'coffee',
    tag: 'HOSPITALITY & CAFÉ',
    name: 'Kremas Coffee Co.',
    metric: '0% Delivery App Fees · Direct Apple Pay',
    url: '/demo/coffee/',
    accent: '#C69C6D',
  },
  {
    id: 'belfanm',
    tag: 'E-COMMERCE & BEAUTY',
    name: 'BelFanm Botanicals',
    metric: 'Interactive Product Stage · Pay-in-4 Ready',
    url: '/demo/belfanm/',
    accent: '#FF5500',
  },
  {
    id: 'preworkout',
    tag: 'CONSUMER BRAND',
    name: 'VÒLT Hybrid Energy',
    metric: '60fps Scroll Storytelling · Instant Checkout',
    url: '/demo/preworkout/',
    accent: '#121212',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const [activeDemo, setActiveDemo] = useState(LIVE_DEMOS[0]);

  return (
    <section className="relative min-h-[92vh] w-full bg-[#F7F5F0] text-[#121212] selection:bg-[#FF5500] selection:text-white">
      <header className="mx-auto flex max-w-[1380px] items-center justify-between px-6 py-7 sm:px-12">
        <a href="/" className="flex items-baseline gap-0.5 tracking-tight">
          <span className="font-['Syne',sans-serif] text-2xl font-extrabold text-[#FF5500]">
            9L
          </span>
          <span className="font-['Syne',sans-serif] text-2xl font-extrabold text-[#121212]">
            MNTS
          </span>
          <span className="ml-1.5 font-['Instrument_Serif',Georgia,serif] text-2xl italic text-[#FF5500]">
            Studio
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-[#EAE6DF]/80 p-1.5 backdrop-blur-md md:flex">
          <a
            href="#demos"
            className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#121212] transition hover:bg-white"
          >
            Live Demos
          </a>
          <a
            href="#pricing"
            className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#121212] transition hover:bg-white"
          >
            Packages &amp; Pricing
          </a>
          <a
            href="https://clash.9lmntsstudio.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#474747] transition hover:bg-white hover:text-[#121212]"
          >
            SoundClash OS ↗
          </a>
          <a
            href="https://artist.9lmntsstudio.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#474747] transition hover:bg-white hover:text-[#121212]"
          >
            Artist OS ↗
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+16134009691"
            className="hidden text-xs font-semibold tracking-wide text-[#474747] hover:text-[#121212] sm:inline-block"
          >
            (613) 400-9691
          </a>
          <button
            onClick={() => onOpenBooking?.('spark')}
            className="cursor-pointer rounded-full bg-[#FF5500] px-5 py-2.5 text-xs font-bold tracking-wide text-white shadow-[0_10px_25px_-6px_rgba(255,85,0,0.45)] transition hover:bg-[#E04B00]"
          >
            Start 48-Hr Upgrade →
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1380px] grid-cols-1 items-center gap-12 px-6 pt-8 pb-20 sm:px-12 lg:grid-cols-12 lg:pt-14">
        <div className="lg:col-span-7 space-y-7">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-[#EAE6DF] px-4 py-1.5 text-xs font-semibold text-[#121212]">
            <span className="h-2 w-2 rounded-full bg-[#FF5500]" />
            <span>Ottawa Creative Tech &amp; Booking Systems</span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] text-[#121212] sm:text-6xl xl:text-[72px]">
            Websites &amp; Booking Systems That{' '}
            <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic text-[#FF5500]">
              Pay for Themselves
            </span>{' '}
            in 14 Days.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-[#474747] sm:text-lg">
            We replace slow websites, static PDF menus, and missed phone calls with{' '}
            <strong className="font-semibold text-[#121212]">
              0%-commission online ordering
            </strong>
            ,{' '}
            <strong className="font-semibold text-[#121212]">
              instant 50% deposit calculators
            </strong>
            , and{' '}
            <strong className="font-semibold text-[#121212]">
              24/7 AI receptionists
            </strong>{' '}
            — delivered in 48 hours to 7 days with zero monthly agency retainers.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking?.('spark')}
              className="cursor-pointer rounded-full bg-[#FF5500] px-8 py-4 text-sm font-bold text-white shadow-[0_16px_32px_-8px_rgba(255,85,0,0.45)] transition hover:-translate-y-0.5 hover:bg-[#E04B00]"
            >
              Lock 48-Hr Upgrade ($500 One-Time) →
            </button>
            <a
              href="#pricing"
              className="rounded-full bg-white px-7 py-4 text-sm font-bold text-[#121212] shadow-sm transition hover:bg-[#EAE6DF]"
            >
              Compare Packages ↓
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-[#121212]/10 pt-7 sm:max-w-xl">
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-[#121212] sm:text-3xl">
                0%
              </p>
              <p className="mt-1 text-xs font-medium text-[#474747]">
                Commission on direct orders &amp; deposits
              </p>
            </div>
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-[#121212] sm:text-3xl">
                48 Hrs
              </p>
              <p className="mt-1 text-xs font-medium text-[#474747]">
                Fastest turnaround on menu &amp; quote widgets
              </p>
            </div>
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-[#121212] sm:text-3xl">
                $0/mo
              </p>
              <p className="mt-1 text-xs font-medium text-[#474747]">
                Mandatory agency subscription fees
              </p>
            </div>
          </div>
        </div>

        <div id="demos" className="lg:col-span-5">
          <div className="rounded-[28px] bg-white p-7 shadow-[0_24px_60px_-15px_rgba(18,18,18,0.08)] sm:p-8">
            <div className="flex items-center justify-between border-b border-[#121212]/8 pb-4">
              <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF5500]">
                Interactive Client Blueprints
              </span>
              <span className="rounded-full bg-[#F7F5F0] px-3 py-1 text-[11px] font-semibold text-[#474747]">
                Click to Preview Live
              </span>
            </div>

            <div className="mt-6 rounded-2xl bg-[#F7F5F0] p-6 transition-all">
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#474747]">
                {activeDemo.tag}
              </span>
              <h2 className="mt-1.5 font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-extrabold text-[#121212]">
                {activeDemo.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-[#474747]">
                {activeDemo.metric}
              </p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <a
                  href={activeDemo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#121212] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#FF5500]"
                >
                  Open Live Demo ↗
                </a>
                <button
                  onClick={() => onOpenBooking?.('flow')}
                  className="cursor-pointer text-xs font-bold text-[#FF5500] underline-offset-4 hover:underline"
                >
                  Build Similar for My Business
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <p className="text-[11px] font-semibold text-[#474747]">
                Switch White-Label Demo:
              </p>
              <div className="grid grid-cols-3 gap-2">
                {LIVE_DEMOS.map((demo) => {
                  const isActive = demo.id === activeDemo.id;
                  return (
                    <button
                      key={demo.id}
                      onClick={() => setActiveDemo(demo)}
                      className={`cursor-pointer rounded-xl px-3 py-2.5 text-left text-xs font-bold transition ${
                        isActive
                          ? 'bg-[#121212] text-white shadow-sm'
                          : 'bg-[#F7F5F0] text-[#474747] hover:bg-[#EAE6DF] hover:text-[#121212]'
                      }`}
                    >
                      <span className="block truncate">{demo.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[#121212]/8 pt-4 text-xs">
              <span className="font-medium text-[#474747]">Live Platforms:</span>
              <div className="flex items-center gap-3 font-bold text-[#121212]">
                <a
                  href="https://clash.9lmntsstudio.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF5500]"
                >
                  SoundClash OS ↗
                </a>
                <span className="text-[#121212]/20">•</span>
                <a
                  href="https://artist.9lmntsstudio.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF5500]"
                >
                  Artist OS ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


