import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { UNIFIED_PILLARS, type UnifiedPillar } from '../data/pillarsData';
import { AmbientSymbolsLayer } from './AmbientSymbolsLayer';

interface HeroStageProps {
  onOpenBook: (presetNiche?: string, presetTier?: 'spark' | 'flow' | 'cypher') => void;
  onSelectPillar: (pillar: UnifiedPillar) => void;
  onOpenManifesto: () => void;
}

const ORBIT_NODE_POSITIONS = [
  'top-[8%] left-[12%] sm:top-[10%] sm:left-[10%]',
  'top-[12%] right-[10%] sm:top-[14%] sm:right-[8%]',
  'bottom-[24%] left-[4%] sm:bottom-[22%] sm:left-[6%]',
  'bottom-[18%] right-[6%] sm:bottom-[18%] sm:right-[8%]',
];

export function HeroStage({
  onOpenBook,
  onSelectPillar,
  onOpenManifesto,
}: HeroStageProps) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 160,
    damping: 22,
  });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [6, -6]), {
    stiffness: 160,
    damping: 22,
  });
  const translateX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 140,
    damping: 24,
  });
  const translateY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 140,
    damping: 24,
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch' || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    pointerX.set(nx);
    pointerY.set(ny);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="top"
      ref={stageRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-hidden bg-[#050505] px-4 pt-6 pb-14 text-white sm:px-8 sm:pt-10 sm:pb-20"
    >
      <AmbientSymbolsLayer />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Atmospheric Telemetry Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-telemetry text-[11px] tracking-[0.16em] uppercase text-zinc-400">
          <span className="inline-flex items-center gap-2 text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-[#00FF88] shadow-[0_0_8px_#00FF88]" />
            Ottawa Creative Technology & AI Agency
          </span>
          <span>9 Elements of Culture · Automated Systems · 3–7 Day Launches</span>
        </div>

        {/* 3-Zone Editorial Showroom Grid (Zero Bento Boxes) */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* LEFT ZONE: Bold Brand Identity + Clear Business-Owner Hook */}
          <div className="relative z-20 lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#FF5500]">
              <Sparkles className="h-3.5 w-3.5" />
              Nine Elements Studio
            </div>

            <h1 className="mt-3 font-display text-[clamp(2.85rem,5.4vw,4.5rem)] font-extrabold tracking-[-0.03em] leading-[0.95] text-white">
              9 Elements
              <span className="ml-2 inline-block font-script text-[clamp(3.3rem,6vw,5.2rem)] font-normal text-[#FF5500] drop-shadow-[0_0_24px_rgba(255,85,0,0.45)]">
                + AI
              </span>
            </h1>

            <p className="mt-4 text-xl font-bold leading-snug tracking-tight text-zinc-100 sm:text-2xl">
              Websites &amp; AI Systems That Book Customers While You Sleep.
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
              We turn restaurants, shops, services, and creators into high-converting brands — pairing Hip-Hop creative craft with autonomous AI workflows built in 3–7 days.
            </p>

            {/* Primary Floating CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF5500] px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_10px_28px_rgba(255,85,0,0.38)] transition-all hover:scale-[1.03] hover:bg-[#FF6B1A]"
              >
                Explore Client Work
                <ArrowDown className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onOpenManifesto}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/18 px-5 py-3.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-[#FF5500]/60 hover:text-white"
              >
                <Play className="h-3.5 w-3.5 text-[#FF5500]" />
                How 9 Elements + AI Works
              </button>
            </div>

            {/* Minimal Floating Quick-Launch Link + Preview Chips */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 text-left"
              >
                <div className="flex -space-x-2">
                  <img
                    src="/assets/shawarma-carve.jpg"
                    alt=""
                    className="h-8 w-8 rounded-full border border-[#050505] object-cover"
                  />
                  <img
                    src="/assets/crema-pour.jpg"
                    alt=""
                    className="h-8 w-8 rounded-full border border-[#050505] object-cover"
                  />
                  <img
                    src="/assets/streetwear-hoodie.jpg"
                    alt=""
                    className="h-8 w-8 rounded-full border border-[#050505] object-cover"
                  />
                </div>
                <div>
                  <p className="font-telemetry text-[10px] tracking-[0.14em] uppercase text-[#FF5500]">
                    Latest Work
                  </p>
                  <p className="text-xs font-semibold text-zinc-200 transition-colors group-hover:text-white">
                    5 Live Industry Stages →
                  </p>
                </div>
              </a>

              <button
                type="button"
                onClick={() => onOpenBook(undefined, 'spark')}
                className="inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-zinc-300 underline decoration-[#FF5500]/60 underline-offset-4 transition-colors hover:text-white"
              >
                Start from $500 CAD
                <ArrowUpRight className="h-3.5 w-3.5 text-[#FF5500]" />
              </button>
            </div>
          </div>

          {/* CENTER ZONE: Pin-Inspired AI Orchestrator Bust + Orbital Typography Ring */}
          <div className="relative flex min-h-[380px] items-center justify-center sm:min-h-[470px] lg:col-span-5">
            {/* Orbital Curved Typography SVG Halo */}
            <svg
              viewBox="0 0 400 400"
              aria-hidden="true"
              className="animate-orbit-slow pointer-events-none absolute h-[340px] w-[340px] opacity-55 sm:h-[440px] sm:w-[440px]"
            >
              <defs>
                <path
                  id="hero-orbit-ring"
                  d="M 200, 200 m -158, 0 a 158,158 0 1,1 316,0 a 158,158 0 1,1 -316,0"
                />
              </defs>
              <circle
                cx="200"
                cy="200"
                r="158"
                fill="none"
                stroke="rgba(255,85,0,0.22)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              <text
                fill="#D4D4D8"
                fontSize="10.5"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="3.4"
              >
                <textPath href="#hero-orbit-ring" startOffset="0%">
                  9 ELEMENTS OF CULTURE • AI ORCHESTRATOR • AUTONOMOUS SYSTEMS •
                </textPath>
              </text>
            </svg>

            {/* Seamless Masked AI Orchestrator Portrait */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
                transformPerspective: 1100,
              }}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[330px] sm:max-w-[400px]"
            >
              <div
                className="relative aspect-[4/4.2] w-full overflow-hidden"
                style={{
                  maskImage:
                    'radial-gradient(circle at 50% 48%, rgba(0,0,0,1) 52%, rgba(0,0,0,0.4) 74%, rgba(0,0,0,0) 96%)',
                  WebkitMaskImage:
                    'radial-gradient(circle at 50% 48%, rgba(0,0,0,1) 52%, rgba(0,0,0,0.4) 74%, rgba(0,0,0,0) 96%)',
                }}
              >
                <img
                  src="/assets/hero-orchestrator.jpg"
                  alt="9LMNTS Studio AI Orchestrator chrome sculpture controlling glowing Flame Orange agent spheres"
                  className="h-full w-full scale-[1.06] object-cover object-center mix-blend-screen"
                />
              </div>

              {/* Interactive Glowing Agent Orbs around Orchestrator */}
              {UNIFIED_PILLARS.map((pillar, idx) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => onSelectPillar(pillar)}
                  className={`group absolute ${ORBIT_NODE_POSITIONS[idx]} z-20 flex cursor-pointer items-center gap-2 rounded-full border border-[#FF5500]/45 bg-[#050505]/80 px-2.5 py-1 text-[10px] font-telemetry uppercase tracking-wider text-zinc-100 backdrop-blur-md transition-all hover:scale-105 hover:border-[#FF5500] hover:bg-[#FF5500] hover:text-white`}
                >
                  <span className="h-2 w-2 rounded-full bg-[#FF5500] shadow-[0_0_10px_#FF5500] group-hover:bg-white" />
                  <span>
                    {pillar.index} {pillar.shortLabel}
                  </span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* RIGHT ZONE: Floating SVG Leader-Line Callouts (ZERO Bento Boxes) */}
          <div className="relative z-20 flex flex-col gap-6 lg:col-span-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="font-telemetry text-[10px] tracking-[0.16em] uppercase text-zinc-400">
                4 Unified Agency Pillars
              </span>
              <span className="font-telemetry text-[10px] text-[#FF5500]">
                CLICK TO INSPECT
              </span>
            </div>

            {UNIFIED_PILLARS.map((pillar) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => onSelectPillar(pillar)}
                className="group relative flex cursor-pointer items-start gap-3 text-left transition-transform duration-200 hover:translate-x-1"
              >
                {/* Hairline Pin Leader */}
                <span className="mt-2 hidden items-center lg:flex" aria-hidden="true">
                  <span className="h-px w-6 bg-white/25 transition-all group-hover:w-9 group-hover:bg-[#FF5500]" />
                  <span className="h-2 w-2 rounded-full border border-[#FF5500] bg-[#050505] transition-colors group-hover:bg-[#FF5500]" />
                </span>

                <div className="flex-1 border-b border-white/8 pb-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-telemetry text-[11px] font-semibold text-[#FF5500]">
                      {pillar.index} // {pillar.shortLabel.toUpperCase()}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500 transition-colors group-hover:text-[#FF5500]" />
                  </div>
                  <h2 className="mt-1 text-sm font-bold text-white transition-colors group-hover:text-[#FF5500] sm:text-base">
                    {pillar.headline}
                  </h2>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                    {pillar.culturalRoots}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Hairline Metric Strip (Zero Bento Cards) */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-6 font-telemetry text-xs sm:grid-cols-4">
          <div>
            <p className="text-[#FF5500]">3–7 DAYS</p>
            <p className="mt-1 font-sans text-xs text-zinc-400">Turnkey storefront launch speed</p>
          </div>
          <div>
            <p className="text-white">0% APP FEE</p>
            <p className="mt-1 font-sans text-xs text-zinc-400">Direct PayPal Complete Payments</p>
          </div>
          <div>
            <p className="text-white">9 ELEMENTS + AI</p>
            <p className="mt-1 font-sans text-xs text-zinc-400">Culture-driven design & automation</p>
          </div>
          <div>
            <p className="text-[#00FF88]">50% DEPOSIT</p>
            <p className="mt-1 font-sans text-xs text-zinc-400">Interac e-Transfer or PayPal Invoice</p>
          </div>
        </div>
      </div>
    </section>
  );
}
