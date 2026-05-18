'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiPrometheus,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { GitBranch } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

interface Node {
  id: string;
  label: string;
  Icon: React.ComponentType<{ size?: number | string }>;
  color: string;
  tools: string[];
}

const NODES: Node[] = [
  {
    id: 'github',
    label: 'GitHub',
    Icon: SiGithub,
    color: '#f4f4f6',
    tools: ['Git', 'GitHub', 'Branch Protection', 'PR Reviews'],
  },
  {
    id: 'cicd',
    label: 'CI/CD',
    Icon: GitBranch,
    color: '#2088FF',
    tools: ['GitHub Actions', 'Jenkins', 'Build & Test', 'Artifact Scan'],
  },
  {
    id: 'docker',
    label: 'Docker',
    Icon: SiDocker,
    color: '#2496ED',
    tools: ['Docker', 'Docker Compose', 'ECR', 'Multi-stage builds'],
  },
  {
    id: 'k8s',
    label: 'Kubernetes',
    Icon: SiKubernetes,
    color: '#326CE5',
    tools: ['Kubernetes', 'Helm', 'k3d', 'EKS / ECS Fargate'],
  },
  {
    id: 'aws',
    label: 'AWS',
    Icon: FaAws,
    color: '#FF9900',
    tools: ['EC2', 'Lambda', 'ALB', 'Secrets Manager', 'API Gateway'],
  },
  {
    id: 'monitor',
    label: 'Monitoring',
    Icon: SiPrometheus,
    color: '#E6522C',
    tools: ['Prometheus', 'Grafana', 'CloudWatch', 'SNS Alerts'],
  },
];

export function InfrastructureFlow() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// Pipeline"
          title="From commit to production."
          subtitle="An end-to-end mental model of how I design and ship cloud-native systems."
          align="center"
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Animated horizontal flow */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-6">
            {NODES.map((node, i) => (
              <div key={node.id} className="relative">
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  onMouseEnter={() => setHovered(node.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(node.id)}
                  onBlur={() => setHovered(null)}
                  className="group relative w-full overflow-hidden rounded-2xl glass p-5 text-left transition-all hover:-translate-y-1 hover:shadow-glow"
                  aria-label={`${node.label} stage`}
                >
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)]"
                    style={{ color: node.color }}
                  >
                    <node.Icon size={20} />
                  </div>
                  <div className="mt-3 font-display text-base font-semibold">
                    {node.label}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                    Stage {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Pulsing dot */}
                  <span className="absolute right-4 top-4 inline-flex h-2 w-2">
                    <span
                      className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full"
                      style={{ background: node.color }}
                    />
                    <span
                      className="relative inline-flex h-2 w-2 rounded-full"
                      style={{ background: node.color }}
                    />
                  </span>
                </motion.button>

                {/* Connector arrow — visible only between nodes on lg+ */}
                {i < NODES.length - 1 && (
                  <div
                    className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 xl:block"
                    aria-hidden="true"
                  >
                    <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                      <motion.path
                        d="M0 10 H22"
                        stroke="var(--accent-primary)"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                      />
                      <path
                        d="M18 5 L23 10 L18 15"
                        stroke="var(--accent-primary)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {/* Tooltip on hover */}
                {hovered === node.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-xl glass p-3 text-xs shadow-xl"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                      Tools used
                    </div>
                    <ul className="mt-2 space-y-1">
                      {node.tools.map((t) => (
                        <li key={t} className="flex items-center gap-1.5 text-fg">
                          <span
                            className="h-1 w-1 rounded-full"
                            style={{ background: node.color }}
                          />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Flowing particles caption */}
          <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
            GitHub → CI/CD → Docker → Kubernetes → AWS → Monitoring
          </p>
        </div>
      </div>
    </section>
  );
}
