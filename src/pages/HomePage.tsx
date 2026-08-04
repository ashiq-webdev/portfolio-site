import { Hero } from '../components/Home/Hero';
import { About } from '../components/Home/About';
import { ProjectsGrid } from '../components/Home/ProjectsGrid';
import { Contact } from '../components/Home/Contact';
import { Footer } from '../components/Home/Footer';

export function HomePage() {
  return (
    <div data-testid="home-page">
      <Hero />
      <About />
      <ProjectsGrid />
      <Contact />
      <Footer />
    </div>
  );
}