export const siteConfig = {
  name: 'Joel Chandanshiv',
  shortName: 'Joel Chandanshiv',
  title: 'Joel Chandanshiv — DevOps & AI Systems Engineer',
  description:
    'DevOps Engineer specializing in cloud infrastructure, AI/ML systems, and MLOps. Building scalable, production-grade applications through automation, intelligent systems, and modern engineering practices.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://joelchandanshiv.vercel.app',
  ogImage: '/og-image.png',
  location: 'Maharashtra, India',
  status: 'Open to opportunities',
  email: 'joelchandanshiv@gmail.com',
  social: {
    github: 'https://github.com/JoelChandanshiv',
    linkedin: 'https://www.linkedin.com/in/joel-chandanshiv/',
    medium: 'https://medium.com/@joelchandanshiv',
  },
  mediumFeed: 'https://medium.com/feed/@joelchandanshiv',
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '',
} as const;

export type SiteConfig = typeof siteConfig;
