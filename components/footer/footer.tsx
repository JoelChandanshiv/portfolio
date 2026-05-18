import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SiMedium } from 'react-icons/si';
import { Monogram } from '@/components/ui/monogram';
import { navLinks } from '@/data/nav';
import { siteConfig } from '@/lib/site-config';

const socials = [
  { Icon: Github, href: siteConfig.social.github, label: 'GitHub' },
  { Icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { Icon: SiMedium, href: siteConfig.social.medium, label: 'Medium' },
  { Icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-[color:var(--border-subtle)] py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
          <Link href="#home" className="flex items-center gap-2.5">
            <Monogram size={36} />
            <span className="font-display text-sm font-semibold">
              Joel Chandanshiv
            </span>
          </Link>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 md:justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-fg-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:justify-end">
            {socials.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[color:var(--border-subtle)] text-fg-muted transition-all hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)]"
              >
                <Icon size={14} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[color:var(--border-subtle)] pt-6 font-mono text-[11px] text-fg-muted">
          <p className="inline-flex items-center gap-1">
            © {year} Joel Chandanshiv
            <span
              className="ml-1 inline-block h-3 w-1.5 animate-blink bg-[color:var(--accent-primary)]"
              aria-hidden="true"
            />
          </p>
          <p>
            Built with{' '}
            <Link
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg hover:text-[color:var(--accent-primary)]"
            >
              Next.js
            </Link>{' '}
            · Deployed on{' '}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg hover:text-[color:var(--accent-primary)]"
            >
              Vercel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
