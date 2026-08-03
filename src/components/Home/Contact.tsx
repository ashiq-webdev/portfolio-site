import { palette } from '../../utils/useTheme';

const { heading, body, accent } = palette;

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 min-h-[60vh] flex flex-col justify-center"
      data-testid="contact-section"
    >
      <h2 className="font-mono text-sm mb-4 text-center" style={{ color: accent }}>
        03. Contact
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center" style={{ color: heading }}>
        Get in Touch
      </h3>
      <p className="max-w-md mx-auto mb-8 text-center" style={{ color: body }}>
        Looking for a frontend developer for a role or project? Send me an email and
        I'll get back to you.
      </p>
      <a
        href="mailto:ashiq@gmail.com"
        className="inline-block font-mono text-sm px-6 py-3 border transition-colors mx-auto"
        style={{ color: accent, borderColor: accent }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(56, 189, 248, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        Say Hello
      </a>
    </section>
  );
}