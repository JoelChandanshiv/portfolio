'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, FileBadge, Target } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { achievements } from '@/data/achievements';
import type { Achievement } from '@/data/achievements';

const ICONS = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  star: Star,
  certificate: FileBadge,
  target: Target,
} as const;

const ACCENT_COLOR: Record<Achievement['accent'], string> = {
  gold: '#F59E0B',
  cyan: '#00F0FF',
  violet: '#8B5CF6',
  emerald: '#10B981',
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// Recognition"
          title="Achievements."
          subtitle="National and international wins, patents, and recognition for engineering and innovation."
          align="left"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = ICONS[a.iconName];
            const color = ACCENT_COLOR[a.accent];
            return (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1"
                style={
                  {
                    '--ach-glow': color,
                  } as React.CSSProperties
                }
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
                  style={{ background: color }}
                />

                <div className="relative flex items-start gap-4">
                  <div
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)]"
                    style={{ color }}
                  >
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold leading-tight">
                      {a.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-fg-muted">{a.context}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
