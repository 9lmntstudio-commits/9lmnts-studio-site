import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { Check, Minus, Plus, ShoppingBag, X } from 'lucide-react';
import { ScrollScrubVideo } from '../ScrollScrubVideo';

const SHAWARMA_CHAPTERS = [
  {
    code: '01. THE STACK',
    heading: 'Marinated 24 Hours in Roasted Garlic & Sumac.',
    body: 'Hand-layered Ontario halal chicken thigh & sirloin mounted on vertical rotisserie steel—basted cleanly over open cedar heat.',
    heatNote: 'Temp: 385°F Slow Turn',
  },
  {
    code: '02. THE SLICE',
    heading: 'Razor-Thin Caramelized Ribbons to Order.',
    body: 'Every scroll frame shaves crisp golden edges directly onto toasted Lebanese mountain bread. Zero microwave holding trays.',
    heatNote: 'Cut Time: 14 Seconds',
  },
  {
    code: '03. THE WRAP',
    heading: 'Toum, Wild Turnip, Pomegranate Molasses.',
    body: 'Rolled tight in wax parchment for 1-Tap counter pickup—keeping 100% of every check instead of paying 30% delivery-app fees.',
    heatNote: 'Direct Checkout · 0% App Cut',
  },
];

const SHAWARMA_MENU = [
  {
    id: 'wrap-byward',
    name: 'ByWard Palace Chicken Shawarma Wrap',
    desc: 'House whip toum, pickled wild turnip, parsley, pressed saj.',
    price: 13.5,
  },
  {
    id: 'platter-rideau',
    name: 'Rideau Mixed Grill Platter',
    desc: 'Dual chicken + beef shawarma, saffron rice, roasted potatoes, salad.',
    price: 19.95,
  },
  {
    id: 'sides-toum',
    name: 'Whipped Cedar Toum + Warm Pita Trio',
    desc: 'Small-batch whipped garlic emulsion with blistered flatbread.',
    price: 5.5,
  },
];

