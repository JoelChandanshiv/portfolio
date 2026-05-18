'use client';

import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiApachekafka,
  SiFastapi,
  SiPrometheus,
  SiGrafana,
  SiLinux,
  SiNginx,
  SiPostgresql,
  SiMongodb,
  SiRedis,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

type IconEntry = { name: string; Icon: React.ComponentType<{ size?: number }>; color: string };

const ROW_ONE: IconEntry[] = [
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'Terraform', Icon: SiTerraform, color: '#7B42BC' },
  { name: 'Jenkins', Icon: SiJenkins, color: '#D33833' },
  { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF' },
  { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
  { name: 'Nginx', Icon: SiNginx, color: '#009639' },
  { name: 'Prometheus', Icon: SiPrometheus, color: '#E6522C' },
];

const ROW_TWO: IconEntry[] = [
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
  { name: 'PyTorch', Icon: SiPytorch, color: '#EE4C2C' },
  { name: 'Apache Kafka', Icon: SiApachekafka, color: '#231F20' },
  { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
  { name: 'Grafana', Icon: SiGrafana, color: '#F46800' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: IconEntry[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={
          reverse
            ? 'flex w-max gap-10 animate-marquee-reverse'
            : 'flex w-max gap-10 animate-marquee'
        }
      >
        {doubled.map((entry, i) => (
          <div
            key={`${entry.name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-surface)]/60 px-4 py-2.5"
          >
            <entry.Icon size={20} />
            <span className="font-mono text-sm text-fg-muted">{entry.name}</span>
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16"
        style={{
          background: 'linear-gradient(90deg, var(--bg-base), transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16"
        style={{
          background: 'linear-gradient(270deg, var(--bg-base), transparent)',
        }}
      />
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="mt-16 space-y-4">
      <MarqueeRow items={ROW_ONE} />
      <MarqueeRow items={ROW_TWO} reverse />
    </div>
  );
}
