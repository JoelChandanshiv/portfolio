'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: ReactNode;
}

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base focus-visible:ring-[color:var(--accent-primary)] disabled:opacity-50 disabled:cursor-not-allowed';

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gradient-signature text-white shadow-glow hover:shadow-[0_0_56px_-8px_var(--accent-primary)] hover:scale-[1.02] active:scale-[0.98]',
  secondary:
    'border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)] text-fg hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)] hover:scale-[1.02] active:scale-[0.98]',
  ghost:
    'text-fg-muted hover:text-fg hover:bg-[color:var(--bg-elevated)]',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

interface ButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', icon, iconPosition = 'right', className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {icon && iconPosition === 'left' && <span aria-hidden="true">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span aria-hidden="true">{icon}</span>}
    </button>
  );
});

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
  download?: boolean | string;
  ariaLabel?: string;
}

export function LinkButton({
  href,
  external = false,
  download,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  children,
  ariaLabel,
}: LinkButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
  const content = (
    <>
      {icon && iconPosition === 'left' && <span aria-hidden="true">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span aria-hidden="true">{icon}</span>}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  if (download !== undefined) {
    return (
      <a
        href={href}
        download={download}
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