export function ShawarmaStage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [chapterIdx, setChapterIdx] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cart, setCart] = useState<Record<string, number>>({
    'wrap-byward': 1,
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const nextIdx = v < 0.36 ? 0 : v < 0.7 ? 1 : 2;
    if (nextIdx !== chapterIdx) {
      setChapterIdx(nextIdx);
    }
  });

  const activeChapter = SHAWARMA_CHAPTERS[chapterIdx];

  const updateQty = (id: string, delta: number) => {
    setOrderPlaced(false);
    setCart((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta);
      return { ...prev, [id]: next };
    });
  };

  const subtotal = SHAWARMA_MENU.reduce(
    (sum, item) => sum + (cart[item.id] ?? 0) * item.price,
    0
  );
  const totalCount = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <section
      id="stage-shawarma"
      ref={sectionRef}
      aria-label="Stage 01 — Ottawa Shawarma"
      className="relative bg-[#FAF6EF] text-[#3A190C] lg:h-[230vh]"
    >
      {/* Sticky editorial split theater on desktop, clean flowing stack on mobile */}
      <div className="mx-auto flex max-w-6xl flex-col px-4 py-14 sm:px-8 lg:sticky lg:top-20 lg:min-h-[calc(100vh-5rem)] lg:justify-center lg:py-8">
        {/* Authentic Client Brand Firewall Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#9E3D16]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#9E3D16] px-3 py-1 font-telemetry text-[11px] font-semibold tracking-[0.14em] uppercase text-[#FAF6EF]">
              Stage 01 · Client Brand Firewall
            </span>
            <span className="text-sm font-bold tracking-wide uppercase text-[#9E3D16]">
              BYWARD CEDAR SHAWARMA
            </span>
          </div>
          <span className="font-telemetry text-xs text-[#6B3A26]">
            OTTAWA HOSPITALITY · SCROLL CARVE DEMO
          </span>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Sticky Story Column */}
          <div className="lg:col-span-5">
            {/* Stepper Pills (Interactive on Mobile + Desktop Click) */}
            <div className="mb-6 flex flex-wrap gap-2">
              {SHAWARMA_CHAPTERS.map((ch, idx) => {
                const active = idx === chapterIdx;
                return (
                  <button
                    key={ch.code}
                    type="button"
                    onClick={() => setChapterIdx(idx)}
                    className={`cursor-pointer rounded-full px-3.5 py-1.5 font-telemetry text-xs font-semibold transition-all ${
                      active
                        ? 'bg-[#9E3D16] text-[#FAF6EF] shadow-sm'
                        : 'bg-[#EDE3D5] text-[#6B3A26] hover:bg-[#E4D5C1]'
                    }`}
                  >
                    {ch.code}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.code}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-telemetry text-xs font-semibold tracking-[0.18em] uppercase text-[#9E3D16]">
                  {activeChapter.code} · {activeChapter.heatNote}
                </p>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#2A1006] sm:text-5xl">
                  {activeChapter.heading}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#5F3727]">
                  {activeChapter.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Client Menu CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setOrderPlaced(false);
                  setDrawerOpen(true);
                }}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-[#9E3D16] px-7 py-4 text-sm font-bold tracking-wide text-[#FAF6EF] shadow-[0_14px_30px_rgba(158,61,22,0.28)] transition-all hover:scale-[1.02] hover:bg-[#823010]"
              >
                <ShoppingBag className="h-4 w-4" />
                Order Now ({totalCount}) · Direct Pickup
              </button>
              <span className="font-telemetry text-xs text-[#6B3A26]">
                PayPal e-Commerce · Apple Pay · 0% App Fee
              </span>
            </div>
          </div>

          {/* Right Scroll-Scrubbed Rotisserie Viewport */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[2.25rem] bg-[#F2E9DB] p-3 shadow-[0_28px_60px_rgba(58,25,12,0.12)] sm:p-4">
              <ScrollScrubVideo
                src="/assets/shawarma-carve.mp4"
                fallbackImg="/assets/shawarma-carve.jpg"
                fallbackAlt="Freshly carved stacked rotisserie chicken shawarma ribbons in warm studio daylight"
                progress={scrollYProgress}
                slotLabel="SHAWARMA-CARVE.MP4"
                className="aspect-[4/3] rounded-[1.75rem] bg-[#EADBC8]"
              />
              {/* Floating Terracotta Sequence Caption */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 pb-1 font-telemetry text-[11px] uppercase tracking-wider text-[#6B3A26]">
                <span>Active Step: {activeChapter.code}</span>
                <span>Drop `/assets/shawarma-carve.mp4` to auto-scrub video</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-Out Mobile Menu Ordering Drawer (Client Terracotta Brand Palette) */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-[90] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-[#2A1006]/45 backdrop-blur-sm"
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="ByWard Cedar Shawarma Mobile Order Drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#FAF6EF] p-6 text-[#2A1006] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#9E3D16]/15 pb-4">
                <div>
                  <p className="font-telemetry text-[11px] font-semibold tracking-[0.16em] uppercase text-[#9E3D16]">
                    Direct Counter Pickup · 12 Min
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-extrabold">
                    ByWard Cedar Menu
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close shawarma menu"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#EDE3D5] text-[#2A1006] hover:bg-[#9E3D16] hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 flex-1 space-y-3 overflow-y-auto pr-1">
                {SHAWARMA_MENU.map((item) => {
                  const qty = cart[item.id] ?? 0;
                  return (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(58,25,12,0.05)]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="text-sm font-bold text-[#2A1006]">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-[#6B3A26]">
                            {item.desc}
                          </p>
                        </div>
                        <span className="font-telemetry text-sm font-bold text-[#9E3D16]">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="font-telemetry text-[10px] uppercase tracking-wider text-[#6B3A26]/70">
                          Fresh Off Spit
                        </span>
                        <div className="flex items-center gap-2 rounded-full bg-[#FAF6EF] p-1">
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, -1)}
                            aria-label={`Remove one ${item.name}`}
                            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white text-[#2A1006] shadow-xs hover:bg-[#EDE3D5]"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-5 text-center font-telemetry text-xs font-bold">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, 1)}
                            aria-label={`Add one ${item.name}`}
                            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[#9E3D16] text-white shadow-xs hover:bg-[#823010]"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 border-t border-[#9E3D16]/15 pt-4">
                <div className="mb-3 flex items-center justify-between text-sm">
                  <span className="text-[#6B3A26]">Direct Total (0% Delivery Cut)</span>
                  <span className="font-telemetry text-lg font-bold text-[#2A1006]">
                    ${subtotal.toFixed(2)} CAD
                  </span>
                </div>

                {orderPlaced ? (
                  <div className="flex items-center justify-center gap-2 rounded-full bg-[#2E5A36] py-3.5 text-sm font-bold text-white">
                    <Check className="h-4 w-4" />
                    Order Sent to Kitchen · Ticket #OW-408
                  </div>
                ) : (
                  <button
                    type="button"
                    disabled={subtotal <= 0}
                    onClick={() => setOrderPlaced(true)}
                    className="w-full cursor-pointer rounded-full bg-[#9E3D16] py-3.5 text-sm font-bold text-[#FAF6EF] transition-colors hover:bg-[#823010] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Complete 1-Tap Demo Order · ${subtotal.toFixed(2)}
                  </button>
                )}
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
