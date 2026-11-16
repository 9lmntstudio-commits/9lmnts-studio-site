import { useState } from 'react';
import { CultureAndMissionSection } from './components/CultureAndMissionSection';
import {
  GatewayBookingModal,
  type ModalConfigState,
} from './components/GatewayBookingModal';
import { HeroSection } from './components/HeroSection';
import { PearlFooter } from './components/PearlFooter';
import { PricingAndIntakeSection } from './components/PricingAndIntakeSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { StickyPearlHeader } from './components/StickyPearlHeader';
import { StudioConsoleSection } from './components/StudioConsoleSection';
import { TwoPathGatewaySection } from './components/TwoPathGatewaySection';

export default function App() {
  const [modal, setModal] = useState<ModalConfigState>({
    isOpen: false,
    path: 'agency',
    tier: 'flow',
    focus: 'Custom Agency Website & Booking',
    saasId: 'soundclash',
  });

  const openModal = (opts: {
    path?: 'agency' | 'saas';
    tier?: 'spark' | 'flow' | 'beat' | 'cypher' | 'custom';
    focus?: string;
    saasId?: 'soundclash' | 'artist';
  }) => {
    setModal((prev) => ({
      isOpen: true,
      path: opts.path ?? 'agency',
      tier: opts.tier ?? prev.tier,
      focus: opts.focus ?? prev.focus,
      saasId: opts.saasId ?? prev.saasId,
    }));
  };

  return (
    <div className="min-h-screen bg-[#060608] text-[#F3F4F6] selection:bg-[#FF5500] selection:text-white">
      <StickyPearlHeader onOpenModal={openModal} />

      <main>
        <HeroSection onOpenModal={openModal} />
        <TwoPathGatewaySection onOpenModal={openModal} />
        <CultureAndMissionSection />
        <StudioConsoleSection onOpenModal={openModal} />
        <SelectedWorkSection onOpenModal={openModal} />
        <PricingAndIntakeSection onOpenModal={openModal} />
      </main>

      <PearlFooter onOpenModal={openModal} />

      <GatewayBookingModal
        config={modal}
        onChangePath={(path) => setModal((prev) => ({ ...prev, path }))}
        onChangeSaas={(saasId) => setModal((prev) => ({ ...prev, saasId }))}
        onChangeTier={(tier) => setModal((prev) => ({ ...prev, tier }))}
        onClose={() => setModal((prev) => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
}
