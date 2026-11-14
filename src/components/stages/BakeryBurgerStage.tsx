import { useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';
import { ScrollScrubVideo } from '../ScrollScrubVideo';

const PASTRY_CARDS = [
  {
    id: 'pistachio',
    name: 'Roasted Pistachio Croissant',
    batch: 'Daily Bake · 07:30 AM',
    price: '$6.50',
    accent: '#6F8248',
    note: '27-layer cultured Normandy butter lamination, Bronte pistachio praline core.',
  },
  {
    id: 'basque',
    name: 'Caramelized Burnt Basque',
    batch: 'Small Batch · 12 Slices',
    price: '$9.50',
    accent: '#8E4B23',
    note: 'Blistered dark-sugar top with molten Madagascar vanilla bean center.',
  },
  {
    id: 'kouign',
    name: 'Brown Butter Kouign-Amann',
    batch: 'Warm Shelf · Noon Drop',
    price: '$7.00',
    accent: '#B07428',
    note: 'Salted caramel base crust folded with toasted brown butter sugar.',
  },
];

const BURGER_LAYERS = [
  {
    step: '01',
    title: 'Toasted Potato Brioche Crown',
    detail: 'Pressed in clarified butter with toasted white & black sesame.',
    offset: -34,
  },
  {
    step: '02',
    title: 'Double Wagyu Smash + Aged Cheddar',
    detail: 'Lacy-edged Ontario beef patties seared at 500°F with 2-year cave cheddar.',
    offset: -12,
  },
  {
    step: '03',
    title: 'Charred Scallion Relish & Tarragon Emulsion',
    detail: 'Bright dill pickle crunch balanced against smoky peppercorn glaze.',
    offset: 12,
  },
  {
    step: '04',
    title: 'Rosemary Shoestring Fries + Spiced Cola',
    detail: 'Crispy twice-cooked russets tossed in flaky sea salt & botanical cola.',
    offset: 34,
  },
];

export function BakeryBurgerStage() {
  const burgerRef = useRef<HTMLDivElement | null>(null);
  const [selectedPastry, setSelectedPastry] = useState(PASTRY_CARDS[0]);
  const [exploded, setExploded] = useState(false);

  // Subtle 3D tilt for Bloom Bakes pastry showcase
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateY = useSpring(useTransform(cardX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 240,
    damping: 22,
  });
  const rotateX = useSpring(useTransform(cardY, [-0.5, 0.5], [10, -10]), {
    stiffness: 240,
    damping: 22,
  });

  const { scrollYProgress } = useScroll({
    target: burgerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      id="stage-bakery"
      aria-label="Stage 04 — Bakery & QSR Pop-Up Menu and Exploding Combo"
      className="bg-[#F7F5F0] px-4 py-20 text-[#3B2618] sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-20">
        {/* Top Part: Bloom Bakes 3D Pop-Up Dessert Menu */}
        <div>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#3B2618]/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#3B2618] px-3 py-1 font-telemetry text-[11px] font-semibold tracking-[0.14em] uppercase text-[#F7F5F0]">
                Stage 04 · Bloom Bakes &amp; QSR
              </span>
              <span className="text-sm font-semibold tracking-wide uppercase text-[#6D4D37]">
                3D POP-UP PASTRY + EXPLODING COMBO
              </span>
            </div>
            <span className="font-telemetry text-xs text-[#6D4D37]">
              CLIENT FIREWALL · WARM PATISSERIE &amp; SMASH QSR
            </span>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* 3D Tilt Pastry Stage */}
            <div className="lg:col-span-6">
              <motion.div
                onPointerMove={(e) => {
                  if (e.pointerType === 'touch') return;
                  const rect = e.currentTarget.getBoundingClientRect();
                  cardX.set((e.clientX - rect.left) / rect.width - 0.5);
                  cardY.set((e.clientY - rect.top) / rect.height - 0.5);
                }}
                onPointerLeave={() => {
                  cardX.set(0);
                  cardY.set(0);
                }}
                style={{ rotateX, rotateY, transformPerspective: 1100 }}
                className="relative overflow-hidden rounded-[2.25rem] bg-white p-3 studio-contact-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#F2EDE3]">
                  <img
                    src="/assets/bakery-pastry.jpg"
                    alt="Bloom Bakes pistachio croissant and caramelized Basque cheesecake in daylight"
                    className="h-full w-full object-cover"
                  />
                  {/* Floating Pop-Up Price Pill */}
                  <div className="absolute top-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#3B2618] shadow-md backdrop-blur-md">
                    <span
                      className="mr-2 inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: selectedPastry.accent }}
                    />
                    {selectedPastry.name} · {selectedPastry.price}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Interactive Pop-Up Dessert Menu Stack */}
            <div className="lg:col-span-6">
              <p className="font-telemetry text-xs font-semibold tracking-[0.16em] uppercase text-[#6F8248]">
                Bloom Bakes · Morning Menu
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold text-[#2A190E] sm:text-5xl">
                Pastries that <span className="font-editorial font-normal italic">pop off</span> the tray.
              </h2>

              <div className="mt-6 space-y-3">
                {PASTRY_CARDS.map((card) => {
                  const active = selectedPastry.id === card.id;
                  return (
                    <motion.button
                      key={card.id}
                      type="button"
                      onClick={() => setSelectedPastry(card)}
                      whileHover={{ y: -4, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                      className={`w-full cursor-pointer rounded-3xl p-5 text-left transition-all ${
                        active
                          ? 'bg-white shadow-[0_20px_45px_rgba(59,38,24,0.1)]'
                          : 'bg-[#EFEAE1] hover:bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span
                            className="font-telemetry text-[11px] font-semibold uppercase tracking-wider"
                            style={{ color: card.accent }}
                          >
                            {card.batch}
                          </span>
                          <h3 className="mt-1 text-base font-bold text-[#2A190E] sm:text-lg">
                            {card.name}
                          </h3>
                        </div>
                        <span className="rounded-full bg-[#F7F5F0] px-3.5 py-1 font-telemetry text-sm font-bold text-[#3B2618]">
                          {card.price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#6D4D37]">
                        {card.note}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part: Exploding Burger Combo Assembly Sequence */}
        <div
          ref={burgerRef}
          className="rounded-[2.5rem] bg-white p-6 shadow-[0_28px_70px_rgba(18,18,18,0.06)] sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F5F0] px-3.5 py-1.5 font-telemetry text-[11px] font-semibold uppercase tracking-wider text-[#8E4B23]">
                <Layers className="h-3.5 w-3.5" />
                QSR Layer Assembly Sequence
              </span>
              <h3 className="mt-4 font-display text-3xl font-extrabold text-[#121212] sm:text-4xl">
                The Exploding Burger Combo.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#474747] sm:text-base">
                Scroll or toggle layer separation to break down toppings, macros, and upsell sides right inside the product hero.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setExploded((prev) => !prev)}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#3B2618] px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-[#533622]"
                >
                  <Sparkles className="h-4 w-4 text-[#F3B664]" />
                  {exploded ? 'Assemble Combo Stack' : 'Explode Combo Layers'}
                </button>
              </div>

              {/* Animated Layer Breakdown Stack */}
              <div className="mt-7 space-y-2.5">
                {BURGER_LAYERS.map((layer, index) => (
                  <motion.div
                    key={layer.step}
                    animate={{
                      y: exploded ? layer.offset * 0.25 : 0,
                      x: exploded ? (index % 2 === 0 ? 6 : -4) : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className={`rounded-2xl px-4 py-3 transition-colors ${
                      exploded ? 'bg-[#F7F5F0]' : 'bg-[#FAF8F5]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-telemetry text-xs font-bold text-[#8E4B23]">
                        {layer.step}
                      </span>
                      <p className="text-xs font-bold text-[#121212] sm:text-sm">
                        {layer.title}
                      </p>
                    </div>
                    {exploded && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-1 pl-7 text-xs text-[#474747]"
                      >
                        {layer.detail}
                      </motion.p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.div
                animate={{ scale: exploded ? 1.03 : 1 }}
                transition={{ type: 'spring', stiffness: 240, damping: 24 }}
                className="relative"
              >
                <ScrollScrubVideo
                  src="/assets/burger-explode.mp4"
                  fallbackImg="/assets/burger-combo.jpg"
                  fallbackAlt="Exploded double smash burger combo with fries and cold drink hovering cleanly in warm studio daylight"
                  progress={scrollYProgress}
                  slotLabel="BURGER-EXPLODE.MP4"
                  className="aspect-[16/11] rounded-[2rem] bg-[#F7F5F0]"
                />
                <div
                  className="mx-auto mt-4 h-6 w-3/4 rounded-full studio-soft-floor blur-md"
                  aria-hidden="true"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
