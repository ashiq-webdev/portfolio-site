type ProjectsPageProps = {
  theme: string;
};

export function ProjectsPage({ theme }: ProjectsPageProps) {
  const heading = theme === 'dark' ? '#ccd6f6' : '#1a1a2e';
  const body = theme === 'dark' ? '#8892b0' : '#495670';

  return (
    <div data-testid="projects-page">
      <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: heading }}>
        Projects
      </h1>
      <p style={{ color: body }}>Project cards will be added in Phase B.</p>
    </div>
  );
}