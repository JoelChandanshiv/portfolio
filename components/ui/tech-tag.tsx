import { cn } from '@/lib/utils';

export function TechTag({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'font-mono inline-flex items-center rounded-md border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)] px-2 py-0.5 text-[11px] text-fg-muted',
        className,
      )}
    >
      {label}
    </span>
  );
}
