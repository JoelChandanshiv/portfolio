export interface Achievement {
  title: string;
  context: string;
  iconName: 'trophy' | 'medal' | 'award' | 'star' | 'certificate' | 'target';
  accent: 'gold' | 'cyan' | 'violet' | 'emerald';
}

export const achievements: Achievement[] = [
  {
    title: 'Winner — Smart India Hackathon 2024',
    context: 'Hardware Edition — National-level innovation competition',
    iconName: 'trophy',
    accent: 'gold',
  },
  {
    title: 'Winner — Hero Powered International Innovation Challenge 2026',
    context: 'International innovation challenge',
    iconName: 'trophy',
    accent: 'gold',
  },
  {
    title: 'Best Project Award — IIC 2025',
    context: 'Manipal University Jaipur',
    iconName: 'award',
    accent: 'cyan',
  },
  {
    title: 'Finalist — Avishkar Hackathon 2.0 2025',
    context: 'Visakhapatnam — Engineering innovation finals',
    iconName: 'target',
    accent: 'violet',
  },
  {
    title: 'International Idea Patent',
    context: 'Smart Automated Biogas Plant (EcoNova)',
    iconName: 'certificate',
    accent: 'emerald',
  },
  {
    title: 'Student of the Year Award',
    context: 'NIE Times of India',
    iconName: 'star',
    accent: 'gold',
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
  { label: 'Hackathon Wins & Placements', value: 6, suffix: '+' },
  { label: 'International Patent', value: 1 },
  { label: 'CGPA', value: 9.0, decimals: 1 },
];
