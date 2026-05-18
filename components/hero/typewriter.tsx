'use client';

import { useEffect, useState } from 'react';

const ROLES = [
  'DevOps Engineer.',
  'Cloud Engineer.',
  'AI/ML Engineer.',
  'Building production-grade systems.',
];

const TYPE_SPEED = 65;
const DELETE_SPEED = 30;
const PAUSE_AFTER_TYPE = 1400;
const PAUSE_AFTER_DELETE = 220;

export function Typewriter() {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (text.length < role.length) {
        timeoutId = setTimeout(
          () => setText(role.slice(0, text.length + 1)),
          TYPE_SPEED,
        );
      } else {
        timeoutId = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE);
      }
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeoutId = setTimeout(
          () => setText(role.slice(0, text.length - 1)),
          DELETE_SPEED,
        );
      } else {
        timeoutId = setTimeout(() => {
          setRoleIdx((idx) => (idx + 1) % ROLES.length);
          setPhase('typing');
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, phase, roleIdx]);

  return (
    <span className="font-display text-2xl text-fg md:text-3xl lg:text-4xl">
      <span className="gradient-text">{text}</span>
      <span
        className="ml-1 inline-block h-7 w-[3px] translate-y-1 animate-blink bg-[color:var(--accent-primary)] md:h-9"
        aria-hidden="true"
      />
    </span>
  );
}
