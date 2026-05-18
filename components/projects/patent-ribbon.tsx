import { Award } from 'lucide-react';

export function PatentRibbon() {
  return (
    <div className="absolute -right-2 top-4 z-10">
      <div
        className="flex items-center gap-1.5 rounded-l-full px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        }}
      >
        <Award size={11} />
        International Patent
      </div>
      <div
        className="ml-auto h-2 w-2"
        style={{
          background: '#92400e',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
        }}
      />
    </div>
  );
}

export function FlagshipBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-signature px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[color:var(--bg-base)]">
      Flagship
    </span>
  );
}
