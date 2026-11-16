import { useState } from 'react';
import { ArrowRight, ExternalLink, Film, ImageIcon } from 'lucide-react';

interface SelectedWorkSectionProps {
  onOpenModal: (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    focus?: string;
    saasId?: 'soundclash' | 'artist';
  }) => void;
}

interface ExhibitionFrame {
  label: string;
  src: string;
  isVideo?: boolean;
}

interface ExhibitionChapter {
  index: string;
  tag: string;
  title: string;
  italicLead: string;
  frames: ExhibitionFrame[];
  bottleneck: string;
  architecture: string;
  impact: string;
  tier: 'spark' | 'flow' | 'beat' | 'cypher';
  focus: string;
  liveHref?: string;
  liveLabel?: string;
}

const EXHIBITION_CHAPTERS: ExhibitionChapter[] = [
  {
    index: '01',
    tag: 'ARCHITECTURAL REAL ESTATE // SOLARIUM SANCTUAIRE',
    title: 'Solarium Penthouse Cinema',
    italicLead:
      'Spatial chapter scrollytelling transitioning across five architectural rooms with zero card clutter.',
    frames: [
      { label: '01 Atrium', src: '/assets/work/solarium/room_01_atrium_start.jpg' },
      { label: '02 Atelier', src: '/assets/work/solarium/room_02_atelier_start.jpg' },
      { label: '03 Suite', src: '/assets/work/solarium/room_03_suite_start.jpg' },
      { label: '04 Spa', src: '/assets/work/solarium/room_04_spa_start.jpg' },
      { label: '05 Motion Reel', src: '/assets/work/solarium/room_01_atrium.mp4', isVideo: true },
    ],
    bottleneck:
      'Luxury residences and venues flatten into forgettable carousel thumbnails with weak lead intent.',
    architecture:
      'Pinned full-bleed room stages, 1px hairline coordinates, and private tour scheduling.',
    impact: '3.2× longer qualified dwell time + direct private viewing locks.',
    tier: 'cypher',
    focus: 'Custom Agency Website & Booking',
  },
  {
    index: '02',
    tag: 'LUXURY HOSPITALITY // CHEF OS & WEBAR MENUS',
    title: 'Haute Créole & Chef OS',
    italicLead:
      'Authentic dish-accurate food cinema wired directly to 0%-commission PayPal ordering and 50% catering deposits.',
    frames: [
      { label: '01 Plated Dish', src: '/assets/culinary-dish-showcase.jpg' },
      { label: '02 Open-Fire Carver', src: '/assets/shawarma-carve.jpg' },
    ],
    bottleneck:
      'Third-party delivery apps siphon 25–30% commission while catering leads wait days for manual quotes.',
    architecture:
      '$450 48-Hr WebAR 3D Table-Tent Menu + PayPal Complete Payments + Instant 50% Catering Lock.',
    impact: '0% aggregator fee on house orders + upfront catering deposits in Interac/PayPal.',
    tier: 'beat',
    focus: 'Restaurant / Hospitality & Catering',
  },
  {
    index: '03',
    tag: 'SPECIALTY COMMERCE // VOID ROAST & DARNLEY PHYGITAL',
    title: 'Roastery & Phygital Merch',
    italicLead:
      'Recurring coffee club subscriptions and NFC/QR streetwear drops powered by Pay Later 4× installments.',
    frames: [
      { label: '01 Pour-Over', src: '/assets/work/void-roast/slot-b-pourover.png' },
      { label: '02 Cryo Beans', src: '/assets/work/void-roast/slot-c-cryo-beans.png' },
      { label: '03 Botanicals', src: '/assets/work/belfanm/hero-bottle.jpg' },
      { label: '04 Phygital Merch', src: '/assets/merch-tshirt-modules-mockup.png' },
    ],
    bottleneck:
      'One-off physical sales leave recurring revenue on the table and disconnect live buyers from your brand.',
    architecture:
      'Shopify-free direct PayPal 4× checkout, QR garment twin scans, and auto-replenish flows.',
    impact: 'Higher AOV via 4× split pay + physical garment-to-digital fan capture.',
    tier: 'flow',
    focus: 'Fashion / Apparel & QR Merch',
  },
  {
    index: '04',
    tag: 'LIVE BASE44 SAAS // UNCHANGED CANONICAL PLATFORMS',
    title: 'SoundClash & Artist OS',
    italicLead:
      'Shipped live on Base44: 8-contender crowd battle tipping and 0%-cut 24-bit stem vaults running 24/7.',
    frames: [
      { label: '01 SoundClash Live Screens (GDrive)', src: '/assets/screenshot-sound-clash.png' },
      { label: '02 Sponsors & AR Merch (GDrive)', src: '/assets/gdrive-clash-08-sponsors.jpg' },
      { label: '03 Tournament Engine Map (GDrive)', src: '/assets/soundclash-tournament-diagram.png' },
      { label: '04 Artist OS Preview (GDrive)', src: '/assets/artist-os-preview.png' },
    ],
    bottleneck:
      'Live battles and independent releases leak cash through fragmented ticketing, CashApp links, and DSP middlemen.',
    architecture:
      'Untouched Base44 apps: clash.9lmntsstudio.com ($20 GA / $50 Power Hype) & artist.9lmntsstudio.com ($250/stem).',
    impact: '$1,500 Sponsor Stage slots + $5,000 Venue Turnkey OS + $250/stem vault revenue.',
    tier: 'cypher',
    focus: 'White-Label Event & Creator OS',
    liveHref: 'https://clash.9lmntsstudio.com',
    liveLabel: 'Launch Clash OS Live',
  },
];

