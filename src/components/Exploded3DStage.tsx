import React, { useEffect, useRef, useState } from 'react';

const LAYERS = [
  {
    num: '01',
    title: '24/7 AI Receptionist & Missed-Call SMS',
    tag: 'TOP LAYER · SPEED-TO-LEAD',
    metric: '< 4 sec response · Captures after-hours calls & DMs',
    zBase: 135,
    bg: 'bg-white/95 text-[#121212] border-[#121212]/12',
    accent: '#FF5500',
  },
  {
    num: '02',
    title: '0%-Commission Checkout & Deposit Lock',
    tag: 'PAYMENT LAYER · DIRECT PAYOUTS',
    metric: 'Apple Pay · PayPal · Pay-in-4 · 50% upfront deposits',
    zBase: 45,
    bg: 'bg-[#121212] text-white border-white/15',
    accent: '#FF5500',
  },
  {
    num: '03',
    title: 'Interactive Menu, Quote & Catering Engine',
    tag: 'CONVERSION LAYER · ZERO PDF FRICTION',
    metric: '15–300+ guest & job-size sliders built for mobile',
    zBase: -45,
    bg: 'bg-white/95 text-[#121212] border-[#121212]/12',
    accent: '#121212',
  },
  {
    num: '04',
    title: 'Bespoke Brand Identity & Owner Phone Cockpit',
    tag: 'FOUNDATION LAYER · 100% CLIENT OWNED',
    metric: '1-tap sold-out toggle · Live order & payout ledger',
    zBase: -135,
    bg: 'bg-[#EAE6DF] text-[#121212] border-[#121212]/15',
    accent: '#FF5500',
  },
];

export const Exploded3DStage: React.FC<{ onBook?: () => void }> = ({ onBook }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [explode, setExplode] = useState(0.75);
  const [tilt, setTilt] = useState({ rx: 22, ry: -24 });
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height * 0.45)));
      setExplode(Number(progress.toFixed(2)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - box.left) / box.width - 0.5;
    const ny = (e.clientY - box.top) / box.height - 0.5;
    setTilt({
      rx: 22 - ny * 18,
      ry: -24 + nx * 26,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="relative w-full overflow-hidden border-y border-[#121212]/10 bg-[#F7F5F0] py-24 text-[#121212]"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="font-mono-hud text-xs font-bold tracking-[0.16em] uppercase text-[#FF5500]">
              Interactive 3D System Deconstruction
            </span>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#121212] sm:text-5xl">
              Not a Brochure Website.{' '}
              <span className="font-editorial-serif font-normal italic text-[#FF5500]">
                A 4-Layer Revenue Engine.
              </span>
            </h2>
          </div>

          {/* Interactive Explosion Controls */}
          <div className="flex flex-wrap items-center gap-2 rounded-full bg-[#EAE6DF] p-1.5">
            <button
              type="button"
              onClick={() => setExplode(0.15)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition ${
                explode < 0.35 ? 'bg-[#121212] text-white' : 'text-[#474747] hover:text-[#121212]'
              }`}
            >
              Assembled
            </button>
            <button
              type="button"
              onClick={() => setExplode(0.85)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-bold transition ${
                explode >= 0.35 ? 'bg-[#FF5500] text-white' : 'text-[#474747] hover:text-[#121212]'
              }`}
            >
              Exploded 3D ({Math.round(explode * 100)}%)
            </button>
          </div>
        </div>

        {/* 3D Perspective Stage + Layer Inspector */}
        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div
            onPointerMove={handlePointerMove}
            onPointerLeave={() => setTilt({ rx: 22, ry: -24 })}
            className="relative flex h-[460px] items-center justify-center rounded-[32px] bg-white p-6 shadow-[0_24px_60px_-15px_rgba(18,18,18,0.08)] sm:h-[520px] lg:col-span-7"
            style={{ perspective: '1400px' }}
          >
            {/* Ambient Floor Shadow */}
            <div
              className="pointer-events-none absolute bottom-10 h-16 w-72 rounded-full bg-[#121212]/15 blur-2xl transition-transform duration-300"
              style={{ transform: `scale(${1.15 - explode * 0.25})` }}
            />

            {/* True 3D Stacked Isometric Slab Assembly */}
            <div
              className="relative h-64 w-72 transition-transform duration-200 ease-out sm:w-88"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              }}
            >
              {LAYERS.map((layer, idx) => {
                const spread = 0.25 + explode * 1.15;
                const zOffset = layer.zBase * spread;
                const yOffset = (idx - 1.5) * (24 + explode * 44);
                const isSelected = activeLayer === idx;

                return (
                  <button
                    key={layer.num}
                    type="button"
                    onClick={() => setActiveLayer(idx)}
                    style={{
                      transform: `translate3d(0px, ${yOffset}px, ${zOffset}px) scale(${isSelected ? 1.04 : 1})`,
                      transformStyle: 'preserve-3d',
                    }}
                    className={`absolute inset-x-0 top-1/2 -translate-y-1/2 cursor-pointer rounded-2xl border p-5 text-left shadow-[0_22px_45px_-12px_rgba(18,18,18,0.22)] transition-all duration-300 ${layer.bg} ${
                      isSelected ? 'ring-2 ring-[#FF5500]' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-hud text-[10px] font-bold tracking-[0.16em] uppercase text-[#FF5500]">
                        LAYER {layer.num}
                      </span>
                      <span className="font-mono-hud text-[10px] opacity-60">
                        Z:{Math.round(zOffset)}px
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm font-extrabold sm:text-base">{layer.title}</p>
                    <p className="mt-1 text-xs opacity-75">{layer.metric}</p>
                  </button>
                );
              })}
            </div>

            <span className="font-mono-hud absolute bottom-4 left-6 text-[10px] tracking-wider uppercase text-[#474747]">
              Move cursor to orbit · Scroll or click layers to inspect
            </span>
          </div>

          {/* Right 5 Columns: Interactive Layer Breakdown */}
          <div className="space-y-3 lg:col-span-5">
            {LAYERS.map((layer, idx) => {
              const isSelected = activeLayer === idx;
              return (
                <div
                  key={layer.num}
                  onClick={() => setActiveLayer(idx)}
                  className={`cursor-pointer rounded-2xl p-5 transition ${
                    isSelected
                      ? 'bg-[#121212] text-white shadow-lg'
                      : 'bg-white text-[#121212] hover:bg-[#EAE6DF]/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono-hud text-[11px] font-bold tracking-widest text-[#FF5500]">
                      {layer.tag}
                    </span>
                    <span className="font-mono-hud text-xs font-bold opacity-60">/{layer.num}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-extrabold">{layer.title}</h3>
                  <p className={`mt-1 text-xs ${isSelected ? 'text-white/75' : 'text-[#474747]'}`}>
                    {layer.metric}
                  </p>
                </div>
              );
            })}

            <div className="pt-3">
              <button
                type="button"
                onClick={onBook}
                className="w-full cursor-pointer rounded-full bg-[#FF5500] py-4 text-sm font-bold text-white shadow-[0_14px_30px_-8px_rgba(255,85,0,0.45)] transition hover:bg-[#E04B00]"
              >
                Deploy All 4 Layers in 48 Hrs – 7 Days →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exploded3DStage;
