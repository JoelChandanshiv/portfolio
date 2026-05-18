import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { SiMedium } from 'react-icons/si';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { fetchMediumPosts, formatDate } from '@/lib/medium-rss';
import { siteConfig } from '@/lib/site-config';

export const revalidate = 3600;

export async function Insights() {
  const posts = await fetchMediumPosts(3);

  return (
    <section id="insights" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// Writing"
          title="Engineering Insights."
          subtitle="Thoughts on DevOps, Cloud Architecture, MLOps, Streaming Systems, and AI Engineering."
          align="left"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Link
              key={post.link + i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-[color:var(--accent-primary)] hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
                  <BookOpen size={11} />
                  Article
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-fg-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent-primary)]"
                />
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-3 line-clamp-4 text-sm text-fg-muted">
                {post.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-fg-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={11} />
                  {post.readTime}
                </span>
                {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={siteConfig.social.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-subtle)] px-5 py-2.5 text-sm font-medium text-fg-muted transition-all hover:-translate-y-0.5 hover:border-[color:var(--accent-primary)] hover:text-[color:var(--accent-primary)]"
          >
            <SiMedium size={14} />
            Read all on Medium
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
