import { GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';

export function SocialIcons({ size }: { size: number }) {
  return (
    <>
      <a
        href="https://github.com/ashiq-webdev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-body hover:text-accent transition-colors duration-200"
        aria-label="GitHub profile"
      >
        <GithubLogoIcon size={size} weight="regular" />
      </a>
      <a
        href="https://linkedin.com/in/ashiq-webdev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-body hover:text-accent transition-colors duration-200"
        aria-label="LinkedIn profile"
      >
        <LinkedinLogoIcon size={size} weight="regular" />
      </a>
    </>
  );
}