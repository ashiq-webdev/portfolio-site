import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { palette } from '../../utils/palette';

const { body, accent } = palette;

export function Footer() {
  return (
    /* Footer */
    <footer
      className="pt-10 pb-4 flex flex-col items-center gap-4 text-center"
      data-testid="footer"
    >
      <p className="font-mono text-sm" style={{ color: body }}>
        Built with React, TypeScript and Tailwind CSS.
      </p>
      <p className="font-mono text-sm" style={{ color: body }}>
        Built by Ashiq A. <span className="text-base">©</span> 2026
      </p>
      <div className="flex items-center gap-5 mt-2 md:hidden">
        <a
          href="https://github.com/ashiq-webdev"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
          style={{ color: body }}
          aria-label="GitHub profile"
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = body)}
        >
          <GithubLogoIcon size={22} weight="regular" />
        </a>
        <a
          href="https://linkedin.com/in/ashiq-webdev"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
          style={{ color: body }}
          aria-label="LinkedIn profile"
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = body)}
        >
          <LinkedinLogoIcon size={22} weight="regular" />
        </a>
      </div>
    </footer>
  );
}