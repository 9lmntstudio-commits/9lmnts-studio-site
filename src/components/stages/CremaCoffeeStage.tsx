import { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ScrollScrubVideo } from '../ScrollScrubVideo';

interface FlavorOption {
  id: string;
  name: string;
  origin: string;
  temp: string;
  notes: string;
  tint: string;
  pillColor: string;
}

const FLAVORS: FlavorOption[] = [
  {
    id: 'espresso',
    name: 'Single-Origin Espresso',
    origin: 'Huila, Colombia · 1,850m',
    temp: '93°C · 9 Bar',
    notes: 'Dark cacao nib, scorched caramel, velvety hazelnut crema.',
    tint: '#3D2214',
    pillColor: '#2C1A12',
  },
  {
    id: 'matcha',
    name: 'Kyoto Oat Matcha',
    origin: 'Uji, Japan · First Harvest',
    temp: 'Iced · Whisked 78°C',
    notes: 'Ceremonial shade-grown tencha over micro-milled oat milk.',
    tint: '#5F734C',
    pillColor: '#4B5E39',
  },
  {
    id: 'cardamom',
    name: 'Cardamom Cold Brew',
    origin: 'Sidama, Ethiopia · 18-Hr Steep',
    temp: '4°C · Nitro Draft',
    notes: 'Crushed green cardamom pod, wild bergamot, crisp dark berry.',
    tint: '#8B4A21',
    pillColor: '#7A3E1A',
  },
  {
    id: 'cortado',
    name: 'Velvet Cortado',
    origin: 'Antigua, Guatemala · Washed',
    temp: '62°C · Silky Microfoam',
    notes: '1:1 double ristretto balanced with sweet grass-fed steamed milk.',
    tint: '#B57B4C',
    pillColor: '#8B562E',
  },
];

export function CremaCoffeeStage() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<FlavorOption>(FLAVORS[0]);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      id="stage-crema"
      ref={stageRef}
      aria-label="Stage 02 — Crema Coffee Pour / Play"
      className="relative overflow-hidden bg-[#FFFFFF] px-4 py-20 text-[#2C1A12] sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Authentic Client Brand Firewall Tag */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#2C1A12]/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#2C1A12] px-3 py-1 font-telemetry text-[11px] font-semibold tracking-[0.14em] uppercase text-white">
              Stage 02 · Crema Roastery
            </span>
            <span className="text-sm font-semibold tracking-wide text-[#5C3D2E]">
              GALLERY WHITE POUR / PLAY
            </span>
          </div>
          <span className="font-telemetry text-xs text-[#6B574B]">
            {selectedFlavor.origin} · {selectedFlavor.temp}
          </span>
        </div>

        {/* Z-Axis Layering Stage: Oversized Background Type (z-0) + Centered Pour Viewport (z-10) */}
        <div className="relative flex min-h-[540px] flex-col items-center justify-center py-8 sm:min-h-[620px]">
          {/* z-0 Oversized Background Typography */}
          <div
            aria-hidden="true"
            className="pointer-events-none relative z-0 w-full select-none text-center"
          >
            <h2 className="font-display text-[clamp(3.3rem,12.5vw,10.5rem)] font-extrabold tracking-[-0.04em] leading-[0.86] uppercase text-[#121212]/90">
              MADE TO
              <span className="block font-editorial text-[clamp(3.6rem,13vw,11rem)] font-normal italic lowercase tracking-[-0.02em] text-[#2C1A12]/80">
                move
              </span>
              <span className="block">YOU.</span>
            </h2>
          </div>

          {/* z-10 Centered Transparent-Feel Liquid Pour Scroll Viewport */}
          <motion.div
            key={selectedFlavor.id}
            initial={{ opacity: 0.9, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="relative z-10 -mt-20 w-full max-w-[320px] sm:-mt-32 sm:max-w-[390px] md:-mt-40 md:max-w-[420px]"
          >
            <div className="overflow-hidden rounded-[2.25rem] bg-white p-2 shadow-[0_32px_68px_rgba(44,26,18,0.16)]">
              <ScrollScrubVideo
                src="/assets/crema-pour.mp4"
                fallbackImg="/assets/crema-pour.jpg"
                fallbackAlt="Glass espresso shot pouring silky crema over pure white gallery background"
                progress={scrollYProgress}
                tintColor={selectedFlavor.tint}
                slotLabel="CREMA-POUR.MP4"
                className="aspect-[4/5] rounded-[1.8rem] bg-[#FBF9F6]"
              />
            </div>

            {/* Soft Studio Contact Shadow */}
            <div
              className="mx-auto mt-5 h-6 w-3/4 rounded-full studio-soft-floor blur-md"
              aria-hidden="true"
            />
          </motion.div>
        </div>

        {/* Bottom Flavor-Switcher Pill Bar & Live Tasting Readout */}
        <div className="relative z-20 mx-auto mt-6 flex max-w-3xl flex-col items-center gap-5 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-[#F5F2EC] p-2">
            {FLAVORS.map((flavor) => {
              const active = flavor.id === selectedFlavor.id;
              return (
                <button
                  key={flavor.id}
                  type="button"
                  onClick={() => setSelectedFlavor(flavor)}
                  className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition-all sm:px-5 sm:py-2.5 sm:text-sm ${
                    active
                      ? 'text-white shadow-sm'
                      : 'bg-transparent text-[#5C3D2E] hover:bg-white'
                  }`}
                  style={active ? { backgroundColor: flavor.pillColor } : undefined}
                >
                  {flavor.name}
                </button>
              );
            })}
          </div>

          <p className="max-w-lg text-sm leading-relaxed text-[#5C3D2E] sm:text-base">
            <span className="font-semibold text-[#2C1A12]">
              {selectedFlavor.name}:
            </span>{' '}
            {selectedFlavor.notes}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 font-telemetry text-[11px] uppercase tracking-wider text-[#5C3D2E]">
            <span className="rounded-full border border-[#2C1A12]/15 bg-[#F5F2EC] px-3.5 py-1.5 font-semibold text-[#2C1A12]">
              Kremas &amp; Specialty Roasters Demo
            </span>
            <span className="rounded-full bg-[#2C1A12] px-3.5 py-1.5 font-semibold text-white">
              PayPal Complete Payments · Pay Later 4x · 0% App Fee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
