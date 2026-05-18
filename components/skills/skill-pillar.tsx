'use client';

import { motion } from 'framer-motion';
import { Server, Brain, Workflow, Cpu } from 'lucide-react';
import type { SkillCategory } from '@/data/skills';
import { TechTag } from '@/components/ui/tech-tag';
import { cn } from '@/lib/utils';

const ICONS = { server: Server, brain: Brain, workflow: Workflow, cpu: Cpu };

const ACCENT_GLOW: Record<SkillCategory['accent'], string> = {
  cyan: 'hover:shadow-glow hover:border-[color:var(--accent-primary)]',
  violet: 'hover:shadow-glow-violet hover:border-[color:var(--accent-secondary)]',
  emerald: 'hover:border-[color:var(--accent-tertiary)] hover:shadow-[0_0_40px_-8px_var(--accent-tertiary)]',
  amber: 'hover:border-[color:var(--accent-warning)] hover:shadow-[0_0_40px_-8px_var(--accent-warning)]',
};

const ACCENT_TEXT: Record<SkillCategory['accent'], string> = {
  cyan: 'text-[color:var(--accent-primary)]',
  violet: 'text-[color:var(--accent-secondary)]',
  emerald: 'text-[color:var(--accent-tertiary)]',
  amber: 'text-[color:var(--accent-warning)]',
};

export function SkillPillar({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const Icon = ICONS[category.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        'group relative flex h-full flex-col rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1',
        ACCENT_GLOW[category.accent],
      )}
    >
      <div
        className={cn(
          'inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)]',
          ACCENT_TEXT[category.accent],
        )}
      >
        <Icon size={22} />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold">{category.title}</h3>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {category.skills.map((s) => (
          <TechTag key={s} label={s} />
        ))}
      </div>
    </motion.div>
  );
}
