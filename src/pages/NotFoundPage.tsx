import { Link } from 'react-router';

type NotFoundPageProps = {
  theme: string;
};

export function NotFoundPage({ theme }: NotFoundPageProps) {
  const accent = theme === 'dark' ? '#64ffda' : '#0f766e';
  const heading = theme === 'dark' ? '#ccd6f6' : '#1a1a2e';
  const body = theme === 'dark' ? '#8892b0' : '#495670';

  return (
    <div
      data-testid="not-found-page"
      className="min-h-[calc(100dvh-4rem)] flex flex-col items-center justify-center gap-4"
    >
      <h1 className="text-6xl font-bold" style={{ color: heading }}>
        404
      </h1>
      <p style={{ color: body }}>This page does not exist.</p>
      <Link
        to="/"
        className="font-mono text-sm hover:underline"
        style={{ color: accent }}
      >
        Back to home
      </Link>
    </div>
  );
}