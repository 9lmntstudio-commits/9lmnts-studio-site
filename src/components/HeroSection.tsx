import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Grid, Menu, Star, X } from 'lucide-react';
import { HERO_SERVICE_PILLS, LIVE_SAAS_PLATFORMS, STUDIO_CONTACT } from '../data/agencyData';

interface HeroSectionProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    focus?: string;
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const [activeSaasIdx, setActiveSaasIdx] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [ottawaTime, setOttawaTime] = useState(() => formatOttawaTime());

  useEffect(() => {
    const id = window.setInterval(() => {
      setOttawaTime(formatOttawaTime());
    }, 30000);
    return () => window.clearInterval(id);
  }, []);

  const currentPlatform = LIVE_SAAS_PLATFORMS[activeSaasIdx];

  return (
    <section
      id="top"
      className="hero-sunset-canvas relative min-h-[780px] w-full overflow-hidden text-white lg:min-h-[860px]"
    >
      {/* Subtle diagonal studio light beams matching the Behance inspiration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          background:
            'linear-gradient(125deg, rgba(255,180,90,0.38) 0%, rgba(233,80,4,0) 42%, rgba(120,25,0,0.32) 100%)',
        }}
      />

      {/* Desktop Focal Portrait Layer (Darnley Sanon wearing black 9LMNTS STUDIO Service Modules hoodie) */}
      <div
        aria-hidden="true"
        className="pointer-events-none hidden lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-0 lg:flex lg:items-end lg:justify-center lg:pt-8"
      >
        <img
          src="/assets/hero-darnley-orange.jpg"
          alt="Darnley Sanon, Founder and Creative Director of 9LMNTS Studio"
          className="h-[95%] w-auto max-w-none object-cover object-[50%_14%] select-none"
          style={{
            WebkitMaskImage:
              'radial-gradient(66% 86% at 50% 48%, #000 58%, rgba(0,0,0,0.75) 74%, transparent 98%)',
            maskImage:
              'radial-gradient(66% 86% at 50% 48%, #000 58%, rgba(0,0,0,0.75) 74%, transparent 98%)',
          }}
        />
      </div>

      {/* Main Content Grid Overlay */}
      <div className="relative z-20 mx-auto flex min-h-[780px] max-w-[1440px] flex-col justify-between px-5 pt-5 pb-7 sm:px-8 lg:min-h-[860px] lg:px-12 lg:pt-7 lg:pb-10">
        {/* Hero Header Bar — White 9LMNTS Wordmark */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-8 lg:gap-12">
            <a
              href="#top"
              aria-label="9LMNTS Home"
              className="inline-flex shrink-0 items-center py-1"
            >
              <img
                src="/assets/9lmnts-logo-white.png"
                alt="9LMNTS"
                className="h-6 w-auto sm:h-8"
              />
            </a>

            <nav
              aria-label="Hero Navigation"
              className="hidden items-center gap-7 text-xs font-semibold tracking-[0.08em] uppercase text-white/90 md:flex"
            >
              <a href="#culture" className="transition-colors hover:text-white">
                About Us +
              </a>
              <a href="#gateways" className="transition-colors hover:text-white">
                Services +
              </a>
              <button
                type="button"
                onClick={() => onOpenModal({ path: 'saas', saasId: 'soundclash' })}
                className="cursor-pointer uppercase tracking-[0.08em] transition-colors hover:text-white"
              >
                Platforms +
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden text-right text-[11px] leading-tight text-white/85 sm:block">
              <p className="font-medium text-white/75">Ottawa · Global</p>
              <p className="font-semibold tracking-wide text-white">{ottawaTime}</p>
            </div>

            <button
              type="button"
              onClick={() => onOpenModal({ path: 'agency', tier: 'flow' })}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold tracking-[0.06em] uppercase text-[#111827] shadow-lg transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <span aria-hidden="true">→</span>
              Contact Us
            </button>

            <button
              type="button"
              onClick={() => setDrawerOpen((prev) => !prev)}
              aria-label={drawerOpen ? 'Close quick menu' : 'Open quick menu'}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/25 bg-black/25 text-white backdrop-blur-md transition-colors hover:bg-black/40"
            >
              {drawerOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <>
                  <Grid className="hidden h-4 w-4 md:block" />
                  <Menu className="h-4 w-4 md:hidden" />
                </>
              )}
            </button>
          </div>
        </header>

        {/* Quick Dropdown Menu */}
        {drawerOpen && (
          <div className="mt-3 ml-auto w-full max-w-xs rounded-2xl border border-white/25 bg-[#111827]/90 p-5 text-sm text-white shadow-2xl backdrop-blur-xl">
            <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#FF781F]">
              Quick Gateway
            </p>
            <div className="mt-3 flex flex-col gap-2.5 font-semibold">
              <a
                href="#gateways"
                onClick={() => setDrawerOpen(false)}
                className="rounded-lg px-2 py-1.5 hover:bg-white/10"
              >
                2-Option Customer Gateway
              </a>
              <a
                href="#culture"
                onClick={() => setDrawerOpen(false)}
                className="rounded-lg px-2 py-1.5 hover:bg-white/10"
              >
                9 Elements + Practical AI
              </a>
              <a
                href="#studio"
                onClick={() => setDrawerOpen(false)}
                className="rounded-lg px-2 py-1.5 hover:bg-white/10"
              >
                Studio &amp; Founder Story
              </a>
              <a
                href="#pricing"
                onClick={() => setDrawerOpen(false)}
                className="rounded-lg px-2 py-1.5 hover:bg-white/10"
              >
                Agency Sprint Pricing
              </a>
              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenModal({ path: 'saas', saasId: 'soundclash' });
                }}
                className="cursor-pointer rounded-lg px-2 py-1.5 text-left text-[#FF781F] hover:bg-white/10"
              >
                Launch SoundClash OS / Artist OS ↗
              </button>
            </div>
          </div>
        )}

        {/* Middle Row: Left Bold Display + Right QR & Live SaaS Card */}
        <div className="my-auto grid grid-cols-1 items-center gap-8 py-6 lg:grid-cols-12 lg:py-4">
          {/* Left Hero Story & Headline */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-lg border border-white/55 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-[0.12em] uppercase text-white backdrop-blur-sm">
              9 Elements + AI
            </span>

            <h1 className="mt-4 font-hero-display text-[3.5rem] font-black uppercase tracking-[-0.02em] leading-[0.88] text-white sm:text-[4.8rem] xl:text-[5.8rem]">
              <span className="block text-white/75">Creative</span>
              <span className="block">Cultural</span>
              <span className="block">Agency</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-white/95 drop-shadow-[0_1px_12px_rgba(140,35,0,0.45)] sm:text-lg">
              From strategy to launch, we blend Hip-Hop&apos;s 9 elements with practical AI to design websites, brands &amp; platforms your customers love.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenModal({ path: 'agency', tier: 'flow' })}
                className="group inline-flex cursor-pointer items-center gap-3 rounded-xl bg-white py-2.5 pr-2.5 pl-5 text-xs font-extrabold tracking-[0.08em] uppercase text-[#111827] shadow-[0_16px_38px_-10px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111827] text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => onOpenModal({ path: 'saas', saasId: currentPlatform.id })}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/40 bg-black/15 px-4 py-3 text-xs font-bold tracking-[0.06em] uppercase text-white backdrop-blur-md transition-colors hover:bg-black/30"
              >
                Explore Live SaaS ↗
              </button>
            </div>
          </div>

          {/* Center Spacer (Desktop) & Clean Portrait Block (Mobile) */}
          <div className="lg:col-span-3">
            <div className="mx-auto flex h-[340px] w-full max-w-[420px] items-end justify-center overflow-hidden sm:h-[400px] lg:hidden">
              <img
                src="/assets/hero-darnley-orange.jpg"
                alt="Darnley Sanon, Founder and Creative Director of 9LMNTS Studio"
                className="h-full w-auto max-w-none object-cover object-[50%_14%] select-none"
                style={{
                  WebkitMaskImage:
                    'radial-gradient(66% 86% at 50% 48%, #000 58%, rgba(0,0,0,0.75) 74%, transparent 98%)',
                  maskImage:
                    'radial-gradient(66% 86% at 50% 48%, #000 58%, rgba(0,0,0,0.75) 74%, transparent 98%)',
                }}
              />
            </div>
          </div>

          {/* Right Column: Frosted JOIN US QR Card + Interactive Live SaaS 01/02 Card */}
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-end lg:col-span-4 lg:flex-row lg:items-center lg:justify-end">
            {/* JOIN US QR Card */}
            <button
              type="button"
              onClick={() => onOpenModal({ path: 'agency', tier: 'flow' })}
              className="group flex cursor-pointer flex-col items-center rounded-2xl border border-white/25 bg-white/15 p-3.5 text-center backdrop-blur-md transition-transform hover:-translate-y-1"
            >
              <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white">
                Join Us
              </span>
              <div className="mt-2 rounded-xl bg-white p-1.5 shadow-sm">
                <img
                  src="/assets/9lmntsstudio-qr.png"
                  alt="Scan QR to launch 9LMNTS project onboarding"
                  className="h-20 w-20 object-contain"
                />
              </div>
              <div className="mt-2.5 flex items-center gap-1 text-xs font-bold text-white">
                <span>5.0</span>
                <span className="flex text-[#FDE047]" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </span>
              </div>
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/85">
                Verified Studio
              </span>
            </button>

            {/* LIVE SAAS 01/02 Switcher Card */}
            <div className="w-full max-w-[250px] rounded-2xl border border-white/30 bg-black/25 p-4 text-white shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between text-[11px] font-bold tracking-[0.1em] uppercase text-white/85">
                <span>Live SaaS</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    aria-label="Previous Live SaaS Platform"
                    onClick={() =>
                      setActiveSaasIdx((prev) =>
                        prev === 0 ? LIVE_SAAS_PLATFORMS.length - 1 : prev - 1
                      )
                    }
                    className="cursor-pointer rounded-md p-0.5 hover:bg-white/15"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </button>
                  <span>
                    {currentPlatform.code} / 0{LIVE_SAAS_PLATFORMS.length}
                  </span>
                  <button
                    type="button"
                    aria-label="Next Live SaaS Platform"
                    onClick={() =>
                      setActiveSaasIdx((prev) => (prev + 1) % LIVE_SAAS_PLATFORMS.length)
                    }
                    className="cursor-pointer rounded-md p-0.5 hover:bg-white/15"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenModal({ path: 'saas', saasId: currentPlatform.id })}
                className="mt-3 block w-full cursor-pointer overflow-hidden rounded-xl border border-white/15 bg-black/40 text-left transition-transform hover:scale-[1.02]"
              >
                <img
                  src={currentPlatform.image}
                  alt={currentPlatform.name}
                  className="h-28 w-full object-cover object-top"
                />
              </button>

              <p className="mt-3 text-lg font-extrabold leading-tight">
                {currentPlatform.name}
              </p>
              <p className="mt-1 text-xs leading-snug text-white/85">
                2 Live SaaS · Published Platforms
              </p>
              <button
                type="button"
                onClick={() => onOpenModal({ path: 'saas', saasId: currentPlatform.id })}
                className="mt-2 inline-flex cursor-pointer items-center gap-1 text-xs font-bold text-[#FFE0C2] hover:text-white"
              >
                <span>Ready Today</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row: Social Strip Left + 8 Unique Service Pills Right */}
        <div className="flex flex-col items-start justify-between gap-5 pt-2 lg:flex-row lg:items-end">
          {/* Bottom-Left Social Widget */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/25 bg-black/15 p-2.5 backdrop-blur-md">
            <div className="flex h-10 w-16 items-center justify-center rounded-xl bg-white px-2 text-center text-[9px] font-extrabold leading-tight tracking-wider uppercase text-[#111827]">
              Direct
              <br />
              Connect
            </div>
            <a
              href="https://instagram.com/9lmntsstudio"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 items-center rounded-xl border border-white/20 bg-white/10 px-3 text-xs font-semibold text-white transition-colors hover:bg-white/20"
            >
              Instagram ↗
            </a>
            <a
              href={`mailto:${STUDIO_CONTACT.email}`}
              className="flex h-10 items-center rounded-xl border border-white/20 bg-white/10 px-3 text-xs font-semibold text-white transition-colors hover:bg-white/20"
            >
              Email
            </a>
            <a
              href={STUDIO_CONTACT.phoneHref}
              className="flex h-10 items-center rounded-xl border border-white/20 bg-white/10 px-3 text-xs font-semibold text-white transition-colors hover:bg-white/20"
            >
              Call Ottawa
            </a>
          </div>

          {/* Bottom-Right Unique 8 Service Pills */}
          <div className="flex max-w-xl flex-wrap gap-2 lg:justify-end">
            {HERO_SERVICE_PILLS.map((pill) => (
              <button
                key={pill.id}
                type="button"
                onClick={() =>
                  onOpenModal({ path: 'agency', tier: 'flow', focus: pill.focusArea })
                }
                className="cursor-pointer rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#111827]"
              >
                • {pill.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function formatOttawaTime(): string {
  try {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Toronto',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date()) + ' EST';
  } catch {
    return 'EST Live';
  }
}
