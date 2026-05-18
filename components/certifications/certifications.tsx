'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { certifications } from '@/data/certifications';

export function Certifications() {
  return (
    <section className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// Credentials"
          title="Certifications."
          align="left"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:border-[color:var(--accent-primary)] hover:shadow-glow"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] text-[color:var(--accent-primary)]">
                <ShieldCheck size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base font-semibold leading-tight">
                  {cert.title}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-fg-muted">
                  <span>{cert.issuer}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{cert.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="rounded-full border border-[color:var(--border-subtle)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                    {cert.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
