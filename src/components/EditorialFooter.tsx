import { ArrowUpRight, Mail, Phone, Sparkles } from 'lucide-react';

interface EditorialFooterProps {
  onOpenBook: (presetNiche?: string, presetTier?: 'spark' | 'flow' | 'cypher') => void;
  onOpenManifesto: () => void;
}

const PROCESS_STEPS = [
  {
    day: 'STAGE 01 // DAY 1',
    title: '9 Elements Direction & Brand Ingestion',
    detail:
      'We strip away confusing tech copy, extract your real menu, catalog, or service offer, and lock your native brand palette.',
  },
  {
    day: 'STAGE 02 // DAYS 2–5',
    title: 'Interactive Build & AI Workflow Wiring',
    detail:
      'Mobile-first stages, 1-tap PayPal Complete Payments (0% app fee), automated DM/voice responders, and 60fps scroll choreography.',
  },
  {
    day: 'STAGE 03 // LAUNCH CUTOVER',
    title: 'Edge Deploy, QR Funnel & Growth Ready',
    detail:
      'Zero-downtime deployment to your custom domain wired directly into Instagram, WhatsApp, QR menus, and paid traffic.',
  },
];

export function EditorialFooter({
  onOpenBook,
  onOpenManifesto,
}: EditorialFooterProps) {
  return (
    <footer
      id="process"
      className="border-t border-white/10 bg-[#050505] px-4 pt-20 pb-12 text-white sm:px-8 sm:pt-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Process Execution Trio */}
        <div id="launch-72" className="pb-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 font-telemetry text-xs font-semibold tracking-[0.16em] uppercase text-[#FF5500]">
              <span className="h-2 w-2 rounded-full bg-[#FF5500]" />
              How We Launch In 3–7 Days
            </span>
            <span className="font-telemetry text-xs text-zinc-400">
              OTTAWA · GATINEAU · GLOBAL REMOTE
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div key={step.day} className="border-t border-white/12 pt-5">
                <p className="font-telemetry text-xs font-semibold text-[#FF5500]">
                  {step.day}
                </p>
                <h3 className="mt-2 font-display text-xl font-extrabold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Obsidian Conversion CTA (Zero Heavy White Card) */}
        <div className="border-t border-b border-white/12 py-14 sm:py-16">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 font-telemetry text-xs font-semibold tracking-[0.16em] uppercase text-[#FF5500]">
                <Sparkles className="h-3.5 w-3.5" />
                Direct Founder Access · Zero Middlemen
              </p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                Ready for a website that{' '}
                <span className="font-script text-5xl font-normal text-[#FF5500] sm:text-7xl">
                  works as hard as you?
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
                Start your SPARK ($500), FLOW ($1,500–$2,200), or CYPHER ($3,000–$5,000) build today with Darnley Sanon in Ottawa. Keep 100% of your orders and customer data.
              </p>
              <p className="mt-3 font-telemetry text-[11px] uppercase tracking-wider text-zinc-500">
                PHASE 2 ROADMAP: INTERACTIVE 3D IMMERSIVE STUDIO ROOM LAUNCHING NEXT
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBook(undefined, 'flow')}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#FF5500] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(255,85,0,0.35)] transition-all hover:scale-[1.02] hover:bg-[#FF6B1A]"
              >
                Start a Sprint
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <a
                href="tel:6134009691"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 px-6 py-4 font-telemetry text-sm font-semibold text-white transition-colors hover:border-[#FF5500]"
              >
                <Phone className="h-4 w-4 text-[#FF5500]" />
                (613) 400-9691
              </a>
            </div>
          </div>
        </div>

        {/* Restored Bottom Logo + Live Canonical Apps */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 text-xs text-zinc-400 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-baseline gap-1 font-display text-base font-extrabold">
              <span className="text-[#FF5500]">9L</span>
              <span className="text-white">MNTS</span>
              <span className="font-script text-xl font-normal text-[#FF5500]">
                Studio
              </span>
            </span>
            <span>Ottawa, Ontario, Canada</span>
            <a
              href="mailto:9lmntstudio@gmail.com"
              className="inline-flex items-center gap-1.5 font-telemetry text-zinc-200 hover:text-[#FF5500]"
            >
              <Mail className="h-3.5 w-3.5 text-[#FF5500]" />
              9lmntstudio@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-5 font-medium">
            <button
              type="button"
              onClick={onOpenManifesto}
              className="cursor-pointer hover:text-white"
            >
              9 Elements + AI
            </button>
            <a href="#work" className="hover:text-white">
              Client Universes
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a
              href="https://clash.9lmntsstudio.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF5500]"
            >
              SoundClash OS
            </a>
            <a
              href="https://artist.9lmntsstudio.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF5500]"
            >
              Artist OS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
