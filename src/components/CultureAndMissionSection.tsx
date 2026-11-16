import { useEffect, useRef, useState } from 'react';
import { Layers, ShieldCheck, Sliders } from 'lucide-react';

type DeconstructMode = 'assembled' | 'baffle' | 'thermal' | 'exploded';

const MODE_PRESETS: Array<{
  id: DeconstructMode;
  label: string;
  altitude: number;
  note: string;
}> = [
  {
    id: 'assembled',
    label: '01 // ASSEMBLED_CHASSIS',
    altitude: 0,
    note: 'Monolithic outer skin: Behance Flame Hero + Obsidian Solarium facade.',
  },
  {
    id: 'baffle',
    label: '02 // ACOUSTIC_BAFFLE_LIFT',
    altitude: 42,
    note: 'Mid-layer separation: 2.5D virtual camera rig + SVG callout coordinates.',
  },
  {
    id: 'thermal',
    label: '03 // THERMAL_WIREFRAME',
    altitude: 78,
    note: 'Diagnostic telemetry grid exposing 0%-commission checkout rails.',
  },
  {
    id: 'exploded',
    label: '04 // NEURAL_DSP_EXPOSED',
    altitude: 100,
    note: 'Full 100% separation: Gemini voice reception + webhook CRM core.',
  },
];

const NINE_ELEMENTS = [
  { num: '01', name: 'Pacing & Rhythm', detail: 'Pinned chapters replacing generic SaaS stacks' },
  { num: '02', name: 'Color Polarity', detail: 'Flame Orange #E95004 Hero into #060608 Obsidian' },
  { num: '03', name: '2.5D Camera Depth', detail: 'Pointer micro-tilt & scroll-driven parallax' },
  { num: '04', name: 'Editorial Type', detail: 'Syne display paired with EB Garamond italic' },
  { num: '05', name: 'Full-Bleed Framing', detail: 'Zero rounded white cards; 1px hairline grids' },
  { num: '06', name: 'Direct Checkout', detail: 'PayPal Complete Payments at 0% studio cut' },
  { num: '07', name: 'Webhook Intake', detail: 'Auto-routed leads into Supabase & n8n CRM' },
  { num: '08', name: '24/7 Reception', detail: 'Bilingual AI SMS/Voice answering & booking' },
  { num: '09', name: 'Verified Shipping', detail: '48-hour WebAR wedges to 14-day full OS builds' },
];

const PRACTICAL_GUARDRAILS = [
  {
    code: 'LOCK_01',
    title: 'Real Owner Routing',
    desc: 'Every booking & quote routes directly to your phone, email, and calendar.',
  },
  {
    code: 'LOCK_02',
    title: 'Zero Platform Tax',
    desc: 'Clients keep 100% of PayPal, Apple Pay, Pay Later 4×, and catering orders.',
  },
  {
    code: 'LOCK_03',
    title: 'Base44 Flagships Intact',
    desc: 'SoundClash OS & Artist OS run live on Base44 with zero redesign drift.',
  },
  {
    code: 'LOCK_04',
    title: '50% Interac Kickoff',
    desc: '1-page sprint agreement + 50% deposit locks a fixed delivery date.',
  },
];

