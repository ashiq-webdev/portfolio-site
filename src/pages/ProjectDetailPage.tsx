import { useParams, Link } from 'react-router';
import { palette } from '../utils/useTheme';

const { heading, body, accent } = palette;

export function ProjectDetailPage() {
  const { slug } = useParams();

  return (
    <div data-testid="project-detail-page" className="py-10">
      <Link
        to="/"
        className="font-mono text-sm mb-8 inline-block"
        style={{ color: accent }}
      >
        ← Back to home
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: heading }}>
        {slug || 'Project'}
      </h1>
      <p style={{ color: body }}>
        Case study content will be added here.
      </p>
    </div>
  );
}