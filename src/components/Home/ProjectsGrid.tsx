import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { projects } from '../../utils/projects';

export function ProjectsGrid() {
  return (
    /* Projects section */
    <section id="projects" className="mb-20 md:mb-30 scroll-mt-20" data-testid="projects-section">
      <h2 className="font-mono text-sm mb-4 text-accent">
        02. Projects
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-8 text-heading">
        Things I've Built
      </h3>
      <div className="group/list grid grid-cols-1 gap-6 max-w-xl">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block p-6 rounded-lg border border-card-border text-body bg-transparent hover:border-accent hover:bg-accent/5 transition-[opacity,border-color,background-color] duration-300 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
          >
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-xl font-bold text-heading group-hover:text-accent transition-colors duration-200">
                {project.title}
              </h4>
              <ArrowUpRightIcon
                size={18}
                weight="regular"
                className="translate-y-px transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-0.5 text-heading group-hover:text-accent"
              />
            </div>
            <p className="text-base mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  );
}