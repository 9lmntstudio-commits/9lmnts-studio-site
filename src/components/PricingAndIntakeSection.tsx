import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { AGENCY_PACKAGES, STUDIO_CONTACT } from '../data/agencyData';

interface PricingAndIntakeSectionProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

export function PricingAndIntakeSection({ onOpenModal }: PricingAndIntakeSectionProps) {
  return (
    <section id="pricing" className="bg-[#F5F6F8] px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-7xl">
        {/* Pricing Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold tracking-[0.16em] uppercase text-[#E95004]">
              Transparent CAD Investment
            </p>
            <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
              Sprint Packages With Zero Surprises
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-black/[0.07] bg-white px-4 py-2 text-xs font-semibold text-[#374151] shadow-xs lg:self-auto">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>1-Page Agreement + 50% Deposit Starts Sprint</span>
          </div>
        </div>

        {/* 3 Clear Agency Tiers */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
          {AGENCY_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col justify-between rounded-[28px] p-7 transition-shadow sm:p-8 ${
                pkg.featured
                  ? 'border-2 border-[#E95004] bg-white shadow-[0_24px_60px_-20px_rgba(233,80,4,0.22)]'
                  : 'pearl-card'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-extrabold tracking-wider uppercase text-[#E95004]">
                    {pkg.timeline}
                  </span>
                  {pkg.featured && (
                    <span className="rounded-full bg-[#E95004] px-3 py-1 text-[11px] font-bold text-white">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-2xl font-extrabold text-[#111827]">{pkg.name}</h3>
                <p className="mt-1 text-sm text-[#4B5563]">{pkg.tagline}</p>

                <div className="mt-6 border-b border-black/[0.06] pb-6">
                  <p className="text-4xl font-black tracking-tight text-[#111827]">
                    {pkg.price}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold text-[#6B7280]">
                    Kickoff: {pkg.deposit}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-[#374151]">
                  {pkg.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#E95004]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onOpenModal({ path: 'agency', tier: pkg.id })}
                className={`mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-colors ${
                  pkg.featured
                    ? 'bg-[#E95004] text-white hover:bg-[#FF5500]'
                    : 'bg-[#111827] text-white hover:bg-[#E95004]'
                }`}
              >
                <span>Choose {pkg.name}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Clean Express Note + Two-Path Conversion Callout */}
        <div className="pearl-card mt-8 flex flex-col justify-between gap-6 rounded-[28px] p-7 sm:p-9 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold tracking-[0.14em] uppercase text-[#E95004]">
              Ready To Start Or Prefer Live SaaS?
            </p>
            <h3 className="mt-2 text-2xl font-extrabold text-[#111827] sm:text-3xl">
              Initiate Your Project In 60 Seconds
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
              Need an express <strong className="text-[#111827]">Spark Drop-In ($500 CAD)</strong> for an existing site, custom scale pricing, or instant onboarding to <strong className="text-[#111827]">SoundClash OS / Artist OS</strong>? Choose your path inside the interactive gateway modal. Official settlement: <span className="font-semibold text-[#111827]">{STUDIO_CONTACT.email}</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onOpenModal({ path: 'agency', tier: 'beat' })}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#E95004] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#FF5500]"
            >
              <span>Book Agency Sprint</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onOpenModal({ path: 'saas', saasId: 'soundclash' })}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-black/12 bg-[#F9FAFB] px-6 py-3.5 text-sm font-bold text-[#111827] transition-colors hover:border-[#E95004] hover:text-[#E95004]"
            >
              <span>Launch Live SaaS ↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
