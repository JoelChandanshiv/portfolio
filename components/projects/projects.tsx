'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';
import { projects, projectFilters, type ProjectDomain } from '@/data/projects';
import { FlagshipCard } from './flagship-card';
import { ProjectCard } from './project-card';
import { cn } from '@/lib/utils';

type Filter = 'All' | ProjectDomain;

const FILTERS: Filter[] = ['All', ...projectFilters];

export function Projects() {
  const [filter, setFilter] = useState<Filter>('All');

  const flagship = useMemo(() => projects.find((p) => p.flagship), []);
  const others = useMemo(() => projects.filter((p) => !p.flagship), []);

  const filtered = useMemo(() => {
    if (filter === 'All') return others;
    return others.filter((p) => p.domains.includes(filter));
  }, [filter, others]);

  return (
    <section id="projects" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// Work"
          title="Selected Work."
          subtitle="A cross-section of production deployments, MLOps systems, IoT platforms, and infrastructure automation."
          align="left"
        />

        {flagship && (
          <div className="mb-12">
            <FlagshipCard project={flagship} />
          </div>
        )}

        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={cn(
                  'relative rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all',
                  active
                    ? 'border-[color:var(--accent-primary)] text-fg'
                    : 'border-[color:var(--border-subtle)] text-fg-muted hover:border-[color:var(--accent-primary)]/50 hover:text-fg',
                )}
                aria-pressed={active}
              >
                {active && (
                  <motion.span
                    layoutId="filter-active"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-signature opacity-15"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {f}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center font-mono text-sm text-fg-muted">
            // No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
