import { Hero } from '../components/Home/Hero';
import { About } from '../components/Home/About';
import { ProjectsGrid } from '../components/Home/ProjectsGrid';
import { Contact } from '../components/Home/Contact';

export function HomePage() {
  return (
    /* Content order */
    <div data-testid="home-page">
      <Hero />
      <About />
      <ProjectsGrid />
      <Contact />
    </div>
  );
}