import { motion } from 'framer-motion';

export interface NicheItem {
  id: string;
  targetId: string;
  index: string;
  title: string;
  subtitle: string;
  thumb: string;
  isDarkStage?: boolean;
}

export const NICHE_ITEMS: NicheItem[] = [
  {
    id: 'shawarma',
    targetId: 'stage-shawarma',
    index: '01',
    title: 'Restaurant & Shawarma',
    subtitle: 'Menu · Catering · PayPal 1-Tap',
    thumb: '/assets/shawarma-carve.jpg',
  },
  {
    id: 'crema',
    targetId: 'stage-crema',
    index: '02',
    title: 'Kremas & Crema Coffee',
    subtitle: 'Pour Stage · PayPal Express',
    thumb: '/assets/crema-pour.jpg',
  },
  {
    id: 'streetwear',
    targetId: 'stage-streetwear',
    index: '03',
    title: 'Atelier Streetwear',
    subtitle: 'Lookbook Rack · Slide Cart',
    thumb: '/assets/streetwear-hoodie.jpg',
  },
  {
    id: 'bakery',
    targetId: 'stage-bakery',
    index: '04',
    title: 'Bakery & Smash QSR',
    subtitle: 'Day/Night + Exploding Combo',
    thumb: '/assets/bakery-pastry.jpg',
  },
  {
    id: 'lua',
    targetId: 'stage-lua',
    index: '05',
    title: 'Project LOA & Clash OS',
    subtitle: 'Cyber HUD · Live Arena',
    thumb: '/assets/lua-character.jpg',
    isDarkStage: true,
  },
];

interface FloatingNicheRailProps {
  activeStageId: string;
  onSelectStage: (item: NicheItem) => void;
}

export function FloatingNicheRail({
  activeStageId,
  onSelectStage,
}: FloatingNicheRailProps) {
  const handleJump = (item: NicheItem) => {
    onSelectStage(item);
    const el = document.getElementById(item.targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="work"
      aria-label="Interactive Portfolio Stage Switcher"
      className="border-t border-white/10 bg-[#050505] px-4 pt-16 pb-10 text-white sm:px-8 sm:pt-20 sm:pb-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Client Brand Firewall Explanation Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-telemetry text-xs font-semibold tracking-[0.16em] uppercase text-[#FF5500]">
              CLIENT PORTFOLIO FIREWALL // 5 NATIVE BRAND UNIVERSES
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Your Business Doesn’t Look Like Us.{' '}
              <span className="font-script text-4xl font-normal text-[#FF5500] sm:text-6xl">
                It Looks Like You.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-400">
            Jump into any live client demo below. Notice how each business swaps seamlessly into its own authentic light, warm, or cyber palette — never cloned templates.
          </p>
        </div>

        {/* Sleek Dark Obsidian Switcher Rail */}
        <div className="rounded-3xl border border-white/12 bg-[#0C0E14] p-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] sm:rounded-full sm:p-3">
          <div className="no-scrollbar flex items-center gap-2.5 overflow-x-auto px-1 py-1 sm:grid sm:grid-cols-5 sm:gap-3 sm:overflow-visible">
            {NICHE_ITEMS.map((item) => {
              const isActive = activeStageId === item.id;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => handleJump(item)}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 360, damping: 24 }}
                  className={`group relative flex shrink-0 cursor-pointer items-center gap-3 rounded-2xl p-2 pr-4 text-left transition-colors sm:w-full sm:rounded-full ${
                    isActive
                      ? 'bg-[#171B26] ring-1 ring-[#FF5500]/65 shadow-[0_10px_25px_rgba(255,85,0,0.18)]'
                      : 'bg-transparent hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#050505] sm:rounded-full">
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-telemetry text-[10px] font-semibold tracking-wider text-zinc-400">
                        {item.index}
                      </span>
                      {isActive && (
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-[#FF5500]"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p className="truncate text-xs font-bold text-white sm:text-[13px]">
                      {item.title}
                    </p>
                    <p className="truncate text-[11px] text-zinc-400">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
