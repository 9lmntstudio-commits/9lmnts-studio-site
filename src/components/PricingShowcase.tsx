import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { PRICING_TIERS } from '../data/pillarsData';

interface PricingShowcaseProps {
  onOpenBook: (presetNiche?: string, presetTier?: 'spark' | 'flow' | 'beat' | 'cypher') => void;
}

export function PricingShowcase({ onOpenBook }: PricingShowcaseProps) {
  return (
    <section
      id="pricing"
      className="border-t border-white/10 bg-[#050505] px-4 py-20 text-white sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="font-telemetry text-xs font-semibold tracking-[0.16em] uppercase text-[#FF5500]">
              SIMPLIFIED BUSINESS-IN-A-BOX PRICING // ZERO HIDDEN BLOAT
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Fixed Scopes.{' '}
              <span className="font-script text-4xl font-normal text-[#FF5500] sm:text-6xl">
                Clear ROI.
              </span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Pick the sprint that matches where your business is today. Every build launches on 50% deposit with your own brand colours and 0% middleman commission on customer sales.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-telemetry text-[11px] uppercase tracking-wider text-zinc-300">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 px-3.5 py-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#00FF88]" />
              50% Deposit Starts Sprint
            </span>
            <span className="rounded-full border border-white/12 px-3.5 py-1.5">
              CAD Pricing
            </span>
          </div>
        </div>

        {/* Pure Typographic Hairline Columns — ZERO Bento Boxes */}
        <div className="grid grid-cols-1 divide-y divide-white/10 border-b border-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {PRICING_TIERS.map((tier, idx) => {
            const isPopular = Boolean(tier.badge);
            return (
              <div
                key={tier.id}
                className={`flex flex-col justify-between py-10 lg:px-8 ${
                  idx === 0 ? 'lg:pl-0' : idx === PRICING_TIERS.length - 1 ? 'lg:pr-0' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-telemetry text-[11px] font-semibold tracking-[0.14em] uppercase text-[#FF5500]">
                      {tier.code}
                    </span>
                    {isPopular && (
                      <span className="rounded-full bg-[#FF5500] px-2.5 py-0.5 font-telemetry text-[10px] font-bold uppercase text-white">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-3xl font-extrabold tracking-tight text-white">
                      {tier.name}
                    </h3>
                    <span className="font-telemetry text-xs text-zinc-400">
                      {tier.turnaround}
                    </span>
                  </div>

                  <p className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
                    {tier.price}
                  </p>
                  <p className="mt-1 font-telemetry text-xs text-[#FF5500]">
                    Kickoff: {tier.deposit}
                  </p>

                  <p className="mt-4 border-t border-white/10 pt-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Best for: {tier.idealClient}
                  </p>

                  <ul className="mt-4 space-y-3">
                    {tier.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5500]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => onOpenBook(undefined, tier.id)}
                    className={`inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all ${
                      isPopular
                        ? 'bg-[#FF5500] text-white shadow-[0_10px_28px_rgba(255,85,0,0.35)] hover:bg-[#FF6B1A]'
                        : 'border border-white/20 bg-transparent text-white hover:border-[#FF5500] hover:text-[#FF5500]'
                    }`}
                  >
                    {tier.ctaLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Hairline Retainer & Two-Layer Payment Clarity Strip */}
        <div className="mt-8 grid grid-cols-1 gap-6 text-xs text-zinc-400 md:grid-cols-2">
          <div>
            <p className="font-telemetry text-[11px] font-semibold uppercase tracking-wider text-zinc-200">
              OPTIONAL CREATIVE PARTNER RETAINER
            </p>
            <p className="mt-1.5 leading-relaxed">
              Keep your menus, seasonal drops, SEO &amp; AI automations updated monthly:{' '}
              <strong className="text-white">$297/mo Growth Care</strong> or{' '}
              <strong className="text-white">$950/mo Full AI Ops &amp; Video Reels</strong>.
            </p>
          </div>
          <div className="md:text-right">
            <p className="font-telemetry text-[11px] font-semibold uppercase tracking-wider text-zinc-200">
              TWO-LAYER PAYMENT CLARITY
            </p>
            <p className="mt-1.5 leading-relaxed">
              Agency sprints open via <strong className="text-white">Interac e-Transfer (9lmntstudio@gmail.com)</strong> or{' '}
              <strong className="text-white">PayPal Invoice</strong>. Your customer checkout runs direct on{' '}
              <strong className="text-[#FF5500]">PayPal Complete Payments &amp; Pay Later 4x</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
