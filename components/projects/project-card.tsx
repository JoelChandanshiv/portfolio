'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Github, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { DomainTag } from '@/components/ui/domain-tag';
import { TechTag } from '@/components/ui/tech-tag';
import { PatentRibbon } from './patent-ribbon';

function ProjectVisual({ project }: { project: Project }) {
  // Generates a unique architectural-looking visual per project using
  // gradient + grid + tech initials. Replaces real screenshots gracefully.
  const initials = project.tech
    .slice(0, 4)
    .map((t) => t.replace(/[^A-Z]/g, '').slice(0, 2) || t.slice(0, 2).toUpperCase())
    .join(' · ');

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[color:var(--border-subtle)]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, var(--accent-primary)28, transparent 50%), radial-gradient(circle at 80% 70%, var(--accent-secondary)28, transparent 50%), var(--bg-elevated)',
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-fg-muted/80 md:text-sm">
          {initials}
        </span>
      </div>
    </div>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
    >
      <Tilt
        glareEnable
        glareMaxOpacity={0.12}
        glareColor="#ffffff"
        glarePosition="all"
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        transitionSpeed={1200}
        className="h-full"
      >
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-5 transition-all hover:border-[color:var(--accent-primary)] hover:shadow-glow">
          {project.patent && <PatentRibbon />}

          <ProjectVisual project={project} />

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.domains.slice(0, 4).map((d) => (
              <DomainTag key={d} domain={d} />
            ))}
          </div>

          <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-fg-muted">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 6).map((t) => (
              <TechTag key={t} label={t} />
            ))}
            {project.tech.length > 6 && (
              <TechTag label={`+${project.tech.length - 6}`} />
            )}
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)] px-3 py-1.5 text-xs text-fg-muted transition-colors hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)]"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={13} />
                GitHub
              </a>
            )}
            {project.caseStudy && (
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-medium text-[color:var(--accent-primary)] transition-transform hover:translate-x-0.5"
              >
                View Case Study
                <ArrowUpRight size={13} />
              </Link>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
