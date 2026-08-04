import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { palette } from '../../utils/useTheme';

const { body, accent, secondary } = palette;

export function Footer() {
  return (
    <footer
      className="pt-10 pb-5 flex flex-col items-center gap-4 text-center"
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
          href="https://github.com/aash"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
          style={{ color: secondary }}
          aria-label="GitHub profile"
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = secondary)}
        >
          <GithubLogoIcon size={22} weight="regular" />
        </a>
        <a
          href="https://linkedin.com/in/aash"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors"
          style={{ color: secondary }}
          aria-label="LinkedIn profile"
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = secondary)}
        >
          <LinkedinLogoIcon size={22} weight="regular" />
        </a>
      </div>
    </footer>
  );
}