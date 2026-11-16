import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface StickyPearlHeaderProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    focus?: string;
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

const CHAPTER_LINKS = [
  { code: '01', label: 'Gateways', href: '#gateways' },
  { code: '02', label: 'Engine', href: '#culture' },
  { code: '03', label: 'Studio', href: '#studio' },
  { code: '04', label: 'Work', href: '#work' },
  { code: '05', label: 'Sprints', href: '#pricing' },
];

export function StickyPearlHeader({ onOpenModal }: StickyPearlHeaderProps) {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 520);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.08] bg-[#060608]/88 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-8">
        {/* Single All-Black 9LMNTS Brand Mark on Warm Champagne Plate (Appears Once Below Hero) */}
        <a
          href="#top"
          aria-label="9LMNTS Studio Top"
          className="inline-flex items-center gap-3 group"
        >
          <span className="inline-flex items-center border border-white/15 bg-[#FAF9F6] px-3 py-1.5 transition-colors group-hover:border-[#FF5500]">
            <img
              src="/assets/9lmnts-logo-black.png"
              alt="9LMNTS Studio"
              className="h-5 w-auto object-contain"
            />
          </span>
          <span className="hidden font-mono-hud text-[10px] tracking-[0.18em] uppercase text-[#9CA3AF] lg:inline">
            V4.2 // OTTAWA
          </span>
        </a>

        {/* Chapter Coordinates */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Chapter Navigation">
          {CHAPTER_LINKS.map((item) => (
            <a
              key={item.code}
              href={item.href}
              className="group inline-flex items-center gap-1.5 font-mono-hud text-[11px] tracking-[0.16em] uppercase text-[#9CA3AF] transition-colors hover:text-white"
            >
              <span className="text-[#E95004]">{item.code}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://clash.9lmntsstudio.com"
            target="_blank"
            rel="noreferrer"
            className="hidden border border-white/15 px-3 py-2 font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#D1D5DB] transition-colors hover:border-[#E5A93C] hover:text-[#E5A93C] xl:inline-flex xl:items-center xl:gap-1"
          >
            <span>Clash OS</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>

          <button
            type="button"
            onClick={() => onOpenModal({ path: 'agency', tier: 'flow' })}
            className="cursor-pointer bg-[#E95004] px-4 py-2.5 font-mono-hud text-[11px] font-bold tracking-[0.16em] uppercase text-white transition-colors hover:bg-[#FF5500]"
          >
            [ ACQUIRE SPRINT ]
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle chapter menu"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center border border-white/15 text-white md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Chapter Drawer */}
      {mobileOpen && (
        <div className="border-t border-white/[0.08] bg-[#060608] px-4 py-4 md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {CHAPTER_LINKS.map((item) => (
              <a
                key={item.code}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border border-white/[0.08] px-3 py-2.5 font-mono-hud text-[11px] tracking-[0.14em] uppercase text-[#D1D5DB] hover:border-[#E95004] hover:text-white"
              >
                <span className="mr-1.5 text-[#E95004]">{item.code}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
