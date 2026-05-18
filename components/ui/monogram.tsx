import { cn } from '@/lib/utils';

export function Monogram({
  className,
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-display font-bold',
        className,
      )}
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
        color: '#0a0a0f',
        letterSpacing: '-0.05em',
        fontSize: size * 0.45,
      }}
      aria-label="Joel Chandanshiv monogram"
    >
      J.C.
    </span>
  );
}
