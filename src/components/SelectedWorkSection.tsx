import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Camera, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_CASES } from '../data/agencyData';

interface SelectedWorkSectionProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    focus?: string;
  }) => void;
}

interface WorkCameraWaypoint {
  label: string;
  lens: string;
  callout: string;
  scale: number;
  x: string;
  y: string;
  rotate: number;
}

const WORK_CAMERA_RIGS: Record<string, WorkCameraWaypoint[]> = {
  hospitality: [
    {
      label: '01 · Wide Plated Hero',
      lens: '35mm Establishing',
      callout: 'Matte Black Stoneware Food Art Direction',
      scale: 1.04,
      x: '0%',
      y: '0%',
      rotate: 0,
    },
    {
      label: '02 · 1.75x Spice Macro',
      lens: '100mm Macro Zoom',
      callout: 'Zero-Stock Cultural Dish Detail · Direct Menu',
      scale: 1.75,
      x: '-14%',
      y: '-8%',
      rotate: -0.8,
    },
    {
      label: '03 · 0% PayPal Deposit',
      lens: '50mm Conversion Pan',
      callout: '50% Automated Catering Deposit + Pay Later 4×',
      scale: 1.55,
      x: '14%',
      y: '6%',
      rotate: 0.6,
    },
  ],
  roastery: [
    {
      label: '01 · Daylight Roastery',
      lens: '35mm Establishing',
      callout: 'Daylight Café Storefront & Morning Pickup UI',
      scale: 1.04,
      x: '0%',
      y: '0%',
      rotate: 0,
    },
    {
      label: '02 · 1.8x Crema Macro',
      lens: '100mm Macro Zoom',
      callout: 'Edge-to-Edge Golden Crema Detail · Flavour UI',
      scale: 1.8,
      x: '-12%',
      y: '8%',
      rotate: -0.6,
    },
    {
      label: '03 · Wholesale Flow',
      lens: '50mm Dolly Pan',
      callout: '1-Tap Wholesale & Event Espresso Bar Quote',
      scale: 1.52,
      x: '12%',
      y: '-6%',
      rotate: 0.5,
    },
  ],
  merch: [
    {
      label: '01 · Lookbook Wide',
      lens: '35mm Establishing',
      callout: '450 GSM Phygital Drop + Wearable Modules',
      scale: 1.04,
      x: '0%',
      y: '0%',
      rotate: 0,
    },
    {
      label: '02 · Sleeve QR Zoom',
      lens: '85mm Detail Push',
      callout: 'Scan Sleeve QR → Instant Web Lookbook & Checkout',
      scale: 1.72,
      x: '-15%',
      y: '-6%',
      rotate: -0.7,
    },
    {
      label: '03 · Infographics Pan',
      lens: '50mm Rack Focus',
      callout: '10-OS Ecosystem Printed Into Streetwear',
      scale: 1.5,
      x: '12%',
      y: '8%',
      rotate: 0.6,
    },
  ],
  arenas: [
    {
      label: '01 · Live Arena Stage',
      lens: '24mm Wide Stage',
      callout: 'Published Today: clash.9lmntsstudio.com',
      scale: 1.04,
      x: '0%',
      y: '0%',
      rotate: 0,
    },
    {
      label: '02 · Bracket Meter Zoom',
      lens: '85mm Telemetry Pan',
      callout: '8-Contender Tournament Bracket + Live QR Votes',
      scale: 1.7,
      x: '12%',
      y: '-8%',
      rotate: -0.6,
    },
    {
      label: '03 · VIP Gifting Pan',
      lens: '50mm Conversion Pan',
      callout: 'Artist Flagship Sync · artist.9lmntsstudio.com',
      scale: 1.55,
      x: '-12%',
      y: '6%',
      rotate: 0.6,
    },
  ],
};

