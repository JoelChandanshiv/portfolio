import { Github, Linkedin, Mail } from 'lucide-react';
import { SiMedium } from 'react-icons/si';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { ContactForm } from './contact-form';
import { siteConfig } from '@/lib/site-config';

const socials = [
  { Icon: Github, href: siteConfig.social.github, label: 'GitHub' },
  { Icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { Icon: SiMedium, href: siteConfig.social.medium, label: 'Medium' },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="// Contact"
              title="Let's build something together."
              align="left"
            />
            <p className="text-base text-fg-muted md:text-lg">
              Open to roles in DevOps, Cloud, AI/ML, and MLOps engineering. If you're
              hiring, collaborating, or just want to talk about distributed systems —
              the inbox is open.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 text-sm text-fg-muted transition-colors hover:text-[color:var(--accent-primary)]"
              >
                <Mail size={16} />
                {siteConfig.email}
              </a>

              <div className="flex items-center gap-2.5 pt-2">
                {socials.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)]/40 text-fg-muted transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)]"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-[color:var(--accent-tertiary)]" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--accent-tertiary)]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-fg-muted">
                {siteConfig.status}
              </span>
            </div>
          </div>

          <div className="rounded-3xl gradient-border p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
