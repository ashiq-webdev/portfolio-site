import { Link } from 'react-router';
import { palette } from '../utils/useTheme';

const { heading, body, accent } = palette;

export function NotFoundPage() {
  return (
    <div
      data-testid="not-found-page"
      className="min-h-[calc(100dvh-13rem)] flex flex-col items-center justify-center gap-4"
    >
      <h1 className="text-6xl font-bold" style={{ color: heading }}>
        404
      </h1>
      <p className="text-center" style={{ color: body }}>This page does not exist.</p>
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