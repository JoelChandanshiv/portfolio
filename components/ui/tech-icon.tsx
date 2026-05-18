import type { ComponentType } from 'react';
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiJenkins,
  SiApachekafka,
  SiPython,
  SiFlask,
  SiFastapi,
  SiNextdotjs,
  SiNginx,
  SiMysql,
  SiAnsible,
  SiMongodb,
  SiSocketdotio,
  SiNodedotjs,
  SiReact,
  SiExpress,
  SiLinux,
  SiRaspberrypi,
  SiJellyfin,
  SiTailscale,
  SiPrometheus,
  SiRabbitmq,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiPostgresql,
  SiRedis,
  SiHelm,
  SiGrafana,
  SiScikitlearn,
  SiHuggingface,
  SiCloudflare,
  SiArduino,
  SiEspressif,
  SiGithub,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa6';

type IconType = ComponentType<{ size?: number | string }>;

interface TechMeta {
  Icon: IconType;
  color: string;
}

// Map by lowercased tech-name keyword. Lookup walks each entry by `includes`.
const REGISTRY: ReadonlyArray<{ match: string; meta: TechMeta }> = [
  // Cloud — must come before generic 'aws' keyword
  { match: 'aws sagemaker', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'aws lambda', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'aws ecs', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'aws secrets', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'aws s3', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'api gateway', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'amazon bedrock', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'cloudwatch', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'alb', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'ecr', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'iam', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'sns', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'aws', meta: { Icon: FaAws, color: '#FF9900' } },
  { match: 'cloudflare', meta: { Icon: SiCloudflare, color: '#F38020' } },

  // Containers / orchestration
  { match: 'docker', meta: { Icon: SiDocker, color: '#2496ED' } },
  { match: 'kubernetes', meta: { Icon: SiKubernetes, color: '#326CE5' } },
  { match: 'k3d', meta: { Icon: SiKubernetes, color: '#326CE5' } },
  { match: 'helm', meta: { Icon: SiHelm, color: '#0F1689' } },

  // IaC / CI
  { match: 'terraform', meta: { Icon: SiTerraform, color: '#7B42BC' } },
  { match: 'ansible', meta: { Icon: SiAnsible, color: '#EE0000' } },
  { match: 'github actions', meta: { Icon: SiGithubactions, color: '#2088FF' } },
  { match: 'github', meta: { Icon: SiGithub, color: '#f4f4f6' } },
  { match: 'jenkins', meta: { Icon: SiJenkins, color: '#D33833' } },

  // Streaming / messaging
  { match: 'apache kafka', meta: { Icon: SiApachekafka, color: '#231F20' } },
  { match: 'kafka', meta: { Icon: SiApachekafka, color: '#231F20' } },
  { match: 'rabbitmq', meta: { Icon: SiRabbitmq, color: '#FF6600' } },

  // Backend / langs / frameworks
  { match: 'python', meta: { Icon: SiPython, color: '#3776AB' } },
  { match: 'java', meta: { Icon: FaJava, color: '#ED8B00' } },
  { match: 'node.js', meta: { Icon: SiNodedotjs, color: '#5FA04E' } },
  { match: 'node', meta: { Icon: SiNodedotjs, color: '#5FA04E' } },
  { match: 'express', meta: { Icon: SiExpress, color: '#f4f4f6' } },
  { match: 'fastapi', meta: { Icon: SiFastapi, color: '#009688' } },
  { match: 'flask', meta: { Icon: SiFlask, color: '#f4f4f6' } },
  { match: 'next.js', meta: { Icon: SiNextdotjs, color: '#f4f4f6' } },
  { match: 'next', meta: { Icon: SiNextdotjs, color: '#f4f4f6' } },
  { match: 'react', meta: { Icon: SiReact, color: '#61DAFB' } },
  { match: 'socket.io', meta: { Icon: SiSocketdotio, color: '#f4f4f6' } },

  // Web infra / OS
  { match: 'nginx', meta: { Icon: SiNginx, color: '#009639' } },
  { match: 'linux', meta: { Icon: SiLinux, color: '#FCC624' } },

  // DBs
  { match: 'mysql', meta: { Icon: SiMysql, color: '#4479A1' } },
  { match: 'postgres', meta: { Icon: SiPostgresql, color: '#4169E1' } },
  { match: 'mongodb', meta: { Icon: SiMongodb, color: '#47A248' } },
  { match: 'redis', meta: { Icon: SiRedis, color: '#DC382D' } },

  // ML
  { match: 'tensorflow', meta: { Icon: SiTensorflow, color: '#FF6F00' } },
  { match: 'pytorch', meta: { Icon: SiPytorch, color: '#EE4C2C' } },
  { match: 'scikit-learn', meta: { Icon: SiScikitlearn, color: '#F7931E' } },
  { match: 'scikit', meta: { Icon: SiScikitlearn, color: '#F7931E' } },
  { match: 'hugging face', meta: { Icon: SiHuggingface, color: '#FFD21E' } },
  { match: 'opencv', meta: { Icon: SiOpencv, color: '#5C3EE8' } },

  // Observability
  { match: 'prometheus', meta: { Icon: SiPrometheus, color: '#E6522C' } },
  { match: 'grafana', meta: { Icon: SiGrafana, color: '#F46800' } },

  // IoT / homelab
  { match: 'raspberry', meta: { Icon: SiRaspberrypi, color: '#C51A4A' } },
  { match: 'arduino', meta: { Icon: SiArduino, color: '#00979D' } },
  { match: 'esp32', meta: { Icon: SiEspressif, color: '#E7352C' } },
  { match: 'jellyfin', meta: { Icon: SiJellyfin, color: '#AA5CC3' } },
  { match: 'tailscale', meta: { Icon: SiTailscale, color: '#f4f4f6' } },
];

export function getTechIcon(label: string): TechMeta | null {
  const lower = label.toLowerCase();
  for (const entry of REGISTRY) {
    if (lower.includes(entry.match)) return entry.meta;
  }
  return null;
}

// Pick up to `max` unique icons for a project's tech list,
// preferring the order the user listed them in.
export function pickTechIcons(tech: ReadonlyArray<string>, max = 5): TechMeta[] {
  const out: TechMeta[] = [];
  const seen = new Set<IconType>();
  for (const t of tech) {
    const meta = getTechIcon(t);
    if (meta && !seen.has(meta.Icon)) {
      seen.add(meta.Icon);
      out.push(meta);
      if (out.length >= max) break;
    }
  }
  return out;
}
