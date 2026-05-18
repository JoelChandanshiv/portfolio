import Parser from 'rss-parser';
import { siteConfig } from './site-config';

export interface MediumPost {
  title: string;
  link: string;
  publishedAt: string;
  excerpt: string;
  readTime: string;
  categories: string[];
}

const FALLBACK_POST: MediumPost = {
  title:
    'MarketPulse: Real-Time Financial Risk Detection Using Streaming Systems & Machine Learning',
  link: siteConfig.social.medium,
  publishedAt: '',
  excerpt:
    'How I engineered a Kafka-driven, ML-powered risk monitoring system that ingests live crypto streams, detects anomalies via Isolation Forest, and ships through a hybrid real-time + batch inference architecture — fully containerized with Jenkins-driven CI/CD.',
  readTime: '8 min read',
  categories: ['Streaming', 'MLOps', 'DevOps'],
};

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .trim();
}

function estimateReadTime(text: string): string {
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export async function fetchMediumPosts(limit = 3): Promise<MediumPost[]> {
  try {
    const parser = new Parser({ timeout: 8000 });
    const feed = await parser.parseURL(siteConfig.mediumFeed);
    const items = (feed.items || []).slice(0, limit).map((item) => {
      const raw =
        (item as { 'content:encoded'?: string })['content:encoded'] ||
        item.content ||
        item.contentSnippet ||
        '';
      const text = stripHtml(raw);
      return {
        title: item.title || 'Untitled',
        link: item.link || siteConfig.social.medium,
        publishedAt: item.pubDate || item.isoDate || '',
        excerpt: text.slice(0, 220) + (text.length > 220 ? '…' : ''),
        readTime: estimateReadTime(text),
        categories: (item.categories || []).slice(0, 3),
      } satisfies MediumPost;
    });

    if (items.length === 0) return [FALLBACK_POST];
    return items;
  } catch {
    return [FALLBACK_POST];
  }
}

export function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
