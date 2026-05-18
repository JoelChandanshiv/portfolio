'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { experience } from '@/data/experience';

export function Timeline() {
  return (
    <section className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// Experience"
          title="Where I've shipped."
          subtitle="Production environments, technical leadership, and engineering at scale."
          align="left"
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px md:left-1/2"
            style={{
              background:
                'linear-gradient(180deg, transparent, var(--accent-primary), var(--accent-secondary), transparent)',
            }}
          />

          <ul className="space-y-12">
            {experience.map((entry, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.li
                  key={entry.organization}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2"
                    aria-hidden="true"
                  >
                    <span className="relative inline-flex h-4 w-4">
                      <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-[color:var(--accent-primary)]/40" />
                      <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-[color:var(--bg-base)] bg-[color:var(--accent-primary)]" />
                    </span>
                  </div>

                  <div
                    className={`ml-12 md:ml-0 ${
                      isRight
                        ? 'md:ml-[calc(50%+2rem)]'
                        : 'md:mr-[calc(50%+2rem)] md:text-right'
                    }`}
                  >
                    <div className="rounded-2xl glass p-6 transition-all hover:border-[color:var(--accent-primary)] hover:shadow-glow">
                      <div
                        className={`flex flex-wrap items-center gap-3 ${
                          !isRight ? 'md:justify-end' : ''
                        }`}
                      >
                        <span className="inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                          <Calendar size={11} />
                          {entry.period}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-semibold">
                        {entry.role}
                      </h3>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-[color:var(--accent-primary)]">
                        <Briefcase size={12} />
                        {entry.organization}
                      </p>
                      <ul
                        className={`mt-4 space-y-2 ${
                          !isRight ? 'md:text-right' : ''
                        }`}
                      >
                        {entry.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-sm leading-relaxed text-fg-muted"
                          >
                            <span
                              className={
                                isRight ? 'mr-2 text-[color:var(--accent-primary)]' : 'hidden'
                              }
                              aria-hidden="true"
                            >
                              ▹
                            </span>
                            {h}
                            <span
                              className={
                                !isRight ? 'ml-2 text-[color:var(--accent-primary)] md:inline hidden' : 'hidden'
                              }
                              aria-hidden="true"
                            >
                              ◃
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
