import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div data-testid="not-found-page" className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-[#ccd6f6]">404</h1>
      <p className="text-slate-400">This page does not exist.</p>
      <Link
        to="/"
        className="font-mono text-sm text-[#64ffda] hover:underline"
      >
        Back to home
      </Link>
    </div>
  );
}