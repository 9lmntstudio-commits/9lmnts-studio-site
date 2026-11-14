import { useState } from 'react';
import { X } from 'lucide-react';
import { STUDIO_CONTACT } from '../data/agencyData';

interface PearlFooterProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

export function PearlFooter({ onOpenModal }: PearlFooterProps) {
  const [legalDoc, setLegalDoc] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="border-t border-black/[0.06] bg-white px-5 py-12 text-[#111827] sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
        {/* All-Black 9LMNTS Brand Mark in Footer */}
        <div>
          <a href="#top" aria-label="9LMNTS Back to top" className="inline-block">
            <img
              src="/assets/9lmnts-logo-black.png"
              alt="9LMNTS"
              className="h-7 w-auto"
            />
          </a>
          <p className="mt-3 text-xs font-medium text-[#6B7280]">
            Nine Elements Studio · {STUDIO_CONTACT.city}
          </p>
          <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#374151]">
            <a
              href={`mailto:${STUDIO_CONTACT.email}`}
              className="hover:text-[#E95004]"
            >
              {STUDIO_CONTACT.email}
            </a>
            <span aria-hidden="true">·</span>
            <a href={STUDIO_CONTACT.phoneHref} className="hover:text-[#E95004]">
              {STUDIO_CONTACT.phoneDisplay}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://instagram.com/9lmntsstudio"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E95004]"
            >
              Instagram ↗
            </a>
          </div>
        </div>

        {/* Clean Minimal Footer Navigation */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-[#4B5563]">
          <a href="#gateways" className="hover:text-[#111827]">
            Agency Services
          </a>
          <a href="#culture" className="hover:text-[#111827]">
            9 Elements + AI
          </a>
          <a
            href="https://clash.9lmntsstudio.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#E95004]"
          >
            SoundClash OS ↗
          </a>
          <a
            href="https://artist.9lmntsstudio.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#E95004]"
          >
            Artist OS ↗
          </a>
          <a href="#pricing" className="hover:text-[#111827]">
            Pricing
          </a>
          <button
            type="button"
            onClick={() => onOpenModal({ path: 'agency', tier: 'flow' })}
            className="cursor-pointer rounded-full bg-[#E95004] px-4 py-2 text-xs font-bold text-white hover:bg-[#FF5500]"
          >
            Book Sprint
          </button>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col justify-between gap-3 border-t border-black/[0.05] pt-6 text-xs text-[#6B7280] sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} 9LMNTS Studio · Registered Ontario Business Name. CAD Pricing.</p>
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setLegalDoc('privacy')}
            className="cursor-pointer font-semibold hover:text-[#111827]"
          >
            Privacy Policy
          </button>
          <button
            type="button"
            onClick={() => setLegalDoc('terms')}
            className="cursor-pointer font-semibold hover:text-[#111827]"
          >
            Sprint &amp; Payment Terms
          </button>
        </div>
      </div>

      {/* Compact Legal Policy Modal */}
      {legalDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={legalDoc === 'privacy' ? 'Privacy Policy' : 'Sprint & Payment Terms'}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={() => setLegalDoc(null)}
            className="fixed inset-0 bg-[#111827]/60 backdrop-blur-sm"
          />
          <div className="relative z-10 w-full max-w-lg rounded-[24px] bg-white p-6 text-[#111827] shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4 border-b border-black/[0.06] pb-4">
              <div>
                <p className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-[#E95004]">
                  9LMNTS Studio · Ontario, Canada
                </p>
                <h3 className="mt-1 text-xl font-extrabold">
                  {legalDoc === 'privacy' ? 'Privacy & Data Handling (PIPEDA)' : 'Sprint & Payment Terms'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLegalDoc(null)}
                aria-label="Close legal notice"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F3F4F6] text-[#111827] hover:bg-[#111827] hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4B5563]">
              {legalDoc === 'privacy' ? (
                <>
                  <p>
                    Project inquiry details submitted through 9LMNTS Studio (business name, email, phone, and project brief) are used strictly to scope your project, respond to your request, and prepare your agreement.
                  </p>
                  <p>
                    We do not sell client contact data or install third-party behavioral ad trackers. For data removal requests, email{' '}
                    <strong className="text-[#111827]">{STUDIO_CONTACT.email}</strong>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All agency sprints begin once scope is confirmed via a <strong className="text-[#111827]">1-Page Project Agreement</strong> and receipt of a <strong className="text-[#111827]">50% kickoff deposit</strong> (in Canadian Dollars) via Interac e-Transfer to <strong className="text-[#111827]">{STUDIO_CONTACT.email}</strong> or PayPal Invoice.
                  </p>
                  <p>
                    The remaining 50% balance is due upon final approval prior to custom domain launch. Live SaaS platforms (<strong className="text-[#111827]">SoundClash OS</strong> and <strong className="text-[#111827]">Artist OS</strong>) operate independently on their respective subdomains.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
