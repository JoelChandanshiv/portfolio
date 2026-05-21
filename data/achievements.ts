export interface Achievement {
  title: string;
  context: string;
  iconName: 'trophy' | 'medal' | 'award' | 'star' | 'certificate' | 'target';
  accent: 'gold' | 'cyan' | 'violet' | 'emerald';
  images?: string[];
}

export const achievements: Achievement[] = [
  {
    title: 'Guinness World Record Holder',
    context: 'Participated in Longest AI Platform Development Hackathon',
    iconName: 'medal',
    accent: 'emerald',
    images: [
      '/images/Image.jpg',
      '/images/1779204099925.jpg',
      '/images/Image (1).jpg'
    ],
  },
  {
    title: 'Winner — Smart India Hackathon 2024',
    context: 'Hardware Edition — National-level innovation competition',
    iconName: 'trophy',
    accent: 'gold',
    images: [
      '/images/20241215_214942.jpg',
      '/images/IMG-20241216-WA0026.jpg',
      '/images/IMG-20241218-WA0001.jpg'
    ],
  },
  {
    title: 'Winner — Hero Powered International Innovation Challenge 2026',
    context: 'International innovation challenge',
    iconName: 'trophy',
    accent: 'gold',
    images: [
      '/images/WhatsApp Image 2026-01-20 at 12.34.56 PM.jpeg',
      '/images/WhatsApp Image 2026-05-20 at 7.10.00 PM.jpeg'
    ],
  },
  {
    title: 'Best Project Award — IIC 2025',
    context: 'Manipal University Jaipur',
    iconName: 'award',
    accent: 'cyan',
    images: [
      '/images/1.jpg',
      '/images/20250909_131154.jpg'
    ],
  },
  {
    title: 'Finalist — Avishkar Hackathon 2.0 2025',
    context: 'Visakhapatnam — Engineering innovation finals',
    iconName: 'target',
    accent: 'violet',
    images: [
      '/images/IMG-20250101-WA0020.jpg',
      '/images/20241228_231532.jpg'
    ],
  },
  {
    title: 'International Idea Patent',
    context: 'Smart Automated Biogas Plant (EcoNova)',
    iconName: 'certificate',
    accent: 'emerald',
    images: [],
  },
  {
    title: 'Student of the Year Award',
    context: 'NIE Times of India',
    iconName: 'star',
    accent: 'gold',
    images: [],
  },
];

export interface StatCounter {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
}

export const stats: StatCounter[] = [
  { label: 'Production Projects', value: 9, suffix: '+' },
  { label: 'Hackathon Wins', value: 7, suffix: '+' },
  { label: 'International Patent', value: 1 },
  { label: 'CGPA', value: 9.0, decimals: 1 },
];