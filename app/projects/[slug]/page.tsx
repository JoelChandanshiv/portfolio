import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects, getProjectBySlug } from '@/data/projects';
import { DomainTag } from '@/components/ui/domain-tag';
import { TechTag } from '@/components/ui/tech-tag';
import { LinkButton } from '@/components/ui/button';
import { Navigation } from '@/components/navigation/navigation';
import { Footer } from '@/components/footer/footer';
import { PatentRibbon, FlagshipBadge } from '@/components/projects/patent-ribbon';
import { siteConfig } from '@/lib/site-config';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project not found' };

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.tagline,
    },
  };
}

export default function ProjectCaseStudy({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <Navigation />
      <main className="relative pt-32 pb-20">
        <div className="section-container max-w-4xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>

          <div className="relative mt-8">
            {project.patent && <PatentRibbon />}

            <div className="flex flex-wrap items-center gap-2">
              {project.flagship && <FlagshipBadge />}
              {project.domains.map((d) => (
                <DomainTag key={d} domain={d} />
              ))}
            </div>

            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-fg-muted md:text-xl">
              {project.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.github && (
                <LinkButton
                  href={project.github}
                  external
                  variant="primary"
                  size="md"
                  icon={<Github size={14} />}
                  iconPosition="left"
                >
                  View on GitHub
                </LinkButton>
              )}
              {project.liveDemo && (
                <LinkButton
                  href={project.liveDemo}
                  external
                  variant="secondary"
                  size="md"
                  icon={<ExternalLink size={14} />}
                  iconPosition="left"
                >
                  Live Demo
                </LinkButton>
              )}
            </div>
          </div>

          <hr className="my-10 border-[color:var(--border-subtle)]" />

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent-primary)]">
              // Overview
            </h2>
            <p className="mt-4 text-base leading-relaxed text-fg md:text-lg">
              {project.description}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent-primary)]">
              // Tech Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <TechTag key={t} label={t} />
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent-primary)]">
              // Key Features
            </h2>
            <ul className="mt-4 space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[color:var(--accent-tertiary)]"
                  />
                  <span className="text-base text-fg md:text-lg">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 rounded-2xl glass p-6 md:p-8">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--accent-secondary)]">
              // Deep Dive
            </h2>
            <p className="mt-4 text-sm text-fg-muted">
              Detailed architecture diagrams, design tradeoffs, and outcome metrics are being
              prepared for this case study. In the meantime, the repository contains the
              complete implementation including infrastructure code, CI/CD pipelines, and
              documentation.
            </p>
            {project.github && (
              <div className="mt-4">
                <LinkButton
                  href={project.github}
                  external
                  variant="secondary"
                  size="sm"
                  icon={<Github size={14} />}
                  iconPosition="left"
                >
                  Explore repository
                </LinkButton>
              </div>
            )}
          </section>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--border-subtle)] pt-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              <ArrowLeft size={14} />
              All projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-sm text-[color:var(--accent-primary)] transition-transform hover:translate-x-0.5"
            >
              Let's work together →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
