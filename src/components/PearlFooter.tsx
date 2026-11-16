import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/agencyData';

interface PearlFooterProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    focus?: string;
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

export function PearlFooter({ onOpenModal }: PearlFooterProps) {
  return (
    <footer className="border-t border-white/[0.08] bg-[#060608] text-[#F3F4F6]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/[0.08] pb-10 lg:grid-cols-12">
          {/* Brand Colophon (Text Typographic Wordmark — Keeping Black Logo Image Strictly Once in Sticky Header) */}
          <div className="lg:col-span-5">
            <p className="font-mono-hud text-[10px] tracking-[0.2em] uppercase text-[#E95004]">
              OTTAWA · GATINEAU · GLOBAL DIGITAL ARCHITECTURE
            </p>
            <p className="mt-2 font-syne text-3xl font-extrabold tracking-tight text-white">
              9LMNTS STUDIO
            </p>
            <p className="mt-3 max-w-md font-editorial-serif text-xl italic leading-snug text-[#9CA3AF]">
              Digital design, 3D visual storytelling, WebAR experiences, and AI systems built for founders ready to charge what their craft is worth.
            </p>
          </div>

          {/* Live Platforms & Chapters */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-4">
            <div>
              <p className="font-mono-hud text-[10px] tracking-[0.18em] uppercase text-[#E5A93C]">
                LIVE BASE44 PLATFORMS
              </p>
              <ul className="mt-3 space-y-2 text-xs text-[#D1D5DB]">
                <li>
                  <a
                    href="https://clash.9lmntsstudio.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    <span>SoundClash OS</span>
                    <ArrowUpRight className="h-3 w-3 text-[#E95004]" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://artist.9lmntsstudio.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white"
                  >
                    <span>Artist OS Command</span>
                    <ArrowUpRight className="h-3 w-3 text-[#E95004]" />
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenModal({ path: 'agency', tier: 'flow' })}
                    className="cursor-pointer text-left hover:text-white"
                  >
                    Start Agency Sprint →
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-mono-hud text-[10px] tracking-[0.18em] uppercase text-[#E5A93C]">
                DIRECT DISPATCH
              </p>
              <ul className="mt-3 space-y-2 text-xs text-[#D1D5DB]">
                <li>
                  <a
                    href={STUDIO_CONTACT.phoneHref}
                    className="inline-flex items-center gap-1.5 hover:text-white"
                  >
                    <Phone className="h-3 w-3 text-[#E95004]" />
                    <span>{STUDIO_CONTACT.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${STUDIO_CONTACT.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-white"
                  >
                    <Mail className="h-3 w-3 text-[#E95004]" />
                    <span>{STUDIO_CONTACT.email}</span>
                  </a>
                </li>
                <li className="font-mono-hud text-[10px] text-[#9CA3AF]">
                  Interac Autodeposit Enabled
                </li>
              </ul>
            </div>
          </div>

          {/* QR Fast Access Plate */}
          <div className="flex items-center gap-4 border border-white/[0.1] bg-[#0B0B0F] p-4 lg:col-span-3">
            <img
              src="/assets/9lmntsstudio-qr.png"
              alt="Scan for 9LMNTS Studio Mobile Gateway"
              className="h-20 w-20 shrink-0 bg-white p-1 object-contain"
            />
            <div>
              <p className="font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#E5A93C]">
                MOBILE SCAN
              </p>
              <p className="mt-1 text-xs font-semibold text-white">
                Instant 9lmntsstudio.com Gateway &amp; Clash Link
              </p>
              <p className="mt-1 font-mono-hud text-[10px] text-[#9CA3AF]">
                V4.2 SOLARIUM × KAISEKI
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono-hud text-[10px] tracking-[0.14em] uppercase text-[#6B7280]">
          <span>© {new Date().getFullYear()} 9LMNTS STUDIO INC. — ALL RIGHTS RESERVED.</span>
          <span>50% DEPOSIT INTERAC TO {STUDIO_CONTACT.email} // B2C VIA PAYPAL V2</span>
        </div>
      </div>
    </footer>
  );
}
