import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles, X } from 'lucide-react';
import { NINE_ELEMENTS_MAP, type UnifiedPillar } from '../data/pillarsData';

interface PillarDetailModalProps {
  pillar: UnifiedPillar | null;
  showManifesto: boolean;
  onClose: () => void;
  onOpenBook: (presetNiche?: string, presetTier?: 'spark' | 'flow' | 'cypher') => void;
}

export function PillarDetailModal({
  pillar,
  showManifesto,
  onClose,
  onOpenBook,
}: PillarDetailModalProps) {
  const isOpen = pillar !== null || showManifesto;

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[95] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={
              showManifesto
                ? '9 Elements + AI Brand Philosophy'
                : pillar?.title || 'Pillar Details'
            }
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative z-10 max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/14 bg-[#0B0D12]/95 p-6 text-white shadow-[0_32px_90px_rgba(0,0,0,0.8)] sm:p-9"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="inline-flex items-center gap-2 font-telemetry text-[11px] font-semibold tracking-[0.16em] uppercase text-[#FF5500]">
                  <Sparkles className="h-3.5 w-3.5" />
                  {showManifesto
                    ? 'THE ORIGINAL DNA // NINE ELEMENTS OF HIP-HOP + AI'
                    : `PILLAR ${pillar?.index} // ${pillar?.aiActionLabel}`}
                </p>
                <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {showManifesto ? 'Why 9 Elements + AI Works Better.' : pillar?.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/14 bg-white/[0.06] text-white transition-colors hover:bg-[#FF5500]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {showManifesto ? (
              <div className="mt-6 space-y-6">
                <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Founded by <strong className="text-white">Darnley Sanon</strong> in Ottawa,{' '}
                  <strong className="text-white">9LMNTS Studio</strong> combines the{' '}
                  <span className="text-[#FF5500] font-semibold">Nine Elements of Hip-Hop Culture</span>{' '}
                  with autonomous AI workflows. The culture drives the originality, taste, and live energy; the AI handles speed, lead capture, and 24/7 execution.
                </p>

                <div className="divide-y divide-white/8 border-t border-b border-white/10">
                  {NINE_ELEMENTS_MAP.map((item) => (
                    <div
                      key={item.number}
                      className="grid grid-cols-1 gap-1.5 py-3 sm:grid-cols-12 sm:items-center sm:gap-4"
                    >
                      <span className="font-telemetry text-xs font-semibold text-[#FF5500] sm:col-span-3">
                        {item.number} · {item.element}
                      </span>
                      <span className="text-xs font-bold text-white sm:col-span-4">
                        {item.discipline}
                      </span>
                      <span className="text-xs leading-relaxed text-zinc-400 sm:col-span-5">
                        {item.businessTranslation}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <p className="font-telemetry text-[11px] uppercase tracking-wider text-zinc-400">
                    PHASE 2 ROADMAP: 3D IMMERSIVE STUDIO ROOM COMING SOON
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenBook(undefined, 'flow');
                    }}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#FF5500] px-6 py-3 text-sm font-bold text-white hover:bg-[#FF6B1A]"
                  >
                    Start a Build With Us
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              pillar && (
                <div className="mt-6 space-y-6">
                  <div>
                    <p className="font-telemetry text-[11px] uppercase tracking-wider text-zinc-400">
                      Cultural Root
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#FF5500]">
                      {pillar.culturalRoots}
                    </p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-white">{pillar.headline}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300 sm:text-base">
                      {pillar.summary}
                    </p>
                  </div>

                  <div className="border-t border-b border-white/10 py-4">
                    <p className="font-telemetry text-[11px] uppercase tracking-wider text-[#FF5500]">
                      What Our AI Orchestrator Executes Behind the Scenes
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                      {pillar.aiWorkflowDetail}
                    </p>
                  </div>

                  <div>
                    <p className="mb-3 font-telemetry text-[11px] uppercase tracking-wider text-zinc-400">
                      Deliverables You Receive
                    </p>
                    <ul className="space-y-2.5">
                      {pillar.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-zinc-200"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5500]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <p className="max-w-md text-xs text-zinc-400">
                      <strong className="text-zinc-200">Best fit:</strong> {pillar.idealFor}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenBook(pillar.recommendedNiche, pillar.recommendedTierId);
                      }}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#FF5500] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(255,85,0,0.35)] hover:bg-[#FF6B1A]"
                    >
                      Book {pillar.recommendedTierId.toUpperCase()} System
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
