import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { CORE_PILLARS, CULTURAL_ELEMENTS } from '../data/agencyData';

export function CultureAndMissionSection() {
  const [selectedIdx, setSelectedIdx] = useState(9); // Default highlight on 10th Element: Practical AI
  const activeElement = CULTURAL_ELEMENTS[selectedIdx];

  return (
    <section id="culture" className="bg-[#F5F6F8] px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: 9 Elements of Hip-Hop + 10th AI Multiplier Grid */}
          <div className="lg:col-span-6">
            <p className="text-xs font-extrabold tracking-[0.16em] uppercase text-[#E95004]">
              Hip-Hop&apos;s 9 Elements + AI
            </p>
            <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              Nine Foundational Disciplines. One Modern Advantage.
            </h2>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {CULTURAL_ELEMENTS.map((item, idx) => {
                const isAi = Boolean(item.isAiMultiplier);
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    className={`cursor-pointer rounded-2xl p-4 text-left transition-all ${
                      isAi
                        ? 'col-span-2 bg-[#E95004] text-white shadow-[0_14px_34px_-12px_rgba(233,80,4,0.6)] sm:col-span-3'
                        : isSelected
                          ? 'border border-[#E95004] bg-white shadow-md'
                          : 'border border-black/[0.06] bg-white hover:border-[#E95004]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-xs font-extrabold ${
                          isAi ? 'text-white/80' : 'text-[#E95004]'
                        }`}
                      >
                        {item.number}
                      </span>
                      {isAi && <Sparkles className="h-4 w-4 text-white" />}
                    </div>
                    <p
                      className={`mt-1.5 text-base font-extrabold ${
                        isAi ? 'text-white' : 'text-[#111827]'
                      }`}
                    >
                      {item.name}
                    </p>
                    <p
                      className={`mt-0.5 text-xs ${
                        isAi ? 'text-white/90' : 'text-[#6B7280]'
                      }`}
                    >
                      {item.craft}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Element Explanation Pill */}
            <div className="mt-4 rounded-2xl border border-black/[0.07] bg-white p-4 text-sm text-[#374151]">
              <span className="font-bold text-[#111827]">{activeElement.name}:</span>{' '}
              {activeElement.agencyOutcome}
            </div>
          </div>

          {/* Right: Story, Mission Statement & Three Core Pillars */}
          <div className="lg:col-span-6">
            <p className="text-xs font-extrabold tracking-[0.16em] uppercase text-[#E95004]">
              Story &amp; Mission
            </p>
            <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              Where Culture Meets Technology
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#4B5563] sm:text-base">
              <p>
                Born from the vibrant energy of Hip-Hop culture, <strong className="text-[#111827]">9LMNTS Studio</strong> (Nine Elements Studio) merges authentic storytelling with modern digital craft. We treat every client build like a live performance designed to move real people — never cold corporate software dashboards.
              </p>
              <div className="rounded-2xl border border-[#E95004]/20 bg-[#FFF7F3] p-5">
                <p className="text-xs font-extrabold tracking-[0.14em] uppercase text-[#E95004]">
                  Our Mission
                </p>
                <p className="mt-2 font-medium text-[#111827]">
                  To empower founders, creatives, and community brands with culture-first design and intelligent tools — turning first impressions into lasting loyalty without the agency bloat or technical complexity.
                </p>
              </div>
            </div>

            {/* Three Core Pillars */}
            <div className="pearl-card mt-6 rounded-[24px] p-6 sm:p-7">
              <h3 className="text-lg font-extrabold text-[#111827]">Three Core Pillars</h3>
              <div className="mt-4 space-y-3">
                {CORE_PILLARS.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="flex items-start gap-3.5 rounded-xl bg-[#F9FAFB] p-3.5"
                  >
                    <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#FFF2EB] text-xs font-extrabold text-[#E95004]">
                      {pillar.number}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[#111827]">{pillar.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#4B5563]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
