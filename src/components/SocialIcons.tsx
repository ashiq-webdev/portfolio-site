import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { palette } from '../utils/palette';

const { accent, body } = palette;

export function SocialIcons({ size }: { size: number }) {
  return (
    <>
      <a
        href="https://github.com/ashiq-webdev"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200"
        style={{ color: body }}
        aria-label="GitHub profile"
        onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
        onMouseLeave={(e) => (e.currentTarget.style.color = body)}
      >
        <GithubLogoIcon size={size} weight="regular" />
      </a>
      <a
        href="https://linkedin.com/in/ashiq-webdev"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200"
        style={{ color: body }}
        aria-label="LinkedIn profile"
        onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
        onMouseLeave={(e) => (e.currentTarget.style.color = body)}
      >
        <LinkedinLogoIcon size={size} weight="regular" />
      </a>
    </>
  );
}