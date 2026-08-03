type ProjectDetailPageProps = {
  theme: string;
};

export function ProjectDetailPage({ theme }: ProjectDetailPageProps) {
  const heading = theme === 'dark' ? '#ccd6f6' : '#1a1a2e';
  const body = theme === 'dark' ? '#8892b0' : '#495670';

  return (
    <div data-testid="project-detail-page">
      <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: heading }}>
        Project Detail
      </h1>
      <p style={{ color: body }}>Case study content will be added in Phase C.</p>
    </div>
  );
}