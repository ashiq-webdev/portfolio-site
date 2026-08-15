import { useParams, Link, useNavigate, useLocation } from 'react-router';
import { ArrowLeftIcon, ArrowUpRightIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { projects } from '../utils/projects';

type BackButtonProps = {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

function BackButton({ onClick }: BackButtonProps) {
  return (
    <Link
      to="/#projects"
      onClick={onClick}
      className="group inline-flex items-center gap-0 mb-10 transition-all duration-300 text-accent"
    >
      <span
        className="flex items-center justify-center w-8 h-8 rounded-full border border-accent group-hover:bg-accent/30 transition-colors duration-300"
      >
        <ArrowLeftIcon size={16} weight="regular" />
    </span>
      <span className="overflow-hidden max-w-0 opacity-0 group-hover:max-w-35 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 whitespace-nowrap font-mono text-sm">
        Back to projects
    </span>
  </Link>
  );
}

type CtaButtonProps = {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

function CtaButton({ href, icon, children, className = '' }: CtaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded-lg border text-accent border-accent bg-transparent hover:bg-accent/50 hover:text-heading transition-colors duration-200 ${className}`}
    >
      {icon}
      {children}
  </a>
  );
}

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
        <BackButton onClick={handleBackClick} />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
          Project not found
      </h1>
        <p className="max-w-2xl text-base text-body">
          The project you are looking for does not exist.
      </p>
    </div>
    );
  }

  const isComingSoon = project.overview.length === 0;

  return (
    /* Details of a project page */
    <div className="py-10" data-testid="project-detail-page">
      <BackButton onClick={handleBackClick} />

      {/* Project header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
        {project.title}
    </h1>
      <p className="text-lg mb-8 max-w-2xl text-body">
        {project.description}
    </p>

      {isComingSoon ? (
        <div className="min-h-[50vh] flex items-center justify-center">
          <p className="text-lg text-center text-body">
            This project is in progress. Check back soon.
        </p>
      </div>
      ) : (
        <>
          {/* External links */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <CtaButton
              href={project.githubUrl}
              className="max-sm:max-w-25"
              icon={
                <GithubLogoIcon
                  size={20}
                  weight="regular"
                  className="transition-transform duration-200 group-hover:scale-110"
                />
              }
            >
              Code
          </CtaButton>
            {project.liveUrl && (
              <CtaButton
                href={project.liveUrl}
                className="max-sm:max-w-37.5"
                icon={
                  <ArrowUpRightIcon
                    size={20}
                    weight="regular"
                    className="translate-y-px transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-0.5"
                  />
                }
              >
                Visit Site
            </CtaButton>
            )}
        </div>

          <div className="max-w-2xl">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="font-mono text-sm mb-4 text-body">
                Overview
            </h2>
              {project.overview.map((paragraph, i) => (
                <p key={i} className="text-base mb-4 leading-relaxed text-body">
                  {paragraph}
              </p>
              ))}
          </section>

            {/* Tech Stack */}
            <section className="mb-12">
              <h2 className="font-mono text-sm mb-4 text-body">
                Tech Stack
            </h2>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-base text-body">
                {project.tech.map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="text-accent">▹</span>
                    {tech}
                </li>
                ))}
            </ul>
          </section>

            {/* Features */}
            <section className="mb-12">
              <h2 className="font-mono text-sm mb-4 text-body">
                Features
            </h2>
              <ul className="space-y-3 text-base text-body">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-accent">▹</span>
                    {feature}
                </li>
                ))}
            </ul>
          </section>

            {/* What I've Learned */}
            <section className="mb-12">
              <h2 className="font-mono text-sm mb-4 text-body">
                What I've Learned
            </h2>
              {project.lessons.map((paragraph, i) => (
                <p key={i} className="text-base mb-4 leading-relaxed text-body">
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