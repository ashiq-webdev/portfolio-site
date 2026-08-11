import { palette } from '../../utils/useTheme';

const { heading, body, accent } = palette;

const skills = [
  { name: 'HTML', status: 'Completed' },
  { name: 'CSS', status: 'Completed' },
  { name: 'JavaScript', status: 'Completed' },
  { name: 'Bootstrap', status: 'Completed' },
  { name: 'React', status: 'Completed' },
  { name: 'Git & GitHub', status: 'Completed' },
  { name: 'Node.js', status: 'Learning' },
  { name: 'MongoDB', status: 'Planned' },
];

export function About() {
  return (
    <section id="about" className="mb-40 scroll-mt-20" data-testid="about-section">
      <h2 className="font-mono text-sm mb-4" style={{ color: accent }}>
        01. About
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: heading }}>
        About Me
      </h3>
      <div className="max-w-2xl space-y-4 mb-12">
        <p style={{ color: body }}>
          I'm Aash, a frontend developer. I started learning web development and have
          since built through React, TypeScript, JavaScript, Tailwind CSS, HTML, CSS,
          Bootstrap, and Git.
        </p>
        <p style={{ color: body }}>
          I'm targeting frontend developer roles in the UAE. Next I'll be learning the
          MERN stack to grow into full stack work.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-sm sm:max-w-md lg:max-w-2xl">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="font-mono text-sm px-3 py-2 rounded-lg border text-center max-w-40"
            style={{ color: body, borderColor: 'rgba(56, 189, 248, 0.5)' }}
          >
            {skill.name}
            <span className="block text-xs mt-1" style={{ color: accent }}>
              {skill.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}