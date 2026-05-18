import Link from 'next/link';
import { Home, Terminal as TerminalIcon } from 'lucide-react';
import { Navigation } from '@/components/navigation/navigation';
import { Footer } from '@/components/footer/footer';

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="relative flex min-h-screen items-center justify-center px-6 pt-24">
        <div className="pointer-events-none fixed inset-0 -z-20 grid-bg opacity-50" />
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
            <TerminalIcon size={11} />
            Status 404
          </div>
          <h1 className="mt-6 font-display text-6xl font-bold tracking-tight md:text-8xl">
            <span className="gradient-text">404</span>
          </h1>
          <p className="mt-4 font-mono text-sm text-fg-muted">
            <span className="text-[color:var(--accent-tertiary)]">$</span>{' '}
            cd /this/page
          </p>
          <p className="font-mono text-sm text-red-400">
            bash: cd: /this/page: No such file or directory
          </p>
          <p className="mx-auto mt-6 max-w-md text-fg-muted">
            The page you're looking for has been moved, deleted, or never
            existed. Let's get you back to a known route.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-signature px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02]"
          >
            <Home size={16} />
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
