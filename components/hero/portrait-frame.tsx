'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiDocker, SiKubernetes, SiPython, SiTensorflow } from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

const ORBITAL_ICONS = [
  { Icon: SiKubernetes, angle: 0, radius: 180, duration: 24, color: '#326CE5' },
  { Icon: SiDocker, angle: 72, radius: 200, duration: 28, color: '#2496ED' },
  { Icon: FaAws, angle: 144, radius: 175, duration: 22, color: '#FF9900' },
  { Icon: SiPython, angle: 216, radius: 195, duration: 26, color: '#3776AB' },
  { Icon: SiTensorflow, angle: 288, radius: 185, duration: 30, color: '#FF6F00' },
];

export function PortraitFrame() {
  return (
    <div className="relative mx-auto h-[320px] w-[320px] md:h-[400px] md:w-[400px]">
      {/* Outer gradient glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-40"
        style={{
          background:
            'radial-gradient(circle at center, var(--accent-primary), var(--accent-secondary), transparent 70%)',
        }}
      />

      {/* Orbital icons */}
      {ORBITAL_ICONS.map(({ Icon, angle, radius, duration, color }, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -ml-3 -mt-3 hidden md:block"
          style={{
            transformOrigin: `0 0`,
          }}
          initial={{ rotate: angle }}
          animate={{ rotate: angle + 360 }}
          transition={{ duration, repeat: Infinity, ease: 'linear' }}
        >
          <div
            style={{ transform: `translate(${radius}px, 0)` }}
            className="inline-flex"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration, repeat: Infinity, ease: 'linear' }}
              className="flex h-9 w-9 items-center justify-center rounded-full glass"
              style={{ color, boxShadow: `0 0 14px ${color}55` }}
            >
              <Icon size={18} />
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Rotating ring */}
      <motion.div
        className="absolute inset-4 rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, var(--accent-primary), var(--accent-secondary), var(--accent-primary))',
          padding: 2,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: 'var(--bg-base)' }}
        />
      </motion.div>

      {/* Portrait */}
      <div className="absolute inset-8 overflow-hidden rounded-full glass">
        <Image
          src="/joel-portrait.png"
          alt="Joel Chandanshiv portrait"
          fill
          priority
          sizes="(max-width: 768px) 320px, 400px"
          className="object-cover"
        />
      </div>

      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full border"
        style={{ borderColor: 'var(--accent-primary)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
