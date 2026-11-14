import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';
import { UNIFIED_PILLARS, type UnifiedPillar } from '../data/pillarsData';
import { AmbientSymbolsLayer } from './AmbientSymbolsLayer';

interface OrchestratorWorkflowSectionProps {
  onSelectPillar: (pillar: UnifiedPillar) => void;
  onOpenBook: (presetNiche?: string, presetTier?: 'spark' | 'flow' | 'cypher') => void;
}

export function OrchestratorWorkflowSection({
  onSelectPillar,
  onOpenBook,
}: OrchestratorWorkflowSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePillar = UNIFIED_PILLARS[activeIndex] ?? UNIFIED_PILLARS[0];

  return (
    <section
      id="workflows"
      className="relative border-t border-white/10 bg-[#050505] px-4 py-20 text-white sm:px-8 sm:py-28"
    >
      <AmbientSymbolsLayer />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Intro */}
        <div className="mb-14 max-w-3xl">
          <p className="inline-flex items-center gap-2 font-telemetry text-xs font-semibold tracking-[0.16em] uppercase text-[#FF5500]">
            <Layers className="h-3.5 w-3.5" />
            Scroll-Driven AI Workflow Architecture
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            One Creative Director AI.{' '}
            <span className="font-script text-4xl font-normal text-[#FF5500] sm:text-6xl">
              Four Revenue Workflows.
            </span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            Scroll through how the same Orchestrator shifts smoothly from visual craft to live customer capture and zero-fee checkout — without turning your website into a confusing robot dashboard.
          </p>
        </div>

        {/* Sticky Orchestrator Core (Left) + Floating Interactive Workflow Steps (Right) */}
        <div id="pillars" className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* LEFT: Sticky AI Orchestrator Aperture */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <div className="relative flex flex-col items-center py-6">
              {/* Circular Masked Orchestrator Portrait */}
              <div className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[340px] sm:w-[340px]">
                {/* Animated outer orbital aura */}
                <motion.div
                  key={activePillar.id}
                  initial={{ scale: 0.9, opacity: 0.4 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45 }}
                  className="pointer-events-none absolute inset-0 rounded-full border border-[#FF5500]/35 shadow-[0_0_80px_rgba(255,85,0,0.2)]"
                />

                <div
                  className="h-[240px] w-[240px] overflow-hidden rounded-full sm:h-[296px] sm:w-[296px]"
                  style={{
                    maskImage:
                      'radial-gradient(circle at center, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 96%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at center, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 96%)',
                  }}
                >
                  <img
                    src="/assets/hero-orchestrator.jpg"
                    alt="AI Orchestrator coordinating 9LMNTS workflows"
                    className="h-full w-full scale-110 object-cover object-center mix-blend-screen"
                  />
                </div>
              </div>

              {/* Floating HUD Status Text (No Heavy Box) */}
              <div className="mt-6 w-full max-w-sm border-t border-white/12 pt-5 text-center lg:text-left">
                <p className="font-telemetry text-[11px] font-semibold tracking-[0.16em] uppercase text-[#FF5500]">
                  {activePillar.aiActionLabel}
                </p>
                <p className="mt-2 text-lg font-bold text-white">
                  {activePillar.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {activePillar.aiWorkflowDetail}
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
                  {activePillar.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="border border-white/14 px-2.5 py-1 font-telemetry text-[11px] text-zinc-200 rounded-full"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Floating Non-Bento Scroll Steps */}
          <div className="space-y-12 lg:col-span-7">
            {UNIFIED_PILLARS.map((pillar, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.article
                  key={pillar.id}
                  onViewportEnter={() => setActiveIndex(idx)}
                  viewport={{ amount: 0.45 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`group cursor-pointer border-l-2 pl-6 transition-all duration-300 sm:pl-8 ${
                    isActive
                      ? 'border-[#FF5500] opacity-100'
                      : 'border-white/12 opacity-60 hover:border-white/40 hover:opacity-90'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-telemetry text-xs font-semibold tracking-[0.16em] uppercase text-[#FF5500]">
                      STAGE {pillar.index} · {pillar.culturalRoots}
                    </span>
                    <span className="font-telemetry text-[11px] uppercase text-zinc-500">
                      {isActive ? '● ORCHESTRATOR ACTIVE' : 'SCROLL OR CLICK'}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-base font-semibold text-zinc-200">
                    {pillar.headline}
                  </p>

                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {pillar.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPillar(pillar);
                      }}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/18 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-[#FF5500] hover:text-[#FF5500]"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-[#FF5500]" />
                      Inspect Full Workflow &amp; Specs
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBook(pillar.recommendedNiche, pillar.recommendedTierId);
                      }}
                      className="inline-flex cursor-pointer items-center gap-1 text-xs font-bold text-[#FF5500] transition-transform hover:translate-x-1"
                    >
                      Build This System ({pillar.recommendedTierId.toUpperCase()})
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
