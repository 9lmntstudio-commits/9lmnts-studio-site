import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, Phone, Sparkles, X } from 'lucide-react';

interface FloatingHeaderProps {
  onOpenBook: (presetNiche?: string, presetTier?: 'spark' | 'flow' | 'cypher') => void;
  onOpenManifesto: () => void;
}

export function FloatingHeader({ onOpenBook, onOpenManifesto }: FloatingHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-5">
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-white/12 bg-[#0B0D12]/80 px-4 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:px-6"
      >
        {/* Restored 9LMNTS Studio Identity: 9L (#FF5500) + MNTS (#FFFFFF) + script Studio (#FF5500) */}
        <a
          href="#top"
          className="group flex items-baseline gap-1.5 whitespace-nowrap"
        >
          <span className="font-display text-lg font-extrabold tracking-tight sm:text-xl">
            <span className="text-[#FF5500]">9L</span>
            <span className="text-white">MNTS</span>
          </span>
          <span className="font-script text-2xl leading-none text-[#FF5500] transition-transform duration-300 group-hover:scale-105 sm:text-[27px]">
            Studio
          </span>
          <span
            className="ml-1 hidden h-1.5 w-1.5 rounded-full bg-[#00FF88] shadow-[0_0_8px_#00FF88] sm:inline-block"
            title="Ottawa Studio Online"
          />
        </a>

        {/* Clean Center Navigation */}
        <div className="hidden items-center gap-7 text-sm font-medium text-zinc-400 md:flex">
          <button
            type="button"
            onClick={onOpenManifesto}
            className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-white"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#FF5500]" />
            9 Elements + AI
          </button>
          <a href="#workflows" className="transition-colors hover:text-white">
            AI Workflows
          </a>
          <a href="#work" className="transition-colors hover:text-white">
            Client Work
          </a>
          <a href="#pricing" className="transition-colors hover:text-white">
            Pricing
          </a>
        </div>

        {/* Right Primary Controls */}
        <div className="flex items-center gap-2">
          <a
            href="tel:6134009691"
            className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 font-telemetry text-xs font-medium text-zinc-200 transition-colors hover:border-white/25 hover:text-white lg:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-[#FF5500]" />
            (613) 400-9691
          </a>
          <button
            type="button"
            onClick={() => onOpenBook()}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#FF5500] px-4 py-2 text-xs font-bold tracking-wide text-white shadow-[0_6px_22px_rgba(255,85,0,0.38)] transition-all hover:scale-[1.03] hover:bg-[#FF6B1A] active:scale-[0.98] sm:px-5 sm:py-2.5 sm:text-sm whitespace-nowrap"
          >
            Book a Build
            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white transition-colors hover:border-[#FF5500]/50 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/12 bg-[#0B0D12]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3 text-sm font-semibold text-zinc-200">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenManifesto();
                }}
                className="flex cursor-pointer items-center justify-between border-b border-white/10 pb-3 text-left hover:text-[#FF5500]"
              >
                <span>9 Elements + AI Story</span>
                <Sparkles className="h-4 w-4 text-[#FF5500]" />
              </button>
              <a
                href="#workflows"
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/10 pb-3 hover:text-[#FF5500]"
              >
                AI Workflows & 4 Pillars
              </a>
              <a
                href="#work"
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/10 pb-3 hover:text-[#FF5500]"
              >
                Client Work (5 Live Universes)
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="border-b border-white/10 pb-3 hover:text-[#FF5500]"
              >
                Simplified Pricing ($500–$5,000)
              </a>
              <a
                href="tel:6134009691"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 pt-1 font-telemetry text-xs text-zinc-300"
              >
                <Phone className="h-3.5 w-3.5 text-[#FF5500]" />
                Direct Line: (613) 400-9691
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
