type ContactPageProps = {
  theme: string;
};

export function ContactPage({ theme }: ContactPageProps) {
  const heading = theme === 'dark' ? '#ccd6f6' : '#1a1a2e';
  const body = theme === 'dark' ? '#8892b0' : '#495670';

  return (
    <div data-testid="contact-page">
      <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: heading }}>
        Contact
      </h1>
      <p style={{ color: body }}>Contact form will be added in Phase C.</p>
    </div>
  );
}