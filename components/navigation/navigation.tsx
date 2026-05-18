'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import Link from 'next/link';
import { navLinks } from '@/data/nav';
import { Monogram } from '@/components/ui/monogram';
import { ThemeToggle } from './theme-toggle';
import { LinkButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4, rootMargin: '-80px 0px -40% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'border-b border-[color:var(--border-subtle)] backdrop-blur-xl'
            : '',
        )}
        style={{
          backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
        }}
      >
        <nav className="section-container flex h-16 items-center justify-between">
          <Link
            href="#home"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            aria-label="Home"
          >
            <Monogram size={36} />
            <span className="hidden font-display text-sm font-semibold sm:inline">
              Joel Chandanshiv
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-fg'
                        : 'text-fg-muted hover:text-fg',
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-signature"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden sm:block">
              <LinkButton
                href="/resume.pdf"
                download
                variant="primary"
                size="sm"
                icon={<Download size={14} />}
                iconPosition="left"
                ariaLabel="Download resume"
              >
                Resume
              </LinkButton>
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)]/60 text-fg lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
            style={{ background: 'var(--bg-base)' }}
          >
            <div className="grid-bg absolute inset-0 opacity-50" />
            <div className="relative flex h-full flex-col">
              <div className="flex h-16 items-center justify-between px-6">
                <Monogram size={36} />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--border-subtle)]"
                >
                  <X size={18} />
                </button>
              </div>
              <ul className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                    className="w-full max-w-xs"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)] px-5 py-3 text-center font-display text-lg"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="mt-4 w-full max-w-xs"
                >
                  <LinkButton
                    href="/resume.pdf"
                    download
                    variant="primary"
                    size="lg"
                    icon={<Download size={16} />}
                    iconPosition="left"
                    className="w-full"
                  >
                    Download Resume
                  </LinkButton>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
