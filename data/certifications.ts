export interface Certification {
  title: string;
  issuer: string;
  year: string;
  category: 'DevOps' | 'Cloud' | 'AI/ML';
}

export const certifications: Certification[] = [
  {
    title: 'Oracle Certified DevOps Professional',
    issuer: 'Oracle',
    year: '2025',
    category: 'DevOps',
  },
  {
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle',
    year: '2025',
    category: 'Cloud',
  },
];
