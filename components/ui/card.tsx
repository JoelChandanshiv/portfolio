'use client';

import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  glow?: boolean;
  gradientBorder?: boolean;
}

export function Card({
  children,
  className,
  glow = false,
  gradientBorder = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl p-6 transition-all duration-300',
        gradientBorder ? 'gradient-border' : 'glass',
        glow && 'hover:shadow-glow',
        className,
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
