export interface ExperienceEntry {
  role: string;
  organization: string;
  start: string;
  end: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Cloud Engineer',
    organization: 'Metasips Pvt. Ltd.',
    start: '2026-07',
    end: 'Present',
    period: 'Jul 2026 – Present',
    highlights: [
      'Built cloud-native AI solutions spanning Generative AI, RAG, and intelligent agent workflows',
      'Contributed to large-scale cloud migration initiatives from Azure to AWS',
      'Designed and deployed scalable containerized workloads on AWS',
      'Automated cloud infrastructure and deployment workflows using Infrastructure as Code',
    ],
  },
  {
    role: 'AI Full Stack Developer Intern',
    organization: 'Glimmora International',
    start: '2026-04',
    end: '2026-07',
    period: 'Apr 2026 – Jul 2026',
    highlights: [
      'Built AI-powered proof-of-concept applications across modern web technologies',
      'Developed full-stack applications combining interactive interfaces with backend services',
      'Explored Generative AI capabilities to prototype intelligent application workflows',
    ],
  },
  {
    role: 'DevOps Intern',
    organization: 'Apptware',
    start: '2025-02',
    end: '2025-05',
    period: 'Feb 2025 – May 2025',
    highlights: [
      'Built and maintained CI/CD pipelines for production deployments',
      'Automated infrastructure provisioning, reducing deployment time by 40%',
      'Contributed to cloud migration initiatives, improving scalability and reducing costs by 25%',
      'Deployed and orchestrated applications using Docker and Kubernetes',
      'Implemented monitoring stack with Prometheus and Grafana',
    ],
  },
  {
    role: 'Technical Team Manager',
    organization: 'Google Developer Student Club (GDSC)',
    start: '2023-10',
    end: '2024-09',
    period: 'Oct 2023 – Sep 2024',
    highlights: [
      'Led the technical team across DevOps, Cloud, and AI domains',
      'Conducted DevOps workshops covering Docker, Kubernetes, CI/CD, and AWS',
      'Mentored students on production engineering practices',
      'Organized hackathons and technical events at the university level',
    ],
  },
];