function ExhibitionChapterPlate({
  chapter,
  onOpenModal,
}: {
  chapter: ExhibitionChapter;
  onOpenModal: SelectedWorkSectionProps['onOpenModal'];
}) {
  const [frameIdx, setFrameIdx] = useState(0);
  const currentFrame = chapter.frames[frameIdx] ?? chapter.frames[0];

  return (
    <article className="border-b border-white/[0.1] bg-[#060608]">
      {/* Full-Bleed Visual Stage */}
      <div className="relative min-h-[540px] w-full overflow-hidden border-b border-white/[0.08] lg:min-h-[620px]">
        {currentFrame.isVideo ? (
          <video
            key={currentFrame.src}
            src={currentFrame.src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <img
            src={currentFrame.src}
            alt={chapter.title}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700"
          />
        )}

        {/* Cinematic Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/50 to-[#060608]/65" />

        {/* Giant Ghosted Index Top-Right */}
        <div className="pointer-events-none absolute top-4 right-6 font-syne text-[100px] font-extrabold leading-none tracking-tighter text-white/[0.07] sm:text-[150px] lg:right-12">
          {chapter.index}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 mx-auto flex min-h-[540px] max-w-[1440px] flex-col justify-between p-6 sm:p-10 lg:min-h-[620px]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="border border-white/20 bg-[#060608]/80 px-3 py-1.5 font-mono-hud text-[10px] tracking-[0.18em] uppercase text-[#E5A93C] backdrop-blur-md">
              {chapter.tag}
            </span>

            {/* Frame / Room Switcher */}
            <div className="flex flex-wrap gap-1.5">
              {chapter.frames.map((frame, idx) => (
                <button
                  key={frame.label}
                  type="button"
                  onClick={() => setFrameIdx(idx)}
                  className={`inline-flex cursor-pointer items-center gap-1.5 border px-3 py-1.5 font-mono-hud text-[10px] tracking-[0.12em] uppercase backdrop-blur-md transition-colors ${
                    frameIdx === idx
                      ? 'border-[#E95004] bg-[#E95004] text-white'
                      : 'border-white/20 bg-[#060608]/75 text-[#D1D5DB] hover:border-white hover:text-white'
                  }`}
                >
                  {frame.isVideo ? (
                    <Film className="h-3 w-3" />
                  ) : (
                    <ImageIcon className="h-3 w-3" />
                  )}
                  <span>{frame.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-3xl">
            <h3 className="font-syne text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {chapter.title}
            </h3>
            <p className="mt-3 font-editorial-serif text-xl italic leading-relaxed text-[#E5E7EB] sm:text-2xl">
              {chapter.italicLead}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  onOpenModal({
                    path: chapter.index === '04' ? 'saas' : 'agency',
                    tier: chapter.tier,
                    focus: chapter.focus,
                    saasId: 'soundclash',
                  })
                }
                className="inline-flex cursor-pointer items-center gap-2 bg-[#E95004] px-5 py-3 font-mono-hud text-xs font-bold tracking-[0.16em] uppercase text-white transition-colors hover:bg-[#FF5500]"
              >
                <span>Build Similar System</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {chapter.liveHref && (
                <a
                  href={chapter.liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/25 bg-[#060608]/80 px-5 py-3 font-mono-hud text-xs font-bold tracking-[0.14em] uppercase text-white backdrop-blur-md transition-colors hover:border-[#E5A93C] hover:text-[#E5A93C]"
                >
                  <span>{chapter.liveLabel}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Solarium Signature [ + ] 3-Column Bottom Specification Strip */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 divide-y divide-white/[0.08] bg-[#08080C] md:grid-cols-3 md:divide-x md:divide-y-0">
        <div className="p-6 sm:px-8">
          <p className="font-mono-hud text-[10px] tracking-[0.18em] uppercase text-[#9CA3AF]">
            [ + ] 01 // THE BOTTLENECK
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB]">{chapter.bottleneck}</p>
        </div>
        <div className="p-6 sm:px-8">
          <p className="font-mono-hud text-[10px] tracking-[0.18em] uppercase text-[#E5A93C]">
            [ + ] 02 // 9LMNTS ARCHITECTURE
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#D1D5DB]">{chapter.architecture}</p>
        </div>
        <div className="p-6 sm:px-8">
          <p className="font-mono-hud text-[10px] tracking-[0.18em] uppercase text-[#FF781F]">
            [ + ] 03 // REVENUE &amp; CHECKOUT IMPACT
          </p>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-white">
            {chapter.impact}
          </p>
        </div>
      </div>
    </article>
  );
}

export function SelectedWorkSection({ onOpenModal }: SelectedWorkSectionProps) {
  return (
    <section id="work" className="relative border-t border-white/[0.08] bg-[#060608] text-[#F3F4F6]">
      {/* Chapter Perimeter Telemetry Header */}
      <div className="border-b border-white/[0.08] bg-[#09090C]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <div className="flex items-center gap-3 font-mono-hud text-[11px] tracking-[0.18em] uppercase">
            <span className="text-[#E95004]">CHAPTER 04 //</span>
            <span className="text-white">SOLARIUM ARCHITECTURAL EXHIBITION</span>
          </div>
          <div className="font-mono-hud text-[10px] tracking-[0.16em] uppercase text-[#9CA3AF]">
            [ + ] 04 FULL-BLEED VERTICAL CHAPTERS
          </div>
        </div>
      </div>

      {/* Exhibition Intro Strip */}
      <div className="border-b border-white/[0.08] bg-[#060608]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-6 px-4 py-10 sm:px-8">
          <div>
            <p className="font-mono-hud text-[11px] tracking-[0.18em] uppercase text-[#E95004]">
              SELECTED DEPLOYMENTS // ZERO STOCK PLACEHOLDERS
            </p>
            <h2 className="mt-2 font-syne text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Four live worlds in production.
            </h2>
          </div>
          <p className="max-w-md font-editorial-serif text-xl italic text-[#D1D5DB]">
            Inspect each vertical chamber below—every build pairs cinema-grade visual storytelling with direct payment &amp; intake mechanics.
          </p>
        </div>
      </div>

      {/* Chapters 01–04 */}
      <div>
        {EXHIBITION_CHAPTERS.map((chapter) => (
          <ExhibitionChapterPlate
            key={chapter.index}
            chapter={chapter}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </section>
  );
}
