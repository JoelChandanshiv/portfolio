'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, MapPin, GraduationCap } from 'lucide-react';
import { LinkButton } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { StatCounter } from './stat-counter';
import { stats } from '@/data/achievements';
import { siteConfig } from '@/lib/site-config';

const ABOUT_PARAGRAPHS = [
  'Computer Engineering student and DevOps-focused engineer building scalable cloud systems and intelligent, automation-driven solutions. Experienced in DevOps, AI/ML, IoT, and backend engineering, I design production-grade systems that are reliable, scalable, and impactfull.',
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-container">
        <SectionHeading eyebrow="// About" title="Engineering with intent." align="left" />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto"
          >
            <div
              className="absolute -inset-6 rounded-3xl opacity-50 blur-2xl"
              style={{
                background:
                  'linear-gradient(135deg, var(--accent-primary)33, var(--accent-secondary)33)',
              }}
            />
        
            <div className="relative w-[260px] sm:w-[300px] md:w-[340px] rounded-3xl overflow-hidden gradient-border">
              <Image
                src="/joel-portrait.png"
                alt="Joel Chandanshiv"
                width={340}          // set the actual width you want
                height={400}         // set the height according to your image
                className="object-cover rounded-3xl"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3 max-w-fit">
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs text-fg-muted">
                <MapPin className="w-3 h-3 flex-shrink-0 align-middle" />
                {siteConfig.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs text-fg-muted">
               <GraduationCap className="w-3 h-3 flex-shrink-0 align-middle" />
               B.E. Computer Engg · CGPA 9.0
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-fg-muted md:text-lg">
                {p}
              </p>
            ))}

            <div className="pt-2">
              <LinkButton
                href="/resume.pdf"
                download
                variant="primary"
                size="lg"
                icon={<Download size={16} />}
                iconPosition="left"
              >
                Download Resume
              </LinkButton>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
