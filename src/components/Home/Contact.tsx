export function Contact() {
  return (
    /* Contact section */
    <section
      id="contact"
      className="mb-20 scroll-mt-20 min-h-[60vh] flex flex-col justify-center"
      data-testid="contact-section"
    >
      <h2 className="font-mono text-sm mb-4 text-center text-accent">
        03. Contact
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-heading">
        Get in Touch
      </h3>
      <p className="max-w-md mx-auto mb-8 text-center text-body">
        Looking for a frontend developer for a role or project? Send me an email and
        I'll get back to you.
      </p>
      <a
        href="mailto:ashiqtech20@gmail.com"
        className="inline-block rounded-lg font-mono text-sm px-6 py-3 border text-accent border-accent bg-transparent hover:bg-accent/50 hover:text-heading transition-colors mx-auto"
      >
        Email Me
      </a>
    </section>
  );
}