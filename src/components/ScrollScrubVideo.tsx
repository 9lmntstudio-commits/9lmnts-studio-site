import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';

interface ScrollScrubVideoProps {
  /** Path to .mp4 render inside /public/assets/ */
  src: string;
  /** High-resolution studio fallback image before .mp4 is dropped in */
  fallbackImg: string;
  fallbackAlt: string;
  /** Optional external scroll progress (0..1) from a parent tall sticky stage */
  progress?: MotionValue<number>;
  /** Optional class styling on the outer media frame */
  className?: string;
  /** Optional tint overlay for interactive state changes (e.g. flavor selector) */
  tintColor?: string;
  /** Optional interactive HUD badge rendered cleanly inside the corner */
  slotLabel?: string;
  /** Optional image focal behavior */
  imgClassName?: string;
}

/**
 * Reusable scroll-scrubbed video & interactive visual stage.
 * Automatically binds `video.currentTime` via smooth RAF linear interpolation (lerp)
 * when `/public/assets/<name>.mp4` exists, and seamlessly falls back to an animated,
 * scroll-reactive studio composition before final video renders are dropped in.
 */
export function ScrollScrubVideo({
  src,
  fallbackImg,
  fallbackAlt,
  progress: externalProgress,
  className = '',
  tintColor,
  slotLabel,
  imgClassName = 'object-cover',
}: ScrollScrubVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasVideo, setHasVideo] = useState(false);
  const [scrubPct, setScrubPct] = useState(0);

  const targetProgressRef = useRef(0);
  const lerpedProgressRef = useRef(0);

  const { scrollYProgress: internalProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const activeProgress = externalProgress ?? internalProgress;

  useMotionValueEvent(activeProgress, 'change', (latest) => {
    const clamped = Math.max(0, Math.min(1, latest));
    targetProgressRef.current = clamped;
    setScrubPct(Math.round(clamped * 100));
  });

  useEffect(() => {
    if (!hasVideo) return;
    let rafId = 0;

    const tick = () => {
      const video = videoRef.current;
      if (video && video.readyState >= 1 && Number.isFinite(video.duration) && video.duration > 0) {
        lerpedProgressRef.current +=
          (targetProgressRef.current - lerpedProgressRef.current) * 0.12;
        const nextTime = Math.max(
          0,
          Math.min(video.duration - 0.02, lerpedProgressRef.current * video.duration)
        );
        if (Math.abs(video.currentTime - nextTime) > 0.008) {
          video.currentTime = nextTime;
        }
      }
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [hasVideo]);

  // Smooth fallback parallax & depth response before .mp4 assets are dropped in
  const fallbackScale = useTransform(activeProgress, [0, 0.5, 1], [1.06, 1.0, 1.09]);
  const fallbackY = useTransform(activeProgress, [0, 1], ['-3%', '3%']);

  return (
    <div ref={containerRef} className={`relative overflow-hidden select-none ${className}`}>
      {/* Pre-wired .mp4 slot: becomes active automatically when video file exists */}
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="metadata"
        onLoadedMetadata={(e) => {
          if (e.currentTarget.duration > 0) {
            setHasVideo(true);
          }
        }}
        onError={() => setHasVideo(false)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          hasVideo ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'
        }`}
      />

      {/* Interactive animated fallback studio render while waiting for Google Flow .mp4 */}
      {!hasVideo && (
        <motion.div
          style={{ scale: fallbackScale, y: fallbackY }}
          className="relative h-full w-full will-change-transform"
        >
          <img
            src={fallbackImg}
            alt={fallbackAlt}
            loading="eager"
            className={`h-full w-full ${imgClassName}`}
          />
          {tintColor && (
            <div
              className="pointer-events-none absolute inset-0 transition-colors duration-500 mix-blend-multiply opacity-20"
              style={{ backgroundColor: tintColor }}
            />
          )}
        </motion.div>
      )}

      {/* Subtle architectural scrub telemetry bar */}
      {slotLabel && (
        <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#121212]/75 px-3 py-1 font-telemetry text-[10px] tracking-[0.14em] uppercase text-white backdrop-blur-md">
            {hasVideo ? `SCRUB LIVE · ${src.split('/').pop()}` : `${slotLabel} · ${scrubPct}%`}
          </span>
          <div className="h-[2px] w-20 overflow-hidden rounded-full bg-black/15 backdrop-blur-sm">
            <div
              className="h-full bg-[#FF5500] transition-all duration-150"
              style={{ width: `${Math.max(8, scrubPct)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
