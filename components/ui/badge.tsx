import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'primary' | 'secondary' | 'tertiary' | 'warning' | 'outline';

const variants: Record<BadgeVariant, string> = {
  default:
    'bg-[color:var(--bg-elevated)] text-fg-muted border border-[color:var(--border-subtle)]',
  primary:
    'bg-[color:var(--accent-primary)]/12 text-[color:var(--accent-primary)] border border-[color:var(--accent-primary)]/30',
  secondary:
    'bg-[color:var(--accent-secondary)]/12 text-[color:var(--accent-secondary)] border border-[color:var(--accent-secondary)]/30',
  tertiary:
    'bg-[color:var(--accent-tertiary)]/12 text-[color:var(--accent-tertiary)] border border-[color:var(--accent-tertiary)]/30',
  warning:
    'bg-[color:var(--accent-warning)]/12 text-[color:var(--accent-warning)] border border-[color:var(--accent-warning)]/30',
  outline:
    'border border-[color:var(--border-subtle)] text-fg-muted',
};

export function Badge({
  children,
  variant = 'default',
  className,
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
