export type ProjectDomain =
  | 'DevOps'
  | 'AI/ML'
  | 'Cloud'
  | 'MLOps'
  | 'IoT'
  | 'Backend'
  | 'Streaming'
  | 'Full-Stack'
  | 'NLP'
  | 'Kubernetes'
  | 'Self-Hosted';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  domains: ProjectDomain[];
  tech: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
  caseStudy?: boolean;
  flagship?: boolean;
  patent?: boolean;
  mediumArticle?: string;
}

export const projects: Project[] = [
  {
    slug: 'grape-disease-detection',
    title: 'DevOps-Enabled Grape Disease Detection System',
    tagline:
      'Production-grade MLOps pipeline for agricultural disease detection at 98% accuracy.',
    description:
      'A production-grade MLOps system that detects grape diseases using a ResNet CNN model with 98% accuracy, deployed via a fully automated cloud-native architecture on AWS. Combines machine learning, explainable AI, and end-to-end DevOps automation for agricultural intelligence.',
    domains: ['DevOps', 'AI/ML', 'MLOps', 'Cloud'],
    tech: [
      'AWS SageMaker',
      'Terraform',
      'Docker',
      'GitHub Actions',
      'AWS Lambda',
      'API Gateway',
      'Amazon Bedrock',
      'Flask',
      'ResNet CNN',
    ],
    features: [
      'ResNet CNN model achieving 98% disease classification accuracy',
      'Fully automated MLOps deployment pipeline',
      'Explainable AI for prediction transparency',
      'Infrastructure-as-Code with Terraform',
      'Serverless inference via Lambda + API Gateway',
      'Integrated with Amazon Bedrock for generative insights',
    ],
    github: 'https://github.com/JoelChandanshiv/grape-disease-ai-devops-pipeline',
    caseStudy: true,
    flagship: true,
  },
  {
    slug: 'marketpulse',
    title: 'MarketPulse — Real-Time Financial Risk Monitoring System',
    tagline:
      'Streaming anomaly detection for crypto markets via Kafka + Isolation Forest.',
    description:
      'A real-time financial risk detection platform that ingests crypto market streams through Apache Kafka, applies Isolation Forest anomaly detection, and surfaces risk signals via both real-time and batch inference. Engineered with end-to-end CI/CD automation and containerized for scale.',
    domains: ['DevOps', 'AI/ML', 'MLOps', 'Streaming', 'Cloud'],
    tech: [
      'Apache Kafka',
      'Docker',
      'Jenkins',
      'AWS S3',
      'Python',
      'Scikit-learn',
      'Isolation Forest',
    ],
    features: [
      'Real-time crypto stream analysis pipeline',
      'Isolation Forest-based anomaly detection',
      'Hybrid real-time + batch ML inference',
      'Jenkins-driven CI/CD automation',
      'Containerized microservices architecture',
    ],
    github: 'https://github.com/JoelChandanshiv/MarketPulse',
    caseStudy: true,
    mediumArticle:
      'MarketPulse: Real-Time Financial Risk Detection Using Streaming Systems & Machine Learning',
  },
  {
    slug: 'econova',
    title: 'EcoNova — Smart Automated Biogas Plant',
    tagline:
      'Internationally patented IoT-driven waste-to-energy system with AI predictive maintenance.',
    description:
      'An internationally patented smart biogas plant that combines IoT sensors, AI-driven predictive maintenance, and a containerized backend to automate waste-to-energy conversion. Includes a mobile app for monitoring and operates as a complete sustainable energy system.',
    domains: ['IoT', 'AI/ML', 'DevOps', 'Backend'],
    tech: [
      'IoT',
      'AI Prediction Models',
      'Flask',
      'Docker',
      'Terraform',
      'GitHub Actions',
      'Prometheus',
      'Mobile App',
    ],
    features: [
      'Patent-backed smart waste-to-energy conversion',
      'AI-driven predictive maintenance',
      'IoT sensor network with real-time monitoring',
      'Full DevOps automation pipeline',
      'Mobile app for remote operation',
    ],
    github: 'https://github.com/JoelChandanshiv/ECONOVA',
    caseStudy: true,
    patent: true,
  },
  {
    slug: 'synapsemind',
    title: 'SynapseMind — AI Messaging Intelligence Platform',
    tagline:
      'Multi-platform NLP aggregator with intent detection and conversation summarization.',
    description:
      'An AI-powered messaging intelligence platform that aggregates messages from multiple communication platforms, performs intent detection and summarization, and surfaces actionable insights through a unified dashboard. Built with NLP at its core and deployed on AWS.',
    domains: ['AI/ML', 'NLP', 'Cloud', 'Backend'],
    tech: ['AWS', 'Docker', 'NLP', 'Nginx', 'Python', 'FastAPI'],
    features: [
      'Multi-platform message aggregation',
      'NLP-based intent detection and classification',
      'AI-driven conversation summarization',
      'Real-time analytics dashboard',
      'Scalable cloud-native deployment',
    ],
    github: 'https://github.com/JoelChandanshiv/SYNAPSE-AI',
    caseStudy: true,
  },
  {
    slug: 'cloud-native-two-tier',
    title: 'Cloud-Native Two-Tier Application Deployment Platform',
    tagline:
      'Automated CI/CD pipeline for a containerized two-tier application with cloud deployment and observability.',
    description:
      'A cloud-hosted two-tier application showcasing containerization, CI/CD automation, monitoring, and automated deployments to AWS EC2 using Docker, GitHub Actions, Prometheus, and Grafana.',
    domains: ['DevOps', 'Cloud', 'Backend'],
    tech: [
      'FastAPI',
      'HTML/CSS',
      'Docker',
      'Docker Compose',
      'AWS EC2',
      'GitHub Actions',
      'Docker Hub',
      'Prometheus',
      'Grafana',
      'cAdvisor',
    ],
    features: [
      'Two-tier architecture with FastAPI backend and static frontend',
      'Containerized services using Docker and Docker Compose',
      'Automated CI/CD pipeline with GitHub Actions',
      'Application metrics with Prometheus',
      'Infrastructure monitoring using Grafana and cAdvisor',
      'Backend health checks during CI pipeline',
    ],
    github: 'https://github.com/JoelChandanshiv/fusionpact-devops-challenge',
    caseStudy: true,
  },
  {
    slug: 'aws-full-stack-deployment',
    title: 'Production-Grade AWS Full Stack Deployment System',
    tagline:
      'End-to-end AWS-native DevOps pipeline with automated rollback and observability.',
    description:
      'An end-to-end production deployment system showcasing AWS-native DevOps best practices, automated pipelines, and full observability for a containerized full-stack application.',
    domains: ['DevOps', 'Cloud', 'Backend'],
    tech: ['AWS', 'Docker', 'Terraform', 'GitHub Actions', 'CloudWatch', 'IAM'],
    features: [
      'Production-grade AWS deployment',
      'Automated CI/CD with rollback support',
      'Infrastructure-as-Code',
      'Monitoring and alerting setup',
    ],
    github: 'https://github.com/JoelChandanshiv/DevOps-Assignment',
    caseStudy: true,
  },
  {
    slug: 'vprofile-iac',
    title: 'VProfile — Infrastructure-as-Code Social Network Stack',
    tagline:
      'Production-style social networking application demonstrating enterprise multi-tier architecture and distributed systems.',
    description:
      'A multi-tier enterprise Java application stack provisioned entirely through Infrastructure-as-Code. Demonstrates production deployment of a complex distributed system with caching, message queuing, load balancing, and persistent storage layers.',
    domains: ['DevOps', 'Cloud', 'Backend'],
    tech: [
      'Java',
      'Nginx',
      'Tomcat',
      'RabbitMQ',
      'Memcached',
      'MySQL',
      'NFS',
    ],
    features: [
      'Full multi-tier architecture deployment',
      'Infrastructure provisioning via IaC',
      'Message queuing with RabbitMQ',
      'Distributed caching with Memcached',
      'Persistent shared storage with NFS',
    ],
    github: 'https://github.com/JoelChandanshiv/iaac-social-network-stack',
    caseStudy: true,
  },
  {
    slug: 'raspberry-pi-home-server',
    title: 'Raspberry Pi Home Server',
    tagline:
      'Custom self-hosted homelab replicating OpenMediaVault on Raspberry Pi.',
    description:
      'A custom self-hosted home server built on Raspberry Pi, replicating OpenMediaVault-style functionality with file sharing, media streaming, secure remote access, and automated backups. Demonstrates homelab infrastructure and Linux administration skills.',
    domains: ['DevOps', 'IoT', 'Self-Hosted'],
    tech: [
      'Linux',
      'Samba',
      'Jellyfin',
      'Tailscale',
      'Webmin',
      'rsync',
      'Raspberry Pi',
    ],
    features: [
      'Samba file sharing',
      'Jellyfin media streaming server',
      'Tailscale-secured remote access',
      'Web-based administration via Webmin',
      'Automated rsync backup pipeline',
    ],
    caseStudy: true,
  },
];

export const projectFilters: ProjectDomain[] = [
  'DevOps',
  'AI/ML',
  'Cloud',
  'MLOps',
  'IoT',
  'Backend',
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
