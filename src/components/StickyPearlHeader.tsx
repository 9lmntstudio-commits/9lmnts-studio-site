import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface StickyPearlHeaderProps {
  onOpenModal: (opts: { path?: 'agency' | 'saas'; tier?: 'flow' | 'beat' | 'cypher' }) => void;
}

export function StickyPearlHeader({ onOpenModal }: StickyPearlHeaderProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 560);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/[0.06] bg-white/92 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        {/* All-Black 9LMNTS Mark Outside Hero */}
        <a href="#top" aria-label="Back to top" className="inline-flex items-center">
          <img
            src="/assets/9lmnts-logo-black.png"
            alt="9LMNTS"
            className="h-6 w-auto sm:h-7"
          />
        </a>

        <nav
          aria-label="Section Navigation"
          className="hidden items-center gap-7 text-sm font-semibold text-[#4B5563] md:flex"
        >
          <a href="#gateways" className="transition-colors hover:text-[#111827]">
            Services
          </a>
          <a href="#gateways" className="transition-colors hover:text-[#111827]">
            Platforms
          </a>
          <a href="#culture" className="transition-colors hover:text-[#111827]">
            Culture &amp; AI
          </a>
          <a href="#work" className="transition-colors hover:text-[#111827]">
            Work
          </a>
          <a href="#pricing" className="transition-colors hover:text-[#111827]">
            Pricing
          </a>
        </nav>

        <button
          type="button"
          onClick={() => onOpenModal({ path: 'agency', tier: 'flow' })}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-[#E95004] px-4 py-2 text-xs font-bold text-white shadow-sm transition-colors hover:bg-[#FF5500] sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <span>Book Sprint</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
