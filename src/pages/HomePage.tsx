export function HomePage() {
  return (
    <div data-testid="home-page" className="min-h-[calc(100vh-4rem)] flex items-center">
      <section className="w-full">
        <p className="font-mono text-[#64ffda] text-sm mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-2">
          Ashiq A
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
          Frontend Developer.
        </h2>
        <p className="text-slate-400 max-w-xl text-lg mb-8">
          I build web apps with React and clean component architecture.
          Learning MERN to become a full stack developer.
        </p>
        <a
          href="/projects"
          className="inline-block border border-[#64ffda] text-[#64ffda] font-mono text-sm px-6 py-3 rounded hover:bg-[#64ffda]/10 transition-colors"
        >
          View my projects
        </a>
      </section>
    </div>
  );
}