import { palette } from '../../utils/useTheme';

const { heading, body, accent } = palette;

const projects = [
  {
    slug: 'prayer-times-ae',
    title: 'UAE Prayer Times App',
    description: 'Prayer times with Hijri dates and Qibla direction for UAE cities.',
  },
  {
    slug: 'dewa-bill-estimator',
    title: 'DEWA Bill Estimator',
    description: 'Estimate monthly electricity and water bills with UAE VAT applied.',
  },
];

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-20" data-testid="projects-section">
      <h2 className="font-mono text-sm mb-4" style={{ color: accent }}>
        02. Projects
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: heading }}>
        Things I've Built
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block p-6 rounded-lg border border-neutral-800 transition-colors"
            style={{ color: body }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#262626';
            }}
          >
            <h4 className="text-xl font-bold mb-2" style={{ color: heading }}>
              {project.title}
            </h4>
            <p className="text-sm">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}