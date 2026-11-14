import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Mail, Phone } from 'lucide-react';
import { LIVE_SAAS_PLATFORMS, PORTFOLIO_CASES, STUDIO_CONTACT } from '../data/agencyData';

interface StudioConsoleSectionProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

type StudioTab = 'story' | 'portfolio' | 'saas' | 'book';

export function StudioConsoleSection({ onOpenModal }: StudioConsoleSectionProps) {
  const [activeTab, setActiveTab] = useState<StudioTab>('story');

  return (
    <section id="studio" className="bg-[#F5F6F8] px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        {/* Clean Editorial Header Above the Studio Console Feature */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-extrabold tracking-[0.16em] uppercase text-[#E95004]">
              Founder &amp; Living Studio
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              Direct Creative Direction — Inside The Studio
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4B5563]">
            You work directly with founder {STUDIO_CONTACT.founder} from discovery to launch day.
          </p>
        </div>

        {/* Studio Console Backdrop Photo + Real Interactive 4-Tab Window */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#141519] shadow-[0_28px_70px_-22px_rgba(17,24,39,0.28)]">
          {/* Upper Studio Scene */}
          <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[460px]">
            <img
              src="/assets/studio-console-darnley.jpg"
              alt="Darnley Sanon working at the 9LMNTS Studio audio console in black 9LMNTS hoodie with sleeve QR patch"
              className="h-full w-full object-cover object-[center_22%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#141519] via-[#141519]/35 to-transparent"
            />
          </div>

          {/* Crisp Interactive Glass Studio Window Positioned Cleanly Over Lower Frame */}
          <div className="relative z-10 -mt-20 px-4 pb-6 sm:-mt-28 sm:px-8 sm:pb-8 lg:px-10">
            <div className="rounded-3xl border border-white/15 bg-[#16181F]/90 text-white shadow-2xl backdrop-blur-xl">
              {/* Window Top Bar */}
              <div className="flex flex-col justify-between gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E95004] text-xs font-black text-white">
                    DS
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.12em] uppercase text-white/95">
                      The Studio // {STUDIO_CONTACT.founder}
                    </p>
                    <p className="text-[11px] text-white/60">{STUDIO_CONTACT.role}</p>
                  </div>
                </div>

                {/* 4 Studio Tabs */}
                <div className="flex flex-wrap gap-1.5">
                  {(
                    [
                      ['story', '01. Story & Ethos'],
                      ['portfolio', '02. Selected Work'],
                      ['saas', '03. Live SaaS'],
                      ['book', '04. Work With Darnley'],
                    ] as const
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActiveTab(id)}
                      className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors ${
                        activeTab === id
                          ? 'bg-[#E95004] text-white'
                          : 'bg-white/[0.06] text-white/75 hover:bg-white/12 hover:text-white'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content Area */}
              <div className="p-5 sm:p-7">
                {activeTab === 'story' && (
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7">
                      <span className="text-3xl leading-none font-black text-[#FF781F]">“</span>
                      <blockquote className="mt-1 text-lg font-bold leading-snug text-white sm:text-2xl">
                        Every project is an opportunity to tell a story, to create something that resonates beyond the screen. That&apos;s the power of combining art, culture, and technology.
                      </blockquote>
                      <p className="mt-4 text-sm leading-relaxed text-white/75">
                        With over a decade in graphic design and UI/UX across Ottawa and Southeast Asia, Darnley founded 9LMNTS Studio so everyday business owners, restaurants, and creators can launch digital experiences with cultural soul and zero technical frustration.
                      </p>
                    </div>

                    <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 lg:col-span-5">
                      <div>
                        <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#FF781F]">
                          Direct Studio Line
                        </p>
                        <div className="mt-3 space-y-2 text-sm text-white/90">
                          <a
                            href={`mailto:${STUDIO_CONTACT.email}`}
                            className="flex items-center gap-2 hover:text-[#FF781F]"
                          >
                            <Mail className="h-4 w-4 text-[#FF781F]" />
                            {STUDIO_CONTACT.email}
                          </a>
                          <a
                            href={STUDIO_CONTACT.phoneHref}
                            className="flex items-center gap-2 hover:text-[#FF781F]"
                          >
                            <Phone className="h-4 w-4 text-[#FF781F]" />
                            {STUDIO_CONTACT.phoneDisplay}
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenModal({ path: 'agency', tier: 'beat' })}
                        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#E95004] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#FF5500]"
                      >
                        <span>Book a Studio Sprint</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'portfolio' && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {PORTFOLIO_CASES.map((item) => (
                      <a
                        key={item.id}
                        href="#work"
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors hover:border-[#FF781F]/60"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-3.5">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF781F]">
                            {item.category}
                          </p>
                          <p className="mt-1 text-sm font-bold text-white">{item.title}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {activeTab === 'saas' && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {LIVE_SAAS_PLATFORMS.map((platform) => (
                      <div
                        key={platform.id}
                        className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-lg font-extrabold text-white">
                              {platform.name}
                            </h3>
                            <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
                              Published &amp; Live
                            </span>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-white/75">
                            {platform.summary}
                          </p>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <a
                            href={platform.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#E95004] px-4 py-2 text-xs font-bold text-white hover:bg-[#FF5500]"
                          >
                            <span>Launch {platform.name}</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                          <button
                            type="button"
                            onClick={() => onOpenModal({ path: 'saas', saasId: platform.id })}
                            className="cursor-pointer rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
                          >
                            Preview Modal
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'book' && (
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div className="max-w-xl">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF781F]">
                        Zero Surprises · 1-Page Agreement + 50% Deposit Kickoff
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold text-white">
                        Ready to lock your build week?
                      </h3>
                      <p className="mt-2 text-sm text-white/75">
                        Pick Flow ($1,500 CAD), Beat ($3,000 CAD), or Cypher ($5,000 CAD). Scope locks immediately with a 1-page agreement and 50% deposit via Interac e-Transfer ({STUDIO_CONTACT.email}) or PayPal Invoice.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenModal({ path: 'agency', tier: 'beat' })}
                      className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-[#E95004] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#FF5500]"
                    >
                      <span>Open Onboarding &amp; Booking</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
