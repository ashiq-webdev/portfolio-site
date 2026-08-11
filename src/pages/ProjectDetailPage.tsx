import { useParams, Link, useNavigate, useLocation } from 'react-router';
import { ArrowLeftIcon, ArrowUpRightIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { palette } from '../utils/useTheme';
import { projects } from '../utils/projects';

const { heading, body, accent } = palette;

export function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const project = projects.find((p) => p.slug === slug);

  function handleBackClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const target = document.getElementById('projects');
        if (target) {
          window.history.pushState(null, '', '#projects');
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.history.pushState(null, '', '#projects');
      const target = document.getElementById('projects');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  if (!project) {
    return (
      /* Project not found */
      <div className="py-10" data-testid="project-detail-page">
        <Link
          to="/#projects"
          onClick={handleBackClick}
          className="group inline-flex items-center gap-0 mb-8 transition-all duration-300"
          style={{ color: accent }}
        >
          <span
            className="flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300"
            style={{ borderColor: accent }}
          >
            <ArrowLeftIcon size={16} weight="regular" />
          </span>
          <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-35 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-mono text-sm">
            Back to projects
          </span>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: heading }}>
          Project not found
        </h1>
        <p className="max-w-2xl text-base" style={{ color: body }}>
          The project you are looking for does not exist.
        </p>
      </div>
    );
  }

  const isComingSoon = project.overview.length === 0;

  return (
    /* Details of a project page */
    <div className="py-10" data-testid="project-detail-page">
      {/* Back button — icon circle, text reveals on hover */}
      <Link
        to="/#projects"
        onClick={handleBackClick}
        className="group inline-flex items-center gap-0 mb-10 transition-all duration-300"
        style={{ color: accent }}
      >
        <span
          className="flex items-center justify-center w-8 h-8 rounded-full border group-hover:bg-[#38bdf8]/30 transition-colors duration-300"
          style={{ borderColor: accent }}
        >
          <ArrowLeftIcon size={16} weight="regular" />
        </span>
        <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-35 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-mono text-sm">
          Back to projects
        </span>
      </Link>

      {/* Project header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: heading }}>
        {project.title}
      </h1>
      <p className="text-lg mb-8 max-w-2xl" style={{ color: body }}>
        {project.description}
      </p>

      {isComingSoon ? (
        <div className="min-h-[50vh] flex items-center justify-center">
          <p className="text-lg text-center" style={{ color: body }}>
            This project is in progress. Check back soon.
          </p>
        </div>
      ) : (
        <>
          {/* External links */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 max-sm:max-w-25 font-mono text-sm px-5 py-2.5 rounded-lg border transition-colors duration-200"
              style={{ color: accent, borderColor: accent, backgroundColor: 'transparent' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.5)';
                e.currentTarget.style.color = heading;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = accent;
              }}
            >
              <GithubLogoIcon 
                size={20} 
                weight="regular" 
                className="transition-transform duration-200 group-hover:scale-110"
              />
              Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 max-sm:max-w-37.5 font-mono text-sm px-5 py-2.5 rounded-lg border transition-colors duration-200"
                style={{ color: accent, borderColor: accent, backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.5)';
                  e.currentTarget.style.color = heading;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = accent;
                }}
              >
                <ArrowUpRightIcon 
                  size={20} 
                  weight="regular" 
                  className="translate-y-px transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-0.5"
                />
                Visit Site
              </a>
            )}
          </div>

          <div className="max-w-2xl">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="font-mono text-sm mb-4" style={{ color: body }}>
                Overview
              </h2>
              {project.overview.map((paragraph, i) => (
                <p key={i} className="text-base mb-4 leading-relaxed" style={{ color: body }}>
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Tech Stack */}
            <section className="mb-12">
              <h2 className="font-mono text-sm mb-4" style={{ color: body }}>
                Tech Stack
              </h2>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-base" style={{ color: body }}>
                {project.tech.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span style={{ color: accent }}>▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            {/* Features */}
            <section className="mb-12">
              <h2 className="font-mono text-sm mb-4" style={{ color: body }}>
                Features
              </h2>
              <ul className="space-y-3 text-base" style={{ color: body }}>
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span style={{ color: accent }}>▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* What I've Learned */}
            <section className="mb-12">
              <h2 className="font-mono text-sm mb-4" style={{ color: body }}>
                What I've Learned
              </h2>
              {project.lessons.map((paragraph, i) => (
                <p key={i} className="text-base mb-4 leading-relaxed" style={{ color: body }}>
                  {paragraph}
                </p>
              ))}
            </section>
          </div>
        </>
      )}
    </div>
  );
}