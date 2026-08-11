import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { palette } from '../../utils/useTheme';
import { projects } from '../../utils/projects';

const { heading, body, accent } = palette;

export function ProjectsGrid() {
  return (
    /* Projects section */
    <section id="projects" className="mb-20 md:mb-30 scroll-mt-20" data-testid="projects-section">
      <h2 className="font-mono text-sm mb-4" style={{ color: accent }}>
        02. Projects
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: heading }}>
        Things I've Built
      </h3>
      <div className="group/list grid grid-cols-1 gap-6 max-w-xl">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block p-6 rounded-lg border transition-[opacity,border-color,background-color] duration-300 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
            style={{ borderColor: '#262626', color: body, backgroundColor: 'transparent' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = accent;
              e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.05)';
              const titleEl = e.currentTarget.querySelector('h4');
              if (titleEl) titleEl.style.color = accent;
              const iconEl = e.currentTarget.querySelector('svg');
              if (iconEl) iconEl.style.color = accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#262626';
              e.currentTarget.style.backgroundColor = 'transparent';
              const titleEl = e.currentTarget.querySelector('h4');
              if (titleEl) titleEl.style.color = heading;
              const iconEl = e.currentTarget.querySelector('svg');
              if (iconEl) iconEl.style.color = heading;
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-xl font-bold transition-colors duration-200" style={{ color: heading }}>
                {project.title}
              </h4>
              <ArrowUpRightIcon
                size={18}
                weight="regular"
                className="translate-y-px transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-0.5"
                style={{ color: heading }}
              />
            </div>
            <p className="text-base mb-4">{project.description}</p>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="inline-block px-3 py-1 rounded-full text-xs font-mono"
                  style={{
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    color: accent,
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                  }}
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