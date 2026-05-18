'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { SiMedium } from 'react-icons/si';
import Link from 'next/link';
import { LinkButton } from '@/components/ui/button';
import { Typewriter } from './typewriter';
import { PortraitFrame } from './portrait-frame';
import { siteConfig } from '@/lib/site-config';

const HeroScene = dynamic(
  () => import('@/components/three/hero-scene').then((m) => m.HeroScene),
  { ssr: false },
);

const socials = [
  { Icon: Github, href: siteConfig.social.github, label: 'GitHub' },
  { Icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { Icon: SiMedium, href: siteConfig.social.medium, label: 'Medium' },
  { Icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* 3D background */}
      <div className="absolute inset-0 -z-10">
        <HeroScene />
      </div>

      {/* Animated grid floor (perspective) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 opacity-40"
        style={{
          background:
            'linear-gradient(180deg, transparent, var(--bg-base) 80%), repeating-linear-gradient(180deg, var(--accent-primary)10 0 1px, transparent 1px 48px), repeating-linear-gradient(90deg, var(--accent-primary)10 0 1px, transparent 1px 48px)',
          maskImage:
            'linear-gradient(180deg, transparent 0%, black 40%, transparent 100%)',
          transform: 'perspective(800px) rotateX(60deg) translateY(20%)',
          transformOrigin: 'center bottom',
        }}
      />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      <div className="section-container relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5"
          >
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-[color:var(--accent-tertiary)]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--accent-tertiary)]" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-fg-muted">
              {siteConfig.status}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl"
          >
            Joel <span className="gradient-text">Chandanshiv</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 min-h-[3rem] md:min-h-[3.5rem]"
          >
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base text-fg-muted md:text-lg"
          >
            Building scalable cloud infrastructure, intelligent systems, and
            production-grade applications through DevOps, AI, and automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <LinkButton
              href="#projects"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={16} />}
            >
              View Projects
            </LinkButton>
            <LinkButton href="#contact" variant="secondary" size="lg">
              Get In Touch
            </LinkButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex items-center gap-3"
          >
            {socials.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)]/40 text-fg-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)]"
              >
                <Icon size={16} />
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-first lg:order-last"
        >
          <PortraitFrame />
        </motion.div>
      </div>

      <motion.a
        href="#terminal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-fg-muted"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}
