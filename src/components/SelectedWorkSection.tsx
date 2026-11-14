import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_CASES } from '../data/agencyData';

interface SelectedWorkSectionProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    focus?: string;
  }) => void;
}

export function SelectedWorkSection({ onOpenModal }: SelectedWorkSectionProps) {
  const [activeId, setActiveId] = useState(PORTFOLIO_CASES[0].id);
  const current =
    PORTFOLIO_CASES.find((item) => item.id === activeId) ?? PORTFOLIO_CASES[0];

  return (
    <section id="work" className="bg-[#F5F6F8] px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-extrabold tracking-[0.16em] uppercase text-[#E95004]">
              Selected Craft &amp; Systems
            </p>
            <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">
              Built For Real-World Revenue
            </h2>
          </div>

          {/* Clean Category Pills */}
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_CASES.map((item) => {
              const active = item.id === current.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition-colors ${
                    active
                      ? 'bg-[#111827] text-white'
                      : 'border border-black/[0.08] bg-white text-[#4B5563] hover:border-[#E95004] hover:text-[#111827]'
                  }`}
                >
                  {item.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Editorial Showcase Card */}
        <div className="pearl-card mt-8 overflow-hidden rounded-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Showcase Image */}
            <div className="relative bg-[#111827]/5 lg:col-span-7">
              <img
                src={current.image}
                alt={current.title}
                className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[440px]"
              />
            </div>

            {/* Showcase Narrative & Action */}
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-5">
              <div>
                <span className="inline-block rounded-full bg-[#FFF2EB] px-3 py-1 text-xs font-bold text-[#E95004]">
                  {current.category}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-1.5 text-xs font-semibold tracking-wide uppercase text-[#6B7280]">
                  {current.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#4B5563] sm:text-base">
                  {current.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-black/[0.06] pt-5 text-sm text-[#374151]">
                  {current.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#E95004]" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onOpenModal({
                      path: 'agency',
                      tier: current.recommendedTier,
                      focus: current.nichePreset,
                    })
                  }
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#E95004] px-6 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#FF5500]"
                >
                  <span>Build Similar System</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
