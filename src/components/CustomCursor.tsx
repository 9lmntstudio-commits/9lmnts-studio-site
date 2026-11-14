import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface CustomCursorProps {
  badgeText: string | null;
}

/**
 * Spatial Editorial surgical #FF5500 cursor follower on fine pointers (desktop).
 * Expands cleanly into a contextual pill ("Quick Add • $120") when hovering Stage 03 items.
 */
export function CustomCursor({ badgeText }: CustomCursorProps) {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springX = useSpring(rawX, { stiffness: 460, damping: 32, mass: 0.4 });
  const springY = useSpring(rawY, { stiffness: 460, damping: 32, mass: 0.4 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
    if (!finePointer) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [rawX, rawY]);

  if (!enabled || !visible) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="pointer-events-none fixed top-0 left-0 z-[100] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      {badgeText ? (
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center gap-2 rounded-full bg-[#121212] px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-[0_12px_30px_rgba(18,18,18,0.28)] whitespace-nowrap"
        >
          <span className="h-2 w-2 rounded-full bg-[#FF5500]" />
          {badgeText}
        </motion.div>
      ) : (
        <div className="h-3 w-3 rounded-full bg-[#FF5500] shadow-[0_2px_10px_rgba(255,85,0,0.45)] transition-transform duration-150" />
      )}
    </motion.div>
  );
}
