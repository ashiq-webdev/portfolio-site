import { palette } from '../../utils/useTheme';

const { heading, body, accent } = palette;

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100dvh-4rem)] flex items-center py-20"
      data-testid="hero-section"
    >
      <div>
        <p className="font-mono text-sm mb-6" style={{ color: accent }}>
          Hi, my name is
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          style={{ color: heading }}
        >
          Aash
        </h1>
        <h2
          className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
          style={{ color: body }}
        >
          Frontend Developer.
        </h2>
        <p className="max-w-xl text-lg mb-4 leading-relaxed" style={{ color: body }}>
          I build web apps with React and clean component architecture.
        </p>
        <p className="max-w-xl text-lg mb-12 leading-relaxed" style={{ color: body }}>
          Learning MERN to ship full stack products.
        </p>
        <a
          href="#projects"
          className="inline-block font-mono text-sm px-6 py-3 border transition-colors"
          style={{ color: accent, borderColor: accent }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          View my work
        </a>
      </div>
    </section>
  );
}