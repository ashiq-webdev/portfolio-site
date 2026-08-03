type HomePageProps = {
  theme: string;
};

const accent = (theme: string) => (theme === 'dark' ? '#64ffda' : '#0f766e');
const heading = (theme: string) => (theme === 'dark' ? '#ccd6f6' : '#1a1a2e');
const body = (theme: string) => (theme === 'dark' ? '#8892b0' : '#495670');

export function HomePage({ theme }: HomePageProps) {
  return (
    <div
      data-testid="home-page"
      className="min-h-[calc(100dvh-4rem)] flex items-center"
    >
      <section className="w-full">
        <p
          className="font-mono text-sm mb-6"
          style={{ color: accent(theme) }}
        >
          Hi, my name is
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          style={{ color: heading(theme) }}
        >
          Aash
        </h1>
        <h2
          className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
          style={{ color: body(theme) }}
        >
          Frontend Developer.
        </h2>
        <p
          className="max-w-xl text-lg mb-4 leading-relaxed"
          style={{ color: body(theme) }}
        >
          I build web apps with React and clean component architecture.
        </p>
        <p
          className="max-w-xl text-lg mb-12 leading-relaxed"
          style={{ color: body(theme) }}
        >
          Learning MERN to become a full stack developer.
        </p>
        <a
          href="/projects"
          className="inline-block font-mono text-sm px-6 py-3 border transition-colors"
          style={{
            color: accent(theme),
            borderColor: accent(theme),
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              theme === 'dark' ? 'rgba(100, 255, 218, 0.1)' : 'rgba(15, 118, 110, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          View my projects
        </a>
      </section>
    </div>
  );
}