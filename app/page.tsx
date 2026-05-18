import { Navigation } from '@/components/navigation/navigation';
import { Hero } from '@/components/hero/hero';
import { Terminal } from '@/components/terminal/terminal';
import { About } from '@/components/about/about';
import { Skills } from '@/components/skills/skills';
import { InfrastructureFlow } from '@/components/infrastructure-flow/infrastructure-flow';
import { Projects } from '@/components/projects/projects';
import { Timeline } from '@/components/timeline/timeline';
import { Achievements } from '@/components/achievements/achievements';
import { Insights } from '@/components/insights/insights';
import { Certifications } from '@/components/certifications/certifications';
import { Contact } from '@/components/contact/contact';
import { Footer } from '@/components/footer/footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <div className="pointer-events-none fixed inset-0 -z-20 grid-bg opacity-50" />
        <Hero />
        <Terminal />
        <About />
        <Skills />
        <InfrastructureFlow />
        <Projects />
        <Timeline />
        <Achievements />
        <Insights />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
