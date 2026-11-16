import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Camera, ExternalLink, Mail, Phone } from 'lucide-react';
import { LIVE_SAAS_PLATFORMS, PORTFOLIO_CASES, STUDIO_CONTACT } from '../data/agencyData';

interface StudioConsoleSectionProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

type StudioTab = 'story' | 'portfolio' | 'saas' | 'book';

const STUDIO_CAMERA_WAYPOINTS = [
  {
    id: 'wide',
    label: '01 · Wide Rig',
    lens: '24mm Establishing Shot · 1.04x',
    callout: 'Darnley Sanon · Founder & Solo Multi-Hyphenate Studio',
    pinClass: 'top-5 left-5',
    scale: 1.04,
    x: '0%',
    y: '0%',
    rotate: 0,
  },
  {
    id: 'hoodie',
    label: '02 · QR Hoodie Pan',
    lens: '85mm Focal Pan · 1.52x',
    callout: 'Sleeve QR Wearable Merch → Instant Mobile Lead Scan',
    pinClass: 'top-8 right-6',
    scale: 1.52,
    x: '-12%',
    y: '-5%',
    rotate: -0.7,
  },
  {
    id: 'console',
    label: '03 · Console Macro',
    lens: '100mm Macro Push · 1.62x',
    callout: 'Live Audio Console + Automated Booking & PayPal Stack',
    pinClass: 'bottom-24 left-6',
    scale: 1.62,
    x: '14%',
    y: '-10%',
    rotate: 0.6,
  },
] as const;

