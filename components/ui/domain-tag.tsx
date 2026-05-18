import type { ProjectDomain } from '@/data/projects';
import { Badge } from './badge';

const DOMAIN_VARIANTS: Record<
  ProjectDomain,
  'primary' | 'secondary' | 'tertiary' | 'warning' | 'default'
> = {
  DevOps: 'primary',
  Cloud: 'primary',
  Kubernetes: 'primary',
  'AI/ML': 'secondary',
  NLP: 'secondary',
  MLOps: 'secondary',
  Backend: 'tertiary',
  Streaming: 'tertiary',
  'Full-Stack': 'tertiary',
  IoT: 'warning',
  'Self-Hosted': 'default',
};

export function DomainTag({ domain }: { domain: ProjectDomain }) {
  return <Badge variant={DOMAIN_VARIANTS[domain]}>{domain}</Badge>;
}
