import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { Crosshair, Shield, Zap } from 'lucide-react';
import { ScrollScrubVideo } from '../ScrollScrubVideo';

const LOADOUTS = [
  {
    id: 'recon',
    label: 'RECON // HUD',
    fps: '60.0',
    latency: '3.8',
    sync: '99.7',
    shield: '100',
    caption: 'Real-time kinetic shader sweep & telemetry lock for competitive game reveals.',
  },
  {
    id: 'overdrive',
    label: 'OVERDRIVE // DPS',
    fps: '120.0',
    latency: '2.1',
    sync: '99.9',
    shield: '94',
    caption: 'High-frame-rate scroll timeline bound to weapon core output & combat bursts.',
  },
  {
    id: 'stealth',
    label: 'STEALTH // GHOST',
    fps: '60.0',
    latency: '1.4',
    sync: '100.0',
    shield: '100',
    caption: 'Zero-Signature cloaked navigation mesh with acoustic radar ring pings.',
  },
];

export function LuaGameStage() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [loadoutIdx, setLoadoutIdx] = useState(0);
  const [pulseTick, setPulseTick] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 200,
    damping: 22,
  });
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 22,
  });

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPulseTick((prev) => (prev + 1) % 9);
    }, 1400);
    return () => window.clearInterval(timer);
  }, []);

  const loadout = LOADOUTS[loadoutIdx];
  const jitter = (pulseTick % 3) * 0.1;

  return (
    <section
      id="stage-lua"
      ref={stageRef}
      aria-label="Stage 05 — LUA Game Tactical Command HUD"
      onPointerMove={(e) => {
        if (e.pointerType === 'touch' || !stageRef.current) return;
        const rect = stageRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative overflow-hidden bg-[#08090C] px-4 py-24 text-white sm:px-8 sm:py-32"
    >
      {/* Subtle Ambient SVG Targeting Rings Behind Subject */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-35"
      >
        <svg viewBox="0 0 800 800" className="h-[680px] w-[680px] max-w-none">
          <motion.circle
            cx="400"
            cy="400"
            r="260"
            fill="none"
            stroke="#00D2FF"
            strokeWidth="1"
            strokeDasharray="10 14"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 36, ease: 'linear' }}
            style={{ originX: '400px', originY: '400px' }}
          />
          <motion.circle
            cx="400"
            cy="400"
            r="340"
            fill="none"
            stroke="#00D2FF"
            strokeOpacity="0.4"
            strokeWidth="1"
            strokeDasharray="3 18"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 52, ease: 'linear' }}
            style={{ originX: '400px', originY: '400px' }}
          />
          <line x1="80" y1="400" x2="180" y2="400" stroke="#00D2FF" strokeOpacity="0.45" />
          <line x1="620" y1="400" x2="720" y2="400" stroke="#00D2FF" strokeOpacity="0.45" />
          <line x1="400" y1="80" x2="400" y2="180" stroke="#00D2FF" strokeOpacity="0.45" />
          <line x1="400" y1="620" x2="400" y2="720" stroke="#00D2FF" strokeOpacity="0.45" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Contrast Breakout Banner */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#00D2FF]/15 px-3 py-1 font-telemetry text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00D2FF]">
              Stage 05 · Tactical Breakout (#08090C)
            </span>
            <span className="font-telemetry text-xs tracking-widest text-white/75">
              LUA GAME // COMMAND HUD
            </span>
          </div>
          <span className="font-telemetry text-xs text-[#00D2FF]">
            TELEMETRY ACTIVE · {loadout.label}
          </span>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left HUD Telemetry & Loadout Switcher */}
          <div className="lg:col-span-5">
            <p className="inline-flex items-center gap-2 font-telemetry text-xs tracking-[0.18em] uppercase text-[#00D2FF]">
              <Crosshair className="h-3.5 w-3.5" />
              Intentional Dark Theater Exception
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              High-Stakes Game UI.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {loadout.caption}
            </p>

            {/* Live JetBrains Mono Cyan Telemetry Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#00D2FF]/20 bg-white/[0.03] p-4">
                <p className="font-telemetry text-[10px] tracking-[0.16em] uppercase text-white/55">
                  Target Lock
                </p>
                <p className="mt-1 font-telemetry text-2xl font-semibold text-[#00D2FF]">
                  {Math.min(100, Number(loadout.sync) + jitter).toFixed(1)}%
                </p>
              </div>
              <div className="rounded-2xl border border-[#00D2FF]/20 bg-white/[0.03] p-4">
                <p className="font-telemetry text-[10px] tracking-[0.16em] uppercase text-white/55">
                  Frame Pacing
                </p>
                <p className="mt-1 font-telemetry text-2xl font-semibold text-[#00D2FF]">
                  {loadout.fps} FPS
                </p>
              </div>
              <div className="rounded-2xl border border-[#00D2FF]/20 bg-white/[0.03] p-4">
                <p className="font-telemetry text-[10px] tracking-[0.16em] uppercase text-white/55">
                  Input Latency
                </p>
                <p className="mt-1 font-telemetry text-2xl font-semibold text-white">
                  {(Number(loadout.latency) + jitter).toFixed(1)} ms
                </p>
              </div>
              <div className="rounded-2xl border border-[#00D2FF]/20 bg-white/[0.03] p-4">
                <p className="font-telemetry text-[10px] tracking-[0.16em] uppercase text-white/55">
                  Shield Core
                </p>
                <p className="mt-1 flex items-center gap-1.5 font-telemetry text-2xl font-semibold text-white">
                  <Shield className="h-4 w-4 text-[#00D2FF]" />
                  {loadout.shield}%
                </p>
              </div>
            </div>

            {/* Mode Switcher */}
            <div className="mt-7 flex flex-wrap gap-2">
              {LOADOUTS.map((mode, idx) => {
                const active = idx === loadoutIdx;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setLoadoutIdx(idx)}
                    className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 font-telemetry text-xs font-semibold transition-all ${
                      active
                        ? 'bg-[#00D2FF] text-[#08090C]'
                        : 'border border-white/15 bg-white/5 text-white/75 hover:border-[#00D2FF]/60 hover:text-white'
                    }`}
                  >
                    <Zap className="h-3 w-3" />
                    {mode.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Cursor-Tilting 3D Operative Stage */}
          <div className="lg:col-span-7">
            <motion.div
              style={{
                rotateX: tiltX,
                rotateY: tiltY,
                transformPerspective: 1200,
              }}
              className="relative mx-auto max-w-lg rounded-[2.25rem] border border-[#00D2FF]/25 bg-[#0D1117] p-3 shadow-[0_30px_90px_rgba(0,210,255,0.14)]"
            >
              <ScrollScrubVideo
                src="/assets/lua-hud.mp4"
                fallbackImg="/assets/lua-character.jpg"
                fallbackAlt="LUA futuristic cyberpunk armored operative in obsidian environment with subtle cyan rim lighting"
                progress={scrollYProgress}
                slotLabel="LUA-HUD.MP4"
                className="aspect-[4/5] rounded-[1.75rem] bg-[#08090C]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