export function StudioConsoleSection({ onOpenModal }: StudioConsoleSectionProps) {
  const [activeTab, setActiveTab] = useState<StudioTab>('story');
  const [waypointIdx, setWaypointIdx] = useState(0);
  const [autoOrbit, setAutoOrbit] = useState(true);

  const sectionRef = useRef<HTMLElement | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 22 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  // Technique C: Z-Axis Expanding Scroll Portal
  const portalScale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const portalClip = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(5% 3% 5% 3% round 38px)', 'inset(0% 0% 0% 0% round 32px)']
  );

  // Technique B: 2.5D Mouse Tilt & 1.45x Foreground Bokeh Parallax
  const tiltX = useTransform(smoothY, [-0.5, 0.5], [2, -2]);
  const tiltY = useTransform(smoothX, [-0.5, 0.5], [-2.5, 2.5]);
  const bokehX = useTransform(smoothX, [-0.5, 0.5], [-32, 32]);
  const bokehY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    if (!autoOrbit) return;
    const timer = window.setInterval(() => {
      setWaypointIdx((prev) => (prev + 1) % STUDIO_CAMERA_WAYPOINTS.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [autoOrbit]);

  const activeWaypoint = STUDIO_CAMERA_WAYPOINTS[waypointIdx];

  return (
    <section ref={sectionRef} id="studio" className="bg-[#F5F6F8] px-5 pb-16 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        {/* Clean Editorial Header Above the Studio Console Feature */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-extrabold tracking-[0.16em] uppercase text-[#E95004]">
              Founder &amp; Living Studio · 2.5D Camera Portal
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              Direct Creative Direction — Inside The Studio
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4B5563]">
            You work directly with founder {STUDIO_CONTACT.founder} from discovery to launch day.
          </p>
        </div>

        {/* Technique C Expanding Scroll Portal + Technique B Virtual Camera Rig */}
        <div style={{ perspective: 1400 }}>
          <motion.div
            style={{ scale: portalScale, clipPath: portalClip }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
              pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
            }}
            onMouseLeave={() => {
              pointerX.set(0);
              pointerY.set(0);
            }}
            className="relative overflow-hidden rounded-[32px] bg-[#141519] shadow-[0_28px_70px_-22px_rgba(17,24,39,0.28)] will-change-transform"
          >
            {/* Upper Studio Scene with 2.5D Virtual Camera Waypoints */}
            <div className="relative h-[340px] w-full overflow-hidden sm:h-[440px] lg:h-[480px]">
              <motion.div
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
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full will-change-transform"
              >
                <img
                  src="/assets/studio-console-darnley.jpg"
                  alt="Darnley Sanon working at the 9LMNTS Studio audio console in black 9LMNTS hoodie with sleeve QR patch"
                  className="h-full w-full object-cover object-[center_22%] select-none"
                />
              </motion.div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141519] via-[#141519]/30 to-transparent"
              />

              {/* Layer 1 Foreground Blurred Bokeh Particles (1.45x parallax) */}
              <motion.div
                aria-hidden="true"
                style={{ x: bokehX, y: bokehY, filter: 'blur(4px)' }}
                className="pointer-events-none absolute inset-0 will-change-transform"
              >
                <span className="absolute top-12 left-[22%] h-4 w-4 rounded-full bg-[#FF781F]/35" />
                <span className="absolute top-28 right-[26%] h-6 w-6 rounded-full bg-white/20" />
                <span className="absolute bottom-24 right-[18%] h-4 w-4 rounded-full bg-[#FF781F]/30" />
              </motion.div>

              {/* Animated Hotspot Callout Pin */}
              <motion.div
                key={activeWaypoint.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className={`pointer-events-none absolute z-10 hidden max-w-xs items-center gap-2 rounded-full border border-white/20 bg-black/65 px-3.5 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md sm:inline-flex ${activeWaypoint.pinClass}`}
              >
                <span className="h-2 w-2 rounded-full bg-[#FF781F] shadow-[0_0_8px_#FF781F]" />
                <span>{activeWaypoint.callout}</span>
              </motion.div>

              {/* Camera Waypoint Rig Bar */}
              <div className="absolute right-4 bottom-24 z-10 flex flex-wrap items-center gap-1.5 sm:right-8 sm:bottom-32">
                <span className="hidden items-center gap-1 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-white/75 backdrop-blur-md md:inline-flex">
                  <Camera className="h-3 w-3 text-[#FF781F]" />
                  {activeWaypoint.lens}
                </span>
                {STUDIO_CAMERA_WAYPOINTS.map((wp, idx) => (
                  <button
                    key={wp.id}
                    type="button"
                    onClick={() => {
                      setAutoOrbit(false);
                      setWaypointIdx(idx);
                    }}
                    className={`cursor-pointer rounded-full px-3 py-1 text-[11px] font-bold backdrop-blur-md transition-colors ${
                      idx === waypointIdx
                        ? 'bg-[#E95004] text-white shadow-sm'
                        : 'border border-white/20 bg-black/55 text-white/80 hover:bg-black/80 hover:text-white'
                    }`}
                  >
                    {wp.label}
                  </button>
                ))}
              </div>
            </div>

          {/* Crisp Interactive Glass Studio Window Positioned Cleanly Over Lower Frame */}
          <div className="relative z-10 -mt-20 px-4 pb-6 sm:-mt-28 sm:px-8 sm:pb-8 lg:px-10">
            <div className="rounded-3xl border border-white/15 bg-[#16181F]/90 text-white shadow-2xl backdrop-blur-xl">
              {/* Window Top Bar */}
              <div className="flex flex-col justify-between gap-3 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E95004] text-xs font-black text-white">
                    DS
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.12em] uppercase text-white/95">
                      The Studio // {STUDIO_CONTACT.founder}
                    </p>
                    <p className="text-[11px] text-white/60">{STUDIO_CONTACT.role}</p>
                  </div>
                </div>

                {/* 4 Studio Tabs */}
                <div className="flex flex-wrap gap-1.5">
                  {(
                    [
                      ['story', '01. Story & Ethos'],
                      ['portfolio', '02. Selected Work'],
                      ['saas', '03. Live SaaS'],
                      ['book', '04. Work With Darnley'],
                    ] as const
                  ).map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActiveTab(id)}
                      className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors ${
                        activeTab === id
                          ? 'bg-[#E95004] text-white'
                          : 'bg-white/[0.06] text-white/75 hover:bg-white/12 hover:text-white'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content Area */}
              <div className="p-5 sm:p-7">
                {activeTab === 'story' && (
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7">
                      <span className="text-3xl leading-none font-black text-[#FF781F]">“</span>
                      <blockquote className="mt-1 text-lg font-bold leading-snug text-white sm:text-2xl">
                        Every project is an opportunity to tell a story, to create something that resonates beyond the screen. That&apos;s the power of combining art, culture, and technology.
                      </blockquote>
                      <p className="mt-4 text-sm leading-relaxed text-white/75">
                        With over a decade in graphic design and UI/UX across Ottawa and Southeast Asia, Darnley founded 9LMNTS Studio so everyday business owners, restaurants, and creators can launch digital experiences with cultural soul and zero technical frustration.
                      </p>
                    </div>

                    <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 lg:col-span-5">
                      <div>
                        <p className="text-xs font-bold tracking-[0.12em] uppercase text-[#FF781F]">
                          Direct Studio Line
                        </p>
                        <div className="mt-3 space-y-2 text-sm text-white/90">
                          <a
                            href={`mailto:${STUDIO_CONTACT.email}`}
                            className="flex items-center gap-2 hover:text-[#FF781F]"
                          >
                            <Mail className="h-4 w-4 text-[#FF781F]" />
                            {STUDIO_CONTACT.email}
                          </a>
                          <a
                            href={STUDIO_CONTACT.phoneHref}
                            className="flex items-center gap-2 hover:text-[#FF781F]"
                          >
                            <Phone className="h-4 w-4 text-[#FF781F]" />
                            {STUDIO_CONTACT.phoneDisplay}
                          </a>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => onOpenModal({ path: 'agency', tier: 'beat' })}
                        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#E95004] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#FF5500]"
                      >
                        <span>Book a Studio Sprint</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'portfolio' && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {PORTFOLIO_CASES.map((item) => (
                      <a
                        key={item.id}
                        href="#work"
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors hover:border-[#FF781F]/60"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="p-3.5">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#FF781F]">
                            {item.category}
                          </p>
                          <p className="mt-1 text-sm font-bold text-white">{item.title}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {activeTab === 'saas' && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {LIVE_SAAS_PLATFORMS.map((platform) => (
                      <div
                        key={platform.id}
                        className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-lg font-extrabold text-white">
                              {platform.name}
                            </h3>
                            <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300">
                              Published &amp; Live
                            </span>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-white/75">
                            {platform.summary}
                          </p>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <a
                            href={platform.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#E95004] px-4 py-2 text-xs font-bold text-white hover:bg-[#FF5500]"
                          >
                            <span>Launch {platform.name}</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                          <button
                            type="button"
                            onClick={() => onOpenModal({ path: 'saas', saasId: platform.id })}
                            className="cursor-pointer rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
                          >
                            Preview Modal
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'book' && (
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                    <div className="max-w-xl">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#FF781F]">
                        Zero Surprises · 1-Page Agreement + 50% Deposit Kickoff
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold text-white">
                        Ready to lock your build week?
                      </h3>
                      <p className="mt-2 text-sm text-white/75">
                        Pick Flow ($1,500 CAD), Beat ($3,000 CAD), or Cypher ($5,000 CAD). Scope locks immediately with a 1-page agreement and 50% deposit via Interac e-Transfer ({STUDIO_CONTACT.email}) or PayPal Invoice.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenModal({ path: 'agency', tier: 'beat' })}
                      className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-[#E95004] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#FF5500]"
                    >
                      <span>Open Onboarding &amp; Booking</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