export function CultureAndMissionSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const assembledImgRef = useRef<HTMLImageElement | null>(null);
  const explodedImgRef = useRef<HTMLImageElement | null>(null);

  const [altitude, setAltitude] = useState(38);
  const [mode, setMode] = useState<DeconstructMode>('baffle');
  const [manualOverride, setManualOverride] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);

  // Preload both 16:9 exploded monolith keyframes once
  useEffect(() => {
    let mounted = true;
    const imgA = new Image();
    const imgB = new Image();
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount += 1;
      if (loadedCount >= 2 && mounted) {
        setImagesReady(true);
      }
    };

    imgA.onload = handleLoad;
    imgB.onload = handleLoad;
    imgA.src = '/assets/monolith-assembled.jpg';
    imgB.src = '/assets/monolith-exploded.jpg';

    assembledImgRef.current = imgA;
    explodedImgRef.current = imgB;

    return () => {
      mounted = false;
    };
  }, []);

  // Scroll-driven interpolation unless user manually scrubs the slider
  useEffect(() => {
    if (manualOverride) return;

    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 900;
      const raw = (vh * 0.85 - rect.top) / (vh * 0.95);
      const clamped = Math.max(0, Math.min(1, raw));
      const pct = Math.round(clamped * 100);
      setAltitude(pct);
      if (pct < 20) setMode('assembled');
      else if (pct < 65) setMode('baffle');
      else setMode('exploded');
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [manualOverride]);

  // Draw bimodal interpolated frame onto HTML5 <canvas>
  useEffect(() => {
    const canvas = canvasRef.current;
    const imgA = assembledImgRef.current;
    const imgB = explodedImgRef.current;
    if (!canvas || !imgA || !imgB) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth || 1280;
    const height = canvas.clientHeight || 720;
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.fillStyle = '#060608';
    ctx.fillRect(0, 0, width, height);

    const t = altitude / 100;

    // Subtle zoom push & vertical layer breathing during explosion
    const drawCover = (img: HTMLImageElement, scaleBoost: number, yShift: number, alpha: number) => {
      if (!img.complete || img.naturalWidth === 0) return;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const boxRatio = width / height;
      let dw = width;
      let dh = height;
      if (boxRatio > imgRatio) {
        dh = width / imgRatio;
      } else {
        dw = height * imgRatio;
      }
      dw *= scaleBoost;
      dh *= scaleBoost;
      const dx = (width - dw) / 2;
      const dy = (height - dh) / 2 + yShift;
      ctx.globalAlpha = alpha;
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    drawCover(imgA, 1 + t * 0.035, t * -10, 1 - t * 0.85);
    drawCover(imgB, 1.04 - t * 0.04, (1 - t) * 12, Math.min(1, t * 1.15));

    ctx.globalAlpha = 1;

    // Optional thermal wireframe overlay when in Thermal preset
    if (mode === 'thermal') {
      ctx.strokeStyle = 'rgba(255, 85, 0, 0.22)';
      ctx.lineWidth = 1;
      const step = 48;
      for (let x = 0; x <= width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    // Architectural dark vignette for legibility of callout coordinates
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, 'rgba(6,6,8,0.45)');
    grad.addColorStop(0.5, 'rgba(6,6,8,0.08)');
    grad.addColorStop(1, 'rgba(6,6,8,0.72)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    ctx.restore();
  }, [altitude, mode, imagesReady]);

  const activePreset = MODE_PRESETS.find((m) => m.id === mode) ?? MODE_PRESETS[1];

  return (
    <section
      id="culture"
      ref={sectionRef}
      className="kaiseki-stage relative border-t border-white/[0.08] bg-[#060608] text-[#F3F4F6]"
    >
      {/* Chapter Perimeter Telemetry Header */}
      <div className="border-b border-white/[0.08] bg-[#09090C]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <div className="flex items-center gap-3 font-mono-hud text-[11px] tracking-[0.18em] uppercase">
            <span className="text-[#E95004]">CHAPTER 02 //</span>
            <span className="text-white">ATELIER DECONSTRUCTION ENGINE V4.2</span>
          </div>
          <div className="flex items-center gap-4 font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#9CA3AF]">
            <span>ALTITUDE: {altitude}%</span>
            <span>//</span>
            <span className="text-[#E5A93C]">CANVAS BIMODAL EXPLODED RIG</span>
          </div>
        </div>
      </div>

      {/* Main Title + Manifesto */}
      <div className="mx-auto max-w-[1440px] px-4 pt-12 pb-8 sm:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono-hud text-[11px] tracking-[0.2em] uppercase text-[#E95004]">
              EXPLODED ARCHITECTURE // 9 ELEMENTS + AI
            </p>
            <h2 className="mt-2 font-syne text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Deconstruct the stack.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-editorial-serif text-xl italic leading-relaxed text-[#D1D5DB] sm:text-2xl">
              Every 9LMNTS build separates surface craft from live revenue engines—giving you film-grade 3D motion up front and zero-commission automation underneath.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive HTML5 <canvas> Exploded Stage */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8">
        <div className="relative border border-white/[0.12] bg-[#050507]">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <canvas
              ref={canvasRef}
              aria-label="Interactive 3D Exploded Studio Console Monolith"
              className="h-full w-full block"
            />

            {/* Self-Drawing SVG Callout Leader Overlay (activates as separation increases) */}
            <svg
              viewBox="0 0 1200 675"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              {/* Layer 01 Callout */}
              <g
                style={{
                  opacity: Math.max(0.25, Math.min(1, altitude / 60)),
                  transition: 'opacity 180ms ease',
                }}
              >
                <polyline
                  points="266,165 320,165 385,220"
                  fill="none"
                  stroke="#E5A93C"
                  strokeWidth="1.5"
                />
                <circle cx="385" cy="220" r="4" fill="#FF5500" />
                <rect x="34" y="138" width="232" height="46" fill="rgba(6,6,8,0.88)" stroke="rgba(229,169,60,0.45)" />
                <text x="46" y="157" fill="#E5A93C" fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="1.3">
                  LAYER_01 // UI CHASSIS
                </text>
                <text x="46" y="174" fill="#F3F4F6" fontSize="11" fontFamily="Plus Jakarta Sans, sans-serif">
                  Solarium 2.5D Scrollytelling
                </text>
              </g>

              {/* Layer 02 Callout */}
              <g
                style={{
                  opacity: Math.max(0.2, Math.min(1, (altitude - 10) / 60)),
                  transition: 'opacity 180ms ease',
                }}
              >
                <polyline
                  points="920,245 855,245 770,315"
                  fill="none"
                  stroke="#FF5500"
                  strokeWidth="1.5"
                />
                <circle cx="770" cy="315" r="4" fill="#FF5500" />
                <rect x="920" y="218" width="246" height="46" fill="rgba(6,6,8,0.88)" stroke="rgba(255,85,0,0.5)" />
                <text x="932" y="237" fill="#FF781F" fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="1.3">
                  LAYER_02 // PAYPAL V2 PLATE
                </text>
                <text x="932" y="254" fill="#F3F4F6" fontSize="11" fontFamily="Plus Jakarta Sans, sans-serif">
                  0%-Fee Checkout &amp; 4× Split
                </text>
              </g>

              {/* Layer 03 Callout */}
              <g
                style={{
                  opacity: Math.max(0.2, Math.min(1, (altitude - 25) / 60)),
                  transition: 'opacity 180ms ease',
                }}
              >
                <polyline
                  points="280,515 360,515 510,430"
                  fill="none"
                  stroke="#E5A93C"
                  strokeWidth="1.5"
                />
                <circle cx="510" cy="430" r="4" fill="#E5A93C" />
                <rect x="34" y="488" width="246" height="46" fill="rgba(6,6,8,0.88)" stroke="rgba(255,255,255,0.22)" />
                <text x="46" y="507" fill="#9CA3AF" fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="1.3">
                  LAYER_03 // GEMINI DSP CORE
                </text>
                <text x="46" y="524" fill="#F3F4F6" fontSize="11" fontFamily="Plus Jakarta Sans, sans-serif">
                  Voice Reception &amp; CRM Sync
                </text>
              </g>
            </svg>

            {/* Bottom-Left Stage Status Overlay */}
            <div className="pointer-events-none absolute bottom-4 left-4 border border-white/15 bg-[#060608]/85 px-3.5 py-2 backdrop-blur-md sm:bottom-6 sm:left-6">
              <p className="font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#E5A93C]">
                {activePreset.label}
              </p>
              <p className="mt-0.5 text-xs text-[#D1D5DB]">{activePreset.note}</p>
            </div>
          </div>

          {/* Interactive Deconstruction Altitude Control Bar */}
          <div className="grid grid-cols-1 gap-4 border-t border-white/[0.1] bg-[#0B0B0F] p-5 lg:grid-cols-12 lg:items-center">
            <div className="flex flex-wrap items-center gap-3 lg:col-span-5">
              <div className="flex items-center gap-2 font-mono-hud text-[11px] tracking-[0.16em] uppercase text-white">
                <Sliders className="h-3.5 w-3.5 text-[#E95004]" />
                <span>DECONSTRUCTION ALTITUDE</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={altitude}
                aria-label="Deconstruction Altitude Slider"
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setManualOverride(true);
                  setAltitude(val);
                  if (val < 20) setMode('assembled');
                  else if (val < 65) setMode('baffle');
                  else if (val < 90) setMode('thermal');
                  else setMode('exploded');
                }}
                className="h-1.5 flex-1 cursor-pointer appearance-none bg-white/15 accent-[#E95004]"
              />
              <span className="w-12 text-right font-mono-hud text-xs font-bold text-[#FF781F]">
                {altitude}%
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2 lg:col-span-7">
              {MODE_PRESETS.map((preset) => {
                const active = preset.id === mode;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => {
                      setManualOverride(true);
                      setMode(preset.id);
                      setAltitude(preset.altitude);
                    }}
                    className={`cursor-pointer border px-3 py-2 font-mono-hud text-[10px] tracking-[0.14em] uppercase transition-colors ${
                      active
                        ? 'border-[#E95004] bg-[#E95004] text-white'
                        : 'border-white/[0.12] bg-[#060608] text-[#9CA3AF] hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}

              {manualOverride && (
                <button
                  type="button"
                  onClick={() => setManualOverride(false)}
                  className="cursor-pointer border border-[#E5A93C]/40 px-2.5 py-2 font-mono-hud text-[10px] uppercase text-[#E5A93C] hover:bg-[#E5A93C]/10"
                >
                  Auto-Scroll
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 9 Elements + 4 Practical Guardrails Hairline Matrix */}
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8">
        <div className="grid grid-cols-1 border border-white/[0.08] bg-[#09090D] lg:grid-cols-12">
          {/* 9 Elements Grid */}
          <div className="border-b border-white/[0.08] p-6 lg:col-span-8 lg:border-r lg:border-b-0 lg:p-8">
            <div className="flex items-center gap-2 font-mono-hud text-[11px] tracking-[0.18em] uppercase text-[#E5A93C]">
              <Layers className="h-3.5 w-3.5" />
              <span>THE 9 ELEMENTS ARCHITECTURAL MATRIX</span>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-px bg-white/[0.08] sm:grid-cols-3">
              {NINE_ELEMENTS.map((el) => (
                <div key={el.num} className="bg-[#08080C] p-4">
                  <span className="font-mono-hud text-[10px] text-[#E95004]">{el.num} //</span>
                  <h3 className="mt-1 font-syne text-sm font-bold text-white">{el.name}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#9CA3AF]">{el.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Practical Guardrails */}
          <div className="flex flex-col justify-between p-6 lg:col-span-4 lg:p-8">
            <div>
              <div className="flex items-center gap-2 font-mono-hud text-[11px] tracking-[0.18em] uppercase text-[#E95004]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>4 PRACTICAL GUARDRAILS</span>
              </div>
              <div className="mt-5 divide-y divide-white/[0.08] border border-white/[0.08]">
                {PRACTICAL_GUARDRAILS.map((g) => (
                  <div key={g.code} className="p-3.5">
                    <p className="font-mono-hud text-[10px] text-[#E5A93C]">{g.code}</p>
                    <p className="mt-0.5 text-sm font-bold text-white">{g.title}</p>
                    <p className="mt-0.5 text-xs text-[#9CA3AF]">{g.desc}</p>
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
