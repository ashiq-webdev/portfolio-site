const skills = [
  { name: 'React', status: 'Completed' },
  { name: 'JavaScript', status: 'Completed' },
  { name: 'HTML', status: 'Completed' },
  { name: 'CSS', status: 'Completed' },
  { name: 'Bootstrap', status: 'Completed' },
  { name: 'Git & GitHub', status: 'Completed' },
  { name: 'TypeScript', status: 'Learning' },
  { name: 'Tailwind CSS', status: 'Learning' },
];

export function About() {
  return (
    /* About section */
    <section id="about" className="mb-40 scroll-mt-20" data-testid="about-section">
      <h2 className="font-mono text-sm mb-4 text-accent">
        01. About
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-8 text-heading">
        About Me
      </h3>
      <div className="max-w-2xl space-y-4 mb-12">
        <p className="text-body">
          I'm Ashiq A, a frontend developer. I started learning web development with HTML, CSS and JavaScript. I now build web applications with React.
        </p>
        <p className="text-body">
          I'm targeting frontend developer roles in the UAE and working toward full stack development.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-sm sm:max-w-md lg:max-w-2xl">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="font-mono text-sm px-3 py-2 rounded-lg border text-center max-w-40 text-body border-accent/50"
          >
            {skill.name}
            <span className="block text-xs mt-1 text-accent">
              {skill.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}