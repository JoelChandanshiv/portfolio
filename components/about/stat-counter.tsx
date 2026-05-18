'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import type { StatCounter as StatCounterType } from '@/data/achievements';

export function StatCounter({ stat }: { stat: StatCounterType }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * stat.value);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, stat.value]);

  const formatted = stat.decimals
    ? value.toFixed(stat.decimals)
    : Math.floor(value).toString();

  return (
    <div
      ref={ref}
      className="rounded-2xl glass p-6 text-center transition-all hover:border-[color:var(--accent-primary)] hover:shadow-glow"
    >
      <div className="font-display text-4xl font-bold md:text-5xl">
        <span className="gradient-text">
          {formatted}
          {stat.suffix}
        </span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-wider text-fg-muted md:text-sm">
        {stat.label}
      </div>
    </div>
  );
}
