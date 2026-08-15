export function Hero() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.history.pushState(null, '', '#projects');
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    /* Hero section */
    <section
      id="home"
      className="mt-24 md:mt-0 mb-40 md:min-h-[calc(100dvh-16rem)] flex items-center"
      data-testid="hero-section"
    >
      <div>
        <p className="font-mono text-sm mb-6 text-accent">
          Hi, my name is
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-heading"
        >
          Ashiq A
        </h1>
        <h2
          className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-body"
        >
          Frontend Developer.
        </h2>
        <p className="max-w-xl text-base mb-4 leading-relaxed text-body">
          I build web apps with React and clean component architecture.
        </p>
        <p className="max-w-xl text-base mb-12 leading-relaxed text-body">
          Learning backend skills to build full stack applications.
        </p>
        <a
          href="#projects"
          onClick={handleClick}
          className="inline-block rounded-lg font-mono text-sm px-6 py-3 border text-accent border-accent bg-transparent hover:bg-accent/50 hover:text-heading transition-colors"
        >
          View my work
        </a>
      </div>
    </section>
  );
}