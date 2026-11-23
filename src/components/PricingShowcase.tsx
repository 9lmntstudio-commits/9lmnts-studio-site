import React, { useState } from 'react';

export type SprintTierId = 'spark' | 'flow' | 'beat' | 'cypher';

interface PricingShowcaseProps {
  onSelectTier?: (tierId: SprintTierId) => void;
}

interface OfferCard {
  id: SprintTierId;
  badge: string;
  name: string;
  subtitle: string;
  price: string;
  deposit: string;
  turnaround: string;
  featured?: boolean;
  bullets: string[];
  cta: string;
}

const OFFERS: OfferCard[] = [
  {
    id: 'spark',
    badge: 'FASTEST ROI · 48-HR WEDGE',
    name: '48-Hr Menu & Booking Upgrade',
    subtitle: 'Keep your current website — stop losing mobile orders & quotes.',
    price: '$500 CAD',
    deposit: '100% Upfront One-Time Payment',
    turnaround: '48 Hours',
    featured: true,
    bullets: [
      'Interactive mobile menu or instant quote calculator added to your site',
      '0%-commission PayPal, Apple Pay & Pay-in-4 online deposit checkout',
      'Replaces static PDF menus and slow email quote back-and-forth',
      '100% of your $500 credited if you upgrade to a full OS within 30 days',
    ],
    cta: 'Lock 48-Hr Upgrade ($500) →',
  },
  {
    id: 'flow',
    badge: 'MOST POPULAR · RESTAURANTS & TRADES',
    name: 'Full Restaurant or Trades OS',
    subtitle: 'Complete custom website + owner phone dashboard + AI intake.',
    price: '$1,500 – $2,200 CAD',
    deposit: '50% Interac Deposit ($750–$1,100)',
    turnaround: '5–7 Days',
    bullets: [
      'Custom high-converting website tailored strictly to your brand colors',
      '15–300+ guest catering or job-size estimator with automatic 50% deposits',
      'Owner mobile command dashboard (1-tap sold-out toggle & order queue)',
      '24/7 AI chat & SMS lead capture so after-hours inquiries never slip away',
    ],
    cta: 'Start 7-Day Sprint →',
  },
  {
    id: 'cypher',
    badge: 'MULTI-LOCATION & VENUES',
    name: 'Enterprise & Venue Command OS',
    subtitle: 'Multi-branch routing, custom automations & live event arenas.',
    price: '$5,000 CAD',
    deposit: '$2,500 Interac Deposit to Start',
    turnaround: '2 Weeks',
    bullets: [
      'Multi-location kitchen or crew dispatch switcher with live status sync',
      'Full CRM, WhatsApp/Instagram keyword funnels & automated invoicing',
      'Optional SoundClash OS live crowd voting & VIP table booking engine',
      '100% outright code & domain ownership with zero monthly retainers',
    ],
    cta: 'Book Enterprise Build →',
  },
];

export const PricingShowcase: React.FC<PricingShowcaseProps> = ({ onSelectTier }) => {
  const [copied, setCopied] = useState(false);

  const copyInterac = () => {
    navigator.clipboard?.writeText('9lmntstudio@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="pricing"
      className="w-full bg-white py-24 text-[#121212] selection:bg-[#FF5500] selection:text-white"
    >
      <div className="mx-auto max-w-[1380px] px-6 sm:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#121212]/10 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-[0.16em] uppercase text-[#FF5500]">
              Simple, Flat-Rate Pricing
            </span>
            <h2 className="mt-3 font-['Plus_Jakarta_Sans',sans-serif] text-4xl font-extrabold tracking-tight text-[#121212] sm:text-5xl">
              One-Time Build.{' '}
              <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic text-[#FF5500]">
                Zero Monthly Agency Fees.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#474747]">
            Every project starts with a signed 1-page agreement and a{' '}
            <strong className="font-semibold text-[#121212]">50% kickoff deposit</strong>.
            The remaining 50% is due only when your live preview is approved.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <div
              key={offer.id}
              className={`flex flex-col justify-between rounded-[28px] p-8 transition sm:p-9 ${
                offer.featured
                  ? 'bg-[#121212] text-white shadow-[0_28px_60px_-15px_rgba(18,18,18,0.25)]'
                  : 'bg-[#F7F5F0] text-[#121212]'
              }`}
            >
              <div>
                <span
                  className={`inline-block rounded-full px-3.5 py-1 text-[10px] font-bold tracking-[0.14em] uppercase ${
                    offer.featured
                      ? 'bg-[#FF5500] text-white'
                      : 'bg-[#EAE6DF] text-[#121212]'
                  }`}
                >
                  {offer.badge}
                </span>

                <h3 className="mt-5 font-['Plus_Jakarta_Sans',sans-serif] text-2xl font-extrabold">
                  {offer.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    offer.featured ? 'text-white/75' : 'text-[#474747]'
                  }`}
                >
                  {offer.subtitle}
                </p>

                <div
                  className={`mt-6 border-y py-5 ${
                    offer.featured ? 'border-white/12' : 'border-[#121212]/10'
                  }`}
                >
                  <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {offer.price}
                  </p>
                  <p
                    className={`mt-1 text-xs font-semibold ${
                      offer.featured ? 'text-[#FF781F]' : 'text-[#FF5500]'
                    }`}
                  >
                    {offer.deposit} · Turnaround: {offer.turnaround}
                  </p>
                </div>

                <ul className="mt-6 space-y-3.5">
                  {offer.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-snug">
                      <span className="mt-0.5 font-bold text-[#FF5500]">✓</span>
                      <span className={offer.featured ? 'text-white/90' : 'text-[#2B2B2B]'}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectTier?.(offer.id)}
                className={`mt-8 w-full cursor-pointer rounded-full py-4 text-center text-sm font-bold transition ${
                  offer.featured
                    ? 'bg-[#FF5500] text-white hover:bg-[#E04B00]'
                    : 'bg-[#121212] text-white hover:bg-[#FF5500]'
                }`}
              >
                {offer.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[24px] bg-[#F7F5F0] p-7 sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="text-xs font-bold tracking-[0.14em] uppercase text-[#FF5500]">
              Fast-Track Kickoff · Ottawa Founding Client Offer
            </p>
            <p className="mt-1 text-base font-bold text-[#121212]">
              Ready to lock your build slot today? Send your 50% Interac e-Transfer (Autodeposit) to{' '}
              <span className="underline decoration-[#FF5500] decoration-2">
                9lmntstudio@gmail.com
              </span>{' '}
              or text Darnley at{' '}
              <a href="tel:+16134009691" className="text-[#FF5500] hover:underline">
                (613) 400-9691
              </a>
              .
            </p>
          </div>

          <button
            onClick={copyInterac}
            className="shrink-0 cursor-pointer rounded-full bg-white px-6 py-3 text-xs font-bold text-[#121212] shadow-sm transition hover:bg-[#121212] hover:text-white"
          >
            {copied ? '✓ Copied 9lmntstudio@gmail.com' : 'Copy Interac Email'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingShowcase;