export function SelectedWorkSection({ onOpenModal }: SelectedWorkSectionProps) {
  const [activeId, setActiveId] = useState(PORTFOLIO_CASES[0].id);
  const [waypointIdx, setWaypointIdx] = useState(0);
  const [autoOrbit, setAutoOrbit] = useState(true);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 130, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 130, damping: 22 });

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start end', 'center center'],
  });

  const portalScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const tiltX = useTransform(smoothY, [-0.5, 0.5], [2.5, -2.5]);
  const tiltY = useTransform(smoothX, [-0.5, 0.5], [-3.5, 3.5]);
  const bokehX = useTransform(smoothX, [-0.5, 0.5], [-28, 28]);
  const bokehY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  const current =
    PORTFOLIO_CASES.find((item) => item.id === activeId) ?? PORTFOLIO_CASES[0];
  const waypoints = WORK_CAMERA_RIGS[current.id] ?? WORK_CAMERA_RIGS.hospitality;
  const activeWaypoint = waypoints[waypointIdx % waypoints.length];

  useEffect(() => {
    setWaypointIdx(0);
    setAutoOrbit(true);
  }, [activeId]);

  useEffect(() => {
    if (!autoOrbit) return;
    const id = window.setInterval(() => {
      setWaypointIdx((prev) => (prev + 1) % waypoints.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [autoOrbit, waypoints.length]);

  return (
    <section id="work" className="bg-[#F5F6F8] px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-extrabold tracking-[0.16em] uppercase text-[#E95004]">
              Selected Craft &amp; Systems · 2.5D Virtual Camera Rig
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
        <div ref={stageRef} style={{ perspective: 1400 }}>
          <motion.div
            style={{ scale: portalScale }}
            className="pearl-card mt-8 overflow-hidden rounded-[32px] will-change-transform"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Showcase Image with 2.5D Virtual Camera Pan/Zoom + Hotspot Overlay */}
              <div
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
                  pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
                }}
                onMouseLeave={() => {
                  pointerX.set(0);
                  pointerY.set(0);
                }}
                className="relative h-[300px] overflow-hidden bg-[#111827] sm:h-[400px] lg:col-span-7 lg:h-[470px]"
              >
                <motion.div
                  key={current.id}
                  style={{
                    rotateX: tiltX,
                    rotateY: tiltY,
                    transformStyle: 'preserve-3d',
                  }}
                  animate={{
                    scale: activeWaypoint.scale,
                    x: activeWaypoint.x,
                    y: activeWaypoint.y,
                    rotateZ: activeWaypoint.rotate,
                  }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full will-change-transform"
                >
                  <img
                    src={current.image}
                    alt={current.title}
                    className="h-full w-full object-cover select-none"
                  />
                </motion.div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
                />

                {/* Foreground Out-of-Focus Bokeh Depth Layer */}
                <motion.div
                  aria-hidden="true"
                  style={{ x: bokehX, y: bokehY, filter: 'blur(4px)' }}
                  className="pointer-events-none absolute inset-0 will-change-transform"
                >
                  <span className="absolute top-10 left-[18%] h-4 w-4 rounded-full bg-white/30" />
                  <span className="absolute top-20 right-[22%] h-5 w-5 rounded-full bg-[#FF781F]/35" />
                </motion.div>

                {/* Animated Hotspot Callout */}
                <motion.div
                  key={`${current.id}-${waypointIdx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/65 px-3.5 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md"
                >
                  <span className="h-2 w-2 rounded-full bg-[#FF781F] shadow-[0_0_8px_#FF781F]" />
                  <span>{activeWaypoint.callout}</span>
                </motion.div>

                {/* Waypoint Controls Bar */}
                <div className="absolute inset-x-4 bottom-4 z-10 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-white/85 backdrop-blur-md">
                    <Camera className="h-3 w-3 text-[#FF781F]" />
                    {activeWaypoint.lens}
                  </span>

                  <div className="flex flex-wrap gap-1.5">
                    {waypoints.map((wp, idx) => (
                      <button
                        key={wp.label}
                        type="button"
                        onClick={() => {
                          setAutoOrbit(false);
                          setWaypointIdx(idx);
                        }}
                        className={`cursor-pointer rounded-full px-3 py-1 text-[11px] font-bold backdrop-blur-md transition-colors ${
                          idx === waypointIdx
                            ? 'bg-[#E95004] text-white'
                            : 'border border-white/20 bg-black/60 text-white/85 hover:bg-black/80'
                        }`}
                      >
                        {wp.label}
                      </button>
                    ))}
                  </div>
                </div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
