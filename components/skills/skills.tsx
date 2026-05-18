import { SectionHeading } from '@/components/ui/section-heading';
import { skillCategories } from '@/data/skills';
import { SkillPillar } from './skill-pillar';
import { TechMarquee } from './tech-marquee';

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// Expertise"
          title="Technical Arsenal."
          subtitle="A composable stack spanning DevOps automation, cloud infrastructure, AI/ML systems, and IoT — built for production scale."
          align="left"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <SkillPillar key={cat.id} category={cat} index={i} />
          ))}
        </div>

        <TechMarquee />
      </div>
    </section>
  );
}
