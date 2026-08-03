type AboutPageProps = {
  theme: string;
};

export function AboutPage({ theme }: AboutPageProps) {
  const heading = theme === 'dark' ? '#ccd6f6' : '#1a1a2e';
  const body = theme === 'dark' ? '#8892b0' : '#495670';

  return (
    <div data-testid="about-page">
      <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: heading }}>
        About
      </h1>
      <p style={{ color: body }}>About page content will be added in Phase C.</p>
    </div>
  );
}