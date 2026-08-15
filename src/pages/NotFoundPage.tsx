export function NotFoundPage() {
  return (
    /* Not found page */
    <div
      data-testid="not-found-page"
      className="min-h-[calc(100dvh-15rem)] flex flex-col items-center justify-center gap-4"
    >
      <h1 className="text-6xl font-bold text-heading">
        404
      </h1>
      <p className="text-center text-body">This page does not exist.</p>
      <a
        href="/"
        className="font-mono text-sm text-accent hover:underline"
      >
        Back to home
      </a>
    </div>
  );
}