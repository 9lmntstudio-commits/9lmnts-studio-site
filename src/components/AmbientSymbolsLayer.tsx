import { motion } from 'framer-motion';

/**
 * Subtle low-opacity ambient layer pairing Hip-Hop's 9 Elements iconography
 * (vinyl rings, mic grille, vector crown, spray cap) with AI neural nodes.
 * Kept understated so foreground typography remains crisp and legible.
 */
export function AmbientSymbolsLayer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Top-Left: Subtle Vinyl Turntable Ring (DJing + Cycle) */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        viewBox="0 0 200 200"
        className="absolute -top-16 -left-16 h-72 w-72 text-white/[0.035]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="100" cy="100" r="88" strokeDasharray="6 10" />
        <circle cx="100" cy="100" r="64" />
        <circle cx="100" cy="100" r="38" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="10" stroke="#FF5500" strokeOpacity="0.22" />
      </motion.svg>

      {/* Mid-Right: Subtle AI Neural Lattice (AI Orchestration) */}
      <motion.svg
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        viewBox="0 0 180 180"
        className="absolute top-[18%] right-[4%] hidden h-56 w-56 text-white/[0.045] lg:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="35" cy="45" r="5" />
        <circle cx="135" cy="35" r="5" />
        <circle cx="90" cy="95" r="7" stroke="#FF5500" strokeOpacity="0.3" />
        <circle cx="38" cy="140" r="5" />
        <circle cx="145" cy="135" r="5" />
        <line x1="35" y1="45" x2="90" y2="95" />
        <line x1="135" y1="35" x2="90" y2="95" />
        <line x1="38" y1="140" x2="90" y2="95" />
        <line x1="145" y1="135" x2="90" y2="95" />
        <line x1="35" y1="45" x2="135" y2="35" strokeDasharray="3 5" />
        <line x1="38" y1="140" x2="145" y2="135" strokeDasharray="3 5" />
      </motion.svg>

      {/* Lower-Left: Minimal Vector Crown + Code Brackets (Graffiti + Software) */}
      <motion.svg
        animate={{ y: [6, -6, 6] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        viewBox="0 0 160 120"
        className="absolute bottom-[10%] left-[5%] hidden h-36 w-44 text-white/[0.04] md:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M26 78 L36 38 L62 60 L80 28 L98 60 L124 38 L134 78 Z" />
        <path d="M18 96 L48 96" stroke="#FF5500" strokeOpacity="0.25" />
        <path d="M112 96 L142 96" stroke="#FF5500" strokeOpacity="0.25" />
      </motion.svg>

      {/* Atmospheric Flame Orange Radial Halo behind Orchestrator Center */}
      <div
        className="absolute top-[16%] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#FF5500]/[0.08] blur-[120px]"
      />
    </div>
  );
}
