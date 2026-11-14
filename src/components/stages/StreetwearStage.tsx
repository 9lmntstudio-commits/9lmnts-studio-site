import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Minus, Plus, ShoppingBag, X } from 'lucide-react';

export interface GarmentPiece {
  id: string;
  name: string;
  tag: string;
  price: number;
  img: string;
}

const GARMENTS: GarmentPiece[] = [
  {
    id: 'hoodie-onyx',
    name: 'Heavyweight Box Hoodie',
    tag: '500GSM French Terry · Onyx',
    price: 120,
    img: '/assets/streetwear-hoodie.jpg',
  },
  {
    id: 'sling-rig',
    name: 'Tactical Crossbody Sling Rig',
    tag: 'Ballistic Cordura · Gunmetal',
    price: 145,
    img: '/assets/streetwear-bag.jpg',
  },
  {
    id: 'tee-cream',
    name: 'Atelier Boxy Knit Tee',
    tag: '310GSM Combed Jersey · Cream',
    price: 75,
    img: '/assets/streetwear-tee.jpg',
  },
  {
    id: 'crew-slate',
    name: 'Washed Slate Crewneck',
    tag: 'Enzyme Garment Wash · Slate',
    price: 110,
    img: '/assets/streetwear-crewneck.jpg',
  },
  {
    id: 'cargo-olive',
    name: 'Technical Utility Cargo Pant',
    tag: 'Ripstop Articulated Knees · Ash',
    price: 165,
    img: '/assets/streetwear-cargos.jpg',
  },
];

const SIZES = ['S', 'M', 'L', 'XL'] as const;

interface CartLine {
  piece: GarmentPiece;
  size: (typeof SIZES)[number];
  qty: number;
}

interface StreetwearStageProps {
  onCursorBadgeChange: (badge: string | null) => void;
}

