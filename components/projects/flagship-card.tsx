'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Sparkles } from 'lucide-react';
import type { Project } from '@/data/projects';
import { DomainTag } from '@/components/ui/domain-tag';
import { TechTag } from '@/components/ui/tech-tag';
import { LinkButton } from '@/components/ui/button';
import { FlagshipBadge } from './patent-ribbon';

export function FlagshipCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl gradient-border p-8 md:p-12"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(circle at 0% 0%, var(--accent-primary)18, transparent 50%), radial-gradient(circle at 100% 100%, var(--accent-secondary)18, transparent 50%)',
        }}
      />

      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-12">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <FlagshipBadge />
            <span className="inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
              <Sparkles size={11} />
              98% Accuracy · MLOps
            </span>
          </div>

          <h3 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-base text-fg-muted md:text-lg">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.domains.map((d) => (
              <DomainTag key={d} domain={d} />
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechTag key={t} label={t} />
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.github && (
              <LinkButton
                href={project.github}
                external
                variant="primary"
                size="md"
                icon={<Github size={14} />}
                iconPosition="left"
              >
                GitHub
              </LinkButton>
            )}
            <LinkButton
              href={`/projects/${project.slug}`}
              variant="secondary"
              size="md"
              icon={<ArrowUpRight size={14} />}
            >
              View Case Study
            </LinkButton>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)]">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  'linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {/* Architectural mockup */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-6">
              <ArchitectureMockup />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ArchitectureMockup() {
  const nodes = [
    { label: 'Image Input', x: 50, y: 20, color: 'var(--accent-primary)' },
    { label: 'API Gateway', x: 50, y: 35, color: 'var(--accent-primary)' },
    { label: 'Lambda', x: 25, y: 55, color: 'var(--accent-secondary)' },
    { label: 'SageMaker', x: 75, y: 55, color: 'var(--accent-secondary)' },
    { label: 'Bedrock', x: 50, y: 78, color: 'var(--accent-tertiary)' },
  ];
  const edges = [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 4],
  ];
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--accent-primary)"
          strokeWidth="0.3"
          strokeDasharray="1 1"
          opacity="0.6"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="4.5" fill={n.color} opacity="0.18" />
          <circle cx={n.x} cy={n.y} r="2" fill={n.color} />
          <text
            x={n.x}
            y={n.y + 9}
            textAnchor="middle"
            fontSize="2.2"
            fill="var(--fg-muted)"
            fontFamily="ui-monospace"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
