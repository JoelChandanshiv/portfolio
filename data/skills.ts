export interface SkillCategory {
  id: string;
  title: string;
  iconName: 'server' | 'brain' | 'workflow' | 'cpu';
  accent: 'cyan' | 'violet' | 'emerald' | 'amber';
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'devops',
    title: 'DevOps & Cloud Infrastructure',
    iconName: 'server',
    accent: 'cyan',
    skills: [
      'Docker',
      'Kubernetes',
      'Helm',
      'Terraform',
      'Ansible',
      'Jenkins',
      'GitHub Actions',
      'AWS (EC2, ECS, EKS, Lambda, S3, IAM)',
      'CloudWatch',
      'Linux',
      'Nginx',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML & MLOps',
    iconName: 'brain',
    accent: 'violet',
    skills: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'OpenCV',
      'NLP',
      'Hugging Face',
      'RAG',
      'Generative AI',
      'AWS SageMaker',
      'Amazon Bedrock',
      'MLflow',
    ],
  },
  {
    id: 'streaming-backend',
    title: 'Streaming & Backend Systems',
    iconName: 'workflow',
    accent: 'emerald',
    skills: [
      'Apache Kafka',
      'FastAPI',
      'Flask',
      'REST APIs',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'RabbitMQ',
      'Memcached',
    ],
  },
  {
    id: 'iot-embedded',
    title: 'IoT & Embedded Systems',
    iconName: 'cpu',
    accent: 'amber',
    skills: [
      'Raspberry Pi',
      'Arduino',
      'ESP32',
      'MQTT',
      'Edge AI deployment',
      'Sensor integration',
    ],
  },
];

export const programmingLanguages = [
  'Python',
  'Java',
  'Bash',
  'SQL',
  'Kotlin',
  'C++',
  'JavaScript / TypeScript',
  'YAML',
  'HCL',
];

export const toolsAndPlatforms = [
  'Linux/Unix',
  'Git',
  'GitHub',
  'GitLab',
  'Postman',
  'VS Code',
  'Docker Compose',
  'k3d',
  'Tailscale',
  'Samba',
  'Jellyfin',
  'Webmin',
];

// Logos for marquee — names used to resolve react-icons
export const marqueeLogos = [
  { name: 'Docker', icon: 'docker' },
  { name: 'Kubernetes', icon: 'kubernetes' },
  { name: 'AWS', icon: 'aws' },
  { name: 'Terraform', icon: 'terraform' },
  { name: 'Jenkins', icon: 'jenkins' },
  { name: 'GitHub Actions', icon: 'github-actions' },
  { name: 'Python', icon: 'python' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'PyTorch', icon: 'pytorch' },
  { name: 'Apache Kafka', icon: 'kafka' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Prometheus', icon: 'prometheus' },
  { name: 'Grafana', icon: 'grafana' },
  { name: 'Linux', icon: 'linux' },
  { name: 'Nginx', icon: 'nginx' },
  { name: 'PostgreSQL', icon: 'postgres' },
  { name: 'MongoDB', icon: 'mongo' },
  { name: 'Redis', icon: 'redis' },
] as const;

export type MarqueeLogo = (typeof marqueeLogos)[number];