export function StreetwearStage({ onCursorBadgeChange }: StreetwearStageProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeSize, setActiveSize] = useState<(typeof SIZES)[number]>('L');
  const [checkedOut, setCheckedOut] = useState(false);
  const [cartLines, setCartLines] = useState<CartLine[]>([
    { piece: GARMENTS[0], size: 'L', qty: 1 },
  ]);

  const handleQuickAdd = (piece: GarmentPiece) => {
    setCheckedOut(false);
    setCartLines((prev) => {
      const idx = prev.findIndex(
        (line) => line.piece.id === piece.id && line.size === activeSize
      );
      if (idx >= 0) {
        return prev.map((line, i) =>
          i === idx ? { ...line, qty: line.qty + 1 } : line
        );
      }
      return [...prev, { piece, size: activeSize, qty: 1 }];
    });
    setCartOpen(true);
  };

  const adjustLine = (index: number, delta: number) => {
    setCheckedOut(false);
    setCartLines((prev) =>
      prev
        .map((line, i) =>
          i === index ? { ...line, qty: line.qty + delta } : line
        )
        .filter((line) => line.qty > 0)
    );
  };

  const subtotal = cartLines.reduce(
    (sum, line) => sum + line.piece.price * line.qty,
    0
  );
  const totalCount = cartLines.reduce((sum, line) => sum + line.qty, 0);

  return (
    <section
      id="stage-streetwear"
      aria-label="Stage 03 — Streetwear & Apparel Lookbook Rack"
      className="bg-[#FFFFFF] px-4 py-20 text-[#121212] sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Authentic Client Brand Firewall Header */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#121212]/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#121212] px-3 py-1 font-telemetry text-[11px] font-semibold tracking-[0.14em] uppercase text-white">
              Stage 03 · Atelier Lookbook
            </span>
            <span className="text-sm font-bold tracking-wider uppercase text-[#121212]">
              TRY THE LOOK // ARCHIVE 004
            </span>
          </div>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#F4F4F4] px-4 py-2 text-xs font-bold text-[#121212] transition-colors hover:bg-[#121212] hover:text-white"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Bag ({totalCount}) · ${subtotal}
          </button>
        </div>

        {/* Section Intro */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-telemetry text-xs font-semibold tracking-[0.16em] uppercase text-[#6E6E6E]">
              Interactive Garment Rack · 5 Pieces
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-[#121212] sm:text-5xl">
              Hover a Silhouette to Inspect.
            </h2>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-[#F5F5F5] p-1.5">
            <span className="px-2.5 font-telemetry text-[11px] font-semibold text-[#6E6E6E]">
              SIZE:
            </span>
            {SIZES.map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => setActiveSize(sz)}
                className={`cursor-pointer rounded-full px-3 py-1 font-telemetry text-xs font-bold transition-colors ${
                  activeSize === sz
                    ? 'bg-[#121212] text-white'
                    : 'text-[#474747] hover:text-[#121212]'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* 5-Piece Floating Garment Rack */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {GARMENTS.map((piece) => {
            const isHovered = hoveredId === piece.id;
            const isDimmed = hoveredId !== null && hoveredId !== piece.id;

            return (
              <motion.div
                key={piece.id}
                onMouseEnter={() => {
                  setHoveredId(piece.id);
                  onCursorBadgeChange(`Quick Add • $${piece.price}`);
                }}
                onMouseLeave={() => {
                  setHoveredId(null);
                  onCursorBadgeChange(null);
                }}
                animate={{
                  scale: isHovered ? 1.07 : isDimmed ? 0.97 : 1,
                  y: isHovered ? -12 : 0,
                  opacity: isDimmed ? 0.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group relative flex flex-col items-center"
              >
                <button
                  type="button"
                  onClick={() => handleQuickAdd(piece)}
                  className="w-full cursor-pointer text-left focus:outline-none"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-white p-3">
                    <img
                      src={piece.img}
                      alt={piece.name}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Soft Floor Contact Shadow */}
                  <div
                    className="mx-auto mt-1 h-4 w-3/4 rounded-full studio-soft-floor blur-sm transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />

                  <div className="mt-3 px-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-sm font-bold text-[#121212]">
                        {piece.name}
                      </h3>
                      <span className="font-telemetry text-xs font-semibold text-[#121212]">
                        ${piece.price}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-[#6E6E6E]">{piece.tag}</p>
                    <span className="mt-2.5 inline-flex items-center gap-1 rounded-full bg-[#F4F4F4] px-3 py-1 font-telemetry text-[11px] font-semibold text-[#121212] transition-colors group-hover:bg-[#121212] group-hover:text-white lg:hidden">
                      + Quick Add · ${piece.price}
                    </span>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slide-Out Garment Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <div className="fixed inset-0 z-[90] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-[#121212]/35 backdrop-blur-sm"
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Streetwear Shopping Bag"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="relative z-10 flex h-full w-full max-w-md flex-col bg-white p-6 text-[#121212] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#121212]/10 pb-4">
                <div>
                  <p className="font-telemetry text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6E6E6E]">
                    Archive 004 · Express Checkout
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-extrabold">
                    Your Bag ({totalCount})
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  aria-label="Close apparel bag"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#F4F4F4] text-[#121212] hover:bg-[#121212] hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 flex-1 space-y-4 overflow-y-auto pr-1">
                {cartLines.length === 0 ? (
                  <p className="py-12 text-center text-sm text-[#6E6E6E]">
                    Your lookbook bag is empty. Tap any silhouette to add it.
                  </p>
                ) : (
                  cartLines.map((line, index) => (
                    <div
                      key={`${line.piece.id}-${line.size}`}
                      className="flex items-center gap-4 rounded-2xl bg-[#FAFAFA] p-3"
                    >
                      <div className="h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-white p-1">
                        <img
                          src={line.piece.img}
                          alt={line.piece.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-bold text-[#121212]">
                          {line.piece.name}
                        </h4>
                        <p className="mt-0.5 font-telemetry text-xs text-[#6E6E6E]">
                          Size {line.size} · ${line.piece.price}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => adjustLine(index, -1)}
                            aria-label="Decrease quantity"
                            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white text-[#121212] shadow-xs"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="font-telemetry text-xs font-bold">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => adjustLine(index, 1)}
                            aria-label="Increase quantity"
                            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-[#121212] text-white"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-5 border-t border-[#121212]/10 pt-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm text-[#6E6E6E]">Subtotal</span>
                  <span className="font-telemetry text-lg font-bold text-[#121212]">
                    ${subtotal.toFixed(2)} CAD
                  </span>
                </div>
                {checkedOut ? (
                  <div className="flex items-center justify-center gap-2 rounded-full bg-[#121212] py-3.5 text-sm font-bold text-white">
                    <Check className="h-4 w-4 text-[#00D2FF]" />
                    PayPal Express Demo Approved · Drop Reserved
                  </div>
                ) : (
                  <button
                    type="button"
                    disabled={cartLines.length === 0}
                    onClick={() => setCheckedOut(true)}
                    className="w-full cursor-pointer rounded-full bg-[#121212] py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#2B2B2B] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    PayPal e-Commerce · ${subtotal.toFixed(2)}
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
