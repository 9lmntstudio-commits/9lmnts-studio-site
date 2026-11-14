import { ArrowUpRight, CheckCircle2, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { LIVE_SAAS_PLATFORMS } from '../data/agencyData';

interface TwoPathGatewaySectionProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

export function TwoPathGatewaySection({ onOpenModal }: TwoPathGatewaySectionProps) {
  return (
    <section id="gateways" className="bg-[#F5F6F8] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold tracking-[0.16em] uppercase text-[#E95004]">
              2-Option Customer Gateway
            </p>
            <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
              Crafted For Scale &amp; Independence
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Choose what you need right now: a custom website and brand crafted for your business, or direct access to our already-published SaaS platforms.
          </p>
        </div>

        {/* Two Elevated Pearl Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Option 1: Agency Services */}
          <div className="pearl-card flex flex-col justify-between rounded-[28px] p-7 transition-shadow hover:shadow-[0_24px_60px_-18px_rgba(17,24,39,0.12)] sm:p-9">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF2EB] px-3.5 py-1 text-xs font-bold text-[#E95004]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Option 01 · Agency Services
                </span>
                <span className="text-xs font-semibold text-[#6B7280]">5–14 Day Sprints</span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">
                Custom Digital Architecture &amp; Brand Systems
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5563] sm:text-base">
                Need a high-converting website, hospitality menu &amp; ordering hub, or cohesive brand identity designed without agency bloat? We build digital homes rooted in culture and built to book real customers.
              </p>

              <ul className="mt-6 space-y-3 border-t border-black/[0.06] pt-6 text-sm text-[#374151]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E95004]" />
                  <span>Tailored design &amp; story — zero generic templates or developer jargon</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E95004]" />
                  <span>Interactive booking, 50% catering deposits &amp; PayPal direct checkout</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E95004]" />
                  <span>Behind-the-scenes AI lead workflows wired straight to your inbox &amp; SMS</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenModal({ path: 'agency', tier: 'flow' })}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#E95004] px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#FF5500]"
              >
                <span>Book Agency Sprint</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <a
                href="#pricing"
                className="text-sm font-bold text-[#111827] underline-offset-4 hover:text-[#E95004] hover:underline"
              >
                Compare packages
              </a>
            </div>
          </div>

          {/* Option 2: Live Published SaaS Platforms */}
          <div className="pearl-card flex flex-col justify-between rounded-[28px] p-7 transition-shadow hover:shadow-[0_24px_60px_-18px_rgba(17,24,39,0.12)] sm:p-9">
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Option 02 · Live SaaS Systems
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#6B7280]">
                  <Layers className="h-3.5 w-3.5 text-[#E95004]" />
                  Ready Today
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">
                Already-Published Platforms You Can Use Now
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5563] sm:text-base">
                Both of our flagship interactive software platforms are complete and live today — inspect details right here or open either app directly.
              </p>

              <div className="mt-6 space-y-3">
                {LIVE_SAAS_PLATFORMS.map((platform) => (
                  <div
                    key={platform.id}
                    className="flex flex-col justify-between gap-3 rounded-2xl border border-black/[0.07] bg-[#F9FAFB] p-4 transition-colors hover:border-[#E95004]/40 sm:flex-row sm:items-center"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-extrabold text-[#111827]">
                          {platform.name}
                        </span>
                        <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#6B7280] shadow-xs">
                          Live
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-[#4B5563]">{platform.tagline}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenModal({ path: 'saas', saasId: platform.id })}
                        className="cursor-pointer rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-bold text-[#111827] transition-colors hover:border-[#E95004] hover:text-[#E95004]"
                      >
                        Details
                      </button>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-[#111827] px-3.5 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#E95004]"
                      >
                        <span>Open App</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-5">
              <span className="text-xs font-medium text-[#6B7280]">
                Hosted independently at clash.9lmntsstudio.com &amp; artist.9lmntsstudio.com
              </span>
              <button
                type="button"
                onClick={() => onOpenModal({ path: 'saas', saasId: 'soundclash' })}
                className="inline-flex cursor-pointer items-center gap-1 text-sm font-bold text-[#E95004] hover:underline"
              >
                <span>Open SaaS Gateway</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
